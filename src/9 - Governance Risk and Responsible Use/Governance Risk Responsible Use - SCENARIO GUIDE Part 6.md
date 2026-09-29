# Governance, Risk & Responsible Use — SCENARIO GUIDE Part 6

## MAKING GOVERNANCE SURVIVE REAL WORK

> **Domain:** D6 — Governance, Risk & Responsible Use (15%) + D7 — Troubleshooting & Optimization (10%)
> **Concepts covered:** Governance Drift + The Diligence Gap, Usage Audit (Process Not Person), The Friction Rule + Shadow AI, Re-check Triggers + When There's No Policy

---

## CONCEPT 22: Governance Drift + The Diligence Gap

### THE SCENARIO

Six months ago, Hamza's marketing team set up their AI workflows properly. They had:
- Approved routes for customer data
- A defined gate: the content lead reviews every campaign before it goes to clients
- A vetted Skill for formatting reports
- Clear rules about what data tiers could enter which tools

Today, this is what actually happens:

**Drift 1:** A new intern [naya seekhne wala] started using a personal AI account for quick drafts. Nobody told her about approved routes. She's been pasting client briefs [client ka kaam ka khulaasa] into free-tier Claude for three weeks.

**Drift 2:** The content lead got promoted. Her replacement was never told about the review gate. Campaign drafts now go straight to clients — nobody checks them.

**Drift 3:** Someone enabled a new Skill for social media posts. It looked useful. Nobody ran the five checks. It's been live for two months, running with full session access to the shared drive.

**Drift 4:** The dispatch dataset that used to contain only shipment numbers now includes customer payment information — a field that was added in a system update last month. The AI workflow still processes it as "yellow tier" when it's now red.

No single moment was a dramatic failure. Nobody broke rules on purpose. Each drift was one small shortcut, one missed handoff [kaam ek se doosre ko dete waqt kuch chhoot gaya], one thing that changed without anyone updating the record.

### WHAT WENT WRONG?

This is **governance drift** [hukmarani ka dheere dheere khasak jaana] — the slow, invisible gap that opens between what the policy says and what people actually do. The course calls this the **Diligence gap** [zimmedari ka farq].

### THE CONCEPT

The **Diligence gap** is the distance between what the policy requires and what people actually do. Risk lives in that distance.

```
  TIME ──────────────────────────────────────────────►

  ─────────────────────────────────────────────────── What the policy says
                                                      (stays flat)

       ·                                              What people
          ·                                           actually do
              ·         ·                             (drifts down)
                   ·         ·
                        ▲         ·    ·
                        │              ▲    ·
                   Unapproved     Skill        ·
                   entry point    enabled       Review gate
                   used           unchecked     skipped under
                                                deadline

  ◄─────────── THE DILIGENCE GAP ──────────────►
               (where risk lives)
```

**Why routine decisions are more dangerous than high-stakes ones:**

High-stakes decisions get attention. Everyone knows a legal filing [adaalat mein kagaz jama karna] or a regulatory report matters. People are careful.

Routine decisions are dangerous because each one feels too small to count:
- One person uses a slightly easier tool
- One review becomes a glance instead of a real check
- One connector keeps permission after the project changes
- One sensitive field appears in a dataset that used to be clean

No single moment looks like failure. The risk is the distance that **piles up** [dheere dheere jama hota jaata hai].

**The name "Diligence"** comes from the AI Fluency Framework — the competency [hunar/salahiyat] of taking responsibility for how AI is used and for what happens to its output. At team scale, that means **auditing what people do**, rather than assuming the policy is followed.

> A policy followed only when someone is watching is not governance.

### EXAM TRAP

> Wrong answer pattern: "The team set up proper governance six months ago, so the workflows are still compliant [qanoon ke mutabiq]"

The exam tests whether you understand that governance is NOT a one-time setup. "Approved last year" means nothing if the workflow, data, people, or tools have changed. The correct answer always includes ongoing monitoring, re-checking, or auditing — never "we set it up once and it's done."

Second trap: "The biggest governance risks come from dramatic failures like data breaches." No — the biggest risks come from routine drift that nobody notices. The exam rewards understanding that small, invisible shortcuts are more dangerous than one big mistake.

