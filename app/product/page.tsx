"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { UsersIcon, ChartIcon, RocketIcon, TargetIcon } from "@/components/icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const frameworks = [
  {
    title: "Customer Empathy",
    Icon: UsersIcon,
    description: "I start every product decision by deeply understanding customer pain points and motivations. Through user interviews, surveys, and data analysis, I build empathy that drives product decisions grounded in real user needs, not assumptions.",
  },
  {
    title: "Data-Driven Insights",
    Icon: ChartIcon,
    description: "I leverage quantitative and qualitative data to validate hypotheses and measure impact. By combining analytics, A/B testing, and user feedback, I ensure product decisions are backed by evidence and aligned with measurable business objectives.",
  },
  {
    title: "Launch Strategy",
    Icon: RocketIcon,
    description: "Successful launches require meticulous planning and cross-functional coordination. I develop comprehensive go-to-market strategies that align engineering, marketing, sales, and support teams to ensure smooth rollouts and maximum adoption.",
  },
  {
    title: "Success Metrics",
    Icon: TargetIcon,
    description: "I define clear, measurable KPIs that tie product features to business outcomes. By establishing success criteria upfront and tracking progress rigorously, I ensure accountability and enable data-informed iteration post-launch.",
  },
];

const products = [
  {
    name: "FTcase",
    tagline: "Hydrogen Fueling Device Ensuring Safe, Simple, and Cost Effecting Gaseous Fuel Transfer.",
    description: "Supported product development from inception to launch for a breakthrough hydrogen fuel cell technology designed for enabling technology adoption in an emerging and dynamic market.",
    highlights: [
      "PM and PMM Experience - Guided cross-functional teams through technical, go-to-market, and product challenges",
      "Product Inception to First Customer - Supported entire product strategy from grant funded prototype to production launch",
      "Product Launch Strategy - Owned the strategy, messaging, and execution for public product launch in Q3 2024",
      "Customer Engagement - Led partnership with Honda Racing Corporation in Pikes Peak International Hill Climb",
    ],
    tags: ["0 to 1", "Hardware", "Customer Development", "Launch Strategy"],
    imageNote: "Space for product photos",
  },
  {
    name: "Z-class",
    tagline: "High-Performance Hydrogen Fuel Cell Engine",
    description: "Developed and commercialized a cutting-edge hydrogen fuel cell engine platform for high-performance applications in the marine and industrial sectors.",
    highlights: [
      "Market Research - Identified key market opportunities and customer segments",
      "Technical Product Management - Translated complex engineering requirements to business value",
      "Strategic Partnerships - Built relationships with key industry players and early adopters",
    ],
    tags: ["Hard Tech", "B2B", "Market Entry"],
    imageNote: "Space for engine specifications and photos",
  },
  {
    name: "Dental Call Insights",
    tagline: "AI-Powered Call Analytics for Healthcare",
    description: "Designed and built an AI-driven analytics platform to support a low-income dental practice in Southern California, improving call center performance and patient engagement.",
    highlights: [
      "Call Transcriptions - Automated transcription pipeline for 100% call coverage",
      "AI-Driven Insights - Machine learning models for call quality and sentiment analysis",
      "Performance Summaries - Employee performance dashboards with actionable feedback",
      "Summative Call Data - Aggregated analytics to identify trends and improvement opportunities",
    ],
    tags: ["AI/ML", "SaaS", "Healthcare", "Analytics"],
    imageNote: "Space for dashboard screenshots",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="section-container pt-20 pb-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Product Strategy
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Building products from 0 to launch that solve real problems and <br />
            create lasting value.
          </p>
        </motion.div>
      </div>

      {/* Supporting Image */}
      <div className="w-full pt-2 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="relative w-full h-[40vh] overflow-hidden opacity-80">
            <Image
              src="/Ricky Explaining.jpg"
              alt="Ricky explaining product strategy"
              fill
              className="object-cover object-center"
              sizes="100vw"
              style={{ objectPosition: 'center 40%' }}
            />
          </div>
        </motion.div>
      </div>

      {/* My Approach Section */}
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-olive-500/20 backdrop-blur-sm border border-olive-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">My Approach</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe great products start with deep customer understanding. I work hard to understand 
              the intricacies of market forces and how that impacts customers, the product roadmap, and 
              the business. I pride myself on my cross-functional communication, translating complex 
              technical requirements and product strategies to high-level goals for Engineering, GTM, 
              and leadership team alignment.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Key Frameworks */}
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Key Frameworks</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My product approach is built on these core principles
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-8 hover:bg-black/40 transition-all"
            >
              <div className="mb-4">
                <framework.Icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {framework.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {framework.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Notable Products */}
      <div className="section-container py-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Notable Products</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Products I&apos;ve brought from concept to market
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 max-w-5xl mx-auto"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-8 md:p-10 hover:bg-black/40 transition-all"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-xl text-blue-400 mb-4">{product.tagline}</p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {product.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-4 py-1.5 bg-olive-500/20 text-olive-400 text-sm rounded-full border border-olive-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                {product.name === "FTcase" ? (
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-6">
                    {/* FTcase Images Side by Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                          src="/FTcase.jpg"
                          alt="FTcase Hydrogen Fueling Device"
                          width={1200}
                          height={675}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                          src="/FTcase Desert Fueling.jpg"
                          alt="FTcase Desert Fueling"
                          width={1200}
                          height={675}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Honda Racing Racecar Fueled by FTcase and FTcase Fueling Side by Side */}
                    <div>
                      <h4 className="text-xl font-bold text-center mb-3">
                        <a
                          href="https://www.forbes.com/sites/edgarsten/2025/06/18/suitcase-sized-device-to-pump-hydrogen-into-honda-fuel-cell-pikes-peak-racer/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 transition-colors underline decoration-white/50 hover:decoration-gray-300 decoration-2 underline-offset-4 inline-flex items-center gap-2"
                        >
                          Honda Racing Fuel Cell CRV Fueled by FTcase
                        </a>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <Image
                            src="/HRC and FTcase.jpg"
                            alt="Honda Racing Corporation racecar fueled by FTcase"
                            width={1200}
                            height={675}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <Image
                            src="/FTcase fueling.jpg"
                            alt="FTcase fueling operation"
                            width={1200}
                            height={675}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* HRC Lineup */}
                    <div className="flex justify-center">
                      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden" style={{ aspectRatio: '16/5.4' }}>
                        <Image
                          src="/HRC Lineup.jpg"
                          alt="Honda Racing Corporation lineup"
                          width={1200}
                          height={675}
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-gray-400 text-sm italic">
                      {product.imageNote}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
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
            Interested in learning more?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Explore my professional experience and cross-functional leadership
          </p>
          <Link
            href="/experience"
            className="inline-block px-8 py-3 bg-gradient-to-r from-olive-600 to-olive-500 hover:from-olive-700 hover:to-olive-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View My Experience
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

