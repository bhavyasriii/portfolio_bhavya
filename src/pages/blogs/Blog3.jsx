import { Link } from "react-router-dom";

export default function Blog4() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      {/* Back to Blog */}
      <div className="mb-8">
        <Link
          to="/blog"
          className="text-purple-600 hover:underline font-medium"
        >
          ← Back to Blog
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">A Day in the Life of a CS Grad</h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        My day usually starts with coffee ☕ and opening my laptop to check emails and notifications. 
        A big part of my routine right now is applying for jobs. Some days it feels like sending out 10+ applications, 
        and over time that number has easily crossed into the hundreds. It can be exhausting, but it’s part of the journey.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        In between applications, I split my time between coding practice and personal projects for my portfolio. 
        Debugging errors teaches me more than any tutorial ever could, and finishing even a small feature feels like a win.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Afternoons are usually for learning — brushing up React, exploring machine learning, or reading about new tech. 
        I also try to keep balance with gym, walks, or catching up with friends, otherwise it’s easy to burn out.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Evenings are for polishing projects before sharing them on GitHub or LinkedIn, and preparing for interviews. 
        Being a grad right now is about persistence: sending out applications, learning every day, and trusting that 
        eventually, one of those “hundreds of applications” will turn into the right opportunity.
      </p>
    </section>
  );
}


