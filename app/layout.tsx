import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ricky Elder - Product Manager",
    template: "%s | Ricky Elder",
  },
  description: "Data-driven Product Manager connecting business objectives to product strategy, leveraging AI to build engaging customer solutions.",
  keywords: ["product manager", "product strategy", "AI", "data-driven", "product development", "0 to 1"],
  authors: [{ name: "Ricky Elder" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rickyelder.com",
    title: "Ricky Elder - Product Manager",
    description: "Data-driven Product Manager connecting business objectives to product strategy, leveraging AI to build engaging customer solutions.",
    siteName: "Ricky Elder",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricky Elder - Product Manager",
    description: "Data-driven Product Manager connecting business objectives to product strategy, leveraging AI to build engaging customer solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  );
}

