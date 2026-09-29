import { readFileSync, writeFileSync } from 'fs';

const src = 'knowledge/courses/just-delegate-it/practice-questions.md';
const content = readFileSync(src, 'utf8');

function esc(s) {
  return (s || '')
    .replace(/^> /gm, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .trim();
}

function rotate(opts, correctIdx, targetPos) {
  const correct = opts[correctIdx];
  const others = opts.filter((_, i) => i !== correctIdx);
  const result = [];
  let oi = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetPos) result.push(correct);
    else result.push(others[oi++]);
  }
  return result;
}

const blocks = ('\n' + content).split(/\n(?=### Question)/);
const qblocks = blocks.filter(b => b.trimStart().startsWith('### Question'));

const questions = [];
const skipped = [];

for (const block of qblocks) {
  if (/Select TWO/i.test(block)) {
    skipped.push(block.split('\n')[0].trim());
    continue;
  }

  const optA = block.match(/^\*\*A\.\*\* (.+)$/m)?.[1]?.trim();
  const optB = block.match(/^\*\*B\.\*\* (.+)$/m)?.[1]?.trim();
  const optC = block.match(/^\*\*C\.\*\* (.+)$/m)?.[1]?.trim();
  const optD = block.match(/^\*\*D\.\*\* (.+)$/m)?.[1]?.trim();
  if (!optA || !optB || !optC || !optD) {
    console.log('SKIP (no opts):', block.split('\n')[0]);
    continue;
  }

  const correctMatch = block.match(/> \*\*Correct: ([A-D])\*\*/);
  if (!correctMatch) {
    console.log('SKIP (no answer):', block.split('\n')[0]);
    continue;
  }
  const correctIdx = ['A', 'B', 'C', 'D'].indexOf(correctMatch[1]);

  const scenMatch = block.match(/### Question[^\n]+\n+([\s\S]+?)\n\n\*\*A\./);
  const scenario = (scenMatch?.[1] || '').replace(/^> /gm, '').trim();

  const explMatch = block.match(
    /> \*\*Why [A-D] is correct:\*\*\s*([\s\S]+?)(?=\n>\n> \*\*Why [A-D]|\n---|\n### |\n# |$)/
  );
  const explanation = explMatch
    ? explMatch[1].replace(/^> ?/gm, '').replace(/\n/g, ' ').trim()
    : 'See the scenario guide.';

  const headMatch = block.match(/### Question \d+ · ([^·\n]+)/);
  const source = headMatch ? headMatch[1].trim() : '';

  questions.push({ scenario, options: [optA, optB, optC, optD], correctIdx, explanation, source });
}

console.log(`Parsed: ${questions.length} questions, skipped multi-select: ${skipped.length}`);

const before = [0, 0, 0, 0];
questions.forEach(q => before[q.correctIdx]++);
console.log('Answer dist before rotation:', { A: before[0], B: before[1], C: before[2], D: before[3] });

let yaml = 'quiz:\n  title: "Just Delegate It: Practice Questions"\n  questionsPerRound: 10\nquestions:\n';

questions.forEach((q, i) => {
  const targetPos = i % 4;
  const rotated = rotate(q.options, q.correctIdx, targetPos);
  yaml += `  - question: "${esc(q.scenario)}"\n`;
  yaml += `    options:\n`;
  rotated.forEach(o => { yaml += `      - "${esc(o)}"\n`; });
  yaml += `    answer: ${targetPos}\n`;
  yaml += `    explanation: "${esc(q.explanation)}"\n`;
  if (q.source) yaml += `    source: "${esc(q.source)}"\n`;
  yaml += '\n';
});

writeFileSync('knowledge/courses/just-delegate-it/practice-questions.quiz.yaml', yaml);
console.log('Written practice-questions.quiz.yaml');

const after = [0, 0, 0, 0];
questions.forEach((_, i) => after[i % 4]++);
console.log('Answer dist after rotation:', { A: after[0], B: after[1], C: after[2], D: after[3] });
console.log('Skipped:', skipped);
