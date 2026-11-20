"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("page-blur-out", "page-blur-in");
    void document.body.offsetWidth;
    document.body.classList.add("page-blur-in");
    const timer = window.setTimeout(() => document.body.classList.remove("page-blur-in"), 700);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const scrollToAnchor = (destination: HTMLElement) => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.add("programmatic-scroll");
      const start = window.scrollY;
      const end = Math.max(0, start + destination.getBoundingClientRect().top - 88);
      const distance = end - start;
      const duration = Math.min(1700, Math.max(1050, Math.abs(distance) * 0.75));
      const began = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - began) / duration);
        const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
        else document.documentElement.classList.remove("programmatic-scroll");
      };
      frame = requestAnimationFrame(tick);
    };
    const smoothAnchor = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      if (!target) return;
      const id = decodeURIComponent(target.hash.slice(1));
      const destination = document.getElementById(id);
      if (!destination) return;
      event.preventDefault();
      scrollToAnchor(destination);
    };
    document.addEventListener("click", smoothAnchor);
    return () => { document.removeEventListener("click", smoothAnchor); cancelAnimationFrame(frame); document.documentElement.classList.remove("programmatic-scroll"); };
  }, []);

  return null;
}
