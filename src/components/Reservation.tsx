"use client";

import { useState } from "react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", date: "", time: "", guests: "2" });
    }, 1000);
  };

  return (
    <section id="reservation" className="py-20 bg-brand-light dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Reserve a Table</h2>
          <p className="text-gray-600 dark:text-gray-400">Join us for an unforgettable dining experience.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input required type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-transparent dark:text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input required type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-transparent dark:text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
              <input required type="date" id="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-transparent dark:text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guests" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Guests</label>
              <select id="guests" value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})} className="border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-transparent dark:text-white">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4+ People</option>
              </select>
            </div>
          </div>
          
          <button type="submit" className="w-full bg-brand-accent text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors">
            {status === "success" ? "Table Reserved!" : "Confirm Reservation"}
          </button>
        </form>
      </div>
    </section>
  );
}