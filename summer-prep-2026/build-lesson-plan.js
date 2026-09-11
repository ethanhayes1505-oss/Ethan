const fs = require('fs');
const path = require('path');
const d = require('docx');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, TabStopType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, VerticalAlign,
  ImageRun, PageBreak, LevelFormat, convertMillimetersToTwip, PageOrientation
} = d;

const DIR = __dirname;
const W = 9638;                 // usable content width in DXA (A4 - 2cm margins)
const MAROON = '7B0F3B';
const TEAL   = '2F8D72';
const TEALBG = 'E6F5EF';
const GREY   = 'F2F2F2';
const INK    = '1A2420';

/* ---------- helpers ---------- */
const noSpace = { before: 0, after: 0 };

const p = (text, o = {}) => new Paragraph({
  spacing: { before: o.before ?? 0, after: o.after ?? 100, line: o.line ?? 260 },
  alignment: o.align,
  indent: o.indent,
  border: o.border,
  children: [new TextRun({
    text, bold: o.bold, italics: o.italics, color: o.color || INK,
    size: o.size || 20, font: o.font || 'Calibri', allCaps: o.caps,
  })],
});

// rich paragraph: array of [text, {opts}]
const rp = (runs, o = {}) => new Paragraph({
  spacing: { before: o.before ?? 0, after: o.after ?? 100, line: o.line ?? 260 },
  alignment: o.align,
  children: runs.map(([t, ro = {}]) => new TextRun({
    text: t, bold: ro.b, italics: ro.i, color: ro.color || o.color || INK,
    size: ro.size || o.size || 20, font: 'Calibri',
  })),
});

const h1 = (text) => new Paragraph({
  spacing: { before: 320, after: 160 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: TEAL, space: 4 } },
  children: [new TextRun({ text, bold: true, color: MAROON, size: 30, font: 'Calibri', allCaps: true })],
});

const h2 = (text) => new Paragraph({
  spacing: { before: 240, after: 100 },
  children: [new TextRun({ text, bold: true, color: TEAL, size: 24, font: 'Calibri' })],
});

const bullets = (items, level = 0) => items.map(t => new Paragraph({
  numbering: { reference: 'bl', level },
  spacing: { before: 0, after: 60, line: 260 },
  children: [new TextRun({ text: t, size: 20, font: 'Calibri', color: INK })],
}));

const cell = (children, o = {}) => new TableCell({
  width: { size: o.w, type: WidthType.DXA },
  columnSpan: o.span,
  verticalAlign: VerticalAlign.TOP,
  shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: 'auto' } : undefined,
  margins: { top: 90, bottom: 90, left: 110, right: 110 },
  children: Array.isArray(children) ? children : [children],
});

const tc = (text, o = {}) => cell(
  (Array.isArray(text) ? text : [text]).map((t, i) => p(t, {
    bold: o.bold, size: o.size || 19, color: o.color, italics: o.italics,
    after: i === (Array.isArray(text) ? text.length - 1 : 0) ? 0 : 60,
  })), o);

const hdr = (labels, widths) => new TableRow({
  tableHeader: true,
  children: labels.map((l, i) => tc(l, { w: widths[i], fill: MAROON, color: 'FFFFFF', bold: true })),
});

const table = (rows, widths) => new Table({
  width: { size: W, type: WidthType.DXA },
  columnWidths: widths,
  rows,
  borders: {
    top:    { style: BorderStyle.SINGLE, size: 4, color: TEAL },
    bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL },
    left:   { style: BorderStyle.SINGLE, size: 4, color: TEAL },
    right:  { style: BorderStyle.SINGLE, size: 4, color: TEAL },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: 'BFDFD3' },
    insideVertical:   { style: BorderStyle.SINGLE, size: 2, color: 'BFDFD3' },
  },
});

const spacer = (h = 120) => new Paragraph({ spacing: { before: 0, after: h }, children: [] });

const img = (file, wMm, hMm, caption) => [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 160, after: 60 },
    children: [new ImageRun({
      type: 'png',
      data: fs.readFileSync(path.join(DIR, 'diagrams', file)),
      transformation: { width: convertMillimetersToTwip(wMm) / 15, height: convertMillimetersToTwip(hMm) / 15 },
    })],
  }),
  p(caption, { align: AlignmentType.CENTER, italics: true, size: 17, color: '5A6B64', after: 220 }),
];

/* ---------- column width sets ---------- */
const W2   = [2900, 6738];
const W2b  = [2400, 7238];
const W4   = [1100, 3600, 2700, 2238];
const W4r  = [2400, 1600, 4438, 1200];
const W3   = [2200, 3200, 4238];

