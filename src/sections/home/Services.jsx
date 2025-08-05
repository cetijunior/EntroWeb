import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import StrategyGraphic from "../../graphics/StrategyGraphic";
import MarketingGraphic from "../../graphics/MarketingGraphic";
import DesignGraphic from "../../graphics/DesignGraphic";
import DevelopmentGraphic from "../../graphics/DevelopmentGraphic";
import CTA from "../../components/CTA";
import BG from "../../components/BG";

export default function Services() {
	const { t } = useTranslation("services");
	const [hoveredCard, setHoveredCard] = useState(null);

	const serviceKeys = ["strategy", "marketing", "design", "development"];
	const graphics = [
		StrategyGraphic,
		MarketingGraphic,
		DesignGraphic,
		DevelopmentGraphic,
	];

	const gradientMap = {
		strategy: {
			main: "from-blue-500 to-purple-600",
			bg: "from-blue-50 to-purple-50",
		},
		marketing: {
			main: "from-emerald-500 to-teal-600",
			bg: "from-emerald-50 to-teal-50",
		},
		design: {
			main: "from-pink-500 to-rose-600",
			bg: "from-pink-50 to-rose-50",
		},
		development: {
			main: "from-orange-500 to-red-600",
			bg: "from-orange-50 to-red-50",
		},
	};

	// Framer Motion animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const slideInLeft = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	};

	return (
		<div className="relative min-h-screen bg-white/60">
			{/* Background Component */}
			<div className="absolute inset-0 -z-20 opacity-70 h-full">
				<BG centerText="EntroWeb" subtitle="Digital Marketing Solutions" />
			</div>

			{/* Header */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={staggerContainer}
				className="bg-white/ py-20 relative z-10"
			>
				<div className="max-w-7xl mx-auto px-6 text-center">
					<motion.span
						variants={fadeInUp}
						className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase"
					>
						{t("servicesIntro.badge")}
					</motion.span>
					<motion.h1
						variants={fadeInUp}
						className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
					>
						{t("servicesIntro.title")}
					</motion.h1>
					<motion.p
						variants={fadeInUp}
						className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
					>
						{t("servicesIntro.subtitle")}
					</motion.p>
					<motion.div
						variants={fadeInUp}
						className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
					></motion.div>
				</div>
			</motion.div>

			{/* Service Blocks */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={staggerContainer}
				className="py-20 bg-transparent relative z-10"
			>
				<div className="max-w-7xl mx-auto px-6">
					{serviceKeys.map((key, idx) => {
						const service = t(`${key}`, { returnObjects: true });
						const GraphicComponent = graphics[idx];
						const isEven = idx % 2 === 0;

						return (
							<motion.div
								key={key}
								variants={fadeInUp}
								className={`flex flex-col ${
									isEven ? "lg:flex-row" : "lg:flex-row-reverse"
								} items-center justify-center gap-16 mb-32 last:mb-0 max-w-6xl mx-auto`}
								onMouseEnter={() => setHoveredCard(idx)}
								onMouseLeave={() => setHoveredCard(null)}
							>
								{/* Text Block */}
								<motion.div variants={fadeInUp} className="flex-1 lg:max-w-lg">
									<div className="relative">
										<div
											className={`inline-block px-4 py-2 bg-gradient-to-r ${gradientMap[key].bg} rounded-full mb-6`}
										>
											<span
												className={`text-sm font-semibold bg-gradient-to-r ${gradientMap[key].main} bg-clip-text text-transparent`}
											>
												0{idx + 1}
											</span>
										</div>
										<h2 className="text-4xl font-bold text-gray-900 mb-4">
											{service.title}
										</h2>
										<p className="text-lg text-gray-600 mb-8 leading-relaxed">
											{service.description}
										</p>
										<div className="space-y-4">
											{service.points.map((point, i) => (
												<motion.div
													key={i}
													variants={hoveredCard === idx ? slideInLeft : {}}
													className="flex items-center hover:scale-105 transition-all duration-300"
												>
													<div
														className={`w-10 h-[3px] rounded-full bg-gradient-to-r ${gradientMap[key].main} mr-4 flex-shrink-0 shadow-lg`}
													/>
													<span className="text-gray-700 font-medium">
														{point}
													</span>
												</motion.div>
											))}
										</div>
										<button
											className={`mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r ${gradientMap[key].main} text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300`}
										>
											{t("learnMore", "Learn More")}
											<svg
												className="ml-2 w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17 8l4 4m0 0l-4 4m4-4H3"
												/>
											</svg>
										</button>
									</div>
								</motion.div>

								{/* Graphic Block */}
								<motion.div
									variants={fadeInUp}
									className="flex-1 lg:max-w-lg"
									whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
								>
									<div
										className={`relative bg-gradient-to-br ${gradientMap[key].bg} rounded-3xl p-8 shadow-xl`}
									>
										<GraphicComponent />
									</div>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</motion.div>

			<CTA />
		</div>
	);
}
