"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // ou remplace par une concat simple

type Props = {
  children: React.ReactNode;
  className?: string;
  vertical?: boolean;
  reverse?: boolean;
  pauseOnHover?: boolean;
};

export function MarqueeTest({
  children,
  className,
  vertical = false,
  reverse = false,
  pauseOnHover = false,
}: Props) {
  // Duplique le contenu pour un défilement infini
  const items = React.Children.toArray(children);
  const content = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_var(--fade-dir),transparent,black_20%,black_80%,transparent)]",
        vertical ? "h-[1000px] w-[320px]" : "w-full",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className,
      )}
      style={
        {
          // durée par défaut 40s si non surchargée via className "[--duration:xxs]"
          "--duration": "40s",
          "--fade-dir": vertical ? "bottom" : "right",
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex gap-[30px] will-change-transform",
          vertical ? "flex-col" : "flex-row",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        // évite un flash si SSR ≠ client
        suppressHydrationWarning
      >
        {content.map((child, i) => (
          <div key={i} aria-hidden={i >= items.length}>
            {child}
          </div>
        ))}
      </div>

      {/* Styles isolés au composant, pas de purge Tailwind */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee var(--duration) linear infinite reverse;
        }
        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(${vertical ? "0, -50%" : "-50%, 0"}, 0);
          }
        }
      `}</style>
    </div>
  );
}
