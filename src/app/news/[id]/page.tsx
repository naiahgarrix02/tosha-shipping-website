"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";

// Sample news data (same as in news/page.tsx)
const newsItems = [
  {
    id: "news-1",
    title: "Tosha Shipping Launches New Sustainable Fleet Initiative",
    excerpt: "Our company announces a $50 million investment in LNG-powered vessels as part of our commitment to reduce carbon emissions by 40% by 2030.",
    category: "Press Release",
    date: "November 18, 2023",
    image: "/news/sustainable-fleet.jpg",
    featured: true,
    content: `
      <p>Rotterdam, Netherlands – Tosha Shipping today announced a major investment of $50 million toward a new fleet of LNG-powered vessels, marking a significant milestone in the company's sustainability roadmap.</p>
      
      <p>The initiative, approved by the board of directors last month, will see the company acquire 5 new LNG-powered container ships over the next three years, with the first vessel expected to be operational by Q3 2024.</p>
      
      <h2>Commitment to Sustainability</h2>
      <p>"This investment represents our unwavering commitment to reducing our environmental footprint while continuing to provide best-in-class shipping services to our global clients," said Sarah Chen, CEO of Tosha Shipping. "By transitioning to LNG-powered vessels, we expect to reduce our carbon emissions by 40% by 2030, putting us well on the path to achieving our carbon neutrality goals."</p>
      
      <p>The new vessels will be built in partnership with GreenShip Technologies, incorporating the latest innovations in maritime engineering and environmental protection systems.</p>
      
      <h2>Industry-Leading Standards</h2>
      <p>Each ship in the new fleet will feature:</p>
      <ul>
        <li>State-of-the-art LNG propulsion systems</li>
        <li>Advanced waste management facilities</li>
        <li>Optimized hull design for reduced fuel consumption</li>
        <li>Smart navigation systems for optimal routing and reduced emissions</li>
        <li>Shore power capability for zero-emission port operations</li>
      </ul>
      
      <p>This initiative places Tosha Shipping among the industry leaders in sustainable maritime transportation and aligns with the International Maritime Organization's strategy to reduce greenhouse gas emissions from ships.</p>
      
      <h2>Market Response</h2>
      <p>Industry analysts have responded positively to the announcement, with several noting that the investment positions Tosha Shipping favorably as regulations around shipping emissions continue to tighten globally.</p>
      
      <p>"Companies that proactively invest in green technologies will not only benefit environmentally but are likely to see significant competitive advantages as carbon taxes and stricter regulations come into effect," said Marcus Johnson, Maritime Analyst at BlueWater Research.</p>
      
      <h2>Looking Forward</h2>
      <p>Beyond the initial $50 million investment, Tosha Shipping has outlined plans to gradually retrofit its existing fleet with emission-reduction technologies and explore further alternative fuel options, including hydrogen and ammonia-based solutions.</p>
      
      <p>For more information about Tosha Shipping's sustainability initiatives and fleet modernization program, please visit our sustainability page or contact our media relations team.</p>
    `
  },
  {
    id: "news-2",
    title: "Tosha Shipping Opens New Regional Hub in Singapore",
    excerpt: "Expanding our presence in Asia with a state-of-the-art logistics center to better serve the growing market demand in the APAC region.",
    category: "Company Update",
    date: "November 10, 2023",
    image: "/news/singapore-hub.jpg",
    featured: true,
    content: `
      <p>Singapore – Today marks a significant expansion of Tosha Shipping's global operations with the grand opening of our new regional headquarters and integrated logistics hub in Singapore.</p>
      
      <p>The 25,000 square meter facility, located in the Tuas Port area, represents a $75 million investment in the company's Asia-Pacific infrastructure and will serve as the central coordination point for all operations in the region.</p>
      
      <h2>Strategic Location</h2>
      <p>"Singapore's position as a global maritime hub makes it the ideal location for our expanded APAC operations," said James Li, Regional Director for Asia at Tosha Shipping. "This new facility will enable us to better serve our clients across the region while improving connectivity between Asian markets and our global network."</p>
      
      <p>The state-of-the-art facility includes advanced warehousing capabilities, container yard operations, customs clearance facilities, and regional fleet management infrastructure.</p>
      
      <h2>Technology Integration</h2>
      <p>The Singapore hub is equipped with:</p>
      <ul>
        <li>Automated storage and retrieval systems</li>
        <li>IoT-enabled tracking and monitoring throughout the facility</li>
        <li>AI-powered logistics optimization systems</li>
        <li>Renewable energy infrastructure including extensive solar panel installations</li>
        <li>Electric vehicle charging for ground transportation fleet</li>
      </ul>
      
      <p>"This facility represents the future of integrated logistics operations," said Amina Patel, CTO of Tosha Shipping. "We've implemented technology solutions that will not only improve efficiency but also provide unprecedented visibility and control to our clients."</p>
      
      <h2>Economic Impact</h2>
      <p>The new hub is expected to create over 200 jobs in the region and significantly increase Tosha Shipping's handling capacity in the APAC market. The company projects a 35% growth in regional shipping volume over the next two years as a direct result of the expanded capabilities.</p>
      
      <p>Singapore's Minister of Transport, who attended the opening ceremony, praised the investment: "This facility demonstrates confidence in Singapore's continuing role as a pivotal logistics hub for the region and brings valuable technological expertise to our maritime sector."</p>
      
      <h2>Looking Forward</h2>
      <p>The Singapore hub is part of Tosha Shipping's broader expansion strategy in Asia, which includes planned investments in emerging markets throughout Southeast Asia. The company has announced plans for similar, smaller-scale facilities in Vietnam and Indonesia to be developed over the next five years.</p>
      
      <p>For more information about Tosha Shipping's operations in Asia or to schedule a tour of the new Singapore facility, please contact our regional communications team.</p>
    `
  },
  // Additional news items would have full content defined here...
];

