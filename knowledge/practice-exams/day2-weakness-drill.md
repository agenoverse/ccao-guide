---
type: Document
title: "Day 2: Weakness Drill — 25 Questions"
description: "25-question targeted drill focused on domains identified as weak in the Day 1 diagnostic."
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
order: 103
---


> **Instructions:**
> - **Part 1:** 13 questions · 14 minutes
> - **Part 2:** 12 questions · 13 minutes
> - Take a 5-minute break between parts
> - Same rules: no blanks, no going back, mark guesses with "G"
> - **Today's focus:** long cases, "most serious" ranking, mapping errors, diagnostic timing
> - Multi-select marked **〔Select 2〕** or **〔Select 3〕**
>
> **Domain distribution:** D4 ×5 | D6 ×5 | D7 ×4 | D2 ×4 | D1 ×3 | D3 ×2 | D5 ×2

---

# PART 1 — Questions 1–13

---

## Q1 · D7 · LONG CASE

A mid-market commercial insurer introduced a Claude-assisted workflow eight weeks ago to generate policy-renewal recommendations for its underwriting team. The workflow operates within a Project containing the insurer's risk-appetite statement, a rate-adequacy model exported as a spreadsheet, and standing instructions specifying the format and disclosure requirements for renewal letters. During weeks one through six, the workflow performed as expected: recommendations aligned with the risk-appetite thresholds and the renewal letters met compliance formatting. In week seven, an underwriter noticed that two renewal letters quoted premium adjustments that diverged from the rate-adequacy model by more than fifteen percent, yet the standing instructions and the prompt had not been modified. In week eight, a third letter contained a reference to a coverage endorsement the insurer discontinued eighteen months ago.

The team's initial response is to escalate the model tier from Sonnet to Opus, reasoning that a more capable model will not produce these inaccuracies.

**Which diagnostic sequence is correct, and why is the proposed escalation premature?**

- **A.** The model upgrade is premature because the symptoms — a drift that appeared after six stable weeks and a reference to discontinued coverage — point first to the knowledge files: the rate-adequacy spreadsheet may have been superseded without the Project being updated, and the discontinued endorsement may still be present in an uploaded policy document; audit the Project's knowledge files for stale or conflicting content before changing the model
- **B.** The model upgrade is the correct first step because Sonnet lacks the numerical precision required for premium calculations, and moving to Opus will resolve both the rate divergence and the discontinued-endorsement reference
- **C.** The diagnostic should begin by shortening the chat history, since the underwriters have been using the same conversation thread for eight weeks and the early instructions are being lost to context-window degradation
- **D.** The team should delete the Project and rebuild it from scratch, since the configuration has drifted beyond the point where targeted fixes are reliable


A
---

## Q2 · D4 · LONG CASE

A regional freight-forwarding company has documented the following delegation map for its weekly carrier-performance scorecard, which is distributed to the operations board every Monday morning. The map was last reviewed by the logistics director sixty days ago.

Step 1 (AI, reversible, low stakes): ingest shipment-tracking data from the transport management system via a read-only connector and normalise delivery timestamps against contractual service-level agreements. Step 2 (AI, reversible, verified at step 4): calculate on-time delivery percentages, average transit variances, and claims ratios per carrier using code execution against the normalised dataset. Step 3 (AI, reversible, low stakes): draft a narrative summary identifying the three carriers whose performance deteriorated most week-on-week and proposing corrective actions including contract renegotiation or volume reallocation. Step 4 (collaborative): the logistics director reviews the scorecard, cross-references the top-line figures against the TMS dashboard, and approves. Step 5 (AI, routine, mechanical): the approved scorecard is published to the operations board's shared drive and a notification is sent to all twelve board members via the company's internal messaging connector.

The logistics director asks whether any step contains a mapping error.

**Which step contains the error, and what is it called?**

- **A.** Step 3 is mapping the tool — Claude is being asked to propose contract renegotiation and volume reallocation, which are strategic decisions that require commercial judgment, not narrative drafting; the step confuses what the model produces (text) with what the step requires (a recommendation with consequences)
- **B.** Step 2 has an unstaffed gate because the verification reference at step 4 does not specify what the logistics director checks, how many carriers are sampled, or what tolerance triggers a rejection
- **C.** Step 5 is halo delegation — the scorecard performed well for sixty days, so the team gave AI ownership of the distribution step, but publishing to the board and notifying twelve members is an irreversible action with organisational reach
- **D.** Step 1 should be human-owned because normalising timestamps against contractual SLAs requires understanding the nuances of each carrier's service-level agreement

A
---

## Q3 · D6

A corporate treasury team at a multinational manufacturer wants Claude to reconcile intercompany loan balances across fourteen subsidiaries prior to the quarterly consolidation. The reconciliation involves matching loan receivables in one entity's ledger against the corresponding payable in the counterparty's ledger, identifying mismatches, and producing a discrepancy report for the group financial controller. The data includes entity names, internal account codes, loan principal amounts, accrued interest, and intercompany transfer references. The treasury analyst plans to upload the subsidiary ledger extracts directly into the team's enterprise Claude workspace, which the IT department has approved for internal financial data classified as confidential.

**What is the most appropriate assessment?**

- **A.** The plan is sound — the enterprise workspace is approved for confidential financial data, the analyst has legitimate access, and the task is internal reconciliation with no external distribution
- **B.** The plan should be rejected because intercompany loan data is too sensitive for any AI tool, regardless of the workspace's classification level
- **C.** The analyst should anonymise the entity names before uploading, since the reconciliation can be performed using account codes alone without revealing which subsidiary holds each balance
- **D.** The analyst should confirm with the data-governance owner that the approved route covers this specific purpose — reconciliation and discrepancy reporting — and that the output distribution to the group financial controller is within the workspace's permitted use, even though the classification level is already approved

C
---

## Q4 · D2

A pharmaceutical company's regulatory-affairs associate uses Claude to compare a draft clinical-trial protocol against the applicable regulatory guidance document. Claude produces a detailed gap analysis identifying twelve areas where the protocol deviates from the guidance. The associate reviews the gap analysis and finds that each identified gap references a specific section of the guidance document by number and title.

**Which verification concern remains despite the section references?**

- **A.** The section numbers and titles may be accurately cited but the characterisation of what each section requires could be a paraphrase that shifts the meaning — the associate must open the guidance document and read the cited passages to confirm the gap analysis represents them faithfully
- **B.** Twelve gaps is likely an overcount; the associate should ask Claude to reduce the list to only the five most critical gaps to make verification manageable
- **C.** The gap analysis is sufficiently verified because each gap references a specific, traceable section of the guidance document
- **D.** The associate should run the same comparison on Opus with extended thinking to see whether a more capable model identifies the same twelve gaps, confirming the analysis through independent replication

