"use client";

import { motion } from "framer-motion";

interface ErrorFallbackProps {
  error: string;
  onRetry?: () => void;
}

export default function ErrorFallback({ error, onRetry }: ErrorFallbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-12"
    >
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-red-500 dark:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Unable to Load Content
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {error || "There was an error loading content from Notion. Please try again later."}
        </p>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Try Again
          </button>
        )}
        
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>For developers:</strong> Check your Notion API configuration and database permissions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
