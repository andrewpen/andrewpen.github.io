import { about, aboutHighlights } from "../content";


export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-indigo-600">About</span>
          <h2 className="tracking-tight text-slate-900 mt-2 mb-4">
            {about.heading}
          </h2>
          <p className="text-slate-600">
            {about.bio}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {aboutHighlights.map((h) => (
            <div
              key={h.title}
              className="group p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <h.icon size={22} />
              </div>
              <h3 className="text-slate-900 mb-2">{h.title}</h3>
              <p className="text-slate-600">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
