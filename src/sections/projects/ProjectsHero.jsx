import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ProjectsHero = () => {
	const { t } = useTranslation("projectsP");

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
			className="mb-16 text-center"
		>
			<motion.div variants={fadeInUp}>
				<span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 mb-6">
					{t("hero.badge")}
				</span>
			</motion.div>
			<motion.h1
				variants={fadeInUp}
				className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight max-w-4xl mx-auto"
			>
				{t("hero.title")}
			</motion.h1>
			<motion.p
				variants={fadeInUp}
				className="text-lg md:text-xl text-white opacity-80 max-w-3xl mx-auto leading-relaxed"
			>
				{t("hero.subheadline")}
			</motion.p>
		</motion.section>
	);
};

export default ProjectsHero;
