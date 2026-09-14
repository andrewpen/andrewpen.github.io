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
    + `<p class="anno-prov">record from ${esc(source.package || '?')}@${esc(source.version || '?')} (${esc(source.integrity || '?')})</p>`;
}

/** Fill every connected slot it can, and leave the rest saying so. */
export function connect(document, data) {
  const slots = document.querySelectorAll('.anno-connected[data-composition]');
  let filled = 0;
  for (const slot of slots) {
    const record = (data?.compositions || []).find(c => c.id === slot.dataset.composition);
    if (!record) continue;                       // the unavailable state stands
    slot.innerHTML = renderConnected(record, data.source);
    filled += 1;
  }
  return { slots: slots.length, filled };
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
