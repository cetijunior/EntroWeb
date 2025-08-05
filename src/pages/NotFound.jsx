import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BG from "../components/BG";
import { useTranslation } from "react-i18next";

export default function NotFound() {
	const navigate = useNavigate();
	const { t } = useTranslation("common"); // or "errors" if you use a separate namespace

	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 -z-10 opacity-60">
				<BG centerText="404" subtitle={t("notfound.title")} />
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-2xl mx-auto py-24">
				<motion.h1
					className="text-7xl sm:text-8xl font-extrabold text-indigo-900 mb-6"
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					404
				</motion.h1>

				<motion.p
					className="text-lg sm:text-xl text-gray-700 mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					{t("notfound.description")}
				</motion.p>

				<motion.button
					onClick={() => navigate("/")}
					className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					{t("notfound.button")}
				</motion.button>
			</div>
		</section>
	);
}
