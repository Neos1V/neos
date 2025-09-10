"use client"

export default function VslVideo() {
	return (
		<div className="w-[95%] mx-auto lg:w-3/4 lg:mx-auto relative z-20 mb-8 lg:mb-0">
			<div className="wistia_responsive_padding" style={{padding: "56.25% 0 0 0", position: "relative"}}>
				<div className="wistia_responsive_wrapper" style={{height: "100%", left: 0, position: "absolute", top: 0, width: "100%"}}>
					<iframe
						src="https://fast.wistia.net/embed/iframe/70ntres3gl?web_component=true&seo=true"
						title="VSL NEOS V5 Video"
						allow="autoplay; fullscreen"
						frameBorder={0}
						scrolling="no"
						className="wistia_embed"
						name="wistia_embed"
						width="100%"
						height="100%"
					/>
				</div>
			</div>
			<script src="https://fast.wistia.net/player.js" async></script>
		</div>
	)
}
