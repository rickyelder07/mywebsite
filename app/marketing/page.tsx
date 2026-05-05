"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const videos = [
  {
    id: "iTjw9JO5w9g",
    title: "Zero Emission Industries Overview",
    type: "Brand Video",
    description:
      "An overview video highlighting the latest technology and products showcased by ZEI at their Hydrogen Day lunch event.",
    year: "2025",
    link: "https://youtu.be/iTjw9JO5w9g",
  },
  {
    id: "Ui8GS2-lBUw",
    title: "FCV Vanguard Launch Video",
    type: "Launch Video",
    description:
      "launch video for the FCV Vanguard, demonstration vessel of ZEI's Hydrogen fuel cell powertrain product.",
    year: "2025",
    link: "https://youtu.be/Ui8GS2-lBUw",
  },
  {
    id: "PRKSeFipWH0",
    title: "FTcase Product Demo",
    type: "Product Demo",
    description:
      "Early stage product demonstration of FTcase, highlighting simplified fueling for customer customers.",
    year: "2024",
    link: "https://youtu.be/PRKSeFipWH0",
  },
  {
    id: "Ge0De5SHuQM",
    title: "ZEI B-roll Montage",
    type: "Background",
    description:
      "B-roll montage of vessels, technology, and team in action — used across digital and event marketing.",
    year: "2024",
    link: "https://youtu.be/Ge0De5SHuQM",
  },
];

const collateral = [
  {
    id: 1,
    title: "ZEI Solutions Package",
    type: "Solutions Brief",
    description:
      "Comprehensive overview of ZEI's full product portfolio and go-to-market positioning, designed for enterprise and government procurement audiences.",
    file: "/ZEI Solutions Package.pdf",
    featured: true,
  },
  {
    id: 2,
    title: "MIOS Product Presentation",
    type: "Presentation",
    description:
      "Product deck for MIOS — ZEI's Marine Intelligence Operating System — covering core capabilities, use cases, and competitive differentiation.",
    file: "/MIOS Product Presentation.pdf",
    featured: true,
  },
  {
    id: 3,
    title: "H2 Defense Teaser",
    type: "Defense Brief",
    description:
      "Redacted teaser outlining ZEI's hydrogen fuel cell technology applications in defense and government maritime contexts.",
    file: "/H2 Defense Teaser - modified redacted.pdf",
    featured: false,
  },
  {
    id: 4,
    title: "FTcase Spec Sheet — Dual Use",
    type: "Spec Sheet",
    description:
      "Technical specification sheet for the FTcase platform covering both commercial and defense dual-use configurations.",
    file: "/FTcase Spec Sheet Dual Use.pdf",
    featured: false,
  },
  {
    id: 5,
    title: "FTcase Launch Spec Sheet — Commercial",
    type: "Spec Sheet",
    description:
      "Commercial launch specification sheet for the FTcase product line, developed for dealer and distributor audiences.",
    file: "/FTcase Launch Spec Sheet Commercial.pdf",
    featured: false,
  },
];

