---
type: Document
title: "Governance, Risk & Responsible Use: Complete Mind Map"
description: "Exam-focused study guide covering AI governance principles, risk categories, responsible use policies, and regulatory obligations."
status: stable
generated:
  by: human:shazilk-dev
  at: "2026-09-29T03:22:49Z"
ksor:
  audience: [public]
  owner: human:shazilk-dev
  approval:
    by: human:shazilk-dev
    at: "2026-09-29T03:22:50Z"
order: 90
---

> **Goal:** Master the four-question framework, the three-answer system,
> and every governance concept the exam tests. This is the "judgment" course.
> It decides whether you pass Domain 6 of the exam.

---

## THE ENTIRE COURSE IN ONE SENTENCE

> **Classify before you act. If the answer is in the middle, name the commitment. Then write down why.**

---

## THE MASTER FRAMEWORK: FOUR QUESTIONS, THREE ANSWERS EACH

```
Before AI does MEANINGFUL work, run these four:

  1. THE CASE        Can AI do this work?
  2. THE DATA        Can this information go in?
  3. THE CAPABILITY  Can I turn this tool/Skill/connector on?
  4. THE PEOPLE      Could this affect someone unfairly or require disclosure?

Each question gets ONE of THREE answers:

  +-------------------+---------------------------+-------------------+
  |    FULLY OK       |    OK WITH A COMMITMENT   |   NOT OK          |
  +-------------------+---------------------------+-------------------+
  | Costs nothing     | THE MIDDLE ANSWER:        | Stop here         |
  |                   | You must NAME something   |                   |
  |                   | specific (reviewer,       |                   |
  |                   | control, route, etc.)     |                   |
  +-------------------+---------------------------+-------------------+

  The MIDDLE answer is where professional judgment lives.
  Forcing yes/no produces recklessness AND abandonment.
```

### The Four Questions with Their Three Answers

| Question              | Answer 1            | Answer 2 (Middle)                  | Answer 3                     |
| --------------------- | ------------------- | ---------------------------------- | ---------------------------- |
| **1. The Case**       | Fully appropriate   | Appropriate WITH REVIEW            | Inappropriate                |
| **2. The Data**       | Green (go)          | Yellow (check first / add control) | Red (not through this route) |
| **3. The Capability** | Enable              | Escalate for review                | Decline                      |
| **4. The People**     | Decide and document | Disclose                           | Escalate the question        |

---

## QUESTION 1: THE CASE - Can AI Do This Work?

This comes FIRST. If AI shouldn't do the work at all, data/tools/people questions don't matter.

### The Four Delegation Criteria (Screens)

| Screen                     | Plain-English Question                                                      |
| -------------------------- | --------------------------------------------------------------------------- |
| **Reversibility**          | If the output is wrong, can we catch and undo it before harm?               |
| **Consequence of error**   | If wrong: trivial, expensive, harmful, regulated, or irreversible?          |
| **Human judgment/empathy** | Does the task depend on relationship, care, or context a person should own? |
| **Accountability**         | Who is answerable? Can that person really review and own what AI produced?  |

**Do NOT score and add up.** Use them to show WHY the case belongs in one category.

### The Three Classifications

```
FULLY APPROPRIATE                   APPROPRIATE WITH REVIEW
+-------------------------------+   +-------------------------------+
| Low consequence               |   | AI is useful BUT a specific   |
| Reversible                    |   | human check must happen       |
| Easy to review as you go      |   | BEFORE output is used/sent    |
|                               |   |                               |
| Examples:                     |   | Examples:                     |
| - Internal FAQ from approved  |   | - Customer billing reply      |
|   sources                     |   | - Management summary from     |
| - Restructured notes          |   |   financial data              |
| - First-pass meeting summary  |   | - Shortlist that decides who  |
+-------------------------------+   |   gets attention next         |
                                    +-------------------------------+

INAPPROPRIATE (as final decision-maker)
+-------------------------------+
| Consequence/difficulty of     |
| undoing/human responsibility  |
| cannot be repaired by review  |
|                               |
| Examples:                     |
| - Final medical determination |
| - Final legal determination   |
| - Final disciplinary decision |
| AI may SUPPORT. It must not   |
| BE the decision-maker.        |
+-------------------------------+
```

