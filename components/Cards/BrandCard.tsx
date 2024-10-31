import React from "react";
import { Merchant } from "@/models/Merchant";
import styles from "./BrandCard.module.scss";

type Props = { brand: Merchant };

export default function BrandCard({ brand }: Props) {
  return (
    <div className={styles.brandCard}>
      <div className={styles.imageContainer}>
        <img src={brand.profileImage} alt={brand.name} className={styles.image} />
        <div className={styles.overlay}>
          <h3 className={styles.brandName}>{brand.name}</h3>
        </div>
        {brand.productBadges?.includes("same-day-pay") && (
          <div className={styles.badge}>
            <img src="/get-paid-same-day.png" alt="Same Day Pay Badge" />
          </div>
        )}
      </div>
    </div>
  );
}
