import { FaGithub, FaExternalLinkAlt, FaReact, FaPython } from "react-icons/fa";
import { SiStreamlit, SiTailwindcss } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "RainCastML",
      description:
        "A weather prediction app built with Machine Learning and Streamlit, deployed on Streamlit Cloud.",
      tech: [<FaPython key="py" />, <SiStreamlit key="streamlit" />],
      github: "https://github.com/bhavyasriii/raincastml",
      demo: "https://rainml.streamlit.app/",
    },
    {
      title: "JobHouse Tracker",
      description:
        "A React Native app to track job applications with features like status updates and persistence.",
      tech: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />],
      github: "https://github.com/bhavyasriii/jobhouse-app",
      demo: "https://jobhouse-app.vercel.app/",
    },
    {
      title: "CareerWise AI Assistant",
      description:
        "An AI-powered resume and JD analysis tool using LLMs for career guidance.",
      tech: [<FaReact key="react" />, <FaPython key="py" />],
      github: "https://github.com/bhavyasriii/careerwise-ai-assistant",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">🚀 Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-white/70 dark:bg-zinc-800/60 backdrop-blur rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex space-x-3 mb-4 text-xl text-purple-500">
              {project.tech.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
              >
                <FaGithub /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition"
              >
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