const events = [
  {
    id: 1,
    name: "American Clean Transportation Expo",
    date: "May 2024",
    location: "Long Beach, CA",
    role: "Marketing Lead",
    type: "Industry Expo",
    description:
      "Drove product material and brand messaging for the commercial transportation audience at North America's largest clean tech event. Created the opportunity to live demo FTcase alongside hydrogen truck OEMs — a first for ZEI in the commercial market.",
    highlights: [
      "Live FTcase demo with hydrogen truck OEM partners",
      "Commercial market-targeted brand messaging and collateral",
      "Engaged fleet operators, carriers, and commercial buyers",
    ],
    images: ["/Events/ACT Demo.JPG"],
    attendees: "10,000+",
  },
  {
    id: 2,
    name: "TEVCON",
    date: "2024",
    location: "San Diego, CA",
    role: "Booth Manager",
    type: "Defense Conference",
    description:
      "Built all booth materials and managed ZEI's presence at this defense industry conference, engaging defense contractors, government agencies, and procurement officers on ZEI's hydrogen technology applications.",
    highlights: [
      "End-to-end booth design and collateral creation",
      "Engaged defense contractors and government stakeholders",
      "Positioned ZEI hydrogen tech for defense use cases",
    ],
    images: ["/Events/TEVCON Banner.jpeg", "/Events/Tevcon Booth.JPG"],
    attendees: "500+",
  },
  {
    id: 3,
    name: "FCV Vanguard Launch Event",
    date: "October 8, 2024",
    location: "San Francisco, CA",
    role: "Event Lead",
    type: "Product Launch",
    description:
      "Secured a spot in a16z Tech Week's Hydrogen Day for the public unveiling of the world's first hydrogen fuel cell speed boat. Orchestrated the full event experience showcasing ZEI's suite of hydrogen technology solutions to investors, press, and industry leaders.",
    highlights: [
      "World's first hydrogen fuel cell speed boat — public debut",
      "Selected for a16z Tech Week · Hydrogen Day (10/08)",
      "Full ZEI hydrogen technology portfolio on display",
    ],
    images: [
      "/Events/FCV Vanguard Launch Event 1.jpeg",
      "/Events/FCV Vanguard Launch Event 2.jpeg",
      "/Events/FCV Vanguard Launch Event 3.jpg",
    ],
    attendees: "300+",
  },
  {
    id: 4,
    name: "Pikes Peak International Hill Climb",
    date: "June 2024",
    location: "Colorado Springs, CO",
    role: "Fueling Partner & PR",
    type: "Race Event",
    description:
      "Supported Honda Racing Corporation in their first-ever attempt at Pikes Peak with a hydrogen-powered race car. ZEI served as the sole fueling partner — leveraging the event through press placements and Fan Day activation to drive broad public engagement.",
    highlights: [
      "Sole hydrogen fueling partner for HRC's Pikes Peak debut",
      "Press placements throughout the race weekend",
      "Fan Day activation with hands-on hydrogen technology demo",
    ],
    images: ["/Events/HRC 1.jpg", "/Events/HRC 2.JPG"],
    attendees: "30,000+",
  },
];