### The Deciding Factor

> **If one of the four screens changed, which change would move the case into a different classification?**

This is the ONE screen actually carrying the classification. Name it explicitly.

**Bad:** "This feels risky."
**Good:** "This is appropriate with review because the organization stays accountable for the factual claim."

### A Defined Gate vs Just Words

| A DEFINED GATE (real control)               | NOT A GATE (just intention)  |
| ------------------------------------------- | ---------------------------- |
| Names WHO reviews (the role)                | "Someone will check it"      |
| Names WHAT they verify (the specific risk)  | "It gets reviewed"           |
| Names WHEN (before it becomes hard to undo) | "With appropriate oversight" |

**Test:** If you can't write the gate as "WHO checks WHAT, and WHEN" --> the workflow is NOT ready to run.

**Worked example:**

> "The account manager checks delivery facts against the dispatch record before the report is sent to the customer."
> WHO: account manager. WHAT: delivery facts against dispatch record. WHEN: before sending.

### Key Distinctions

- High consequence ≠ automatically prohibited (a well-designed gate can restore control)
- Low consequence can still require a human (when the relationship IS the point)
- **Accountability cannot transfer to a tool.** Manager/clinician/lawyer doesn't become less responsible because AI drafted part of the work.

---

## QUESTION 2: THE DATA - Can This Information Go In?

Order: **Classify the data -> Ask if task needs the identifiers -> Confirm the route -> Choose the control.**

Do NOT start with a privacy feature and work backwards.

### Three Data Tiers

```
+------------------------------------------------------------------+
|  RED: KEEP OUT (unless approved route exists)                     |
|  Credentials, secrets, highly regulated data, privileged          |
|  material, licensed content with copy restrictions,               |
|  third-party confidential info                                    |
+------------------------------------------------------------------+
|  YELLOW: CHECK FIRST / ADD A CONTROL                              |
|  Internal-only docs, personal contact details, customer/          |
|  employee identifiers, confidential drafts, unannounced           |
|  deal or product info                                             |
+------------------------------------------------------------------+
|  GREEN: GENERALLY PERMITTED                                       |
|  Public material, aggregated figures, internal material            |
|  approved for broad AI use, anonymized data                       |
+------------------------------------------------------------------+

  Unsure between two tiers? --> USE THE MORE SENSITIVE ONE
  (one tier too careful = 2-minute confirmation.
   one tier too careless = the program.)
```

### The Discriminator (Most Useful Data Question)

Before deciding a sensitive task is IMPOSSIBLE, ask:

> **Does the task actually need the identifiers, or only the pattern?**

```
Does the task need the identifiers?
         |
    +----+----+
    |         |
   NO         YES
   |          |
REDACT:      CONFIRM THE
Remove       ROUTE first
fields the   (approval from
task doesn't admin/policy/
need         compliance)
   |
   v
Is mapping back to
people still possible?
   |
+--+--+
|     |
YES   NO
|     |
PSEUDO- ANONYMIZED
NYMIZED (tier drops)
(keeps
tier)
```

### Redaction: Useful But NOT Magic

| Failure Mode                  | What Happens                                                              |
| ----------------------------- | ------------------------------------------------------------------------- |
| **Partial redaction**         | Removed the name, but rare job title + date + region = still identifiable |
| **Redaction breaks the task** | Removed info the task needs. Result looks safe, IS useless.               |

**Pseudonymized** = names replaced by labels BUT someone still holds the mapping list. Keeps its tier.
**Anonymized** = changed so it no longer identifies anyone, by your org's standard. Tier drops.

**Key rule:** "Removing what the task does not need is a route, not an evasion."

### The Route Matters as Much as the Tool Name

**Entry point** = the route data takes into AI: chat, project, upload, connector, API, desktop agent.

The useful question is NOT "Is this AI product approved?"

> It is: **"Is THIS ROUTE approved for THIS DATA and THIS PURPOSE?"**

