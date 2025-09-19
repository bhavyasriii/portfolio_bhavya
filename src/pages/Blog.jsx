import { Link } from "react-router-dom";

export default function Blog() {
  const blogs = [
    {
      title: "Getting Started with Machine Learning",
      description: "A beginner-friendly introduction to machine learning concepts.",
      link: "/blog1",
    },
    {
      title: "My Journey with React",
      description: "Lessons I learned while building projects with React.",
      link: "/blog2",
    },
    {
      title: "A Day in the Life of a Student Developer",
      description: "What balancing code, classes, and projects looked like in my routine.",
      link: "/blog3",
    },
    {
      title: "Why Consistency Matters",
      description: "How small daily actions build up to long-term success.",
      link: "/blog4",
    },
  ];

  return (
    <section
      className="min-h-screen py-20 px-6 md:px-16 lg:px-24 
                 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50"
    >
      <h2 className="text-3xl font-bold text-center mb-12">📝 Blog</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="p-6 bg-white/80 dark:bg-zinc-800/60 backdrop-blur 
                       rounded-xl shadow-md hover:shadow-xl 
                       transition-transform transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {blog.description}
            </p>
            <Link
              to={blog.link}
              className="inline-block px-4 py-2 rounded-lg border border-purple-400 
                         text-purple-600 dark:text-purple-400 
                         hover:bg-purple-100 dark:hover:bg-purple-900/40 transition"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
