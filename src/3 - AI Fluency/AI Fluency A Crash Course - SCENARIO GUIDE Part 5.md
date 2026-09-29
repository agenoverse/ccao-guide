# AI Fluency: Scenario-Based Study Guide — Part 5

## DILIGENCE: Own It or Don't Ship It

> **Concepts covered:** 17, 18, 19 (of 22)
> **Estimated reading time:** 22 minutes
> **Primary exam domains:** D6 (Governance, Risk & Responsible Use — **15%, third heaviest**), D2 (Output Evaluation & Validation)
> **Key idea:** Good output does NOT make a use responsible. AI can automate work. It cannot automate accountability.

**Diligence sits on a timeline — BEFORE, DURING, and AFTER:**

```
  BEFORE the work         DURING the work         AFTER the work
  ──────────────          ───────────────         ──────────────
  CREATION                TRANSPARENCY            DEPLOYMENT
  DILIGENCE               DILIGENCE               DILIGENCE

  Choose tools &          Be honest about         Verify before
  data responsibly        AI's role               it leaves your hands
```

---

## CONCEPT 17: Creation Diligence & Redaction

### THE SCENARIO

Professor Asad teaches at a private university in Islamabad. End of semester. He has 120 students. He needs to write individual feedback comments for each student's final project — comments that go into their permanent academic record [hamesha ka record jo transcripts mein jaata hai].

Normally this takes him 3 full days. This semester, he has an idea: use AI.

He opens a consumer AI chat tool — the one he uses for personal work, not the university's approved tool (because the approved tool requires a request form and takes a week to get access). He pastes:

> "Write feedback for Student: Ayesha Khan, Roll No. BBA-2024-0147, GPA 3.2, Project score: 72/100. She submitted late, had one plagiarism warning in Week 8, but improved significantly after the midterm. Note: she disclosed a family medical situation to me in confidence."

Claude writes beautiful, personalized feedback. Asad does this for all 120 students.

Two problems. One he sees. One he doesn't.

**Problem he sees (later):** A colleague mentions that consumer AI tools may use conversation data for training. Asad just uploaded 120 students' names, roll numbers, GPAs, disciplinary records [rules todne ka record], and one student's private medical disclosure [niji medical baat jo usne bharose mein batayi thi] into a tool that might retain and learn from it.

**Problem he doesn't see:** He never told the students. Their academic feedback — which affects scholarships [wazaaif], graduate school applications, and job references — was shaped by AI, and they have no idea. If Ayesha's feedback says something slightly wrong about her "improvement trajectory," she has no way to know it came from an AI's interpretation rather than her professor's judgment.

### WHAT WENT WRONG

The output was good. The USE was irresponsible. Multiple failures:

1. **Personal data** — names, roll numbers, GPAs, disciplinary records, private medical info
2. **Unapproved tool** — the university never approved this consumer service for student data
3. **Confidential information** — a student's private medical disclosure
4. **No data policy check** — who can access or keep this data? Can the AI company see it?
5. **Easiest path ≠ responsible path** — the consumer tool was one click away; the approved tool required a form and a week

### THE CONCEPT

**Creation diligence** = Making responsible choices about tools and data BEFORE and DURING the work.

**The 6 questions to ask before sharing data with any AI:**

```
  ┌───────────────────────────────────────────────────────────┐
  │  CREATION DILIGENCE: 6 QUESTIONS BEFORE YOU PASTE          │
  │                                                             │
  │  1. Does this contain PERSONAL DATA?                       │
  │     [kisi shakhs ki pehchaan wali information —             │
  │      naam, number, address, medical, financial]            │
  │                                                             │
  │  2. Does it contain CONFIDENTIAL COMPANY information?      │
  │     [company ki khufia malumat — strategy, financials,      │
  │      client data, internal plans]                           │
  │                                                             │
  │  3. Am I ALLOWED to put this into THIS tool?               │
  │     [kya meri organization ne is tool ko approve kiya hai?] │
  │                                                             │
  │  4. Who can ACCESS or KEEP the data?                       │
  │     [yeh data kaun dekh sakta hai? kya AI company           │
  │      isko rakhegi / training mein use karegi?]              │
  │                                                             │
  │  5. Is this service APPROVED by my organization?           │
  │     [kya yeh tool meri organization ki allowed list         │
  │      mein hai?]                                            │
  │                                                             │
  │  6. Are there LEGAL, CONTRACTUAL, or PROFESSIONAL          │
  │     restrictions?                                           │
  │     [koi qanooni ya professional pabandi toh nahi?          │
  │      e.g., doctor-patient confidentiality, legal            │
  │      privilege, NDA (Non-Disclosure Agreement —              │
  │      raaz rakhne ka agreement)]                            │
  └───────────────────────────────────────────────────────────┘
```

