import React, { useState } from "react";
import styles from "./FilterComponent.module.scss";

type Category = {
    name: string;
    index: number;
};

type Props = {
    categories: Category[];
    onFilterChange: (selectedCategories: string[]) => void;
};

export default function FilterComponent({ categories = [], onFilterChange }: Props) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState(8);

    const uniqueCategories = categories.filter(
        (category, index, self) =>
            index === self.findIndex((c) => c.name === category?.name)
    );

    const handleCategoryToggle = (categoryName: string) => {
        const updatedCategories = selectedCategories.includes(categoryName)
            ? selectedCategories.filter((name) => name !== categoryName)
            : [...selectedCategories, categoryName];
        setSelectedCategories(updatedCategories);
        onFilterChange(updatedCategories);
    };

    const loadMoreCategories = () => {
        setVisibleCount((prevCount) => prevCount + 8);
    };

    return (
        <div className={styles.filterComponent}>
            <h3>Category</h3>
            {uniqueCategories?.slice(0, visibleCount).map((category) => (
                <label key={`filter-${category?.name}`} className={styles.categoryLabel}>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(category?.name ?? "")}
                        onChange={() => handleCategoryToggle(category?.name ?? "")}
                    />
                    {category?.name ?? ""}
                </label>
            ))}
            {visibleCount < uniqueCategories.length && (
                <button className={styles.loadMore} onClick={loadMoreCategories}>
                    Load More
                </button>
            )}
        </div>
    );
}
