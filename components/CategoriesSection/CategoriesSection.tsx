// app/components/CategoriesSection.tsx
"use client";

import React from "react";
import styles from "./CategoriesSection.module.scss";

const categories = [
  { name: "BEAUTY", image: "/categories-section/beauty.jpg" },
  { name: "LIPS", image: "/categories-section/lips.jpg" },
  { name: "EYES", image: "/categories-section/eyes.jpg" },
  { name: "SKIN", image: "/categories-section/skin.jpg" },
  { name: "BROWS", image: "/categories-section/brows.jpg" },
  { name: "MAKEUP", image: "/categories-section/makeup.jpg" },
  { name: "HAIR", image: "/categories-section/hair.jpg" },
  { name: "BEAUTY TOOLS", image: "/categories-section/beauty-tools.jpg" },
];

const featuredCategories = [
  {
    title: "LIP COMBOS WE'RE LOVING RIGHT NOW",
    image: "/categories-section/lip-combos.jpg",
  },
  {
    title: "OUR FAVORITE LIGHTWEIGHT MAKEUP ROUTINE",
    image: "/categories-section/makeup-routine.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <div className={styles.categoriesSection}>
      <h3 className={styles.subTitle}>SHOP & SELL</h3>
      <h2 className={styles.title}>WHAT YOU LOVE</h2>
      
      {/* Grid of Smaller Categories */}
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.name} className={styles.categoryCard}>
            <img src={category.image} alt={category.name} className={styles.image} />
            <div className={styles.overlay}>
              {/* <span className={styles.categoryName}>{category.name}</span> */}
            </div>
          </div>
        ))}
      </div>
      
      {/* Featured Categories Section */}
      <div className={styles.featuredGrid}>
        {featuredCategories.map((featured) => (
          <div key={featured.title} className={styles.featuredCard}>
            <img src={featured.image} alt={featured.title} className={styles.featuredImage} />
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <button className={styles.viewProductsButton}>VIEW PRODUCTS</button>
          </div>
        ))}
      </div>
    </div>
  );
}
