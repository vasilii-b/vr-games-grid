import React, { useRef, useEffect } from "react";
import { isMobileDevice } from "@/lib/utils";

interface VideoPlayerProps {
	src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		// Detect if the device is mobile
		if (!isMobileDevice()) return;

		const requestFullscreen = async () => {
			try {
				// Request fullscreen when video starts playing on mobile
				if (video.requestFullscreen) {
					await video.requestFullscreen();
				} else if ((video as any).webkitEnterFullscreen) {
					// iOS Safari specific
					(video as any).webkitEnterFullscreen();
				}
			} catch (error) {
				// Silently fail if fullscreen is not available or denied
				console.log("Fullscreen request failed:", error);
			}
		};

		// Attempt fullscreen when the video starts playing
		video.addEventListener("play", requestFullscreen);

		return () => {
			video.removeEventListener("play", requestFullscreen);
		};
	}, []);

	return (
		<video
			ref={videoRef}
			className="w-full h-full object-cover"
			src={src}
			controls
			autoPlay
			playsInline
			preload="metadata"
		/>
	);
};

export default VideoPlayer;
