import { useState } from "react";
import { Menu, X } from "lucide-react";


const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },

];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-white backdrop-blur-md border-b border-gray-200 bg-linear-to-r from-gray-500 via-gray-500 to-gray-500">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
       
          <span className="text-xl font-semibold italic flex items-center gap-1 cursor-pointer">
            <span className="text-blue-500">&lt;</span>
            <span className="bg-gradient-to-red from-indigo-500 via-purple-500 to-pink-500 bg-clip-text  text-white-900">
              Khalid
            </span>
            <span className="text-blue-500">/&gt;</span>
          </span>
       
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white-900 hover:text-indigo-600 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-md border hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-fade-in-down">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition-colors text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