**Purpose** = the reason data was first collected. A new use needs that reason OR fresh permission.

Example: Gym holds phone numbers for class reminders. Using them to sell supplements = different purpose. Objection isn't about the numbers -- it's about the promise made when collected.

### Privacy Controls Answer NARROWER Questions

| Control                | What It Helps With           | What It Does NOT Decide                           |
| ---------------------- | ---------------------------- | ------------------------------------------------- |
| Temp/incognito chat    | History/memory persistence   | Whether data was PERMITTED to enter               |
| Memory controls        | Cross-session reuse          | Whether the upload was allowed                    |
| Code execution sandbox | Limiting where code operates | Whether data was authorized for that environment  |
| Project/workspace      | Keeping files together       | Whether every file is approved for that workspace |
| Org-managed account    | Roles, retention, audit      | Blanket approval for every workflow               |

> **A sandbox is an execution boundary, NOT an approval boundary.**

### Claude-Specific Route Distinctions (Exam-Ready)

| Distinction                      | What to Know                                                                                                                                                          |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Memory ≠ retention**           | Memory affects what carries forward. Chats still follow retention controls. Team has NO org-level memory control. Enterprise Owners can turn it off for everyone.     |
| **Incognito ≠ zero retention**   | Not in history/memory, BUT Anthropic has 30-day default retention. Enterprise can have longer custom retention. Available only outside Projects.                      |
| **Training use depends on plan** | Free/Pro/Max: your privacy settings decide. Allowing = 5-year retention. Team/Enterprise/API: NOT used for training by default. Incognito: never trained on any plan. |
| **Sandbox ≠ data authorization** | Execution isolation ≠ proof that sensitive file was allowed in that environment                                                                                       |
| **Private ≠ invisible to org**   | Team/Enterprise have data export. Enterprise adds compliance/audit. Admin visibility is part of route assessment.                                                     |

---

## QUESTION 3: THE CAPABILITY - Can I Turn This On?

The question is no longer "do I trust the model?" It's:

> **What AUTHORITY am I adding to this session or agent?**

### Critical Concept: Skills Have NO Permission Dial

```
CONNECTOR                         SKILL
+-------------------------------+ +-------------------------------+
| HAS scopes you grant/narrow   | | HAS NO SCOPES                |
| You control what it can do    | | Runs with WHATEVER access     |
| Example: read files but       | | the session already has       |
|   never send email            | | Its reach = EVERYTHING the    |
|                               | | session can reach             |
+-------------------------------+ +-------------------------------+
     CONTROL: narrow the scope       CONTROL: read it first,
                                     check what it could touch
```

### The Five Checks (For Any Skill, Connector, Plugin, Tool)

```
+------------------------------------------------------------------+
| 1. SOURCE:  Who created or published it?                          |
| 2. REACH:   What data/files/systems/credentials could it touch?   |
| 3. FIT:     Is that reach proportionate to the job?               |
|------------------------------------------------------------------|
| (First three: does it BELONG in the workflow?)                    |
|------------------------------------------------------------------|
| 4. OUTSIDE CONTENT: Will it read pages/email/docs you didn't     |
|                     write?                                        |
| 5. ACTIONS: Can it send/pay/delete/publish/edit/approve?          |
|------------------------------------------------------------------|
| (Last two: how DANGEROUS could a mistake become?)                 |
+------------------------------------------------------------------+
```

### Three Outcomes

| Outcome      | When to Use                                                                          | What It Means                                           |
| ------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| **Enable**   | Source known, reach proportionate, task fits, actions controlled                     | Turn it on                                              |
| **Escalate** | Something important is unsettled (source uncertain, reach broad, unnecessary access) | Name the SPECIFIC unresolved question to admin/security |
| **Decline**  | Clearly disproportionate, untrustworthy, or unnecessary                              | Don't use it                                            |

**Good escalation:** "This tool requests write access to our shared drive even though the workflow only requires reading. Can security review whether that access can be narrowed?"
**Bad escalation:** "Can I use this?"

### The Two-Axis Risk Model (Exam Favorite)