A
---

## Q5 · D4 · LONG CASE

An employee-benefits consultancy has built a Claude-assisted workflow for producing annual benefits-renewal reports for its corporate clients. The delegation record reads as follows:

Brief: Outcome — a renewal report comparing the client's current benefits package against three alternative quotations from insurers, with a recommendation. Context — the consultancy holds the client's census data (employee names, dates of birth, salary bands, dependants), the current policy schedule, and the three insurer quotations. Constraints — the report must comply with the Financial Conduct Authority's rules on fair presentation and must not overstate savings projections. Authority — the consultant may instruct Claude to draft the full report; the senior partner reviews before the report is sent to the client. Deliverable — a PDF report including comparison tables, a savings analysis, and a narrative recommendation. Verification — the senior partner reads the recommendation section and confirms the savings figures match the quotation documents.

Run: Claude ingests the census data, policy schedule, and three quotations from the Project's knowledge files, drafts the comparison tables using code execution, and writes the narrative recommendation.

Check: The senior partner opens the report, reads the recommendation, and confirms the savings figures.

**Which section of this delegation record contains the most serious gap?**

- **A.** The Brief's Constraints section — stating that the report "must comply with FCA fair-presentation rules" is too vague; the constraint should specify which rules apply and what compliance looks like in the report
- **B.** The Verification section — the senior partner checks the savings figures and recommendation but does not verify the comparison tables, the census data accuracy, or whether the narrative overstates savings, which is the very constraint the Brief identified
- **C.** The Run section — Claude should not have access to the census data because it contains employee personal information that exceeds what the report requires
- **D.** The Brief's Authority section — the consultant should not be permitted to instruct Claude to draft the full report; the senior partner should initiate every run to maintain accountability

A
---

## Q6 · D1

A procurement manager at a facilities-services company asks Claude to draft a vendor-evaluation matrix for janitorial suppliers. The request includes the five evaluation criteria, the weighting for each criterion, the four vendors under consideration, the scoring scale, and sample scores the manager has already assigned for two of the four vendors. Claude returns a matrix where the two pre-scored vendors match the manager's inputs exactly, but the two remaining vendors have been scored as well — with specific numbers that look plausible.

**What is the most appropriate next step?**

- **A.** Accept the scores for the two remaining vendors because Claude inferred them from the evaluation criteria and the pattern established by the manager's own scoring, making them a reasonable extrapolation
- **B.** Delete the scores for the two remaining vendors and re-prompt Claude to leave those cells blank, then score them manually using the same criteria — the model cannot evaluate vendors it has no performance data for, and the plausible numbers are fabricated
- **C.** Ask Claude to provide sources for each score it assigned to the two remaining vendors, and keep whichever scores it can substantiate with a reference
- **D.** Run the matrix through Opus with extended thinking to see whether a more capable model assigns different scores, and use whichever set looks more reasonable

B
---

## Q7 · D7

A customer-success team at a SaaS company uses a Claude Project to generate quarterly business reviews for enterprise clients. The standing instructions specify that each review must open with a usage-trend summary drawn from the client's telemetry data uploaded as a CSV. An account manager notices that the usage-trend section of one client's review references metrics from a different client's telemetry file that was discussed in an earlier chat within the same Project.

**Which diagnostic cause fits this symptom?**

- **A.** Stale configuration — the telemetry CSV has not been updated and Claude is filling gaps with data from the nearest available source
- **B.** Context overload — information from a prior conversation in the same Project has bled into the current chat, likely because memory or the Project's conversation history carried the other client's data forward
- **C.** Under-specification — the prompt does not explicitly instruct Claude to use only the current client's CSV, so the model drew from the most accessible data
- **D.** Wrong feature — quarterly business reviews require a database connector, not manual CSV uploads, and the feature mismatch is causing data leakage between clients

B
---

## Q8 · D6 · LONG CASE

A national pharmacy chain uses Claude to generate personalised medication-adherence reminders for patients enrolled in its chronic-disease management programme. The governance record submitted for compliance review reads as follows:

Case: appropriate with review. The deciding factor is that adherence reminders are routine communications whose content is templated and whose clinical risk is low — a poorly worded reminder does not alter the prescription. Gate: a pharmacist reviews a random sample of ten reminders per week from approximately two thousand generated. Data: the workflow ingests patient first names, medication names, dosage schedules, prescribing physician names, and the patient's preferred pharmacy branch. Tier: red — patient health information. The team confirmed that the task requires patient identifiers because the reminder must address the patient by name and reference their specific medication. Route: the chain's enterprise workspace, which IT has approved for data up to and including the red tier. Capability: a read-only connector to the dispensing system, plus a third-party MCP integration that a vendor configured to format reminders for SMS delivery. The MCP integration was installed by the vendor's engineer during onboarding and has not been audited by the pharmacy chain's own team. People: affects patients and prescribing physicians named in the reminders. No fairness assessment conducted. No disclosure to patients that reminders are AI-generated.

**Which TWO sections contain the most serious problems?** 〔Select 2〕

- **A.** The Case section — adherence reminders that reference specific medications and dosages carry clinical risk if the wrong medication or dosage appears; "low clinical risk" is an understatement that weakens the entire governance posture
- **B.** The Gate section — sampling ten out of two thousand reminders weekly is a 0.5% review rate for health-related communications; the gate exists but is functionally unstaffed for the volume
- **C.** The Capability section — an unaudited third-party MCP integration installed by an external vendor has not been reviewed by the chain's own team, and it sits alongside a connector to the dispensing system containing red-tier patient data
- **D.** The Data section — patient first names should be removed and replaced with coded identifiers to reduce the sensitivity of the data processed
- **E.** The People section — patients have not been told that their medication reminders are AI-generated, which is a disclosure gap, but it is secondary to the clinical and capability risks

C and D
---

## Q9 · D2

A management consultancy's associate uses Claude to synthesise findings from six stakeholder interviews (each uploaded as a transcript) into an executive summary for the client's board. The summary attributes specific strategic priorities to named interviewees — for example, "the Chief Operating Officer identified supply-chain resilience as the firm's most pressing vulnerability." The associate checks two of the six attributions against the transcripts and finds them accurate.

**Why is this verification insufficient?**

