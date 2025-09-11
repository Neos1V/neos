"use client";
import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ShortsVideo } from "@/sanity/lib/type";

const VideoCard = ({ videoUrl }: { videoUrl: string }) => {
	return (
		<figure className="relative w-[320px] h-[570px] cursor-pointer overflow-hidden bg-black mb-[30px] flex-shrink-0">
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

interface VerticalCarouselProps {
	videos: ShortsVideo[];
	reverse?: boolean;
}

const VerticalCarousel = ({ videos, reverse = false }: VerticalCarouselProps) => {
	const autoplayRef = useRef(
		Autoplay({
			delay: 0, // Défilement continu comme dans le premier code
			stopOnInteraction: false,
			stopOnMouseEnter: true,
			playOnInit: true,
			jump: false // Défilement fluide sans saut
		})
	);

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			axis: 'y',
			loop: true,
			direction: reverse ? 'rtl' : 'ltr',
			dragFree: true,
			containScroll: 'trimSnaps',
			duration: 12000, // Même durée que le premier code pour la fluidité
			slidesToScroll: 1,
		},
		[autoplayRef.current]
	);

	const onMouseEnter = useCallback(() => {
		if (autoplayRef.current) {
			autoplayRef.current.stop();
		}
	}, []);

	const onMouseLeave = useCallback(() => {
		if (autoplayRef.current) {
			autoplayRef.current.play();
		}
	}, []);

	// Pour simuler la direction inversée, on peut inverser l'ordre des slides
	const displayVideos = reverse ? [...videos].reverse() : videos;

	return (
		<div
			className="embla h-full overflow-hidden"
			ref={emblaRef}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="embla__container h-full flex flex-col">
				{displayVideos.map((video, index) => (
					<div key={`${reverse ? 'reverse' : 'normal'}-${index}`} className="embla__slide flex-shrink-0">
						<VideoCard videoUrl={video.url} />
					</div>
				))}
				{/* Dupliquer les vidéos pour un scroll infini plus fluide */}
				{displayVideos.map((video, index) => (
					<div key={`${reverse ? 'reverse' : 'normal'}-duplicate-${index}`} className="embla__slide flex-shrink-0">
						<VideoCard videoUrl={video.url} />
					</div>
				))}
			</div>
		</div>
	);
};

export function ShortsVideos({ data }: { data: ShortsVideo[] }) {
	// Division en 4 colonnes
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
			<img src="avis.png" alt="avis" className="absolute -z-10" />

			<VerticalCarousel
				videos={firstRow}
			/>

			<VerticalCarousel
				videos={secondRow}
				reverse={true}
			/>

			<VerticalCarousel
				videos={thirdRow}
			/>

			{/* Quatrième colonne - défilement vers le haut */}
			<VerticalCarousel
				videos={fourthRow}
				reverse={true}
			/>

			{/* Gradients pour l'effet de fondu */}
			<div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#F9F9F9] dark:from-black"></div>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F9F9F9] dark:from-black"></div>
		</div>
	);
}