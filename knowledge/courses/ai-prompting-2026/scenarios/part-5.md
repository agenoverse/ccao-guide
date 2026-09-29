---
type: Document
title: "AI Prompting in 2026: Scenario Guide Part 5"
description: "Scenario walkthroughs covering advanced prompting patterns: chaining, structured output, and multi-step tasks."
status: stable
generated:
  by: human:shazilk-dev
  at: "2026-09-28T17:28:00Z"
ksor:
  audience: [public]
  owner: human:shazilk-dev
  approval:
    by: human:shazilk-dev
    at: "2026-09-28T17:30:00Z"
order: 47
---


> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.
>
> **Covers:** Concept 11 (AI Desktop Apps & Permissions), Concept 12 (Cost, Speed & Which Model), Concept 13 (Models Checking Models)
>
> **Builds on:** Parts 1-4 (Concepts 1-10). Terms already explained there won't get brackets again.

---

## CONCEPT 11: AI Desktop Apps and Permissions -- The Smallest Key That Opens the Door

**CCAO-F Domain: D6 -- Governance, Risk & Responsible Use (15%)**

### THE SCENARIO

Sana is a consultant with a folder called `clients/` holding 240 PDFs from four years: contracts, invoices, scoping documents [kaam ki had tay karne wale documents], receipts, meeting notes. She has wanted to organise it for years. She never has time.

She installs an AI desktop app [AI app jo aapke computer par chalti hai aur aapki files tak pahunch sakti hai -- like Cowork from Claude or OpenWork]. On the first day, excited, she gives it full access to her Documents folder and says:

```
Reorganise everything in my Documents folder by client.
```

The app proposes a plan: move 240 files into client-named subfolders, rename 38 files for consistency, and delete 12 files it identifies as duplicates.

Sana clicks "Approve All" without reading the plan.

Three hours later she discovers:
- 4 files the app "deleted as duplicates" were actually different versions of a contract with tracked changes [redline -- changes wala version jahan har tabdeeli nazar aati hai]. Gone. Not in the recycle bin.
- 6 files from her PERSONAL tax folder (also inside Documents) were moved into a client folder because the app misread the client name in the filename.
- An entire subfolder of work-in-progress drafts was renamed and she can't find them.

### WHAT WENT WRONG?

Two facts most people learn the hard way:

1. **Deleted files often do NOT go to the recycle bin** when an AI app deletes them. They are gone.
2. **Edited files do NOT keep an edit history** unless you have version control [software jo har purani version save rakhta hai]. Without it, the AI's change overwrites [oopar se likh deta hai] the previous version.

Sana broke two rules: she gave BROAD permission (full Documents folder instead of just `clients/`), and she approved the plan WITHOUT reading it.

### THE CONCEPT

**The safe workflow for AI desktop apps -- 4 steps:**

```
┌──────────────────────────────────────────────┐
│  1. TELL IT THE TASK                         │
│     "Reorganise the clients/ folder by       │
│      client name"                            │
├──────────────────────────────────────────────┤
│  2. ASK FOR A PLAN, NOT ACTION               │
│     "Show me what you'll move, rename,       │
│      and delete. Don't do anything yet."     │
├──────────────────────────────────────────────┤
│  3. REVIEW AND EDIT THE PLAN                 │
│     Read every delete. Check renames.        │
│     Remove anything that looks wrong.        │
├──────────────────────────────────────────────┤
│  4. ONLY THEN APPROVE EXECUTION              │
│     And only for the specific actions        │
│     you reviewed.                            │
└──────────────────────────────────────────────┘

NEVER: "Approve All" without reading.
NEVER: Give full disk access to an app you've used twice.
```

**The permission ladder -- scope grows with track record [tajurba], not with trust in the company that built the tool:**

