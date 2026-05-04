import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Linkedin } from "lucide-react";

type Errors = { name?: string; email?: string; subject?: string; message?: string };

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Please add a subject.";
    if (!form.message.trim()) e.message = "Please share a message.";
    else if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }
  };

  const update = (k: keyof typeof form) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: ev.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 rounded-xl border bg-white outline-none transition-colors ${
      err
        ? "border-red-400 focus:border-red-500"
        : "border-slate-200 focus:border-indigo-500"
    }`;

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-indigo-300">Contact</span>
            <h2 className="tracking-tight mt-2 mb-5">Let's build something great.</h2>
            <p className="text-slate-300 mb-10 max-w-md">
              Open to executive conversations, advisory roles, and speaking
              opportunities. I respond to every message personally.
            </p>

            <div className="space-y-5">
              <a href="mailto:andrew.d.pendleton@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-indigo-500 flex items-center justify-center"><Mail size={18} /></div>
                <div>
                  <div className="text-slate-400">Email</div>
                  <div>andrew.d.pendleton@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-11 h-11 rounded-lg bg-indigo-500 flex items-center justify-center"><MapPin size={18} /></div>
                <div>
                  <div className="text-slate-400">Based in</div>
                  <div>New York, NY</div>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://www.linkedin.com/in/andrewpendleton/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
            {sent && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 flex items-start gap-3">
                <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                <span>Thanks — your message was sent. I'll be in touch shortly.</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block mb-1.5 text-slate-700">Name</label>
                <input id="name" type="text" value={form.name} onChange={update("name")} className={inputCls(errors.name)} placeholder="Your full name" />
                {errors.name && <p className="mt-1.5 text-red-500 flex items-center gap-1.5"><AlertCircle size={14} />{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-1.5 text-slate-700">Email</label>
                <input id="email" type="email" value={form.email} onChange={update("email")} className={inputCls(errors.email)} placeholder="you@company.com" />
                {errors.email && <p className="mt-1.5 text-red-500 flex items-center gap-1.5"><AlertCircle size={14} />{errors.email}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-1.5 text-slate-700">Subject</label>
              <input id="subject" type="text" value={form.subject} onChange={update("subject")} className={inputCls(errors.subject)} placeholder="What's this about?" />
              {errors.subject && <p className="mt-1.5 text-red-500 flex items-center gap-1.5"><AlertCircle size={14} />{errors.subject}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-1.5 text-slate-700">Message</label>
              <textarea id="message" rows={5} value={form.message} onChange={update("message")} className={inputCls(errors.message)} placeholder="Share a few details..." />
              {errors.message && <p className="mt-1.5 text-red-500 flex items-center gap-1.5"><AlertCircle size={14} />{errors.message}</p>}
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-indigo-600 transition-colors">
              Send message <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 max-w-7xl mx-auto px-6 text-slate-400 flex flex-wrap gap-4 justify-between">
        <div>© 2026 Andrew Pendleton</div>
        <div>Senior Product Executive · New York, NY</div>
      </div>
    </section>
  );
}
