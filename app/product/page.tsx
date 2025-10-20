"use client";

import { motion } from "framer-motion";

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

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

        {/* Content Sections */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Philosophy */}
          <motion.section variants={fadeInUp} className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe great products start with deep customer understanding. My approach combines 
              data-driven insights with qualitative research to identify opportunities that matter. 
              I focus on creating clear product strategies that align teams and deliver measurable impact.
            </p>
          </motion.section>

          {/* Frameworks */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Frameworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Discovery Process
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Systematic approach to validating problems before building solutions, 
                  combining user interviews, data analysis, and competitive research.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Prioritization
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Framework for evaluating features based on impact, effort, and strategic alignment 
                  to ensure resources are focused on what matters most.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Launch Strategy
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Coordinated approach to product launches that ensures cross-functional alignment 
                  and maximizes adoption through careful planning and execution.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Success Metrics
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Clear definition of success criteria and KPIs that connect product work 
                  to business outcomes and customer value.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Example Launches */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Notable Launches
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  [Product Name] - [Impact]
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Led the development and launch of [product/feature], resulting in [specific metrics]. 
                  Coordinated across engineering, design, and marketing to deliver a cohesive solution.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm rounded-full">
                    Strategy
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm rounded-full">
                    Launch
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm rounded-full">
                    Growth
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  [Another Product] - [Impact]
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Identified opportunity through customer research and data analysis. Built business case, 
                  roadmap, and GTM strategy that resulted in [specific outcomes].
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm rounded-full">
                    Research
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm rounded-full">
                    Execution
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

