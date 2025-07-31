import { useState } from "react";
import { useTranslation } from "react-i18next";

// SVG Graphics
import StrategyGraphic from "../graphics/StrategyGraphic";
import MarketingGraphic from "../graphics/MarketingGraphic";
import DesignGraphic from "../graphics/DesignGraphic";
import DevelopmentGraphic from "../graphics/DevelopmentGraphic";
import CTA from "../components/CTA";

export default function Services() {
    const { t } = useTranslation("services");
    const [hoveredCard, setHoveredCard] = useState(null);

    const serviceKeys = ["strategy", "marketing", "design", "development"];
    const graphics = [StrategyGraphic, MarketingGraphic, DesignGraphic, DevelopmentGraphic];

    const gradientMap = {
        strategy: { main: "from-blue-500 to-purple-600", bg: "from-blue-50 to-purple-50" },
        marketing: { main: "from-emerald-500 to-teal-600", bg: "from-emerald-50 to-teal-50" },
        design: { main: "from-pink-500 to-rose-600", bg: "from-pink-50 to-rose-50" },
        development: { main: "from-orange-500 to-red-600", bg: "from-orange-50 to-red-50" }
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Header */}
            <div className="bg-gradient-to-br from-gray-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                        {t("servicesIntro.badge")}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        {t("servicesIntro.title")}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t("servicesIntro.subtitle")}
                    </p>
                    <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Service Blocks */}
            <div className="py-20">

                <div className="max-w-7xl mx-auto px-6">
                    {serviceKeys.map((key, idx) => {
                        const service = t(`${key}`, { returnObjects: true });
                        const GraphicComponent = graphics[idx];
                        const isEven = idx % 2 === 0;

                        return (
                            <div
                                key={key}
                                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center justify-center gap-16 mb-32 last:mb-0 max-w-6xl mx-auto`}
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{ animation: `fadeInUp 0.8s ease-out ${idx * 0.2}s both` }}
                            >
                                {/* Text Block */}
                                <div className="flex-1 lg:max-w-lg">
                                    <div className="relative">
                                        <div className={`inline-block px-4 py-2 bg-gradient-to-r ${gradientMap[key].bg} rounded-full mb-6`}>
                                            <span className={`text-sm font-semibold bg-gradient-to-r ${gradientMap[key].main} bg-clip-text text-transparent`}>
                                                0{idx + 1}
                                            </span>
                                        </div>

                                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>

                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                                        <div className="space-y-4">
                                            {service.points.map((point, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center hover:scale-105 transition-all duration-300"
                                                    style={{
                                                        animation: hoveredCard === idx ? `slideInLeft 0.5s ease-out ${i * 0.1}s both` : "none"
                                                    }}
                                                >
                                                    <div className={`w-10 h-[3px] rounded-full bg-gradient-to-r ${gradientMap[key].main} mr-4 flex-shrink-0 shadow-lg`} />
                                                    <span className="text-gray-700 font-medium">{point}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button className={`mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r ${gradientMap[key].main} text-white font-semibold rounded-full`}>
                                            Learn More
                                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Graphic Block */}
                                <div className="flex-1 lg:max-w-lg">
                                    <div className={`relative bg-gradient-to-br ${gradientMap[key].bg} rounded-3xl p-8 shadow-xl`}>
                                        <GraphicComponent />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <CTA />


            {/* Optional Animation Styles */}
            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </div>
    );
}
