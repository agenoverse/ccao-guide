---
type: Document
title: "Governance, Risk & Responsible Use: Exam Simulation (22 Questions)"
description: "Hard-difficulty 22-question exam simulation covering governance, risk, privacy, responsible use, and incident response."
status: stable
generated:
  by: human:shazilk-dev
  at: "2026-10-05T12:40:00Z"
sources:
  - id: src-governance-risk-responsible-use-exam-simulation-22q
    title: "Governance Risk Responsible Use — Exam Simulation 22Q source"
    resource: "src/Governance Risk Responsible Use - EXAM SIMULATION 22Q.md"
ksor:
  audience: [public]
  owner: human:shazilk-dev
  approval:
    by: human:shazilk-dev
    at: "2026-10-05T17:45:05+05:00"
order: 99
---


> [!warning] Exam Rules: follow them strictly
> - **Timer: 26 minutes total.** Start it before Question 1.
> - **No going back.** Once you open the next question, the last answer is locked.
> - **Do not open any answer** until all 22 are done. Write your answers on paper.
> - **90-second hard limit** per question. At 90 seconds, choose and move on.
> - Read the **last sentence first**, then the options, then the scenario.
> - Multi-select questions say **(Select TWO)**. Both picks must be right to score the point.

> [!info] Coverage (Domain 6: Governance, Risk & Responsible Use)
> **The Case** (classification, deciding factor, gate): Q1, Q4, Q8, Q20
> **The Data** (tiers, identifiers, redaction, route, purpose, controls): Q2, Q3, Q6, Q7, Q9, Q13
> **The Capability** (Skills, connectors, injection, escalation): Q5, Q10, Q14, Q17
> **The People** (exclusions, bias, disclosure): Q11, Q12, Q18, Q19
> **Incidents, drift, policy, re-checks**: Q15, Q16, Q21, Q22

---

## Question 1

A family-run funeral home wants Claude to draft the personal follow-up letter each bereaved family receives a month after the service, using the arranging director's notes. A draft is easy to rewrite, and no money or legal matter depends on it. The team has classed the use as appropriate with review.

**Which screen is the deciding factor?**

- **A.** Reversibility, since a letter that has been posted cannot be taken back.
- **B.** Consequence of error, since a wrong name or date could hurt a family.
- **C.** Human judgment and empathy, since the relationship is the point of the letter.
- **D.** Accountability, since the funeral director signs every letter that goes out.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** Use the deciding-factor test: *"If one of the four answers changed, which change would move this into a different classification?"* The scenario has already removed the other pressures: easy to rewrite, no money, no legal matter. What keeps a person involved is the **relationship**. The course uses this exact type of case: *"For a condolence message, the deciding factor may be the human relationship, even though the message is easy to rewrite."*
>
> **Why the others are wrong:**
> - **A**: True of every sent letter, so it does not explain why *this* letter needs a person. The draft stage is reversible, and the gate sits before posting.
> - **B**: A wrong date is a real risk, but the scenario frames the stakes as low. Spelling errors alone would not demand a human's *personal* involvement.
> - **D**: Accountability is always present. It is the deciding factor for a billing reply, not for a relationship letter.
>
> **Concept:** 1.2 (Deciding factor) · **Obj:** D6.1
> **Words:** *bereaved* = a family that has just lost someone who died.

---

## Question 2

A water utility's billing team wants Claude to reconcile 40 disputed customer accounts against meter readings and payment records. Each reconciliation must name the account it belongs to. Customer account data is yellow under the utility's policy.

**What is the most appropriate approach?**

