import Disc from "@/components/Disc";
import BlurLink from "@/components/BlurLink";
import Reveal from "@/components/Reveal";

export default function SiteFooter() {
  return <footer className="closing site-end">
    <Disc className="closing-disc" followCursor />
    <Reveal className="closing-main"><h2>Make tonight<br/>a <em>little</em> more cinematic.</h2><BlurLink className="button button-outline" href="/contact">Let’s plan a night <span>↗</span></BlurLink></Reveal>
    <div className="footer-meta"><BlurLink className="brand footer-brand" href="/"><span className="brand-disc"><i/></span><span>compact<span className="brand-period">.</span></span></BlurLink><span className="footer-motto">MAKE TONIGHT A CINEMA.</span><a className="footer-credit" href="https://socialsatisfaction.agency" target="_blank" rel="noreferrer">Made by Social Satisfaction <span>↗</span></a></div>
  </footer>;
}
