import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import React from "react";
export default function PlayerControls({ onPrev, onNext }) {
	return (
		<div className="flex items-center text-white gap-4">
			<button onClick={onPrev}>
				<FaStepBackward size={24} />
			</button>
			<button onClick={onNext}>
				<FaStepForward size={24} />
			</button>
		</div>
	);
}
