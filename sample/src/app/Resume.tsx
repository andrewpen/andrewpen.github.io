import { hero, about, roles, education, skills, projects } from "./content";

export function Resume() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-10 py-10">
          <h1 className="text-4xl font-bold tracking-tight mb-1">{hero.name}</h1>
          <p className="text-indigo-300 text-lg mb-5">{hero.tagline}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-300">
            <a href={`mailto:${hero.email}`} className="hover:text-white">{hero.email}</a>
            <span>{hero.location}</span>
            <a href={hero.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              linkedin.com/in/andrewpendleton
            </a>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-10 py-10 grid grid-cols-[260px_1fr] gap-12">

        {/* Sidebar */}
        <aside className="space-y-8">

          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="font-semibold text-sm text-slate-900 leading-snug">{e.degree}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{e.school}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">Skills</h2>
            <ul className="space-y-1.5">
              {skills.map((s) => (
                <li key={s.name} className="text-sm text-slate-700">{s.name}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">Selected Work</h2>
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.title}>
                  <p className="font-semibold text-sm text-slate-900 leading-snug">{p.title}</p>
                  <p className="text-xs text-indigo-600 mt-0.5">{p.metric}</p>
                </div>
              ))}
            </div>
          </section>

        </aside>

        {/* Main */}
        <main className="space-y-8">

          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Summary</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{about.bio}</p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-5">Experience</h2>
            <div className="space-y-8">
              {roles.map((r) => (
                <div key={r.title}>
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h3 className="font-bold text-slate-900">{r.title}</h3>
                    <span className="text-xs text-slate-400 shrink-0">{r.period}</span>
                  </div>
                  <p className="text-sm text-indigo-600 mb-2">{r.company}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{r.summary}</p>
                  <ul className="space-y-1.5">
                    {r.achievements.map((a, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-slate-600">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          header { background: #1e293b !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .text-indigo-600 { color: #4f46e5 !important; }
          a { text-decoration: none; }
        }
      `}</style>
    </div>
  );
}
