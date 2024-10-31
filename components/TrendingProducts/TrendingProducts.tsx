"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./TrendingProducts.module.scss";
import { Navigation } from "swiper/modules";
import { fetchProducts } from "@/utils/fetchProducts";
import { Product } from "@/models/Product";
import ProductCard from "../Cards/ProductCard";

export default function TrendingProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const swiperRef = useRef<any>(null); // Reference for Swiper instance

  useEffect(() => {
    async function getTrendingProducts() {
      try {
        const products = await fetchProducts("");
        setProducts(products);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    getTrendingProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.trendingProducts}>
      <h2 className={styles.title}>Trending Products</h2>

      {/* External navigation buttons */}
      <div className={styles.navigationButtons}>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={styles.prevButton}
        >
          &#10094;
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={styles.nextButton}
        >
          &#10095;
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Attach swiper instance to ref
        }}
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        navigation={false} // Disable default navigation to use external buttons
        style={{ margin: "2rem 4rem" }}

        // Responsive breakpoints
        breakpoints={{
          1024: {
            slidesPerView: 4, // Desktop and large screens
          },
          768: {
            slidesPerView: 3, // Tablets
          },
          640: {
            slidesPerView: 2, // Small tablets and larger phones
          },
          0: {
            slidesPerView: 1, // Mobile phones
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
