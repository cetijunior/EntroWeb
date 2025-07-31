import React, { useEffect } from "react";

const BG = ({
	centerText = "SMMA",
	subtitle = "Social Media Marketing Agency",
}) => {
	useEffect(() => {
		const graphicElements = document.querySelectorAll(".graphic-element");

		graphicElements.forEach((element, index) => {
			// Random animation delays
			element.style.animationDelay = `${Math.random() * 6}s`;

			// Random slight rotation
			const rotation = Math.random() * 30 - 15;
			element.style.transform += ` rotate(${rotation}deg)`;

			// Add hover effects
			element.addEventListener("mouseenter", () => {
				element.style.opacity = "0.6";
				element.style.transform += " scale(1.15)";
				element.style.filter = "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2))";
			});

			element.addEventListener("mouseleave", () => {
				element.style.opacity = "0.25";
				element.style.transform = element.style.transform.replace(
					" scale(1.15)",
					""
				);
				element.style.filter = "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))";
			});
		});

		// Add parallax effect on mouse move
		const handleMouseMove = (e) => {
			const mouseX = e.clientX / window.innerWidth;
			const mouseY = e.clientY / window.innerHeight;

			graphicElements.forEach((element, index) => {
				const speed = ((index % 3) + 1) * 0.5;
				const x = (mouseX - 0.5) * speed;
				const y = (mouseY - 0.5) * speed;

				element.style.transform += ` translate(${x}px, ${y}px)`;
			});
		};

		document.addEventListener("mousemove", handleMouseMove);

		// Cleanup event listeners on component unmount
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			graphicElements.forEach((element) => {
				element.removeEventListener("mouseenter", () => {});
				element.removeEventListener("mouseleave", () => {});
			});
		};
	}, []);

	return (
		<div className="relative w-screen h-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
			{/* Grid Pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>

			{/* Pattern Layer */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}}
			></div>

			{/* Graphics Container */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Analytics Charts */}
				<svg
					className="graphic-element absolute top-[10%] left-[15%] w-20 h-20 sm:w-28 sm:h-28 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<defs>
						<linearGradient id="chartGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop
								offset="0%"
								style={{ stopColor: "#6366f1", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#4338ca", stopOpacity: 0.8 }}
							/>
						</linearGradient>
					</defs>
					<rect
						x="2"
						y="3"
						width="4"
						height="16"
						fill="url(#chartGrad1)"
						rx="1"
					/>
					<rect
						x="8"
						y="7"
						width="4"
						height="12"
						fill="url(#chartGrad1)"
						rx="1"
					/>
					<rect
						x="14"
						y="1"
						width="4"
						height="18"
						fill="url(#chartGrad1)"
						rx="1"
					/>
					<rect
						x="20"
						y="9"
						width="2"
						height="10"
						fill="url(#chartGrad1)"
						rx="1"
					/>
					<circle cx="4" cy="2" r="1.5" fill="#818cf8" />
					<circle cx="10" cy="6" r="1.5" fill="#818cf8" />
					<circle cx="16" cy="0.5" r="1.5" fill="#818cf8" />
					<circle cx="21" cy="8" r="1.5" fill="#818cf8" />
					<path
						d="M4 2L10 6L16 0.5L21 8"
						stroke="#a78bfa"
						strokeWidth="2"
						fill="none"
					/>
				</svg>

				<svg
					className="graphic-element absolute top-[20%] right-[20%] w-16 h-16 sm:w-20 sm:h-20 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<defs>
						<linearGradient id="pieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop
								offset="0%"
								style={{ stopColor: "#f59e0b", stopOpacity: 1 }}
							/>
							<stop
								offset="50%"
								style={{ stopColor: "#ec4899", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#8b5cf6", stopOpacity: 1 }}
							/>
						</linearGradient>
					</defs>
					<circle
						cx="12"
						cy="12"
						r="8"
						fill="none"
						stroke="#e5e7eb"
						strokeWidth="16"
					/>
					<circle
						cx="12"
						cy="12"
						r="8"
						fill="none"
						stroke="url(#pieGrad)"
						strokeWidth="16"
						strokeDasharray="25.13 50.27"
						strokeDashoffset="25.13"
					/>
					<circle cx="12" cy="12" r="4" fill="#f3f4f6" />
					<text x="12" y="16" textAnchor="middle" fill="#6b7280" fontSize="4">
						60%
					</text>
				</svg>

				{/* Social Media Icons */}
				<svg
					className="graphic-element absolute top-[30%] left-[5%] w-12 h-12 sm:w-16 sm:h-16 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<defs>
						<linearGradient
							id="twitterGrad"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop
								offset="0%"
								style={{ stopColor: "#1da1f2", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#0891b2", stopOpacity: 1 }}
							/>
						</linearGradient>
					</defs>
					<rect
						x="1"
						y="1"
						width="22"
						height="22"
						rx="4"
						fill="url(#twitterGrad)"
					/>
					<path
						d="M18 6.5c-.8.4-1.7.6-2.6.8.9-.5 1.6-1.4 2-2.4-.9.5-1.8.9-2.8 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .3 0 .7.1 1-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3-1.6 1.3-3.7 2-5.9 2-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.6 2.2 9.1 0 14.1-7.5 14.1-14v-.6c1-.7 1.8-1.6 2.5-2.5z"
						fill="white"
					/>
				</svg>

				<svg
					className="graphic-element absolute bottom-[30%] right-[10%] w-16 h-16 sm:w-24 sm:h-24 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<defs>
						<radialGradient id="instaGrad" cx="30%" cy="40%">
							<stop
								offset="0%"
								style={{ stopColor: "#fdf497", stopOpacity: 1 }}
							/>
							<stop
								offset="25%"
								style={{ stopColor: "#fdf497", stopOpacity: 1 }}
							/>
							<stop
								offset="50%"
								style={{ stopColor: "#fd5949", stopOpacity: 1 }}
							/>
							<stop
								offset="75%"
								style={{ stopColor: "#d6249f", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#285AEB", stopOpacity: 1 }}
							/>
						</radialGradient>
					</defs>
					<rect
						x="1"
						y="1"
						width="22"
						height="22"
						rx="6"
						fill="url(#instaGrad)"
					/>
					<circle
						cx="12"
						cy="12"
						r="4"
						fill="none"
						stroke="white"
						strokeWidth="2"
					/>
					<circle cx="18" cy="6" r="1.5" fill="white" />
					<rect
						x="4"
						y="4"
						width="16"
						height="16"
						rx="4"
						fill="none"
						stroke="white"
						strokeWidth="1.5"
					/>
				</svg>

				{/* Marketing Elements */}
				<svg
					className="graphic-element absolute top-[15%] left-[75%] w-14 h-14 sm:w-20 sm:h-20 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<defs>
						<linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop
								offset="0%"
								style={{ stopColor: "#fbbf24", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#f59e0b", stopOpacity: 1 }}
							/>
						</linearGradient>
					</defs>
					<path
						d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
						fill="url(#starGrad)"
					/>
					<circle cx="12" cy="9" r="1" fill="#fde047" />
					<circle cx="8" cy="12" r="0.5" fill="#fde047" />
					<circle cx="16" cy="12" r="0.5" fill="#fde047" />
				</svg>

				<svg
					className="graphic-element absolute bottom-[20%] left-[20%] w-16 h-16 sm:w-24 sm:h-24 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<defs>
						<linearGradient
							id="megaphoneGrad"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop
								offset="0%"
								style={{ stopColor: "#10b981", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#059669", stopOpacity: 1 }}
							/>
						</linearGradient>
					</defs>
					<path
						d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z"
						fill="url(#megaphoneGrad)"
					/>
					<path d="M3 10h1v4H3z" fill="#34d399" />
					<circle cx="19.5" cy="10" r="0.5" fill="#6ee7b7" />
					<circle cx="20.5" cy="12" r="0.5" fill="#6ee7b7" />
					<circle cx="19.5" cy="14" r="0.5" fill="#6ee7b7" />
				</svg>

				{/* Additional Elements */}
				<svg
					className="graphic-element absolute top-[60%] right-[30%] w-10 h-10 sm:w-12 sm:h-12 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<path
						d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"
						fill="#ef4444"
						stroke="#dc2626"
						strokeWidth="0.5"
					/>
				</svg>

				<svg
					className="graphic-element absolute top-[70%] left-[60%] w-10 h-10 sm:w-12 sm:h-12 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<path
						d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"
						fill="#8b5cf6"
						stroke="#7c3aed"
						strokeWidth="0.5"
					/>
				</svg>

				<svg
					className="graphic-element absolute top-[45%] left-[10%] w-8 h-8 sm:w-10 sm:h-10 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<path
						d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
						fill="#06b6d4"
						stroke="#0891b2"
						strokeWidth="0.5"
					/>
				</svg>

				<svg
					className="graphic-element absolute bottom-[40%] right-[5%] w-14 h-14 sm:w-20 sm:h-20 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<path
						d="M12,15.39L8.24,17.66L9.23,13.36L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.36L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
						fill="#10b981"
						stroke="#059669"
						strokeWidth="0.5"
					/>
				</svg>

				<svg
					className="graphic-element absolute top-[5%] left-[50%] w-16 h-16 sm:w-20 sm:h-20 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<path
						d="M1,21H23L12,2"
						fill="#3b82f6"
						stroke="#1d4ed8"
						strokeWidth="0.5"
					/>
				</svg>

				<svg
					className="graphic-element absolute bottom-[10%] left-[40%] w-12 h-12 sm:w-16 sm:h-16 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<circle
						cx="12"
						cy="12"
						r="10"
						fill="#ec4899"
						stroke="#db2777"
						strokeWidth="0.5"
					/>
					<path
						d="M8 14s1.5 2 4 2 4-2 4-2"
						fill="none"
						stroke="white"
						strokeWidth="1"
					/>
					<line x1="9" y1="9" x2="9.01" y2="9" stroke="white" strokeWidth="1" />
					<line
						x1="15"
						y1="9"
						x2="15.01"
						y2="9"
						stroke="white"
						strokeWidth="1"
					/>
				</svg>

				<svg
					className="graphic-element absolute top-[40%] right-[45%] w-16 h-16 sm:w-24 sm:h-24 opacity-25 animate-flowFloat drop-shadow-md"
					viewBox="0 0 24 24"
				>
					<path
						d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z"
						fill="#10b981"
						stroke="#059669"
						strokeWidth="0.5"
					/>
				</svg>
			</div>

			{/* Overlay Pattern */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
				}}
			></div>

			{/* Center Content Area */}
			{/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
				<h1 className="text-4xl sm:text-5xl font-bold text-gray-800 drop-shadow-md mb-4 tracking-wider">
					{centerText}
				</h1>
				<p className="text-lg sm:text-xl font-light text-gray-500 tracking-wide">
					{subtitle}
				</p>
			</div> */}
		</div>
	);
};

export default BG;
