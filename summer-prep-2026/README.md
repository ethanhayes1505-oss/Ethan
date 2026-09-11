# Summer Preparation Work 2026 — Part 2 of 2

Completed work for both tasks in the Newman College summer prep brief.
Sport chosen for both tasks: **football (association football)**.

## Task 1 — Educational poster

**Hand in:** `TASK1-Football-Rules-Poster-A3.pdf` — A3 portrait (297 × 420 mm), print-ready.

Aimed at Year 5 and 6 readers, as the brief specifies. It covers the three things
the brief asks for:

| Brief requirement | Where it is on the poster |
|---|---|
| Main rules from the national governing body (fouls, offside etc.) | Section 2 — *The Big Rules*: offside, handball, fouls, cards, and how play restarts |
| Main regulations (number of players, length of match etc.) | Section 1 — *The Match At A Glance*, plus section 3 for the U11 9v9 format these readers actually play |
| At least one unwritten rule / etiquette | Section 4 — *The Unwritten Rules*, six of them |

Design decisions, against Newman College's top tips:

- Roughly 220 words on a whole A3 sheet — icons and numbers carry the meaning, not paragraphs.
- Newman College logo in the footer; the poster uses the logo's own maroon and teal throughout.
- Short sentences, direct address ("you"), no jargon left unexplained.
- Section 3 is aimed squarely at the reader's own game: Year 5/6 play 9v9, not 11-a-side,
  so the poster tells them both.
- Rules are attributed to The FA / IFAB Laws of the Game.

**Source:** `poster-football-rules.html` — edit and re-render with:

```
chrome --headless --print-to-pdf=TASK1-Football-Rules-Poster-A3.pdf \
       --no-pdf-header-footer poster-football-rules.html
```

To rebuild it in Canva instead: use an A3 portrait canvas, the colours
`#7B0F3B` (maroon), `#5FBFA0` (teal) and `#2E7D32` (green), and copy the text
section by section from the HTML.

## Task 2 — 'Be The Coach' lesson plan

**Hand in:** `TASK2-Be-The-Coach-Lesson-Plan.docx` — 13 pages, Word format so it can
still be edited.

| Brief requirement | Where |
|---|---|
| Create a lesson plan template | Part A (the eight sections and why each is there) and Part D (a blank copy to reuse) |
| Create a fun and engaging lesson | Part B — a full 60-minute football lesson, minute by minute |
| Appropriate for a specific age group | Year 8, mixed ability, mixed gender, 24 students |
| Games and activities to make skills fun | Traffic Lights Dribble, Passing Gates, 4v2 Keep Ball, 4v4 to target zones |
| Visuals like diagrams | Three organisation diagrams, section 6 |
| All necessary elements (time, equipment, age, ability) | Sections 1–4, plus a full risk assessment |
| **Bonus:** adapt for a student with a disability | Part C — a Year 8 wheelchair user, adapted with the STEP framework |

The plan is deliberately written so another student could lead it without the author
present, which is what the brief's top tips ask for.

**Source:** `build-lesson-plan.js` (rebuild with `node build-lesson-plan.js`) and
`diagrams/diagrams.html` for the three pitch diagrams.

## Who does what

Task 1 is required of all sport students. Task 2 is required only of Diploma Award
(Double) students — both are completed here.
