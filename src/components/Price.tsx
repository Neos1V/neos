import { Pricing } from "@/sanity/lib/type";
import { Check } from "lucide-react";
import { PortableText } from "next-sanity";
import Faces2 from "./Faces2";
import CtaButton from "./shared/CtaButton";

export default function Price({ data }: { data: Pricing }) {
  return (
    <div className="relative py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-8 md:mt-20">
          <div className="bg-card relative rounded-3xl bg-white shadow-2xl">
            <span className="tooltip text-[#FF0000] bg-white -top-[15px] absolute left-[150px]">
              {data.placesLefts}
            </span>
            <div className="grid items-center gap-12 divide-y p-12 pb-2 md:grid-cols-2 md:divide-x md:divide-y-0 divide-[#297BFE]">
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <h3 className="h2">{data.title}</h3>
                <p className="mt-1">{data.subtitle}</p>
                <div className="inline-block text-[128px] font-bold relative">
                  <div className="absolute bottom-10 flex -left-20 items-end">
                    <span className="text-base text-[#B30000]">€</span>
                    <p className="text-sm text-[#B30000] h2 !font-normal leading-none line-through">
                      {data.ancienPrix}
                    </p>
                  </div>
                  <span className="text-4xl">€</span>
                  {data.nouveauPrix}
                </div>

                <div className="flex justify-center">
                  <div>
                    <CtaButton text={data.btnText} link="#" />
                  </div>
                </div>
                <div className="[&>p]:text-black/70 mt-4 text-sm">
                  <PortableText value={data.description} />
                </div>
              </div>
              <div className="relative pl-12 ">
                <ul role="list" className="space-y-4">
                  {data.arrayText.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" color="#00BC62" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative flex flex-col gap-4 rounded-xl bg-white shadow px-4 py-6 border border-[#F7F8F9] mt-5">
                  <div className="tooltip shadow absolute -top-3 -right-[50px] rotate-3 font-semibold text-xs bg-wh">
                    Pour ceux qui veulent gagner vite
                  </div>
                  <div className="flex items-center gap-[5px]">
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
                    <p className="text-xs font-semibold">{data.titrePremium}</p>
                  </div>
                  <div className="[&>p]:text-black/70  text-xs">
                    <PortableText value={data.descriptionPremium} />
                  </div>
                  <p className="text-[#0051D2] text-xs font-semibold">
                    {data.placeLeftPremium}
                  </p>
                </div>
              </div>
            </div>
            <Faces2 logos={data.premiumArray} />
          </div>
        </div>
      </div>
    </div>
  );
}
