import type { Metadata } from "next";
import "./globals.css";
import { News_Cycle } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

const  newsCycle = News_Cycle({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "News App",
  description: "Keeping you updated on every step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={newsCycle.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
