"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";
import HeroWord from "./hero-word";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarCluster from "../avatarcluster";
import Homemarque from "./home-marque";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        <AvatarCluster />
        <div className="container mx-auto px-4  sm:py-14 mt-10 py-12  z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
            {/* Badge */}
            <div className="flex justify-center lg:mb-8 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="animate-rotate-border bg-conic/[from_var(--border-angle)] from-bg-background/100 via-[#ec9537] to-bg-background/100 p-[3px] w-fit rounded-full"
              >
                <Badge className="relative inline-flex items-center gap-2 px-4 py-2 text-xs bg-primary ">
                  <Flame color="#fff" className="h-4 w-4" />
                  Health Technology
                </Badge>
              </motion.div>
            </div>

            {/* Main Heading */}
            <HeroWord />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
            >
              Building Africa’s next wave of smart innovations — from IoT health
              devices to intelligent farms and connected communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Get started button */}
              <div className="flex items-center justify-center">
                <a href="/docs/components/theme-toggle-animations">
                  <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                    <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                      <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg "
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe animate-spin"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Explore Solutions
                      </p>
                    </div>
                    <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg "
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Marquee */}
            <Homemarque />
          </div>
        </div>
      </section>
    </>
  );
}
