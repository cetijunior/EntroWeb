import { motion } from "framer-motion";

const articles = [
    {
        title: "Twitter board meets Musk to discuss bid - Reports",
        category: "Business",
        date: "April 25, 2022",
    },
    {
        title: "Actors launch campaign against AI 'show stealers'",
        category: "Technology",
        date: "June 10, 2022",
    },
    {
        title: "OneWeb: UK satellite firm does deal to use Indian rockets",
        category: "Science",
        date: "May 10, 2022",
    },
];

export default function News() {
    return (
        <section id="news" className="py-20 bg-white px-4">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    News & Insights
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <div className="text-sm text-gray-500 mb-2">
                                {article.category} • {article.date}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {article.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="inline-block text-indigo-600 font-semibold hover:underline"
                >
                    Explore all news →
                </motion.a>
            </div>
        </section>
    );
}
