"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";

// Sample news data
const newsItems = [
  {
    id: "news-1",
    title: "Tosha Shipping Launches New Sustainable Fleet Initiative",
    excerpt: "Our company announces a $50 million investment in LNG-powered vessels as part of our commitment to reduce carbon emissions by 40% by 2030.",
    category: "Press Release",
    date: "November 18, 2023",
    image: "/news/sustainable-fleet.jpg",
    featured: true
  },
  {
    id: "news-2",
    title: "Tosha Shipping Opens New Regional Hub in Singapore",
    excerpt: "Expanding our presence in Asia with a state-of-the-art logistics center to better serve the growing market demand in the APAC region.",
    category: "Company Update",
    date: "November 10, 2023",
    image: "/news/singapore-hub.jpg",
    featured: true
  },
  {
    id: "news-3",
    title: "Quarterly Earnings Report Shows 15% Growth in Container Volume",
    excerpt: "Tosha Shipping reports strong Q3 results with significant growth in container shipping volume despite global supply chain challenges.",
    category: "Financial News",
    date: "October 30, 2023",
    image: "/news/financial-report.jpg",
    featured: false
  },
  {
    id: "news-4",
    title: "Tosha Shipping Partners with GreenOcean Alliance to Protect Marine Life",
    excerpt: "New partnership aims to implement innovative approaches to reduce shipping's impact on marine ecosystems worldwide.",
    category: "Sustainability",
    date: "October 22, 2023",
    image: "/news/marine-conservation.jpg",
    featured: false
  },
  {
    id: "news-5",
    title: "Tosha Named 'Logistics Company of the Year' at Industry Awards",
    excerpt: "Our company has been recognized for excellence in global shipping services, technological innovation, and customer satisfaction.",
    category: "Awards",
    date: "October 15, 2023",
    image: "/news/award.jpg",
    featured: false
  },
  {
    id: "news-6",
    title: "Tosha Shipping Implements Blockchain Technology for Cargo Tracking",
    excerpt: "Revolutionary blockchain implementation provides end-to-end shipment visibility and enhanced security for our clients.",
    category: "Technology",
    date: "October 8, 2023",
    image: "/news/blockchain.jpg",
    featured: false
  },
  {
    id: "news-7",
    title: "Tosha Shipping Expands European Road Transportation Network",
    excerpt: "New fleet additions and route expansions strengthen our cross-European logistics capabilities with faster transit times.",
    category: "Company Update",
    date: "September 29, 2023",
    image: "/news/european-expansion.jpg",
    featured: false
  },
  {
    id: "news-8",
    title: "CEO Sarah Chen Speaks at Global Supply Chain Forum",
    excerpt: "Our CEO discussed future trends in global logistics and Tosha's strategy to address emerging challenges in international shipping.",
    category: "Events",
    date: "September 20, 2023",
    image: "/news/ceo-forum.jpg",
    featured: false
  },
  {
    id: "news-9",
    title: "Tosha Shipping Celebrates 15 Years of Excellence",
    excerpt: "Anniversary marks a decade and a half of innovation and leadership in the global shipping and logistics industry.",
    category: "Company Update",
    date: "September 12, 2023",
    image: "/news/anniversary.jpg",
    featured: false
  },
];

// Get unique categories from news items
const categories = ["All Categories", ...Array.from(new Set(newsItems.map(item => item.category)))];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  
  // Filter news items based on selected category
  const filteredNews = activeCategory === "All Categories" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);
  
  // Separate featured news for the featured section
  const featuredNews = newsItems.filter(item => item.featured);

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedElement>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-white/20">
                  <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                  <span className="text-sm font-medium text-white">Company Announcements</span>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News & Updates</h1>
                <p className="text-lg text-blue-100">
                  Stay informed about our company's latest announcements, achievements, and industry developments.
                </p>
              </AnimatedElement>
            </div>
            
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl"></div>
              <div className="relative p-6">
                <Image 
                  src="/world-map-dots.svg" 
                  alt="Global Shipping Network" 
                  width={500} 
                  height={300}
                  className="w-full h-auto text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-slate-200 dark:border-slate-800/30 sticky top-0 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md z-10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="overflow-x-auto py-4 no-scrollbar">
            <div className="flex gap-2 min-w-max">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured News - Only show when viewing all categories */}
      {activeCategory === "All Categories" && (
        <section className="py-16">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <AnimatedElement>
              <div className="flex flex-col mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-10 bg-blue-500"></span>
                  <span className="text-blue-500 font-medium tracking-wider text-sm">FEATURED</span>
                  <span className="h-px w-10 bg-blue-500"></span>
                </div>
                <h2 className="text-3xl font-bold">Latest Announcements</h2>
              </div>
            </AnimatedElement>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => (
                <AnimatedElement key={item.id} delay={index * 100}>
                  <Link href={`/news/${item.id}`} className="group block">
                    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700/30 h-full">
                      <div className="relative h-64 w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                          {item.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>
                          <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">Read more</span>
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
      
      {/* All News Items */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col mb-12">
              <h2 className="text-3xl font-bold">
                {activeCategory === "All Categories" ? "All News" : activeCategory}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-3">
                {filteredNews.length} {filteredNews.length === 1 ? 'item' : 'items'} {activeCategory !== "All Categories" ? `in ${activeCategory}` : ''}
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <AnimatedElement key={item.id} delay={index % 3 * 100}>
                <Link href={`/news/${item.id}`} className="group block">
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700/30 h-full">
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500 dark:text-slate-400">{item.date}</span>
                        <span className="text-blue-600 dark:text-blue-400 text-xs font-medium group-hover:underline">Read more</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      
      {/* Media Contact Section */}
      <section className="py-16 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/30 overflow-hidden shadow-sm">
              <div className="md:flex">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-px w-10 bg-blue-500"></span>
                    <span className="text-blue-500 font-medium tracking-wider text-sm">MEDIA INQUIRIES</span>
                    <span className="h-px w-10 bg-blue-500"></span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Press & Media Contact</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    For media inquiries, interview requests, or press kit materials, please contact our communications team.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white">Email</h3>
                        <a href="mailto:press@toshashipping.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                          press@toshashipping.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white">Phone</h3>
                        <a href="tel:+18005551234" className="text-blue-600 dark:text-blue-400 hover:underline">
                          +1 (800) 555-9876
                        </a>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          Monday-Friday, 9AM-5PM ET
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white">Press Kit</h3>
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                          Download Press Kit (PDF, 4.2MB)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-12 flex items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Media Assets</h3>
                    <p className="text-blue-100 mb-6">
                      Access our latest company logos, executive photos, and approved imagery for press purposes.
                    </p>
                    <a 
                      href="#"
                      className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-5 py-2.5 rounded-lg font-medium transition-colors"
                    >
                      View Media Library
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl animated-gradient">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl floating-animation"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl floating-animation-reverse"></div>
            
            <AnimatedElement>
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-blue-100 mb-8">
                  Subscribe to our newsletter to receive company announcements, industry news, and insights directly to your inbox.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow py-3 px-6 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-blue-50 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                  >
                    Subscribe
                  </button>
                </form>
                
                <p className="text-xs text-blue-200 mt-4">
                  By subscribing, you agree to our <Link href="/privacy" className="underline hover:text-white">privacy policy</Link>. 
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
