import { CountingNumber } from "@/components/animate-ui/text/counting-number";
import { Avis } from "@/components/Avis";
import Clients from "@/components/Clients";
import Faces from "@/components/Faces";
import FaqComponent from "@/components/FaqComponent";
import Logos from "@/components/Logos";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Nav from "@/components/Nav";
import Price from "@/components/Price";
import CtaButton from "@/components/shared/CtaButton";
import Tooltip from "@/components/shared/Tooltip";
import { ShortsVideos } from "@/components/ShortsVideos";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Videos from "@/components/Videos";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  communityQuery,
  faqQuery,
  footerQuery,
  homeQuery,
  joinusQuery,
  marqueQuery,
  navQuery,
  pourquoiQuery,
  pricingQuery,
  shortsQuery,
  tiktokQuery,
  workQuery,
} from "@/sanity/lib/query";
import {
  Community,
  Faq,
  Footer,
  Home,
  JoinUs,
  Marque,
  NavType,
  Pourquoi,
  Pricing,
  Shorts,
  Tiktok,
  Work,
} from "@/sanity/lib/type";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

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

  const marque: Marque = await sanityFetch({
    query: marqueQuery,
    tags: ["marque"],
  });

  const pricing: Pricing = await sanityFetch({
    query: pricingQuery,
    tags: ["pricing"],
  });

  const community: Community = await sanityFetch({
    query: communityQuery,
    tags: ["community"],
  });

  const faq: Faq = await sanityFetch({
    query: faqQuery,
    tags: ["faq"],
  });

  const joinus: JoinUs = await sanityFetch({
    query: joinusQuery,
    tags: ["joinus"],
  });

  const footer: Footer = await sanityFetch({
    query: footerQuery,
    tags: ["footer"],
  });

  return (
    <div className="">
      <Nav data={navData} />
      <div className="w-full mt-[180px] flex flex-col items-center justify-center relative">
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
        <img
          src="waves.svg"
          alt="waves"
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 -z-10"
        />
      </div>
      <Logos logos={home.logos} />
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
      <div className="mt-12 flex gap-[90px] justify-center py-[70px] px-[56px] mx-[52px] rounded-3xl shadow border-[#D9D9D9] bg-gradient-to-b from-white to-transparent">
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
        <div className="text-[128px] text-center font-bold relative">
          <CountingNumber
            number={tiktok.vues}
            className="gradient-text font-manrope"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black border border-[#EEF0F4]">
            <span className="w-[8px] h-[8px] rounded-full bg-gradient-to-r from-[#0051D2] to-[#2978FE]"></span>
            <p className="text-black text-sm">{tiktok.texteVues}</p>
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
      <div className="mt-20 mb-20 w-full flex flex-col items-center">
        <div className="mt-3.5 blueText h2">
          <PortableText value={shorts.richText} />
        </div>

        <ShortsVideos data={shorts.videos} />
      </div>
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

        <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-6 mt-11">
          <div className="flex w-full">
            <div className="rounded-2xl">
              <img src={work.illustration1} alt="illustration1" />
            </div>
            <div className=" rounded-2xl">
              <img src={work.illustration2} alt="illustratio2" />
            </div>
          </div>

          <div className="flex w-full">
            <div className="shadow rounded-2xl">
              <img src={work.illustration3} alt="illustration3" />
            </div>
            <div className="shadow rounded-2xl ">
              <img src={work.illustration4} alt="illustration4" />
            </div>
          </div>
        </div>
      </div>
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
      <div>
        <AnimatedTestimonials testimonials={marque.marques} />
      </div>
      <div className="mt-[150px] w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <div className="blueText h2 mb-4">
            <PortableText value={marque.titre} />
          </div>
          <div className="mb-6 w-2/4 mx-auto text-center text-lg">
            <PortableText value={marque.description} />
          </div>

          <div className="flex flex-wrap justify-center mt-8 max-w-[1400px]">
            {[
              marque.illustration1_1,
              marque.illustration1_2,
              marque.illustration1_3,
              marque.illustration1_4,
              marque.illustration1_5,
              marque.illustration1_6,
            ].map((url, idx) =>
              url ? (
                <img key={idx} src={url} alt={`illustration1_${idx + 1}`} />
              ) : null
            )}
          </div>
        </div>
      </div>
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
      <Price data={pricing} />
      <div className="mt-20 mb-20 w-full flex flex-col items-center">
        <Tooltip text={community.tooltip} />
        <div className="mt-3.5 blueText h2">
          <PortableText value={community.titre} />
        </div>

        <Avis reviews={community.members} />
        <div className="mt-8">
          <CtaButton text={pourquoi.boutonTitle} link={navData.ctaLink} />
        </div>

        <div>
          <Videos vids={community.videos} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl mx-12">
        <div className="blueText h2 mb-4 pt-12">
          <PortableText value={faq.title} />
        </div>
        <p>{faq.subtitle}</p>
        <FaqComponent data={faq} />
      </div>
      <div className="mt-[120px] flex flex-col justify-center items-center">
        <div className="flex gap-2 items-center tooltip bg-white">
          <img src={joinus.image} alt="joinus" />
          <p>{joinus.tooltip}</p>
        </div>
        <div className="mt-3.5 blueText h2">
          <PortableText value={joinus.titre} />
        </div>
        <div className="text-center mt-6 w-1/2 mx-auto">
          <PortableText value={joinus.description} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-8">
            <CtaButton text={joinus.txtBtm} link={navData.ctaLink} />
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
      </div>
      <div className="bg-gradient-to-r from-[#0051D2] to-[#2978FE] py-[70px] px-[100px] ">
        <div className="flex justify-between border-b border-[#FFFFFF]/20 pb-11">
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
          <div className="flex w-3/5 justify-between">
            <p className=" text-white">A propos</p>
            <p className="text-white">Feature</p>
            <p className=" text-white">Programme</p>
            <p className=" text-white">Testimonial</p>
            <p className=" text-white">Faq</p>
          </div>
        </div>
        <div className="pt-8 flex justify-between">
          <p className="text-white">© 2025 NEOS. tout droit réservé</p>
          <div className="flex items-center gap-1">
            <p className="text-white">Made with 🤍 by</p>
            <a
              className="underline text-white"
              href="https://www.neos.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              La-landing.fr
            </a>
          </div>
          <div className="flex justify-between">
            <Link className="underline text-white" href="https://www.neos.fr">
              Privacy policy
            </Link>
            <Link className="underline text-white" href="https://www.neos.fr">
              Terms of service
            </Link>
            <Link className="underline text-white" href="https://www.neos.fr">
              Cookies settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
