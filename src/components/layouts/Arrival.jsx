import React from "react";
import { Counter } from "../Counter";

const Arrival = () => {
	return (
		<div className="text-center mb-20">
			<span className="logo-container block mb-2 text-(--color-gray2) text-7xl font-normal">
				New Arrivals
			</span>
			<h2 className="font-semibold text-3xl uppercase  mb-20">
				Merch Collection
			</h2>
			<div className="flex items-center gap-10 mb-20 p-20 ">
				<div className="flex flex-col items-start ">
					<a href="#">
						<img
							src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/11/PoM_CD.png"
							alt=""
							className="hover:opacity-50 transition-all"
						/>
					</a>
					<div>
						<span className="text-xs opacity-50 font-normal">CD</span>
					</div>
					<div className="grid grid-cols-2 w-full text-start">
						<div>
							<p className="text-base font-semibold uppercase">Product #10</p>
							<p className="text-base font-semibold uppercase">$29.00</p>
						</div>
						<div className="flex items-center w-full justify-end gap-5 ">
							<div className="border border-gray3/20 hover:border-gray3 transition-all rounded-full p-3 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
									/>
								</svg>
							</div>
							<div className="border border-gray3 rounded-full p-3 bg-gray3 text-white ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 "
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start">
					<a href="#">
						<img
							src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/11/void.png"
							alt=""
							className="hover:opacity-50 transition-all"
						/>
					</a>
					<div>
						<span className="text-xs opacity-50 font-normal">CD</span>
					</div>
					<div className="grid grid-cols-2 w-full text-start">
						<div>
							<p className="text-base font-semibold uppercase">Product #9</p>
							<p className="text-base font-semibold uppercase">$29.00</p>
						</div>
						<div className="flex items-center w-full justify-end gap-5 ">
							<div className="border border-gray3/20 hover:border-gray3 transition-all rounded-full p-3 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
									/>
								</svg>
							</div>
							<div className="border border-gray3 rounded-full p-3 bg-gray3 text-white ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 "
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start">
					<a href="#">
						<img
							src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/11/shirt-power-red.png"
							alt=""
							className="hover:opacity-50 transition-all"
						/>
					</a>
					<div>
						<span className="text-xs opacity-50 font-normal">CD</span>
					</div>
					<div className="grid grid-cols-2 w-full text-start">
						<div>
							<p className="text-base font-semibold uppercase">Product #8</p>
							<p className="text-base font-semibold uppercase">$29.00</p>
						</div>
						<div className="flex items-center w-full justify-end gap-5 ">
							<div className="border border-gray3/20 hover:border-gray3 transition-all rounded-full p-3 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
									/>
								</svg>
							</div>
							<div className="border border-gray3 rounded-full p-3 bg-gray3 text-white ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 "
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a
				href="#"
				className="px-7 py-3 font-semibold  border border-black-200 uppercase text-xs"
			>
				View more Products
			</a>
			<div className=" mt-20 w-full relative">
				<img
					src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/396684-2048x1152.jpg"
					alt=""
					className="w-full max-h-[420px]  object-cover"
				/>
				<div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex gap-x-20 items-center justify-center">
					<div className="px-10">
						<p>
							<Counter end={14} duration={3} />
						</p>
						<p className="text-white font-semibold uppercase text-2xl">
							Artists
						</p>
					</div>
					<div className="px-10">
						<p>
							<Counter end={75} duration={3} />
						</p>
						<p className="text-white font-semibold uppercase text-2xl">
							Releases
						</p>
					</div>
					<div className="px-10">
						<p>
							<Counter end={621} duration={3} />
						</p>
						<p className="text-white font-semibold uppercase text-2xl">
							Tracks
						</p>
					</div>
					<div className="px-10">
						<p>
							<Counter end={75} duration={3} />
						</p>
						<p className="text-white font-semibold uppercase text-2xl">
							Releases
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Arrival;
