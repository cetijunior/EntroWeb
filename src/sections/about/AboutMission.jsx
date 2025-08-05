import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
	Target,
	Lightbulb,
	Users,
	Zap,
	ArrowRight,
	CheckCircle,
	TrendingUp,
	Award,
	Globe,
	Heart,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import CTA from "../../components/CTA";

export default function AboutMission() {
	const [activeTab, setActiveTab] = useState(0);
	const [countAnimation, setCountAnimation] = useState(false);

	const { t } = useTranslation("aboutP");

	const stats = t("mission.stats", { returnObjects: true });
	const missionTabs = t("mission.tabs", { returnObjects: true });
	const processSteps = t("mission.process", { returnObjects: true });
	const achievements = t("mission.achievements", { returnObjects: true });

	const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
	const [hasAnimated, setHasAnimated] = useState(false);

	const { ref, inView } = useInView({
		triggerOnce: true, // Animate only once
		threshold: 0.3, // 30% of the section must be visible
	});

	// Animate the stats on hover
	useEffect(() => {
		if (inView && !hasAnimated) {
			const newStats = [...stats].map(() => 0);
			stats.forEach((stat, index) => {
				let current = 0;
				const increment = stat.number / 50;
				const timer = setInterval(() => {
					current += increment;
					if (current >= stat.number) {
						current = stat.number;
						clearInterval(timer);
					}
					newStats[index] = Math.floor(current);
					setAnimatedStats([...newStats]);
				}, 30);
			});
			setHasAnimated(true);
		}
	}, [inView, hasAnimated, stats]);

	// Icon mapping
	const tabIcons = [Target, Lightbulb, Heart];
	const achievementIcons = [TrendingUp, Users, Award, Globe];

	return (
		<section className="py-20 bg-gradient-to-br from-white via-violet-300 to-blue-300 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-300"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6 animate-bounce">
						<Target className="w-4 h-4 mr-2" />
						{t("mission.badge")}
					</div>

					<h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
						{t("mission.title")}
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
							{t("mission.subtitle")}
						</span>
					</h2>

					<p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
						{t("mission.description")}
					</p>
				</div>

				{/* Tabs */}
				<div className="mb-20">
					<div className="flex flex-wrap justify-center mb-8 gap-2">
						{missionTabs.map((tab, index) => (
							<button
								key={index}
								onClick={() => setActiveTab(index)}
								className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
									activeTab === index
										? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
										: "bg-white/80 text-gray-700 hover:bg-gray-100 shadow-md"
								}`}
							>
								{React.createElement(tabIcons[index], {
									className: "w-5 h-5 mr-2",
								})}
								{tab.title}
							</button>
						))}
					</div>

					<div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-r from-indigo-500 via-white to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
								<img className="rounded-2xl" src="Logo.png" />
							</div>
							<h3 className="text-3xl font-bold text-gray-900 mb-6">
								{missionTabs[activeTab].title}
							</h3>

							<p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
								{missionTabs[activeTab].content}
							</p>

							<div className="flex flex-wrap justify-center gap-4">
								{missionTabs[activeTab].highlights.map((highlight, index) => (
									<div
										key={index}
										className="flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full"
									>
										<CheckCircle className="w-4 h-4 mr-2" />
										<span className="font-medium">{highlight}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Process */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h3 className="text-4xl font-bold text-gray-900 mb-4">
							{t("mission.processTitle")}
						</h3>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							{t("mission.processDescription")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{processSteps.map((step, index) => (
							<div
								key={index}
								className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
							>
								<div className="text-center">
									<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
										{step.icon}
									</div>
									<div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-white font-bold text-sm">
											{index + 1}
										</span>
									</div>
									<h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
										{step.title}
									</h4>
									<p className="text-gray-600 leading-relaxed">
										{step.description}
									</p>
								</div>
								{index < processSteps.length - 1 && (
									<div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
										<ArrowRight className="w-6 h-6 text-indigo-300" />
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Stats */}
				<section ref={ref} className="mb-20">
					<div className="text-center mb-12">
						<h3 className="text-4xl font-bold text-gray-900 mb-4">
							{t("mission.statsTitle")}
						</h3>
						<p className="text-xl text-gray-600">
							{t("mission.statsDescription")}
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="text-center group transform transition-all duration-500 hover:scale-110"
							>
								<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
									<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
										{animatedStats[index] || 0}
										{stat.suffix}
									</div>
									<div className="text-gray-600 font-medium">{stat.label}</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Achievements */}
				<div className="mb-16">
					<div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
						<div className="text-center mb-8">
							<h3 className="text-3xl font-bold mb-4">
								{t("mission.whyUsTitle")}
							</h3>
							<p className="text-indigo-100 text-lg max-w-2xl mx-auto">
								{t("mission.whyUsDescription")}
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{achievements.map((achievement, index) => (
								<div
									key={index}
									className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
								>
									{React.createElement(achievementIcons[index], {
										className: "w-8 h-8 text-indigo-200 mr-3 flex-shrink-0",
									})}
									<span className="font-medium">{achievement.text}</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className="rounded-full max-w-3xl flex items-center justify-center mx-auto">
					<CTA />
				</div>
			</div>
		</section>
	);
}
