"use client";

import BlurLink from "@/components/BlurLink";

export default function Nav({ active = "home" }: { active?: string }) {
  return <>
    <header className="site-nav">
      <BlurLink className="brand" href="/" ><span className="brand-disc"><i/></span><span>compact<span className="brand-period">.</span></span></BlurLink>
      <nav className="main-nav" aria-label="Main navigation">
        <BlurLink className={active === "home" ? "nav-link active" : "nav-link"} href="/">Home</BlurLink>
        <button className="nav-link unavailable" title="Coming soon" aria-disabled="true">Menu <span>soon</span></button>
        <button className="nav-link unavailable" title="Coming soon" aria-disabled="true">Movies <span>soon</span></button>
      </nav>
      <BlurLink href="/contact" className="contact-pill">Contact <span aria-hidden="true">↗</span></BlurLink>
    </header>
  </>;
}
