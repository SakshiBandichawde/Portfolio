import type { Metadata } from "next";
import{ Inter, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "Sakshi | Full Stack Developer",
  description: "Portfolio of Sakshi, a full stack developer building modern MERN stack web applications."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <SmoothScroll>
        {children}
        </SmoothScroll>
        </body>
    </html>
  );
}
