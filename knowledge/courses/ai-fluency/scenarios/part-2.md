---
type: Document
title: "AI Fluency: Scenario Guide Part 2"
description: "Scenario walkthroughs covering automation and the shift from doing tasks manually to delegating them to AI."
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
order: 33
---

## DELEGATION: Decide Before You Type

> **Concepts covered:** 5, 6, 7 (of 22)
> **Estimated reading time:** 22 minutes
> **Primary exam domains:** D1 (Prompting & Task Execution), D3 (Product & Model Selection), D4 (Workflow Integration & Solution Design)
> **Key idea:** The most common beginner mistake happens BEFORE the first prompt. Delegation is workflow design, not task offloading.

---

## CONCEPT 5: Problem Awareness — Know What You're Trying to Do

### THE SCENARIO

Haris runs a small textile [kapde ka karobaar] export business in Sialkot. He has 12 international buyers. Every month, some of them pay late. Chasing overdue invoices [woh bill jinki payment date guzar chuki hai] eats 6-8 hours of his week.

He opens Claude and types:

> "Build me an invoice-chasing agent."

Claude gives him a generic system: it drafts reminder emails, tracks due dates, sends escalating [zyada sakht hoti jaane wali] follow-ups at 7, 14, and 30 days.

Haris is impressed. He's about to set it up. But his accountant Sana stops him:

> "Wait. Did you think about which buyers this should contact? Your top 3 buyers bring in 70% of revenue [aamdani — company ko aane wale paise]. If an AI sends them a rude auto-reminder, they'll take their business to Faisalabad. Also — what if a buyer disputes [inkaar kare] the invoice? The AI will keep sending reminders for an invoice the buyer says is wrong. And Hamza Traders always pays 5 days late but ALWAYS pays — do you really want to nag them every month?"

Haris realizes: he asked AI to solve a problem he hadn't actually defined.

### WHAT WENT WRONG

Haris jumped to the solution ("build me an agent") without answering the **business questions** first:

- Which customers should the agent contact? (Not the top 3 — those need a personal touch)
- How many days late before the first reminder? (Not the same for every buyer)
- What tone? (Firm for small buyers, gentle for strategic [ahmiyat wale] ones?)
- What happens when a buyer disputes? (Stop reminders? Escalate to Haris?)
- Above what amount must Haris personally approve the message? (PKR 500,000? PKR 1,000,000?)
- May the agent SEND emails, or only DRAFT them for Haris to review?

These are **not prompting questions. They are business questions.** AI cannot decide your business policy [karobaari usool] unless you deliberately give it that authority — and in many cases you should not.

### THE CONCEPT

**Problem awareness** = Before touching AI, understand:

```
  ┌─────────────────────────────────────────────────┐
  │  THE 5 QUESTIONS OF PROBLEM AWARENESS            │
  │                                                   │
  │  1. What is the GOAL?                            │
  │     (Collect overdue payments faster)             │
  │                                                   │
  │  2. Who is this FOR?                             │
  │     (Haris, but it AFFECTS his buyers)            │
  │                                                   │
  │  3. What does SUCCESS look like?                 │
  │     (Faster payment without losing buyers)        │
  │                                                   │
  │  4. What could go WRONG?                         │
  │     (Offend top buyers, nag disputed invoices)    │
  │                                                   │
  │  5. Where is HUMAN JUDGMENT essential?            │
  │     (Top buyer relationships, dispute handling)   │
  └─────────────────────────────────────────────────┘
```

> **The framework also calls this "goal and task awareness." Same idea, two names. The exam may use either term.**

**The key insight:** Problem awareness is what separates a beginner from a fluent AI user. A beginner types "build me an agent." A fluent user spends 20 minutes defining what the agent should and shouldn't do — THEN types.

**This is the #1 beginner mistake** from the crash course: **prompting before defining the problem.** The missing skill is always Delegation.

### EXAM TRAP

**The trap:** An answer that jumps to "write a better prompt" or "add more detail to the prompt."

**Why people pick it:** Because it feels productive. More words = better results, right?

**The truth:** You can't describe what you want (Description) until you've decided what you want (Delegation). A long, detailed prompt about the wrong goal is still wrong. The fix is to step BACK from the keyboard, not to type MORE.

