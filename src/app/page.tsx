'use client';

import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "../components/AnimatedElement";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/30">
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

      {/* Mobile Menu - Hidden by default */}
      <div className="fixed inset-0 bg-[#0F172A]/98 z-40 hidden md:hidden">
        <div className="flex flex-col h-full p-6 pt-20">
          <nav className="flex flex-col gap-4">
            <Link href="/services" className="text-white text-xl py-2 border-b border-gray-800">
              Services
            </Link>
            <Link href="/about" className="text-white text-xl py-2 border-b border-gray-800">
              About
            </Link>
            <Link href="/tracking" className="text-white text-xl py-2 border-b border-gray-800">
              Track Shipment
            </Link>
            <Link href="/contact" className="text-white text-xl py-2 border-b border-gray-800">
              Contact
            </Link>
            <Link href="/login" className="bg-blue-600 text-white py-3 mt-4 rounded-md text-center">
              Client Login
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Section with Parallax Effect */}
      <div className="w-full h-screen bg-blue-900">
        <ParallaxBanner className="w-full h-full absolute inset-0">
          {/* Background image layer */}
          <ParallaxBannerLayer speed={-20}>
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src="/logistics-hero.png" 
                alt="Tosha Shipping operations" 
                fill 
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/70"></div>
            </div>
          </ParallaxBannerLayer>
          
          {/* Decorative floating elements */}
          <ParallaxBannerLayer speed={-5}>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          </ParallaxBannerLayer>
          
          <ParallaxBannerLayer speed={10}>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
          </ParallaxBannerLayer>
          
          <ParallaxBannerLayer speed={-8}>
            <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl"></div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
        
        {/* Content layer with interactive elements */}
        <div className="absolute inset-0 w-full h-full flex items-center z-20 pt-16">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <div className="max-w-3xl">
              {/* Label */}
              <AnimatedElement delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-8 border border-white/20 animate-pulse-slow">
                  <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                  <span className="text-sm font-medium text-white">Premium Logistics Partner</span>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-8">
                  Redefining Global <br />
                  <span className="text-blue-300">Shipping Excellence</span>
                </h1>
              </AnimatedElement>
              
              <AnimatedElement delay={400}>
                <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl font-light">
                  Tosha Shipping delivers seamless end-to-end logistics solutions engineered for enterprise efficiency and refined with precision.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link 
                    href="/services"
                    className="bg-blue-500 text-white hover:bg-blue-600 transition-all py-4 px-8 rounded-lg font-medium text-base w-full sm:w-auto text-center shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-1"
                  >
                    Explore Solutions
                  </Link>
                  <Link 
                    href="/contact"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all py-4 px-8 rounded-lg font-medium text-base w-full sm:w-auto text-center hover:-translate-y-1"
                  >
                    Request a Quote
                  </Link>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center text-white/70 animate-bounce-slow z-20">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Services Section with Reveal Animations */}
      <section className="py-24 sm:py-32 bg-white dark:bg-[#0F172A] relative overflow-hidden">
        {/* Parallax decorative elements using react-scroll-parallax */}
        <Parallax speed={-5} className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/50 dark:from-blue-900/10 to-transparent"></Parallax>
        <Parallax speed={10} className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></Parallax>
        <Parallax speed={-10} className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 dark:bg-blue-800/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></Parallax>
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-20">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">OUR EXPERTISE</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">Comprehensive Shipping Services</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                We offer end-to-end solutions tailored to your business needs with unparalleled precision and efficiency.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Shipping",
                desc: "International freight services with real-time tracking and customs expertise.",
                icon: "/icons/ship-icon.svg"
              },
              {
                title: "Supply Chain Optimization",
                desc: "End-to-end visibility and efficiency improvements through advanced analytics.",
                icon: "/icons/chain-icon.svg"
              },
              {
                title: "Warehousing",
                desc: "Strategic storage solutions with inventory management and distribution services.",
                icon: "/icons/warehouse-icon.svg"
              }
            ].map((service, i) => (
              <AnimatedElement key={service.title} delay={i * 200}>
                <div className="bg-slate-50 dark:bg-slate-800/30 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-slate-100 dark:border-slate-700/30">
                  <div className="w-16 h-16 bg-blue-100/70 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors">
                    <Image src={service.icon} alt={service.title} width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{service.desc}</p>
                  <div className="mt-8 flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ParallaxBanner className="py-20 sm:py-28 relative">
        <ParallaxBannerLayer speed={-10}>
          <div className="absolute inset-0 bg-blue-900"></div>
          <div className="absolute inset-0 bg-[url('/world-map-dots.svg')] bg-no-repeat bg-center opacity-10"></div>
        </ParallaxBannerLayer>
        
        <ParallaxBannerLayer speed={-5}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl"></div>
        </ParallaxBannerLayer>
        
        <ParallaxBannerLayer speed={5}>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl"></div>
        </ParallaxBannerLayer>
        
        <ParallaxBannerLayer speed={0} className="py-20 sm:py-28">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "98%", label: "On-Time Delivery" },
                { number: "150+", label: "Countries Served" },
                { number: "24/7", label: "Customer Support" },
                { number: "35+", label: "Years of Excellence" }
              ].map((stat, i) => (
                <AnimatedElement key={stat.number} delay={i * 200}>
                  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-blue-300">{stat.number}</p>
                    <p className="text-slate-200">{stat.label}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">TESTIMONIALS</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">Trusted by Industry Leaders</h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Tosha Shipping transformed our supply chain efficiency, reducing costs by 32% in the first year while improving delivery times.",
                author: "Sarah Chen",
                position: "Operations Director, TechGlobal Inc.",
                image: "/testimonials/sarah.jpg"
              },
              {
                quote: "The level of service and attention to detail is unmatched. They've been instrumental in our international expansion.",
                author: "Marcus Rodriguez",
                position: "CEO, Novus Enterprises",
                image: "/testimonials/marcus.jpg"
              }
            ].map((item, i) => (
              <AnimatedElement key={item.author} delay={i * 200}>
                <div className="bg-white dark:bg-slate-800/30 p-10 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700/20 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex gap-2 mb-6">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className="text-blue-500">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-8 italic">{item.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src={item.image} alt={item.author} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.author}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{item.position}</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 md:p-16 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl animated-gradient">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl floating-animation"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl floating-animation-reverse"></div>
            
            <AnimatedElement>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm font-medium mb-6">Get Started Today</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to optimize your shipping?</h2>
                <p className="text-blue-100 max-w-lg">
                  Connect with our experts to discover how Tosha Shipping's premium solutions can transform your supply chain and elevate your business.
                </p>
              </div>
            </AnimatedElement>
            
            <Link 
              href="/contact"
              className="bg-white hover:bg-blue-50 text-blue-900 transition-all py-4 px-8 rounded-lg font-medium text-base whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-slate-400 py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="md:max-w-xs">
              <Image
                src="/logo-white.svg"
                alt="Tosha Shipping"
                width={160}
                height={40}
                className="mb-6"
              />
              <p className="mb-6">
                Premium shipping solutions delivering excellence across the global supply chain.
              </p>
              <div className="flex gap-4">
                {["twitter", "linkedin", "facebook"].map(platform => (
                  <a key={platform} href={`https://${platform}.com/company`} className="hover:text-blue-500 transition-colors">
                    <span className="sr-only">{platform}</span>
                    <div className="w-8 h-8 border border-slate-700 rounded-full flex items-center justify-center hover:border-blue-500">
                      {/* Icon placeholder */}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              {[
                {
                  title: "Services",
                  links: [
                    { name: "Global Shipping", href: "/services#global-shipping" },
                    { name: "Supply Chain", href: "/services#supply-chain" },
                    { name: "Warehousing", href: "/services#warehousing" },
                    { name: "Customs Clearance", href: "/services" },
                    { name: "Freight Forwarding", href: "/services" }
                  ]
                },
                {
                  title: "Company",
                  links: [
                    { name: "About Us", href: "/about" },
                    { name: "Leadership", href: "/about#leadership" },
                    { name: "Careers", href: "/careers" },
                    { name: "News", href: "/news" },
                    { name: "Contact", href: "/contact" }
                  ]
                },
                {
                  title: "Resources",
                  links: [
                    { name: "Blog", href: "/blog" },
                    { name: "Case Studies", href: "/case-studies" },
                    { name: "Industry Insights", href: "/insights" },
                    { name: "FAQs", href: "/faqs" },
                    { name: "Terms of Service", href: "/terms" }
                  ]
                }
              ].map((column, i) => (
                <div key={i}>
                  <h3 className="text-white font-semibold mb-4">{column.title}</h3>
                  <ul className="space-y-3">
                    {column.links.map((link, j) => (
                      <li key={j}>
                        <Link href={link.href} className="hover:text-blue-500 transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between gap-4">
            <p>© 2023 Tosha Shipping. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
