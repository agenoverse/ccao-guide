---
type: Document
title: "Governance, Risk & Responsible Use: Scenario Guide Part 4"
description: "Scenario walkthroughs covering responsible use in regulated environments: compliance obligations and when human review is required."
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
order: 95
---

## THE PEOPLE: Could This Affect Someone Unfairly?

> **Domain:** D6 — Governance, Risk & Responsible Use (15%) + D2 — Output Evaluation & Validation (21%)
> **Concepts covered:** Who Is Affected + Exclusion Bias, Disclosure (Rules First, Judgment Second), Escalation Done Right

---

## CONCEPT 15: Who Is Affected + Exclusion Bias

### THE SCENARIO

Hina is a hiring coordinator [bhaarti ka kaam karne wali] at a fast-growing tech company. They got 400 applications for 5 developer positions. The hiring manager says: "I can't read 400 CVs. Use AI to shortlist [chhaan ke chhoti list banana] the top 30."

Hina sets it up. AI reads all 400 applications and produces a list of 30 "qualified candidates." The hiring manager is thrilled — the 30 look great. He interviews 8, hires 3, project done.

Six months later, someone runs a demographic [aabadi ke hisaab se — gender, age, background waghera] analysis of the 370 applications AI dropped. They find a pattern:

- Candidates who went to less-known universities were dropped at 3x the rate
- Candidates with employment gaps [naukri mein waqfa — jaise kisi ne 2 saal kaam nahi kiya] — common for parents returning to work — were almost entirely excluded
- Candidates with non-English names who wrote their experience in slightly different formats were dropped disproportionately [sahi tanaasub se zyada]

Nobody caught this. Why? Because **nobody looked at the 370 who were removed.** The hiring manager reviewed only the 30 survivors. The survivors looked great. The exclusions [jin ko nikaala gaya] were invisible.

### WHAT WENT WRONG?

The first three questions (Case, Data, Capability) mostly protect the **organization** and its information. This fourth question looks **outward** — at the people the output touches.

Hina's team made the most common fairness mistake in AI: **reviewing only what AI selected, never what it excluded.**

### THE CONCEPT

When AI narrows a set — shortlists candidates, flags fraud [dhoka], selects support tickets for escalation, ranks leads [mumkin customers] for attention — the people who are REMOVED are the ones nobody checks.

Ask five questions:

```
+---+--------------------------------------------------------+
| 1 | Who is affected, INCLUDING people who never see         |
|   | the output?                                            |
|   |                                                        |
|   | The 370 rejected applicants never saw the AI output.   |
|   | They are still affected.                               |
+---+--------------------------------------------------------+
| 2 | What could go wrong for THEM?                          |
|   |                                                        |
|   | Qualified people lose opportunities they deserved.     |
|   | Certain groups get systematically filtered out.         |
+---+--------------------------------------------------------+
| 3 | Would they be able to NOTICE or CHALLENGE it?          |
|   |                                                        |
|   | No. A rejected applicant gets a standard rejection.    |
|   | They have no way to know AI dropped them, or why.      |
+---+--------------------------------------------------------+
| 4 | What would a FAIR process look like?                   |
|   |                                                        |
|   | The hiring owner reviews BOTH inclusions AND           |
|   | exclusions before action. Sample the dropped set.      |
+---+--------------------------------------------------------+
| 5 | Is DISCLOSURE required, or would AI involvement         |
|   | reasonably matter to them?                             |
|   |                                                        |
|   | Depends on law, policy, and contract. Many             |
|   | jurisdictions now require it for automated hiring.     |
+---+--------------------------------------------------------+
```

**Where exclusion bias hides — it's not just hiring:**

| AI narrows... | Who's invisible? |
|--------------|-----------------|
| Candidate shortlists | Rejected applicants |
| Fraud/risk flags | People wrongly flagged OR wrongly cleared |
| Support tickets for escalation [aage bhejna] | Customers whose serious issues were marked "low priority" |
| Leads selected for sales attention | Potential customers AI decided weren't worth pursuing |
| Documents selected as relevant | Evidence or clauses the system missed |
| People ranked for priority | Everyone ranked low who shouldn't have been |

