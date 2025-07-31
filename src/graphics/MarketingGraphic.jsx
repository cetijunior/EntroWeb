export default function MarketingGraphic() {
    return (
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
}
