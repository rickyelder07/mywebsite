"use client";

import { motion } from "framer-motion";

const skeletonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0.3 },
  visible: {
    opacity: 0.7,
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 1.5,
    },
  },
};

export default function LoadingSkeleton() {
  return (
    <motion.div
      variants={skeletonVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
        >
          <div className="space-y-4">
            {/* Title skeleton */}
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            
            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
            </div>
            
            {/* Tags skeleton */}
            <div className="flex gap-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
            </div>
            
            {/* Footer skeleton */}
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
