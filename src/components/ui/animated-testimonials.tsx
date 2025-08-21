"use client";

import { AnimatePresence, motion } from "framer-motion"; // ← switch
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  // rotations stables par item
  const rotations = useMemo(
    () => testimonials.map(() => Math.floor(Math.random() * 21) - 10),
    [testimonials],
  );

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [autoplay, testimonials.length]);

  return (
    <div className="mx-auto px-4 py-20 font-sans antialiased md:px-8 lg:px-12 ">
      <div className="relative flex gap-[60px] items-end justify-between max-w-[1200px] mx-auto">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence initial={false} mode="popLayout">
              {testimonials.map((t, index) => {
                const isCurrent = index === active;
                return (
                  <motion.div
                    key={t.image}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: rotations[index],
                      // ❌ z retiré
                    }}
                    animate={{
                      opacity: isCurrent ? 1 : 0.7,
                      scale: isCurrent ? 1 : 0.95,
                      rotate: isCurrent ? 0 : rotations[index],
                      zIndex: isCurrent ? 40 : testimonials.length + 2 - index,
                      y: isCurrent ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: rotations[index],
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom will-change-transform"
                  >
                    {/* … ton contenu inchangé … */}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* … le bloc de droite … */}

        {/* Progress bar : whileInView peut ne pas trigger en prod si déjà visible.
            Option 1 : remplace par animate + useEffect.
            Option 2 (rapide) : garde whileInView mais ajoute initial={false} sur AnimatePresence (fait ci-dessus). */}
        <div className="absolute -bottom-12 left-0 w-full bg-gray-200 rounded-full h-[7px] mt-8">
          <motion.div
            className="h-full rounded-full relative"
            style={{
              background: "linear-gradient(to right, #0051d2, #2978fe)",
            }}
            initial={{ width: "0%" }}
            whileInView={{ width: "98%" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          >
            {/* … */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
