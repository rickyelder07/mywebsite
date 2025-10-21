import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header skeleton */}
        <div className="mb-12">
          <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        </div>
        
        {/* Content skeleton */}
        <div className="mb-6">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
        </div>
        
        <LoadingSkeleton />
      </div>
    </div>
  );
}
