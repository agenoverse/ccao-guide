---
type: Document
title: "Governance, Risk & Responsible Use: Scenario Guide Part 1"
description: "Scenario walkthroughs covering foundational governance concepts: what AI may and may not do, and who is accountable."
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
order: 92
---

## THE CASE: Should AI Do This Work?

> **Domain:** D6 — Governance, Risk & Responsible Use (15% of exam)
> **Concepts covered:** The Four Questions Framework, Delegation Criteria, Three Answers, The Deciding Factor, Defined Gate

---

## CONCEPT 1: The Four Questions Framework

### THE SCENARIO

Fatima works at a mid-size logistics [maal ki supply/delivery ka kaam] company. AI has been helping teams for months — operations uses it for reports, marketing for campaign drafts, finance for matching invoices [bills ko system mein milana].

Everything is normal. Nobody thinks of AI as special anymore. It's just... a tool people use.

One Tuesday, Fatima's director asks: "Can you find the spending pattern across our top 50 customers before lunch?" Fatima has a spreadsheet with customer names, account numbers, and purchase history. She pastes it into the AI chat she uses every day.

She isn't being careless. She isn't breaking rules on purpose. She's answering a question from her boss before a meeting.

The company freezes ALL AI use while it investigates. Teams who did nothing wrong — the ones writing reports, drafting emails — lose their workflows too. One ordinary decision, by one person, on one ordinary Tuesday.

### WHAT WENT WRONG?

Fatima didn't ask herself any questions before pasting that data. She didn't think:
- Should AI be doing this task?
- Can this customer data go into this tool?
- Does this tool have the right to see this information?
- Could anyone be affected?

She treated an AI decision as a non-decision. That's the core problem this entire course solves.

### THE CONCEPT

Before AI does **meaningful work** [kaam jo kisi aur ke data, paise, ya faislon ko chhoota hai], ask four questions:

```
+------------------------------------------------------------------+
|              THE FOUR QUESTIONS                                   |
+------------------------------------------------------------------+
| 1. THE CASE:       Can AI do this work?                          |
|                     Yes / Yes with review / No                   |
|                                                                  |
| 2. THE DATA:       Can this information go in?                   |
|                     Yes / Check first / Not this route           |
|                                                                  |
| 3. THE CAPABILITY: Can I turn this tool/Skill/connector on?      |
|                     Enable / Escalate / Decline                  |
|                                                                  |
| 4. THE PEOPLE:     Could this affect someone unfairly?           |
|                     Document / Disclose / Escalate               |
+------------------------------------------------------------------+
```

Every question has **three answers**, not two. The middle answer is where professional judgment lives — because it forces you to **name something specific**: a reviewer, a control, a route, a disclosure [batana ke AI use hua hai].

**When NOT to run this:** Rewording your own email, summarizing a public article, or drafting personal notes. "Meaningful work" = touches someone else's data, someone's money, or a decision about a person. Don't apply this framework to trivial tasks — a habit that takes 10 minutes on every small task will be dropped in a week, and then it protects nothing.

### EXAM TRAP

The exam loves to test **binary thinking** — options that force you into plain YES or NO.

> Wrong answer pattern: "AI should do it" (reckless) or "AI should never touch this" (wasteful/abandonment)

The exam rewards the middle path: "AI can do it, BUT here's the specific control." If you see an option that says "yes, go ahead" with no check, or "stop everything," both are usually wrong.

### QUICK CHECK

**Q:** A colleague says "We either use AI for this or we don't — there's no middle ground." What's wrong with that statement?

**A:** Two-way thinking (yes/no) produces recklessness and abandonment in equal measure. Every question has THREE answers. The middle answer — with a named control — is where most real professional work lives.

---

## CONCEPT 2: Delegation Criteria (The Four Screens)

### THE SCENARIO

Zain is a customer support agent [jo customers ke sawalon ka jawaab deta hai] at an insurance company. A customer calls saying they were charged twice for the same policy [bima]. Zain wants AI to draft a reply using the customer's account record.

He thinks: "It'll save me 15 minutes. The AI writes good emails. Let me just send whatever it drafts."

But wait. The reply will tell the customer something about their money. If the AI gets a number wrong — say, it says "your refund [wapsi] of Rs. 15,000 has been processed" when it was actually Rs. 12,000 — that's now a factual promise from the company. And Zain clicked send.

