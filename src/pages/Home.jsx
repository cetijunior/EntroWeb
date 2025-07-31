import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Brands from "../sections/Brands";
import Testimonials from "../sections/Testimonials";
import News from "../sections/News";
import Contact from "../sections/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Brands />
            {/* <Testimonials /> */}
            <News />
            <Contact />
        </>
    );
}
