"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    shipmentType: "",
    cargoType: "",
    weight: "",
    dimensions: "",
    specialRequirements: "",
    desiredPickupDate: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Request a Quote</h1>
        <Link
          href="/portal"
          className="flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Quote Request Submitted!</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-lg mx-auto">
              Thank you for your quote request. Our team will review your requirements and get back to you within 24 hours with a competitive quote tailored to your needs.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                New Quote
              </button>
              <Link
                href="/portal"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Return to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              Fill out the form below to request a shipping quote. Our team will review your requirements and provide a competitive price.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="origin" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Origin Location
                  </label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    placeholder="City, Country"
                    required
                    value={formData.origin}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:border-slate-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Destination Location
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    placeholder="City, Country"
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:border-slate-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="shipmentType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Shipment Type
                  </label>
                  <select
                    id="shipmentType"
                    name="shipmentType"
                    required
                    value={formData.shipmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:border-slate-600 dark:text-white"
                  >
                    <option value="">Select Type</option>
                    <option value="ocean_fcl">Ocean Freight - Full Container</option>
                    <option value="ocean_lcl">Ocean Freight - Shared Container</option>
                    <option value="air_standard">Air Freight - Standard</option>
                    <option value="air_express">Air Freight - Express</option>
                    <option value="road">Road Freight</option>
                    <option value="rail">Rail Freight</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="cargoType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Cargo Type
                  </label>
                  <select
                    id="cargoType"
                    name="cargoType"
                    required
                    value={formData.cargoType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:border-slate-600 dark:text-white"
                  >
                    <option value="">Select Type</option>
                    <option value="general">General Cargo</option>
                    <option value="hazardous">Hazardous Materials</option>
                    <option value="perishable">Perishable Goods</option>
                    <option value="fragile">Fragile Items</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="machinery">Machinery & Equipment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Total Weight (kg)
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    placeholder="Approximate weight in kg"
                    required
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:border-slate-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="dimensions" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Dimensions
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    placeholder="LxWxH in cm or container size"
                    required
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:border-slate-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="desiredPickupDate" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Desired Pickup Date
                  </label>
                  <input
                    type="date"
                    id="desiredPickupDate"
                    name="desiredPickupDate"
                    required
                    value={formData.desiredPickupDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:border-slate-600 dark:text-white"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="specialRequirements" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Special Requirements or Notes
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    rows={4}
                    placeholder="Any special handling instructions, delivery requirements, or additional information"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:border-slate-600 dark:text-white"
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : "Request Quote"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
