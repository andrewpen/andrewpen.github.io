import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { WritingTeaser } from "./components/WritingTeaser";
import { Speaking } from "./components/Speaking";
import { Work } from "./components/Work";
import { Bio } from "./components/Bio";
import { Practice } from "./components/Practice";
import { Subscribe } from "./components/Subscribe";
import { ticker, contact } from "./content";

const navLinks = [
  { label: "Writing", href: "#writing" },
  { label: "Speaking", href: "#speaking" },
  { label: "Work", href: "#work" },
  { label: "Practice", href: "#practice" },
  { label: "Bio", href: "#bio" },
];

const footerLinks = [
  { label: "Writing", href: "/writing.html" },
  { label: "LinkedIn", href: contact.linkedinUrl },
  { label: "Email", href: `mailto:${contact.email}` },
  { label: "CV", href: "/resume.html" },
];

export default function App() {
  return (
    <div className="apb" style={{ minHeight: "100vh", background: "#ffffff", color: "#1f2e3d" }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-slate-900 focus:rounded focus:shadow-lg focus:outline focus:outline-2 focus:outline-indigo-600"
      >
        Skip to main content
      </a>
      <Navbar links={navLinks} cta={{ label: "Subscribe", href: "#subscribe" }} />
      <main id="main-content">
        <Hero />
        <Ticker items={ticker} />
        <WritingTeaser />
        <Speaking />
        <Work />
        <Bio />
        <Practice />
        <Subscribe />
      </main>
      <Footer links={footerLinks} />
    </div>
  );
}
