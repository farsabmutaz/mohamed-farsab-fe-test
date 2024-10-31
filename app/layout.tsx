// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { SearchProvider } from "../context/SearchContext";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export const metadata: Metadata = {
    title: "Videoshops",
    description: "Created using Next",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <SearchProvider>
                    <Header />
                    <Breadcrumb />

                    {children}
                    <Footer />
                </SearchProvider>
            </body>
        </html>
    );
}