**The fix is usually NOT to abandon the task — it's to strip the data.**

This is called **redaction** [pehchaan wali details hataa dena — lekin kaam ke liye zaroori pattern rakh lena]:

```
  ┌────────────────────────────────────────────────────────────┐
  │  REDACTION = Remove identifying details,                    │
  │              KEEP the pattern the task needs                │
  │                                                              │
  │  ASAD'S FIX:                                                │
  │                                                              │
  │  BEFORE (dangerous):                                        │
  │  "Student: Ayesha Khan, Roll No. BBA-2024-0147,            │
  │   GPA 3.2, Project: 72/100, plagiarism warning Week 8,     │
  │   family medical situation disclosed confidentially"         │
  │                                                              │
  │  AFTER (redacted):                                          │
  │  "Student: [removed]. GPA range: 3.0-3.5.                  │
  │   Project: 70-75 range. Late submission. One academic       │
  │   integrity warning early in semester, followed by          │
  │   significant improvement after midterm."                    │
  │                                                              │
  │  ✓ No name, no roll number, no exact GPA                   │
  │  ✓ Pattern preserved (grade range, trajectory, warning)     │
  │  ✗ Medical disclosure COMPLETELY removed (not AI's          │
  │    business, and it was shared in confidence)                │
  └────────────────────────────────────────────────────────────┘
```

**Redaction can fail in TWO directions:**

```
  ┌──────────────────────────┐     ┌──────────────────────────┐
  │  TOO MUCH removed         │     │  TOO LITTLE removed       │
  │                            │     │                            │
  │  Feedback with no grade    │     │  "The only student who     │
  │  and no incident is not    │     │   missed the Week 3 lab"   │
  │  feedback. The task        │     │   ← this NAMES that        │
  │  CANNOT be done.           │     │   student as surely as     │
  │                            │     │   a name does              │
  │  RESULT: Useless output    │     │  RESULT: Privacy breach    │
  └──────────────────────────┘     └──────────────────────────┘

  THE TEST: Could someone reading ONLY what you pasted
  work out who it's about?
  
  If yes → not redacted enough.
```

> **Critical exam insight:** Stripping data doesn't answer the TOOL question. Even with perfect redaction, using an unapproved tool may violate company policy. Creation diligence has TWO layers: (1) is the data safe to share? AND (2) is this tool approved for this type of work?

**The policy problem the crash course calls out:**

A policy only works if the approved tool is as easy to reach as the one people already have open. Asad's consumer AI was one click away. The approved tool required a form and a week of waiting. When the easy path is unapproved and the approved path is hard, the POLICY is partly to blame — not just the person. **Tell whoever owns the policy where it was hard.** This is a Diligence insight the exam may test: the responsible action isn't just "follow the policy" — it's also "flag when the policy makes the wrong path too easy."

### EXAM TRAP

**The trap:** An answer that says "don't use AI for this task at all" when redaction would make it safe.

**Why people pick it:** Because the scenario involved sensitive data, and avoiding AI feels like the safe choice.

**The truth:** The exam rewards finding a SAFE WAY to proceed, not abandoning the task. Redaction + approved tool = responsible use. "Don't use AI" is the wasteful option — the task CAN be done responsibly with the right precautions.

**The other trap:** An answer that says "the output is good, so the use was fine." Good output ≠ responsible use. Asad's feedback was well-written. His data handling was irresponsible. The exam SEPARATES output quality from use responsibility.

### QUICK CHECK

**Q:** Asad redacts all student data and uses the university's approved AI tool. Is he now fully compliant [sab rules follow kar raha hai]?
**A:** Almost. He still needs to consider transparency: should students know their feedback was AI-assisted? Since these comments affect academic records, scholarships, and references, there's a strong case for disclosure. Creation diligence (data + tool) is necessary but not sufficient — Transparency diligence is the next question.

---

## CONCEPT 18: Transparency Diligence

### THE SCENARIO

