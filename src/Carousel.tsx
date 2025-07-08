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
	dotSize?: number;
};

type DotsProps = {
	activeIndex: number;
	dotSize: number;
	setIndex: React.Dispatch<React.SetStateAction<number>>;
	slides: Slide[];
};

const Dots = ({ slides, activeIndex, setIndex, dotSize }: DotsProps) => (
	<div className="flex gap-3 justify-center items-center">
		{slides.map((_, i) => (
			<button
				key={i}
				aria-label={`Slide ${i + 1}`}
				onClick={() => setIndex(i)}
				style={{ width: dotSize, height: dotSize, cursor: "pointer" }}
				className={`rounded-full transition ${
					i === activeIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
				}`}
			/>
		))}
	</div>
);

export default function Carousel({ slides, dotSize = 24 }: CarouselProps) {
	const [index, setIndex] = useState(0);
	const [upperRatio, setUpperRatio] = useState(0.6);

	const upperHeight = `${upperRatio * 100}%`;
	const lowerHeight = `${(1 - upperRatio) * 100}%`;

	return (
		<div className="flex flex-col h-full w-full overflow-hidden p-12 border-2 rounded-2xl items-center">
			<div className="flex flex-row gap-8 py-4 items-center">
				<label htmlFor="ratio">{`Enter Upper Ratio (decimal between 0 - 1)`}</label>
				<input
					className="border-2 rounded-md p-1"
					type="number"
					placeholder="0-1"
					min="0"
					max="1"
					step=".1"
					name="ratio"
					defaultValue={upperRatio}
					onChange={(e) => {
						const val = parseFloat(e.target.value);
						setUpperRatio(val);
					}}
				/>
			</div>
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
							<Dots
								slides={slides}
								activeIndex={index}
								setIndex={setIndex}
								dotSize={dotSize}
							/>
						</div>
						<CarouselLower height={lowerHeight} title={title} text={text} />
					</div>
				))}
			</SwipeableViews>
		</div>
	);
}
