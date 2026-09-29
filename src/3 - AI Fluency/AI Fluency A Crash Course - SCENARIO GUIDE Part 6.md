# AI Fluency: Scenario-Based Study Guide — Part 6

## THE COMPLETE FRAMEWORK: Tying It All Together

> **Concepts covered:** 20, 21, 22 (of 22) — FINAL PART
> **Estimated reading time:** 20 minutes
> **Primary exam domains:** D4 (Workflow Integration), D1-D7 (cross-cutting)
> **Key idea:** The 4Ds run as one loop. The four beginner mistakes ARE the exam's wrong answers. Learn to spot the missing D and you can eliminate 2 options instantly on every question.

---

## CONCEPT 20: The 4D Operating Loop — All Four Together

### THE SCENARIO

Ayesha is a Forward Deployed Engineer [FDE — ek engineer jo client ke paas jaake kaam kare] in Lahore. She's helping a small accounting practice in Karachi build a bookkeeping Digital FTE. The firm's first job to automate: **monthly bank reconciliation** [bank ka statement aur apni company ka record milaana — dono match karte hain ya nahi].

The firm's partner [senior boss] says: "Just build us something that reconciles the bank statement automatically."

Ayesha doesn't open Claude and type "build a reconciliation agent." Instead, she runs the full 4D loop:

---

**STEP 1 — DELEGATION: Map the job FIRST**

Ayesha sits with the accounting partners. Together they decide:

| AI MAY do | HUMANS KEEP | MUST ESCALATE |
|-----------|-------------|---------------|
| Match bank transactions to ledger entries [bank ki har entry ko company ke record se milaana] | Approve every journal adjustment [manual correction — hisaab mein haath se sudhaai] | High-value unmatched items → named partner |
| Flag unmatched items [jo match na ho usko nishan lagaana] | Every write-off decision [paisa jo wapas nahi aayega — maaf karna] | Anything affecting a client's tax position [kitna tax dena hai — yeh accountant ka kaam hai] |
| Draft a reconciliation report | Sign the final reconciliation | |

Notice: she didn't decide this alone. The ACCOUNTANTS defined what needs human judgment. She defined what AI can safely do. **Delegation is a conversation with the domain experts [maahir log], not a solo engineering decision.**

---

**STEP 2 — DESCRIPTION: Give the system EVERYTHING it needs**

Ayesha doesn't just write a prompt. She builds the full context:

```
  WHAT AYESHA PROVIDES:
  
  ┌─ INSTRUCTIONS ──────────────────────────────────────┐
  │  • Matching rules (how to pair transactions)         │
  │  • Escalation rules (what goes to a human, when)     │
  │  • A rule: NEVER post a journal entry itself         │
  │  • A rule: NEVER contact a client directly           │
  └──────────────────────────────────────────────────────┘
  
  ┌─ DOMAIN KNOWLEDGE ──────────────────────────────────┐
  │  • The firm's chart of accounts [categories ki list   │
  │    — jaise "office expenses," "vendor payments," etc.]│
  │  • Definitions: duplicate payments, stale cheques     │
  │    [cheque jo itna purana ho ke bank nahi qubool kare] │
  └──────────────────────────────────────────────────────┘
  
  ┌─ EXAMPLES ──────────────────────────────────────────┐
  │  • Past reconciliations the firm already trusts       │
  │  • The report format partners already use             │
  └──────────────────────────────────────────────────────┘
```

This is context engineering (Concept 11) in practice — not just a prompt, but ALL the information the system needs.

---

**STEP 3 — DISCERNMENT: Don't assume it works because the demo looked good**

Ayesha tests against past reconciliations the firm already trusts. The team checks:

```
  ┌──────────────────────────────────────────────────────┐
  │  WHAT THEY CHECK:                                     │
  │                                                        │
  │  ✓ How many matches are CORRECT?                      │
  │  ✓ How many INCORRECT matches slip through?           │
  │  ✓ Do the RIGHT cases escalate?                       │
  │  ✓ Does the agent escalate TOO MUCH?                  │
  │    (over-escalation wastes human time)                │
  │  ✓ Does performance CHANGE over time?                 │
  │                                                        │
  │  CRITICAL: An accountant reviews matches that          │
  │  APPEAR to have succeeded — not only the failures.     │
  │                                                        │
  │  ⚠ A system can look safe simply by failing            │
  │    WITHOUT SAYING SO.                                  │
  └──────────────────────────────────────────────────────┘
```

This is all three types of Discernment working together:
- **Product:** Are individual matches correct?
- **Process:** Is AI reconciliation faster AND more accurate than manual?
- **Performance:** Over many months and many clients, does the system serve people well?

---

