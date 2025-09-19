import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 lg:px-24 text-center">
      <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        I’m always open to exciting opportunities, collaborations, or just a friendly chat about tech.  
        Drop me a message!
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://linkedin.com/in/bhavyasri-m-593aa6214"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/bhavyasriii"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
