import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Brands from "../sections/Brands";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Blog from "../sections/Blog";

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