### WHAT WENT WRONG?

Zain didn't screen [jaanch] the task before handing it to AI. He jumped straight to "AI can write emails, so let it write this email." He skipped the four screening questions that would have told him: this task needs a review before sending.

### THE CONCEPT

The **Delegation Criteria** [kaam AI ko dene se pehle ki 4 jaanch] are four screens that decide whether AI should do a task:

```
+---------------------+------------------------------------------------+
| SCREEN              | PLAIN QUESTION                                 |
+---------------------+------------------------------------------------+
| 1. Reversibility    | If the output is wrong, can we catch and       |
|    [wapsi mumkin?]  | undo it BEFORE harm happens?                   |
+---------------------+------------------------------------------------+
| 2. Consequence      | If it's wrong, is the cost trivial [chhota],   |
|    of error         | expensive, harmful, regulated [qanoon           |
|    [galti ka nateeja]| wala], or irreversible [wapsi nahi ho sakti]?  |
+---------------------+------------------------------------------------+
| 3. Human judgment   | Does the task need relationship, care, or       |
|    or empathy       | context that only a person should own?          |
|    [insaani samajh] |                                                |
+---------------------+------------------------------------------------+
| 4. Accountability   | Who is answerable [zimmedar], and can that      |
|    [zimmedari]      | person really review what AI produced?          |
+---------------------+------------------------------------------------+
```

**Key rule: Do NOT score these and add them up.** This isn't a point system. Use them to SHOW WHY the task belongs in one category rather than another.

Back to Zain's case:
- **Reversibility:** HIGH before sending (can still edit), LOW after (customer reads it)
- **Consequence:** Meaningful — wrong numbers about someone's money
- **Human judgment:** Moderate — tone matters on billing complaints
- **Accountability:** The company stays responsible for what it tells a customer

Verdict: AI can draft, but Zain MUST check every fact before clicking send.

### EXAM TRAP

> Wrong answer pattern: An option that treats the four criteria as a scoring system — "score each criterion 1-5, add them up, if total > 12 then don't use AI"

The exam tests whether you understand that these are **qualitative screens** [quality ki jaanch, numbers ki nahi], not a points-based risk matrix [score sheet]. A high-consequence task with a good gate can still be appropriate. A low-consequence task might still need a human because the relationship is the point.

### QUICK CHECK

**Q:** A task has low consequence but requires deep personal empathy (like writing a condolence message to a colleague who lost a parent). Can AI do it?

**A:** Probably not — or only to help gather thoughts. The human judgment/empathy screen is the deciding factor here. Even though the consequence of a bad message is "low" in business terms, the relationship IS the task. The empathy screen says: this stays human-owned.

---

## CONCEPT 3: Three Answers

### THE SCENARIO

Nida is an HR coordinator [jo employees ke hiring aur records ka kaam karti hai] at a tech company. She has three tasks today:

**Task A:** Rewrite the internal FAQ [aksar puchhe jaane wale sawaal] page using already-approved company policy documents.

**Task B:** Draft responses to employee grievance [shikayat] complaints that will go out under the HR director's name.

**Task C:** Make the final decision on which employee gets terminated [naukri se nikaalna] for misconduct [galat rawayya] based on the investigation notes.

Nida thinks: "AI can help with writing. Let me use it for all three."

### WHAT WENT RIGHT (and WRONG)?

Task A? Fine. Low stakes, reversible, sources exist, normal editorial check.

Task B? AI can draft, but the HR director must review every word before it goes out. The company is accountable for what those letters say. A wrong fact in a grievance response can become a legal problem.

Task C? No. A termination [naukri se nikaalna] decision is a final professional determination [faisla]. The consequence is irreversible for the employee. The accountability cannot transfer to a tool. AI might help organize the notes, but it must NOT be the decision-maker.

### THE CONCEPT

Every task gets ONE of three answers:

