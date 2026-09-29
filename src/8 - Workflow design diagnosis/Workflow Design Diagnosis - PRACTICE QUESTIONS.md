# Workflow Design & Diagnosis -- PRACTICE QUESTIONS

> **35 exam-level questions** covering Concepts 1-18 (Domain 4 + Domain 7)
> Format matches the real CCAO-F exam: workplace scenario → 4 options → judgment call
> Tagged by Part, Domain, Objective, and Concept

---

# PART 1: DESIGN (Concepts 1-4) — 6 Questions

---

## Q1 · D4 · obj 4.4 · Concept 1

A data analyst named Priya uses Claude every morning to clean and format client data before loading it into the company's CRM [Customer Relationship Management -- software jo customers ka data rakhta hai]. She's fast, accurate, and her manager is impressed. When Priya goes on maternity leave, her replacement opens Claude and types "clean this client data." The output is unusable — wrong columns, wrong format, missing validation checks [data sahi hai ya nahi, yeh checks].

**What is the most likely cause of the failure?**

- **A.** The replacement is less experienced with AI tools and needs training on prompt engineering [prompts likhne ka hunar]
- **B.** Priya had a personal habit, not a documented workflow with named steps and owners
- **C.** The AI model's performance has degraded since Priya last used it
- **D.** The replacement should use a more capable model tier for this type of data work

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 1: step vs session. Priya carried everything in her head — the format rules, the validation checks, the column mapping. None of it was written as named steps with owners. When she left, the workflow disappeared with her.
>
> - **A** is wrong — the issue isn't the replacement's skill. Even an expert can't reproduce undocumented steps they've never seen.
> - **C** is wrong — nothing changed in the model. The same tool worked yesterday.
> - **D** is wrong — a stronger model can't guess Priya's undocumented process. The information was never supplied.

---

## Q2 · D4 · obj 4.1 · Concept 2

A project manager receives this request from a director: "We need a better way to track project health across the portfolio [saare projects ka group]." He pastes the message into Claude and asks for a solution. Claude proposes a comprehensive dashboard with real-time integrations [live connections to other systems], automated alerts, and executive reporting.

The director reviews it and says: "I just wanted a weekly one-page summary I can scan on Monday mornings."

**What should the project manager have done before asking Claude?**

- **A.** Asked Claude to generate multiple solution options at different complexity levels so the director could choose
- **B.** Turned the vague request into a task definition — what is produced, for whom, how often, from what data, in what format
- **C.** Asked the director for a detailed requirements document before involving AI at all
- **D.** Used a more capable model that could infer the director's actual intent from the brief request

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 2: requirements extraction. "Better way to track project health" is a vague request, not a requirement. The five task definition questions (what, for whom, how often, from what data, what format) would have surfaced that the director wanted a weekly one-page summary — not a full platform.
>
> - **A** is wrong — generating multiple options from a vague request produces multiple vague solutions. The problem is upstream: unclear requirements.
> - **C** is wrong — you don't need to demand a formal document. The five task definition questions take 5 minutes and close the gap.
> - **D** is wrong — no model can infer unstated requirements. "Better tracking" means different things to different people. The information was never supplied (window test, C4).

---

## Q3 · D4 · obj 4.2 · Concept 3

A finance team asks Claude to build a quarterly budget summary from their expense data. The output includes a table with department totals, a variance column [farq -- actual spend vs budgeted spend], and a "% over/under budget" column. Everything is formatted correctly. The CFO [Chief Financial Officer -- finance ka boss] spots that the Marketing department's variance shows -12% when it should be -8%.

The team rephrases the prompt with more specific instructions about how to calculate variance. The next output shows -11%. Still wrong but different.

**What is the most appropriate fix?**

- **A.** Add a standing instruction to the Project that defines the exact variance formula [hisaab ka tareeqa]
- **B.** Switch to a more capable model tier that handles financial calculations more reliably
- **C.** Have the variance calculated by code execution rather than generated in prose
- **D.** Ask Claude to double-check its own arithmetic before presenting the table

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> This is Concept 3: compute, never write. The numbers are being WRITTEN (generated in text) rather than COMPUTED (calculated by running actual code). A written number and a computed number look identical on the page. Better prompting produced a different wrong number — proving this is a feature problem, not a description problem.
>
> - **A** is wrong — a standing instruction defines the formula in words, but words still produce prose-generated numbers. The issue is HOW the number is produced, not whether the formula is stated.
> - **B** is wrong — a stronger model still generates numbers in prose unless specifically asked to use code execution. More capability doesn't change the mechanism.
> - **D** is wrong — asking Claude to "double-check" uses the same mechanism that produced the error. It's like asking someone to guess again more carefully instead of using a calculator.

---

## Q4 · D4 · obj 4.2 · Concept 4

A procurement manager [khareedari ka zimmedar -- company ke liye samaan/services khareedne wala] asks Claude to analyse three vendor proposals [vendors ke proposals -- "hum yeh service itne mein denge"] and recommend which vendor to select. Claude analyses pricing, delivery timelines, and service scope from the uploaded documents. It recommends Vendor B.

The procurement manager knows — from a private conversation with the CFO last week — that Vendor B is being investigated for fraud [dhoka/fraud ki jaanch ho rahi hai] by the company's legal team. This information exists nowhere in writing.

**What test did this step fail?**

- **A.** The accountability test — the procurement manager is accountable and should have made the decision personally
- **B.** The window test — the fraud investigation cannot be put in front of the model, so the recommendation step belongs to the human
- **C.** The reversibility test — selecting a fraudulent vendor cannot be undone
- **D.** The stakes test — the financial risk of selecting the wrong vendor is too high for AI

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 4: the window test. The fraud investigation was communicated in a private conversation and exists nowhere in writing. It cannot be supplied to the model. The model filled the gap with what such a recommendation usually looks like — and recommended the vendor under investigation, at the same confidence as its valid analysis.
>
> - **A** is partially true (the manager IS accountable), but the PRIMARY failure is that the model couldn't see critical information. Accountability would matter at a later gate — the step failed before reaching that question.
> - **C** is wrong — the selection hasn't happened yet. This is the recommendation step, not the signing step. The recommendation itself is reversible.
> - **D** is wrong — high stakes alone don't decide. Analysis steps CAN be given to AI if a human judges the output (C5). The specific failure here is missing input, not high stakes.

---

## Q5 · D4 · obj 4.2 · Concept 3+4 · 〔Select 2〕

An operations team asks Claude to create a capacity plan [kitne log chahiye, kitna kaam aa raha hai -- workforce planning] for next quarter. The plan should include: (1) ticket volume projections [aage kitne tickets aayenge] based on historical data, (2) staffing recommendations, and (3) budget impact.

**Which TWO actions are most appropriate before accepting this plan?**

- **A.** Ensure all numerical projections are produced by code execution, not written in prose
- **B.** Ask a senior manager whether any upcoming decisions (hiring freezes, reorganisations) would change the recommendations
- **C.** Switch to the most capable model tier available to improve the accuracy of the projections
- **D.** Ask Claude to rate its own confidence in each projection on a scale of 1-10
- **E.** Run the same prompt three times and average the results for more reliable figures

