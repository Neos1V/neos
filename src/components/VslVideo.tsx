import React, { useEffect } from 'react';
import Head from 'next/head';

interface WistiaPlayerProps {
	mediaId: string;
	aspectRatio?: number;
	className?: string;
}

const VslVideo: React.FC<WistiaPlayerProps> = ({
																										 mediaId,
																										 aspectRatio = 1.7777777777777777,
																										 className = ''
																									 }) => {
	useEffect(() => {
		// Charger le script spécifique à la vidéo
		const specificScript = document.createElement('script');
		specificScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
		specificScript.async = true;
		specificScript.type = 'module';
		document.head.appendChild(specificScript);

		// Cleanup function pour retirer le script lors du démontage
		return () => {
			const existingScript = document.querySelector(`script[src="https://fast.wistia.com/embed/${mediaId}.js"]`);
			if (existingScript) {
				document.head.removeChild(existingScript);
			}
		};
	}, [mediaId]);

	return (
		<>
			<Head>
				{/* Script principal Wistia */}
				<script
					src="https://fast.wistia.com/player.js"
					async
				/>
			</Head>

			<style jsx>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: ${(100 / aspectRatio).toFixed(4)}%;
        }
      `}</style>

			<wistia-player
				media-id={mediaId}
				aspect={aspectRatio.toString()}
				className={className}
			/>
		</>
	);
};

export default VslVideo;