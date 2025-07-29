import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-gray-100">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Let’s talk!
                </motion.h2>

                <motion.p
                    className="text-gray-600 mb-10 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Just fill this form and we’ll contact you to discuss your project.
                    Hate forms? Drop us a message at{" "}
                    <a href="mailto:hello@waves.com" className="text-indigo-600 underline">
                        hello@waves.com
                    </a>
                </motion.p>

                <motion.form
                    className="bg-white p-8 rounded-xl shadow-md space-y-6 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    onSubmit={(e) => e.preventDefault()} // Placeholder
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tell Us About Your Project
                        </label>
                        <textarea
                            rows="5"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    {/* Optional File Upload (hidden for now) */}
                    {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Attachment</label>
            <input type="file" className="w-full" />
          </div> */}

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Send Request
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