> [!success]- 🔍 Reveal Answer
> **Correct: A, B**
>
> Two concepts are in play:
> - **A** is Concept 3: numbers that matter must be computed, not written. Budget figures and projections in prose look right but may be wrong. Code execution makes them verifiable.
> - **B** is Concept 4: the window test. Upcoming organisational decisions (hiring freezes, restructuring) exist outside the model's context. The model will fill those gaps silently with what such decisions usually look like.
>
> - **C** is wrong — a stronger model still writes numbers in prose unless told to compute. And it still can't access decisions made in meetings.
> - **D** is wrong — self-rated confidence is not validation. The model doesn't know what it doesn't know (like a hiring freeze).
> - **E** is wrong — averaging three prose-generated guesses doesn't produce a computed answer. Three wrong guesses averaged = one wrong average.

---

## Q6 · D4 · obj 4.1 · Concept 2

A team extracts requirements from a client's 40-page brief [client ka document -- "humein yeh sab chahiye"] using Claude. The extraction produces a clean table with 23 requirements, each labelled and traced to a specific section of the document.

**What should the team do NEXT?**

- **A.** Begin building the solution, since the requirements are now clearly structured and traceable [har requirement ka source pata hai]
- **B.** Send the requirements table to the client for validation [tasdeeq -- "yeh sahi hai?"] before starting any work
- **C.** Review the extracted list for ambiguity — which requirements could two team members interpret differently, and which imply something not stated directly
- **D.** Add a confidence score to each requirement based on how clearly it was stated in the original document

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> This is Concept 2: extract, then ATTACK. The first pass (extraction) finds what was WRITTEN. The second pass (attack) finds what was MEANT. Requirements that two people could read differently, or that imply something not stated, are where teams get burned.
>
> - **A** is wrong — building on unchallenged requirements is how unclear requirements get discovered after the work is built, when the cost is highest.
> - **B** sounds reasonable but is premature — you should attack your own list before asking the client, so you're bringing them specific questions about ambiguity, not just a copy of their own document back to them.
> - **D** is wrong — a confidence score doesn't surface ambiguity. A requirement can be stated with perfect clarity and still be ambiguous about what it MEANS in practice.

---

# PART 2: THE MAP (Concepts 5-6) — 6 Questions

---

## Q7 · D4 · obj 4.4 · Concept 5

An insurance company is redesigning its claims processing workflow [insurance claims ka process -- customer bolta hai "mera nuksaan hua" aur company decide karti hai kitna paisa dena hai]. A team member argues: "The final payout calculation [kitna paisa dena hai] should stay human because the department manager is accountable for all payouts."

Another team member disagrees: "The calculation itself can be done by AI, because the manager reviews and approves every payout at the next step."

**Which position is correct, and why?**

- **A.** The first team member, because accountability for payouts means every step in the payout process must be human-retained
- **B.** The second team member, because the calculation is an input that the manager judges at the next step — accountability sits at the approval, not the computation
- **C.** Neither — the decision should be based on how accurately AI has performed the calculation in past testing
- **D.** The first team member, because financial calculations are inherently high-stakes and must always be human-performed

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 5: the accountability criterion. The sharper question is: is this step THE CALL someone answers for, or an INPUT someone judges? The payout calculation is an input. The manager's approval is the decision. Accountability sits at the approval gate, not at the computation.
>
> - **A** is wrong — accountability for the overall process doesn't mean every sub-step must be human. The manager's review gate is where accountability is exercised.
> - **C** is wrong — past performance is explicitly NOT a criterion (C5). You classify steps by reversibility, stakes, and accountability — not by how well AI performed in testing.
> - **D** is wrong — "financial calculations must always be human" is not a rule. The contract review map (C6) shows a penalty-exposure calculation as AI-appropriate precisely because it's checked at the next step. What matters is the structure around it.

---

## Q8 · D4 · obj 4.4 · Concept 5

A logistics company [samaan pohanchane wali company -- shipping, delivery] is mapping its delivery scheduling workflow. One step involves sending the final schedule to drivers via SMS. The schedule includes route assignments [kaun si route kis driver ko] and delivery windows [kitne baje tak pohanchana hai].

**Which criterion MOST DIRECTLY decides that this step should be human-retained?**

- **A.** Accountability — the operations manager is accountable for delivery performance
- **B.** Reversibility — a sent SMS cannot be unsent, and drivers will act on it immediately
- **C.** Stakes — a wrong schedule could result in missed deliveries and lost revenue [amdani ka nuksaan]
- **D.** All three criteria equally — this is a case where you need to add them up

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 5: name the ONE criterion that decides. Sending an SMS to drivers is IRREVERSIBLE — once sent, drivers act on it. You can't unsend it. While stakes are high (C) and accountability exists (A), the criterion that MOST DIRECTLY decides is reversibility. A sent message with wrong routes causes immediate real-world action that can't be recalled.
>
> - **A** is true but not what decides THIS step. The manager is accountable for the whole workflow, not specifically because this step sends an SMS.
> - **C** is true but secondary. High stakes matter, but the irreversibility is what makes this step definitively human — even if stakes were lower, you still can't unsend an SMS.
> - **D** is wrong — you don't add criteria up. Usually one criterion decides and the others agree. Name the one that carries the row.

---

## Q9 · D4 · obj 4.4 · Concept 6

A team maps an expense-checking workflow [kharche check karne ka process]. One step is: "AI flags expenses that violate the company travel policy [safar ke kharche ki policy -- kitna hotel pe kharch kar sakte ho, business class le sakte ho ya nahi, etc.]." Nobody reviews the flags. Flagged expenses are automatically held for processing.

In a separate company, a legal team maps a contract review workflow. One step is: "AI flags clauses that depart from the company playbook." A lawyer reviews every flag at the next step.

**The flagging step is classified differently in the two workflows. What explains the difference?**

- **A.** Legal work is inherently higher stakes than expense processing, so legal flagging needs more human involvement
- **B.** In the first workflow, nothing reads the flags after them — the flag IS the decision. In the second, a lawyer stands after it and checks
- **C.** The expense-checking AI is less accurate than the legal AI, so it needs human oversight [insaani nigrani]
- **D.** Expense flagging is mechanical and suits AI, while legal flagging requires judgment and suits humans

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 6: the same step changes columns based on whether anyone stands AFTER it. In the legal workflow, a lawyer reads every flag → the flagging step is AI-appropriate (errors are caught). In the expense workflow, nothing reviews the flags → the flag IS the decision → it must be at least collaborative.
>
> - **A** is wrong — the classification isn't about which field is "higher stakes." It's about the structure: who reads the output at the next step?
> - **C** is wrong — accuracy of the AI isn't a classification criterion. Past performance is not one of the three criteria.
> - **D** is wrong — both flagging steps are equally "mechanical." The task is the same. What changed is the structure around it.

---

## Q10 · D4 · obj 4.4 · Concept 5+6

A bank's compliance team [bank ka qanoon/rules check karne wala team] maps a transaction monitoring workflow [transactions pe nazar rakhna -- koi fraud toh nahi]. Step 3 is: "Compute risk score for each flagged transaction using code execution." Step 4 is: "Compliance officer reviews flagged transactions and decides whether to file a report."

