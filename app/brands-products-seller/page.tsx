"use client";

import React, { useState, useEffect } from "react";
import { fetchAll } from "@/utils/fetchAll";
import { Product } from "@/models/Product";
import { Merchant } from "@/models/Merchant";
import { User } from "@/models/User";
import styles from './BrandsProductsSeller.module.scss';
import { useSearch } from "@/context/SearchContext";
import BrandCard from "@/components/Cards/BrandCard";
import ProductCard from "@/components/Cards/ProductCard";
import SellerCard from "@/components/Cards/SellerCard";
import ProductList from "@/components/ProductList/ProductList";

export default function BrandsProductsSeller() {
    const { searchQuery } = useSearch();
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [sellers, setSellers] = useState<User[]>([]);
    const [brands, setBrands] = useState<Merchant[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
    const [productsPerPage, setProductsPerPage] = useState(9);

    // Carousel controls
    const [currentSellerIndex, setCurrentSellerIndex] = useState(0);
    const sellersPerPage = 3;

    const totalPages = Math.ceil(sellers.length / sellersPerPage);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const { products, merchants, users } = await fetchAll(searchQuery ?? "");
                setProducts(products ?? []);
                setFilteredProducts(products ?? []);
                setDisplayedProducts((products ?? []).slice(0, productsPerPage));
                setSellers(users ?? []);
                setBrands(merchants ?? []);
            } catch (err) {
                setError((err as Error)?.message ?? "An error occurred");
            }
        }
        fetchData();
    }, [searchQuery]);

    useEffect(() => {
        setDisplayedProducts(filteredProducts.slice(0, productsPerPage));
    }, [filteredProducts, productsPerPage]);

    const loadMoreProducts = () => {
        setDisplayedProducts(filteredProducts.slice(0, displayedProducts.length + productsPerPage));
    };


    const handlePrevSeller = () => {
        setCurrentPageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNextSeller = () => {
        setCurrentPageIndex((prevIndex) =>
            Math.min(prevIndex + 1, totalPages - 1)
        );
    };


    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.pageContainer}>
            <h1>Brands, Sellers & Products</h1>

            <div className={styles.mainLayout}>
                <aside className={`${styles.filters} ${styles.flex1}`}>
                    <ProductList
                        initialProducts={products ?? []}
                        setFilteredProducts={setFilteredProducts}
                    />
                </aside>

                <div className={`${styles.mainContent} ${styles.flex2}`}>
                    {/* Sellers Carousel */}
                    <section className={styles.sellers}>
                        <div className={styles.centerSpace}>
                            <h2>Sellers</h2>
                            <p>{sellers?.length ?? 0} Results</p>
                        </div>

                        <div className={styles.sellerContainer}>
                            {sellers
                                .slice(currentPageIndex * sellersPerPage, (currentPageIndex + 1) * sellersPerPage)
                                .map((seller, index) => (
                                    <div key={`seller-${seller?.id ?? index}`} className={styles.sellerSlide}>
                                        <SellerCard seller={seller} />
                                    </div>
                                ))}
                        </div>

                        { sellers?.length && <div className={styles.navigationButtons}>
                            <button
                                className={styles.prevButton}
                                onClick={handlePrevSeller}
                                disabled={currentPageIndex === 0}
                            >
                                &lt;
                            </button>
                            <button
                                className={styles.nextButton}
                                onClick={handleNextSeller}
                                disabled={currentPageIndex === totalPages - 1}
                            >
                                &gt;
                            </button>

                        </div>}
                    </section>

                    <section className={styles.brands}>
                        <div className={styles.centerSpace}>
                            <h2>Brands</h2>
                            <p>{brands?.length ?? 0} Results</p>
                        </div>
                        <div className={styles.brandContainer}>
                            {brands?.map((brand) => (
                                <BrandCard key={brand?.id ?? Math.random()} brand={brand} />
                            )) ?? null}
                        </div>
                    </section>

                    <section className={styles.products}>
                        <div className={styles.centerSpace}>
                            <h2>Products</h2>
                            <p>{products?.length ?? 0} Results</p>
                        </div>
                        <div className={styles.productGrid}>
                            {displayedProducts?.map((product) => (
                                <ProductCard key={product?.id ?? Math.random()} product={product} />
                            )) ?? null}
                        </div>
                        {displayedProducts?.length < (products?.length ?? 0) && (
                            <div className={styles.center}>
                                <button className={styles.loadMore} onClick={loadMoreProducts}>
                                    Load More
                                </button>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
