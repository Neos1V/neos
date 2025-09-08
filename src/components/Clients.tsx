"use client";
import { HomeClient } from "@/sanity/lib/type";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function Clients({ clients }: { clients: HomeClient[] }) {
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
			playOnInit: true,
			jump: false
		})]
	);

	return (
		<div className="w-full overflow-hidden">
			<div className="embla" ref={emblaRef}>
				<div className="embla__container flex">
					{clients.map((data, index) => (
						<div
							key={index}
							className="embla__slide flex-none w-[200px] h-[340px] md:w-[265px] md:h-[465px] mr-[16px] md:mr-[32px]"
						>
							<div className="relative w-full h-full">
								<Image
									src={data.image}
									alt="Logo"
									width={265}
									height={465}
									className="w-full h-full object-cover rounded-[24px] border-[5px] border-white"
								/>

								<div className="absolute bg-white top-3.5 left-3.5 lg:top-6 lg:left-6 flex items-center gap-1 py-1 px-2 rounded-full font-semibold border border-[#EFEFEF]">
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="8"
											cy="8"
											r="7.75"
											fill="#F26940"
											fillOpacity="0.2"
										/>
										<path
											d="M10.5803 7.63533C10.4754 7.49856 10.3478 7.38004 10.2293 7.26151C9.92381 6.98798 9.57734 6.79195 9.28557 6.50474C8.60631 5.83915 8.45587 4.74048 8.88896 3.89709C8.45587 4.00195 8.07749 4.23901 7.75381 4.49886C6.57307 5.44709 6.10807 7.12018 6.66425 8.55621C6.68249 8.6018 6.70072 8.64739 6.70072 8.70665C6.70072 8.80695 6.63234 8.89812 6.54116 8.93459C6.43631 8.98018 6.3269 8.95283 6.24028 8.87989C6.21441 8.85821 6.19277 8.83194 6.17646 8.80239C5.66131 8.15048 5.57925 7.21592 5.92572 6.46827C5.1644 7.08827 4.74955 8.1368 4.80881 9.12606C4.83616 9.35401 4.86352 9.58195 4.94102 9.80989C5.00484 10.0834 5.12793 10.3569 5.26469 10.5986C5.75705 11.3872 6.60955 11.9525 7.52587 12.0665C8.50146 12.1896 9.54543 12.0118 10.2931 11.3371C11.1273 10.5803 11.4191 9.36768 10.9906 8.32827L10.9313 8.20974C8.8356 8.00004 10.5803 7.63533 10.5803 7.63533ZM9.13969 10.5074C9.01204 10.6168 8.80234 10.7353 8.63822 10.7809C8.12763 10.9633 7.61705 10.708 7.31616 10.4071C7.85866 10.2794 8.18234 9.87827 8.27807 9.47254C8.35557 9.10783 8.20969 8.80695 8.15043 8.45592C8.09572 8.11857 8.10484 7.83136 8.22793 7.5168C8.31455 7.69004 8.40572 7.86327 8.51513 8.00004C8.86616 8.45592 9.41778 8.65651 9.53631 9.27651C9.55454 9.34033 9.56366 9.40415 9.56366 9.47254C9.57734 9.84636 9.41322 10.2567 9.13969 10.5074Z"
											fill="#F26940"
										/>
									</svg>
									<p className="text-[10px] lg:text-xs ">{data.prix}</p>
								</div>

								<div className="absolute bottom-6 left-6 flex flex-col z-10">
                  <span className="text-white text-[10px] lg:text-xs font-semibold py-0 mb-2 px-2 rounded-full border-[#548CEA] border w-fit bg-gradient-to-r from-[#0051D2] to-[#2978FE]">
                    {data.job}
                  </span>
									<p className="text-sm lg:text-xl font-medium text-white">
										{data.nom}
									</p>
									<div className="text-[10px] lg:text-sm [&>p]:text-white mt-2">
										<PortableText value={data.description} />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Clients;