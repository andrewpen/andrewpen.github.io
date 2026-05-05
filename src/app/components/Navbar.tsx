import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { hero } from "../content";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "speaking", label: "Speaking" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 tracking-tight"
        >
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 text-white flex items-center justify-center">
            AP
          </span>
          <span className="hidden sm:inline text-slate-900">Andrew Pendleton</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={hero.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-full bg-slate-900 text-white hover:bg-indigo-600 transition-colors"
          >
            Get in touch
          </button>
        </div>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-slate-200 bg-white">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="w-full text-left py-2 text-slate-700 hover:text-indigo-600"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
