---
type: Document
title: "Governance, Risk & Responsible Use: Scenario Guide Part 5"
description: "Scenario walkthroughs covering bias, fairness, and how to identify when an AI output may cause unequal or harmful impact."
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
order: 96
---

## PUTTING THE FOUR TOGETHER

> **Domain:** D6 — Governance, Risk & Responsible Use (15%) + D4 — Workflow Integration & Solution Design (16%) + D7 — Troubleshooting & Optimization (10%)
> **Concepts covered:** One Workflow Start to Finish, The Governance Record, The Evidence Line + Residual Risk, Incident Response (First-Hour Procedure)

---

## CONCEPT 18: One Workflow Start to Finish

### THE SCENARIO

Ayesha leads operations at a regional logistics [saamaan ki supply aur delivery] company. Every week, her team writes a **service-exception report** [jab delivery mein koi masla ho — late delivery, galat saamaan, kho gaya — us ki report] for large customers. Currently, a team member reads through dispatch records [bhejne ke record], finds what went wrong, and writes the report by hand. It takes hours.

Ayesha proposes: "Let AI draft the report from our dispatch records. The account manager [jo customer ke saath directly kaam karta hai] sends it after checking."

Sounds simple. But watch what happens when she runs ALL FOUR questions on this one workflow.

### WHAT WENT RIGHT?

Ayesha didn't just ask "can AI write reports?" She ran each question in order — and each answer built on the previous one.

### THE CONCEPT

**Question 1 — THE CASE: Can AI do this work?**

```
  Screen              Ayesha's workflow                    Result
  ──────────────────  ────────────────────────────────     ──────
  Reversibility       HIGH before sending (can edit)       ✓
                      LOW after (customer reads it)

  Consequence         MEANINGFUL. Delivery failures may    ⚠
  of error            affect contracts and customer trust.

  Human element       MODERATE. Summary is mechanical,     ⚠
                      but tone matters on disputed
                      [jhagde wale] accounts.

  Accountability      The company stays RESPONSIBLE for    ⚠⚠
                      every factual claim in the report.
```

**Classification:** Appropriate with review.
**Deciding factor:** Accountability — the company stays responsible for what it tells customers.
**Gate:** The account manager checks delivery facts against the dispatch record AND reviews tone on disputed accounts BEFORE the report is sent.

WHO: Account manager.
WHAT: Delivery facts + tone on disputed accounts.
WHEN: Before sending to customer.

---

**Question 2 — THE DATA: Can this information go in?**

Inputs: customer names, shipment info, delivery windows, failure reasons, free-text operational notes.

**Tier:** At least YELLOW — internal customer data with identifiers.

**Discriminator question:** Does the task need the identifiers?

YES. A customer report MUST identify the customer and their shipments. You can't write "Dear Customer, your shipment was late" — you need "Dear Al-Rashid Enterprises, your shipment #4872 from Karachi was delayed 2 days."

Stripping identifiers doesn't solve it here. Instead:

**Action:** Confirm the specific workspace and integration route are approved for this data.

---

**Question 3 — THE CAPABILITY: Can I turn this on?**

The team wants a connector to the dispatch system.

```
  Check             Result
  ────────────────  ────────────────────────────────────
  Source            Internal platform team               ✓
  Reach             Only the reporting tables required    ✓
  Fit               Strong — removes a manual export     ✓
  Outside content   Some free-text fields hold text      ⚠
                    copied from customer communications
  Actions           Workflow does NOT need permission     ✓
                    to send the report
```

**Outcome:** Enable read-only access after scope confirmation. Keep the SENDING with the account manager (human gate).

Key decision: the connector gets READ-ONLY. AI reads the data. A human sends the report. The workflow doesn't need — and doesn't get — send authority.

---

**Question 4 — THE PEOPLE: Could this affect someone?**

Customers are the obvious affected group. But who else?

**Drivers and operations staff** described in the failure notes. A summary could:
- Turn "weather delay" into "driver failure"
- Use harsher language for some teams than others
- Attribute blame [ilzaam] differently depending on how the notes were phrased