- **A.** Two out of six is a small sample, but the real problem is that accuracy on checked attributions says nothing about the unchecked four — the model may have fabricated or conflated statements for the interviewees whose transcripts the associate did not re-read
- **B.** The associate should have used extended thinking to ensure Claude processed all six transcripts thoroughly before drafting the summary
- **C.** Two out of six is a statistically valid sample for a six-item population, so the verification is actually sufficient
- **D.** The associate should ask Claude to self-assess the accuracy of each attribution and flag any it is uncertain about, then verify only the flagged items

A
---

## Q10 · D3

A mid-sized accounting firm uses Claude for three distinct tasks: drafting client engagement letters (templated, low complexity), reviewing lease-classification analyses under IFRS 16 where the treatment depends on the interplay of several quantitative thresholds and qualitative judgment factors across 40-page lease agreements, and answering one-off internal questions from staff such as "What's the deadline for filing a CT600 for a December year-end?"

The firm currently runs all three tasks on the same model tier. The managing partner asks which configuration would be most cost-effective without compromising quality.

**Which allocation is correct?**

- **A.** Haiku for engagement letters, Opus with extended thinking for lease-classification reviews, Sonnet for one-off internal questions
- **B.** Sonnet for all three tasks — it is the best general-purpose balance and avoids the operational complexity of managing multiple tiers
- **C.** Opus with extended thinking for all three tasks — the firm cannot afford errors in any client-facing output, so the top tier is justified across the board
- **D.** Sonnet for engagement letters, Haiku for lease-classification reviews to keep costs down, Opus for one-off questions because staff expect instant authoritative answers

A
---

## Q11 · D4 · LONG CASE

A boutique investment-advisory firm has built a workflow for producing suitability reports that recommend portfolio allocations to retail clients. The delegation map is as follows:

Step 1 (AI, reversible, low stakes): extract the client's risk-tolerance questionnaire responses, investment horizon, and stated financial objectives from the CRM via a read-only connector. Step 2 (AI, reversible, checked at step 4): using code execution, run a mean-variance optimisation against the firm's approved model portfolios to generate three candidate allocations that fall within the client's stated risk parameters. Step 3 (AI, reversible, low stakes): draft the suitability narrative explaining why each candidate allocation is consistent with the client's objectives and risk profile, referencing the firm's investment philosophy document in the Project's knowledge files. Step 4 (collaborative): the adviser reviews the suitability narrative, selects one of the three allocations, and signs the report. Step 5 (AI, routine, approved at step 4): the signed report is emailed to the client and a copy is filed in the CRM via a write-enabled connector.

The compliance officer reviews the map and flags one step.

**Which step does the compliance officer flag, and what is the mapping error?**

- **A.** Step 3 — the suitability narrative explains why allocations are consistent with the client's objectives, but suitability is a regulated judgment that must be made by the adviser, not drafted by the model and then rubber-stamped; this is mapping the tool (confusing text production with the regulated judgment the step requires)
- **B.** Step 2 — mean-variance optimisation should be performed by the firm's proprietary quantitative system, not by Claude's code execution, because the model may introduce calculation errors that a dedicated system would not
- **C.** Step 5 — emailing the report to the client and filing it in the CRM are irreversible actions with external reach; the "approved at step 4" annotation does not constitute a gate at step 5 itself
- **D.** Step 4 — the adviser selecting one of three allocations is halo delegation because the model produced the options and the adviser is merely choosing among them rather than exercising independent judgment

A - G
---

## Q12 · D1

A senior analyst at an energy-trading firm asks Claude to produce a competitive-intelligence briefing on a rival firm's strategic positioning, drawing on the analyst's notes from three industry conferences (uploaded as documents) and a set of the rival's publicly filed regulatory submissions (also uploaded). The briefing returned is articulate and well-structured, but the analyst notices that one paragraph attributes a market-entry strategy to the rival that does not appear in any of the uploaded documents.

**What is the most appropriate response?**

- **A.** Keep the paragraph because it is plausible and aligns with the analyst's broader understanding of the rival's strategy
- **B.** Remove the paragraph and flag the claim as unsubstantiated — then review the remainder of the briefing with heightened scrutiny, since one fabricated attribution raises the probability that other claims may also lack source support
- **C.** Ask Claude whether the claim came from the uploaded documents or from its training data, and retain it only if Claude confirms a specific source
- **D.** Switch to Opus with extended thinking and regenerate the entire briefing to eliminate the fabrication

C
---

## Q13 · D5

A multi-brand hospitality group operates four hotel brands, each with distinct tone-of-voice guidelines, loyalty-programme rules, and cancellation policies. All four brands share a single Claude Project because the group's IT team set it up as a centralised workspace. A guest-relations associate working on Brand A notices that a draft cancellation-policy explanation cites Brand C's 48-hour cancellation window instead of Brand A's 24-hour window.

**What is the structural fix?**

- **A.** Add brand-specific prefixes to every prompt so Claude knows which brand the associate is working on and can select the correct policy
- **B.** Create a separate Project for each brand, with brand-specific knowledge files and standing instructions, so that one brand's policies cannot contaminate another's output
- **C.** Ask Claude to memorise which brand each associate belongs to, so it applies the correct policies automatically based on who is chatting
- **D.** Upload a master document listing all four brands' policies side by side, with clear labels, so Claude can always find the right policy for any brand

B
---

---

# PART 1 — ANSWER KEY

> **Review ONLY after completing Part 1 under timed conditions.**

---

### Q1 · D7 — Answer: A

"Worked for six weeks, then broke, nothing in the prompt changed" is the textbook stale-configuration signature. The rate-adequacy spreadsheet may have been superseded in the business but not updated in the Project. The discontinued endorsement still sitting in an uploaded policy document confirms: the knowledge files are stale. A model upgrade addresses none of this — Opus will read the same outdated spreadsheet and the same discontinued endorsement.

- **B** — Skips to the most expensive lever (model change) before checking the cheapest (knowledge files); also wrong on the premise — Sonnet with code execution can calculate premiums; the issue is stale inputs, not model capability
- **C** — Context overload degrades output within a single long conversation; this workflow broke across separate sessions after six stable weeks, pointing to the knowledge layer, not chat length
- **D** — Rebuilding from scratch is the most expensive fix for what may be a two-file replacement

---

### Q2 · D4 — Answer: A

