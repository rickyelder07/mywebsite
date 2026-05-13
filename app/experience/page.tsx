"use client";

import { useState } from "react";
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

const featuredProjects = [
  {
    title: "MV Sea Change",
    subtitle: "World's First Hydrogen-Powered Commercial Ferry",
    description: "Played a key role in project managing the final months of build and launch for the MV Sea Change, coordinating with multiple subcontractors and stakeholders to deliver the world's first hydrogen-powered commercial ferry. The vessel now operates in San Francisco Bay, providing zero-emission passenger transportation and demonstrating the viability of hydrogen fuel cell technology in maritime applications.",
    images: ["/Sea Change.jpg"],
    links: [],
  },
  {
    title: "FTcase Product Launch",
    subtitle: "Pioneering Portable Hydrogen Fueling Solution",
    description: "Led the comprehensive product launch of FTcase, ZEI's revolutionary portable hydrogen fueling system. Participated in product roadmapping and engineering support while owning the marketing and communications strategy. Drove press release coordination for this historic launch, facilitating media engagements and leadership interviews. Developed critical product collateral including spec sheets and sales presentations that translated complex hydrogen thermodynamics and safety regulations into clear value propositions for target markets. The narrative development process focused on distilling technical complexity into compelling customer benefits, directly supporting equipment sales and market adoption.",
    images: ["/FTcase.jpg"],
    links: [
      {
        text: "FTcase Spec Sheet",
        url: "https://cdn.prod.website-files.com/66ebc0f724eaabe44e4c285a/68487a940e96fb3cc5264551_FTcase%20Spec%20Sheet%206-3-25.pdf"
      },
      {
        text: "Autoline Network Interview",
        url: "https://www.youtube.com/watch?v=Kmka7Q_U5mQ"
      }
    ],
  },
  {
    title: "Grant Program Management",
    subtitle: "Overseeing $10.5M in California Energy Commission Funding",
    description: "Managed the relationship and deliverables for $10.5M in California Energy Commission grant-funded projects. Ran critical project review meetings, communicated project milestones, and coordinated internal resource planning including equipment, headcount, and timelines. These efforts culminated in the successful launch of the FCV Vanguard (originally the Small Fast Harbor Craft Project), a hydrogen prototype vessel featuring novel hydrogen storage and mobile fuel transfer technology. The project included a 6-month demonstration period and a high-profile public launch event as part of a16z Tech Week, showcasing the future of zero-emission maritime technology.",
    images: ["/FCV Vanguard.jpg"],
    links: [
      {
        text: "Forbes: Hydrogen Power for Boats",
        url: "https://www.forbes.com/sites/billkoenig/2024/10/03/company-announces-an-attempt-to-bring-hydrogen-power-to-boats/"
      },
      {
        text: "CEC Final Report",
        url: "https://www.energy.ca.gov/sites/default/files/2025-06/CEC-500-2025-034.pdf"
      }
    ],
  },
  {
    title: "Honda Racing Corporation Partnership",
    subtitle: "World-First Hydrogen Fuel Cell Vehicle at Pikes Peak",
    description: "Led the entire cross-functional effort for ZEI's partnership with Honda Racing Corporation for a historic world-first attempt at the Pikes Peak International Hill Climb with a hydrogen fuel cell vehicle. Managed the complete project lifecycle from initial product sale and delivery through race execution and media coverage. Coordinated complex logistics including fuel enablement with FTcase and mobile hydrogen supply, facilitated fueling support during race trials and race day, and managed PR relationships for multiple press releases. The partnership garnered international media coverage and demonstrated hydrogen technology's viability in high-performance motorsports applications.",
    images: ["/HRC Team.jpg"],
    links: [
      {
        text: "Pikes Peak Recap Video",
        url: "https://www.youtube.com/watch?v=Bxvdn-wEgrw"
      },
      {
        text: "Autoweek Coverage",
        url: "https://www.autoweek.com/news/a65047245/honda-fuel-cell-cr-v-at-pikes-peak/"
      }
    ],
  },
  {
    title: "Brand Evolution & Strategy",
    subtitle: "Building ZEI's Identity from Golden Gate Zero Emission Marine to Defense-Focused Leader",
    description: "Spearheaded ZEI's complete brand evolution across multiple iterations, from the original Golden Gate Zero Emission Marine identity to Zero Emission Industries, and ultimately to a defense-focused brand strategy. Developed comprehensive brand strategy, led website redesigns, built social media presence, created logo systems, and produced all sales collateral and marketing materials. The brand transformations successfully repositioned the company for different market opportunities while maintaining cohesive visual identity and messaging that resonated with evolving target audiences.",
    images: [], // Placeholder for images
    links: [],
  },
  {
    title: "Executive Leadership",
    subtitle: "Driving Strategic Decisions Across the Organization",
    description: "Served in key leadership functions driving critical decisions across finance, operations, engineering, and product verticals. Actively contributed to board meetings and executive leadership discussions, providing strategic insights and organizational alignment. Played an integral role in fundraising efforts and investor relations, including contributing to the successful close of an $8.75M Series A round with Chevron New Energies, Trafigura, and Crowley. Led the creation of investor materials and helped articulate the company's value proposition and growth trajectory to secure funding. Participated in crafting the narrative and product vision for future company objectives, translating technical capabilities into market opportunities. This cross-functional leadership role required bridging gaps between technical teams and business strategy, ensuring that operational execution aligned with long-term strategic goals while maintaining organizational agility in a rapidly evolving market.",
    images: [], // Placeholder for images
    links: [],
  },
];

