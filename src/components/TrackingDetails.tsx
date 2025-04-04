"use client";

import { useState } from "react";
import Image from "next/image";

// Types for the shipment data
interface ShipmentUpdate {
  timestamp: string;
  location: string;
  status: string;
  details: string;
}

interface ShipmentData {
  trackingNumber: string;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  shipper: string;
  recipient: string;
  service: string;
  weight: string;
  pieces: string;
  updates: ShipmentUpdate[];
}

interface TrackingDetailsProps {
  shipment: ShipmentData;
}

export default function TrackingDetails({ shipment }: TrackingDetailsProps) {
  const [activeTab, setActiveTab] = useState<"updates" | "details">("updates");
  
  // Determine the progress percentage based on updates
  const determineProgress = () => {
    const totalSteps = 5; // pickup, departure, transit, arrival, delivery
    const statusMap: Record<string, number> = {
      "Shipment picked up": 1,
      "Departed": 2,
      "Transit": 3, 
      "Arrived": 4,
      "Delivered": 5,
      "Expected": 0 // Future events don't count towards progress
    };
    
    let highestStep = 0;
    
    // Find the highest step reached
    shipment.updates.forEach(update => {
      const step = statusMap[update.status] || 0;
      if (step > highestStep && !update.status.includes("Expected")) {
        highestStep = step;
      }
    });
    
    return (highestStep / totalSteps) * 100;
  };
  
  const progress = determineProgress();
  
  // Get the latest update
  const getLatestUpdate = () => {
    const currentUpdates = shipment.updates.filter(update => !update.status.includes("Expected"));
    return currentUpdates[currentUpdates.length - 1];
  };
  
  const latestUpdate = getLatestUpdate();
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Shipment picked up":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Departed":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "Transit":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case "Arrived":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300";
      case "Delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Expected":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden reveal-animation revealed">
      {/* Shipment Header */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Tracking Number</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{shipment.trackingNumber}</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${shipment.status === "Delivered" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"}`}>
              {shipment.status}
            </span>
            {shipment.status === "In Transit" && (
              <button 
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                onClick={() => console.log("Subscribe to updates")}
              >
                Get Updates
              </button>
            )}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-2">
            <span>Origin</span>
            <span>In Transit</span>
            <span>Destination</span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
            <span>{shipment.origin}</span>
            <span>{shipment.destination}</span>
          </div>
        </div>
        
        {/* Latest update summary */}
        <div className="mt-6 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {latestUpdate?.status} - {latestUpdate?.location}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{latestUpdate?.details}</p>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {latestUpdate?.timestamp}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="border-b border-slate-200 dark:border-slate-700">
        <div className="flex">
          <button
            className={`py-4 px-6 text-sm font-medium ${activeTab === "updates" 
              ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" 
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
            onClick={() => setActiveTab("updates")}
          >
            Shipment Updates
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium ${activeTab === "details" 
              ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" 
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
            onClick={() => setActiveTab("details")}
          >
            Shipment Details
          </button>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "updates" ? (
          <div className="space-y-6">
            <ol className="relative border-l border-slate-200 dark:border-slate-700">
              {shipment.updates.map((update, index) => (
                <li key={index} className="mb-10 ml-6">
                  <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${getStatusClass(update.status)}`}>
                    {update.status === "Expected" ? (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 1a6 6 0 100 12 6 6 0 000-12zm.5 4a.5.5 0 00-1 0v3.5H6a.5.5 0 000 1h4a.5.5 0 00.5-.5V8z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                    {update.status}
                    {index === 0 && (
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span>
                    )}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">{update.timestamp}</time>
                  <p className="text-base font-normal text-slate-600 dark:text-slate-300">{update.details} - {update.location}</p>
                </li>
              ))}
            </ol>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Estimated delivery: <span className="font-semibold text-slate-900 dark:text-white">{shipment.estimatedDelivery}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Shipment Information</h3>
              
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Service Type</p>
                <p className="text-slate-900 dark:text-white font-medium">{shipment.service}</p>
              </div>
              
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Weight</p>
                <p className="text-slate-900 dark:text-white font-medium">{shipment.weight}</p>
              </div>
              
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Pieces</p>
                <p className="text-slate-900 dark:text-white font-medium">{shipment.pieces}</p>
              </div>
              
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Estimated Delivery</p>
                <p className="text-slate-900 dark:text-white font-medium">{shipment.estimatedDelivery}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Addresses</h3>
              
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Origin</p>
                <p className="text-slate-900 dark:text-white font-medium">{shipment.origin}</p>
                <p className="text-slate-900 dark:text-white font-medium">{shipment.shipper}</p>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">Destination</p>
                <p className="text-slate-900 dark:text-white font-medium">{shipment.destination}</p>
                <p className="text-slate-900 dark:text-white font-medium">{shipment.recipient}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Actions Footer */}
      <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap gap-3 justify-end">
          <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Download PDF
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors">
            Share Tracking Link
          </button>
        </div>
      </div>
    </div>
  );
}
