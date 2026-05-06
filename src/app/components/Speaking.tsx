import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { speakingEvents as events } from "../content";

export function Speaking() {
  const [selected, setSelected] = useState<(typeof events)[number]>(events[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCarouselKeyDown = (e: React.KeyboardEvent) => {
    if (!scrollRef.current) return;
    const step = scrollRef.current.clientWidth * 0.85;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: step, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  return (
    <section id="speaking" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-indigo-600">On stage</span>
          <h2 className="tracking-tight text-slate-900 mt-2">Speaking &amp; Events</h2>
        </div>
      </div>

      <div className="relative">
        {/* Fade hint on the right edge */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" aria-hidden="true" />

        <div
          ref={scrollRef}
          role="region"
          aria-label="Speaking events carousel — use left and right arrow keys to scroll"
          onKeyDown={handleCarouselKeyDown}
          className="flex gap-5 overflow-x-auto pb-4 px-6 max-w-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Left inset to align with page content */}
          <div className="shrink-0 w-[calc((100vw-var(--content-width,1280px))/2)] hidden xl:block" />

          {events.map((e) => (
            <button
              key={`${e.label}-${e.year}`}
              onClick={() => setSelected(e)}
              className={`relative shrink-0 w-[min(320px,80vw)] h-52 rounded-2xl overflow-hidden shadow-md group cursor-pointer text-left transition-all ${selected?.label === e.label && selected?.year === e.year ? "ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-50" : ""}`}
            >
              <ImageWithFallback
                src={e.src}
                alt={`${e.label} ${e.year}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-medium leading-tight">{e.label}</div>
                <div className="text-slate-300 text-sm">{e.year}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Summary panel */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="mb-1 text-indigo-600 text-sm font-medium">{selected.year}</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">{selected.label}</h3>
            <p className="text-slate-600 leading-relaxed">{selected.summary}</p>
        </div>
      </div>
    </section>
  );
}
