# DAY 3 — LONG CASE SPEED DRILL: 15 Questions · 20 Minutes

> **Instructions:**
> - Set a timer for **20 minutes** (80 seconds per question)
> - ALL 15 are long cases — paragraph format, no tables, no bullet lists in the case body
> - **Reading strategy:** Read the QUESTION STEM (last sentence) → read OPTIONS → THEN scan the case for what you need
> - No blanks — guess if you must, mark it "G"
> - Multi-select marked **〔Select 2〕**
>
> **Today's focus:** Severity ranking · Halo vs unstaffed gate · Discriminator question · Diagnostic timing
>
> **Domain distribution:** D6 ×5 | D4 ×5 | D2 ×3 | D7 ×1 | D1 ×1

---

## Q1 · D6

A pharmaceutical distributor's medical-affairs team has submitted a governance record for a Claude-assisted workflow that generates investigator briefing packs for clinical-trial sites. The record states the following: the workflow is classified as appropriate with review on the basis that the briefing packs are drafts reviewed by the medical director before distribution to investigators, with the deciding factor being reversibility — a draft can be corrected before it is sent. The data ingested includes anonymised patient cohort summaries, trial protocol versions, site-specific enrolment targets, and prescribing-physician contact details, classified at the yellow tier on the basis that no individual patient identifiers are present. The task requires physician contact details because each pack must be addressed to the named principal investigator at the site. The approved route is the company's enterprise workspace. The workflow uses a read-only connector to the clinical-trial management system and a built-in document-assembly skill. The briefing packs affect principal investigators, regulatory authorities, and ultimately enrolled patients. A disclosure assessment has not been conducted on the basis that the packs are internal working documents. A fairness assessment is not applicable as the packs are addressed to professional counterparties rather than consumers. The evidence of success is measured by the medical director's signature on each pack.

**Which section contains the most serious error?**

- **A.** The Case section — briefing packs distributed to principal investigators that govern how a clinical trial is conducted and ultimately affect enrolled patients are not internal working documents; a reversibility argument is inadequate when the consequence of error includes wrong protocol versions, incorrect enrolment targets, or miscommunicated cohort criteria reaching patients through investigator actions
- **B.** The Data section — prescribing-physician contact details should be removed because they are unnecessary for the briefing pack and their inclusion elevates the data sensitivity without serving the task
- **C.** The Capability section — a built-in document-assembly skill is inappropriate for regulated clinical-trial documentation and a purpose-built skill reviewed by the regulatory-affairs team should be used instead
- **D.** The People section — the absence of a disclosure assessment is the most serious gap because principal investigators have a professional right to know that AI was involved in compiling a briefing pack they will rely on for patient safety

D
---

## Q2 · D4

A consumer-electronics retailer has built a delegation map for its weekly promotional-offer approval workflow. The map as documented states: Step 1 is AI-owned and reversible, with a read-only connector to the pricing system ingesting current cost prices, competitor prices, and margin targets. Step 2 is AI-owned and reversible, verified at Step 4, using code execution to calculate proposed promotional prices while maintaining the minimum margin threshold. Step 3 is AI-owned and reversible, drafting a narrative summary listing the ten products with the largest proposed discounts and the estimated revenue impact of each. Step 4 is documented as collaborative, with the category manager reviewing the narrative summary and spot-checking three of the ten calculated prices against the pricing system before approving the promotional slate. Step 5 is AI-owned, publishing the approved promotional slate to the e-commerce platform and updating all ten products simultaneously via a write-enabled connector to the content-management system.

**Which step contains the most serious problem?**

- **A.** Step 3 is mapping the tool — estimating the revenue impact of promotional discounts requires commercial forecasting judgment that cannot be delegated to AI text production
- **B.** Step 4 has an unstaffed gate — checking only three of ten calculated prices means seven prices are approved without any verification before publication
- **C.** Step 5 — publishing ten simultaneous live price changes to a customer-facing e-commerce platform via a write-enabled connector is an irreversible action with immediate customer reach; a customer who purchases at a wrong price before the error is discovered creates a binding commercial obligation; this step must be triggered explicitly by a human after reviewing the final formatted slate
- **D.** Step 2 is wrong because promotional pricing calculations should always be performed in the company's dedicated pricing platform rather than by code execution in a general-purpose AI tool

C
---

## Q3 · D7

A building-materials manufacturer uses a Claude Project to generate weekly production-capacity reports for its three factory sites. The Project contains standing instructions specifying the report format, a knowledge file holding each site's rated capacity and current shift schedule, and a read-only connector to the production management system. For the first ten weeks of deployment, the reports were accurate and were used by the operations board to set weekly output targets. In week eleven, Site B's capacity figure in the report appeared as 18,400 units — significantly above its actual rated capacity of 14,200. No prompt, standing instruction, or connector configuration has been modified. The operations board incorporated the inflated figure into planning before the error was identified. The plant manager proposes upgrading from Sonnet to Opus on the grounds that a more capable model will process the production data more carefully.

