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
				<circle
					cx="250"
					cy="200"
					r="120"
					fill="url(#heroGrad1)"
					opacity="0.1"
					className="animate-pulse"
				/>
				<circle
					cx="250"
					cy="200"
					r="90"
					fill="url(#heroGrad1)"
					opacity="0.15"
					className="animate-pulse"
					style={{ animationDelay: "1s" }}
				/>
				<circle
					cx="250"
					cy="200"
					r="60"
					fill="url(#heroGrad1)"
					opacity="0.2"
					className="animate-pulse"
					style={{ animationDelay: "2s" }}
				/>

				{/* Floating elements */}
				<rect
					x="150"
					y="100"
					width="80"
					height="60"
					rx="10"
					fill="url(#heroGrad1)"
					opacity="0.8"
					className="animate-bounce"
					filter="url(#glow)"
				/>
				<rect
					x="270"
					y="80"
					width="60"
					height="80"
					rx="10"
					fill="url(#heroGrad2)"
					opacity="0.9"
					className="animate-bounce"
					style={{ animationDelay: "0.5s" }}
					filter="url(#glow)"
				/>
				<rect
					x="200"
					y="240"
					width="100"
					height="50"
					rx="10"
					fill="url(#heroGrad1)"
					opacity="0.7"
					className="animate-bounce"
					style={{ animationDelay: "1s" }}
					filter="url(#glow)"
				/>

				{/* Chart bars */}
				<rect
					x="100"
					y="280"
					width="15"
					height="40"
					fill="url(#heroGrad2)"
					opacity="0.6"
					className="animate-pulse"
				/>
				<rect
					x="120"
					y="260"
					width="15"
					height="60"
					fill="url(#heroGrad2)"
					opacity="0.7"
					className="animate-pulse"
					style={{ animationDelay: "0.2s" }}
				/>
				<rect
					x="140"
					y="240"
					width="15"
					height="80"
					fill="url(#heroGrad2)"
					opacity="0.8"
					className="animate-pulse"
					style={{ animationDelay: "0.4s" }}
				/>
				<rect
					x="160"
					y="220"
					width="15"
					height="100"
					fill="url(#heroGrad2)"
					opacity="0.9"
					className="animate-pulse"
					style={{ animationDelay: "0.6s" }}
				/>
				<rect
					x="180"
					y="200"
					width="15"
					height="120"
					fill="url(#heroGrad2)"
					className="animate-pulse"
					style={{ animationDelay: "0.8s" }}
				/>

				{/* Connection lines */}
				<path
					d="M200 150 Q250 120 300 140 T400 130"
					stroke="url(#heroGrad1)"
					strokeWidth="3"
					fill="none"
					opacity="0.6"
					strokeDasharray="5,5"
					className="animate-pulse"
				/>
				<path
					d="M150 200 Q200 170 250 190 T350 180"
					stroke="url(#heroGrad2)"
					strokeWidth="2"
					fill="none"
					opacity="0.5"
					strokeDasharray="3,3"
					className="animate-pulse"
					style={{ animationDelay: "1s" }}
				/>

				{/* Icons */}
				<circle cx="380" cy="120" r="20" fill="url(#heroGrad1)" opacity="0.8" />
				<path
					d="M375 115 L380 120 L390 110"
					stroke="white"
					strokeWidth="2"
					fill="none"
					strokeLinecap="round"
				/>

				<circle cx="120" cy="180" r="18" fill="url(#heroGrad2)" opacity="0.8" />
				<rect
					x="112"
					y="172"
					width="16"
					height="16"
					rx="2"
					fill="white"
					opacity="0.9"
				/>
			</svg>

			{/* Floating decorative elements */}
			<div className="absolute top-10 right-10 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-bounce opacity-60"></div>
			<div
				className="absolute bottom-20 left-10 w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full animate-bounce opacity-60"
				style={{ animationDelay: "1s" }}
			></div>
			<div
				className="absolute top-1/2 right-20 w-4 h-4 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-bounce opacity-60"
				style={{ animationDelay: "2s" }}
			></div>

			{/* Background geometric shapes */}
			<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
			<div
				className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full blur-2xl opacity-50 animate-pulse"
				style={{ animationDelay: "2s" }}
			></div>
		</div>
	);
};

export default HeroGraphics;