### QUICK CHECK

**Q:** A team set up all four governance questions properly 8 months ago. Since then, the AI model was updated, a team member left (she was the designated reviewer), and a new data field was added to the input dataset. Is the original Governance Record still valid?

**A:** No. Three things changed: model, reviewer (the WHO in the gate), and data type. Each change is a re-check trigger. The original record reflects decisions made under different conditions. The team needs to re-run the affected blocks — at minimum, update the gate (new reviewer), re-classify the data (new field may change the tier), and check if the model change affects any assumptions.

---

## CONCEPT 23: Usage Audit (Process, Not Person)

### THE SCENARIO

Zara is a team lead at an insurance company. Her manager says: "We need to audit [jaanch karna] how the team is using AI. Check everyone's work and report back."

Zara sends an email: "Team — next week I'll be reviewing your AI usage for the past month. Please send me your chat histories."

What happens? Predictable:
- Salman deletes three conversations where he used an unapproved route
- Hira only sends her cleanest, most careful work
- Faisal panics because he enabled a Skill without checking it, and spends the weekend cleaning up
- The audit sees only sanitized [saaf ki hui] work

Zara reports back: "Everything looks great. Full compliance."

Meanwhile, the real gaps — the unapproved route, the unchecked Skill, the skipped reviews — are now better hidden than before.

### WHAT WENT WRONG?

Zara turned a **process audit** [tariqa-e-kaar ki jaanch] into a **performance review** [kaarkargi ka jaayiza]. When an audit becomes a hidden test of individuals, people show auditors only their cleanest work. The organization loses sight of the behavior it wanted to understand.

### THE CONCEPT

A usage audit should answer five questions:

```
+---+----------------------------------------------------------+
| 1 | Which AI workflows are ACTUALLY in use?                  |
|   | (Not which ones were approved — which ones are running)  |
+---+----------------------------------------------------------+
| 2 | What data is ACTUALLY going through them?                |
|   | (Has the data changed since the record was written?)     |
+---+----------------------------------------------------------+
| 3 | Did defined human gates REALLY run?                      |
|   | (Not "is there a gate" — did someone actually review?)   |
+---+----------------------------------------------------------+
| 4 | What new tools, Skills, connectors, or permissions       |
|   | were added?                                              |
|   | (Anything enabled since the last check?)                 |
+---+----------------------------------------------------------+
| 5 | What changed in the model, feature, route, data,         |
|   | or audience?                                             |
|   | (Any re-check trigger from the Governance Record?)       |
+---+----------------------------------------------------------+
```

**What one real audit turns up** (from the crash course):

A team lead reviews a month of AI use and finds three gaps:
1. A marketer uploaded an unreleased product spec [abhi announce nahi hua product ka document] to an unapproved entry point
2. A Skill was enabled with no source check
3. A client report skipped its review gate twice under deadline pressure

None was malicious [buri niyyat se]. All was drift. The fixes are habit-level:
- A reminder on approved entry points
- A Skill-vetting step built into Project setup
- A review gate treated as non-negotiable [jis par samjhota nahi ho sakta]

The audit turned invisible risk into three actions someone can close.

**Audit the PROCESS, not the PERSON:**

```
  WRONG: "Who broke the rules?"         RIGHT: "Where is the process
                                                 confusing or hard?"
  ─────────────────────────────         ─────────────────────────────
  Finds: individuals to blame           Finds: system gaps

  Result: people hide real work          Result: people show real work
          next time                              next time

  Improves: nothing (behavior            Improves: confusing rules,
            just goes underground)                 unnecessary friction,
                                                   weak gates, stale
                                                   permissions
```

**Frequency:** A small quarterly [teen maahana] sample is a reasonable start. More frequent during a rollout [naya system shuru karte waqt] or after gaps are found. Match frequency to risk, policy, and sector [shauba — jaise health, finance, education].

### EXAM TRAP

> Wrong answer pattern: "Audit individual employees' AI chat histories and score their compliance"

