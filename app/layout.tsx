//layout.tsx

import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./compontents/Navbar";
import Footer from "./compontents/Footer";
import Head from "next/head";


// FUENTES

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const nasaFont = localFont({
  src: "./fonts/nasalization-rg.otf",
  variable: "--nasalization",
  weight: "100 900",
});

const ostrichSans = localFont({
  src: "./fonts/OstrichSans-Medium.otf",
  variable: "--ostrich",
  weight: "100 900",
});


const dinBlack = localFont({
  src: "./fonts/DIN Black.ttf",
  variable: "--din-black",
  weight: "100 900",
});

const dinBold = localFont({
  src: "./fonts/DIN Bold.ttf",
  variable: "--din-bold",
  weight: "100 900",
});

const dinMedium = localFont({
  src: "./fonts/DIN Medium.ttf",
  variable: "--din-medium",
  weight: "100 900",
});

const dinNormal = localFont({
  src: "./fonts/DIN.ttf",
  variable: "--din-normal",
  weight: "100 900",
});

const nikeFont = localFont({
  src: "./fonts/Futura Condensed Extra Bold.otf",
  variable: "--nike",
  weight: "100 900",
});




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${nikeFont.variable} ${dinMedium.variable} ${dinNormal.variable} ${dinBold.variable} ${dinBlack.variable} ${ostrichSans.variable} ${nasaFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 ">
            {/* Contenido principal de la página */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
