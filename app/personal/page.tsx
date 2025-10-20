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

export default function PersonalPage() {
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
            Personal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Reflections, values, and the things that matter to me.
          </p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Quote Section */}
          <motion.section variants={fadeInUp}>
            <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
              <blockquote className="text-2xl font-medium text-gray-900 dark:text-white italic mb-4">
                &ldquo;The best way to predict the future is to create it.&rdquo;
              </blockquote>
              <p className="text-gray-600 dark:text-gray-400">
                — A principle that guides my approach to work and life
              </p>
            </div>
          </motion.section>

          {/* Values */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Core Values
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🎯 Impact Over Activity
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Focus on outcomes that matter. It&apos;s not about being busy — it&apos;s about 
                  creating meaningful change and delivering value.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🌱 Continuous Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Stay curious and embrace growth. Every challenge is an opportunity to learn 
                  something new and become better.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🤝 Collaboration & Transparency
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Great things happen when people work together openly. Clear communication 
                  and mutual respect create the best outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  ⚡ Bias Toward Action
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Move fast and iterate. Perfection is the enemy of progress — start, learn, 
                  and improve along the way.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Interests */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Interests & Hobbies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  📚 Reading
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Always have a book in progress. Favorite genres include business strategy, 
                  technology, and science fiction.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  🏃‍♂️ Running
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Regular runner who enjoys the mental clarity and physical challenge. 
                  Training for half marathons.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  ☕ Coffee
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Coffee enthusiast exploring different brewing methods and specialty beans. 
                  Pour over is my current favorite.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  🎵 Music
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Wide-ranging taste from jazz to electronic. Music is essential for focus 
                  and creativity.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Currently */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What I&apos;m Up To
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <p className="text-gray-600 dark:text-gray-400">
                  📖 <strong>Reading:</strong> [Current Book Title] by [Author]
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <p className="text-gray-600 dark:text-gray-400">
                  🛠️ <strong>Building:</strong> [Current Side Project or Learning Goal]
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <p className="text-gray-600 dark:text-gray-400">
                  🎯 <strong>Learning:</strong> [New Skill or Technology]
                </p>
              </div>
            </div>
          </motion.section>

          {/* Get In Touch */}
          <motion.section variants={fadeInUp} className="pt-8">
            <div className="p-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Always open to interesting conversations about product, technology, or life in general.
              </p>
              <a
                href="mailto:your.email@example.com"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