| Comfort Level | What to ALLOW | What to KEEP SAYING NO TO |
|---------------|--------------|--------------------------|
| First sessions | Read-only access to a single SMALL folder | Anything that writes, deletes, or renames |
| After 2-3 successful runs | Read and write inside ONE specific folder | Access to broader directories (Desktop, Documents root) |
| After a clean week | Read across a project tree, write inside a scoped subfolder | Anything outside that project |
| Trusted | Tool-specific permissions ("rename PDFs in this folder") | Open-ended "do whatever you need" |

**Think of it like:** Handing a junior employee the keys to a real account. Useful, fast, and worth being careful with. You don't hand them the master key on day one.

### EXAM TRAP

**Trap 1: "Give the AI app full access so it can work efficiently."** The exam describes a task that needs file access. One answer gives broad access for convenience.

**Why it's wrong:** The principle is **least privilege** [sirf utni ijazat jitni kaam ke liye zaruri ho -- the smallest permission the job needs]. Full access when you only need one folder is over-permission. The exam rewards scoping permissions tightly.

**Trap 2: "Stop using AI desktop apps entirely until IT publishes an approved list."** 

**Why it's wrong:** This is the "abandon the task" pattern. The exam never rewards stopping work entirely. The correct answer is to govern the tool (read-only first, specific folders, review plans) -- not abandon it.

**Decision tree for permissions:**

```
AN AI APP ASKS FOR FILE ACCESS. WHAT DO I DO?

1. Does this task NEED file access?
   NO  --> Don't grant it.
   YES --> Next question.

2. Can I scope it to ONE folder?
   YES --> Grant access to that folder only.
   NO  --> Ask: does it really need all of Documents?
           Usually the answer is: no, scope tighter.

3. Does it need WRITE access?
   If first time --> Start with READ-ONLY. Review the plan.
   If proven safe --> Grant write to the specific folder.

4. Does it propose DELETIONS?
   --> Review EVERY deletion. Files may not go to recycle bin.
   --> If unsure, move to a "to-delete" folder instead.
```

### QUICK CHECK

> Sana wants Claude's desktop app to reorganise her `clients/` folder. She gives it read-write access to her entire Documents folder "to be safe." What should she have done?
>
> **Answer:** Give read-write access to `clients/` only -- the smallest folder the job needs. Ask for a plan first. Review every proposed deletion. Approve only after reading the plan. Her personal tax folder should never have been in scope.

---

## CONCEPT 12: Cost, Speed, and Which Model to Use When

**CCAO-F Domain: D3 -- Product & Model Selection (12%)**

### THE SCENARIO

Hasan has been using Claude for everything -- quick lookups, complex lease analysis, writing emails, generating reports. His company gives him a usage budget. By the third week of the month, he's out of budget.

His colleague Amina uses the same budget and never runs out. Her secret: she matches the tool to the task.

| Hasan's approach | Amina's approach |
|---|---|
| Uses Opus (the most powerful model) for "What does FOB mean?" | Uses Haiku (fastest, cheapest) for simple definitions |
| Uses deep research to check today's exchange rate | Uses web search for a quick current fact |
| Uses extended thinking to rewrite a 2-line Slack message | Uses standard mode for simple rewrites |
| Uses one AI tool for everything | Keeps 2 tabs open from different families |

Hasan is using a sledgehammer [bhaari hathora] for every nail, including thumbtacks.

### WHAT HAPPENED HERE?

AI is **jagged** [oonchi neechi -- uneven ability]. Different models lead on different tasks, and the leader changes every few months. There is NO single best model. Using the most powerful model for everything wastes budget on tasks that don't need it, and misses tasks where a DIFFERENT model would do better.

### THE CONCEPT

**The model ladder -- inside one company's brand:**

```
EVERY major AI company sells three rungs [seedhiyan]:

FAST / CHEAP MODEL          STANDARD MODEL           FLAGSHIP / HEAVY MODEL
(Haiku, GPT-4o-mini,       (Sonnet, GPT-4o,         (Opus, o3,
 Flash)                     Flash-thinking)           Deep Research)

Good for:                   Good for:                Good for:
- Quick lookups             - Most daily work         - Complex analysis
- Simple rewrites           - Standard writing        - Multi-variable trade-offs
- Definitions               - Moderate analysis       - Long document reasoning
- High-volume tasks         - Code review             - Hard problems

Cost: lowest                Cost: middle              Cost: highest
Speed: fastest              Speed: moderate           Speed: slowest
```

