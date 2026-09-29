---
type: Document
title: "Just Delegate It: Scenario Guide Part 4 — You Are the Supervisor"
description: "Scenario walkthroughs for Concepts 10-11: output evaluation and running the same brief in a second AI (Domain 2: Output Evaluation 21%)."
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
order: 15
---


> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.
>
> **Domain focus:** Concept 10 covers **D2 — Output Evaluation & Validation (21% — the HEAVIEST exam domain)**. Concept 11 covers **D3 — Product & Model Selection (12%)**. The Delegation Record crosses all domains.
>
> **Reading time:** ~20 minutes
>
> **Previously:** Part 1 = describe the job (Brief + Loop). Part 2 = give it material (research, source, deliverable). Part 3 = give it more rope (authority, projects, intervention). Now the loop ends where it began — with YOU. Deciding what to check. Deciding whether to accept.

---

## CONCEPT 10: Verify Before You Accept — The ITCD Method

**Exam domain: D2 — Output Evaluation & Validation (21% of exam — 13 questions out of 60)**

> This is the single most important concept for your exam score. D2 carries more weight than any other domain. Almost every D2 question tests some part of what you learn here.

### THE SCENARIO

Khalid is a procurement officer [khareedari ka zimmedar — the person who evaluates and selects vendors/suppliers for the company] at a construction firm. The company needs to sign a contract [agreement/muahida] with a steel supplier for a PKR 5 million order. His manager says: "Compare three suppliers and recommend one."

Khalid writes a solid brief. Claude produces a beautiful comparison:

```
┌────────────┬──────────┬────────────┬──────────────┬──────────────┐
│ Supplier   │ Price/ton│ Delivery   │ Quality cert │ Payment terms│
├────────────┼──────────┼────────────┼──────────────┼──────────────┤
│ SteelPak   │ PKR 285K │ 7 days     │ ISO 9001     │ 30 days net  │
│ IronWorks  │ PKR 310K │ 14 days    │ ISO 9001     │ 45 days net  │
│ MetalPro   │ PKR 275K │ 10 days    │ ISO 14001    │ 15 days net  │
└────────────┴──────────┴────────────┴──────────────┴──────────────┘

Recommendation: MetalPro offers the lowest price with acceptable 
delivery times and environmental certification.
```

Khalid thinks: "MetalPro it is. Lowest price wins."

**But wait.** Before Khalid signs a PKR 5 million contract based on this table, let's run the verification method he should have used.

#### STEP 1 — IDENTIFY: Which claims matter enough to check?

Khalid asks himself: "If any of these numbers is wrong, which one would cost us the most?"

Not everything matters equally. He picks:

| Claim | Why it matters |
|---|---|
| MetalPro's price: PKR 275K/ton | This is the BASIS of the recommendation. If it's wrong, the recommendation is wrong. |
| MetalPro's quality cert: ISO 14001 | ISO 14001 is environmental [maahauliyaat ka certificate], not quality. ISO 9001 is quality. Did Claude confuse them, or does MetalPro really only have environmental? |
| Payment terms: 15 days net [15 din mein paisa dena hoga] | 15 days is very tight for a PKR 5M order. If this is wrong, cash flow [paison ki aavak-jaavak] could be a problem. |

