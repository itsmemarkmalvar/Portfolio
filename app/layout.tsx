import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Joseph N. Malvar | Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Next.js, Laravel, and React Native. BSCS graduate — open to opportunities. View projects and get in touch.",
  keywords: [
    "Mark Joseph Malvar",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "React Native",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Mark Joseph N. Malvar", url: "https://github.com/itsmemarkmalvar" }],
  openGraph: {
    title: "Mark Joseph N. Malvar | Full-Stack Developer",
    description:
      "Full-stack developer — React, Next.js, Laravel. BSCS graduate. Open to opportunities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Joseph N. Malvar | Full-Stack Developer",
    description: "Full-stack developer. React, Next.js, Laravel. Open to opportunities.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="https://unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
