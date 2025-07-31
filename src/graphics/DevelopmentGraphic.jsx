export default function DevelopmentGraphic() {
    return (
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
}