export default function NewsDetailPage() {
  const params = useParams();
  const newsId = params.id as string;
  
  // Find the news item with the matching ID
  const newsItem = newsItems.find(item => item.id === newsId);
  
  // Handle case when news item is not found
  if (!newsItem) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The news article you're looking for doesn't exist or has been removed.</p>
          <Link 
            href="/news" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-all"
          >
            Back to News
          </Link>
        </div>
      </div>
    );
  }
  
  // Render the news article
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

      {/* News Article Content */}
      <article className="pt-10 pb-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          {/* Back to News Link */}
          <Link 
            href="/news" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All News
          </Link>
          
          {/* Article Header */}
          <AnimatedElement>
            <div className="mb-6">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full">
                {newsItem.category}
              </span>
              <time className="text-sm text-slate-500 dark:text-slate-400 ml-2">{newsItem.date}</time>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
              {newsItem.title}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-8">
              {newsItem.excerpt}
            </p>
            
            <div className="flex gap-2 mb-10">
              <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </button>
              <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                </svg>
              </button>
              <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </button>
            </div>
          </AnimatedElement>
          
          {/* Featured Image */}
          <AnimatedElement delay={100}>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden mb-12 border border-slate-100 dark:border-slate-700/30 shadow-lg">
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </AnimatedElement>
          
          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatedElement delay={200}>
              <div 
                className="prose prose-lg dark:prose-invert prose-blue prose-headings:font-bold prose-p:text-slate-600 dark:prose-p:text-slate-300 max-w-none"
                dangerouslySetInnerHTML={{ __html: newsItem.content || '<p>No content available</p>' }}
              />
            </AnimatedElement>
            
            {/* Press Contact */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700/30">
              <h3 className="font-bold text-xl mb-4">Media Contact</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-4 text-slate-600 dark:text-slate-300">
                <div>
                  <strong className="text-slate-900 dark:text-white">Alex Thompson</strong>, Communications Director
                </div>
                <div className="hidden md:block text-slate-400">|</div>
                <a href="mailto:press@toshashipping.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  press@toshashipping.com
                </a>
                <div className="hidden md:block text-slate-400">|</div>
                <a href="tel:+18005559876" className="text-blue-600 dark:text-blue-400 hover:underline">
                  +1 (800) 555-9876
                </a>
              </div>
            </div>
          </div>
          
          {/* Related News */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Related News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.slice(0, 3).filter(item => item.id !== newsId).map((relatedItem) => (
                <AnimatedElement key={relatedItem.id} delay={100}>
                  <Link href={`/news/${relatedItem.id}`} className="group block">
                    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700/30 h-full">
                      <div className="relative h-48 w-full">
                        <Image
                          src={relatedItem.image}
                          alt={relatedItem.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {relatedItem.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">
                          {relatedItem.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </article>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
