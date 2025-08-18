import { CountingNumber } from "@/components/animate-ui/text/counting-number";
import Clients from "@/components/Clients";
import Faces from "@/components/Faces";
import Logos from "@/components/Logos";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Nav from "@/components/Nav";
import CtaButton from "@/components/shared/CtaButton";
import { sanityFetch } from "@/sanity/lib/fetch";
import { homeQuery, navQuery, tiktokQuery } from "@/sanity/lib/query";
import { Home, NavType, Tiktok } from "@/sanity/lib/type";
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

  const tiktok: Tiktok = await sanityFetch({
    query: tiktokQuery,
    tags: ["tiktok"],
  });

  return (
    <div className="">
      <Nav data={navData} />
      <div className="mx-auto mt-[180px] flex flex-col items-center justify-center w-fit relative">
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
        {/* <div className="">
          {home.createurs.map((createur, idx) => (
            <div key={idx}>
              <img src={createur.image} alt={"Créateur " + idx} />
              <p>{createur.prix}</p>
            </div>
          ))}
        </div> */}
        <div className="mt-8 w-3/4 mx-auto">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
        {/* <img
          src="waves.svg"
          alt="waves"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10"
        /> */}
      </div>
      <Logos logos={home.logos} />
      {/* 
        ajouter en bas de home

        array de : image, prix, nom, job, description qui s'apellera Clientsx§
        text qui s'appelera sous titre clients

      
      */}

      <Clients clients={home.clients} />
      <div className="mt-10">
        <p className="text-center w-1/3 mx-auto relative">
          <Image
            src="palm.svg"
            alt="palm right"
            className="absolute top-1/2 -right-10 -translate-y-1/2 -z-10"
            width={19}
            height={36}
          />
          {home.sousTitreClients}
          <Image
            src="palm.svg"
            alt="palm left"
            className="absolute top-1/2 -left-10 -translate-y-1/2 -z-10 scale-x-[-1]"
            width={19}
            height={36}
          />
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
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
      </div>
      <div className="mt-12 flex gap-[90px] justify-center ">
        <div className="border border-[#F6F6F8] bg-white rounded-xl shadow-md p-8 max-w-[600px] h-fit">
          <span className="px-3.5 py-2.5 border border-[#F2F3F5] rounded-full shadow">
            {tiktok.sousTitre}
          </span>
          <div className="text-3xl font-bold mt-6 mb-2.5">
            <PortableText value={tiktok.titre} />
          </div>
          <PortableText value={tiktok.richText} />
          <div className="mt-8">
            <CtaButton text={tiktok.buttonText} link={navData.ctaLink} />
          </div>
        </div>
        <div className="relative">
          <Image
            src={tiktok.image}
            alt="tiktok"
            width={544}
            height={547}
            className="rounded-xl"
          />
          <img
            src="tiktokArrow.svg"
            alt="tiktok"
            className="absolute bottom-10 -left-[200px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-[145px] relative">
        <img src="ellipseTiktok.png" alt="tiktk" className="absolute " />
        <div className="text-[128px] text-center gradient-text font-bold relative">
          <CountingNumber number={tiktok.vues} className="" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#EEF0F4]">
            <span className="w-[8px] h-[8px] rounded-full bg-gradient-to-r from-[#0051D2] to-[#2978FE]"></span>
            <p className="text-sm text-black">{tiktok.texteVues}</p>
          </div>
        </div>
      </div>
      <Faces logos={tiktok.photosProfil} />
      <div className="flex flex-col items-center justify-center mt-[40px]">
        <p className="text-center w-1/3 mx-auto">{tiktok.sousTitreTextVues}</p>
        <div className="mt-8">
          <CtaButton text={tiktok.buttonTextVues} link={navData.ctaLink} />
        </div>
      </div>
    </div>
  );
}
