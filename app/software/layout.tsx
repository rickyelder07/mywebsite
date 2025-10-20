import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & Projects",
  description: "Building software that solves problems and creates value. Explore my technical projects, contributions, and skills.",
  openGraph: {
    title: "Software & Projects | Your Name",
    description: "Building software that solves problems and creates value.",
  },
};

export default function SoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

