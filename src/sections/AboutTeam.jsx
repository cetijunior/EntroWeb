import React, { useState } from "react";
import {
	Users,
	Lightbulb,
	Heart,
	Zap,
	ArrowRight,
	Linkedin,
	Twitter,
	Mail,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutTeam() {
	const [hoveredMember, setHoveredMember] = useState(null);
	const { t } = useTranslation("aboutP");

	const teamRoles = t("team.members", { returnObjects: true });

	const teamMembers = [
		{
			name: "Sarah Johnson",
			role: teamRoles[0]?.role || "SEO Specialist",
			bio: t("team.bios.0"),
			image: "/api/placeholder/300/300",
			skills: ["SEO", "Keyword Research", "On-Page Optimization"],
			social: {
				linkedin: "https://linkedin.com/in/sarahjohnson",
				twitter: "https://twitter.com/sarahseo",
				email: "sarah@entroweb.com",
			},
			color: "from-purple-500 to-pink-500",
		},
		{
			name: "Marcus Chen",
			role: teamRoles[1]?.role || "PPC Manager",
			bio: t("team.bios.1"),
			image: "/api/placeholder/300/300",
			skills: ["PPC", "Google Ads", "Campaign Management"],
			social: {
				linkedin: "https://linkedin.com/in/marcuschen",
				twitter: "https://twitter.com/ppcmarcus",
				email: "marcus@entroweb.com",
			},
			color: "from-blue-500 to-cyan-500",
		},
		{
			name: "Emma Rodriguez",
			role: teamRoles[2]?.role || "Web Developer",
			bio: t("team.bios.2"),
			image: "/api/placeholder/300/300",
			skills: ["React", "Next.js", "Tailwind CSS"],
			social: {
				linkedin: "https://linkedin.com/in/emmarodriguez",
				twitter: "https://twitter.com/emmawebdev",
				email: "emma@entroweb.com",
			},
			color: "from-green-500 to-emerald-500",
		},
	];

	const values = [
		{
			icon: Lightbulb,
			title: "Innovation First",
			description:
				"We stay ahead of trends and continuously explore new ways to grow your brand.",
		},
		{
			icon: Heart,
			title: "Client-Centric",
			description:
				"Your success is our success. We treat every project as if it were our own business.",
		},
		{
			icon: Zap,
			title: "Results Driven",
			description:
				"We focus on measurable outcomes that directly impact your bottom line.",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
						<Users className="w-4 h-4 mr-2" />
						{t("team.title")}
					</div>

					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						{t("team.title")}
					</h2>

					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{t("team.description")}
					</p>
				</div>

				{/* Team Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
					{teamMembers.map((member, index) => (
						<div
							key={member.name}
							className="group relative"
							onMouseEnter={() => setHoveredMember(index)}
							onMouseLeave={() => setHoveredMember(null)}
						>
							<div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4">
								<div className="relative h-64">
									<div
										className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-90`}
									/>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
											<span className="text-3xl font-bold text-white">
												{member.name
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</span>
										</div>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600">
										{member.name}
									</h3>
									<p className="text-indigo-600 font-semibold mb-2">
										{member.role}
									</p>
									<p className="text-sm text-gray-600 mb-4">{member.bio}</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{member.skills.map((skill) => (
											<span
												key={skill}
												className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
											>
												{skill}
											</span>
										))}
									</div>

									<div className="flex space-x-3">
										<a
											href={member.social.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition"
										>
											<Linkedin className="w-4 h-4" />
										</a>
										<a
											href={member.social.twitter}
											target="_blank"
											rel="noopener noreferrer"
											className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition"
										>
											<Twitter className="w-4 h-4" />
										</a>
										<a
											href={`mailto:${member.social.email}`}
											className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition"
										>
											<Mail className="w-4 h-4" />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
