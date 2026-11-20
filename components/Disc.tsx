"use client";

import { useEffect, useRef } from "react";

export default function Disc({ className = "", followCursor = false }: { className?: string; followCursor?: boolean }) {
  const discRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = discRef.current;
        if (!el) return;
        const y = window.scrollY;
        const rotation = (y * 0.12) % 360;
        const tilt = Math.min(y / 40, 12);
        el.style.setProperty("--scroll-rotate", `${rotation}deg`);
        el.style.setProperty("--scroll-tilt", `${tilt}deg`);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    const trackPointer = (event: PointerEvent) => {
      if (!followCursor) return;
      const el = discRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
      const dy = (event.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
      el.style.setProperty("--cursor-tilt-x", `${Math.max(-12, Math.min(12, dy * -10))}deg`);
      el.style.setProperty("--cursor-tilt-y", `${Math.max(-12, Math.min(12, dx * 10))}deg`);
    };
    window.addEventListener("pointermove", trackPointer, { passive: true });
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("pointermove", trackPointer); cancelAnimationFrame(frame); };
  }, [followCursor]);

  return <div ref={discRef} aria-hidden="true" className={`disc ${className}`}><div className="disc-sheen"/><div className="disc-rings"/><div className="disc-hub"><span/></div><div className="disc-glint"/></div>;
}
