"use client";

import { useState } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Pourquoi } from "@/sanity/lib/type";

export default function ImageSection({ pourquoi }: { pourquoi: Pourquoi }) {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-12">
			<p className="mb-4 h2 text-center">{pourquoi.titre}</p>
      {/* Image 1 */}
      <div className="px-3 lg:px-0 relative group cursor-pointer overflow-hidden rounded-2xl">
        <Image
          src={pourquoi.image1}
          alt="Image 1"
          className="object-cover rounded-2xl transition-all duration-300 group-hover:brightness-75"
          width={625}
          height={575}
        />

        {/* Overlay sombre au hover - masqué sur mobile */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-2xl hidden lg:block"></div>

        {/* Texte avec animation - masqué sur mobile */}
        <div className="absolute bottom-10 left-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out [&>p]:text-white hidden lg:block">
          <PortableText value={pourquoi.descImage1} />
        </div>

        {/* Accordéon mobile uniquement */}
        <div className="lg:hidden">
          <button
            onClick={() => toggleAccordion(1)}
            className="flex items-center justify-between w-full mt-3"
          >
            <span className="font-medium">{pourquoi.name1}</span>
            <span className="text-[#0653D4] text-2xl font-bold">
              {openAccordion === 1 ? "−" : "+"}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openAccordion === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 bg-gray-50 rounded-lg mt-2">
              <PortableText value={pourquoi.descImage1} />
            </div>
          </div>
        </div>
      </div>

      {/* Image 2 */}
      <div className="px-3 lg:px-0 relative group cursor-pointer overflow-hidden rounded-2xl">
        <Image
          src={pourquoi.image2}
          alt="Image 2"
          className="h-full rounded-2xl transition-all duration-300 group-hover:brightness-75"
          width={625}
          height={575}
        />

        {/* Overlay sombre au hover - masqué sur mobile */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-2xl hidden lg:block"></div>

        {/* Texte avec animation - masqué sur mobile */}
        <div className="absolute bottom-10 left-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out [&>p]:text-white hidden lg:block">
          <PortableText value={pourquoi.descImage2} />
        </div>

        {/* Accordéon mobile uniquement */}
        <div className="lg:hidden">
          <button
            onClick={() => toggleAccordion(2)}
            className="flex items-center justify-between w-full p- mt-3"
          >
            <span className="font-medium">{pourquoi.name2}</span>
						<span className="text-[#0653D4] text-2xl font-bold">
              {openAccordion === 2 ? "−" : "+"}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openAccordion === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 bg-gray-50 rounded-lg mt-2">
              <PortableText value={pourquoi.descImage2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
