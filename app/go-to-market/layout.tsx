import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-To-Market Strategy",
  description: "Connecting products with markets through strategic positioning and execution. Explore my GTM expertise in positioning, sales enablement, and customer insights.",
  openGraph: {
    title: "Go-To-Market Strategy | Your Name",
    description: "Connecting products with markets through strategic positioning and execution.",
  },
};

export default function GoToMarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