Hira works in HR [Human Resources — insaani wasail ka department] at a tech company in Lahore. Her team uses Claude to help screen resumes [CV check karna] for a senior developer position. The process:

1. AI reads each resume and scores it against the job requirements
2. AI produces a ranked shortlist [ek list — sabse upar wale sabse achhe] of top 15 candidates
3. Hira reviews the shortlist and invites 8 for interviews [mulaqaat]

The tool works well. The shortlist is consistently good. The hiring managers are happy.

But three situations arise:

**Situation A:** A rejected candidate [jisko nahi chuna gaya] asks: "Why wasn't I selected for an interview?" Hira says: "Your profile didn't match our requirements as closely as other candidates." She doesn't mention that AI did the initial screening.

**Situation B:** The company's CEO mentions in a podcast: "Our hiring process is entirely human-driven — we believe in the personal touch." This isn't true anymore.

**Situation C:** A candidate who WAS shortlisted asks during the interview: "How did you select candidates for this round?" The interviewer says: "Our HR team carefully reviewed every application." This is misleading — AI did the first pass, not HR.

### WHAT WENT WRONG

Three different transparency failures:

- **Situation A:** A rejected candidate deserves to know that AI played a role in a decision that affects their career. They might have questions about fairness [insaaf], bias [tarafgaari — AI kisi ke saath na-insaafi kare], or how the scoring worked.
- **Situation B:** The CEO is making a public claim that is no longer true. This is organizational-level misleading.
- **Situation C:** The interviewer is directly misrepresenting the process to a person it affects.

### THE CONCEPT

**Transparency diligence** = Being honest about AI's role when it affects people.

**The key rule:**

```
  ╔════════════════════════════════════════════════════════════╗
  ║  The more an AI-assisted result AFFECTS other people,      ║
  ║  the stronger the case for TRANSPARENCY.                   ║
  ╚════════════════════════════════════════════════════════════╝
```

**When disclosure [khul ke batana] USUALLY matters:**

```
  ┌──────────────────────────────────────────────────────────┐
  │  HIGH DISCLOSURE NEED:                                    │
  │  • Academic work (affects grades, transcripts, degrees)  │
  │  • Hiring decisions (affects careers and livelihoods)    │
  │  • Customer communications (affects trust, decisions)    │
  │  • Medical or financial advice (affects health, money)   │
  │  • Professional reports (affects business decisions)     │
  │  • Anything presented as original human work             │
  │    (when the audience would assume it IS human work)     │
  │                                                           │
  │  LOWER DISCLOSURE NEED:                                   │
  │  • Internal drafts that will be heavily edited           │
  │  • Grammar/formatting cleanup                            │
  │  • Personal brainstorming                                │
  │  • Internal notes to yourself                            │
  └──────────────────────────────────────────────────────────┘
```

**What transparency IS and ISN'T:**

```
  TRANSPARENCY IS:
  ✓ Not misleading people about AI's role when that role matters
  ✓ Telling affected people that AI contributed to a decision
  ✓ Being honest when asked directly

  TRANSPARENCY IS NOT:
  ✗ Publishing every detail of your workflow
  ✗ Announcing "I used AI!" for every email
  ✗ Disclosing trade secrets about your AI setup
```

