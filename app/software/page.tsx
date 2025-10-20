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

const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application built with Next.js, TypeScript, and PostgreSQL. Features real-time updates, authentication, and responsive design.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/yourusername/project-alpha",
    status: "Active",
  },
  {
    title: "Data Analytics Tool",
    description:
      "Python-based analytics tool for processing and visualizing large datasets. Includes custom ETL pipeline and interactive dashboards.",
    technologies: ["Python", "Pandas", "Plotly", "FastAPI"],
    link: "https://github.com/yourusername/analytics-tool",
    status: "Active",
  },
  {
    title: "API Integration Service",
    description:
      "Microservice for managing third-party API integrations with rate limiting, caching, and error handling. Built with Node.js and Redis.",
    technologies: ["Node.js", "Express", "Redis", "Docker"],
    link: "https://github.com/yourusername/api-service",
    status: "Maintained",
  },
  {
    title: "Mobile App",
    description:
      "React Native application for iOS and Android with offline support, push notifications, and seamless UX.",
    technologies: ["React Native", "TypeScript", "Firebase"],
    link: "https://github.com/yourusername/mobile-app",
    status: "Beta",
  },
];

export default function SoftwarePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Software & Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Building software that solves problems and creates value.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Node.js, Python, PostgreSQL, Redis
              </p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Docker, CI/CD, AWS, Vercel
              </p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Git, VS Code, Figma, Linear
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-500 font-medium hover:underline"
                >
                  View on GitHub
                  <svg
                    className="w-4 h-4 ml-1"
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Open Source Contributions */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Open Source Contributions
          </h2>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Active contributor to various open source projects, focusing on developer tools, 
              documentation improvements, and bug fixes. Passionate about giving back to the 
              community and collaborating with developers worldwide.
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-500 font-medium hover:underline"
            >
              View My GitHub Profile
              <svg
                className="w-4 h-4 ml-1"
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
          </div>
        </motion.section>
      </div>
    </div>
  );
}

