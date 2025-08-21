"use client";

import { useMemo, useState } from "react";
import { Pricing } from "@/sanity/lib/type";
import { Check } from "lucide-react";
import { PortableText } from "next-sanity";
import Faces2 from "./Faces2";
import CtaButton from "./shared/CtaButton";

export default function Price({ data }: { data: Pricing }) {
  // Prix de base (converti en number)
  const baseNew = useMemo(
    () => Number(String(data.nouveauPrix).replace(/[^\d.]/g, "")) || 0,
    [data.nouveauPrix],
  );
  const baseOld = useMemo(
    () => Number(String(data.ancienPrix).replace(/[^\d.]/g, "")) || 0,
    [data.ancienPrix],
  );

  // Prix premium (prend ce qui est affiché dans la carte Premium)
  const premiumNew = 49; // 49€
  const premiumOld = 153; // 153€

  const [withPremium, setWithPremium] = useState(false);

  // Prix calculés (bundle si premium coché)
  const displayedNew = useMemo(
    () => baseNew + (withPremium ? premiumNew : 0),
    [baseNew, withPremium],
  );
  const displayedOld = useMemo(() => {
    // On n’affiche l’ancien prix que si on en a un
    const candidate = (baseOld || 0) + (withPremium ? premiumOld : 0);
    return candidate > 0 ? candidate : null;
  }, [baseOld, withPremium]);

  return (
    <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-20">
          <div className="bg-card relative rounded-2xl sm:rounded-3xl bg-white shadow-xl sm:shadow-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
            <div className="grid items-stretch gap-8 sm:gap-10 md:gap-12 divide-y lg:grid-cols-2 lg:divide-x lg:divide-y-0 divide-[#297BFE] p-4 sm:p-6 md:p-8 lg:p-12 pb-2">
              {/* Section gauche - Pricing */}
              <div className="pb-8 sm:pb-10 md:pb-12 text-center lg:pb-0 lg:pr-8 xl:pr-12 relative">
                {/* Tooltip places restantes */}
                <span className="tooltip text-[#FF0000] bg-white absolute left-1/2 transform -translate-x-1/2 -top-8 sm:-top-12 md:-top-16  lg:-top-[125px] text-xs sm:text-sm">
                  {data.placesLefts}
                </span>

                {/* Titre et sous-titre */}
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
                  {data.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  {data.subtitle}
                </p>

                {/* Prix */}
                <div className="inline-block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[128px] font-bold relative my-4 sm:my-6 md:my-8">
                  {/* Ancien prix (bundle si premium) */}
                  {displayedOld !== null && (
                    <div className="absolute bottom-2 lg:bottom-2 flex -left-8 sm:-left-12 md:-left-16 lg:-left-20 items-end">
                      <span className="text-xs sm:text-sm md:text-base text-[#B30000]">
                        €
                      </span>
                      <p className="text-xs sm:text-sm text-[#B30000] font-normal leading-none line-through">
                        {displayedOld}
                      </p>
                    </div>
                  )}

                  {/* Nouveau prix (bundle si premium) */}
                  <span className="text-2xl sm:text-3xl md:text-4xl">€</span>
                  {displayedNew}
                </div>

                {/* Bouton CTA */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div>
                    <CtaButton text={data.btnText} link="#" />
                  </div>
                </div>

                {/* Description */}
                <div className="[&>p]:text-black/70 mt-4 text-xs sm:text-sm w-full max-w-[300px] mx-auto px-2">
                  <PortableText value={data.description} />
                </div>
              </div>

              {/* Section droite - Features */}
              <div className="lg:block flex flex-col-reverse relative pt-8 sm:pt-10 md:pt-12 lg:pt-0 lg:pl-8 xl:pl-12">
                {/* Liste des features */}
                <ul
                  role="list"
                  className="mt-6 lg:mt-0 space-y-3 sm:space-y-4 mb-6 sm:mb-8"
                >
                  {data.arrayText.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <Check
                        className="size-3 sm:size-4 flex-shrink-0 mt-0.5"
                        color="#00BC62"
                      />
                      <span className="text-sm sm:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Carte Premium */}
                <div className="relative flex flex-col gap-3 sm:gap-4 rounded-xl bg-white shadow-lg px-3 sm:px-4 py-4 sm:py-6 border border-[#F7F8F9]">
                  {/* Tooltip Premium */}
                  <div className="tooltip shadow absolute -top-2 sm:-top-3 -right-6 sm:-right-8 md:-right-12 lg:-right-[50px] rotate-3 font-semibold text-xs bg-white px-2 py-1 rounded hidden sm:block">
                    Pour ceux qui veulent gagner vite
                  </div>

                  {/* Titre Premium + Checkbox réelle */}
                  <div className="flex justify-between items-center">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      {/* Checkbox native (accessible) + SVG custom */}
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        aria-label="Activer l’option Premium"
                        checked={withPremium}
                        onChange={(e) => setWithPremium(e.target.checked)}
                      />
                      {/* SVG stylisé selon l'état de la checkbox */}
                      <span
                        aria-hidden
                        className="grid place-items-center w-4 h-4 rounded-[4px] border border-[#0051D2] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-[#0051D2]"
                      >
                        {withPremium && (
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.51886 10.125L3.76245 7.49969L4.68104 6.625L6.51886 8.37438L10.1932 4.875L11.1125 5.75031L6.51886 10.125Z"
                              fill="#0051D2"
                            />
                            <rect
                              x="0.5"
                              y="1"
                              width="13"
                              height="13"
                              rx="1.5"
                              stroke="#0051D2"
                            />
                          </svg>
                        )}
                        {!withPremium && (
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="1"
                              width="13"
                              height="13"
                              rx="1.5"
                              stroke="#0051D2"
                            />
                          </svg>
                        )}
                      </span>

                      <p className="text-xs sm:text-sm font-semibold">
                        {data.titrePremium}
                      </p>
                    </label>

                    {/* Petits prix affichés dans la carte Premium (indicatif) */}
                    <div className="flex items-center gap-2">
                      <p className="text-black/20 text-[10px] line-through">
                        {premiumOld}€
                      </p>
                      <p className="text-[#0051D2] font-semibold text-xs">
                        {premiumNew}€
                      </p>
                    </div>
                  </div>

                  {/* Description Premium */}
                  <div className="[&>p]:text-black/70 text-xs sm:text-sm leading-relaxed">
                    <PortableText value={data.descriptionPremium} />
                  </div>

                  {/* Places Premium */}
                  <p className="text-[#0051D2] text-xs sm:text-sm font-semibold">
                    {data.placeLeftPremium}
                  </p>
                </div>
              </div>
            </div>

            {/* Composant Faces2 */}
            <div className="mt-0 lg:mt-12">
              <Faces2 logos={data.premiumArray} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
