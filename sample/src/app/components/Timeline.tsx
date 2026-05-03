const milestones = [
  { year: "2011", title: "Started in tech", text: "Joined Baptist Health as a Web Application Developer." },
  { year: "2013", title: "Joined Verizon", text: "Brought on as a Consultant for Front End Web Development." },
  { year: "2014", title: "First leadership role", text: "Promoted to Manager of Front End Web Development." },
  { year: "2016", title: "Senior Manager", text: "Stepped into Senior Manager role across Digital Marketing Business Operations." },
  { year: "2021", title: "Senior Director", text: "Promoted to Senior Director of Design Systems." },
  { year: "Today", title: "Scaling design systems", text: "Leading enterprise-wide design systems strategy at Verizon." },
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
