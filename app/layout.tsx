import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Your Name - Product, GTM & Software",
    template: "%s | Your Name",
  },
  description: "Personal website showcasing my work in Product, Go-To-Market, Software, and Personal interests.",
  keywords: ["product", "go-to-market", "software", "portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Your Name - Product, GTM & Software",
    description: "Personal website showcasing my work in Product, Go-To-Market, Software, and Personal interests.",
    siteName: "Your Name",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Product, GTM & Software",
    description: "Personal website showcasing my work in Product, Go-To-Market, Software, and Personal interests.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