const paceBeatImages = [
  "/Pace Beat/IMG_1.jpg",
  "/Pace Beat/IMG_2.jpg",
  "/Pace Beat/IMG_3.jpg",
  "/Pace Beat/IMG_4.jpg",
  "/Pace Beat/IMG_5.PNG",
];

const netFuelImages = [
  "/Net Fuel/NetFuel 1.png",
  "/Net Fuel/Netfuel 2.png",
  "/Net Fuel/Netfuel 3.png",
  "/Net Fuel/Netfuel 4.png",
];

export default function ExperiencePage() {
  const [isFeaturedProjectsOpen, setIsFeaturedProjectsOpen] = useState(false);
  const [paceBeatIndex, setPaceBeatIndex] = useState(0);
  const [netFuelIndex, setNetFuelIndex] = useState(0);

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
            <div id="cross-functional-leadership" className="mb-12 scroll-mt-24">
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

            {/* Roles at ZEI */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Roles & Timeline
              </h3>

              <div className="space-y-8">
                {/* Director of Marketing */}
                <div className="relative pl-8 border-l-2 border-olive-400/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-olive-400" />
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-white">Director of Marketing</h4>
                    <p className="text-olive-400 font-semibold">Sep 2024 - Nov 2025 · 1 yr 3 mos</p>
                    <p className="text-sm text-gray-400">South San Francisco, CA · On-site</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Built and scaled the company&apos;s marketing function from the ground up, establishing core processes across content development, website design, public relations, product marketing, and social media. Achieved an 81% increase in web traffic, 246% rise in LinkedIn impressions, and 103% boost in webform submissions. Led a company-wide rebrand to support a strategic pivot from renewable energy to defense. Contributed to customer personas, product requirements, and go-to-market strategies for hydrogen technology products. Oversaw the landmark sale to Honda Racing Corporation for the world&apos;s first hydrogen-powered Pikes Peak International Hill Climb and led communications for a world-first hydrogen vessel demonstration.
                  </p>
                </div>

                {/* Chief of Staff */}
                <div className="relative pl-8 border-l-2 border-olive-400/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-olive-400" />
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-white">Chief of Staff</h4>
                    <p className="text-olive-400 font-semibold">Sep 2022 - Sep 2024 · 2 yrs 1 mo</p>
                    <p className="text-sm text-gray-400">San Francisco, CA</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    As one of the earliest hires, helped scale the organization from its foundational stage, driving strategic initiatives across finance, business development, legal, HR, IT, PR, and marketing. Program managed over $10.5M in grant-funded projects and served as primary point of contact for funding agencies. Co-authored and won a $5.25M grant for a novel mobile liquid hydrogen bunkering system. Led materials creation and relationship-building that contributed to the successful close of an $8.75M Series A round with Chevron New Energies, Trafigura, and Crowley. Coordinated cross-functional leaders, prepared executive-level materials for bi-monthly board meetings, and facilitated company-wide alignment.
                  </p>
                </div>

                {/* Program Manager */}
                <div className="relative pl-8 border-l-2 border-olive-400/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-olive-400" />
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-white">Program Manager</h4>
                    <p className="text-olive-400 font-semibold">Aug 2020 - Sep 2022 · 2 yrs 2 mos</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Led high-impact, cross-functional initiatives that advanced both internal foundation and external presence. Managed a full-scale company rebrand, overseeing visual identity, messaging, website rebuilds, backend systems, and operational improvements. Coordinated key stakeholders during the critical final months of the Sea Change vessel construction. Co-authored and secured a $2M grant to support the development of a world&apos;s first hydrogen fuel cell harbor craft demonstration and supporting mobile fueling infrastructure, then helped project manage its execution.
                  </p>
                </div>

                {/* Marketing Intern */}
                <div className="relative pl-8 border-l-2 border-olive-400/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-olive-400" />
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-white">Marketing & Business Development Intern</h4>
                    <p className="text-olive-400 font-semibold">Jun 2019 - Aug 2019 · 3 mos</p>
                    <p className="text-sm text-gray-400">Golden Gate Zero Emission Marine · Alameda, CA</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Quickly promoted to managing external creative resources for VP of Marketing. Supported marketing campaigns to promote brand image and public perception of hydrogen. Managed office relocation through budgeting of over $160,000 and ensured facilities met business and legal requirements. Worked with CEO to improve business operations systems and assisted VP of Business Development in partner meetings and materials creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="mt-16">
              <button
                onClick={() => setIsFeaturedProjectsOpen(!isFeaturedProjectsOpen)}
                className="w-full flex items-center justify-between text-left mb-8 group"
              >
                <h3 className="text-3xl font-bold text-white group-hover:text-olive-400 transition-colors">
                  Featured Projects & Initiatives
                </h3>
                <svg
                  className={`w-8 h-8 text-white group-hover:text-olive-400 transition-all ${
                    isFeaturedProjectsOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isFeaturedProjectsOpen && (
                <div className="space-y-4">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/8 transition-all"
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-bold text-white mb-1">
                          {project.title}
                        </h4>
                        <p className="text-sm text-olive-400 font-semibold mb-3">
                          {project.subtitle}
                        </p>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {project.description}
                        </p>
                        {project.links.length > 0 && (
                          <div className="flex flex-wrap gap-3 mt-4">
                            {project.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-olive-500/20 hover:bg-olive-500/30 border border-olive-500/30 rounded-lg text-olive-400 hover:text-olive-300 transition-all text-xs font-medium"
                              >
                                {link.text}
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Image */}
                      {project.images.length > 0 && (
                        <div className="w-full md:w-56 flex-shrink-0">
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                            <Image
                              src={project.images[0]}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 224px"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Professional Development Section */}
      <div id="professional-development" className="section-container py-12 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-9/10 mx-auto"
        >
          <div className="glass-card p-8 md:p-12">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Professional Development & Applied Engineering Projects
              </h2>
              <p className="text-xl text-olive-400">
                Aug 2025 - Present
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              Pursuing hands-on product development and engineering projects to deepen technical skills
              while applying product management principles. Building full-stack applications from concept
              to deployment, gaining proficiency in AI/ML integration, mobile development, and cloud infrastructure.
            </p>

            {/* Projects */}
            <div className="space-y-10">
              {/* NetFuel */}
              <div className="bg-white/5 rounded-lg border border-white/10 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  NetFuel
                </h3>
                <p className="text-lg text-olive-400 font-semibold mb-4">
                  iOS Calorie Tracking App with Strava Integration
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Developed a comprehensive iOS health tracking application that integrates with Strava API to
                  automatically sync workouts and calculate net calorie balance. Built using SwiftUI and Supabase,
                  the app combines USDA nutrition data with real-time activity tracking to provide users with
                  personalized daily calorie requirements (BMR/TDEE) and comprehensive health analytics.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">iOS Development:</strong> Built native iOS app using SwiftUI,
                      implementing MVVM architecture with Combine framework for reactive state management
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">API Integration:</strong> Integrated Strava OAuth 2.0 for activity
                      synchronization and USDA FoodData Central API for comprehensive nutritional database access with
                      70,000+ food items
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Health Analytics:</strong> Implemented BMR/TDEE calculations using
                      Mifflin-St Jeor equation, daily calorie tracking with macro breakdowns (protein, carbs, fats), and
                      progress visualization with photos and weight measurements
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Backend Infrastructure:</strong> Leveraged Supabase for PostgreSQL
                      database, authentication, and cloud storage with Row Level Security policies ensuring data privacy
                    </p>
                  </div>
                </div>

                {/* Phone Spread */}
                <div className="mb-6 py-6">
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    {netFuelImages.map((src, i) => {
                      const distance = Math.abs(i - netFuelIndex);
                      const isActive = i === netFuelIndex;
                      const clampWidths = [
                        "clamp(110px, 14vw, 200px)",
                        "clamp(76px,  10vw, 138px)",
                        "clamp(56px,   7vw, 100px)",
                      ];
                      const clampWidth = clampWidths[Math.min(distance, 2)];
                      const sizesHints = [
                        "(max-width: 640px) 220px, (max-width: 1024px) 300px, 400px",
                        "(max-width: 640px) 152px, (max-width: 1024px) 210px, 276px",
                        "(max-width: 640px) 112px, (max-width: 1024px) 154px, 200px",
                      ];
                      const sizesHint = sizesHints[Math.min(distance, 2)];
                      return (
                        <button
                          key={i}
                          onClick={() => setNetFuelIndex(i)}
                          aria-label={`View screenshot ${i + 1}`}
                          className="relative flex-shrink-0 transition-all duration-300 ease-out"
                          style={{ width: clampWidth }}
                        >
                          <div
                            className={`relative w-full rounded-[1.6rem] overflow-hidden border-2 transition-all duration-300 ${
                              isActive
                                ? "border-olive-400 shadow-[0_0_32px_rgba(107,114,54,0.45)]"
                                : "border-white/10 opacity-40 hover:opacity-65"
                            }`}
                            style={{ aspectRatio: "9 / 19" }}
                          >
                            <Image
                              src={src}
                              alt={`NetFuel screenshot ${i + 1}`}
                              fill
                              className="object-cover"
                              sizes={sizesHint}
                            />
                          </div>
                          {isActive && (
                            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-olive-400/70 font-medium whitespace-nowrap tracking-widest">
                              {i + 1} / {netFuelImages.length}
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-md text-purple-300 text-sm">
                    Swift
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-md text-purple-300 text-sm">
                    SwiftUI
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-md text-purple-300 text-sm">
                    Strava API
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-md text-purple-300 text-sm">
                    USDA API
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-md text-purple-300 text-sm">
                    Supabase
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-md text-purple-300 text-sm">
                    PostgreSQL
                  </span>
                </div>

                <div className="mt-6">
                  <a
                    href="https://github.com/rickyelder07/NetFuel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-olive-500/20 hover:bg-olive-500/30 border border-olive-500/30 rounded-lg text-olive-400 hover:text-olive-300 transition-all text-sm font-medium"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Haydn */}
              <div className="bg-white/5 rounded-lg border border-white/10 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Haydn
                </h3>
                <p className="text-lg text-olive-400 font-semibold mb-4">
                  AI-Powered Browser-Based MIDI Editor
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Built a browser-based MIDI editor that integrates GPT-4o to translate natural language
                  instructions into musical edits and full multi-track compositions. Features a canvas-based
                  piano roll, real-time synthesis via Tone.js, and support for standard MIDI and MusicXML
                  import/export — all built with Next.js 15, React 19, and TypeScript.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">AI Composition:</strong> Integrated GPT-4o to generate full
                      multi-track arrangements from text prompts across genre templates (lofi, jazz, classical, trap,
                      and more) with persistent conversational context
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Piano Roll Editor:</strong> Canvas-based editor with zoom,
                      undo/redo, drag-and-drop note editing, and a floating resizable AI panel for in-context
                      track modifications
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Real-Time Audio:</strong> Tone.js-powered synthesis with
                      transport controls, tempo adjustment, up to 32 tracks, and MIDI controller/keyboard
                      support for step recording
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Music Theory Validation:</strong> Scale and chord verification
                      with visual feedback, plus token transparency showing GPT-4o usage and estimated costs
                    </p>
                  </div>
                </div>

                <div className="relative w-full rounded-xl overflow-hidden border border-white/10 mb-6" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                    src="/Haydn/Haydn.jpg"
                    alt="Haydn MIDI editor interface"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 900px"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Next.js 15", "React 19", "TypeScript", "GPT-4o", "Tone.js", "Tailwind CSS", "Zustand"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-md text-purple-300 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="https://github.com/rickyelder07/Haydn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-olive-500/20 hover:bg-olive-500/30 border border-olive-500/30 rounded-lg text-olive-400 hover:text-olive-300 transition-all text-sm font-medium"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Pacebeat */}
              <div className="bg-white/5 rounded-lg border border-white/10 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Pacebeat
                </h3>
                <p className="text-lg text-olive-400 font-semibold mb-4">
                  Spotify Playlist Generator Synced to Your Running Pace
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Built a full-stack web app that generates Spotify playlists where every track&apos;s BPM
                  matches the user&apos;s target running cadence. Users input biometrics and a race goal
                  (5K through marathon), select a music source from their Spotify library, and Pacebeat
                  filters and assembles a perfectly paced playlist — saved directly to their Spotify account.
                  Supports multi-segment workouts with warm-up and cooldown sequences.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Pace-to-BPM Engine:</strong> Converts target pace and user
                      fitness profile into BPM ranges, then filters tracks from Liked Songs, existing playlists,
                      or favorite artists with adjustable tolerance for variety vs. precision
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Tiered BPM Detection:</strong> Prioritizes Deezer API lookups
                      via ISRC matching (server-side proxied through Cloudflare Workers), with a Web Audio API
                      beat-detection fallback on 30-second previews — necessary after Spotify deprecated its audio
                      features API in 2024
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Race Mode & Multi-Segment Workouts:</strong> Supports 5K, 10K,
                      half, and full marathon pacing goals with configurable warm-up and cooldown segments, each with
                      independent BPM targets
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Spotify Integration:</strong> Full PKCE Authorization Code flow
                      for secure authentication, real-time BPM display per track, and track-level controls including
                      reshuffle, individual song replacement, and manual reordering before saving to Spotify
                    </p>
                  </div>
                </div>

                {/* Phone Spread */}
                <div className="mb-6 py-6">
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    {paceBeatImages.map((src, i) => {
                      const distance = Math.abs(i - paceBeatIndex);
                      const isActive = i === paceBeatIndex;
                      // clamp(min, preferred-vw, max) — scales fluidly with viewport
                      const clampWidths = [
                        "clamp(110px, 14vw, 200px)",
                        "clamp(76px,  10vw, 138px)",
                        "clamp(56px,   7vw, 100px)",
                      ];
                      const clampWidth = clampWidths[Math.min(distance, 2)];
                      // sizes hint: generous so Next.js serves full-res for retina screens
                      const sizesHints = [
                        "(max-width: 640px) 220px, (max-width: 1024px) 300px, 400px",
                        "(max-width: 640px) 152px, (max-width: 1024px) 210px, 276px",
                        "(max-width: 640px) 112px, (max-width: 1024px) 154px, 200px",
                      ];
                      const sizesHint = sizesHints[Math.min(distance, 2)];
                      return (
                        <button
                          key={i}
                          onClick={() => setPaceBeatIndex(i)}
                          aria-label={`View screenshot ${i + 1}`}
                          className="relative flex-shrink-0 transition-all duration-300 ease-out"
                          style={{ width: clampWidth }}
                        >
                          {/* Phone shell */}
                          <div
                            className={`relative w-full rounded-[1.6rem] overflow-hidden border-2 transition-all duration-300 ${
                              isActive
                                ? "border-olive-400 shadow-[0_0_32px_rgba(107,114,54,0.45)]"
                                : "border-white/10 opacity-40 hover:opacity-65"
                            }`}
                            style={{ aspectRatio: "9 / 19" }}
                          >
                            {/* Notch */}
                            <Image
                              src={src}
                              alt={`Pacebeat screenshot ${i + 1}`}
                              fill
                              className="object-cover"
                              sizes={sizesHint}
                            />
                          </div>
                          {/* Active indicator */}
                          {isActive && (
                            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-olive-400/70 font-medium whitespace-nowrap tracking-widest">
                              {i + 1} / {paceBeatImages.length}
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Spotify API", "Deezer API", "Cloudflare Workers", "Vite"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-md text-green-300 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="https://github.com/rickyelder07/Pacebeat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-olive-500/20 hover:bg-olive-500/30 border border-olive-500/30 rounded-lg text-olive-400 hover:text-olive-300 transition-all text-sm font-medium"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Dental Call Insights */}
              <div className="bg-white/5 rounded-lg border border-white/10 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Dental Call Insights
                </h3>
                <p className="text-lg text-olive-400 font-semibold mb-4">
                  AI-Powered Call Analytics Platform for Healthcare
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Designed, built, and launched an affordable Generative AI web application for dental and
                  healthcare offices to gain call center performance and customer insights. Leveraged Next.js,
                  Supabase, and OpenAI&apos;s GPT-4 to create an end-to-end analytics platform featuring automated
                  transcription, sentiment analysis, quality scoring, and semantic search capabilities.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Product Strategy & Market Research:</strong> Conducted customer interviews
                      and market research to define product requirements, translating healthcare business needs into technical
                      product specifications
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Full-Stack Development:</strong> Built complete web application using
                      Next.js 14, TypeScript, Supabase (PostgreSQL with pgvector), and integrated multiple OpenAI models
                      (GPT-4, Whisper, text-embedding-ada-002) for AI-driven insights
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Customer Success:</strong> Successfully onboarded and provided at-cost
                      services to a small, low-income dental practice in Southern California, demonstrating product-market fit
                      and social impact
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-olive-400 mt-1">•</span>
                    <p className="text-gray-300">
                      <strong className="text-white">Technical Innovation:</strong> Implemented semantic search using vector
                      embeddings, automated QA scoring with 15+ evaluation criteria, and multi-language transcription support
                      for English and Spanish
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-md text-blue-300 text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-md text-blue-300 text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-md text-blue-300 text-sm">
                    OpenAI GPT-4
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-md text-blue-300 text-sm">
                    Supabase
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-md text-blue-300 text-sm">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-md text-blue-300 text-sm">
                    Vercel
                  </span>
                </div>

                <div className="mt-6">
                  <a
                    href="https://github.com/rickyelder07/dentalcallinsights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-olive-500/20 hover:bg-olive-500/30 border border-olive-500/30 rounded-lg text-olive-400 hover:text-olive-300 transition-all text-sm font-medium"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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

      {/* Tool Proficiency Section */}
      <div className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Technical Proficiency
            </h2>

          {/* Software/Data */}
          <div className="mb-6 p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <h3 className="text-lg font-bold text-blue-400 mb-4">
              Software & Data
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Python", url: "https://www.python.org/" },
                { name: "SQL", url: "https://www.mysql.com/" },
                { name: "R Studio", url: "https://posit.co/products/open-source/rstudio/" },
                { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
                { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { name: "Swift", url: "https://www.swift.org/" },
                { name: "Xcode", url: "https://developer.apple.com/xcode/" },
                { name: "Apple Dev", url: "https://developer.apple.com/" },
                { name: "Cursor", url: "https://www.cursor.com/" },
                { name: "Claude", url: "https://www.anthropic.com/claude" },
                { name: "Vercel", url: "https://vercel.com/" },
                { name: "Supabase", url: "https://supabase.com/" },
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/50 rounded-lg transition-all text-sm text-blue-100 hover:text-white font-medium"
                >
                  {!['JavaScript', 'HTML', 'CSS'].includes(tool.name) && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${tool.url}&sz=32`}
                      alt={`${tool.name} icon`}
                      className="w-4 h-4"
                    />
                  )}
                  {tool.name}
                </a>
              ))}
            </div>
          </div>

          {/* Design/Marketing */}
          <div className="mb-6 p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <h3 className="text-lg font-bold text-purple-400 mb-4">
              Design & Marketing
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Photoshop", url: "https://www.adobe.com/products/photoshop.html" },
                { name: "Illustrator", url: "https://www.adobe.com/products/illustrator.html" },
                { name: "Premiere Pro", url: "https://www.adobe.com/products/premiere.html" },
                { name: "After Effects", url: "https://www.adobe.com/products/aftereffects.html" },
                { name: "Canva", url: "https://www.canva.com/" },
                { name: "Figma", url: "https://www.figma.com/" },
                { name: "Excel", url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
                { name: "PowerPoint", url: "https://www.microsoft.com/en-us/microsoft-365/powerpoint" },
                { name: "Sheets", url: "https://www.google.com/sheets/about/" },
                { name: "Slides", url: "https://www.google.com/slides/about/" },
                { name: "Webflow", url: "https://webflow.com/" },
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 hover:border-purple-400/50 rounded-lg transition-all text-sm text-purple-100 hover:text-white font-medium"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${tool.url}&sz=32`}
                    alt={`${tool.name} icon`}
                    className="w-4 h-4"
                  />
                  {tool.name}
                </a>
              ))}
            </div>
          </div>

          {/* Operations/Project Management */}
          <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
            <h3 className="text-lg font-bold text-green-400 mb-4">
              Operations & Project Management
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Salesforce", url: "https://www.salesforce.com/" },
                { name: "Asana", url: "https://asana.com/" },
                { name: "Monday.com", url: "https://monday.com/" },
                { name: "Smartsheet", url: "https://www.smartsheet.com/" },
                { name: "QuickBooks", url: "https://quickbooks.intuit.com/" },
                { name: "Rippling", url: "https://www.rippling.com/" },
                { name: "Gusto", url: "https://gusto.com/" },
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 hover:border-green-400/50 rounded-lg transition-all text-sm text-green-100 hover:text-white font-medium"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${tool.url}&sz=32`}
                    alt={`${tool.name} icon`}
                    className="w-4 h-4"
                  />
                  {tool.name}
                </a>
              ))}
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
            className="inline-block px-8 py-3 bg-gradient-to-r from-olive-600 to-olive-500 hover:from-olive-700 hover:to-olive-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Product Strategy
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