/* ---------- content ---------- */
const children = [];

/* ===== COVER ===== */
children.push(new Paragraph({
  alignment: AlignmentType.RIGHT,
  spacing: { after: 200 },
  children: [new ImageRun({
    type: 'jpg',
    data: fs.readFileSync(path.join(DIR, 'logo.jpg')),
    transformation: { width: 150, height: 62 },
  })],
}));

children.push(new Paragraph({
  spacing: { before: 0, after: 60 },
  children: [new TextRun({ text: 'Summer Preparation Work 2026  ·  Part 2 of 2  ·  Task 2', bold: true, color: TEAL, size: 20, font: 'Calibri', allCaps: true })],
}));
children.push(new Paragraph({
  spacing: { before: 0, after: 80 },
  children: [new TextRun({ text: 'Be The Coach', bold: true, color: MAROON, size: 56, font: 'Calibri' })],
}));
children.push(new Paragraph({
  spacing: { before: 0, after: 240 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: TEAL, space: 6 } },
  children: [new TextRun({ text: 'A football lesson plan for Year 8, mixed ability', color: INK, size: 28, font: 'Calibri' })],
}));

children.push(table([
  new TableRow({ children: [tc('Student (coach)', { w: W2[0], fill: TEALBG, bold: true }), tc('Ethan', { w: W2[1] })] }),
  new TableRow({ children: [tc('Course', { w: W2[0], fill: TEALBG, bold: true }), tc('Level 3 Sport — Diploma Award (Double), Year 12', { w: W2[1] })] }),
  new TableRow({ children: [tc('Task', { w: W2[0], fill: TEALBG, bold: true }), tc('Task 2 — design and lead a lesson plan for a sport of my choice', { w: W2[1] })] }),
  new TableRow({ children: [tc('Sport chosen', { w: W2[0], fill: TEALBG, bold: true }), tc('Football (association football)', { w: W2[1] })] }),
  new TableRow({ children: [tc('What is included', { w: W2[0], fill: TEALBG, bold: true }), cell(bullets([
    'Part A — a reusable lesson plan template',
    'Part B — the template completed as a full 60-minute football lesson',
    'Part C — the bonus challenge: adapting the lesson for a student with a disability',
    'Part D — a blank copy of the template to reuse for any sport',
  ]), { w: W2[1] })] }),
], W2));

children.push(new Paragraph({ children: [new PageBreak()] }));

/* ===== PART A ===== */
children.push(h1('Part A — My lesson plan template'));
children.push(p('Every lesson plan I write uses the same eight sections, in the same order. The order matters: it moves from “who am I teaching and is it safe?” through to “how do I know they learned anything?”. Because the layout never changes, another student can pick this plan up and lead the session without me — which is exactly what Newman College’s top tips ask for.', { after: 160 }));

children.push(table([
  hdr(['Section', 'What goes in it and why'], W2b),
  new TableRow({ children: [tc('1. Lesson information', { w: W2b[0], bold: true }), tc('Date, time, venue, duration, group, age, ability and number of students. Anyone picking the plan up knows instantly whether it fits their group.', { w: W2b[1] })] }),
  new TableRow({ children: [tc('2. Learning objectives', { w: W2b[0], bold: true, fill: GREY }), tc('Differentiated as All / Most / Some so the lesson stretches the strongest players without losing the least confident ones.', { w: W2b[1], fill: GREY })] }),
  new TableRow({ children: [tc('3. Equipment and resources', { w: W2b[0], bold: true }), tc('An exact list with quantities, so the kit can be set out before the group arrives and no time is wasted.', { w: W2b[1] })] }),
  new TableRow({ children: [tc('4. Risk assessment', { w: W2b[0], bold: true, fill: GREY }), tc('Hazard, who is at risk and the control measure. A session must never be led without this.', { w: W2b[1], fill: GREY })] }),
  new TableRow({ children: [tc('5. Lesson structure', { w: W2b[0], bold: true }), tc('The minute-by-minute plan: introduction, warm-up, skill development, conditioned game, cool-down and plenary, with coaching points and differentiation for each phase.', { w: W2b[1] })] }),
  new TableRow({ children: [tc('6. Organisation diagrams', { w: W2b[0], bold: true, fill: GREY }), tc('A picture of each practice — grid size, where the cones go, where the players start. Far faster to read than a paragraph of text.', { w: W2b[1], fill: GREY })] }),
  new TableRow({ children: [tc('7. Assessment', { w: W2b[0], bold: true }), tc('How I will check the objectives have actually been met, during and at the end of the lesson.', { w: W2b[1] })] }),
  new TableRow({ children: [tc('8. Coach evaluation', { w: W2b[0], bold: true, fill: GREY }), tc('Filled in afterwards: what worked, what did not, what I would change next time.', { w: W2b[1], fill: GREY })] }),
], W2b));

