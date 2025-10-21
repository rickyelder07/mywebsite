"use client";

import { motion } from "framer-motion";
import { ContentItem } from "@/lib/notion";

interface ContentCardProps {
  item: ContentItem;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
    },
  }),
};

export default function ContentCard({ item, index }: ContentCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="group p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
            {item.title}
          </h3>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              aria-label={`View ${item.title}`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {item.description}
        </p>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>Created {item.createdAt}</span>
          {item.url && (
            <span className="text-blue-600 dark:text-blue-500 font-medium">
              View Details →
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
