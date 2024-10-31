// app/components/GetPaidBanner.tsx
import React from "react";
import styles from "./GetPaidBanner.module.scss";

const GetPaidBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <img src="/get-paid-same-day-peal.svg" alt="Get Paid Icon" className={styles.leftIcon} />
        
        <div className={styles.textContainer}>
          <h2>SHOP & SHARE ANY PRODUCT</h2>
          <h2>GET PAID SAME DAY ON SALES</h2>
          <p>Look for the badge.</p>
        </div>
        
        <img src="/skin.png" alt="Skin" className={styles.rightImage} />
      </div>
    </div>
  );
};

export default GetPaidBanner;
