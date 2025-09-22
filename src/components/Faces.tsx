"use client";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function Faces({ logos }: { logos: string[] }) {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
			slidesToScroll: 1,
			containScroll: 'trimSnaps',
			duration: 25000,
			dragFree: true
		},
		[Autoplay({
			delay: 0,
			stopOnInteraction: false,
			stopOnMouseEnter: false,
			playOnInit: true,
			jump: false
		})]
	);

	// Injection des styles personnalisés avec des classes uniques
	React.useEffect(() => {
		const styleSheet = document.createElement("style");
		styleSheet.innerText = `
      .face-shadow {
        box-shadow: 
          0 4px 8px rgba(0, 0, 0, 0.12),
          0 2px 4px rgba(0, 0, 0, 0.08),
          0 1px 2px rgba(0, 0, 0, 0.06);
        transition: box-shadow 0.3s ease;
      }
      .face-shadow:hover {
        box-shadow: 
          0 6px 16px rgba(0, 0, 0, 0.15),
          0 4px 6px rgba(0, 0, 0, 0.12),
          0 2px 4px rgba(0, 0, 0, 0.08);
      }
      .faces-embla__container {
        backface-visibility: hidden;
        display: flex;
        touch-action: pan-y;
      }
      .faces-embla__slide {
        transform: translate3d(0, 0, 0);
        flex: 0 0 auto;
        min-width: 0;
      }
    `;
		document.head.appendChild(styleSheet);
		return () => {
			document.head.removeChild(styleSheet);
		};
	}, []);

	// Multiplier les logos pour assurer un défilement infini fluide
	const extendedLogos = [...logos, ...logos, ...logos];

	return (
		<div className="items-center overflow-hidden mt-10">
			<div className="w-full flex flex-col gap-y-6 mx-auto">
				<div
					className="w-full overflow-hidden"
					style={{
						maskImage: "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
					}}
				>
					<div className="faces-embla" ref={emblaRef}>
						<div className="faces-embla__container pb-2">
							{extendedLogos.map((logo, index) => (
								<div
									key={`${logo}-${index}`}
									className="faces-embla__slide flex-none w-[53px] h-[53px] mr-[16px]"
								>
									<Image
										src={logo}
										alt="Logo"
										width={53}
										height={53}
										className="rounded-full face-shadow w-full h-full object-cover"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Faces;