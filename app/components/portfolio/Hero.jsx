"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.10,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full bg-black overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Background grid effect (optional) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left side */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 border border-gray-700 rounded-full px-4 py-1.5 text-sm text-gray-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-lime-400" />
            Available for new projects
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Hi, I'm Arman Arfat
          </motion.h1>
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-lime-400 leading-tight mb-6"
          >
            Frontend Developer
          </motion.h2>

          <motion.p variants={item} className="text-gray-400 text-lg max-w-md mb-8">
            I build modern, responsive and high-performance websites and web
            applications.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-gray-500">
            <span className="text-lime-400">$</span> currently booking freelance
            projects for this quarter
          </motion.p>
        </motion.div>

        {/* Right side - Image frame */}
        <div className="relative flex items-center justify-center">
          {/* Glow behind frame */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-lime-400/20 rounded-full blur-3xl" />

          {/* Gradient border wrapper */}
          <div className="relative p-[3px] rounded-3xl bg-gradient-to-br from-lime-400 via-lime-400/40 to-transparent">
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-[#0d0d0d]">
              <Image
                src="/asset/image/my-image.png"
                alt="Arman Arfat"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 bg-[#0d0d0d] border border-gray-800 rounded-xl px-5 py-3 flex items-center gap-2 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-sm text-gray-300 font-mono whitespace-nowrap">
              Open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}