**Controls added:**
- Attribution [kisi par ilzaam lagana] must match the dispatch record (no AI-invented blame)
- Team should compare phrasing ACROSS reports (not just within each one) to catch consistency bias

**Disclosure:** Check contractual and organizational requirements first. If silent, a routine operational report may need no special customer notice. But employee-facing consequences (drivers being blamed) deserve separate thought.

---

**All four together — what one "simple" workflow produced:**

```
  ┌─────────────────────────────────────────────────────────┐
  │  THE CASE                                               │
  │  Classification: Appropriate with review                │
  │  Deciding factor: Accountability                        │
  │  Gate: Account manager checks facts + tone before send  │
  ├─────────────────────────────────────────────────────────┤
  │  THE DATA                                               │
  │  Tier: Yellow (customer data with identifiers)          │
  │  Identifiers needed: Yes (customer-specific report)     │
  │  Route: Confirmed approved workspace + integration      │
  ├─────────────────────────────────────────────────────────┤
  │  THE CAPABILITY                                         │
  │  Connector: Read-only to dispatch tables                │
  │  Source: Internal. Reach: Proportionate. Fit: Strong.   │
  │  Outside content: Customer comms in free-text fields    │
  │  Actions: No send permission (human sends)              │
  ├─────────────────────────────────────────────────────────┤
  │  THE PEOPLE                                             │
  │  Affected: Customers + drivers/staff in failure notes   │
  │  Fairness: Compare phrasing across reports              │
  │  Attribution: Must match dispatch record                │
  │  Escalation: Driver-disclosure question → HR            │
  └─────────────────────────────────────────────────────────┘

  One proposal. Fifteen minutes. Seven concrete outputs
  and one escalation.
```

**This is governance as work design** — not paperwork added afterwards.

### EXAM TRAP

> Wrong answer pattern: "Run question 1, and if it passes, you're done"

The exam tests whether you understand that the four questions are SEQUENTIAL and BUILD on each other. The Case sets the gate, the Data sets the route, the Capability sets the permission boundary, and the People add the fairness check. Skipping any one leaves a gap. An answer that addresses only one question — even perfectly — is incomplete.

Also: "Strip the identifiers to solve the data problem." In Ayesha's case, stripping identifiers BREAKS the task. The report must name the customer and shipments. The discriminator answer was YES — identifiers are needed — so the solution is confirming the route, not redacting.

### QUICK CHECK

**Q:** In Ayesha's workflow, why doesn't stripping customer identifiers solve the data question?

**A:** Because the task is a customer-specific service-exception report. It MUST identify the customer and their shipments — "Dear Customer, your unnamed shipment was late" is useless. The discriminator answer is YES (identifiers needed), so the control is confirming the approved route, not removing identifiers.

---

## CONCEPT 19: The Governance Record

### THE SCENARIO

Bilal's team ran the four questions on their AI workflow three months ago. Good discussion. Everyone agreed on the controls. Then:

- The account manager who was supposed to review reports left the company. Nobody replaced her in the gate.
- The connector was updated by the platform team — it now has write access, not just read.
- A new data type (customer payment information) started appearing in the dispatch notes.

When a client complained about a wrong figure in a report, nobody could find the original decisions. "We discussed it in a meeting," Bilal says. "I think the notes are somewhere in someone's email."

Three months of drift. Zero documentation. Nobody knows what was agreed, who was responsible, or what changed.

### WHAT WENT WRONG?

The four questions are useful IN YOUR HEAD. They become useful TO AN ORGANIZATION when the answers are **written down** in one place, for one workflow, owned by one person.

### THE CONCEPT

A **Governance Record** [hukmarani ka record — ek safha jo ek workflow ke baare mein sab kuch likha ho] is one page for one workflow. Five blocks:

