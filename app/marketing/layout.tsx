import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing",
  description:
    "A curated portfolio of marketing content developed at Zero Emission Industries — video production, written collateral, event marketing, and earned press coverage.",
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
