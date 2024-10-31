"use client";

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import styles from './Breadcrumb.module.scss';
import { useSearch } from '@/context/SearchContext';

export default function Breadcrumb() {
  const params = useParams();
  const pathname = usePathname();
  const { searchQuery } = useSearch();

  // Determine the breadcrumb text based on the route
  let breadcrumbText;
  let boldText;

  if (pathname === '/marketplace') {
    breadcrumbText = 'My Shop';
    boldText = 'Marketplace';
  } else if (pathname?.startsWith('/brands-products-seller')) {
    const capitalizedValue = Array.isArray(searchQuery)
      ? searchQuery[0].charAt(0).toUpperCase() + searchQuery[0].slice(1)
      : searchQuery
      ? searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)
      : '';
    breadcrumbText = 'Home';
    boldText = capitalizedValue;
  }

  return (
    <p className={styles.breadcrumb}>
      {breadcrumbText} / <strong>{boldText}</strong>
    </p>
  );
}