```
+-------------------------+------------------------------------------+
| ANSWER                  | WHAT IT MEANS                            |
+-------------------------+------------------------------------------+
| FULLY APPROPRIATE       | Low consequence, reversible, easy to     |
|                         | review as you go. No special gate needed.|
|                         |                                          |
|                         | Examples: internal FAQ from approved      |
|                         | sources, restructured notes, first-pass  |
|                         | meeting summary                          |
+-------------------------+------------------------------------------+
| APPROPRIATE WITH REVIEW | AI is useful, but a SPECIFIC human check |
|                         | must happen BEFORE the output is used,   |
|                         | sent, or acted on.                       |
|                         |                                          |
|                         | Examples: customer billing reply,        |
|                         | management summary from financial data,  |
|                         | shortlist that decides who gets attention |
+-------------------------+------------------------------------------+
| INAPPROPRIATE           | Task stays human-owned. Consequence,     |
|                         | difficulty of undoing it, or human       |
|                         | responsibility cannot be repaired by     |
|                         | review.                                  |
|                         |                                          |
|                         | Examples: final medical/legal/           |
|                         | disciplinary determination               |
+-------------------------+------------------------------------------+
```

**Critical distinction:** "Inappropriate" does NOT mean "AI can't help at all." It means AI must not be **the decision-maker**. AI can summarize investigation notes for the HR director — but the HR director makes and owns the termination decision.

### EXAM TRAP

> Wrong answer pattern: An option that says "AI should make the final determination because it's more objective/unbiased than humans"

The exam will tempt you with the idea that AI is "fair" or "objective." But accountability [zimmedari] cannot transfer to a tool. A manager, clinician [doctor], lawyer, or employer does not become LESS responsible because AI drafted part of the work. The exam rewards answers where the human stays the decision-maker for high-stakes outcomes.

### QUICK CHECK

**Q:** A manager says: "AI reviewed all the evidence and recommends termination, so we should follow its recommendation." What's the problem?

**A:** The classification is "inappropriate as the final decision-maker." AI can support the work (organize notes, find patterns), but the final determination [faisla] must come from the qualified human who can own it. "AI recommends" does not transfer accountability.

---

## CONCEPT 4: The Deciding Factor

### THE SCENARIO

Haris works at a consulting [mashwara dene wali] firm. Two tasks come in:

**Task 1:** Draft a condolence [taaziyat] letter to a client whose CEO passed away. The letter will go out under the senior partner's name.

**Task 2:** Draft a billing reply to a client who says they were overcharged. The reply will go out under the account manager's name.

Haris thinks both are "appropriate with review" — and technically, he's right. But his manager asks: "WHY does each one need review? Is it the same reason?"

Haris struggles. He says: "Both feel risky?"

### WHAT WENT WRONG?

"Feels risky" is not analysis. Haris couldn't name the **deciding factor** — the one screen that's actually carrying the classification [faisla].

### THE CONCEPT

The **deciding factor** [faisla-kun wajah] is the ONE screen that, if it changed, would move the task into a different classification.

Ask yourself:

> "If one of the four screens changed, which change would move this task to a different classification?"

**Task 1 — The condolence letter:**
- Reversibility? Easy to rewrite. Not the deciding factor.
- Consequence? Low business risk. Not the deciding factor.
- **Human judgment/empathy? YES. This is the deciding factor.** The relationship is the point of the letter. Even though it's easy to rewrite, even though the business risk is low — if you removed the empathy requirement, this would drop to "fully appropriate." But you can't remove it.
- Accountability? Matters, but it's not what's carrying the classification.

**Task 2 — The billing reply:**
- Reversibility? Hard to undo after sending. Important, but...
- Consequence? Meaningful — wrong numbers about money. Important, but...
- Human judgment? Moderate. Tone matters, but...
- **Accountability? YES. This is the deciding factor.** The company stays responsible for factual claims about the client's money. If accountability didn't apply (say, it was an internal draft nobody would act on), this drops to "fully appropriate."

Now Haris can say:

> "The condolence letter is 'appropriate with review' because the human relationship is the point of the task."
>
> "The billing reply is 'appropriate with review' because the organization stays accountable for the factual claim."

Both sentences can be checked, challenged, and improved. "Feels risky" cannot.

```
DECIDING FACTOR = The one screen that,
                  if removed, would change the classification

  Task                  Deciding Factor         Why
  ---------------------------------------------------------------
  Condolence letter     Human judgment/empathy  Relationship IS the task
  Billing reply         Accountability          Company owns the facts
  Internal FAQ          (none dominant)         Fully appropriate
  Termination decision  Accountability +        Cannot transfer to a tool
                        Consequence             and cannot be undone
```

### EXAM TRAP

