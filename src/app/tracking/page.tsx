"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TrackingDetails from "../../components/TrackingDetails";

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [trackingResult, setTrackingResult] = useState<null | any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }
    
    setError("");
    setIsSearching(true);
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo: pattern-match demo tracking numbers
      if (trackingNumber.toUpperCase().startsWith("TS")) {
        // Create a synthetic shipment based on tracking number
        const shipmentData = generateShipmentData(trackingNumber);
        setTrackingResult(shipmentData);
        setError("");
      } else {
        setTrackingResult(null);
        setError("Tracking number not found. For demo, try using TS12345678.");
      }
    } catch (err) {
      setError("Error searching for tracking number. Please try again.");
      setTrackingResult(null);
    } finally {
      setIsSearching(false);
    }
  };

  // Generate realistic demo data based on the tracking number
  const generateShipmentData = (trackingNumber: string) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    
    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    
    // Format dates properly
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    
    return {
      trackingNumber: trackingNumber.toUpperCase(),
      status: "In Transit",
      origin: "Shanghai, China",
      destination: "Los Angeles, USA",
      estimatedDelivery: formatDate(dayAfterTomorrow),
      shipper: "ABC Electronics Ltd",
      recipient: "XYZ Distribution Inc",
      service: "Express Freight",
      weight: "245 kg",
      pieces: "3",
      updates: [
        {
          timestamp: formatDate(threeDaysAgo),
          location: "Shanghai Warehouse, China",
          status: "Shipment picked up",
          details: "Package received at origin facility"
        },
        {
          timestamp: formatDate(twoDaysAgo),
          location: "Shanghai International Airport, China",
          status: "Departed",
          details: "Package has left the origin facility"
        },
        {
          timestamp: formatDate(yesterday),
          location: "Hong Kong International Airport, Hong Kong",
          status: "Transit",
          details: "Package in transit to destination"
        },
        {
          timestamp: formatDate(today),
          location: "Anchorage International Airport, Alaska",
          status: "Arrived",
          details: "Package has arrived at intermediate location"
        },
        {
          timestamp: formatDate(tomorrow),
          location: "Los Angeles, USA",
          status: "Expected",
          details: "Package scheduled to arrive at destination facility"
        }
      ]
    };
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100">
      {/* Navigation */}
      <header className="bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Tosha Shipping"
                width={150}
                height={40}
                className="dark:hidden"
              />
              <Image
                src="/logo-white.svg"
                alt="Tosha Shipping"
                width={150}
                height={40}
                className="hidden dark:block"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <Link href="/services" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link href="/about" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/tracking" className="font-medium text-blue-600 dark:text-blue-400 transition-colors">
                Track Shipment
              </Link>
              <Link href="/contact" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link 
                href="/login"
                className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Client Portal
              </Link>
              
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-slate-800 dark:text-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Shipment</h1>
            <p className="text-blue-100 text-lg mb-8">Enter your tracking number to get real-time updates on your shipment's location and status.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your tracking number (e.g., TS12345678)"
                  className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-slate-800"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white rounded-lg px-6 py-3 font-medium transition-all hover:shadow-lg disabled:opacity-70"
                disabled={isSearching}
              >
                {isSearching ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Tracking...
                  </span>
                ) : (
                  "Track Shipment"
                )}
              </button>
            </form>
            
            {error && (
              <div className="mt-3 text-sm bg-red-500/20 border border-red-500/50 text-white px-4 py-2 rounded">
                {error}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          {trackingResult && <TrackingDetails shipment={trackingResult} />}
          
          {!trackingResult && !isSearching && !error && (
            <div className="text-center py-16">
              <div className="mx-auto max-w-md">
                <Image 
                  src="/illustrations/track-package.svg"
                  alt="Track your package"
                  width={250}
                  height={250}
                  className="mx-auto mb-6"
                />
                <h2 className="text-2xl font-bold mb-2 dark:text-white">Track Any Shipment</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  For this demo, please use a tracking number that starts with "TS" followed by 8 digits.
                  Example: TS12345678
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other Tracking Options */}
      <section className="py-10 bg-slate-100 dark:bg-slate-800/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Other Ways to Track</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Track by Phone</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Call our 24/7 customer service to track your shipments with our representatives.</p>
              <p className="font-medium text-blue-600 dark:text-blue-400">+1 (800) 555-1234</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Track by Email</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Send us your tracking number and we'll respond with updates on your shipment.</p>
              <p className="font-medium text-blue-600 dark:text-blue-400">tracking@toshashipping.com</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile App</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Download our mobile app to track shipments on-the-go and receive push notifications.</p>
              <div className="flex space-x-3">
                <Link href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">App Store</Link>
                <Link href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Play Store</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What information do I need to track my shipment?</h3>
              <p className="text-slate-600 dark:text-slate-400">You'll need your tracking number, which is provided in your shipping confirmation email or on your shipping documents.</p>
            </div>
            
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How often is tracking information updated?</h3>
              <p className="text-slate-600 dark:text-slate-400">Tracking information is typically updated several times a day as your shipment moves through our network.</p>
            </div>
            
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What do the different status messages mean?</h3>
              <p className="text-slate-600 dark:text-slate-400">Status messages indicate the current state of your shipment, from initial pickup to final delivery. Common statuses include "In Transit", "Customs Clearance", "Out for Delivery", and "Delivered".</p>
            </div>
            
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What should I do if my shipment is delayed?</h3>
              <p className="text-slate-600 dark:text-slate-400">If your shipment is delayed, you can contact our customer support team for more information and assistance. We'll work to resolve any issues and provide updates on your shipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer included from main layout */}
    </div>
  );
}
