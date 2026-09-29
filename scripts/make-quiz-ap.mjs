import { readFileSync, writeFileSync } from 'fs';

// Generic quiz converter — handles both option formats:
//   **A.** text       (just-delegate-it style)
//   - **A.** text     (ai-prompting style)
export function convertToQuiz(srcPath, destPath, title, questionsPerRound = 10) {
  const content = readFileSync(srcPath, 'utf8');

  function esc(s) {
    return (s || '')
      .replace(/^> /gm, '')
      .replace(/^- /gm, '')
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

  // Split on question headings (### Q... or ### Question...)
  const blocks = ('\n' + content).split(/\n(?=### (?:Q\d|Question))/);
  const qblocks = blocks.filter(b => b.trimStart().startsWith('### '));

  const questions = [];
  const skipped = [];

  for (const block of qblocks) {
    // Skip multi-select
    if (/Select 2|Select TWO/i.test(block.split('\n')[0])) {
      skipped.push(block.split('\n')[0].trim());
      continue;
    }

    // Options: match "- **A.** text" or "**A.** text"
    const optA = block.match(/^[-\s]*\*\*A\.\*\*\s+(.+)$/m)?.[1]?.trim();
    const optB = block.match(/^[-\s]*\*\*B\.\*\*\s+(.+)$/m)?.[1]?.trim();
    const optC = block.match(/^[-\s]*\*\*C\.\*\*\s+(.+)$/m)?.[1]?.trim();
    const optD = block.match(/^[-\s]*\*\*D\.\*\*\s+(.+)$/m)?.[1]?.trim();
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

    // Scenario: between heading and first option
    const scenMatch = block.match(/### [^\n]+\n+([\s\S]+?)(?=\n\n[-\s]*\*\*A\.)/);
    const scenario = (scenMatch?.[1] || '').replace(/^> /gm, '').trim();

    // Explanation: Why X is correct
    const explMatch = block.match(
      /> \*\*Why [A-D] is correct:\*\*\s*([\s\S]+?)(?=\n>\n> \*\*Why [A-D]|\n---|\n### |\n# |$)/
    );
    const explanation = explMatch
      ? explMatch[1].replace(/^> ?/gm, '').replace(/\n/g, ' ').trim()
      : 'See the scenario guide.';

    const headMatch = block.match(/### ([^\n]+)/);
    const source = headMatch ? headMatch[1].trim() : '';

    questions.push({ scenario, options: [optA, optB, optC, optD], correctIdx, explanation, source });
  }

  console.log(`Parsed: ${questions.length} questions, skipped: ${skipped.length}`);
  const before = [0, 0, 0, 0];
  questions.forEach(q => before[q.correctIdx]++);
  console.log('Before:', { A: before[0], B: before[1], C: before[2], D: before[3] });

  let yaml = `quiz:\n  title: "${esc(title)}"\n  questionsPerRound: ${questionsPerRound}\nquestions:\n`;

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

  writeFileSync(destPath, yaml);

  const after = [0, 0, 0, 0];
  questions.forEach((_, i) => after[i % 4]++);
  console.log('After:', { A: after[0], B: after[1], C: after[2], D: after[3] });
  console.log('Skipped:', skipped);

  return { questions, skipped };
}

// Run for AI Prompting practice test
const K = 'knowledge/courses/ai-prompting-2026';
convertToQuiz(
  `${K}/practice-test.md`,
  `${K}/practice-test.quiz.yaml`,
  'AI Prompting in 2026: Practice Test'
);