```
┌──────────────────────────────────────────────────────────┐
│              GOVERNANCE RECORD                           │
│  Workflow: _______________  Owner: ______  Date: ______  │
├──────────────────────────────────────────────────────────┤
│  BLOCK 1: THE CASE                                       │
│                                                          │
│  Classification: appropriate / with review / inappropriate│
│  Deciding factor: ________________________________       │
│  Gate: WHO _________ WHAT __________ WHEN __________     │
├──────────────────────────────────────────────────────────┤
│  BLOCK 2: THE DATA                                       │
│                                                          │
│  Tier: green / yellow / red                              │
│  Does the task need identifiers? yes / no                │
│  Fields removed: _________________________________       │
│  Approved route: _________________________________       │
├──────────────────────────────────────────────────────────┤
│  BLOCK 3: THE CAPABILITY                                 │
│                                                          │
│  Tools / Skills / connectors enabled: _______________    │
│  Source: ________________  Reach: ___________________    │
│  Outside content it reads: __________________________    │
│  Actions it must NOT take without review: ___________    │
├──────────────────────────────────────────────────────────┤
│  BLOCK 4: THE PEOPLE                                     │
│                                                          │
│  Who is affected: ___________________________________    │
│  Fairness check (including exclusions): _____________    │
│  Disclosure decision: ________  Required by / judgment   │
│  Open question or escalation: _______________________    │
├──────────────────────────────────────────────────────────┤
│  BLOCK 5: THE EVIDENCE (see Concept 20)                  │
│                                                          │
│  Success measure: ___________________________________    │
│  Failure threshold: _________________________________    │
│  Monitored by: _____________  How often: ____________    │
│  Residual risk: _____________________________________    │
├──────────────────────────────────────────────────────────┤
│  RE-CHECK IF: model, feature, data, audience,            │
│  permission, policy, vendor term, or business            │
│  consequence changes.                                    │
└──────────────────────────────────────────────────────────┘
```

**Key rules:**

1. **One workflow, one page.** Don't combine multiple workflows into one record. Each workflow has its own classification, data tier, capabilities, and affected people.

2. **A blank field beats a guessed one.** If you don't know the owner or the approved route, write `OPEN QUESTION` and send it to the right person. An honest gap is better than a confident guess.

3. **The footer matters.** The record names the owner, the date, and the re-check triggers [kab dobara jaanch karni hai]. This is what prevents Bilal's problem — when something changes, the record tells you to re-check.

4. **Share it.** Send the record to whoever owns the workflow, the policy, or the risk:

> "This is how I propose to run the workflow. Please correct any assumption about approval, data route, reviewer, or control."

The goal isn't signatures for every harmless task. It's turning **hidden assumptions into visible decisions** before they become incidents [hadse].

### EXAM TRAP

> Wrong answer pattern: "Document the workflow in a detailed risk assessment with scoring matrices and stakeholder sign-offs"

The exam rewards PRACTICAL governance — one page, five blocks, fills in 15 minutes. Not a 20-page risk assessment that nobody reads. The Governance Record is designed to be lightweight enough that people actually create it. An answer that adds heavy bureaucracy [kaghazi karwaai] is usually wrong.

Also: "We discussed it in a meeting — that's documentation enough." Verbal agreements are invisible to the next person who manages the workflow. The exam always prefers written records over remembered conversations.

### QUICK CHECK

**Q:** You filled in blocks 1-4 of a Governance Record but the approved data route is unknown. What do you write?

**A:** Write `OPEN QUESTION` in the approved route field and send it to whoever owns the data policy. A blank with "open question" is a real record of what you don't know yet. A guess is a lie that creates false confidence.

---

## CONCEPT 20: The Evidence Line + Residual Risk

### THE SCENARIO

Ayesha's logistics team has been running the AI report workflow for three months. Every week, the account manager checks delivery facts and tone before sending. The gate is working — no wrong facts have reached a customer.

Ayesha's director asks: "How do we know this is actually working? And what could still go wrong even if everything works as designed?"

Ayesha answers: "The account manager checks every report."

The director pushes back: "That's the control. I asked two different questions. How do you KNOW the control is working? And what can go wrong even if it does?"

### WHAT WENT WRONG?

Ayesha confused the **control** (the account manager checks) with the **evidence** (proof the control works) and the **residual risk** [baaki bachne wala khatrah — sab kuch theek hone ke baad bhi jo galat ho sakta hai] (what can still go wrong).

### THE CONCEPT

The Evidence line is Block 5 of the Governance Record. It has four parts:

