import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

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
        <footer className="bg-[#0d0d0d] text-gray-300 pt-16">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-12">
                {/* Logo */}
                <div className="flex justify-start">
                    <img
                        src="/EntroWebLogo.png"
                        alt="Waves Logo"
                        className="h-8 sm:h-10 w-auto bg-white rounded-md"
                    />
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <button
                            key={link.path}
                            onClick={() => navigate(link.path)}
                            className="hover:text-white transition"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex justify-end gap-4 text-xl">
                    <a href="#" className="hover:text-white transition">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-white transition">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-white transition">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-white transition">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 my-6 mx-6" />

            {/* Bottom Row */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 pb-8">
                <div className="flex gap-4 mb-4 sm:mb-0">
                    <a href="privacy-policy" className="hover:text-white transition">
                        Privacy Policy
                    </a>
                    <span className="text-gray-400">|</span>
                    <a href="terms-of-use" className="hover:text-white transition">
                        Terms of Use
                    </a>
                </div>

                <p>© 2022 Waves. All rights reserved.</p>
            </div>

            <div className="flex items-center justify-center gap-6 pb-6">
                <img
                    className="size-20 animate-spin hover:animate-none"
                    src="/CALogo.png"
                    alt="CA Web Services Logo"
                />
                <a
                    href="https://ca-webservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-gray-600 font-medium transition-colors"
                >
                    {t('poweredBy')} ca-webservices.com
                </a>
            </div>

        </footer>
    );
}
