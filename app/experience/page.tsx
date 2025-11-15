"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TargetIcon, MegaphoneIcon, GearIcon, WrenchIcon, CoinIcon, LightningIcon } from "@/components/icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const crossFunctionalAreas = [
  {
    title: "Product",
    Icon: TargetIcon,
    description: "Working closely with an advisor to build the framework for our company's PDP quickly threw me into the deep end of product. Since then, I have served as a PM to research markets, define requirements, and build customer facing solutions.",
  },
  {
    title: "Marketing",
    Icon: MegaphoneIcon,
    description: "I have experience working with designers, publicists, and creatives to define what success looks like in an often subjective and ever-evolving landscape. I've led teams through press announcements, product unveilings, and organizational rebrands.",
  },
  {
    title: "Engineering",
    Icon: GearIcon,
    description: "Project managing an experienced team for a highly technical, world-first project required organization, quick learning, and no ego. Going cross-functional to translate goals from the mind of a creative to an engineer and vice versa took a lot of work.",
  },
  {
    title: "Operations",
    Icon: WrenchIcon,
    description: "IT, hiring, onboarding, legal, process development, facility management and more meant interfacing across the org. Connecting team members with contractors, advisors, and execs required effective communication and adaptability to preferred communication styles.",
  },
  {
    title: "Finance",
    Icon: CoinIcon,
    description: "Hiring a finance assistant and training them to interface with the entire org for expenses, time tracking, and month end closes required direct leadership and empathy.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="section-container py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Experience Snapshot
          </h1>
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            My career as an emerging business professional has been defined by growth through 
            discomfort and a willingness to learn from others with transparent curiosity and 
            egoless collaboration.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            I pride myself on my selflessness as a leader and my relentless attitude toward 
            achieving the commitments I make to my team and to myself.
          </p>
        </motion.div>
      </div>

      {/* Zero Emission Industries Section */}
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div>
                <LightningIcon className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Zero Emission Industries
                </h2>
                <p className="text-xl text-orange-400">
                  Hard-tech Hydrogen Product Company
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;ve had the opportunity to help a hydrogen fuel cell technology company grow from 3 to 
              over 20 employees. Throughout that time I earned significant responsibility as a leader 
              in multiple cross-functional roles supporting the development of novel products in an 
              emerging market. While working countless long nights and weekends I project managed 
              multiple world firsts, launched a novel hydrogen refueling product, built a marketing 
              org, was tested creatively, wrote and won <span className="text-orange-400 font-semibold">$7.25M worth of grants</span>, 
              led multiple teams and strategic company initiatives, got my Commercial HazMat License 
              to fuel a race car, and made some friends for life.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Cross-Functional Leadership */}
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Cross-Functional Leadership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I have led a team or ran point in all of these organizational units and know I can 
            effectively communicate and facilitate cross-functionally.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {crossFunctionalAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-8 hover:bg-black/40 transition-all"
            >
              <div className="mb-4">
                <area.Icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {area.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Key Achievements Section */}
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Key Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Grant Writing & Fundraising</h4>
                  <p className="text-gray-300">Wrote and won $7.25M in grants to fund R&D and product development</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Product Launch</h4>
                  <p className="text-gray-300">Successfully launched novel hydrogen refueling product to market</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Team Building</h4>
                  <p className="text-gray-300">Helped scale company from 3 to 20+ employees</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Marketing Organization</h4>
                  <p className="text-gray-300">Built marketing org from ground up to support product launches</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">World-First Projects</h4>
                  <p className="text-gray-300">Project managed multiple world-first hydrogen fuel cell applications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Hands-On Leadership</h4>
                  <p className="text-gray-300">Got Commercial HazMat License to support race team operations</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="section-container py-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Want to see how I approach product?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Explore my product strategy and frameworks
          </p>
          <Link
            href="/product"
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Product Strategy
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

