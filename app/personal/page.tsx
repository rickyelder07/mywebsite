"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MusicIcon, HeartIcon, BaseballIcon, TargetIcon, SproutIcon, HandshakeIcon, LightningIcon } from "@/components/icons";

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

export default function PersonalPage() {
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
            Beyond Product
          </h1>
          <p className="text-2xl text-gray-300 mb-0 leading-relaxed">
            The experiences, passions, and relationships that shape who I am
          </p>
        </motion.div>
      </div>

      {/* Featured Sections */}
      <div className="section-container py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 max-w-5xl mx-auto"
        >
          {/* Music and Arts */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-start space-x-4 mb-6">
              <div>
                  <MusicIcon className="w-12 h-12" />
              </div>
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Music and Arts
                  </h2>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                In my free time I love to find ways to express myself creatively. For many years now, 
                I have performed sax in a band with my old roommate{" "}
                <a
                  href="https://open.spotify.com/artist/4ZAwnJGuqLChoBQZe8MUe1?si=p8YlzKofRI-W1kVir9jj6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive-400 hover:text-olive-300 underline transition-colors font-semibold"
                >
                  Jolene Lozano
                </a>{" "}
                in venues across SF. Late last year 
                I co-developed a contemporary dance show with my partner who choreographed 13 pieces I 
                made the music for, titled <span className="text-olive-400 font-semibold">&quot;By Heart&quot;</span>.
              </p>

              <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 -gap-4 md:-gap-8">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden z-10 mt-[14%]">
                    <Image
                      src="/by heart.png"
                      alt="By Heart performance"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative w-full aspect-[4/4] rounded-lg overflow-hidden md:-ml-8 z-0">
                    <Image
                      src="/saxophone.png"
                      alt="Saxophone performance"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Family and Connection */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-start space-x-4 mb-6">
                <div>
                  <HeartIcon className="w-12 h-12" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Family and Connection
            </h2>
              </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Family has always been the foundation of my character. I attribute my care and compassion 
                toward others to the thoughtful and giving environment I was raised in. The values instilled 
                in me by my family continue to guide how I approach relationships, both personal and professional.
                </p>

              <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/family.png"
                    alt="Family photo"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Sports and Data */}
          <motion.section variants={fadeInUp}>
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-start space-x-4 mb-6">
                <div>
                  <BaseballIcon className="w-12 h-12" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Sports and Data
            </h2>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Baseball has always been my favorite to watch and play. With a data-rich backend and a 
                constantly evolving analytical approach to the game, I love to keep an eye on statistical 
                trends with high performing players and how they relate to overall team success. I participate 
                in a competitive fast-pitch baseball league in the Bay Area (NABA).
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                In addition to baseball, I spend my time playing sports in VOLO leagues in SF as well as 
                playing in and watching disc golf tournaments (another surprisingly data-rich sport).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-olive-500/10 rounded-lg border border-olive-500/30">
                  <h4 className="text-xl font-bold text-olive-400 mb-2">NABA</h4>
                  <p className="text-gray-300 text-sm">
                    Competitive fast-pitch baseball league in the Bay Area
                  </p>
                </div>
                <div className="p-4 bg-olive-400/10 rounded-lg border border-olive-400/30">
                  <h4 className="text-xl font-bold text-olive-300 mb-2">VOLO Leagues</h4>
                  <p className="text-gray-300 text-sm">
                    Various recreational sports leagues across San Francisco
                  </p>
                </div>
              </div>

              <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/baseball.png"
                    alt="Baseball action shot"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>

      {/* Core Values 
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Drives Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The values that guide my approach to work and life
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-3">
              <TargetIcon className="w-8 h-8" />
              <h3 className="text-xl font-bold text-white">
                Impact Over Activity
              </h3>
            </div>
            <p className="text-gray-300">
              Focus on outcomes that matter. It&apos;s not about being busy — it&apos;s about 
              creating meaningful change and delivering value.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-3">
              <SproutIcon className="w-8 h-8" />
              <h3 className="text-xl font-bold text-white">
                Continuous Growth
              </h3>
            </div>
            <p className="text-gray-300">
              Stay curious and embrace learning through discomfort. Every challenge is an 
              opportunity to expand my capabilities.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-3">
              <HandshakeIcon className="w-8 h-8" />
              <h3 className="text-xl font-bold text-white">
                Authentic Connection
              </h3>
            </div>
            <p className="text-gray-300">
              Build genuine relationships through transparent curiosity and egoless collaboration. 
              Great outcomes require trust and mutual respect.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-3">
              <LightningIcon className="w-8 h-8" />
              <h3 className="text-xl font-bold text-white">
                Relentless Commitment
              </h3>
            </div>
            <p className="text-gray-300">
              Follow through on promises to my team and myself. Selfless leadership means 
              delivering on commitments consistently.
            </p>
          </motion.div>
        </motion.div>
      </div> */}

          {/* Get In Touch */}
      <div className="section-container py-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
                Let&apos;s Connect
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Always open to interesting conversations about product, technology, sports, music, or life in general
              </p>
          <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:ricky.elder07@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-olive-600 to-olive-500 hover:from-olive-700 hover:to-olive-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            <a
              href="https://www.linkedin.com/in/richard-z-elder/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass-card hover:bg-black/40 text-white font-medium rounded-lg transition-all"
            >
              Connect on LinkedIn
            </a>
            </div>
        </motion.div>
      </div>
    </div>
  );
}