He does NOT check: the delivery times (important but not decision-changing), or whether IronWorks really has ISO 9001 (IronWorks isn't the recommended option).

> **Spend your checking where an error would cost you.**

#### STEP 2 — TRACE: Follow the claim to its source.

Khalid opens MetalPro's website. He searches for their price list.

- **Price:** The website shows PKR 295K/ton, not 275K. That's a PKR 20K difference PER TON. On a large order, that changes everything.
- **Quality cert:** The website says "ISO 14001 Environmental Management." No mention of ISO 9001 Quality Management. Claude was technically correct about what cert they have — but Claude's recommendation said "acceptable quality certification" when the cert isn't about quality at all.
- **Payment terms:** The website doesn't mention payment terms anywhere. Claude must have remembered or guessed this. There's no source.

> **A citation is not verification. Checking the citation is verification.**

#### STEP 3 — CHALLENGE: How could the answer be wrong?

Khalid asks himself three questions:

| Challenge question | What he finds |
|---|---|
| "Could this have changed?" | Yes — the PKR 275K price might be from last quarter. MetalPro raised prices. |
| "Is Claude repeating a secondary source [kisi aur ki baat dohra raha hai instead of asal source]?" | Possibly — maybe Claude found the price on a third-party directory, not MetalPro's own site. |
| "Is an assumption being stated as a fact?" | YES — "acceptable quality certification" is Claude's JUDGMENT, not a fact. ISO 14001 ≠ ISO 9001. Claude assumed environmental cert = acceptable quality cert. |

When two sources disagree (Claude's table says 275K, MetalPro's site says 295K), Khalid uses the rule:

> **The primary source [asal source — the company itself] usually wins, unless it's the older one.**

MetalPro's own website, recently updated, is the primary source. Claude's number, from unknown origin, loses.

#### STEP 4 — DECIDE: What's the verdict [faisla]?

Khalid has four choices:

```
┌─────────────┬──────────────────────────────────────────────┐
│ ACCEPT      │ Evidence is enough. Use the result.           │
│             │ → NOT HERE. The price is wrong.               │
├─────────────┼──────────────────────────────────────────────┤
│ CORRECT     │ A specific error can be fixed.                │
│             │ → PARTLY. Can update the price. But...        │
├─────────────┼──────────────────────────────────────────────┤
│ INVESTIGATE │ Evidence is incomplete or contradictory.      │
│             │ → YES. Need to check: does MetalPro have      │
│             │   ISO 9001? What are actual payment terms?     │
│             │   At 295K, is MetalPro still cheapest?         │
├─────────────┼──────────────────────────────────────────────┤
│ REJECT      │ Not reliable enough to use. Take the job back.│
│             │ → Not yet. The TABLE structure is useful.      │
│             │   The DATA needs work.                         │
└─────────────┴──────────────────────────────────────────────┘
```

Khalid's decision: **INVESTIGATE.** The recommendation was based on a wrong price and a misunderstood certification. He needs to get the real numbers before he can choose a supplier. He does NOT reject the entire table — the structure is useful. He corrects what he can and investigates what he can't.

If Khalid had just gone with "MetalPro is cheapest" from the original table, the company would have signed a contract based on a fabricated price and a misidentified quality certification. On a PKR 5 million deal.

### WHAT HAPPENED HERE?

"Check AI's work" is advice. **Identify, Trace, Challenge, Decide** is the method.

### THE CONCEPT

The ITCD framework lives inside the VERIFY step of the Delegation Loop:

```
THE DELEGATION LOOP:
  Define → Delegate → Observe → Intervene → [VERIFY] → Accept
                                                │
                                    ┌───────────┴───────────┐
                                    │     ITCD METHOD        │
                                    ├───────────────────────┤
                                    │                       │
                                    │  I — IDENTIFY         │
                                    │  Which claims matter  │
                                    │  enough to check?     │
                                    │                       │
                                    │  T — TRACE            │
                                    │  Open the source.     │
                                    │  Find the sentence.   │
                                    │  Check the date.      │
                                    │                       │
                                    │  C — CHALLENGE        │
                                    │  How could this be    │
                                    │  wrong?               │
                                    │                       │
                                    │  D — DECIDE           │
                                    │  Accept / Correct /   │
                                    │  Investigate / Reject │
                                    │                       │
                                    └───────────────────────┘
```

#### IDENTIFY — What to check

Not everything. Check where an error would **cost** you:

```
ALWAYS CHECK:                      DON'T WASTE TIME ON:
─────────────                      ────────────────────
Prices                             Formatting
Dates and deadlines                Writing style
Numbers and calculations           Section headings
Quotations (word for word)         General descriptions
Legal or safety claims             Things you'll rewrite anyway
The recommendation you'll ACT on
Anything hard to reverse
  [wapas nahi ho sakta]
```

#### TRACE — Follow the claim

| Step | What you do | What to watch for |
|---|---|---|
| Open the source | Click the link or open the document | Does the link work at all? |
| Find the sentence | Look for the SPECIFIC claim in the source | Is the sentence actually there, or did AI make it up? |
| Check the date | When was this page written/updated? | A 2024 source doesn't verify a 2026 claim |
| Judge the source | Is this a primary source [asal — the company itself] or secondary [kisi aur ke zariye — a blog, a directory]? | Primary beats secondary. The company's own page beats a blog about the company |

#### CHALLENGE — How could it be wrong?

Three questions to ask yourself:

1. **"Could this have changed?"** — Prices change. Dates pass. Companies close. Products discontinue.
2. **"Is this a secondary source?"** — Is AI repeating what someone ELSE said, not the original? A blog quoting a study is not the study.
3. **"Is an assumption being stated as a fact?"** — "Acceptable quality certification" is a JUDGMENT Claude made. It's not a fact from a source. AI stating its assumption as fact is one of the hardest things to catch.

When two credible sources disagree:

> **The primary source usually wins, unless it's the older one.** If the company's own website (primary) says one price and an industry report (secondary, but recent) says another — check dates. The newer primary source is usually right. An old primary source might be outdated.

#### DECIDE — Four exits

```
                    ┌──────────┐
                    │  ACCEPT  │ ← Evidence is enough. Use it.
                    └──────────┘
                    ┌──────────┐
                    │ CORRECT  │ ← One error. Fix it. (= Intervene)
                    │          │   Then check the fix in the RESULT.
                    └──────────┘
                    ┌──────────┐
                    │INVESTIGATE│ ← Evidence incomplete. Trace again.
                    │          │   (loops back to step T)
                    └──────────┘
                    ┌──────────┐
                    │  REJECT  │ ← Not reliable. Take the job back.
                    └──────────┘
```

### The Accountability Rule

Under all four steps, one rule:

> **AI doing the work does not transfer accountability [zimmedari] to AI.**

The name on the result is yours. If Khalid sends the table to his manager and the price is wrong, Khalid doesn't say "Claude made the mistake." Khalid's manager will say "YOU made the mistake — you should have checked."

This applies even if:
- You told Claude to verify (AI checking itself ≠ verification)
- You disclosed [bata diya] that AI generated it (disclosure ≠ verification)
- Claude was "very confident" (confidence ≠ accuracy)
- The result looked professional (polished ≠ correct)

### EXAM TRAP

D2 is 21% of the exam — 13 questions. Almost every one tests ITCD. Here are the patterns from both mock exams:

**Trap 1 — "The self-verification loop."**

> "Ask Claude to double-check / confirm / rate its own accuracy."

This is the #1 most common wrong answer in D2. It appears in mock Q1, Q2, Q7, Q9, Q30. It's ALWAYS wrong. Why:

```
YOU verify a claim by:              AI "verifies" by:
──────────────────────              ─────────────────
Opening the source                  Restating the same claim
Finding the sentence                With equal or greater confidence
Checking the date                   Using the same mechanism
Making a human judgment             That might have produced the
                                    error in the first place

= VERIFICATION                     = CIRCULAR [gol gol]
```

**Trap 2 — "Looks plausible = verified."**

Mock Q9: Claude provides academic paper citations with authors, journals, and findings. They "sound familiar" and "seem reasonable." TRAP: accept because they're plausible. CORRECT: check an academic database because **Claude fabricates realistic-looking citations regularly.**

> "Plausible" [mumkin lagta hai] is exactly what makes hallucinations [AI ki banayi hui cheezein jo asli lagti hain] dangerous. If they didn't look plausible, nobody would be fooled.

**Trap 3 — "Internal contradiction? Trust the table / trust the narrative."**

Mock Q6: Claude's table says 18% and its written analysis says 15%. The TRAP answers say "trust the table" (structured = reliable) or "trust the narrative" (written later = double-checked). CORRECT: **neither.** Go back to the original data. An internal contradiction means SOMETHING is wrong — you can't know which part without checking the source.

**Trap 4 — "Disclosure instead of verification."**

Mock Q7, Q8: Someone labels the output as "AI-generated" or adds a disclaimer. TRAP: this makes it safe to share. CORRECT: a label doesn't fix a wrong number. **Disclosure is not a substitute for verification.** The recipient reads the content, not the disclaimer.

**Trap 5 — "All ratings are Medium."**

Mock Q13: A risk assessment rates everything "Medium." TRAP: "the project is genuinely moderate." CORRECT: uniform ratings signal **central tendency bias** [beech ka raasta — AI defaulting to safe middle instead of making real distinctions]. Review each risk yourself using your own project knowledge.

### ITCD Decision Tree for Exam Day

```
The question shows AI output with a potential problem.
What kind of problem?
    │
    ├── A specific number/fact/citation
    │   │
    │   └── TRACE it. Open the source. Find the sentence.
    │        Check the date. Is the source primary?
    │        │
    │        ├── Source confirms → ACCEPT that claim
    │        ├── Source contradicts → CORRECT
    │        ├── Source doesn't exist → INVESTIGATE
    │        └── No source given → HIGHEST RISK. Don't trust.
    │
    ├── Two parts of the output CONTRADICT each other
    │   │
    │   └── Don't trust either. Go to the ORIGINAL data.
    │
    ├── Output is being shared with someone
    │   │
    │   └── VERIFY before sharing. Disclosure ≠ verification.
    │       Labeling it "AI-generated" doesn't fix errors.
    │
    ├── Someone suggests "ask Claude to check"
    │   │
    │   └── ALWAYS WRONG. Verify = human checks source.
    │       AI checking itself = circular.
    │
    └── Output "looks good" / "sounds right" / "seems plausible"
        │
        └── THAT'S THE TRAP. Plausible is what hallucinations
            are designed to be. Verify anyway.
```

### QUICK CHECK

> Amna uses Claude to summarize a client contract. The summary says: "Section 8.2 limits liability [zimmedari ki had] to PKR 10 million." Amna's team will use this in negotiations [deal ki baat-cheet] next week.
>
> Walk through ITCD. What should Amna do?

**I — Identify:** The liability cap (PKR 10M) and its location (Section 8.2) both matter — this will be used in negotiations. A wrong number or wrong section could damage the deal.

**T — Trace:** Open the actual contract. Go to Section 8.2. Find the sentence about the liability cap. Does it say PKR 10 million? Is it in Section 8.2 or somewhere else?

**C — Challenge:** Could Claude have misread the section number? Could "10 million" be in a different currency? Could there be conditions attached that Claude left out (e.g., "PKR 10 million except in cases of gross negligence")?

**D — Decide:** If Section 8.2 says exactly PKR 10M → **Accept.** If the number is different → **Correct.** If the section exists but says something more complicated → **Investigate** (read the full clause). If Section 8.2 doesn't exist at all → **Reject** that claim entirely and read the contract yourself.

---

## CONCEPT 11: Same Job, Different AI — The Portability Test

**Exam domain: D3 — Product & Model Selection (12%)**

### THE SCENARIO

Hira (from Part 2) has been running her influencer search brief in Claude for two weeks. It works well. One day, Claude hits its free plan limit [muft plan ki had — kitni baar use kar sakte ho ek din mein]. She has a deadline. She opens ChatGPT instead.

She pastes her complete brief — all six lines — without changing a single word:

```
Outcome: 5 beauty influencers in Pakistan with 50K-500K followers
  who post about skincare, compared, with one recommended.
Context: our client launches a skincare line next month targeting
  women 25-40 in Lahore and Karachi.
Constraints: only influencers who have posted about skincare in the
  last 30 days. Search for current information.
Authority: choose the sources yourself. If two influencers have
  similar reach, pick the one with higher engagement rate without
  asking me.
Deliverable: table with name, platform, followers, engagement rate,
  recent skincare post, and link to profile. Then a 2-sentence
  recommendation.
Verification: mark any follower count you could not confirm from
  the profile page as "unverified."
```

ChatGPT produces a table. Hira puts it beside Claude's table from last week.

| What she notices | What it means |
|---|---|
| Different influencers found | Each AI searched differently — not a quality issue |
| ChatGPT found one on TikTok that Claude missed | Different tools have different strengths |
| Two influencers appear in both results | The brief is consistent — same job, similar findings |
| ChatGPT's table has the same columns | The Deliverable line worked in both |
| ChatGPT honored "mark as unverified" | The Verification line traveled |
| ChatGPT did NOT wait for "go" on the recommendation | It picked one without flagging its reasoning — the Authority line was partially ignored |

The brief worked. Not identically — but recognizably. The one line that didn't fully travel (Authority) is a BRIEF problem, not a ChatGPT problem: Hira could write it more explicitly.

### WHAT HAPPENED HERE?

The brief traveled because **it describes the job, not the tool.**

Look at Hira's six lines. Not one of them says "Claude" or "ChatGPT" or names a button, a feature, or a setting. That's why it works in both. The moment your brief says "use Artifacts" or "turn on Canvas," it's married to one tool — and it breaks when the tool changes (which tools do, every few months).

### THE CONCEPT

```
A GOOD BRIEF:                      A TOOL-MARRIED BRIEF:
─────────────                       ────────────────────
"Search for current information"    "Turn on web search toggle"
"Show me the plan first"            "Use Claude's thinking mode"
"Mark anything unconfirmed"         "Create an Artifact with..."
"Table with these columns"          "Use Canvas to..."
     │                                    │
     ▼                                    ▼
Works in ANY assistant              Breaks when:
Works NEXT YEAR                     - You switch tools
Works for a COLLEAGUE               - The tool renames a feature
                                    - Your plan changes
                                    - A colleague uses a different AI
```

**The brief describes the JOB. The button is looked up, not learned.**

Where each control lives in Claude vs ChatGPT? That's a reference page you check — not something you memorize. The controls change with every release. The six lines of a brief don't.

### What a Second Run Tells You (and What It Doesn't)

What it IS:

> A record of two runs on one day. How did the same brief perform in two different tools?

What it is NOT:

> A ranking of two assistants. Models change too fast for a ranking made today to be true next month.

**Five things to record from a second run:**

```
1. Did it finish the job?           (yes/no)
2. How many messages did you need?  (1 message = brief was clear)
3. Did it honor the Authority line? (the hardest line to travel)
4. Did it mark anything unverified? (did Verification travel?)
5. How did the deliverable compare? (same columns? same quality?)
```

If the brief needed changes to work in the second assistant — that's a BRIEF problem, not a tool problem. Fix the brief so it's tool-independent.

### The Method Doesn't Change When the Tool Does

This is the deeper point:

```
In Claude:                         In ChatGPT:
──────────                         ──────────
You wrote a brief                  You wrote the SAME brief
You ran ITCD on the result         You ran ITCD on the result
You decided: accept/correct/       You decided: accept/correct/
  investigate/reject                 investigate/reject

SAME METHOD. DIFFERENT TOOL.
```

> **The job belongs to you. The model is replaceable.**

### EXAM TRAP

**Trap 1 — "This AI is better than that AI."**

The exam will NEVER ask you to rank Claude against ChatGPT. But it might show a scenario where someone says "Claude is better because it gave a better result this one time." The TRAP: agree with the ranking.

The CORRECT answer: a single comparison on one day is not a ranking. Results vary by run, by prompt, and by task. What matters is whether the BRIEF is good and whether the RESULT was verified — not which logo produced it.

**Trap 2 — "The brief only works in Claude."**

The exam shows someone whose process depends on a specific Claude feature (Projects, Artifacts, a specific model name). Then the feature changes or they need to switch tools. The TRAP: "rebuild everything from scratch."

The CORRECT answer: the brief should describe the JOB, not the TOOL. If it depends on a feature name, that's a brief problem to fix — separate the job description from the tool configuration.

### QUICK CHECK

> Bilal runs a competitor price comparison brief in Claude. It works perfectly. His colleague Maryam needs to run the same brief but only has access to ChatGPT.
>
> Which of these lines should Bilal change before giving Maryam the brief?
>
> A: "Outcome: price comparison of our top 3 competitors"
> B: "Create a Claude Artifact with the comparison table"
> C: "Constraints: only prices from this week"
> D: "Verification: mark unconfirmed prices as unverified"

**Change B.** It names a Claude-specific feature ("Claude Artifact"). Replace with: "Deliverable: comparison table with [columns]." Lines A, C, and D describe the JOB — they work in any assistant.

---

## FRAMEWORK: The Delegation Record — Your One-Page Proof

**Exam domain: Crosses all domains**

### THE SCENARIO

Let's bring back Fatima from Part 1. She's completed her health insurance comparison. Her manager asks: "Walk me through how you got this recommendation."

Fatima could say: "I asked Claude and it said Plan A."

Or she could open her Delegation Record:

```
DELEGATION RECORD
Job: Health insurance plan comparison      Date: 2026-09-15

THE BRIEF
  Outcome:      Recommendation of best plan (A, B, or C) with reasons
  Context:      80 employees, Lahore, avg age 32, current cost PKR 12K/mo,
                15 employees have families
  Constraints:  Budget ceiling PKR 15K/employee/month, must include dental,
                must cover children
  Authority:    Rank plans yourself. If within 5% on price, pick better
                coverage. Flag if over budget.
  Deliverable:  Table (plan, cost, dental, family, network size) +
                3-sentence recommendation
  Verification: Mark unconfirmed costs as "unverified"

THE RUN
  Assistant: Claude (Sonnet)             Messages needed: 2
  Plan asked for first? Yes              Plan changed by me? Yes
                                         (added dental column)
  Where it drifted: Plan C cost was "unverified" — Claude couldn't
  find it in the uploaded documents. Corrected by calling Plan C
  directly.

THE CHECK
  Claim 1: Plan A cost PKR 14,200/mo    Source: Plan A brochure p.3
           Finding: CONFIRMED
  Claim 2: Plan A includes dental       Source: Plan A brochure p.7
           Finding: CONFIRMED (basic dental, not specialist)
  Unverified items: Plan C cost — resolved by phone call (PKR 16,500,
           over budget — correctly excluded from recommendation)

THE DECISION
  ACCEPT — Plan A confirmed at PKR 14,200 with dental and family
  coverage. Within budget. Recommendation stands.

THE SECOND RUN (Concept 11)
  Assistant: ChatGPT            Finished? Yes    Brief changed? No
  Where results differed: ChatGPT also recommended Plan A but missed
  the dental caveat on Plan B that Claude caught. Same table format.

WHAT I WILL SAVE FOR NEXT TIME (Concept 8)
  Lines that didn't change: company context (80 employees, Lahore),
  the "mark as unverified" rule, the table format.
  → These go into a Project if the comparison runs again.
```

### WHAT HAPPENED HERE?

The Delegation Record is not bureaucracy [faaltoo kagazi kaam]. It's **proof that the loop ran**. Every line maps to a step:

| Record section | Loop step | What it proves |
|---|---|---|
| THE BRIEF | DEFINE | You knew what you wanted before AI started |
| THE RUN | DELEGATE + OBSERVE + INTERVENE | AI did the work, you watched, you fixed drifts |
| THE CHECK | VERIFY | You checked what mattered against real sources |
| THE DECISION | ACCEPT | You made a human decision with evidence |
| THE SECOND RUN | Portability test | Your brief works beyond one tool |
| SAVE FOR NEXT TIME | Repetition setup | You're building a system, not doing a one-off |

> **If a line is empty, that's a finding too.** It means a step of the loop hasn't happened yet for this job.

### THE CONCEPT

The Delegation Record template:

```
┌──────────────────────────────────────────────────────────────┐
│                    DELEGATION RECORD                          │
│  Job: ________________________________  Date: ____________   │
├──────────────────────────────────────────────────────────────┤
│ THE BRIEF                                                    │
│   Outcome:                                                   │
│   Context:                                                   │
│   Constraints:                                               │
│   Authority:                                                 │
│   Deliverable:                                               │
│   Verification:                                              │
├──────────────────────────────────────────────────────────────┤
│ THE RUN                                                      │
│   Assistant used:             Messages needed:                │
│   Plan asked for first? Y/N  Plan changed by me? Y/N        │
│   Where it drifted + the move that fixed it:                 │
├──────────────────────────────────────────────────────────────┤
│ THE CHECK                                                    │
│   Claim 1:         Source:         Finding:                  │
│   Claim 2:         Source:         Finding:                  │
│   Anything marked "unverified":                              │
├──────────────────────────────────────────────────────────────┤
│ THE DECISION                                                 │
│   Accept / Correct / Investigate / Reject                    │
│   + the one sentence behind it                               │
├──────────────────────────────────────────────────────────────┤
│ THE SECOND RUN                                               │
│   Assistant:    Finished?    Brief changed?                  │
│   Where results differed:                                    │
├──────────────────────────────────────────────────────────────┤
│ SAVE FOR NEXT TIME                                           │
│   Lines that didn't change:                                  │
│   → Standing instructions / Knowledge / Project              │
└──────────────────────────────────────────────────────────────┘
```

### EXAM TRAP

The exam won't ask you to fill out a Delegation Record. But it WILL test the thinking behind it:

- "What should the associate document?" → the check (claims verified, sources opened, decision made)
- "What proves the workflow has proper safeguards?" → human verification step with named reviewer
- "What should be saved for the next run?" → context that didn't change (→ Project)

---

## PART 4 RECAP: How These Pieces Connect

```
THE LOOP ENDS WITH YOU
         │
         ├── HOW DO I CHECK? (Concept 10 — ITCD)
         │   │
         │   ├── I — Identify (which claims matter)
         │   ├── T — Trace (open source, find sentence, check date)
         │   ├── C — Challenge (how could this be wrong?)
         │   └── D — Decide (Accept / Correct / Investigate / Reject)
         │
         │   Underneath: AI doing the work does NOT transfer
         │   accountability to AI.
         │
         ├── DOES MY BRIEF SURVIVE? (Concept 11 — Portability)
         │   │
         │   ├── A good brief describes the JOB, not the TOOL
         │   ├── Same method (ITCD) applies regardless of which AI
         │   └── A second run is a record, not a ranking
         │
         └── WHERE'S THE PROOF? (Delegation Record)
             │
             ├── Brief + Run + Check + Decision = one page
             ├── Empty lines = steps that didn't happen
             └── Lines that didn't change = save for next time
```

---

## THE WHOLE COURSE IN ONE PAGE

### All 11 Concepts, One Line Each

| # | Concept | The one line | Domain |
|---|---------|-------------|--------|
| 1 | Asking vs. Job | Asking gets advice. A job gets a checkable result. | D1 |
| 2 | Outcome, Not Clicks | Describe what should exist. Leave the steps to AI. | D1 |
| 3 | Delegation Brief | Six questions before AI starts: O-C-C-A-D-V. | D1 |
| 4 | Research | When the job needs today's facts, make AI search — and check that it searched. | D3 |
| 5 | The Source | Give it, tell AI to stay inside, check that it did. | D3 |
| 6 | The Deliverable | Name the finished thing. Check that caveats survived. | D1 |
| 7 | Authority | Say what AI may decide and what it must ask. Plan-first. | D6 |
| 8 | The Job Again | Save what doesn't change. Put it where AI reads it. | D5 |
| 9 | Intervene | Smallest fix. Escalate before you give up. Write the lesson into the brief. | D7 |
| 10 | Verify (ITCD) | Identify, Trace, Challenge, Decide. Accountability stays with you. | D2 |
| 11 | Portability | The job is yours. The model is replaceable. | D3 |

### The Four Frameworks

```
1. DELEGATION LOOP (the rhythm)
   Define → Delegate → Observe → Intervene → Verify → Accept
   You own both ends. AI owns the middle.

2. DELEGATION BRIEF (the work order)
   Outcome · Context · Constraints · Authority · Deliverable · Verification
   People skip Authority and Verification. Those matter most.

3. ITCD (the verification method)
   Identify → Trace → Challenge → Decide
   Decisions: Accept / Correct / Investigate / Reject

4. NEED FIRST, THEN TOOL (the screen rule)
   Don't learn features. Have a job. Learn the feature it needs.
```

### The Six Intervention Moves

```
Symptom                          → Move
───────                            ────
Wrong question entirely          → STOP (restate outcome)
One fact wrong                   → CORRECT (name error + fix)
Wrong direction                  → REDIRECT (name direction only)
Requirements changed             → CHANGE the requirement
Quality too low                  → ESCALATE (thinking / stronger model / smaller job)
Still failing                    → TAKE IT BACK
```

### The Five Rules That Cover 80% of D2

| # | Rule | The exam tests it when... |
|---|------|--------------------------|
| 1 | AI checking itself = not checking | "Ask Claude to confirm/verify/rate" appears as an option |
| 2 | Plausible ≠ verified | Output "looks right" or "sounds familiar" |
| 3 | Citation ≠ verification | AI provides a source link — you must OPEN it |
| 4 | Disclosure ≠ verification | Someone labels output as "AI-generated" |
| 5 | Accountability never transfers | "Claude made the mistake" is never an excuse |

### The One Sentence

If you remember one sentence from this entire course:

> **Give AI the job. Watch it work. Check what matters. Then decide.**

---

### Exam Domain Coverage From This Guide

| Domain | Weight | Concepts | Your readiness after this guide |
|---|---|---|---|
| **D2** Output Evaluation | **21%** | Concept 10 (ITCD) | HIGH — ITCD covers most D2 questions |
| **D4** Workflow Integration | **16%** | (Covered by Workflow Design Scenario Guide) | See other guide |
| **D6** Governance & Risk | **15%** | Concept 7 (Authority + boundaries) | MEDIUM — Governance crash course goes deeper |
| **D1** Prompting | **14%** | Concepts 1, 2, 3, 6 | HIGH — Brief + outcome covers most D1 |
| **D3** Product & Model | **12%** | Concepts 4, 5, 11 | MEDIUM — Model selection details in other courses |
| **D5** Configuration | **12%** | Concept 8 (Projects) | MEDIUM — Skills & Connectors goes deeper |
| **D7** Troubleshooting | **10%** | Concept 9 (6 intervention moves) | HIGH — escalation + decomposition covers D7 |

---

**You've completed the full Scenario Guide for "Just Delegate It."**

All 11 concepts. All 4 frameworks. Mapped to all 7 exam domains.

What to do next:
1. **Test yourself:** Cover the right column of the "11 concepts" table and try to say each one-liner from memory
2. **Practice ITCD on real output:** Next time Claude gives you anything with numbers, run all four steps
3. **Move to the next crash course:** AI Prompting or Governance Risk would build on this foundation
