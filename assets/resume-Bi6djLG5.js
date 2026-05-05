import{p as n,d as e,m as s,S as r,g as d,w as l,h as m,a as o}from"./index-D5GgwqEA-DI_G7gq7.js";function c(){return e.jsxs("div",{className:"min-h-screen bg-white text-slate-900 font-sans",children:[e.jsx("header",{className:"bg-slate-900 text-white",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-10 py-10 flex items-center gap-8",children:[e.jsx("img",{src:"/img/2023-profile.png",alt:s.name,className:"w-24 h-24 rounded-full object-cover shrink-0 border-2 border-indigo-400"}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight mb-1",children:s.name}),e.jsx("p",{className:"text-indigo-300 text-lg mb-5",children:s.tagline}),e.jsxs("div",{className:"flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-300",children:[e.jsx("a",{href:`mailto:${s.email}`,className:"hover:text-white",children:s.email}),e.jsx("span",{children:s.location}),e.jsx("a",{href:s.linkedinUrl,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white",children:"linkedin.com/in/andrewpendleton"})]})]})]})}),e.jsxs("div",{id:"resume-body",className:"max-w-5xl mx-auto px-10 py-10 grid grid-cols-[260px_1fr] gap-12",children:[e.jsxs("aside",{className:"space-y-8",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4",children:"Education"}),e.jsx("div",{className:"space-y-4",children:r.map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-sm text-slate-900 leading-snug",children:t.degree}),e.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:t.school})]},t.degree))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4",children:"Skills"}),e.jsx("ul",{className:"space-y-1.5",children:d.map(t=>e.jsx("li",{className:"text-sm text-slate-700",children:t.name},t.name))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4",children:"Selected Work"}),e.jsx("div",{className:"space-y-4",children:l.map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-sm text-slate-900 leading-snug",children:t.title}),e.jsx("p",{className:"text-xs text-indigo-600 mt-0.5",children:t.metric})]},t.title))})]})]}),e.jsxs("main",{className:"space-y-8",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3",children:"Summary"}),e.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:m.bio})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest text-indigo-600 mb-5",children:"Experience"}),e.jsx("div",{className:"space-y-8",children:o.filter(t=>t.company!=="Baptist Health").map(t=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-4 mb-1",children:[e.jsx("h3",{className:"font-bold text-slate-900",children:t.title}),e.jsx("span",{className:"text-xs text-slate-400 shrink-0",children:t.period})]}),e.jsx("p",{className:"text-sm text-indigo-600 mb-2",children:t.company}),e.jsx("p",{className:"text-sm text-slate-600 leading-relaxed mb-3",children:t.summary}),e.jsx("ul",{className:"space-y-1.5",children:t.achievements.map((i,a)=>e.jsxs("li",{className:"flex gap-2.5 text-sm text-slate-600",children:[e.jsx("span",{className:"mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0"}),e.jsx("span",{children:i})]},a))})]},t.title))})]})]})]}),e.jsx("style",{children:`
        @media print {
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { margin: 0.6in 0.7in; }
          body { margin: 0; }
          .min-h-screen { min-height: unset; }

          header { background: #1e293b !important; }
          .text-indigo-600 { color: #4f46e5 !important; }
          a { text-decoration: none; color: inherit; }

          header > div { padding: 0 !important; gap: 0.75rem !important; align-items: stretch !important; height: 5rem !important; overflow: hidden !important; }
          header img { width: auto !important; height: 100% !important; border-radius: 0 !important; border-width: 1px !important; object-fit: cover !important; object-position: top center !important; }
          header > div > div { display: flex !important; flex-direction: column !important; justify-content: center !important; padding: 0.5rem 0 !important; }
          header h1 { font-size: 1.4rem !important; margin-bottom: 0.1rem !important; line-height: 1.2 !important; }
          header p { font-size: 0.8rem !important; margin-bottom: 0.3rem !important; }
          header .flex { font-size: 0.7rem !important; gap: 0.5rem !important; }

          #resume-body {
            display: flex !important;
            flex-direction: column !important;
            padding: 1rem 0 !important;
            gap: 0 !important;
            max-width: 100% !important;
          }
          #resume-body main { order: 1; }
          #resume-body aside {
            order: 2;
            display: grid !important;
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 1.5rem !important;
            border-top: 1px solid #e2e8f0;
            padding-top: 1.2rem;
            margin-top: 1.2rem;
          }

          #resume-body main > section > div > div { break-inside: avoid; }
        }
      `})]})}n.createRoot(document.getElementById("root")).render(e.jsx(c,{}));