**STEP 4 — DILIGENCE: Responsibility is built into the system**

```
  ┌──────────────────────────────────────────────────────┐
  │  CREATION DILIGENCE:                                  │
  │  Client financial data stays inside approved           │
  │  infrastructure [company ki apni mehfooz jagah].       │
  │  No consumer AI tools.                                │
  │                                                        │
  │  TRANSPARENCY DILIGENCE:                              │
  │  Where required, clients are told that reconciliation  │
  │  is AI-assisted.                                      │
  │                                                        │
  │  DEPLOYMENT DILIGENCE:                                │
  │  Agent actions are logged [record hota hai].           │
  │  A human partner SIGNS the final reconciliation.       │
  │  The partner remains ACCOUNTABLE for it.              │
  └──────────────────────────────────────────────────────┘
```

### WHAT WENT RIGHT

Ayesha ran the complete loop. The personal chat skill (4Ds) became a **system property.** Every D scaled:

```
  ┌────────────────────┬───────────────────┬──────────────────────┐
  │  COMPETENCY         │  IN A CHAT         │  IN THE AGENT FACTORY│
  ├────────────────────┼───────────────────┼──────────────────────┤
  │  DELEGATION        │  Decide what to    │  Scope the FTE and   │
  │                    │  ask AI to do      │  human/AI boundary   │
  ├────────────────────┼───────────────────┼──────────────────────┤
  │  DESCRIPTION       │  Give instructions │  System prompts,     │
  │                    │  and context       │  skills, context      │
  │                    │                    │  engineering, Systems │
  │                    │                    │  of Record            │
  ├────────────────────┼───────────────────┼──────────────────────┤
  │  DISCERNMENT       │  Review the answer │  Evals, monitoring,  │
  │                    │                    │  sampling, trusting   │
  │                    │                    │  the checker          │
  ├────────────────────┼───────────────────┼──────────────────────┤
  │  DILIGENCE         │  Protect data and  │  Governance,          │
  │                    │  own the result    │  permissions, audit   │
  │                    │                    │  [jaanch ka record],  │
  │                    │                    │  disclosure, human    │
  │                    │                    │  review               │
  └────────────────────┴───────────────────┴──────────────────────┘
```

> **The Agent Factory does NOT replace AI fluency. It builds the same four skills into a system that runs at scale.** Practice in a chat window is rehearsal for building and governing AI systems.

### THE CONCEPT

**The 4D Operating Loop:**

```
  ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
  │ DELEGATE │────→│ DESCRIBE │────→│ DISCERN  │────→│ DILIGENT │
  │          │     │          │     │          │     │          │
  │ Decide   │     │ Explain  │     │ Check    │     │ Own      │
  └──────────┘     └──────────┘     └──────────┘     └──────────┘
       ↑                                                   │
       └───────────────── REPEAT AS NEEDED ────────────────┘

  In one sentence:
  "Decide what AI should do. Describe the work clearly.
   Check what comes back. Own what happens next."
```

The loop is the same in a chat and in a deployed system. At system scale, each step becomes engineering.

### EXAM TRAP

**The trap:** An answer that treats the 4Ds as a one-time checklist instead of a repeating loop.

**Why people pick it:** Because "check all four boxes" feels complete. Done!

**The truth:** Real work cycles through the Ds multiple times. You delegate, describe, discern — and discernment might send you BACK to delegation (wrong tool) or back to description (missing context). Diligence isn't a final checkbox either — it runs across the ENTIRE workflow, not just at the end.

### QUICK CHECK

**Q:** Ayesha's bookkeeping FTE has been running for 6 months. A new type of transaction appears that the agent consistently miscategorizes. Which D does she revisit?
**A:** Description first (does the system have rules for this transaction type? Does the chart of accounts cover it?). If the category doesn't exist, she revisits Delegation (should the agent handle this type at all, or should it escalate?). The loop is never "done" — new situations require new passes through the Ds.

---

## CONCEPT 21: The 10-80-10 Rule

### THE SCENARIO

Zain (logistics company) is preparing the company's annual strategic review [saalana strategy ka jaayza — company agle saal kya karegi]. It's a 2-week project. Here's how it plays out:

**First 10% — Setting direction (Days 1-2):**
Zain defines: What is this review for? (Board wants to decide whether to expand internationally.) Who reads it? (Board of 7, one is the founder, three are investors [paisa lagane wale].) What does success look like? (A clear recommendation with evidence, not a menu of options.) What should AI help with? (Data analysis, comparison structuring, draft writing.) What stays with Zain? (Strategy decisions, stakeholder [zimmedar log — jin par asar hota hai aur jo faisla karte hain] relationships, final recommendation.)

This is Delegation + Description. He's not typing prompts yet. He's designing the work.

