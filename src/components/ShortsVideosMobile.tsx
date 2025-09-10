"use client"
import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { ShortsVideo } from "@/sanity/lib/type";

const VideoCard = ({ videoUrl }: { videoUrl: string }) => {
	return (
		<figure className="relative w-[320px] h-[570px] cursor-pointer overflow-hidden bg-black flex-[0_0_320px]">
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
	const autoplayRef = useRef(
		AutoPlay({
			delay: 2500, // Équivalent à --duration:25s pour plusieurs slides
			stopOnInteraction: false,
			stopOnMouseEnter: true, // Pause on hover comme le Marquee original
			stopOnFocusIn: false
		})
	);

	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
			slidesToScroll: 1,
			containScroll: false,
			dragFree: true,
			duration: 25, // Durée de transition similaire au Marquee
		},
		[autoplayRef.current]
	);

	return (
		<div className="md:hidden mt-8 relative flex w-full overflow-hidden">
			{/* Embla Carousel Container */}
			<div className="embla w-full" ref={emblaRef}>
				<div className="embla__container flex">
					{data.map((video, index) => (
						<div key={`mobile-${index}`} className="embla__slide mr-6">
							<VideoCard videoUrl={video.url} />
						</div>
					))}
				</div>
			</div>

			{/* Gradients pour l'effet de fondu - identiques à l'original */}
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#F9F9F9] dark:from-black z-10"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#F9F9F9] dark:from-black z-10"></div>
		</div>
	);
}