import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import CarouselUppper from "./CarouselUppper";
import CarouselLower from "./CarouselLower";

type Slide = {
	id: string;
	src: string;
	title: string;
	text: string;
};

type CarouselProps = {
	slides: Slide[];
	upperRatio?: number; // 0 – 1
	dotSize?: number; // px
};

export default function Carousel({
	slides,
	upperRatio = 0.6,
	dotSize = 24,
}: CarouselProps) {
	const [index, setIndex] = useState(0);

	const upperHeight = `${upperRatio * 100}%`;
	const lowerHeight = `${(1 - upperRatio) * 100}%`;

	const Dots = () => (
		<div className="flex gap-3 justify-center items-center">
			{slides.map((_, i) => (
				<button
					key={i}
					aria-label={`Slide ${i + 1}`}
					onClick={() => setIndex(i)}
					style={{ width: dotSize, height: dotSize, cursor: "pointer" }}
					className={`rounded-full transition ${
						i === index ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
					}`}
				/>
			))}
		</div>
	);

	return (
		<div className="flex flex-col h-full w-full overflow-hidden p-12 border-2 rounded-2xl">
			<SwipeableViews
				index={index}
				onChangeIndex={setIndex}
				enableMouseEvents
				containerStyle={{ height: "100%" }}
			>
				{slides.map(({ id, src, title, text }) => (
					<div key={id} className="flex flex-col h-full ">
						<CarouselUppper height={upperHeight} src={src} title={title} />
						<div className="m-8 flex items-center justify-center">
							<Dots />
						</div>
						<CarouselLower height={lowerHeight} title={title} text={text} />
					</div>
				))}
			</SwipeableViews>
		</div>
	);
}
