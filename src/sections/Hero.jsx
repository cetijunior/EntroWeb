import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";


// Custom Button Component
const Button = ({ children, variant = "primary", href = "#", className = "" }) => {
    const baseClasses = "inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all duration-300 transform hover:scale-105";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/30",
        outline: "border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
    };

    return (
        <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
            {children}
        </a>
    );
};

// Cool Graphics Component
const HeroGraphics = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Main SVG Graphic */}
            <svg viewBox="0 0 500 400" className="w-full h-full max-w-lg">
                <defs>
                    <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background circles */}
                <circle cx="250" cy="200" r="120" fill="url(#heroGrad1)" opacity="0.1" className="animate-pulse" />
                <circle cx="250" cy="200" r="90" fill="url(#heroGrad1)" opacity="0.15" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <circle cx="250" cy="200" r="60" fill="url(#heroGrad1)" opacity="0.2" className="animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Floating elements */}
                <rect x="150" y="100" width="80" height="60" rx="10" fill="url(#heroGrad1)" opacity="0.8" className="animate-bounce" filter="url(#glow)" />
                <rect x="270" y="80" width="60" height="80" rx="10" fill="url(#heroGrad2)" opacity="0.9" className="animate-bounce" style={{ animationDelay: '0.5s' }} filter="url(#glow)" />
                <rect x="200" y="240" width="100" height="50" rx="10" fill="url(#heroGrad1)" opacity="0.7" className="animate-bounce" style={{ animationDelay: '1s' }} filter="url(#glow)" />

                {/* Chart bars */}
                <rect x="100" y="280" width="15" height="40" fill="url(#heroGrad2)" opacity="0.6" className="animate-pulse" />
                <rect x="120" y="260" width="15" height="60" fill="url(#heroGrad2)" opacity="0.7" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                <rect x="140" y="240" width="15" height="80" fill="url(#heroGrad2)" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                <rect x="160" y="220" width="15" height="100" fill="url(#heroGrad2)" opacity="0.9" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                <rect x="180" y="200" width="15" height="120" fill="url(#heroGrad2)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />

                {/* Connection lines */}
                <path d="M200 150 Q250 120 300 140 T400 130" stroke="url(#heroGrad1)" strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="5,5" className="animate-pulse" />
                <path d="M150 200 Q200 170 250 190 T350 180" stroke="url(#heroGrad2)" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Icons */}
                <circle cx="380" cy="120" r="20" fill="url(#heroGrad1)" opacity="0.8" />
                <path d="M375 115 L380 120 L390 110" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />

                <circle cx="120" cy="180" r="18" fill="url(#heroGrad2)" opacity="0.8" />
                <rect x="112" y="172" width="16" height="16" rx="2" fill="white" opacity="0.9" />
            </svg>

            {/* Floating decorative elements */}
            <div className="absolute top-10 right-10 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-20 w-4 h-4 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>

            {/* Background geometric shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
    );
};

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    const { t } = useTranslation("home");

    useEffect(() => {
        console.log("Loaded:", t("hero.headline"));
    }, []);


    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="hero"
            className="min-h-screen bg-white flex items-center justify-center px-6 py-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div
                            className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            {/* <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div> */}
                            {t("hero.badge")}
                        </div>

                        {/* Main Headline */}
                        <h1
                            className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] text-gray-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: '0.4s' }}
                        >
                            {t("hero.headline").split("<br />")[0]}<br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {t("hero.headline").split("<br />")[1]}
                            </span>
                        </h1>

                        {/* Subheadline (supports bolded spans via innerHTML) */}
                        <p
                            className={`text-xl text-gray-600 leading-relaxed max-w-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '0.6s' }}
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
                            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: '0.8s' }}
                        >
                            <Button href="#services" className="text-lg px-10 py-5">
                                {t("hero.button1")}
                            </Button>
                            <Button variant="outline" href="#reel" className="text-lg px-10 py-5">
                                {t("hero.button2")}
                            </Button>
                        </div>

                        {/* Stats */}
                        <div
                            className={`flex flex-wrap gap-8 pt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: '1s' }}
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
                        className={`relative h-96 lg:h-[500px] transition-all duration-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                        style={{ transitionDelay: '0.6s' }}
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
