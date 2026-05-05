import { Mail, Linkedin, MapPin } from "lucide-react";
import { contact } from "../content";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-indigo-300">Contact</span>
          <h2 className="tracking-tight mt-2 mb-5">{contact.heading}</h2>
          <p className="text-slate-300 text-lg">{contact.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href={`mailto:${contact.email}`}
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-400 transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500 group-hover:bg-indigo-400 flex items-center justify-center transition-colors">
              <Mail size={24} aria-hidden="true" />
            </div>
            <div>
              <div className="font-medium text-white mb-1">Send an email</div>
              <div className="text-indigo-300 text-sm break-all">{contact.email}</div>
            </div>
          </a>

          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-400 transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500 group-hover:bg-indigo-400 flex items-center justify-center transition-colors">
              <Linkedin size={24} aria-hidden="true" />
            </div>
            <div>
              <div className="font-medium text-white mb-1">Connect on LinkedIn</div>
              <div className="text-indigo-300 text-sm">linkedin.com/in/andrewpendleton</div>
            </div>
          </a>
        </div>

        <div className="flex justify-center mt-10">
          <span className="flex items-center gap-2 text-slate-400 text-sm">
            <MapPin size={14} aria-hidden="true" />
            {contact.location}
          </span>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 max-w-7xl mx-auto px-6 text-slate-400 flex flex-wrap gap-4 justify-between">
        <div>{contact.footerCopyright}</div>
        <div>{contact.footerTagline}</div>
      </div>
    </section>
  );
}
