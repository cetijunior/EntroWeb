import { useTranslation } from "react-i18next";
import BG from "../components/BG";
import CTA from "../components/CTA";
import ProjectsHero from "../sections/projects/ProjectsHero";
import ProjectsGrid from "../sections/projects/ProjectsGrid";

const Projects = () => {
	const { t } = useTranslation("projects");

	return (
		<div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 pt-16">
			{/* Background Component */}
			<div className="absolute inset-0 -z-20 opacity-70 h-full">
				<BG centerText="EntroWeb" subtitle="Digital Marketing Solutions" />
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16">
				<ProjectsHero />
				<ProjectsGrid />
				<CTA />
			</div>
		</div>
	);
};

export default Projects;
