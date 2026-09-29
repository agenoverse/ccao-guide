---
type: Document
title: "AI Prompting in 2026: Practice Test"
description: "Practice test covering all AI Prompting in 2026 concepts at exam difficulty."
status: draft
generated:
  by: human:shazilk-dev
  at: "2026-09-28T17:50:00Z"
ksor:
  audience: [public]
  owner: human:shazilk-dev
  approval:
    by: human:shazilk-dev
    at: "2026-09-28T17:50:00Z"
order: 48
---

30 exam-level scenario questions covering all 13 AI Prompting in 2026 concepts across all seven CCAO-F domains.

**How to use:** The quiz below covers all 26 single-answer questions with hidden answers. The 4 "Select 2" questions are below — work through them with the answer hidden in the callout.

**Scoring:**

- 27–30 (90%+): Exam-ready
- 23–26 (77–86%): Strong but with gaps — re-read the scenario guide for missed concepts
- Below 23: Re-read the scenario guides before retrying

---

## Multi-Select Questions (Select 2)

---

### Q5 · D1 · Concept 1 · Select 2

An associate gets a generic, unhelpful first response from Claude in a fresh chat. They haven't tried any fix yet.

**Which TWO actions should they try FIRST?**

- **A.** Switch to Opus with extended thinking for a more capable response
- **B.** Re-read their own prompt and add the files, constraints, and audience that were missing
- **C.** Start a new conversation to clear any accumulated context noise
- **D.** Add the specific output format they want (table, checklist, email) and the goal of the task

> [!NOTE]- Reveal Answer
> **Correct: B and D**
>
> **Why B is correct:** A generic first response in a fresh chat is almost always under-specification. The prompt is missing context — files, constraints, audience. Fix the prompt first.
>
> **Why D is correct:** Naming the output format and goal are two of the four parts of a power-user briefing. Adding these directly improves the response.
>
> **Why A is wrong:** Model upgrade is the LAST fix, not the first. Under-specification on Opus produces the same generic output — just more confidently.
>
> **Why C is wrong:** This is a FRESH chat — there's no accumulated context to clear. The issue is what's MISSING from the prompt, not what's cluttering it.

---

### Q23 · D2 · Concept 10 · Select 2

An associate uploads a year of transaction data and asks Claude to identify spending trends. Claude returns a paragraph with no code block.

**Which TWO actions should the associate take?**

- **A.** Accept the analysis — Claude processed the file and the trends described seem plausible
- **B.** Re-prompt: "Write and run code to answer this. Show me the code you ran."
- **C.** Ask Claude: "Tell me the exact row count, column names, and date range of this file before you analyse anything."
- **D.** Ask Claude to rate its confidence in the analysis and accept if confidence is high

> [!NOTE]- Reveal Answer
> **Correct: B and C**
>
> **Why B is correct:** No code block means Claude probably estimated. Explicitly asking for code execution forces computation instead of guessing.
>
> **Why C is correct:** A checkable fact (row count, column names, date range) reveals whether Claude is actually reading the file. If the row count is a round number or column names are slightly wrong, Claude is guessing.
>
> **Why A is wrong:** "Seems plausible" is exactly the trap. A guessed answer reads identically to a computed one.
>
> **Why D is wrong:** Claude's self-rated confidence is not a reliability signal — it rates high confidence on estimated numbers the same as computed ones.

---

### Q26 · D6 · Concept 11 · Select 2

A consultant wants an AI desktop app to reorganise a folder of 200 client PDFs by client name. This is the first time they've used the app.

**Which TWO precautions are most important?**

- **A.** Give the app read-write access to the specific client folder only, not to broader directories
- **B.** Ask the app to show its proposed reorganisation plan before executing any file operations
- **C.** Run the app overnight so it doesn't slow down daytime work
- **D.** Back up the entire Documents folder to an external drive before starting

> [!NOTE]- Reveal Answer
> **Correct: A and B**
>
> **Why A is correct:** Least privilege — scope access to ONLY the folder needed. The app shouldn't see or touch anything outside the client PDF folder.
>
> **Why B is correct:** The 4-step safe workflow: tell it the task → ask for a plan → review the plan → only then approve. Seeing the plan BEFORE execution lets you catch wrong renames or misclassified files.
>
> **Why C is wrong:** When the app runs doesn't affect safety. Running it unsupervised overnight is MORE dangerous because you can't catch errors in real time.
>
> **Why D is wrong:** A backup only helps AFTER problems occur. Scoping permissions and reviewing the plan PREVENT problems — which is more important here.

---

### Q30 · D3 · Concept 12 · Select 2

An associate uses Claude exclusively for all AI tasks — quick lookups, complex analysis, document drafting, and quality review.

**Which TWO habits would most improve their tool usage?**

- **A.** Keep at least two AI tools open from different model families — paste the same prompt into the backup when the primary doesn't feel right
- **B.** Use the model ladder within Claude: cheapest rung (Haiku) for lookups and simple rewrites, standard (Sonnet) for daily work, flagship (Opus) for complex trade-off analysis
- **C.** Switch entirely to ChatGPT, which has stronger image generation capabilities
- **D.** Run every prompt through all available AI tools simultaneously and use the longest response

> [!NOTE]- Reveal Answer
> **Correct: A and B**
>
> **Why A is correct:** Different model families have different blind spots. A second tool from a different family serves as a tiebreaker and catches things the primary misses.
>
> **Why B is correct:** The model ladder — use the flagship for complex analysis, standard for daily work, cheapest for simple lookups. Match the rung to the task complexity.
>
> **Why C is wrong:** Switching entirely trades one set of blind spots for another. The point is to use MULTIPLE tools, not replace one monopoly with another.
>
> **Why D is wrong:** Running every prompt through every tool is wasteful overkill. Use multiple tools strategically for high-stakes tasks, not every lookup.
