"use client";
import Image from "next/image";
import React from "react";

function Logos({ logos }: { logos: string[] }) {
	// Tripler les logos pour un scroll vraiment infini
	const tripleLogos = [...logos, ...logos];

	return (
		<div className="py-8 lg:py-12 items-center overflow-hidden">
			<div className="w-full max-w-6xl flex flex-col gap-y-6 mx-auto">
				<div
					className="max-w-full overflow-hidden h-[80px] relative"
					style={{
						maskImage: "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
					}}
				>
					<div className="absolute top-0 left-0 flex items-center h-full animate-scroll">
						{tripleLogos.map((logo, index) => (
							<div
								key={`${logo}-${index}`}
								className="min-w-[90px] lg:min-w-[160px] flex-none flex items-center justify-center"
								style={{
									minWidth: "160px",
									height: "60px",
									marginRight: "80px",
								}}
							>
								<Image
									src={logo}
									alt="Logo"
									width={140}
									height={50}
									className="max-w-full max-h-full object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
          @keyframes scroll {
              0% {
                  transform: translateX(0);
              }
              100% {
                  transform: translateX(calc(-100% / 3));
              }
          }

          .animate-scroll {
              animation: scroll 30s linear infinite reverse;
              width: calc((160px + 80px) * ${tripleLogos.length});
          }

          .animate-scroll:hover {
              animation-play-state: paused;
          }
			`}</style>
		</div>
	);
}

export default Logos;