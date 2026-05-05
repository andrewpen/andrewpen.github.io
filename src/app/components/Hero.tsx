import { Mail, MapPin, ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { hero } from "../content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white min-h-[600px] md:min-h-[680px]"
    >
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -top-40 -right-40 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Diagonal white panel — right side background */}
      <div
        className="absolute inset-y-0 right-0 w-[45%] bg-white hidden md:block"
        style={{ clipPath: "polygon(85% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-200 mb-6">
            {hero.tagline}
          </span>
          <h1 className="tracking-tight mb-6">
            {hero.headline}
            <span className="block bg-gradient-to-r from-indigo-300 to-blue-200 bg-clip-text text-transparent">
              {hero.subheadline}
            </span>
          </h1>
          <p className="text-slate-300 mb-8 max-w-xl">
            {hero.bio}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-indigo-100 transition-colors"
            >
              Let's connect <ArrowRight size={18} />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Download size={18} /> View resume
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-slate-300">
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-indigo-300" /> {hero.email}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-indigo-300" /> {hero.location}
            </span>
          </div>
        </div>

        {/* Right column — image inside grid column so right edge is bounded by content margin */}
        <div className="hidden md:block" aria-hidden="true">
          <ImageWithFallback
            src={hero.profileImage}
            alt=""
            className="absolute bottom-[-200px] h-[120%] w-auto object-cover pointer-events-none"
            style={{ right: "-100px" }}
          />
        </div>
      </div>
    </section>
  );
}
