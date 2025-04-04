import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-400 py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        {/* Location selector will automatically appear at the bottom of the screen 
           for first-time visitors, and in the header when a location is selected */}
        
        {/* Rest of the footer content would go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Tosha Shipping</h3>
            <p className="mb-6">Global shipping and logistics services you can rely on, every step of the way.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0h-20.46c-0.98 0-1.77 0.79-1.77 1.77v20.46c0 0.98 0.79 1.77 1.77 1.77h20.46c0.98 0 1.77-0.79 1.77-1.77v-20.46c0-0.98-0.79-1.77-1.77-1.77zM7.27 20.1h-3.81v-11.44h3.81v11.44zM5.37 7.1c-1.22 0-2.21-0.99-2.21-2.21s0.99-2.21 2.21-2.21 2.21 0.99 2.21 2.21-0.99 2.21-2.21 2.21zM20.34 20.1h-3.81v-5.58c0-1.22-0.03-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7v5.66h-3.81v-11.44h3.65v1.54h0.05c0.44-0.83 1.5-1.7 3.1-1.7 3.31 0 3.92 2.18 3.92 5.01v6.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services" className="hover:text-white transition-colors">Ocean Freight</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Air Freight</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Road Transportation</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Customs Clearance</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Supply Chain Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="/tracking" className="hover:text-white transition-colors">Track Shipment</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Request Quote</a></li>
              <li><a href="/faqs" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/news" className="hover:text-white transition-colors">News & Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1250 Harbor Blvd, Rotterdam, Netherlands</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+31 10 123 4567</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </svg>
                <span>info@toshashipping.com</span>
              </li>
            </ul>
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
  );
}
