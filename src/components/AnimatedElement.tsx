"use client";

import { useEffect, useRef } from "react";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedElement({
  children,
  className = "",
  delay = 0
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the revealed class when in view
            setTimeout(() => {
              if (ref.current) {
                ref.current.classList.add("revealed");
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Start observing
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal-animation ${className}`}
    >
      {children}
    </div>
  );
}
