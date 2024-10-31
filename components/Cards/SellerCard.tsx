import React from "react";
import { User } from "@/models/User";
import styles from "./SellerCard.module.scss";

type Props = { seller: User };

export default function SellerCard({ seller }: Props) {
  return (
    <div className={styles.sellerCard}>
      <img src={seller.profileImage} alt={`${seller.firstName} ${seller.lastName}`} className={styles.image} />
      <div className={styles.overlay}>
        <h3 className={styles.sellerName}>{seller.firstName} {seller.lastName}</h3>
      </div>
    </div>
  );
}
