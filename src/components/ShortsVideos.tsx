/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/magicui/marquee";
import { ShortsVideo } from "@/sanity/lib/type";

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
      />
    </figure>
  );
};

export function ShortsVideos({ data }: { data: ShortsVideo[] }) {
  // Division en 4 colonnes
  const firstRow = data.slice(0, Math.ceil(data.length / 4));
  const secondRow = data.slice(
    Math.ceil(data.length / 4),
    Math.ceil((data.length * 2) / 4)
  );
  const thirdRow = data.slice(
    Math.ceil((data.length * 2) / 4),
    Math.ceil((data.length * 3) / 4)
  );
  const fourthRow = data.slice(Math.ceil((data.length * 3) / 4));

  return (
    <div className="mt-8 relative flex h-[1000px] w-full flex-row items-center justify-center overflow-hidden gap-[30px]">
      <img src="avis.png" alt="avis" className="absolute -z-10" />

      {/* Première colonne - direction normale */}
      <Marquee pauseOnHover vertical className="[--duration:40s]">
        {firstRow.map((video, index) => (
          <VideoCard key={`first-${index}`} videoUrl={video.url} />
        ))}
      </Marquee>

      {/* Deuxième colonne - direction inversée */}
      <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
        {secondRow.map((video, index) => (
          <VideoCard key={`second-${index}`} videoUrl={video.url} />
        ))}
      </Marquee>

      {/* Troisième colonne - direction normale */}
      <Marquee pauseOnHover vertical className="[--duration:40s]">
        {thirdRow.map((video, index) => (
          <VideoCard key={`third-${index}`} videoUrl={video.url} />
        ))}
      </Marquee>

      {/* Quatrième colonne - direction inversée */}
      <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
        {fourthRow.map((video, index) => (
          <VideoCard key={`fourth-${index}`} videoUrl={video.url} />
        ))}
      </Marquee>

      {/* Gradients pour l'effet de fondu */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#F9F9F9] dark:from-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F9F9F9] dark:from-black"></div>
    </div>
  );
}
