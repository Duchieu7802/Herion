// src/components/TrackItem.js
import { FaApple, FaSpotify, FaShoppingCart } from "react-icons/fa";
import React from "react";
export default function TrackItem({ track, isActive, onClick }) {
	return (
		<div
			className={`flex  text-white text-xs justify-between items-center px-4 py-4 border-b-2 border-(--color-black2) cursor-pointer ${
				isActive ? " " : "hover:bg-(--color-black1)"
			}`}
			onClick={onClick}
		>
			<div>
				<div className="font-semibold">{track.title}</div>
				<div className="text-xs text-gray-400">{track.artist}</div>
			</div>
			<div className="flex items-center gap-2">
				<FaApple />
				<FaSpotify />
				<FaShoppingCart />
				<span className="ml-4 text-xs">{track.duration}</span>
			</div>
		</div>
	);
}