children.push(new Paragraph({ children: [new PageBreak()] }));

/* ===== PART B ===== */
children.push(h1('Part B — The lesson'));

children.push(h2('1. Lesson information'));
children.push(table([
  new TableRow({ children: [
    tc('Sport / topic', { w: 2400, fill: TEALBG, bold: true }),
    tc('Football — passing, receiving and creating space', { w: 2819 }),
    tc('Duration', { w: 1600, fill: TEALBG, bold: true }),
    tc('60 minutes', { w: 2819 }),
  ] }),
  new TableRow({ children: [
    tc('Age group', { w: 2400, fill: TEALBG, bold: true }),
    tc('Year 8 (12–13 years)', { w: 2819 }),
    tc('Ability', { w: 1600, fill: TEALBG, bold: true }),
    tc('Mixed ability, mixed gender', { w: 2819 }),
  ] }),
  new TableRow({ children: [
    tc('Number of students', { w: 2400, fill: TEALBG, bold: true }),
    tc('24', { w: 2819 }),
    tc('Venue', { w: 1600, fill: TEALBG, bold: true }),
    tc('3G astroturf (sports hall if wet)', { w: 2819 }),
  ] }),
  new TableRow({ children: [
    tc('Prior learning', { w: 2400, fill: TEALBG, bold: true }),
    cell([p('Students can dribble and strike a ball. Around a third play club football; around a quarter have played very little football at all.', { size: 19, after: 0 })], { w: 2819 + 1600 + 2819, span: 3 }),
  ] }),
], [2400, 2819, 1600, 2819]));

children.push(h2('2. Learning objectives'));
children.push(p('By the end of this lesson:', { after: 100 }));
children.push(table([
  hdr(['', 'Students will be able to…'], W2b),
  new TableRow({ children: [tc('ALL students', { w: W2b[0], bold: true, fill: TEALBG }), tc('Perform a side-foot pass over 5–10 metres using the correct technique — non-kicking foot beside the ball, ankle locked, contact through the middle of the ball.', { w: W2b[1] })] }),
  new TableRow({ children: [tc('MOST students', { w: W2b[0], bold: true, fill: TEALBG }), tc('Receive the ball with the far foot and pass into a team-mate’s path (not their feet) consistently in a 4 v 2 practice.', { w: W2b[1] })] }),
  new TableRow({ children: [tc('SOME students', { w: W2b[0], bold: true, fill: TEALBG }), tc('Scan before receiving, move into space to create a passing angle, and communicate to organise team-mates during a conditioned game.', { w: W2b[1] })] }),
  new TableRow({ children: [tc('All students will also', { w: W2b[0], bold: true, fill: GREY }), tc('Work safely and co-operatively, encourage team-mates, and explain one reason why keeping possession matters in football.', { w: W2b[1], fill: GREY })] }),
], W2b));

children.push(h2('3. Equipment and resources'));
children.push(table([
  new TableRow({ children: [
    tc(['12 × size 5 footballs', '40 × flat marker cones', '16 × bibs (2 colours)'], { w: 3213 }),
    tc(['1 × whistle', '1 × stopwatch', 'This plan on a clipboard'], { w: 3213 }),
    tc(['First aid kit + ice packs', 'Water / drinks break point', 'Register and med list'], { w: 3212 }),
  ] }),
], [3213, 3213, 3212]));
children.push(p('Set-up: all three areas are marked out before the group arrives, so no learning time is lost putting cones down.', { italics: true, size: 18, color: '5A6B64', after: 120 }));