**Which diagnostic step should come before the model change, and why?**

- **A.** Audit the knowledge file that holds each site's rated capacity to determine whether Site B's figure was recently revised — perhaps updated to a projected post-expansion capacity — which would explain why the model produced 18,400 accurately from a knowledge file that now contains the wrong number; this is the cheapest diagnostic step and directly matches the stale-configuration signature
- **B.** Revoke and reissue the connector's read credentials, since the inflated figure may indicate that the connector is reading from a different database table than intended
- **C.** Upgrade to Opus as proposed — a numerical discrepancy of this magnitude represents a reasoning error that a more capable model is less likely to reproduce
- **D.** Archive the current chat thread and start a new one, since eleven weeks of accumulated conversation may have caused context overload that is blending capacity data across different reporting periods

A
---

## Q4 · D2

A market-research agency produces monthly competitor-intelligence reports for a retail client. An analyst uses Claude to synthesise findings from twelve industry sources — trade publications, analyst briefings, and company announcements — uploaded as PDFs into a Project. The completed report contains forty-three attributed claims. The analyst selects eight claims at random, locates the cited source documents, confirms that each citation exists and that the source document is correctly identified, and submits the report to the client as verified. The client's strategy director subsequently flags three claims that cannot be located in the cited sources at all, and one further claim that cites its source accurately but characterises the source as stating the opposite of what the document actually says.

**Which statement best describes what the verification approach failed to catch?**

- **A.** Eight of forty-three is too small a sample; a client-facing intelligence report requires every attribution to be individually verified before submission
- **B.** The verification confirmed that citations existed and that source documents were correctly identified, but did not confirm that the characterisation of each source was faithful — a citation can be traceable and accurate while the paraphrase of its content inverts or materially distorts the source's meaning; the four errors all fall into this gap
- **C.** The analyst should have enabled extended thinking so the model processed each source document more carefully before generating the attributed claims
- **D.** The verification approach is statistically valid; eight randomly selected checks on a forty-three-item population meets the standard for this type of deliverable

B
---

## Q5 · D6

A logistics company's compliance team has documented a governance record for a workflow that uses Claude to assess whether incoming freight shipments should be flagged for enhanced due-diligence screening. The record describes the following: the task is classified as appropriate with review, with the deciding factor being that Claude produces a recommendation rather than a final determination, and a trained compliance analyst reviews every recommendation before any shipment is cleared or held. The data processed includes consignee names, declared commodity descriptions, country of origin, declared values, and the names of freight-forwarding agents, classified at the yellow tier. The compliance team confirmed that consignee names are required because the assessment must determine whether the consignee appears on an applicable watch list. The approved route is the company's enterprise workspace. The workflow uses a read-only connector to the shipment management system and a community-published sanctions-screening skill that a colleague sourced from the skills marketplace six weeks ago and installed without a team review; approximately four hundred shipments have been processed using the skill since installation. The compliance analyst reviews Claude's recommendation and approves or overrides it before any hold decision is communicated. Evidence of effectiveness is measured by the compliance analyst reviewing a random sample of twenty recommendations per month.

**Which section presents the greatest risk?**

- **A.** The Case section — sanctions screening produces recommendations that affect real consignees who may be unjustly delayed or held; this should be classified as inappropriate for AI involvement regardless of the human review step
- **B.** The Data section — the data tier is understated; consignee names, freight-forwarding agent identities, and commodity descriptions in a sanctions-screening context constitute commercially and regulatorily sensitive data that warrants a red classification
- **C.** The Capability section — a community-published sanctions-screening skill sourced from the marketplace, installed without review, and used on four hundred shipments represents an unaudited set of instructions running alongside a connector to shipment data; the company does not know what the skill instructs Claude to do, what access it exercises, or whether its logic is legally sound; skills have no scope dial and run with whatever access the session holds
- **D.** The Evidence section — twenty recommendations reviewed per month out of approximately four hundred processed represents a five-percent sample rate, which is insufficient for a workflow where a missed positive has direct regulatory consequences

C
---

## Q6 · D4

A wealth-management firm has built a delegation record for producing quarterly portfolio-review letters for eighty clients. The brief states: the outcome is a personalised letter for each client summarising the portfolio's performance over the previous quarter, comparing it against the agreed benchmark, noting significant position changes, and confirming the adviser's continued recommendation to hold the current allocation. The context section states that the firm holds each client's portfolio data, transaction history, benchmark targets, and investment-objectives documentation in the Project's knowledge files. The constraint states that the letter must comply with the FCA's rules on periodic suitability statements. The authority section states that Claude may draft the full letter including the suitability statement. The deliverable is a personalised PDF letter per client. The verification states that the senior adviser reads each letter before signing and sending.

