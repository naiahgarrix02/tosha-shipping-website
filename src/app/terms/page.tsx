"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";

export default function TermsPage() {
  // Current date for the "Last Updated" information
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long',
    day: 'numeric' 
  });

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
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-blue-100 text-lg">
              Important legal information about using Tosha Shipping's services and website
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 md:p-10 border border-slate-100 dark:border-slate-700/30">
                <div className="mb-10">
                  <p className="text-slate-500 dark:text-slate-400">Last Updated: {lastUpdated}</p>
                </div>

                <div className="prose prose-lg dark:prose-invert prose-slate prose-headings:font-bold max-w-none">
                  <h2>1. Introduction</h2>
                  <p>
                    Welcome to Tosha Shipping ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at www.toshashipping.com (the "Service") and all related services provided by Tosha Shipping.
                  </p>
                  <p>
                    By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Service.
                  </p>

                  <h2>2. Definitions</h2>
                  <p>
                    <strong>"Client"</strong> refers to any individual or entity that uses our shipping and logistics services.
                  </p>
                  <p>
                    <strong>"User"</strong> refers to any individual who accesses or uses our website or online platforms.
                  </p>
                  <p>
                    <strong>"Service"</strong> refers to the website, client portal, tracking services, and all shipping and logistics services provided by Tosha Shipping.
                  </p>

                  <h2>3. Use of Service</h2>
                  <h3>3.1 Account Registration</h3>
                  <p>
                    To access certain features of the Service, you may be required to register for an account. When you register, you must provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                  </p>
                  
                  <h3>3.2 Acceptable Use</h3>
                  <p>
                    You agree not to use the Service:
                  </p>
                  <ul>
                    <li>In any way that violates any applicable national, federal, state, local, or international law or regulation</li>
                    <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation</li>
                    <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                    <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm the Company or users of the Service</li>
                  </ul>

                  <h2>4. Shipping Services</h2>
                  <h3>4.1 Service Description</h3>
                  <p>
                    Tosha Shipping provides international and domestic freight forwarding, logistics, and supply chain services as described on our website and in service agreements with clients.
                  </p>
                  
                  <h3>4.2 Shipping Restrictions</h3>
                  <p>
                    Clients agree not to ship prohibited items including but not limited to:
                  </p>
                  <ul>
                    <li>Illegal substances or items</li>
                    <li>Hazardous materials (unless specifically arranged with appropriate documentation)</li>
                    <li>Firearms, weapons, or explosives</li>
                    <li>Items that infringe upon intellectual property rights</li>
                    <li>Live animals or perishables (unless specifically arranged with appropriate accommodation)</li>
                  </ul>
                  
                  <h3>4.3 Service Estimates</h3>
                  <p>
                    Delivery dates, transit times, and cost estimates provided by Tosha Shipping are estimates only and not guarantees unless explicitly stated in writing. Numerous factors beyond our control may affect actual delivery times and costs.
                  </p>

                  <h2>5. Payment Terms</h2>
                  <p>
                    Clients agree to pay all charges associated with the services requested as outlined in quotes, invoices, or service agreements. Payment terms are typically net 30 days from invoice date unless otherwise specified in a contract.
                  </p>
                  <p>
                    We reserve the right to charge interest on overdue amounts at the rate of 1.5% per month or the maximum rate permitted by law, whichever is less.
                  </p>

                  <h2>6. Limitation of Liability</h2>
                  <p>
                    In no event shall Tosha Shipping, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                  </p>
                  <ul>
                    <li>Your use or inability to use the Service</li>
                    <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                    <li>Any delays, losses, or damages arising from our shipping services within the limitations set by applicable international conventions and laws</li>
                    <li>Any interruption or cessation of transmission to or from the Service</li>
                  </ul>
                  <p>
                    Our liability for cargo claims shall be governed by and limited according to applicable international conventions (including but not limited to the Warsaw Convention, the Montreal Convention, or the Hague-Visby Rules) or, where no such convention applies, our standard contract terms.
                  </p>

                  <h2>7. Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless Tosha Shipping, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the Service.
                  </p>

                  <h2>8. Intellectual Property</h2>
                  <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Tosha Shipping and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Tosha Shipping.
                  </p>

                  <h2>9. Privacy Policy</h2>
                  <p>
                    Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs your visit to our website, to understand our practices regarding the collection and use of your personal information.
                  </p>

                  <h2>10. Governing Law</h2>
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of [Your Company's Jurisdiction], without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                  </p>

                  <h2>11. Changes to Terms</h2>
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  </p>

                  <h2>12. Force Majeure</h2>
                  <p>
                    Tosha Shipping shall not be liable for any failure to perform its obligations where such failure is as a result of Acts of Nature (including fire, flood, earthquake, storm, hurricane or other natural disaster), war, invasion, act of foreign enemies, hostilities (whether war is declared or not), civil war, rebellion, revolution, insurrection, military or usurped power or confiscation, terrorist activities, government sanctions, blockage, embargo, labor dispute, strike, lockout or interruption or failure of electricity, internet or telephone service.
                  </p>

                  <h2>13. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <ul>
                    <li>By email: legal@toshashipping.com</li>
                    <li>By phone: +1 (800) 555-1234</li>
                    <li>By mail: Tosha Shipping Legal Department, 1250 Harbor Blvd, Rotterdam, Netherlands</li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>

            {/* Quick Links */}
            <div className="mt-12">
              <AnimatedElement delay={100}>
                <h3 className="text-xl font-bold mb-4">Related Policies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link 
                    href="/privacy"
                    className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-700/30 group transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Privacy Policy</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">How we collect, use and protect your data</p>
                    </div>
                  </Link>

                  <Link 
                    href="/faqs"
                    className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-700/30 group transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">FAQs</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Answers to common questions about our services</p>
                    </div>
                  </Link>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <AnimatedElement>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Have Questions About Our Terms?</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Our legal team is here to help you understand our terms and policies. Contact us if you need any clarification.
              </p>
              
              <div className="flex justify-center gap-4 flex-wrap">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:legal@toshashipping.com"
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Email Legal Team
                </a>
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
