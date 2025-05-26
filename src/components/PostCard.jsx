import React from "react";
const posts = [
	{
		label: "News",
		image:
			"https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/11/joseph-young-IOzGybDmKR8-unsplash.jpg",
		title: "Gallery Post",
		date: "July 16, 2018",
		excerpt:
			"Sed lectus. Etiam ut purus mattis mauris sodales aliquam. Curabitur...",
	},
	{
		label: "Photo",
		image:
			"https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/11/frankie-cordoba-8veCmZCBltk-unsplash.jpg",
		title: "Featured Playlist",
		date: "February 17, 2018",
		excerpt:
			"Sed lectus. Etiam ut purus mattis mauris sodales aliquam. Curabitur...",
	},
	{
		label: "News",
		image:
			"https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/11/jan-strecha-tSnAnpRlDqw-unsplash.jpg",
		title: "Standard Post",
		date: "February 16, 2018",
		excerpt:
			"Sed lectus. Etiam ut purus mattis mauris sodales aliquam. Curabitur...",
	},
	{
		label: "Video",
		image:
			"https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/474050780_640-600x338.jpg",
		title: "Video Post",
		date: "February 16, 2018",
		excerpt:
			"Sed lectus. Etiam ut purus mattis mauris sodales aliquam. Curabitur...",
	},
];
function PostCard2({ label, image, title, date, excerpt }) {
	return (
		<div className="bg-white flex flex-col w-[300px] ">
			<div className="flex">
				<span
					className="
           uppercase [writing-mode:sideways-lr] text-sm font-medium
          "
				>
					{label}
				</span>
				<img
					src={image}
					alt={title}
					className="w-[260px] h-[170px] object-cover"
				/>
			</div>
			<div className="p-5 flex flex-col flex-1 text-start">
				<h3 className="font-bold text-lg mb-1">{title}</h3>
				<div className="uppercase text-xs text-gray-500 mb-3">{date}</div>
				<p className="text-gray-500 text-sm mb-5 flex-1">{excerpt}</p>
				<a
					href="#"
					className="uppercase text-xs font-semibold  border-b border-black w-fit "
				>
					Read More
				</a>
			</div>
		</div>
	);
}
const PostCard = () => {
	return (
		<div className=" flex items-start justify-center pt-10">
			<div className="flex gap-8">
				{posts.map((post, idx) => (
					<PostCard2 key={idx} {...post} />
				))}
			</div>
		</div>
	);
};

export default PostCard;
