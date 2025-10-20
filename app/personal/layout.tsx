import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal",
  description: "Reflections, values, and the things that matter to me. Learn about my interests, hobbies, and what I'm currently up to.",
  openGraph: {
    title: "Personal | Your Name",
    description: "Reflections, values, and the things that matter to me.",
  },
};

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

