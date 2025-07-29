export default function Button({ children, variant = "primary", href = "#" }) {
    const base = "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300";
    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        outline: "border border-white text-white hover:bg-white hover:text-black",
    };

    return (
        <a href={href} className={`${base} ${variants[variant]}`}>
            {children}
        </a>
    );
}