> Wrong answer pattern: An option that lists ALL four criteria as equally important — "this needs review because of reversibility, consequence, empathy, AND accountability"

The exam rewards **precision**. When an answer says "the deciding factor is accountability because..." it's stronger than one that vaguely says "multiple risks exist." The exam wants you to name THE one that carries the weight.

### QUICK CHECK

**Q:** For a customer-facing billing reply drafted by AI, what is the deciding factor and why?

**A:** Accountability — because the company stays responsible for what it tells a customer about their money. If the accountability didn't exist (say, it was a personal note to yourself), the task would drop to a lower classification.

---

## CONCEPT 5: Defined Gate vs "A Human Will Review It"

### THE SCENARIO

Two teams at the same bank are using AI to draft customer reports.

**Team A's process:**
> "The account manager checks delivery facts against the dispatch [bhejne ka] record and reviews the tone on disputed [jhagde wale] accounts before the report is sent to the customer."

**Team B's process:**
> "Someone will check it before it goes out."

Both teams claim they have "human oversight [insaani nazar]." Both sound responsible. But six months later, Team B has a major incident [bada masla] — a report with wrong numbers reached a client. When management investigates, they find:

- Nobody was assigned to review
- Nobody knew WHAT to check
- Nobody knew WHEN to check — sometimes reports went out before anyone looked at them

Team A? Zero incidents. Because they had a **defined gate** [tay shuda jaanch ka adda].

### WHAT WENT WRONG?

Team B had an **intention** [niyyat]. Team A had a **control** [pakka intezaam]. "A human will review it" SOUNDS responsible. But without three specific things, it means nothing in practice.

### THE CONCEPT

A **defined gate** is a review that names exactly three things:

```
+------------------------------------------------------------------+
|                    A DEFINED GATE                                 |
+------------------------------------------------------------------+
|                                                                   |
|  WHO reviews:   The role that actually holds the responsibility   |
|                 (not "someone" — a specific role or person)       |
|                                                                   |
|  WHAT they      The specific risk the review is meant to catch   |
|  verify:        (not "everything" — the actual concern)          |
|                                                                   |
|  WHEN they      Before the output becomes hard to undo           |
|  review:        (not "sometime" — a specific point)              |
|                                                                   |
+------------------------------------------------------------------+

  COMPARE:

  NOT A GATE                          A DEFINED GATE
  ----------------------------------  ----------------------------------
  "We will keep a human               "The account manager checks
   in the loop."                       delivery facts against the
                                       dispatch record before the
  "Someone will check it."             report is sent to the customer."

  "It gets reviewed."                 WHO:  Account manager
                                      WHAT: Delivery facts vs dispatch
  "With appropriate oversight."       WHEN: Before sending to customer
```

**The test:** If you can't write the gate in "WHO checks WHAT by WHEN" form, the workflow is not ready to run.

**Important nuance:** A high-consequence task is NOT automatically prohibited. Sometimes a well-designed gate restores enough control. And a low-consequence task can STILL require a human, because the relationship is the point (like the condolence letter from Concept 4).

### EXAM TRAP

> Wrong answer pattern: An option that says "a human reviews all AI output" without specifying who, what, or when

The exam will offer you comfortable-sounding phrases: "appropriate oversight," "human in the loop," "regular review." These are ALL wrong unless they name the three parts. The correct answer is always the one that specifies the gate. If you see an option with WHO + WHAT + WHEN, that's almost certainly the right answer.

```
EXAM DECISION TREE:

  Does the answer mention human review?
  ├── NO  → Probably reckless (wrong)
  └── YES
       ├── Vague ("someone checks") → Intention, not control (wrong)
       └── Specific (who + what + when) → Defined gate (likely correct)
```

### QUICK CHECK

**Q:** Your team says: "We have human oversight — the manager reviews everything." Is this a defined gate?

**A:** No. It fails all three tests: WHO is vague ("the manager" — which manager?), WHAT is vague ("everything" — what specifically are they looking for?), WHEN is missing entirely (before sending? After? Once a week?). Rewrite it as: "[Specific role] checks [specific risk] before [specific point of no return]."

---

## PART 1 RECAP: How These 5 Concepts Connect

