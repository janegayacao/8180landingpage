import { motion } from "motion/react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";

export function ArrowDivider() {
  return (
    <div className="relative py-2 md:py-8 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10"></div>
      </div>
      {/* Arrow Icon */}
      <motion.div
        className="relative px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-12 h-12 rotate-90"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <LogoArrowBlue />
        </motion.div>
      </motion.div>
    </div>
  );
}