**Which section does the compliance officer flag as the most serious gap?**

- **A.** The Constraint section — "comply with FCA rules on periodic suitability statements" identifies the applicable framework but does not specify which rules apply, what the required disclosures are, or how compliance will be confirmed in the letter before the adviser signs
- **B.** The Authority section — the suitability statement is a regulated professional judgment that the adviser must reach independently; allowing Claude to draft it means the adviser is reviewing and signing AI-generated regulated reasoning rather than forming and expressing their own professional view; this is mapping the tool regardless of whether the adviser reviews the output
- **C.** The Verification section — "the senior adviser reads each letter before signing" does not define which specific disclosures the adviser verifies, what they check against, or how they confirm the suitability recommendation reflects independent judgment rather than ratification of the AI's reasoning
- **D.** The Context section — holding eighty clients' portfolio data simultaneously in one Project creates a structural risk that one client's position data may appear in another client's letter

A
---

## Q7 · D6 · 〔Select 2〕

A regional credit union has submitted a governance record for a workflow that generates loan-eligibility assessments for personal-loan applications. The record states the following in paragraph form: the workflow is classified as appropriate with review because no decision is communicated to the applicant without a credit officer's approval, and the deciding factor is human oversight. The data processed includes the applicant's name, employment status, declared income, credit-score band, existing debt obligations, and the stated purpose of the loan, classified at the yellow tier on the basis that the data is internal and the applicant has consented to the credit assessment. The approved route is the credit union's enterprise workspace. The workflow uses a read-only connector to the credit management system. The gate is described as follows: a credit officer reviews the AI-generated assessment before any decision is communicated to the applicant. Evidence of success is measured by the credit manager reviewing a random sample of ten assessments per week.

**Which TWO sections contain the most serious problems?**

- **A.** The Case section — the gate description states that "a credit officer reviews" without naming which officer is responsible, what they specifically verify in the assessment, and whether their review constitutes an independent lending judgment or a check of the AI's reasoning; this is a vague gate, not a defined one
- **B.** The Data section — an applicant's declared income, existing debt obligations, credit-score band, and loan purpose constitute financial personal data; classifying them at yellow materially understates the sensitivity and may result in a route approved only for less sensitive data being used for this purpose
- **C.** The Capability section — a read-only connector does not allow the workflow to record the credit officer's decision back to the credit management system, which creates a gap in the audit trail
- **D.** The Evidence section — ten weekly samples is adequate for a small credit union processing a limited volume of applications
- **E.** The People section — applicants have not been informed that their eligibility assessment is AI-assisted, which may contravene consumer-credit disclosure regulations

B
---

## Q8 · D4 · 〔Select 2〕

A professional-services firm has built a delegation map for its monthly client-billing workflow. The map reads: Step 1 is AI-owned and reversible; a read-only connector to the time-recording system ingests all fee-earner time entries for the billing month. Step 2 is AI-owned and reversible, verified at Step 3; code execution applies each client's agreed fee rates to the time entries and calculates the gross invoice amount per client. Step 3 is collaborative; the billing manager reviews the invoice summary and spot-checks five entries against the time-recording system before approving. Step 4 is AI-owned and described as routine; the approved invoices are generated as PDFs and emailed to the respective clients using a write-enabled connector to the email system. Step 5 is AI-owned; the billing system is updated to reflect each invoice as raised, and the accounts-receivable ledger is posted via a write-enabled connector to the accounting system.

**Which TWO steps have the most serious problems?**

- **A.** Step 2 — applying fee rates to time entries is a financial judgment that should always be performed by the billing manager regardless of the method used
- **B.** Step 3 — spot-checking five entries from an entire month's time entries is insufficient verification before invoices are approved for client distribution
- **C.** Step 4 — emailing invoices to clients is an irreversible external action; once sent, the invoice is in the client's hands and constitutes a formal payment demand; a human must review the final formatted PDF and explicitly trigger the send, not delegate this to AI as routine post-approval distribution
- **D.** Step 5 — posting to the accounts-receivable ledger via a write-enabled connector updates the firm's financial records irreversibly after an AI-triggered email; this should require explicit human authorisation rather than running automatically as an AI-owned step following Step 4

C
---

## Q9 · D2