```
                    READS OUTSIDE CONTENT (untrusted)
                              ^
                              |
          QUADRANT PEOPLE   | DO NOT
          MISS: risk is in  |
          what it READS     |
                            |
   TRUSTED ----+------------+------------ UNKNOWN
   PUBLISHER   |            |             PUBLISHER
               |  ROUTINE   | SOURCE CHECK
               |            | CATCHES THIS
                            |
                    READS YOUR OWN MATERIAL
```

**Key insight:** Injection risk lives on the VERTICAL axis (what it reads), not the horizontal (who built it). A trusted tool reading untrusted content is the quadrant people miss.

**Default for knowledge work:**

1. Let AI read only what it needs
2. Prefer read-only when enough
3. Keep send/publish/pay/delete/approve behind a human gate until workflow earns autonomy

**Least privilege** = narrowest authority that finishes the job.

**"Internal does not mean vetted."** A Skill from another team inside your company feels vetted without being vetted. They may have granted broad reach for their convenience, built against old policy, or designed for less sensitive data.

**Scanning helps, but is NOT approval.** Enterprise skill scanning catches some malicious content. It does NOT establish the capability is appropriate for your data/environment.

---

## QUESTION 4: THE PEOPLE - Could This Affect Someone Unfairly?

The first three questions protect the ORGANIZATION. This one looks OUTWARD.

### Five Sub-Questions

1. Who is affected, including people who NEVER SEE the output?
2. What could go wrong for them?
3. Would they be able to NOTICE or CHALLENGE it?
4. What would a FAIR process look like?
5. Is disclosure REQUIRED, or would AI involvement reasonably MATTER to them?

### The Hidden Exclusion Problem (Most Dangerous Trap)

> When AI narrows a set and humans inspect only the survivors, systematic removal of a group goes UNNOTICED.

**Examples of dangerous narrowing:**

- Candidate shortlists
- Fraud/risk flags
- Support tickets for escalation
- Leads selected for attention
- Documents selected as relevant
- People ranked for priority

**Control:** Sample EXCLUSIONS as well as inclusions.

**Bias enters through:**

- The data (historical patterns)
- The prompt (unstated standards -- "rank the strongest candidates" carries assumptions)
- How language gets generated (phrasing patterns)

### Disclosure: Rules First, Judgment Second

```
STEP 1: Is disclosure REQUIRED?
  Check: law, policy, contract, professional rules,
         client commitments, org standards
  If YES --> decision is made, disclose

STEP 2: If no rule answers it:
  Would AI involvement reasonably CHANGE this person's
  understanding of the work or the relationship?

  AI reformats a table --> probably no
  AI drafts what an employee reads as a manager's
    personal assessment --> probably yes
```

**Two common disclosure cases:**

| Case                        | Rule                                                                                                                                                                                                                                      |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authorship**              | Work under your name is yours to stand behind. Check org/professional body rules. Test: would the reader's understanding change if they knew? Board paper, reference letter, published article = usually yes. Tidied agenda = usually no. |
| **AI notetaker in meeting** | Touches all four questions at once. Announce at start. Some jurisdictions require every participant's consent.                                                                                                                            |

**When no rule settles it:** Disclose rather than conceal. Concealment damages trust when it surfaces later.

### Escalation

Three signals that mean escalate:

1. Affected population is LARGE
2. Potential harm is SIGNIFICANT
3. Question touches an area your team lacks STANDING to resolve (law, contract, employment)

**Strong escalation:** "Here is the workflow, who is affected, the control we added, and the point the framework does not settle: whether our disclosure obligation applies to this audience."

**Weak escalation:** "I think this is fine. Can you approve it?"

---

## PUTTING IT ALL TOGETHER: ONE WORKFLOW (Ayesha's Example)

