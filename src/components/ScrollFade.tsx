"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function ScrollFade({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollFadeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 32 : 0,
    x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay }}
    >
      {children}
    </motion.div>
  );
}
