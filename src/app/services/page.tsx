"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";

export default function ServicesPage() {
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
              <Link href="/services" className="font-medium text-blue-600 dark:text-blue-400 transition-colors">
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
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl floating-animation-reverse"></div>
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Comprehensive Shipping Services</h1>
            <p className="text-blue-100 text-lg mb-8">
              From complex global supply chains to simple direct shipping, we offer tailored logistics solutions to meet your business needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#global-shipping" className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition-colors">
                Global Shipping
              </a>
              <a href="#supply-chain" className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition-colors">
                Supply Chain
              </a>
              <a href="#warehousing" className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition-colors">
                Warehousing
              </a>
              <a href="#pricing" className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition-colors">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement className="mb-12">
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">OUR SOLUTIONS</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Complete Logistics Ecosystem</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                We provide a full spectrum of shipping and logistics services designed to optimize your supply chain and enhance your business operations globally.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: "150+", label: "Countries served worldwide" },
                { number: "25,000+", label: "Shipments delivered monthly" },
                { number: "5M+", label: "Square feet of warehouse space" },
                { number: "99.8%", label: "On-time delivery rate" }
              ].map((stat, i) => (
                <AnimatedElement key={i} delay={i * 100} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/30 text-center">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</p>
                  <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Global Shipping Service */}
      <section id="global-shipping" className="py-16 md:py-24 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10">
                <Image
                  src="/services/global-shipping.jpg"
                  alt="Global Shipping Services"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">CORE SERVICE</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Global Shipping & Freight Forwarding</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Our comprehensive global shipping services connect businesses to markets worldwide with reliability and efficiency. We handle your cargo with precision across sea, air, and ground transportation.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Sea Freight: FCL and LCL shipping options with competitive rates",
                  "Air Freight: Express, standard, and charter services worldwide",
                  "Ground Transportation: Trucking, rail, and intermodal solutions",
                  "Customs Clearance: Expert handling of all documentation",
                  "Real-time Tracking: Monitor your shipments 24/7"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Shipping Quote
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Supply Chain Service */}
      <section id="supply-chain" className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement className="order-2 md:order-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">OPTIMIZATION</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Supply Chain Solutions</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Transform your supply chain with our advanced analytics and optimization services. We help businesses reduce costs, improve efficiency, and gain full visibility into their logistics operations.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "End-to-end supply chain visibility through our digital platform",
                  "Advanced analytics for continuous optimization",
                  "Inventory management and demand forecasting",
                  "Risk assessment and contingency planning",
                  "Sustainable and eco-friendly logistics options"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Schedule Consultation
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </AnimatedElement>
            
            <AnimatedElement delay={200} className="order-1 md:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10">
                <Image
                  src="/services/supply-chain.jpg"
                  alt="Supply Chain Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Warehousing Service */}
      <section id="warehousing" className="py-16 md:py-24 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10">
                <Image
                  src="/services/warehousing.jpg"
                  alt="Warehousing and Distribution"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">DISTRIBUTION</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Warehousing & Fulfillment</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Our strategic warehousing network spans key global markets, providing secure storage and efficient distribution services to support your business growth and customer satisfaction.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Strategically located warehouses in major global markets",
                  "Short and long-term storage solutions",
                  "Pick, pack and fulfillment services",
                  "Inventory management systems integration",
                  "Specialized handling for sensitive or regulated goods"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Warehousing
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">SPECIALIZED SOLUTIONS</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl font-bold text-center mb-6">Tailored for Your Industry</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                We understand that different industries have unique logistics requirements. Our specialized services are designed to address specific challenges across sectors.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cold Chain Logistics",
                desc: "Temperature-controlled shipping for pharmaceuticals, food, and other sensitive products requiring consistent temperature maintenance.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              },
              {
                title: "Hazardous Materials",
                desc: "Certified handling and transportation of hazardous goods with strict adherence to international safety regulations.",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              },
              {
                title: "Project Cargo",
                desc: "Specialized handling of oversized, heavy, high-value, or critical project cargo that requires customized shipping solutions.",
                icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
              },
              {
                title: "E-Commerce Fulfillment",
                desc: "Integrated solutions for online retailers with fast picking, packing, and shipping to meet customer expectations.",
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              },
              {
                title: "Customs Brokerage",
                desc: "Expert management of customs documentation, duties, and compliance to ensure smooth border crossings.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              {
                title: "Consultancy Services",
                desc: "Strategic logistics consulting to optimize your supply chain, reduce costs, and improve operational efficiency.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              }
            ].map((service, i) => (
              <AnimatedElement key={service.title} delay={i * 100}>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/30 hover:shadow-md transition-shadow h-full">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{service.desc}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">PRICING PLANS</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl font-bold text-center mb-6">Transparent Pricing Options</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                Choose from our flexible service plans designed to accommodate businesses of all sizes, from startups to enterprise organizations.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Standard",
                price: "$1,999",
                description: "Perfect for small businesses with occasional shipping needs",
                features: [
                  "Basic freight forwarding",
                  "Standard tracking",
                  "Email support",
                  "Basic customs clearance",
                  "Monthly reporting"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Business",
                price: "$4,999",
                description: "Ideal for growing businesses with regular logistics requirements",
                features: [
                  "Advanced freight forwarding",
                  "Real-time tracking",
                  "Priority support (24/7)",
                  "Complete customs management",
                  "Weekly reporting",
                  "Warehousing options",
                  "Supply chain consultation"
                ],
                cta: "Get Started",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Tailored solutions for large businesses with complex needs",
                features: [
                  "Global freight management",
                  "Advanced supply chain analytics",
                  "Dedicated account manager",
                  "Custom integration",
                  "End-to-end visibility",
                  "Risk assessment",
                  "Sustainability options"
                ],
                cta: "Contact Us",
                popular: false
              }
            ].map((plan, i) => (
              <AnimatedElement key={plan.name} delay={i * 100}>
                <div className={`rounded-2xl overflow-hidden h-full flex flex-col ${
                  plan.popular 
                    ? "border-2 border-blue-500 shadow-xl shadow-blue-500/10 dark:border-blue-400" 
                    : "border border-slate-200 dark:border-slate-700 shadow-lg"
                }`}>
                  <div className={`p-8 ${plan.popular ? "bg-blue-500 text-white" : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white"}`}>
                    {plan.popular && (
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-4">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-sm opacity-70">/month</span>}
                    </div>
                    <p className={`text-sm ${plan.popular ? "text-blue-100" : "text-slate-600 dark:text-slate-300"}`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <div className={`flex-grow p-8 ${
                    plan.popular 
                      ? "bg-white/50 backdrop-blur-sm dark:bg-slate-800/70" 
                      : "bg-white dark:bg-slate-800"
                  }`}>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <svg className={`w-5 h-5 ${plan.popular ? "text-blue-500" : "text-green-500"} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href="/contact"
                      className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all block hover:-translate-y-0.5 ${
                        plan.popular 
                          ? "bg-blue-600 hover:bg-blue-700 text-white" 
                          : "bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Need custom shipping solutions?{" "}
              <Link href="/contact" className="text-blue-600 hover:underline dark:text-blue-400">
                Contact our team
              </Link>{" "}
              to discuss your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">FAQ</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                Find answers to common questions about our shipping and logistics services.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How do I get a shipping quote?",
                a: "You can request a shipping quote by filling out our online form, calling our customer service, or emailing our sales team. We'll need details about your shipment including origin, destination, dimensions, weight, and any special requirements."
              },
              {
                q: "What tracking options do you provide?",
                a: "We offer real-time tracking through our online portal, mobile app, email notifications, and SMS alerts. Our enterprise clients also receive customized tracking dashboards with detailed analytics."
              },
              {
                q: "How do you handle customs clearance?",
                a: "Our customs brokerage team manages the entire customs clearance process, including document preparation, tariff classification, duty calculation, and compliance with local regulations to ensure smooth border crossings."
              },
              {
                q: "What industries do you specialize in?",
                a: "We serve a wide range of industries including retail, manufacturing, pharmaceuticals, automotive, technology, food and beverage, and more, with specialized solutions tailored to each sector's unique requirements."
              },
              {
                q: "Do you offer environmentally friendly shipping options?",
                a: "Yes, we offer green logistics solutions including carbon offset programs, optimized routing to reduce emissions, and partnerships with carriers committed to sustainability practices."
              },
              {
                q: "How do you handle shipping delays?",
                a: "We proactively monitor shipments and immediately notify clients of potential delays. Our team works to find alternative solutions, and we maintain contingency plans for common disruptions to minimize impact on your supply chain."
              }
            ].map((faq, i) => (
              <AnimatedElement key={i} delay={i * 100}>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800">
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.a}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Have more questions?{" "}
              <Link href="/contact" className="text-blue-600 hover:underline dark:text-blue-400">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 md:p-16 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl animated-gradient">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl floating-animation"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl floating-animation-reverse"></div>
            
            <AnimatedElement>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm font-medium mb-6">Request a Quote Today</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to streamline your logistics?</h2>
                <p className="text-blue-100 max-w-lg">
                  Our team of experts is ready to help you design a custom shipping solution that meets your business needs and budget.
                </p>
              </div>
            </AnimatedElement>
            
            <Link 
              href="/contact"
              className="bg-white hover:bg-blue-50 text-blue-900 transition-all py-4 px-8 rounded-lg font-medium text-base whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10"
            >
              Get Started
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
