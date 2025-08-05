import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
// import Galaxy from "./Galaxy";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import DarkVeil from "./DarkVeil";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const { t } = useTranslation("navbar");

	const mainLinks = [
		{ label: t("home"), path: "/" },
		{ label: t("about"), path: "/about" },
		{ label: t("blog"), path: "/blog" },
		// { label: t("services"), path: "/services" },
		{ label: t("projects"), path: "/projects" },
	];

	const scrollThreshold = 30;

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > scrollThreshold);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleNav = (path) => {
		navigate(path);
		setMobileOpen(false);
	};

	const { i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<header
			className={`fixed top-0 w-full bg-transparent rounded-b-2xl  z-50 transition-all duration-300`}
		>
			<nav
				className={`sm:max-w-[80%] max-w-full mx-auto px-4 py-3 md:py-4 flex items-center justify-between rounded-b-2xl 
      ${
				scrolled
					? "bg-white/50 backdrop-blur-md border-b border-white/30 shadow-lg"
					: "bg-white/30 backdrop-blur-lg border-b border-white/10"
			} transition-all duration-500`}
			>
				{/* Logo */}
				<div className="cursor-pointer">
					<img
						onClick={() => {
							if (location.pathname === "/") {
								window.scrollTo({ top: 0, behavior: "smooth" });
							} else {
								navigate("/");
							}
						}}
						className="h-12 w-auto cursor-pointer"
						src="/EntroWebLogo.png"
						alt="EntroWeb Logo"
					/>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-6 items-center font-semibold">
					{mainLinks.map((link) => (
						<li key={link.path} className="relative group">
							<button
								onClick={() => navigate(link.path)}
								className={`relative px-1 py-1 transition-all duration-300 
          bg-transparent text-base tracking-wide
          ${location.pathname === link.path ? "text-black" : "text-black/90"}
        `}
							>
								{link.label}
								{/* Underline animation */}
								<span
									className={`absolute bottom-0 left-1/2 h-[2px] w-0 bg-indigo-600 rounded-full transition-all duration-300 ease-out
            ${
							location.pathname === link.path
								? "w-full -translate-x-1/2"
								: "group-hover:w-full group-hover:-translate-x-1/2"
						}`}
								/>
							</button>
						</li>
					))}
				</ul>

				{/* Language Selector & CTA */}
				<div className="hidden md:flex items-center gap-4">
					{/* Language Dropdown */}
					<LanguageSwitcher
						currentLang={i18n.language}
						onChange={(lang) => i18n.changeLanguage(lang)}
					/>

					{/* CTA */}
					<button
						onClick={() => navigate("/contact")}
						className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
					>
						{t("contact")}
					</button>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden">
					<button onClick={() => setMobileOpen((prev) => !prev)}>
						{mobileOpen ? <X size={26} /> : <Menu size={26} />}
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{mobileOpen && (
					<motion.aside
						key="mobile-sidebar"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ duration: 0.3 }}
						className="fixed top-[40px] left-1/2 -translate-x-1/2 mt-10 w-[95%] h-[calc(100vh-70px)] z-50 rounded-2xl overflow-hidden"
					>
						{/* Galaxy Background Layer */}
						<div className="absolute bg-black inset-0 z-0 rounded-2xl overflow-hidden border-2 sm:border-0 border-violet-950">
							<DarkVeil />

							{/* Frosted Glass Overlay */}
							<div className="absolute inset-0 bg-white/10 backdrop-blur-[6px]" />
						</div>

						{/* Foreground Content */}
						<div className="relative z-10 h-full flex flex-col justify-between text-white">
							<div className="p-6 space-y-6 overflow-y-auto">
								{/* Header */}
								<h2 className="w-full text-lg text-center font-semibold">
									{t("pages")}
								</h2>

								<hr className="border-white/30" />

								{/* Main Navigation */}
								<div className="space-y-4">
									{mainLinks.map((link) => (
										<div key={link.path}>
											<button
												onClick={() => handleNav(link.path)}
												className={`block w-full text-left hover:text-indigo-300 font-medium transition ${
													location.pathname === link.path
														? "text-indigo-300 font-semibold"
														: "text-white"
												}`}
											>
												{link.label}
											</button>
										</div>
									))}
								</div>

								<hr className="border-white/30 my-6" />

								{/* CTA */}
								{/* Language Switcher */}
								<div className="pb-0 ">
									<LanguageSwitcher
										isMobile
										currentLang={i18n.language}
										onChange={(lang) => i18n.changeLanguage(lang)}
									/>
								</div>

								<div className="flex justify-end items-end">
									<button
										onClick={() => handleNav("/contact")}
										className="w-full bg-indigo-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
									>
										{t("contact")}
									</button>
								</div>
							</div>

							{/* Footer */}
							<div className="flex justify-center space-x-4 items-center text-center pb-28 rounded-t-2xl mx-2 text-xs text-white/80 py-4 border-t border-white/20 bg-white/10 backdrop-blur-md">
								<img className="animate-spin size-10" src="/CALogo.png" />

								<div className="">
									<span>{t("poweredBy")}: </span>
									<a
										href="https://ca-webservices.com"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-violet-500"
									>
										ca-webservices.com
									</a>
								</div>
							</div>
						</div>
					</motion.aside>
				)}
			</AnimatePresence>
		</header>
	);
}
