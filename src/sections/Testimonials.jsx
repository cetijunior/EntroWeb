import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-gray-100 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What our great customers say
                </motion.h2>

                <motion.blockquote
                    className="text-xl italic text-gray-700 mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    “Waves demonstrates an excellent understanding of user needs and all
                    of their designs are creative and elegant in their simplicity.”
                </motion.blockquote>

                <motion.div
                    className="text-gray-600 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Jerome Bell <br />
                    <span className="text-sm text-gray-500">President of Sales, Binford Ltd.</span>
                </motion.div>
            </div>
        </section>
    );
}
