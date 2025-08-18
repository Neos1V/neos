import { CountingNumber } from "@/components/animate-ui/text/counting-number";
import Clients from "@/components/Clients";
import Faces from "@/components/Faces";
import Logos from "@/components/Logos";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Nav from "@/components/Nav";
import CtaButton from "@/components/shared/CtaButton";
import Tooltip from "@/components/shared/Tooltip";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  homeQuery,
  navQuery,
  pourquoiQuery,
  shortsQuery,
  tiktokQuery,
  workQuery,
} from "@/sanity/lib/query";
import {
  Home,
  NavType,
  Pourquoi,
  Shorts,
  Tiktok,
  Work,
} from "@/sanity/lib/type";
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

  const shorts: Shorts = await sanityFetch({
    query: shortsQuery,
    tags: ["shorts"],
  });

  const pourquoi: Pourquoi = await sanityFetch({
    query: pourquoiQuery,
    tags: ["pourquoi"],
  });

  const work: Work = await sanityFetch({
    query: workQuery,
    tags: ["work"],
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
      {/* section : shorts */}
      {/* <div className="mt-20 mb-20 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">{shorts.title}</h2>
        <div className="max-w-2xl w-full mb-8">
          <PortableText value={shorts.richText} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {shorts.videos.map((video, idx) => (
            <div
              key={video.url + idx}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            >
              {video.thumbnail && (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Watch Video
              </a>
            </div>
          ))}
        </div>
      </div> */}
      {/*
        section : pourquoi 

        - titre
        - richText
        - description
        - bouton title
        -price 
        - 1 image
        - desc image 1 
        - 2 image
        - desc image 2
        - array de number et text

      */}
      <div className="mt-20 mb-20 w-full flex flex-col items-center">
        <Tooltip text={pourquoi.titre} />
        <div className="mt-3.5 blueText h2">
          <PortableText value={pourquoi.richText} />
        </div>
        <p className="mt-6 w-2/4 mx-auto text-center text-lg">
          {pourquoi.description}
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-8">
            <CtaButton text={pourquoi.boutonTitle} link={navData.ctaLink} />
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
        <div className="flex gap-3 mt-12">
          <div className="relative">
            <Image
              src={pourquoi.image1}
              alt="Image 1"
              className=" rounded-2xl"
              width={625}
              height={575}
            />
            <div className="absolute bottom-10 left-6 [&>p]:text-white/60">
              <PortableText value={pourquoi.descImage1} />
            </div>
          </div>
          <Image
            src={pourquoi.image2}
            alt="Image 1"
            className=" rounded-2xl"
            width={625}
            height={575}
          />
        </div>

        <div className="flex gap-3 mt-6">
          {pourquoi.numbers.map((item, idx) => (
            <div
              key={item.number + idx}
              className="bg-white rounded-2xl shadow px-10 py-6 flex flex-col "
            >
              <span className="gradient-text text-[64px] font-bold">
                {item.number}%
              </span>
              <p className="text-black/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[85px] flex flex-col items-center justify-center">
        <Tooltip text={work.tooltip} />
        <div className="mt-3.5 blueText h2">
          <PortableText value={work.titre} />
        </div>
        <div className="max-w-[1400px] grid grid-cols-4 gap-6 h-[600px]">
          <div className="col-span-3 rounded-2xl bg-red-800"></div>
          <div className="col-span-1 rounded-2xl bg-red-600"></div>
          <div className="col-span-1 rounded-2xl bg-red-600"></div>
          <div className="col-span-3 rounded-2xl bg-red-800"></div>
        </div>
      </div>
    </div>
  );
}