```
THE CASE: Should AI do this work?

  START HERE
     │
     ▼
  ┌─────────────────────────────────┐
  │  SCREEN THE TASK                │
  │  (4 Delegation Criteria)        │
  │                                 │
  │  1. Reversibility               │
  │  2. Consequence of error        │
  │  3. Human judgment/empathy      │
  │  4. Accountability              │
  └────────────┬────────────────────┘
               │
               ▼
  ┌─────────────────────────────────┐
  │  PICK ONE OF THREE ANSWERS      │
  │                                 │
  │  Fully       Appropriate    Inappropriate │
  │  appropriate  with review                 │
  │     │            │              │         │
  │     │            │              │         │
  │  Proceed      NAME THE       AI helps    │
  │  normally      GATE          but human   │
  │                │              decides     │
  │                ▼                          │
  │         WHO + WHAT + WHEN                │
  └────────────┬────────────────────┘
               │
               ▼
  ┌─────────────────────────────────┐
  │  NAME THE DECIDING FACTOR       │
  │                                 │
  │  "This is [classification]      │
  │   because [the one screen       │
  │   that carries it]."            │
  └─────────────────────────────────┘
```

**The chain:**
1. You hit a task → run **4 screens** (Concept 2)
2. The screens tell you one of **3 answers** (Concept 3)
3. If the answer is "with review," you must write a **defined gate** (Concept 5)
4. For any classification, name the **deciding factor** (Concept 4)
5. All of this is Question 1 of the **Four Questions** (Concept 1) — you haven't even touched data, tools, or people yet

**The sentence to remember:**
> Decide whether AI should do the work before you decide anything else. Every case gets one of three answers. The middle answer is only real when you can name who checks what, and when.

---

## EXAM-LEVEL PRACTICE QUESTIONS

### Question 1 · D6

Saad manages a small legal team at a construction company. A subcontractor [thekedar ke neeche kaam karne wala] dispute [jhagda] has reached arbitration [baahir ka faisla, court ke baghair]. Saad wants AI to analyze 200 pages of contract documents and produce a recommended legal position [qanooni moaqif] that his team will submit [jama karana] to the arbitrator [faisla karne wala].

**What is the most appropriate classification for this task?**

**A.** Fully appropriate — AI can analyze documents faster and more thoroughly than humans

**B.** Appropriate with review — a lawyer reviews the AI's recommended position before submission

**C.** Inappropriate as the final decision-maker — a qualified lawyer must develop and own the legal position, though AI may help organize and summarize the documents

**D.** Inappropriate — AI should not be involved in any legal work

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** A legal position submitted to arbitration is a final professional determination. The consequence is high (financial liability [qanooni zimmedari], contractual outcomes), and accountability cannot transfer to a tool. A qualified lawyer must make and own the judgment. AI can help — summarize documents, organize clauses, find patterns — but it must not BE the decision-maker.
>
> **Why A is wrong:** Speed doesn't override accountability. "Faster" doesn't mean "should make the decision." This is the reckless option.
>
> **Why B is wrong:** This sounds reasonable, but "review" is not enough for a final professional determination. The lawyer doesn't just review AI's position — they must DEVELOP and OWN it. The distinction matters: reviewing AI's work vs. doing the work with AI's help are different levels of human ownership.
>
> **Why D is wrong:** This is the abandonment option. AI CAN help with legal work — organizing, summarizing, finding relevant clauses. "Inappropriate" means inappropriate as the decision-maker, not "AI can't touch it at all."

---

### Question 2 · D6

Amina is an operations manager. Her team uses AI to draft weekly performance summaries [kaarkargi ki hafta-waar report] that go to department heads. Currently, "the team reviews the drafts before sending." Last month, a summary contained an incorrect production figure that caused a department head to cancel a supplier order. When Amina investigated, nobody could say who had reviewed that specific report.

**What is the most appropriate fix?**

**A.** Add a disclaimer [warning note] to every AI-generated summary stating that figures should be independently verified by the reader

**B.** Stop using AI for performance summaries and return to manual drafting

**C.** Require that the operations analyst verifies production figures against the source system, and signs off before the summary is sent each Wednesday

