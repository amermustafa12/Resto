import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-light dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/images/restaurant.jpg"
              alt="Restaurant interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Made with passion,<br />
                served with care.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Since our opening, we have been dedicated to providing an exceptional dining experience. We source the freshest local ingredients and prepare every dish from scratch, ensuring that every bite tells a story of quality and passion.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div>
                <p className="text-3xl font-bold text-brand-accent mb-1">10+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-accent mb-1">25+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Dishes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-accent mb-1">4.9</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Rating</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}