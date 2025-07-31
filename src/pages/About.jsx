import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import BG from "../components/BG";
import CTA from "../components/CTA";

const About = () => {
	const { t } = useTranslation("about");

	// Framer Motion animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	const teamMembers = [
		{
			name: "John Doe",
			role: t("team.members.0.role", "SEO Specialist"),
			image: "/team/john-doe.jpg",
		},
		{
			name: "Jane Smith",
			role: t("team.members.1.role", "PPC Manager"),
			image: "/team/jane-smith.jpg",
		},
		{
			name: "Alex Brown",
			role: t("team.members.2.role", "Web Developer"),
			image: "/team/alex-brown.jpg",
		},
	];

	return (
		<div className="relative min-h-screen mt-10 bg-white/60">
			{/* Background Component */}
			<div className="absolute inset-0 -z-20 opacity-70 h-full">
				<BG centerText="EntroWeb" subtitle="Digital Marketing Solutions" />
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
				{/* Hero Section */}
				<motion.section
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="text-center mb-16"
				>
					<motion.div variants={fadeInUp}>
						<span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 mb-6">
							{t("hero.badge")}
						</span>
					</motion.div>
					<motion.h1
						variants={fadeInUp}
						className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
					>
						{t("hero.headline")}
					</motion.h1>
					<motion.p
						variants={fadeInUp}
						className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
					>
						{t("hero.subheadline")}
					</motion.p>
				</motion.section>

				{/* Mission & Vision Section */}
				<motion.section
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="mb-16"
				>
					<motion.h2
						variants={fadeInUp}
						className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6"
					>
						{t("mission.title")}
					</motion.h2>
					<motion.p
						variants={fadeInUp}
						className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-center"
					>
						{t("mission.description")}
					</motion.p>
				</motion.section>

				{/* Team Section */}
				<motion.section
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="mb-16"
				>
					<motion.h2
						variants={fadeInUp}
						className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6"
					>
						{t("team.title")}
					</motion.h2>
					<motion.p
						variants={fadeInUp}
						className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12"
					>
						{t("team.description")}
					</motion.p>
					<motion.div
						variants={staggerContainer}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
								className="bg-white rounded-lg shadow-md overflow-hidden"
							>
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-64 object-cover"
								/>
								<div className="p-6 text-center">
									<h3 className="text-xl font-semibold text-gray-900">
										{member.name}
									</h3>
									<p className="text-gray-600">{member.role}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* CTA Section */}
				<div className="w-full">
					<CTA />
				</div>
			</div>
		</div>
	);
};

export default About;
