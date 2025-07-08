type CarouselLowerProps = { height: string; title: string; text: string };

const CarouselLower = ({ height, title, text }: CarouselLowerProps) => {
	return (
		<div style={{ height }} className="overflow-auto">
			<div className="px-6 py-4 flex flex-col justify-center items-center">
				<h3 className="text-xl font-semibold mb-1">{title}</h3>
				<p className="text-gray-600">{text}</p>
			</div>
		</div>
	);
};

export default CarouselLower;
