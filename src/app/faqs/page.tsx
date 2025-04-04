"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQsPage() {
  // All FAQ data organized by categories
  const allFAQs: FAQItem[] = [
    // Shipping & Logistics
    {
      question: "What shipping methods do you offer?",
      answer: "We offer a comprehensive range of shipping methods including ocean freight (FCL and LCL), air freight (standard and express), road transportation, and rail freight. Our team can help you determine the most efficient and cost-effective method based on your specific requirements, timeline, and budget.",
      category: "Shipping & Logistics"
    },
    {
      question: "How long does international shipping typically take?",
      answer: "Transit times vary widely depending on origin, destination, shipping method, and current global conditions. Generally, air freight takes 1-7 days, ocean FCL shipping takes 15-40 days, and ocean LCL shipping takes 20-45 days. For specific route timelines, please contact our customer service team or use our online quote tool to receive an accurate estimate.",
      category: "Shipping & Logistics"
    },
    {
      question: "Do you handle customs clearance?",
      answer: "Yes, we provide comprehensive customs clearance services as part of our end-to-end logistics solutions. Our experienced customs brokers understand international trade regulations and documentation requirements for countries worldwide. We handle all aspects of customs paperwork, duties, taxes, and compliance to ensure smooth border crossings and prevent delays.",
      category: "Shipping & Logistics"
    },
    {
      question: "What's the difference between FCL and LCL shipping?",
      answer: "FCL (Full Container Load) means you're shipping enough goods to fill an entire container, which remains sealed throughout transit. LCL (Less than Container Load) means your goods share container space with other shippers' cargo. FCL typically offers faster delivery, lower risk of damage, and potentially lower costs for larger shipments, while LCL is more economical for smaller shipments.",
      category: "Shipping & Logistics"
    },
    {
      question: "Can you ship hazardous materials or perishable goods?",
      answer: "Yes, we handle both hazardous materials and perishable goods with specialized shipping protocols. For hazardous materials, we ensure compliance with international regulations including proper classification, packaging, labeling, and documentation. For perishables, we provide temperature-controlled containers and expedited shipping to maintain product integrity. Both require advance notification and may have additional requirements.",
      category: "Shipping & Logistics"
    },
    
    // Tracking & Visibility
    {
      question: "How can I track my shipment?",
      answer: "You can track your shipment in several ways: 1) Through our online tracking portal by entering your tracking number, 2) Via our mobile app which provides real-time updates and notifications, 3) By contacting our customer service team with your tracking number. All active shipments receive regular status updates throughout the journey.",
      category: "Tracking & Visibility"
    },
    {
      question: "How often is tracking information updated?",
      answer: "Tracking information is updated at key milestones throughout the shipping journey. For premium services, updates can be as frequent as every 2-4 hours. Standard services typically update daily. Our real-time tracking system captures data from various sources including GPS, EDI feeds from carriers, and IoT devices on select shipments.",
      category: "Tracking & Visibility"
    },
    {
      question: "What information can I see in the tracking portal?",
      answer: "Our tracking portal provides comprehensive shipment information including: current location and status, estimated arrival time, transit history with timestamps, customs clearance status, relevant documentation, temperature data (for temperature-controlled shipments), and any exceptions or delays. Premium accounts also receive predictive ETAs and risk assessments.",
      category: "Tracking & Visibility"
    },
    {
      question: "Can I set up notifications for shipment updates?",
      answer: "Yes, you can customize notifications through our client portal or mobile app. Options include: email alerts, SMS notifications, mobile push notifications, and automated reports. You can select which shipment events trigger notifications and who on your team receives them.",
      category: "Tracking & Visibility"
    },
    
    // Pricing & Quotes
    {
      question: "How do I get a quote for shipping services?",
      answer: "You can request a shipping quote through multiple channels: 1) Our online quote tool on the website, 2) Contacting our sales team directly, 3) Through our mobile app, or 4) Emailing quote@toshashipping.com. For accurate quotes, please provide origin and destination locations, cargo weight and dimensions, commodity type, and desired shipping timeframe.",
      category: "Pricing & Quotes"
    },
    {
      question: "What factors affect shipping costs?",
      answer: "Several factors influence shipping costs: 1) Distance and route between origin and destination, 2) Shipping method (air, ocean, road, rail), 3) Cargo weight, volume, and density, 4) Special handling requirements (hazardous, temperature-controlled, etc.), 5) Fuel prices and carrier surcharges, 6) Seasonal demand fluctuations, 7) Customs duties and taxes, and 8) Additional services like insurance or expedited handling.",
      category: "Pricing & Quotes"
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Yes, we offer tiered pricing structures and volume discounts for clients with regular shipping needs. These discounts are tailored based on your shipping volume, frequency, routes, and service requirements. For high-volume shippers, we can develop customized rate agreements. Please contact our sales team to discuss volume pricing options for your specific business needs.",
      category: "Pricing & Quotes"
    },
    {
      question: "Are there any hidden fees I should be aware of?",
      answer: "We pride ourselves on transparency in our pricing. Our quotes include all standard service fees. However, certain circumstances may lead to additional charges, such as: customs inspection fees, storage charges for delayed pickups, address correction fees, special handling for non-standard cargo, peak season surcharges, and fees resulting from inaccurate shipment information. These potential charges are always communicated upfront when applicable.",
      category: "Pricing & Quotes"
    },
    {
      question: "How long is a quote valid for?",
      answer: "Standard quotes are typically valid for 30 days. However, during periods of high market volatility or peak seasons, validity periods may be shorter. Long-term contracts and dedicated service agreements can lock in rates for extended periods, typically 3-12 months. All quotes include an explicit expiration date for clarity.",
      category: "Pricing & Quotes"
    },
    
    // Client Portal & Services
    {
      question: "How do I create a client portal account?",
      answer: "Creating a client portal account is simple: 1) Click the 'Client Portal' button in the top navigation, 2) Select 'Register' on the login page, 3) Complete the registration form with your business information, 4) Verify your email address through our confirmation link, 5) One of our account managers will approve your account within one business day. For enterprise clients, please contact our sales team for expedited account setup and training.",
      category: "Client Portal & Services"
    },
    {
      question: "What features are available in the client portal?",
      answer: "Our client portal offers comprehensive logistics management tools including: real-time shipment tracking, booking management, document storage and sharing, invoice management and online payment options, custom report generation, analytics and performance dashboards, communication tools for direct contact with your assigned logistics team, and preference settings for notifications and user access controls.",
      category: "Client Portal & Services"
    },
    {
      question: "Can I manage multiple users in my company account?",
      answer: "Yes, our portal supports multi-user management with customizable permission levels. As an account administrator, you can add team members, assign role-based access permissions, set approval workflows, track user activity, and manage department-specific views. This ensures the right people have access to the information they need while maintaining appropriate security controls.",
      category: "Client Portal & Services"
    },
    {
      question: "Is the client portal available as a mobile app?",
      answer: "Yes, our client portal is available as a mobile app for both iOS and Android devices. The app offers nearly all the functionality of the web portal, optimized for mobile use. Key mobile features include push notifications for shipment updates, barcode scanning for quick tracking, offline access to critical documents, and one-touch contact with your logistics coordinator.",
      category: "Client Portal & Services"
    },
    
    // Documentation & Requirements
    {
      question: "What documents are required for international shipping?",
      answer: "Common documents for international shipping include: Commercial Invoice, Packing List, Bill of Lading or Air Waybill, Certificate of Origin, Import/Export Declarations, Inspection Certificates, Dangerous Goods Declarations (if applicable), and product-specific certificates (e.g., phytosanitary certificates, health certificates). Requirements vary by country and commodity type. Our documentation team can provide specific guidance for your shipments.",
      category: "Documentation & Requirements"
    },
    {
      question: "How do I prepare my goods for international shipping?",
      answer: "Proper preparation for international shipping includes: using export-grade packaging suitable for your transportation method, securing items within containers to prevent movement damage, accurate labeling including handling instructions and destination information, proper documentation for all contents, compliance with destination country import regulations, appropriate use of pallets and crates for heavier items, and moisture protection for ocean freight. Our packaging guidelines document provides detailed instructions.",
      category: "Documentation & Requirements"
    },
    {
      question: "What are Incoterms and which should I use?",
      answer: "Incoterms are standardized international trade terms that define the responsibilities of buyers and sellers in international transactions. Common Incoterms include EXW (Ex Works), FOB (Free on Board), CIF (Cost, Insurance, Freight), and DDP (Delivered Duty Paid). The right Incoterm depends on your risk tolerance, control preferences, and relationship with your trading partner. Our trade specialists can help you select the appropriate Incoterm for your specific situation.",
      category: "Documentation & Requirements"
    },
    {
      question: "Do you provide cargo insurance?",
      answer: "Yes, we offer comprehensive cargo insurance options to protect your shipments against loss, damage, and other risks during transit. Our standard policies cover most common scenarios, and we offer specialized coverage for high-value items, perishable goods, or specific risk factors. Insurance costs typically range from 0.3% to 0.5% of the cargo value, depending on the goods type, route, and coverage level.",
      category: "Documentation & Requirements"
    },
    
    // Company Policies
    {
      question: "What is your sustainability policy?",
      answer: "Our sustainability policy centers on three pillars: Environmental responsibility, including carbon footprint reduction, alternative fuel adoption, and waste minimization; Social impact through ethical labor practices, community engagement, and diversity initiatives; and Economic sustainability through long-term planning and transparent business practices. We're committed to achieving carbon neutrality by 2040 and offer green shipping options for environmentally conscious clients.",
      category: "Company Policies"
    },
    {
      question: "How do you handle shipping delays?",
      answer: "When delays occur, our protocol includes: immediate notification to affected clients through automated alerts and personal outreach, proactive rerouting or expediting when possible, transparent communication about the cause and estimated impact, priority handling once the delay factor is resolved, and regular status updates until delivery. For significant delays, we conduct thorough analysis to prevent similar situations in the future.",
      category: "Company Policies"
    },
    {
      question: "What is your privacy policy regarding client information?",
      answer: "We maintain strict privacy standards for all client information. Your data is protected through encryption, access controls, regular security audits, and compliance with global data protection regulations including GDPR. We never sell client information to third parties and only share data with partners directly involved in your shipping operations. Our complete privacy policy is available on our website and upon request.",
      category: "Company Policies"
    },
    {
      question: "How do you handle claims for lost or damaged goods?",
      answer: "Our claims process is designed to be straightforward and fair. Steps include: 1) Immediate notification of damage or loss, 2) Documentation submission through our client portal, 3) Assessment by our claims team within 48 hours, 4) Resolution proposal including repair, replacement, or compensation, 5) Settlement processing. For insured shipments, our team coordinates directly with insurers to expedite claims. Most straightforward claims are resolved within 15 business days.",
      category: "Company Policies"
    }
  ];

  // States for search and expanded questions
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filteredFAQs, setFilteredFAQs] = useState(allFAQs);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Categories extraction
  const categories = ["All Categories", ...Array.from(new Set(allFAQs.map(faq => faq.category)))];

  // Search and filter functionality
  useEffect(() => {
    let results = allFAQs;
    
    // Filter by category
    if (selectedCategory !== "All Categories") {
      results = results.filter(faq => faq.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      results = results.filter(
        faq => 
          faq.question.toLowerCase().includes(lowerCaseQuery) || 
          faq.answer.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    setFilteredFAQs(results);
  }, [searchQuery, selectedCategory]);

  // Handle contact form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle contact form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call for form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setContactForm({
        name: "",
        email: "",
        question: ""
      });
    } catch (error) {
      console.error("Error submitting question:", error);
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl floating-animation-reverse"></div>
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-blue-100 text-lg mb-8">
                Find answers to common questions about our services, shipping processes, and policies.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 pl-10 pr-4 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Filter Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedElement>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/30 p-6 sticky top-24">
                  <h2 className="font-bold text-lg mb-4">Categories</h2>
                  <nav>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                              selectedCategory === category
                                ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                : "hover:bg-slate-50 dark:hover:bg-slate-700/30"
                            }`}
                          >
                            {category}
                            {category === "All Categories" ? (
                              <span className="ml-1 text-slate-400">({allFAQs.length})</span>
                            ) : (
                              <span className="ml-1 text-slate-400">
                                ({allFAQs.filter(faq => faq.category === category).length})
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </AnimatedElement>
            </div>
            
            {/* FAQ Questions and Answers */}
            <div className="lg:col-span-3">
              {filteredFAQs.length === 0 ? (
                <AnimatedElement>
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/30 p-8 text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-slate-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">No results found</h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-4">
                      We couldn't find any FAQs matching your search.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All Categories");
                      }}
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Clear filters and view all FAQs
                    </button>
                  </div>
                </AnimatedElement>
              ) : (
                <>
                  {/* Grouped by category when not searching */}
                  {!searchQuery && selectedCategory === "All Categories" ? (
                    Object.entries(
                      filteredFAQs.reduce((acc, faq) => {
                        if (!acc[faq.category]) acc[faq.category] = [];
                        acc[faq.category].push(faq);
                        return acc;
                      }, {} as Record<string, FAQItem[]>)
                    ).map(([category, faqs], i) => (
                      <div key={category} className={i > 0 ? "mt-12" : ""}>
                        <AnimatedElement delay={i * 100}>
                          <h2 className="text-2xl font-bold mb-6">{category}</h2>
                          <div className="space-y-4">
                            {faqs.map((faq, j) => {
                              const id = filteredFAQs.findIndex(f => f.question === faq.question);
                              return (
                                <div 
                                  key={faq.question} 
                                  className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/30 overflow-hidden"
                                >
                                  <button 
                                    onClick={() => setExpandedId(expandedId === id ? null : id)}
                                    className="w-full text-left p-6 flex justify-between items-start gap-4"
                                  >
                                    <span className="font-medium text-lg">{faq.question}</span>
                                    <span className="flex-shrink-0 mt-1">
                                      <svg 
                                        className={`w-5 h-5 transition-transform ${expandedId === id ? "rotate-180" : ""}`} 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                    </span>
                                  </button>
                                  
                                  {expandedId === id && (
                                    <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-700/30">
                                      <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </AnimatedElement>
                      </div>
                    ))
                  ) : (
                    // Flat list when searching or filtering by category
                    <AnimatedElement>
                      <div className="space-y-4">
                        {filteredFAQs.map((faq, i) => {
                          const id = filteredFAQs.findIndex(f => f.question === faq.question);
                          return (
                            <div 
                              key={faq.question} 
                              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/30 overflow-hidden"
                            >
                              <button 
                                onClick={() => setExpandedId(expandedId === id ? null : id)}
                                className="w-full text-left p-6 flex justify-between items-start gap-4"
                              >
                                <div>
                                  {searchQuery && selectedCategory === "All Categories" && (
                                    <span className="block text-sm text-blue-600 dark:text-blue-400 mb-1">{faq.category}</span>
                                  )}
                                  <span className="font-medium text-lg">{faq.question}</span>
                                </div>
                                <span className="flex-shrink-0 mt-1">
                                  <svg 
                                    className={`w-5 h-5 transition-transform ${expandedId === id ? "rotate-180" : ""}`} 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </span>
                              </button>
                              
                              {expandedId === id && (
                                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-700/30">
                                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </AnimatedElement>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Ask a Question Section */}
      <section className="py-16 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement>
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-10 bg-blue-500"></span>
                  <span className="text-blue-500 font-medium tracking-wider text-sm">NEED MORE HELP?</span>
                  <span className="h-px w-10 bg-blue-500"></span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Didn't Find Your Answer?</h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Submit your question and our team will get back to you within 24 hours
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={100}>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/30 shadow-sm p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Question Submitted!</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Thank you for your question. Our team will review it and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Ask another question
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="question" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Question
                      </label>
                      <textarea
                        id="question"
                        name="question"
                        value={contactForm.question}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:text-white"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin inline-block -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : "Submit Question"}
                      </button>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      By submitting this form, you agree to our <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.
                    </div>
                  </form>
                )}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Contact Channels */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-12 text-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">CONTACT OPTIONS</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Other Ways to Get Answers</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
                Our customer support team is available through multiple channels to assist you with any questions or concerns
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700/30 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Send us a detailed message and our team will respond within 24 hours
                </p>
                <a
                  href="mailto:support@toshashipping.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  support@toshashipping.com
                </a>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700/30 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Speak directly with our customer service representatives
                </p>
                <a
                  href="tel:+18005551234"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  +1 (800) 555-1234
                </a>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Mon-Fri: 8AM - 8PM (Your local time)
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700/30 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Get quick answers through our live chat support
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Start Chat
                </Link>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Available 24/7 for urgent inquiries
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
