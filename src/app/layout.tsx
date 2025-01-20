import Header from '../components/Header';
import type { Metadata } from "next";
import React from 'react';
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import localFont from 'next/font/local';

const raleway = localFont ({
  src:'../font/Raleway.woff2',
  variable:'--font-raleway',
  wight:'100 900',
});

export const metadata: Metadata = {
  title: "Future Clothing Collection",
  description: "Explore a new era of fashion with innovation, comfort, and style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