Step 3 asks Claude to propose contract renegotiation and volume reallocation. These are strategic commercial decisions — reallocating freight volume between carriers has cost, service, and relationship consequences. Claude can draft a narrative about performance trends, but the step as mapped asks it to make strategic recommendations. This is mapping the tool: the step requires commercial judgment, but the map assigns it to a tool that produces text. The distinction is between "write about what happened" (model can do) and "recommend what to do about it" (requires human judgment on consequences).

- **B** — Step 4's gate could be more specific, but it exists and is staffed (the logistics director is named, the check method is described — cross-referencing against the TMS dashboard). It's imperfect, not unstaffed.
- **C** — Step 5 publishes to a shared drive (overwritable) and sends an internal notification. The "sixty days of good performance" framing sounds like halo, but the actual problem is in step 3, not step 5. Internal notifications are lower-reach than the strategic recommendations in step 3.
- **D** — Timestamp normalisation against SLAs is a mechanical comparison well suited to code execution; it doesn't require understanding "nuances" in a judgment sense

---

### Q3 · D6 — Answer: D

The workspace is approved for confidential data at the classification level. But route approval for a classification level is not the same as route approval for every purpose. Reconciliation produces a discrepancy report that will be distributed to the group financial controller — this is a specific use case that the workspace approval may or may not cover. The analyst should confirm that the approved route covers this purpose and this distribution path, not assume that classification-level approval is blanket permission.

- **A** — Gets the classification right but skips the purpose check; "approved for confidential" ≠ "approved for reconciliation and reporting to the controller"
- **B** — Abandonment — intercompany loan data is confidential, not prohibited; a safe path exists
- **C** — Anonymising entity names breaks the task — the whole point is matching Entity A's receivable to Entity B's payable; you need to know which entity is which

---

### Q4 · D2 — Answer: A

Citations create an illusion of verification. A section number and title look like a source trail, but the gap analysis characterises what each section requires — and that characterisation is a paraphrase generated by the same prediction process. A paraphrase can shift meaning subtly: "the guidance recommends X" may become "the guidance requires X," and the section number will still look correct. The associate must open the actual guidance document, read the cited passages, and confirm the characterisation is faithful — not just that the section exists.

- **B** — Reducing the list doesn't verify it; it just makes an unchecked list shorter
- **C** — Traceability is necessary but not sufficient; citations must be checked, not just present
- **D** — A second model agreeing with the first is consensus, not verification; both can paraphrase the same section the same way

---

### Q5 · D4 — Answer: B

The Verification section says the senior partner checks savings figures and reads the recommendation. But the Brief's Constraints section explicitly flagged the risk of overstated savings projections. The verification doesn't check whether savings are overstated — it checks whether the figures match the quotation documents, which is a different thing. Matching the source doesn't mean the presentation is fair. And the comparison tables — which form the analytical backbone of the report — are not verified at all. The gap is between what the Brief identified as the risk and what the Check actually examines.

- **A** — Vague constraints are a real concern but are secondary to the verification gap that leaves the identified risk unchecked
- **C** — The census data is needed: the report compares benefits packages for the client's employee population; removing it breaks the task
- **D** — The consultant has authority to instruct; the senior partner reviews before sending; accountability flows through the review gate

---

### Q6 · D1 — Answer: B

Claude had no performance data for the two remaining vendors — no site visits, no service records, no contract history. The plausible-looking scores were generated by the same process that generates any text: predict what such a matrix would most likely contain. The fact that the scores look reasonable makes them more dangerous, not less. Delete them, re-prompt with blank cells, and score manually.

- **A** — "Inferred from the pattern" is exactly the problem described; the model doesn't have the vendor data, so it fabricated scores that fit the pattern
- **C** — The model cannot provide sources for scores it fabricated; asking for post-hoc justification produces post-hoc justification, not evidence
- **D** — A more capable model fabricating scores does not make them real

---

### Q7 · D7 — Answer: B