**The practical control:** Sample exclusions as well as inclusions. Don't just ask "are the selected ones good?" Also ask "did we drop anyone who shouldn't have been dropped?"

**Bias doesn't only come from data.** It can enter through:
- **The prompt** — "rank the strongest candidates" carries an unstated standard [chhupi hui kasauti]. What does "strongest" mean? AI inherits that vagueness.
- **The framing** — how the task was described shapes what AI produces
- **Language patterns** — AI's generation patterns may favor certain writing styles, formats, or structures

So the check is not only whether the FACTS are right. It is whether a **framing tilted the result** [sawaal ka andaaz hi nateeje ko jhuka de].

### EXAM TRAP

> Wrong answer pattern: "The shortlist looks good, so the process is fair"

The exam's #1 People-question trap. If you only review the survivors, you can't see the bias. Every wrong answer that says "the selected candidates are qualified, so the system worked" is missing the point. The correct answer always includes checking who was EXCLUDED, not just who was INCLUDED.

Second trap: "AI is more objective than humans, so it reduces bias." AI can AMPLIFY bias — through training data, through prompt framing, through language patterns. The exam never rewards the assumption that AI = fairness.

### QUICK CHECK

**Q:** A bank uses AI to flag suspicious transactions [mashkook len-den]. The security team reviews every flagged transaction carefully. Is this enough?

**A:** No. They also need to sample the transactions AI did NOT flag. If AI systematically misses fraud from certain transaction types, geographies, or account profiles, reviewing only the flagged ones will never reveal the gap. The unflagged fraud is the invisible exclusion.

---

## CONCEPT 16: Disclosure — Rules First, Judgment Second

### THE SCENARIO

Three situations at the same company, same week:

**Situation A:** Rafay is a manager who uses AI to draft performance reviews [kaarkargi ka jaayiza] for his team of 8 employees. The reviews go out under his name. Employees read them as Rafay's personal assessment [raaye] of their work.

**Situation B:** Kiran uses AI to reformat a meeting agenda [meeting ka nizam — kya baat hogi, kis tarteeb se] before sending it to her team. The agenda lists topics and times — nothing more.

**Situation C:** A law firm uses AI to draft a legal brief [qanooni daleel ka dastaaweez] that will be submitted to a court. The brief goes out under the partner's name.

For each: should they disclose [bataana] that AI was involved?

### WHAT WENT RIGHT (partially)?

Rafay, Kiran, and the law firm each face a disclosure question. But the answer is NOT the same for all three. The mistake is applying one rule to every situation.

### THE CONCEPT

Disclosure follows a **two-step order** — and the ORDER matters:

```
  STEP 1: IS DISCLOSURE REQUIRED?
  ────────────────────────────────
  Check:
  □ Law (does the law require it?)
  □ Policy (does company policy require it?)
  □ Contract (does the client/employee contract require it?)
  □ Professional rules (does your profession require it?)
  □ Client commitments (did you promise the client?)
  □ Organizational standards

  If ANY of these requires disclosure → the decision is ALREADY MADE.
  You don't get to use "judgment" to override a rule.

  ─────────────────────────────────────────────────────

  STEP 2: IF NO RULE ANSWERS IT → USE JUDGMENT
  ─────────────────────────────────────────────
  Ask:
  "Would AI involvement reasonably CHANGE this person's
   understanding of the work or the relationship?"

  AI reformats a table    → probably not
  AI drafts what an       → almost certainly yes
  employee reads as a
  manager's personal
  assessment
```

**Apply to the three situations:**

| Situation | Step 1: Rule? | Step 2: Judgment? | Answer |
|-----------|--------------|-------------------|--------|
| **A.** Performance reviews | Check company policy + employment law. Many organizations require disclosure for HR assessments. | Even if no rule: employees read this as Rafay's PERSONAL assessment. AI involvement would change their understanding of the relationship. | Likely YES — disclose |
| **B.** Meeting agenda | No law, policy, or contract requires disclosure for agenda formatting. | Would anyone's understanding change if they knew AI helped reformat a topic list? Probably not. | No — routine tooling |
| **C.** Legal brief | Check professional rules (bar association [vakeelon ki tanzeem] rules), court rules, and client agreement. Many jurisdictions now require disclosure of AI use in court filings [adaalat mein jama hone wale kagzaat]. | If rules require it, judgment is irrelevant — disclose. | Depends on rules — check first |

