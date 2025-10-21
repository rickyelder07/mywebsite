"use client";

import { motion } from "framer-motion";
import { ContentItem } from "@/lib/notion";
import ContentCard from "@/components/ContentCard";
import ErrorFallback from "@/components/ErrorFallback";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface ProductContentProps {
  content: ContentItem[];
  error?: string;
}

export default function ProductContent({ content, error }: ProductContentProps) {
  if (error) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Product Strategy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Building products that solve real problems and create lasting value.
            </p>
          </motion.div>
          <ErrorFallback error={error} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Product Strategy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Building products that solve real problems and create lasting value.
          </p>
        </motion.div>

        {/* Dynamic Content from Notion */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Product Work & Frameworks
          </h2>
          
          {content.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No content available. Check your Notion database configuration.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.map((item, index) => (
                <ContentCard key={item.id} item={item} index={index} />
              ))}
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
}
