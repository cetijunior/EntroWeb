import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import BG from "../components/BG";

export default function Footer() {
	const { t } = useTranslation("footer");
	const navigate = useNavigate();

	const navLinks = [
		{ label: t("nav.home"), path: "/" },
		{ label: t("nav.about"), path: "/about" },
		{ label: t("nav.blog"), path: "/blog" },
		{ label: t("nav.services"), path: "/services" },
	];

	return (
		<footer className="relative bg-[#0d0d0d] text-gray-300 pt-16">
			{/* Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start justify-center sm:justify-between pb-12">
				{/* Logo & Description Block */}
				<div className="flex-1 flex flex-col justify-center w-full items-center md:items-start space-y-4 text-center md:text-left">
					<img
						src="/EntroWebLogo.png"
						alt="EntroWeb Logo"
						className="h-12 sm:h-14 w-fit bg-white rounded-md"
					/>
					<p className="text-sm text-gray-400 max-w-xs">{t("description")}</p>
				</div>

				{/* Navigation Block */}
				<div className="flex-1 flex flex-col justify-center w-full items-center md:items-start gap-4 text-sm font-medium">
					<h3 className="text-lg font-semibold text-white mb-2">
						{t("nav.title")}
					</h3>
					{navLinks.map((link) => (
						<button
							key={link.path}
							onClick={() => navigate(link.path)}
							className="hover:text-white transition-colors"
						>
							{link.label}
						</button>
					))}
				</div>

				{/* Socials Block */}
				<div className="flex-1 flex flex-col justify-center w-full items-center md:items-start gap-4">
					<h3 className="text-lg font-semibold text-white mb-2">
						{t("socials.title")}
					</h3>
					<div className="flex gap-4 text-xl">
						<a href="#" className="hover:text-white transition-colors">
							<FaFacebookF />
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<FaTwitter />
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<FaInstagram />
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className="border-t border-white/20 my-6 mx-6" />

			{/* Bottom Row */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 pb-8">
				<div className="flex gap-4 mb-4 sm:mb-0">
					<a
						href="/privacy-policy"
						className="hover:text-white transition-colors"
					>
						{t("privacyPolicy")}
					</a>
					<span className="text-gray-400">|</span>
					<a
						href="/terms-of-use"
						className="hover:text-white transition-colors"
					>
						{t("termsOfUse")}
					</a>
				</div>

				<p>{t("copyright", { year: new Date().getFullYear() })}</p>
			</div>

			{/* Powered By Section */}
			<div className="relative z-10 flex items-center justify-center gap-6 pb-6">
				<img
					className="sm:size-20 size-10 animate-spin hover:animate-none"
					src="/CALogo.png"
					alt="CA Web Services Logo"
				/>
				<a
					href="https://ca-webservices.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white/60 hover:text-white font-medium transition-colors"
				>
					{t("poweredBy")} ca-webservices.com
				</a>
			</div>
		</footer>
	);
}
