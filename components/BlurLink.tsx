"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

export default function BlurLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  return <Link href={href} className={className} onClick={event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || href.startsWith("#")) return;
    const destination = new URL(href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname === pathname) return;
    event.preventDefault();
    document.body.classList.add("page-blur-out");
    window.setTimeout(() => router.push(`${destination.pathname}${destination.search}${destination.hash}`), 260);
  }}>{children}</Link>;
}
