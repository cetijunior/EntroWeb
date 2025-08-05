import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import BG from "../../components/BG";
import { Link } from "react-router-dom";
import HeroGraphics from "./HeroGraphics";

// Custom Button Component
const Button = ({
	children,
	variant = "primary",
	href = "#",
	className = "",
}) => {
	const baseClasses =
		"inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all duration-300 transform hover:scale-105";

	const variants = {
		primary:
			"bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/30",
		outline:
			"border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white",
	};

	return (
		<a
			href={href}
			className={`${baseClasses} ${variants[variant]} ${className}`}
		>
			{children}
		</a>
	);
};

// Cool Graphics Component

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);
	const { t } = useTranslation("home");

	useEffect(() => {
		console.log("Loaded:", t("hero.headline"));
	}, [t]);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section
			id="hero"
			className="relative min-h-screen bg-white/60 flex items-center justify-center px-6 py-20 overflow-hidden"
		>
			{/* Background Component */}
			<div className="absolute inset-0 -z-20 opacity-70">
				<BG centerText="EntroWeb" subtitle="Digital Marketing Solutions" />
			</div>

			<div className="max-w-7xl mx-auto w-full relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Side - Content */}
					<div className="space-y-8">
						{/* Badge */}
						<div
							className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 transition-all duration-1000 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
							style={{ transitionDelay: "0.2s" }}
						>
							{t("hero.badge")}
						</div>

						{/* Main Headline */}
						<h1
							className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] text-gray-900 transition-all duration-1000 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
							style={{ transitionDelay: "0.4s" }}
						>
							{t("hero.headline").split("<br />")[0]}
							<br />
							<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
								{t("hero.headline").split("<br />")[1]}
							</span>
						</h1>

						{/* Subheadline */}
						<p
							className={`text-xl text-gray-600 leading-relaxed max-w-lg transition-all duration-1000 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
							style={{ transitionDelay: "0.6s" }}
						>
							<Trans
								i18nKey="hero.subheadline"
								components={{
									1: <span className="font-semibold text-gray-900" />,
									3: <span className="font-semibold text-gray-900" />,
									5: <span className="font-semibold text-gray-900" />,
								}}
							/>
						</p>

						{/* CTA Buttons */}
						<div
							className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
							style={{ transitionDelay: "0.8s" }}
						>
							<Button href="/contact" className="text-lg px-10 py-5">
								{t("hero.button1")}
							</Button>
							<Button
								variant="outline"
								href="/projects"
								className="text-lg px-10 py-5"
							>
								{t("hero.button2")}
							</Button>
						</div>

						{/* Stats */}
						<div
							className={`flex flex-wrap items-center justify-center sm:flex-row gap-8 pt-8 transition-all duration-1000 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
							style={{ transitionDelay: "1s" }}
						>
							<div className="text-center">
								<div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									{t("hero.stats.brands.value")}
								</div>
								<div className="text-sm text-gray-600 font-medium">
									{t("hero.stats.brands.label")}
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
									{t("hero.stats.roi.value")}
								</div>
								<div className="text-sm text-gray-600 font-medium">
									{t("hero.stats.roi.label")}
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
									{t("hero.stats.support.value")}
								</div>
								<div className="text-sm text-gray-600 font-medium">
									{t("hero.stats.support.label")}
								</div>
							</div>
						</div>
					</div>

					{/* Right Side - Graphics */}
					<div
						className={`relative h-96 lg:h-[500px] transition-all duration-1200 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-8"
						}`}
						style={{ transitionDelay: "0.6s" }}
					>
						<HeroGraphics />
					</div>
				</div>
			</div>

			{/* Decorative elements */}
			<div className="absolute top-20 left-10 w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent opacity-30"></div>
			<div className="absolute bottom-20 right-10 w-1 h-16 bg-gradient-to-t from-purple-500 to-transparent opacity-30"></div>
		</section>
	);
}
