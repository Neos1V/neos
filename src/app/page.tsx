import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Nav from "@/components/Nav";
import CtaButton from "@/components/shared/CtaButton";
import { sanityFetch } from "@/sanity/lib/fetch";
import { homeQuery, navQuery } from "@/sanity/lib/query";
import { Home, NavType } from "@/sanity/lib/type";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function HomePage() {
  const navData: NavType = await sanityFetch({
    query: navQuery,
    tags: ["nav"],
  });
  const home: Home = await sanityFetch({
    query: homeQuery,
    tags: ["home"],
  });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Nav data={navData} />
      <div className="mt-[180px] flex flex-col items-center justify-center w-fit">
        <div className="mb-6 flex items-center justify-center gap-2 p-3 border border-[#E5E7EB]/50 rounded-full shadow-md">
          <img src={home.imageCreateurs} alt="Créateurs" />
          <p>{home.titleCreateur}</p>
        </div>

        <div className="text-[56px] font-bold text-center blueText">
          <PortableText value={home.description} />
        </div>
        <p className="text-red mt-4 text-center w-1/2 mx-auto">
          {home.subtitle}
        </p>
        <div className="mt-8">
          <CtaButton text={navData.ctaButton} link={navData.ctaLink} />
        </div>
        <div className="flex gap-4 mt-4">
          {home.validCheck.map((item, idx) => (
            <div key={item.titre + idx} className="flex items-center gap-2">
              <Image src="check.svg" alt="neos" width={16} height={16} />
              <p>{item.titre}</p>
            </div>
          ))}
        </div>
        <div className="">
          {home.createurs.map((createur, idx) => (
            <div key={idx}>
              <img src={createur.image} alt={"Créateur " + idx} />
              <p>{createur.prix}</p>
            </div>
          ))}
        </div>
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.example.com/dummy-video"
          thumbnailSrc="https://www.example.com/dummy-thumbnail.png"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </div>
    </div>
  );
}
