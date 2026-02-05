"use client"
// import type { Metadata } from "next";
import {  Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/layout/footer/footer";
import "@fortawesome/fontawesome-free/css/all.min.css"



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} `}
      > 
        <Header/>
        {children}
        <Footer/>
        
        
      </body>
    </html>
  );
}
