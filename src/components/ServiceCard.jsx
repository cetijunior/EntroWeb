export default function ServiceCard({ title, description, href }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={href} className="text-indigo-600 font-semibold hover:underline">
                Learn more
            </a>
        </div>
    );
}
