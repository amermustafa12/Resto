import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-light dark:bg-brand-dark py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 block">
              Resto
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Delivering exceptional culinary experiences with fresh ingredients and a passion for great food.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link href="#menu" className="text-gray-600 dark:text-gray-400 hover:text-brand-accent transition-colors">Menu</Link></li>
              <li><Link href="#reservation" className="text-gray-600 dark:text-gray-400 hover:text-brand-accent transition-colors">Reservations</Link></li>
              <li><Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Social</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-accent transition-colors">Twitter</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} Resto. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-500">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}