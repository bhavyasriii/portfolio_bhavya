import { Link } from "react-router-dom";

export default function Blog1() {
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

      <h1 className="text-3xl font-bold mb-6">Getting Started with Machine Learning</h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        When I first stepped into the world of machine learning, everything looked overwhelming, 
        algorithms, datasets, libraries, and math behind the models. But I realized the best way to 
        learn was to simply start small.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        My approach was hands-on: take a small dataset, apply a basic model, and observe how it performs. 
        From there, I built up step by step, experimenting with preprocessing, feature engineering, and tuning.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        The key takeaway? Don’t wait until you know everything. Start where you are, with what you have, 
        and let the process guide you.
      </p>
    </section>
  );
}