A new manager proposes removing Step 4 to reduce processing time. "The risk scores from code execution are mathematically accurate," she argues. "We can set a threshold [hadd] — anything above 80 gets auto-reported."

**What is the most significant problem with this proposal?**

- **A.** Code execution is not accurate enough for compliance calculations
- **B.** Removing Step 4 means Step 3 loses the gate that made it AI-appropriate — the computation becomes the decision, with no human judging it
- **C.** The threshold of 80 is arbitrary [man-maani] and should be set by a data scientist
- **D.** Transaction monitoring must always be fully human to satisfy regulators [sarkari nazar rakhne waale]

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is the key gotcha from Concept 6: a step is AI-appropriate BECAUSE someone checks its output at the next step. Remove the checker → the step changes classification. Step 3 was safe because Step 4 existed. Remove Step 4 and the risk score IS the filing decision — a high-stakes, irreversible compliance action with nobody standing after it.
>
> - **A** is wrong — code execution IS accurate. That was never the issue. The issue is who reviews the output before it becomes a decision.
> - **C** may be true but is not the SIGNIFICANT problem. Even a perfectly calibrated threshold means a machine is making a compliance decision with no human gate.
> - **D** is wrong — not all transaction monitoring must be fully human. AI CAN compute risk scores. But someone must JUDGE before a report is filed. The structure matters.

---

## Q11 · D4 · obj 4.4 · Concept 5+6 · 〔Select 2〕

A company maps its customer onboarding [naye customer ko system mein laana] workflow. Consider these two steps:

- **Step A:** AI drafts a personalised welcome email to the new customer
- **Step B:** AI sends the welcome email directly to the customer

**Which TWO statements are correct?**

- **A.** Step A is collaborative or AI-appropriate because the draft can be rewritten if wrong — it's reversible
- **B.** Step B is human-retained because sending an email is irreversible — once sent, the customer reads it
- **C.** Step A must be human-retained because customer communication is always too important for AI
- **D.** Step B is AI-appropriate if the drafts have been accurate for several months
- **E.** Steps A and B should have the same classification since they're part of the same communication task

> [!success]- 🔍 Reveal Answer
> **Correct: A, B**
>
> - **A** is correct — drafting is reversible (you can rewrite a draft). Whether it's AI-appropriate or collaborative depends on whether someone reviews it, but reversibility makes it eligible for AI involvement.
> - **B** is correct — sending is irreversible. Once the email is sent, the customer has it. This step should be human-retained (or at minimum have a human gate before it).
>
> - **C** is wrong — "customer communication is always too important" is not how the criteria work. A draft that someone reviews before sending can be AI-appropriate. The criteria are reversibility, stakes, and accountability — not "importance."
> - **D** is wrong — past accuracy is not a criterion (C5). "Accurate for months" is halo delegation (C7) — competence at drafting is not evidence about sending.
> - **E** is wrong — different steps in the same task can have different classifications. Drafting and sending are different KINDS of steps with different reversibility.

---

## Q12 · D4 · obj 4.4 · Concept 5

A hospital's administrative team maps a patient discharge workflow [patient ko hospital se ghar bhejne ka process]. One step is: "Generate discharge instructions [ghar jaane ke baad kya karna hai -- dawai, follow-up, parhez] for the patient based on their treatment record."

The team classifies this as AI-appropriate because "it's just generating a document from existing data."

**What question should they ask to test whether this classification is correct?**

- **A.** Has the AI generated accurate discharge instructions in past testing?
- **B.** Is a clinician [doctor ya nurse] reviewing and approving these instructions before they reach the patient?
- **C.** Can the AI access the complete treatment record in its context window?
- **D.** Is the discharge instructions template standardised across the hospital?

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 5: the accountability criterion. Discharge instructions are medical documents that patients follow. If wrong (wrong medication dose, missing allergy warning), the consequence is patient harm. The step CAN be AI-appropriate — but ONLY if a clinician reviews and approves before the instructions reach the patient. "Just generating a document" ignores that someone must judge the output.
>
> - **A** is wrong — past testing performance is not a criterion. Good test results don't classify a step.
> - **C** is important (window test, C4) but isn't the question that tests the CLASSIFICATION. Even if AI can see everything, the step still needs a gate because of stakes and accountability.
> - **D** is about implementation (what carries the step), not ownership (who owns it). Standardised templates help, but they don't replace human review of medical content.

---

# PART 3: MAP ERRORS + MAP OWNERSHIP (Concepts 7-8) — 6 Questions

---

## Q13 · D4 · obj 4.4 · Concept 7

A property management company [jaydaad ka intizaam karne wali company -- buildings manage karti hai] uses AI to generate monthly maintenance reports. For 6 months, the reports have been consistently excellent — well-structured, accurate, thorough.

Based on this track record, the team decides to let AI also prioritise maintenance requests [kis kaam ko pehle karna hai] and automatically assign work orders [kaam ke orders] to contractors [kaam karne waale thekedar].

**What mapping error is this?**

- **A.** Mapping the tool instead of the work — the workflow is being shaped around the AI's reporting capability
- **B.** Halo delegation — report-writing competence is being used as evidence for prioritisation and assignment decisions
- **C.** An unstaffed gate — the review of reports has weakened over time
- **D.** Over-delegation caused by understaffing — the team doesn't have enough people to do the work manually

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is halo delegation (Concept 7). The team is carrying the credit from one step (report writing) forward to completely different steps (prioritising and assigning). Report-writing competence is evidence about reports. It is NOT evidence about prioritisation decisions or contractor assignments. These are different kinds of steps with different consequences.
>
> - **A** is wrong — the workflow isn't being shaped around a tool. The team isn't adding a step because the tool is good at it. They're handing EXISTING steps to AI based on a DIFFERENT step's performance.
> - **C** is wrong — there's no mention of a review step weakening. The reports themselves are fine. The error is giving AI NEW responsibilities based on OLD successes.
> - **D** is wrong — understaffing might explain WHY they're tempted, but it doesn't change WHAT the error is. The classification should be based on the three criteria, not on how busy the team is.

---

## Q14 · D4 · obj 4.4 · Concept 7

A consulting firm [mashwara dene wali company] uses AI to draft client deliverables [woh documents jo client ko bheje jaate hain]. A senior consultant is supposed to review every draft before it goes to the client.

In Q1, the senior consultant reviewed 15 deliverables and spent an average of 45 minutes on each. In Q3, the volume has grown to 40 deliverables per quarter. The consultant still "reviews" every one, but now averages 8 minutes each. No errors have been reported.

**What is the most appropriate concern?**

- **A.** The AI's quality has improved so much that shorter reviews are justified
- **B.** The review gate may be unstaffed — 8 minutes per deliverable at this complexity level suggests the reviews are no longer substantive [kaam ki -- asli check nahi ho rahi]
- **C.** The firm should hire additional reviewers to bring the review time back to 45 minutes
- **D.** No errors reported means the process is working well and no changes are needed

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is the unstaffed gate (Concept 7). The review went from 45 minutes (substantive) to 8 minutes (likely a glance-and-click). Volume nearly tripled. Nobody decided to reduce the review. Nobody changed the map. The map still says "senior consultant reviews." But the review is no longer really done.
>
> - **A** is wishful thinking — the 8 minutes might be justified IF someone verified that. But the scenario gives no evidence of this. The simplest explanation: volume overwhelmed the gate.
> - **C** might be part of the solution, but it's not the CONCERN to raise. The concern is that the gate is unstaffed. How to fix it is a separate question.
> - **D** is the most dangerous answer — "no errors reported" and "no errors occurring" are NOT the same thing. An unstaffed gate has zero signal at the moment of failure (C8). The errors may be happening and simply not being caught.

