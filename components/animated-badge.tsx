"use client"
import { cn } from "@/lib/utils"

export default function AnimatedBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium text-foreground",
        className
      )}
    >
      {/* moving gradient border */}
      <span
        className="absolute -inset-px rounded-full bg-[conic-gradient(from_0deg,#e78a53_0%,#f7b27d_50%,#e78a53_100%)] animate-spin"
        style={{ animationDuration: "3s" }}
      />
      {/* inner background (covers centre, leaves 1 px border) */}
      <span className="relative rounded-full bg-background px-3 py-1">
        Health Technology
      </span>
    </div>
  )
}