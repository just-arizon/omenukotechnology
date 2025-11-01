"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function HeroWord() {
  const [word, setWord] = useState<"Curiosity" | "Creativity">("Curiosity")

  useEffect(() => {
    const t = setTimeout(() => setWord("Creativity"), 5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1
                id="main-title"
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                Turning <strong className="text-secondary">Curosity</strong>{" "}
                <span>into</span> <span className="hidden lg:"><br /></span>
                <strong>creation</strong>{" "}
                <em className="italic">effortlessly</em>
              </h1>
            </motion.div> 
      
  )
}