children.push(h2('4. Risk assessment'));
children.push(table([
  hdr(['Hazard', 'Who is at risk', 'Control measure', 'Risk after'], W4r),
  new TableRow({ children: [
    tc('Wet or icy 3G surface', { w: W4r[0] }),
    tc('All students', { w: W4r[1] }),
    tc('Surface checked before the lesson. If it is icy the session moves indoors and the game is played with a futsal ball.', { w: W4r[2] }),
    tc('Low', { w: W4r[3] }),
  ] }),
  new TableRow({ children: [
    tc('Collisions between players', { w: W4r[0], fill: GREY }),
    tc('All students', { w: W4r[1], fill: GREY }),
    tc('Grids spaced 5 m apart. Maximum 8 players per 30 × 20 m pitch. No slide tackling — this is a stated rule of every practice.', { w: W4r[2], fill: GREY }),
    tc('Low', { w: W4r[3], fill: GREY }),
  ] }),
  new TableRow({ children: [
    tc('Jewellery, watches, long nails', { w: W4r[0] }),
    tc('All students', { w: W4r[1] }),
    tc('Checked at the register before anyone touches a ball. Items removed or taped; students are not allowed to take part until they are.', { w: W4r[2] }),
    tc('Low', { w: W4r[3] }),
  ] }),
  new TableRow({ children: [
    tc('Existing medical conditions (asthma, allergies)', { w: W4r[0], fill: GREY }),
    tc('Named students', { w: W4r[1], fill: GREY }),
    tc('Medical list checked before the lesson. Inhalers kept in my bag at the side of the pitch, not in changing rooms.', { w: W4r[2], fill: GREY }),
    tc('Low', { w: W4r[3], fill: GREY }),
  ] }),
  new TableRow({ children: [
    tc('Dehydration / overheating', { w: W4r[0] }),
    tc('All students', { w: W4r[1] }),
    tc('Water break built into the plan at 37 minutes. Students may drink at any point if they ask.', { w: W4r[2] }),
    tc('Low', { w: W4r[3] }),
  ] }),
  new TableRow({ children: [
    tc('Equipment (goals, cones)', { w: W4r[0], fill: GREY }),
    tc('All students', { w: W4r[1], fill: GREY }),
    tc('Flat marker cones only — no upright cones to trip on or land on. Any goals are weighted and checked before use.', { w: W4r[2], fill: GREY }),
    tc('Low', { w: W4r[3], fill: GREY }),
  ] }),
], W4r));