**Middle 80% — Running the work (Days 3-12):**
Zain and Claude work together daily. Claude extracts data from financial reports, structures comparisons between markets, drafts sections, and produces visualizations [graphs aur charts]. Zain reviews every output, catches a wrong revenue figure (Discernment), corrects the market analysis when Claude misunderstands Pakistan's regulatory environment [qanooni maahol] (Description fix), and adjusts the framing when a section reads like a textbook instead of a board paper (Description-Discernment loop).

This is Description and Discernment repeating. Claude produces, Zain steers.

**Last 10% — Judging the truth (Days 13-14):**
Zain does NOT just hit "send." He:
- Verifies every financial figure against source documents (Discernment, Numbers Rule)
- Has the CFO [Chief Financial Officer — maali sarbrah] review the financial sections (Deployment Diligence)
- Confirms no confidential client data leaked into the public-facing analysis (Creation Diligence)
- Adds a note that AI assisted with data analysis and drafting (Transparency Diligence)
- Reads the recommendation one final time: "Would I put my name on this?" (Deployment Diligence)

This is Discernment becoming critical + Diligence surrounding the final output.

### THE CONCEPT

**The 10-80-10 Rule:**

```
  ┌─────────────────────────────────────────────────────────┐
  │                                                           │
  │  FIRST 10%          MIDDLE 80%          LAST 10%         │
  │  ──────────         ──────────          ─────────        │
  │  SET DIRECTION      ORCHESTRATE AI      JUDGE THE TRUTH  │
  │                                                           │
  │  Delegation +       Description +       Discernment      │
  │  Description        Discernment         becomes critical │
  │  strongest here     repeat as AI        before anything  │
  │                     produces and you    important ships   │
  │  You design the     steer it                             │
  │  work BEFORE                                             │
  │  AI touches it                                           │
  │                                                           │
  │                                                           │
  │  ════════════════════════════════════════════════════     │
  │  ▓▓▓▓ DILIGENCE runs across ALL 100% — it is NOT ▓▓▓▓   │
  │  ▓▓▓▓ a final checkbox. It SURROUNDS the workflow ▓▓▓▓   │
  │  ════════════════════════════════════════════════════     │
  │                                                           │
  └─────────────────────────────────────────────────────────┘
```

**The 4Ds map to the 10-80-10 like this:**

```
  ┌──────────────┬───────────────────────────────────────────┐
  │  PHASE        │  WHICH Ds ARE STRONGEST                   │
  ├──────────────┼───────────────────────────────────────────┤
  │  First 10%   │  DELEGATION + DESCRIPTION                 │
  │  (direction)  │  Define goals, pick tools, plan the split,│
  │               │  prepare context                          │
  ├──────────────┼───────────────────────────────────────────┤
  │  Middle 80%  │  DESCRIPTION + DISCERNMENT (looping)      │
  │  (execution)  │  AI produces → you check → you refine →  │
  │               │  AI produces again                        │
  ├──────────────┼───────────────────────────────────────────┤
  │  Last 10%    │  DISCERNMENT (critical)                   │
  │  (judgment)   │  Final verification, expert review,       │
  │               │  "would I put my name on this?"           │
  ├──────────────┼───────────────────────────────────────────┤
  │  All 100%    │  DILIGENCE (always on)                    │
  │               │  Data safety, transparency, accountability│
  │               │  — not just at the end                    │
  └──────────────┴───────────────────────────────────────────┘
```

