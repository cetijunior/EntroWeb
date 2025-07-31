import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
	{ code: "en", label: "🇬🇧 English", short: "ENG" },
	{ code: "it", label: "🇮🇹 Italiano", short: "ITA" },
	{ code: "sq", label: "🇦🇱 Shqip", short: "SHQ" },
];

export default function LanguageSwitcher({
	currentLang = "en",
	onChange,
	isMobile = false,
}) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(currentLang);

	useEffect(() => {
		setSelected(currentLang);
	}, [currentLang]);

	const selectedLang =
		languages.find((l) => l.code === selected) || languages[0];

	const handleSelect = (langCode) => {
		setSelected(langCode);
		onChange?.(langCode); // optional chaining in case onChange is missing
		setOpen(false);
	};

	return (
		<div className={`relative z-50 ${isMobile ? "w-full" : ""}`}>
			<button
				onClick={() => setOpen((prev) => !prev)}
				className={`w-full ${
					isMobile ? "justify-between" : "justify-center"
				} flex items-center gap-2 px-4 py-2 rounded-full 
          text-sm font-medium border border-white/30
          ${
						isMobile
							? "bg-black/10 text-white"
							: "bg-black/10 text-black backdrop-blur-md"
					}`}
			>
				{selectedLang.short}
				<svg
					className="w-4 h-4 ml-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			<AnimatePresence>
				{open && (
					<motion.ul
						initial={{ opacity: 0, y: -4 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -4 }}
						transition={{ duration: 0.2 }}
						className={`absolute ${
							isMobile ? "w-full left-0 mt-2" : "w-40 right-0 mt-2"
						} 
              sm:bg-white/90 opacity-35 backdrop-blur-2xl bg-black/50 border border-white/30 
              rounded-xl shadow-xl overflow-hidden text-sm
              ${isMobile ? "text-white" : "text-black"}`}
					>
						{languages.map((lang) => (
							<li key={lang.code}>
								<button
									onClick={() => handleSelect(lang.code)}
									className="w-full text-left px-4 py-2 hover:bg-white/30 transition"
								>
									{lang.label}
								</button>
							</li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
}
