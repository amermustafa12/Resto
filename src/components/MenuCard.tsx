import Image from "next/image";
import { MenuItem } from "@/data/menu";

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-900/95 px-3 py-1 rounded-full text-xs font-semibold text-brand-accent backdrop-blur-sm shadow-sm">
          {item.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
            {item.name}
          </h3>
          <span className="text-brand-accent font-bold whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </article>
  );
}