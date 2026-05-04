const milestones = [
  { year: "2011", title: "Started in tech", text: "Joined Baptist Health as a Web Application Developer — building patient-facing digital products from the ground up." },
  { year: "2013", title: "Joined Verizon", text: "Brought on as a Front End Web Development Consultant at one of the world's largest telecom companies." },
  { year: "2014", title: "First leadership role", text: "Promoted to Manager of Front End Web Development. Began building and scaling engineering teams." },
  { year: "2016", title: "Senior Manager", text: "Led a global team of 20+ engineers delivering accessibility and usability standards across Verizon.com." },
  { year: "2021", title: "Senior Director", text: "Appointed Senior Director of Experience Design, owning the Verizon Design System strategy, roadmap, and cross-functional team." },
  { year: "2025", title: "Accessibility Champion", text: "Awarded Verizon Accessibility Champion. Exceeded adoption targets at 86%. Shipped VDS Native mobile parity a year ahead of schedule." },
  { year: "Today", title: "Scaling AI & systems", text: "Architecting AI-native enterprise systems including VDS MCP server, AI design assistants, and pursuing an MS in Analytics & Applied AI." },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-indigo-600">Career milestones</span>
          <h2 className="tracking-tight text-slate-900 mt-2 mb-4">Journey at a glance</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  <div className={`pl-12 md:pl-0 ${isLeft ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                    <div className="inline-block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all">
                      <div className="text-indigo-600 mb-1">{m.year}</div>
                      <h3 className="text-slate-900 mb-2">{m.title}</h3>
                      <p className="text-slate-600">{m.text}</p>
                    </div>
                  </div>
                  <div aria-hidden className="hidden md:block" />

                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white shadow" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
