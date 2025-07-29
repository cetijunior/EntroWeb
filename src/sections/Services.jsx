import { useState } from "react";

const services = [
    {
        title: "Strategy Services",
        description: "Data-driven strategies that position your brand ahead of the competition and create sustainable growth pathways.",
        points: [
            "Market and competitive research",
            "CRM & sales funnel strategy",
            "Brand positioning & messaging",
            "UX consulting",
            "Marketing strategy",
            "Automation",
        ],
        gradient: "from-blue-500 to-purple-600",
        bgGradient: "from-blue-50 to-purple-50",
    },
    {
        title: "Marketing Services",
        description: "Comprehensive digital marketing solutions that drive engagement, generate leads, and maximize your ROI.",
        points: [
            "Digital marketing campaigns",
            "Lead nurturing",
            "Marketing personas",
            "Branding",
            "SEO",
            "Content creation",
        ],
        gradient: "from-emerald-500 to-teal-600",
        bgGradient: "from-emerald-50 to-teal-50",
    },
    {
        title: "Design Services",
        description: "Beautiful, functional designs that captivate your audience and deliver exceptional user experiences.",
        points: [
            "User testing & personas",
            "Wireframing and prototyping",
            "Website design",
            "Graphic print design",
            "Animations",
            "UI/UX Design",
        ],
        gradient: "from-pink-500 to-rose-600",
        bgGradient: "from-pink-50 to-rose-50",
    },
    {
        title: "Development Services",
        description: "Robust, scalable development solutions that bring your digital vision to life with cutting-edge technology.",
        points: [
            "Website maintenance and hosting",
            "Platform and data migration",
            "CRM implementation",
            "Website building",
        ],
        gradient: "from-orange-500 to-red-600",
        bgGradient: "from-orange-50 to-red-50",
    },
];

// SVG Graphics Components
const StrategyGraphic = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
            <linearGradient id="strategyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
        </defs>
        <circle cx="200" cy="150" r="80" fill="url(#strategyGrad)" opacity="0.1" className="animate-pulse" />
        <circle cx="200" cy="150" r="60" fill="url(#strategyGrad)" opacity="0.2" />
        <circle cx="200" cy="150" r="40" fill="url(#strategyGrad)" opacity="0.3" />
        <path d="M150 100 L250 100 L275 150 L250 200 L150 200 L125 150 Z" fill="url(#strategyGrad)" opacity="0.8" />
        <circle cx="200" cy="150" r="15" fill="white" />
        <path d="M190 145 L195 150 L210 135" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
);

const MarketingGraphic = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
            <linearGradient id="marketingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
        </defs>
        <rect x="50" y="200" width="40" height="80" fill="url(#marketingGrad)" opacity="0.6" rx="4" className="animate-pulse" style={{ animationDelay: '0s' }} />
        <rect x="120" y="150" width="40" height="130" fill="url(#marketingGrad)" opacity="0.7" rx="4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <rect x="190" y="100" width="40" height="180" fill="url(#marketingGrad)" opacity="0.8" rx="4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <rect x="260" y="120" width="40" height="160" fill="url(#marketingGrad)" opacity="0.9" rx="4" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        <rect x="330" y="80" width="40" height="200" fill="url(#marketingGrad)" rx="4" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
        <path d="M70 190 Q140 120 210 90 T350 70" stroke="url(#marketingGrad)" strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-pulse" />
    </svg>
);