- **A.** Confirm the workspace route is approved for customer account data, then proceed.
- **B.** Strip the account numbers first, then reconcile using meter readings alone.
- **C.** Run the reconciliation in the code-execution sandbox so the data stays isolated.
- **D.** Decline the task, since yellow-tier data cannot enter any AI tool at all.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** Ask the discriminator: *does the task need the identifiers, or only the pattern?* Here it **needs** them, because reconciling an account requires knowing which account. So redaction is not the control. The move is to **confirm the route** is approved for this data and purpose.
>
> **Why the others are wrong:**
> - **B**: *"Redaction that breaks the task."* The result looks safe and is useless.
> - **C**: *"A sandbox is an execution boundary, not an approval boundary."* It limits where code runs. It does not authorise the data to enter.
> - **D**: Yellow means **check first or add a control**, not "never". This is the abandonment option.
>
> **Concept:** 2.2, 2.3, 2.5 (Discriminator; redaction failure; sandbox ≠ authorisation) · **Obj:** D6.2
> **Words:** *reconcile* = check two sets of records against each other until they agree.

---

## Question 3 · (Select TWO)

A garden-centre chain's marketing analyst wants Claude to find which products are bought together across the whole chain. The loyalty-card export has these columns:

| Column | Example |
|---|---|
| loyalty_id | LC-208817 |
| full_name | Rosa Bentley |
| email | rosa.b@… |
| home_postcode | KT12 4QX |
| date_of_birth | 1961-03-09 |
| basket_lines | compost 50L; trowel; tomato feed |
| store | Walton |

**Which TWO steps are most appropriate before upload? (Select TWO)**

- **A.** Keep postcode and date of birth, since neither is a name and both add detail.
- **B.** Remove name, email, postcode and date of birth; the task needs only baskets.
- **C.** Upload the full export in an incognito chat so it stays out of chat history.
- **D.** Replace loyalty IDs with new codes, and keep no list that links them back.

> [!success]- Answer & Explanation
> **Correct: B and D**
>
> **Why B and D are right:** Product pairings need **the pattern, not the people**, so remove every field the task does not need (B). The loyalty ID is the trap. It still links to a real customer in the CRM. Swapping it for codes that **nobody can map back** (D) is what stops the file being merely *pseudonymized*.
>
> **Why the others are wrong:**
> - **A**: *Partial redaction.* Postcode plus date of birth can identify a person *"as reliably as a name."* The chain-wide task does not need them anyway.
> - **C**: Incognito affects history and memory. It does not decide whether the data was allowed in, and it still has retention.
>
> **Concept:** 2.2, 2.3 (Discriminator; partial redaction; pseudonymized) · **Obj:** D6.2

---

## Question 4

A driving school wants Claude to draft weekly progress reports to learners from instructor notes. Each report tells the learner whether they are ready to book their driving test, and a wrong "ready" costs them a test fee. Reports go out every Friday.

**Which gate wording is a defined gate?**

- **A.** "The office manager reviews every progress report before it is sent each Friday."
- **B.** "Each instructor checks the readiness claims in each report against their lesson log."
- **C.** "Readiness claims are checked against the lesson logs before the Friday send goes out."
- **D.** "Each instructor checks readiness claims against their lesson log before the Friday send."

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** A defined gate names **WHO** (the instructor, the role that holds the knowledge), **WHAT** (the readiness claims against the lesson log), and **WHEN** (before the send, while it can still be undone). D is the only option with all three.
>
> **Why the others are wrong:**
> - **A**: Has who and when, but *"reviews every report"* names no specific risk. The office manager also cannot verify driving readiness, because she was not in the car.
> - **B**: Who and what, but **no when**. A check after Friday's send is not a gate.
> - **C**: What and when, but **no who**. Passive voice ("are checked") is how the gate goes unstaffed.
>
> **Exam tip:** When all four options sound reasonable, check each one for WHO, WHAT and WHEN. One of them is usually missing.
>
> **Concept:** 1.3 (Defined gate) · **Obj:** D6.1, D2

---

## Question 5

A music festival's bookings team uses an agent from a well-known vendor. It reads every incoming email from artists' agents, drafts replies, sends them, and updates the booking calendar. The vendor's package passed a security scan.

**Which control matters most?**

