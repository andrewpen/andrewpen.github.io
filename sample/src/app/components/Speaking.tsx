import { ImageWithFallback } from "./figma/ImageWithFallback";

const events = [
  {
    src: "/img/speaking%20events/2026-CES.png",
    label: "CES",
    year: "2026",
  },
  {
    src: "/img/speaking%20events/2025-CES.png",
    label: "CES",
    year: "2025",
  },
  {
    src: "/img/speaking%20events/2025-AccessibilitySummit.PNG",
    label: "Accessibility Summit",
    year: "2025",
  },
  {
    src: "/img/speaking%20events/2025-BrowserStackEvent.jpg",
    label: "BrowserStack World",
    year: "2025",
  },
  {
    src: "/img/speaking%20events/2023-UXIndia-1.JPG",
    label: "UX India",
    year: "2023",
  },
];

export function Speaking() {
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
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="flex gap-5 overflow-x-auto pb-4 px-6 max-w-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Left inset to align with page content */}
          <div className="shrink-0 w-[calc((100vw-var(--content-width,1280px))/2)] hidden xl:block" />

          {events.map((e) => (
            <div
              key={`${e.label}-${e.year}`}
              className="relative shrink-0 w-80 h-52 rounded-2xl overflow-hidden shadow-md group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