children.push(h2('5. Lesson structure'));
children.push(table([
  hdr(['Time', 'Phase and activity', 'Coaching points', 'Differentiation and safety'], W4),

  new TableRow({ children: [
    tc('0–5 min', { w: W4[0], bold: true, fill: TEALBG }),
    cell([
      p('Introduction', { bold: true, size: 19, after: 50 }),
      p('Register, jewellery and kit check. Sit the group in a semicircle. Share today’s objectives in one sentence: “By the end of today you will be able to keep the ball as a team, not just as an individual.” Ask one question: “Why do the best teams pass instead of dribbling every time?”', { size: 19, after: 0 }),
    ], { w: W4[1] }),
    tc(['Short and sharp — the group is sat down for five minutes maximum.', 'Objectives on the clipboard, shown, not just said.'], { w: W4[2] }),
    tc('Medical list checked here. Anyone unwell is given the recorder/referee role instead of sitting out.', { w: W4[3] }),
  ] }),

  new TableRow({ children: [
    tc('5–13 min', { w: W4[0], bold: true, fill: TEALBG }),
    cell([
      p('Warm-up — “Traffic Lights Dribble”  (Diagram 1)', { bold: true, size: 19, after: 50 }),
      p('Every student has a ball in a 20 × 20 m grid. I call a colour: GREEN = speed dribble, AMBER = slow with close control, RED = stop the ball dead with the sole, ROUNDABOUT = turn and go the other way. Two minutes, then a 90-second dynamic stretch (leg swings, open/close the gate, lunge with a twist, heel flicks), then two more minutes with the calls coming faster.', { size: 19, after: 0 }),
    ], { w: W4[1] }),
    tc(['Head up — “can you see me without stopping the ball?”', 'Small touches with the laces when speeding up.', 'Pulse raised gradually before any stretching.'], { w: W4[2] }),
    tc(['Make the grid bigger for less confident dribblers, smaller for confident ones.', 'Extension: add “SWAP” — leave your ball and take someone else’s.', 'Eyes up prevents collisions.'], { w: W4[3] }),
  ] }),

  new TableRow({ children: [
    tc('13–22 min', { w: W4[0], bold: true, fill: TEALBG }),
    cell([
      p('Skill development 1 — “Passing Gates”  (Diagram 2)', { bold: true, size: 19, after: 50 }),
      p('In pairs, one ball. Eight 2 m gates are spread around the area. Pairs pass to each other through as many different gates as they can in 90 seconds — the same gate cannot be used twice in a row. Demonstrate for 30 seconds, then play three rounds, taking 20 seconds between rounds to give one coaching point and let pairs set their own target.', { size: 19, after: 0 }),
    ], { w: W4[1] }),
    tc(['Non-kicking foot beside the ball, pointing where you want it to go.', 'Ankle locked, strike through the middle with the inside of the foot.', 'Follow through towards the target.', 'Firm pass — “pass it, don’t place it.”'], { w: W4[2] }),
    tc(['Support: wider gates, partner stationary, ball may be stopped first.', 'Challenge: one touch only; weaker foot only; both players must be moving.', 'Pairs set their own score to beat, so everyone competes against themselves.'], { w: W4[3] }),
  ] }),

  new TableRow({ children: [
    tc('22–37 min', { w: W4[0], bold: true, fill: TEALBG }),
    cell([
      p('Skill development 2 — 4 v 2 “Keep Ball”', { bold: true, size: 19, after: 50 }),
      p('Groups of six in a 12 × 12 m square. Four players keep the ball, two defend. Ten consecutive passes = one point. If the defenders win the ball, the player who lost it swaps in. Rotate defenders every 90 seconds so nobody is stuck in the middle.', { size: 19, after: 50 }),
      p('Stop the practice twice, for no more than 30 seconds, to ask: “Where is the space? Show me.”', { size: 19, italics: true, after: 0 }),
    ], { w: W4[1] }),
    tc(['Move BEFORE your team-mate needs you, not after.', 'Open your body so you can see the whole square.', 'Receive with the far foot — the foot furthest from the defender.', 'Pass into the path of a moving team-mate.'], { w: W4[2] }),
    tc(['Support: 5 v 2, or defenders must stay walking-pace for the first round.', 'Challenge: two-touch maximum; a “through the middle” pass scores double.', 'Water break at 37 minutes.'], { w: W4[3] }),
  ] }),

  new TableRow({ children: [
    tc('37–52 min', { w: W4[0], bold: true, fill: TEALBG }),
    cell([
      p('Conditioned game — 4 v 4 to target zones  (Diagram 3)', { bold: true, size: 19, after: 50 }),
      p('Three pitches of 30 × 20 m running at the same time, so all 24 students are playing and nobody queues. A point is scored by dribbling the ball under control into the opposition target zone and stopping it there. The condition: a team must complete three passes before it can score. Bonus: two points if the ball travels from your own half into the zone without the other team touching it. Games of four minutes, then rotate pitches so teams meet new opponents.', { size: 19, after: 0 }),
    ], { w: W4[1] }),
    tc(['Can you spot the three passes happening before the goal?', 'Width and depth — “spread out when we have it, squeeze in when we don’t.”', 'Talk to each other: “man on”, “time”, “switch”.', 'Let the game flow. Coach between games, not during them.'], { w: W4[2] }),
    tc(['Support: on one pitch the condition is two passes rather than three.', 'Challenge: on one pitch the target zone can only be entered from a pass, never a solo dribble.', 'Roles for anyone not playing: referee, scorer, or filming on a tablet for the plenary.', 'No slide tackling. Pitches kept 5 m apart.'], { w: W4[3] }),
  ] }),

  new TableRow({ children: [
    tc('52–58 min', { w: W4[0], bold: true, fill: TEALBG }),
    cell([
      p('Cool-down and plenary', { bold: true, size: 19, after: 50 }),
      p('Slow jog and walk for two minutes while collecting the balls, then static stretches held for 20 seconds each (hamstring, quadriceps, calf, groin, shoulders). While stretching, run the plenary as “thumbs and questions”:', { size: 19, after: 60 }),
      p('1. Show me the three coaching points for a side-foot pass.   2. In the game, what did your team do to create space?   3. Thumbs up / sideways / down against today’s objective.', { size: 19, italics: true, after: 0 }),
    ], { w: W4[1] }),
    tc(['Bring the heart rate down gradually before stretching.', 'Stretch, do not bounce. Hold for 20 seconds.', 'Ask students for the answers — do not give them.'], { w: W4[2] }),
    tc(['Question 1 targets the ALL objective, question 2 targets MOST/SOME.', 'Praise two specific students by name for something they did, not just for effort.'], { w: W4[3] }),
  ] }),

  new TableRow({ children: [
    tc('58–60 min', { w: W4[0], bold: true, fill: TEALBG }),
    cell([
      p('Equipment and dismissal', { bold: true, size: 19, after: 50 }),
      p('Each group returns the cones and bibs from their own pitch. Count the balls back in. Dismiss in small groups to the changing rooms.', { size: 19, after: 0 }),
    ], { w: W4[1] }),
    tc('Equipment counted back in before anyone leaves.', { w: W4[2] }),
    tc('Groups dismissed a few at a time to avoid crowding at the gate.', { w: W4[3] }),
  ] }),
], W4));

children.push(new Paragraph({ children: [new PageBreak()] }));

