"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Shipment {
  id: string;
  origin: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  status: string;
  type: string;
}

export default function PortalDashboard() {
  // For demo purposes - sample data
  const [recentShipments] = useState<Shipment[]>([
    {
      id: "TS12345678",
      origin: "Shanghai, China",
      destination: "Los Angeles, USA",
      departureDate: "2023-11-10",
      arrivalDate: "2023-11-30",
      status: "In Transit",
      type: "Ocean Freight"
    },
    {
      id: "TS87654321",
      origin: "Hamburg, Germany",
      destination: "New York, USA",
      departureDate: "2023-11-05",
      arrivalDate: "2023-11-15",
      status: "Customs Clearance",
      type: "Express Air"
    },
    {
      id: "TS11223344",
      origin: "Tokyo, Japan",
      destination: "Sydney, Australia",
      departureDate: "2023-11-08",
      arrivalDate: "2023-11-22",
      status: "In Transit",
      type: "Ocean Freight"
    },
    {
      id: "TS55667788",
      origin: "Mumbai, India",
      destination: "Dubai, UAE",
      departureDate: "2023-10-28",
      arrivalDate: "2023-11-12",
      status: "Delivered",
      type: "Air Freight"
    },
    {
      id: "TS99001122",
      origin: "Rotterdam, Netherlands",
      destination: "Cape Town, South Africa",
      departureDate: "2023-10-25",
      arrivalDate: "2023-11-28",
      status: "In Transit",
      type: "Ocean Freight"
    }
  ]);

  // Metrics for the dashboard
  const metrics = [
    { 
      title: "Active Shipments", 
      value: "24", 
      trend: "+12%", 
      trendUp: true, 
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) 
    },
    { 
      title: "In Transit", 
      value: "16", 
      trend: "+5%", 
      trendUp: true, 
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ) 
    },
    { 
      title: "Customs Hold", 
      value: "3", 
      trend: "-25%", 
      trendUp: false, 
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ) 
    },
    { 
      title: "Delivered (30d)", 
      value: "42", 
      trend: "+18%", 
      trendUp: true, 
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ) 
    }
  ];

  // For the chart section
  const mockChart = {
    height: "280px",
    background: "linear-gradient(to right, #3b82f6, #2563eb)"
  };

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
        <div className="md:flex justify-between">
          <div className="p-6 md:p-8">
            <div className="text-sm text-slate-500 dark:text-slate-400">Welcome back,</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">John Doe</h2>
            <p className="mt-1 text-slate-500 dark:text-slate-400">Here's what's happening with your shipments today</p>
          </div>
          <div className="px-6 md:px-8 py-4 md:py-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700/50 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-2 md:gap-1 md:min-w-[200px]">
            <div className="text-sm text-slate-500 dark:text-slate-400">Account Balance</div>
            <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">$24,500.00</div>
            <Link 
              href="/portal/billing" 
              className="text-xs md:text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View billing details
            </Link>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <div 
            key={i} 
            className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{metric.title}</h3>
                <div className="flex items-baseline mt-1">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className={`ml-2 text-sm ${metric.trendUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {metric.trend}
                  </p>
                </div>
              </div>
              <div className={`rounded-lg p-2 ${
                metric.title === 'Active Shipments' ? 'bg-blue-50 dark:bg-blue-900/20' :
                metric.title === 'In Transit' ? 'bg-purple-50 dark:bg-purple-900/20' :
                metric.title === 'Customs Hold' ? 'bg-amber-50 dark:bg-amber-900/20' : 
                'bg-green-50 dark:bg-green-900/20'
              }`}>
                {metric.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Shipments - 2/3 width */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">Recent Shipments</h3>
            <Link
              href="/portal/shipments"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View all
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Route</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">ETA</th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                {recentShipments.map((shipment) => (
                  <tr key={shipment.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{shipment.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900 dark:text-white">{`${shipment.origin} → ${shipment.destination}`}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-500 dark:text-slate-400">{shipment.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
                        shipment.status === 'Customs Clearance' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200' :
                        shipment.status === 'Delivered' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                        'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                      }`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-500 dark:text-slate-400">{new Date(shipment.arrivalDate).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link 
                        href={`/portal/tracking?id=${shipment.id}`}
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Track
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Quick Actions + Notifications - 1/3 width */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "New Shipment", icon: "M12 4v16m8-8H4", href: "/portal/shipments/new" },
                { name: "Track Shipment", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", href: "/portal/tracking" },
                { name: "Create Quote", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", href: "/portal/quote" },
                { name: "Support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", href: "/portal/support" }
              ].map((action, i) => (
                <Link
                  key={i}
                  href={action.href}
                  className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-700/30 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors text-center"
                >
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-2">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={action.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">{action.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Notifications */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Notifications</h3>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">3 New</span>
            </div>
            
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {[
                {
                  title: "Shipment TS12345678 delayed",
                  message: "Your shipment has been delayed by 2 days due to customs inspection",
                  time: "1 hour ago",
                  read: false,
                  type: "warning"
                },
                {
                  title: "Shipment TS87654321 arrived at port",
                  message: "Your shipment has arrived at New York port and is being processed",
                  time: "3 hours ago",
                  read: false,
                  type: "info"
                },
                {
                  title: "Invoice #INV-2023-11 available",
                  message: "Your monthly invoice is now available to view and pay",
                  time: "5 hours ago",
                  read: false,
                  type: "billing"
                },
                {
                  title: "Shipment TS99001122 delivered",
                  message: "Your shipment has been delivered successfully",
                  time: "1 day ago",
                  read: true,
                  type: "success"
                }
              ].map((notification, i) => (
                <div key={i} className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-700/20 ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className={`w-3 h-3 rounded-full ${
                        notification.type === 'warning' ? 'bg-amber-500' :
                        notification.type === 'info' ? 'bg-blue-500' :
                        notification.type === 'billing' ? 'bg-purple-500' :
                        'bg-green-500'
                      }`}></div>
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="text-sm font-medium text-slate-900 dark:text-white">{notification.title}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{notification.message}</div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{notification.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 text-center">
              <Link
                href="/portal/notifications"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View all notifications
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Shipment Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart: Status Distribution */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Shipment Status</h3>
          
          {/* Mock Chart - In a real app, use a charting library like Chart.js or Recharts */}
          <div className="relative rounded-lg overflow-hidden" style={{ height: mockChart.height }}>
            <div className="absolute inset-0" style={{ background: mockChart.background }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4">
              <div className="text-white text-lg font-semibold">Shipment Status Distribution</div>
              <div className="text-white/80 text-sm">Total: 24 active shipments</div>
            </div>
            
            {/* This is a placeholder for the chart, in a real app you'd render an actual chart component */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 flex items-end px-8 pb-8">
              {["In Transit", "Customs", "Port", "Warehouse", "Delivered"].map((status, i) => {
                const heights = [70, 35, 50, 20, 90];
                return (
                  <div key={status} className="flex-1 flex flex-col items-center">
                    <div 
                      className={`w-12 rounded-t-lg ${
                        i === 0 ? 'bg-blue-300 dark:bg-blue-400' :
                        i === 1 ? 'bg-amber-300 dark:bg-amber-400' :
                        i === 2 ? 'bg-purple-300 dark:bg-purple-400' :
                        i === 3 ? 'bg-indigo-300 dark:bg-indigo-400' :
                        'bg-green-300 dark:bg-green-400'
                      }`} 
                      style={{ height: `${heights[i]}%` }}
                    ></div>
                    <div className="mt-2 text-xs font-medium text-white">{status}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Chart: Shipments by Route */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Top Routes</h3>
          
          {/* Mock Chart - In a real app, use a charting library */}
          <div className="relative rounded-lg overflow-hidden" style={{ height: mockChart.height }}>
            <div className="absolute inset-0" style={{ background: mockChart.background }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
            <div className="absolute top-0 left-0 p-4">
              <div className="text-white text-lg font-semibold">Shipment Volume by Route</div>
              <div className="text-white/80 text-sm">Last 30 days</div>
            </div>
            
            {/* Placeholder for an actual chart */}
            <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full">
              <path 
                d="M0,150 C50,120 100,180 150,120 C200,60 250,120 300,100 C350,80 400,40 400,40 L400,200 L0,200 Z" 
                fill="rgba(255,255,255,0.2)" 
              />
              <path 
                d="M0,150 C50,120 100,180 150,120 C200,60 250,120 300,100 C350,80 400,40 400,40" 
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex justify-between text-white/80 text-xs">
                <span>Shanghai - LA</span>
                <span>Rotterdam - NY</span>
                <span>Singapore - Sydney</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
