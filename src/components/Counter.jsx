import { useEffect, useState } from "react";
import React from "react";
export function Counter({ end, duration = 100 }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const increment = end / (duration * 60);
		const step = () => {
			start += increment;
			if (start < end) {
				setCount(Math.ceil(start));
				requestAnimationFrame(step);
			} else {
				setCount(end);
			}
		};
		step();
	}, [end, duration]);

	return <span className="logo-container text-7xl text-white">{count}</span>;
}
