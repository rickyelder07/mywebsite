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
    default: "Ricky Elder - Product, GTM & Software",
    template: "%s | Ricky Elder",
  },
  description: "Personal website showcasing my work in Product, Go-To-Market, Software, and Personal interests.",
  keywords: ["product", "go-to-market", "software", "portfolio"],
  authors: [{ name: "Ricky Elder" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rickyelder.com",
    title: "Ricky Elder - Product, GTM & Software",
    description: "Personal website showcasing my work in Product, Go-To-Market, Software, and Personal interests.",
    siteName: "Ricky Elder",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricky Elder - Product, GTM & Software",
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

