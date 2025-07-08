import Carousel from "./Carousel";

// Images ripped from personal project
const slides = [
	{
		id: "snowbird",
		src: "https://eleoybfdqfvkofziobqc.supabase.co/storage/v1/object/public/resort-photos//Snowbird.jpg",
		title: "Snowbird - Utah",
		text: "Donec mi lorem, commodo quis consectetur sed, tempor a lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus consectetur ex vitae hendrerit. Pellentesque tristique, tortor sit amet ullamcorper placerat, tellus augue malesuada felis, in ullamcorper arcu mi bibendum neque. Ut commodo urna lectus, tristique tincidunt neque feugiat eget. Vivamus facilisis, nisi eget feugiat egestas, nisi sem ornare risus, ut faucibus libero lacus at mi. Pellentesque ut iaculis est, non mollis urna. Donec vitae luctus leo. Quisque quis leo nunc.",
	},
	{
		id: "revelstoke",
		src: "https://eleoybfdqfvkofziobqc.supabase.co/storage/v1/object/public/resort-photos//Revelstoke.jpg",
		title: "Revelstoke - British Columbia",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: "vail",
		src: "https://eleoybfdqfvkofziobqc.supabase.co/storage/v1/object/public/resort-photos//Vail.jpg",
		title: "Vail - Colorado",
		text: "Aenean in eros lobortis, varius lectus efficitur, mattis ligula. Etiam ac vehicula nisi. Ut vel vestibulum magna, nec aliquam orci. Morbi dignissim, metus ut pharetra rutrum, ipsum dolor congue eros, nec molestie diam dui non mauris. Donec sollicitudin mauris vehicula, faucibus ex at, suscipit mauris. Praesent eu bibendum augue, id tincidunt velit. Phasellus vel sapien eget massa gravida congue sed hendrerit ante. Donec semper, est a malesuada fringilla, orci nibh mollis mi, nec gravida arcu eros quis massa. Donec fermentum sollicitudin purus, at tempor ex molestie sit amet. Curabitur lobortis, diam efficitur tincidunt semper, dolor eros semper lorem, vitae fermentum arcu odio et ante. Donec ex libero, blandit porta auctor ac, malesuada vel dolor. Mauris varius sem sit amet erat euismod dignissim. Curabitur condimentum sodales velit, vel vulputate neque rutrum id.",
	},
];

export default function App() {
	return (
		<main className="h-screen w-screen p-12">
			<div className="flex flex-col justify-center items-center mb-2">
				<h2 className="text-2xl font-bold">Carousel Demo App</h2>
			</div>
			<Carousel slides={slides} upperRatio={0.6} />
		</main>
	);
}
