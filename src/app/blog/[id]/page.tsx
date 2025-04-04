"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AnimatedElement from "@/components/AnimatedElement";
import Footer from "@/components/Footer";

// Sample blog post data (same as in blog/page.tsx)
const blogPosts = [
  {
    id: "1",
    title: "The Future of Sustainable Shipping: Carbon-Neutral Freight",
    excerpt: "Discover how the shipping industry is working towards carbon neutrality and what Tosha Shipping is doing to lead this important transition.",
    category: "Sustainability",
    author: "Sarah Chen",
    authorRole: "CEO",
    date: "November 12, 2023",
    readTime: "5 min read",
    image: "/blog/sustainable-shipping.jpg",
    featured: true,
    content: `
      <p>The global shipping industry accounts for approximately 3% of worldwide CO2 emissions. As climate change concerns grow and regulations tighten, the maritime sector faces increasing pressure to reduce its carbon footprint. At Tosha Shipping, we believe in taking a proactive approach to environmental sustainability.</p>
      
      <h2>The Challenge of Maritime Emissions</h2>
      <p>Ocean-going vessels primarily rely on heavy fuel oil, one of the most carbon-intensive energy sources available. With global trade continuously expanding, emissions from shipping could increase by 50-250% by 2050 if no action is taken.</p>
      
      <p>The International Maritime Organization (IMO) has set an ambitious goal to reduce greenhouse gas emissions from international shipping by at least 50% by 2050 compared to 2008 levels. This target, while necessary, presents significant challenges for the industry.</p>
      
      <h2>Technologies Driving Carbon Reduction</h2>
      <p>Several promising technologies are emerging to help reduce shipping emissions:</p>
      
      <ul>
        <li><strong>Alternative Fuels:</strong> Liquefied natural gas (LNG), biofuels, hydrogen, and ammonia offer lower carbon alternatives to traditional bunker fuel.</li>
        <li><strong>Wind Propulsion:</strong> Modern sail technologies, including rotors, kites, and fixed sails, can supplement engine power and reduce fuel consumption.</li>
        <li><strong>Vessel Design:</strong> Hull optimization, air lubrication systems, and more efficient propellers can significantly reduce energy requirements.</li>
        <li><strong>Shore Power:</strong> Allowing ships to connect to the local electricity grid while at port rather than running engines.</li>
      </ul>
      
      <h2>Tosha's Carbon-Neutral Commitment</h2>
      <p>At Tosha Shipping, we've committed to achieving carbon neutrality across our operations by 2040. Our strategy includes:</p>
      
      <ul>
        <li>Transitioning our fleet to LNG-powered vessels by 2030</li>
        <li>Investing in research and development for zero-emission technologies</li>
        <li>Implementing AI-driven route optimization to reduce fuel consumption</li>
        <li>Supporting carbon offset projects for emissions we cannot yet eliminate</li>
        <li>Working with customers to develop end-to-end green logistics solutions</li>
      </ul>
      
      <h2>The Role of Collaboration</h2>
      <p>No single company can solve the emissions challenge alone. We're actively participating in industry coalitions like the Getting to Zero Coalition and collaborating with fuel providers, ship builders, and technology companies to accelerate the development of sustainable shipping solutions.</p>
      
      <h2>What This Means for Our Customers</h2>
      <p>For businesses working with Tosha Shipping, our carbon reduction initiatives translate to:</p>
      
      <ul>
        <li>Lower Scope 3 emissions in your supply chain</li>
        <li>Compliance with emerging carbon reporting requirements</li>
        <li>Support for your own sustainability goals and commitments</li>
        <li>Protection against future carbon taxes and regulations</li>
      </ul>
      
      <p>The journey to carbon-neutral shipping won't be easy, but it's a necessary transformation that will ultimately lead to a more sustainable and resilient global logistics industry. At Tosha Shipping, we're proud to be at the forefront of this vital transition.</p>
    `
  },
  // Additional blog posts would be defined here...
];

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id;
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === postId);
  
  // Handle case when post is not found
  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/blog" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  // Render the blog post
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

      {/* Blog Post Content */}
      <article className="pt-10 pb-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          {/* Back to Blog Link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>
          
          {/* Post Header */}
          <AnimatedElement>
            <div className="mb-6">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-y-4 items-center justify-between text-slate-500 dark:text-slate-400 text-sm mb-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-800 dark:text-blue-200 font-semibold text-sm mr-3">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-slate-800 dark:text-slate-200 font-medium">{post.author}</p>
                    <p className="text-xs">{post.authorRole}</p>
                  </div>
                </div>
                <span className="hidden md:inline text-slate-400">|</span>
                <span>{post.date}</span>
                <span className="hidden md:inline text-slate-400">|</span>
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex gap-2">
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
            </div>
          </AnimatedElement>
          
          {/* Featured Image */}
          <AnimatedElement delay={100}>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden mb-12 border border-slate-100 dark:border-slate-700/30 shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </AnimatedElement>
          
          {/* Post Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatedElement delay={200}>
              <div 
                className="prose prose-lg dark:prose-invert prose-blue prose-headings:font-bold prose-p:text-slate-600 dark:prose-p:text-slate-300 max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content || '<p>No content available</p>' }}
              />
            </AnimatedElement>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700/30">
              <div className="flex flex-wrap gap-2">
                <span className="text-slate-500 dark:text-slate-400">Related topics:</span>
                {['Sustainability', 'Carbon Reduction', 'Green Logistics', 'IMO Regulations'].map(tag => (
                  <Link 
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/30">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-800 dark:text-blue-200 text-2xl font-bold flex-shrink-0">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">About {post.author}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {post.authorRole} at Tosha Shipping with extensive experience in global logistics and supply chain management. 
                    Passionate about developing sustainable shipping solutions and optimizing freight operations.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).filter(p => p.id !== post.id).map((relatedPost) => (
                <AnimatedElement key={relatedPost.id} delay={100}>
                  <Link href={`/blog/${relatedPost.id}`} className="group block">
                    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700/30 h-full">
                      <div className="relative h-48 w-full">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">
                          {relatedPost.excerpt}
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
      
      {/* Newsletter CTA */}
      <section className="bg-white dark:bg-slate-900/30 py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-2xl font-bold mb-4">Enjoyed this article?</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Subscribe to our newsletter to receive the latest insights on shipping and logistics straight to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow py-3 px-6 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700/50 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
