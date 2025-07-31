export default function DesignGraphic() {
    return (
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
}
