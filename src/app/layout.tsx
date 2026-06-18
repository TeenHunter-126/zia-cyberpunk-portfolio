import type { Metadata } from "next";
import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const shareTech = Share_Tech_Mono({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ZIA UL HASSAN // Mechatronics & Robotics Engineer",
  description:
    "Cyberpunk portfolio of Muhammad Zia Ul Hassan — Mechatronics & Control Engineer, Head of Robotics & AI at Punjab Group of Colleges. Specializing in robotics, embedded systems, PLC automation, and machine learning.",
  keywords: [
    "Zia Ul Hassan",
    "Mechatronics Engineer",
    "Robotics",
    "Embedded Systems",
    "PLC Automation",
    "Machine Learning",
    "Industrial Automation",
    "UET Lahore",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Zia Ul Hassan" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "ZIA UL HASSAN // Mechatronics & Robotics Engineer",
    description:
      "Cyberpunk portfolio showcasing robotics, automation, and AI engineering work.",
    siteName: "Zia Ul Hassan Portfolio",
    type: "website",
    url: "https://ziaulhassan.vercel.app",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Zia Ul Hassan Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZIA UL HASSAN // Mechatronics & Robotics Engineer",
    description:
      "Cyberpunk portfolio showcasing robotics, automation, and AI engineering work.",
    site: "@ziaulhassan",
  },
  metadataBase: new URL("https://ziaulhassan.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${shareTech.variable} antialiased scanlines`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