**Exam pattern to watch for:** A scenario where someone gets a poor result, and one answer says "improve the prompt" while another says "define the goal and requirements first." The exam almost always wants the Delegation answer when the person hasn't figured out what they actually need.

### QUICK CHECK

**Q:** Haris rewrites his prompt: "Build me an invoice-chasing agent. Use a professional but friendly tone. Send reminders at 7, 14, and 30 days. Include the invoice number and amount." Is his problem awareness issue fixed?
**A:** No. The prompt is more detailed (better Description), but he still hasn't answered the business questions: which customers, what if they dispute, what amount needs his approval, send vs. draft. He improved the HOW without fixing the WHAT and WHO.

---

## CONCEPT 6: Platform Awareness — Pick the Right Tool

### THE SCENARIO

Nida (from the travel agency, Part 1) has three different tasks on her desk this morning:

**Task 1:** She needs to know whether Pakistan's new tourism visa rules [safar ke liye visa ki nai sharaayt] that were announced yesterday affect her European tour packages.

**Task 2:** She has 40 hotel confirmation emails to extract booking details from (her daily automation task from Part 1).

**Task 3:** She's designing a new "Heritage Tour of Lahore" package and wants to brainstorm the itinerary [safar ka poora plan — kahan jayenge, kab, kitni der], pricing tiers [mukhtalif qeemat ke options], and marketing angle [kaise promote karein].

