// src/sections/AboutHero.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BG from "../components/BG";

export default function AboutHero() {
	const { t } = useTranslation("aboutP"); // Assuming the file is named "about.json"

	return (
		<section className="relative overflow-hidden h-screen  flex items-center justify-center text-center">
			{/* Background Layer */}
			<div className="absolute inset-0 -z-10 opacity-70">
				<BG centerText={t("hero.badge")} subtitle={t("hero.headline")} />
			</div>

			{/* Hero Content */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9, ease: "easeOut" }}
				className="z-10 max-w-4xl"
			>
				<div className="inline-block mb-4 px-4 py-2 bg-indigo-100 text-indigo-800 text-sm rounded-full font-medium">
					{t("hero.badge")}
				</div>

				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-md">
					{t("hero.headline")}
				</h1>

				<p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-8 drop-shadow-sm">
					{t("hero.subheadline")}
				</p>
			</motion.div>
		</section>
	);
}
