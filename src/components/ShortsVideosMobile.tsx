/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/magicui/marquee";
import { ShortsVideo } from "@/sanity/lib/type";

const VideoCard = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <figure className="relative w-[320px] h-[570px] cursor-pointer overflow-hidden bg-black mr-[24px]">
      <video
        src={videoUrl}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </figure>
  );
};

export default function ShortsVideosMobile({ data }: { data: ShortsVideo[] }) {
  return (
    <div className="md:hidden mt-8 relative flex w-full overflow-hidden">
      {/* Marquee horizontal */}
      <Marquee pauseOnHover className="[--duration:25s]">
        {data.map((video, index) => (
          <VideoCard key={`mobile-${index}`} videoUrl={video.url} />
        ))}
      </Marquee>

      {/* Gradients pour l'effet de fondu */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#F9F9F9] dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#F9F9F9] dark:from-black"></div>
    </div>
  );
}
