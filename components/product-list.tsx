"use client";

import Stripe from "stripe";
import { ProductCard } from "./product-card";
import { useState, useMemo } from "react";
import { ProductFilters } from "./product-filters";
import { Search } from "lucide-react";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("default");

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const cats = new Set<string>();
    products.forEach((product) => {
      const category = product.metadata?.category;
      if (category) cats.add(category);
    });
    return Array.from(cats).sort();
  }, [products]);

  // Extract unique brands dynamically
  const brands = useMemo(() => {
    const bnds = new Set<string>();
    products.forEach((product) => {
      const brand = product.metadata?.brand;
      if (brand) bnds.add(brand);
    });
    return Array.from(bnds).sort();
  }, [products]);

  // Combine filtering and sorting logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((product) => {
      // Search filter
      const term = searchTerm.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(term);
      const descriptionMatch = product.description
        ? product.description.toLowerCase().includes(term)
        : false;
      const matchesSearch = nameMatch || descriptionMatch;

      // Category filter
      const matchesCategory = selectedCategory
        ? product.metadata?.category === selectedCategory
        : true;

      // Brand filter
      const matchesBrand = selectedBrand
        ? product.metadata?.brand === selectedBrand
        : true;

      return matchesSearch && matchesCategory && matchesBrand;
    });

    // Sorting
    result.sort((a, b) => {
      const priceA = (a.default_price as Stripe.Price)?.unit_amount || 0;
      const priceB = (b.default_price as Stripe.Price)?.unit_amount || 0;

      switch (sortBy) {
        case "price-asc":
          return priceA - priceB;
        case "price-desc":
          return priceB - priceA;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0; // Maintain original order (Newest/Stripe default)
      }
    });

    return result;
  }, [products, searchTerm, selectedCategory, selectedBrand, sortBy]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSortBy("default");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar Filters */}
      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        brands={brands}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onClearFilters={handleClearFilters}
      />

      {/* Main Content */}
      <div className="flex-1 w-full">
        <div className="mb-8 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search our premium collection..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all text-sm"
          />
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-500 mb-2">No products found matches your criteria.</p>
            <button
              onClick={handleClearFilters}
              className="text-black font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