- **A.** Rely on the vendor's reputation and the clean scan, and review the logs weekly.
- **B.** Keep sending replies and calendar changes behind a named human check.
- **C.** Limit the agent to emails from agents already in the festival's contacts.
- **D.** Add an instruction telling the agent to ignore commands found in emails.

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** *"Who wrote the tool and who wrote the content are two different trust questions."* This agent reads **outside content** *and* takes **consequential actions**, the combination where *"risk rises sharply."* Default: keep send, publish and edit behind a defined human gate *"whoever published the tool."*
>
> **Why the others are wrong:**
> - **A**: Trusted publisher, but untrusted content. The course calls this *"the quadrant people miss."* A scan *"is not approval,"* and weekly logs catch problems after the email has gone.
> - **C**: Narrows the senders, but a known contact's email can still carry forwarded or hostile text. The actions are still unguarded.
> - **D**: An instruction is a wish, not a control. Prompt injection is designed to beat exactly that.
>
> **Concept:** 3.3 (Prompt injection; two axes of capability risk) · **Obj:** D6.1, D6.3

---

## Question 6

A cinema chain collected customers' mobile numbers to send booking confirmations. Marketing now wants Claude, inside the chain's approved workspace, to draft personalised promotional texts using those numbers and each customer's viewing history.

**Which question must be answered before this goes ahead?**

- **A.** Whether the approved workspace is cleared to hold marketing material.
- **B.** Whether mobile numbers sit in the yellow tier or the red tier of the policy.
- **C.** Whether the purpose the numbers were collected for covers promotional texts.
- **D.** Whether each promotional text should say that Claude helped to draft it.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** *"Data arrives with the reason it was collected attached."* Numbers given for **booking confirmations** are now being used for **marketing**, a new purpose. This is the course's gym example in a new setting: *the objection is not about the phone numbers, it is about the promise made when they were collected.* That question belongs to the data owner.
>
> **Why the others are wrong:**
> - **A**: The scenario already says the workspace is approved. The route is not the open question.
> - **B**: The tier does not settle it. Purpose applies *"at any tier."*
> - **D**: Disclosure is a People question for later. It cannot fix a use the data was never collected for.
>
> **Concept:** 2.4 (Purpose) · **Obj:** D6.2

---

## Question 7 · (Select TWO)

A cosmetics brand's product associate works on her company's Claude Team plan. She wants to paste a supplier's confidential formula sheet into Claude to compare ingredient costs, and says: "I'll use an incognito chat, so it won't be kept."

**Which TWO statements are correct? (Select TWO)**

- **A.** Incognito chats still have a default retention period; they are not zero-retention.
- **B.** Incognito answers the authorisation question, so no route check is now needed.
- **C.** Incognito keeps the chat out of history and memory but does not authorise it.
- **D.** Incognito can be opened inside the formulation Project to keep all the files together.

> [!success]- Answer & Explanation
> **Correct: A and C**
>
> **Why A and C are right:** *"Incognito is not zero retention"*: there is a 30-day default retention (A). Privacy controls *"answer narrower questions"*. Incognito deals with history and memory, not with *whether the data was permitted to enter* (C). A supplier's confidential formula is **third-party confidential information, red tier**, so the route must be approved first.
>
> **Why the others are wrong:**
> - **B**: The exact trap the course names: *"treating privacy mode as permission."*
> - **D**: Product fact: *"Incognito is available only outside Projects."*
>
> **Concept:** 2.5, 2.6 (Controls ≠ authorisation; Claude incognito facts) · **Obj:** D6.2, D3

---

## Question 8

A care home wants Claude to read the night staff's notes after a resident falls and decide whether a doctor's visit is needed.

**Which classification is most appropriate?**

