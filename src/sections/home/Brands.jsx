import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import ProjectsGrid from "../projects/ProjectsGrid";

const BrandSection = () => {
	const { t } = useTranslation("brands");

	const projects = [
		{
			name: "BLVCK",
			bgColor: "bg-gray-900",
		},
		{
			name: "CREAM",
			bgColor: "bg-teal-600",
		},
		{
			name: "FREDI",
			bgColor: "bg-yellow-400",
		},
		{
			name: "APOLLO",
			bgColor: "bg-gray-800",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 px-6 py-16">
			<div className="max-w-6xl mx-auto">
				{/* Header Section */}
				<div className="mb-16">
					<h2 className="text-white text-sm font-medium tracking-wider uppercase mb-6 opacity-80">
						{t("badge")}
					</h2>
					<h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl">
						{t("title")}
					</h1>
				</div>

				{/* Projects Grid */}

				<ProjectsGrid />

				{/* Explore All Projects Button */}
				{/* <div>
					<button className="group flex items-center space-x-3 text-white border border-white border-opacity-30 px-6 py-3 rounded hover:bg-white hover:bg-opacity-10 transition-all duration-300">
						<span className="text-sm font-medium tracking-wider">
							{t("exploreButton")}
						</span>
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default BrandSection;
