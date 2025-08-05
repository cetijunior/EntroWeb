import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
	const { t } = useTranslation("contact");

	return (
		<section
			id="contact"
			className="relative min-h-screen flex items-center justify-center px-4 sm:py-0 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
			itemScope
			itemType="https://schema.org/ContactPage"
		>
			{/* Background blobs */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
				<div className="absolute top-40 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-300"></div>
				<div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-5xl w-full space-y-16">
				{/* Header */}
				<div className="text-center space-y-6">
					<div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium w-fit mx-auto">
						<Mail className="w-4 h-4 mr-2" />
						{t("badge")}
					</div>

					<h1
						className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
						itemProp="headline"
					>
						{t("headline.prefix")}
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
							{t("headline.highlight")}
						</span>
					</h1>

					<p
						className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
						itemProp="description"
					>
						{t("description")}
					</p>
				</div>

				{/* Contact Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
					<div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
						<div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
							<Mail className="w-5 h-5 text-indigo-600" />
						</div>
						<div>
							<p className="text-sm font-medium text-gray-900">
								{t("email.title")}
							</p>
							<a
								href="mailto:hello@waves.com"
								className="text-indigo-600 hover:text-indigo-700 transition-colors"
								itemProp="email"
							>
								hello@waves.com
							</a>
						</div>
					</div>

					<div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
						<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
							<Phone className="w-5 h-5 text-green-600" />
						</div>
						<div>
							<p className="text-sm font-medium text-gray-900">
								{t("phone.title")}
							</p>
							<a
								href="tel:+1234567890"
								className="text-green-600 hover:text-green-700 transition-colors"
								itemProp="telephone"
							>
								+1 (234) 567-890
							</a>
						</div>
					</div>

					<div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
						<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
							<MapPin className="w-5 h-5 text-purple-600" />
						</div>
						<div>
							<p className="text-sm font-medium text-gray-900">
								{t("location.title")}
							</p>
							<p className="text-purple-600" itemProp="address">
								123 Innovation Street, Tech City
							</p>
						</div>
					</div>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
					<div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl">
						<div className="text-3xl font-bold text-gray-900">50+</div>
						<div className="text-sm text-gray-600">{t("stats.projects")}</div>
					</div>
					<div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl">
						<div className="text-3xl font-bold text-gray-900">24h</div>
						<div className="text-sm text-gray-600">{t("stats.response")}</div>
					</div>
					<div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl">
						<div className="text-3xl font-bold text-gray-900">100%</div>
						<div className="text-sm text-gray-600">
							{t("stats.satisfaction")}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
