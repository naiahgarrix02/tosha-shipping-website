import type { Metadata } from "next";
import ParallaxWrapper from "../components/ParallaxWrapper";
import "./globals.css";
import LocationPrompt from '@/components/LocationPrompt';

export const metadata: Metadata = {
  title: "Tosha Shipping | Premium Global Shipping & Supply Chain Solutions",
  description: "Tosha Shipping provides industry-leading logistics services with end-to-end supply chain solutions, global shipping, and warehousing to optimize your business operations.",
  keywords: "Tosha Shipping, shipping, logistics, supply chain, freight forwarding, warehousing, global shipping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100">
        <ParallaxWrapper>
          <main className="bg-slate-50 dark:bg-[#0F172A]">
            {children}
          </main>
        </ParallaxWrapper>
        <LocationPrompt />
      </body>
    </html>
  );
}
