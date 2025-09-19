import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 mt-12 border-t border-gray-300/40 dark:border-gray-700/40 bg-white/40 dark:bg-zinc-900/40 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Bhavyasri. Built with ❤️ using React & Tailwind.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/bhavyasriii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/bhavyasri-m-593aa6214"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