```
+---------------------+-----------------------------------------------+
| FIELD               | WHAT IT ANSWERS                               |
+---------------------+-----------------------------------------------+
| Success measure     | What does "working" look like?                |
| [kamyaabi ki pehchaan]                                               |
|                     | Example: Account managers complete the        |
|                     | factual and tone check before sending.        |
+---------------------+-----------------------------------------------+
| Failure threshold   | What would tell us it's broken?               |
| [naakaamyaabi ki had]                                                |
|                     | Example: Any AI-generated factual error       |
|                     | big enough to matter reaches a customer.      |
+---------------------+-----------------------------------------------+
| Monitored by        | Who watches, and how often?                   |
| [kaun dekhta hai,   |                                               |
|  kitni baar]        | Example: Ayesha reviews a sample monthly.     |
+---------------------+-----------------------------------------------+
| Residual risk       | What can STILL go wrong after every planned   |
| [baqi bachne wala   | control works as designed?                    |
|  khatrah]           |                                               |
|                     | Example: A consistent wording bias across     |
|                     | ALL reports could survive individual checks.  |
|                     | The sample review compares across customers.  |
+---------------------+-----------------------------------------------+
```

**Residual risk is NOT a confession that the design failed.** Every real control leaves something outside its boundary [had]. Naming that remainder is what lets the right person decide whether it's acceptable.

```
  THE DIFFERENCE:

  CONTROL                    EVIDENCE                RESIDUAL RISK
  ─────────────────────      ─────────────────       ─────────────────
  "Account manager           "We can see that        "A wording bias
   checks facts               the check happens       across ALL reports
   before sending"            and catches errors"     could survive
                                                      individual checks"
  What we DO                 How we KNOW             What could still
                             it works                go wrong anyway
```

**For Ayesha's director, the answers are:**

> "How do we KNOW the control is working?"
> → The success measure: account managers complete checks before sending. Ayesha reviews a monthly sample.

> "What can still go wrong even if it does?"
> → Residual risk: each report might pass its individual check, but a CONSISTENT bias across all reports (harsher language for some customers, softer for others) could survive. The monthly sample compares ACROSS customers to catch this.

**Why residual risk matters for the exam:** The exam tests whether you understand that governance doesn't promise zero risk. It promises that risks are NAMED, OWNED, and MONITORED. An answer that claims "all risks are eliminated" is always wrong. The mature answer names what's left and who watches it.

### EXAM TRAP

> Wrong answer pattern: "The human gate catches everything, so there is no residual risk"

No control catches everything. The exam punishes answers that claim zero residual risk. The correct answer always names what the control DOESN'T catch. For Ayesha, individual report checks don't catch cross-report bias. For a fraud-detection system, catching flagged cases doesn't catch unflagged false negatives. Name the gap.

Also: "Residual risk means the system is too risky to use." No — every system has residual risk. The question is whether it's acceptable and monitored, not whether it exists.

### QUICK CHECK

**Q:** A team says: "Our AI workflow is perfectly safe because a human reviews every output." What's missing from this claim?

