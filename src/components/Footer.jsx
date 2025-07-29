export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-8 px-4 text-center text-sm text-gray-500">
            <div className="max-w-6xl mx-auto space-y-3">
                <div className="flex justify-center gap-4 flex-wrap text-gray-600">
                    <a href="#" className="hover:text-indigo-600">Home</a>
                    <a href="#" className="hover:text-indigo-600">About Us</a>
                    <a href="#" className="hover:text-indigo-600">Blog</a>
                    <a href="#" className="hover:text-indigo-600">Services</a>
                    <a href="#contact" className="hover:text-indigo-600">Contact</a>
                </div>
                <div>
                    © 2022 Waves. All rights reserved. |
                    <a href="#" className="ml-1 hover:underline">Privacy Policy</a> |
                    <a href="#" className="ml-1 hover:underline">Terms of Use</a>
                </div>
            </div>
        </footer>
    );
}
