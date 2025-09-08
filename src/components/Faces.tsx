"use client";
import Image from "next/image";
import React from "react";

function Faces({ logos }: { logos: string[] }) {
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
      .face-shadow {
        box-shadow: 
          0 8px 16px rgba(0, 0, 0, 0.12),
          0 4px 8px rgba(0, 0, 0, 0.08),
          0 2px 4px rgba(0, 0, 0, 0.06);
        transition: box-shadow 0.3s ease;
      }
      .face-shadow:hover {
        box-shadow: 
          0 16px 32px rgba(0, 0, 0, 0.15),
          0 8px 16px rgba(0, 0, 0, 0.12),
          0 4px 8px rgba(0, 0, 0, 0.08);
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const Marquee = ({
    direction = "forwards",
    logos,
  }: {
    direction?: string;
    logos: string[];
  }) => {
    const numItems = logos.length;
    const speed = "25s";
    const itemWidth = "53px";
    const itemGap = "16px";

    return (
      <div
        className="max-w-full overflow-hidden"
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
          className="w-max flex pb-2"
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
              <Image
                src={logo}
                alt="Logo"
                width={53}
                height={53}
                className="rounded-full face-shadow max-h-[53px] max-w-[53px] h-[53px] w-[53px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="items-center overflow-hidden mt-10">
      <div className="w-full flex flex-col gap-y-6 mx-auto">
        <Marquee logos={logos} />
      </div>
    </div>
  );
}

export default Faces;
