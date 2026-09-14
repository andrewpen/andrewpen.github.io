// Render the connected annotation FROM THE SHARED RECORD (P05-A02).
//
// A module rather than an inline script so it can be tested directly. The
// previous version was inline, and the only test of it hard-coded an absolute
// path to this repository inside the design system's gate — a machine-local
// path, in the activity that built a checker refusing machine-local paths.
//
// The markup ships showing "unavailable", and this only ever replaces it with
// something a record actually says. A failed fetch, a missing file or an
// absent composition all leave that state standing: inventing a plausible
// description is the failure this connection exists to remove, and a wireframe
// that admits it cannot find a record is more useful than one that confidently
// describes the wrong thing.

const esc = v => String(v).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/**
 * How a reference is labelled, and whether THIS page can open it.
 *
 * The record's refs were built and then ignored: renderConnected showed
 * identity, dependencies, exceptions and provenance, so the two things D2
 * actually names — the implementation, and the requirements governing it —
 * were carried in the record and never reached a reader (CX-059).
 *
 * A ref without `repo` lives in the design system. This page is served from
 * the website and reads a PACKAGE, so it cannot resolve those; naming them and
 * saying where they live beats both a dead link and silence.
 */
const REF_SECTIONS = [
  { title: 'Implementation', rels: ['source'] },
  { title: 'Requirements', rels: ['contract'] },
  { title: 'Records', rels: ['evidence', 'decisions', 'identity'] },
];

function renderRefs(record) {
  const refs = record.refs || [];
  return REF_SECTIONS.map(({ title, rels }) => {
    const items = refs.filter(r => rels.includes(r.rel)).map(r => {
      // "here" means this repository, the one the page is served from.
      const here = r.repo === 'website';
      const where = here ? '' : ' <em class="anno-elsewhere">in A3KDS — not linked here</em>';
      return `<li><code>${esc(r.href)}</code>${where} — ${esc(r.role || '')}</li>`;
    }).join('');
    return items ? `<p class="anno-own">${title}</p><ul>${items}</ul>` : '';
  }).join('');
}

/** The annotation for one record. Pure, so what it renders is testable. */
export function renderConnected(record, source = {}) {
  const deps = (record.dependsOn || [])
    .map(d => `<li>${esc(d.id)} <em>(${esc(d.kind)})</em> — ${esc(d.role || '')}</li>`).join('');
  const exc = (record.localExceptions || [])
    .map(e => `<li>${esc(e.what)} — ${esc(e.why)}</li>`).join('');
  return `<p class="anno-id">identity ${esc(record.identity)} · ${record.packageExport ? 'package export' : 'not installable'} · owned by ${esc(record.ownedBy)}</p>`
    // Owner decision 2026-09-14 (Andrew): name the system rather than
    // describing it, and say what the local things ARE rather than how they
    // got that way. "A3KDS" is the name a reader will see everywhere else;
    // "Local only" answers the question being asked — what would I lose by
    // dropping the design system — without restating the decision, which the
    // record's own text already gives.
    + (deps ? `<p class="anno-own">A3KDS</p><ul>${deps}</ul>` : '')
    + (exc ? `<p class="anno-own">Local only</p><ul>${exc}</ul>` : '')
    + renderRefs(record)
    + `<p class="anno-prov">record from ${esc(source.package || '?')}@${esc(source.version || '?')} (${esc(source.integrity || '?')})</p>`;
}

/**
 * What this page can and cannot vouch for (D6).
 *
 * DERIVED from the sections that actually connected, never written by hand.
 * A hand-written "only Writing is connected" is true until it silently is not,
 * and the page would go on claiming a coverage it no longer had — the same
 * class of stale claim the shared record exists to remove. Connect a second
 * section and this sentence updates itself.
 */
function renderCoverage(names) {
  if (!names.length) {
    return 'No section on this page is connected to the shared record. '
      + 'Every annotation below is a snapshot: hand-written, and true only when it was written.';
  }
  const list = names.length === 1 ? names[0]
    : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
  return `${list} ${names.length === 1 ? 'is' : 'are'} connected to the shared record and `
    + `${names.length === 1 ? 'describes' : 'describe'} what A3KDS actually ships. `
    + 'Every other annotation on this page is a snapshot: hand-written, and true only when it '
    + 'was written. Later chunks extend the connected set.';
}

/** Fill every connected slot it can, and leave the rest saying so. */
export function connect(document, data) {
  const slots = document.querySelectorAll('.anno-connected[data-composition]');
  let filled = 0;
  const connected = [];
  for (const slot of slots) {
    const record = (data?.compositions || []).find(c => c.id === slot.dataset.composition);
    if (!record) continue;                       // the unavailable state stands
    slot.innerHTML = renderConnected(record, data.source);
    connected.push(record.name || record.id);
    filled += 1;
  }
  const notice = document.querySelector('[data-coverage-notice]');
  if (notice) notice.textContent = renderCoverage(connected);
  return { slots: slots.length, filled, connected };
}

export async function loadConnections(fetchImpl = fetch) {
  try {
    const res = await fetchImpl('./connections.json', { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;                                  // unavailable, not fabricated
  }
}

if (typeof document !== 'undefined' && !globalThis.__A3KDS_CONNECT_TEST__) {
  loadConnections().then(data => { if (data) connect(document, data); });
}
