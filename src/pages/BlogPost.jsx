import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BG from "../components/BG";

export default function BlogPost() {
	const { t } = useTranslation("blog");
	const { slug } = useParams();
	const [post, setPost] = useState(null);
	const [relatedPosts, setRelatedPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		fetch(`https://entroweb.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
			.then((res) => res.json())
			.then((data) => {
				if (data.length > 0) {
					setPost(data[0]);
					const categoryIds =
						data[0]._embedded?.["wp:term"]?.[0]?.map((term) => term.id) || [];

					if (categoryIds.length > 0) {
						fetch(
							`https://entroweb.com/wp-json/wp/v2/posts?categories=${categoryIds.join(
								","
							)}&per_page=3&exclude=${data[0].id}&_embed`
						)
							.then((res) => res.json())
							.then((relatedData) => setRelatedPosts(relatedData))
							.finally(() => setLoading(false));
					} else {
						setLoading(false);
					}
				} else {
					setLoading(false);
				}
			})
			.catch(() => setLoading(false));
	}, [slug]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600 border-opacity-50"></div>
			</div>
		);
	}

	if (!post) {
		return (
			<p className="p-10 text-center h-screen text-gray-600">{t("notFound")}</p>
		);
	}

	const featuredImage =
		post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
	const author = post._embedded?.author?.[0]?.name || "EntroWeb Team";
	const categories =
		post._embedded?.["wp:term"]?.[0]?.map((term) => term.name) || [];

	return (
		<div className="relative min-h-screen mt-16 bg-white/60">
			{/* Background Component */}
			<div className="absolute inset-0 -z-20 opacity-70 h-full">
				<BG centerText="EntroWeb" subtitle="Digital Marketing Solutions" />
			</div>

			{/* Main Content */}
			<article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16">
				{/* Hero Section */}
				<div className="relative mb-12">
					{featuredImage && (
						<div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
							<img
								src={featuredImage}
								alt={post.title.rendered}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							<h1
								className="absolute bottom-6 left-6 right-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
								dangerouslySetInnerHTML={{ __html: post.title.rendered }}
							/>
						</div>
					)}
					{!featuredImage && (
						<h1
							className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center"
							dangerouslySetInnerHTML={{ __html: post.title.rendered }}
						/>
					)}
				</div>

				{/* Meta Information */}
				<div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 mb-8 max-w-3xl mx-auto">
					<div className="flex flex-wrap gap-4 mb-4 sm:mb-0">
						<span>
							{new Date(post.date).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</span>
						<span className="hidden sm:inline">•</span>
						<span>
							{t("by")} {author}
						</span>
						{categories.length > 0 && (
							<>
								<span className="hidden sm:inline">•</span>
								<span>{categories.join(", ")}</span>
							</>
						)}
					</div>
					<span>{t("noComments")}</span>
				</div>

				{/* Post Content */}
				<div className="prose prose-lg max-w-3xl mx-auto text-gray-800 leading-relaxed">
					<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
				</div>

				{/* Back to Blog */}
				<div className="mt-12 text-center">
					<Link
						to="/blog"
						className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
					>
						<svg
							className="w-5 h-5 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						{t("backToBlog")}
					</Link>
				</div>

				{/* Related Posts */}
				{relatedPosts.length > 0 && (
					<div className="mt-16">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
							{t("relatedPosts")}
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{relatedPosts.map((relatedPost) => (
								<Link
									key={relatedPost.id}
									to={`/blog/${relatedPost.slug}`}
									className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
								>
									<img
										src={
											relatedPost._embedded?.["wp:featuredmedia"]?.[0]
												?.source_url || ""
										}
										alt={relatedPost.title.rendered}
										className="w-full h-48 object-cover"
									/>
									<div className="p-4">
										<h3
											className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors"
											dangerouslySetInnerHTML={{
												__html: relatedPost.title.rendered,
											}}
										/>
										<p className="text-sm text-gray-500 mt-2">
											{new Date(relatedPost.date).toLocaleDateString("en-US", {
												year: "numeric",
												month: "short",
												day: "numeric",
											})}
										</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				)}
			</article>
		</div>
	);
}
