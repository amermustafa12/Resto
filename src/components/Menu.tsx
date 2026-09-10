"use client";

import { useState } from "react";
import Image from "next/image";
import { menuData } from "../data/menu";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", "Starters", "Main", "Desserts", "Drinks"];

  const filteredMenu = activeCategory === "All" 
    ? menuData 
    : menuData.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Menu</h2>
          <p className="text-gray-600 dark:text-gray-400">Discover our carefully crafted dishes.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === cat
                  ? "bg-brand-accent text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.name}</h3>
                  <span className="text-brand-accent font-semibold">${item.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}