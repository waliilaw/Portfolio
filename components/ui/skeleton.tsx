'use client'

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "motion/react"

export function Skeleton({
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ 
        opacity: [0.5, 0.8, 0.5],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className={cn(
        "rounded-xl bg-zinc-100 dark:bg-zinc-800",
        className
      )}
      {...props}
    />
  )
} 