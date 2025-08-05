import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BG from "../components/BG";
import CTA from "../components/CTA";

const ProjectDetail = () => {
	const { t } = useTranslation("projects"); // Changed from "projectsP" to "projects"
	const { id } = useParams();
	const [project, setProject] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Static fallback data (mirroring ProjectsGrid)
	const staticProjects = [
		{
			id: "blvck",
			name: t("project1.name"),
			category: t("project1.category"),
			title: t("project1.title"),
			description: t("project1.description"),
			bgColor: "bg-gray-900",
		},
		{
			id: "cream",
			name: t("project2.name"),
			category: t("project2.category"),
			title: t("project2.title"),
			description: t("project2.description"),
			bgColor: "bg-teal-600",
		},
		{
			id: "fredi",
			name: t("project3.name"),
			category: t("project3.category"),
			title: t("project3.title"),
			description: t("project3.description"),
			bgColor: "bg-yellow-400",
		},
		{
			id: "apollo",
			name: t("project4.name"),
			category: t("project4.category"),
			title: t("project4.title"),
			description: t("project4.description"),
			bgColor: "bg-gray-800",
		},
	];

	useEffect(() => {
		let retryCount = 0;
		const maxRetries = 2;

		const fetchProject = () => {
			fetch(`https://entroweb.com/wp-json/wp/v2/projects?slug=${id}&_embed`)
				.then((res) => res.json())
				.then((data) => {
					if (data.length > 0) {
						setProject({
							id: data[0].slug,
							name: data[0].title.rendered,
							category: data[0].acf?.category || "General",
							title: data[0].title.rendered,
							description: data[0].content.rendered,
							image:
								data[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
								"/placeholder.jpg",
							bgColor: "bg-gray-800",
						});
						setLoading(false);
					} else {
						throw new Error("No project found");
					}
				})
				.catch(() => {
					if (retryCount < maxRetries) {
						retryCount++;
						setTimeout(fetchProject, 1000); // Retry after 1s
					} else {
						const staticProject = staticProjects.find((p) => p.id === id);
						if (staticProject) {
							setProject(staticProject);
							setLoading(false);
						} else {
							setError(t("detail.error"));
							setLoading(false);
						}
					}
				});
		};

		fetchProject();
	}, [id, t]);

	// Framer Motion animation variants
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

	if (loading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 pt-16 flex items-center justify-center">
				<p className="text-white text-lg">{t("detail.loading")}</p>
			</div>
		);
	}

	if (error || !project) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 pt-16 flex items-center justify-center">
				<p className="text-white text-lg">{t("detail.error")}</p>
			</div>
		);
	}

	return (
		<div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 pt-16">
			{/* Background Component */}
			<div className="absolute inset-0 -z-20 opacity-70 h-full">
				<BG centerText="EntroWeb" subtitle="Digital Marketing Solutions" />
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16">
				{/* Back Link */}
				<motion.div variants={fadeInUp} className="mb-8">
					<Link
						to="/projects"
						className="flex items-center text-white text-sm font-medium hover:text-white/80 transition-colors"
						aria-label={t("detail.backToProjects")}
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						{t("detail.backToProjects")}
					</Link>
				</motion.div>

				{/* Hero Section */}
				<motion.section
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="mb-16"
				>
					<motion.div variants={fadeInUp}>
						<span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 mb-6">
							{project.category}
						</span>
					</motion.div>
					<motion.h1
						variants={fadeInUp}
						className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
					>
						{project.title}
					</motion.h1>
				</motion.section>

				{/* Content Section */}
				<motion.section
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="mb-16"
				>
					<motion.div
						variants={fadeInUp}
						className="flex flex-col lg:flex-row gap-8 items-center"
					>
						{/* Project Image/Placeholder */}
						<div className="flex-1">
							<div
								className={`relative overflow-hidden rounded-lg ${project.bgColor} aspect-[4/3]`}
							>
								<div className="w-full h-full flex items-center justify-center">
									{project.image &&
									!staticProjects.some((p) => p.id === project.id) ? (
										<img
											src={project.image}
											alt={project.name}
											className="w-full h-full object-cover"
											loading="lazy"
										/>
									) : (
										<>
											{project.name === t("project1.name") && (
												<div className="grid grid-cols-3 gap-2 p-8">
													{[...Array(9)].map((_, i) => (
														<div
															key={i}
															className="w-12 h-12 bg-black rounded"
														></div>
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
														<span className="text-white font-bold text-lg">
															f
														</span>
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
														<span className="text-black text-4xl font-bold">
															A
														</span>
													</div>
												</div>
											)}
										</>
									)}
								</div>
							</div>
						</div>
						{/* Description */}
						<div className="flex-1">
							<motion.div variants={fadeInUp}>
								<div
									className="prose prose-invert max-w-none text-white"
									dangerouslySetInnerHTML={{ __html: project.description }}
								/>
							</motion.div>
						</div>
					</motion.div>
				</motion.section>

				{/* CTA Section */}
				<CTA />
			</div>
		</div>
	);
};

export default ProjectDetail;
