"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TargetIcon, MegaphoneIcon, GearIcon, WrenchIcon, CoinIcon } from "@/components/icons";

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
            discomfort and a willingness to learn from others with curiosity and 
            egoless collaboration. 
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
          className="w-full md:w-9/10 mx-auto"
        >
          <div className="glass-card p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div>
                <Image
                  src="/ZEI logo white.svg"
                  alt="Zero Emission Industries Logo"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <a
                    href="https://www.zeroei.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-olive-400 transition-colors"
                  >
                    Zero Emission Industries
                  </a>
                </h2>
                <p className="text-xl text-olive-400">
                  Hard-tech Hydrogen Product Company
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              I&apos;ve had the opportunity to help a hydrogen technology company grow from 3 to 20+ employees. Throughout that time I earned significant responsibility as a leader 
              in multiple cross-functional roles supporting the development of novel products in an 
              emerging market. While working countless long nights and weekends I project managed 
              multiple world firsts, launched a novel hydrogen refueling product, built a marketing 
              org, helped run board meetings,  was tested creatively,
              led multiple teams and strategic company initiatives, got my Commercial HazMat License 
              to fuel a race car, and made some friends for life.
            </p>

            {/* Cross-Functional Leadership */}
            <div className="mb-12">
              <div className="w-5/5 mx-auto bg-white/5 rounded-lg border border-white/10 p-8 md:p-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Cross-Functional Leadership
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  While at ZEI I led a team or ran point in all of these organizational units and know I can 
                  effectively communicate and facilitate cross-functionally.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {crossFunctionalAreas.map((area, index) => (
                    <div
                      key={index}
                      className="glass-card p-6 hover:bg-black/40 transition-all"
                    >
                      <div className="mb-4">
                        <area.Icon className="w-12 h-12" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">
                        {area.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Key Achievements
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-olive-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Grant Writing & Fundraising</h4>
                    <p className="text-gray-300">Wrote and won $7.25M in grants to fund R&D and product development</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-olive-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Product Management</h4>
                    <p className="text-gray-300">I worked closely with and served as the product manager on the development of 3 customer facing technology products in an emerging market full of headwinds and ambiguity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-olive-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Team Building</h4>
                    <p className="text-gray-300">Helped raise $8.75M Series A. Scaled company from 3 to 20+ employees</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-olive-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Marketing Organization</h4>
                    <p className="text-gray-300">Built marketing org from ground up to support product launches and branding</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-olive-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">World-First Projects</h4>
                    <p className="text-gray-300">Project managed multiple world-first hydrogen applications including a fuel cell passenger ferry, a fuel cell powerboat, and novel fuel transfer system. </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-olive-400 mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Hands-On Leadership</h4>
                    <p className="text-gray-300">Served as a leader within multiple verticals across the organization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Leadership Callout */}
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-olive-500/20 backdrop-blur-sm border border-olive-500/30 rounded-2xl p-6 md:p-8">
            <p className="text-xl text-gray-300 leading-relaxed font-medium">
              I pride myself on my selflessness as a leader and my relentless attitude toward 
              achieving the commitments I make to my team and to myself.
            </p>
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
            className="inline-block px-8 py-3 bg-gradient-to-r from-olive-600 to-olive-500 hover:from-olive-700 hover:to-olive-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Product Strategy
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

