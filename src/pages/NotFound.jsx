import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <motion.h1
                className="text-6xl font-extrabold text-gray-900 mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                404
            </motion.h1>
            <motion.p
                className="text-xl text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Oops! The page you're looking for doesn't exist.
            </motion.p>
            <motion.button
                onClick={() => navigate("/")}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Go back home
            </motion.button>
        </section>
    );
}