**D.** Ask AI to double-check its own figures by running the analysis twice and comparing results

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** This is a defined gate. WHO: the operations analyst. WHAT: production figures verified against the source system. WHEN: before the summary is sent each Wednesday. It turns a vague intention ("the team reviews") into a specific control.
>
> **Why A is wrong:** A disclaimer shifts responsibility to the READER instead of fixing the process. The problem was that nobody verified the output before sending — a disclaimer doesn't change that.
>
> **Why B is wrong:** The abandonment option. The AI workflow was useful — the problem was the missing gate, not the AI. Returning to manual work wastes the efficiency gain.
>
> **Why D is wrong:** AI checking its own output is not verification. The same mechanism that produced the error will likely reproduce it. Self-confirmation is not a control — this is the "circular validation" trap.

---

### Question 3 · D6

Bilal is a team lead at a marketing agency [ishtihaar banane wali company]. He's classifying a new AI workflow where Claude drafts personalized [har client ke hisaab se] email campaigns for clients. He says: "This needs review because it's risky — there's reversibility concerns, consequence concerns, empathy concerns, and accountability concerns."

**What is the most useful improvement to Bilal's reasoning?**

**A.** He should score each criterion on a 1-5 scale and add them up to determine the risk level

**B.** He should identify the deciding factor — the one criterion that, if it changed, would move the classification

**C.** He should add more criteria to his assessment, such as cost, timeline, and client preference

**D.** He should classify each email campaign separately rather than classifying the workflow as a whole

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Bilal's reasoning is vague — "everything is risky" doesn't help anyone challenge or improve the assessment. The deciding factor test asks: "If one screen changed, which change would move this to a different classification?" For client emails, the deciding factor is likely accountability — the agency is responsible for what goes out under the client's name. Naming this makes the reasoning specific and checkable.
>
> **Why A is wrong:** The delegation criteria are NOT a scoring system. You don't add them up. You use them to show WHY the task belongs in a particular classification. This is a direct exam trap.
>
> **Why C is wrong:** Adding more criteria doesn't fix vague reasoning — it makes it vaguer. The four screens are sufficient. The problem is Bilal's failure to identify which one carries the classification.
>
> **Why D is wrong:** While individual campaigns may vary, the workflow-level classification is appropriate. The question is about improving his reasoning method, not his scope.

---

### Question 4 · D6

A hospital administrator [hospital ka intezaami afsarr] wants to use AI to draft discharge summaries [patient ke jaane ki report] from doctor's notes. The summaries go to patients and their family doctors. The administrator proposes: "A nurse will review the AI output."

**Which response best addresses the gap in this proposal?** **(Select 2)**

**A.** A nurse may not have the clinical [medical] authority to verify medical assessments in the summary — the reviewing role should be a physician [doctor]

**B.** The proposal does not specify what the reviewer checks — medical accuracy, medication dosages [dawai ki miqdar], follow-up instructions, or all three

**C.** The hospital should stop using AI for medical documents entirely

**D.** The AI should be trained on the hospital's specific medical terminology [istilaahaat] before being used

> [!success]- Reveal Answer
> **Correct: A and B**
>
> **Why A is correct:** The "WHO" in the defined gate matters. A nurse reviewing clinical assessments may lack the authority and qualification to catch medical errors. The reviewer must be someone who actually holds the responsibility — a defined gate names "the role that actually holds the responsibility."
>
> **Why B is correct:** "Review the output" fails the WHAT test. What specifically is the reviewer checking? Medical accuracy? Drug interactions? Follow-up timing? Without specifying, the review is an intention, not a control.
>
> **Why C is wrong:** Abandonment option. AI can appropriately help draft discharge summaries — the issue is the gate design, not the use of AI.
>
> **Why D is wrong:** Training the AI better doesn't replace the need for human review. Even a well-trained AI needs a defined gate for medical documents because of the high consequence and accountability requirements.

---

### Question 5 · D6

Rehan is a project manager at a software company. He wants AI to draft client project-status updates [project ki haalat ki report] that will be emailed directly to clients every Friday. He says: "The consequences are low — it's just a status update."

**What is the strongest challenge to Rehan's reasoning?**

**A.** Status updates are never low-consequence and should always be written manually

**B.** Even routine status updates carry accountability — the company is responsible for the accuracy of what it tells clients, and a wrong milestone [project ka important padaav] date or budget figure could affect client decisions

**C.** AI-generated text always contains errors, so no client communication should be AI-drafted

