import * as React from "react"

import ScrollItem from '../components/ScrollItem'

function Scroll() {
	return (
		<div className="outer-scroll-container ">
			<div className="inner-scroll-container flex flex-nowrap">
				<ScrollItem /> 
				<div className="scroll-item bg-black text-white text-9xl flex justify-center items-center">2</div>   
				<div className="scroll-item bg-black text-white text-9xl flex justify-center items-center">3</div>   
				<div className="scroll-item bg-black text-white text-9xl flex justify-center items-center">4</div>   
				<div className="scroll-item bg-black text-white text-9xl flex justify-center items-center">5</div>   
				<div className="scroll-item bg-black text-white text-9xl flex justify-center items-center">6</div>   
				<div className="scroll-item bg-black text-white text-9xl flex justify-center items-center">7</div>   
				<div className="scroll-item bg-black text-white text-9xl flex justify-center items-center">8</div>   
				<div className="scroll-item bg-black text-white text-9xl flex justify-center items-center">9</div>   
				<div className="scroll-item bg-black text-white text-9xl flex justify-center items-center">10</div>   
			</div>
		</div>
	);
}

export default Scroll;
