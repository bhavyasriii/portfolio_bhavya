import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaAws, FaJava } from "react-icons/fa";
import { SiPostgresql, SiPandas, SiScikitlearn, SiTensorflow, SiTailwindcss, SiJavascript, SiCplusplus } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Languages & Libraries",
      items: [
        { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "C++", icon: <SiCplusplus />, color: "text-blue-500" },
        { name: "Java", icon: <FaJava />, color: "text-red-600" },
        { name: "SQL", icon: <SiPostgresql />, color: "text-blue-700" },
        { name: "Pandas", icon: <SiPandas />, color: "text-green-500" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", icon: <FaReact />, color: "text-sky-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
      ],
    },
    {
      category: "Machine Learning",
      items: [
        { name: "scikit-learn", icon: <SiScikitlearn />, color: "text-orange-500" },
        { name: "TensorFlow", icon: <SiTensorflow />, color: "text-yellow-400" },
      ],
    },
    {
      category: "Tools & Cloud",
      items: [
        { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
        { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">⚡ Skills</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center space-y-2 group p-6 rounded-xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur shadow-md hover:shadow-lg transition"
                >
                  <div className={`text-5xl transition-transform group-hover:scale-110 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