**The model ladder is NOT the thinking switch (Concept 5).** The thinking switch is a setting INSIDE one model (how hard it works). The ladder is WHICH model you opened. Choosing the wrong rung wastes budget both ways: short questions on the flagship cost too much, and hard analysis on the cheapest rung wastes the analysis.

**Model families -- across companies:**

```
DIFFERENT FAMILIES = DIFFERENT BLIND SPOTS

Anthropic  -->  Claude (Haiku, Sonnet, Opus)
OpenAI     -->  ChatGPT (GPT-4o-mini, GPT-4o, o3)
Google     -->  Gemini (Flash, Pro, Ultra)
Meta       -->  Meta AI (Muse Spark)
xAI        -->  Grok
DeepSeek   -->  DeepSeek (V4-Flash, V4-Pro)

Two models from the SAME family share blind spots.
Two models from DIFFERENT families catch each other's gaps.
This matters in Concept 13.
```

**A rough snapshot (will change -- check Arena [public leaderboard jahan log do unnamed answers mein vote karte hain] monthly):**

| Tool | Strong At | Weaker At |
|------|-----------|-----------|
| Claude | Reasoning, long documents, SVG diagrams, code, structured analysis, careful writing | In-product photo-realistic images |
| ChatGPT | Image generation (top-ranked), voice mode, broad coverage | Can be wordy, over-formats with lists |
| Gemini | Fast web search, deep research with charts, Google Workspace integration | Answers can feel short |
| Meta AI | Already inside WhatsApp/Instagram, free, competitive multimodal reasoning | Fewer integrations, inputs may train future models |
| DeepSeek | Public weights [trained numbers -- you can run it yourself], cheap via API [ek program ka doosre ko call karna] | Chat polish trails the big three |

**Three habits that keep your tools current:**

1. **Keep at least 2 tabs open** -- a main tool and a backup from a different family. When the main feels off, paste the same prompt into the backup.
2. **Keep a prompt notebook** [apne ache prompts ki file] -- collect prompts that produced unusually good results. Reuse them.
3. **Notice when the model is wrong** -- write "tool X was confidently wrong about Y" once a week. This teaches you more than any AI newsletter.

**Monthly ritual [maheeney ka mamool]:** Glance at Arena's leaderboard for a category you care about. Run one regular task through 2-3 tools. Use the winner until next month.

### EXAM TRAP

**Trap 1: "Switch to a more capable model" as the FIRST fix.** The exam shows an output that's wrong or weak. One answer says upgrade the model.

**Why it's usually wrong:** Switching models is the LAST move, not the first. The diagnostic sequence (from Concept 4D) is:
1. Is data missing? → Upload it.
2. Is the prompt under-specified? → Fix it.
3. Is stored context stale? → Update it.
4. Is the chat rotted? → Start fresh.
5. ONLY THEN consider a different model.

This is the **bottom-of-the-ladder trap** -- jumping to the most expensive fix before trying the cheap ones.

**Trap 2: Using research mode for a simple current fact.** "What's today's VAT rate?" needs a quick web search, NOT deep research. The exam rewards matching tool size to task size.

**Trap 3: Sticking with one model for everything.** The exam may describe someone using only one AI tool. The correct principle: different families have different strengths. Keep at least two from different families.

**Decision tree for model selection:**

```
WHICH MODEL / FEATURE FOR THIS TASK?

Is it a quick lookup or definition?
  --> Cheapest/fastest model. No thinking mode.

Is it a simple rewrite or format change?
  --> Standard model. No thinking mode.

Is it a current fact (today, this week)?
  --> Web search. Not deep research.

Is it a multi-source report with citations?
  --> Deep research / research mode.

Is it a complex trade-off with many inputs?
  --> Flagship model + extended thinking.

Am I unsure which model is best for this?
  --> Run it through 2 tools. Compare. Note the winner.
```

