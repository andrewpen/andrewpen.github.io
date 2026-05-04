import { Mail, MapPin, ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white min-h-[600px] md:min-h-[680px]"
    >
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-200 mb-6">
            Senior Executive · Design Infrastructure &amp; Agent-Native Systems
          </span>
          <h1 className="tracking-tight mb-6">
            Hi, I'm Andrew Pendleton.
            <span className="block bg-gradient-to-r from-indigo-300 to-blue-200 bg-clip-text text-transparent">
              I build the systems humans and AI agents build from.
            </span>
          </h1>
          <p className="text-slate-300 mb-8 max-w-xl">
            Senior Director at Verizon leading enterprise design infrastructure, agent-native AI tooling,
            and design-to-code platform strategy. I transform component libraries into opinionated,
            scalable systems that enable both people and AI to generate high-quality,
            accessible experiences — across one of the world's largest developer ecosystems.
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
              <Mail size={16} className="text-indigo-300" /> andrew.d.pendleton@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-indigo-300" /> New York, NY
            </span>
          </div>
        </div>

        {/* Spacer to keep left column from spanning full width */}
        <div className="hidden md:block" />
      </div>
      {/* Standing figure — anchored to bottom of hero */}
      <div className="absolute bottom-0 right-0 hidden md:flex items-end justify-end w-1/2 h-full pointer-events-none">
        <ImageWithFallback
          src="/img/profile-standing.png"
          alt="Andrew Pendleton"
          className="absolute bottom-[-200px] h-[120%] w-auto object-cover"
        />
        <div className="absolute bottom-8 left-6 bg-white text-slate-900 rounded-2xl px-5 py-3 shadow-xl pointer-events-auto">
          <div className="text-indigo-600">12+ years</div>
          <div className="text-slate-500">at Verizon</div>
        </div>
        <div className="absolute top-8 right-4 bg-white text-slate-900 rounded-2xl px-5 py-3 shadow-xl pointer-events-auto">
          <div className="text-indigo-600">20+</div>
          <div className="text-slate-500">global team</div>
        </div>
      </div>
    </section>
  );
}
