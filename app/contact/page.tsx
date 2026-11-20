"use client";

import { useState } from "react";
import BlurLink from "@/components/BlurLink";
import Nav from "@/components/Nav";
import Disc from "@/components/Disc";
import SiteFooter from "@/components/SiteFooter";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return <main className="contact-page">
    <Nav active="contact" />
    <Disc className="contact-disc" />
    <section className="contact-content">
      {sent ? <div className="form-success"><span className="success-mark">✳</span><h1>Note <em>received.</em></h1><p>Your message is ready for the next course.</p><BlurLink href="/" className="underlined-link">Back to the beginning <span>↗</span></BlurLink></div> : <>
        <h1 className="contact-title">Contact</h1>
        <p className="contact-lede">Have a film in mind, a question, or an opinion about movie snacks? We’re listening.</p>
        <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <label>Your name<input required name="name" placeholder="The name on the reservation" /></label>
          <label>Email address<input required name="email" type="email" placeholder="you@somewhere.com" /></label>
          <label>What’s on your mind?<textarea required name="message" rows={3} placeholder="Tell us the scene…" /></label>
          <button className="button button-dark" type="submit">Send your note <span>↗</span></button>
        </form>
      </>}
    </section>
    <SiteFooter />
  </main>;
}