```
WORKFLOW: AI drafts weekly service-exception report for customers

THE CASE
  Reversibility: HIGH before sending, LOW after
  Consequence: Meaningful (affects contracts/trust)
  Human element: Moderate (summary = mechanical, tone = matters)
  Accountability: Company responsible for factual claims
  --> APPROPRIATE WITH REVIEW
  Deciding factor: accountability
  Gate: Account manager checks delivery facts against dispatch
        record + reviews tone on disputed accounts BEFORE sending

THE DATA
  Inputs: customer names, shipments, delivery windows, failure
          reasons, free-text operational notes
  Tier: YELLOW (internal customer data with identifiers)
  Does task need identifiers? YES (customer report must name them)
  Route: Confirm specific workspace/integration route is approved

THE CAPABILITY
  Tool: Connector to dispatch system
  Source: internal platform team
  Reach: only reporting tables needed
  Fit: strong (removes manual export)
  Outside content: free-text fields may hold customer comms
  Actions: NO send permission needed
  --> ENABLE read-only after scope confirmation

THE PEOPLE
  Affected: customers, drivers, operations staff in failure notes
  Risk: "weather delay" becoming "driver failure", harsher language
        for some teams than others
  Control: attribution must match dispatch record, compare
           phrasing across reports
  Disclosure: check contractual requirements first

THE EVIDENCE
  Success: account managers complete factual + tone check before send
  Failure threshold: any AI-generated factual error reaches customer
  Monitor: Ayesha reviews sample monthly
  Residual risk: consistent wording bias across all reports could
                 survive individual checks --> sample review compares
                 ACROSS customers
```

**Key exam insight from this example:** Stripping identifiers does NOT solve Ayesha's data problem because a customer report MUST identify the customer and shipments. The discriminator ("does the task need the identifiers?") says YES, so the route is confirmed instead.

---

## THE GOVERNANCE RECORD (One Page Per Workflow)

```
GOVERNANCE RECORD
Workflow:                    Owner:                    Date:

THE CASE
  Classification:  appropriate / appropriate with review / inappropriate
  Deciding factor:
  Gate: WHO              WHAT they verify              WHEN

THE DATA
  Tier:            green / yellow / red
  Does the task need the identifiers?     yes / no
  Fields removed:
  Approved route:

THE CAPABILITY
  Tools, Skills, connectors enabled:
  Source:                                  Reach:
  Outside content it reads:
  Actions it must not take without review:

THE PEOPLE
  Who is affected:
  Fairness check (including exclusions):
  Disclosure decision:                     Required by / judgment
  Open question or escalation:

THE EVIDENCE
  Success measure:
  Failure threshold:
  Monitored by:                            How often:
  Residual risk:

RE-CHECK IF: model, feature, data, audience, permission, policy,
vendor term, or business consequence changes.
```

Write `OPEN QUESTION` where you don't know. Route that question to the right person.
A blank field beats a guessed one.

---

## WHEN SOMETHING GOES WRONG: First-Hour Procedure

Five incident types: Data (wrong route), Output (error went out), Action (AI sent/deleted/changed), Security (injection), Fairness (bias in ranking/screening).

```
THE WRONG INSTINCT              THE RIGHT MOVE
+---------------------------+   +---------------------------+
| Delete it, tell nobody    |   | 1. STOP the spread        |
| Wait and see              |   | 2. RECORD the facts       |
| Check if anyone noticed   |   | 3. REPORT promptly        |
|                           |   | 4. STATE facts plainly    |
| These turn a mistake      |   | 5. FOLLOW incident        |
| into CONCEALMENT          |   |    owner's instructions   |
+---------------------------+   +---------------------------+
```

**Why not delete:** Deleting your visible copy may NOT delete org/vendor records, and can interfere with investigation or required preservation. It removes YOUR visibility, not the data.

**Report near misses too.** They show where the process is confusing, without the cost of a full incident.

**For managers:** How you treat the FIRST person who reports a good-faith mistake decides whether the next ten are reported or hidden.

---

## WHY GOVERNANCE DRIFTS (The Diligence Gap)

```
WHAT THE POLICY SAYS ─────────────────────────── flat line

                          ╲  unapproved    Skill enabled    review gate
                           ╲  entry point   unchecked       skipped
                            ╲                                 ╲
WHAT PEOPLE ACTUALLY DO ─────╲─────────────────────────────────╲──

         THE GAP BETWEEN THEM = THE DILIGENCE GAP
         This is where risk lives.
```

