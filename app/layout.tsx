import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import { ThemeProvider } from "@/components/theme-provider"
import ThemeHydrationWrapper from "@/components/ThemeHydrationWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TravelOfTrust - Your Trusted Partner for Umrah Journey",
  description:
    "TravelOfTrust provides seamless Umrah travel experiences, ensuring every journey is memorable and spiritually fulfilling.",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
        ></Script>

        {/* <ThemeProvider> */}
        <ThemeHydrationWrapper>
          <Header />
          {children}
          <Footer />
        </ThemeHydrationWrapper>

        <WhatsAppButton />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
