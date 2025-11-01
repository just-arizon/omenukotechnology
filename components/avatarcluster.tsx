"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AVATAR_COUNT = 6
const NAMES = ["Ayo", "Bola", "Chiamaka", "Daren", "Efua", "Faraji"]

const avatars = Array.from({ length: AVATAR_COUNT }, (_, i) => {
  const name = NAMES[i % NAMES.length]
  const hue = (i * 137.5) % 360 // golden-angle → distinct colours
  return {
    id: i,
    src: `https://i.pravatar.cc/80?u=${name}${i}`, // pravatar cache-bust
    fallback: name.slice(0, 2).toUpperCase(),
    hue,
  }
})

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export default function AvatarCluster() {
  return (
    <div className="pointer-events-none absolute top-0 h-full w-full flex justify-between lg:pt-14 pt-20">
      {/* left column */}
      <div className="flex flex-col flex-1">
        {avatars.slice(0, 3).map((a, i) => (
          <div
            key={a.id}
            className={`flex flex-1 ${i === 1 ? "justify-start lg:pl-12" : "justify-center"}`}
          >
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <Avatar
                className="h-10 w-10 rounded-full border-2"
                style={{ borderColor: `hsl(${a.hue} 80% 80%)` }}
              >
                <AvatarImage src={a.src} alt={a.fallback} />
                <AvatarFallback
                  className="text-xs font-semibold"
                  style={{ backgroundColor: `hsl(${a.hue} 90% 95%)`, color: `hsl(${a.hue} 40% 30%)` }}
                >
                  {a.fallback}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
        ))}
      </div>

      {/* right column */}
      <div className="flex flex-col flex-1">
        {avatars.slice(3, 6).map((a, i) => (
          <div
            key={a.id}
            className={`flex flex-1 ${i === 1 ? "justify-end lg:pr-14" : "justify-center"}`}
          >
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <Avatar
                className="h-10 w-10 rounded-full border-2"
                style={{ borderColor: `hsl(${a.hue} 80% 80%)` }}
              >
                <AvatarImage src={a.src} alt={a.fallback} />
                <AvatarFallback
                  className="text-xs font-semibold"
                  style={{ backgroundColor: `hsl(${a.hue} 90% 95%)`, color: `hsl(${a.hue} 40% 30%)` }}
                >
                  {a.fallback}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}