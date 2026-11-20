"use client";

import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    Array.from(el.children).forEach((child, index) => (child as HTMLElement).style.setProperty("--child-delay", `${index * 95}ms`));
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add("is-visible"); observer.unobserve(el); }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