A management consultancy produces a due-diligence report for a private-equity client evaluating an acquisition target. The analyst uses Claude to synthesise findings from forty-seven source documents — financial statements, customer contracts, regulatory filings, and management presentations — uploaded across several Project chats. The report's revenue-concentration section states that the target's three largest customers account for sixty-eight percent of revenue, attributed to the target's most recent annual report. The private-equity partner queries this figure: their own reading of the annual report shows the correct figure as fifty-two percent of revenue, attributed to the top five customers, not three. The analyst defends the figure by noting that Claude cited the annual report and the analysis was produced with extended thinking enabled, adding additional confidence to the output.

**Which statement best describes the error in the analyst's reasoning?**

- **A.** Extended thinking improves the quality of reasoning applied to information the model holds in context; it does not verify whether a figure generated in prose matches the source document — a number produced with extended thinking is still a generated output that requires independent verification against the primary source
- **B.** The annual-report citation confirms that the correct source was used; the discrepancy likely reflects different versions of the document, and the partner should confirm which version is current before challenging the figure
- **C.** The top-three concentration figure is an analytically valid alternative presentation of concentration risk and does not need to align with the annual report's own presentation
- **D.** The analyst should regenerate the report on Opus, which will process the financial statements more precisely and produce a figure consistent with the annual report

A
---

## Q10 · D6 · 〔Select 2〕

A retail bank's operations team has submitted a governance record for a workflow that uses Claude to generate anti-money-laundering transaction-monitoring alerts for review by the financial-crime team. The record states: the task is classified as appropriate, with the deciding factor being that Claude assists the monitoring process by surfacing transactions matching risk patterns and reducing the volume requiring manual review. The data includes transaction amounts, account numbers, counterparty names and account numbers, transaction descriptions, and customer risk ratings, classified at the yellow tier. The gate states that the financial-crime analyst reviews alerts before any report is filed. The workflow uses a read-only connector to the core banking system and a built-in pattern-matching skill. The people section notes that the workflow affects customers whose transactions are flagged, and states that no disclosure is required as transaction monitoring is a legally mandated internal process. No fairness assessment has been conducted on the basis that the screening criteria are uniformly applied.

**Which TWO sections contain the most serious errors?**

- **A.** The Case section — transaction-monitoring alerts are used to initiate regulatory investigations and may result in suspicious-activity reports being filed with authorities; classifying this workflow as "appropriate" rather than "appropriate with review" understates the consequence of error and undermines the governance posture for a legally mandated process with regulatory and customer impact
- **B.** The Data section — account numbers, counterparty account numbers, and customer risk ratings constitute red-tier financial personal data; classifying them at yellow materially understates the sensitivity, which may mean the approved route is inadequate for the actual data being processed
- **C.** The Capability section — a built-in pattern-matching skill is insufficiently sophisticated for AML work; a custom risk-model integration is required for regulatory-grade screening
- **D.** The People section — the absence of a fairness assessment is acceptable because the screening criteria are uniform and the workflow is legally required
- **E.** The Gate section — "the financial-crime analyst reviews alerts" does not name the analyst's role, define what they verify in each alert, or specify the point at which their review constitutes an authorisation to file; for a regulatory process this gate is vague, not defined

A and B
---

## Q11 · D4

A facilities-management company has built a delegation map for its monthly contractor-invoice reconciliation. The map reads as follows: Step 1 is AI-owned; a read-only connector to the contractor-management system ingests all invoices submitted during the month alongside the corresponding purchase orders. Step 2 is AI-owned; a custom reconciliation skill developed and tested by the finance team on three months of historical invoices matches each invoice to its purchase order. Step 3 is AI-owned; for invoices that match within a two-percent tolerance, the approved payment amount is calculated using code execution. Step 4 is AI-owned; invoices that do not match or exceed the tolerance are routed to the exceptions queue for human review by the accounts-payable supervisor. Step 5 is AI-owned; approved payment amounts are posted to the accounting system via a write-enabled connector, and the payments are batched into the next automated payment run without further human review or authorisation.

**Which step has the most serious problem?**

- **A.** Step 2 — a custom skill tested on only three months of historical invoices is insufficiently validated; production reconciliation requires a larger test dataset before the skill can be trusted with live invoices
- **B.** Step 3 — a two-percent tolerance is too wide for a financial control; invoice-to-PO matching should require exact agreement to prevent systematic overpayment
- **C.** Step 5 — posting approved payment amounts to the accounting system and batching them into an automated payment run without any human authorisation is an irreversible financial action; no human reviewed, triggered, or approved the payments — money will leave the company based solely on an AI-owned sequence with no human at the point of no return
- **D.** Step 4 — routing exceptions to a human queue is correct in principle but the queue has no defined resolution timeline, leaving flagged invoices without an SLA for the accounts-payable supervisor

C
---

## Q12 · D2

