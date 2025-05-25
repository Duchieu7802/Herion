import TrackItem from "./TrackItems";
import React from "react";
export default function TrackList({ tracks, currentIndex, onSelect }) {
	return (
		<div className=" rounded-lg overflow-hidden">
			{tracks.map((track, idx) => (
				<TrackItem
					key={track.title}
					track={track}
					isActive={idx === currentIndex}
					onClick={() => onSelect(idx)}
				/>
			))}
		</div>
	);
}
