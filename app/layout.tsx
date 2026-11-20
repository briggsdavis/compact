import type { Metadata } from "next";
import SiteEffects from "@/components/SiteEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: "CD",
  description: "A little cinema. A very good dinner. Meals made to follow the movie.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteEffects />{children}</body></html>;
}
