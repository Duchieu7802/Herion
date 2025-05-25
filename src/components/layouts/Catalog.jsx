import React from "react";

const Catalog = () => {
	return (
		<div className="catalog p-20 block text-center">
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
		</div>
	);
};

export default Catalog;
