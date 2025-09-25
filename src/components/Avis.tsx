"use client"
import { useEffect, useRef, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

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
			name,
			img,
			body,
		}: {
	img: string;
	name: string;
	body: string;
}) => {
	return (
		<figure className="relative lg:w-[375px] cursor-pointer overflow-hidden rounded-xl bg-white p-2 mb-4">
			<div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-row items-center gap-2 p-4 rounded-b-xl">
				<Image className="rounded-full w-[44px] h-[44px] object-cover" width={44} height={44} alt="" src={img} />
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

const VerticalCarousel = ({
														reviews,
														reverse = false,
														className = ""
													}: {
	reviews: Review[];
	reverse?: boolean;
	className?: string;
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			axis: 'y',
			loop: true,
			align: 'start',
			containScroll: 'trimSnaps',
			duration: 20000,
		},
		[Autoplay({ delay: 0, stopOnInteraction: false, playOnInit: true, jump: false })]
	);

	const scrollProgress = useRef(0);
	const animationId = useRef<number>(null);
	const isPaused = useRef(false);

	const scroll = useCallback(() => {
		if (!emblaApi || isPaused.current) return;

		const scrollSnaps = emblaApi.scrollSnapList();
		const scrollSpeed = 0.3; // Vitesse de défilement

		if (reverse) {
			scrollProgress.current -= scrollSpeed;
			if (scrollProgress.current < 0) {
				scrollProgress.current = scrollSnaps.length - 1;
			}
		} else {
			scrollProgress.current += scrollSpeed;
			if (scrollProgress.current >= scrollSnaps.length) {
				scrollProgress.current = 0;
			}
		}

		const targetIndex = Math.floor(scrollProgress.current);
		const progress = scrollProgress.current - targetIndex;
		const nextIndex = (targetIndex + 1) % scrollSnaps.length;

		// Interpolation entre deux slides
		const currentSnap = scrollSnaps[targetIndex];
		const nextSnap = scrollSnaps[nextIndex];
		const targetScroll = currentSnap + (nextSnap - currentSnap) * progress;

		emblaApi.scrollTo(targetIndex, false);

		animationId.current = requestAnimationFrame(scroll);
	}, [emblaApi, reverse]);

	useEffect(() => {
		if (!emblaApi) return;

		// Démarrer l'animation
		scroll();

		// Gérer pause au hover
		const viewport = emblaApi.containerNode();

		const handleMouseEnter = () => {
			isPaused.current = true;
			if (animationId.current) {
				cancelAnimationFrame(animationId.current);
			}
		};

		const handleMouseLeave = () => {
			isPaused.current = false;
			scroll();
		};

		viewport.addEventListener('mouseenter', handleMouseEnter);
		viewport.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			if (animationId.current) {
				cancelAnimationFrame(animationId.current);
			}
			viewport.removeEventListener('mouseenter', handleMouseEnter);
			viewport.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [emblaApi, scroll]);

	// Dupliquer les avis pour un défilement infini plus fluide
	const duplicatedReviews = [...reviews, ...reviews, ...reviews];

	return (
		<div className={`embla ${className}`} style={{ height: '700px' }}>
			<div className="embla__viewport h-full" ref={emblaRef}>
				<div className="embla__container flex flex-col h-full">
					{duplicatedReviews.map((review, index) => (
						<div key={`${reverse ? 'reverse' : 'normal'}-${index}`} className="embla__slide flex-shrink-0">
							<ReviewCard
								img={review.photoProfil}
								name={review.titre}
								body={review.description}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
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
		<div className="mt-6 relative flex h-[700px] w-full flex-row items-center justify-center overflow-hidden gap-6 px-3 lg:px-0">
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
				<VerticalCarousel reviews={reviews} className="w-full max-w-[375px]" />
			</div>

			{/* Version desktop - trois colonnes */}
			<div className="hidden md:flex w-full gap-6 justify-center">
				{/* Première colonne - direction normale */}
				<VerticalCarousel reviews={firstRow} className="w-[375px]" />

				{/* Deuxième colonne - direction inversée */}
				<VerticalCarousel reviews={secondRow} reverse={true} className="w-[375px]" />

				{/* Troisième colonne - direction normale */}
				<VerticalCarousel reviews={thirdRow} className="w-[375px]" />
			</div>

			{/* Gradients pour l'effet de fondu */}
			<div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#F9F9F9] dark:from-black"></div>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F9F9F9] dark:from-black"></div>

			<style jsx>{`
          .embla {
              overflow: hidden;
          }
          .embla__viewport {
              overflow: hidden;
          }
          .embla__container {
              display: flex;
              flex-direction: column;
              height: auto;
          }
          .embla__slide {
              flex: 0 0 auto;
          }
			`}</style>
		</div>
	);
}