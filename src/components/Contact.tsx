export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Visit Us</h2>
          <p className="text-gray-600 dark:text-gray-400">We look forward to welcoming you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
              📍
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Address</h3>
            <p className="text-gray-600 dark:text-gray-400">123 Culinary Boulevard<br />Amman, Jordan</p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
              🕒
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Opening Hours</h3>
            <p className="text-gray-600 dark:text-gray-400">Mon - Fri: 11:00 AM - 10:00 PM<br />Sat - Sun: 10:00 AM - 11:00 PM</p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
              📞
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400">info@restodining.com<br />+962 6 123 4567</p>
          </div>
        </div>
      </div>
    </section>
  );
}