A legal-technology company provides AI-assisted contract-review services to law firms. An associate uses Claude to review a 220-page master-services agreement for a corporate client, uploading the contract in six separate sections across distinct chats in the same Project. Claude produces a gap analysis identifying twenty-nine clauses that deviate from the client's standard terms. The associate selects ten of the twenty-nine flagged clauses, locates the relevant passages in the contract, confirms that each clause exists as described, and submits the gap analysis to the client as a complete and verified review. The supervising partner queries the approach on receiving a client question about a cross-referencing obligation that the gap analysis does not mention.

**Which concern is most serious?**

- **A.** Ten out of twenty-nine is too small a verification sample for a legal deliverable; the associate should have confirmed every flagged clause before submission
- **B.** Uploading the contract in six sections means that clauses which cross-reference terms defined in a different section, or whose meaning depends on content uploaded in a separate chat, may have been assessed in isolation; a clause analysed without access to the definition it references may be incorrectly characterised, and the gap analysis may have missed obligations that only become visible when the contract is read as a whole
- **C.** Information from one section's chat may have contaminated another section's analysis through the Project's shared context, producing inconsistent characterisations across the gap analysis
- **D.** The associate should have uploaded the full 220 pages in a single chat on Opus with extended thinking, which would have processed the cross-referencing obligations correctly

B
---

## Q13 · D1

A commercial-property management firm uses Claude to draft annual service-charge reconciliation statements for tenants. Each statement summarises actual expenditure across twelve cost categories, compares it against the estimated service charge collected during the year, and calculates the balancing payment owed to or by each tenant. A property manager pastes the year-end expenditure spreadsheet for the building and asks Claude to "produce the reconciliation statement for Unit 4B." The returned statement is professionally formatted and contains specific figures for each cost category. On review, the property manager notices that the cleaning-services line shows £9,200 — the full building cost — whereas Unit 4B's lease specifies that its tenant is liable for only fifty percent of the building's cleaning costs. No allocation rule was mentioned in the request.

**Which change to the request most directly prevents this type of error?**

- **A.** Switch to Opus with extended thinking so the model reasons through the lease terms before computing each line item
- **B.** Upload the Unit 4B lease alongside the expenditure spreadsheet and instruct Claude to apply each cost category's allocation rule as defined in that lease when calculating the tenant's share; without the lease in the context, the model has no basis for anything other than full-building cost attribution
- **C.** Ask Claude to produce the statement and then append a list of every allocation assumption it made, so the property manager can review the assumptions before finalising
- **D.** Split the task: first ask Claude to extract all cost-allocation rules from the lease, check the extraction, then in a second prompt use the verified rules to produce the statement

---

## Q14 · D4

A wholesale nursery has built a delegation map for its weekly purchase-order workflow. The map states: Step 1 is AI-owned; a read-only connector to the inventory system ingests current stock levels and reorder thresholds. Step 2 is AI-owned, verified at Step 3; code execution calculates required order quantities based on stock levels, seasonal demand forecasts in the Project's knowledge files, and supplier minimum-order quantities. Step 3 is documented as collaborative; the grower-relations manager receives the calculated purchase orders, reviews the summary, and approves. Step 4 is AI-owned; the approved purchase orders are transmitted to suppliers via a write-enabled connector to the procurement system. The delegation map was reviewed and signed off by the operations director eight weeks ago. The grower-relations manager has been approving every purchase order within thirty seconds of receiving it for the past four weeks, without opening the stock-level report or checking any calculated quantity against the inventory data, on the grounds that the orders have been consistently accurate.

**The operations director asks what mapping error is present in the current workflow.**

- **A.** Step 2 has an unstaffed gate because the map does not specify what tolerance the verification at Step 3 should apply or how many line items the grower-relations manager must check before approving
- **B.** Step 3 exhibits halo delegation — the grower-relations manager has stopped performing the defined checks because four weeks of accurate results have led them to treat the AI's output as effectively reliable; the gate still exists on paper but is functionally empty because past performance has replaced active oversight
- **C.** Step 4 is mapping the tool — transmitting purchase orders to suppliers requires a commercial judgment about supplier relationships that cannot be delegated to an automated connector
- **D.** Step 1 has an unstaffed gate because the read-only connector has no human review of the data it ingests before the data is used in Step 2's calculations

---

## Q15 · D6

A retail bank's mortgage-operations team has built a governance record for a workflow that uses Claude to draft mortgage-offer letters for applicants whose applications have been approved by the underwriting team. The record states: the workflow is classified as appropriate, with the deciding factor being that the letters are templated communications requiring no credit judgment — the underwriting decision has already been made. The data processed includes the applicant's name, property address, approved loan amount, interest rate, loan term, monthly repayment amount, and the name of the assigned relationship manager. The data tier is yellow, on the basis that mortgage data is internal business data. The task requires all named fields because the letter must address the applicant and specify their loan terms. The approved route is the bank's enterprise workspace. The workflow uses a read-only connector to the mortgage origination system. The gate states that a mortgage administrator checks the letter before sending. The evidence section states that the mortgage operations manager reviews a sample of five letters per week.