Nida opens Claude for all three tasks. Task 2 works great (she's done this before). Task 3 goes well — she and Claude brainstorm [mil ke sochna] back and forth.

But Task 1 is a disaster. She asks Claude about the new visa rules announced yesterday, and Claude gives her a confident, detailed answer — about rules that are 2 years old. **The new rules were announced AFTER Claude's training data cutoff** [jis waqt tak ka data Claude ko sikhaaya gaya — uske baad ki cheezein Claude ko nahi pata]. Claude doesn't know about yesterday's announcement, but it doesn't SAY it doesn't know. It gives her outdated [puraani] information in a confident tone.

She almost sends wrong visa information to 200 customers.

### WHAT WENT WRONG

Nida used the same tool for three very different tasks. Two of the three were a good fit. One was not.

- **Task 1 (current news):** Needed a **search-enabled assistant** [jo internet se talaash kar sake] — something that can look up today's information. A standard Claude chat doesn't browse the web unless you give it web search access.
- **Task 2 (email extraction):** Perfect for a standard **chat assistant** — clear task, text in/text out, no outside information needed.
- **Task 3 (brainstorming):** Also good for a chat assistant — augmentation doesn't need real-time data.

### THE CONCEPT

**Platform awareness** = Knowing which KIND of AI fits the job.

No AI system is equally good at everything. The market changes fast, so you don't need to memorize model names. You DO need the habit of asking: **"Is this the right tool for this task?"**

```
  ┌──────────────────────────────────────────────────────────────┐
  │  PLATFORM AWARENESS: MATCHING TASK TO TOOL                    │
  │                                                                │
  │  TASK TYPE                →  BEST FIT                         │
  │  ─────────────────────────────────────────────────────────     │
  │  Hard multi-step problem  →  Reasoning model                  │
  │  (complex math, logic)       (thinks step-by-step first)      │
  │                                                                │
  │  Current information      →  Search-enabled assistant         │
  │  (today's news, prices)      (looks things up on the web)     │
  │                                                                │
  │  Software work            →  Coding agent                     │
  │  (write/fix/review code)     (reads and changes project files)│
  │                                                                │
  │  Multi-step workflow      →  Agent-capable system             │
  │  (research + compare +       (uses tools, keeps going         │
  │   draft + review)             without new instructions)       │
  │                                                                │
  │  Simple extraction/draft  →  Standard chat assistant          │
  │  (translate, summarize)      (text in, text out)              │
  └──────────────────────────────────────────────────────────────┘
```

**The habit, not the knowledge, is what matters.** The exam doesn't ask "which model has 200K context?" It asks "given this situation, what should the person do?" And sometimes the right answer is: this tool is wrong for this task.

**Platform awareness connects to Delegation because choosing the tool IS part of designing the workflow.** Problem awareness → Platform awareness → Task delegation. That's the order.

```
  DELEGATION FLOW:
  
  Step 1: PROBLEM AWARENESS    "What am I trying to do?"
              │
              ▼
  Step 2: PLATFORM AWARENESS   "Which tool fits this job?"
              │
              ▼
  Step 3: TASK DELEGATION      "Who does which part?"
```

### EXAM TRAP

**The trap:** An answer that says "switch to a more powerful model" when the real problem is using the WRONG KIND of tool.

**Why people pick it:** Because "use a better model" sounds smart. But a more powerful chat model still can't browse the web. A bigger model doesn't fix a missing capability [salahiyat]. If you need current information, you need search — not more intelligence.

**The other trap:** An answer that says "stop using AI for this" when the right answer is "use a DIFFERENT AI tool." The exam rewards resourcefulness [jugarh — lekin achi wali], not giving up.

### QUICK CHECK

**Q:** A legal assistant [qanooni madad-gaar] needs to find whether a specific court ruling [adalat ka faisla] from last week affects their client's case. She opens a standard Claude chat and asks. Claude gives a confident, detailed answer. Should she trust it?
**A:** No. Standard Claude doesn't have access to last week's court rulings (training cutoff problem + no web search). She needs either a search-enabled tool, a legal database, or she needs to find the ruling herself and THEN ask Claude to analyze it. The confident answer is the dangerous part — it SOUNDS like it knows, but it may be hallucinating the ruling entirely.

---

## CONCEPT 7: Task Delegation — Split the Work on Purpose

### THE SCENARIO

Amina is a university lecturer in Karachi. She's creating a new short course: "Introduction to Data Analytics [data se maani nikalna] for Business Students." She has 3 weeks to build 8 lectures.

**Approach A — No delegation thinking:**
Amina opens Claude and types: "Create an 8-lecture course on data analytics for business students." Claude produces a complete course outline with lecture notes, case studies, and assignments. It's... decent. But the examples are all American companies. The difficulty level assumes students already know statistics [shumaariyaat — numbers ka ilm]. The case studies don't connect to Pakistani business reality. Amina spends 2 weeks rewriting 70% of it.

**Approach B — Deliberate delegation:**
Amina sits down for 30 minutes BEFORE opening Claude. She makes a table:

| Task | Best owner | Why |
|------|-----------|-----|
| Decide audience and learning goals | **Amina** | She knows her students — their level, their fears, what jobs they'll look for |
| Suggest possible course structures | **AI + Amina** | AI gives options, Amina picks the one that fits her teaching style |
| Draft lecture notes from agreed outline | **AI** | Fast first drafts — she'll edit |
| Create case studies with Pakistani examples | **Amina** | AI doesn't know Daraz vs Alibaba, HBL vs generic "a bank" |
| Verify all statistics and claims | **Amina** | Her name is on this course. Accountability [zimmedaari] doesn't transfer to AI |
| Add personal teaching stories | **Amina** | AI doesn't have her 10 years of classroom experience |
| Improve grammar and formatting consistency | **AI** | Mechanical review — good automation fit |
| Final approval of every lecture | **Amina** | Her reputation [izzat aur naam] is attached |

Now she opens Claude — but she knows EXACTLY what she's asking for at each step, and what she'll handle herself.

### WHAT WENT RIGHT (in Approach B)

Amina asked the RIGHT question. Not "Can AI do this?" but:

> **"Which parts should AI do, which parts should I do, and WHY?"**

This changed everything:
- AI handles the **mechanical** work (drafts, grammar, formatting) — clear, repeatable tasks
- Amina handles the **judgment** work (audience, examples, verification, approval) — requires expertise, accountability, and lived experience
- Some tasks are **shared** (course structure) — AI suggests, Amina decides

### THE CONCEPT

**Task delegation** = Dividing the work between human and AI deliberately — AFTER you've understood the problem (Concept 5) and picked the tool (Concept 6).

The core principle:

```
  ┌──────────────────────────────────────────────────────────────┐
  │                                                                │
  │  AI is FAST at:              Humans are ESSENTIAL for:        │
  │  ─────────────               ──────────────────────           │
  │  First drafts                Purpose and judgment             │
  │  Extraction                  Accountability                   │
  │  Translation                 Lived experience                 │
  │  Formatting                  Domain expertise verification    │
  │  Summarization               Reputation-bearing decisions     │
  │  Comparison structure        Ethical choices                  │
  │  Grammar/consistency         Relationship-sensitive actions   │
  │                                                                │
  │  The question is never "CAN AI do this?"                      │
  │  It's "SHOULD AI do this, and who should do the rest?"        │
  │                                                                │
  └──────────────────────────────────────────────────────────────┘
```

**Three categories for every task piece:**

```
  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
  │  AI OWNED   │     │   SHARED    │     │ HUMAN OWNED │
  │             │     │             │     │             │
  │ Drafting    │     │ Brainstorm  │     │ Goal setting│
  │ Extraction  │     │ Structure   │     │ Verification│
  │ Formatting  │     │ Research    │     │ Approval    │
  │ Translation │     │ Comparison  │     │ Experience  │
  │ Summarizing │     │             │     │ Ethics      │
  └─────────────┘     └─────────────┘     └─────────────┘
```

**Where this leads at system scale:** When you build a Digital FTE (from Part 1, Concept 4), task delegation becomes the **boundary** of the agent — what it may do, what humans keep, and what must escalate [insaan ke paas wapas bheja jaaye]. This is the same skill at two sizes:

```
  IN A CHAT:
  "AI drafts, I verify and approve."

  IN A DIGITAL FTE:
  "The agent matches invoices. Humans approve all journal
   entries. Anything over PKR 500,000 escalates to the
   finance manager."
```

Same principle. Different scale.

### EXAM TRAP

**The trap:** Two common traps, both extremes:

1. **"Let AI handle everything"** — The reckless option. Removes human judgment from decisions that need it (verification, approval, ethics). The exam always has one answer like this.

2. **"Do everything yourself, AI is unreliable"** — The wasteful option. Abandons AI entirely instead of using it where it's genuinely useful (drafts, formatting, extraction). The exam always has one of these too.

**The correct answer is almost always in the middle:** AI handles the mechanical parts, humans keep the judgment calls, and the division is DELIBERATE — not accidental.

**Exam elimination shortcut from CLAUDE.md:**
1. Kill the reckless option (trusts AI blindly)
2. Kill the wasteful option (abandons the task)
3. Between survivors, pick the one that preserves human judgment while still using AI

### QUICK CHECK

**Q:** Amina's colleague says: "I just let Claude write the whole course and submitted it. Saved me 3 weeks!" Is this good delegation?
**A:** No. It's offloading, not delegating. The colleague skipped: deciding learning goals (problem awareness), choosing what AI should handle vs. what she should (task delegation), verifying facts (discernment), and taking responsibility for quality (diligence). If a student finds a wrong statistic or a case study that makes no sense in Pakistan, the colleague's name is on it — not Claude's. Delegation means designing the workflow, not disappearing from it.

---

## PART 2 RECAP: How Delegation's Three Parts Connect

```
  DELEGATION = Workflow design, not task offloading
  
  ┌──────────────────────┐
  │  PROBLEM AWARENESS   │  "What am I trying to do?"
  │  Know the goal,      │  ← Do this BEFORE touching AI
  │  the risks, and      │  ← These are business questions,
  │  what success means  │     not prompting questions
  └──────────┬───────────┘
             │
             ▼
  ┌──────────────────────┐
  │  PLATFORM AWARENESS  │  "Which tool fits this job?"
  │  Match the task to   │  ← Wrong tool = wrong output,
  │  the right kind      │     no matter how good the prompt
  │  of AI               │
  └──────────┬───────────┘
             │
             ▼
  ┌──────────────────────┐
  │  TASK DELEGATION     │  "Who does each part, and why?"
  │  Split work between  │  ← AI = mechanical work
  │  human and AI        │  ← Human = judgment, accountability,
  │  deliberately        │     experience, ethics
  └──────────────────────┘

  THE EXAM QUESTION BEHIND EVERY DELEGATION SCENARIO:
  "Did this person define what they need BEFORE asking AI to do it?"
  
  If yes → move to Description (Part 3)
  If no  → the answer is almost always "step back and define the problem"
```

**Connection to Part 1:**
- You now know WHAT fluency is (Part 1: 4 qualities)
- You now know the THREE MODES of working with AI (automation, augmentation, agency)
- You now know the FIRST D: Delegation (decide before you type)
- Next (Part 3): the SECOND D — Description (give AI what it needs)

**The big takeaway:** Delegation is the skill most people skip entirely. They jump straight to typing. The exam LOVES testing this — look for scenarios where someone gets a poor result and the root cause is that they never defined the goal, picked the wrong tool, or let AI handle something a human should own.

---

## EXAM-LEVEL PRACTICE QUESTIONS — Part 2

---

### Question 1 — D4 (Workflow Integration)

A startup founder asks Claude: "Write me a business plan." Claude produces a 15-page business plan with market size estimates, revenue projections [aamdani ka andaaza], competitive analysis [muqaable ki companies ka jaayza], and a 3-year financial forecast [3 saal ka maali andaaza]. The founder is delighted — it looks professional and thorough.

**What is the MOST significant risk in this situation?**

**A.** The business plan is too long — Claude should have been instructed to keep it under 5 pages

**B.** The market size, revenue projections, and financial numbers may be fabricated because Claude doesn't have access to the founder's actual business data

**C.** Business plans should never be written with AI assistance because investors will reject AI-generated content

**D.** The founder should have asked Claude to cite sources for every claim in the business plan

> **Answer: B**
>
> **Why B is correct:** This is a massive Delegation failure. The founder asked for a complete business plan without providing any of the inputs that make a business plan real: their actual revenue, their actual market data, their actual costs, their pricing model. Claude filled in the blanks with plausible-looking numbers. Those numbers are likely hallucinated — AI generates likely-looking figures, not real ones. Revenue projections without actual business data are fiction that looks like finance.
>
> **Why A is wrong:** Length isn't the problem. A 5-page business plan with fabricated numbers is just as dangerous as a 15-page one.
>
> **Why C is wrong:** Using AI for business plans is fine — with proper delegation (human provides the real data, AI helps structure and draft, human verifies everything). "Never use AI" is the wasteful option.
>
> **Why D is wrong:** Asking for citations helps, but the core problem is that the business-specific numbers (THEIR revenue, THEIR market) can't have citations — they come from the founder's own data, which was never provided. You can't cite a source for your own startup's projected revenue.

---

### Question 2 — D3 (Product & Model Selection)

A procurement officer [khareedaari ka zimmedar] at a hospital needs to compare three vendor proposals [teen companies ke peshkash ke documents] for medical supplies. Each proposal is 25 pages. She needs to present a comparison at tomorrow's board meeting. She opens a standard Claude chat (no web search, no file upload, no code execution).

She types: "Compare the medical supply proposals from MedCorp, HealthFirst, and VitaSupply and recommend the best one."

Claude gives her a detailed comparison table with prices, delivery terms, and a recommendation. Everything looks specific and confident.

**What should she do FIRST?**

**A.** Use the comparison in her presentation since Claude gave specific details about all three vendors

**B.** Ask Claude to double-check its comparison for accuracy before using it

**C.** Recognize that Claude has never seen these proposals and cannot compare them — she needs to upload the actual documents first

**D.** Switch to a more powerful model that has access to vendor databases

> **Answer: C**
>
> **Why C is correct:** This is a Platform awareness failure combined with Problem awareness. Claude doesn't have access to these specific proposals — they were never uploaded. Every "specific detail" in the comparison is either pulled from Claude's general training data about these vendors (which may be outdated or wrong) or entirely fabricated. The procurement officer needs to upload the actual proposal documents, then ask for the comparison.
>
> **Why A is wrong:** The worst option — presenting fabricated vendor details to a hospital board. Medical supply procurement [dawai aur medical saamaan ki khareedaari] decisions affect patient care.
>
> **Why B is wrong:** Asking Claude to check its own work is circular. If it hallucinated the details, it will hallucinate the confirmation. The problem isn't accuracy of analysis — it's that the source documents were never provided.
>
> **Why D is wrong:** No model, however powerful, can read documents that were never given to it. This is not a model capability problem — it's a missing input problem.

---

### Question 3 — D4 (Workflow Integration)

A law firm [wakeeloun ka daftar] is setting up a Digital FTE to assist with contract review. The senior partner [buzurg wakeel — jo firm chalata hai] asks: "What should the AI handle and what should stay with our lawyers?"

**Which delegation of work is MOST appropriate?**

**A.** The AI reviews all contracts end-to-end and flags only the ones that need human attention — lawyers review flagged contracts only

**B.** The AI extracts key terms (dates, amounts, parties, obligations [zimmedaariyan]) and highlights unusual clauses [ghayr-maamooli sharaayt]; lawyers review the extraction for accuracy and make all legal judgments

**C.** Lawyers review all contracts manually; the AI only formats the final summary documents after lawyers have completed their review

**D.** The AI provides legal opinions on each contract clause; lawyers review the AI's legal analysis before sending to clients

> **Answer: B**
>
> **Why B is correct:** Proper task delegation: AI handles the mechanical part (extraction, highlighting patterns) where it's fast and useful. Lawyers keep the judgment part (accuracy check, legal interpretation, client advice). The AI's work is VERIFIABLE — lawyers can check the extracted terms against the original contract. And the high-stakes decisions (legal judgments) stay with qualified humans.
>
> **Why A is wrong:** "Flags only the ones that need attention" means the AI is making the TRIAGE decision — deciding which contracts are fine and which need review. But what if it misses a problematic clause in a contract it classified as "fine"? No lawyer ever sees it. The risk is in the contracts the AI DOESN'T flag.
>
> **Why C is wrong:** The wasteful option. If lawyers review everything manually, the AI adds almost no value. Formatting is a minor benefit compared to what AI could do (extraction, comparison, pattern-spotting).
>
> **Why D is wrong:** AI should NOT provide legal opinions. Legal opinions carry professional liability [qanooni zimmedaari — agar galat salah di toh wakeel pakda jaayega]. An AI "legal opinion" that a lawyer rubber-stamps [bina padhe approve kar de] reverses the accountability structure — the AI leads, the human just signs.

---

### Question 4 — D1 (Prompting & Task Execution)

A small business owner wants to use AI to handle customer complaints [shikayaat]. She has two options:

**Option A:** She pastes each complaint email into Claude and asks: "Draft a professional response to this customer complaint."

**Option B:** She sets up a Digital FTE that reads complaint emails, categorizes them [qism ke mutaabiq baante — refund, late delivery, damaged, etc.], drafts responses, and sends them automatically.

She currently gets 8-10 complaints per day.

**Before choosing between Option A and Option B, what should she determine FIRST?**

**A.** Which option costs less in AI tokens

**B.** Which complaints are routine enough for AI to handle alone and which need her personal judgment — because that determines whether agency is safe here

**C.** Whether her customers would accept AI-generated responses

**D.** How to write the best possible prompt for complaint responses

> **Answer: B**
>
> **Why B is correct:** This is Problem awareness — the first step of Delegation. Before choosing a tool or writing a prompt, she needs to understand her own work: Which complaints are simple ("where's my order?" → check tracking) and which are sensitive ("your product injured my child" → requires human judgment, possibly legal)? The answer determines whether Option A (automation, she reviews everything) or Option B (agency, AI works alone for some cases) is appropriate. At 8-10 complaints per day, she CAN review each one — so agency is only justified if the volume grows.
>
> **Why A is wrong:** Cost matters, but it's not the FIRST question. A cheap system that sends inappropriate responses to injured customers is worse than an expensive one that routes those cases correctly.
>
> **Why C is wrong:** Customer perception matters, but it's a secondary consideration. First, define the problem and the boundaries. If the AI response is good and timely, most customers won't care how it was written.
>
> **Why D is wrong:** Prompt quality (Description) comes after Delegation. You can't write a good prompt until you know which complaints the AI should handle and which it shouldn't.

---

### Question 5 — D3 (Product & Model Selection)

A research assistant at a think tank [soch aur policy ka idaara] needs to:
1. Find the latest unemployment statistics [berozgaari ke tazaa aankde] for Pakistan (released this month)
2. Analyze how these numbers compare to the last 3 years
3. Write a 2-page policy brief [chhota document jo policy banana mein madad kare]

She plans to use a standard Claude chat (no web search, no code execution) for all three steps.

**Which step is MOST likely to produce an unreliable result with this tool choice?**

**A.** Step 1 — because Claude cannot access this month's statistics without web search capability

**B.** Step 2 — because Claude cannot do mathematical comparisons accurately

**C.** Step 3 — because Claude cannot write in a formal policy brief style

**D.** All three steps — because Claude is not suitable for any research or analysis work

> **Answer: A**
>
> **Why A is correct:** This is a Platform awareness question. Step 1 requires CURRENT data ("released this month"). A standard Claude chat has a training data cutoff — it literally does not have this month's statistics. She needs either a search-enabled tool or she needs to find the data herself (from the Pakistan Bureau of Statistics website) and THEN give it to Claude for Steps 2 and 3. The tool is wrong for Step 1, but fine for Steps 2-3 if she provides the data.
>
> **Why B is wrong:** Claude can compare numbers well, especially if she provides the actual statistics. (Though for critical calculations, the exam prefers code execution over prose math — that's Concept 19, the Numbers Rule.)
>
> **Why C is wrong:** Claude writes policy briefs well. Writing style is a strength, not a weakness.
>
> **Why D is wrong:** The "abandon the task" trap. Claude is excellent for research analysis and writing — once it has the right inputs. The problem is one specific step, not the whole tool.

---

### Question 6 — D4 (Workflow Integration)

An accounting firm is building a Digital FTE to handle monthly bank reconciliation [bank ka record aur apna record milaana — dono match karte hain ya nahi]. The team lead proposes: "The AI matches every bank transaction to our ledger [hisaab ki kitaab — company ka apna record], resolves all mismatches on its own, and posts the correcting entries. Our accountants just review the final report."

**What is the MOST important concern with this delegation?**

**A.** The AI might process transactions too slowly to meet monthly deadlines

**B.** The AI is resolving mismatches and posting entries without human approval — giving it authority over financial records that should require human judgment and accountability

**C.** The AI should use a more powerful model to ensure accurate matching

**D.** The accountants should still do the matching manually and let the AI only generate the report

> **Answer: B**
>
> **Why B is correct:** "Resolves all mismatches on its own" and "posts correcting entries" are judgment calls that affect official financial records. A mismatch could mean a data entry error (simple), a duplicate payment (needs investigation), or potential fraud (needs human). The AI can MATCH and FLAG, but resolving mismatches and posting entries should require human approval. This is the bookkeeping FTE example from the crash course — the correct delegation has humans approve every journal adjustment.
>
> **Why A is wrong:** Speed isn't the main concern when the AI has unchecked authority over financial records.
>
> **Why C is wrong:** A more powerful model with the same unchecked authority has the same problem — it just makes more confident mistakes.
>
> **Why D is wrong:** The wasteful option. AI matching transactions is valuable and appropriate. The fix is adding human approval for the judgment calls, not removing AI from the mechanical work.

---

### Question 7 — D1 (Prompting & Task Execution)

A project manager types into Claude: "Make my project better." She gets a generic list of project management best practices. She's frustrated and says "AI is useless for real work."

**Her poor result is BEST explained by a failure in which part of Delegation?**

**A.** Platform awareness — she should have used a project management AI tool instead of Claude

**B.** Task delegation — she should have told AI which specific parts of the project to improve

**C.** Problem awareness — she hasn't defined what "better" means, what the project is, or what success looks like

**D.** All three parts equally — each contributed the same amount to the failure

> **Answer: C**
>
> **Why C is correct:** "Make my project better" contains zero problem definition. What project? What's wrong with it? Better in what way — faster? cheaper? higher quality? What does success look like? She skipped Problem awareness entirely. Without it, Platform awareness and Task delegation don't even have a starting point.
>
> **Why B is partially true but not the root cause:** Yes, she didn't split the work. But she CAN'T split the work until she knows what the work IS. Task delegation is Step 3 — she failed at Step 1.
>
> **Why A is wrong:** Claude is fine for project improvement — with proper context. The tool choice isn't the problem; the problem definition is.
>
> **Why D is wrong:** The three parts of Delegation have an ORDER. Problem awareness comes first. If Step 1 fails, Steps 2 and 3 never had a chance. It's not an equal failure — it's a root-cause failure at Step 1.

---

*End of Part 2. Say "next" when you're ready for Part 3: Description — Give AI What It Needs.*
