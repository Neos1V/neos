"use client";
import { motion } from "motion/react";

export default function Slider() {
  return (
    <div className="w-full mb-6">
      <div className="relative w-full bg-gray-200 rounded-full h-[7px] mt-8 overflow-visible">
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: "linear-gradient(to right, #0051d2, #2978fe)" }}
          initial={{ width: "0%" }}
          whileInView={{ width: "98%" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        >
          {/* Prix au début (0€) - sans boule */}
          <motion.span
            className="absolute -bottom-6 left-0 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          >
            0€
          </motion.span>

          {/* Boule de fin (5000€) */}
          <motion.div
            className="absolute -top-[10px] right-0 w-[26px] h-[26px] rounded-full border-[3px] border-white z-10 flex items-center justify-center"
            style={{
              background: "linear-gradient(to right, #0051d2, #2978fe)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 1.8, duration: 0.3, ease: "easeOut" }}
          >
            <motion.span
              className="tooltip shadow absolute top-full mt-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 2, duration: 0.3, ease: "easeOut" }}
            >
              5000€
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
