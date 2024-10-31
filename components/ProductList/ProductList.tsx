import React, { useEffect, useState } from "react";
import { Product } from "@/models/Product";
import styles from "./ProductList.module.scss";
import FilterComponent from "../Filter/FilterComponent";
import ProductCard from "../Cards/ProductCard";

type Props = {
    initialProducts: Product[] | null; // Allow for null
    setFilteredProducts: (products: Product[]) => void;
};

export default function ProductList({ initialProducts = [], setFilteredProducts }: Props) {
    const [filteredProducts, setLocalFilteredProducts] = useState<Product[]>(initialProducts ?? []);

    useEffect(() => {
        setFilteredProducts(filteredProducts ?? []);
    }, [filteredProducts, setFilteredProducts]);

    const handleFilterChange = (selectedCategories: string[]) => {
        const newFilteredProducts = selectedCategories.length === 0
            ? initialProducts ?? [] // Ensure it's an array
            : (initialProducts ?? []).filter((product) =>
                product.categories?.some((category) => selectedCategories.includes(category?.name ?? ""))
            );
        setLocalFilteredProducts(newFilteredProducts);
    };

    return (
        <div className={styles.productListContainer}>
            <FilterComponent
                categories={Array.from(new Set((initialProducts ?? []).flatMap((p) => p.categories ?? [])))}
                onFilterChange={handleFilterChange}
            />
            {/* <div>
                {(filteredProducts ?? []).length > 0 ? (
                    (filteredProducts ?? []).map((product) => (
                        <ProductCard key={product?.id ?? Math.random()} product={product} />
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div> */}
        </div>
    );
}