- **A.** Inappropriate as the decision-maker; it may summarise notes for the nurse who decides.
- **B.** Appropriate with review, provided the night nurse reads each of its decisions before acting.
- **C.** Fully appropriate, since the night staff's notes hold everything the decision needs.
- **D.** Inappropriate, so Claude should not be used anywhere in the fall-reporting process.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** A clinical determination about a vulnerable person is a *"final medical determination"*. A qualified person must make and own it, because consequence and accountability *"cannot be repaired by review."* But *"AI may support that work. It should not become the decision-maker."*
>
> **Why the others are wrong:**
> - **B**: The trap. A review gate placed after the AI has *decided* still leaves the AI as decision-maker, and a busy night nurse will likely accept it.
> - **C**: Reckless. Consequence is high and harm may be irreversible.
> - **D**: Abandonment. Summarising notes for the nurse is a safe, useful role.
>
> **Concept:** 1.1 (Three answers; inappropriate ≠ no AI at all) · **Obj:** D6.1

---

## Question 9

A regional bus operator's HR team wants Claude to find themes in last year's disciplinary cases. They removed employee names but kept depot, job title and incident date. Two depots each have only one night-shift supervisor.

**What is the most accurate assessment?**

- **A.** The names are gone, so the file is anonymized and can be treated as green.
- **B.** The task needs the names, so removing them has broken the theme analysis.
- **C.** Only the upload route needs checking, since the direct identifiers are gone.
- **D.** Depot, role and date together can still identify those supervisors' cases.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** **Partial redaction**: *"a rare job title, an exact date, a region … can identify somebody as reliably as a name."* A one-person role at a named depot is the same as naming that person. Disciplinary records are sensitive, so the file has **not** dropped a tier.
>
> **Why the others are wrong:**
> - **A**: Removing names does not equal anonymization. The test is your organization's standard, not "no names visible".
> - **B**: Themes need the pattern, not the names. Removing names was the right first move. It just was not enough.
> - **C**: Skips the remaining identification problem and jumps to the route.
>
> **Concept:** 2.3 (Partial redaction) · **Obj:** D6.2

---

## Question 10

At an architecture practice, a colleague shares a Skill from a public forum that "tidies drawing schedules". It has worked well for her. Your Claude sessions have a Drive connector with write access to every live project folder.

**What is the most appropriate action?**

- **A.** Enable it for a one-week trial and watch closely what it does to schedules.
- **B.** Read the package files, then escalate with the reach concern named.
- **C.** Enable it, since a Skill only uses the tools listed in its definition.
- **D.** Narrow the Skill's scopes to the schedules folder, then enable it.

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** Unknown **source**, and a Skill's **reach** is *"everything that session can reach"*, which here is write access to every live project. **Reading the files** is *"the only way to know what it does."* Then escalate with the specific question, or decline it.
>
> **Why the others are wrong:**
> - **A**: *"Enabling it and watching for a week grants the access before the risk is understood."*
> - **C**: Backwards. A tool list **pre-approves** tools so they run without prompting. *"It does not narrow what the Skill can touch."*
> - **D**: The strongest trap. **Skills have no scopes**, only connectors do. *"A Skill has no such dial."*
>
> **Concept:** 3.1, 3.2 (Skills have no scope dial; enable / escalate / decline) · **Obj:** D6.3, D5

---

## Question 11

Read the Governance Record extract below.

> *Workflow: emergency hardship grants. Owner: grants manager. THE CASE: appropriate with review; deciding factor: consequence to applicants. Gate: a grants panel member checks each shortlisted application against the eligibility rules before any award is confirmed. THE DATA: red, because applications include income and health details; route: the charity's Enterprise workspace, approved in writing by the data-protection lead in May. THE CAPABILITY: no connectors or Skills; the grants officer uploads files; Claude only drafts. THE PEOPLE: applicants are affected; Claude ranks each month's ~200 applications and the panel reviews the top 30 for fairness; disclosure: the application form states that AI helps screen applications. THE EVIDENCE: success measure: panel reviews within five working days; failure threshold: any eligible applicant wrongly refused; monitored monthly by the grants manager; residual risk: inconsistent judgments between panel members.*

**Which block contains the most serious gap?**

