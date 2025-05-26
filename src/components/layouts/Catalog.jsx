import React from "react";

const Catalog = () => {
	return (
		<div className="catalog  block text-center mb-20">
			<span className="logo-container block mb-2 text-(--color-gray2) text-7xl font-normal">
				Catalog
			</span>
			<h2 className="font-semibold text-3xl uppercase mb-20">
				Featured Releases
			</h2>
			<div className="flex items-center  w-full  mb-20 justify-evenly pr-30 ">
				<div className="relative w-[300px] h-[300px]">
					<img
						src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/mix-415x415.jpg"
						alt=""
						className="w-full h-full object-cover absolute left-0 top-0 z-10 "
					/>
					<div className=" disc absolute top-[1%] left-[1%] size-[98%] rounded-[50%] z-0	">
						<img
							src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/mix-415x415.jpg"
							alt=""
							className="w-[40%] h-[40%] absolute top-[30%] left-[30%] translate3d "
						/>
						<div className="absolute w-full h-full top-0 left-0 disc-vinyl"></div>
					</div>
				</div>
				<div className="relative w-[300px] h-[300px]">
					<img
						src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/trip-415x415.jpg"
						alt=""
						className="w-full h-full object-cover absolute left-0 top-0 z-10 "
					/>
					<div className=" disc absolute top-[1%] left-[1%] size-[98%] rounded-[50%] z-0	">
						<img
							src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/trip-415x415.jpg"
							alt=""
							className="w-[40%] h-[40%] absolute top-[30%] left-[30%] translate3d "
						/>
						<div className="absolute w-full h-full top-0 left-0 disc-vinyl "></div>
					</div>
				</div>
				<div className="relative w-[300px] h-[300px]">
					<img
						src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/drai_baka-415x415.jpg"
						alt=""
						className="w-full h-full object-cover absolute left-0 top-0 z-10 "
					/>
					<div className=" disc absolute top-[1%] left-[1%] size-[98%] rounded-[50%] z-0	">
						<img
							src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/drai_baka-415x415.jpg"
							alt=""
							className="w-[40%] h-[40%] absolute top-[30%] left-[30%] translate3d "
						/>
						<div className="absolute w-full h-full top-0 left-0 disc-vinyl"></div>
					</div>
				</div>
			</div>
			<a
				href="#"
				className="px-7 py-3 font-semibold  border border-black-200 uppercase text-xs"
			>
				View more Releases
			</a>
			<div className="grid grid-cols-2 w-full max-w-screen mt-20">
				<div>
					<img
						src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/guillaume-de-germain-UdB_8NYVAdg-unsplash.jpg"
						alt=""
					/>
				</div>
				<div className="relative original-bg ">
					<div className="absolute top-[20%] left-[20%] flex flex-col  items-start max-w-[600px]">
						<span className="logo-container block mb-2 text-(--color-gray2) text-7xl font-normal">
							Underground
						</span>
						<p className="font-bold text-2xl uppercase mb-10">
							An Independent Label
						</p>
						<p className="text-start mb-10">
							Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
							enim. Ut non enim eleifend felis pretium feugiat. Praesent
							porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor,
							a pretium mi sem ut ipsum. Integer ante arcu, accumsan a,
							consectetuer eget, posuere ut, mauris. Quisque rutrum.
						</p>
						<button
							type="button"
							className="bg-black text-whỉte uppercase font-normal text-base p-5"
						>
							<a href="#" className="text-white text-base font-normal ">
								Learn More
							</a>
						</button>
					</div>
				</div>
				<div className="relative original-bg ">
					<div className="absolute top-[20%] left-[20%] flex flex-col  items-start max-w-[600px]">
						<span className="logo-container block mb-2 text-(--color-gray2) text-7xl font-normal">
							Original
						</span>
						<p className="font-bold text-2xl uppercase mb-10">
							Talented Artists
						</p>
						<p className="text-start mb-10">
							Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
							enim. Ut non enim eleifend felis pretium feugiat. Praesent
							porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor,
							a pretium mi sem ut ipsum. Integer ante arcu, accumsan a,
							consectetuer eget, posuere ut, mauris. Quisque rutrum.
						</p>
						<button
							type="button"
							className="bg-black text-whỉte uppercase font-normal text-base p-5"
						>
							<a href="#" className="text-white text-base font-normal ">
								Learn More
							</a>
						</button>
					</div>
				</div>
				<div className="w-[846px]">
					<video
						src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/The-Fear-Music-Video-online-video-cutter.com_.mp4 "
						autoPlay={true}
						loop={true}
						preload="auto"
						className="w-full"
					></video>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
