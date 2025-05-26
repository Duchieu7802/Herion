import React from "react";
import {
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaSpotify,
	FaYoutube,
} from "react-icons/fa";
const listItems = [
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-14_14-32-30_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-14_14-28-35_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-14_14-26-12_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-14_09-11-48_UTC.jpg ",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-14_09-09-16_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-13_23-29-10_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-13_23-16-43_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-13_23-08-42_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-13_23-06-53_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-13_23-03-09_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-13_22-57-07_UTC.jpg",
	},
	{
		img: "https://preview-v2-wolfthemes.b-cdn.net/app/plugins/wolf-sb-instagram-fallback/theme-images/music-default/2016-09-13_22-55-43_UTC.jpg",
	},
];
const Contact = () => {
	return (
		<div>
			<div className="grid grid-cols-6">
				{listItems.map((item, index) => (
					<div key={index} className="relative insta  text-white">
						<a href="#">
							<img src={item.img} alt="" />
						</a>
						<FaInstagram className="absolute insta-hover transition-all"></FaInstagram>
					</div>
				))}
			</div>
			<div className="bg-black p-10  text-white">
				<div className="flex items-center justify-center gap-x-30 w-full mb-20">
					<div>
						<p className="text-xl font-semibold uppercase mb-5">Stay Tuned</p>
						<p>herion@wolfthemes.com</p>
						<p className="mb-5">(485) 209-5175</p>
						<div className="flex items-center justify-center gap-x-5">
							<FaInstagram className=" "></FaInstagram>
							<FaFacebook></FaFacebook>
							<FaTwitter></FaTwitter>
							<FaSpotify></FaSpotify>
							<FaYoutube></FaYoutube>
						</div>
					</div>
					<div className="max-w-[550px] flex flex-col items-center">
						<img
							src="https://preview-v2-wolfthemes.b-cdn.net/app/uploads/sites/31/2019/10/logo_light-1-160x108.png"
							alt=""
							className=""
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					<div>
						<p className="text-xl font-semibold uppercase mb-5">My Account</p>
						<p>Shipping & Returns</p>
						<p>Privacy Policy</p>
						<p>Contact</p>
					</div>
				</div>
				<div className="flex items-center gap-x-10 w-full justify-center ">
					<p>© 2025 WolfThemes Records</p>
					<a href="">Privacy Policy</a>
					<a href="">Terms of Use </a>
					<a href="">Press</a>
					<a href="">Careers</a>
					<a href="">Contact Us </a>
					<a href="">Cookie Policy</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
