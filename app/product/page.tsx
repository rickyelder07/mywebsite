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
    name: "Dental Call Insights",
    tagline: "Transforming Healthcare Call Recordings into Actionable Insights.",
    description: "Built an AI-driven analytics platform to support a low-income dental practice in Southern California, increasing call center transparency and patient engagement understanding. Interviewed with the leadership team of the dental firm to define product requirements and features, leveraging AI assisted coding tools to build, host, and deliver the product myself.",
    highlights: [
      "Requirements Gathering - Conducted stakeholder interviews with dental practice leadership to define product requirements and features, translating healthcare business needs into technical product specifications",
      "End-to-End Product Delivery - Leveraged AI-assisted coding tools to build, host, and deliver the analytics platform, combining product management strategy with hands-on technical execution",
      "Customer-Centric Product Definition - Defined product features focused on increasing call center transparency and patient engagement understanding for a low-income healthcare setting",
      "AI-Driven Solution Design - Architected and implemented an AI-driven analytics platform to transform call recordings into actionable insights, demonstrating technical product management capabilities",
    ],
    tags: ["0 to 1", "Hardware", "Software", "Customer Development", "Launch Strategy"],
    imageNote: "Space for product photos",
  },
  {
    name: "FTcase",
    tagline: "Software Driven Hydrogen Fueling Device for Automated Gaseous Fuel Transfer.",
    description: "Supported product development from inception to launch for a breakthrough hydrogen fuel cell technology designed for enabling technology adoption in an emerging and dynamic market. Worked closely with product engineering, and GTM teams to define and execute along organizational product development process.",
    highlights: [
      "PM and PMM Experience - Guided cross-functional teams through prototype, EVT, DVT, PVT development and launch",
      "Product Inception to First Customer - Supported entire product strategy from grant funded prototype to production launch",
      "Product Launch Strategy - Owned the strategy, messaging, and execution for public product launch in Q3 2024",
      "Customer Engagement - Led partnership with Honda Racing Corporation in Pikes Peak International Hill Climb",
    ],
    tags: ["0 to 1", "Hardware", "Software", "Customer Development", "Launch Strategy"],
    imageNote: "Space for product photos",
  },
  {
    name: "H2OS",
    tagline: "Hydrogen Operating Software - Complete Mission Control for Zero-Emission Assets",
    description: "Supported design and requirements gathering for a comprehensive operating software platform that provides total control and oversight of covert, zero-emission hydrogen systems across land, sea, and edge applications. While the product was never fully launched to customers, the foundational work established critical product requirements and design principles.",
    highlights: [
      "Requirements Gathering - cross-functional discovery to define core platform capabilities including predictive diagnostics, maintenance scheduling, and remote operation",
      "Design Support - Collaborated with product and engineering teams to translate operator needs into system designs for hydrogen production, storage, distribution, and power production",
      "Interoperability Strategy - Supported plug-and-play integration requirements across ZEI hardware modules to ensure platform extensibility",
    ],
    tags: ["Software", "Requirements Gathering", "Design Support", "Platform Strategy"],
    imageNote: "Space for software interface mockups",
  },
  {
    name: "Z-class",
    tagline: "Stealth-Capable Hydrogen Fuel Cell Power Systems for Vehicle and Remote Applications",
    description: "Played a critical role in requirements gathering and initial technical prototype development for ZEI's flagship hydrogen fuel cell power platform. Supported product definition for both vehicle propulsion systems and remote power generators, translating complex technical capabilities into clear value propositions for defense, marine, and industrial customers. ",
    highlights: [
      "Requirements Gathering - Conducted deep customer discovery to define critical performance requirements including stealth capabilities, power output, and signature management needs",
      "Technical Prototype Development - Collaborated closely with engineering teams during initial prototype development, translating customer operational needs into technical specifications and serving as a project manager",
      "Market Segmentation Strategy - Defined distinct product positioning for vehicle power (tactical operations) versus remote power (forward-operating bases, command outposts) applications",
      "Cross-Domain Application Design - Defined requirements for multi-domain flexibility across ground vehicles, surface craft, UUVs, and mobile support systems",
      "System Architecture Definition - Supported definition of hybrid power system architecture combining fuel cells with surge battery technology for burst power and redundancy",
    ],
    tags: ["Hard Tech", "Requirements Gathering", "Prototype Development", "B2B", "Defense Tech"],
    imageNote: "Space for engine specifications and photos",
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
                <p className="text-xl text-olive-400 mb-4">{product.tagline}</p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {product.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-olive-500 mt-2" />
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
                ) : product.name === "H2OS" ? (
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <h4 className="text-xl font-bold text-white mb-3">
                          Platform Management and Fuel Logistics
                        </h4>
                        <div className="relative w-full flex-1 flex items-center justify-center rounded-lg overflow-hidden">
                          <Image
                            src="/H2OS.png"
                            alt="H2OS Software Interface"
                            width={1200}
                            height={675}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-xl font-bold text-white mb-3">
                          Vessel Controls System Design
                        </h4>
                        <div className="relative w-full flex-1 flex items-center justify-center rounded-lg overflow-hidden">
                          <Image
                            src="/H2OS boat Ops.png"
                            alt="H2OS Boat Operations Interface"
                            width={1200}
                            height={675}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : product.name === "Z-class" ? (
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        <h4 className="text-xl font-bold text-white mb-3">
                          Z-class Engine
                        </h4>
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-dark-grey/30">
                          <Image
                            src="/Z-class boat.jpg"
                            alt="Z-class Engine"
                            width={1200}
                            height={675}
                            className="object-contain max-h-full max-w-full rounded-lg"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-xl font-bold text-white mb-3 text-center">
                          Prototype Vessel
                        </h4>
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-dark-grey/30">
                          <Image
                            src="/FCV Vanguard-defense.jpg"
                            alt="FCV Vanguard Prototype Vessel"
                            width={1200}
                            height={675}
                            className="object-contain max-h-full max-w-full rounded-lg"
                            sizes="(max-width: 768px) 100vw, 67vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : product.name === "Dental Call Insights" ? (
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-6">
                    {/* DCI Home Page */}
                    <div className="flex justify-center">
                      <div className="relative w-3/4 max-w-5xl rounded-lg overflow-hidden">
                        <Image
                          src="/DCI home page.png"
                          alt="DCI Home Page"
                          width={1200}
                          height={675}
                          className="object-contain w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Call Transcription and AI Insights */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        Call Transcription and AI Insights
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <Image
                            src="/DCI - Transcribe.png"
                            alt="DCI Call Transcription Interface"
                            width={1200}
                            height={675}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <Image
                            src="/DCI - Insights.png"
                            alt="DCI Transcription Details"
                            width={1200}
                            height={675}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Data Analytics and Dashboards */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        Data Analytics and Dashboards
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <Image
                            src="/DCI Data Insights.png"
                            alt="DCI Data Analytics Dashboard"
                            width={1200}
                            height={675}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <Image
                            src="/DCI Data Insights 2.png"
                            alt="DCI Data Insights Details"
                            width={1200}
                            height={675}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* GitHub Link */}
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-xl font-bold text-center mb-3">
                        <a
                          href="https://github.com/rickyelder07/dentalcallinsights?tab=readme-ov-file"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-olive-400 transition-colors underline decoration-white/50 hover:decoration-olive-400 decoration-2 underline-offset-4 inline-flex items-center gap-2"
                        >
                          View on GitHub
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      </h4>
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

