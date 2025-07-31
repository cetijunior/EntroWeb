export default function StrategyGraphic() {
    return (
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
}
