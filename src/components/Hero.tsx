import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Full-Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Minimalist dark plate setting"
          fill
          className="object-cover object-right md:object-center"
          priority
          quality={90}
        />
        {/* Subtle dark overlay to ensure text is always readable */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      </div>

      {/* Hero Content (Centered) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-16">
        <div className="animate-fade-in-up space-y-8 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-brand-accent font-medium text-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
            Fresh • Local • Delicious
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Good food.<br />
            <span className="text-brand-accent">Good mood.</span>
          </h1>
          
          <p className="text-lg text-gray-200 leading-relaxed drop-shadow-md">
            Fresh ingredients, carefully prepared dishes, and a dining experience worth remembering. Join us for a taste of perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="#menu" className="px-8 py-4 bg-brand-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Explore Menu
            </Link>
            <Link href="#reservation" className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors backdrop-blur-sm">
              Book a Table
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}