---

## Q15 · D4 · obj 4.4 · Concept 7

A customer support team built an excellent AI Skill [saved procedure] that summarises support tickets into a structured template [fixed format]. The team loves it. When they redesign their complaint-handling workflow, they add a new step: "Summarise every incoming complaint into the structured template before any other processing."

A manager asks: "Why are we summarising every complaint? The agents [support staff] used to read the original complaint directly."

**What mapping error does this suggest?**

- **A.** Halo delegation — the success of the Skill at summarising is being carried to other steps
- **B.** An unstaffed gate — nobody is checking the summaries
- **C.** Mapping the tool instead of the work — the workflow has been shaped around a Skill the team likes, rather than what the work requires
- **D.** Over-delegation — summarising should be a human task

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> This is mapping the tool instead of the work (Concept 7). The stated reason for the step is that the Skill is excellent — that's a reason about the TOOL, not about the WORK. The workflow existed before without this step. The step was added because the team liked the Skill, not because the work needed it.
>
> - **A** is wrong — halo delegation is carrying credit from Step A to Step B. Here, there's no "previous step" that went well. A brand new step was ADDED because of the tool.
> - **B** may or may not be true, but it's not what the scenario describes. The issue isn't a weakened gate — it's a step that shouldn't exist in the first place.
> - **D** is wrong — the issue isn't WHO does the summarising. It's whether the summarising step is needed at all. The work didn't require it. The tool did.

---

## Q16 · D4 · obj 4.4 · Concept 7 · 〔Select 2〕

A team's AI workflow for processing invoices [bills] has these steps:

| Step | Owner | Stated Reason |
|------|-------|---------------|
| 1. Extract line items from invoice | AI | Mechanical extraction |
| 2. Match line items to purchase orders [khareedari ke orders] | AI | "Extraction has been accurate for 5 months" |
| 3. Flag mismatches [jo match nahi karte, unhe mark karo] for review | Collaborative | AI flags, accountant reviews |
| 4. Approve payment | Human | Final decision |

**Which TWO mapping errors are present?**

- **A.** Step 2's stated reason is halo delegation — extraction accuracy (Step 1) is used as evidence for matching (Step 2)
- **B.** Step 3 is an unstaffed gate — the scenario says the accountant reviews, but we should verify this is actually happening
- **C.** Step 1 is mapping the tool instead of the work
- **D.** Step 4 should be AI-appropriate since Steps 1-3 have strong quality controls
- **E.** Step 2 should use code execution instead of a Skill

> [!success]- 🔍 Reveal Answer
> **Correct: A, B**
>
> - **A** is correct — Step 2's reason cites the accuracy of EXTRACTION (Step 1) as evidence for MATCHING (Step 2). These are different tasks. Extraction pulls data off a page. Matching compares two datasets. Success at one is not evidence for the other. Classic halo delegation.
> - **B** is correct — Step 3 is designed as collaborative, but the question of whether the accountant is ACTUALLY reviewing (or just clicking approve) should always be raised. An unstaffed gate looks exactly like a working gate on the map.
>
> - **C** is wrong — Step 1 (extract line items) is genuine work the workflow needs. It's not added because of a tool.
> - **D** is wrong — Step 4 is the decision someone answers for. Strong quality controls upstream don't change that this IS the approval step. Moving it to AI would be over-delegation.
> - **E** may be a good implementation suggestion, but it's about HOW the step is carried (Layer 3), not a mapping error (Layer 2).

---

## Q17 · D4 · obj 4.4 · Concept 8

A company built an AI-assisted hiring workflow 9 months ago. The map says: "AI screens resumes [CVs chhaano] against job requirements. HR coordinator [HR ka banda] reviews AI's shortlist [chhanti hui list] before scheduling interviews."

Since then: the HR coordinator changed roles 3 months ago, the volume of applications doubled, and two new job categories were added that weren't in the original requirements.

No errors have been reported. The map has not been updated.

**What is the most appropriate action?**

- **A.** No action needed — no errors means the workflow is functioning correctly
- **B.** Conduct a scheduled map review: check if steps were added or removed, verify the gate is still staffed, confirm the configuration is current
- **C.** Rebuild the entire workflow from scratch to account for all the changes
- **D.** Add a more capable AI model to handle the increased volume and new job categories

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 8: map ownership and scheduled reads. Three things changed (staffing, volume, scope) but the map didn't. The four review questions apply directly:
> - Q1: Were steps added/removed? (New job categories may need new steps)
> - Q2: Who reviewed the shortlist last week? (The HR coordinator CHANGED ROLES — who replaced them?)
> - Q3: Has volume or stakes changed? (Volume DOUBLED — the gate may be overwhelmed)
> - Q4: Is configuration current? (New job categories need updated requirements)
>
> - **A** is dangerous — "no errors reported" is not "no errors occurring." Maps, gates, and configurations all decay with ZERO signal (C8). The HR coordinator who left may have been replaced by nobody.
> - **C** is excessive — a 20-minute review would identify what needs changing. Rebuilding wastes the design work that's still valid.
> - **D** is wrong — this is a governance/process issue, not a model capability issue. A stronger model doesn't replace a missing reviewer or outdated job requirements.

---

## Q18 · D4 · obj 4.4 · Concept 8 · 〔Select 2〕

A map review of an AI-assisted customer reporting workflow reveals that the person listed as reviewer left the company two months ago. Reports have continued going out on schedule. No complaints have been received from clients.

**Which TWO conclusions are most appropriate?**

- **A.** The review gate has been unstaffed for two months — the reports going out are effectively unreviewed
- **B.** The quality of reports must be acceptable since no complaints were received
- **C.** The scope of potential damage must be assessed — how many reports went out unreviewed, and to which clients
- **D.** The workflow should be shut down permanently since it operated without oversight [nigrani]
- **E.** The AI model has demonstrated it can operate reliably without human review

> [!success]- 🔍 Reveal Answer
> **Correct: A, C**
>
> - **A** is correct — the reviewer left. Nobody replaced them. The map still says "reviewed by [name]." The gate is unstaffed (C7). Reports have been going out with no real review for two months.
> - **C** is correct — this is Concept 17's scoping question applied here. Two months of unreviewed reports = the damage isn't "this week's report." It's every report since the reviewer left. You need to know how many and to whom.
>
> - **B** is wrong — "no complaints" does not mean "no errors." Clients may not have caught errors. Or the errors may be subtle. An unstaffed gate produces zero signal at failure.
> - **D** is excessive — the fix is to staff the gate (assign a new reviewer), not shut everything down. The design was correct; the staffing failed.
> - **E** is wrong — this is exactly halo delegation in disguise. "It ran without review and nobody complained" is not evidence that review is unnecessary. It's evidence that nobody was checking.

---

# PART 4: BUILD + ESCALATION (Concepts 9-10) — 5 Questions

