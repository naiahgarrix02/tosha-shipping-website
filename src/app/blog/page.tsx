"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";

// Sample blog post data
const blogPosts = [
  {
    id: "1",
    title: "The Future of Sustainable Shipping: Carbon-Neutral Freight",
    excerpt: "Discover how the shipping industry is working towards carbon neutrality and what Tosha Shipping is doing to lead this important transition.",
    category: "Sustainability",
    author: "Sarah Chen",
    authorRole: "CEO",
    date: "November 12, 2023",
    readTime: "5 min read",
    image: "/blog/sustainable-shipping.jpg",
    featured: true
  },
  {
    id: "2",
    title: "How AI is Revolutionizing Supply Chain Management",
    excerpt: "Artificial intelligence is transforming how goods move around the world. Learn about the latest innovations and their impact on efficiency.",
    category: "Technology",
    author: "Amina Patel",
    authorRole: "CTO",
    date: "November 5, 2023",
    readTime: "8 min read",
    image: "/blog/ai-supply-chain.jpg",
    featured: true
  },
  {
    id: "3",
    title: "Global Port Congestion: Causes and Solutions",
    excerpt: "Port congestion has been a major challenge in recent years. We analyze the root causes and explore practical solutions for shippers.",
    category: "Industry News",
    author: "Marcus Rodriguez",
    authorRole: "COO",
    date: "October 28, 2023",
    readTime: "6 min read",
    image: "/blog/port-congestion.jpg",
    featured: false
  },
  {
    id: "4",
    title: "The Complete Guide to International Shipping Documentation",
    excerpt: "Navigate the complex world of international shipping paperwork with our comprehensive guide to required documentation.",
    category: "Guides",
    author: "Jenny Kim",
    authorRole: "Logistics Specialist",
    date: "October 22, 2023",
    readTime: "10 min read",
    image: "/blog/shipping-documentation.jpg",
    featured: false
  },
  {
    id: "5",
    title: "Q3 2023 Global Freight Market Analysis",
    excerpt: "Our analysis of the current freight market trends, rates, and forecasts for the coming months based on global economic indicators.",
    category: "Market Analysis",
    author: "David Kim",
    authorRole: "CFO",
    date: "October 15, 2023",
    readTime: "7 min read",
    image: "/blog/market-analysis.jpg",
    featured: false
  },
  {
    id: "6",
    title: "Case Study: How We Optimized Automotive Parts Logistics",
    excerpt: "Learn how we helped a major automotive manufacturer reduce shipping times by 30% while cutting logistics costs by 15%.",
    category: "Case Studies",
    author: "Carla Mendoza",
    authorRole: "VP of Customer Success",
    date: "October 8, 2023",
    readTime: "6 min read",
    image: "/blog/automotive-case-study.jpg",
    featured: false
  },
  {
    id: "7",
    title: "Navigating New IMO 2023 Emissions Regulations",
    excerpt: "The International Maritime Organization has introduced new emissions standards. Here's what shippers need to know to ensure compliance.",
    category: "Regulations",
    author: "James Wilson",
    authorRole: "VP of Global Partnerships",
    date: "September 30, 2023",
    readTime: "5 min read",
    image: "/blog/imo-regulations.jpg",
    featured: false
  },
  {
    id: "8",
    title: "5 Ways to Reduce Costs in Your Supply Chain",
    excerpt: "Practical tips for businesses looking to optimize their supply chain operations and reduce overall logistics costs without sacrificing quality.",
    category: "Tips & Tricks",
    author: "Linda Osei",
    authorRole: "Supply Chain Analyst",
    date: "September 23, 2023",
    readTime: "4 min read",
    image: "/blog/cost-reduction.jpg",
    featured: false
  },
  {
    id: "9",
    title: "The Rise of Digital Freight Forwarding",
    excerpt: "How technology is transforming traditional freight forwarding and what this means for the future of logistics management.",
    category: "Technology",
    author: "Amina Patel",
    authorRole: "CTO",
    date: "September 16, 2023",
    readTime: "7 min read",
    image: "/blog/digital-forwarding.jpg",
    featured: false
  },
];

// Get unique categories from blog posts
const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter posts based on selected category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  // Separate featured posts for the featured section
  const featuredPosts = blogPosts.filter(post => post.featured);

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
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-white/20">
                <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                <span className="text-sm font-medium text-white">Insights & News</span>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tosha Shipping Blog</h1>
              <p className="text-lg text-blue-100">
                Expert insights on global logistics, shipping trends, and supply chain optimization to help your business succeed.
              </p>
            </AnimatedElement>
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
      
      {/* Featured Posts - Only show when viewing "All" */}
      {activeCategory === "All" && (
        <section className="py-16">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <AnimatedElement>
              <div className="flex flex-col mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-10 bg-blue-500"></span>
                  <span className="text-blue-500 font-medium tracking-wider text-sm">FEATURED</span>
                  <span className="h-px w-10 bg-blue-500"></span>
                </div>
                <h2 className="text-3xl font-bold">Latest Insights</h2>
              </div>
            </AnimatedElement>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <AnimatedElement key={post.id} delay={index * 100}>
                  <Link href={`/blog/${post.id}`} className="group block">
                    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700/30 h-full">
                      <div className="relative h-64 w-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-800 dark:text-blue-200 font-semibold text-sm mr-2">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{post.author}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">{post.authorRole}</p>
                            </div>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {post.date} · {post.readTime}
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
      
      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col mb-12">
              <h2 className="text-3xl font-bold">
                {activeCategory === "All" ? "All Articles" : activeCategory}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-3">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} {activeCategory !== "All" ? `in ${activeCategory}` : ''}
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <AnimatedElement key={post.id} delay={index % 3 * 100}>
                <Link href={`/blog/${post.id}`} className="group block">
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700/30 h-full">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
          
          {/* Load More Button - Could be implemented with pagination */}
          {filteredPosts.length > 6 && (
            <div className="flex justify-center mt-12">
              <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <section className="py-16 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl animated-gradient">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl floating-animation"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl floating-animation-reverse"></div>
            
            <AnimatedElement>
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated on Shipping Trends</h2>
                <p className="text-blue-100 mb-8">
                  Subscribe to our newsletter to get the latest insights on global logistics, shipping best practices, and supply chain optimization.
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