### QUICK CHECK

> Hasan uses Opus with extended thinking to answer "What does FOB [Free on Board -- shipping term for when ownership transfers] mean?" Is this a good use of his budget?
>
> **Answer:** No. A definition lookup is a LOUD topic that needs the cheapest, fastest model with no thinking mode. Opus + extended thinking is the most expensive combination for a task that takes any model 3 seconds. Match the tool to the task.

---

## CONCEPT 13: Models Checking Models -- The Closest Thing to an Answer Key

**CCAO-F Domain: D2 -- Output Evaluation & Validation (21%)**

### THE SCENARIO

Amina has drafted a 10-page strategy memo [hukmat naama -- plan document for senior leadership] for her director. She used Claude (her main tool), gave it strong context, ran the brainstorm-iterate loop, and graded it against a rubric. Claude's self-score settled at 9.2 across all criteria.

She feels good about it. Then she remembers Concept 6: a model grading its own output still has the sycophancy lean. A 9.2 from your own model is not the same as a 9.2 from a model that doesn't share its habits.

She pastes the memo into ChatGPT -- a different model family -- with the same rubric.

ChatGPT gives it 7.5 and lists eleven problems. Three of them are issues Claude never raised in six rounds of self-grading:
- The market size claim in section 3 has no source
- The competitive analysis ignores a major regional player [ilaaqe ka bada competitor]
- The financial projection [maaliyati andaza -- future money estimates] assumes 20% growth but never justifies why

She feeds ChatGPT's critique back to Claude: "Another model produced this critique. Evaluate which points are worth adopting, and why. Reject anything you disagree with, and explain."

Claude adopts 7 of the 11 points and rejects 4 with reasons. The memo improves visibly. She runs it past Gemini as a third check. Gemini finds 2 more issues neither of the other models caught.

The final memo is stronger than anything a single model could have produced, because three different families argued over it before the director saw it.

### WHAT HAPPENED HERE?

Different models have different blind spots because they were trained on different data by teams that cared about different things. A point one model misses, a second often catches. Their DISAGREEMENT is the signal you can't get from one model alone.

**Critical:** This only works across different model FAMILIES. Two Claude models checking each other is NOT cross-model checking -- their habits are too similar. The families are: Anthropic (Claude), OpenAI (ChatGPT), Google (Gemini), xAI (Grok), Meta (Meta AI), DeepSeek.

### THE CONCEPT

**Three levels of checking -- pick the lightest one that fits the job:**

```
LEVEL 1: RUBRIC CRITIQUE              LEVEL 2: SELF-CRITIQUE LOOP         LEVEL 3: MULTI-MODEL LOOP
(Concept 6 technique)                 (one model, many rounds)            (different families)

Score 1-10 on criteria.               Score → carry out → re-score.       Same rubric across 2-3
One pass, then stop.                  Repeat until score plateaus         models from different
                                      around 9.                           families.
                                      
FOR: Quick checks.                    FOR: Drafts, emails, memos.         FOR: High-stakes work.
A tricky email. A short summary.      Anything you own and keep.          Memo the director reads.
                                                                          Report the board sees.
                                                                          Anything where being
                                                                          wrong is expensive.

TIME: 2 minutes                       TIME: 10-15 minutes                 TIME: 30-60 minutes
```

**The full multi-model recipe (Level 3):**

```
1. START with your strongest model (check Arena for your task type)
2. DRAFT with full context, thinking mode for hard problems, loop for structure
3. SELF-GRADE: "Score 1-10 on [criteria]. One-sentence justification per score."
4. SELF-FIX: "Carry out your suggestions." Repeat until score plateaus (~9).
5. SECOND MODEL (different family), same rubric
   --> It catches what the first model graded itself on
6. BRING the critique BACK to the first model:
   "Another model produced this critique. Evaluate which points are worth
    adopting. Reject anything you disagree with, and explain."
7. OPTIONAL THIRD MODEL from a third family for high-stakes work
8. STOP when score passes your target in TWO independent models
   (a 9 from your model + a 9 from a different family means something)
```