The symptom is data from a different client's conversation appearing in the current chat within the same Project. This is context bleed — information from a prior conversation carried forward through memory or Project-level context. The data isn't stale (it's real data, just from the wrong client). It isn't under-specified (the prompt likely does reference the current client). It isn't a feature mismatch. It's context from a prior session contaminating the current one.

- **A** — Stale configuration would mean the correct client's data is outdated, not that a different client's data appears
- **C** — Under-specification would explain generic output, not specific data from the wrong client; the model had to get that data from somewhere in the context
- **D** — CSV uploads work fine for this purpose; the issue is context separation, not the input method

---

### Q8 · D6 — Answer: A, C

**A (Case section):** "Low clinical risk" understates the consequence. If a reminder references the wrong medication or wrong dosage, a patient could take incorrect action — skip a dose, take the wrong one, or lose trust in the pharmacy's communications. For health-related communications, the clinical risk is not determined by the format (reminder vs. prescription) but by what happens if the content is wrong.

**C (Capability section):** An unaudited third-party MCP integration installed by an external vendor sits alongside a read-only connector to the dispensing system containing red-tier patient health data. The MCP integration has not been reviewed by the pharmacy's team. Skills and MCP integrations have no scope dial — the integration runs with whatever access the session has. An unreviewed external component with potential access to patient health data is the capability equivalent of an unlocked door.

- **B** — The sample rate is low, but a gate with a low sample rate is still a gate; the Case and Capability gaps are more dangerous because they affect the entire governance posture
- **D** — The task explicitly requires patient names (the reminder addresses them personally); removing them breaks the purpose
- **E** — Disclosure is a real gap but correctly identified as secondary to clinical and capability risks

---

### Q9 · D2 — Answer: A

Checking two attributions and finding them correct creates a false sense of security about the other four. Accuracy on checked items is not evidence about unchecked items — the model may have fabricated or conflated statements for the interviewees whose transcripts were not re-read. In a six-item population, two correct does not project to six correct. Each attribution must be independently verified against its source transcript, because fabrication is not random — the model may fabricate for transcripts it processed less completely.

- **B** — Extended thinking improves reasoning depth but does not eliminate fabrication; it's a capability lever applied to a verification problem
- **C** — There is no statistical sampling frame here; each attribution is a unique claim about a named person that will be read by a board
- **D** — Self-assessment is not a verification signal; the model's confidence is a learned style, not calibrated uncertainty

---

### Q10 · D3 — Answer: A

Match the model to the task complexity. Engagement letters are templated and low-complexity — Haiku handles them. Lease-classification reviews require holding 40 pages of quantitative thresholds and qualitative factors coherent while making an interplay judgment — Opus with extended thinking. One-off internal questions are moderate complexity with no multi-document reasoning — Sonnet.

- **B** — Sonnet is under-powered for the lease analysis and over-powered for engagement letters; "one tier for everything" wastes money on one end and quality on the other
- **C** — Opus with thinking on engagement letters is the exact over-spend the model ladder exists to prevent
- **D** — Haiku on the hardest task (lease classification) and Opus on the easiest (one-off questions) is backwards on both ends

---

### Q11 · D4 — Answer: A

Step 3 asks Claude to draft a suitability narrative explaining why allocations are consistent with the client's objectives. In a regulated advice context, the suitability assessment is the regulated judgment itself — it's the reason the client receives the recommendation. Drafting this narrative is not just "writing text about numbers"; it's producing the regulated reasoning that the adviser must own. If the adviser reviews and signs, they're rubber-stamping AI-generated suitability reasoning. This is mapping the tool: the step needs a regulated professional judgment, but the map assigns it to a model that produces text. The adviser should write or materially direct the suitability reasoning, not simply approve what the model wrote.

- **B** — Code execution against the firm's own approved model portfolios is the correct method; the optimisation is mechanical (input parameters → output allocations), not judgment
- **C** — Step 5 sends the signed report — the adviser has approved it at step 4, and filing in the CRM is a record-keeping action. The "approved at step 4" is a legitimate pre-authorisation for distribution of the specific document the adviser signed
- **D** — The adviser choosing among three model-generated options is standard decision support, not halo delegation; the adviser applies their own judgment to select and takes responsibility by signing

---

### Q12 · D1 — Answer: B

One fabricated attribution in a competitive-intelligence briefing is not an isolated event — it's a signal. If the model fabricated one market-entry strategy, the same generation process produced the rest of the briefing. Remove the unsupported paragraph, then go back through the entire document checking each claim against the uploaded sources. Heightened scrutiny is warranted because the base rate of fabrication in this output is now known to be non-zero.

- **A** — Keeping a fabricated claim because it "seems right" defeats the purpose of verification; plausibility is not evidence
- **C** — The model cannot reliably distinguish its own sources; self-report is not a verification signal
- **D** — Regenerating doesn't verify; it produces a new draft that may or may not contain the same fabrication

---

### Q13 · D5 — Answer: B

Four brands with distinct policies, tones, and rules sharing one Project means all four knowledge bases are present in every conversation. The model has no structural way to isolate Brand A's cancellation policy from Brand C's — the boundary is in the prompt, not the configuration. Separate Projects create the structural wall: each brand's knowledge files and standing instructions live in their own space.

- **A** — Prompt prefixes are a per-conversation workaround; they don't prevent knowledge contamination from the shared Project files
- **C** — Memory is best-effort, not configuration; you cannot rely on memory to enforce a structural boundary
- **D** — A master document with all four policies increases the chance of cross-contamination, not decreases it; the model must pick from four policies in every response

---

*End of Part 1 · Take a 5-minute break, then continue to Part 2*

---
---

# PART 2 — Questions 14–25

---

## Q14 · D7 · LONG CASE

A national estate agency uses a Claude Project to generate property-listing descriptions from surveyor reports uploaded as PDFs. The workflow has been running for four months. The standing instructions specify British English, a maximum of 150 words per listing, and that every description must include the property's Energy Performance Certificate rating. Last week, three out of twenty listings omitted the EPC rating entirely. The week before, all twenty were correct. The associate running the workflow has not changed the prompt or the standing instructions.

The associate's manager suggests switching from Sonnet to Opus and rewriting the standing instructions with stronger language about the EPC requirement.

**Which diagnostic step should come BEFORE either of those changes?**

- **A.** Check whether the three surveyor reports that produced listings without EPC ratings actually contained EPC data — if the source documents lacked the information, no prompt or model change will fix the omission
- **B.** Start a new Project from scratch because four months of accumulated chat history has degraded the model's adherence to standing instructions
- **C.** Add a second AI step that reviews each listing for EPC compliance before publishing, creating a self-checking loop
- **D.** Ask Claude why it omitted the EPC rating from those three listings, since the model can reliably explain the cause of its own errors

A
---

## Q15 · D6 · LONG CASE

A regional law firm wants to use Claude to assist with document review in a commercial-litigation matter. The review involves 8,000 documents produced by the opposing party during discovery. The firm's associate proposes the following plan: upload all 8,000 documents into a Claude Project, ask Claude to classify each document as relevant, privileged, or not relevant, and produce a review log. The associate will personally review all documents Claude classifies as privileged, spot-check 5% of the "relevant" classifications, and accept the "not relevant" classifications without review. The documents contain commercially sensitive information belonging to both parties, client communications that may be subject to legal professional privilege, and personal data of employees mentioned in the correspondence.

**Which TWO aspects of this plan present the most serious risks?** 〔Select 2〕

- **A.** The "not relevant" classifications are accepted without review — if Claude misclassifies a privileged document as not relevant, the firm may inadvertently waive privilege by failing to withhold it, which is an irreversible harm to the client
- **B.** The spot-check rate of 5% for "relevant" documents is too low for a litigation matter where the accuracy of the review log may be challenged by the opposing party
- **C.** Uploading 8,000 documents containing opposing-party commercially sensitive information, client privileged communications, and employee personal data requires confirmation that the route is approved for this data classification, this volume, and this purpose — the plan proceeds without any data-governance check
- **D.** Claude cannot reliably classify documents for legal relevance because it lacks legal training; the entire plan should be abandoned in favour of a fully manual review
- **E.** The associate's plan to personally review all privileged-classified documents is unnecessary since Claude's classification accuracy is sufficient for binary decisions

A and C
---

## Q16 · D4

A wholesale nursery (plants, not children) has a Claude-assisted workflow for generating weekly purchase orders based on seasonal demand forecasts and current stock levels. The grower-relations manager reviews and approves each purchase order before it is sent to suppliers. For the past three weeks, the grower-relations manager has approved every purchase order within seconds of receiving it, without opening the attached stock-level report or checking the quantities against the demand forecast.

**What type of mapping error does this represent?**

- **A.** Mapping the tool — the grower-relations manager is confusing Claude's ability to generate purchase orders with the quality of the orders themselves
- **B.** Unstaffed gate — the review step exists in the map but is functionally empty because the grower-relations manager is not performing the defined checks, leaving the gate without a WHO that actually acts
- **C.** Halo delegation — the purchase orders have been accurate for three weeks, so the grower-relations manager has stopped checking them, delegating effective control to the AI based on past performance
- **D.** This is not a mapping error — it is an operational discipline issue that falls outside the delegation framework

B
---

## Q17 · D2

A credit-control team at a building-materials distributor uses Claude to draft payment-chasing letters for overdue accounts. The standing instructions specify that the letter must reference the exact invoice number, the outstanding amount, and the contractual payment terms. The associate reviews five letters and confirms all three data points match the source records.

A colleague points out that one letter warns the debtor about potential legal proceedings — a warning that does not appear in the standing instructions and was not authorised by the credit-control manager.

**What does this reveal about the verification approach?**

- **A.** The verification checked that the included data was correct but did not check for content that should NOT be present — verification must cover both accuracy of included claims and absence of unauthorised additions
- **B.** The verification is sufficient because the three specified data points were all correct; the unauthorised legal warning is a separate quality issue, not a verification failure
- **C.** The standing instructions should be rewritten to explicitly prohibit legal warnings, since the model will always add content beyond what is specified unless told not to
- **D.** The associate should switch to a less capable model that is less likely to generate additional content beyond the prompt's specifications

A
---

## Q18 · D6

A human-resources department wants Claude to generate a shortlist of internal candidates for a senior-management vacancy. The HR business partner proposes uploading performance reviews, promotion histories, and demographic data for all 60 eligible employees, then asking Claude to rank the top 10 candidates based on leadership potential and strategic fit.

**What is the most serious concern with this approach?**

- **A.** The demographic data is unnecessary for the ranking and should be removed before upload to prevent the model from using protected characteristics as ranking factors — and even without explicit demographic fields, patterns in performance reviews and promotion histories may correlate with protected characteristics, requiring human oversight of the ranking criteria
- **B.** Claude lacks the organisational knowledge to assess "leadership potential" and "strategic fit," so the ranking will be inaccurate regardless of the data provided
- **C.** The enterprise workspace is not approved for HR data, so the upload should be blocked by IT policy
- **D.** Ranking employees is always inappropriate for AI assistance; the HR business partner should abandon the approach entirely and conduct a fully manual review

A
---

## Q19 · D7

An associate at an architecture practice uses a Claude Project to draft planning-permission applications from survey drawings and site-appraisal reports. The Project has worked well for residential applications. The associate now uses the same Project, with the same standing instructions and knowledge files, for a commercial planning application — and the output repeatedly applies residential parking standards instead of the commercial standards that apply to the site.

**Which diagnostic cause fits, and what is the fix?**

- **A.** Under-specification — the standing instructions and knowledge files were written for residential applications and do not cover commercial standards; update the knowledge files and standing instructions to include commercial planning requirements, or create a separate Project for commercial work
- **B.** Context overload — the long history of residential applications in the Project has biased the model toward residential standards; start a new chat
- **C.** Stale configuration — the residential parking standards in the knowledge files are outdated and need to be refreshed
- **D.** Wrong model — the model tier is insufficient for commercial planning work; upgrade to Opus

B
---

## Q20 · D4 · LONG CASE

A corporate-event management company has built a delegation map for producing post-event client reports. The map reads as follows:

Step 1 (AI, reversible): ingest attendee-feedback survey data from the event platform via a read-only connector and calculate Net Promoter Score, satisfaction averages, and response rates using code execution. Step 2 (AI, reversible): draft a narrative analysis of the survey themes, including verbatim attendee quotes that illustrate the most common positive and negative sentiments. Step 3 (collaborative): the event director reviews the report, approves the narrative, and selects which quotes to include in the client-facing version. Step 4 (AI, routine): email the approved report to the client's marketing director, the client's head of internal communications, and the client's procurement lead, and CC the event company's own account manager.

The event director asks whether this map is sound.

**Which step has the most serious problem?**

- **A.** Step 1 — NPS calculations should be performed by the event platform's built-in analytics, not by Claude's code execution, because the platform's calculations are auditable
- **B.** Step 2 — the narrative includes verbatim attendee quotes, which may contain personal opinions or identifying information that the attendees did not consent to share with the client
- **C.** Step 3 — the event director's quote selection is a judgment call that should not appear in a delegation map because it is entirely human work
- **D.** Step 4 — sending the report to three external client contacts is an irreversible action with external reach that should require a human to explicitly trigger the send, not be delegated to AI as a routine step

B
---

## Q21 · D2 · LONG CASE

A pension-fund administrator uses Claude to draft annual benefit statements for 12,000 members. Each statement includes the member's projected retirement income calculated from their contribution history, fund performance, and selected retirement age. The governance record's verification section reads: "The pensions manager reviews a random sample of 25 statements each year, checking the projected figures against the fund's actuarial valuation report."

A trustee asks whether this verification approach is adequate.

**Which concern is most serious?**

- **A.** 25 out of 12,000 is a 0.2% sample rate; the verification is functionally absent for a document that members rely on for retirement-planning decisions — and the verification checks projections against the actuarial report, but does not verify that each member's individual contribution history was correctly ingested and applied
- **B.** The sample rate is adequate because pension statements are generated from structured data, and if the template works for 25 statements it will work for all 12,000
- **C.** The pensions manager should verify every statement individually before it is sent to the member
- **D.** The verification should be automated — a second AI model should check each statement against the actuarial report, eliminating the need for manual review

---

## Q22 · D1

A procurement analyst at a hospital trust asks Claude to summarise a 120-page medical-device tender response from a supplier. The analyst types: "Give me the key points." Claude returns a tidy five-bullet summary. The analyst notices that the summary emphasises the supplier's competitive pricing and customer testimonials but omits the supplier's proposed maintenance terms, which the trust's biomedical engineering team specifically flagged as the deciding factor for this procurement.

**Which aspect of the request most directly caused the omission?**

- **A.** The model lacks domain expertise in medical-device procurement and cannot identify which sections of a tender response are most important
- **B.** The request did not specify who the reader is, what they need the summary for, or which sections must be covered — so the model defaulted to what a generic summary of a tender response would most likely emphasise
- **C.** The 120-page document exceeded the model's ability to process the full content, causing it to focus on the sections that appeared earliest in the document
- **D.** The analyst should have used extended thinking to ensure the model considered every section of the tender before summarising

---

## Q23 · D3

A data-protection officer at a university wants to use Claude to help draft the institution's updated records-retention schedule. The task involves reviewing the current schedule (a 30-page internal document), comparing it against the latest regulatory guidance from the Information Commissioner's Office, and producing a redlined version showing recommended changes. The DPO asks whether they should use research mode so Claude can look up the latest ICO guidance.

**What is the most appropriate recommendation?**

- **A.** Use research mode — it will find the latest ICO guidance and compare it against the university's schedule, producing the most current and accurate redline
- **B.** Upload the current ICO guidance document directly into the Project and use standard chat — the DPO should control which version of the guidance is referenced rather than relying on web search to find and correctly identify the authoritative source
- **C.** Use research mode but instruct Claude to cite every source so the DPO can verify the guidance references
- **D.** Do not use Claude for this task at all — records-retention schedules are too sensitive for AI involvement

---

## Q24 · D6 · LONG CASE

A vehicle-leasing company uses Claude to generate monthly fleet-utilisation reports for its corporate clients. Each report includes vehicle mileage, fuel consumption, maintenance costs, and driver-assignment data. The governance record reads:

Case: appropriate. Reversibility: the report is a draft reviewed before distribution. Consequence: a factual error in the report could lead a client to make incorrect fleet-sizing decisions, resulting in over-commitment on lease contracts or under-provision of vehicles for operational needs. Human judgment: the fleet analyst applies commercial context that the model cannot access. Accountability: the fleet analyst signs the report. Gate: the fleet analyst reviews the report before distribution. Data: vehicle registration numbers, driver names, driver licence categories, mileage readings, fuel-card transactions, and maintenance invoices. Tier: yellow — commercial data with personal identifiers. Route: enterprise workspace approved for yellow-tier data. Capability: read-only connector to the fleet-management platform. People: affects corporate clients' fleet managers who act on the report's figures, and drivers whose utilisation data is reported to their employer.

**Which section contains the most serious error?**

- **A.** The Case section — the classification says "appropriate" but the Consequence subsection describes material business decisions based on the report's accuracy; a report that drives lease-contract commitments and fleet-sizing is "appropriate with review," not "appropriate"
- **B.** The Data section — driver licence categories are unnecessary for a utilisation report and should be excluded to minimise the personal data processed
- **C.** The People section — drivers whose utilisation is reported to their employer have not been assessed for fairness or disclosure, but this is secondary to the classification error
- **D.** The Capability section — the connector should have write access to log which reports were generated and when

---

## Q25 · D5

A public-affairs consultancy works with clients across five regulated industries — financial services, healthcare, energy, telecommunications, and defence. Each industry has distinct regulatory terminology, mandatory disclosure requirements, and stakeholder conventions. The consultancy's associates currently work within a single Claude Project and frequently find that a briefing drafted for a healthcare client uses financial-services regulatory language, or that a telecommunications stakeholder map references defence-sector clearance levels.

The consultancy's knowledge-management lead proposes three options:

1. Add industry labels to every prompt
2. Create one Project per industry with tailored knowledge files and standing instructions
3. Build one Skill per industry that carries the regulatory terminology and conventions, and invoke the appropriate Skill at the start of each task

**Which option is the most robust structural fix?**

- **A.** Option 1 — prompt labels are the simplest approach and provide enough context for the model to select the correct terminology
- **B.** Option 2 — separate Projects create hard boundaries between industries' knowledge files and instructions, preventing cross-contamination at the configuration level
- **C.** Option 3 — Skills carry the regulatory context and can be invoked selectively, but Skills have no scope dial, so the consultancy must ensure that each Skill's instructions do not conflict with the Project's standing instructions
- **D.** Options 2 and 3 together — use separate Projects for the structural boundary and add industry-specific Skills within each Project for the specialised regulatory templates and conventions

---

---

# PART 2 — ANSWER KEY

> **Review ONLY after completing Part 2 under timed conditions.**

---

### Q14 · D7 — Answer: A

Before changing the model or rewriting instructions, check whether the input data contained the information the output was supposed to include. If the three surveyor reports didn't contain EPC ratings, no prompt change or model upgrade will fix the omission. This is the cheapest diagnostic step: open the three PDFs and look. The standing instructions are correct. The model tier is not the issue. Start with the data.

- **B** — Projects don't accumulate chat history across separate conversations in a degrading way; each new chat starts fresh within the Project
- **C** — Self-checking loops add cost without diagnosing the cause; if the source data is missing, the checker will also lack it
- **D** — The model cannot reliably explain why it omitted something; self-diagnosis is not a signal

---

### Q15 · D6 — Answer: A, C

**A:** The "not relevant" bucket is accepted without any review. If Claude misclassifies a privileged document as "not relevant," the firm fails to withhold it — and privilege waiver is irreversible. In litigation, the consequence of missing one privileged document can be catastrophic for the client. This is the highest-stakes classification error in the workflow, and it has zero human review.

**C:** The plan uploads 8,000 documents containing opposing-party commercial secrets, potentially privileged communications, and employee personal data without confirming the route is approved for this specific data classification, volume, and litigation purpose. Enterprise workspace approval is not blanket permission.

- **B** — 5% spot-check on "relevant" is low, but an error in "relevant" classification means a document is reviewed unnecessarily (low harm). An error in "not relevant" waives privilege (irreversible harm). A is the more serious gap.
- **D** — AI-assisted document review is standard practice in litigation; abandonment is not warranted when proper safeguards exist
- **E** — Reviewing privileged classifications is essential, not unnecessary

---

### Q16 · D4 — Answer: C

The grower-relations manager has stopped performing the defined checks because the orders have been accurate for three weeks. This is halo delegation: past accuracy on routine orders has earned the AI effective ownership of the step, because the human gate has become a rubber stamp. The gate still exists on paper; the WHO is still named; the checks are still defined — but the person has stopped doing them because the AI "has been right." The competence was real, but it belonged to past orders and doesn't guarantee future ones.

- **A** — Mapping the tool would mean confusing what the model produces with what the step needs — but the step is correctly designed (generate PO, human reviews). The problem is that the human stopped reviewing.
- **B** — Unstaffed gate means the gate was never properly defined — no WHO, no WHAT, no WHEN. Here, the gate IS defined; the manager is simply not performing it. The staff is present but idle.
- **D** — This IS a mapping error — it's the definition of halo delegation. Saying it's "just an operational issue" misses the framework.

---

### Q17 · D2 — Answer: A

The verification checked the three required data points and confirmed they were correct. But it didn't check what ELSE the model added. The legal-proceedings warning was an unauthorised addition — content the model generated that was never specified or approved. Sound verification covers both directions: are the required items correct (inclusion), and is there anything that shouldn't be there (exclusion)? Checking only for accuracy of specified items is half a verification.

- **B** — The unauthorised addition IS a verification failure — the verification process should have caught content that was never authorised
- **C** — You cannot exhaustively list everything the model should NOT include; the fix is verification that checks for unexpected additions, not a longer prohibition list
- **D** — A less capable model may produce different unwanted content, not no unwanted content

---

### Q18 · D6 — Answer: A

Two layers of concern. First: demographic data is unnecessary for ranking leadership potential and strategic fit, so including it violates data minimisation and creates a direct channel for protected-characteristic bias. Remove it. Second, and less obvious: even without explicit demographic fields, performance reviews and promotion histories can correlate with protected characteristics (e.g., maternity-leave gaps reflected in promotion timing). The ranking criteria and output must be reviewed by a human who understands these risks.

- **B** — Claude can synthesise information from performance reviews and apply stated criteria; "lacks organisational knowledge" is overstated. The concern is bias, not accuracy.
- **C** — The question doesn't state the workspace is unapproved; this is a governance concern about the approach, not the route
- **D** — AI-assisted candidate screening is appropriate with proper safeguards; abandonment is unnecessary when the risks can be mitigated

---

### Q19 · D7 — Answer: A

The standing instructions and knowledge files were built for residential applications — they contain residential parking standards, residential planning rules, and residential precedents. When the associate asks for a commercial application, the model draws from what's in the Project: residential content. This isn't drift or overload — it's the simple fact that the knowledge base doesn't cover the new use case. Either update the Project to include commercial standards, or create a separate Project for commercial work.

- **B** — Context overload would appear as general degradation within a long chat; this is a consistent, predictable error that occurs because the right information isn't in the Project
- **C** — The residential standards aren't outdated — they're correctly applied to residential work. The problem is they're being applied to a commercial application they don't cover
- **D** — The model is doing exactly what its knowledge files tell it; a more capable model will read the same residential-only knowledge files and produce the same residential-standard output

---

### Q20 · D4 — Answer: D

Step 4 emails the report to three external client contacts and CCs the account manager. Once sent, the email cannot be recalled. This is an irreversible action with external reach — the report goes to people outside the company. Even though step 3 approved the content, sending is a separate action with its own consequences (wrong attachment, wrong recipients, sent prematurely). A human should explicitly trigger the send.

- **A** — Code execution is a valid calculation method; the event platform's analytics may also be used, but this is a preference, not a mapping error
- **B** — Verbatim quotes are a legitimate concern (and worth raising), but the narrative and quotes are reviewed at step 3 where the event director explicitly selects which quotes to include. The review gate addresses this.
- **C** — Human judgment steps belong in delegation maps — the map documents what happens, not just what AI does

---

### Q21 · D2 — Answer: A

Two problems compound. First: 25 out of 12,000 is a 0.2% sample — for a document members use to make retirement-planning decisions, this is functionally absent verification. A member who receives an incorrect projection may make irreversible financial decisions (early retirement, additional contributions, housing plans) based on wrong figures. Second: the verification checks projections against the actuarial valuation, but doesn't verify that each member's contribution history was correctly extracted and applied — the most common source of individual errors. The check verifies the aggregate, not the individual pipeline.

- **B** — Pension statements are not purely templated; each one draws on the individual member's contribution history, fund allocation, and selected retirement age. A template error would affect all 12,000 identically; an ingestion error affects individuals unpredictably.
- **C** — Individually verifying 12,000 statements is impractical; the answer is a better verification method (automated reconciliation + risk-based sampling), not brute-force review
- **D** — A second AI model checking the first is consensus, not verification; systematic errors pass both

---

### Q22 · D1 — Answer: B

"Give me the key points" doesn't tell the model who reads it, why, or what matters. The model defaulted to what a generic summary would emphasise — pricing and testimonials are the most common "key points" in a tender response. The maintenance terms were the deciding factor for this specific procurement, but the model had no way to know that. Stating the reader (biomedical engineering team), the purpose (maintenance-term evaluation), and the required sections would have anchored the summary.

- **A** — The model can identify maintenance terms; it deprioritised them because the request gave no guidance on what matters
- **C** — 120 pages is within processing range for current models; the issue is priority, not capacity
- **D** — Extended thinking produces a more carefully generic summary, not one that knows what the biomedical team needs

---

### Q23 · D3 — Answer: B

The DPO needs to control which version of the ICO guidance is used. Research mode searches the web and may return outdated guidance, draft guidance, third-party summaries, or guidance from a different jurisdiction. For a records-retention schedule, the source must be the authoritative, current version of the specific ICO guidance the DPO identifies. Upload it directly and use standard chat so the source is known and controlled.

- **A** — Research mode introduces source uncertainty in a task where the exact version of the guidance matters
- **C** — Citations help but don't solve the source-selection problem; the DPO still can't be sure research mode found the right document
- **D** — Abandonment when a safe path (controlled-source comparison) exists

---

### Q24 · D6 — Answer: A

The Case section says "appropriate" — meaning the workflow can run with minimal oversight. But the Consequence subsection, which the authors themselves wrote, describes clients making fleet-sizing decisions and lease-contract commitments based on the report's figures. That's material business impact from potential inaccuracy. When consequences include binding financial decisions based on the output, the classification should be "appropriate with review" — with a defined gate specifying what the fleet analyst checks and when. The gate currently exists ("reviews before distribution") but the classification understates why it's needed.

- **B** — Driver licence categories could be excluded (data minimisation), but this is a secondary hygiene concern, not a classification error that affects the governance posture
- **C** — Correctly identified as secondary; the disclosure gap is real but less dangerous than the classification error
- **D** — Write access for logging is a nice-to-have, not a governance risk

---

### Q25 · D5 — Answer: B

Separate Projects create hard structural boundaries. Each industry's knowledge files and standing instructions live in isolation — a healthcare Project cannot accidentally draw from a defence-sector knowledge file because that file isn't in the Project. Option 1 (prompt labels) puts the burden on every associate every time. Option 3 (Skills) carries regulatory context but Skills have no scope dial — invoking a healthcare Skill in a Project that also contains financial-services knowledge files doesn't prevent the model from drawing on the FS files. Projects are the structural fix.

- **A** — Prompt labels are the weakest form of separation; one forgotten label and the wrong terminology appears
- **C** — Skills carry instructions but don't create knowledge boundaries; the underlying Project's files are still accessible
- **D** — Adding Skills within separate Projects is over-engineering when the Projects alone create the boundary; Skills add value for templates and procedures, but the question asks for the structural fix to cross-contamination

---

*End of Part 2 · End of Day 2 Drill*
*25 questions · Focus: severity ranking, mapping errors, diagnostic timing*
*Generated: 2026-09-23*
