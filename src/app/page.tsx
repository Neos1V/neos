import { CountingNumber } from "@/components/animate-ui/text/counting-number";
import { Avis } from "@/components/Avis";
import Clients from "@/components/Clients";
import Faces from "@/components/Faces";
import FaqComponent from "@/components/FaqComponent";
import ImageSection from "@/components/ImageSection";
import Logos from "@/components/Logos";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Nav from "@/components/Nav";
import Price from "@/components/Price";
import CtaButton from "@/components/shared/CtaButton";
import Tooltip from "@/components/shared/Tooltip";
import { ShortsVideos } from "@/components/ShortsVideos";
import ShortsVideosMobile from "@/components/ShortsVideosMobile";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AnimatedTestimonialsMobile } from "@/components/ui/animated-testimonials-mobile";
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
import Slider from "@/components/Slider";

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
      <div className="w-full mt-[80px] lg:mt-[180px] flex flex-col items-center justify-center relative">
        {/* Créateurs positionnés autour du contenu */}
        <div className="absolute inset-0 hidden lg:block">
          {home.createurs.map((createur, idx) => {
            // Positions prédéfinies pour chaque créateur
            const positions = [
              "top-20 left-[15%]", // Top gauche
              "top-32 right-[15%]", // Top droite
              "top-1/2 left-[10%] -translate-y-1/2", // Milieu gauche
              "top-1/2 right-[10%] -translate-y-1/2", // Milieu droite
              "bottom-20 left-[15%]", // Bottom gauche
              "bottom-32 right-[15%]", // Bottom droite
            ];

            return (
              <div
                key={idx}
                className={`absolute ${positions[idx % positions.length]} z-10`}
              >
                <div className="flex items-center">
                  <Image
                    width={50}
                    height={50}
                    src={createur.image}
                    alt={"Créateur " + idx}
                    className="border-2 border-white rounded-full shadow-lg"
                  />
                  <p className="bg-[#F1F5FB] rounded-xl px-3 py-1.5 ml-[-10px] text-sm font-medium shadow-md">
                    {createur.prix}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contenu principal */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="mb-3 lg:mb-6 flex items-center justify-center gap-2 px-[10px] py-[5px] md:p-3 border border-[#E5E7EB]/50 rounded-full shadow-md bg-white/90 backdrop-blur-sm">
            <img
              src={home.imageCreateurs}
              alt="Créateurs"
              className="w-[58px] h-auto md:w-auto md:h-auto"
            />
            <p className="text-[10px] lg:text-base">{home.titleCreateur}</p>
          </div>

          <div className="text-[28px] lg:text-[56px] font-bold text-center blueText px-4 lg:px-0 customLeading">
            <PortableText value={home.description} />
          </div>

          <p className="text-sm lg:text-base px-3 lg:px-0 text-red mt-4 text-center lg:w-1/2 mx-auto">
            {home.subtitle}
          </p>

          <div className="mt-6 lg:mt-8">
            <CtaButton text={navData.ctaButton} link={navData.ctaLink} />
          </div>

          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            {home.validCheck.map((item, idx) => (
              <div key={item.titre + idx} className="flex items-center gap-2">
                <Image src="check.svg" alt="neos" width={16} height={16} />
                <p className="text-[10px] lg:text-base">{item.titre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Vidéo */}
      <div className="relative mt-12 overflow-x-clip">
        {/* Vagues en arrière-plan */}
        <img
          src="waves.svg"
          alt="waves"
          className="hidden lg:block absolute bottom-16 lg:bottom-[180px] left-1/2 -translate-x-1/2 -z-10 opacity-50"
        />
        <img
          src="wavesMobile.svg"
          alt="waves"
          className="lg:hidden absolute bottom-12 w-[100vw] left-1/2 -translate-x-1/2"
        />
        <div className="lg:w-3/4 lg:mx-auto relative z-20 mb-20 lg:mb-0">
          <HeroVideoDialog
            className="flex justify-center"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
      <Logos logos={home.logos} />
      <Clients clients={home.clients} />
      <div className="mt-10">
        <div className="flex items-center justify-center gap-[10px] mx-auto w-fit">
          <Image
            src="palm.svg"
            alt="palm left"
            className="scale-x-[-1]"
            width={19}
            height={36}
          />
          <p className="text-center w-[310px] text-xs lg:text-base lg:w-[470px]">
            {home.sousTitreClients}
          </p>
          <Image src="palm.svg" alt="palm right" width={19} height={36} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8">
          <CtaButton text={navData.ctaButton} link={navData.ctaLink} />
        </div>
        <div className="flex gap-4 mt-4">
          {home.validCheck.map((item, idx) => (
            <div key={item.titre + idx} className="flex items-center gap-2">
              <Image src="check.svg" alt="neos" width={16} height={16} />
              <p className="text-[10px] lg:text-base">{item.titre}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col lg:flex-row gap-6 lg:gap-[90px] justify-center lg:py-[70px] lg:px-[56px] lg:mx-[52px] lg:rounded-3xl lg:shadow lg:border-[#D9D9D9] lg:bg-gradient-to-b lg:from-white lg:to-transparent">
        <div className=" flex flex-col items-center lg:block lg:border border-[#F6F6F8] bg-white/70 lg:bg-white rounded-xl shadow-md p-6 lg:p-8 max-w-full lg:max-w-[600px] h-fit order-2 lg:order-1 mx-4 -mt-[100px] lg:mx-0 lg:mt-0 relative z-10">
          <span className="bg-white inline-block px-2 py-1 border border-[#F2F3F5] rounded-full shadow text-[10px] lg:text-sm">
            {tiktok.sousTitre}
          </span>
          <div className="text-2xl lg:text-3xl font-bold mt-6 mb-2.5 text-center lg:text-left">
            <PortableText value={tiktok.titre} />
          </div>
          <div className="text-sm lg:text-base text-center lg:text-left">
            <PortableText value={tiktok.richText} />
          </div>
          <div className="mt-6 lg:mt-8">
            <CtaButton text={tiktok.buttonText} link={navData.ctaLink} />
          </div>
        </div>
        <div className="relative order-1 lg:order-2 lg:flex lg:justify-start">
          <Image
            src={tiktok.image}
            alt="tiktok"
            width={544}
            height={547}
            className="rounded-xl w-full lg:max-w-none lg:w-[544px] h-auto"
          />
          <img
            src="tiktokArrow.svg"
            alt="tiktok"
            className="absolute bottom-10 left-[200px] w-auto hidden lg:block"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-[145px] relative">
        <img src="ellipseTiktok.png" alt="tiktk" className="absolute " />
        <img
          src="eyeLeft.svg"
          alt="eye"
          className="w-[22px] lg:w-[58px] absolute bottom-0 left-[5%] lg:left-[20%]"
        />
        <img
          src="eyeRight.svg"
          alt="eye"
          className="w-[22px] lg:w-[58px] absolute top-[-20px] lg:top-0 right-[5%] lg:right-[20%]"
        />
        <div className="text-[60px] lg:text-[128px] text-center font-bold relative">
          <CountingNumber
            number={tiktok.vues}
            className="gradient-text font-manrope max-w-[300px] w-[300px] lg:max-w-[1500px] lg:w-full"
          />
          <div className="w-max absolute -bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 rounded-full bg-white text-black border border-[#EEF0F4]">
            <span className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-gradient-to-r from-[#0051D2] to-[#2978FE]"></span>
            <p className="text-black font-medium text-xs lg:text-sm">
              {tiktok.texteVues}
            </p>
          </div>
        </div>
      </div>
      <Faces logos={tiktok.photosProfil} />
      <div className="flex flex-col items-center justify-center mt-[40px]">
        <p className="text-center px-3 text-xs lg:text-base lg:px-0 lg:w-1/3 mx-auto">
          {tiktok.sousTitreTextVues}
        </p>
        <div className="mt-8">
          <CtaButton text={tiktok.buttonTextVues} link={navData.ctaLink} />
        </div>
      </div>
      <div className="mt-20 mb-20 w-full flex flex-col items-center">
        <div className="w-[210px] text-center lg:w-full mt-3.5 blueText h2">
          <PortableText value={shorts.richText} />
        </div>

        <div className="hidden lg:block">
          <ShortsVideos data={shorts.videos} />
        </div>
        {/*<div className="max-w-full block lg:hidden">*/}
        {/*  <ShortsVideosMobile data={shorts.videos} />*/}
        {/*</div>*/}
      </div>
      <div className=" mt-20 lg:mt-40 mb-20 w-full flex flex-col items-center relative">
        <div className="mt-[80px]">
          <Tooltip text={pourquoi.titre} />
        </div>
        <div className="mt-3.5 blueText h2 text-center lg:text-left w-[250px] mx-auto lg:w-fit">
          <PortableText value={pourquoi.richText} />
        </div>

        <p className="mt-6 px-3 lg:px-0 lg:w-2/4 mx-auto text-center text-lg">
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
                <p className="text-[10px] lg:text-base">{item.titre}</p>
              </div>
            ))}
          </div>
          <Slider />
        </div>
        <div className="lg:max-w-[1262px]">
          <ImageSection pourquoi={pourquoi} />

          <div className="px-3 lg:px-0 flex flex-col lg:flex-row justify-between w-full gap-3 mt-6">
            {pourquoi.numbers.map((item, idx) => (
              <div
                key={item.number + idx}
                className="items-center lg:items-start bg-white rounded-2xl shadow px-10 py-6 flex w-full flex-col "
              >
                <span className="gradient-text text-[40px] lg:text-[64px] font-bold">
                  {item.number}%
                </span>
                <p className="text-sm lg:text-base text-black/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[85px] flex flex-col items-center justify-center">
        <Tooltip text={work.tooltip} />
        <div className="w-[300px] text-center lg:w-full mt-3.5 blueText h2">
          <PortableText value={work.titre} />
        </div>

        <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-6 mt-11 px-3 lg:px-0">
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="rounded-2xl">
              <img
                src={work.illustration1}
                alt="illustration1"
                className="w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="rounded-2xl">
              <img
                src={work.illustration2}
                alt="illustration2"
                className="w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="shadow rounded-2xl">
              <img
                src={work.illustration3}
                alt="illustration3"
                className="w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="shadow rounded-2xl">
              <img
                src={work.illustration4}
                alt="illustration4"
                className="w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
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
              <p className="text-[10px] lg:text-base">{item.titre}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="hidden lg:block">
          <AnimatedTestimonials testimonials={marque.marques} />
        </div>
        <div className="lg:hidden">
          <AnimatedTestimonialsMobile testimonials={marque.marques} />
        </div>
      </div>
      <div className="mt-[30px] lg:mt-[150px] w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <div className="w-[300px] text-center lg:w-full mt-3.5 blueText h2">
            <PortableText value={marque.titre} />
          </div>
          <div className="mb-6 px-3 lg:px-0 lg:w-2/4 mx-auto text-center text-lg">
            <PortableText value={marque.description} />
          </div>

          <div className="gap-9 flex flex-wrap justify-center mt-8 max-w-[1400px]">
            {[
              marque.illustration1_1,
              marque.illustration1_2,
              marque.illustration1_3,
              marque.illustration1_4,
              marque.illustration1_5,
              marque.illustration1_6,
            ].map((url, idx) =>
              url ? (
                <Image
                  width={420}
                  height={490}
                  key={idx}
                  src={url}
                  alt={`illustration1_${idx + 1}`}
                />
              ) : null,
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
              <p className="text-[10px] lg:text-base">{item.titre}</p>
            </div>
          ))}
        </div>
      </div>
      <Price data={pricing} />
      <div className="mt-20 lg:mb-20 w-full flex flex-col items-center">
        <Tooltip text={community.tooltip} />
        <div className="mt-3.5 blueText h2">
          <PortableText value={community.titre} />
        </div>

        <Avis reviews={community.members} />
        <div className="mt-8">
          <CtaButton
            person={true}
            text={pourquoi.boutonTitle}
            link={navData.ctaLink}
          />
        </div>

        <div>
          <Videos vids={community.videos} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl w-fit mx-auto border-[#D9D9D9] bg-gradient-to-b from-white to-transparent">
        <div className="blueText h2 mb-4 pt-12">
          <PortableText value={faq.title} />
        </div>
        <p>{faq.subtitle}</p>
        <FaqComponent data={faq} />
      </div>
      <div className="mt-[120px] flex flex-col justify-center items-center mb-[132px]">
        <div className="flex gap-2 items-center tooltip bg-white">
          <img src={joinus.image} alt="joinus" />
          <p className="text-[10px] lg:text-base">{joinus.tooltip}</p>
        </div>
        <div className="blueText h2 text-center mt-8 w-[250px] mx-auto lg:w-full">
          <PortableText value={joinus.titre} />
        </div>
        <div className="text-center mt-6 px-3 lg:px-0 lg:w-1/2 mx-auto">
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
                <p className="text-[10px] lg:text-base">{item.titre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0051D2] to-[#2978FE] py-[32px] lg:py-[70px] px-[28px] lg:px-[100px] ">
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
            <p className=" text-white">A propos</p>
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
              href="https://www.neos.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              La-landing.fr
            </a>
          </div>
          <div className="flex justify-between flex-col lg:flex-row gap-2 lg:gap-0">
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
