import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from "react-i18next";

const BrandSection = () => {
    const { t } = useTranslation("brands");

    const projects = [
        {
            name: "BLVCK",
            bgColor: "bg-gray-900"
        },
        {
            name: "CREAM",
            bgColor: "bg-teal-600"
        },
        {
            name: "FREDI",
            bgColor: "bg-yellow-400"
        },
        {
            name: "APOLLO",
            bgColor: "bg-gray-800"
        }
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.name}
                            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className={`relative overflow-hidden rounded-lg ${project.bgColor} aspect-[4/3]`}>
                                {/* Project Image Placeholder */}
                                <div className="w-full h-full flex items-center justify-center">
                                    {project.name === "BLVCK" && (
                                        <div className="grid grid-cols-3 gap-2 p-8">
                                            {[...Array(9)].map((_, i) => (
                                                <div key={i} className="w-12 h-12 bg-black rounded"></div>
                                            ))}
                                        </div>
                                    )}
                                    {project.name === "CREAM" && (
                                        <div className="relative">
                                            <div className="w-32 h-20 bg-teal-800 rounded-lg transform rotate-12"></div>
                                            <div className="w-32 h-20 bg-teal-900 rounded-lg absolute top-2 left-2 transform -rotate-6"></div>
                                        </div>
                                    )}
                                    {project.name === "FREDI" && (
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
                                    {project.name === "APOLLO" && (
                                        <div className="relative">
                                            <div className="w-24 h-32 bg-white rounded-lg flex items-center justify-center">
                                                <span className="text-black text-4xl font-bold">A</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Info */}
                            <div className="flex justify-between items-center mt-4">
                                <h3 className="text-white text-xl font-medium">
                                    {t(`project${index + 1}.name`)}
                                </h3>
                                <span className="text-white text-sm opacity-70">
                                    {t(`project${index + 1}.category`)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore All Projects Button */}
                <div>
                    <button className="group flex items-center space-x-3 text-white border border-white border-opacity-30 px-6 py-3 rounded hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                        <span className="text-sm font-medium tracking-wider">
                            {t("exploreButton")}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;