**Which section contains the most serious error?**

- **A.** The Data section — an applicant's approved loan amount, interest rate, monthly repayment, and property address constitute financial personal data and should be classified as red tier, not yellow; a yellow-tier route may be inadequate for this data classification
- **B.** The Case section — a mortgage-offer letter is a legally binding contractual document; an error in the loan amount, interest rate, or repayment figure is not correctable after the applicant receives and acts on it; classifying this as "appropriate" with minimal oversight understates the consequence and the gate, as defined, does not specify what the mortgage administrator actually checks
- **C.** The Capability section — a read-only connector is insufficient because the workflow needs to update the mortgage origination system to record that the letter was generated
- **D.** The Evidence section — five letters reviewed per week is an adequate sample rate for a routine templated workflow and does not require strengthening

---

---

# ANSWER KEY

> **Review ONLY after the full 20 minutes.**

---

### Q1 · D6 — Answer: A

The Case section misclassifies the consequence of error. The record claims the packs are "internal working documents" — they are not. Investigator briefing packs govern how a clinical trial is conducted at the site level. A wrong protocol version, incorrect enrolment target, or miscommunicated cohort criterion reaches enrolled patients through investigator actions. Reversibility is an inadequate deciding factor when the downstream consequence is patient safety. The entire governance posture flows from the Case classification — getting it wrong here invalidates the rest of the record.

- **B** — Physician contact details are explicitly confirmed as needed (the pack must be addressed to the named investigator). The discriminator question says YES — can't remove them.
- **C** — Built-in document-assembly skills are appropriate for formatting; no capability gap is identified in the record.
- **D** — Disclosure is a real concern but is secondary to the patient-safety consequence of a misclassified case.

---

### Q2 · D4 — Answer: C

Step 5 publishes ten simultaneous live price changes to a customer-facing e-commerce platform via a write-enabled connector. This is irreversible: a customer who purchases at a wrong promotional price before the error is caught creates a binding obligation. The "approved at Step 4" annotation covers content approval — it does not constitute authorisation for the live publish action itself. A human must explicitly trigger the publish after reviewing the final formatted slate.

- **A** — Step 3 estimates revenue impact based on code-calculated promotional prices and margin data. Drafting a narrative summary of the estimated impact is text production, not commercial forecasting judgment.
- **B** — Step 4 checking three of ten IS a real gap (more should be checked), but it's secondary to the irreversible publication problem in Step 5.
- **D** — Code execution is the correct method for pricing calculations; the step is properly designed.

---

### Q3 · D7 — Answer: A

"Worked for ten weeks, then broke, nothing in the prompt or config changed" = stale configuration signature. The cheapest diagnostic step is checking the knowledge file — specifically whether Site B's capacity figure was recently updated (e.g., to a planned post-expansion figure) without the team realising the change affected live reports. If the file now says 18,400, the model read it correctly. A model upgrade addresses nothing if the input data is wrong.

- **B** — The connector is read-only by design; changing access permissions is not the diagnostic step.
- **C** — Upgrading the model is step 3 of the diagnostic sequence; stale configuration is step 4 and fits the timing better.
- **D** — Context overload degrades output within a long session; this error appeared in a specific figure across what were likely separate weekly sessions.

---

### Q4 · D2 — Answer: B

The verification confirmed citations were traceable — source documents were correctly identified. But it did not confirm that the characterisation of each source was faithful. One claim cited the source accurately but described it as saying the opposite of what it actually said. Three claims cited sources that don't contain the claimed information at all. Both failure modes — inversion and fabrication — are invisible to a verification that only checks whether citations exist. The Identify → Trace → Challenge framework requires reading the cited passage and asking: "Does the source actually say what the report claims?"

- **A** — Sample size is a real concern but secondary; even full coverage using the same check (citation exists?) would have missed the inversion error.
- **C** — Extended thinking improves reasoning depth but does not prevent citation fabrication or characterisation inversion.
- **D** — Statistical validity is irrelevant here; the question is whether the verification method caught what actually went wrong. It didn't.

---

### Q5 · D6 — Answer: C

A community-published skill installed without team review running on four hundred live shipments alongside a connector to shipment data is the most serious gap. Skills have no scope dial — the skill runs with whatever access the session holds. The company does not know what the skill instructs Claude to do, whether its sanctions logic is legally sound, or what actions it exercises. Four hundred shipments have been processed under these conditions. An unreviewed external capability in a sanctions-screening context creates regulatory and legal exposure that outweighs the other gaps.

