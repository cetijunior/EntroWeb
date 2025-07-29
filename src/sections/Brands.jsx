import { motion } from "framer-motion";

const brands = [
    {
        name: "BLVCK",
        image: "/EntroWebLogo.png",
    },
    {
        name: "FREDI",
        image: "/hero.jpg",
    },
    {
        name: "CREAM",
        image: "/EntroWebLogo.png",
    },
    {
        name: "APOLLO",
        image: "/hero.jpg",
    },
];

export default function Brands() {
    return (
        <section className=" bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Work With Global Brands
                </motion.h1>

                <motion.p
                    className="text-center text-gray-600 mb-14 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    We craft unforgettable branding experiences for industry-leading names across fashion, tech, and lifestyle.
                </motion.p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            className="group rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm py-3 text-center text-white font-semibold text-lg">
                                {brand.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