- **A.** The Case block
- **B.** The Data block
- **C.** The People block
- **D.** The Evidence block

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** About 170 applicants a month are removed by the ranking, and **nobody ever looks at them**. *"If AI systematically removes a group, nobody notices when the review looks only at what remains."* The control is to **sample exclusions as well as inclusions**. This is a hardship decision about access and finance, exactly where the course says it matters most.
>
> **Why the others are wrong:**
> - **A**: The gate is defined (who, what, before award). The problem is *which* applications reach it.
> - **B**: Tier is correct (red), the route is approved in writing, and the approver is named. This block is solid.
> - **D**: Looks tempting, because the failure threshold ("eligible applicant wrongly refused") can never be detected without reviewing exclusions. But that is a *symptom* of the People gap, not a separate root cause.
>
> **Exam tip:** In record questions, several blocks may have small issues. Pick the **root** gap, the one that, once fixed, fixes the others.
>
> **Concept:** 4.1, 6 (Look at who was excluded; Governance Record) · **Obj:** D6.4

---

## Question 12 · (Select TWO)

A private nursery's manager uses Claude to draft each child's termly development letter to parents from the key worker's observations. The key worker reviews and signs each letter. The nursery has checked, and no law, policy or contract says anything about disclosing AI use.

**Which TWO statements are correct? (Select TWO)**

- **A.** No rule requires it, so no disclosure is needed and the question is closed.
- **B.** Ask whether parents' understanding of the letter would change if they knew.
- **C.** Lean towards disclosure, since parents read these as the key worker's own view.
- **D.** Add an AI label to every nursery document, including menus and staff rotas.

> [!success]- Answer & Explanation
> **Correct: B and C**
>
> **Why B and C are right:** Disclosure follows **rules first, judgment second.** The rules are silent, so apply the judgment test (B): *would AI involvement reasonably change this person's understanding of the work or the relationship?* A child's development letter is **relational**: parents read it as the key worker's personal assessment. And *"when no rule settles it and the case is ordinary, disclose rather than conceal"* (C).
>
> **Why the others are wrong:**
> - **A**: Stops after step one. A silent rulebook moves you to judgment. It does not close the question.
> - **D**: Over-reach. *"Routine tooling does not always need a label,"* and a habit that labels menus will soon be dropped.
>
> **Concept:** 4.2 (Disclosure: rules first, judgment second) · **Obj:** D6.4

---

## Question 13

An online tutoring company replaced every student's name with a code such as S-014 before uploading exam scores to Claude. The operations manager keeps the spreadsheet linking codes to students, so results can be sent home. A colleague now wants to share the coded file with a partner school as "anonymous data".

**Which statement is correct?**

- **A.** The file is pseudonymized and keeps its tier while the linking sheet exists.
- **B.** The file is anonymized, because no student names appear anywhere in it.
- **C.** The file becomes anonymized once it is shared without the linking sheet.
- **D.** The file can drop a tier if the linking sheet is stored in another folder.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** *"Does anyone still hold the list that maps Customer 17 back to a real person? If yes, the data is pseudonymized … It keeps its tier."* Pseudonymized data *"must not be stored, reused, or shared as if it were anonymous."*
>
> **Why the others are wrong:**
> - **B**: "No names visible" is relabeling, not anonymization.
> - **C**: The key still exists inside the company. Sending the file without it does not destroy it.
> - **D**: A different folder is still the same company holding the key.
>
> **Concept:** 2.2, 2.3 (Pseudonymized ≠ anonymized) · **Obj:** D6.2

---

## Question 14

A telecom company's billing team finds a Skill on the internal list. It was built last year by the marketing analytics team for anonymized campaign data. Billing wants to run it on customer billing records, which carry account numbers.

**What is the most appropriate next step?**

