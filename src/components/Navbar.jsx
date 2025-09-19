// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 

export default function Navbar() {
  const nav = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/about" },   
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-zinc-200/60">
      <div className="section h-16 flex items-center justify-between">
        
        
        <a href="/" className="flex items-center">
          <img
            src="/BM_image.png"  
            alt="Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) =>
            n.href.startsWith("/#") ? (
              <HashLink
                smooth
                key={n.name}
                to={n.href}
                className="relative text-sm font-medium transition-colors hover:text-purple-500 
                           after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 
                           after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {n.name}
              </HashLink>
            ) : (
              <Link
                key={n.name}
                to={n.href}
                className="relative text-sm font-medium transition-colors hover:text-purple-500 
                           after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 
                           after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {n.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
