import React from "react";
import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Howl } from "howler";
import { tracks } from "../../data/track";
import PlayerControls from "../PlayerControls";
import TrackList from "../TrackList";
const Content = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const soundRef = useRef(null);

	const playTrack = (idx) => {
		if (soundRef.current) soundRef.current.stop();
		soundRef.current = new Howl({ src: [tracks[idx].src], html5: true });
		soundRef.current.play();
		setIsPlaying(true);
	};

	const handlePlayPause = () => {
		if (!isPlaying) {
			playTrack(currentIndex);
		} else {
			soundRef.current.pause();
			setIsPlaying(false);
		}
	};
	const handlePrev = () => {
		let idx = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
		setCurrentIndex(idx);
		playTrack(idx);
	};

	const handleNext = () => {
		let idx = (currentIndex + 1) % tracks.length;
		setCurrentIndex(idx);
		playTrack(idx);
	};

	const handleSelect = (idx) => {
		setCurrentIndex(idx);
		playTrack(idx);
	};
	return (
		<div className=" flex flex-col items-center justify-center relative">
			<img
				src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/t-bg.png"
				alt=""
			/>
			<div className="absolute w-full top-0 max-w-2xl bg-(--color-gray3)  p-6">
				<div className="flex items-center gap-4 mb-4">
					<img
						src={tracks[currentIndex].cover}
						alt="cover"
						className="w-20 h-20 rounded-lg relative  object-cover"
					/>
					<button
						onClick={handlePlayPause}
						className="p-2  absolute top-[45px] left-[45px] bg-gray3 rounded-full text-white"
					>
						{isPlaying ? <FaPause size={28} /> : <FaPlay size={28} />}
					</button>
					<div>
						<div className="text-sm text-white">
							{tracks[currentIndex].artist}
						</div>
						<div className="text-lg text-white font-bold">
							{tracks[currentIndex].title}
						</div>

						<PlayerControls onPrev={handlePrev} onNext={handleNext} />
					</div>
				</div>

				<TrackList
					tracks={tracks}
					currentIndex={currentIndex}
					onSelect={handleSelect}
				/>
			</div>
			<div className="flex items-center gap-10 p-10 w-full">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Layer_1"
						x="0px"
						y="0px"
						width="50px"
						height="50px"
						viewBox="0 0 64 64"
						enable-background="new 0 0 64 64"
						xml:space="preserve"
						className="mb-10"
					>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							width="62"
							height="42"
							d="M1 11 L63 11 L63 53 L1 53 Z"
							// style="stroke-dasharray: 208, 210; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M10,31A6,6 0,1,1 22,31A6,6 0,1,1 10,31"
							// style="stroke-dasharray: 38, 40; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M42,31A6,6 0,1,1 54,31A6,6 0,1,1 42,31"
							// style="stroke-dasharray: 38, 40; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M57,53L54,43L32,43L10,43L7,53"
							// style="stroke-dasharray: 65, 67; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							width="55"
							height="4"
							d="M5 15 L60 15 L60 19 L5 19 Z"
							// style="stroke-dasharray: 118, 120; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							width="12"
							height="6"
							d="M26 28 L38 28 L38 34 L26 34 Z"
							// style={"stroke-dasharray: 36, 38; stroke-dashoffset: 0;"}
						></path>
					</svg>
					<p className="uppercase font-semibold mb-5">Management</p>
					<p>
						In ac felis quis tortor malesuada pretium. Praesent ac massa at
						ligula laoreet iaculis. Suspendisse non nisl sit amet velit.
					</p>
				</div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Layer_1"
						x="0px"
						y="0px"
						width="50px"
						height="50px"
						viewBox="0 0 64 64"
						enable-background="new 0 0 64 64"
						xml:space="preserve"
						className="mb-10"
					>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							width="62"
							height="62"
							d="M1 1 L63 1 L63 63 L1 63 Z"
							// style="stroke-dasharray: 248, 250; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M16,10L16,54"
							// style="stroke-dasharray: 44, 46; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M48,10L48,54"
							// style="stroke-dasharray: 44, 46; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M32,10L32,54"
							// style="stroke-dasharray: 44, 46; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M10,14L22,14"
							// style="stroke-dasharray: 12, 14; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M42,50L54,50"
							// style="stroke-dasharray: 12, 14; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M26,32L38,32"
							// style="stroke-dasharray: 12, 14; stroke-dashoffset: 0;"
						></path>
					</svg>
					<p className="uppercase font-semibold mb-5">Production</p>
					<p>
						In ac felis quis tortor malesuada pretium. Praesent ac massa at
						ligula laoreet iaculis. Suspendisse non nisl sit amet velit.
					</p>
				</div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Layer_1"
						x="0px"
						y="0px"
						width="50px"
						height="50px"
						viewBox="0 0 64 64"
						enable-background="new 0 0 64 64"
						xml:space="preserve"
						className="mb-10"
					>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M31,15A14,14 0,1,1 59,15A14,14 0,1,1 31,15"
							// style="stroke-dasharray: 88, 90; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M32,20L6,46L14,54L40,28"
							// style="stroke-dasharray: 85, 87; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M24,28L32,36"
							// style="stroke-dasharray: 12, 14; stroke-dashoffset: 0;"
						></path>
						<path
							fill="none"
							stroke="#000000"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M10,50L6,54L15,63L20,63L42,41L47,46L40,53"
							// style="stroke-dasharray: 72, 74; stroke-dashoffset: 0;"
						></path>
					</svg>
					<p className="uppercase font-semibold mb-5">Promotion</p>
					<p>
						In ac felis quis tortor malesuada pretium. Praesent ac massa at
						ligula laoreet iaculis. Suspendisse non nisl sit amet velit.
					</p>
				</div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Layer_1"
						x="0px"
						y="0px"
						width="50px"
						height="50px"
						viewBox="0 0 64 64"
						enable-background="new 0 0 64 64"
						xml:space="preserve"
						className="mb-10"
					>
						<g>
							<path
								fill="none"
								stroke="#000000"
								strokeWidth="2"
								strokeMiterlimit="10"
								d="M46,30L63,20L63,52L46,42L46,52L1,52L1,20L46,20Z"
								// style="stroke-dasharray: 214, 216; stroke-dashoffset: 0;"
							></path>
							<path
								fill="none"
								stroke="#000000"
								strokeWidth="2"
								strokeMiterlimit="10"
								d="M6,28L10,28"
								// style="stroke-dasharray: 4, 6; stroke-dashoffset: 0;"
							></path>
							<path
								fill="none"
								stroke="#000000"
								strokeWidth="2"
								strokeMiterlimit="10"
								d="M14,28L18,28"
								// style="stroke-dasharray: 4, 6; stroke-dashoffset: 0;"
							></path>
							<path
								fill="none"
								stroke="#000000"
								strokeWidth="2"
								strokeMiterlimit="10"
								width="18"
								height="10"
								d="M7 36 L25 36 L25 46 L7 46 Z"
								// style="stroke-dasharray: 56, 58; stroke-dashoffset: 0;"
							></path>
							<path
								fill="none"
								stroke="#000000"
								strokeWidth="2"
								strokeMiterlimit="10"
								d="M6,12L32,12L40,20"
								// style="stroke-dasharray: 38, 40; stroke-dashoffset: 0;"
							></path>
						</g>
					</svg>
					<p className="uppercase font-semibold mb-5">Videos</p>
					<p>
						In ac felis quis tortor malesuada pretium. Praesent ac massa at
						ligula laoreet iaculis. Suspendisse non nisl sit amet velit.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Content;
