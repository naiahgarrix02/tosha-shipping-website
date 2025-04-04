"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";

// Sample case studies data (same as in case-studies/page.tsx)
const caseStudies = [
  {
    id: "automotive-parts-logistics",
    title: "Streamlining Automotive Parts Supply Chain for Global Manufacturer",
    excerpt: "How we helped a leading automotive manufacturer reduce shipping times by 30% while cutting logistics costs by 15% through our integrated logistics solutions.",
    industry: "Automotive",
    solution: "Supply Chain Optimization",
    results: [
      "30% reduction in shipping times", 
      "15% decrease in logistics costs", 
      "99.2% on-time delivery rate",
      "Annual savings of $4.7 million"
    ],
    image: "/case-studies/automotive-logistics.jpg",
    featured: true,
    logo: "/case-studies/logos/automotive-logo.svg",
    content: `
      <h2>The Challenge</h2>
      <p>A global automotive manufacturer with production facilities on three continents was experiencing significant challenges with their parts supply chain. Key issues included:</p>
      <ul>
        <li>Lengthy transit times between global suppliers and manufacturing plants</li>
        <li>High logistics costs eroding profit margins</li>
        <li>Inconsistent delivery performance leading to production delays</li>
        <li>Limited visibility of parts in transit</li>
        <li>Complex customs clearance processes in multiple countries</li>
      </ul>
      
      <p>With just-in-time manufacturing schedules requiring precise coordination, delays in parts delivery were causing production disruptions costing up to $150,000 per hour.</p>
      
      <h2>Our Approach</h2>
      <p>After a comprehensive analysis of the client's existing supply chain, we designed and implemented an integrated logistics solution that encompassed:</p>
      
      <h3>Network Optimization</h3>
      <p>We restructured the client's logistics network, establishing strategic consolidation centers near key suppliers and implementing direct routing to manufacturing facilities. This reduced handoffs and eliminated redundant transportation legs.</p>
      
      <h3>Multi-modal Transportation Strategy</h3>
      <p>We developed a sophisticated transportation strategy utilizing the optimal combination of air, ocean, rail, and road freight based on parts criticality, value, and production schedules. This approach balanced speed and cost considerations.</p>
      
      <h3>Advanced Visibility System</h3>
      <p>We deployed our proprietary TrackTech platform to provide real-time visibility of all shipments. The system included predictive ETA analytics that forecasted potential delays and automatically triggered contingency plans.</p>
      
      <h3>Customs Acceleration Program</h3>
      <p>Our customs specialists implemented pre-clearance protocols and established dedicated customs clearance channels in key markets, significantly reducing border delays.</p>
      
      <h2>The Results</h2>
      <p>Within six months of implementation, the client experienced transformative results:</p>
      
      <ul>
        <li><strong>30% reduction in end-to-end shipping times</strong>, enabling more responsive production planning</li>
        <li><strong>15% decrease in total logistics costs</strong> despite utilizing expedited services when necessary</li>
        <li><strong>99.2% on-time delivery rate</strong>, virtually eliminating production disruptions</li>
        <li><strong>Annual savings of $4.7 million</strong> from both direct cost reductions and avoidance of production delays</li>
        <li>Enhanced inventory management allowing for a <strong>22% reduction in safety stock levels</strong></li>
      </ul>
      
      <h2>Long-term Impact</h2>
      <p>The success of this logistics transformation contributed to the client's ability to implement a more agile manufacturing strategy. With reliable parts delivery, they've been able to reduce production lead times and respond more quickly to changing market demands.</p>
      
      <p>The client has since expanded our partnership to include additional manufacturing facilities in emerging markets, applying the same integrated logistics approach to support their global growth strategy.</p>
    `
  },
  {
    id: "pharmaceutical-temperature-controlled",
    title: "Temperature-Controlled Pharmaceutical Distribution Network",
    excerpt: "Designing and implementing a robust cold chain logistics solution for a pharmaceutical company distributing sensitive vaccines across 25 countries.",
    industry: "Pharmaceuticals",
    solution: "Cold Chain Logistics",
    results: [
      "100% temperature compliance", 
      "Expanded to 25 countries", 
      "40% faster customs clearance",
      "Zero product loss during transit"
    ],
    image: "/case-studies/pharma-cold-chain.jpg",
    featured: true,
    logo: "/case-studies/logos/pharma-logo.svg",
    content: `
      <h2>The Challenge</h2>
      <p>A leading pharmaceutical company had developed a new vaccine requiring strict temperature control between 2-8°C (35-46°F) throughout transportation and storage. They needed to establish a reliable distribution network capable of delivering these temperature-sensitive products to healthcare facilities across 25 countries with varying infrastructure and climate conditions.</p>
      
      <p>Critical challenges included:</p>
      <ul>
        <li>Ensuring continuous temperature control throughout the entire supply chain</li>
        <li>Managing complex regulatory requirements across multiple jurisdictions</li>
        <li>Creating contingency plans for potential transit delays or equipment failures</li>
        <li>Providing real-time temperature monitoring and documentation</li>
        <li>Designing solutions for "last mile" delivery in regions with limited infrastructure</li>
      </ul>
      
      <p>With each shipment valued at millions of dollars and literally saving lives, there was zero margin for error.</p>
      
      <h2>Our Solution</h2>
      
      <h3>End-to-End Cold Chain Design</h3>
      <p>We engineered a comprehensive cold chain logistics solution that included:</p>
      <ul>
        <li>Temperature-controlled packaging systems with validated 120+ hour thermal protection</li>
        <li>GPS-enabled temperature monitoring devices providing real-time data</li>
        <li>Strategically located temperature-controlled storage facilities</li>
        <li>Specialized vehicles equipped with redundant cooling systems</li>
        <li>Dedicated lanes with priority handling at all transit points</li>
      </ul>
      
      <h3>Regulatory Compliance Strategy</h3>
      <p>Our pharmaceutical logistics specialists developed a comprehensive regulatory strategy, preparing all necessary documentation and establishing relationships with health authorities in each market to streamline the import process.</p>
      
      <h3>Active Monitoring and Intervention</h3>
      <p>We established a 24/7 control tower operation with specialized staff monitoring all shipments in real-time. This team had the authority and resources to intervene immediately if any temperature excursions were detected or predicted.</p>
      
      <h3>Last Mile Innovation</h3>
      <p>For regions with infrastructure challenges, we developed innovative solutions including portable cooling units, rapid deployment cold storage facilities, and partnerships with local healthcare logistics specialists.</p>
      
      <h2>The Results</h2>
      
      <ul>
        <li><strong>100% temperature compliance</strong> across all shipments with complete documentation</li>
        <li><strong>Successful distribution to 25 countries</strong> across 5 continents, including remote regions</li>
        <li><strong>40% faster customs clearance</strong> than industry average for pharmaceutical products</li>
        <li><strong>Zero product loss</strong> during transit due to temperature excursions or handling issues</li>
        <li><strong>99.8% on-time delivery performance</strong>, ensuring healthcare facilities received vaccines as scheduled</li>
        <li>Complete <strong>end-to-end visibility</strong> with temperature history for every shipment</li>
      </ul>
      
      <h2>Long-term Impact</h2>
      <p>The cold chain distribution network we designed became the template for the client's global vaccine distribution strategy. The success of this project enabled them to bring their life-saving vaccines to millions of patients worldwide with confidence in product quality and integrity.</p>
      
      <p>The client has subsequently engaged us to manage distribution for their entire temperature-sensitive product portfolio, expanding our partnership to include new products and additional markets as they grow.</p>
    `
  },
  // Additional case studies would be defined here with their content...
];