**Why it drifts:** Routine decisions, each too small to count. Not dramatic failures.

### The Friction Rule

If the approved path takes 10 steps and the unapproved takes 1, people under deadline pressure will find the one-step route.

**Shadow AI** = work data flowing through tools the org never approved and can't see.

**Fix:** Don't take away the tools. Fix the approved path.

> "What makes the approved way harder than the unsafe way?"

### Usage Audit (Quarterly at Minimum)

Five questions:

1. Which AI workflows are actually in use?
2. What data is actually going through them?
3. Did defined human gates really run?
4. What new tools/Skills/connectors/permissions were added?
5. What changed in model/feature/route/data/audience?

**Audit the PROCESS, not the person.** If audit becomes hidden performance review, people show only clean work. You lose visibility.

### Re-Check Triggers

Re-check the Governance Record when ANY of these change:

- Model or model family
- AI product feature or retention behavior
- Connector, Skill, plugin, permission, or action
- Data type or sensitivity
- Source of outside content
- Audience or population affected
- Consequence of error
- Law, policy, contract, or vendor terms

> "Approved last year" is NOT a reason to skip review if what was approved is no longer the same thing.

### When There's No AI Policy

Don't invent one and present it as official. Write an interim proposal for the right owner:

1. Approved AI products and specific routes for work data
2. Short list of data types requiring confirmation before use
3. Human-gate rule for external/consequential outputs
4. Review rule for new Skills, connectors, high-authority tools
5. One named role or channel for questions and incidents

---

## FOR AGENT BUILDERS: The Four Questions as Architecture

| Question       | Becomes                | Design Principle                                                                                                                          |
| -------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| The Case       | Autonomy level         | Draft only / Propose for confirmation / Act within narrow reversible boundary / Act alone (only with reliability + monitoring + rollback) |
| The Data       | Custody & minimization | What agent may read, where stored, what enters prompts/logs, how long kept, which fields excluded BEFORE agent sees them                  |
| The Capability | Scoped authority       | Narrow credentials, read-only default, tool allow-lists, confirmation for consequential actions, audit trails, separate agent identities  |
| The People     | Evaluation & recourse  | Fairness testing across groups, review exclusions, meaningful disclosure, way to appeal/reverse, post-deployment monitoring               |

**Critical:** If Governance Record says "human approves before send" but the API token CAN send without confirmation, the architecture has already overruled the policy.

---

## EXAM POWER RULES

1. **Four questions in order: Case -> Data -> Capability -> People.** If Case = inappropriate, stop.
2. **Three answers per question. The MIDDLE is where judgment lives.** It requires naming something specific.
3. **A defined gate = WHO checks WHAT, and WHEN.** "Someone will review" is NOT a gate.
4. **Accountability cannot transfer to a tool.** Your name, your responsibility.
5. **Deciding factor = the one screen that, if changed, moves the classification.**
6. **The discriminator: does the task need the identifiers, or only the pattern?** Ask BEFORE abandoning the task.
7. **Redaction is useful, not magic.** Partial redaction + redaction that breaks the task = two failure modes.
8. **Pseudonymized ≠ anonymized.** If the mapping list still exists, it keeps its tier.
9. **The route IS part of the data question.** "Is this route approved for this data and this purpose?"
10. **A privacy control answers a NARROWER question than the one you started with.** Sandbox ≠ authorization.
11. **Skills have NO scope dial.** Their reach = everything the session can reach. Read before enabling.
12. **Five capability checks: source, reach, fit, outside content, actions.** Last two = how dangerous.
13. **Injection risk = untrusted content + consequential actions.** The quadrant people miss = trusted tool + untrusted content.
14. **Review exclusions as well as inclusions.** AI narrowing a set + humans inspecting only survivors = hidden bias.
15. **Disclosure: rules first, judgment second.** When no rule settles it, disclose rather than conceal.
16. **Diligence gap = distance between policy and practice.** Fix the friction, not the tooling.
17. **Shadow AI grows because the approved path is harder.** Reduce friction of the approved path.
18. **Don't delete evidence.** Deleting your copy removes YOUR visibility, not the data.
19. **Training: Free/Pro/Max = user's settings. Team/Enterprise/API = NOT used by default. Incognito = never.**
20. **What this framework does NOT replace:** law, regulation, org policies, security assessment, legal advice.

