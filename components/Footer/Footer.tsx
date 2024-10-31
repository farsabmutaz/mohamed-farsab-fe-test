// app/components/Footer.tsx
"use client";

import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoSection}>
                <Image src="/icons/videoshop.svg" alt="Videoshops" width={150} height={40} />
                <div className={styles.socialSection}>
                    <Link href="https://www.linkedin.com" target="_blank">
                        <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    </Link>
                    <Link href="https://www.facebook.com" target="_blank">
                        <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank">
                        <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
                    </Link>
                    <Link href="https://www.youtube.com" target="_blank">
                        <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
                    </Link>
                </div>
            </div>

            <div className={styles.linksSection}>
                <div className={styles.linkGroup}>
                    <h4>Company</h4>
                    <Link href="/about">About Us</Link>
                    <Link href="/create-shop">Create a Shop</Link>
                    <Link href="/media">Media</Link>
                </div>

                <div className={styles.linkGroup}>
                    <h4>Support</h4>
                    <Link href="/help-center">Help Center</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/for-brands">For Brands</Link>
                </div>
            </div>



            <div className={styles.bottomSection}>
                <p>&copy; 2024 NOWwith Ventures Inc. All Rights Reserved.</p>

                <div className={styles.legalLinks}>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-of-service">Terms of Service</Link>
                </div>

            </div>
        </footer>
    );
}
