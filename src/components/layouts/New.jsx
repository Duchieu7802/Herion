import React from "react";
import PostCard from "../PostCard";

const New = () => {
	return (
		<div className="text-center mb-20">
			<span className="logo-container block mb-2 text-(--color-gray2) text-7xl font-normal">
				What's Up
			</span>
			<h2 className="font-semibold text-3xl uppercase  mb-20">Latest News</h2>
			<div className="p-20">
				<PostCard></PostCard>
			</div>
			<a
				href="#"
				className="px-7 py-3 font-semibold  border border-black-200 uppercase text-xs"
			>
				View more Posts
			</a>
		</div>
	);
};

export default New;