/* ===== DIAGRAMS ===== */
children.push(h2('6. Organisation diagrams'));
children.push(p('These are the three set-ups referred to in the lesson structure above. Anyone leading this session can copy them straight onto the pitch.', { after: 100 }));
img('diagram1.png', 165, 90.3, 'Diagram 1 — the warm-up grid. One 20 × 20 m square, every student with a ball.').forEach(x => children.push(x));
img('diagram2.png', 165, 90.3, 'Diagram 2 — the passing gates. Eight gates spread out so pairs are always moving to find a new one.').forEach(x => children.push(x));
img('diagram3.png', 165, 90.3, 'Diagram 3 — the conditioned game. Three of these pitches run side by side so all 24 students play at once.').forEach(x => children.push(x));

children.push(h2('7. Assessment — how I will know they have learned it'));
children.push(table([
  hdr(['When', 'What I assess', 'How'], [2200, 3400, 4038]),
  new TableRow({ children: [
    tc('During the gates practice', { w: 2200, bold: true }),
    tc('The ALL objective — side-foot passing technique.', { w: 3400 }),
    tc('I watch each pair for one full round and tick off the three technique points on my clipboard. Anyone missing a point gets an individual correction before the next round.', { w: 4038 }),
  ] }),
  new TableRow({ children: [
    tc('During the 4 v 2', { w: 2200, bold: true, fill: GREY }),
    tc('The MOST objective — receiving with the far foot and passing into space.', { w: 3400, fill: GREY }),
    tc('Freeze the practice twice and ask a student to show me, rather than tell me, where the space was. If they can show it, they have understood it.', { w: 4038, fill: GREY }),
  ] }),
  new TableRow({ children: [
    tc('During the game', { w: 2200, bold: true }),
    tc('The SOME objective — scanning, creating angles, communicating.', { w: 3400 }),
    tc('Count how many times each team completes the three passes before scoring. A team that does it repeatedly is moving and talking, not just kicking it forward.', { w: 4038 }),
  ] }),
  new TableRow({ children: [
    tc('Plenary', { w: 2200, bold: true, fill: GREY }),
    tc('Understanding, and how confident they feel.', { w: 3400, fill: GREY }),
    tc('Question and answer plus a thumbs up / sideways / down self-assessment against the objective. This tells me what to start the next lesson with.', { w: 4038, fill: GREY }),
  ] }),
], [2200, 3400, 4038]));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(h2('8. Coach evaluation (completed after the lesson)'));
children.push(p('This page is filled in straight after the session, while it is still fresh. Evaluating honestly is what turns one lesson into a better next lesson.', { after: 140 }));
children.push(table([
  new TableRow({ children: [tc('What went well?', { w: W2[0], fill: TEALBG, bold: true }), tc(' ', { w: W2[1] })] }),
  new TableRow({ children: [tc('What did not go to plan?', { w: W2[0], fill: TEALBG, bold: true }), tc(' ', { w: W2[1] })] }),
  new TableRow({ children: [tc('Did every student meet the ALL objective?', { w: W2[0], fill: TEALBG, bold: true }), tc(' ', { w: W2[1] })] }),
  new TableRow({ children: [tc('What would I change next time?', { w: W2[0], fill: TEALBG, bold: true }), tc(' ', { w: W2[1] })] }),
  new TableRow({ children: [tc('What will the next lesson start with?', { w: W2[0], fill: TEALBG, bold: true }), tc(' ', { w: W2[1] })] }),
], W2));

children.push(new Paragraph({ children: [new PageBreak()] }));

/* ===== PART C — BONUS ===== */
children.push(h1('Part C — Bonus challenge: adapting the lesson'));
children.push(rp([
  ['The student: ', { b: true }],
  ['a Year 8 student in this class who is a full-time manual wheelchair user. They have full use of their arms and upper body, they want to take part in everything, and they do not want a separate activity in the corner while their friends play football.', {}],
], { after: 140 }));

children.push(p('I have adapted the lesson using the STEP framework — Space, Task, Equipment, People — which is the model the Youth Sport Trust and the FA use for inclusive coaching. The principle I am working to is that the adaptation should change the practice for everyone as little as possible. Where I can, I use an “open” activity that everybody does the same way; where I cannot, I use a “modified” one where the rules differ slightly for different players. Nothing here takes the student out of the session.', { after: 160 }));