> **Exam insight:** The 10-80-10 maps to the Four Survival Skills from the book: **Set the direction** (first 10%), **Orchestrate AI** (middle 80%), **Judge the truth** (last 10%), and **Connect with people** (throughout — but this one isn't in the 4Ds framework directly).

### EXAM TRAP

**The trap:** An answer that puts Diligence only at the end ("check privacy and accountability as the last step").

**Why people pick it:** Because Diligence is the 4th D, so it feels like the final step. And "verify before shipping" sounds like an end-stage activity.

**The truth:** Diligence runs across ALL 100%. Creation diligence (is this data safe to use?) happens at the BEGINNING — before you even start. Transparency diligence (should people know AI is involved?) runs DURING the work. Deployment diligence (verify before release) happens at the END. If you only think about Diligence at the end, you've already pasted confidential data into an unapproved tool on Day 1.

### QUICK CHECK

**Q:** A project is 90% done. In the last 10% (judging the truth), Discernment reveals that a core financial figure is wrong. What happens?
**A:** You go back. The loop doesn't only move forward. A wrong figure might mean: re-run the calculation (Description fix), check the source data (Discernment), or reconsider whether AI should have handled this analysis at all (Delegation revisit). The 10-80-10 is a rough time allocation, not a rigid pipeline — the Ds cycle within each phase.

---

## CONCEPT 22: Four Common Beginner Mistakes + The Daily Checklist

### THE SCENARIO

Four different professionals. Four different mistakes. Each one is missing exactly ONE of the 4Ds.

---

**MISTAKE 1: Rafiq — Prompting before defining the problem**

Rafiq is a project manager. His boss says "improve our client onboarding process [naye client ko company mein laane ka tareeqa]." Rafiq immediately opens Claude and types: "How can I improve our client onboarding?"

He gets a generic list of best practices. He tries again with more detail. Gets a slightly less generic list. Tries a third time. Wastes an hour.

**Missing skill: DELEGATION.**

He never asked: What's wrong with the CURRENT process? Where are clients dropping off? What does "improved" mean — faster? fewer complaints? higher retention [kitne client wapas aate hain]? What parts should AI help with vs. what needs a human workshop?

**Fix:** Define the goal, the audience, the constraints, and the human/AI split FIRST.

---

**MISTAKE 2: Meher — Treating the first answer as the final answer**

Meher asks Claude to draft talking points [baat karne ke points] for a presentation. The first draft is underwhelming — too formal, too generic, misses her key message. She closes the chat and says: "AI can't do this. I'll write it myself."

**Missing skill: THE DESCRIPTION-DISCERNMENT LOOP.**

She treated one weak draft as proof that AI can't help. She never gave feedback. She never said what was wrong or how to fix it.

**Fix:** Inspect the result, give specific feedback (Problem → Why → Direction), and iterate. The first response is a draft, not the finish line.

---

**MISTAKE 3: Danish — Trusting a polished answer because it sounds professional**

Danish asks Claude to research competitors for a market analysis. Claude returns a beautiful, detailed report with company names, market share percentages, revenue figures, and strategic assessments. Danish copies it into his presentation.

At the meeting, his VP asks: "Where did the 23% market share figure for CompetitorX come from?" Danish can't answer. He checks later — the figure was hallucinated. CompetitorX's actual market share is 14%.

**Missing skill: DISCERNMENT.**

He mistook fluency for accuracy. The report LOOKED professional. The numbers SOUNDED specific. The tone was CONFIDENT. None of that means it was true.

**Fix:** Verify important facts, assumptions, calculations, and sources. Especially suspicious: precise figures that came from nothing you provided.

---

**MISTAKE 4: Aliya — Thinking about privacy only after something goes wrong**

Aliya uses AI to analyze employee survey data [mulazimeen ke survey ka data] to identify "flight risks" [woh log jo naukri chhodne wale hain]. She pastes raw survey responses — including names, departments, and verbatim complaints [seedhi shikayaat — logon ne apne alfaaz mein kya likha] — into a consumer AI tool. The analysis is excellent.

Two weeks later, her company's data officer [data ka zimmedar] discovers what happened. The survey was anonymous [naam chhupa ke]. Employees were told their responses were confidential. Aliya just uploaded their identifiable responses into an external tool that may retain the data.

**Missing skill: DILIGENCE.**

She focused entirely on getting the task done and ignored how AI was being used. The output was good. The use was a breach [aitmaad todna] of employee trust and possibly company policy.

**Fix:** Decide data safety, disclosure needs, approval requirements, and accountability rules BEFORE you start.

---

### THE CONCEPT

**Each mistake maps to exactly one missing D:**

```
  ┌─────────────────────────────────────────────────────────────┐
  │  MISTAKE                          │ MISSING SKILL            │
  ├───────────────────────────────────┼──────────────────────────┤
  │  1. Prompting before defining     │ DELEGATION               │
  │     the problem                   │ (no goal, no plan)       │
  ├───────────────────────────────────┼──────────────────────────┤
  │  2. Treating the first answer     │ DESCRIPTION-DISCERNMENT  │
  │     as the final answer           │ LOOP (no feedback,       │
  │                                   │  no iteration)           │
  ├───────────────────────────────────┼──────────────────────────┤
  │  3. Trusting a polished answer    │ DISCERNMENT              │
  │     because it sounds professional│ (no verification)        │
  ├───────────────────────────────────┼──────────────────────────┤
  │  4. Thinking about privacy or     │ DILIGENCE                │
  │     accountability only after     │ (no data/ethics check    │
  │     something goes wrong          │  before starting)        │
  └───────────────────────────────────┴──────────────────────────┘
```

> **THE EXAM CHEAT CODE:** The wrong answers on the exam ARE these four mistakes. Every wrong option embodies one of them:
>
> - **The reckless option** = Mistake 3 (trust AI blindly, don't verify)
> - **The wasteful option** = Mistake 2 (abandon AI after one bad result)
> - **The premature option** = Mistake 1 (jump to action without defining the problem)
> - **The irresponsible option** = Mistake 4 (ignore data safety, privacy, accountability)

### THE DAILY CHECKLIST

Not paperwork. Not for every tiny task. The point is to make these four questions **automatic** — like checking mirrors before driving:

```
  ╔══════════════════════════════════════════════════════════════╗
  ║  BEFORE YOU ASK AI TO DO REAL WORK:                          ║
  ║                                                               ║
  ║  DELEGATE:   What is the goal? What should AI do?            ║
  ║              What stays with me?                             ║
  ║                                                               ║
  ║  DESCRIBE:   What output, context, method, and behavior      ║
  ║              does AI need?                                   ║
  ║                                                               ║
  ║  DISCERN:    How will I know the answer is correct,          ║
  ║              complete, and useful?                            ║
  ║                                                               ║
  ║  BE DILIGENT: Is the data safe? Does AI's role need          ║
  ║              disclosure? Who approves and owns the result?   ║
  ╚══════════════════════════════════════════════════════════════╝
```

### EXAM TRAP

**The universal trap:** On any exam question, one wrong answer embodies Mistake 3 (trust without checking) and one embodies Mistake 2 (abandon the task). Eliminate both and you're left with 2 options. Then pick the one that preserves human judgment while still using AI.

```
  ELIMINATION STRATEGY:
  
  Step 1: Kill the RECKLESS option    → "Trust it / send it / no need to check"
  Step 2: Kill the WASTEFUL option    → "Stop using AI / do it all yourself"
  Step 3: Between the 2 survivors     → Pick the one with HUMAN JUDGMENT + AI
```

### QUICK CHECK

**Q:** A colleague says "I tried AI once, it gave me garbage, I'll never use it again." Which mistake is this?
**A:** Mistake 2 — treating the first answer as the final answer. The missing skill is the Description-Discernment loop. One weak output doesn't mean AI can't help — it means the first prompt wasn't complete, or the first draft needed feedback.

---

## PART 6 RECAP: The Complete Framework

```
  THE 4Ds — ONE LOOP, FROM CHAT TO SYSTEM

  ┌──────────────────────────────────────────────────────────────┐
  │                                                                │
  │   DELEGATE ──→ DESCRIBE ──→ DISCERN ──→ BE DILIGENT          │
  │       ↑                                        │              │
  │       └──────────── REPEAT AS NEEDED ──────────┘              │
  │                                                                │
  │   "Decide what AI should do.                                  │
  │    Describe the work clearly.                                 │
  │    Check what comes back.                                     │
  │    Own what happens next."                                    │
  │                                                                │
  ├────────────────────────────────────────────────────────────────┤
  │                                                                │
  │   THE 10-80-10 RULE:                                          │
  │                                                                │
  │   FIRST 10%: Delegation + Description  (set direction)        │
  │   MIDDLE 80%: Description + Discernment (orchestrate AI)      │
  │   LAST 10%: Discernment is critical    (judge the truth)      │
  │   ALL 100%: Diligence runs throughout  (always responsible)   │
  │                                                                │
  ├────────────────────────────────────────────────────────────────┤
  │                                                                │
  │   THE 4 MISTAKES (= the exam's wrong answers):               │
  │                                                                │
  │   1. No goal before prompting     → Missing: DELEGATION       │
  │   2. Quit after first bad output  → Missing: LOOP             │
  │   3. Trust polish without verify  → Missing: DISCERNMENT      │
  │   4. Privacy/ethics as afterthought→ Missing: DILIGENCE       │
  │                                                                │
  ├────────────────────────────────────────────────────────────────┤
  │                                                                │
  │   THE EXAM ELIMINATION:                                       │
  │                                                                │
  │   ✗ Kill the reckless option (trust blindly)                  │
  │   ✗ Kill the wasteful option (abandon task)                   │
  │   ✓ Pick: human judgment + AI working together                │
  │                                                                │
  └──────────────────────────────────────────────────────────────┘
```

---

## EXAM-LEVEL PRACTICE QUESTIONS — Part 6

---

### Question 1 — D4 (Workflow Integration)

A Forward Deployed Engineer is building a Digital FTE for a law firm to assist with contract review. She starts by asking Claude: "Build me a contract review agent."

Claude produces a system with document parsing, clause extraction, risk flagging, and automatic summarization. The engineer demos it to the partners. They're impressed and want to deploy it next week.

**What critical step did the engineer SKIP?**

**A.** She didn't test with enough sample contracts

**B.** She didn't map the job with the lawyers first — which tasks the AI may handle, which stay with humans, what must escalate, and what decisions should never leave a lawyer's hands

**C.** She didn't write a detailed enough system prompt

**D.** She didn't choose a powerful enough model for legal analysis

> **Answer: B**
>
> **Why B is correct:** Mistake 1 — prompting before defining the problem. She jumped straight to "build an agent" without Delegation: which parts of contract review are mechanical (extraction, formatting) vs. which require legal judgment (risk assessment, advice)? What if the AI misses a critical clause — who's liable [zimmedar]? What types of contracts require partner review? Without this mapping, the agent has no proper boundaries, and the firm has no clear human/AI split.
>
> **Why A is wrong:** Testing (Discernment) matters but comes AFTER Delegation. You can't test an agent that doesn't have defined boundaries yet. Testing would check whether the agent works within its scope — but the scope hasn't been defined.
>
> **Why C is wrong:** Description comes after Delegation. A detailed system prompt for an agent with undefined boundaries is a detailed description of the wrong thing.
>
> **Why D is wrong:** Model capability is a Platform awareness question (part of Delegation), but it's not the CRITICAL missing step. A more powerful model with no defined boundaries has the same problem.

---

### Question 2 — D2 (Output Evaluation & Validation)

A data analyst uploads a year of sales data and asks Claude to identify the top 5 trends. Claude identifies:

1. Revenue grew 18% year-over-year
2. Online sales surpassed physical store sales in Q3
3. Customer retention improved from 72% to 81%
4. The Southeast region became the highest-performing territory
5. Premium product line grew 3x faster than the budget line

The analyst is about to present these to the executive team.

**Which verification approach is MOST appropriate?**

**A.** Ask Claude to confirm these trends are supported by the data

**B.** Verify each trend independently — check the 18% growth figure with a spreadsheet calculation, confirm online vs. physical split from the actual Q3 numbers, validate retention figures against the CRM [Customer Relationship Management — grahak ka data rakhne ka system], check regional breakdown, and confirm product line growth rates

**C.** Spot-check the first and last trend and assume the middle three are correct if both check out

**D.** Present the trends with a caveat that they are AI-generated and may need verification

> **Answer: B**
>
> **Why B is correct:** Five specific claims going to the executive team — each needs independent verification. The 18% and 3x growth rates need computation (Numbers Rule). The "surpassed in Q3" claim needs the actual Q3 data. The retention figures need CRM records. The regional ranking needs the regional breakdown. Each verification uses a different source, which is what makes it robust. One wrong trend in a board presentation is a career problem.
>
> **Why A is wrong:** Self-verification is circular (Concept 12). Claude might have generated plausible-sounding trends that the data doesn't actually support.
>
> **Why C is wrong:** Two out of five is not sufficient for executive-level claims. Trends 2, 3, and 4 could each be wrong independently.
>
> **Why D is wrong:** "May need verification" shifts the burden to the executives. The analyst's job IS verification. A caveat doesn't fix a wrong number.

---

### Question 3 — D6 (Governance, Risk & Responsible Use)

A startup is building an AI-powered loan approval [qarz ki manzoori] system. The system analyzes applications and recommends approve/deny decisions. During testing, the team notices the system approves 78% of applications from graduates of two specific universities and only 34% from all other universities, even when financial profiles [maali haalat] are similar.

**What is the MOST appropriate response?**

**A.** Remove university name from the input data and retrain — but first investigate whether other features still encode the same bias indirectly

**B.** Add a disclaimer to loan decisions stating they are AI-assisted

**C.** Accept the pattern since graduates of prestigious universities may genuinely be better loan risks

**D.** Lower the approval threshold for non-target university graduates to balance the percentages

> **Answer: A**
>
> **Why A is correct:** This is a Deployment diligence problem — bias [tarafgaari] in a system that directly affects people's financial lives. The first step is to remove the obvious source of bias (university name). But the answer correctly notes: investigate whether other features still encode the same bias INDIRECTLY. Zip code, previous employer, or graduation year could correlate with university and reproduce the same pattern. Simply removing the university field without investigating proxy variables [chhupay huay mutabadil — woh cheezein jo seedha toh nahi lekin gol ghumaa ke wohi baat karti hain] is incomplete.
>
> **Why B is wrong:** Disclosure doesn't fix discrimination. Telling someone "an AI denied your loan, and by the way, the AI is biased" doesn't make the bias acceptable.
>
> **Why C is wrong:** The reckless option. "Better loan risks" based on university name is textbook discrimination. Financial profiles are SIMILAR — the difference is university, not creditworthiness [qarz wapas karne ki salahiyat].
>
> **Why D is wrong:** Artificially adjusting thresholds treats the symptom, not the cause. And it creates a new problem: you're now applying different standards to different groups, which is its own form of unfairness.

---

### Question 4 — D1 (Prompting & Task Execution)

A team lead asks an intern to use Claude to prepare a competitive analysis [muqaable ki companies ka jaayza]. The intern types: "Write a competitive analysis for our industry." Claude produces a generic report. The intern adds more detail. Slightly better. Adds more. Still generic. After 5 attempts, the intern says: "AI doesn't understand our industry."

**Which sequence of actions would MOST improve the outcome?**

**A.** Switch to a more powerful model → write a longer prompt → try again

**B.** Define what "competitive analysis" means for THEIR company (which competitors, what dimensions to compare, what decisions this analysis supports) → upload actual competitor data → ask Claude to structure a comparison on THEIR criteria

**C.** Ask Claude to research the competitors online and produce the analysis from web sources

**D.** Have the intern write the analysis manually, since AI clearly can't handle industry-specific work

> **Answer: B**
>
> **Why B is correct:** The intern committed Mistake 1 (no problem definition) FIVE TIMES. Each attempt added more words (Description) without ever defining the problem (Delegation). "Competitive analysis" means nothing without: which competitors? compared on what? for what decision? The fix isn't a better prompt — it's a better foundation. Then provide actual data (context engineering) and let Claude structure it.
>
> **Why A is wrong:** A more powerful model running a vague request produces more eloquent vagueness. The model isn't the problem — the missing problem definition is.
>
> **Why C is wrong:** Web research might help, but without defined competitors and comparison criteria, Claude will research random aspects of random companies. Delegation first, then research.
>
> **Why D is wrong:** Mistake 2 — abandoning AI after repeated weak results. The results were weak because the INPUTS were weak, not because AI can't do competitive analysis.

---

### Question 5 — D4 (Workflow Integration)

A company deploys a Digital FTE for customer onboarding [naye grahak ko company ki services shuru karna]. The FTE handles: welcome emails, account setup guides, FAQ responses, and scheduling first consultations [pehli meeting ka waqt tay karna].

After 3 months, they notice:
- Welcome emails: 95% positive feedback
- Setup guides: 90% positive
- FAQ responses: 88% positive
- Consultation scheduling: 62% positive — customers complain about inflexible timing, inability to handle rescheduling, and robotic responses when they express preferences

**What does the 10-80-10 framework suggest about the consultation scheduling issue?**

**A.** The middle 80% (execution) needs improvement — better prompts for the scheduling function

**B.** The first 10% (direction) was incomplete — consultation scheduling involves negotiation and personal preferences that may have been beyond appropriate AI delegation from the start

**C.** The last 10% (judgment) failed — the team should have caught this during final testing

**D.** All three phases failed equally

> **Answer: B**
>
> **Why B is correct:** The three simpler tasks (emails, guides, FAQs) perform well — they're clear automation tasks. Scheduling consultations is DIFFERENT: it involves understanding preferences, negotiating times, handling rescheduling, and responding to emotional cues ("I really can't do mornings, my mother is in the hospital"). This is a Delegation issue — in the first 10% (setting direction), the team should have asked: "Is scheduling a task AI can handle well, or does it need human flexibility?" The 62% satisfaction suggests this task needed a different human/AI split from the beginning.
>
> **Why A is wrong:** Better prompts (Description) might help marginally, but 62% vs. 95% for other tasks suggests a fundamental fit problem, not a prompting problem. This task may need human involvement, not better AI instructions.
>
> **Why C is wrong:** Testing (last 10%) would have caught this only if they tested WITH real customers who have real scheduling constraints. The issue is about the nature of the task, not about testing rigor.
>
> **Why D is wrong:** The other three tasks work at 88-95%. The system design was fine for THOSE tasks. The failure is specific to scheduling, which suggests a delegation problem for that one function, not a system-wide failure.

---

### Question 6 — CROSS-DOMAIN (The elimination strategy)

A hospital administrator uses Claude to draft a patient communication about changes to visiting hours. Claude produces a clear, professional email. The administrator is about to send it to 5,000 patients.

**Which of the following is the BEST course of action?**

**A.** Send it immediately — the email is well-written and the information is time-sensitive

**B.** Ask Claude to review the email for accuracy and confirm it's ready to send

**C.** Have a colleague review the email for accuracy and tone, verify the visiting hours against the official policy, and confirm the email complies with hospital communication standards before sending to 5,000 patients

**D.** Don't use AI for patient communications — rewrite the email manually from scratch

> **Answer: C**
>
> **Walk through the elimination strategy:**
>
> **Step 1 — Kill the reckless option:** Option A. "Send immediately" trusts AI output without verification for a communication reaching 5,000 patients. If the visiting hours are wrong, 5,000 people get wrong information about when they can visit sick family members. Killed.
>
> **Step 2 — Kill the wasteful option:** Option D. "Rewrite manually from scratch" abandons a perfectly useful draft. If the email is well-written, use it as a starting point. Killed.
>
> **Step 3 — Kill the circular option:** Option B. "Ask Claude to review its own email" is self-verification. The same system that wrote it will confirm it. Killed.
>
> **Step 4 — Survivor:** Option C. Human review + policy verification + compliance check + THEN send. This preserves the AI's work (efficient) while adding human judgment (safe). This is the exam's favorite answer pattern: **use AI's output, but verify through humans before it reaches people.**

---

### Question 7 — CROSS-DOMAIN (Identify the missing D)

Match each scenario to the PRIMARY missing competency:

**Scenario A:** A consultant pastes a client's confidential merger [do companies ka ek hona] documents into a free AI tool to speed up analysis.

**Scenario B:** An analyst gets a detailed market report from Claude and emails it to the CEO without reading it.

**Scenario C:** A manager types "fix my team's productivity" into Claude and gets useless generic advice.

**Scenario D:** A writer asks Claude for a blog draft, gets a mediocre first attempt, and concludes "AI can't write."

> **Answers:**
>
> **A → DILIGENCE (Mistake 4).** Confidential data in an unapproved tool. He focused on getting the task done and ignored data safety. Creation diligence was completely skipped.
>
> **B → DISCERNMENT (Mistake 3).** Trusting a polished output without reading it. Automation bias — the report LOOKS professional, so it must be correct. He put his name on work he never reviewed.
>
> **C → DELEGATION (Mistake 1).** Prompting before defining the problem. "Fix my team's productivity" has no goal definition, no context, no constraints. He can't describe what he wants because he hasn't decided what he wants.
>
> **D → DESCRIPTION-DISCERNMENT LOOP (Mistake 2).** Treating the first answer as the final answer. One weak draft ≠ AI can't write. She never gave feedback, never iterated, never used the loop.

---

## FULL COURSE SUMMARY: The Complete Map

```
  ╔══════════════════════════════════════════════════════════════════╗
  ║                                                                  ║
  ║  AI FLUENCY = Effective + Efficient + Ethical + Safe             ║
  ║                                                                  ║
  ║  THREE MODES:                                                    ║
  ║  Automation (do this) → Augmentation (think with me) → Agency   ║
  ║  (pursue this goal)                                             ║
  ║                                                                  ║
  ║  FOUR COMPETENCIES (the 4Ds):                                   ║
  ║                                                                  ║
  ║  D1: DELEGATION     Problem awareness → Platform awareness       ║
  ║      (Decide)       → Task delegation                           ║
  ║                                                                  ║
  ║  D2: DESCRIPTION    Product (what) → Process (how) →            ║
  ║      (Explain)      Performance (behavior) → Context engineering║
  ║                                                                  ║
  ║  D3: DISCERNMENT    Product (is it good?) → Process (is this    ║
  ║      (Check)        way of working paying off?) → Performance   ║
  ║                     (are users served well?)                    ║
  ║                     + Automation bias + 4 red flags             ║
  ║                     + Description-Discernment loop              ║
  ║                                                                  ║
  ║  D4: DILIGENCE      Creation (data + tools) → Transparency     ║
  ║      (Own)          (disclosure) → Deployment (verify + ship)   ║
  ║                     + Numbers Rule + Redaction                  ║
  ║                     + "Would I put my name on this?"            ║
  ║                                                                  ║
  ║  THE LOOP:   Delegate → Describe → Discern → Be Diligent       ║
  ║              → Repeat as needed                                 ║
  ║                                                                  ║
  ║  10-80-10:   10% direction / 80% execution / 10% judgment       ║
  ║              Diligence = always on                              ║
  ║                                                                  ║
  ║  4 MISTAKES: No goal / No iteration / Trust polish / Ignore     ║
  ║              ethics. These ARE the exam's wrong answers.         ║
  ║                                                                  ║
  ║  ELIMINATION: Kill reckless → Kill wasteful → Pick human        ║
  ║               judgment + AI working together                    ║
  ║                                                                  ║
  ║  MASTER PRINCIPLE:                                              ║
  ║  AI can automate work. It cannot automate accountability.       ║
  ║                                                                  ║
  ╚══════════════════════════════════════════════════════════════════╝
```

---

*End of Part 6. End of the AI Fluency Scenario-Based Study Guide.*

*All 22 concepts covered. 6 parts. 40 exam-level practice questions total.*

*Review this guide alongside your daily checklist (03 daily-checklist.md) and cheatsheet (05 cheatsheet.md). When in doubt on exam day: identify the mode, spot the missing D, eliminate the reckless and wasteful options, pick the one with human judgment.*