**Two cases that come up often:**

**Authorship [kisne likha]:** Work that goes out under YOUR name is yours to stand behind, however much AI drafted. Your organization or professional body may require labeling. If no rule exists, use the test: would the reader's understanding change?

```
  Would the reader's understanding change?

  Board paper under your name        → Yes (disclose)
  Reference letter under your name   → Yes (disclose)
  Published article under your name  → Yes (disclose)
  Tidied-up meeting notes            → No (routine tooling)
  Reformatted internal table         → No (routine tooling)
```

**The AI notetaker [AI jo meeting record karta hai] in a meeting:** This one touches ALL four questions at once:
- **Case:** Appropriate with review (summary could misattribute [galat insaan ka naam lagana] a commitment)
- **Data:** The conversation may contain customer/employee/deal information — same route check as any upload
- **Capability:** The notetaker is a participant with reach to the entire conversation
- **People:** Everyone in the room is affected. Announce it at the start. Some jurisdictions [ilaaqa-e-ikhtiyar — jahan ka qanoon laagu hota hai] require every participant's consent to a recording

**The default when no rule settles it and the case is ordinary:**

> Disclose rather than conceal [chhupaana]. Concealment is what damages trust when it surfaces later.

When the case is NOT ordinary, escalation beats inventing a rule yourself.

### EXAM TRAP

> Wrong answer pattern: "No law requires disclosure, so we don't need to disclose"

The exam tests the TWO-STEP order. Step 1 (rules) can settle it — but if rules are silent, Step 2 (judgment) still applies. "No law requires it" is only half the analysis. The complete answer checks rules AND applies the "would their understanding change?" test.

Opposite trap: "Always disclose AI involvement in everything." Over-disclosure dilutes the signal. Slapping an AI label on a reformatted meeting agenda adds noise without value. The exam rewards proportionate [sahi tanaasub ka] disclosure — disclose where it matters, skip where it doesn't.

### QUICK CHECK

**Q:** A manager uses AI to draft a written warning [tanbeehi khat] for an employee. The company has no specific policy on AI disclosure for HR documents. Does the manager need to disclose?

**A:** Step 1: No specific rule. Step 2: Would the employee's understanding change? Yes — a written warning is a significant employment action [naukri se judi aham kaarwai]. The employee reads it as the manager's considered assessment. If they later learned AI drafted it, their understanding of the process and the relationship would change. Disclose — or escalate to HR to determine the right approach.

---

## CONCEPT 17: Escalation Done Right

### THE SCENARIO

Two team leads at the same company face the same problem: their AI workflow processes customer feedback, and they're unsure whether their organization's disclosure obligation [bataane ki zimmedari] applies to this audience.

**Team Lead A (Farooq)** sends this to the legal team:

> "I think this is fine. Can you approve it?"

**Team Lead B (Saba)** sends this:

> "Here is the workflow: AI reads customer feedback surveys, categorizes them by topic, and produces a monthly trend report for the product team. 200 customers are affected per month. The control we added: a product manager reviews the categorization before the report goes to stakeholders [zimmedaar log — jin ko faisla karna hai]. The point the framework does not settle: whether our disclosure obligation applies to this audience, given that the customers' feedback is being processed by AI but the output is an internal report they never see."

The legal team ignores Farooq's email for two weeks. They respond to Saba's within two days.

### WHAT WENT WRONG (and RIGHT)?

Farooq sent a **verdict for someone to rubber-stamp** [mohar lagwaana — bina soche haan keh dena]. Saba sent a **question with reasoning attached**. The legal team could DO something with Saba's email — she gave them the workflow, the affected population, the control already in place, and the specific point she couldn't resolve.

### THE CONCEPT

When to escalate (any ONE of these is enough):

