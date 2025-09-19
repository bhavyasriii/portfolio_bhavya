import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Left text content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="text-lg font-semibold tracking-wide uppercase">
          Hello, I’m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Bhavyasri Mudireddy
          </span>
        </h2>

        {/* Typewriter Effect */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <Typewriter
            words={[
              "Software Engineer",
              "Machine Learning Enthusiast",
              "AI Explorer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          I'm a curious mind who wandered into the world of code and found purpose in building, breaking, and fixing things with data.
          Currently exploring machine learning through real-world chaos, decoding market moods, and transforming data into actionable insights.
          Passionate about transforming messy data into meaningful insights, one model at a time.
          On a mission to become a full-stack ML engineer who doesn't just code but crafts intelligent systems that matter.
          Coffee. Curiosity. Consistency. And yes, a few semicolon errors.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/bhavyasriii"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/bhavyasri-m-593aa6214"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <img
          src="/profile.jpg"
          alt="Bhavyasri Mudireddy"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg border-4 border-white dark:border-gray-700 animate-float glow"
        />
      </div>
    </section>
  );
}
