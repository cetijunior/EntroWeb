// src/pages/About.jsx
import BG from "../components/BG";
import CTA from "../components/CTA";
import AboutHero from "../sections/AboutHero";
import AboutMission from "../sections/AboutMission";
import AboutTeam from "../sections/AboutTeam";

export default function About() {
	return (
		<div className="relative min-h-screen w-full bg-white/60 -mt-16">
			{/* Background Overlay */}
			<div className="absolute inset-0 -z-20 opacity-70">
				<BG centerText="EntroWeb" subtitle="Digital Marketing Solutions" />
			</div>

			{/* Page Sections */}
			<main className="relative z-10 w-full mx-auto pt-10">
				<AboutHero />
				<AboutMission />
				<AboutTeam />
				<CTA />
			</main>
		</div>
	);
}
