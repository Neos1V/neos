import AccordionCards from "@/components/AccordionCards";
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
import Slider from "@/components/Slider";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AnimatedTestimonialsMobile } from "@/components/ui/animated-testimonials-mobile";
import Videos from "@/components/Videos";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
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
  vslQuery,
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
  Vsl,
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

  const vsl: Vsl = await sanityFetch({
    query: vslQuery,
    tags: ["vsl"],
  });

  const items = [
    {
      url: marque.illustration1_1,
      title: marque.title1,
      desc: marque.description1,
    },
    {
      url: marque.illustration1_2,
      title: marque.title2,
      desc: marque.description2,
    },
    {
      url: marque.illustration1_3,
      title: marque.title3,
      desc: marque.description3,
    },
    {
      url: marque.illustration1_4,
      title: marque.title4,
      desc: marque.description4,
    },
    {
      url: marque.illustration1_5,
      title: marque.title5,
      desc: marque.description5,
    },
    {
      url: marque.illustration1_6,
      title: marque.title6,
      desc: marque.description6,
    },
  ];

  return (
    <div className="">
      <Nav data={navData} />
      <div className="w-full mt-[80px] lg:mt-[180px] flex flex-col items-center justify-center relative">
        {/* Section Desktop - cachée en mobile */}
        <div className="absolute inset-0 hidden lg:block">
          {home.createurs.map((createur, idx) => {
            const desktopPositions = [
              "top-12 left-[15%]", // Top gauche - remonté
              "top-16 right-[15%]", // Top droite - remonté
              "top-1/2 left-[10%] -translate-y-1/2", // Milieu gauche
              "top-1/2 right-[10%] -translate-y-1/2", // Milieu droite
              "bottom-12 left-[15%]", // Bottom gauche - descendu
              "bottom-16 right-[15%]", // Bottom droite - descendu
            ];

            return (
              <div
                key={`desktop-${idx}`}
                className={`absolute ${desktopPositions[idx % desktopPositions.length]} z-10`}
              >
                <div className="flex items-center">
                  <Image
                    width={50}
                    height={50}
                    src={createur.image}
                    alt={"Créateur " + idx}
                    className="border-2 border-white rounded-full shadow-lg w-[50px] h-[50px] object-cover"
                  />
                  <p className="bg-[#F1F5FB] rounded-xl px-3 py-1.5 ml-[-10px] text-sm font-medium shadow-md">
                    {createur.prix}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Mobile - cachée en desktop */}
        <div className="hidden bsolute inset-0 block lg:hidden  z-10">
          {home.createurs.slice(0, 4).map((createur, idx) => {
            const mobilePositions = [
              "-top-4 left-2 -rotate-[30deg]", // Haut gauche
              "-top-4 right-2 rotate-[30deg]", // Haut droite
              "-bottom-10 left-2 -rotate-[30deg]", // Bas gauche
              "-bottom-10 right-2 rotate-[30deg]", // Bas droite
            ];

            return (
              <div
                key={`mobile-${idx}`}
                className={`absolute ${mobilePositions[idx]} z-10 `}
              >
                <div className="flex items-center flex-col justify-center">
                  <Image
                    width={50}
                    height={50}
                    src={createur.image}
                    alt={"Créateur " + idx}
                    className="border-2 border-white rounded-full shadow-lg w-[35px] h-[35px] object-cover"
                  />
                  <p className="text-center bg-[#F1F5FB] rounded-xl px-2 py-0.5 -mt-1 text-[10px] font-medium shadow-md">
                    {createur.prix}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contenu principal */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="mb-3 lg:mb-6 flex items-center justify-center gap-2 px-[10px] py-[5px] md:p-3 border border-[#E5E7EB]/50 rounded-full shadow-md bg-white/90 ">
            <img
              src={home.imageCreateurs}
              alt="Créateurs"
              className="  md:w-auto md:h-auto"
              style={{
                minWidth: "58px",
              }}
            />
            <p className="text-sm lg:text-base">{home.titleCreateur}</p>
          </div>

          <div className="hidden lg:block text-[28px] lg:text-[56px] font-bold text-center blueText px-4 lg:px-0 customLeading emBold">
            <PortableText value={home.description} />
          </div>

          <div className="hidden lg:block text-sm lg:text-base px-3 lg:px-0 text-red mt-4 text-center lg:w-1/2 mx-auto">
            <PortableText value={home.subtitle} />
          </div>
          <div className="lg:hidden text-[28px] lg:text-[56px] font-bold text-center blueText px-4 lg:px-0 customLeading emBold">
            <PortableText value={home.descriptionMobile} />
          </div>

          <div className="lg:hidden text-sm lg:text-base px-3 lg:px-0 text-red mt-4 text-center lg:w-1/2 mx-auto">
            <PortableText value={home.subtitleMobile} />
          </div>
        </div>
      </div>
      {/* Vidéo */}
      <div className="relative mt-12 overflow-x-clip">
        {/* Vagues en arrière-plan */}
					<img
						src="bigWaves.svg"
						alt="waves"
						className="hidden md:block absolute bottom-[0] left-1/2 -translate-x-1/2 -z-10 w-full"
					/>
				{/*	<img*/}
				{/*		src="wavesBottom.svg"*/}
				{/*		alt="waves"*/}
				{/*		className="hidden lg:block absolute top-[126px] left-1/2 -translate-x-1/2 -z-10 w-full"*/}
				{/*	/>*/}
				{/*	<img*/}
				{/*		src="wavesTop.svg"*/}
				{/*		alt="waves"*/}
				{/*		className="hidden lg:block absolute bottom-[500px] left-1/2 -translate-x-1/2 -z-10 w-full"*/}
				{/*	/>*/}
        <img
          src="wavesMobile.svg"
          alt="waves"
          className="md:hidden absolute bottom-[160px] w-[100vw] left-1/2 -translate-x-1/2"
        />
        <img
          src="wavesMobileBtm.svg"
          alt="waves"
          className="absolute top-[30px] w-[100vw] left-1/2 -translate-x-1/2 md:hidden"
        />
        <div className="w-[95%] mx-auto lg:w-3/4 lg:mx-auto relative z-20 mb-8 lg:mb-0">
          <HeroVideoDialog
            className="flex justify-center"
            animationStyle="top-in-bottom-out"
            videoSrc={vsl.videoUrl}
            thumbnailSrc={vsl.thumbnailImage}
            thumbnailAlt={vsl.thumbnailAlt}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-0 lg:mt-8">
          <CtaButton text={navData.ctaButton} link={navData.ctaLink} />
        </div>

        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          {home.validCheck.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Image src="check.svg" alt="neos" width={16} height={16} />
              <div className="text-[10px] lg:text-base">
                <PortableText value={item.titre} />
              </div>
            </div>
          ))}
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
            <div key={idx} className="flex items-center gap-2">
              <Image src="check.svg" alt="neos" width={16} height={16} />
              <div className="text-[10px] lg:text-base">
                <PortableText value={item.titre} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden mt-12 flex flex-col lg:flex-row gap-6 lg:gap-[90px] justify-center lg:py-[70px] lg:px-[56px] lg:mx-[52px] lg:rounded-3xl lg:shadow lg:border-[#D9D9D9] lg:bg-gradient-to-b lg:from-white lg:to-transparent">
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
        <div className="text-[60px] lg:text-[128px] text-center font-bold relative w-[100%]">
          <CountingNumber
            number={tiktok.vues}
            duration={2}
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
        <div className="max-w-full block lg:hidden">
          <ShortsVideosMobile data={shorts.videos} />
        </div>
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
              <div key={idx} className="flex items-center gap-2">
                <Image src="check.svg" alt="neos" width={16} height={16} />
                <div className="text-[10px] lg:text-base">
                  <PortableText value={item.titre} />
                </div>
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
                  {item.number}
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
            <div className="rounded-2xl relative">
              <img
                src={work.illustrations[0].image}
                alt="illustration1"
                className="hidden lg:block w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
              <img
                src={work.illustrations[0].imageMobile}
                alt="illustration1 mobile"
                className="lg:hidden w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 bg-white w-full left-0 rounded-2xl p-6">
                <p className="text-xl lg:text-2xl font-semibold">
                  {work.illustrations[0].title1}
                </p>
                <div className="mt-1">
                  <PortableText value={work.illustrations[0].desc1} />
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative">
              <img
                src={work.illustrations[1].image}
                alt="illustration1"
                className="hidden lg:block w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
              <img
                src={work.illustrations[1].imageMobile}
                alt="illustration1 mobile"
                className="lg:hidden w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 bg-white w-full left-0 rounded-2xl p-6">
                <p className="text-xl lg:text-2xl font-semibold">
                  {work.illustrations[1].title1}
                </p>
                <div className="mt-1">
                  <PortableText value={work.illustrations[1].desc1} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="shadow rounded-2xl relative">
              <img
                src={work.illustrations[2].image}
                alt="illustration1"
                className="hidden lg:block w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
              <img
                src={work.illustrations[2].imageMobile}
                alt="illustration1 mobile"
                className="lg:hidden w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
              <div className="absolute top-0 w-full left-0 rounded-2xl p-6">
                <p className="text-xl lg:text-2xl font-semibold">
                  {work.illustrations[2].title1}
                </p>
                <div className="mt-1">
                  <PortableText value={work.illustrations[2].desc1} />
                </div>
              </div>
            </div>
            <div className="shadow rounded-2xl relative">
              <img
                src={work.illustrations[3].image}
                alt="illustration1"
                className="hidden lg:block w-full h-[500px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
              <img
                src={work.illustrations[3].imageMobile}
                alt="illustration1 mobile"
                className="lg:hidden w-full h-[800px] lg:w-auto lg:h-auto object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 rounded-t-2xl p-6">
                <p className="text-xl lg:text-2xl font-semibold">
                  {work.illustrations[3].title1}
                </p>
                <div className="mt-1">
                  <PortableText value={work.illustrations[3].desc1} />
                </div>
              </div>
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
            <div key={idx} className="flex items-center gap-2">
              <Image src="check.svg" alt="neos" width={16} height={16} />
              <div className="text-[10px] lg:text-base">
                <PortableText value={item.titre} />
              </div>
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
          <div className="mb-6 px-3 lg:px-0 lg:w-2/4 mx-auto text-center text-lg mt-6 lg:mt-0">
            <PortableText value={marque.description} />
          </div>

          <div className="w-full">
            {/* Mobile: accordion */}
            <AccordionCards items={items} />

            {/* Desktop: original grid layout */}
            <div className="hidden md:grid grid-cols-3 gap-9 max-w-[1400px] mx-auto mt-8">
              {items.map(({ url, title, desc }, idx) =>
                url ? (
                  <div className="relative" key={idx}>
                    <div className="absolute bottom-8 left-6">
                      <p className="text-2xl font-bold">{title}</p>
                      {desc ? <p>{desc}</p> : null}
                    </div>
                    <Image
                      src={url}
                      width={420}
                      height={490}
                      alt={`${title} ${desc ?? ""}`.trim()}
                      className="w-full h-auto"
                    />
                  </div>
                ) : null
              )}
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
            <div key={idx} className="flex items-center gap-2">
              <Image src="check.svg" alt="neos" width={16} height={16} />
              <div className="text-[10px] lg:text-base">
                <PortableText value={item.titre} />
              </div>
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
          <img
            src={joinus.image}
            alt="joinus"
            className="w-auto h-auto max-w-[100px] max-h-[50px]" // Ajustez selon vos besoins
            style={{ minHeight: "20px", minWidth: "20px" }}
          />
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
              <div key={idx} className="flex items-center gap-2">
                <Image src="check.svg" alt="neos" width={16} height={16} />
                <div className="text-[10px] lg:text-base">
                  <PortableText value={item.titre} />
                </div>
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