export default function CaseStudyDetailPage() {
  const params = useParams();
  const caseStudyId = params.id as string;
  
  // Find the case study with the matching ID
  const caseStudy = caseStudies.find(study => study.id === caseStudyId);
  
  // Handle case when case study is not found
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-8">The case study you're looking for doesn't exist or has been removed.</p>
          <Link 
            href="/case-studies" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-all"
          >
            Browse All Case Studies
          </Link>
        </div>
      </div>
    );
  }
  
  // Get related case studies (same industry or solution, but not the current one)
  const relatedStudies = caseStudies.filter(study => 
    study.id !== caseStudyId && 
    (study.industry === caseStudy.industry || study.solution === caseStudy.solution)
  ).slice(0, 3); // Limit to 3 related studies
  
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

      {/* Case Study Content */}
      <article className="pt-10 pb-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          {/* Back to Case Studies Link */}
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Case Studies
          </Link>
          
          {/* Case Study Header */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <AnimatedElement>
                <div className="flex mb-4 items-center">
                  <div className="h-10 w-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center overflow-hidden mr-3">
                    <Image 
                      src={caseStudy.logo} 
                      alt={`${caseStudy.industry} company logo`} 
                      width={24} 
                      height={24} 
                    />
                  </div>
                  <div>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mr-2">
                      {caseStudy.industry}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">
                      {caseStudy.solution}
                    </span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
                  {caseStudy.title}
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-8">
                  {caseStudy.excerpt}
                </p>
                
                <div className="flex gap-2 mb-8">
                  <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Share on LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Share via email">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Download PDF">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </button>
                </div>
              </AnimatedElement>
            </div>
            
            <div className="md:col-span-1">
              <AnimatedElement delay={200}>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/30 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 border-b border-slate-100 dark:border-slate-700/30 pb-2">Key Results</h3>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/30">
                    <h4 className="font-medium mb-2">Interested in similar results?</h4>
                    <Link 
                      href="/contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full text-center py-2 px-4 rounded-lg font-medium transition-colors inline-block"
                    >
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
          
          {/* Featured Image */}
          <AnimatedElement delay={100}>
            <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden mb-12 border border-slate-100 dark:border-slate-700/30 shadow-lg">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </AnimatedElement>
          
          {/* Case Study Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatedElement delay={200}>
              <div 
                className="prose prose-lg dark:prose-invert prose-blue prose-headings:font-bold prose-p:text-slate-600 dark:prose-p:text-slate-300 max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.content || '<p>Full case study details coming soon.</p>' }}
              />
            </AnimatedElement>
            
            {/* Industry Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700/30">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-slate-500 dark:text-slate-400">Related industries:</span>
                <Link 
                  href={`/case-studies?industry=${caseStudy.industry}`}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {caseStudy.industry}
                </Link>
                <Link
                  href={`/case-studies?solution=${caseStudy.solution}`}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {caseStudy.solution}
                </Link>
              </div>
            </div>
          </div>
          
          {/* CTA Banner */}
          <div className="mt-16">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-xl p-8 md:p-10">
              <div className="md:flex items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Want to achieve similar results?</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Our logistics experts can help optimize your supply chain and reduce costs.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/services"
                    className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors border border-slate-200 dark:border-slate-700"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Case Studies */}
          {relatedStudies.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedStudies.map((study) => (
                  <AnimatedElement key={study.id} delay={100}>
                    <Link href={`/case-studies/${study.id}`} className="group">
                      <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700/30 h-full">
                        <div className="relative h-48 w-full">
                          <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                              {study.industry}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">
                            {study.excerpt}
                          </p>
                          <div className="mt-4">
                            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                              View case study →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
