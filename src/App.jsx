import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog"; 
import Blog1 from "./pages/blogs/Blog1";
import Blog2 from "./pages/blogs/Blog2";
import Blog3 from "./pages/blogs/Blog3";
import Blog4 from "./pages/blogs/Blog4";
import About from "./pages/About"; 

export default function App() {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      document.documentElement.classList.toggle("dark", stored === "dark");
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  return (
    <Router>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Blog Main Page */}
          <Route path="/blog" element={<Blog />} />

          {/* Blog Detail Pages */}
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}