**A:** Three things: (1) Evidence — how do they KNOW the review happens and catches the right things? (2) Residual risk — what can go wrong even when the review works perfectly? (A reviewer who approves everything, a bias the reviewer can't see, a subtle error in a 50-page document.) (3) Monitoring — who checks that the control is actually working, and how often?

---

## CONCEPT 21: Incident Response (First-Hour Procedure)

### THE SCENARIO

Maryam is a marketing coordinator. She used AI to draft a customer email campaign. The AI included a promotional offer [peishkash] — "30% off all services this month" — that the company never approved. Maryam didn't catch it in her review. The email went to 2,000 customers.

She discovers the mistake 20 minutes after sending. Her stomach drops. She has three instincts:

**Instinct 1:** "Delete the conversation with AI. If nobody finds the chat, nobody can blame me."

**Instinct 2:** "Wait and see if anyone notices. Maybe nobody will try to use the 30% offer."

**Instinct 3:** "Check if anyone opened the email yet. If the open rate is low, maybe I can recall it quietly."

All three instincts are wrong.

### WHAT WENT WRONG?

Maryam's instincts are about **self-protection** [apni hifazat]. The correct response is about **containment** [masle ko phailne se rokna] and **reporting** [batana].

### THE CONCEPT

Governance doesn't promise nobody will make a mistake. It promises the ability to **surface mistakes early enough to contain them.**

**Five common incident types:**

| Type | Example |
|------|---------|
| **Data** | Information entered a route that wasn't approved for it |
| **Output** | AI-assisted output went out with a serious error or harmful framing |
| **Action** | AI tool sent, changed, deleted, approved, or shared something it shouldn't have |
| **Security** | Untrusted content steered an AI system in an unintended way (prompt injection) |
| **Fairness** | A ranking/screening process disadvantaged people and review didn't catch it |

**The First-Hour Procedure** [pehle ghante ka tariqa — masla hone ke fauran baad kya karna hai]:

```
  ┌────────────────────────────────────────────────────────┐
  │  THE INSTINCT (WRONG)         THE MOVE (RIGHT)         │
  │                                                        │
  │  ✗ Delete it and tell       1. STOP THE SPREAD         │
  │    nobody                      Don't forward, repost,  │
  │                                or create new copies    │
  │  ✗ Wait and see if                                     │
  │    anything happens         2. RECORD THE FACTS        │
  │                                What happened, what     │
  │  ✗ Check whether               data/output/action,     │
  │    anyone noticed              which route, when, did  │
  │                                anything go onward?     │
  │                                                        │
  │                             3. REPORT PROMPTLY         │
  │  All three instincts           Through your org's      │
  │  turn a MISTAKE                incident path [masle    │
  │  into CONCEALMENT              ki report ka raasta].   │
  │  [chhupaana]                   For sensitive/regulated │
  │                                cases, timing may       │
  │                                matter LEGALLY.         │
  │                                                        │
  │                             4. STATE FACTS PLAINLY     │
  │                                Don't guess. Don't      │
  │                                defend yourself. The    │
  │                                incident owner needs    │
  │                                reliable facts.         │
  │                                                        │
  │                             5. FOLLOW THE INCIDENT     │
  │                                OWNER'S INSTRUCTIONS    │
  │                                Don't decide deletion,  │
  │                                notification, or        │
  │                                disclosure on your own. │
  │                                They may have legal,    │
  │                                contractual, security,  │
  │                                or forensic [saboot ki  │
  │                                jaanch wale]            │
  │                                consequences.           │
  └────────────────────────────────────────────────────────┘
```

**Why "delete the chat" is the WRONG first move:**

```
  What you THINK deleting does:
  ─────────────────────────────
  "The evidence is gone. Problem solved."

  What ACTUALLY happens:
  ─────────────────────
  1. Organizational records may still exist
     (Team/Enterprise have data export + audit)
  2. Vendor retention may still hold the data
     (Anthropic's 30-day default retention)
  3. The OUTPUT is already out (the email was sent)
  4. You've now DESTROYED evidence that an
     investigation or legal preservation may need
  5. You turned a MISTAKE into CONCEALMENT
     [chhupaana] — which is always worse

  Deleting your visible copy removes YOUR visibility,
  not the data.
```

**Near misses [hone hone se bach gaya] matter too.** A near miss shows where the process is confusing or the approved route is too hard, without the cost of a full incident. Report them. They're cheaper lessons.

**For managers:** How the organization treats the FIRST person who reports a good-faith mistake decides whether the next ten mistakes are reported or hidden. If reporting means punishment, people will hide problems.

### EXAM TRAP

> Wrong answer pattern: "Delete the AI conversation to remove the sensitive data, then report the incident"

This is the exam's MOST COMMON incident-response trap. Deleting first sounds like containment — "I'm removing the problem." But deleting removes YOUR visibility, not the data (organizational and vendor records persist). And it may destroy evidence needed for investigation or legal preservation. The correct order is ALWAYS: stop the spread → record → report → follow instructions. NEVER delete evidence first.

Second trap: "Wait to see if anyone notices before reporting." The clock matters more than the polish. In regulated environments, timing of incident reports may matter legally. Waiting turns a fast-containable mistake into a delayed crisis.

Third trap: "Fix it yourself — send a correction email, then report." Don't decide notification or correction on your own. The incident owner [jis ka zimma hai masle ko hal karna] may need to coordinate notification timing, legal review, or customer communication. Your correction email might make things worse.

### QUICK CHECK

**Q:** You accidentally pasted a client's confidential data into an AI chat. The first thing you should do is:

**A:** NOT delete the chat. Step 1: Stop the spread — don't copy, forward, or share the output. Step 2: Record the facts — what data, which route, when, did anything leave the conversation? Step 3: Report promptly through your organization's incident path. Step 4: State the facts plainly. Step 5: Follow the incident owner's instructions about deletion, notification, and next steps. The incident owner decides what happens to the data, not you.

---

## PART 5 RECAP: How These 4 Concepts Connect

```
PUTTING THE FOUR TOGETHER

  ┌──────────────────────────────────────────────────┐
  │  BEFORE THE WORKFLOW RUNS                        │
  │                                                  │
  │  Run all four questions in order                 │
  │  (Concept 18 — Ayesha's example)                 │
  │                                                  │
  │  Case → Data → Capability → People               │
  │  Each answer builds on the previous              │
  │                                                  │
  │  Case sets the GATE                              │
  │  Data sets the ROUTE                             │
  │  Capability sets the PERMISSION BOUNDARY         │
  │  People add the FAIRNESS CHECK                   │
  └──────────────┬───────────────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────────────┐
  │  WRITE IT DOWN                                   │
  │  (Concept 19 — Governance Record)                │
  │                                                  │
  │  One page. Five blocks. One owner.               │
  │  Hidden assumptions → visible decisions          │
  │  OPEN QUESTION where you don't know              │
  │  Share it with the right owners                  │
  └──────────────┬───────────────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────────────┐
  │  PROVE IT WORKS                                  │
  │  (Concept 20 — Evidence + Residual Risk)         │
  │                                                  │
  │  Success measure: what "working" looks like      │
  │  Failure threshold: what "broken" looks like     │
  │  Monitor: who watches, how often                 │
  │  Residual risk: what's left after controls work  │
  │                                                  │
  │  No control catches everything.                  │
  │  Name the remainder.                             │
  └──────────────┬───────────────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────────────┐
  │  WHEN SOMETHING GOES WRONG                       │
  │  (Concept 21 — Incident Response)                │
  │                                                  │
  │  Stop → Record → Report → State facts → Follow   │
  │                                                  │
  │  NEVER: Delete first, wait and see, fix alone    │
  │  ALWAYS: Clock > Polish. Report near misses too. │
  └──────────────────────────────────────────────────┘
```

**The lifecycle in one sentence:**
> Run all four questions → write the answers in one Governance Record → add evidence that proves the controls work → when something goes wrong, stop-record-report, never delete and hope.

---

## EXAM-LEVEL PRACTICE QUESTIONS

### Question 1 · D6 + D4

A product team runs all four governance questions on a new AI workflow that summarizes customer feedback for the executive team. The Case is classified as "appropriate with review." The Data tier is yellow. The connector is approved with read-only access. The team identifies customers as the affected population.

**What is the NEXT step?**

**A.** Begin using the workflow immediately — all four questions have been answered

**B.** Write the answers into a Governance Record, add the Evidence line, and share it with the workflow owner for review

**C.** Present the four answers in a meeting and get verbal agreement from the team

**D.** Run a six-month pilot [tajrubaat ka daur] before documenting anything

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Running the four questions is step 1. Writing the Governance Record (including the Evidence line) is step 2 — it turns the answers into a document that survives the meeting, has an owner, and includes re-check triggers. Sharing it with the workflow owner ensures assumptions about approval, route, and controls can be challenged.
>
> **Why A is wrong:** Answering the questions without documenting them creates Bilal's problem from the scenario — three months later, nobody remembers what was agreed. The answers need to be written down.
>
> **Why C is wrong:** Verbal agreement is invisible to the next person who manages the workflow. The exam always prefers written records over remembered conversations.
>
> **Why D is wrong:** A six-month undocumented pilot is drift waiting to happen. Document first, then run. The Governance Record takes 15 minutes — not six months.

---

### Question 2 · D6

Nadia's team has a Governance Record for their AI-assisted client reporting workflow. The Evidence line says: "The senior analyst reviews every report before it goes to clients."

Her manager asks: "What is the residual risk?"

Nadia says: "There is none — every report is reviewed."

**What is wrong with Nadia's answer?**

**A.** She should have said the residual risk is that AI might produce completely fabricated reports

**B.** She should have said the residual risk is that the senior analyst might approve a report with a subtle error that individual review doesn't catch, or that consistent phrasing bias across reports could survive report-by-report checks

**C.** She should have said the residual risk is that AI technology is still immature and unreliable

**D.** She should have added more reviewers to eliminate all residual risk

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Every control has limits. A single reviewer can miss subtle errors in complex reports. And checking reports one at a time doesn't catch PATTERNS across reports — like consistently harsher language for certain clients. These are realistic residual risks that naming allows the team to address (e.g., periodic cross-report review, second reviewer for high-value clients).
>
> **Why A is wrong:** If AI produced completely fabricated reports, the senior analyst's review should catch that — it's an obvious error, not a residual risk. Residual risk is what slips PAST the control, not what the control is designed to catch.
>
> **Why C is wrong:** Vague statements about AI maturity aren't useful residual-risk identification. Residual risk should be specific: what exactly could go wrong, for whom, despite the control working?
>
> **Why D is wrong:** You can't eliminate ALL residual risk. Adding reviewers reduces some risks but introduces others (diffusion of responsibility [zimmedari banti jaati hai — sab sochte hain doosra dekh lega], slower process). The goal is to NAME and MONITOR residual risk, not pretend it can reach zero.

---

### Question 3 · D6

Tariq, a data analyst, accidentally pastes a client's financial projections into an unapproved AI chat (personal free-tier account instead of the company's Enterprise account). He realizes the mistake immediately.

