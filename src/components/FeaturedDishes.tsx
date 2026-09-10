import { menuData } from "../data/menu";
import MenuCard from "./MenuCard";

export default function FeaturedDishes() {
  // Grab 3 popular items to feature
  const featuredItems = menuData.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Dishes
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Our most loved creations.</p>
          </div>
          <a href="#menu" className="hidden sm:block text-brand-accent font-semibold hover:underline">
            View full menu &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <a href="#menu" className="text-brand-accent font-semibold hover:underline">
            View full menu &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}