"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: ReactNode;
  imagePosition?: "left" | "right";
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  imagePosition = "left"
}: AuthLayoutProps) {
  const contentOrder = imagePosition === "left" ? "lg:order-2" : "lg:order-1";
  const imageOrder = imagePosition === "left" ? "lg:order-1" : "lg:order-2";

  return (
    <div className="flex min-h-screen">
      {/* Image Section */}
      <div className={`hidden lg:flex lg:w-1/2 relative ${imageOrder}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/70 z-10"></div>
        <Image
          src="/logistics-auth.png"
          alt="Tosha Shipping"
          fill
          className="object-cover"
        />
        {/* Content overlay on the image */}
        <div className="relative z-20 flex flex-col justify-between w-full p-12">
          <div>
            <Link href="/">
              <Image
                src="/logo-white.svg"
                alt="Tosha Shipping"
                width={180}
                height={48}
                priority
              />
            </Link>
          </div>
          
          <div className="mb-8">
            <h2 className="text-white text-3xl font-bold mb-6">Global Logistics Solutions for Modern Business</h2>
            <p className="text-blue-100">
              Tosha Shipping provides industry-leading logistics services with enterprise solutions
              engineered for efficiency and precision.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className={`w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 ${contentOrder}`}>
        <div className="lg:hidden mb-8">
          <Link href="/" className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="Tosha Shipping"
              width={180}
              height={48}
              className="dark:hidden"
              priority
            />
            <Image
              src="/logo-white.svg"
              alt="Tosha Shipping"
              width={180}
              height={48}
              className="hidden dark:block"
              priority
            />
          </Link>
        </div>
        
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {title}
          </h2>
          {subtitle && (
            <div className="mb-8 text-slate-600 dark:text-slate-400">
              {subtitle}
            </div>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
}