**What should Tariq do, in order?**

**A.** Delete the chat immediately to remove the data, then tell his manager what happened

**B.** Stop the spread (don't copy or share), record what data was involved and which route it went through, then report through his organization's incident path

**C.** Ask the AI to delete the conversation, confirm it's deleted, then continue working

**D.** Check whether anyone else has access to the chat, and only report if there's evidence of unauthorized access

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The first-hour procedure: (1) Stop the spread — don't copy, forward, or share anything from the conversation. (2) Record the facts — what data, which route (personal free-tier account), when, did any output leave the conversation? (3) Report promptly through the organization's incident path. Then follow the incident owner's instructions for next steps including deletion.
>
> **Why A is wrong:** "Delete first" removes Tariq's visibility but not the data — free-tier retention may still hold it. And deletion before reporting may destroy evidence needed for the organization's response. Stop → Record → Report. Not Delete → Report.
>
> **Why C is wrong:** Asking AI to "delete" a conversation is a wish, not a control. AI confirmations about data handling are not reliable technical controls. The organization's incident process determines what happens to the data.
>
> **Why D is wrong:** "Only report if there's evidence of unauthorized access" is the "wait and see" instinct. The incident has already occurred — data entered an unapproved route. Whether anyone else accessed it is a question for the incident owner, not a reason to delay reporting.

---

### Question 4 · D7 + D6

An operations team's AI workflow has been running for six months. The Governance Record shows a success measure of "zero factual errors reach customers" and a monitoring cadence [kitni baar jaanch hogi] of monthly sample reviews.

In month 5, Ayesha (the monitor) notices that the account managers have been approving reports faster — average review time dropped from 12 minutes to 2 minutes. No errors have reached customers.

**What should Ayesha investigate?**

**A.** Nothing — zero errors means the control is working

**B.** Whether the shorter review time means account managers are actually checking facts against dispatch records, or just clicking approve

**C.** Whether the AI model has improved enough that human review is no longer needed

**D.** Whether the team should switch to a different AI model that produces more accurate reports

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** A review that dropped from 12 minutes to 2 minutes is a signal. Either the reports are so good they need less checking (possible but worth verifying), or the gate is degrading — account managers are rubber-stamping [bina dekhe haan kar dena] instead of actually checking facts. "Zero errors" may mean the control is catching them, OR it may mean errors exist but aren't being caught because the review isn't thorough anymore. Ayesha should investigate whether the QUALITY of the review changed, not just the error count.
>
> **Why A is wrong:** "Zero errors = working" assumes the control is still functioning. But a control that's being skipped also produces "zero caught errors" — because nobody's looking. Absence of detected errors is not evidence of absence of errors.
>
> **Why C is wrong:** Even if the model improved, the accountability hasn't changed. The company still stays responsible for factual claims to customers. Model quality doesn't eliminate the need for human review on consequential output.
>
> **Why D is wrong:** Switching models doesn't address the review-quality concern. The issue is whether the human gate is actually functioning, not the AI's accuracy.

---

### Question 5 · D6

A team discovers that an AI-generated report sent to a government regulator [sarkari nizam ka zimmedar] contained an error in a compliance [qanoon ki pabandi] figure. The report was sent two days ago. The team lead's first reaction is: "Let's fix the number, send a correction, and not mention the original error."

**What is wrong with this approach?**

**A.** The correction should be sent by a more senior person, not the team lead

**B.** In regulated reporting, sending a quiet correction without disclosing the original error may itself be a compliance violation — the incident owner must decide the notification approach, which may involve legal and regulatory [sarkari qanoon se juda] obligations

**C.** The team should wait for the regulator to discover the error, since self-reporting creates unnecessary liability [zimmedari ka bojh]

**D.** The team should delete the original submission and resend a corrected version

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** In regulated environments, HOW you correct an error matters legally. A quiet correction without disclosing the original error could be worse than the error itself — it may constitute [banta hai] concealment or misrepresentation [galat tasveer pesh karna] to a regulator. Step 5 of the first-hour procedure: follow the incident owner's instructions. Don't decide notification, correction, or disclosure on your own. The legal, compliance, and regulatory implications are beyond the team lead's authority.
>
> **Why A is wrong:** The seniority of the sender isn't the main issue. The issue is that the entire APPROACH (quiet correction without disclosure) may be a violation. The incident owner — not just a more senior person — needs to decide the approach.
>
> **Why C is wrong:** Waiting for discovery is the "wait and see" instinct. In regulated reporting, failure to self-report known errors within required timeframes can make the penalty worse. Proactive reporting is almost always better.
>
> **Why D is wrong:** Deleting an original submission to a regulator is evidence destruction. Regulated submissions typically have audit trails. Deleting and resending turns an error into potential fraud.

---

### Question 6 · D6

A company's first AI incident report comes in: an employee pasted customer data into a personal AI account. The manager's response is to publicly reprimand [sab ke saamne daantna] the employee in a team meeting and require them to write an incident report.

**What is the likely consequence of this response for FUTURE incident reporting?**

**A.** Other employees will be more careful with customer data, preventing future incidents

**B.** Other employees will hide similar mistakes rather than report them, making future incidents invisible and harder to contain

**C.** Other employees will request formal AI training, improving overall compliance

**D.** The reprimanded employee will become the team's AI compliance expert

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** How the organization treats the FIRST person who reports a good-faith mistake decides whether the next ten mistakes are reported or hidden. Public reprimand teaches everyone: "If you report a mistake, you'll be humiliated." The rational response is to hide future mistakes — delete the chat, wait and see, quietly fix it alone. The organization then loses visibility into the behavior it needs to understand. Accountability matters, but so does a reporting path people can actually use.
>
> **Why A is wrong:** Fear-based compliance is brittle. People under fear don't become more careful — they become better at hiding mistakes. The incidents don't stop; they become invisible.
>
> **Why C is wrong:** Public reprimand doesn't motivate training requests — it motivates avoidance. People won't volunteer for training that's associated with punishment.
>
> **Why D is wrong:** This is not a realistic outcome. Being publicly reprimanded doesn't create expertise — it creates resentment and fear.

---

*Part 5 complete. Say "next" when you're ready for Part 6: Making Governance Survive Real Work (the final part).*
