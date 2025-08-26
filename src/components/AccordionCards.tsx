"use client";
import React, { useState, useEffect, ReactNode } from "react";

// Types
interface AccordionProps {
  type?: string;
  collapsible?: boolean;
  children: ReactNode;
}

interface AccordionItemProps {
  value?: string;
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

interface AccordionTriggerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

interface AccordionContentProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
}

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

interface ItemData {
  url?: string | null;
  title: string;
  desc?: string | null;
}

// Composants Accordion simplifiés avec optimisations
const Accordion: React.FC<AccordionProps> = ({
  type = "single",
  collapsible = true,
  children,
}) => {
  return <div>{children}</div>;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  value = "",
  className = "",
  children,
  isOpen = false,
  onToggle = () => {},
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          if (index === 0)
            return React.cloneElement(child as React.ReactElement<any>, {
              isOpen,
              onToggle,
            });
          if (index === 1)
            return React.cloneElement(child as React.ReactElement<any>, {
              isOpen,
            });
        }
        return child;
      })}
    </div>
  );
};

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  className = "",
  children,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div
      className={`${className} cursor-pointer flex items-center justify-between`}
      onClick={onToggle}
    >
      {children}
    </div>
  );
};

const AccordionContent: React.FC<AccordionContentProps> = ({
  className = "",
  children,
  isOpen = false,
}) => {
  return (
    <div
      className={`${className} overflow-hidden transition-all duration-500 ease-in-out`}
      style={{
        maxHeight: isOpen ? "1000px" : "0px",
        opacity: isOpen ? 1 : 0,
        paddingBottom: isOpen ? "1rem" : "0rem",
      }}
    >
      <div style={{ paddingTop: isOpen ? "0" : "0" }}>{children}</div>
    </div>
  );
};

const Image: React.FC<ImageProps> = ({
  src,
  width = 840,
  height = 980,
  alt = "",
  className = "",
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (src) {
      const img = document.createElement("img");
      img.onload = () => setLoaded(true);
      img.src = src;
    }
  }, [src]);

  return (
    <div className="relative bg-gray-100 rounded-xl overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        loading="eager"
        decoding="async"
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
    </div>
  );
};

interface AccordionCardsProps {
  items: ItemData[];
}

const AccordionCards: React.FC<AccordionCardsProps> = ({ items }) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  // Préchargement de toutes les images au montage
  useEffect(() => {
    items.forEach((item: ItemData) => {
      if (item.url) {
        const img = document.createElement("img");
        img.src = item.url;
      }
    });
  }, [items]);

  const handleToggle = (idx: number): void => {
    setOpenItem(openItem === idx ? null : idx);
  };

  return (
    <div className="md:hidden w-full px-3">
      <Accordion type="single" collapsible>
        {items.map(({ url, title, desc }, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="w-full rounded-2xl bg-white shadow mb-3 border-none"
            isOpen={openItem === idx}
            onToggle={() => handleToggle(idx)}
          >
            <AccordionTrigger className="px-6 py-7 text-left [&>svg]:hidden hover:bg-gray-50 transition-colors duration-200">
              <div className="flex flex-col items-start gap-1">
                <p className="text-lg font-bold leading-tight">{title}</p>
                {desc ? (
                  <p className="mt-2.5 text-sm opacity-80 leading-snug">
                    {desc}
                  </p>
                ) : null}
              </div>
              {/* Icône custom avec animation */}
              <span
                className={`ml-auto transition-all duration-300 border border-[#F7F8F9] rounded-xl bg-white p-2 ${
                  openItem === idx ? "rotate-45 scale-105" : ""
                }`}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.381 8.31311V3.64496L10.6763 3.61914M8.3239 15.381H3.61914V10.6601"
                    stroke="url(#paint0_linear_288_541)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_288_541"
                      x1="3.61914"
                      y1="9.50009"
                      x2="15.381"
                      y2="9.50009"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0051D2" />
                      <stop offset="1" stopColor="#297BFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4" isOpen={openItem === idx}>
              {url ? (
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={url}
                    width={840}
                    height={980}
                    alt={`${title} ${desc ?? ""}`.trim()}
                    className="w-full h-auto"
                  />
                </div>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionCards;
