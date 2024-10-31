import React from 'react';
import styles from './Marketplace.module.scss';
import CategoriesSection from '@/components/CategoriesSection/CategoriesSection';
import GetPaidBanner from '@/components/GetPaidBanner/GetPaidBanner';
import TrendingProducts from '@/components/TrendingProducts/TrendingProducts';


const items = [
  { id: 1, image: '/images/kylie.png', title: 'KYLIE' },
  { id: 2, image: '/images/pink_friday.png', title: 'PINK FRIDAY' },
  { id: 3, image: '/images/fenty.png', title: 'FENTY' },
];

export default function MarketplacePage() {

  return (
    <div className={styles.marketplace}> {/* Ensure styles.marketplace is applied */}
      <div className={styles.itemsGrid}> 
        {items.map((item) => (
          <div key={item.id} className={styles.item}> 
            <img src={item.image} alt={item.title} className={styles.itemImage} />
          </div>
        ))}
      </div>

      <TrendingProducts />

      <GetPaidBanner />

      <CategoriesSection />
    </div>
  );
}