**The exact rule depends on:**
- Context (academic vs. business vs. personal)
- Organization policy (some companies require disclosure, some don't)
- Law (some jurisdictions [qanooni ilaaqe] require AI disclosure in specific contexts)
- Professional standards (medical, legal, financial professions may have specific rules)

> **Exam insight:** The exam doesn't expect you to know specific laws. It tests whether you recognize WHEN transparency matters and whether you lean toward disclosure when people are materially affected.

### EXAM TRAP

**The trap:** An answer that says "transparency is always required for any AI use" OR "transparency is never required because AI is just a tool."

**Why people pick them:** The first sounds ethically strong. The second sounds practically reasonable.

**The truth:** It's a spectrum. Using AI to fix your own email grammar? No disclosure needed. Using AI to score job applicants? Strong case for disclosure. The exam tests JUDGMENT about when disclosure matters — not an absolute rule in either direction.

**The pattern:** Look for answers that match the IMPACT on others. More impact = more transparency. The exam loves scenarios where the impact isn't obvious at first glance.

### QUICK CHECK

**Q:** Hira's company adds a line to job postings: "We use AI-assisted screening as part of our selection process." Is this sufficient transparency?
**A:** It's a good start — candidates know before applying. But it might not be sufficient by itself. Rejected candidates might deserve to know what criteria the AI used, whether they can request a human review, and how to challenge the decision. The disclosure level should match the IMPACT: career-affecting decisions deserve more than a one-line notice.

---

## CONCEPT 19: Deployment Diligence & The Numbers Rule

### THE SCENARIO

Sana (the accountant) is preparing a tax summary for a client, a mid-size manufacturing company. She uploads the company's financial data into Claude and asks:

> "Calculate the total taxable income for FY2026 and break it down by revenue source."

Claude responds in prose:

> "Total taxable income for FY2026: PKR 127,345,000. Breakdown: Manufacturing revenue: PKR 89,200,000 (70.1%), Export incentives: PKR 23,450,000 (18.4%), Investment income: PKR 14,695,000 (11.5%)."

The numbers look clean. The percentages add up to 100%. The breakdown is logical. Sana is about to include these figures in the client's tax filing [tax return — sarkaar ko dene wala maali hisaab].

Her senior partner [buzurg saathi — jo firm chalata hai] stops her:

> "Did Claude CALCULATE these numbers or GENERATE them?"

Sana is confused. "What's the difference?"

> "Open a spreadsheet. Sum column D. What do you get?"

Sana sums the column: PKR 124,890,000. Not 127,345,000. Claude's number is **wrong by PKR 2,455,000** — about 2%. The percentages looked right because they were calculated FROM the wrong total. The logic was perfect. The foundation was fabricated.

### WHAT WENT WRONG

Claude didn't add up the column. It doesn't work that way. When asked to "calculate," it **predicted a likely-looking total** based on the data patterns it saw. The prediction was close — 2% off — which is what makes it dangerous. If it had been 50% off, Sana would have caught it instantly. A 2% error LOOKS like a rounding difference. It's not. It's a completely different number.

### THE CONCEPT

**Deployment diligence** = Verify and take responsibility BEFORE AI-assisted work is published, sent, executed, or used in a decision.

**The verification scale — more reach = more checking:**

```
  ┌─────────────────────────────────────────────────────────────┐
  │  IMPACT LEVEL             VERIFICATION LEVEL                 │
  │  ─────────────            ──────────────────                 │
  │  A note to yourself       → A glance                        │
  │  An internal email        → A full read                     │
  │  A welcome email to       → A careful read + tone check     │
  │    new members                                               │
  │  A report to a regulator  → A SECOND REVIEWER               │
  │    [sarkari naazer]                                          │
  │  Anything IRREVERSIBLE    → Check BEFORE the act            │
  │    (sent payment, deleted │   (there is no reviewer          │
  │     folder, published     │    afterwards)                   │
  │     report)               │                                  │
  └─────────────────────────────────────────────────────────────┘
```

**The deployment diligence checklist:**

```
  □ Verify facts
  □ Confirm sources exist
  □ Check calculations
  □ Review for bias [tarafgaari] or unfair outcomes
  □ Confirm permissions and rights
  □ Follow organization policy
  □ Get human approval for high-impact actions
```

### THE NUMBERS RULE

This is important enough for its own box — the exam tests this directly:

```
  ╔═══════════════════════════════════════════════════════════════╗
  ║                     THE NUMBERS RULE                          ║
  ║                                                               ║
  ║  Any number a DECISION rests on must be COMPUTED,             ║
  ║  never GENERATED.                                             ║
  ║                                                               ║
  ║  COMPUTED = spreadsheet formula, calculator, or code          ║
  ║            that the AI ran and SHOWED you                     ║
  ║            → deterministic [har baar wohi jawab]              ║
  ║            → you can check the INPUTS                        ║
  ║                                                               ║
  ║  GENERATED = AI "calculated" in prose                         ║
  ║            → probabilistic [andaaze se — har baar             ║
  ║              thoda mukhtalif]                                 ║
  ║            → the total can be wrong while every               ║
  ║              line item is right                               ║
  ║                                                               ║
  ║  WHEN YOU GET A COMPUTED NUMBER:                              ║
  ║  Check the INPUTS, not the sum.                              ║
  ║  → Did it use the right rows?                                ║
  ║  → Did it use the right column?                              ║
  ║  → Did it use the right rate/formula?                        ║
  ║  (The math is reliable. The INPUT selection may not be.)     ║
  ║                                                               ║
  ║  WHEN YOU GET A GENERATED NUMBER:                             ║
  ║  Ask: "Where did this number come from?"                     ║
  ║  If the answer isn't "I ran this code / used this formula"   ║
  ║  → DO NOT use it in a decision.                              ║
  ╚═══════════════════════════════════════════════════════════════╝
```

**The "would I put my name on this?" test:**

```
  ╔══════════════════════════════════════════════════════╗
  ║  "Would I confidently put my name on this?"           ║
  ║                                                       ║
  ║  YES → Ship it.                                      ║
  ║  NO  → The work is not ready.                        ║
  ║  "I'M NOT SURE" → Ask the 4 unclear-case questions:  ║
  ╚══════════════════════════════════════════════════════╝
```

**The 4 questions for unclear cases:**

When you're not sure whether the work is ready — the case is unclear rather than plainly wrong:

```
  ┌──────────────────────────────────────────────────────────┐
  │  EXAMPLE: AI ranked job applicants. The shortlist looks   │
  │  reasonable, but you can't tell whether it favored        │
  │  graduates of two specific universities.                  │
  │                                                            │
  │  1. WHO is affected — including people who will           │
  │     NEVER SEE the result?                                 │
  │     (Rejected candidates who'll never know why)           │
  │                                                            │
  │  2. What could GO WRONG for them — and would they         │
  │     be able to TELL?                                      │
  │     (Qualified people rejected by bias they can't see)    │
  │                                                            │
  │  3. What would a FAIR OUTCOME look like?                  │
  │     (Selection based on actual qualifications, not        │
  │      university name)                                     │
  │                                                            │
  │  4. What should be DISCLOSED, and to whom?                │
  │     (Candidates should know AI was used; HR should know   │
  │      the criteria)                                        │
  │                                                            │
  │  CAN answer all 4 → Decide and write the answers down    │
  │  CANNOT answer all 4 → ESCALATE to whoever owns that     │
  │                          decision                         │
  │                                                            │
  │  ⚠ GUESSING is the one option that turns an unclear       │
  │    case into YOUR mistake.                                │
  └──────────────────────────────────────────────────────────┘
```

**The accountability principle — the exam's core belief:**

```
  ╔═══════════════════════════════════════════════════════════╗
  ║  AI can automate WORK.                                     ║
  ║  It cannot automate ACCOUNTABILITY.                        ║
  ║                                                             ║
  ║  • AI system makes a harmful decision?                     ║
  ║    → Organization operating it is STILL responsible.       ║
  ║                                                             ║
  ║  • Coding assistant introduces a security flaw and         ║
  ║    engineer ships it?                                      ║
  ║    → Engineer and organization STILL own the result.       ║
  ║                                                             ║
  ║  • AI drafts wrong tax numbers and accountant files them?  ║
  ║    → Accountant is responsible. "AI told me" is not        ║
  ║      a defense.                                            ║
  ╚═══════════════════════════════════════════════════════════╝
```

### EXAM TRAP

**The trap:** An answer that says "the AI calculated the numbers from the source data, so they should be accurate."

**Why people pick it:** Because it SOUNDS like the AI did math. "Calculate total taxable income" = math, right?

**The truth:** When AI "calculates" in prose, it GENERATES a likely-looking number. It doesn't run a formula. It doesn't add rows. It predicts. The total can be wrong while every line item it mentions is right. The exam tests whether you know the difference between computed and generated.

**The other trap:** An answer that says "verify the total by asking Claude to recalculate." Same problem as self-verification in Concept 12 — the same system that generated a wrong number will generate another number (possibly the same wrong one, possibly a different one). Verification must be external: spreadsheet, calculator, or code you can inspect.

### QUICK CHECK

**Q:** Claude runs Python code to sum 200 expense line items and shows you the code and result: PKR 4,782,000. Is this reliable?
**A:** More reliable than prose "calculation" — code execution is deterministic. But you should still check the INPUTS: did the code use the right rows? The right column? Did it accidentally include or exclude certain categories? The math is correct; the question is whether it computed the RIGHT thing.

---

## PART 5 RECAP: How Diligence's Three Concepts Connect

```
  DILIGENCE = Use AI responsibly and own the result
  (D6: Governance, Risk & Responsible Use — 15% of exam)

  ┌──────────────────────────────────────────────────────────────┐
  │                                                                │
  │  BEFORE ──────────── DURING ──────────── AFTER                │
  │                                                                │
  │  CREATION            TRANSPARENCY        DEPLOYMENT           │
  │  DILIGENCE (17)      DILIGENCE (18)      DILIGENCE (19)      │
  │                                                                │
  │  "Is the DATA safe?" "Do PEOPLE need     "Is the WORK ready  │
  │  "Is the TOOL         to know AI's role?"  to go out?"        │
  │   approved?"                                                   │
  │                                                                │
  │  6 questions before   Impact scale:       Verification scale: │
  │  you paste            More impact on      More reach = more   │
  │                       others = more        checking            │
  │  REDACTION:           disclosure needed                        │
  │  Strip identity,                          THE NUMBERS RULE:   │
  │  keep pattern         ≠ Publishing your   Computed, not       │
  │  Two failure modes:   whole workflow       generated           │
  │  too much / too little                                        │
  │                                           4 unclear-case Qs   │
  │                                           "Put my name on it?"│
  │                                                                │
  └──────────────────────────────────────────────────────────────┘

  THE CORE PRINCIPLE:
  ╔══════════════════════════════════════════════════════════════╗
  ║  Good output does NOT make a use responsible.                 ║
  ║  AI can automate work. It CANNOT automate accountability.    ║
  ╚══════════════════════════════════════════════════════════════╝

  DILIGENCE AT SYSTEM SCALE:
  ┌────────────────────────────┬────────────────────────────────┐
  │  IN A CHAT                 │  IN THE AGENT FACTORY          │
  ├────────────────────────────┼────────────────────────────────┤
  │  Creation: check data      │  Data rules, access control,  │
  │  before pasting            │  approved-tool policies        │
  ├────────────────────────────┼────────────────────────────────┤
  │  Transparency: tell people │  Disclosure design, user       │
  │  when AI's role matters    │  experience that makes AI's    │
  │                            │  role clear                    │
  ├────────────────────────────┼────────────────────────────────┤
  │  Deployment: check before  │  Eval gates, audit logs        │
  │  sending                   │  [jaanch ka record],           │
  │                            │  monitoring, human review      │
  └────────────────────────────┴────────────────────────────────┘
```

**Connection to Parts 1-4:**
- Part 1: WHAT fluency is + three modes
- Part 2: DELEGATION — decide before you type
- Part 3: DESCRIPTION — give AI what it needs
- Part 4: DISCERNMENT — judge what comes back
- **Part 5: DILIGENCE — own it or don't ship it**
- Next (Part 6): THE COMPLETE FRAMEWORK — all four Ds as one loop

---

## EXAM-LEVEL PRACTICE QUESTIONS — Part 5

---

### Question 1 — D6 (Governance, Risk & Responsible Use)

A marketing manager at a health insurance [sehat ka beema] company wants to use Claude to draft personalized renewal emails [policy dobara shuru karne ki email] for 500 customers. She plans to paste each customer's policy details (name, coverage type, claim history [daawon ka record], premium amount [beema ki raqam]) into Claude to generate personalized messages.

**What is the MOST important concern she should address FIRST?**

**A.** Whether Claude can generate 500 personalized emails efficiently

**B.** Whether pasting customer health insurance data — including claim history — into this AI tool is permitted by her company's data policy, privacy regulations, and the terms of service

**C.** Whether the email tone is appropriate for insurance renewal communications

**D.** Whether customers will notice the emails are AI-generated

> **Answer: B**
>
> **Why B is correct:** Health insurance data includes sensitive personal information: names, what medical claims people have filed, how much they pay. Before she types a single prompt, she must verify: (1) Is this tool approved for customer health data? (2) Does her company's data policy allow pasting claim histories into AI? (3) Are there regulatory [qanooni] requirements about handling health insurance data? (4) What does the AI tool's terms of service say about data retention? This is Creation diligence — the BEFORE question.
>
> **Why A is wrong:** Efficiency is secondary to data safety. It doesn't matter how efficiently you can do the wrong thing.
>
> **Why C is wrong:** Tone (Description) matters but comes AFTER the data safety question. You don't write the email before you've confirmed you can responsibly use the data.
>
> **Why D is wrong:** Transparency matters (Concept 18) but it's a DURING/AFTER question. The BEFORE question — is it safe to share this data? — comes first.

---

### Question 2 — D6 (Governance, Risk & Responsible Use)

An HR director uses Claude to help evaluate employee performance reviews [kaarguzdaari ka jaayza]. She uploads 50 performance reviews and asks Claude to identify the bottom 10 performers who should be put on a performance improvement plan (PIP) [sudhar ka plan — nahi sudhra toh naukri ja sakti hai].

Claude produces a ranked list with justifications. The HR director reviews it and it looks reasonable. She's about to share the list with department heads.

**Before sharing, which step is MOST critical and why?**

**A.** Ask Claude to double-check its ranking for fairness

**B.** Have a human HR professional review the rankings against the original reviews to check for patterns of bias — such as whether the AI consistently scored certain teams, genders, or tenure groups lower

**C.** Add a disclaimer that the rankings were AI-assisted

**D.** Share the rankings but tell department heads they can override AI's recommendations

> **Answer: B**
>
> **Why B is correct:** This decision directly affects people's careers and livelihoods [rozgar — rozi roti]. The 4 unclear-case questions apply: (1) Who's affected? — the 10 employees named and their families. (2) What could go wrong? — biased ranking puts unfairly targeted employees on a PIP. (3) Fair outcome? — ranking based on actual performance, not patterns in how reviews were written. (4) Disclosure? — employees and managers should know AI was involved. A human HR expert can spot patterns the AI might have: did it score managers who write shorter reviews lower? Did it penalize a team that uses different review language? Bias in AI rankings is invisible without deliberate checking.
>
> **Why A is wrong:** Self-verification. Claude checking its own fairness is like a judge reviewing their own verdict. You need an EXTERNAL perspective.
>
> **Why C is wrong:** A disclaimer is transparency diligence (important!) but doesn't catch bias. Saying "AI made this list" doesn't make the list fair.
>
> **Why D is wrong:** "They can override" puts the burden on department heads who haven't seen the original reviews and don't know how the ranking was generated. It LOOKS like human oversight but ISN'T — because the humans don't have the information to override effectively.

---

### Question 3 — D6 (Governance, Risk & Responsible Use)

A legal associate [junior wakeel] is preparing a summary of a client's contract dispute [contract ke baare mein jhagda] for the senior partner. She redacts the client's name, company name, and case number before pasting into Claude. However, her redacted text includes: "the country's largest marble exporter, who signed the contract at the Islamabad Chamber of Commerce event on March 15, 2025."

**Why is this redaction INSUFFICIENT?**

**A.** She should also have redacted the contract date

**B.** The combination of "largest marble exporter" + "Islamabad Chamber" + specific date uniquely identifies the company even without the name — anyone reading this could determine which company it is

**C.** Legal documents should never be shared with AI tools regardless of redaction

**D.** She should have used a different AI tool designed for legal work

> **Answer: B**
>
> **Why B is correct:** This is the crash course's key point about redaction failing when you remove too little: "A combination of details still points at one person." Pakistan's largest marble exporter is a small set — possibly ONE company. Add the Islamabad Chamber event and a specific date, and you've uniquely identified them. The NAME is gone but the IDENTITY is preserved through context. The test: "Could someone reading only what you pasted work out who it's about?" Here: absolutely yes.
>
> **Why A is wrong:** Redacting just the date wouldn't fix it. "The country's largest marble exporter" is already highly identifying.
>
> **Why C is wrong:** "Never share legal documents with AI" is the wasteful/absolute option. Legal work CAN use AI with proper redaction and approved tools.
>
> **Why D is wrong:** A specialized legal tool doesn't fix bad redaction. If the identifying details are in the input, they're exposed regardless of the tool.

---

### Question 4 — D2 (Output Evaluation & Validation)

A finance team asks Claude to analyze a dataset of 1,200 transactions and produce a quarterly expense report. Claude produces the report in prose, with category totals and percentages. The report will be submitted to the board of directors.

**Which validation approach is MOST appropriate for the financial figures in this report?**

**A.** Spot-check 20 random transactions against the source data and accept the totals if all 20 match

**B.** Ask Claude to re-run the analysis and confirm the numbers are consistent

**C.** Have the category totals computed by code (spreadsheet or script) that you can inspect, then verify that the code used the correct rows, categories, and formulas

**D.** Have two different team members independently ask Claude the same question and compare the outputs

> **Answer: C**
>
> **Why C is correct:** The Numbers Rule. Financial figures going to the board MUST be computed, not generated. Code/spreadsheet is deterministic — same inputs always produce same outputs. Then you verify the INPUTS: did it categorize transactions correctly? Did it include the right date range? Did it use the right cost centers? The math is trustworthy; the input selection needs checking.
>
> **Why A is wrong:** 20 correct line items out of 1,200 don't validate the totals. Individual items can be right while category assignments and sums are wrong. This is the "line items right, total wrong" problem from the crash course.
>
> **Why B is wrong:** Self-verification (Concept 12). Claude might generate a different wrong total or confidently confirm the original wrong one.
>
> **Why D is wrong:** Two people asking Claude the same question might get two different answers (AI output varies — Part 1, Concept 1). Neither answer is necessarily correct. Agreement between two probabilistic outputs doesn't equal accuracy.

---

### Question 5 — D6 (Governance, Risk & Responsible Use)

A small consulting firm uses AI to help write client proposals. The firm's policy states that AI tools are approved for internal drafting, but all client-facing deliverables [jo cheezein client ko di jaayein] must be reviewed and approved by a senior consultant before delivery.

A junior consultant uses Claude to draft a proposal and sends it directly to the client without senior review, because the deadline was tight and the draft "looked perfect."

**Which principle did the junior consultant violate MOST directly?**

**A.** Creation diligence — using Claude for proposals is not approved

**B.** Transparency diligence — the client should have been told AI was used

**C.** Deployment diligence — AI-assisted work must be verified and approved before it leaves your hands, especially when it reaches clients

**D.** Product discernment — she should have evaluated the draft more carefully

> **Answer: C**
>
> **Why C is correct:** The firm has a specific policy: senior review before client delivery. The junior consultant skipped this gate. Deployment diligence says: the more people the result reaches, the more checking it needs. A client-facing proposal requires senior approval. "Looked perfect" is automation bias — trusting AI output because it appears professional. The policy exists precisely because "looks perfect" is not the same as "is perfect."
>
> **Why A is wrong:** The firm's policy DOES approve AI for drafting. She didn't violate creation diligence — she used an approved tool for an approved purpose.
>
> **Why B is wrong:** Transparency about AI's role might matter, but the MOST direct violation is skipping the required review step. Even a fully human-written proposal would require senior review under this policy.
>
> **Why D is wrong:** Product discernment (evaluating the output) matters, but even if her evaluation was perfect, she STILL needed senior review per policy. Individual judgment doesn't replace organizational gates.

---

### Question 6 — D6 (Governance, Risk & Responsible Use)

A teacher uses AI to generate report card comments for 30 students. She uses the school's approved AI tool and redacts student names (using "Student A," "Student B," etc.). However, she includes each student's exact grades, specific behavioral incidents with dates, and one student's IEP (Individualized Education Program) [khaas zarooraton wale bachche ka plan] accommodations.

**What data concern REMAINS despite using an approved tool and redacting names?**

**A.** No concern remains — names are redacted and the tool is approved

**B.** The exact grades, specific incident dates, and IEP details may still identify individual students, especially in a class of only 30 where teachers, parents, or administrators could recognize the patterns

**C.** The approved tool might still leak data, so no student data should ever be entered

**D.** The teacher should ask each student's permission before using AI for their comments

> **Answer: B**
>
> **Why B is correct:** In a class of 30, "the student who scored 47/100 on the October 3rd midterm and had a behavioral incident on November 12th" is highly identifying even without a name. IEP accommodations are particularly sensitive — they're legally protected information in many jurisdictions, and in a small class, "the student with extra time accommodations" might identify exactly one person. This is the "too little removed" failure mode of redaction. Approved tool ✓. Name removed ✓. Identity still discoverable through detail combinations ✗.
>
> **Why A is wrong:** "Names redacted + approved tool = fully safe" is too simple. Redaction failed because the combination of specific details still identifies students.
>
> **Why C is wrong:** The "never use AI" extreme. With PROPER redaction (more aggressive generalization: grade ranges instead of exact scores, "behavioral concern in early November" instead of exact dates), the task is doable.
>
> **Why D is wrong:** Student permission doesn't fix the data exposure problem. Even with permission, sharing IEP details with an AI tool may violate legal protections.

---

*End of Part 5. Say "next" when you're ready for Part 6: The Complete Framework — tying all four Ds together.*
