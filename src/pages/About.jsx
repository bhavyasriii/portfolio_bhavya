import illustration from "../assets/girl_image.png"; // 👈 place your image in /src/assets

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 md:px-16 lg:px-24 
                 bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-50"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        About Me
      </h2>

      {/* Intro Card with Illustration */}
      <div className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur">
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m a recent Computer Science graduate who found purpose in solving
            problems through code and data. Over the past few years, I’ve
            transitioned from writing simple scripts to building projects that
            merge software engineering with machine learning. My journey has
            been about curiosity, consistency, and a drive to turn ideas into
            real-world solutions.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src={illustration}
            alt="Working illustration"
            className="max-h-80 w-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="p-6 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-purple-600">
            🎓 Education
          </h3>
          <p className="text-sm text-gray-700">
            Master’s in Computer Science – University of North Texas (2025) <br />
            Built strong foundations in software development, data science,
            and visualization.
          </p>
        </div>

        <div className="p-6 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-purple-600">
            💼 Experience
          </h3>
          <p className="text-sm text-gray-700">
            1 year in Software Development + hands-on projects in ML. <br />
            Worked on ServiceNow, cloud apps, and machine learning-based
            personal projects like RainCastML & CareerWise AI.
          </p>
        </div>

        <div className="p-6 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-purple-600">
            🚀 Projects & Learning
          </h3>
          <p className="text-sm text-gray-700">
            From building job-tracking apps to AI-powered assistants, I’ve
            explored how technology can make everyday processes smarter.
            Each project sharpened my ability to learn quickly and deliver
            results.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        <div className="p-6 bg-white/80 rounded-xl shadow-md text-center">
          <h4 className="font-semibold text-purple-600 mb-2">Consistency</h4>
          <p className="text-sm text-gray-700">
            I believe small, consistent steps build long-term impact.
          </p>
        </div>
        <div className="p-6 bg-white/80 rounded-xl shadow-md text-center">
          <h4 className="font-semibold text-purple-600 mb-2">Problem-Solving</h4>
          <p className="text-sm text-gray-700">
            I enjoy breaking down complex problems into practical solutions.
          </p>
        </div>
        <div className="p-6 bg-white/80 rounded-xl shadow-md text-center">
          <h4 className="font-semibold text-purple-600 mb-2">Adaptability</h4>
          <p className="text-sm text-gray-700">
            Comfortable learning new tools and adapting to fast-paced environments.
          </p>
        </div>
      </div>

      {/* Future Vision */}
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          My next goal is to grow into a Machine Learning Engineer role,
          where I can combine software development with AI to solve
          meaningful problems. I aim to keep building projects that matter,
          while learning from industry leaders and collaborating in dynamic
          teams.
        </p>
      </div>
    </section>
  );
}
