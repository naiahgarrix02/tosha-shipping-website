"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";
import { useState } from "react";

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  // Job listings data
  const jobs = [
    {
      id: "job-001",
      title: "Logistics Coordinator",
      department: "Operations",
      location: "Rotterdam, Netherlands",
      type: "Full-time",
      description: "Coordinate and oversee the daily logistics operations, including shipment scheduling, carrier selection, and route optimization.",
      requirements: [
        "Bachelor's degree in Supply Chain Management, Logistics, or related field",
        "2+ years of experience in logistics coordination",
        "Proficiency in logistics management software",
        "Strong analytical skills and attention to detail"
      ],
      posted: "2 weeks ago"
    },
    {
      id: "job-002",
      title: "Supply Chain Analyst",
      department: "Analytics",
      location: "Singapore",
      type: "Full-time",
      description: "Analyze supply chain data to identify inefficiencies and recommend improvements to optimize the company's logistics operations.",
      requirements: [
        "Bachelor's degree in Analytics, Supply Chain Management, or related field",
        "3+ years of experience in data analysis within supply chain contexts",
        "Advanced Excel and SQL skills",
        "Experience with visualization tools like Tableau or Power BI"
      ],
      posted: "1 week ago"
    },
    {
      id: "job-003",
      title: "Customs Compliance Specialist",
      department: "Legal",
      location: "New York, United States",
      type: "Full-time",
      description: "Ensure all shipments comply with international customs regulations and manage documentation for smooth border crossings.",
      requirements: [
        "Bachelor's degree in International Trade, Law, or related field",
        "4+ years of experience in customs compliance",
        "Knowledge of international trade regulations",
        "Experience with customs documentation software"
      ],
      posted: "3 days ago"
    },
    {
      id: "job-004",
      title: "Fleet Manager",
      department: "Operations",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Oversee company vehicle fleet operations, maintenance schedules, and driver management to ensure efficient ground transportation.",
      requirements: [
        "Bachelor's degree in Logistics, Transportation, or related field",
        "5+ years of experience in fleet management",
        "Knowledge of DOT regulations and compliance requirements",
        "Experience with fleet management software"
      ],
      posted: "1 month ago"
    },
    {
      id: "job-005",
      title: "Software Developer - Logistics Platform",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      description: "Develop and maintain our proprietary logistics management platform, focusing on real-time tracking and analytics features.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with React, Node.js, and modern JavaScript",
        "Experience with GIS and mapping technologies",
        "Knowledge of logistics industry a plus"
      ],
      posted: "2 days ago"
    },
    {
      id: "job-006",
      title: "Warehouse Operations Manager",
      department: "Operations",
      location: "Shanghai, China",
      type: "Full-time",
      description: "Manage daily warehouse operations, including inventory control, staff supervision, and process optimization.",
      requirements: [
        "Bachelor's degree in Supply Chain Management or related field",
        "5+ years of experience in warehouse management",
        "Experience with warehouse management systems",
        "Strong leadership and problem-solving skills"
      ],
      posted: "1 week ago"
    },
  ];

  // Filter jobs based on active tab
  const filteredJobs = activeTab === "all" 
    ? jobs 
    : jobs.filter(job => job.department.toLowerCase() === activeTab.toLowerCase());

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
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl floating-animation-reverse"></div>
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Global Team</h1>
            <p className="text-blue-100 text-lg mb-8">
              Build your career with an industry leader that values innovation, collaboration, and making a global impact through logistics excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#openings" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all">
                View Open Positions
              </a>
              <a href="#culture" className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
                Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section id="culture" className="py-16 md:py-24 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">WHY JOIN US</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Our Culture & Values</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-center">
                At Tosha Shipping, we're more than just a logistics company. We're a global team united by shared values and a passion for excellence in everything we do.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Innovation",
                description: "We embrace new ideas and technologies to continuously improve our services and operations.",
                icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              },
              {
                title: "Excellence",
                description: "We strive for exceptional quality in our work, setting high standards and consistently meeting them.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork, fostering an inclusive environment where diverse perspectives are valued.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              },
              {
                title: "Integrity",
                description: "We operate with transparency and ethical practices, building trust with our team members and clients.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Global Mindset",
                description: "We embrace cultural diversity and think globally while acting locally to meet regional needs.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Sustainability",
                description: "We're committed to environmentally responsible practices and reducing our carbon footprint.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }
            ].map((value, i) => (
              <AnimatedElement key={value.title} delay={i * 100}>
                <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700/30 h-full">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {value.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">BENEFITS</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">What We Offer</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-center">
                We value our employees and offer competitive benefits that support your professional growth, well-being, and work-life balance.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Competitive Compensation",
                description: "Industry-leading salary packages with performance bonuses and profit-sharing options",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Health & Wellness",
                description: "Comprehensive health insurance, wellness programs, and gym membership subsidies",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              },
              {
                title: "Professional Development",
                description: "Ongoing learning opportunities, tuition assistance, and industry certifications",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              },
              {
                title: "Flexible Work",
                description: "Remote work options and flexible scheduling to support work-life balance",
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              },
              {
                title: "International Opportunities",
                description: "Global career paths with opportunities to work abroad in our offices worldwide",
                icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              },
              {
                title: "Retirement Planning",
                description: "Generous 401(k) matching and retirement planning assistance",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              {
                title: "Paid Time Off",
                description: "Generous vacation policy, paid holidays, and parental leave",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              },
              {
                title: "Team Events",
                description: "Regular team building activities, social events, and volunteer opportunities",
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            ].map((benefit, i) => (
              <AnimatedElement key={benefit.title} delay={i % 4 * 100}>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700/30 h-full">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{benefit.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">TESTIMONIALS</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">What Our Team Says</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-center">
                Hear from the people who make Tosha Shipping a great place to work every day.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I've been with Tosha for 5 years and have had the opportunity to grow from a Logistics Coordinator to Regional Manager. The company truly invests in your professional development.",
                name: "Maria Sanchez",
                role: "Regional Operations Manager",
                years: "5 years at Tosha",
                image: "/careers/employee-1.jpg"
              },
              {
                quote: "Working at Tosha has given me exposure to global logistics challenges and the chance to collaborate with talented colleagues around the world. It's been an incredible learning experience.",
                name: "James Li",
                role: "Supply Chain Analyst",
                years: "3 years at Tosha",
                image: "/careers/employee-2.jpg"
              },
              {
                quote: "The flexible work policies have allowed me to balance my career with family responsibilities. I feel valued not just as an employee but as a person with a life outside of work.",
                name: "Sophia Anderson",
                role: "Customer Success Manager",
                years: "4 years at Tosha",
                image: "/careers/employee-3.jpg"
              }
            ].map((testimonial, i) => (
              <AnimatedElement key={testimonial.name} delay={i * 150}>
                <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700/30 h-full flex flex-col">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-blue-200 dark:text-blue-900/50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 italic mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={48} 
                        height={48} 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.years}</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">OPPORTUNITIES</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Open Positions</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-center mb-10">
                Take the next step in your career with our current openings across departments and locations.
              </p>
              
              {/* Job filtering tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["All", "Operations", "Analytics", "Technology", "Legal"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.toLowerCase()
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Job listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, i) => (
                <AnimatedElement key={job.id} delay={i * 100}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/30 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 items-center text-sm">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">{job.department}</span>
                            <span className="text-slate-400">|</span>
                            <span className="text-slate-600 dark:text-slate-300">{job.location}</span>
                            <span className="text-slate-400">|</span>
                            <span className="text-slate-600 dark:text-slate-300">{job.type}</span>
                            <span className="text-slate-400">|</span>
                            <span className="text-slate-500 dark:text-slate-400">Posted {job.posted}</span>
                          </div>
                        </div>
                        <Link
                          href={`/careers/${job.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 inline-flex items-center gap-2 whitespace-nowrap"
                        >
                          Apply Now
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        {job.description}
                      </p>
                      
                      <div className="space-y-1 mb-4">
                        <h4 className="font-medium text-slate-900 dark:text-white">Requirements:</h4>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))
            ) : (
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">No positions found</h3>
                <p className="text-slate-500 dark:text-slate-400">There are currently no open positions in this department.</p>
                <button
                  onClick={() => setActiveTab("all")}
                  className="mt-4 px-6 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 rounded-lg font-medium transition-colors"
                >
                  View all positions
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">HOW TO APPLY</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Our Application Process</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-center">
                We've designed a straightforward process to help you find the right role and join our team.
              </p>
            </div>
          </AnimatedElement>

          <div className="relative max-w-4xl mx-auto">
            {/* Process timeline */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-blue-100 dark:bg-blue-900/30"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Find Your Match",
                  description: "Browse our open positions and find the role that matches your skills, experience, and career goals.",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                {
                  step: "2",
                  title: "Submit Application",
                  description: "Complete the online application form and upload your resume, cover letter, and any additional required documents.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                {
                  step: "3",
                  title: "Initial Review",
                  description: "Our recruitment team will review your application and reach out to qualified candidates for a screening call.",
                  icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                {
                  step: "4",
                  title: "Interview Process",
                  description: "Depending on the role, you may participate in 2-3 interviews, including a technical assessment and team interviews.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                },
                {
                  step: "5",
                  title: "Decision & Offer",
                  description: "If selected, you'll receive a job offer with details on compensation, benefits, and start date.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              ].map((process, i) => (
                <AnimatedElement key={process.step} delay={i * 150}>
                  <div className={`flex items-start ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}>
                    <div className="hidden lg:block lg:w-1/2"></div>
                    
                    <div className="flex items-center justify-center z-10 pl-0 lg:pl-0">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-lg">
                        {process.step}
                      </div>
                    </div>
                    
                    <div className={`pl-6 lg:pl-0 ${i % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} w-full lg:w-1/2`}>
                      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700/30 shadow-sm">
                        <div className="mb-4">
                          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={process.icon} />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300">{process.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 md:p-16 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl animated-gradient">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl floating-animation"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl floating-animation-reverse"></div>
            
            <AnimatedElement>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm font-medium mb-6">Don't see your perfect role?</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join our talent network</h2>
                <p className="text-blue-100 max-w-lg">
                  Even if there isn't a current opening that matches your skills, we'd love to keep you in mind for future opportunities at Tosha Shipping.
                </p>
              </div>
            </AnimatedElement>
            
            <Link 
              href="/careers/talent-network"
              className="bg-white hover:bg-blue-50 text-blue-900 transition-all py-4 px-8 rounded-lg font-medium text-base whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10"
            >
              Join Talent Network
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">FAQ</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                Find answers to common questions about careers at Tosha Shipping.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How long does the application process typically take?",
                a: "Our application process typically takes 2-4 weeks from initial application to final offer, depending on the role and number of interview stages required."
              },
              {
                q: "Do you offer remote work options?",
                a: "Yes, we offer remote, hybrid, and in-office positions depending on the role requirements. Many of our positions feature flexible working arrangements."
              },
              {
                q: "What's the company culture like?",
                a: "Our culture is collaborative, innovative, and inclusive. We value work-life balance and create an environment where diverse perspectives are welcomed and appreciated."
              },
              {
                q: "Are there opportunities for advancement?",
                a: "Absolutely! We're committed to internal mobility and professional development. Many of our managers and leaders have grown their careers within the company."
              },
              {
                q: "Do you sponsor work visas?",
                a: "For certain specialized positions, we do offer visa sponsorship. This is evaluated on a case-by-case basis depending on the role and location."
              },
              {
                q: "What should I expect during the interview?",
                a: "Our interviews typically include discussions about your experience, behavioral questions, technical assessments relevant to the role, and an opportunity for you to learn more about our company and team."
              }
            ].map((faq, i) => (
              <AnimatedElement key={i} delay={i * 100} className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-slate-50 dark:bg-slate-800">
                <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">{faq.q}</h3>
                <p className="text-slate-600 dark:text-slate-300">{faq.a}</p>
              </AnimatedElement>
            ))}
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
