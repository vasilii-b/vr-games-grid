import React from "react";

interface VideoPlayerProps {
	src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
	return (
		<video
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
