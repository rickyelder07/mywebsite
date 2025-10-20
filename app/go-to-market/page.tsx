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

export default function GoToMarketPage() {
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
            Go-To-Market Strategy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Connecting products with markets through strategic positioning and execution.
          </p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Overview */}
          <motion.section variants={fadeInUp} className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Strategic Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Effective go-to-market strategy bridges the gap between product capabilities and 
              customer needs. I specialize in creating positioning that resonates, messaging that 
              converts, and enablement that scales.
            </p>
          </motion.section>

          {/* Core Competencies */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Core Competencies
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Market Positioning
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Develop compelling positioning that differentiates products in crowded markets. 
                  Focus on identifying unique value propositions that resonate with target customers 
                  and create sustainable competitive advantages.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Sales Enablement
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Create comprehensive enablement programs that equip sales teams with the tools, 
                  content, and training needed to effectively communicate value and close deals. 
                  Bridge product knowledge with customer-facing teams.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Customer Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Synthesize customer feedback, market research, and competitive intelligence to 
                  inform strategy. Build deep understanding of customer journeys, pain points, 
                  and decision-making processes.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Launch Planning
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Orchestrate successful product launches through detailed planning, cross-functional 
                  coordination, and clear communication. Ensure all teams are aligned on timing, 
                  messaging, and success metrics.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Impact Examples */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Impact Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  X%
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Increase in sales pipeline through improved positioning and messaging
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Y+
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Successful product launches with coordinated GTM execution
                </p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Z%
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Improvement in sales team effectiveness through enablement programs
                </p>
              </div>
            </div>
          </motion.section>

          {/* Tools & Methods */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tools & Methods
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Competitive Analysis",
                "Customer Research",
                "Value Proposition Design",
                "Message Testing",
                "Sales Playbooks",
                "Launch Checklists",
                "Win/Loss Analysis",
                "Market Segmentation",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

