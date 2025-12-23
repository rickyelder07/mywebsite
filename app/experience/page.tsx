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

const featuredProjects = [
  {
    title: "MV Sea Change",
    subtitle: "World's First Hydrogen-Powered Commercial Ferry",
    description: "Played a key role in project managing the final months of build and launch for the MV Sea Change, coordinating with multiple subcontractors and stakeholders to deliver the world's first hydrogen-powered commercial ferry. The vessel now operates in San Francisco Bay, providing zero-emission passenger transportation and demonstrating the viability of hydrogen fuel cell technology in maritime applications.",
    images: [], // Placeholder for images
    links: [],
  },
  {
    title: "FTcase Product Launch",
    subtitle: "Pioneering Portable Hydrogen Fueling Solution",
    description: "Led the comprehensive product launch of FTcase, ZEI's revolutionary portable hydrogen fueling system. Participated in product roadmapping and engineering support while owning the marketing and communications strategy. Drove press release coordination for this historic launch, facilitating media engagements and leadership interviews. Developed critical product collateral including spec sheets and sales presentations that translated complex hydrogen thermodynamics and safety regulations into clear value propositions for target markets. The narrative development process focused on distilling technical complexity into compelling customer benefits, directly supporting equipment sales and market adoption.",
    images: [], // Placeholder for images
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
    images: [], // Placeholder for images
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
    images: [], // Placeholder for images
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

                {/* Junior Manager, Special Projects */}
                <div className="relative pl-8 border-l-2 border-olive-400/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-olive-400" />
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-white">Junior Manager, Special Projects</h4>
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
              <h3 className="text-3xl font-bold text-white mb-8">
                Featured Projects & Initiatives
              </h3>
              
              <div className="space-y-10">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-lg border border-white/10 p-8 md:p-10 hover:bg-white/8 transition-all"
                  >
                    {/* Project Header */}
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-lg text-olive-400 font-semibold mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Image Placeholder Section */}
                    {project.images.length > 0 && (
                      <div className="my-8 bg-white/5 rounded-lg border border-white/10 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.images.map((img, imgIndex) => (
                            <div key={imgIndex} className="relative w-full h-64 rounded-lg overflow-hidden">
                              <Image
                                src={img}
                                alt={`${project.title} image ${imgIndex + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links Section */}
                    {project.links.length > 0 && (
                      <div className="flex flex-wrap gap-4 mt-6">
                        {project.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-olive-500/20 hover:bg-olive-500/30 border border-olive-500/30 rounded-lg text-olive-400 hover:text-olive-300 transition-all text-sm font-medium"
                          >
                            {link.text}
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
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
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Technical Proficiency
          </h2>

          {/* Software/Data */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-olive-400 mb-6">
              Software & Data
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
              {[
                { name: "Python", logo: "/logos/python.svg" },
                { name: "SQL", logo: "/logos/sql.svg" },
                { name: "R Studio", logo: "/logos/rstudio.svg" },
                { name: "JavaScript", logo: "/logos/javascript.svg" },
                { name: "TypeScript", logo: "/logos/typescript.svg" },
                { name: "HTML", logo: "/logos/html.svg" },
                { name: "CSS", logo: "/logos/css.svg" },
                { name: "Cursor", logo: "/logos/cursor.svg" },
                { name: "Claude", logo: "/logos/claude.svg" },
                { name: "Vercel", logo: "/logos/vercel.svg" },
                { name: "Supabase", logo: "/logos/supabase.svg" },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center group">
                  <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all p-2">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design/Marketing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-olive-400 mb-6">
              Design & Marketing
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
              {[
                { name: "Photoshop", logo: "/logos/photoshop.svg" },
                { name: "Illustrator", logo: "/logos/illustrator.svg" },
                { name: "Premiere Pro", logo: "/logos/premiere.svg" },
                { name: "After Effects", logo: "/logos/aftereffects.svg" },
                { name: "Canva", logo: "/logos/canva.svg" },
                { name: "Figma", logo: "/logos/figma.svg" },
                { name: "Excel", logo: "/logos/excel.svg" },
                { name: "PowerPoint", logo: "/logos/powerpoint.svg" },
                { name: "Sheets", logo: "/logos/sheets.svg" },
                { name: "Slides", logo: "/logos/slides.svg" },
                { name: "Salesforce", logo: "/logos/salesforce.svg" },
                { name: "Webflow", logo: "/logos/webflow.svg" },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center group">
                  <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all p-2">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operations/Project Management */}
          <div>
            <h3 className="text-2xl font-bold text-olive-400 mb-6">
              Operations & Project Management
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
              {[
                { name: "Asana", logo: "/logos/asana.svg" },
                { name: "Monday.com", logo: "/logos/monday.svg" },
                { name: "Smartsheet", logo: "/logos/smartsheet.svg" },
                { name: "QuickBooks", logo: "/logos/quickbooks.svg" },
                { name: "Rippling", logo: "/logos/rippling.svg" },
                { name: "Gusto", logo: "/logos/gusto.svg" },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center group">
                  <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all p-2">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center">{tool.name}</span>
                </div>
              ))}
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

