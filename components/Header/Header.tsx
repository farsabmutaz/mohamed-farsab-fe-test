"use client";
import React from "react";
import styles from "./Header.module.scss";
import { useSearch } from "@/context/SearchContext";
import { useRouter } from "next/navigation";

export default function Header() {
    const { searchQuery, setSearchQuery } = useSearch();
    const router = useRouter();

    const handleNavClick = (query: string) => {
        setSearchQuery(query);
        router.push("/brands-products-seller");
    };

    const handleLogoClick = () => {
        setSearchQuery("");
        router.push("/marketplace");
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img
                    className={styles.icon}
                    aria-label="Menu"
                    src={"/icons/menu.svg"}
                    alt={"menu"}
                />
                <img
                    src="/icons/videoshop.svg"
                    alt="logo"
                    onClick={handleLogoClick} // Set up onClick to go to home
                    className={styles.logo}
                />
                <div className={styles.iconContainer}>
                    <img
                        className={styles.icon}
                        aria-label="Favorites"
                        src={"/icons/favorite.svg"}
                        alt={"favorites"}
                    />
                    <img
                        className={styles.icon}
                        aria-label="Shopping Bag"
                        src={"/icons/shopping-bag.svg"}
                        alt={"shopping bag"}
                    />
                </div>
            </div>

            <div className={styles.searchContainer}>
                <img
                    className={styles.searchIcon}
                    aria-label="Search"
                    src={"/icons/search.svg"}
                    alt={"search"}
                />
                <input
                    type="text"
                    placeholder="Search by Brand, Product, or Category"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
            </div>

            <nav className={styles.navbar}>
                <button className={styles.dropdownButton}>Marketplace</button>
                <ul className={styles.navLinks}>
                    <li onClick={() => handleNavClick("Brands A-Z")}>Brands A-Z</li>
                    <li onClick={() => handleNavClick("Makeup")}>Makeup</li>
                    <li onClick={() => handleNavClick("Hair")}>Hair</li>
                    <li onClick={() => handleNavClick("Skincare")}>Skincare</li>
                    <li onClick={() => handleNavClick("Nails")}>Nails</li>
                    <li onClick={() => handleNavClick("Tools & Brushes")}>Tools & Brushes</li>
                    <li onClick={() => handleNavClick("Fragrance")}>Fragrance</li>
                    <li onClick={() => handleNavClick("Body")}>Body</li>
                </ul>
            </nav>
        </header>
    );
}