- **A.** Enable it, since an internal team built it and it is already on the company list.
- **B.** Ask Claude to read the Skill's files and certify that it is safe for billing data.
- **C.** Decline it, since Skills built by other teams are never suitable for billing data.
- **D.** Confirm with marketing analytics what it accesses, and check it against current policy.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** *"Internal does not mean vetted."* It was built *"for data less sensitive than yours"* and possibly *"against a policy that has since changed."* The fix is to *confirm with the publisher what it accesses and why, and check its reach still matches current policy.*
>
> **Why the others are wrong:**
> - **A**: The hardest source case. *"Internal feels vetted without being vetted."*
> - **B**: You can ask Claude to **find concerns**, never to **certify** something as safe.
> - **C**: An overreaction. "Never" ignores that a check could clear it.
>
> **Concept:** 3.1 (Internal does not mean vetted) · **Obj:** D6.3

---

## Question 15 · (Select TWO)

A theme park's guest-services associate realises she pasted a guest's passport scan and card details into her personal Claude account to draft a refund letter.

**Which TWO actions belong in her first hour? (Select TWO)**

- **A.** Delete the chat at once, so the card details are no longer in her account.
- **B.** Ask Claude to forget the guest's data, then check that it no longer appears.
- **C.** Record what was pasted, into which account, and at what time it happened.
- **D.** Report it through the park's incident path without waiting for every detail.

> [!success]- Answer & Explanation
> **Correct: C and D**
>
> **Why C and D are right:** The first-hour procedure is **Stop → Record → Report → State facts → Follow instructions.** Recording the facts (C) and reporting promptly (D) are steps 2 and 3. *"Do not wait for a perfect explanation"*, because timing may matter legally.
>
> **Why the others are wrong:**
> - **A**: The instinct the course crosses out. *"Deleting your copy removes your visibility, not the data, and it turns a mistake into concealment."* Deletion is the incident owner's decision.
> - **B**: An instruction to forget is a wish, not a control. It is deletion under another name.
>
> **Concept:** 7 (First-hour procedure) · **Obj:** D6.3

---

## Question 16

A quarterly audit at a port authority finds that many staff paste shipping notices into personal chatbot accounts to translate them. The approved translation tool needs an IT ticket and takes about three days to grant access.

**What is the most appropriate response?**

- **A.** Block personal AI sites on the network and send all staff a policy reminder.
- **B.** Pass the names of staff involved to their managers for performance follow-up.
- **C.** Find out what makes the approved route harder, and fix that friction first.
- **D.** Accept the workaround, since translating shipping notices is low-risk work.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** This is **shadow AI**, and it grew because *"the approved path takes ten steps and the unapproved path takes one."* The rule is to **reduce the friction, not the tooling.** *"Fixing that friction reduces more risk than another reminder email."*
>
> **Why the others are wrong:**
> - **A**: Blocking plus a reminder ignores the cause. People will find the next easy route.
> - **B**: *"Audit the process, not the person."* Turning the audit into a performance review means people hide their work next time.
> - **D**: Excuses the violation. The course says friction is *"not a reason to excuse policy violations."* Shipping notices may also contain commercial data.
>
> **Concept:** 8.2, 8.3 (Audit the process; friction rule; shadow AI) · **Obj:** D6.3

---

## Question 17

A language school's office associate wants to enable a timetable connector. It requests write access to the whole shared drive, but the workflow only needs to read timetables.

**Which escalation message is strongest?**

- **A.** "This connector looks useful and safe, and the teachers like it. Can you approve it?"
- **B.** "It wants write access to the drive, but we only read timetables. Can that be narrowed?"
- **C.** "Several teachers have asked for the timetable connector. Can I go ahead and enable it?"
- **D.** "I have some doubts about this connector. Could security review it when they have time?"

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** *"A good escalation names the unresolved question."* B states the specific gap (write access vs a read-only need) and asks the reviewer one decidable question. It also points towards **least privilege / read-only**.
>
> **Why the others are wrong:**
> - **A**: *"I think this is fine. Can you approve it?"* is the course's example of a **weak** escalation: it asks for a verdict.
> - **C**: Popularity is not a reason, and it asks permission without naming any concern.
> - **D**: Sounds careful but names nothing, so the reviewer has nothing specific to decide.
>
> **Concept:** 3.2, 4.3 (Escalate the question, not a verdict) · **Obj:** D6.3

