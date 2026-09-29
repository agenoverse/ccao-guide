---
type: Document
title: "Day 1: Diagnostic — 25 Questions"
description: "25-question diagnostic exam to identify weak domains before focused study."
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
order: 102
---


> **Instructions:**
> - Set a timer for **27 minutes** (64 seconds per question average)
> - Answer EVERY question before moving to the next — no blanks
> - Do NOT scroll back — simulate the real exam's no-going-back rule
> - For long case questions: read the QUESTION FIRST (last sentence), then options, then the case
> - Mark questions where you had to guess (note "G" beside your answer)
> - Multi-select questions are marked **〔Select 2〕** or **〔Select 3〕**
>
> **Domain distribution:** D2 ×5 | D4 ×4 | D6 ×4 | D1 ×3 | D3 ×3 | D5 ×3 | D7 ×3



---

## Q1 · D2

A recruitment agency's associate asks Claude to screen 400 CVs against a job specification and produce a shortlist of 30 candidates for the hiring panel. The associate reviews all 30 shortlisted CVs carefully and finds them well matched to the specification.

**What review step is still missing, and why does it matter?**

- **A.** Ask Claude to explain why each of the 30 was selected, so the hiring panel can see the reasoning behind each choice
- **B.** Sample CVs from the 370 that were excluded, to check whether a group was systematically filtered out
- **C.** Re-run the screening with a stricter prompt and keep only the candidates that appear on both shortlists
- **D.** Add a disclaimer to the shortlist noting that AI was used in the screening process


---

## Q2 · D1

An operations analyst at a construction firm pastes a 90-page building-safety inspection into Claude and asks: "Summarise the inspection." The summary is tidy and professional but omits three non-compliance findings that the project insurer specifically asked for.

**Which change to the request most directly prevents this type of omission?**

- **A.** Switch to Opus with extended thinking so the model reasons more carefully through every page of the inspection
- **B.** Ask Claude to produce three separate summaries in different styles and pick the one that looks most complete
- **C.** State the reader, the purpose, the required items to cover, and what to leave out
- **D.** Paste the inspection in smaller sections across four separate chats so Claude can focus on each part individually

---

## Q3 · D4

A wine import company has a Claude Project where an associate drafts customs declarations from supplier invoices. The workflow has run smoothly for five months. The declarations require exact duty rates per product category, and the associate has been correcting the same two rates by hand after every run since month two.

**What is the most likely root cause, and what is the fix?**

- **A.** The model tier is too low for customs work; upgrade to Opus so the rates are calculated more carefully
- **B.** The prompt needs tighter wording about which rates to apply; rewrite the instruction with exact phrasing
- **C.** A knowledge file or standing instruction carries outdated rates; check the date on the source and replace it
- **D.** The context window is overloaded after five months of chats; start a fresh Project and re-import the files

---

## Q4 · D6

A school district's administrative assistant wants to use Claude to draft individualised progress reports for 200 students, pulling data from the district's student information system. The district classifies student records as restricted under its data-governance policy. The assistant plans to upload the full class roster with student names, grades, and accommodation flags into the district's enterprise Claude workspace.

**What is the most appropriate action?**

- **A.** Proceed with the upload because the enterprise workspace is approved for internal work and the assistant has legitimate access to the records
- **B.** Remove student names and replace them with coded identifiers, then confirm with the data-governance owner whether this route is approved for restricted data and this purpose
- **C.** Use incognito mode for the upload so the student records are not retained in chat history or memory
- **D.** Abandon the task entirely because restricted student data must never be processed by any AI tool under any circumstances

---

## Q5 · D3 · 〔Select 2〕

An associate has four tasks queued for the afternoon.

**For which TWO is extended thinking worth the additional cost and time?**

- **A.** Reformatting a 15-row table from vertical layout to horizontal layout for a slide deck
- **B.** Choosing which of three warehouse lease options to recommend, given conflicting terms on break clauses, maintenance obligations, and subletting rights across 60 pages of contracts
- **C.** Writing five subject-line options for an internal newsletter
- **D.** Evaluating a staffing proposal that balances headcount across four regional offices under budget constraints, seasonal demand curves, and a union agreement on overtime limits


---

## Q6 · D5

A consulting firm's senior associate set up a Claude Project for one client with two standing instructions: "Always cite the source clause for every recommendation" and "Use the Hartley engagement's formal reporting tone." Now every chat across every Project, including quick internal questions and unrelated client work, cites source clauses and writes in the Hartley voice.

**What is the most appropriate fix?**

- **A.** Delete the rules entirely — standing instructions cause more problems than they solve when they interfere with other work
- **B.** Add exception lines to the standing instructions listing every context where they should not apply
- **C.** Move both rules into the Hartley Project's instructions and keep account-level instructions to what is true everywhere
- **D.** Ask Claude to remember these rules only for the Hartley engagement and rely on memory to apply them selectively