**Why the second model matters more than a higher score from the first:**

```
9.5 from ONE model           =  "I graded my own homework"
                                 (closed loop -- same blind spots)

9.0 from Model A             =  "Two different teachers both
  + 9.0 from Model B              passed my work"
    (different family)             (open loop -- different blind spots)

The second number is the one that means something.
```

**A privacy note [raazdaari ki baat]:** Cross-model checking means pasting your draft into several tools. Read each tool's data policy [data ke baare mein qanoon] first:
- Claude's consumer product does NOT train on your inputs
- ChatGPT does NOT train if you turn training off
- Meta AI's consumer product MAY use inputs to train (by default)
- Anything covered by an NDA [Non-Disclosure Agreement -- raaz rakhne ka muaaida] should only go through tools whose policies you've checked

**The honest caveat [imaandaari ki baat]:** Three models can still be wrong about the same thing. They share more training data than you'd guess. The score is a PROGRESS signal, not a TRUTH signal. For anything legal, medical, financial, or about a real person, no number of cross-model passes replaces a human expert reading the claims that carry the weight.

> Models check each other for CRAFT. Humans check the FACTS that matter.

### EXAM TRAP

**Trap 1: "Ask Claude to check its own output."** The exam shows someone asking the SAME model to verify its own work. This is a closed loop -- the model that made the error will often confidently reaffirm it.

**Why it's wrong:** Self-verification is NOT verification. Claude confirming its own citation is not the same as checking the citation yourself. This applies to numbers, sources, facts, and legal references equally.

This matches Mock Exam 1 Q1 (asking Claude to confirm the 34% figure), Q9 (Claude providing DOI links it generated), and Q11 (asking Claude to double-check a legal citation).

**Trap 2: "Use a second Claude model for cross-checking."** 

**Why it's wrong:** Two models from the SAME family share blind spots. Claude checking Claude is not cross-model checking. The second model must be from a DIFFERENT family (ChatGPT, Gemini, Grok, etc.).

**Trap 3: "The score is high, so the work is accurate."** A 9.5 across three models means the CRAFT is strong -- the writing is clear, the structure is sound, the argument flows. It does NOT mean the facts are correct. Factual claims still need verification against primary sources (Concept 2).

**Decision tree for quality checking:**

```
HOW IMPORTANT IS THIS OUTPUT?

Quick email or chat message?
  --> Level 1: One rubric pass. Done.

Draft, memo, or anything you'll keep?
  --> Level 2: Self-critique loop until ~9.

Going to a director, board, client, or public?
  --> Level 3: Multi-model loop.
      Different families. Same rubric.
      Stop when 2 independent models pass it.

Contains factual claims that matter?
  --> ALL levels: Verify key facts against
      primary sources. Models check CRAFT,
      humans check FACTS.
```

### QUICK CHECK

> Amina asks a second Claude model (Sonnet instead of Opus) to review her memo. Is this cross-model checking?
>
> **Answer:** No. Sonnet and Opus are both from Anthropic's Claude family. They share training data and blind spots. Real cross-model checking requires a model from a DIFFERENT family -- ChatGPT, Gemini, or Grok.

---

## PART 5 RECAP: How Concepts 11, 12, and 13 Connect

### Within Part 5

```
CONCEPT 11: Permissions        CONCEPT 12: Model Selection    CONCEPT 13: Cross-Checking
                               
"Give the SMALLEST             "Use the RIGHT tool            "Make DIFFERENT tools
permission the                 for the task size"             check each other"
job needs"                     
       |                              |                              |
       v                              v                              v
Permission GROWS               Match model RUNG                A score from ONE
with track record              to task complexity              model is a guess.
(not with trust                (cheapest for lookups,          A score from TWO
in the company)                flagship for trade-offs)        families is a signal.
       |                              |                              |
       └──────────────────────────────┼──────────────────────────────┘
                                      |
                                      v
                       ALL THREE are about MATCHING:
                       
                       C11: Match PERMISSION to task scope
                       C12: Match MODEL to task complexity
                       C13: Match CHECKING to task stakes
```

