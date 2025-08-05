import Hero from "../sections/home/Hero";
import Services from "../sections/home/Services";
import Brands from "../sections/home/Brands";
// import Testimonials from "../sections/home/Testimonials";
import Contact from "../sections/contact/Contact";
import Blog from "../sections/home/Blog";

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<Brands />
			{/* <Testimonials /> */}
			<Blog />
			<Contact />
		</>
	);
}