The exam tests whether you understand that auditing PEOPLE instead of PROCESSES destroys the visibility you need. If people fear the audit, they hide their real behavior. The correct answer always focuses on finding system gaps — confusing rules, unnecessary friction, weak gates, stale permissions — not individual violations.

### QUICK CHECK

**Q:** An audit reveals that a team member has been using an unapproved AI tool for two months. The approved tool requires 8 steps; the unapproved one requires 1. What should the organization investigate?

**A:** Why the approved path is so much harder than the unapproved one. The individual's behavior is a symptom — the root cause is friction. If the approved path takes 8 steps and the unapproved takes 1, the fix is making the approved path easier, not just punishing the shortcut. (This leads directly to Concept 24.)

---

## CONCEPT 24: The Friction Rule + Shadow AI

### THE SCENARIO

Rameez works in procurement [khareedari ka department] at a manufacturing company. The company's approved AI workflow requires:

1. Log into the Enterprise AI account
2. Open the correct Project workspace
3. Upload the document through the secure connector
4. Wait for the connector to sync [data ko match karwana]
5. Write the prompt in the approved template format
6. Add the required compliance tags [zaruri labels]
7. Run the analysis
8. Download the output through the approved export path

Total time: 15-20 minutes per task.

OR: Rameez can paste the same document into his personal ChatGPT account in 30 seconds.

Rameez is not a rebel. He's not trying to break rules. He's trying to finish a vendor comparison before a 2 PM meeting. For six weeks, he's been using the personal account for "quick" tasks and the approved route for "important" ones.

The company doesn't know about the personal account. They can't see it. They can't audit it. They can't control what data goes through it. Rameez thinks he's being careful — he "only" pastes "non-sensitive" documents. But last week, a vendor proposal with trade secrets [company ke raaz] under NDA [raazdarana mu'ahida] went through the personal account because the meeting was in 10 minutes.

### WHAT WENT WRONG?

This is **Shadow AI** [saaye wali AI — company ki nazar se baahir AI ka istemaal] — work data flowing through tools and accounts the organization never approved and cannot see.

Shadow AI grows because the approved path is harder than the unapproved path. NOT because people are malicious. Because people are busy.

### THE CONCEPT

The **friction rule** [mushkil ka usool]:

> If the approved path takes ten steps and the unapproved path takes one, people under deadline pressure will find the one-step route.

```
  THE FRICTION EQUATION:

  Approved route: 8 steps, 15 minutes ──────┐
                                              ├──► People choose
  Unapproved route: 1 step, 30 seconds ─────┘    the easier path

  THIS IS NOT AN EXCUSE for policy violations.
  THIS IS A REASON to treat usability [aasani se
  istemaal hona] as part of the control system.
```

**The fix is NOT "send another reminder email."** The fix is:

> "What makes the approved way harder than the unsafe way?"

Fix THAT friction, and you reduce more risk than any policy reminder.

```
  WRONG RESPONSE                    RIGHT RESPONSE
  ──────────────────────            ──────────────────────
  "Remind everyone about            "Why does the approved
   the approved route"               route take 8 steps
                                     when it could take 3?"
  "Punish people who use
   unapproved tools"               "Can we add the approved
                                     AI to the tools people
  "Block all unapproved              already use?"
   AI at the firewall"
                                    "Can we reduce the
  These reduce VISIBLE               sync wait time?"
  shadow AI. People find
  workarounds.                      Reducing friction
                                    reduces ACTUAL
                                    shadow AI.
```

**Shadow AI patterns to watch for:**
- Personal AI accounts used for "quick" work tasks
- Teams using consumer-tier [aam logon wala] tools because the enterprise tool is slow
- Copy-paste workflows that bypass [aage nikal jaana] approved connectors
- Employees saving AI outputs to personal drives instead of company systems

**Important:** The policy line ("what the policy says") is a drawing convention, not a claim that the approved path is always right. Sometimes the approved path genuinely needs to be fixed, and sometimes the policy itself is outdated.

### EXAM TRAP

> Wrong answer pattern: "Block all unauthorized AI tools at the network level to eliminate shadow AI"