const DesignGraphic = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
            <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
        </defs>
        <rect x="80" y="80" width="240" height="140" fill="url(#designGrad)" opacity="0.1" rx="12" />
        <rect x="100" y="100" width="200" height="100" fill="white" rx="8" stroke="url(#designGrad)" strokeWidth="2" />
        <rect x="120" y="120" width="50" height="8" fill="url(#designGrad)" opacity="0.3" rx="4" />
        <rect x="120" y="140" width="80" height="8" fill="url(#designGrad)" opacity="0.5" rx="4" />
        <rect x="120" y="160" width="60" height="8" fill="url(#designGrad)" opacity="0.4" rx="4" />
        <circle cx="250" cy="150" r="25" fill="url(#designGrad)" opacity="0.3" className="animate-pulse" />
        <circle cx="280" cy="130" r="15" fill="url(#designGrad)" opacity="0.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <path d="M60 60 L90 90 M310 60 L340 90 M60 240 L90 210 M310 240 L340 210" stroke="url(#designGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const DevelopmentGraphic = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
            <linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
        </defs>
        <rect x="100" y="100" width="200" height="120" fill="url(#devGrad)" opacity="0.1" rx="8" />
        <rect x="110" y="110" width="180" height="20" fill="url(#devGrad)" opacity="0.3" rx="4" />
        <rect x="120" y="140" width="15" height="15" fill="url(#devGrad)" opacity="0.6" rx="2" className="animate-pulse" />
        <rect x="145" y="140" width="15" height="15" fill="url(#devGrad)" opacity="0.6" rx="2" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <rect x="170" y="140" width="15" height="15" fill="url(#devGrad)" opacity="0.6" rx="2" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <rect x="120" y="165" width="120" height="4" fill="url(#devGrad)" opacity="0.4" rx="2" />
        <rect x="120" y="175" width="90" height="4" fill="url(#devGrad)" opacity="0.4" rx="2" />
        <rect x="120" y="185" width="110" height="4" fill="url(#devGrad)" opacity="0.4" rx="2" />
        <rect x="120" y="195" width="80" height="4" fill="url(#devGrad)" opacity="0.4" rx="2" />
        <path d="M80 80 L100 100 L80 120 M320 80 L300 100 L320 120" stroke="url(#devGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const graphics = [StrategyGraphic, MarketingGraphic, DesignGraphic, DevelopmentGraphic];

export default function Services() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                            Premium Digital Solutions
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We deliver comprehensive digital solutions that transform your business,
                        drive growth, and create lasting competitive advantages in the digital landscape.
                    </p>
                    <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {services.map((service, idx) => {
                        const GraphicComponent = graphics[idx];
                        const isEven = idx % 2 === 0;

                        return (
                            <div
                                key={idx}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center gap-16 mb-32 last:mb-0 max-w-6xl mx-auto`}
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    animation: `fadeInUp 0.8s ease-out ${idx * 0.2}s both`
                                }}
                            >
                                {/* Content Block */}
                                <div className="flex-1 lg:max-w-lg">
                                    <div className="relative">
                                        <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                        <div className="relative">
                                            <div className={`inline-block px-4 py-2 bg-gradient-to-r ${service.bgGradient} rounded-full mb-6`}>
                                                <span className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                                    0{idx + 1}
                                                </span>
                                            </div>

                                            <h2 className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                                {service.title}
                                            </h2>

                                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div className="space-y-4">
                                                {service.points.map((point, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center group/item"
                                                        style={{
                                                            animation: hoveredCard === idx ? `slideInLeft 0.5s ease-out ${i * 0.1}s both` : 'none'
                                                        }}
                                                    >
                                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} mr-4 flex-shrink-0 shadow-lg transform group-hover/item:scale-125 transition-transform duration-300`}></div>
                                                        <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                                                            {point}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button className={`mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                                                Learn More
                                                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Graphic Block */}
                                <div className="flex-1 lg:max-w-lg">
                                    <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-500 group`}>
                                        <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                        <div className="relative h-80">
                                            <GraphicComponent />
                                        </div>

                                        {/* Floating elements */}
                                        <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full shadow-lg animate-bounce"></div>
                                        <div className="absolute bottom-4 left-4 w-3 h-3 bg-white rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-4xl font-bold text-white mb-6">
                        Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Elevate</span> Your Business?
                    </h3>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Let's create something extraordinary together. Our team is ready to bring your vision to life with cutting-edge solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Start Your Project
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                            View Our Work
                        </button>
                    </div>
                </div>
            </div>

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