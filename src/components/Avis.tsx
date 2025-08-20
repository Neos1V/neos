/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/magicui/marquee";

// Interface pour vos props
interface Review {
  photoProfil: string;
  titre: string;
  description: string;
}

interface MarqueeDemoVerticalProps {
  reviews: Review[];
}

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={
        "relative lg:w-[375px] cursor-pointer overflow-hidden rounded-xl bg-white p-2"
      }
    >
      <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-row items-center gap-2 p-4 rounded-b-xl">
        <img className="rounded-full" width="44" height="44" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <img src="stars.svg" alt="stars" />
        </div>
      </div>
      <blockquote className="px-6 mt-6 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Avis({ reviews }: MarqueeDemoVerticalProps) {
  // Division en 3 colonnes pour desktop
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 3));
  const secondRow = reviews.slice(
    Math.ceil(reviews.length / 3),
    Math.ceil((reviews.length * 2) / 3),
  );
  const thirdRow = reviews.slice(Math.ceil((reviews.length * 2) / 3));

  return (
    <div className="mt-6 relative flex h-[700px] w-full flex-row items-center justify-center overflow-hidden gap-6">
      <img
        src="avis.png"
        alt="avis"
        className="absolute -z-10 hidden lg:block"
      />
      <img
        src="avisMobile.png"
        alt="avis"
        className="absolute -z-10 lg:hidden w-full"
      />

      {/* Version mobile - une seule colonne */}
      <div className="md:hidden w-full flex justify-center">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {reviews.map((review, index) => (
            <ReviewCard
              key={`mobile-${index}`}
              img={review.photoProfil}
              name={review.titre}
              body={review.description}
            />
          ))}
        </Marquee>
      </div>

      {/* Version desktop - trois colonnes */}
      <div className="hidden md:flex w-full gap-6 justify-center">
        {/* Première colonne - direction normale */}
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard
              key={`first-${index}`}
              img={review.photoProfil}
              name={review.titre}
              body={review.description}
            />
          ))}
        </Marquee>

        {/* Deuxième colonne - direction inversée */}
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard
              key={`second-${index}`}
              img={review.photoProfil}
              name={review.titre}
              body={review.description}
            />
          ))}
        </Marquee>

        {/* Troisième colonne - direction normale */}
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {thirdRow.map((review, index) => (
            <ReviewCard
              key={`third-${index}`}
              img={review.photoProfil}
              name={review.titre}
              body={review.description}
            />
          ))}
        </Marquee>
      </div>

      {/* Gradients pour l'effet de fondu */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#F9F9F9] dark:from-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F9F9F9] dark:from-black"></div>
    </div>
  );
}
