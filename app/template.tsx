"use client";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

// Fade only: each page's own content already rises in, so moving here too would double up.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
