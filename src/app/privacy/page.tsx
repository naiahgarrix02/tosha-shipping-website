"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-blue-100 text-lg">
              How we collect, use, and protect your personal information
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
                    At Tosha Shipping ("Company", "we", "our", "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our shipping and logistics services.
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
                  </p>

                  <h2>2. Information We Collect</h2>
                  <h3>2.1 Personal Information</h3>
                  <p>
                    We may collect personal information that you provide directly to us, including but not limited to:
                  </p>
                  <ul>
                    <li>Contact information (name, email address, phone number, address)</li>
                    <li>Business information (company name, job title)</li>
                    <li>Shipping information (pickup and delivery addresses, contents description)</li>
                    <li>Account credentials</li>
                    <li>Payment information</li>
                    <li>Communications with us</li>
                  </ul>
                  
                  <h3>2.2 Information Automatically Collected</h3>
                  <p>
                    When you visit our website or use our online services, we may automatically collect certain information about your device and usage, including:
                  </p>
                  <ul>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Time and date of visit</li>
                    <li>Pages visited</li>
                    <li>Clickstream data</li>
                    <li>Device information</li>
                  </ul>
                  <p>
                    We collect this information using cookies, log files, web beacons, tags, and pixels. For more information about our use of these technologies, please see our Cookie Policy.
                  </p>

                  <h2>3. How We Use Your Information</h2>
                  <p>
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul>
                    <li>Providing, operating, and maintaining our services</li>
                    <li>Processing and completing shipments</li>
                    <li>Managing your account</li>
                    <li>Improving customer service</li>
                    <li>Communicating with you about services, updates, and promotions</li>
                    <li>Analyzing usage and trends to enhance user experience</li>
                    <li>Protecting our rights, property, or safety, and that of our users</li>
                    <li>Complying with legal obligations</li>
                  </ul>

                  <h2>4. Sharing Your Information</h2>
                  <p>
                    We may share your personal information with:
                  </p>
                  <h3>4.1 Service Providers</h3>
                  <p>
                    We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf, such as customs agencies, carriers, payment processors, and IT service providers.
                  </p>
                  
                  <h3>4.2 Business Transfers</h3>
                  <p>
                    If we are involved in a merger, acquisition, financing, or sale of company assets, your information may be transferred as part of that transaction.
                  </p>
                  
                  <h3>4.3 Legal Requirements</h3>
                  <p>
                    We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
                  </p>

                  <h2>5. Data Security</h2>
                  <p>
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                  </p>

                  <h2>6. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. If you are located outside the Netherlands and choose to provide information to us, please note that we transfer the data to the Netherlands and process it there.
                  </p>

                  <h2>7. Data Retention</h2>
                  <p>
                    We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy or as required to comply with our legal obligations, resolve disputes, and enforce our agreements.
                  </p>

                  <h2>8. Your Data Protection Rights</h2>
                  <p>
                    Depending on your location, you may have the following data protection rights:
                  </p>
                  <ul>
                    <li>The right to access, update, or delete the information we have on you</li>
                    <li>The right of rectification – the right to have your information corrected if it is inaccurate or incomplete</li>
                    <li>The right to object to our processing of your personal data</li>
                    <li>The right of restriction – the right to request that we restrict the processing of your personal information</li>
                    <li>The right to data portability – the right to receive a copy of your personal data in a structured, machine-readable format</li>
                    <li>The right to withdraw consent at any time where we relied on your consent to process your personal information</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the contact information provided below.
                  </p>

                  <h2>9. Children's Privacy</h2>
                  <p>
                    Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
                  </p>

                  <h2>10. Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>

                  <h2>11. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul>
                    <li>By email: privacy@toshashipping.com</li>
                    <li>By phone: +1 (800) 555-1234</li>
                    <li>By mail: Tosha Shipping Privacy Office, 1250 Harbor Blvd, Rotterdam, Netherlands</li>
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
                    href="/terms"
                    className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-700/30 group transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Terms of Service</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Terms and conditions for using our services</p>
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