const press = [
  {
    id: 1,
    publication: "Marine Industry Today",
    headline:
      "Zero Emission Industries Launches H2OS, a First-of-Kind Marine Fleet Intelligence Platform",
    quote:
      "ZEI's H2OS represents a paradigm shift in how maritime operators think about vessel management — combining emissions monitoring with predictive maintenance in a single, elegant interface.",
    date: "July 2024",
    link: "#",
    type: "Feature",
  },
  {
    id: 2,
    publication: "CleanTech Weekly",
    headline: "The Startups Leading Zero-Emission Shipping",
    quote:
      "Among a new class of maritime cleantech companies, Zero Emission Industries stands out for its full-stack approach — building both the physical vessels and the software layer to manage them.",
    date: "April 2024",
    link: "#",
    type: "Roundup",
  },
  {
    id: 3,
    publication: "Pacific Business Journal",
    headline: "ZEI Closes Series A, Plans Fleet Expansion Along Pacific Coast",
    quote:
      "The company's marketing approach — emphasizing total cost of ownership rather than environmental impact alone — has resonated with pragmatic fleet operators.",
    date: "January 2024",
    link: "#",
    type: "News",
  },
  {
    id: 4,
    publication: "Sustainable Shipping Magazine",
    headline: "Pacific Marine Expo: Standout Booths and Breakout Companies",
    quote:
      "ZEI's booth was arguably the most professionally executed at the show — a seamless blend of live product demonstrations and polished brand storytelling.",
    date: "December 2023",
    link: "#",
    type: "Trade Coverage",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const contentTypeBadge = (type: string) => {
  const map: Record<string, string> = {
    "Solutions Brief": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Presentation":    "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Defense Brief":   "bg-red-500/20 text-red-300 border-red-500/30",
    "Spec Sheet":      "bg-olive-500/20 text-olive-300 border-olive-500/30",
    "Case Study":      "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "White Paper":     "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Blog Post":       "bg-olive-500/20 text-olive-300 border-olive-500/30",
    "Email Campaign":  "bg-orange-500/20 text-orange-300 border-orange-500/30",
  };
  return map[type] ?? "bg-gray-500/20 text-gray-300 border-gray-500/30";
};

const videoTypeBadge = (type: string) => {
  const map: Record<string, string> = {
    "Brand Video": "bg-blue-500/20 text-blue-300",
    "Launch Video": "bg-olive-500/20 text-olive-300",
    "Product Demo": "bg-purple-500/20 text-purple-300",
    "Brand Story": "bg-orange-500/20 text-orange-300",
    "Event Recap": "bg-yellow-500/20 text-yellow-300",
  };
  return map[type] ?? "bg-gray-500/20 text-gray-300";
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M8 5v14l11-7z" />
  </svg>
);


const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-3.5 h-3.5"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const sections = [
  { id: "video", label: "Video Content" },
  { id: "written", label: "Written & Collateral" },
  { id: "events", label: "Events" },
  { id: "press", label: "Press" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MarketingPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [quickViewDoc, setQuickViewDoc] = useState<typeof collateral[0] | null>(null);
  const [activeImages, setActiveImages] = useState<Record<number, number>>({});
  const getActiveImage = (id: number) => activeImages[id] ?? 0;
  const setActiveImage = (id: number, idx: number) =>
    setActiveImages((prev) => ({ ...prev, [id]: idx }));

  const selectVideo = (i: number) => { setActiveVideo(i); setIsPlaying(false); };
  const prevVideo = () => selectVideo((activeVideo - 1 + videos.length) % videos.length);
  const nextVideo = () => selectVideo((activeVideo + 1) % videos.length);

  return (
    <div className="min-h-screen bg-[#2d2d2d]">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-olive-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-olive-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Marketing Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Content &{" "}
              <span className="text-olive-400">Creative Work</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
              A curated collection of marketing work developed while leading brand, content, and
              go-to-market strategy at Zero Emission Industries — spanning video production,
              thought leadership, event marketing, and earned media.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-6 mb-12"
            >
              {[
                { label: "Video Assets", value: `${videos.length}` },
                { label: "Collateral Pieces", value: `${collateral.length}` },
                { label: "Events Led", value: `${events.length}` },
                { label: "Press Features", value: `${press.length}+` },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-olive-400">{stat.value}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Section jump links */}
            <div className="flex flex-wrap gap-3">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="px-5 py-2.5 rounded-full border border-white/20 text-gray-300 hover:border-olive-400 hover:text-olive-400 transition-all duration-200 text-sm font-medium"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 01 Video Content ─────────────────────────────────────────────── */}
      <section id="video" className="py-20 border-t border-white/10">
        <div className="section-container">

          {/* Header row: title + counter + arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-olive-400" />
                <span className="text-olive-400 text-sm font-semibold uppercase tracking-widest">01</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Video Content</h2>
            </div>
            <div className="flex items-center gap-4 pb-1">
              <span className="text-gray-500 text-sm font-mono tabular-nums hidden sm:block">
                {String(activeVideo + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prevVideo}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-olive-400 hover:text-olive-400 transition-all duration-200"
                  aria-label="Previous video"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={nextVideo}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-olive-400 hover:text-olive-400 transition-all duration-200"
                  aria-label="Next video"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Large active video */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-5 max-w-3xl bg-black">
              <div className="relative aspect-video">
                {isPlaying ? (
                  <iframe
                    key={`iframe-${activeVideo}`}
                    src={`https://www.youtube.com/embed/${videos[activeVideo].id}?autoplay=1&rel=0`}
                    title={videos[activeVideo].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 w-full h-full group"
                    aria-label={`Play ${videos[activeVideo].title}`}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeVideo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={`https://img.youtube.com/vi/${videos[activeVideo].id}/maxresdefault.jpg`}
                          alt={videos[activeVideo].title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="768px"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-black/50 border-2 border-white/60 flex items-center justify-center group-hover:bg-olive-500/80 group-hover:border-olive-400 group-hover:scale-110 transition-all duration-300">
                        <div className="ml-1 text-white">
                          <PlayIcon />
                        </div>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Active video info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`badge-${activeVideo}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${videoTypeBadge(videos[activeVideo].type)}`}
                    >
                      {videos[activeVideo].type}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-gray-500 text-sm">{videos[activeVideo].year}</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`info-${activeVideo}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {videos[activeVideo].title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-2xl">
                      {videos[activeVideo].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <a
                href={videos[activeVideo].link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border border-olive-500/60 text-olive-400 hover:bg-olive-500 hover:text-white hover:border-olive-500 transition-all duration-200 flex-shrink-0 self-start"
              >
                Watch on YouTube <ExternalLinkIcon />
              </a>
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {videos.map((video, i) => (
                <button
                  key={video.id}
                  onClick={() => selectVideo(i)}
                  className={`text-left rounded-xl overflow-hidden transition-all duration-200 group/thumb ${
                    i === activeVideo
                      ? "ring-2 ring-olive-400 ring-offset-2 ring-offset-[#2d2d2d]"
                      : "opacity-50 hover:opacity-90"
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div
                      className={`absolute inset-0 transition-colors duration-200 ${
                        i === activeVideo
                          ? "bg-black/15"
                          : "bg-black/55 group-hover/thumb:bg-black/35"
                      }`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          i === activeVideo
                            ? "bg-olive-500 border-olive-400"
                            : "bg-black/50 border-white/40 group-hover/thumb:bg-olive-500/60 group-hover/thumb:border-olive-400"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5 text-white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-2.5 py-2 transition-colors duration-200 ${
                      i === activeVideo ? "bg-olive-500/10" : "bg-black/30"
                    }`}
                  >
                    <p
                      className={`text-xs font-medium line-clamp-1 transition-colors duration-200 ${
                        i === activeVideo ? "text-olive-400" : "text-gray-500 group-hover/thumb:text-gray-300"
                      }`}
                    >
                      {video.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => selectVideo(i)}
                  aria-label={`Go to video ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeVideo
                      ? "bg-olive-400 w-6 h-2"
                      : "bg-white/20 hover:bg-white/40 w-2 h-2"
                  }`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 02 Written Content ───────────────────────────────────────────── */}
      <section id="written" className="py-20 border-t border-white/10">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-olive-400" />
              <span className="text-olive-400 text-sm font-semibold uppercase tracking-widest">02</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Written & Collateral</h2>
          </motion.div>

          {/* Featured row — 2 large cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          >
            {collateral.filter((c) => c.featured).map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="glass-card p-8 flex flex-col group hover:bg-black/40 transition-all duration-300"
              >
                {/* Doc icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${contentTypeBadge(item.type)}`}>
                    {item.type}
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-gray-600 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug flex-1">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <button
                    onClick={() => setQuickViewDoc(item)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-olive-500/20 text-olive-400 border border-olive-500/30 hover:bg-olive-500 hover:text-white transition-all duration-200 text-sm font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Quick View
                  </button>
                  <a
                    href={item.file}
                    download
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:border-white/30 hover:text-white transition-all duration-200 text-sm font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Secondary row — 3 smaller cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {collateral.filter((c) => !c.featured).map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="glass-card p-6 flex flex-col group hover:bg-black/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${contentTypeBadge(item.type)}`}>
                    {item.type}
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-gray-600 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{item.description}</p>
                <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                  <button
                    onClick={() => setQuickViewDoc(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-olive-500/20 text-olive-400 border border-olive-500/30 hover:bg-olive-500 hover:text-white transition-all duration-200 text-xs font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Quick View
                  </button>
                  <a
                    href={item.file}
                    download
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300 transition-all duration-200 text-xs font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 03 Events ────────────────────────────────────────────────────── */}
      <section id="events" className="py-20 border-t border-white/10">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-olive-400" />
              <span className="text-olive-400 text-sm font-semibold uppercase tracking-widest">03</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Events</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {events.map((event) => {
              const activeIdx = getActiveImage(event.id);
              const hasMultiple = event.images.length > 1;
              return (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className="glass-card overflow-hidden flex flex-col"
                >
                  {/* Hero image */}
                  <div className="relative aspect-video overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${event.id}-${activeIdx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={event.images[activeIdx]}
                          alt={`${event.name} photo ${activeIdx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    {/* Badges on image */}
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white border border-white/20">
                        {event.type}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-olive-500/80 backdrop-blur-sm text-white font-medium">
                        {event.role}
                      </span>
                    </div>
                    {/* Photo counter */}
                    {hasMultiple && (
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                        {activeIdx + 1} / {event.images.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail strip for multi-image events */}
                  {hasMultiple && (
                    <div className="flex gap-1.5 p-2 bg-black/30">
                      {event.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(event.id, i)}
                          className={`relative flex-1 overflow-hidden rounded transition-all duration-200 ${
                            i === activeIdx
                              ? "ring-2 ring-olive-400 ring-offset-1 ring-offset-black/30"
                              : "opacity-40 hover:opacity-75"
                          }`}
                          style={{ aspectRatio: "16/9" }}
                          aria-label={`View photo ${i + 1}`}
                        >
                          <Image
                            src={img}
                            alt={`${event.name} photo ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Card content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 leading-tight">{event.name}</h3>
                    <p className="text-olive-400 text-sm font-medium mb-3">
                      {event.date} · {event.location}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {event.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {event.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-olive-400 flex-shrink-0 mt-1.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-white/10">
                      <span className="text-gray-500 text-xs">{event.attendees} attendees</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 04 Press ─────────────────────────────────────────────────────── */}
      <section id="press" className="py-20 border-t border-white/10">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-olive-400" />
              <span className="text-olive-400 text-sm font-semibold uppercase tracking-widest">04</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Press</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {press.map((item) => (
              <motion.a
                key={item.id}
                href={item.link}
                variants={itemVariants}
                className="glass-card p-8 block group hover:bg-black/40 transition-all duration-300 flex flex-col"
              >
                {/* Publication + type */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-olive-400 font-bold text-sm uppercase tracking-widest">
                      {item.publication}
                    </p>
                    <p className="text-gray-600 text-xs mt-1">{item.date}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 flex-shrink-0 ml-4">
                    {item.type}
                  </span>
                </div>

                {/* Pull quote */}
                <blockquote className="border-l-2 border-olive-400 pl-5 mb-5 flex-1">
                  <p className="text-gray-200 text-base leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Headline */}
                <p className="text-gray-500 text-sm leading-snug mb-5">{item.headline}</p>

                {/* Link */}
                <p className="text-olive-400 text-sm font-medium group-hover:text-olive-300 transition-colors flex items-center gap-1.5">
                  Read Article <ExternalLinkIcon />
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/10">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to see more?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Explore the full product strategy and career experience behind this work, or reach out
              directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/experience"
                className="px-8 py-3 rounded-lg bg-olive-500 text-white font-semibold hover:bg-olive-600 transition-colors shadow-lg"
              >
                View Experience
              </Link>
              <Link
                href="/product"
                className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-olive-400 hover:text-olive-400 transition-all"
              >
                Product Strategy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ── PDF Quick View Modal ─────────────────────────────────────────── */}
      <AnimatePresence>
        {quickViewDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setQuickViewDoc(null); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2 }}
              className="bg-[#1e1e1e] border border-white/10 rounded-2xl overflow-hidden w-full max-w-5xl flex flex-col shadow-2xl"
              style={{ height: "88vh" }}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
                <div>
                  <p className={`text-xs font-semibold mb-1 px-2.5 py-0.5 rounded-full border inline-block ${contentTypeBadge(quickViewDoc.type)}`}>
                    {quickViewDoc.type}
                  </p>
                  <h3 className="text-white font-semibold text-lg leading-tight">{quickViewDoc.title}</h3>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 ml-6">
                  <a
                    href={quickViewDoc.file}
                    download
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-gray-300 hover:border-olive-400 hover:text-olive-400 transition-all duration-200 text-sm font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                  </a>
                  <button
                    onClick={() => setQuickViewDoc(null)}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-white/40 hover:text-white transition-all duration-200"
                    aria-label="Close"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF iframe */}
              <iframe
                src={`${quickViewDoc.file}#toolbar=0&navpanes=0`}
                title={quickViewDoc.title}
                className="flex-1 w-full bg-gray-100"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