children.push(table([
  hdr(['STEP', 'The barrier', 'My adaptation'], W3),
  new TableRow({ children: [
    tc('SPACE', { w: W3[0], bold: true, fill: TEALBG }),
    tc('A 20 × 20 m grid crowded with 24 moving players is hard to move through in a chair, and the risk of a collision is higher.', { w: W3[1] }),
    tc(['Grids are enlarged to 25 × 25 m so there is more room to turn and change direction.', 'For the conditioned game, the target zone is made 1 m deeper — reaching the zone, rather than out-pacing a defender, is what scores the point.'], { w: W3[2] }),
  ] }),
  new TableRow({ children: [
    tc('TASK', { w: W3[0], bold: true, fill: TEALBG, }),
    tc('“Dribble the ball into the zone” and “stop the ball with the sole of your foot” cannot be done from a chair.', { w: W3[1], fill: GREY }),
    tc(['In the warm-up, RED becomes “trap the ball against the wheel or hold it in your lap” instead of stopping it with the sole.', 'In the game, the point is scored by carrying the ball on the lap into the zone, or by passing into the zone — both count as scoring for every player, not just this student.', 'Passing is done with a hand-push or a strike off the footplate, which travels a similar distance to a side-foot pass.'], { w: W3[2], fill: GREY }),
  ] }),
  new TableRow({ children: [
    tc('EQUIPMENT', { w: W3[0], bold: true, fill: TEALBG }),
    tc('A size 5 football is heavy to control at floor level and rolls away quickly on 3G.', { w: W3[1] }),
    tc(['A size 4 or a lightweight futsal ball, which has less bounce and stays closer — this student’s group all use the same ball, so nobody is singled out.', 'Gates are widened from 2 m to 3 m for their pair.', 'The session is run indoors on the sports hall floor if the 3G is wet, because a wet 3G surface is very difficult to self-propel across.'], { w: W3[2] }),
  ] }),
  new TableRow({ children: [
    tc('PEOPLE', { w: W3[0], bold: true, fill: TEALBG }),
    tc('The student could end up watching, or be given a “safe” role away from the action.', { w: W3[1], fill: GREY }),
    tc(['They play in every phase, in a team, in a normal position — no separate activity.', 'In the 4 v 2 they start as an attacker, where possession and angles matter more than sprinting, and rotate like everyone else.', 'One rule applies to the whole class: no contact with a wheelchair, and no reaching into the chair — the same way we already say no slide tackling.', 'I brief the class once, briefly, in the introduction, and then say nothing more about it. Making a fuss of the adaptation is the fastest way to single someone out.'], { w: W3[2], fill: GREY }),
  ] }),
], W3));

children.push(h2('The objectives, adapted'));
children.push(p('The learning objectives are not lowered. Only the method of performing them changes:', { after: 100 }));
children.push(table([
  new TableRow({ children: [
    tc('ALL', { w: 1400, fill: TEALBG, bold: true }),
    tc('Perform an accurate pass over 5–10 m — by hand-push or off the footplate, with the same coaching points of aim, firmness and follow-through.', { w: 8238 }),
  ] }),
  new TableRow({ children: [
    tc('MOST', { w: 1400, fill: TEALBG, bold: true }),
    tc('Receive and control the ball, then release it into a team-mate’s path.', { w: 8238 }),
  ] }),
  new TableRow({ children: [
    tc('SOME', { w: 1400, fill: TEALBG, bold: true }),
    tc('Scan, create an angle and communicate — completely unchanged. These are decision-making skills, and the chair makes no difference to them at all.', { w: 8238 }),
  ] }),
], [1400, 8238]));

children.push(h2('Extra safety points for this lesson'));
children.push(...bullets([
  'The playing surface is checked for loose grit, wet patches and raised seams before the session, as these are a tipping hazard.',
  'The wheelchair is treated as part of the student’s body: no one pushes, grabs or leans on it at any point.',
  'Where possible I would run this session on the sports hall floor or a dry 3G pitch rather than grass, which is very hard to self-propel on.',
  'I would ask the student — not just their file — what works for them before the lesson. They are the expert on their own needs.',
]));

children.push(new Paragraph({ children: [new PageBreak()] }));

/* ===== PART D — BLANK ===== */
children.push(h1('Part D — Blank lesson plan template'));
children.push(p('This is the same template with the content removed, so it can be reused for any sport or any group.', { after: 160 }));

