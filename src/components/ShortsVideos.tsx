"use client";

import { ShortsVideo } from "@/sanity/lib/type";
import { MarqueeTest } from "./magicui/marqueeTest";

const VideoCard = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <figure className="relative w-[320px] h-[570px] cursor-pointer overflow-hidden bg-black mb-[30px]">
      <video
        src={videoUrl}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </figure>
  );
};

export function ShortsVideos({ data }: { data: ShortsVideo[] }) {
  const firstRow = data.slice(0, Math.ceil(data.length / 4));
  const secondRow = data.slice(
    Math.ceil(data.length / 4),
    Math.ceil((data.length * 2) / 4),
  );
  const thirdRow = data.slice(
    Math.ceil((data.length * 2) / 4),
    Math.ceil((data.length * 3) / 4),
  );
  const fourthRow = data.slice(Math.ceil((data.length * 3) / 4));

  return (
    <div className="mt-8 relative flex h-[1000px] w-full flex-row items-center justify-center overflow-hidden gap-[30px]">
      {/* assure-toi que /public/avis.png existe */}
      <img src="/avis.png" alt="avis" className="absolute -z-10" />

      <MarqueeTest pauseOnHover vertical className="[--duration:40s]">
        {firstRow.map((video, index) => (
          <VideoCard key={`first-${index}`} videoUrl={video.url} />
        ))}
      </MarqueeTest>

      <MarqueeTest reverse pauseOnHover vertical className="[--duration:40s]">
        {secondRow.map((video, index) => (
          <VideoCard key={`second-${index}`} videoUrl={video.url} />
        ))}
      </MarqueeTest>

      <MarqueeTest pauseOnHover vertical className="[--duration:40s]">
        {thirdRow.map((video, index) => (
          <VideoCard key={`third-${index}`} videoUrl={video.url} />
        ))}
      </MarqueeTest>

      <MarqueeTest reverse pauseOnHover vertical className="[--duration:40s]">
        {fourthRow.map((video, index) => (
          <VideoCard key={`fourth-${index}`} videoUrl={video.url} />
        ))}
      </MarqueeTest>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#F9F9F9] dark:from-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F9F9F9] dark:from-black"></div>
    </div>
  );
}
