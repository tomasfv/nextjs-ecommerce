import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-full md:w-64 bg-white p-3 md:p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300">
      <div className="flex flex-col">
        {/* Toggle Header for Mobile */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-base md:text-lg font-bold md:cursor-default"
          >
            <Filter size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Filters</span>
            <ChevronDown
              size={16}
              className={`md:hidden transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {(selectedCategory || sortBy !== "default") && (
            <button
              onClick={onClearFilters}
              className="text-xs text-gray-400 hover:text-black transition-colors flex items-center gap-1"
            >
              <X size={12} /> Clear
            </button>
          )}
        </div>

        {/* Filters Content - Collapsible on Mobile */}
        <div className={`mt-4 space-y-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] opacity-100 mb-2" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          } md:block md:mt-8`}>
          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-500">Category</h4>
            <div className="space-y-2">
              <button
                onClick={() => {
                  onCategoryChange(null);
                  setIsOpen(false); // Close on mobile after selection
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${selectedCategory === null
                  ? "bg-black text-white font-medium"
                  : "hover:bg-gray-100 text-gray-600"
                  }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onCategoryChange(category);
                    setIsOpen(false); // Close on mobile after selection
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all capitalize ${selectedCategory === category
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
            <div className="relative group text-black">
              <select
                value={sortBy}
                onChange={(e) => {
                  onSortChange(e.target.value);
                  setIsOpen(false); // Close on mobile after selection
                }}
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-black py-2.5 px-4 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all cursor-pointer"
              >
                <option value="default">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-black group-hover:text-black">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
