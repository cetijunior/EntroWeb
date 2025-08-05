import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProjectsGrid = () => {
	const { t } = useTranslation("projectsP");
	const [projects, setProjects] = useState([]);

	// Static project data (replace with API fetch if available)
	const staticProjects = [
		{
			name: t("project1.name"),
			category: t("project1.category"),
			bgColor: "bg-gray-900",
		},
		{
			name: t("project2.name"),
			category: t("project2.category"),
			bgColor: "bg-teal-600",
		},
		{
			name: t("project3.name"),
			category: t("project3.category"),
			bgColor: "bg-yellow-400",
		},
		{
			name: t("project4.name"),
			category: t("project4.category"),
			bgColor: "bg-gray-800",
		},
	];

	useEffect(() => {
		// Placeholder for API fetch (e.g., from WordPress)
		// fetch("https://entroweb.com/wp-json/wp/v2/projects?_embed")
		//   .then((res) => res.json())
		//   .then((data) =>
		//     setProjects(
		//       data.map((project) => ({
		//         name: project.title.rendered,
		//         category: project.acf.category || "General",
		//         bgColor: "bg-gray-800",
		//         image: project._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
		//       }))
		//     )
		//   )
		//   .catch(() => setProjects(staticProjects));
		setProjects(staticProjects); // Use static data for now
	}, [t]);

	const fadeInUp = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	};

	return (
		<motion.section
			initial="hidden"
			animate="visible"
			variants={staggerContainer}
			className="mb-16"
		>
			<motion.div variants={fadeInUp} className="mb-12">
				<h2 className="text-white text-sm font-medium tracking-wider uppercase mb-6 opacity-80">
					{t("projects.badge")}
				</h2>
				<h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl">
					{t("projects.title")}
				</h1>
				<p className="text-lg text-white opacity-80 max-w-3xl mt-4">
					{t("projects.subheadline")}
				</p>
			</motion.div>

			<motion.div
				variants={staggerContainer}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
			>
				{projects.map((project, index) => (
					<Link
						key={project.name}
						to={`/projects/${project.name.toLowerCase()}`}
						className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
					>
						<div
							className={`relative overflow-hidden rounded-lg ${project.bgColor} aspect-[4/3]`}
						>
							{/* Placeholder Graphics (matching BrandSection) */}
							<div className="w-full h-full flex items-center justify-center">
								{project.name === t("project1.name") && (
									<div className="grid grid-cols-3 gap-2 p-8">
										{[...Array(9)].map((_, i) => (
											<div key={i} className="w-12 h-12 bg-black rounded"></div>
										))}
									</div>
								)}
								{project.name === t("project2.name") && (
									<div className="relative">
										<div className="w-32 h-20 bg-teal-800 rounded-lg transform rotate-12"></div>
										<div className="w-32 h-20 bg-teal-900 rounded-lg absolute top-2 left-2 transform -rotate-6"></div>
									</div>
								)}
								{project.name === t("project3.name") && (
									<div className="flex items-center space-x-4">
										<div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
											<span className="text-white font-bold text-lg">f</span>
										</div>
										<div className="text-white">
											<div className="w-20 h-4 bg-white rounded mb-2"></div>
											<div className="w-16 h-3 bg-white rounded opacity-70"></div>
										</div>
									</div>
								)}
								{project.name === t("project4.name") && (
									<div className="relative">
										<div className="w-24 h-32 bg-white rounded-lg flex items-center justify-center">
											<span className="text-black text-4xl font-bold">A</span>
										</div>
									</div>
								)}
							</div>
							<div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div className="flex justify-between items-center mt-4">
							<h3 className="text-white text-xl font-medium">{project.name}</h3>
							<span className="text-white text-sm opacity-70">
								{project.category}
							</span>
						</div>
					</Link>
				))}
			</motion.div>

			<motion.div variants={fadeInUp}>
				<Link
					to="/projects"
					className="group flex w-fit items-center space-x-3 text-white border border-white border-opacity-30 px-6 py-3 rounded hover:bg-white hover:bg-opacity-10 transition-all duration-300"
					aria-label={t("exploreButton")}
				>
					<span className="text-sm font-medium tracking-wider">
						{t("exploreButton")}
					</span>
					<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
				</Link>
			</motion.div>
		</motion.section>
	);
};

export default ProjectsGrid;
