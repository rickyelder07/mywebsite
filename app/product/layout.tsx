import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Strategy",
  description: "Building products that solve real problems and create lasting value. Explore my approach to product strategy, frameworks, and successful launches.",
  openGraph: {
    title: "Product Strategy | Your Name",
    description: "Building products that solve real problems and create lasting value.",
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