---

## Question 18

A university research office asks Claude to read 85 grant applications and "rank the most promising early-career researchers" for a panel, which will read the top 20.

**Leaving aside the 65 applications the panel will not read, what is the main concern with the request itself?**

- **A.** Claude cannot read grant applications accurately enough to rank them.
- **B.** Ranking is arithmetic, so the order should be produced by code execution.
- **C.** Applicants must consent before their applications are read by Claude.
- **D.** "Most promising" carries an unstated standard the ranking will inherit.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** *"Bias does not only arrive with the data. It can enter through the prompt, through the way the task was framed."* The course's own example: *"A request to rank 'the strongest candidates' carries an unstated standard, and the output inherits it."*
>
> **Why the others are wrong:**
> - **A**: An unsupported claim about capability. Reading applications is not the problem.
> - **B**: "Promising" is a judgment, not a sum. Code execution would only calculate the hidden standard more precisely.
> - **C**: Possibly a purpose or policy question, but no rule is given. It is not the concern the request's *wording* creates.
>
> **Concept:** 4 (Bias through framing) · **Obj:** D6.4, D2

---

## Question 19

An auction house wants an AI notetaker to join valuation calls with private sellers. The calls cover what items are worth and the sellers' personal circumstances. The recording route has been approved.

**Which setup is most appropriate?**

- **A.** Announce the notetaker at the start, and review the summary before it circulates.
- **B.** Let it join quietly, since it records only what participants have already said.
- **C.** Announce it, then circulate its summary at once while the call is still fresh.
- **D.** Review the summary before it circulates; announcing it is optional on short calls.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** The notetaker *"touches all four at once."* **Case:** appropriate with review, because a summary that misattributes a commitment is a real error. **People:** everyone in the call is affected, so *"announce it at the start."* With the route already approved, A covers both remaining needs.
>
> **Why the others are wrong:**
> - **B**: A seller who finds out later *"will not experience it as routine tooling."* Some places also require consent to record.
> - **C**: Announced, but **no review**. A valuation misattributed to the house is a costly error.
> - **D**: Reviewed, but disclosure does not depend on call length. Everyone in the room is still affected.
>
> **Concept:** 4.2 (The notetaker in the meeting) · **Obj:** D6.4

---

## Question 20

At a grocery-delivery firm, Claude drafts refund decisions and a customer-care lead approves them. Last quarter she approved all 1,200 drafts, taking about six seconds each, and no refund complaints were received.

**What should the risk owner conclude?**

- **A.** The gate is working well, because no refund complaints were received.
- **B.** Ask whether the review is unnecessary, badly placed, or impossible to perform.
- **C.** Remove the gate, because full approval shows the drafts are reliable.
- **D.** Add a second reviewer so that every refund decision gets two approvals.

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** *"Review quality matters more than review volume."* A 100% approval rate at six seconds each is the signature of a rubber stamp. The course gives the exact question: *"If reviewers approve everything, ask whether the control is unnecessary, badly placed, or impossible to perform."*
>
> **Why the others are wrong:**
> - **A**: No complaints is not evidence. Customers who were under-refunded may simply leave.
> - **C**: Jumps to one of the three possible answers without investigating.
> - **D**: Adds volume, not quality. Two six-second glances are still glances.
>
> **Concept:** A.1 (Review quality; evidence) · **Obj:** D6.3, D2

---

## Question 21 · (Select TWO)

A car dealership's Governance Record for its customer-query assistant was approved last year. Since then the vendor has moved the assistant to a newer model family, and the team has added a connector that lets it book test drives in the sales calendar. The manager says: "It was approved. There is nothing to re-check."

**Which TWO actions are correct? (Select TWO)**

- **A.** Re-check the Capability block, since the new connector can take actions.
- **B.** Skip the re-check, since the workflow's owner and purpose have not changed.
- **C.** Wait for the annual review date that is already set in the record.
- **D.** Re-check the Case block, since a new model family can change the output.

