import { Link } from "react-router-dom";

export default function Blog3() {
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

      <h1 className="text-3xl font-bold mb-6">Why Consistency Matters</h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Consistency is one of the most underrated skills in both tech and life. 
        It’s not about making huge leaps in a single day, it’s about showing up 
        regularly and letting progress build over time.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Take job applications, for example. Most people send out dozens or even 
        hundreds before landing the right role. Rejections can be discouraging, 
        but consistency ensures that each application brings you one step closer 
        to the opportunity you’ve been waiting for.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        The same applies to learning and coding. Spending a little time each day 
        practicing algorithms, building projects, or experimenting with frameworks 
        matters more than cramming everything into one weekend. Skills compound 
        over time, and consistency is what allows that compounding effect to happen.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Consistency doesn’t mean perfection. It’s not about never missing a day, 
        it’s about getting back on track even after setbacks. In the long run, 
        those small, repeated efforts make all the difference between staying stuck 
        and moving forward.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Whether it’s applying for jobs, coding daily, or improving soft skills, 
        consistency is the quiet force that transforms effort into results. 
        It’s proof that steady steps, taken again and again, can create something 
        meaningful over time.
      </p>
    </section>
  );
}
