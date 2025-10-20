"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "Product",
    href: "/product",
    description: "Strategy, frameworks, and product launches",
    icon: "📦",
  },
  {
    title: "Go-To-Market",
    href: "/go-to-market",
    description: "GTM strategy, positioning, and sales enablement",
    icon: "🚀",
  },
  {
    title: "Software",
    href: "/software",
    description: "Projects and contributions I've built",
    icon: "💻",
  },
  {
    title: "Personal",
    href: "/personal",
    description: "Reflections, values, and interests",
    icon: "✨",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-500">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            I work at the intersection of <strong>Product</strong>, <strong>Go-To-Market</strong>, 
            and <strong>Software</strong> — building things that matter.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#sections"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Explore My Work
            </a>
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Sections Grid */}
      <section id="sections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {sections.map((section) => (
            <motion.div key={section.href} variants={itemVariants}>
              <Link
                href={section.href}
                className="block p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg group"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-500 font-medium">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

