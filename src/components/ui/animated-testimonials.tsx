"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  image: string;
  prix: string;
  nom: string;
  titre: string;
  description: string;
  photoProfil: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto px-4 py-20 font-sans antialiased md:px-8 lg:px-12 ">
      <div className="relative flex gap-[60px] items-end justify-between max-w-[1200px] mx-auto">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative w-[370px] h-[463px] border-4 border-white rounded-2xl overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.nom}
                      width={370}
                      height={463}
                      draggable={false}
                      className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm"></div>

                    <div className="absolute bg-white top-6 left-6 flex items-center gap-1 p-2 rounded-full border border-[#EFEFEF]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7.75"
                          fill="#F26940"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M10.5803 7.63533C10.4754 7.49856 10.3478 7.38004 10.2293 7.26151C9.92381 6.98798 9.57734 6.79195 9.28557 6.50474C8.60631 5.83915 8.45587 4.74048 8.88896 3.89709C8.45587 4.00195 8.07749 4.23901 7.75381 4.49886C6.57307 5.44709 6.10807 7.12018 6.66425 8.55621C6.68249 8.6018 6.70072 8.64739 6.70072 8.70665C6.70072 8.80695 6.63234 8.89812 6.54116 8.93459C6.43631 8.98018 6.3269 8.95283 6.24028 8.87989C6.21441 8.85821 6.19277 8.83194 6.17646 8.80239C5.66131 8.15048 5.57925 7.21592 5.92572 6.46827C5.1644 7.08827 4.74955 8.1368 4.80881 9.12606C4.83616 9.35401 4.86352 9.58195 4.94102 9.80989C5.00484 10.0834 5.12793 10.3569 5.26469 10.5986C5.75705 11.3872 6.60955 11.9525 7.52587 12.0665C8.50146 12.1896 9.54543 12.0118 10.2931 11.3371C11.1273 10.5803 11.4191 9.36768 10.9906 8.32827L10.9313 8.20974C10.8356 8.00004 10.5803 7.63533 10.5803 7.63533ZM9.13969 10.5074C9.01204 10.6168 8.80234 10.7353 8.63822 10.7809C8.12763 10.9633 7.61705 10.708 7.31616 10.4071C7.85866 10.2794 8.18234 9.87827 8.27807 9.47254C8.35557 9.10783 8.20969 8.80695 8.15043 8.45592C8.09572 8.11857 8.10484 7.83136 8.22793 7.5168C8.31455 7.69004 8.40572 7.86327 8.51513 8.00004C8.86616 8.45592 9.41778 8.65651 9.53631 9.27651C9.55454 9.34033 9.56366 9.40415 9.56366 9.47254C9.57734 9.84636 9.41322 10.2567 9.13969 10.5074Z"
                          fill="#F26940"
                        />
                      </svg>
                      <p className="text-xs ">{testimonial.prix}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-[50px] pl-8 pb-8 rounded-2xl w-[750px] bg-white shadow-xl relative">
          <img src="star1.png" alt="star" className="absolute top-0 right-0" />
          <p className="rounded-full bg-white border border-[#F7F8F9] py-1 px-2 shadow font-bold text-sm w-fit absolute -top-4 -left-8 -rotate-[30deg]">
            Avis client
          </p>
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].titre}
            </h3>

            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].description
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0 justify-between items-center pr-8 mt-7">
            <div className="flex gap-2 ">
              <Image
                src={testimonials[active].photoProfil}
                alt="profil"
                width={38}
                height={38}
                className="rounded-full border border-[#2375F8]"
              />
              <div>
                <p className="text-[18px]">{testimonials[active].nom}</p>
                <img src="stars.svg" alt="stars" />
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#F7F8F9]"
              >
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.7158 1.18203C6.62284 1.0883 6.51223 1.01391 6.39038 0.963138C6.26852 0.912369 6.13781 0.88623 6.0058 0.88623C5.87379 0.88623 5.74308 0.912369 5.62122 0.963138C5.49936 1.01391 5.38876 1.0883 5.2958 1.18203L0.295798 6.18203C0.20207 6.27499 0.127676 6.38559 0.0769069 6.50745C0.0261382 6.62931 0 6.76002 0 6.89203C0 7.02404 0.0261382 7.15475 0.0769069 7.27661C0.127676 7.39846 0.20207 7.50907 0.295798 7.60203L5.2958 12.602C5.38876 12.6958 5.49936 12.7702 5.62122 12.8209C5.74308 12.8717 5.87379 12.8978 6.0058 12.8978C6.13781 12.8978 6.26852 12.8717 6.39038 12.8209C6.51223 12.7702 6.62284 12.6958 6.7158 12.602C6.80953 12.5091 6.88392 12.3985 6.93469 12.2766C6.98546 12.1547 7.0116 12.024 7.0116 11.892C7.0116 11.76 6.98546 11.6293 6.93469 11.5075C6.88392 11.3856 6.80953 11.275 6.7158 11.182L2.4158 6.89203L6.7158 2.60203C6.80953 2.50907 6.88392 2.39846 6.93469 2.27661C6.98546 2.15475 7.0116 2.02404 7.0116 1.89203C7.0116 1.76002 6.98546 1.62931 6.93469 1.50745C6.88392 1.38559 6.80953 1.27499 6.7158 1.18203Z"
                    fill="url(#paint0_linear_98_704)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_98_704"
                      x1="0"
                      y1="6.89203"
                      x2="7.0116"
                      y2="6.89203"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0051D2" />
                      <stop offset="1" stop-color="#297BFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#F7F8F9]"
              >
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.2842 12.6022C1.37716 12.6959 1.48777 12.7703 1.60962 12.821C1.73148 12.8718 1.86219 12.8979 1.9942 12.8979C2.12621 12.8979 2.25692 12.8718 2.37878 12.821C2.50064 12.7703 2.61124 12.6959 2.7042 12.6022L7.7042 7.60215C7.79793 7.50919 7.87232 7.39859 7.92309 7.27673C7.97386 7.15487 8 7.02416 8 6.89215C8 6.76014 7.97386 6.62943 7.92309 6.50757C7.87232 6.38571 7.79793 6.27511 7.7042 6.18215L2.7042 1.18215C2.61124 1.08842 2.50064 1.01403 2.37878 0.963258C2.25692 0.912489 2.12621 0.886352 1.9942 0.886352C1.86219 0.886352 1.73148 0.912489 1.60963 0.963258C1.48777 1.01403 1.37717 1.08842 1.2842 1.18215C1.19047 1.27511 1.11608 1.38571 1.06531 1.50757C1.01454 1.62943 0.988404 1.76014 0.988404 1.89215C0.988404 2.02416 1.01454 2.15487 1.06531 2.27673C1.11608 2.39859 1.19047 2.50919 1.2842 2.60215L5.5842 6.89215L1.2842 11.1822C1.19047 11.2751 1.11608 11.3857 1.06531 11.5076C1.01454 11.6294 0.988403 11.7601 0.988403 11.8922C0.988403 12.0242 1.01454 12.1549 1.06531 12.2767C1.11608 12.3986 1.19047 12.5092 1.2842 12.6022Z"
                    fill="url(#paint0_linear_98_707)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_98_707"
                      x1="8"
                      y1="6.89215"
                      x2="0.988404"
                      y2="6.89215"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0051D2" />
                      <stop offset="1" stop-color="#297BFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