> [!success]- Answer & Explanation
> **Correct: A and D**
>
> **Why A and D are right:** *"Calendar reminders help, but change is the stronger trigger."* Two triggers fired: a **model family** change (re-check the Case: does the classification still hold?) and a **new connector with an action** (re-check the Capability: source, reach, actions). *"'Approved last year' is not a reason to skip review if the thing that was approved is no longer the same thing."*
>
> **Why the others are wrong:**
> - **B**: Owner and purpose are not the triggers. The model and the capability are.
> - **C**: The date-based review is the weaker control. Change triggers act now.
>
> **Concept:** 8.5 (Re-check triggers) · **Obj:** D6.3

---

## Question 22

An independent brewery has no AI policy. Staff have started using AI for supplier emails, and the owner tells the associate to "sort out some rules for AI".

**What is the most appropriate action?**

- **A.** Write an AI policy and send it to staff as the brewery's official rules.
- **B.** Ask Claude to write the policy, since it knows standard governance practice.
- **C.** Draft an interim one-page proposal and ask the owner to endorse it.
- **D.** Tell staff to stop using AI until a compliance adviser has been hired.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** *"Do not invent one and present it as official. Write an interim proposal for the right owner to endorse."* It covers approved routes, sensitive data types, the human-gate rule, the review rule for new tools, and one named contact.
>
> **Why the others are wrong:**
> - **A**: The associate is not the policy owner. Calling it "official" claims authority they do not have.
> - **B**: *"An AI assistant … is not your policy owner."* It can help draft, not decide.
> - **D**: Abandonment, while a safe interim path exists.
>
> **Concept:** 8.4 (When there is no AI policy) · **Obj:** D6.3

---

## Answer Key (check only after finishing)

> [!abstract]- Full Answer Key
> | Q | Ans | Concept | Q | Ans | Concept |
> |---|---|---|---|---|---|
> | 1 | C | Deciding factor (empathy) | 12 | B, C | Disclosure: rules → judgment |
> | 2 | A | Needs identifiers → confirm route | 13 | A | Pseudonymized ≠ anonymized |
> | 3 | B, D | Remove fields; break the link | 14 | D | Internal ≠ vetted |
> | 4 | D | Defined gate (who/what/when) | 15 | C, D | First-hour procedure |
> | 5 | B | Injection: gate the actions | 16 | C | Fix the friction |
> | 6 | C | Purpose of collection | 17 | B | Strong escalation |
> | 7 | A, C | Incognito ≠ permission | 18 | D | Bias via framing |
> | 8 | A | Inappropriate as decider | 19 | A | Notetaker: announce + review |
> | 9 | D | Partial redaction | 20 | B | Review quality |
> | 10 | B | Skill has no scope dial | 21 | A, D | Change-based re-check |
> | 11 | C | Review the exclusions | 22 | C | Interim policy proposal |
>
> **Answer spread (single-answer items):** A ×4 · B ×4 · C ×5 · D ×4

## Score Yourself

| Score | Meaning |
|---|---|
| 20–22 | Exam-ready on D6. Move to the next course. |
| 16–19 | Pass level (≈72%+). Review only the concepts you missed. |
| 12–15 | Borderline. Re-read the missed sections, then retake in 3 days. |
| ≤ 11 | Content gap. Re-read Sections 1–4 (the four questions) before retrying. |

**For each wrong answer, tag the cause:**
- **[C] Content**: I did not know the concept.
- **[T] Time / reading**: I knew it but misread the question or ran out of time.

> [!tip] Next step
> Most D6 traps are one of three: **a privacy feature treated as permission** (Q2, Q7), **a gate missing WHO, WHAT or WHEN** (Q4, Q20), or **reviewing only what AI selected** (Q11). If you missed two or more from one group, that is your weak spot.
>
> My score: ___ / 22  ·  Time used: ___ min  ·  [C] count: ___  ·  [T] count: ___