### Back to All Parts

```
THE COMPLETE CHAIN (Concepts 1-13)

PART 1: HOW AI KNOWS THINGS
C1: Brief like a colleague (files, goal, limits, ask)
C2: Check if AI can even KNOW this (Loud/Quiet/Secret)
C3: Steer the right retrieval mode (pretrained/web/deep)

PART 2: THE CONTEXT GAME
C4: Put context in the right LAYER (6 layers, Projects, memory)
C5: Ask it to THINK HARD when trade-offs are complex

PART 3: THE POWER LOOP
C6: Remove your CONCLUSION from the question (anti-sycophancy)
C7: ITERATE: options → feedback → grade → fix → expand

PART 4: BEYOND TEXT
C8: Match the right INPUT TYPE (text/image/audio)
C9: Know the BOUNDARY of one-prompt apps
C10: FORCE code execution -- don't accept estimates

PART 5: SAFETY & SELECTION
C11: Give the SMALLEST PERMISSION the job needs
C12: Match the MODEL to the task (rung + family)
C13: Make DIFFERENT FAMILIES check each other
```

### The master rule one final time:

> **Get the right context IN, keep the wrong context OUT.**

Every concept in this entire course is one of those two moves:

| Getting context IN | Keeping wrong context OUT |
|---|---|
| C1: Brief with files, goal, limits | C6: Remove your conclusion from the question |
| C3: Trigger the right retrieval mode | C4D: Start fresh when the chat rots |
| C4: Upload full documents, not summaries | C4C: Fix or clear misleading memory |
| C5: Ask for deeper thinking on hard problems | C11: Scope permissions to only what's needed |
| C7: Feed back what works and what doesn't | C12: Don't use a flagship for a lookup |
| C8: Give the right input type | C13: Don't let one model grade its own homework |
| C10: Force code execution, not estimation | |

---

## FINAL EXAM ELIMINATION STRATEGY (All 13 Concepts)

For ANY CCAO-F question, run this:

```
STEP 1: KILL THE RECKLESS OPTION
  "Trust AI's answer" / "Accept without checking" /
  "AI is accurate enough" / "Approve All"
  --> These are ALWAYS wrong on the exam.

STEP 2: KILL THE WASTEFUL OPTION
  "Abandon the task" / "Write it manually" /
  "Stop using AI entirely" / "Remove all data"
  --> The exam never rewards quitting.

STEP 3: KILL THE CIRCULAR OPTION
  "Ask Claude to verify its own output" /
  "Ask Claude to confirm its own citation" /
  "Ask Claude to rate its own confidence"
  --> Self-verification is not verification.

STEP 4: BETWEEN SURVIVORS, PICK THE ONE THAT:
  - Adds missing context (C1, C4)
  - Verifies against a PRIMARY source (C2)
  - Matches the right FEATURE to the task (C3, C5, C8, C12)
  - Splits work into STAGES with checks (C7)
  - Uses a RUBRIC with scores (C6, C13)
  - Keeps HUMAN judgment in the loop (C11)
  - Scopes to the SMALLEST permission/effort needed

  ...while PRESERVING the ability to complete the task.
```

---

**End of Part 5. This completes the Scenario Guide for "AI Prompting in 2026."**

**All 5 Parts:**
- Part 1: How AI Knows Things (C1-C3)
- Part 2: The Context Game & Thinking Modes (C4-C5)
- Part 3: Sycophancy & The Power Loop (C6-C7)
- Part 4: Beyond Text (C8-C10)
- Part 5: Safety, Model Selection & Cross-Checking (C11-C13)
