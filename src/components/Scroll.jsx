import * as React from "react"
import ScrollItem from '../components/ScrollItem'

const speakers = [
	{
		speaker: 'Test Name',
		img: 'speaker1'
	},
	{
		speaker: 'Test 2',
		img: 'speaker2'
	},
	{
		speaker: 'Test 3',
		img: 'speaker3'
	}
]

const scrolls = [];

speakers.forEach((speaker) => {
	scrolls.push(<ScrollItem speaker={speaker} />);
})

function Scroll() {
	return (
		<div className="outer-scroll-container">
			<div className="inner-scroll-container flex flex-nowrap">
				{scrolls}
			</div>
		</div>
	);
}

export default Scroll;
