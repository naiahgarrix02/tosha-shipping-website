"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";

// Sample case study data
const caseStudies = [
  {
    id: "automotive-parts-logistics",
    title: "Streamlining Automotive Parts Supply Chain for Global Manufacturer",
    excerpt: "How we helped a leading automotive manufacturer reduce shipping times by 30% while cutting logistics costs by 15% through our integrated logistics solutions.",
    industry: "Automotive",
    solution: "Supply Chain Optimization",
    results: ["30% reduction in shipping times", "15% decrease in logistics costs", "99.2% on-time delivery rate"],
    image: "/case-studies/automotive-logistics.jpg",
    featured: true,
    logo: "/case-studies/logos/automotive-logo.svg"
  },
  {
    id: "pharmaceutical-temperature-controlled",
    title: "Temperature-Controlled Pharmaceutical Distribution Network",
    excerpt: "Designing and implementing a robust cold chain logistics solution for a pharmaceutical company distributing sensitive vaccines across 25 countries.",
    industry: "Pharmaceuticals",
    solution: "Cold Chain Logistics",
    results: ["100% temperature compliance", "Expanded to 25 countries", "40% faster customs clearance"],
    image: "/case-studies/pharma-cold-chain.jpg",
    featured: true,
    logo: "/case-studies/logos/pharma-logo.svg"
  },
  {
    id: "retail-peak-season",
    title: "Managing Peak Season Demand for Global Retail Chain",
    excerpt: "How our flexible capacity solutions helped a major retail chain handle 300% volume increases during holiday seasons without service disruptions.",
    industry: "Retail",
    solution: "Capacity Management",
    results: ["Handled 300% volume increase", "Zero stockouts reported", "98.7% on-time delivery"],
    image: "/case-studies/retail-logistics.jpg",
    featured: false,
    logo: "/case-studies/logos/retail-logo.svg"
  },
  {
    id: "electronics-customs-clearance",
    title: "Accelerating Electronics Import/Export with Customs Expertise",
    excerpt: "Reducing customs clearance times by 65% for a global electronics manufacturer, enabling just-in-time manufacturing across three continents.",
    industry: "Electronics",
    solution: "Customs & Compliance",
    results: ["65% faster customs clearance", "Zero compliance penalties", "$2.3M annual savings"],
    image: "/case-studies/electronics-customs.jpg",
    featured: false,
    logo: "/case-studies/logos/electronics-logo.svg"
  },
  {
    id: "food-beverage-distribution",
    title: "Optimizing Global Food & Beverage Distribution",
    excerpt: "Creating an efficient distribution network for perishable goods, reducing spoilage by 78% and extending market reach for a multinational F&B company.",
    industry: "Food & Beverage",
    solution: "Distribution Network Design",
    results: ["78% reduction in spoilage", "42% expansion in market coverage", "22% overall logistics cost reduction"],
    image: "/case-studies/food-beverage.jpg",
    featured: false,
    logo: "/case-studies/logos/food-logo.svg"
  },
  {
    id: "renewable-energy-projects",
    title: "Specialized Logistics for Renewable Energy Projects",
    excerpt: "Managing the complex logistics of transporting oversized wind turbine components to remote locations across three continents.",
    industry: "Renewable Energy",
    solution: "Project Logistics",
    results: ["100% damage-free deliveries", "15 wind farms completed", "28% under budget"],
    image: "/case-studies/renewable-energy.jpg",
    featured: false,
    logo: "/case-studies/logos/energy-logo.svg"
  },
  {
    id: "fashion-ecommerce-fulfillment",
    title: "Global E-commerce Fulfillment for Fast Fashion Brand",
    excerpt: "Developing a multi-hub fulfillment strategy that reduced delivery times by 54% for an expanding international fashion e-tailer.",
    industry: "Fashion",
    solution: "E-commerce Logistics",
    results: ["54% reduction in delivery times", "13 international fulfillment centers", "47% lower return shipping costs"],
    image: "/case-studies/fashion-ecommerce.jpg",
    featured: false,
    logo: "/case-studies/logos/fashion-logo.svg"
  },
  {
    id: "chemical-safety-compliance",
    title: "Safety-First Chemical Products Transportation",
    excerpt: "Engineering specialized transportation solutions for hazardous chemical products with zero safety incidents across global shipping lanes.",
    industry: "Chemical",
    solution: "Hazardous Materials Shipping",
    results: ["Zero safety incidents", "100% regulatory compliance", "35% insurance cost reduction"],
    image: "/case-studies/chemical-transport.jpg",
    featured: false,
    logo: "/case-studies/logos/chemical-logo.svg"
  }
];

// Extract unique industries and solutions for filters
const industries = ["All Industries", ...Array.from(new Set(caseStudies.map(study => study.industry)))];
const solutions = ["All Solutions", ...Array.from(new Set(caseStudies.map(study => study.solution)))];

