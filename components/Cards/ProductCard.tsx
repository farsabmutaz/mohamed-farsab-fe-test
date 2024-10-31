import React from "react";
import { Product } from "@/models/Product";
import styles from "./ProductCard.module.scss";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img
                    src={product.locales[0].variants[0].images[0].url}
                    alt={product.locales[0].variants[0].title}
                    className={styles.productImage}
                />
                <span className={styles.commission}>
                    {product.commissionRate}% Commission
                </span>
                <img
                    src="/get-paid-same-day.png"
                    className={styles.getPaidLogo}
                    alt=""
                />
            </div>
            <div className={styles.productInfo}>
                <p className={styles.brandName}>{product.brand.name}</p>
                <h3 className={styles.productTitle}>
                    {product.locales[0].variants[0].title}
                </h3>
                <p className={styles.options}>
                    {product.locales[0].variants[0].options.length ?? 0} Options
                </p>
                <p className={styles.price}>
                    ${product.locales[0].variants[0].price.toFixed(2)}
                </p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.shelfButton}>Add to Shelf</button>
                <button className={styles.bagButton}>Add to Bag</button>
            </div>
        </div>
    );
}
