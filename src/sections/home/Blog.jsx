import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BG from "../../components/BG";

const Blog = () => {
	const { t } = useTranslation("home");
	const [posts, setPosts] = useState([]);

	// Fetch recent posts
	useEffect(() => {
		fetch("https://entroweb.com/wp-json/wp/v2/posts?per_page=3&_embed")
			.then((res) => res.json())
			.then((data) => setPosts(data))
			.catch(() => setPosts([])); // Handle API errors
	}, []);

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

	return (
		<section className="relative py-16 bg-transparent">
			{/* Background Component */}
			<div className="absolute inset-0 -z-20 opacity-70 h-full">
				<BG centerText="EntroWeb" subtitle="Digital Marketing Solutions" />
			</div>

			{/* Content */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={staggerContainer}
				className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
			>
				{/* Header */}
				<motion.div variants={fadeInUp} className="text-center mb-12">
					<span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 mb-6">
						{t("blog.title")}
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						{t("blog.title")}
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
						{t("blog.description")}
					</p>
				</motion.div>

				{/* Posts Grid */}
				{posts.length === 0 ? (
					<p className="text-center text-gray-600">
						{t("blog.loading", "Loading...")}
					</p>
				) : (
					<motion.div
						variants={staggerContainer}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{posts.map((post) => (
							<motion.div
								key={post.id}
								variants={fadeInUp}
								whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
								className="bg-white rounded-lg shadow-md overflow-hidden"
							>
								<img
									src={
										post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
										"/placeholder.jpg"
									}
									alt={post.title.rendered}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<h3
										className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors"
										dangerouslySetInnerHTML={{ __html: post.title.rendered }}
									/>
									<p className="text-sm text-gray-500 mt-2">
										{new Date(post.date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "short",
											day: "numeric",
										})}
									</p>
									<p className="text-gray-600 mt-4 line-clamp-3">
										{post.excerpt.rendered.replace(/<[^>]+>/g, "")}
									</p>
									<Link
										to={`/blog/${post.slug}`}
										className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
									>
										{t("blog.readMore")}
										<svg
											className="ml-2 w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</Link>
								</div>
							</motion.div>
						))}
					</motion.div>
				)}

				{/* View All Button */}
				<motion.div variants={fadeInUp} className="text-center mt-12">
					<Link
						to="/blog"
						className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
					>
						{t("blog.viewAll")}
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Blog;
