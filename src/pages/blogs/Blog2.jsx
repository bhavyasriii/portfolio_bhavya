import { Link } from "react-router-dom";

export default function Blog2() {
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

      <h1 className="text-3xl font-bold mb-6">My Journey with React</h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        When I first started with React, it felt like learning a whole new way of thinking. 
        Components, props, and state were unfamiliar concepts, but I soon realized they made building 
        UIs structured and fun.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        By working on personal projects, I learned how to break down big features into reusable components. 
        Debugging JSX and styling with Tailwind taught me how to balance structure and creativity.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Looking back, React has been more than a tool, it’s been a mindset shift toward building things 
        modularly and focusing on user experience.
      </p>
    </section>
  );
}
