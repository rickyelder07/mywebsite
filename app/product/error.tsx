"use client";

import ErrorFallback from "@/components/ErrorFallback";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Product Strategy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building products that solve real problems and create lasting value.
          </p>
        </div>
        
        <ErrorFallback 
          error={error.message || "Failed to load product content"} 
          onRetry={reset}
        />
      </div>
    </div>
  );
}