Blocking tools addresses the symptom, not the cause. If the approved path is still 8 steps vs. 1, people will find new workarounds — different tools, different devices, different networks. The exam rewards answers that address the FRICTION, not just the violation. The correct answer usually involves making the approved path easier, not just making the unapproved path harder.

Second trap: "Shadow AI is not a real risk because employees are responsible for following policy." The crash course explicitly names shadow AI as a governance failure, not an individual failure. If widespread shadow AI exists, the organization's approved path has a friction problem.

### QUICK CHECK

**Q:** A company discovers that 40% of employees are using personal AI accounts for work tasks. The security team proposes blocking all personal AI services. Is this sufficient?

**A:** Blocking helps short-term but doesn't solve the root cause. Ask: WHY are 40% of employees choosing the personal route? If the approved enterprise tool is slow, requires too many steps, or doesn't support the tasks they need, they'll find other workarounds. The fix needs both: reduce friction on the approved path AND enforce the policy. One without the other fails.

---

## CONCEPT 25: Re-check Triggers + When There's No Policy

### THE SCENARIO — Part A: Re-check Triggers

Samia's team wrote a Governance Record for their AI customer-reporting workflow in March. It's now September. Six things have happened:

1. **Model change:** Anthropic released a new Claude model. The company switched to it.
2. **Feature change:** Claude now has a new memory feature that wasn't available in March.
3. **Connector update:** The dispatch connector was updated — it now includes a field with driver personal phone numbers.
4. **Audience change:** The reports, originally for internal management, are now also shared with external partners [baahir ke business partners].
5. **Policy change:** The company updated its data-handling policy to require encryption for all customer identifiers in transit [safar mein — jab data ek jagah se doosri jagah ja raha ho].
6. **Vendor terms change:** Anthropic updated its retention terms for Enterprise accounts.

Samia looks at the Governance Record from March and asks: "Is any of this still valid?"

### THE SCENARIO — Part B: When There's No Policy

Meanwhile, at a different company, Owais has just been hired as the first operations manager at a startup [naya shuru hua chhota business]. The startup has 30 employees, all using AI daily. There is no AI policy. No approved routes. No data tiers. No review gates. Everyone uses whatever tool they want.

Owais asks the CEO: "What's our AI policy?"

CEO: "We don't have one. We're a startup — we move fast."

### WHAT NEEDS TO HAPPEN

**Part A:** Samia's record needs re-checking because SIX re-check triggers fired. Not all of them change the classification — but all need to be checked.

**Part B:** Owais needs to create a starting point without pretending it's an official policy.

### THE CONCEPT

**Part A — Re-check triggers:**

Calendar reminders help, but **change is the stronger trigger**. Re-check the Governance Record when ANY of these change:

```
+─────────────────────────────────────────────────────────────+
│  RE-CHECK TRIGGERS                                          │
│                                                             │
│  □ Model or model family                                    │
│  □ AI product feature or retention behavior                 │
│  □ Connector, Skill, plugin, permission, or action          │
│  □ Data type or sensitivity                                 │
│  □ Source of outside content                                │
│  □ Audience or population affected                          │
│  □ Consequence of error                                     │
│  □ Law, policy, contract, or vendor terms                   │
│                                                             │
│  "Approved last year" is not a reason to skip review        │
│  if the thing that was approved is no longer the same thing.│
+─────────────────────────────────────────────────────────────+
```

Samia's six changes mapped:

| Change | Which trigger | Which block to re-check |
|--------|--------------|------------------------|
| New model | Model | The Case (does the gate still work with new model behavior?) |
| Memory feature | Feature/retention | The Data (does memory create a new retention question?) |
| Driver phone numbers | Data type | The Data (tier may change — personal phone numbers are yellow/red) |
| External partners | Audience | The People (new affected population, disclosure may change) |
| New data policy | Policy | The Data (route may need encryption controls) |
| Vendor retention terms | Vendor terms | The Data (retention assumptions may be invalid) |

**The key principle:** The record reflects decisions made under specific conditions. When those conditions change, the decisions need re-checking. Not necessarily changing — just checking.

---

**Part B — When there's no AI policy:**

