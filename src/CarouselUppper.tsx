type CarouselUppperProps = { height: string; src: string; title: string };

const CarouselUppper = ({ height, src, title }: CarouselUppperProps) => {
	return (
		<div style={{ height }} className="w-full overflow-hidden rounded-2xl">
			<img src={src} alt={title} className="w-full h-full object-cover" />
		</div>
	);
};

export default CarouselUppper;
