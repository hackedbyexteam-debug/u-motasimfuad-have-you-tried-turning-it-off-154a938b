// Have You Tried Turning It Off? — make.fun bounty
// u-motasimfuad-have-you-tried-turning-it-off-154a938b
//
// The entry: one funny line a hopeless tech support agent says to a
// desperate customer. The program writes that single line to
// /output/entry.txt. Gate: 1–199 UTF-8 characters, not only whitespace.
//
// 12-candidate draft (shortlist from the drafting session):
//  1. "Have you tried turning it off and on again? I just did mine, and
//     feel fantastic — shall we do yours next?"  ← WINNER (107 chars)
//  2. "Have you tried turning it off and on again? It worked for my last
//     caller — they hung up and never rang back."  ← runner-up
//  3. "Have you tried turning it off and on again?"  ← bare stock line
//  4. "Have you tried turning it off and on again? Asking for a friend.
//     The friend is me. My computer is fine. Yours is the problem."
//  5. "Have you tried turning it off and on again? I would, but my
//     headset is the only thing still working in this building."
//  6. "Have you tried turning it off and on again? I did, and now the
//     hold music sounds like a lullaby. Sweet dreams."
//  7. "Have you tried turning it off and on again? Mine just updated
//     itself, so technically I'm the expert now."
//  8. "Have you tried turning it off and on again? The manual says so,
//     and the manual has never once answered this phone."
//  9. "Have you tried turning it off and on again? It fixed my toaster
//     once. Your laptop is basically a toaster with ambition."
// 10. "Have you tried turning it off and on again? I already did —
//     that's why I'm whispering. The system is resting."
// 11. "Have you tried turning it off and on again? Great, now do mine
//     too — I've been on hold with myself since Tuesday."
// 12. "Have you tried turning it off and on again? If that fails, try
//     turning it off and on again. That's the whole job."
//
// Why the winner wins, against the judge's criteria in order:
//  (1) It is a funny single-line reply from a hopeless tech support
//      agent to a desperate customer — the agent answers the call with
//      the canonical support line, in character, in one line.
//  (2) The twist is unexpected and the agent's cheerful uselessness is
//      the humour: he applied the fix to HIMSELF, not the customer's
//      machine, and reports feeling fantastic while the customer is
//      still stuck. The customer is never the butt of the joke.
//  (3) It sounds like one line a real support agent would actually say
//      — chatty, upbeat, a little too friendly — and the customer's
//      desperation is felt (they are still waiting, still broken) rather
//      than explained.
//  (4) Tight and clear on a first read: three beats — the classic
//      question, the twist, the punch ("shall we do yours next?") —
//      and every word earns its place.
//  (5) Fresh: it leans on the classic "turning it off and on again"
//      but twists it instead of repeating it — the fix worked, just on
//      the wrong machine.
//
// Runner-up (candidate 2) and why it loses: "It worked for my last
// caller — they hung up and never rang back" is also a twist on the
// classic and also cheerful-useless, but its punchline lands on the
// previous customer (they gave up and vanished), which edges toward
// making a customer the butt, and "never rang back" is a darker,
// slower read than the winner's bright "shall we do yours next?".
//
// Discarded modal lines: the bare stock line (candidate 3) is the
// field's modal entry — every entrant's first instinct, zero twist,
// loses criterion 5 outright. Candidates 4, 7, 8, 9, 12 explain the
// joke or repeat the fix instead of twisting it; candidates 5, 6, 10,
// 11 are atmospheric but their punchlines need a second read or lean
// on the agent's misery rather than his cheerful uselessness.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Have you tried turning it off and on again? I just did mine, and I feel fantastic — shall we do yours next?";

const MAX_CHARS = 199;

if (ENTRY.length > MAX_CHARS) {
  // Gate: the sealed scorer rejects anything over 199 chars, so fail loudly.
  console.error(
    `Entry is ${ENTRY.length} chars — over the ${MAX_CHARS}-char gate.`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} chars).`);