---

## Q7 · D2

A hotel chain's revenue manager asks Claude to forecast next quarter's occupancy rates using three years of historical booking data uploaded as a spreadsheet. Claude produces a forecast with specific percentages for each month, presented confidently with a supporting narrative about seasonal trends.

**Which statement best describes the reliability concern?**

- **A.** The forecast is unreliable because Claude cannot access real-time booking data and the historical file may be incomplete
- **B.** The forecast is reliable because three years of data is sufficient for Claude to identify genuine seasonal patterns
- **C.** The narrative and percentages were generated by the same prediction process — the confident tone is a learned style, not evidence the figures were computed rather than written
- **D.** The forecast would be reliable if the associate switches to Opus, which handles numerical reasoning more carefully across large datasets


---

## Q8 · D7

An insurance claims team built a Claude-assisted workflow three months ago. In the first month, the workflow correctly flagged high-value claims for senior review. In the second month it still worked. This month, it is routing several high-value claims directly to the standard queue, skipping senior review. Nothing in the prompt or the chat history has changed.

**Which diagnosis fits the timing?**

- **A.** Under-specification: the prompt never properly defined "high-value" and the model is interpreting it differently each month
- **B.** Context overload: the chat has grown too long and the model is losing the early routing instructions
- **C.** Stale configuration: a threshold, a policy document, or a knowledge file that the workflow reads has gone out of date since it was set up
- **D.** Wrong feature: the routing logic should be computed by code execution rather than generated in prose

---

## Q9 · D4 · LONG CASE

A restaurant group's operations director has documented the following workflow for the weekly supplier cost report. The workflow is described in a delegation map as follows:

Step 1 (AI, reversible, low stakes): Pull raw invoice data from the accounting connector and organise it by supplier. Step 2 (AI, reversible, errors caught at step 4): Calculate total spend per supplier and percentage change from prior week using code execution. Step 3 (AI, reversible, low stakes): Draft a summary narrative highlighting the three largest cost movements. Step 4 (collaborative, the operations director reviews the narrative and spot-checks two supplier totals against last week's report before circulating): Review and approve. Step 5 (AI, routine mechanical write): Email the approved report to all 14 restaurant general managers using the email connector.

The operations director asks whether the map is sound.

**Which step has the most serious problem, and why?**

- **A.** Step 2 is wrong because financial calculations should never be delegated to AI regardless of the method used
- **B.** Step 3 is wrong because a summary narrative about cost movements is a judgment call that should be human-retained
- **C.** Step 5 is wrong because sending to 14 external recipients is an irreversible action with reach — it should not be AI-owned even after step 4's approval
- **D.** Step 4 is wrong because spot-checking only two supplier totals is insufficient when the report contains data for all suppliers
  

---

## Q10 · D6 · LONG CASE

A logistics company has documented the following governance record for an AI-assisted customs-clearance workflow, presented to the compliance team for approval:

Case: the workflow is classified as appropriate with review. AI drafts the customs declaration from the shipping manifest and invoice. The deciding factor is reversibility — a draft can be corrected before submission. Data: shipping manifests contain consignee names, addresses, commodity descriptions, and declared values. The data tier is yellow. The team confirmed that the task requires the consignee identifiers because the declaration must name the importing party. The approved route is the company's enterprise workspace. Capability: the workflow uses a connector to the freight management system with read-only access, plus a community-published customs skill that was enabled after a colleague recommended it. The skill has not been read by anyone on the team. People: the declarations affect importers and regulatory authorities. The compliance officer reviews a random five percent of declarations monthly after they have been filed.

**Which section of this governance record contains the most serious gap?**

- **A.** The Case section — "appropriate with review" is the wrong classification because customs declarations are regulated documents that should be classified as inappropriate for any AI involvement
- **B.** The Data section — the manifests should be anonymised before upload because the declared values are commercially sensitive, regardless of whether the task needs identifiers
- **C.** The Capability section — a community skill with unreviewed instructions running alongside a freight connector creates uncontrolled reach, and skills have no scope dial
- **D.** The People section — the review gate is placed after filing, not before, so a wrong declaration reaches the regulator before anyone checks it


---

## Q11 · D1

A marketing associate at a pharmaceutical distributor asks Claude to generate ideas for a product launch. The request includes the target audience, the product's clinical positioning, last quarter's market-share figures, the brand guidelines document, two mandatory sections, a 50-word limit per idea, and the approved colour palette. The five "ideas" returned are five minor variations of the same webinar format.

**What is the most likely cause?**

- **A.** The model lacks pharmaceutical knowledge and cannot produce genuinely different marketing ideas for this industry
- **B.** The output shape was pinned too tightly for an options-generation round — the format constraints left room only for variants, not genuinely different approaches
- **C.** The model needs an example campaign from a competitor to imitate so it can produce more diverse options
- **D.** Extended thinking should be turned on so the model explores more creative directions before generating ideas



---

## Q12 · D3

A legal practice runs every routine letter through Opus with extended thinking enabled, and processes its annual case-law review — which requires holding 200 pages of judgments coherent while tracing how one ruling modifies another — on Haiku "to keep costs down."

**Which statement best describes the problem?**

- **A.** Only the case-law choice is wrong — using Opus for routine letters is a cautious but harmless default
- **B.** Neither is wrong — model differences are marginal and cost is the only real factor in choosing a tier
- **C.** Both are wrong in opposite directions: Opus with thinking wastes budget on low-complexity work, and Haiku wastes the case-law analysis that needs depth
- **D.** Only the letter choice is wrong — extended thinking should never be enabled for routine tasks, but Haiku is fine for the case-law review if the prompt is detailed enough


---

## Q13 · D7

An associate notices that campaign briefs generated by a Claude Project consistently use language aimed at technical audiences, even when the brief specifies a consumer audience. The associate has been manually rewriting the audience section after every run.

**Which action correctly turns this reaction into an instruction aimed at the right lever?**

- **A.** Switch the Project to a more capable model that better understands audience distinctions
- **B.** Add an audience constraint to the Project's standing instructions requiring consumer-appropriate language when a consumer audience is specified
- **C.** Tell Claude to remember that campaign briefs should use consumer language, so memory carries the preference into future chats
- **D.** Rewrite the prompt each time with stronger wording about the audience until the model gets it right



---

## Q14 · D2 · 〔Select 3〕

A procurement associate reviews an AI-generated supplier comparison report before presenting it to the purchasing committee. The report contains figures, rankings, and recommendations.

**Which THREE checks are part of a sound verification process?**

- **A.** Identify the claims that matter most — the figures that will drive the committee's decision — and prioritise checking those
- **B.** Ask Claude to rate its own confidence in each figure and keep only those it rates above 90 percent
- **C.** Open the original sources Claude cited, find the specific sentences that support the claims, and check the dates on those pages
- **D.** Ask a more capable model to review the report and flag any errors it finds
- **E.** For each recommendation, ask: could this be wrong? Is an assumption being stated as a fact? Does the source actually say what the report claims?
- **F.** Accept the report if the formatting is professional and the narrative reads smoothly



---

## Q15 · D5

A property management company has three teams — residential lettings, commercial lettings, and facilities maintenance — all using one shared Claude Project. The residential team's reports have started including commercial lease terminology, and the facilities team's inspection summaries occasionally reference tenant-screening criteria that belong to the lettings workflows.

**What is the most appropriate fix?**

- **A.** Add clear labels to every prompt specifying which team is making the request, so Claude knows which terminology to use
- **B.** Create one Project per team, each with its own standing instructions and knowledge files, so context does not cross between teams
- **C.** Switch to incognito chats for each team so that work from one team does not carry over into another's sessions
- **D.** Delete the shared knowledge files and have each team paste their reference documents into each chat as needed


---

## Q16 · D4 · LONG CASE

A shipping broker has built the following delegation map for preparing client voyage estimates. The map was reviewed three months ago and is owned by the operations manager.

Step 1, extract route and cargo details from the client email (AI, reversible, low stakes, carried by a connector to the email system with read-only access). Step 2, calculate estimated freight cost using the broker's rate tables and port charges (AI, reversible, checked at step 4, carried by code execution against the rate-table spreadsheet in the Project's knowledge). Step 3, classify the voyage as standard or complex based on whether it involves transhipment, hazardous cargo, or sanctions-listed ports (AI, the team's classification skill has been accurate for three months, so the operations manager approved handing this step to AI outright). Step 4, draft the estimate letter for the client, including the freight figure from step 2 and the voyage classification from step 3 (collaborative, the broker reviews and signs before sending). Step 5, send the signed estimate to the client (human, irreversible, externally binding, the broker sends from their own email).

**Which step contains a mapping error, and what is the error called?**

- **A.** Step 1 — the email connector should have write access so it can file the processed email, making this a capability error
- **B.** Step 3 — classification accuracy on past voyages does not justify giving AI full ownership of a step involving sanctions screening; this is halo delegation
- **C.** Step 4 — the broker reviewing the letter is an unstaffed gate because the map does not specify what the broker checks or how long the review takes
- **D.** Step 2 — financial calculations should never be owned by AI because they are high-stakes; the code-execution method does not change the ownership question


---

## Q17 · D6

A healthcare administration company's billing associate wants Claude to check 300 patient invoices against insurance schedules to flag discrepancies. The invoices contain patient names, dates of birth, diagnosis codes, and procedure costs. Company policy classifies patient health information as restricted. The associate's plan is to remove patient names and dates of birth, replace them with sequential numbers, but keep the diagnosis codes and procedure costs because the task needs them. The associate will destroy the lookup table linking numbers to patients after the task is complete.

**What is the most appropriate assessment of this plan?**

- **A.** The plan is sound — removing names and dates of birth with a destroyed lookup makes the data anonymised, so it can proceed on any route
- **B.** The plan reduces risk but diagnosis codes combined with procedure costs and dates of service may still identify individuals; confirm with the compliance owner whether this constitutes adequate de-identification under the applicable standard before proceeding
- **C.** The plan is unnecessary — the enterprise workspace is approved for internal work, and the associate has legitimate access to the records, so no redaction is needed
- **D.** The plan should be abandoned because any data that was ever restricted cannot be processed by AI even after de-identification


---

## Q18 · D2 · LONG CASE

A facilities management company uses a Claude Project to produce monthly building-compliance reports for its commercial clients. The governance record for this workflow reads as follows:

Case: appropriate with review. The deciding factor is accountability — the company is answerable for the factual accuracy of compliance claims made to clients. Gate: the compliance report will be reviewed by a person before it is sent. Data: building inspection data, maintenance logs, and contractor certificates are uploaded from the company's document management system. Tier: yellow. The task requires building addresses and contractor licence numbers because the report must identify specific buildings and certify contractor qualifications. Route: approved enterprise workspace. Capability: a read-only connector to the document management system plus built-in document skills for formatting the report as PDF. People: the reports affect building owners, tenants, and regulatory inspectors who rely on the compliance status. No disclosure assessment has been conducted. Evidence: success is measured by the compliance manager reviewing a sample of three reports per quarter.

**Which TWO sections contain the most serious problems?** 〔Select 2〕

- **A.** The Case section — the gate says "a person" without naming WHO reviews, WHAT they verify, or WHEN the review happens relative to sending
- **B.** The Data section — contractor licence numbers should be redacted because the report does not need to identify specific contractors
- **C.** The Capability section — using built-in document skills is inappropriate for compliance documents and a custom skill should be built instead
- **D.** The People section — no disclosure assessment has been done despite the report affecting building owners, tenants, and regulators who may need to know AI was involved
- **E.** The Evidence section — sampling three reports per quarter is generous enough for a low-volume workflow and does not need changing


---

## Q19 · D7

A finance team automated their monthly expense-categorisation workflow with Claude three months ago. Three analysts run the same workflow each month on different cost centres. The finance director notices that the three analysts' outputs look noticeably different in format and categorisation logic, even though the underlying rules should be identical.

**Which type of friction does this represent, and what is the fix?**

- **A.** Repetition friction — each analyst is re-explaining the same rules each month; the fix is a standing instruction in a shared Project
- **B.** Correction friction — each analyst is fixing the same errors in output; the fix is a stronger model tier
- **C.** Variance friction — the inconsistency exists between people, not within one person's work; the fix is a shared Skill or shared Project with standing instructions and knowledge files so all three produce consistent output
- **D.** Context overload — the long chat history across three months is causing drift; the fix is starting fresh chats each month


---

## Q20 · D1

An associate at an event management company is delegating a task to Claude: research and recommend three venues in Manchester for a 200-person corporate dinner, presented in a comparison table. Claude returns three venues. One of the venues closed permanently six months ago, but this is not apparent from the table. The other two are open but one has a capacity of 150, not 200.

**Which element was most likely missing from the request that allowed both errors to survive?**

- **A.** An instruction to use only verified, current information and to mark anything it could not confirm as "unverified" rather than presenting it as fact
- **B.** A more detailed description of the dinner event, including the dress code, menu requirements, and entertainment needs
- **C.** An instruction to use extended thinking so Claude reasons more carefully about each venue before including it
- **D.** An instruction to present five venues instead of three, so the associate has more options to choose from


---

## Q21 · D3

A customer support team uses Claude to draft responses to customer complaints. The team lead has configured the workflow in a Project with standing instructions for tone and format. A new team member asks whether they should use research mode for drafting complaint responses, "so Claude looks everything up thoroughly and gives the most accurate answer."

**What is the most appropriate guidance?**

- **A.** Research mode is the right choice — it will produce more thoroughly researched and accurate complaint responses
- **B.** Research mode investigates external web sources; complaint responses should draw from the company's own policies and the customer's specific case, which are already in the Project — use the standard chat inside the Project instead
- **C.** Research mode should be used selectively — turn it on for complex complaints and off for simple ones
- **D.** The team member should use research mode but add "ignore external sources" to the prompt so it only uses Project files

---

## Q22 · D4 · LONG CASE

An accounts payable department at a restaurant chain has built the following workflow for processing supplier invoices. The team lead presents it to the finance director for approval.

Step 1 (AI): A connector reads incoming invoices from the shared mailbox. Step 2 (AI): Claude extracts line items, tax amounts, and payment terms from each invoice using a custom extraction skill the team built and tested against 50 historical invoices. Step 3 (AI): Claude matches each invoice to the corresponding purchase order in the accounting system using a read-only connector. Step 4 (AI): For invoices that match, Claude calculates the payment amount including applicable early-payment discounts using code execution. Step 5 (AI): Claude posts the approved payment amount to the accounting system through a write-enabled connector and schedules the bank transfer for the next payment run. Step 6 (Collaborative): The AP manager reviews a daily exception report listing any invoices that did not match a purchase order.

**What is the most serious problem with this workflow?**

- **A.** Step 2 — the extraction skill was only tested against 50 invoices, which is too small a sample to trust for production use
- **B.** Step 5 — posting payments and scheduling bank transfers is an irreversible, high-stakes action that should require human approval before execution, not after
- **C.** Step 6 — the exception report should be reviewed weekly rather than daily to reduce the AP manager's workload
- **D.** Step 3 — matching invoices to purchase orders is a judgment call that should always be done by a human, even when the match is exact


---

## Q23 · D5

A law firm's associate created a Project for a specific client matter. The Project contains the engagement letter, the opposing party's filings, three expert reports, and a standing instruction: "When analysing any filing, identify every factual claim and note whether it is supported, contradicted, or unaddressed by the expert reports." After two months of active use, a new chat in the same Project produces analysis that misses several factual claims from a recently uploaded filing. The standing instruction has not changed.

**What should the associate check first?**

- **A.** Whether a recently added or updated knowledge file has introduced conflicting information or pushed the total Project knowledge past a size where the model reliably processes all of it
- **B.** Whether the model tier has been downgraded by the firm's IT department without notification
- **C.** Whether the standing instruction needs to be rewritten with more precise language about what constitutes a "factual claim"
- **D.** Whether the associate should switch to a different AI platform that handles legal analysis more reliably


---

## Q24 · D6 · LONG CASE

A hotel chain's revenue management team uses Claude to generate personalised booking-confirmation emails for guests who reserve premium suites. The workflow has been running for two months. A governance review produces the following record:

Case: appropriate. Reversibility is high — emails are drafted and reviewed. Consequence of error is low — a booking confirmation is a routine communication. Human judgment is minimal — the email is formulaic. Accountability rests with the reservations manager who reviews each email. Gate: the reservations manager checks the email looks right before it is sent. Data: guest names, stay dates, room types, loyalty tier, and credit-card last four digits are pulled from the booking system via a connector. Tier: yellow. The task requires guest identifiers because the email must address the guest by name. Route: approved enterprise workspace. Capability: read-only connector to the booking system. People: affects hotel guests who receive the emails. No fairness assessment has been conducted.

**Which section of this governance record contains the most serious error?**

- **A.** The Case section — consequence of error is understated; a booking confirmation with wrong dates, wrong room type, or another guest's details damages trust and may have legal implications, so it should be "appropriate with review," not "appropriate"
- **B.** The Data section — credit-card last four digits are unnecessary for a confirmation email and should be excluded before the data enters Claude, reducing the sensitivity of what is processed
- **C.** The Capability section — the connector should have write access so it can log which emails were sent
- **D.** The People section — a fairness assessment is not needed for booking confirmations because the emails are personalised to individual guests, not used for screening or ranking


---

## Q25 · D7 · LONG CASE

A recruitment agency built a Claude-assisted workflow six weeks ago to draft candidate summary reports for clients. The workflow runs inside a Project with standing instructions for report format, a knowledge file containing the agency's standard competency framework, and a connector to the agency's applicant tracking system (ATS). The Project was set up by a senior recruiter who has since gone on leave.

Last week, three problems appeared simultaneously: reports started using an old competency framework that was replaced two months ago; the tone shifted to an overly casual style that does not match client expectations; and one report included a competency rating that does not exist in either the old or new framework.

The team's junior recruiter has been asked to fix the workflow. Their first instinct is to switch to Opus "because a smarter model won't make these mistakes."

**Which diagnostic approach is correct?**

- **A.** Switch to Opus as the junior recruiter suggests — a more capable model will handle the competency framework more accurately and maintain the correct tone
- **B.** Run the diagnostic sequence cheapest first: check the prompt against its five parts, then check session length, then check whether the right feature is in use, then audit the Project's knowledge files and standing instructions for stale or conflicting content, then assess task fit
- **C.** Delete the entire Project and rebuild it from scratch, since the original creator is unavailable and the configuration cannot be trusted
- **D.** Ask Claude to identify what went wrong with its own outputs and recommend fixes to the standing instructions

---

---

# ANSWER KEY

> **Review these ONLY after completing all 25 questions under timed conditions.**

---

### Q1 · D2 — Answer: B

When AI narrows a set (400 → 30) and humans inspect only the survivors, systematic exclusion of a group goes unnoticed. Reviewing only the shortlist cannot detect bias in the screening. Sampling the exclusions is the missing step.

- **A** — Records AI's reasoning but doesn't check whether the exclusions were fair
- **C** — A consistently biased screen passes both runs
- **D** — Disclosure is secondary to whether the screening was fair

---

### Q2 · D1 — Answer: C

A generic request produced a generic result. The model was told nothing about who reads it, why, what must be covered, or what to exclude. State the reader (insurer's loss adjuster), purpose (non-compliance findings), items (the three findings with dates and references), and exclusions (general narrative).

- **A** — Spends capability on a missing-context problem; no model infers undisclosed requirements
- **B** — Multiplies generic summaries
- **D** — Splits the document but doesn't add the missing requirements

---

### Q3 · D4 — Answer: C

"Used to work, now the same error every run" = stale configuration signature. The same two rates wrong every time since month two points to a knowledge file or standing instruction carrying outdated rates. Check dates on sources and replace.

- **A** — Model change is step 3 of the diagnostic sequence; step 4 (config) fits the timing better
- **B** — Has been tried implicitly for three months (corrections); the prompt isn't the issue
- **D** — Context overload shows as general degradation across a session, not one specific repeatable error

---

### Q4 · D6 — Answer: B

Restricted data requires route approval from the data-governance owner — not a guess at the keyboard. An enterprise workspace is not blanket permission. However, abandoning the task is wrong when the discriminator question ("does the task need the identifiers?") suggests a safe path exists: replace names with codes, then confirm the route.

- **A** — Enterprise plan is not permission; route must be approved for this data AND this purpose
- **C** — Incognito governs history/memory, not whether the upload was permitted
- **D** — Abandonment when a safe path (coded identifiers + route confirmation) exists

---

### Q5 · D3 — Answer: B, D

Extended thinking is worth the cost for multi-constraint problems with real consequences. B involves conflicting lease terms across 60 pages — multiple trade-offs requiring careful comparison. D involves balancing headcount across offices under budget, seasonal, and union constraints.

- **A** — Mechanical reformatting; no reasoning needed
- **C** — Casual brainstorming; thinking mode is waste

---

### Q6 · D5 — Answer: C

Account-level instructions land in every window. Both rules are specific to the Hartley engagement, not universal. Move them into the Hartley Project's instructions. Account-level text should hold only what is true for every conversation.

- **A** — Throws away the rules instead of scoping them correctly
- **B** — Grows global text with exceptions — the road to contradictions
- **D** — Memory is best-effort, not configuration; cannot be relied on

---

### Q7 · D2 — Answer: C

The model predicts what a forecast would most likely say — it does not compute a statistical projection. The confident narrative and the specific percentages were generated by the same process. Confident tone is a learned style from RLHF training, not a signal that figures were computed. Without code execution producing verifiable calculations, the numbers are prose, not computation.

- **A** — Real-time data access is one concern, but the deeper issue is that the figures are written, not computed
- **B** — Three years of data doesn't matter if the model wrote the figures instead of calculating them
- **D** — A stronger model still writes figures in prose unless code execution is used

---

### Q8 · D7 — Answer: C

"Used to work, now doesn't" is the stale-configuration signature. Nothing in the prompt changed, and the issue appeared after months of working correctly. A threshold, policy file, or knowledge document that the workflow reads has gone out of date. No error message — stale configuration fails silently.

- **A** — Under-specification shows from the first answer, not after months of working correctly
- **B** — Context overload would show as general degradation within a single session, and the issue appears across new sessions
- **D** — Wrong feature would show as one repeatable error type from the beginning, not a change after months

---

### Q9 · D4 — Answer: C

Step 5 sends the report by email to 14 general managers. Once sent, the email cannot be recalled. This is an irreversible action with significant reach. The fact that step 4 approved the content doesn't transfer to step 5 — sending is a separate action. A person should send, or at minimum explicitly trigger the send after reviewing the final formatted output.

- **A** — Code execution is the correct method for calculations; the step is properly designed
- **B** — A narrative summary is collaborative at most, not human-retained; the review at step 4 covers it
- **D** — Spot-checking two totals is a reasonable gate design for a weekly internal report; the gate exists and is staffed

---

### Q10 · D6 — Answer: C

The Capability section has the most serious gap. A community-published customs skill was enabled without anyone reading it, and skills have no scope dial — the skill runs with whatever access the session has, including the freight connector. An unreviewed skill from an unknown source alongside a connector to a business-critical system creates uncontrolled reach. This is the quadrant people miss: even a trusted connector becomes dangerous when paired with untrusted instructions.

- **A** — "Appropriate with review" can be correct for customs declarations if a proper gate exists (the problem is elsewhere)
- **B** — The task explicitly needs the identifiers; the discriminator was already applied correctly
- **D** — The review timing is a real concern (after filing, not before), but it's secondary to having unreviewed code-equivalent instructions running with full system access

---

### Q11 · D1 — Answer: B

Precision is the right setting for execution, wrong for generating options. The mandatory sections, word limit, colour palette, and brand guidelines pinned the output shape so tightly that only variants of the same idea were possible. For an options-generation round: keep the situation fully loaded, describe the output loosely.

- **A** — The model has enough pharmaceutical context from the request; the constraint is the shape, not the knowledge
- **C** — An example to imitate narrows the shape further, not less
- **D** — Extended thinking produces more careful variants of the same pinned shape, not genuinely different approaches

---

### Q12 · D3 — Answer: C

Both are wrong in opposite directions. The model ladder exists to match cost to complexity. Opus with extended thinking on routine letters wastes budget on work that needs neither depth nor careful reasoning. Haiku on a 200-page cross-referencing case-law analysis wastes the analysis — it's a depth task that requires holding a complex structure coherent, exactly what the top tier is built for.

- **A** — Treats the top model as a safe default; it's the over-spend half of the same error
- **B** — Denies the trade-off the model ladder exists to price
- **D** — Gets the letter problem right but wrong on the case-law; prompting cannot overcome a fundamental capability limit on Haiku for this type of task

---

### Q13 · D7 — Answer: B

A wrong audience in every draft is a standing instruction problem. "What would have to be present for this to be right?" — an audience constraint. "Which part of the setup controls that?" — the Project's standing instructions. This is a repeated correction (friction signal) that should be promoted from a per-prompt fix to a standing rule.

- **A** — A model change is step 3 of the diagnostic sequence; the symptom points to a missing instruction, not a capability gap
- **C** — Memory is best-effort, not configuration; a stable rule handed to memory instead of instructions is unreliable
- **D** — Per-prompt rewrites are the definition of friction the user should stop tolerating

---

### Q14 · D2 — Answer: A, C, E

These are the three steps of verification: Identify (A — prioritise claims that drive decisions), Trace (C — open the source, find the sentence, check the date), and Challenge (E — ask how it could be wrong, check assumptions). Together they form the Identify → Trace → Challenge → Decide framework.

- **B** — Self-reported confidence is not a signal; the model was already confident about everything it wrote
- **D** — A second model reviewing the first is agreement, not verification; a consistent error passes both
- **F** — Professional formatting tells you nothing about accuracy

---

### Q15 · D5 — Answer: B

Projects keep separate context spaces. Three teams in one Project means all three knowledge bases and instruction sets blend. The residential team's knowledge files are in front of the model when the facilities team asks a question. One Project per team creates the wall.

- **A** — Turns a configuration fault into a per-prompt chore; all reference files still sit in the same window
- **C** — Incognito governs history/memory, not Project knowledge bleed
- **D** — Loses the benefit of standing reference files; forces re-pasting every session

---

### Q16 · D4 — Answer: B

Step 3 is halo delegation. The stated reason — "the classification skill has been accurate for three months" — cites accuracy on past classifications as the basis for giving AI full ownership. But classification accuracy is evidence about PAST classifications. The current step involves sanctions-listed ports, which is a regulatory and compliance question with serious consequences if wrong. A three-month track record on standard voyages does not earn trust for sanctions screening. The competence was real, but it belonged to different (easier) voyages.

- **A** — Read-only access is correctly scoped; the step doesn't need write access and the connector is fine
- **C** — The broker reviews and signs, which is a collaborative gate; the map could be more specific about what the broker checks, but it's functional, not unstaffed
- **D** — Code execution is the correct method for calculations; the step is properly designed with a human gate at step 4

---

### Q17 · D6 — Answer: B

The plan shows good instinct but is incomplete. Removing names and dates of birth reduces identifiers, but diagnosis codes combined with procedure costs and dates of service can re-identify individuals — a rare diagnosis code plus a specific cost on a specific date may point to only one patient. Whether this constitutes adequate de-identification depends on the applicable standard (e.g., HIPAA Safe Harbor requires removal of 18 identifier types). The compliance owner must confirm.

- **A** — Destroying the lookup table helps, but re-identification through remaining data combinations is still possible; this isn't anonymised by default
- **C** — Enterprise workspace approval is route approval, not purpose approval and not a substitute for the data-classification question
- **D** — Abandonment when a potentially safe path (proper de-identification + route confirmation) exists

---

### Q18 · D2 — Answer: A, D

**A (Case section):** The gate says "a person will review" without naming WHO (which role), WHAT they verify (which specific risks), or WHEN (before sending). This is a defined-gate failure — the sentence sounds responsible and means nothing.

**D (People section):** The reports affect building owners, tenants, and regulatory inspectors. No disclosure assessment has been conducted. For compliance documents that affect regulatory decisions, disclosure is at minimum a question that must be answered, not skipped entirely.

- **B** — The report explicitly needs contractor licence numbers to certify qualifications; redacting them breaks the task
- **C** — Built-in document skills are appropriate for formatting; there's no capability problem here
- **E** — Three reports per quarter may be fine for sampling, but the question asks for the most serious problems, and the gate and disclosure gaps are more critical

---

### Q19 · D7 — Answer: C

Variance is the friction signal that teams miss. No individual analyst feels it — the inconsistency exists only between people and shows up at the finance director who compares the three outputs. The fix is a shared Project or shared Skill so all three analysts work from the same standing instructions, knowledge base, and method.

- **A** — Repetition friction is when ONE person re-explains the same thing each time; this is BETWEEN people
- **B** — The problem isn't errors in output; it's inconsistency. A stronger model still produces different output if three people brief it differently
- **D** — Context overload would appear as degradation within a single session, not as differences between three people's independent runs

---

### Q20 · D1 — Answer: A

Both errors are fabrication (a closed venue presented as open) and unchecked facts (wrong capacity). The missing element is a verification instruction: "Use only verified, current information. Mark anything you could not confirm as 'unverified.'" Without it, the model fills gaps with what such a venue list would most likely contain — at full confidence.

- **B** — Adds detail the model didn't lack; the problem is unverified facts, not insufficient context about the event
- **C** — Extended thinking produces more careful fabrications, not verified ones
- **D** — More options doesn't fix the fundamental problem of presenting unverified information as fact

---

### Q21 · D3 — Answer: B

Research mode investigates external web sources — it will keep answering from the web however you phrase the request. Complaint responses should draw from the company's own policies (in the Project's knowledge) and the customer's specific case details. The Project already contains the right sources. Standard chat inside the Project is the correct feature.

- **A** — Research mode is for web investigation, not internal policy application
- **C** — Selective use doesn't solve the fundamental mismatch; even complex complaints should reference internal policy, not web sources
- **D** — "Ignore external sources" contradicts the purpose of research mode; the feature is designed to search externally

---

### Q22 · D4 — Answer: B

Step 5 posts payments to the accounting system and schedules bank transfers — this is an irreversible, high-stakes action (money moves and cannot easily be recalled). The human gate at step 6 only reviews exceptions (invoices that didn't match), NOT the payments that were approved and sent. The matched invoices flow from step 4 directly to step 5 with no human in between. A payment release should require explicit human approval.

- **A** — 50 historical invoices for testing an extraction skill is a reasonable starting point, and the skill's accuracy can be monitored in production; this is not the most serious problem
- **C** — Daily exception review is appropriate and changing it to weekly would make it worse
- **D** — Exact PO matching is a mechanical comparison well suited to AI when a human gate follows

---

### Q23 · D5 — Answer: A

The symptom — "used to work, now misses content from new uploads" — points to a configuration issue. The most likely cause is that recently added knowledge files have either grown the total Project knowledge past the point where the model reliably processes all of it, or introduced content that conflicts with the standing instruction. Check what changed in the Project's knowledge files first — this is the cheapest test.

- **B** — A model downgrade would affect everything, not just the analysis of one new filing
- **C** — The standing instruction was working for two months; the timing suggests the change is in the knowledge, not the instruction
- **D** — Switching platforms before diagnosing the problem is the most expensive possible move

---

### Q24 · D6 — Answer: A

The Case section understates the consequence of error. A booking confirmation with wrong dates, wrong room type, or — worst case — another guest's personal details is not "low consequence." It affects the guest's travel plans, creates contractual confusion, and if another guest's data leaks, it's a data incident. The workflow should be classified as "appropriate with review" with a properly defined gate (the current gate says "checks the email looks right" which is vague — it should specify checking guest details against the booking record).

- **B** — Credit-card last four digits are a legitimate concern (applying data minimisation would improve the workflow), but the classification error in the Case section is more serious because it affects the entire governance posture
- **C** — Write access is not needed; the connector's job is to read booking data, not to log sends
- **D** — A fairness assessment may not be critical for individual confirmations, but the Case misclassification is more dangerous

---

### Q25 · D7 — Answer: B

Three problems appearing simultaneously after the workflow previously worked = stale configuration is the most likely cause. But the diagnostic sequence says: start cheapest first, not jump to conclusions. Check the prompt first (seconds), then session length (is it a long chat?), then feature/model, THEN audit the Project's knowledge files and standing instructions. The knowledge file likely still contains the old competency framework. The tone shift may come from a stale or overwritten standing instruction. The invented rating may be a hallucination from conflicting knowledge sources.

- **A** — Switching to Opus is step 3 of the diagnostic sequence and doesn't fix stale knowledge files
- **C** — Deleting and rebuilding destroys the configuration that may only need one file replaced; it's the most expensive fix for what may be a one-file problem
- **D** — The model cannot diagnose its own configuration; self-assessment is not a reliable signal

---

*25 questions · End of Day 1 Diagnostic*
*Generated: 2026-09-22 · Review after timed attempt only*