```
+---------------------------------------------+
| ESCALATE WHEN:                              |
|                                             |
| 1. The affected population is LARGE         |
| 2. The potential harm is SIGNIFICANT        |
| 3. The question touches an area your team   |
|    does NOT have standing [haq/authority]    |
|    to resolve:                              |
|    - Law                                    |
|    - Contract                               |
|    - Employment                             |
|    - Professional obligation [pesha-warana  |
|      zimmedari]                             |
|                                             |
| Any ONE of these = escalate                 |
| Escalating is not timidity [darpooki].      |
| It routes the decision to whoever           |
| actually holds it.                          |
+---------------------------------------------+
```

**Weak vs. Strong escalation:**

```
  WEAK (verdict for rubber-stamp)     STRONG (question with reasoning)
  ─────────────────────────────────   ─────────────────────────────────
  "I think this is fine.              "Here is the workflow:
   Can you approve it?"                [what it does]

  "Is this compliant?"                 Who is affected:
                                       [number and description]
  "Can we use AI for this?"
                                       The control we added:
  Asks the reviewer to do              [specific control]
  YOUR thinking.
                                       The point the framework
  Gives them nothing to                does not settle:
  work with.                           [specific unresolved question]"

                                       Gives the reviewer something
                                       SPECIFIC to decide.
```

**Why this matters for the exam:** The exam tests escalation quality, not just whether you escalate. An option that says "ask the legal team if this is okay" is usually WRONG — it's a weak escalation. The correct answer includes WHAT you're escalating, WHY it needs escalation, and the SPECIFIC question you need answered.

**The three-sentence escalation template:**

> 1. "Here is what the workflow does and who it affects."
> 2. "Here is the control we've already added."
> 3. "Here is the specific question we can't resolve: [question]."

### EXAM TRAP

> Wrong answer pattern: "Escalate to the legal team for approval" (with no specifics)

The exam distinguishes between weak escalation ("can you approve?") and strong escalation ("here's the workflow, the control, and the specific question"). The weak version sounds responsible but gives the reviewer nothing actionable. The correct answer always includes the specific unresolved question.

Second trap: "The team doesn't have authority to decide this, so stop the workflow entirely." Stopping is abandonment. Escalation means routing the decision to whoever holds it — not stopping work. The workflow can continue on other fronts while the escalation is resolved, or pause only the specific step that depends on the answer.

### QUICK CHECK

**Q:** Your team uses AI to analyze employee survey data. You're unsure whether employees should be told their comments are being processed by AI. Write a strong escalation to HR.

**A:** "Our workflow uses AI to categorize and trend-analyze employee satisfaction survey responses. 300 employees are affected. We remove names before processing (pseudonymized, mapping retained). The point we can't resolve: whether our employee communication policy requires us to disclose AI involvement in processing survey comments, given that employees submitted them expecting HR analysis but may not have anticipated AI processing. Can you confirm whether disclosure is required, and if so, what form it should take?"

---

## PART 4 RECAP: How These 3 Concepts Connect

```
THE PEOPLE: Could this affect someone unfairly or require disclosure?

  You have an AI workflow that produces output about/for people
     │
     ▼
  ┌──────────────────────────────────────────┐
  │  STEP 1: WHO IS AFFECTED?                │
  │  (Concept 15)                            │
  │                                          │
  │  Include people who NEVER SEE            │
  │  the output.                             │
  │                                          │
  │  Check EXCLUSIONS as well as             │
  │  inclusions — bias hides in what         │
  │  AI removed, not what it selected.       │
  │                                          │
  │  Ask: What could go wrong for them?      │
  │  Ask: Could they notice or challenge it? │
  │  Ask: What would a fair process be?      │
  └──────────────┬───────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────┐
  │  STEP 2: IS DISCLOSURE NEEDED?           │
  │  (Concept 16)                            │
  │                                          │
  │  FIRST: Check rules                      │
  │  (law, policy, contract, professional    │
  │   rules, client commitments)             │
  │         │                                │
  │    Rule says yes? → Disclose. Done.      │
  │         │                                │
  │    Rules silent?                         │
  │         │                                │
  │  SECOND: Use judgment                    │
  │  "Would AI involvement change their      │
  │   understanding of the work or the       │
  │   relationship?"                         │
  │         │                                │
  │    Yes → Disclose                        │
  │    No  → Routine tooling, no label       │
  │    Unsure → Disclose rather than conceal │
  └──────────────┬───────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────┐
  │  STEP 3: CAN YOU RESOLVE IT?             │
  │  (Concept 17)                            │
  │                                          │
  │  Large affected population?              │
  │  Significant potential harm?             │
  │  Question outside your authority?        │
  │         │                                │
  │    Any one = ESCALATE                    │
  │         │                                │
  │    Include:                              │
  │    • The workflow + who's affected       │
  │    • The control already added           │
  │    • The SPECIFIC unresolved question    │
  │                                          │
  │    Never send: "Can you approve this?"   │
  └──────────────────────────────────────────┘
```