---

## Q19 · D4 · obj 4.3 · Concept 9

A marketing team asks AI to build an internal reporting dashboard [data dikhane wali screen] as an artifact [AI ke andar bana hua working web page]. Cycle 1 produces five charts that look great. In Cycle 2, they ask for a date filter and a "Total Leads" row [kitne total leads aaye -- leads = potential customers]. The filter works. The "Total Leads" shows 2,340. The team's CRM says the real number is 2,780.

The team rewrites the prompt twice, each time more precisely describing how to calculate the total. The number changes each time (2,410, then 2,290) but is never correct.

**What should the team do?**

- **A.** Switch to a more capable model tier that handles data calculations more accurately
- **B.** Stop reprompting — this is a feature problem, not a description problem. Move the total to code execution
- **C.** Break the dashboard into smaller prompts, one chart at a time, so the model can focus better
- **D.** Accept that AI dashboards will have small inaccuracies and round the total to the nearest hundred

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 9: the critical distinction between a description problem and a feature problem. A description problem is fixed by better words. A feature problem needs a different capability. The total is being WRITTEN (generated in prose) not COMPUTED (calculated by code). Each reprompt gives a different wrong number — proving the mechanism is wrong, not the description.
>
> - **A** is wrong — a stronger model still generates numbers in prose unless told to compute. More capability doesn't change the mechanism.
> - **C** is wrong — breaking prompts apart doesn't change HOW the total is produced. Smaller prompts with prose-generated numbers = smaller prompts with wrong numbers.
> - **D** is wrong — accepting known inaccuracies in a number that feeds business decisions is not appropriate. The fix exists (code execution) and costs nothing extra.

---

## Q20 · D4 · obj 4.3 · Concept 9

An HR team is building an onboarding checklist [naye employee ke liye kaam ki list] using AI's build loop. In Cycle 1, the checklist is functional but plain. In Cycle 2, they ask for company branding [company ka logo, rang, design] and a print-friendly layout [chhapne layiq design]. It works perfectly first time.

In Cycle 3, they ask for an automated calculation of each new hire's probation end date [muqarrar muddat ka aakhri din -- usually 3-6 months after joining] based on their start date. The dates look reasonable but two are wrong by one day.

**Which cycle was a description problem and which was a feature problem?**

