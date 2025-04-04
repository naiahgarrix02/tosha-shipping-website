"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Location {
  country: string;
  city?: string;
  code: string; // Country code
}

// Common locations the user might select
const popularLocations: Location[] = [
  { country: "United States", code: "US" },
  { country: "United Kingdom", code: "GB" },
  { country: "Germany", code: "DE" },
  { country: "Singapore", code: "SG" },
  { country: "Australia", code: "AU" },
  { country: "China", code: "CN" },
  { country: "Japan", code: "JP" },
  { country: "India", code: "IN" },
  { country: "Netherlands", code: "NL" },
];

export default function LocationPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(popularLocations);
  const [geoError, setGeoError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user location is stored in localStorage
    const savedLocation = localStorage.getItem('user-location');
    
    if (savedLocation) {
      setCurrentLocation(JSON.parse(savedLocation));
    } else {
      // Only show the prompt after a short delay to not interrupt initial page load
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Filter locations based on search query
  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const filtered = popularLocations.filter(
        loc => loc.country.toLowerCase().includes(query) || 
              (loc.city && loc.city.toLowerCase().includes(query))
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(popularLocations);
    }
  }, [searchQuery]);

  const detectLocation = async () => {
    setIsDetecting(true);
    setGeoError(null);
    
    try {
      // First, check if geolocation is available
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              // Get country data from coordinates using a free API
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
              );
              
              if (response.ok) {
                const data = await response.json();
                const detectedLocation: Location = {
                  country: data.countryName,
                  city: data.city || undefined,
                  code: data.countryCode,
                };
                
                setCurrentLocation(detectedLocation);
                localStorage.setItem('user-location', JSON.stringify(detectedLocation));
                setShowPrompt(false);
              } else {
                // If API call fails, show manual selector
                setGeoError("Couldn't determine your location from coordinates");
                setShowSelector(true);
              }
            } catch (error) {
              setGeoError("Error fetching location data");
              console.error("Error fetching location data");
              setShowSelector(true);
            }
          },
          (error) => {
            // Handle specific geolocation errors
            switch(error.code) {
              case error.PERMISSION_DENIED:
                setGeoError("Location permission denied");
                break;
              case error.POSITION_UNAVAILABLE:
                setGeoError("Location information unavailable");
                break;
              case error.TIMEOUT:
                setGeoError("Location request timed out");
                break;
              default:
                setGeoError("Unknown location error");
                break;
            }
            setShowSelector(true);
          },
          // Geolocation options
          {
            timeout: 10000, // 10 seconds timeout
            maximumAge: 60000, // Accept cached positions up to 1 minute old
            enableHighAccuracy: false // Don't need high accuracy for country-level location
          }
        );
      } else {
        // Geolocation not available
        setGeoError("Geolocation is not supported by this browser");
        setShowSelector(true);
      }
    } catch (error) {
      setGeoError("Unexpected error accessing geolocation");
      console.error("Geolocation error");
      setShowSelector(true);
    } finally {
      setIsDetecting(false);
    }
  };

  const selectLocation = (location: Location) => {
    setCurrentLocation(location);
    localStorage.setItem('user-location', JSON.stringify(location));
    setShowPrompt(false);
    setShowSelector(false);
  };

  const closePrompt = () => {
    // If user closes without selecting, default to a common location
    const defaultLocation: Location = {
      country: "United States",
      code: "US",
    };
    setCurrentLocation(defaultLocation);
    localStorage.setItem('user-location', JSON.stringify(defaultLocation));
    setShowPrompt(false);
    setShowSelector(false);
  };

  return (
    <>
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 sm:bottom-6 left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full sm:w-[90%] max-w-lg z-50"
          >
            <div className="bg-white dark:bg-slate-800 rounded-t-xl sm:rounded-xl shadow-xl border border-slate-100 dark:border-slate-700/30 p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 sm:p-2 rounded-lg">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-base sm:text-lg">Choose Your Location</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm truncate">
                      Help us provide you with the most relevant information
                    </p>
                  </div>
                </div>
                <button onClick={closePrompt} className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 p-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {showSelector ? (
                <div>
                  {geoError && (
                    <div className="mb-3 p-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 rounded-lg text-sm text-amber-800 dark:text-amber-300">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        {geoError}
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Search for your country"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full py-2.5 pl-10 pr-4 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:text-white text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="max-h-[40vh] sm:max-h-60 overflow-y-auto pr-1 space-y-0.5 sm:space-y-1">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((location) => (
                        <button
                          key={location.code}
                          onClick={() => selectLocation(location)}
                          className="w-full text-left p-3 sm:p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/30 transition-colors flex items-center"
                        >
                          <Image 
                            src={`https://flagcdn.com/w20/${location.code.toLowerCase()}.png`}
                            alt={`${location.country} flag`}
                            width={20}
                            height={15}
                            className="mr-3"
                          />
                          <span>{location.country}</span>
                          {location.city && (
                            <span className="text-slate-500 dark:text-slate-400 text-sm ml-1">
                              ({location.city})
                            </span>
                          )}
                        </button>
                      ))
                    ) : (
                      <div className="text-center py-6 text-slate-500 dark:text-slate-400">
                        No locations found matching your search
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <button
                    onClick={detectLocation}
                    disabled={isDetecting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center disabled:opacity-70"
                  >
                    {isDetecting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Detecting...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Detect My Location
                      </>
                    )}
                  </button>
                  
                  <div className="flex items-center">
                    <hr className="flex-grow border-slate-200 dark:border-slate-700" />
                    <span className="px-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">or</span>
                    <hr className="flex-grow border-slate-200 dark:border-slate-700" />
                  </div>
                  
                  <button
                    onClick={() => setShowSelector(true)}
                    className="w-full border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/30 py-3 rounded-lg font-medium transition-colors"
                  >
                    Select Manually
                  </button>
                </div>
              )}

              {/* Safe area for mobile devices */}
              <div className="h-2 sm:hidden"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Current location indicator - always shown in header when location is set */}
      {currentLocation && (
        <button 
          onClick={() => setShowPrompt(true)}
          className="flex items-center text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 py-1 px-2.5 rounded-full transition-colors"
        >
          <Image 
            src={`https://flagcdn.com/w20/${currentLocation.code.toLowerCase()}.png`}
            alt={`${currentLocation.country} flag`}
            width={16}
            height={12}
            className="mr-1.5"
            priority
          />
          <span className="truncate max-w-[60px] sm:max-w-[100px]">{currentLocation.country}</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </>
  );
}