If your organization has no AI policy, do NOT:
- Invent one and present it as official
- Pretend the four questions ARE the policy
- Wait until someone else creates one

Instead, write an **interim proposal** [filhaal ki tajweez — abhi ke liye ek shuru'aat] for the right owner to endorse [manzoor karna]:

```
+─────────────────────────────────────────────────────────────+
│  A USEFUL ONE-PAGE INTERIM PROPOSAL                         │
│                                                             │
│  1. APPROVED AI PRODUCTS and specific routes for work data  │
│     (which tools, through which entry points)               │
│                                                             │
│  2. SHORT LIST of data types that require confirmation      │
│     before use (customer data, financial, personal, NDA)    │
│                                                             │
│  3. THE HUMAN-GATE RULE for external or consequential       │
│     outputs (no AI output goes to a customer/partner/       │
│     regulator without human review)                         │
│                                                             │
│  4. THE REVIEW RULE for new Skills, connectors, and         │
│     high-authority tools (don't enable without checking)    │
│                                                             │
│  5. ONE NAMED ROLE OR CHANNEL for questions and incidents   │
│     (who do I ask? where do I report?)                      │
+─────────────────────────────────────────────────────────────+
```

**Important caveats:**
- In regulated environments [jahan qanoon laagu hota hai — health, finance, legal], this interim guide does NOT substitute for legal, compliance, security, privacy, or contractual approval
- This is a starting point for the right person to endorse, not a policy you enforce yourself
- The formal version may be built on frameworks like NIST AI Risk Management Framework or ISO/IEC 42001 — the four questions from this course are the practitioner's slice of such systems, not a replacement

### EXAM TRAP

> Wrong answer pattern: "The Governance Record was approved 6 months ago, so it's still valid"

Time alone is not the trigger — CHANGE is. But the exam also tests the reverse: "Something changed, so throw out the whole record and start over." No — you re-check the AFFECTED blocks, not everything. A model change may affect The Case but not The People. A new audience affects The People but not The Capability. Be surgical [sirf wahi part dekhein jo badla hai].

Second trap for the no-policy situation: "Create and enforce a comprehensive AI policy yourself." You can propose, not enforce. The policy needs organizational endorsement from whoever has authority. Presenting your proposal as official policy you wrote yourself exceeds your role.

### QUICK CHECK

**Q:** Your company's AI workflow was approved when reports went to internal management only. The audience has now expanded to include external clients. Which blocks of the Governance Record need re-checking?

**A:** At minimum: (1) The Case — consequence of error may change (external clients = higher stakes than internal management). (2) The Data — route approval may differ for external-facing outputs. (3) The People — new affected population (external clients), disclosure requirements may change, fairness implications may differ. The Capability block may or may not need re-checking depending on whether the tools changed.

---

## PART 6 RECAP: How These 4 Concepts Connect

```
MAKING GOVERNANCE SURVIVE REAL WORK

  You set up governance properly. Now time passes.
     │
     ▼
  ┌──────────────────────────────────────────────────┐
  │  GOVERNANCE DRIFTS (Concept 22)                  │
  │                                                  │
  │  Nobody breaks rules dramatically.               │
  │  They drift — one shortcut at a time.            │
  │                                                  │
  │  The Diligence Gap = distance between            │
  │  what policy says and what people do.            │
  │  Risk lives in that gap.                         │
  └──────────────┬───────────────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────────────┐
  │  AUDIT THE PROCESS (Concept 23)                  │
  │                                                  │
  │  Which workflows actually run?                   │
  │  What data actually flows?                       │
  │  Did gates actually fire?                        │
  │  What was added since last check?                │
  │  What changed?                                   │
  │                                                  │
  │  Audit the PROCESS (find system gaps)            │
  │  NOT the PERSON (find someone to blame)          │
  └──────────────┬───────────────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────────────┐
  │  FIX THE FRICTION (Concept 24)                   │
  │                                                  │
  │  Shadow AI grows because the approved path       │
  │  is harder than the unapproved path.             │
  │                                                  │
  │  Fix: Make approved path EASIER                  │
  │  Not: Send another reminder email                │
  │  Not: Just block the unapproved tools            │
  │                                                  │
  │  Ask: "What makes the approved way harder        │
  │        than the unsafe way?"                     │
  └──────────────┬───────────────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────────────┐
  │  RE-CHECK WHEN THINGS CHANGE (Concept 25)        │
  │                                                  │
  │  Triggers: model, feature, data, audience,       │
  │  permission, policy, vendor terms, consequence   │
  │                                                  │
  │  "Approved last year" ≠ "Approved now"           │
  │  if the thing that was approved has changed.     │
  │                                                  │
  │  No policy? Write an interim proposal for        │
  │  the right owner — don't invent an official one. │
  └──────────────────────────────────────────────────┘
```

**The lifecycle in one sentence:**
> Governance drifts on routine decisions → audit the process (not the person) to find gaps → fix friction that creates shadow AI → re-check when anything changes, and if no policy exists, propose one for the right owner.

**The final sentence to remember (from the entire course):**
> Classify before you act. If the answer is in the middle, name the commitment. Then write down why.

---

## EXAM-LEVEL PRACTICE QUESTIONS

### Question 1 · D6

An organization approved an AI workflow for internal reporting six months ago. Since then, three things have changed: the AI model was updated, a new connector was added with broader access than the original, and the reports now go to external auditors [baahir ke jaanch karne wale] as well as internal management.

**What is the most appropriate response?**

**A.** The workflow was approved — no action needed unless an incident occurs

**B.** Re-check all three affected blocks of the Governance Record: The Case (model change may affect gate adequacy), The Capability (new connector scope), and The People (external auditors as new audience) — update the record and share changes with the workflow owner

**C.** Shut down the workflow entirely until a new Governance Record is completed from scratch

**D.** Ask the AI model whether the workflow is still compliant given the changes

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Three re-check triggers fired: model change, connector change, and audience change. Each maps to specific blocks in the Governance Record. Re-check means reviewing the affected blocks against the new conditions — not starting over, not ignoring changes. The updated record should be shared with the workflow owner so assumptions can be challenged.
>
> **Why A is wrong:** "Approved six months ago" means nothing when the model, tools, and audience have all changed. The thing that was approved is no longer the same thing. Waiting for an incident is reactive, not governance.
>
> **Why C is wrong:** Shutting down entirely is the abandonment response. Three specific things changed — re-check those three things. You don't rebuild the entire record for targeted changes.
>
> **Why D is wrong:** AI cannot determine whether a workflow is compliant with organizational policy. It has no access to the policy, the contract, the regulatory environment, or the organizational context. Compliance determination belongs to humans.

---

### Question 2 · D7 + D6

A quarterly audit of AI usage reveals that 60% of the team is using unapproved personal AI accounts for "quick tasks," while the approved Enterprise tool is used only for "important" work.

**What is the most effective long-term fix?**

**A.** Require all team members to sign a pledge [waada-naama] confirming they will only use approved tools

**B.** Investigate why the approved path is harder than the personal account path, reduce friction on the approved route, and provide clear guidance on which tasks still require the full enterprise workflow

**C.** Block all personal AI services at the company firewall

**D.** Accept that personal accounts are fine for non-sensitive tasks and update the policy accordingly

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The friction rule. 60% of the team choosing the unapproved path is a system signal, not 60% individual failures. The fix is two-part: (1) investigate and reduce the friction that makes the approved path harder (maybe simplify login, reduce steps, add quick-access features), and (2) provide clear guidance so people know WHICH tasks need the full enterprise workflow and which could use a lighter approved path. Address the cause, not just the symptom.
>
> **Why A is wrong:** Pledges are intentions, not controls. People signed a pledge AND used personal accounts — the pledge changes nothing about the friction that drives the behavior.
>
> **Why C is wrong:** Blocking addresses the immediate symptom but not the cause. If the approved path is still harder, people will find other workarounds — different devices, mobile hotspots, home computers. You've pushed shadow AI further underground, not eliminated it.
>
> **Why D is wrong:** Personal AI accounts for work data create real risks — no organizational controls, potential training use, no audit trail, no admin visibility. You can't just accept this. But the answer isn't only enforcement — it's also making the approved path workable.

---

### Question 3 · D6

A team lead conducts the team's first AI usage audit. She reviews chat histories, scores each team member on compliance, and sends individual report cards. One team member who was consistently non-compliant receives a formal warning.

Three months later, a second audit shows perfect compliance scores for everyone.

**What is the most likely explanation?**

**A.** The formal warning was effective and all team members improved their AI practices

**B.** Team members learned to hide non-compliant usage — the real behavior went underground, and the audit now shows sanitized work instead of actual practice

**C.** The AI tools improved so much that compliance became automatic

**D.** The team no longer needs AI tools and has returned to manual processes

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** When audits are treated as individual performance reviews with consequences (formal warning), the rational response is concealment. "Perfect compliance" three months after a punitive [saza dene wala] audit is a red flag, not a success signal. The team didn't become compliant — they became better at hiding non-compliance. The organization lost the visibility it needed.
>
> **Why A is wrong:** Possible in theory, but "perfect scores for everyone" after one warning is unrealistic. Real compliance improvement is gradual and uneven — some people improve, some struggle with specific areas. Universal perfection signals hiding, not improvement.
>
> **Why C is wrong:** AI tools don't automatically enforce organizational compliance policies. Compliance is about human behavior and process, not tool features.
>
> **Why D is wrong:** Returning entirely to manual processes in response to one warning would be extreme and unlikely for the whole team.

---

### Question 4 · D6

A fast-growing company with 50 employees has no AI policy. Employees use a mix of personal and company AI tools with no guidance. A new operations manager wants to address this.

**What is the most appropriate first step?**

**A.** Ban all AI use until a comprehensive policy is developed and approved by legal counsel [qanooni mashawarchi]

**B.** Write a one-page interim proposal covering approved tools, data types requiring confirmation, the human-gate rule for external outputs, the review rule for new capabilities, and a named channel for questions — then present it to the right owner for endorsement

**C.** Create and enforce a detailed 20-page AI governance policy based on ISO 42001

**D.** Let each team create their own AI guidelines, since different teams have different needs

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The five-item interim proposal from the crash course: (1) approved tools + routes, (2) data types needing confirmation, (3) human gate for external outputs, (4) review rule for new capabilities, (5) one named contact for questions and incidents. This is practical, achievable, and — critically — presented as a PROPOSAL for the right owner to endorse, not an official policy the operations manager enforces on their own authority.
>
> **Why A is wrong:** Banning all AI in a company where 50 employees already use it daily is both disruptive and likely to create more shadow AI, not less. People will use AI — the question is whether it's visible and governed.
>
> **Why C is wrong:** A 20-page ISO-based policy for a 50-person company with no existing governance is disproportionate. And creating it yourself (without legal, compliance, and leadership input) exceeds the operations manager's authority. Start practical, formalize later.
>
> **Why D is wrong:** Fragmented per-team guidelines create inconsistency, gaps, and confusion. Which team's rules apply when teams collaborate? Who handles incidents? A lightweight company-wide starting point is better than departmental anarchy.

---

### Question 5 · D6 + D7

During a team meeting, an employee says: "I've been using a workaround for the last three months — I export the data to CSV, clean it manually, then paste it into my personal AI account because the enterprise connector takes too long to sync. It works fine."

**What is the most appropriate response from the team lead?**

**A.** Thank the employee for their honesty, then investigate WHY the enterprise connector is slow and whether the approved path can be simplified — while clarifying that personal AI accounts are not an approved route for company data

**B.** Formally reprimand the employee for violating the AI usage policy for three months

**C.** Allow the workaround to continue since it's been working without problems

**D.** Ask IT to block CSV exports to prevent this workaround

> [!success]- Reveal Answer
> **Correct: A**
>
> **Why A is correct:** This answer does three things right: (1) Acknowledges the honesty — this is exactly the kind of disclosure that punitive responses kill. (2) Investigates the friction — WHY is the connector slow? Can it be fixed? This addresses the root cause. (3) Clarifies the boundary — personal AI accounts are not approved for company data, regardless of the friction. The response treats it as a process gap (the slow connector) revealed by honest disclosure, not as an individual failure to punish.
>
> **Why B is wrong:** Reprimanding someone who voluntarily disclosed a workaround guarantees nobody will disclose workarounds again. The next ten workarounds will be hidden. The organization loses visibility.
>
> **Why C is wrong:** "Working without problems" is a known-so-far judgment. The data has been going through an unapproved route for three months — the organization can't audit it, control it, or know what happened to it. "No visible problems" doesn't mean "no risk."
>
> **Why D is wrong:** Blocking CSV exports treats the symptom (this specific workaround) without fixing the cause (slow connector). The employee — and others — will find different workarounds. And blocking a legitimate data-export feature may break other approved workflows.

---

### Question 6 · D6

A compliance officer is reviewing the company's AI governance program. She notes that the Governance Records were written 8 months ago and asks: "What should trigger a re-check?"

**Which list of triggers is MOST complete?**

**A.** Annual calendar reminder — re-check every 12 months

**B.** Model or model family, AI product feature or retention behavior, connector/Skill/plugin/permission changes, data type or sensitivity changes, audience changes, consequence changes, and law/policy/contract/vendor term changes

**C.** Only when an incident occurs — if nothing has gone wrong, the record is still valid

**D.** When the AI vendor releases a major version update

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the complete list of re-check triggers from the Governance Record footer. Change drives re-check, not calendar alone. Each trigger maps to specific blocks — a model change may affect The Case, a data change affects The Data, an audience change affects The People. The triggers cover technology changes, data changes, organizational changes, and regulatory changes.
>
> **Why A is wrong:** Calendar reminders help but are insufficient. If six things change in month 2, waiting until month 12 leaves 10 months of drift. Change is the stronger trigger.
>
> **Why C is wrong:** Waiting for incidents is reactive governance. The point of re-check triggers is to catch changes BEFORE they become incidents. "Nothing has gone wrong" may mean "nothing has been detected yet."
>
> **Why D is wrong:** Vendor updates are ONE trigger, not the only one. Audience changes, policy changes, data changes, and connector changes all require re-checks regardless of the vendor's release schedule.

---

## FULL COURSE SUMMARY: The Complete Decision Flow

```
  ┌─────────────────────────────────────────────────────────┐
  │  THE FOUR QUESTIONS (ask in order)                      │
  │                                                         │
  │  1. THE CASE: Can AI do this work?                      │
  │     → 4 screens → 3 answers → deciding factor → gate   │
  │                                                         │
  │  2. THE DATA: Can this information go in?               │
  │     → tier → discriminator → redact/confirm route       │
  │     → controls come AFTER authorization                 │
  │                                                         │
  │  3. THE CAPABILITY: Can I turn this on?                 │
  │     → 5 checks → enable/escalate/decline                │
  │     → tool trust ≠ content trust                        │
  │     → least privilege (Skills have no scopes)           │
  │                                                         │
  │  4. THE PEOPLE: Could this affect someone?              │
  │     → check exclusions → rules then judgment            │
  │     → strong escalation with specific question          │
  ├─────────────────────────────────────────────────────────┤
  │  WRITE IT DOWN                                          │
  │  Governance Record: 5 blocks, 1 page, 1 owner          │
  │  Evidence line: success, failure, monitor, residual     │
  ├─────────────────────────────────────────────────────────┤
  │  WHEN THINGS GO WRONG                                   │
  │  Stop → Record → Report → Facts → Follow instructions   │
  │  Never delete first. Clock > polish.                    │
  ├─────────────────────────────────────────────────────────┤
  │  KEEP IT ALIVE                                          │
  │  Drift happens on routine decisions                     │
  │  Audit process, not person                              │
  │  Fix friction → reduce shadow AI                        │
  │  Re-check when anything changes                         │
  └─────────────────────────────────────────────────────────┘

  THE SENTENCE: Classify before you act. If the answer is
  in the middle, name the commitment. Then write down why.
```

---

*Part 6 complete — this is the final part.*

*All 25 concepts from the Governance, Risk & Responsible Use crash course are now covered across 6 parts with 40 exam-level practice questions total.*
