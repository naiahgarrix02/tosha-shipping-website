"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter a message";
    
    return newErrors;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend/API
      // This is just a simulation for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success!
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ form: "There was a problem submitting your message. Please try again." });
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
              <Link href="/contact" className="font-medium text-blue-600 dark:text-blue-400 transition-colors">
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
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24 relative overflow-hidden min-h-[40vh] flex items-center">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl floating-animation-reverse"></div>
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-blue-100 text-lg mb-8">
              Have questions about our services? Need a quote? Our team is here to help you with all your shipping and logistics needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section with Form */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <AnimatedElement className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-slate-600 dark:text-slate-300 max-w-lg mb-8">
                  Reach out to us through any of the channels below. Our support team is available 24/7 to assist you with your inquiries.
                </p>
                
                <div className="space-y-8">
                  {/* Headquarters Address */}
                  <div className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Global Headquarters</h3>
                      <address className="not-italic text-slate-600 dark:text-slate-300 mb-1">
                        1250 Harbor Boulevard<br />
                        Rotterdam Business Center, 11th Floor<br />
                        Rotterdam, Netherlands 3089
                      </address>
                      <div className="mt-2">
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
                          View on Google Maps
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-1">
                        <a href="tel:+31105090800" className="hover:text-blue-600 dark:hover:text-blue-400">+31 10 509 0800</a> (Global)
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        <a href="tel:+18005551234" className="hover:text-blue-600 dark:hover:text-blue-400">+1 800 555 1234</a> (US Toll-Free)
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-1">
                        <a href="mailto:info@toshashipping.com" className="hover:text-blue-600 dark:hover:text-blue-400">info@toshashipping.com</a> (General Inquiries)
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        <a href="mailto:support@toshashipping.com" className="hover:text-blue-600 dark:hover:text-blue-400">support@toshashipping.com</a> (Customer Support)
                      </p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-1">
                        Monday - Friday: 8:00 AM - 6:00 PM CET
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Customer Support: 24/7/365
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedElement>
            
            {/* Contact Form */}
            <AnimatedElement delay={200}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700/30 p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Thank you for contacting us! We will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errors.form && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 text-red-700 dark:text-red-300 rounded-lg p-4">
                        {errors.form}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.name ? "border-red-500 dark:border-red-700" : "border-slate-300 dark:border-slate-600"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700/50 dark:text-white`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.email ? "border-red-500 dark:border-red-700" : "border-slate-300 dark:border-slate-600"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700/50 dark:text-white`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700/50 dark:text-white"
                        />
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700/50 dark:text-white"
                        />
                      </div>
                    </div>
                    
                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700/50 dark:text-white"
                      >
                        <option value="">Please select</option>
                        <option value="quote">Request a Quote</option>
                        <option value="customer-service">Customer Service</option>
                        <option value="careers">Careers</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.message ? "border-red-500 dark:border-red-700" : "border-slate-300 dark:border-slate-600"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700/50 dark:text-white`}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : "Send Message"}
                      </button>
                    </div>
                    
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      By submitting this form, you agree to our <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.
                    </div>
                  </form>
                )}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Global Offices Section */}
      <section className="py-16 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-blue-500"></span>
                <span className="text-blue-500 font-medium tracking-wider text-sm">GLOBAL PRESENCE</span>
                <span className="h-px w-10 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl font-bold text-center mb-6">Our Offices</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-center">
                With strategic locations across major global markets, we provide local expertise with global reach.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Rotterdam", country: "Netherlands", address: "1250 Harbor Blvd, 3089", phone: "+31 10 509 0800", email: "rotterdam@toshashipping.com" },
              { city: "Singapore", country: "Singapore", address: "42 Marina Way, #10-01, 018980", phone: "+65 6225 7890", email: "singapore@toshashipping.com" },
              { city: "New York", country: "United States", address: "175 Hudson St, NY 10013", phone: "+1 212 555 6789", email: "newyork@toshashipping.com" },
              { city: "Shanghai", country: "China", address: "888 Dongfang Rd, Pudong, 200122", phone: "+86 21 5888 7777", email: "shanghai@toshashipping.com" },
              { city: "Dubai", country: "UAE", address: "Business Bay, Building 7, 12th Floor", phone: "+971 4 567 8901", email: "dubai@toshashipping.com" },
              { city: "Sydney", country: "Australia", address: "89 York Street, NSW 2000", phone: "+61 2 9876 5432", email: "sydney@toshashipping.com" },
              { city: "Mumbai", country: "India", address: "Bandra Kurla Complex, 400051", phone: "+91 22 2345 6789", email: "mumbai@toshashipping.com" },
              { city: "São Paulo", country: "Brazil", address: "Av. Paulista, 1000, CEP 01310-100", phone: "+55 11 3456 7890", email: "saopaulo@toshashipping.com" },
            ].map((office, i) => (
              <AnimatedElement key={office.city} delay={i % 4 * 100} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700/30 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-1">{office.city}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{office.country}</p>
                <address className="not-italic text-slate-600 dark:text-slate-300 text-sm mb-3">
                  {office.address}
                </address>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {office.phone}
                  </a>
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  <a href={`mailto:${office.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 break-words">
                    {office.email}
                  </a>
                </p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map & Locations */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700/30">
              <div className="relative h-[500px]">
                <Image
                  src="/contact/world-map-offices.jpg"
                  alt="Tosha Shipping Global Offices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center mt-4 text-slate-500 dark:text-slate-400 text-sm">
              Interactive map - For demonstration purposes only
            </div>
          </AnimatedElement>
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
                Find answers to common questions about contacting and working with Tosha Shipping.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How quickly can I expect a response to my inquiry?",
                a: "For general inquiries, we aim to respond within 24 hours during business days. For urgent matters, please call our customer support line for immediate assistance."
              },
              {
                q: "Can I get a custom quote for my shipping needs?",
                a: "Yes! You can request a custom quote by filling out our contact form or calling our sales team. Please provide as much detail as possible about your shipping requirements for an accurate quote."
              },
              {
                q: "Do you have representatives that can meet in person?",
                a: "Yes, for enterprise clients or complex shipping requirements, we can arrange in-person meetings with our local representatives at any of our global offices."
              },
              {
                q: "How can I track my existing shipment?",
                a: "You can track your shipment by visiting our Tracking page and entering your tracking number. Our system provides real-time updates on your shipment's status and location."
              },
              {
                q: "Are there different contact channels for different services?",
                a: "Yes, we have specialized teams for different services. When you contact us, please specify your needs and we'll direct you to the appropriate department."
              },
              {
                q: "How do I apply for a job at Tosha Shipping?",
                a: "Visit our Careers page to see current job openings and apply online. You can also send your resume to careers@toshashipping.com for general consideration."
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 md:p-16 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl animated-gradient">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl floating-animation"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl floating-animation-reverse"></div>
            
            <AnimatedElement>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm font-medium mb-6">Business Solutions</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a customized logistics plan?</h2>
                <p className="text-blue-100 max-w-lg">
                  Our business solutions team can develop a tailored logistics strategy that optimizes your supply chain and helps your business grow.
                </p>
              </div>
            </AnimatedElement>
            
            <Link 
              href="/services"
              className="bg-white hover:bg-blue-50 text-blue-900 transition-all py-4 px-8 rounded-lg font-medium text-base whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10"
            >
              Explore Business Solutions
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