- **A.** Both were description problems — the team just needed to be more specific about the dates
- **B.** Cycle 2 was a description problem (better words fixed it). Cycle 3 is a feature problem (dates need code execution, not prose)
- **C.** Cycle 2 was a feature problem (branding needs a design tool). Cycle 3 was a description problem (the date rules weren't clear)
- **D.** Both were feature problems — neither branding nor dates can be handled by a standard AI model

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 9: telling the two apart. Cycle 2 (branding + layout) worked first time with one sentence — AI had the capability, it just needed to be TOLD. That's a description problem. Cycle 3 (date calculations) produced numbers that look right but are wrong by a day. Dates are calculations. No amount of describing "please compute dates correctly" changes HOW dates are generated. This needs code execution — a feature problem.
>
> - **A** is wrong — being "more specific about dates" was already tried conceptually. The issue isn't description but mechanism.
> - **C** is backwards — branding worked with just a description (proving it was a description problem). Date calculation is the one that needs a different feature.
> - **D** is wrong — branding worked fine as a description problem. Only the dates need a different capability.

---

## Q21 · D4 · obj 4.3 · Concept 10

A business analyst built a small AI-powered cost estimator [lagat ka andaaza lagane wala tool] as an artifact inside a Project. Initially, only she and two colleagues used it for internal quotes [andarooni andaaze]. Over 4 months, the tool has been adopted by the sales team (12 people), and the finance director now uses its estimates in board presentations [board ke saamne pesh ki jaane wali reports].

The analyst maintains it by updating prompts and data files. Last week she was ill and nobody could fix a data error for 3 days.

**What is the most appropriate next step?**

- **A.** Train a backup person to maintain the prompts and data files so coverage exists when the analyst is unavailable
- **B.** Recognise the escalation signal — other people depend on this tool. Hand it to engineering for proper infrastructure [bunyaadi system banana -- uptime, access control, documentation]
- **C.** Ask the sales team to stop using it since it was built for internal use only
- **D.** Improve the prompts so the tool requires less maintenance and can run independently

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 10: the escalation signal. The tool went from 3 internal users to 12+ users plus a finance director's board presentations. Other people DEPEND on it as infrastructure. It now needs uptime, access control, documentation, and someone to call when it breaks. A training backup (A) is a band-aid — the fundamental issue is that infrastructure is running on prompt-and-iterate.
>
> - **A** addresses the symptom (nobody available) but not the cause (infrastructure masquerading as a personal tool). A backup prompter doesn't give you uptime guarantees or access control.
> - **C** is not realistic — you can't un-adopt a tool 12 people rely on by asking them to stop. The escalation already happened.
> - **D** is wrong — "runs independently" with no engineering means no one monitors it, no one can fix it, and the finance director's board numbers depend on a prompt nobody maintains. This makes the problem worse, not better.

---

## Q22 · D4 · obj 4.3 · Concept 10

A data analyst has built the same quarterly client summary three times now. Each time: pull data from the CRM export, compute growth rates [kitni tezi se badh raha hai], compare to targets, format as a one-page PDF. The process is identical each time.

**What signal is this, and what is the correct response?**

- **A.** Escalation signal — hand the process to engineering to build as a proper application
- **B.** Repetition signal — the process shape is stable. Turn it into a Skill so it runs the same way every time
- **C.** Friction signal — the analyst is wasting time on repeated work and should hire an assistant
- **D.** Stale configuration signal — the quarterly process needs to be updated

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 10: two signals that sound alike. "I've solved this the same way three times" is the repetition signal — the method has stopped changing and the shape is stable. This should become a Skill (saved procedure that runs identically every time), NOT escalated to engineering.
>
> - **A** is wrong — the escalation signal is about DEPENDENCY (other people rely on your tool). Nobody else depends on this quarterly summary. It's one analyst's recurring task. No engineering needed.
> - **C** is partially right (it IS friction), but the fix isn't hiring someone — it's automating the stable process into a Skill.
> - **D** is wrong — nothing is stale. The process works correctly. It's just being rebuilt manually each quarter instead of being saved.

---

## Q23 · D4 · obj 4.3 · Concept 9+10

A team built a client reporting tool using AI artifacts. It started as a simple internal dashboard. After 6 months, the following are all true:

1. Three departments use it weekly
2. A VP includes its data in board reports
3. The numbers are generated in prose, not code execution
4. The team has been running the build loop (ideate, prototype, feedback, refine) for 6 months
5. When it broke last month, no one could fix it for a week

**Which TWO issues are the most urgent to address?**

- **A.** The numbers being in prose rather than code execution (feature problem from C9)
- **B.** The build loop has been running for 6 months — at some point you must stop iterating
- **C.** The tool has become infrastructure — three departments and a VP depend on it (escalation signal from C10)
- **D.** The tool broke for a week — this means AI artifacts are unreliable for this use case
- **E.** The VP shouldn't be using internal tool data in board reports

> [!success]- 🔍 Reveal Answer
> **Correct: A, C**
>
> Two concepts in play:
> - **A** is urgent — prose-generated numbers in a tool that feeds a VP's board report is a ticking time bomb. These must be moved to code execution immediately. A wrong number in a board report is high-stakes and the VP won't know it's wrong (C3).
> - **C** is urgent — this is the escalation signal (C10). Multiple departments + a VP = infrastructure. It needs engineering: uptime, access control, documentation, and someone on call. A one-week outage with no fix is proof it's outgrown prompt-and-iterate.
>
> - **B** is true in principle but not the urgent issue. The build loop should stop, but the REASON it should stop is that the tool is now infrastructure (C), not because loops have a time limit.
> - **D** is wrong — the tool broke because nobody could maintain it (an infrastructure problem), not because artifacts are unreliable.
> - **E** is not actionable — you can't tell a VP not to use data. You CAN make sure the data is computed correctly (A) and the tool is properly supported (C).

---

# PART 5: DIAGNOSE (Concepts 11-12-13) — 6 Questions

---

## Q24 · D7 · obj 7.1 · Concept 11

A legal assistant uses Claude to draft standard client engagement letters [woh khat jo bataata hai ke company client ke saath kaise kaam karegi -- fees, scope, terms]. The letters have been accurate for 5 months. This week, the letters reference the firm's old fee structure [purani fees ki list] instead of the new one updated last month.

**What is the most likely cause, and what is the cheapest confirmation?**

- **A.** Under-specification — the prompt doesn't mention which fee structure to use. Confirmation: re-read the prompt for missing information
- **B.** Context overload — the conversation is too long and early instructions are lost. Confirmation: restate in a fresh session
- **C.** Stale configuration — the knowledge base still contains the old fee structure. Confirmation: open the knowledge source and check its date
- **D.** Wrong model — the current tier isn't capable enough for legal work. Confirmation: try a more capable model

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> This is Concept 11: four causes told apart by timing. The key timing clue: "accurate for 5 months" then wrong this week = "USED TO WORK, now doesn't." This points to stale configuration. The fee structure changed last month but the knowledge base wasn't updated.
>
> - **A** is wrong — the timing rules it out. Under-specification shows up from the FIRST answer. These letters worked for 5 months, so the prompt carried what it needed.
> - **B** is wrong — context overload shows as degradation WITHIN a session. This is a problem that appeared ACROSS sessions (last month's letters were fine, this week's aren't).
> - **D** is wrong — the model didn't change, and the letters worked for 5 months on this tier. The capability is proven. What changed is the data it's reading.

---

## Q25 · D7 · obj 7.1 · Concept 11

An analyst asks Claude to summarise a 20-page market research report [market ki research ka report]. The first summary is vague, missing the specific market size figures, competitor names [competition ki companies ke naam], and growth projections [kitni tezi se market badhegi].

The analyst has just started a fresh conversation. This is the first message.

**Which cause is most likely, and which cause is ruled out by the timing?**

- **A.** Most likely: under-specification. Ruled out: context overload — it's a fresh conversation with no accumulated context
- **B.** Most likely: context overload. Ruled out: stale configuration — the report was just uploaded
- **C.** Most likely: wrong model. Ruled out: under-specification — the request was clear enough
- **D.** Most likely: stale configuration. Ruled out: wrong model — the model is the same as always

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> This is Concept 11: timing tells you where to look. The summary was wrong on the FIRST response in a FRESH chat. This timing points to under-specification — the prompt didn't say what a "good summary" means (which figures, which competitors, what level of detail).
>
> Context overload is ruled out immediately because it's a fresh conversation. There's no accumulated context to overflow.
>
> - **B** is wrong — context overload can't happen on the first message of a new conversation.
> - **C** is wrong — you shouldn't jump to "wrong model" (step 3) before checking the prompt (step 1). Also, the request may SEEM clear to the analyst but missing key specifications.
> - **D** is wrong — stale configuration causes "used to work, now doesn't." This is a first attempt, not a regression.

---

## Q26 · D7 · obj 7.1 · Concept 12

A project manager's weekly status reports [hafta-waar kaam ki report] have been getting progressively worse over a 45-message conversation. The format is drifting, action items [karne wale kaam] are being missed, and the tone has shifted from professional to casual.

The project manager's first instinct is to start a new Project with better standing instructions.

**What should she do INSTEAD?**

- **A.** Switch to a more capable model that can handle longer conversations
- **B.** Start a fresh session and restate her key instructions — this is likely context overload, which is cheaper to test than rebuilding the Project
- **C.** Rewrite the prompt with more specific formatting instructions
- **D.** Accept that AI quality naturally degrades over time and manually edit the outputs

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 12: the diagnostic sequence, cheapest first. The timing clue: "progressively worse over a 45-message conversation" = started fine, then DEGRADED. This points to context overload (Step 2 in the sequence). The cheapest test: restate the instructions in a fresh session. If the quality returns → context overload confirmed.
>
> - **A** is Step 3 (feature/model), attempted before Step 2. The diagnostic sequence runs cheapest first. A fresh session costs nothing and takes seconds.
> - **C** is Step 1 (prompt), but the timing already told us: it WORKED at the start. The prompt was fine. Rewriting it is treating the wrong cause.
> - **D** is giving up (never an appropriate answer when cheaper fixes exist). Quality doesn't "naturally degrade" — it degrades when context overflows, which has a specific fix.

---

## Q27 · D7 · obj 7.1 · Concept 12

An operations team's AI-generated inventory reports [godown/warehouse ka stock ka report] consistently show slightly wrong reorder quantities [kitna naya stock maangna hai]. The error is always the same type: the numbers are close but never exact. This happens in every session, from the first message, regardless of how the prompt is written.

The team has tried: rewriting the prompt (3 times), starting fresh sessions, and adding more context about calculation rules.

**What is the most appropriate next step?**

- **A.** Question whether this task is a fit for AI — the team has tried everything
- **B.** Check whether the calculation is being generated in prose instead of code execution — one repeatable error type suggests wrong feature
- **C.** Update the knowledge base with more detailed inventory data
- **D.** Escalate to engineering to build a custom inventory management system

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 12: the diagnostic sequence. The team did Steps 1 and 2 (prompt + fresh sessions). "One repeatable error type" — always the same kind of numerical inaccuracy — points to Step 3: wrong feature or model. "Subtly wrong numbers" is the classic sign that a calculation is being asked for in prose instead of code execution.
>
> - **A** is Step 5, attempted before Step 3. The team skipped from Step 2 straight to "give up." Steps 3 and 4 haven't been checked yet. "Reached first, 'doesn't fit' is an excuse. Reached last, it's a conclusion."
> - **C** is Step 4 (configuration). The timing ("from the first message, every session") doesn't match stale configuration ("used to work"). And the error type (always slightly wrong numbers) specifically points to Step 3.
> - **D** is massive overkill. The fix might be as simple as adding "use code execution to calculate reorder quantities" to the prompt.

---

## Q28 · D7 · obj 7.2 · Concept 13

A content manager reviews AI-drafted blog posts every week. Her feedback is always some version of: "It doesn't sound like us." She manually edits the tone every time. This has been happening for 3 months.

**What is the most appropriate action?**

- **A.** Switch to a different model that writes in a more natural tone
- **B.** Accept that AI drafts will always need manual tone editing — it's part of the workflow
- **C.** Turn the reaction into an instruction: define what "sounds like us" means specifically (sentence length, formality level, vocabulary) and add it as a standing instruction or brand voice document in the knowledge base
- **D.** Ask the AI to match the tone of previously published blog posts by pasting examples into each chat

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> This is Concept 13: turning a reaction into an instruction. "Doesn't sound like us" is a REACTION (names how it feels). The instruction version: "Use short sentences, avoid jargon, lead with a question, conversational but never casual." The lever: a standing instruction (if it's rules about tone) or the knowledge base (if it's a brand voice guide document).
>
> - **A** is wrong — "sounds like us" is company-specific. No model inherently knows your brand voice. The information needs to be SUPPLIED, not hoped for from a different model.
> - **B** is wrong — accepting 3 months of repeated manual editing when a standing instruction could fix it permanently is the exact pattern Concept 14 warns against (a fix that exists but lives in someone's head).
> - **D** is partially right (examples help), but pasting into "each chat" means redoing this work every session. The examples belong in the knowledge base (C14: reference → knowledge base), and the rules belong in standing instructions. The fix should be PROMOTED, not repeated.

---

## Q29 · D7 · obj 7.2 · Concept 13 · 〔Select 2〕

An analyst receives these three complaints about AI-generated reports from different stakeholders [zimmedar log -- bosses, clients]:

1. The CFO says: "The reports are too long."
2. A regional manager says: "It keeps using headquarters [head office] terminology that my team doesn't understand."
3. A client says: "The format changes every time — I never know where to find the key number."

**Which TWO actions correctly turn a reaction into an instruction AND place it in the right home?**

- **A.** "Limit all reports to one page, lead with the three most impactful metrics" → standing instruction
- **B.** "Use regional terminology from the attached glossary [terminology ki list] instead of headquarters terms" → knowledge base for the glossary + standing instruction for the rule
- **C.** "The reports are too long" → add to the standing instruction as-is, since it's direct feedback from the CFO
- **D.** "Make the format consistent" → tell the AI to try harder on consistency next time
- **E.** "Use a different model that naturally writes shorter reports" → model change

> [!success]- 🔍 Reveal Answer
> **Correct: A, B**
>
> - **A** is correct — "too long" (reaction) → "one page, three metrics" (instruction) → standing instruction (rule that always applies). Names the lever, names the home.
> - **B** is correct — "headquarters terminology" (reaction) → "use regional terms from the glossary" (instruction) → knowledge base for the glossary (reference material) + standing instruction for the rule (always use it). TWO homes because there are two types of fix: a reference AND a rule.
>
> - **C** is wrong — "too long" is still a reaction, not an instruction. Pasting a reaction as a standing instruction doesn't name what to CHANGE. How long is too long? What should be cut? Without specifics, the AI can't act on it.
> - **D** is wrong — "make it consistent" is still a reaction, and "try harder" is not an instruction. The fix for inconsistent formatting is a Skill (saved procedure that produces the same format every time) — a specific home, not a vague request.
> - **E** is wrong — report length is controlled by the prompt and standing instructions, not by the model. Switching models doesn't address the actual lever.

---

# PART 6: PERSIST + COMMUNICATE (Concepts 14-15-16-17-18) — 6 Questions

---

## Q30 · D7 · obj 7.2 · Concept 14

A financial analyst discovers that AI-generated revenue reports must always separate recurring revenue [bar bar aane wali amdani -- jaise monthly subscriptions] from one-time revenue [ek dafa ki amdani -- jaise a single project payment]. He types this into the chat every month. It works every month.

When a colleague covers for him during his holiday, the reports go out with revenue types combined [milaya hua -- sab ek mein]. Management makes a strategic decision [badi planning ka faisla] based on inflated recurring revenue numbers.

**What should the analyst have done, and where should the fix live?**

- **A.** Written it in his personal notes so the colleague could find it
- **B.** Added "always separate recurring and one-time revenue" as a standing instruction in the Project — this is a rule that always applies
- **C.** Added a detailed document explaining revenue types to the knowledge base — this is reference material
- **D.** Created a Skill with step-by-step instructions for generating the revenue report — this is a procedure

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 14: rule, reference, or procedure. "Always separate recurring and one-time revenue" is a RULE — a constraint that applies to every output from this Project. Rules go to standing instructions. They change BEHAVIOR.
>
> - **A** is wrong — personal notes are even worse than chat history. They're not in the system, not shared, and depend entirely on the colleague finding and reading them.
> - **C** is wrong home — a document explaining revenue types would be reference material (useful if the model needs to UNDERSTAND the distinction). But the fix here is a RULE (always separate them), not a reference. The model already knows what revenue types are.
> - **D** is wrong home for THIS fix — a Skill (procedure) would be appropriate if the whole report generation had steps that must run in order. But the specific fix ("always separate these two") is a rule, not a procedure. Putting a one-line rule into a multi-step Skill overcomplicates it.

---

## Q31 · D7 · obj 7.3 · Concept 15

A team of five account managers [client ke saath deal karne wale log] each use AI to generate quarterly business reviews [har 3 maheene ka kaam ka jaayza] for their clients. Every account manager is satisfied with their output. However, the VP of Client Services [client services ka boss] complains that "every review looks completely different — I can't compare across accounts."

**What friction signal is this, and what is the correct fix?**

- **A.** Repetition — each account manager is doing the same work repeatedly. Fix: consolidate into one prompt
- **B.** Correction — the outputs have recurring errors. Fix: add error-catching rules as standing instructions
- **C.** Variance — different people running the same task produce different results. Fix: a shared Skill or knowledge base so the format is consistent
- **D.** No friction — each account manager's output is correct for their client. The VP should accept natural variation

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> This is Concept 15: variance — the friction signal teams miss. No individual account manager sees a problem (their output is fine for their client). The inconsistency exists only BETWEEN people. It shows up at the VP who has to compare across accounts.
>
> Fix: a shared Skill (procedure that produces the same format every time) ensures all five account managers' reviews have the same structure, sections, and metrics — while still allowing client-specific content.
>
> - **A** is wrong — the issue isn't that they're doing the same work repeatedly (they are, but the SIGNAL is variance, not repetition). Consolidating into one prompt doesn't fix different people getting different outputs.
> - **B** is wrong — there are no recurring errors. Each output is individually correct. The problem is inconsistency between outputs.
> - **D** is wrong — "natural variation" in business deliverables is a real cost. The VP can't compare performance across accounts, which is exactly what quarterly reviews are for.

---

## Q32 · D7 · obj 7.3 · Concept 16

A team switches from manual report writing to an AI-assisted process. After two months, they tell management: "We estimate we're saving about 40% of our time."

Management asks for proof. The team realises they never measured [paimaish ki -- record kiya] the old process.

**Which statement best describes the problem?**

- **A.** They can estimate the old process from memory — ask each team member how long it used to take and average the answers
- **B.** A baseline cannot be reconstructed after the change — their memory of the old process will be biased, and 40% is now an unsupported claim [bina saboot ka daawa]
- **C.** They should switch back to the old process for one week and measure it properly
- **D.** The 40% estimate is close enough for management — exact numbers aren't necessary for process improvements

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 16: measure before you change. A baseline cannot be reconstructed after the change. People's estimates of the old way will FLATTER them (overestimate how slow/painful it was). "40%" is now a feeling, not a measurement. A baseline costs one cycle before any change — that window is gone.
>
> - **A** is exactly the bias C16 warns about — memory-based estimates are systematically wrong. People overestimate the old pain to justify the new way.
> - **C** is impractical and still not a true baseline. The team has already adapted to new habits. Going back for a week measures "doing the old thing badly after forgetting how" — not the actual old process.
> - **D** is wrong — "close enough" without any measurement is just "we believe it's better." The first time a budget review [budget ka jaayza] asks for proof, this claim collapses.

---

## Q33 · D7 · obj 7.3 · Concept 16

A company redesigns its compliance reporting [qanoon/rules ki report] workflow with AI assistance. The team wants to measure improvement.

**Which metric should they optimise for?**

- **A.** Time saved per report — the faster they produce reports, the more productive the team
- **B.** Accuracy — one wrong figure in a compliance report can trigger a regulatory investigation [sarkari jaanch]
- **C.** Variance — different analysts should produce consistent reports
- **D.** Number of reports produced per analyst per week

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 16: pick the metric that matches WHY the workflow matters. Compliance reporting exists to satisfy regulators. One wrong figure can trigger an investigation, a fine [jurrmaana], or worse. Accuracy is the metric that matters.
>
> - **A** is tempting but wrong for THIS workflow. Time saved on a compliance report means nothing if the report is inaccurate. Speed matters for internal drafts, not regulatory filings.
> - **C** is important but secondary. Consistent reports are good, but a consistently WRONG report is worse than an inconsistent correct one.
> - **D** measures volume, not quality. More reports per analyst means nothing if accuracy drops.

---

## Q34 · D4 · obj 4.5 · Concept 17+18

A company's AI workflow for generating client proposals [clients ke liye proposals] sent three proposals last week with outdated pricing [purani qeemtein]. The knowledge base hadn't been updated after a price change two weeks ago. The error was discovered when a client called to ask why the quoted price [batayi gayi qeemat] didn't match the website.

**What is the FIRST action?**

- **A.** Update the knowledge base with current pricing so future proposals are correct
- **B.** Stop the workflow immediately, then determine how many proposals were affected and which clients received wrong pricing
- **C.** Send corrected proposals to the three clients who were identified
- **D.** Schedule a quarterly review of the knowledge base to prevent this from happening again

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> This is Concept 17: when a bad output gets out. The four decisions in order: (1) STOP, (2) SCOPE, (3) TELL, (4) CHANGE THE MAP. First: stop the workflow so no more wrong proposals go out. Then scope: a stale configuration doesn't produce ONE bad result — it produces EVERY result since it went stale. The pricing changed two weeks ago. How many proposals went out in those two weeks? Probably more than three.
>
> - **A** is needed but not FIRST. Updating the knowledge base is part of the fix, but while you're updating, more wrong proposals could be going out. Stop first.
> - **C** addresses only the three KNOWN affected clients. But two weeks of stale pricing likely affected MORE than three. Scoping (B) finds the real number.
> - **D** is part of the long-term fix (Concept 8: scheduled review). But it's not the FIRST action when wrong proposals are actively being sent.

---

## Q35 · D4 · obj 4.5 · Concept 18

A team lead needs to describe an AI-assisted customer onboarding workflow to the company's risk and compliance committee [risk aur qanoon waali committee]. The workflow uses AI to draft welcome packages [khush-aamdeed ka package -- documents, letters, account setup], which an account manager reviews before sending to the customer.

**Which description is most appropriate for this audience?**

- **A.** "We've fully automated our customer onboarding — AI handles the entire welcome package creation and delivery."
- **B.** "Our onboarding AI is basically as good as our best account manager at creating welcome packages."
- **C.** "Welcome packages are AI-drafted. An account manager reviews and approves every package before it reaches the customer. Packages outside our standard template are flagged for senior review."
- **D.** "We use AI to speed up onboarding. It's been working great for 6 months with no issues."

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> This is Concept 18: say what it does, name the gate, say what it refuses. Option C does all three:
> - Says what it does: "AI-drafted"
> - Names the gate: "account manager reviews and approves before it reaches the customer"
> - Says what it refuses: "packages outside standard template are flagged for senior review"
>
> For a risk/compliance audience, naming what the tool DECLINES proves the boundary was designed, not discovered by accident.
>
> - **A** uses TWO forbidden phrases: "fully automated" and "handles." It drops the human gate entirely. The committee now believes no human checks anything.
> - **B** uses the third forbidden phrase: "as good as a person." It sets a standard that will eventually be missed, in front of people who remember you said it.
> - **D** is vague, drops the gate, and uses "no issues" as evidence of quality — which is exactly how an unstaffed gate sounds from outside (C7). A risk committee wants to hear CONTROLS, not track records.

---

# ANSWER KEY — QUICK REFERENCE

| Q | Answer | Concept | Domain |
|---|--------|---------|--------|
| 1 | B | C1: Step vs session | D4.4 |
| 2 | B | C2: Task definition | D4.1 |
| 3 | C | C3: Compute not write | D4.2 |
| 4 | B | C4: Window test | D4.2 |
| 5 | A, B | C3+C4: Compute + window | D4.2 |
| 6 | C | C2: Attack requirements | D4.1 |
| 7 | B | C5: Accountability | D4.4 |
| 8 | B | C5: Reversibility | D4.4 |
| 9 | B | C6: Who stands after | D4.4 |
| 10 | B | C5+C6: Remove gate | D4.4 |
| 11 | A, B | C5: Criteria applied | D4.4 |
| 12 | B | C5: Accountability | D4.4 |
| 13 | B | C7: Halo delegation | D4.4 |
| 14 | B | C7: Unstaffed gate | D4.4 |
| 15 | C | C7: Mapping the tool | D4.4 |
| 16 | A, B | C7: Combined errors | D4.4 |
| 17 | B | C8: Scheduled review | D4.4 |
| 18 | A, C | C8: Unstaffed + scope | D4.4 |
| 19 | B | C9: Feature problem | D4.3 |
| 20 | B | C9: Description vs feature | D4.3 |
| 21 | B | C10: Escalation signal | D4.3 |
| 22 | B | C10: Repetition vs dependency | D4.3 |
| 23 | A, C | C9+C10: Combined | D4.3 |
| 24 | C | C11: Stale config timing | D7.1 |
| 25 | A | C11: Under-spec timing | D7.1 |
| 26 | B | C12: Cheapest first | D7.1 |
| 27 | B | C12: Sequence step 3 | D7.1 |
| 28 | C | C13: Reaction → instruction | D7.2 |
| 29 | A, B | C13: Instruction + home | D7.2 |
| 30 | B | C14: Rule → standing instruction | D7.2 |
| 31 | C | C15: Variance | D7.3 |
| 32 | B | C16: Baseline | D7.3 |
| 33 | B | C16: Right metric | D7.3 |
| 34 | B | C17: Stop + scope | D4.5 |
| 35 | C | C18: Say + gate + refuses | D4.5 |
