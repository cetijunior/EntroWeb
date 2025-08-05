import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BG from "../components/BG";

export default function Blog() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://entroweb.com/wp-json/wp/v2/posts?_embed")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error("Error fetching posts:", err);
				setLoading(false);
			});
	}, []);

	return (
		<>
			<Helmet>
				<title>Blog – EntroWeb</title>
				<meta
					name="description"
					content="Read the latest posts, insights, and case studies from EntroWeb."
				/>
				<meta property="og:title" content="Blog – EntroWeb" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://entroweb.com/blog/" />
				<meta property="og:image" content="https://entroweb.com/logo.png" />
			</Helmet>

			<section className="min-h-screen flex items-center justify-start flex-col py-24 px-4 mx-auto  ">
				<div className="absolute inset-0 -z-20 opacity-70">
					<BG centerText="EntroWeb" subtitle="Digital Marketing Solutions" />
				</div>

				<h1 className="text-4xl font-extrabold text-indigo-900 mb-12 border-b-4 border-indigo-200 inline-block">
					Blog
				</h1>

				{loading ? (
					<div className="flex justify-center items-center h-[40vh]">
						<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600 border-opacity-50"></div>
					</div>
				) : (
					<div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
						{posts.map((post) => {
							const featuredImage =
								post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

							return (
								<article
									key={post.id}
									className="bg-white border border-indigo-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
								>
									{featuredImage && (
										<img
											src={featuredImage}
											alt="Featured"
											className="w-full h-52 object-cover"
										/>
									)}

									<div className="p-6 flex flex-col flex-grow">
										<Link to={`/blog/${post.slug}`}>
											<h2
												className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition"
												dangerouslySetInnerHTML={{
													__html: post.title.rendered,
												}}
											/>
										</Link>

										<div className="text-sm text-gray-500 mb-4 flex items-center gap-3">
											<span>
												📅{" "}
												{new Date(post.date).toLocaleDateString(undefined, {
													year: "numeric",
													month: "long",
													day: "numeric",
												})}
											</span>
											<span>•</span>
											<span>🗨 No Comments</span>
										</div>

										<div
											className="text-gray-700 text-sm line-clamp-4 flex-grow"
											dangerouslySetInnerHTML={{
												__html: post.excerpt.rendered,
											}}
										/>

										<Link
											to={`/blog/${post.slug}`}
											className="mt-6 inline-block text-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-semibold transition"
										>
											Read More
										</Link>
									</div>
								</article>
							);
						})}
					</div>
				)}
			</section>
		</>
	);
}