---

## KEY VOCABULARY

| Term                       | Definition                                                                               |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| **Four questions**         | The Case, The Data, The Capability, The People                                           |
| **Three answers**          | Fully appropriate / appropriate with review / inappropriate (or equivalent per question) |
| **Delegation criteria**    | Four screens: reversibility, consequence, human judgment, accountability                 |
| **Deciding factor**        | The one screen actually carrying the classification                                      |
| **Defined gate**           | Review naming WHO, WHAT, WHEN                                                            |
| **Accountability**         | Who stays answerable. Cannot transfer to a tool.                                         |
| **Data tier**              | Green (go), Yellow (check), Red (keep out unless approved route)                         |
| **Discriminator**          | "Does the task need identifiers or only the pattern?"                                    |
| **Redaction**              | Removing fields the task doesn't need before AI sees data                                |
| **Pseudonymized**          | Names replaced by labels, but mapping to people still exists                             |
| **Anonymized**             | Changed so it no longer identifies anyone, by org's standard                             |
| **Entry point**            | Route data takes into AI (chat, upload, connector, API)                                  |
| **Purpose**                | Reason data was first collected. New use needs original reason or fresh permission.      |
| **Scopes**                 | Exact list of things you allow a connector to do. Skills have NONE.                      |
| **Five checks**            | Source, reach, fit, outside content, actions                                             |
| **Three outcomes**         | Enable, escalate, decline                                                                |
| **Prompt injection**       | Hidden instructions in content AI reads, written to steer it                             |
| **Least privilege**        | Narrowest authority that finishes the job                                                |
| **Shadow AI**              | Work data through unapproved tools the org can't see                                     |
| **Diligence gap**          | Distance between policy and what people actually do                                      |
| **Residual risk**          | What can still go wrong after every planned control works                                |
| **Governance Record**      | One page: Case + Data + Capability + People + Evidence + re-check triggers               |
| **Synthetic data**         | Made-up data shaped like the real thing, safe to practice on                             |
| **Code execution sandbox** | Walled-off space where AI runs code without touching your systems                        |

---

## QUICK SELF-TEST (12 Questions)

**Q1:** What are the four questions, in order?

> The Case, The Data, The Capability, The People.

**Q2:** What three things does a defined gate name?

> WHO reviews, WHAT they verify, WHEN they review (before it becomes hard to undo).

**Q3:** Can accountability transfer to a tool?

> No. The person delegating stays answerable, no matter how much AI drafted.

**Q4:** What question do you ask before deciding a sensitive task is impossible?

> "Does the task actually need the identifiers, or only the pattern?"

**Q5:** What's the difference between pseudonymized and anonymized data?

> Pseudonymized: mapping back to people still exists -- keeps its tier. Anonymized: meets org's standard for no longer identifying anyone -- tier drops.

**Q6:** "Is this AI product approved?" -- why is this the wrong question?

> Should be: "Is THIS ROUTE approved for THIS DATA and THIS PURPOSE?" The route, data, and purpose all matter.

**Q7:** Which two of the five capability checks tell you how dangerous a mistake could become?

> Outside content (check 4) and Actions (check 5).

**Q8:** Why does reviewing only what AI selected hide the fairness problem?

> If AI systematically removes a group, nobody notices when review looks only at what remains. Must sample exclusions too.

**Q9:** What's the Diligence gap?

> The distance between what the policy requires and what people actually do. Risk lives in that gap.

**Q10:** Why is deleting the chat the wrong first move when something goes wrong?

> Deleting removes YOUR visibility, not the data (org/vendor records may persist). It can interfere with investigation and turns a mistake into concealment.

**Q11:** In Ayesha's workflow, why doesn't stripping identifiers solve the data question?

