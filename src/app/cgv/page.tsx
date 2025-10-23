import Nav from "@/components/Nav";
import { sanityFetch } from "@/sanity/lib/fetch";
import { cgvQuery, footerQuery, navQuery } from "@/sanity/lib/query";
import type { CgvDoc, Footer, NavType } from "@/sanity/lib/type";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const navData: NavType = await sanityFetch({
    query: navQuery,
    tags: ["nav"],
  });
  const data = await sanityFetch<CgvDoc>({
    query: cgvQuery,
    tags: ["cgv"],
  });
  const footer: Footer = await sanityFetch({
    query: footerQuery,
    tags: ["footer"],
  });
	

  return (
    <div>
      <Nav data={navData} />
      <div className="max-w-3xl mx-auto px-4 py-12 mt-[80px] lg:mt-[180px]">
        <h1 className="text-2xl font-bold mb-6">{data?.title}</h1>
        {data?.content && (
          <div className="prose prose-invert max-w-none">
            <PortableText value={data.content} />
          </div>
        )}
      </div>
      <div className="fixed w-full bottom-0 bg-gradient-to-r from-[#0051D2] to-[#2978FE] py-[32px] lg:py-[70px] px-[28px] lg:px-[100px] ">
        <div className="flex flex-col lg:flex-row justify-between border-b border-[#FFFFFF]/20 pb-11">
          <div className="flex flex-col w-2/5">
            <Image src={footer.logoNeos} width={158} height={70} alt="joinus" />
            <div className="flex gap-4 mt-8">
              {footer.socials.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={item.logo} width={20} height={20} alt="joinus" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-2 lg:gap-0 lg:w-3/5 justify-between">
            <p className=" text-white">À propos</p>
            <p className="text-white">Feature</p>
            <p className=" text-white">Programme</p>
            <p className=" text-white">Testimonial</p>
            <p className=" text-white">Faq</p>
          </div>
        </div>
        <div className="pt-8 flex justify-between flex-col lg:flex-row gap-3 lg:gap-0">
          <p className="text-white">© 2025 NEOS. tout droit réservé</p>
          <div className="flex items-center gap-1">
            <p className="text-white">Made with 🤍 by</p>
            <a
              className="underline text-white"
              href="https://la-landing.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              La-landing.fr
            </a>
          </div>
					<div className="flex justify-between flex-col lg:flex-row gap-2">
            <Link className="underline text-white" href="/cgv">
              CGV
            </Link>
            <Link className="underline text-white" href="/mentions-legales">
              Mentions légales
            </Link>
            <Link className="underline text-white" href="/termes-conditions-ventes">
              Termes et conditions de ventes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
