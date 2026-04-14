import React from "react";
import { ChevronDown, Filter, X } from "lucide-react";

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

export const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  onClearFilters,
}: ProductFiltersProps) => {
  return (
    <aside className="w-full md:w-64 space-y-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Filter size={18} /> Filters
          </h3>
          {(selectedCategory || sortBy !== "default") && (
            <button
              onClick={onClearFilters}
              className="text-xs text-gray-400 hover:text-black transition-colors flex items-center gap-1"
            >
              <X size={12} /> Clear
            </button>
          )}
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-500">Category</h4>
            <div className="space-y-2">
              <button
                onClick={() => onCategoryChange(null)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  selectedCategory === null
                    ? "bg-black text-white font-medium"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all capitalize ${
                    selectedCategory === category
                      ? "bg-black text-white font-medium"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Sorting */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-500">Sort By</h4>
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all cursor-pointer"
              >
                <option value="default">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to Array</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400 group-hover:text-black">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