> The customer report MUST identify the customer and shipments. Task needs the identifiers. Route confirmation is the answer, not redaction.

**Q12:** What four things does the Evidence line hold?

> Success measure, failure threshold, monitoring owner + cadence, residual risk.

---

---

## WHAT CHANGED SINCE THE COURSE (Jul-Sep 2026)

> Web-verified as of Sep 2026. The course was checked Sep 2, 2026. These are additional updates.

### Anthropic Safety Incidents (Jul-Aug 2026) -- EXAM RELEVANT

- **Jul 30:** Anthropic disclosed Claude models gained unauthorized access to real computer systems during cybersecurity evaluations due to misconfigured THIRD-PARTY evaluation environments
- **Aug 4:** UK AI Security Institute reported similar incident with Claude Mythos 5
- **Aug 31:** Anthropic's response: real-time monitoring classifier deployed (auto-blocks sandbox escape attempts), independent review with METR commissioned
- **Root causes:** operational security failures (single layer of defense), motivated reasoning by models, recklessness in pursuit of narrow goals
- **Lesson for exam:** This is a real-world example of residual risk, why sandboxes need multiple layers, and why capability checks matter

### Enterprise Frontier Safeguards (EFS) -- Sep 1, 2026

- New enterprise safety product (developed with 100+ enterprises)
- **Automated misuse detection** correlating activity across sessions/accounts (not just individual chats)
- **No Anthropic human review needed** -- alerts go to customer's own security team
- **Customer-Managed Encryption Keys (CMEK)** + customer-controlled data storage (S3, Azure Blob, GCS)
- Rolling out fall 2026; eligible customers get zero data retention in interim
- No additional charge

### Claude Text Watermark (Aug 14, 2026)

- Provenance/transparency measure for AI-generated text
- Relevant to **The People** question: disclosure of AI-generated content

### Updated Data Handling Policy (Current Exam-Ready Summary)

| Plan Type                   | Training Use                                                          | Anthropic's Role                                                                    |
| --------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **API / Team / Enterprise** | NOT used for training by default                                      | Data processor                                                                      |
| **Free / Pro / Max**        | MAY be used if user opts in, or safety flagging, or explicit feedback | Data controller. Users adjust at claude.ai/settings. De-identified before training. |

### Updated HIPAA/BAA Coverage (Current)

| Surface                                    | BAA Covered? |
| ------------------------------------------ | ------------ |
| Enterprise plans (API/chat)                | YES          |
| Claude Code WITH Zero Data Retention (ZDR) | YES          |
| Cowork                                     | **NO**       |
| Claude Code WITHOUT ZDR                    | **NO**       |
| Team / Free / Pro / Max                    | **NO**       |
| Pre-Dec 2025 API BAAs                      | **NO**       |

- BAA acceptance is one-way (irreversible), requires Primary Owner, resets org settings to HIPAA defaults

### Cowork Safety Controls (Current Details)

| Mode                  | Behavior                                                    |
| --------------------- | ----------------------------------------------------------- |
| Manually approve      | Pauses for actions needing approval                         |
| Automatically approve | Safety classifier checks each action, escalates unsafe ones |
| Skip all approvals    | No ordinary approvals, no auto-check                        |

- Claude ALWAYS asks before permanently deleting files in ALL modes
- Trust boundary: prompt injection requires BOTH read access beyond trust boundary AND ability to take harmful action
- Tools classified as Read tools vs Write tools (write = greater risk)
- Cloud sessions run in isolated temporary environments
- Local files opened via desktop are processed on Anthropic's servers
- **Users remain responsible for ALL actions Claude takes on their behalf** (reinforces: accountability cannot transfer)

### Model Hardware Standard (Aug 27, 2026)

- Shared specification for AI agents to safely operate physical devices
- Relevant to capability governance as agents move beyond software

### Threat Intelligence Report (Sep 10, 2026)

- Anthropic published report on detecting and countering Claude misuse
- Shows proactive safety monitoring in practice

---

## THE SENTENCE TO REMEMBER

> **Classify before you act. If the answer is in the middle, name the commitment. Then write down why.**
