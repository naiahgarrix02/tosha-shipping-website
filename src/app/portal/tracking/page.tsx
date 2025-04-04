"use client";

import { useState } from "react";
import TrackingDetails from "../../../components/TrackingDetails";

export default function PortalTrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [trackingResult, setTrackingResult] = useState<null | any>(null);
  
  // For demo, let's pre-load some recent shipments
  const [recentShipments] = useState([
    { id: "TS12345678", origin: "Shanghai, China", destination: "Los Angeles, USA", status: "In Transit" },
    { id: "TS87654321", origin: "Hamburg, Germany", destination: "New York, USA", status: "Delivered" },
    { id: "TS11223344", origin: "Tokyo, Japan", destination: "Sydney, Australia", status: "Customs" },
  ]);

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
      
      // For demo: pattern-match demo tracking numbers or use recent shipments
      if (trackingNumber.toUpperCase().startsWith("TS") || recentShipments.some(ship => ship.id === trackingNumber)) {
        // Create a synthetic shipment based on tracking number
        const shipmentData = generateShipmentData(trackingNumber);
        setTrackingResult(shipmentData);
        setError("");
      } else {
        setTrackingResult(null);
        setError("Tracking number not found. Try using one of your recent shipments.");
      }
    } catch (err) {
      setError("Error searching for tracking number. Please try again.");
      setTrackingResult(null);
    } finally {
      setIsSearching(false);
    }
  };

  // Generate realistic demo data based on the tracking number - similar to the public tracking page
  const generateShipmentData = (trackingNumber: string) => {
    // Same implementation as in the public tracking page
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
    
    // Use one of the pre-defined shipments if available
    const recentShipment = recentShipments.find(ship => ship.id === trackingNumber);
    
    return {
      trackingNumber: trackingNumber.toUpperCase(),
      status: recentShipment?.status || "In Transit",
      origin: recentShipment?.origin || "Shanghai, China",
      destination: recentShipment?.destination || "Los Angeles, USA",
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

  const handleTrackRecent = (id: string) => {
    setTrackingNumber(id);
    setTimeout(() => {
      const shipmentData = generateShipmentData(id);
      setTrackingResult(shipmentData);
    }, 500);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Track Shipments</h1>
      </div>
      
      {/* Search Form */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="tracking-number" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Tracking Number
            </label>
            <input
              id="tracking-number"
              type="text"
              placeholder="Enter a tracking number"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:text-white"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
          </div>
          <div className="mt-auto">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-medium transition-all hover:shadow-lg disabled:opacity-70"
              disabled={isSearching}
            >
              {isSearching ? "Searching..." : "Track"}
            </button>
          </div>
        </form>
        
        {error && (
          <div className="mt-3 text-sm bg-red-50 border border-red-200 text-red-600 dark:bg-red-900/20 dark:border-red-700/30 dark:text-red-400 px-4 py-2 rounded">
            {error}
          </div>
        )}
      </div>
      
      {/* Recent Shipments */}
      {!trackingResult && (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="font-medium text-slate-900 dark:text-white">Recent Shipments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Tracking ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Origin
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Destination
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                {recentShipments.map((shipment) => (
                  <tr key={shipment.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                      {shipment.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      {shipment.origin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      {shipment.destination}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${shipment.status === "In Transit" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : 
                          shipment.status === "Delivered" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : 
                          "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"}`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <button
                        onClick={() => handleTrackRecent(shipment.id)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Track
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Tracking Results */}
      {trackingResult && <TrackingDetails shipment={trackingResult} />}
    </>
  );
}