children.push(h2('Lesson information'));
children.push(table([
  new TableRow({ children: [tc('Sport / topic', { w: 2400, fill: TEALBG, bold: true }), tc(' ', { w: 2819 }), tc('Duration', { w: 1600, fill: TEALBG, bold: true }), tc(' ', { w: 2819 })] }),
  new TableRow({ children: [tc('Age group', { w: 2400, fill: TEALBG, bold: true }), tc(' ', { w: 2819 }), tc('Ability', { w: 1600, fill: TEALBG, bold: true }), tc(' ', { w: 2819 })] }),
  new TableRow({ children: [tc('Number of students', { w: 2400, fill: TEALBG, bold: true }), tc(' ', { w: 2819 }), tc('Venue', { w: 1600, fill: TEALBG, bold: true }), tc(' ', { w: 2819 })] }),
  new TableRow({ children: [tc('Prior learning', { w: 2400, fill: TEALBG, bold: true }), cell([p(' ', { after: 0 })], { w: 7238, span: 3 })] }),
], [2400, 2819, 1600, 2819]));

children.push(h2('Learning objectives'));
children.push(table([
  new TableRow({ children: [tc('ALL students will…', { w: W2b[0], fill: TEALBG, bold: true }), tc(' ', { w: W2b[1] })] }),
  new TableRow({ children: [tc('MOST students will…', { w: W2b[0], fill: TEALBG, bold: true }), tc(' ', { w: W2b[1] })] }),
  new TableRow({ children: [tc('SOME students will…', { w: W2b[0], fill: TEALBG, bold: true }), tc(' ', { w: W2b[1] })] }),
], W2b));

children.push(h2('Equipment and resources'));
children.push(table([
  new TableRow({ children: [tc([' ', ' ', ' '], { w: 3213 }), tc([' ', ' ', ' '], { w: 3213 }), tc([' ', ' ', ' '], { w: 3212 })] }),
], [3213, 3213, 3212]));

children.push(h2('Risk assessment'));
children.push(table([
  hdr(['Hazard', 'Who is at risk', 'Control measure', 'Risk after'], W4r),
  ...[0, 1, 2, 3].map(i => new TableRow({
    children: W4r.map(w => tc(' ', { w, fill: i % 2 ? GREY : undefined })),
  })),
], W4r));

children.push(h2('Lesson structure'));
children.push(table([
  hdr(['Time', 'Phase and activity', 'Coaching points', 'Differentiation and safety'], W4),
  ...['Introduction', 'Warm-up', 'Skill development 1', 'Skill development 2', 'Conditioned game / application', 'Cool-down and plenary'].map((phase, i) => new TableRow({
    children: [
      tc(' ', { w: W4[0], fill: TEALBG }),
      cell([p(phase, { bold: true, size: 19, after: 50 }), p(' ', { size: 19, after: 0 })], { w: W4[1] }),
      tc(' ', { w: W4[2] }),
      tc(' ', { w: W4[3] }),
    ],
  })),
], W4));

children.push(h2('Assessment'));
children.push(table([
  hdr(['When', 'What I assess', 'How'], [2200, 3400, 4038]),
  ...[0, 1, 2].map(i => new TableRow({
    children: [2200, 3400, 4038].map(w => tc(' ', { w, fill: i % 2 ? GREY : undefined })),
  })),
], [2200, 3400, 4038]));

children.push(h2('Coach evaluation'));
children.push(table([
  new TableRow({ children: [tc('What went well?', { w: W2[0], fill: TEALBG, bold: true }), tc(' ', { w: W2[1] })] }),
  new TableRow({ children: [tc('What did not go to plan?', { w: W2[0], fill: TEALBG, bold: true }), tc(' ', { w: W2[1] })] }),
  new TableRow({ children: [tc('What would I change next time?', { w: W2[0], fill: TEALBG, bold: true }), tc(' ', { w: W2[1] })] }),
], W2));

/* ---------- document ---------- */
const doc = new Document({
  creator: 'Newman College — Level 3 Sport',
  title: 'Be The Coach — Football Lesson Plan',
  description: 'Summer preparation work 2026, Part 2 of 2, Task 2',
  numbering: {
    config: [{
      reference: 'bl',
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 200 } } } },
        { level: 1, format: LevelFormat.BULLET, text: '◦', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 200 } } } },
      ],
    }],
  },
  styles: {
    default: { document: { run: { font: 'Calibri', size: 20, color: INK } } },
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 },
      },
    },
    footers: {
      default: new (require('docx').Footer)({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 120 },
          children: [new TextRun({ text: 'Summer Preparation Work 2026 · Part 2 of 2 · Task 2 — Be The Coach', size: 16, color: '8A9691', font: 'Calibri' })],
        })],
      }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => {
  const out = path.join(DIR, 'TASK2-Be-The-Coach-Lesson-Plan.docx');
  fs.writeFileSync(out, buf);
  console.log('written', out, buf.length, 'bytes');
});
