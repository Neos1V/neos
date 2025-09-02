"use client";
import Image from "next/image";
import React from "react";

function Logos({ logos }: { logos: string[] }) {
  // We need to inject the keyframes animation into the document's head
  // because Tailwind CSS doesn't directly support the 'cqw' unit.
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const Marquee = ({
    direction = "reverse", // Changé de "forwards" à "reverse"
    logos,
  }: {
    direction?: string;
    logos: string[];
  }) => {
    const numItems = logos.length;
    const speed = "25s";
    const itemWidth = "120px";
    const itemGap = "120px";

    return (
      <div
        className="max-w-full overflow-hidden h-[70px]"
        style={
          {
            "--speed": speed,
            "--numItems": numItems,
            "--item-width": itemWidth,
            "--item-gap": itemGap,
            "--direction": direction,
            maskImage:
              "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
          } as React.CSSProperties
        }
      >
        <div
          className="w-max flex"
          style={
            {
              "--track-width": `calc(var(--item-width) * ${numItems})`,
              "--track-gap": `calc(var(--item-gap) * ${numItems})`,
            } as React.CSSProperties
          }
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              style={
                {
                  width: "var(--item-width)",
                  aspectRatio: "1 / 1.2",
                  marginRight: "var(--item-gap)",
                  animation: `marquee-move var(--speed) linear infinite ${direction}`,
                } as React.CSSProperties
              }
            >
              <Image src={logo} alt="Logo" width={150} height={40} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-[-15px] lg:mb-0 items-center overflow-hidden mt-[50px] lg:mt-[120px]">
      <div className="w-full max-w-6xl flex flex-col gap-y-6 mx-auto">
        <Marquee logos={logos} />
      </div>
    </div>
  );
}

export default Logos;