**D.** The IT department should approve all AI-generated external communications

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Rehan misjudged the consequence screen. A status update that says "Phase 2 is on track for March delivery" when it's actually delayed until May isn't trivial — the client may make staffing, budgeting, or planning decisions based on that claim. The company stays accountable for those factual claims. This doesn't mean AI can't draft the update — it means the classification should be "appropriate with review," not "fully appropriate."
>
> **Why A is wrong:** Absolute statements ("never," "always") are almost always wrong on the exam. Some status updates genuinely are low-consequence (internal team notes, for example).
>
> **Why C is wrong:** Another absolute statement. AI doesn't "always" contain errors. The issue isn't that AI is unreliable — it's that accountability for factual claims to clients requires a human check.
>
> **Why D is wrong:** IT approval is the wrong gate. IT handles technology decisions. The right reviewer for factual accuracy in a client status update is the project manager or account owner — the person who knows whether the milestones are correct.

---

### Question 6 · D4 + D6

A financial analyst at a real-estate firm [jaaidaad ki company] asks AI to draft a quarterly [teen maheene ki] investment [paisa lagane ki] summary that will go to the board of directors [company ke zimmedaar log]. The analyst argues: "I'll review the numbers before the board meeting — that's human oversight."

**Which TWO weaknesses exist in this plan?**

**A.** The analyst does not specify WHAT they will verify — all calculations, market data accuracy, forecasts, or just the formatting

**B.** The analyst does not specify WHEN the review happens — before the document is finalized, before distribution, or at the board meeting itself

**C.** The analyst should use a more powerful AI model instead of relying on human review

**D.** The board should be informed that the summary was AI-assisted so they can discount its conclusions

> [!success]- Reveal Answer
> **Correct: A and B**
>
> **Why A is correct:** "Review the numbers" is vague. Does that mean checking every calculation against source data? Verifying market figures against authoritative sources? Confirming forecast assumptions? A defined gate needs a specific WHAT — the particular risk the review is meant to catch.
>
> **Why B is correct:** "Before the board meeting" could mean five minutes before, while walking in. A defined gate needs a specific WHEN — a point where the review happens before the output becomes hard to undo (in this case, before the document is distributed to board members).
>
> **Why C is wrong:** A more powerful model doesn't eliminate the need for verification. Model capability doesn't replace accountability. High-consequence work always needs a defined human gate regardless of the model.
>
> **Why D is wrong:** Telling the board "this was AI-assisted so discount it" undermines the work instead of fixing the process. The right approach is to verify the output so you can present it with confidence, not to shift the verification burden to the audience.

---

### Question 7 · D6

A support team lead is classifying AI use cases for the team. Match each task to its most appropriate classification:

| Task | Classification |
|------|---------------|
| Summarizing approved policy documents into an internal FAQ | ? |
| Drafting a customer apology for a service outage [service ka band hona] that will go out under the VP's name | ? |
| Making the final determination on a customer's insurance claim [bima ka da'wa] | ? |

**Which row is correctly matched?**

**A.** FAQ = Fully appropriate · Apology = Fully appropriate · Claim = Appropriate with review

**B.** FAQ = Appropriate with review · Apology = Appropriate with review · Claim = Inappropriate

**C.** FAQ = Fully appropriate · Apology = Appropriate with review · Claim = Inappropriate as final decision-maker

**D.** FAQ = Appropriate with review · Apology = Inappropriate · Claim = Inappropriate

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:**
> - **FAQ from approved sources:** Low consequence, reversible, authoritative sources exist → Fully appropriate (normal editorial review is enough)
> - **Customer apology under VP's name:** The company is accountable for the claims in the apology, tone matters, and it's going to a customer → Appropriate with review (VP or account manager verifies facts and tone before sending)
> - **Insurance claim determination:** This is a final professional determination with irreversible financial consequences for the customer → Inappropriate as the final decision-maker (a qualified claims professional must make and own the decision)
>
> **Why A is wrong:** The apology is NOT fully appropriate — accountability for customer-facing claims requires review. And the claim needs stronger than "review."
>
> **Why B is wrong:** The FAQ doesn't need the "with review" classification — it's low-risk internal content from approved sources.
>
> **Why D is wrong:** The apology doesn't need to be "inappropriate" — AI can draft it, as long as a human reviews before sending. "Inappropriate" means the human should own the judgment itself, which applies to the claim but not to drafting an apology.

---

*Part 1 complete. Say "next" when you're ready for Part 2: The Data — Can This Information Go In?*