export default function CaseStudiesPage() {
  const [activeIndustry, setActiveIndustry] = useState("All Industries");
  const [activeSolution, setActiveSolution] = useState("All Solutions");
  
  // Filter case studies based on selected filters
  const filteredStudies = caseStudies.filter(study => {
    const industryMatch = activeIndustry === "All Industries" || study.industry === activeIndustry;
    const solutionMatch = activeSolution === "All Solutions" || study.solution === activeSolution;
    return industryMatch && solutionMatch;
  });
  
  // Separate featured studies
  const featuredStudies = caseStudies.filter(study => study.featured);

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
              <Link href="/tracking" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl floating-animation-reverse"></div>
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <AnimatedElement>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
              <p className="text-lg text-blue-100 mb-8">
                Discover how we've helped businesses across industries optimize their supply chains, reduce costs, and accelerate growth through innovative logistics solutions.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white dark:bg-slate-800/50 sticky top-0 z-10 shadow-sm border-b border-slate-200 dark:border-slate-700/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="py-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="font-medium mr-4">Filter by:</div>
              
              {/* Industry Filter */}
              <div className="relative mr-6">
                <select 
                  value={activeIndustry}
                  onChange={(e) => setActiveIndustry(e.target.value)}
                  className="appearance-none bg-slate-100 dark:bg-slate-700 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Solution Filter */}
              <div className="relative">
                <select 
                  value={activeSolution}
                  onChange={(e) => setActiveSolution(e.target.value)}
                  className="appearance-none bg-slate-100 dark:bg-slate-700 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {solutions.map(solution => (
                    <option key={solution} value={solution}>
                      {solution}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Reset Filters Button - only show when filters are active */}
              {(activeIndustry !== "All Industries" || activeSolution !== "All Solutions") && (
                <button 
                  onClick={() => {
                    setActiveIndustry("All Industries");
                    setActiveSolution("All Solutions");
                  }}
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium ml-auto"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Case Studies - Only show when no filters are applied */}
      {activeIndustry === "All Industries" && activeSolution === "All Solutions" && (
        <section className="py-16">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <AnimatedElement>
              <div className="flex flex-col mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-10 bg-blue-500"></span>
                  <span className="text-blue-500 font-medium tracking-wider text-sm">FEATURED</span>
                  <span className="h-px w-10 bg-blue-500"></span>
                </div>
                <h2 className="text-3xl font-bold">Featured Success Stories</h2>
              </div>
            </AnimatedElement>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredStudies.map((study, index) => (
                <AnimatedElement key={study.id} delay={index * 100}>
                  <Link href={`/case-studies/${study.id}`} className="group">
                    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700/30 h-full flex flex-col">
                      <div className="relative h-64 w-full">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                            {study.industry}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center mb-4">
                          <div className="h-8 w-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center overflow-hidden mr-2">
                            <Image 
                              src={study.logo} 
                              alt={`${study.industry} company logo`} 
                              width={20} 
                              height={20} 
                            />
                          </div>
                          <span className="text-sm text-slate-500 dark:text-slate-400">{study.solution}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                          {study.excerpt}
                        </p>
                        <div className="mt-auto">
                          <ul className="space-y-2">
                            {study.results.slice(0, 2).map((result, i) => (
                              <li key={i} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm">{result}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex justify-end">
                            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                              View case study →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* All Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col mb-12">
              <h2 className="text-3xl font-bold">
                {activeIndustry !== "All Industries" ? `${activeIndustry} Case Studies` : 
                 activeSolution !== "All Solutions" ? `${activeSolution} Case Studies` : 
                 "All Case Studies"}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-3">
                {filteredStudies.length} {filteredStudies.length === 1 ? 'case study' : 'case studies'} {activeIndustry !== "All Industries" || activeSolution !== "All Solutions" ? 'match your filters' : ''}
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <AnimatedElement key={study.id} delay={index % 3 * 100}>
                <Link href={`/case-studies/${study.id}`} className="group">
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700/30 h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center mb-4">
                        <div className="h-8 w-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center overflow-hidden mr-2">
                          <Image 
                            src={study.logo} 
                            alt={`${study.industry} company logo`} 
                            width={20} 
                            height={20} 
                          />
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{study.solution}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2 flex-grow">
                        {study.excerpt}
                      </p>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline mt-auto">
                        View case study →
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
          
          {/* Empty state when no results match filters */}
          {filteredStudies.length === 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-12 text-center border border-slate-100 dark:border-slate-700/30">
              <svg className="w-16 h-16 mx-auto text-slate-300 dark:text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">No matching case studies</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                We couldn't find any case studies matching your current filters.
              </p>
              <button
                onClick={() => {
                  setActiveIndustry("All Industries");
                  setActiveSolution("All Solutions");
                }}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Clear filters and see all case studies
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl animated-gradient">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl floating-animation"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl floating-animation-reverse"></div>
            
            <div className="relative z-10 md:flex items-center justify-between gap-8">
              <div className="mb-8 md:mb-0">
                <AnimatedElement>
                  <h2 className="text-3xl font-bold mb-4">Ready to optimize your supply chain?</h2>
                  <p className="text-blue-100">
                    Let's discuss how our logistics solutions can help your business achieve similar results.
                  </p>
                </AnimatedElement>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white hover:bg-blue-50 text-blue-900 transition-colors py-3 px-6 rounded-lg font-medium"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/services" 
                  className="border border-white/30 hover:bg-white/10 text-white transition-colors py-3 px-6 rounded-lg font-medium"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
