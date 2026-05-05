"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TargetIcon, RocketIcon, MegaphoneIcon } from "@/components/icons";

const sections = [
  {
    title: "Product Strategy",
    href: "/product",
    description: "Building products from 0 to launch that solve real problems and create lasting value",
    Icon: TargetIcon,
    gradient: "from-olive-500/20 to-olive-400/20",
  },
  {
    title: "Experience",
    href: "/experience",
    description: "Cross-functional leadership across product, marketing, engineering, and operations",
    Icon: RocketIcon,
    gradient: "from-olive-600/20 to-olive-500/20",
  },
  {
    title: "Marketing Portfolio",
    href: "/marketing",
    description: "Video production, sales collateral, event strategy, and earned media from my time at ZEI",
    Icon: MegaphoneIcon,
    gradient: "from-olive-400/20 to-olive-300/20",
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
      <section className="section-container py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Headshot Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/Ricky Elder Portfolio 91525.jpg"
                alt="Ricky Elder - Product Manager"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </motion.div>

          {/* Main Content - Right Side */}
          <div className="order-1 lg:order-2">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-olive-400">
                Ricky Elder
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              GTM strategist and Product leader with a startup pedigree. Connecting customer insights, market strategy, and product execution to drive growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#explore"
                className="px-8 py-3 bg-gradient-to-r from-olive-600 to-olive-500 hover:from-olive-700 hover:to-olive-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore My Work
              </a>
              <a
                href="https://www.linkedin.com/in/richard-z-elder/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 glass-card hover:bg-black/40 text-white font-medium rounded-lg transition-all"
              >
                View LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key Highlights
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Core strengths that define my approach to product and leadership
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Cross-Functional Leader */}
          <motion.div variants={itemVariants}>
            <Link
              href="/experience#cross-functional-leadership"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full p-8 glass-card hover:bg-black/40 transition-all hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6">
                  <svg className="w-16 h-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  Cross-Functional Leader
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  Led teams across product, engineering, marketing, and operations—driving alignment and results
                </p>
                <div className="mt-6 flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Gen AI Experience */}
          <motion.div variants={itemVariants}>
            <Link
              href="/product#dental-call-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full p-8 glass-card hover:bg-black/40 transition-all hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6">
                  <svg className="w-16 h-16 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Gen AI Experience
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  Built AI-driven analytics platform from concept to deployment for healthcare insights
                </p>
                <div className="mt-6 flex items-center text-purple-400 font-medium group-hover:text-purple-300">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Concept to Launch */}
          <motion.div variants={itemVariants}>
            <Link
              href="/product#ftcase"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full p-8 glass-card hover:bg-black/40 transition-all hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6">
                  <svg className="w-16 h-16 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  Concept to Launch
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  Guided breakthrough hydrogen technology from prototype to production and market launch
                </p>
                <div className="mt-6 flex items-center text-green-400 font-medium group-hover:text-green-300">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Sections Grid */}
      <section id="explore" className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore My Journey
          </h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I am an analytical thinker who loves to understand corporate strategic decisions and
            optimize life through data. Growing up in the Bay Area, I live and breathe tech and aim to leverage my skills and experience to transform products
            that have a global impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {sections.map((section) => (
            <motion.div key={section.href} variants={itemVariants}>
              <Link
                href={section.href}
                className="block h-full p-8 glass-card hover:bg-black/40 transition-all hover:shadow-2xl group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <div className="mb-6">
                    <section.Icon className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-olive-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {section.description}
                  </p>
                  <div className="mt-6 flex items-center text-olive-400 font-medium group-hover:text-olive-300">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
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
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

