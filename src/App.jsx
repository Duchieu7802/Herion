import { NavLink } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const menuItems = [
	{
		title: "Home",
	},
	{
		title: "pages",
	},
	{
		title: "releases",
	},
	{
		title: "artists",
	},
	{
		title: "event",
	},
	{
		title: "videos",
	},
	{
		title: "shop",
	},
	{
		title: "blog",
	},
	{
		title: "elements",
	},
];
function Header({ menuOpen, setMenuOpen }) {
	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className="fixed top-0 left-0 text-white w-full z-50 px-6 lg:px-10">
			<div className="flex flex-wrap justify-between items-center w-full bg-transparent pt-4">
				<a href="#" className="flex items-center">
					<span className="logo-container dark:text-white ">H</span>
				</a>
				<div className="flex items-center lg:order-2 text-white">
					<a
						href="#"
						className=" dark:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
					>
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
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>
					</a>
					<a
						href="#"
						className=" dark:text-white  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
					>
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
					</a>
					<a
						href="#"
						className=" dark:text-white   font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
					>
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
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
							/>
						</svg>
					</a>
					<button
						onClick={toggleMenu}
						type="button"
						className=" cursor-pointer inline-flex items-center p-2 ml-1 text-sm rounded-lg  focus:outline-none  "
						aria-controls="mobile-menu"
						aria-expanded={menuOpen}
					>
						<span className="sr-only">Open main menu</span>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					className={`${
						menuOpen ? "" : "hidden"
					} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
					id="mobile-menu"
				>
					<ul className="flex flex-col gap-x-12 justify-between gap-5 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
						{menuItems.map((item, index) => (
							<li key={index}>
								<a
									href="#"
									className="custom-hover relative inline-block font-bold uppercase"
									aria-current="page"
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<>
			<header>
				<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<div>
					<Swiper
						cssMode={true}
						navigation={true}
						pagination={false}
						mousewheel={true}
						keyboard={true}
						modules={[Navigation, Pagination, Mousewheel, Keyboard]}
						className="mySwiper"
					>
						<SwiperSlide>
							<img src="./singer.jpg" alt="" />
							<div className="text">
								<p className="logo-container">Record Label</p>
								<h2>A home for creative music artists</h2>
								<span>
									Vestibulum ullamcorper mauris at ligula. Donec mi odio,
									faucibus at, scelerisque quis, convallis in, nisi. Vestibulum
									suscipit nulla quis orci.{" "}
								</span>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<img src="./dj.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<img src="./guitar.jpg" alt="" />
						</SwiperSlide>
					</Swiper>
				</div>
			</header>
		</>
	);
}

export default App;
