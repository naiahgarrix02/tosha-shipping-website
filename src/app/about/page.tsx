"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

export default function AboutPage() {
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
              <Link href="/about" className="font-medium text-blue-600 dark:text-blue-400 transition-colors">
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
      <div className="h-[60vh] sm:h-[70vh] bg-blue-900 relative w-full">
        <ParallaxBanner className="h-full w-full absolute inset-0">
          <ParallaxBannerLayer speed={-20}>
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src="/about/about-hero.jpg" 
                alt="Tosha Shipping headquarters" 
                fill 
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
            </div>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={-5} className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20">
              <div className="max-w-3xl">
                <AnimatedElement delay={0}>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-white/20">
                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                    <span className="text-sm font-medium text-white">Our Story</span>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={200}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                    About Tosha Shipping
                  </h1>
                </AnimatedElement>
                
                <AnimatedElement delay={400}>
                  <p className="text-lg sm:text-xl text-white/80 max-w-2xl font-light">
                    Transforming global logistics through innovation, reliability, and a commitment to excellence since 1988.
                  </p>
                </AnimatedElement>
              </div>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedElement>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">OUR JOURNEY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Tosha Shipping Story</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  Founded in 1988 by Captain Robert Tosha, our company began as a small freight forwarding service in Rotterdam with just three employees and a vision to create a more efficient shipping network across Europe.
                </p>
                <p>
                  What started as a modest operation quickly expanded as we pioneered digital tracking systems in the mid-1990s, giving customers unprecedented visibility into their shipments. By 2000, we had established offices in 12 countries and were handling over 10,000 shipments annually.
                </p>
                <p>
                  Through strategic acquisitions and partnerships over the next two decades, Tosha Shipping evolved into the global logistics powerhouse it is today—with operations spanning 150+ countries, an integrated supply chain management platform, and a reputation for reliability that's second to none.
                </p>
                <p>
                  Today, we're proud to serve thousands of businesses worldwide, from small enterprises to Fortune 500 companies, all while maintaining the customer-first approach and innovative spirit that has defined us from day one.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/about/company-history.jpg"
                    alt="Tosha Shipping history"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
          
          {/* Timeline */}
          <div className="mt-24">
            <AnimatedElement>
              <h3 className="text-2xl font-bold text-center mb-16">Our Journey Through the Years</h3>
            </AnimatedElement>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 dark:bg-blue-900/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-24">
                {[
                  {
                    year: "1988",
                    title: "Founded in Rotterdam",
                    desc: "Captain Robert Tosha establishes the company with a focus on European freight forwarding",
                    image: "/about/timeline-1.jpg"
                  },
                  {
                    year: "1995",
                    title: "Digital Transformation",
                    desc: "Pioneered digital shipment tracking, revolutionizing customer visibility",
                    image: "/about/timeline-2.jpg"
                  },
                  {
                    year: "2003",
                    title: "Global Expansion",
                    desc: "Expanded operations to Asia and North America with new regional headquarters",
                    image: "/about/timeline-3.jpg"
                  },
                  {
                    year: "2010",
                    title: "Supply Chain Innovation",
                    desc: "Launched integrated supply chain management platform for enterprise clients",
                    image: "/about/timeline-4.jpg"
                  },
                  {
                    year: "2018",
                    title: "Sustainability Initiative",
                    desc: "Committed to carbon-neutral operations by 2030 with green logistics program",
                    image: "/about/timeline-5.jpg"
                  }
                ].map((item, i) => (
                  <AnimatedElement key={item.year} delay={i * 100}>
                    <div className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-1/2 px-6">
                        <div className={`${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{item.year}</span>
                          <h4 className="text-xl font-bold mt-2 mb-3">{item.title}</h4>
                          <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
                        </div>
                      </div>
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 shadow-lg z-10"></div>
                      
                      <div className="w-1/2 px-6">
                        <div className={`${i % 2 === 0 ? 'ml-6' : 'mr-6'} rounded-lg overflow-hidden shadow-lg`}>
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            width={300} 
                            height={200}
                            className="w-full h-auto" 
                          />
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">OUR PURPOSE</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Mission, Vision & Values</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                Our guiding principles shape everything we do at Tosha Shipping, driving us toward excellence and innovation.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-10">
            <AnimatedElement delay={0}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700/30">
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  To connect businesses globally through reliable, efficient, and sustainable logistics solutions that enable our customers to thrive in an increasingly complex world.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700/30">
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  To be the world's most trusted logistics partner, renowned for our customer-centric approach, technological innovation, and commitment to making global trade more efficient and environmentally responsible.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={400}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700/30">
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Integrity:</strong> We operate with transparency and honesty in all interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Excellence:</strong> We continuously strive to exceed expectations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Innovation:</strong> We embrace change and continuously improve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Sustainability:</strong> We're committed to environmentally responsible operations</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">OUR TEAM</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Meet Our Leadership</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                Experienced professionals guiding our global operations with expertise and vision.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Chen",
                position: "Chief Executive Officer",
                image: "/about/team-1.jpg",
                bio: "Former logistics executive with 25+ years of industry experience. Led Tosha's digital transformation strategy."
              },
              {
                name: "Marcus Rodriguez",
                position: "Chief Operations Officer",
                image: "/about/team-2.jpg",
                bio: "Oversees global operations across 6 continents. Previously managed port operations in Rotterdam."
              },
              {
                name: "Amina Patel",
                position: "Chief Technology Officer",
                image: "/about/team-3.jpg",
                bio: "Tech visionary driving our AI-powered logistics platform and predictive analytics systems."
              },
              {
                name: "David Kim",
                position: "Chief Financial Officer",
                image: "/about/team-4.jpg",
                bio: "Financial strategist with expertise in global markets and sustainable investment practices."
              },
              {
                name: "Leila Ndong",
                position: "VP of Sustainability",
                image: "/about/team-5.jpg",
                bio: "Leading our carbon-neutral initiative and implementing eco-friendly logistics solutions."
              },
              {
                name: "Robert Tosha Jr.",
                position: "Chairman",
                image: "/about/team-6.jpg",
                bio: "Son of founder Robert Tosha, ensuring the company's legacy of innovation continues."
              },
              {
                name: "Carla Mendoza",
                position: "VP of Customer Success",
                image: "/about/team-7.jpg",
                bio: "Customer advocate focused on delivering exceptional service and building long-term relationships."
              },
              {
                name: "James Wilson",
                position: "VP of Global Partnerships",
                image: "/about/team-8.jpg",
                bio: "Develops strategic alliances to expand our service offerings and global reach."
              }
            ].map((member, i) => (
              <AnimatedElement key={member.name} delay={i % 4 * 100}>
                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700/30 hover:shadow-md transition-shadow h-full">
                  <div className="h-64 relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{member.position}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{member.bio}</p>
                    <div className="mt-4 flex gap-3">
                      <a href="#" className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">GLOBAL PRESENCE</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Our Worldwide Network</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                With operations in over 150 countries, we provide seamless logistics solutions on a truly global scale.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700/30">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/about/world-map.jpg"
                  alt="Tosha Shipping Global Presence"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40 dark:bg-blue-900/60"></div>

                {/* Location markers - these would ideally be positioned accurately on the map */}
                {[
                  { top: "30%", left: "20%", label: "New York" },
                  { top: "25%", left: "48%", label: "Rotterdam" },
                  { top: "35%", left: "55%", label: "Dubai" },
                  { top: "40%", left: "77%", label: "Singapore" },
                  { top: "30%", left: "80%", label: "Shanghai" },
                  { top: "65%", left: "85%", label: "Sydney" },
                  { top: "60%", left: "35%", label: "São Paulo" },
                  { top: "15%", left: "68%", label: "Moscow" },
                  { top: "48%", left: "52%", label: "Cape Town" }
                ].map((marker, i) => (
                  <div key={i} className="absolute z-10 animate-pulse-slow" style={{ top: marker.top, left: marker.left }}>
                    <div className="relative">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <div className="absolute -inset-1 rounded-full bg-blue-500 opacity-40 animate-ping"></div>
                      <div className="absolute left-5 top-0 whitespace-nowrap bg-blue-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                        {marker.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { region: "North America", offices: "23 offices", staff: "1,200+ employees" },
              { region: "Europe", offices: "47 offices", staff: "3,500+ employees" },
              { region: "Asia Pacific", offices: "38 offices", staff: "2,800+ employees" },
              { region: "Rest of World", offices: "42 offices", staff: "1,500+ employees" }
            ].map((region, i) => (
              <AnimatedElement key={region.region} delay={i * 100}>
                <div className="text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/30">
                  <h3 className="text-lg font-bold mb-2">{region.region}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{region.offices}</p>
                  <p className="text-slate-600 dark:text-slate-300">{region.staff}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition and awards */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">RECOGNITION</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Awards & Recognition</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                Our commitment to excellence has been recognized by industry experts and organizations worldwide.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { award: "Best Global Logistics Provider", year: "2023", org: "Global Shipping Awards" },
              { award: "Supply Chain Innovation Award", year: "2022", org: "LogTech Summit" },
              { award: "Environmental Leadership", year: "2021", org: "Sustainable Logistics Federation" },
              { award: "Customer Service Excellence", year: "2023", org: "International Service Awards" },
              { award: "Top Employer Award", year: "2022", org: "Logistics Talent Council" },
              { award: "Digital Transformation Leader", year: "2021", org: "Supply Chain Tech Forum" },
              { award: "Customs Compliance Excellence", year: "2023", org: "Global Trade Association" },
              { award: "Safety First Award", year: "2022", org: "International Safety Council" }
            ].map((award, i) => (
              <AnimatedElement key={award.award} delay={i % 4 * 100}>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700/30 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{award.award}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">{award.org}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{award.year}</p>
                </div>
              </AnimatedElement>
            ))}
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
                <span className="inline-block px-4 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm font-medium mb-6">Join Our Team</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Build your career with us</h2>
                <p className="text-blue-100 max-w-lg">
                  We're always looking for talented individuals who are passionate about logistics and innovation. Explore career opportunities at Tosha Shipping.
                </p>
              </div>
            </AnimatedElement>
            
            <Link 
              href="/careers"
              className="bg-white hover:bg-blue-50 text-blue-900 transition-all py-4 px-8 rounded-lg font-medium text-base whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10"
            >
              View Open Positions
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