- **A** — "Appropriate with review" can be correct for sanctions recommendations when the gate is properly defined; the classification itself isn't the problem.
- **B** — The data tier concern is real but secondary to having an unreviewed skill with potential reach across the shipment data.
- **D** — Five percent is low, but a functioning review process with a low sample rate is recoverable; an unreviewed capability running live is not.

---

### Q6 · D4 — Answer: B

The Authority section allows Claude to draft the suitability statement — the regulated professional judgment that the adviser must own. An adviser reviewing and signing AI-generated suitability reasoning is ratifying text, not forming and expressing an independent professional view. This is mapping the tool: the step requires a regulated professional judgment, but the map assigns it to a model that produces text. The FCA's suitability rules require the adviser to form the view — not review someone else's (or something else's) view and sign it.

- **A** — Vague constraints are a real concern but secondary; the Authority section creates the more fundamental regulatory problem.
- **C** — The verification gap is real but flows from the Authority problem; if the adviser is supposed to reach independent judgment, the verification should confirm that — but the root cause is what the Authority section permits.
- **D** — Eighty clients' data in one Project is a configuration concern but not the most serious gap here.

---

### Q7 · D6 — Answer: A, B

**A (Case/Gate):** The gate says "a credit officer reviews" — no specific officer named (WHO), no definition of what they assess (WHAT), no confirmation that their review constitutes an independent lending judgment rather than a check of the AI's output (the accountability question). This is a vague gate, not a defined one.

**B (Data):** An applicant's declared income, existing debt obligations, credit-score band, and loan purpose are financial personal data. Yellow tier is for internal business data without personal identifiers — this data is specifically about an identified individual's financial position and creditworthiness. Red tier is correct, and a yellow-tier approved route may be inadequate.

- **C** — Read-only is appropriate for ingesting application data; write access for recording decisions is a process design question, not a governance gap in this record.
- **D** — Ten weekly samples for a small credit union may be sufficient, depending on volume; this is not the most serious concern.
- **E** — Disclosure is a real concern but secondary to the gate definition and data classification errors.

---

### Q8 · D4 — Answer: C, D

**C (Step 4):** Emailing invoices to clients is irreversible and external. Once the email is sent, the client has received a formal payment demand. A wrong amount, wrong client, or wrong attachment is in the client's hands. A human must review the final formatted PDF and explicitly trigger the send.

**D (Step 5):** Posting to the accounts-receivable ledger updates the firm's financial records — this is an irreversible write to the firm's accounting system, triggered automatically after an AI-sent email. No human authorised the financial record. Two consecutive irreversible AI-owned steps (send invoice → post to ledger) with no human between them is the compounded risk.

- **A** — Applying fee rates to time entries is mechanical and well-suited to code execution; the step is correctly designed with a human gate at Step 3.
- **B** — Five spot-checks is low, but this is a secondary concern relative to the two irreversible AI-owned steps.

---

### Q9 · D2 — Answer: A

Extended thinking improves the model's reasoning process — how it works through multi-step problems. It does not verify whether a figure generated in prose matches the source document. The model can apply careful reasoning to produce a confidently wrong number. Verification requires independently opening the annual report and reading the relevant passage — it cannot be replaced by enabling a reasoning mode or citing a source.

- **B** — Treating the citation as proof of accuracy is the error the question is testing; citations confirm the source was identified, not that the characterisation is correct.
- **C** — "Analytically valid alternative presentation" is a rationalisation for not checking the source; the partner found the specific error in the specific document.
- **D** — Regenerating on Opus produces a new draft that may or may not reproduce the error; it does not verify the existing figure.

---

### Q10 · D6 — Answer: A, B

**A (Case):** AML transaction-monitoring alerts trigger regulatory investigations and may result in suspicious-activity reports filed with authorities — filings with serious consequences for the affected customers and the bank's regulatory standing. "Appropriate" understates this. The governance posture for a legally mandated process with regulatory consequence should be "appropriate with review" at minimum, with a properly defined gate.

**B (Data):** Account numbers, counterparty account numbers, and customer risk ratings are financial personal data — the most sensitive category. Yellow tier is materially incorrect. A route approved for yellow-tier data may not be approved for red-tier financial personal data, meaning the workflow may be running on an inadequately approved route.

- **C** — Built-in skills are appropriate starting points; the question does not establish a capability problem.
- **D** — Uniform application does not eliminate the need for a fairness assessment; uniformly applied criteria can still systematically disadvantage a group.
- **E** — The gate description is vague ("the financial-crime analyst reviews alerts"), but A and B are the more serious structural errors.

---

### Q11 · D4 — Answer: C

Step 5 posts approved payment amounts to the accounting system and batches them into the next automated payment run. Money leaves the company based on an AI-owned chain with no human at the point of no return. The exceptions queue in Step 4 only catches mismatched invoices — invoices that matched within tolerance flow directly from Step 3 to Step 5 without any human authorisation. This is an irreversible financial action (payments cannot be recalled once batched) with no human gate before execution.

- **A** — Three months of historical testing is a reasonable starting point; production monitoring can identify skill failures and the step has a human exception-review path.
- **B** — Two percent tolerance is a design decision; the question is about the most serious problem, and the missing human gate at Step 5 is it.
- **D** — A missing SLA on the exceptions queue is a process quality issue, not a mapping error or a governance failure of the same severity.

---

### Q12 · D2 — Answer: B

The contract was uploaded in six separate sections. Clauses that cross-reference terms defined in a different section — or whose meaning depends on content that was in a different chat — were assessed in isolation. Claude analysed each section only against what was in that section's chat. A clause in Section 3 that reads "subject to the exclusions in Clause 14" cannot be correctly characterised without Clause 14's content — which may have been in Section 5's chat. The supervising partner's query about a cross-referencing obligation that the gap analysis missed is exactly this failure.

- **A** — Ten of twenty-nine is a sample-size concern, but even full coverage of the flagged clauses would not have caught unflagged cross-referencing obligations that were missed because of section isolation.
- **C** — Cross-contamination between section chats (one section's content appearing in another's analysis) is theoretically possible but is a different mechanism from the isolation problem; the question describes a missing obligation, not a contaminated one.
- **D** — A single-upload approach would help with cross-referencing, but the question asks for the most serious concern with the current approach; B identifies the mechanism of the actual error.

---

### Q13 · D1 — Answer: B

The lease allocation rule was never in the request. The model had the expenditure spreadsheet and no lease — so it attributed the full building cost to the unit, which is the most plausible thing a reconciliation statement would contain when no allocation rule is provided. The fix is to put the allocation rule in the context: upload the lease and instruct Claude to apply each cost category's allocation as defined in that specific lease.

- **A** — Extended thinking cannot infer allocation rules that are not in the context; this is a missing-information problem, not a reasoning-depth problem.
- **C** — Listing assumptions after the fact creates a verification burden without fixing the root cause; the manager would have to know the correct allocation rules to check the assumptions, in which case they could just provide them upfront.
- **D** — Splitting the task into two prompts adds steps without addressing the core issue; the lease needs to be in the context at the point of calculation, not extracted separately.

---

### Q14 · D4 — Answer: B

The gate at Step 3 IS properly defined — the grower-relations manager is named as the reviewer, the check is described (review the summary, approve the orders), and the timing is before Step 4's transmission. But the manager has stopped performing those checks because four weeks of accurate results have eroded active oversight. This is halo delegation: past accuracy on routine purchase orders has given the AI effective full ownership, because the human gate has become a rubber stamp. The gate exists on paper; the WHO is still named; but the person has stopped doing the work because "it's been right."

- **A** — Step 2's verification reference at Step 3 could be more specific about what tolerance triggers rejection, but the gate exists and is staffed (or was); the problem is the manager's behaviour, not the gate's definition. Unstaffed gate = gate never defined. This gate WAS defined.
- **C** — Transmitting approved purchase orders to suppliers via a connector is a mechanical step that follows explicit human approval; it is not a commercial judgment.
- **D** — The read-only connector ingesting stock data has no gate requirement; ingestion is reversible and low-stakes.

---

### Q15 · D6 — Answer: A

A mortgage-offer letter specifies the loan amount, interest rate, monthly repayment, and loan term. An applicant who receives this letter acts on it: they instruct solicitors, exchange contracts, and make financial commitments based on those figures. An error in any figure — wrong rate, wrong amount — is not an internal working document that can be quietly corrected. It is a contractual commitment. The data being processed (loan amount, interest rate, repayment figure, property address) is financial personal data — red tier, not yellow. A yellow-tier approved route may be inadequate for the data actually being processed, and the Case classification as "appropriate" with minimal oversight understates the consequence of error in a legally binding document.

- **B** — The Case classification IS a serious problem (mortgage-offer letters should be "appropriate with review"), but A identifies the compounding error: the data tier is also wrong, meaning the route may be inadequate AND the classification understates the risk.
- **C** — Write access for recording letter generation is a process quality improvement, not a governance gap in this record.
- **D** — Five letters per week may or may not be adequate depending on volume; A is the more serious structural error.

---

*15 questions · End of Day 3 Speed Drill*
*Target: 15/15 attempted in 20 minutes · Review timing after each section*
*Generated: 2026-09-24*