**The chain in one sentence:**
> Look at who's affected (especially the excluded) → check rules first, then judgment for disclosure → if you can't resolve it, escalate the QUESTION with your reasoning, not a verdict for rubber-stamping.

**The sentence to remember:**
> Look at the people the output touches, including the ones it removed from a list. Check a rule for disclosure first and your own judgment second. Escalate the question with your reasoning attached, never a verdict for someone to approve without thinking.

---

## EXAM-LEVEL PRACTICE QUESTIONS

### Question 1 · D6

A retail [khudarah ki dukaan] company uses AI to prioritize [tarteeb lagana — pehle kaun, baad mein kaun] customer support tickets. High-priority tickets get a response within 1 hour; low-priority tickets wait up to 48 hours. The support manager reviews the high-priority queue [line] daily to ensure quality.

**What fairness risk is the manager NOT catching?**

**A.** AI might respond to high-priority tickets with incorrect information

**B.** AI might be prioritizing based on spending history rather than issue severity [masle ki sangeeni], systematically deprioritizing [neechay kar dena] customers who spend less

**C.** AI might send automatic responses without human review

**D.** The 1-hour response window might not be fast enough for truly urgent issues

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The manager reviews only the HIGH-priority queue (the survivors). If AI systematically ranks low-spending customers as low-priority regardless of issue severity, those customers wait 48 hours for urgent problems. Nobody checks the low-priority queue for misclassification because the review only covers what AI SELECTED as important. This is exclusion bias — the invisible unfairness hiding in what AI excluded.
>
> **Why A is wrong:** Incorrect information is an Output Evaluation concern (D2), not a fairness/People concern. It's a valid worry but not the FAIRNESS risk the question asks about.
>
> **Why C is wrong:** Whether responses are automated is a Case/gate question, not a fairness question about who gets deprioritized.
>
> **Why D is wrong:** Response time is a business SLA [Service Level Agreement — service ki guarantee] decision, not an AI fairness issue. The problem isn't the window — it's who AI puts in the slow lane.

---

### Question 2 · D6

Yasir manages a team of 12. He uses AI to draft mid-year performance feedback for each team member. The feedback goes into the company's HR system under Yasir's name. His company has no specific policy about AI use in performance reviews.

**What is the most appropriate approach to disclosure?**

**A.** No disclosure needed — there is no policy requiring it, and the feedback is Yasir's responsibility regardless of how he drafts it

**B.** Add a footnote to each review saying "This feedback was generated by AI" to be fully transparent

**C.** Check whether employment law, HR policy, or the employee handbook requires disclosure for AI-assisted performance assessments — and even if they don't, recognize that employees reading this as Yasir's personal assessment means disclosure is likely warranted

**D.** Disclose to HR but not to the employees, since the employees might lose trust in the feedback

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The two-step disclosure framework. Step 1: check rules (employment law, HR policy, employee handbook). Step 2: even if no rule requires it, apply the judgment test — employees read performance feedback as their manager's personal assessment of their work. AI involvement would change their understanding of the relationship. Both steps point toward disclosure.
>
> **Why A is wrong:** "No policy" only answers Step 1. Step 2 (the judgment test) still applies. Performance reviews are consequential — they affect promotions, pay, and careers. The employee's understanding would change if they knew AI drafted it.
>
> **Why B is wrong:** "Generated by AI" misrepresents the situation. Yasir used AI to DRAFT the feedback — he should still review, verify, and own every statement. The footnote should reflect that accurately, not imply AI made the assessments autonomously.
>
> **Why D is wrong:** Concealing AI involvement from employees while telling HR creates exactly the trust problem disclosure is meant to prevent. If it surfaces later, the concealment is worse than the AI use.

---

### Question 3 · D6

A hospital uses AI to triage [pehle darjabandi karna — kaun pehle, kaun baad mein] incoming patient cases and assign urgency levels. Doctors review all "urgent" cases immediately. "Routine" cases wait in a standard queue.

A review discovers that patients from certain postal codes [ilaaqe ka code — area ka number] — lower-income areas — are classified as "routine" at a higher rate, even with similar symptoms.

**What is the FIRST action the hospital should take?**

**A.** Retrain the AI model with more balanced data from all postal codes

**B.** Add postal code as a protected field [mehfooz khaana — jis ko AI na dekhe] that AI cannot see during triage

**C.** Review the "routine" classifications from affected postal codes to identify patients who were incorrectly deprioritized, and escalate the systemic [poore nizam mein phaili hui] issue to the appropriate clinical [tibbi] and ethics [akhlaaqiyat] owners

**D.** Switch to fully manual triage until the AI system can be proven to be unbiased

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Immediate harm exists — patients from certain areas may be waiting longer for urgent care. The FIRST action is to check exclusions (review "routine" cases that may be misclassified) and escalate the systemic issue to people who have authority over clinical and ethical decisions. This is Concept 15 (check exclusions) + Concept 17 (strong escalation with specific concern).
>
> **Why A is wrong:** Retraining addresses the long-term fix but doesn't help patients who are currently misclassified. The FIRST action must address the immediate harm.
>
> **Why B is wrong:** Removing postal code might help, but it might not — if the model uses other features correlated [aapas mein jude hue] with postal code (insurance type, referral source), the bias could persist. And this doesn't address the patients already affected.
>
> **Why D is wrong:** Switching to fully manual triage may not be operationally feasible and doesn't address the specific patients who were already deprioritized. Also, demanding an AI be "proven unbiased" sets an impossible standard — the goal is identifying and mitigating [kam karna] specific unfairness, not achieving perfect neutrality.

---

### Question 4 · D6

Lubna's consulting team uses AI to analyze customer feedback and produce a quarterly insights report [teen maahana jaayize ki report] for clients. A team member asks: "Do we need to tell clients that AI helps write these reports?"

**Which factor should Lubna check FIRST?**

**A.** Whether the insights report is long enough that AI involvement would be obvious to the reader

**B.** Whether the client contract, professional standards, or company policy requires disclosure of AI tools used in deliverables [kaam ki cheezein jo client ko di jaati hain]

**C.** Whether the team can write the reports faster without AI

**D.** Whether competing consulting firms disclose their use of AI

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Step 1 of the disclosure framework: check rules FIRST. The client contract may specifically require disclosure of tools used. Professional standards for consulting may have requirements. Company policy may mandate it. If any rule requires it, the decision is already made — no judgment step needed.
>
> **Why A is wrong:** Report length has nothing to do with disclosure obligation. Whether AI involvement is "obvious" doesn't determine whether you must disclose it.
>
> **Why C is wrong:** Speed is irrelevant to the disclosure question. Whether AI is faster doesn't change whether clients need to know about it.
>
> **Why D is wrong:** What competitors do doesn't set your disclosure obligation. Your obligation comes from rules (contracts, standards, policy) and your own judgment — not from industry practice.

---

### Question 5 · D6 + D4

An insurance company uses AI to screen claims for potential fraud. Flagged claims go to human investigators [jaanch karne wale]; unflagged claims proceed to standard processing. A team member wants to escalate a concern: the system may be flagging claims from certain regions at a higher rate without a legitimate [jayiz] risk basis.

**Which escalation is most useful to the compliance team?**

**A.** "Our AI fraud screening system might be biased. Can you check?"

**B.** "I think the system is fine overall, but could you approve it so we have sign-off [dastkhat le lein taake record mein aa jaaye]?"

**C.** "Our AI fraud screening flags claims from Regions X and Y at 2.3x the rate of other regions with similar claim profiles. 4,000 claimants per quarter are affected. We've added a human review layer for flagged claims, but the unflagged-to-flagged ratio by region suggests the screening criteria may correlate with geography rather than risk indicators. Can the actuarial [bima ke hisaab-kitaab] and compliance teams review whether the regional disparity [farq] reflects legitimate risk factors or an unintended pattern?"

**D.** "We should stop using AI for fraud screening until we can guarantee no regional bias exists"

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** This is the strong escalation template in action. It provides: (1) what the workflow does and the specific concern, (2) the data — 2.3x rate, 4,000 affected, (3) the control already added (human review for flagged claims), (4) the specific question: does the regional disparity reflect legitimate risk or unintended bias? The compliance team can ACT on this.
>
> **Why A is wrong:** Weak escalation. "Might be biased, can you check?" gives the compliance team nothing to work with — no numbers, no affected population, no specific concern. They'd have to start the investigation from scratch.
>
> **Why B is wrong:** This asks for a rubber stamp, not a review. It also pre-judges the outcome ("fine overall") instead of presenting the evidence neutrally.
>
> **Why D is wrong:** Stopping entirely is the abandonment response. The system may be catching real fraud — removing it without a replacement harms the company. The right action is escalating the specific concern to the right team, not shutting down a useful system.

---

### Question 6 · D6

A university admissions [daakhile ka department] office uses AI to rank applicants. An administrator notices that the system consistently ranks applicants who mention "community service" higher than those who mention "family responsibilities" in their personal statements — even when other qualifications [laayiqiyat] are comparable [ek jaisi].

**This is an example of bias entering through:**

**A.** Training data — the model was trained on biased historical admissions decisions

**B.** Prompt framing — the way the ranking task was described implicitly [chhupi taur par] valued certain experiences over others

**C.** Data quality — the personal statements were poorly formatted

**D.** Model limitations — the AI cannot understand nuance [baarikiyaan] in personal statements

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The bias enters through how the task was FRAMED. If the prompt asks AI to rank "the strongest applicants" or value "leadership and extracurricular achievement" [course ke baahir ki sargarmiyan], it implicitly advantages applicants who describe community service (a recognized "achievement") over those who describe family caregiving (equally valuable but not framed as an "achievement" in conventional terms). This is Concept 15's point: bias doesn't only come from data — it can enter through the prompt and framing.
>
> **Why A is wrong:** Training data bias is a real phenomenon, but this specific pattern — valuing one type of experience over another — is more directly explained by how the task was framed. The prompt asked for something that "community service" matches better than "family responsibilities."
>
> **Why C is wrong:** Data quality (formatting) has nothing to do with which experiences get valued more. The personal statements could be perfectly formatted and the bias would persist.
>
> **Why D is wrong:** This isn't about understanding nuance — it's about the ranking criteria. The AI may "understand" both experiences perfectly well but rank one higher because the TASK FRAMING told it to value one type of experience.

---

### Question 7 · D6

A company's AI workflow ranks job candidates, prioritizes customer service tickets, and screens loan [qarz] applications. In all three, a human reviews only the top-ranked or approved items.

**What single control improvement would address the fairness gap across all three workflows?**

**A.** Use a more advanced AI model that is known to produce less biased outputs

**B.** Add a step in each workflow where a human samples and reviews the EXCLUDED or LOW-RANKED items, not just the selected ones

**C.** Require AI to explain its ranking criteria for every decision

**D.** Remove all demographic information from the datasets before AI processes them

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The common fairness gap across all three workflows is the same: humans only see what AI selected (top candidates, high-priority tickets, approved loans). Nobody checks the exclusions (rejected candidates, low-priority tickets, denied loans). Sampling exclusions is the one control that catches systematic bias that's invisible when you only review the survivors. This applies equally to all three workflows.
>
> **Why A is wrong:** "More advanced model" is vague and doesn't guarantee less bias. And even a less biased model needs exclusion review — no model is perfectly fair.
>
> **Why C is wrong:** AI explanations can be post-hoc rationalizations [baad mein banaye gaye bahaane], not true explanations of the decision process. And even accurate explanations don't help if nobody is checking the excluded group.
>
> **Why D is wrong:** Removing demographic fields can help but doesn't eliminate bias — AI can infer [andaza lagana] demographic patterns from other fields (zip code, name patterns, school attended). And it doesn't address the core problem: nobody is checking the excluded group.

---

*Part 4 complete. Say "next" when you're ready for Part 5: Putting the Four Together.*
