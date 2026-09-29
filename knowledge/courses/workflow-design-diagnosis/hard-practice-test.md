---
type: Document
title: "Workflow Design & Diagnosis: Hard Practice Test"
description: "Hard-difficulty practice test with complex multi-step workflow scenarios and diagnosis challenges."
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
order: 89
---

## All 18 Concepts | Scenario-Based | Exam-Ready

---

> [!warning] EXAM RULES — Read Before Starting
> - **Total: 30 questions | 60 minutes**
> - **Hard limit: 90 seconds per MCQ | 2 minutes per multi-select | 4 minutes per long case**
> - **No going back.** Answer before moving to the next question.
> - **Never skip blank.** Even a forced guess beats a zero.
> - **Core sentence:** *"The output is not the verdict. Judge the step by what it costs and who answers for it, and judge a failure by when it started."*

---

> [!tip] Time Targets by Section
> - Q1–Q15 (Part 1): **28 minutes**
> - Q16–Q30 (Part 2): **32 minutes**

---

## PART 1 — Questions 1–15

---

> [!question] Q1 — C1: Step vs. Session
> ⏱ **90 seconds**
>
> A procurement team at a shipping company has been "using AI" for six months to help draft supplier evaluation reports. Each analyst does it their own way — some start from scratch, some load a template, some use AI only for the narrative section. Output quality varies significantly. A consultant brought in to redesign the process asks: *"Is this a workflow yet?"*
>
> What is the most accurate answer?
>
> **A)** Yes — the team has been using AI consistently for six months, which establishes it as a workflow
>
> **B)** No — a workflow requires named steps with named owners and reasons stated in advance; what the team has is a collection of personal habits that vary by person and by session
>
> **C)** It depends on whether the team is using the same AI tool across all analysts
>
> **D)** Yes — any recurring business task that involves AI qualifies as a workflow

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course draws this line precisely: *"'I use AI' and 'our workflow uses AI' are different things."* A workflow is *"a repeatable process a team runs, where AI performs named steps every time, the same way, whoever is at the keyboard."* This team has the opposite — it varies by person, by mood, by section choice. No step has a named owner. No reason for any step has been stated in advance. Duration of use is irrelevant to this distinction.
>
> **Why A is wrong:** Six months of usage doesn't make something a workflow. The course is explicit — only the second version *"grows in value"* and *"can be wrong in a way that keeps being wrong."* Personal habits, however consistent in calendar time, remain personal habits.
>
> **Why C is wrong:** Using the same AI tool is an implementation detail. The workflow/habit distinction rests on named steps, fixed owners, and stated reasons — not on tool consistency.
>
> **Why D is wrong:** "Recurring" + "AI" is not the definition. The course contrasts this directly: the first team has recurring AI use; only the team with named steps and fixed owners has an actual workflow.

---

> [!question] Q2 — C2: Requirements — The AI Fills the Gaps
> ⏱ **90 seconds**
>
> A project manager at a legal firm receives this client email: *"We need contract summary reports delivered in a timely manner, formatted appropriately for senior review."* She passes this directly to an AI with the instruction: *"Turn this into a task definition with the five required elements."* The AI returns: *"Reports should be delivered within 24 hours of contract finalization, formatted as a one-page executive brief with three sections: key terms, risk flags, and recommended actions."* She is satisfied and begins building the workflow.
>
> What critical error has occurred?
>
> **A)** The AI used the wrong retrieval mode — this required web search to find industry-standard report formats
>
> **B)** The AI filled the blank slots with likely-looking defaults — "timely" and "appropriate" were never defined by the client, and the answers now look settled when they are not
>
> **C)** The task definition is missing a cost estimate and staffing plan, which are required before workflow design can begin
>
> **D)** The 24-hour turnaround is too aggressive for legal contract review and should have been challenged

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course is explicit: *"Asked to define a task, a model will define one, and the slots you never specified close at likely-looking defaults."* The correct prompt instruction is: *"Where I have not told you, say so instead of filling it in."* "Timely" has now become "24 hours" — a decision the client never made. "Appropriate for senior review" has become a specific three-section structure — also never specified. Both look decided in the output but are AI-generated guesses. An ambiguous requirement does not look ambiguous, and that is exactly what makes this dangerous.
>
> **Why A is wrong:** Retrieval mode is irrelevant here. This is a reasoning/structuring task, not a lookup. The failure is in how the task definition was generated.
>
> **Why C is wrong:** The five elements of a task definition are: what is produced, for whom, how often, from what data, and in what format. Cost estimates and staffing are not among them — those come later.
>
> **Why D is wrong:** Whether 24 hours is reasonable is beside the point. The problem is not the specific number — it's that the number was never the client's decision to make, and now it appears to be settled.

---

> [!question] Q3 — C2: Task Definition (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> A sales operations manager is asked to redesign the weekly pipeline report her team produces for the Monday leadership call. The original request from the VP of Sales: *"We need better visibility into the pipeline — something more useful than what we have."* Before designing anything, she decides to build a proper task definition.
>
> Which **TWO** of the following questions must be answered before the task definition is complete?
>
> **A)** Which AI model tier should generate the pipeline summary text?
>
> **B)** What exactly is produced — a formatted table, a narrative summary, a visual dashboard — and in what format does it arrive?
>
> **C)** What data does it draw on — which CRM fields, which deal stages, which time range, which filters?
>
> **D)** Whether the report should be disclosed as AI-generated to the leadership team
>
> **E)** Which Skill will carry the reporting procedure once it is built

> [!success]- Reveal Answer
> **Correct: B and C**
>
> **Why B is correct:** The task definition requires five settled answers: what is produced, for whom, how often, from what data, and in what format. B covers "what is produced" and "in what format" — both unanswered in the VP's request. Without this, the design can produce anything from a two-line bullet list to a 20-slide deck.
>
> **Why C is correct:** "From what data" is one of the five required answers. Which CRM fields are included, which time period, which deal stages — all of these are unsettled in "better visibility." Different assumptions produce completely different outputs and different workflows.
>
> **Why A is wrong:** Model tier selection is an implementation decision — it comes after the step is classified and after eligibility and ownership are settled. Task definition comes first, implementation comes last.
>
> **Why D is wrong:** Disclosure belongs in governance and communication (Concept 18), not in task definition. The five elements are operational requirements, not policy questions.
>
> **Why E is wrong:** Which Skill carries it is the third layer of the delegation framework (implementation), decided last and only for steps that passed eligibility and ownership. It cannot be answered before the task is even defined.

---

> [!question] Q4 — C3: Computed Not Generated
> ⏱ **90 seconds**
>
> A financial analyst at a logistics firm is building a staffing model. She sends this prompt: *"Based on our average monthly shipment growth of 12% over the last year, estimate how many additional drivers we will need next quarter if we want to maintain our current driver-to-shipment ratio of 1:450. Show the calculation."* The AI returns a confident paragraph: *"Based on 12% growth, you will need approximately 14 additional drivers next quarter to maintain your target ratio."* There is no code block. She pastes this number into the quarterly headcount request.
>
> What is the most important problem with this step as designed?
>
> **A)** She provided too much information — giving the AI the 12% figure and the ratio makes the answer less analytical
>
> **B)** The figure was generated in prose rather than computed — it looks like a calculation but there is nothing traceable behind it, and a written figure and a calculated one look identical on the page
>
> **C)** The model she used was a speed tier, which cannot handle compounding growth calculations reliably
>
> **D)** The prompt did not ask for extended thinking, so the arithmetic may be too shallow for a headcount decision

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course rule is unambiguous: *"If a result matters, compute it. Never write it."* The correct approach uses code execution — the assistant writes and runs a small program on the actual data, then reports what it computed. A staffing number going into a headcount request "matters." The absence of a code block is the signal that this was written, not run. The course: *"A written figure and a calculated one look the same."* The correct prompt separates computation from recommendation: compute the numbers first, then recommend based on those figures, and show the assumptions so someone can disagree without redoing the arithmetic.
>
> **Why A is wrong:** Providing the growth rate and ratio is exactly right — those are the inputs the calculation needs. More context is better, not worse.
>
> **Why C is wrong:** Speed-tier models can still use code execution. And the diagnostic signal for wrong tier is a specific repeatable error type — not a figure that looks plausible. This is a generation-not-computation problem.
>
> **Why D is wrong:** Extended thinking improves reasoning depth on complex multi-input problems. It does not trigger code execution. The AI can "think hard" about arithmetic and still produce a written estimate with no computation behind it.

---

> [!question] Q5 — C3: Description Problem vs. Feature Problem
> ⏱ **90 seconds**
>
> A team is in the second cycle of a build loop for an internal budget dashboard. In Cycle 1 they built five charts from their data — all correct. In Cycle 2 they added a date-range filter and a totals row at the bottom. The filter works correctly. One analyst notices that after filtering to Q3, two of the five totals still show full-year figures. She points it out. A colleague responds: *"The prompt wasn't clear enough about how the totals should work with the filter — just describe it better in the next message."*
>
> Is the colleague right?
>
> **A)** Yes — the totals failed because the filter interaction was under-specified, and a clearer description will fix it
>
> **B)** No — the totals were written as static values rather than computed via code execution. No amount of describing how the filter should interact with them changes the fact that they are not linked to the data
>
> **C)** No — this is a context overload problem; the totals from Cycle 1 are being ignored because earlier instructions were dropped
>
> **D)** Yes — the colleague is right, but the fix should go in a standing instruction rather than the prompt

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course uses this exact scenario as the worked example of the build loop's critical distinction: *"The totals were written rather than computed, and a written number looks as right as a calculated one."* This is a **feature problem**, not a description problem. *"Cycle 2 was a feature problem, and no amount of describing would have solved it."* The fix is to move the totals row into code execution so they are computed from the filtered data, not written as prose values.
>
> **Why A is wrong:** This is the colleague's error — treating a feature problem as a description problem. Describing the filter interaction more clearly still produces a static written number that the filter cannot move.
>
> **Why C is wrong:** Context overload shows as general degradation across a session — instructions losing force, formats drifting, constraints being forgotten. It does not produce specific cells remaining static while others update correctly. The pattern here is one repeatable wrong behavior, which is the signal for wrong feature (Concept 11).
>
> **Why D is wrong:** Standing instructions are for rules that persist across every run. The totals problem requires code execution, not a behavioral rule. And even if described in a standing instruction, static totals don't become computed values.

---

> [!question] Q6 — C4: Window Test — Eligibility vs. Ownership
> ⏱ **90 seconds**
>
> A legal operations manager is designing a workflow for responding to contract amendment requests from clients. One proposed step is: *"Recommend whether to accept, negotiate, or reject the proposed amendment."* She considers delegating it to AI. She can supply: the original contract, the proposed amendment, the company's standard playbook for acceptable terms, and a risk scoring rubric. She cannot supply: the current state of the client relationship (discussed privately between the account manager and the relationship partner), or whether the firm is in active renewal negotiations with this client.
>
> What should she conclude from the window test?
>
> **A)** The step passes the window test because all the formal documents and the playbook can be supplied
>
> **B)** The step fails the window test — the relationship context and renewal status cannot be supplied, and the AI will fill those gaps with what such a recommendation usually looks like, with no indication it did so
>
> **C)** The step passes the window test because relationship context is "soft information" that AI is specifically trained to handle without explicit input
>
> **D)** The step passes the window test, but must be classified as human-retained because the stakes are high

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The window test is: *"Could I put everything this step needs into the window? If not, the step is mine."* The relationship state and renewal negotiations live between two people in private conversations — they cannot be put in a prompt. The course: *"A model with missing inputs does not stop. It fills the gap with what such a decision usually looks like, at the same confidence as the part it really computed."* This is the exact hiring-freeze failure — the recommendation will look analytically derived but will rest on a guessed input.
>
> **Why A is wrong:** Supplying some inputs is not sufficient. The window test fails on the missing inputs, not on the present ones. The presence of the contract and playbook is necessary but not enough.
>
> **Why C is wrong:** "Soft information" is not a category the course uses. Missing inputs are missing inputs. The hiring-freeze example was also soft contextual information — announced in a meeting, not in a dataset — and it caused the exact failure this test is designed to prevent.
>
> **Why D is the critical trap:** This confuses two separate decisions. The window test decides *eligibility* — can everything this step needs be supplied? It must be answered before ownership. The step fails eligibility here, so you never reach the three criteria. You cannot classify a step that failed the window test as "human-retained because of stakes" — the correct conclusion is simply: *this step is mine*, full stop, because the window test failed.

---

> [!question] Q7 — C4: Window Test (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> A hospital administrator is redesigning a five-step workflow for processing patient insurance appeals. For each step, she must determine whether it passes or fails the window test. Which **TWO** steps **FAIL** the window test?
>
> **A)** *"Extract the denial reason codes from the insurance denial letter and cross-reference them against the hospital's billing code database"* — the denial letter and the billing code database can both be uploaded
>
> **B)** *"Draft a formal appeal letter using the patient treatment records, the denial reason, and the hospital's standard appeal template"* — all three documents can be attached to the prompt
>
> **C)** *"Recommend whether to escalate a denied appeal to external legal review, given the hospital's current litigation budget position and the general counsel's standing judgment on whether to pursue this particular insurer"* — the quarterly budget position is discussed in private leadership meetings; the general counsel's judgment has not been documented
>
> **D)** *"Format the approved appeal letter into the insurer's required submission format"* — the insurer's submission guidelines are publicly published and can be attached
>
> **E)** *"Determine the priority tier for this appeal based on the patient's assessed financial hardship and the admitting physician's clinical judgment on medical necessity"* — financial hardship assessments exist in the system; the admitting physician's clinical judgment has not been documented in writing for this case

> [!success]- Reveal Answer
> **Correct: C and E**
>
> **Why C fails:** The recommendation requires two inputs that cannot be supplied: (1) the current litigation budget position, which is discussed in private leadership meetings and not in a queryable document, and (2) the general counsel's personal standing judgment on this specific insurer, which lives in the general counsel's head. The AI will fill both gaps with what such a recommendation usually looks like — the hiring-freeze failure, applied to legal strategy.
>
> **Why E fails:** Financial hardship data may be partially available in the system. But *"the admitting physician's clinical judgment on medical necessity for this specific case"* is a professional judgment that exists in the physician's assessment, not in a document that can be put in a prompt. Priority tiering that depends on undocumented clinical judgment fails the window test on that input.
>
> **Why A passes:** Denial letter + billing codes database = both suppliable. This is mechanical cross-referencing with all required inputs available. Passes.
>
> **Why B passes:** Treatment records + denial reason + appeal template = all three are documents that can be attached. Drafting from provided documents passes the window test (whether the step is then AI-appropriate or collaborative is decided next by the three criteria).
>
> **Why D passes:** Publicly published submission guidelines can be attached. Format conversion from supplied content against a supplied specification passes the window test cleanly.

---

> [!question] Q8 — C5: Three Criteria — Accountability Alone
> ⏱ **90 seconds**
>
> A payroll team at a manufacturing company is designing an AI-assisted workflow for monthly overtime claim processing. One step is: *"Cross-check each employee's submitted overtime hours against the timesheet system and flag any discrepancies above five hours."* The team lead says: *"This step must stay human-retained — our HR Director is accountable for all payroll accuracy."*
>
> Is the team lead's reasoning correct?
>
> **A)** Yes — when a senior leader is accountable for an outcome, any step in the chain producing that outcome must be human-retained
>
> **B)** No — accountability asks whether this step *is the call* the accountable person answers for. This step produces a flagged list that the HR Director then judges — accountability sits at the judgment, not at the step that produces the input for it
>
> **C)** Yes — payroll is a compliance-sensitive domain, so any step in the payroll chain requires human ownership regardless of the three criteria
>
> **D)** No — because the step is reversible (flags can be corrected), reversibility overrides any accountability concern and makes the step AI-appropriate

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course draws this distinction precisely: *"Accountability... whether this step is the call they answer for, or an input they judge before it acts on anything. A step that produces an input somebody judges can be handed over, because the accountability sits at the judging."* Cross-checking and flagging discrepancies produces a list that a human reviews. The HR Director's accountability attaches to the *judgment of that list*, not to the mechanical comparison that generated it. The course directly anticipates this question: *"Somebody says a step must stay human because a manager is accountable for it. Why is that not enough?"*
>
> **Why A is wrong:** This is the exact wrong reasoning the course addresses. Accountability does not cascade downward to every step in the chain. Only the step that *is the decision* carries the accountability criterion.
>
> **Why C is wrong:** Domain sensitivity (compliance, payroll) is not a criterion. The three criteria — reversibility, stakes, accountability — apply uniformly. The stakes question would capture genuine payroll risk, but the team lead's stated reason is accountability, which as explained in B, does not apply to this step.
>
> **Why D is wrong:** The course says *"where the three disagree, the strictest one wins"* — it does not say reversibility overrides. More importantly, the three criteria aren't in genuine conflict here. B's answer shows that accountability does not actually apply to this step as classified — so there's nothing for reversibility to override.

---

> [!question] Q9 — C5: Three Criteria — Past Performance
> ⏱ **90 seconds**
>
> An accounts receivable team has used AI to draft overdue payment reminder emails for three months. The drafts have been professional and effective — the team lead reports 94% required no edits before sending. Based on this track record, the team lead proposes to reclassify the *"send overdue payment reminder"* step from Collaborative to AI-appropriate, removing human review entirely.
>
> What is wrong with this proposal?
>
> **A)** 94% is too low — the threshold for removing a review gate is 99% or higher
>
> **B)** The track record is evidence about the drafts. The *send* step is irreversible and externally binding — those properties have not changed, regardless of how good the drafts have been
>
> **C)** The proposal is reasonable for routine low-stakes reminders — the consequences of an occasional wrong email are minor and recoverable
>
> **D)** The proposal is only wrong if the emails contain personal customer data; without that, removing review is acceptable

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course is explicit: *"How well AI performed on this step in your test run is not a criterion."* And: *"Drafting quality is evidence about the draft. It is not evidence about the decision."* The sending step has two properties that decide it: it is irreversible (a sent email cannot be unsent) and it is externally binding (it reaches the customer). Neither property changed because the drafts were good. The course uses this exact pattern with the second contracting team: *"The drafting is good, week after week, so the next step feels safe. It is not a next step. It is a different kind of step."*
>
> **Why A is wrong:** There is no percentage threshold. The course is unambiguous — past performance is not a criterion at any percentage. 94% is not "too low"; it is simply the wrong input to the classification decision.
>
> **Why C is wrong:** "Routine" is not one of the three criteria. An overdue payment reminder reaching the wrong customer, claiming a wrong amount, or being sent at the wrong time is not trivially recoverable — it affects a real external relationship. But even setting stakes aside, irreversibility alone keeps the sending step human.
>
> **Why D is wrong:** Data classification determines eligibility (whether AI may touch the data at all). It does not substitute for the three criteria. The irreversibility of sending an external email applies regardless of data classification.

---

> [!question] Q10 — C5: Three Criteria — Classification Errors (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> An insurance company is mapping their claims intake workflow. The team has classified five steps. Which **TWO** classifications are **incorrect**?
>
> **A)** *"Extract the claim number, policy number, and incident date from the submitted claim form"* → **AI-appropriate.** Reason: mechanical extraction, fully reversible, low stakes.
>
> **B)** *"Calculate the estimated payout based on policy terms and the submitted damage assessment"* → **AI-appropriate.** Reason: this is arithmetic, which AI handles well.
>
> **C)** *"Decide whether to approve or deny the claim"* → **Collaborative.** Reason: high stakes, so a claims assessor reviews the AI's decision before it is recorded.
>
> **D)** *"Send the approval or denial letter to the claimant"* → **AI-appropriate.** Reason: the decision was approved by the assessor in the previous step, so sending is low-risk.
>
> **E)** *"Flag claims where the damage description doesn't match the policy coverage category"* → **AI-appropriate.** Reason: reversible, and flags are reviewed by the assessor at the next step.

> [!success]- Reveal Answer
> **Correct: C and D**
>
> **Why C is incorrectly classified:** The approve/deny decision is the call somebody answers for — it is the step where accountability sits. The course is precise: *"A step that is itself the decision cannot [be handed over], because nothing after it is left to carry it."* Classifying it as Collaborative means AI decides and a human reviews that decision. But the decision must be human-retained — the assessor makes the call, AI provides inputs for it. The review gate should be *before* the decision is made, not a check of the AI's decision.
>
> **Why D is incorrectly classified:** Sending the approval or denial letter to the claimant is irreversible and externally binding — two properties that make it human regardless of what came before. The course contract map: *"Sign and send — Human — Irreversible and externally binding."* The fact that the previous step was human-approved does not transfer that approval to the sending act itself. The sending step needs its own named signer.
>
> **Why A is correct:** Mechanical extraction is reversible, low-stakes, and errors surface at later review steps. Correctly AI-appropriate.
>
> **Why B is a near-miss trap:** The classification (AI-appropriate) could be correct if the calculation uses code execution and is checked at a gate. The *reason* given ("AI handles arithmetic well") is incomplete — the correct reason is "reversible, and checked at the approval gate." But the classification itself isn't necessarily wrong if those conditions hold.
>
> **Why E is correct:** Flagging departures from a policy is AI-appropriate when somebody reads the flags at the next step. The assessor review in the next step is exactly that gate. Correctly classified.

---

> [!question] Q11 — C6: The Penalty Clause — Arithmetic ≠ Low Stakes
> ⏱ **90 seconds**
>
> A legal team at a commercial real estate firm is mapping their lease amendment review workflow. One step is: *"Calculate the total financial exposure if the proposed penalty clause is accepted, including compounding across the lease term."* A junior analyst argues: *"This is pure arithmetic — nothing human about multiplying numbers. It should be AI-appropriate with no review gate."* The team lead disagrees.
>
> What is the team lead's correct response, using the course framework?
>
> **A)** The team lead is right — any step in a legal workflow must be human-retained because of regulatory risk
>
> **B)** The team lead is right — the penalty figure feeds the approval decision at the next step. What makes it safe to delegate to AI is precisely that it IS checked at that gate. Remove the gate and the classification changes, even though the arithmetic hasn't
>
> **C)** The junior analyst is right — arithmetic is mechanical and reversible, so AI ownership is always appropriate for calculation steps
>
> **D)** The team lead is right — financial calculations must always be human-retained because a wrong number cannot be corrected once it is in the record

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course addresses this exact scenario: *"The penalty-exposure row is the one people get wrong. Being arithmetic does not make a step low-stakes. That figure feeds the approval decision, and if it is wrong the approval is wrong. What makes it safe to hand over is that the result can be undone and lands in front of a human at the very next row. Take that gate away and the step stops being AI-appropriate, even though the arithmetic has not changed."* This is the central insight of the penalty clause example — classification depends on the gate that follows, not on the nature of the computation.
>
> **Why A is wrong:** Legal domain doesn't auto-classify every step as human. The three criteria apply uniformly. Domain sensitivity is captured by the stakes question, but even a high-stakes calculation can be AI-appropriate if a gate follows it.
>
> **Why C is wrong:** This is precisely the trap the course warns against. "Arithmetic = reversible = AI-appropriate always" ignores stakes and ignores what happens downstream. The junior analyst's reasoning is the wrong reasoning.
>
> **Why D is wrong:** The course does not say financial calculations are always human-retained. It says the step is AI-appropriate *because* it lands at a gate before acting on anything. The criteria, not the category, decide it.

---

> [!question] Q12 — C6: The Flagging Step Changes Columns
> ⏱ **90 seconds**
>
> An HR team uses AI to check expense reports against the company travel policy — flagging any line items that exceed allowed amounts or use unapproved vendors. The team lead classifies this as AI-appropriate, stating: *"We already have AI flagging policy departures in our contract review workflow, so the same classification applies here."*
>
> A workflow designer challenges this. What is the most likely basis for the challenge?
>
> **A)** Expense reports contain personal financial data, which requires a human review step before any AI processing
>
> **B)** In contract review, the AI's flags are read at the next step by a human. In this expense workflow, no next step that reads the flags has been stated — without a gate after it, this flagging step belongs in Collaborative, not AI-appropriate
>
> **C)** Travel policy compliance is inherently higher-stakes than contract clause flagging, so the stakes criterion changes the classification
>
> **D)** The Skill built for contract review cannot be reused for expense report flagging, so a new Skill must be built and its quality cannot yet justify the classification

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course makes this move explicitly: *"Flagging departures from a written policy is AI-appropriate here because somebody reads the flags at the very next row... Move the same step into a workflow where nothing after it reads the flags, and it becomes collaborative instead. Checking expenses against a travel policy is usually that second shape."* The team lead made the classic mistake of copying a classification across workflows without checking whether the structural condition that made it safe — the gate — also exists in the new workflow. *"The step did not change. What changed is whether anybody is standing after it."*
>
> **Why A is wrong:** Data classification is a governance/eligibility question decided before classification. It can prevent the step from being used at all, but it doesn't change the AI-appropriate vs. collaborative distinction for a step that passed eligibility.
>
> **Why C is wrong:** The course does not compare stakes across domains to decide classification. Stakes is a criterion applied to each step individually — "what does an error cost in the bad case?" — not a domain-level comparison between contract law and travel policy.
>
> **Why D is wrong:** Skill compatibility is an implementation detail. Whether the same Skill can be reused is irrelevant to the ownership classification. Ownership (AI-appropriate, collaborative, human-retained) is decided before implementation.

---

> [!question] Q13 — C7: Three Mapping Errors — Long Case (Two-Part)
> ⏱ **4 minutes for both parts**
>
> **SCENARIO:** A mid-size property management company uses the following workflow for handling tenant maintenance requests. Read the entire description before answering.
>
> > *The workflow operates as follows. When a maintenance request arrives, AI pulls the tenant record and property maintenance history from the database — the team classified this as AI-appropriate because it is mechanical retrieval. AI then scores each request with a priority level from 1 to 5 using a Skill the team built last year; the team classified this as AI-appropriate, noting the Skill has produced accurate priority scores for the past four months. AI then drafts the response message to the tenant using an approved template, classified as Collaborative, with a property coordinator reviewing the draft before it is sent. For urgent requests (priority 4 or 5), AI sends the maintenance team a dispatch notification directly without coordinator review, because the team noted that all priority-4-and-5 drafts had been approved without changes for the past two months. Finally, AI logs the request outcome in the property management system.*
>
> ---
>
> **13A.** The priority scoring step (step 2) contains a mapping error. Which one?
>
> **A)** Unstaffed gate — the Skill's quality review is no longer being performed
>
> **B)** Halo delegation — the evidence cited ("accurate scores for 4 months") belongs to the scoring step, but is not one of the three criteria; past performance does not decide ownership
>
> **C)** Mapping the tool — the step exists because the Skill is good, not because the step needs doing this way
>
> **D)** Over-delegation — the priority score directly controls dispatch, making it too high-stakes for AI ownership
>
> ---
>
> **13B.** The dispatch step (step 4) contains the most serious error in the workflow. What is it?
>
> **A)** The step is Collaborative but the review criteria are vague — the coordinator should be told what specifically to check
>
> **B)** The step is over-delegated — "priority 4 or 5 only" sounds like a control, but priority was assigned by the same AI system that is now sending without review; a step cannot give itself permission to skip the gate. Dispatch is also irreversible.
>
> **C)** The step is an unstaffed gate — the coordinator reviews the tenant response but used to also review dispatch notifications
>
> **D)** The dispatch notification should use code execution to verify the maintenance team assignment, not a prose generation step

> [!success]- Reveal Answer
> **13A — Correct: B**
>
> **Why B is correct:** The stated reason for classifying step 2 as AI-appropriate is *"accurate scores for four months."* The course is explicit: *"How well AI performed on this step in your test run is not a criterion."* This is halo delegation — the accuracy evidence is real, but it belongs to the scoring performance, not to the classification decision. Ownership rests on reversibility, stakes, and accountability. The stated reason passes none of those tests.
>
> **Why C is a plausible near-miss:** There is an element of mapping the tool here — the Skill is good, so the step was handed to it. But the primary, named error in the course is halo delegation (carrying forward credit from one step to justify owning another). C is a secondary observation.
>
> **Why D is wrong:** High stakes alone doesn't make a step incorrectly classified — stakes is one of three criteria. If the step is reversible and there is a gate after it, high stakes can still be AI-appropriate. The error is not the classification itself but the *reason* given for it.
>
> ---
>
> **13B — Correct: B**
>
> **Why B is correct:** The course describes this pattern directly in the customer complaint example: *"'Low severity only' sounds like a control, but severity was set in row 3 by the same system that is now sending without review. A step cannot give itself permission to skip the gate."* Here: "priority 4 or 5 only" is a condition set by the AI scoring step — the same system family that is now dispatching without review. Additionally, sending a dispatch notification to a maintenance team triggers real-world action that cannot be recalled. Irreversibility + no human gate = over-delegation.
>
> **Why A is wrong:** The coordinator review step (step 3) is reasonably designed as written. The problem is that step 4 bypasses it entirely for urgent cases — not that step 3's review criteria are vague.
>
> **Why C is wrong:** The coordinator is still reviewing tenant responses (step 3). The gate for dispatch was never designed as a coordinator responsibility — it was removed from coordinator review by the dispatch bypass rule. This is over-delegation, not an unstaffed gate.
>
> **Why D is wrong:** Code execution vs. prose generation is an implementation question. The fundamental error is the absence of any human gate before an irreversible action, not the technical mechanism that carries the step.

---

> [!question] Q14 — C7: The Unstaffed Gate
> ⏱ **90 seconds**
>
> A software company's customer complaint workflow was designed eight months ago. Step 4 on the map reads: *"Collaborative — AI drafts response, duty agent reviews before sending."* Since then, complaint volume has doubled. During an audit, the reviewer asks the duty agent how long they spend reviewing each draft. The agent replies: *"Honestly, when we're busy I click through most of them in a few seconds — I really only read the tricky ones."*
>
> What has happened, and what does the map say about it?
>
> **A)** The map is now inaccurate — the step has effectively become AI-appropriate because reviews are no longer substantive, but the map still reads Collaborative
>
> **B)** The map is accurate — a quick review still counts as a review. Collaborative only requires that a human is in the loop, not that they spend a specific amount of time
>
> **C)** The step should be reclassified as human-retained, since the inadequate review means the human must reclaim full ownership
>
> **D)** This is a staffing problem, not a mapping problem — the fix is to hire more agents, not to change the map

> [!success]- Reveal Answer
> **Correct: A**
>
> **Why A is correct:** The course: *"An unstaffed gate is a collaborative step whose review is no longer really done. When the reviewer is busy, or the queue is long, or the drafts have been good for two months, the review becomes a glance and then a click. Nothing was decided and nobody changed the map, but the step is now automated. The map does not tell you, because a map records what you designed rather than what is running."* The map says Collaborative. The reality is that most drafts go out without genuine review. The map is wrong about the workflow that is actually running — and it failed silently, with no alarm.
>
> **Why B is wrong:** "A human is in the loop" is not sufficient for a gate to be staffed. The course draws the line clearly: if the review has become a glance and a click, nobody is judging the output. The gate exists on paper and is unstaffed in practice.
>
> **Why C is wrong:** Reclassifying as human-retained is overcorrection. The AI-drafting step has value — the problem is the gate, not the delegation. The fix is to re-staff the gate (capacity, named reviewer, defined criteria), not to remove AI from the step.
>
> **Why D is wrong:** Calling it a staffing problem does not make it not a mapping problem. The map still claims a gate is running when it isn't. The map is wrong regardless of whether the fix is hiring or redesign. The audit's job is to find that the map is inaccurate — and it is.

---

> [!question] Q15 — C8: Map Ownership and the Review Questions
> ⏱ **90 seconds**
>
> A retail operations team has a delegation map for their weekly inventory report workflow. The map was created 14 months ago. The original map owner left the company six months ago and was not replaced. Nobody on the team can name a current map owner, the date of the last review, or the date of the next scheduled review. An outside reviewer asks: *"Without reading the map yet, which of the four review questions is most likely to reveal a live problem right now?"*
>
> **A)** Question 1: Has a step been added or removed that is not on the map?
>
> **B)** Question 2: For every collaborative step — who reviewed it last week, and how long did they spend?
>
> **C)** Question 3: Has anything changed the volume or the stakes since the map was written?
>
> **D)** Question 4: Is every configuration the map depends on still current?

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course identifies Q2 as the one that *"finds the real problems."* More specifically: *"It asks about last week rather than about policy, because policy is what the map already says and last week is what happened."* A map with no owner and no review for 14 months in an active weekly workflow is exactly where unstaffed gates are most likely. Q2 surfaces them by asking about actual behavior last week — not what the map says should happen, but what actually happened at the review step. This is the only question that catches a gate that decayed silently.
>
> **Why A is reasonable but secondary:** Steps added without updating the map are a real problem. But a 14-month-old map with a weekly workflow is more likely to have drifted on gate staffing than on step count — teams add steps less often than they let reviews decay.
>
> **Why C is reasonable but secondary:** Volume changes break gates — the course is explicit about this. But Q3 points at a condition that *might* have broken a gate. Q2 asks whether the gate is actually broken right now, last week, in practice.
>
> **Why D is reasonable but secondary:** Stale configuration is real and fails silently. But it has a different diagnostic path (check the instruction or knowledge source's date). Q2 finds the most common and most consequential failure mode first — the unstaffed gate.

---

> [!note] END OF PART 1
> **Part 1 complete: 15 questions | Target time: 28 minutes**
>
> **Error tagging:**
> - **C** = content error (didn't know the concept)
> - **T** = timing error (knew it but ran out of time)
> - **L** = language error (misread the scenario under pressure)
>
> **Concepts covered in Part 1:**
> C1 (Step vs Session) · C2 (Requirements) · C3 (Computed Not Generated) · C4 (Window Test) · C5 (Three Criteria) · C6 (Two Workflows) · C7 (Mapping Errors) · C8 (Map Ownership)
>
> **Part 2 covers:** C9 (Build Loop) · C10 (Escalation) · C11 (Four Causes) · C12 (Diagnostic Sequence) · C13 (Reaction to Instruction) · C14 (Three Homes) · C15 (Friction) · C16 (Measure) · C17 (Incident Path) · C18 (Communication) — plus 2 long-case paragraph scenarios.

---

## PART 2 — Questions 16–30

---

> [!question] Q16 — C9: Build Loop — Silent Failure in a Dashboard
> ⏱ **90 seconds**
>
> An operations team builds an internal delivery performance dashboard over three build cycles. Cycle 1 produces six charts from uploaded data — all correct. Cycle 2 adds a date-range filter and a "cumulative on-time rate" line chart — both look clean and return immediately. Cycle 3 adds brand colors and a print layout — works first try. The dashboard goes live. Two weeks later, the logistics director notices the cumulative on-time rate line has been completely flat for ten days, even though the underlying daily data has varied significantly. An analyst traces it: the on-time rate is a static written value, not computed from the daily data.
>
> Which diagnostic habit would have caught this error during the build loop, before going live?
>
> **A)** Running all three cycles in the same chat session to keep context consistent and prevent instructions from resetting
>
> **B)** Asking the AI to grade each completed cycle against a rubric before starting the next one
>
> **C)** Checking whether every calculated metric in each cycle has a code block — a written value and a computed value look identical on the page, and only a code block confirms computation ran
>
> **D)** Using extended thinking in Cycle 2 because trend and cumulative calculations are more complex than basic bar charts

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The course: *"The totals were written rather than computed, and a written number looks as right as a calculated one."* This is Concept 3 applied inside the build loop. Any metric that must update dynamically — a cumulative rate, a total, a filtered average — belongs in code execution, and the code block is the proof that computation ran. No code block = written value = static. The habit is to check after every cycle that touches a number.
>
> **Why A is wrong:** Session continuity is good practice for context stability but does not prevent the AI from writing static values. The problem is not context loss — it is the mechanism used to generate numbers.
>
> **Why B is wrong:** Rubric grading assesses quality of reasoning, tone, and completeness. It does not check whether a specific cell contains a computed vs. written value. A rubric would score the chart as "clear and correctly formatted" — which it is, except for the invisible static value underneath.
>
> **Why D is wrong:** Extended thinking improves reasoning depth. It does not trigger code execution. The AI can reason carefully about a cumulative rate and still write a static number in prose. The mechanism is the issue, not the depth of reasoning.

---

> [!question] Q17 — C9: Description Problem vs. Feature Problem
> ⏱ **90 seconds**
>
> A marketing team is in a build cycle for their campaign reporting tool. They request three changes in one message: (1) add the client's logo to the header, (2) change bar charts to line charts, (3) add a "campaign ROI" column that divides total revenue by total spend for each campaign. Requests (1) and (2) work correctly on the first attempt. Request (3) returns an ROI column with values — but when one analyst manually verifies three campaigns, two of the figures are wrong by different margins. Before sending the fix, she must decide: is this a description problem or a feature problem?
>
> What is the correct diagnosis?
>
> **A)** Description problem — the formula was not specified; adding "ROI = total revenue ÷ total spend" to the prompt will fix it
>
> **B)** Feature problem — a division that must be accurate is a calculation, not prose generation; the values appeared but were written, not computed via code execution
>
> **C)** Description problem — the column names for revenue and spend were ambiguous; specifying the exact column headers will fix it
>
> **D)** Feature problem — line charts and ROI calculations require different Skill configurations; the current Skill cannot handle both in one cycle

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course's central distinction: *"Cycle 2 was a feature problem, and no amount of describing would have solved it."* A financial calculation that must be accurate — especially one that varies by campaign — is a feature problem. Code execution is required. Adding the formula (A) or naming the columns more precisely (C) are description-level fixes. They may produce a correctly-worded number that still has no computation behind it. Wrong values by different margins across campaigns is the signature of prose generation, not a prompt specification failure.
>
> **Why A is wrong:** Specifying the formula is a description fix. The AI already knows division. The problem is whether the result was calculated or written. A more precise description still produces a written number.
>
> **Why C is wrong:** Column name ambiguity would cause errors, but they would be consistent errors (wrong column used every time), not errors of different margins on different campaigns. The varying error pattern points to estimation, not column confusion.
>
> **Why D is wrong:** Skill configuration is an implementation detail. The ownership classification and the calculation mechanism are separate decisions. More importantly, description (1) and (2) worked — the issue is specifically in the calculation step, not a Skill incompatibility.

---

> [!question] Q18 — C10: The Escalation Signal
> ⏱ **90 seconds**
>
> A business analyst at an accounting firm built an AI-assisted billing summary tool four months ago for her own team of three. Over time, two other departments began using it. Last month, the client relations team started including its output directly in client-facing invoices without additional review. Last week, a configuration error caused the tool to produce incorrect fee totals for twelve clients. Within two hours, the analyst received fifteen escalation messages from three departments.
>
> Which signal does this scenario represent, and what is the correct response?
>
> **A)** The tool has been used the same way for four months — this is the "solved it the same way multiple times" signal, meaning the shape is stable and should be manufactured into a repeatable Skill
>
> **B)** Three departments and client-facing outputs now depend on this tool — it has crossed the escalation signal and needs to be handed to developer or architect expertise, because it now has infrastructure requirements it never had before
>
> **C)** The configuration error is a stale configuration problem — the fix is to audit the instructions and knowledge sources, schedule quarterly reviews, and continue operating
>
> **D)** The fifteen escalations indicate an incident — the correct response is the four-step incident procedure, and no other action is needed

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course: *"Dependency is the escalation signal — the point where a tool has outgrown prompt-and-iterate. Once other people rely on something as infrastructure, it has requirements it never had before. Uptime, access control, somebody to call when it breaks, and a guarantee that it still does today what it did in March."* Three departments + client-facing invoices = infrastructure. The course: *"Escalating is a correct answer, not an admission of failure. The failure is the opposite — you keep running something by prompt long after other people depend on it, because nobody marked the moment it stopped being small."*
>
> **Why A is wrong:** The "solved same way multiple times" signal means the method has stabilized and can be manufactured — it is about method repeatability, not dependency. The escalation signal is specifically about *who else depends on it*, not *how often it has been used the same way*. These are two different signals pointing to two different responses.
>
> **Why C is wrong:** The configuration error is real and must be fixed. But fixing it and continuing as before misses the structural problem: the tool is now infrastructure and must be treated as such. A configuration fix is a symptom response, not a structural response.
>
> **Why D is wrong:** The incident procedure is also triggered here, but it is a response to the current bad outputs — not a response to the structural escalation. D names one necessary action but misses the primary signal the scenario is demonstrating.

---

> [!question] Q19 — C11: Four Causes — Timing
> ⏱ **90 seconds**
>
> A team runs an AI-assisted workflow to generate weekly supplier performance reports. An analyst contacts the support desk with this description: *"The report format is fine, and the data looks right. But this week the recommendation section started using phrases from last quarter's improvement framework — language we retired two months ago. It was working correctly last week and the week before."*
>
> Which cause does the timing point to first?
>
> **A)** Under-specification — the recommendation language was never constrained in the prompt, so the model defaults to older phrasing
>
> **B)** Context overload — the session containing the workflow has grown long enough that early instructions specifying current language are being compressed
>
> **C)** Stale configuration — something in the setup the output depends on has not been updated; the outdated framework language is likely still in a knowledge source or standing instruction
>
> **D)** Wrong feature or model — the recommendation generation step needs a stronger model tier to distinguish between current and retired frameworks

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Timing signal: *"Used to work, now doesn't."* The course maps this directly to stale configuration: *"Output that slowly gets worse because a standing instruction, knowledge source, or Skill is out of date... It shows up as 'it used to work.' Nothing reports an error."* The retired framework language appearing in the output — despite working correctly last week — is the signature of a knowledge source or standing instruction that still contains the old language and was not updated when the framework changed two months ago. The cheap confirmation: open the relevant knowledge source and check when it was last updated.
>
> **Why A is wrong:** Under-specification shows up from the *very first answer*. If the prompt never constrained the recommendation language, the problem would have existed from the beginning — not appeared after weeks of correct operation.
>
> **Why B is wrong:** Context overload shows as degradation *within one long session* as it grows. A fresh weekly run in a new session that immediately uses old language is not context overload. That signal requires a session that "started fine, then degraded."
>
> **Why D is wrong:** Wrong feature or model shows as one *repeatable error type* that was present from the start. Using an outdated framework is a content problem, not a capability problem. A stronger tier cannot generate current language if the knowledge source still contains the old language.

---

> [!question] Q20 — C11: Four Causes — Match the Timing (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** correctly paired answers
>
> A team reports four separate AI problems in the same week. Which **TWO** symptom descriptions are correctly paired with their diagnostic cause?
>
> **A)** *"Our AI has consistently missed the 'pending approval' deal category in every sales digest since we launched the workflow three weeks ago."* → **Under-specification.** The prompt never included instructions to include pending-approval deals.
>
> **B)** *"The AI formatted our compliance reports correctly for four weeks. This week it dropped the section headers entirely."* → **Context overload.** The conversation has grown long and early formatting instructions were compressed.
>
> **C)** *"Our financial model output has been adding figures instead of dividing them — the error appears on every single run, including fresh sessions."* → **Stale configuration.** The setup has drifted since the financial model was last configured.
>
> **D)** *"The competitive analysis tool used to write sharp, specific summaries. For the past two weeks the outputs have been noticeably generic and flat, with no change to our prompts."* → **Wrong feature or model.** A speed-tier model is being used for analysis that needs depth.
>
> **E)** *"The risk summary was excellent in the first three responses of our session. By message fourteen, it stopped including the international exposure categories we specified at the start."* → **Context overload.** Early context is being compressed as the session grows.

> [!success]- Reveal Answer
> **Correct: A and E**
>
> **Why A is correct:** "Consistently missed pending-approval deals since we launched" = wrong from the very first answer, every time. This is under-specification — the prompt never carried what the step needed. The fix: add the missing specification. Timing confirmation: re-read the prompt against its five parts. Is "pending approval" actually there? It is not. ✓
>
> **Why E is correct:** "Excellent in the first three responses, stopped including international categories by message fourteen *in the same session*" = started fine, degraded as the session grew. This is context overload — the early specification was compressed to make room. The fix is to restart with a summary of what matters. ✓
>
> **Why B is incorrectly paired:** "Formatted correctly for four weeks, then dropped headers *this week*" = used to work, now doesn't. This is **stale configuration**, not context overload. Context overload happens within one session. A problem that appears after weeks of correct operation across multiple separate runs is stale configuration.
>
> **Why C is incorrectly paired:** "Adding instead of dividing, on every single run, including fresh sessions" = one repeatable error type, present consistently. This is **wrong feature** — a calculation being generated in prose instead of via code execution. Not stale configuration, which requires "used to work, now doesn't."
>
> **Why D is incorrectly paired:** "Used to write sharp summaries, now generic for two weeks" = used to work, now doesn't. This is **stale configuration** — a knowledge source or instruction that shaped the sharp output has gone stale. Not wrong model/feature, which shows as one specific repeatable error type from the start.

---

> [!question] Q21 — C11: Four Causes — Long Case (Two-Part)
> ⏱ **4 minutes for both parts**
>
> **SCENARIO:** A compliance team at an investment firm uses an AI workflow with three steps: Step 1 extracts flagged items from five regulatory data feeds. Step 2 drafts a risk-tier summary. Step 3 generates a one-page executive brief for the Chief Compliance Officer. An analyst reviewing a month of problems identifies four reported symptoms:
>
> > **Problem 1:** *"In week 1, the executive brief never included a 'remediation status' section that the CCO expects. It was absent from the very first run."*
> >
> > **Problem 2:** *"By week 3, the risk-tier summary was correct for the first eight items, then became increasingly vague for items nine through twenty. The analyst had been running all three steps in one long continuing conversation throughout the month."*
> >
> > **Problem 3:** *"In week 4, the extraction step started pulling figures from last quarter's regulatory guidance instead of the current version. The guidance was updated six weeks ago. No error appeared — the figures were plausible."*
> >
> > **Problem 4:** *"The executive brief consistently shows percentages with three decimal places instead of two, which the firm's style guide prohibits. This has appeared on every single run since the workflow was built."*
>
> ---
>
> **21A.** Problem 3 maps to which cause, and what is the correct one-minute confirmation step?
>
> **A)** Under-specification — re-read the prompt to confirm whether the regulatory guidance source was specified
>
> **B)** Stale configuration — open the regulatory guidance knowledge source and check whether it was updated when the guidance changed six weeks ago
>
> **C)** Context overload — restate the guidance source reference in a fresh session to confirm the instruction holds
>
> **D)** Wrong feature or model — run the extraction step once with a stronger model tier to see if it selects the correct source
>
> ---
>
> **21B.** Problem 2 maps to context overload. Why would switching to a stronger model tier NOT fix it?
>
> **A)** A stronger model would fix it — flagship models have much larger context windows and would retain the early specifications across all twenty items
>
> **B)** A stronger model would fix it — the issue is reasoning depth, and a more capable tier can hold more analytical complexity
>
> **C)** Switching models does not fix context overload — the problem is session length, not model capability; earlier text is compressed to make room regardless of the tier; the fix is to restart the session or restate the key instructions at the point of degradation
>
> **D)** The problem is not context overload — a stronger model would fix it by processing all twenty items as one batch

> [!success]- Reveal Answer
> **21A — Correct: B**
>
> **Why B is correct:** Problem 3 has the exact timing signature of stale configuration: *"used to work, now doesn't"* — and additionally, *"nothing reports an error, the figures were plausible."* The course: *"Last quarter's figures sit in the Project knowledge base and this quarter's report quotes them, formatted perfectly. The model has no way to know that what you gave it is out of date."* The cheap confirmation is the one-minute check: open the regulatory guidance file in the knowledge base and read its update date. If it was last updated before the guidance changed six weeks ago, that is the cause.
>
> **Why A is wrong:** Under-specification shows from the first answer. Problem 3 worked correctly before — the extraction step produced correct figures from current guidance until recently. That "used to work" timing rules out under-specification.
>
> **Why C is wrong:** Context overload shows as degradation mid-session across items in one long run (that is Problem 2). Problem 3 is about pulling from the wrong source on a fresh weekly run — a clean, repeatable, session-independent failure. That is stale configuration.
>
> **Why D is wrong:** The error is not about reasoning capability — it is about what data the knowledge source contains. A stronger tier reading from the same outdated knowledge source produces the same outdated figures.
>
> ---
>
> **21B — Correct: C**
>
> **Why C is correct:** The course: *"A better prompt does not help, because the problem is not the prompt you just wrote."* Context overload is caused by session length — earlier text is shortened or dropped to make room as the conversation grows. A stronger model has a larger context window in absolute terms, but the session filling up is still the mechanism. If someone runs all three workflow steps in one continuously growing conversation, the early instructions lose force regardless of the tier. The fix is to restart the session (clearing the accumulated history) or to explicitly restate the critical instructions at the point where degradation starts.
>
> **Why A is wrong:** Even flagship models have limits, and the course's solution for context overload is not "use a bigger window" — it is "restart or summarize." Chasing model tiers for a session management problem is the wrong diagnostic path.
>
> **Why B is wrong:** Reasoning depth is the wrong diagnosis. The items themselves are not more analytically complex — the model is simply losing access to what was specified early in the session. This is a memory/context problem, not an intelligence problem.
>
> **Why D is wrong:** Problem 2's timing is correct for context overload: started fine (items 1–8), degraded as the session grew (items 9–20). A stronger model does not change the fundamental problem of a session growing beyond what can be retained.

---

> [!question] Q22 — C12: Diagnostic Sequence — Wrong First Move
> ⏱ **90 seconds**
>
> A data analyst at a retail company runs an AI workflow for monthly inventory forecasts. This month, Category C product forecasts are consistently too high — by roughly the same margin, on every run, including in fresh sessions started from scratch. She says: *"I need to escalate this to our developer team and ask them to rebuild the workflow with a more capable model."*
>
> What is wrong with her next step?
>
> **A)** Nothing — consistent errors across fresh sessions are the signal that the tool has become infrastructure and needs engineering
>
> **B)** She is jumping past the cheap checks. A single repeatable error type in fresh sessions points first to wrong feature or model — and before even that, the prompt should be re-read against its five parts to confirm the Category C specification is actually there
>
> **C)** She should restart the session and summarize the context — consistent errors across sessions are more likely caused by context overload than a model problem
>
> **D)** The consistent error indicates expectation mismatch — forecasting is not a task the tool can do, and she should reshape the task rather than change the tool

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The diagnostic sequence runs cheapest first: (1) re-read the prompt, (2) check session length, (3) check feature and model, (4) check configuration, (5) question the task. *"One repeatable error type"* in fresh sessions points to step 3 — wrong feature or model (likely a calculation in prose that needs code execution, or a speed tier on a task needing depth). But step 1 must come first — the prompt check takes seconds and may reveal that the Category C specification is simply missing. The course: *"Most people run it backwards. The instinct on a disappointing output is to switch to the most capable model, or to declare the task impossible. Both are moves from the bottom of the ladder, made before anything at the top was checked."* Developer escalation is not in the five-step sequence — that is the Concept 10 escalation signal (dependency), which this situation does not show.
>
> **Why A is wrong:** Consistent errors do not trigger the escalation signal. The escalation signal is dependency — other people relying on the tool as infrastructure. A private workflow with repeatable errors is a diagnostic problem, not an infrastructure problem.
>
> **Why C is wrong:** Context overload shows as degradation *within* one session that started well. A problem that is consistent on every fresh session from the start is not context overload — the timing rules it out immediately.
>
> **Why D is wrong:** Expectation mismatch is step 5, reached after the other four have been genuinely ruled out. Jumping to it after observing a consistent error is the exact mistake the sequence is designed to prevent. *"Reached first, 'the task does not fit' is an excuse. Reached last, it is a conclusion."*

---

> [!question] Q23 — C12: Expectation Mismatch
> ⏱ **90 seconds**
>
> A legal team asks an AI to predict, with 90% confidence, the exact settlement amount a court will award in an ongoing case, based on the case file. The AI produces a specific figure each time, but three senior lawyers cannot validate the reasoning. An analyst runs the full diagnostic sequence. Step 1: the prompt has all five parts — confirmed. Step 2: fresh session each run — confirmed. Step 3: code execution is being used for any quantitative elements — confirmed. Step 4: the case files in the knowledge base are current — confirmed. She reaches step 5.
>
> What is the correct conclusion at step 5?
>
> **A)** The task has an under-specification problem that was missed in step 1 — adding the court's historical settlement data and judge's prior rulings would make the prediction reliable
>
> **B)** This is an expectation mismatch — predicting one exact settlement figure with stated confidence requires information that cannot be put in any window; the task needs to be reshaped to ask for a range with stated assumptions instead
>
> **C)** This is a wrong model problem — a flagship model with extended thinking would produce a more defensible prediction than a standard tier
>
> **D)** This is stale configuration — the case law knowledge base needs to be updated with decisions from the current year before predictions can be reliable

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course: *"An expectation mismatch is a task that asks for something the tool cannot do, which here is predicting one exact future number. The fix is to the task. Ask for a range with stated assumptions, or a model of the drivers you can adjust and re-run."* Predicting a specific settlement amount requires knowing the judge's actual reasoning, the opposing counsel's decisions, and variables that exist only in the future. These cannot be put in a prompt — this is a judgment step that fails the window test at the concept level. The reshaped task: *"Given the case facts and comparable settlements, what is the likely range of outcomes, and what are the key assumptions that would shift it toward the high or low end?"*
>
> **Why A is wrong:** Historical data and prior rulings can improve the analysis. But they cannot convert an inherently unpredictable outcome into a reliably predictable one. More data does not fix an expectation mismatch. Additionally, the analyst confirmed in step 1 that the prompt was complete — revisiting step 1 at step 5 is not the right move.
>
> **Why C is wrong:** Extended thinking improves reasoning on complex multi-input problems. It cannot produce confident predictions of inherently unknowable future outcomes. Model capability does not resolve an expectation mismatch.
>
> **Why D is wrong:** Step 4 was confirmed — configuration is current. Revisiting a confirmed step is not the procedure. The analyst is at step 5 precisely because steps 1–4 were all negative.

---

> [!question] Q24 — C13: Reaction to Instruction
> ⏱ **90 seconds**
>
> An HR manager generates weekly job requisition posts using AI. Every post feels wrong to her, but when asked to describe the problem she writes: *"The posts just aren't quite right — the tone feels off and they don't really convey what we're looking for in candidates."* She sends this to a colleague and asks: *"Can you use this to fix the prompt?"*
>
> What is wrong with the feedback as written, and what single question would turn it into an instruction?
>
> **A)** Nothing is wrong — the colleague can interpret "tone feels off" and "don't convey what we're looking for" and make the appropriate changes
>
> **B)** The feedback is a reaction, not an instruction — it names how the output feels but not what would have to be present for it to be right, or which part of the setup controls that. The question that converts it: *"What specifically would have to appear in the output for it to be right — and is this a prompt change, a standing instruction, or something that belongs in the knowledge base?"*
>
> **C)** The feedback identifies two problems at once, which is too many for one fix — each should be sent separately to avoid confusing the model
>
> **D)** The feedback is adequate, but it should be written directly as a standing instruction rather than forwarded to a colleague

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course: *"A reaction names how the output feels. 'Too generic.' 'Not quite right.' 'Missed the point.' An instruction names what to change, so the next output is different."* And: *"If you cannot name the lever, the critique is still a reaction, and the next attempt will be a guess that looks like a revision."* "Tone feels off" and "don't convey what we're looking for" are reactions — they tell the colleague how the output lands emotionally, not what specific element is missing or which part of the setup controls it. The converting question forces naming: what would have to be in the output (specific language, a constraint, a named quality the candidate description must answer), and which lever it sits on (the prompt, a standing instruction, the knowledge base).
>
> **Why A is wrong:** The course directly contradicts this. Without a named lever, the colleague's next attempt is a guess. It may happen to be better, but it cannot be reliably better, because nothing about the setup was precisely identified.
>
> **Why C is wrong:** Having two reactions is not the problem — neither reaction has been turned into an instruction yet. The issue is the lack of specificity, not the quantity of feedback items.
>
> **Why D is wrong:** A standing instruction is where a *rule* goes after it has been identified. The fix has not been identified yet. You cannot promote a reaction — you can only promote an instruction.

---

> [!question] Q25 — C14: Rule, Reference, or Procedure
> ⏱ **90 seconds**
>
> A content strategist runs a monthly competitor analysis workflow. Every month she manually performs three corrections: (1) pastes the same background paragraph describing her company's market positioning before the analysis begins, (2) fixes the output format from bullet points to numbered lists every time, and (3) types out the same seven-step sequence for structuring the competitive landscape section in the required order. She decides to promote all three into configuration.
>
> Where does each fix correctly belong?
>
> **A)** Background paragraph → standing instruction; format fix → knowledge base; seven-step sequence → Skill
>
> **B)** Background paragraph → knowledge base; format fix → standing instruction; seven-step sequence → Skill
>
> **C)** Background paragraph → Skill; format fix → standing instruction; seven-step sequence → knowledge base
>
> **D)** Background paragraph → standing instruction; format fix → Skill; seven-step sequence → knowledge base

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course's three-home test: *"A rule is a limit that always applies → standing instruction. A reference is material the work has to read → knowledge base. A procedure is a sequence of steps → Skill."*
>
> - Background paragraph (market positioning) = material the analysis has to read = **reference** = knowledge base. ✓
> - Format fix (numbered lists, not bullets) = a rule that applies to every output = **rule** = standing instruction. ✓
> - Seven-step sequence = steps that must run in a specific order = **procedure** = Skill. ✓
>
> **Why A is wrong:** Puts the background paragraph in a standing instruction. Standing instructions are for behavioral rules ("always include X"), not for reference material to read. A two-paragraph background document in a standing instruction bloats every prompt whether or not that detail is needed, and it is not the right home for material.
>
> **Why C is wrong:** Puts the seven-step sequence in a knowledge base. A knowledge base holds reference material — facts, documents, source text. A procedure stored in a knowledge base loses the enforcement of its order. The course: *"A procedure pasted as a one-line instruction loses its steps."* The Skill is what enforces the sequence.
>
> **Why D is wrong:** Same error as C for the seven-step sequence. A knowledge base entry for a procedure means someone has to manually follow the steps — it is not executed. Putting a procedure anywhere other than a Skill is the failure mode the course explicitly describes.

---

> [!question] Q26 — C14: Memory Is Not Configuration (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> A new analyst joins a risk reporting team. She notices two problems. First, the AI applies a discount rate of 8% when she runs the weekly risk model but 10% when a senior colleague runs the same workflow — with no explanation for the difference. Second, the senior colleague says the AI "knows to round all figures to two decimal places" — but when the new analyst runs it, figures come back with four decimal places.
>
> Which **TWO** statements correctly diagnose what is happening and how to fix it?
>
> **A)** The inconsistent discount rate exists because different team members have different memory entries — memory is per-user, not shared across the team, and best-effort; the fix is to add the correct discount rate to a standing instruction or knowledge base entry in the shared Project
>
> **B)** The rounding rule is held in the senior colleague's personal memory and is invisible to the new analyst; this is the exact failure case the course describes — the fix is to promote it to a standing instruction in the shared Project
>
> **C)** Both problems will resolve over time as the new analyst builds up usage history and the AI learns her preferences through memory
>
> **D)** The inconsistent discount rate is a stale configuration problem — it was previously set at 8%, was updated to 10% for the senior analyst, but the Project knowledge base was not refreshed for all users
>
> **E)** Memory and standing instructions are equivalent for team workflows — either one guarantees consistent behavior across all users

> [!success]- Reveal Answer
> **Correct: A and B**
>
> **Why A is correct:** The course: *"Memory is per-user. Whatever it learned about your preferences is yours, and the colleague covering for you starts from nothing."* Two analysts running the same workflow with different memory entries produce different results — the 8% vs 10% inconsistency is memory-driven variance. The course: *"Use both, and rely on configuration."* The shared fix is a Project-level standing instruction or knowledge base entry that applies consistently regardless of who is running the workflow.
>
> **Why B is correct:** This is the analyst-and-canceled-orders failure from the course, applied to rounding. The senior colleague repeated the rounding correction in chat until the AI's memory picked it up. The new analyst starts from nothing. The course: *"The fix existed the whole time. The failure was leaving it somewhere only one person could find."* Promote to a standing instruction: *"Round all figures to two decimal places."*
>
> **Why C is wrong:** The new analyst building personal memory only creates another per-user profile — which makes the variance problem worse, not better. Two analysts with two different memory profiles produce two different outputs. Memory is not the fix for a shared-workflow consistency problem.
>
> **Why D is wrong:** Stale configuration shows as "used to work, now doesn't" — a single consistent failure across the team. The pattern here is different outputs for different users running the same workflow — that is a memory/configuration gap, not a knowledge source that went stale.
>
> **Why E is wrong:** The course explicitly contradicts this. *"Memory is per-user... It is best-effort. It may pick a pattern up. It may not. You cannot point at it, read it, or hand it to somebody. Configuration is the shared home you can open and read."* They are not equivalent for team workflows.

---

> [!question] Q27 — C15: Friction — Variance
> ⏱ **90 seconds**
>
> A compliance team has three analysts who each run the same quarterly audit summary workflow independently. Every analyst's output is internally consistent — correctly formatted, complete by their own standard, and readable. But every quarter the compliance manager spends three hours reconciling the three versions before a single final report can be produced. Each analyst thinks the workflow is running fine. Nobody has flagged a problem.
>
> What type of friction is this, why is it invisible to the analysts, and what is the fix?
>
> **A)** Repetition — all three analysts paste the same background context at the start of each run; consolidate into one shared prompt
>
> **B)** Correction — the manager is fixing the same structural flaw in each output; add a standing instruction that prevents the flaw from appearing
>
> **C)** Variance — the inconsistency exists between people, not within any single output; each analyst's work looks correct from their own view, but the divergence only appears at the person who receives all three; the fix is a shared Skill or knowledge base that standardizes the output structure across the team
>
> **D)** Context overload — three separate sessions produce different outputs because each starts from a slightly different context window; the fix is to run all three analysts' sections in one shared session

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The course: *"Variance is the one teams miss, because no individual feels it. The inconsistency exists only between people, so it shows up at the reviewer."* Each analyst produces something correct by their own standard. The problem only exists in the aggregate — when the manager receives all three and must reconcile them into a coherent report. The fix is a shared Skill (procedure) that standardizes the output format, or a shared knowledge base entry that defines the output standard all three must match. The course audit example uses exactly this: the report format becomes a Skill, eliminating the three-way divergence.
>
> **Why A is wrong:** Repetition is when individuals each paste the same content on every run — a per-person waste. It does not produce between-person divergence. This is a different friction signal.
>
> **Why B is wrong:** Correction requires a specific nameable flaw appearing in every output. Here, no individual output is wrong — they are differently right. You cannot write a standing instruction that prevents three valid but divergent formats.
>
> **Why D is wrong:** Context overload is a within-session degradation problem, not a between-person consistency problem. Running all three analysts in one session creates access and privacy problems and does not address the root cause, which is the absence of a shared output standard.

---

> [!question] Q28 — C16: Measure — The Baseline
> ⏱ **90 seconds**
>
> A logistics company redesigns its AI-assisted freight documentation workflow. The project lead reports in the business case: *"The old process took approximately 45 minutes per document. The new workflow takes 12 minutes. That is a 73% time saving."* Two weeks later, the finance team rejects the business case. The project lead is confused — the 12-minute measurement is real and verifiable.
>
> What is the most likely reason for the rejection?
>
> **A)** 73% is too large a saving claim — finance teams apply a standard discount to AI efficiency claims and require a more conservative figure
>
> **B)** The 45-minute figure is an estimate made after the change, not a measurement made before it. A baseline must be recorded on an unchanged run before any redesign, because estimates of the old way after the change are systematically flattering
>
> **C)** The business case should have reported cost per document rather than time per document, since finance evaluates on cost, not minutes
>
> **D)** Finance requires a completed parallel run comparison before accepting any efficiency claim, and the parallel run data was not included

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The course: *"A baseline is that measurement. Without one you have an improvement you believe in and cannot state, which is the same as no improvement the first time a manager asks."* And: *"You cannot rebuild a baseline afterwards, because your estimate of the old way will flatter you."* The 12-minute figure is real. The 45-minute figure is a remembered estimate of a process that no longer runs. Human memory of how long tedious processes took is unreliable — and systematically underestimates efficient moments while overestimating painful ones. The baseline had to be *measured* on one unchanged run before the redesign. Without it, the numerator is verified and the denominator is a guess.
>
> **Why A is wrong:** Finance teams do not apply a standard percentage discount to efficiency claims. They reject unverifiable baselines — which is what B describes.
>
> **Why C is wrong:** The right metric depends on why the workflow matters (time for internal drafts, accuracy for compliance outputs). Time per document can be the correct metric. The course confirms this. The problem is the baseline, not the metric choice.
>
> **Why D is wrong:** A parallel run is recommended best practice before switching workflows. But it is not the reason for rejection — the 12-minute measurement could have come from a parallel run. The rejection is about the unverifiable 45-minute denominator.

---

> [!question] Q29 — C17: Incident Path — Long Case (Two-Part)
> ⏱ **4 minutes for both parts**
>
> **SCENARIO:** A customer service team at a subscription software company runs an AI workflow that sends automated responses to billing dispute tickets. The workflow has been running for five months. Last Tuesday, a junior agent noticed that several responses were citing a 30-day refund window when the company's actual current policy is 14 days. She fixed the response she was working on and posted in the internal chat: *"Heads up — the AI is using old policy language."* It is now Friday. Four days later. The workflow has continued running without interruption. The team lead has only just seen the note.
>
> ---
>
> **29A.** Which of the four incident decisions is causing the most active damage right now, and why?
>
> **A)** What changes in the map — no post-incident map update has been recorded, so the root cause has not been addressed
>
> **B)** Who is told and by when — the four-day delay before anyone with authority saw the note suggests no pre-decided reporting timeline was in place
>
> **C)** How the workflow gets stopped — if the answer to "who can halt this immediately" is "we'd have to ask the person who set it up," then every additional response since Tuesday is fresh damage; the workflow is still running
>
> **D)** What is already out — the team does not yet know how many responses were affected, which means the scope is still undefined

> [!success]- Reveal Answer (29A)
> **Correct: C**
>
> **Why C is correct:** The course: *"What is the fastest way to halt this workflow, who can do it, and does that person need permission? If the honest answer is 'we would have to ask the person who set it up,' fix that first, because it makes every other step wait."* Every hour the workflow continues running produces more responses citing the wrong refund policy — more customers with incorrect information, more potential exposure. Decisions B, D, and even the map update (A) cannot be meaningfully acted on until the workflow is stopped. The first decision at design time was supposed to be: who can stop this, and can they act without permission?
>
> **Why A is wrong:** Updating the map is the last of the four decisions — it happens after stopping, scoping, and notifying. Critical and necessary, but not causing active damage right now.
>
> **Why B is wrong:** The delayed notification is a real failure. But a notification pathway being slow does not produce new wrong outputs every hour. The running workflow does.
>
> **Why D is wrong:** Scoping the damage is the second decision — essential and urgent, but secondary to stopping additional damage from accumulating. You cannot scope what keeps growing.

---

> [!question] Q29B — C17: Incident Scope
> ⏱ *(Included in the 4-minute budget above)*
>
> The team lead stops the workflow on Friday. She now asks: *"How many customer responses sent the wrong refund terms?"*
>
> What is the correct scope of the investigation?
>
> **A)** One response — the ticket the junior agent was working on when she noticed the problem
>
> **B)** All responses sent since last Tuesday, when the problem was first noticed
>
> **C)** All responses sent since the configuration was last updated — the wrong policy language may have been in the knowledge source for weeks or months before anyone noticed, because stale configuration produces no error message and no visible failure signal
>
> **D)** A random sample of the past 30 days as a reasonable risk-based starting point

> [!success]- Reveal Answer (29B)
> **Correct: C**
>
> **Why C is correct:** The course: *"Not 'did this one output go wrong' but how many outputs did this affect, and where did they go? A stale configuration does not produce one bad result. It produces every result since it went stale, and nobody notices which day that was."* The knowledge source containing the 30-day policy language was not updated when the policy changed. It could have gone stale days, weeks, or months before Tuesday. Every response sent since that configuration went stale potentially carries the wrong information. The investigation must trace back to the last known-correct update of the knowledge source.
>
> **Why A is wrong:** The agent noticed the problem on one ticket. She did not cause it. The underlying configuration failure predates that observation.
>
> **Why B is wrong:** Tuesday is when a human noticed the symptom. Stale configuration produces no visible failure moment. The actual scope begins when the configuration went stale — which may be significantly earlier than Tuesday.
>
> **Why D is wrong:** A 30-day sample may miss the start of the problem entirely. The course is explicit that the scope question must be answered systematically, not by sampling. *"A stale configuration does not produce one bad result."*

---

> [!question] Q30 — C18: Say What It Does — Name the Gate
> ⏱ **90 seconds**
>
> A team lead at a law firm describes their AI-assisted due diligence workflow to three audiences in one day, producing three different descriptions. One of the three drops the human gate.
>
> > **Description 1 — to the senior partner:** *"Due diligence turnaround has gone from eight days to three, with the same sign-off standard. A senior associate reviews every output before it leaves the firm."*
> >
> > **Description 2 — to the risk committee:** *"The AI handles the document extraction and initial risk flagging. Anything flagged is reviewed by a qualified associate before it reaches the client."*
> >
> > **Description 3 — to the technology team:** *"The workflow uses a custom Skill for extraction, code execution for financial exposure calculation, and a named review gate at the final step where the associate confirms accuracy before client delivery."*
>
> Which description has the problem, and what specifically causes it?
>
> **A)** Description 1 — "the same sign-off standard" implies the AI output is equivalent to a human review, setting a standard the tool will eventually miss in front of a senior partner
>
> **B)** Description 2 — "AI handles" drops the full picture, and "anything flagged is reviewed" implies the AI decides what reaches review; anything the AI fails to flag bypasses the gate entirely, with no human ever seeing it
>
> **C)** Description 3 — "named review gate" is overly technical and may be misread by a future non-technical audience as an optional checkpoint
>
> **D)** Description 1 — the turnaround improvement (eight days to three) may not rest on a verified baseline, making the claim potentially undefendable

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Two failures compound in Description 2. First, *"AI handles the document extraction and initial risk flagging"* uses the phrase "AI handles" — the course warns: *"'AI handles X' drops the human gate out of the sentence. Whoever hears it now believes there is no gate."* Second, and more seriously: *"anything flagged is reviewed"* means the gate only covers what AI chose to surface. If the AI misses a risk and does not flag it, that item never reaches the associate. The gate is conditional on AI's flagging performance — which is precisely the kind of failure the gate is supposed to catch. The correct framing names what AI does, names the human checkpoint, and names what the workflow is designed to decline or escalate.
>
> **Why A is wrong:** Description 1 explicitly names the gate: *"A senior associate reviews every output before it leaves the firm."* The gate is present and unambiguous. "The same sign-off standard" refers to the human sign-off, not to the AI's output quality.
>
> **Why C is wrong:** Description 3 names the gate in precise terms appropriate for a technical audience (*"named review gate... associate confirms accuracy before client delivery"*). The course says the same workflow is described at three levels of detail — Description 3 is the technical version. Precision for a technical audience is correct.
>
> **Why D is wrong:** The baseline concern (Concept 16) is a separate issue from communication accuracy. The question asks which description drops the gate — that is a Concept 18 question. Description 1 retains the gate regardless of whether the eight-day baseline was measured.

---

> [!note] PART 2 COMPLETE — Full Test Done
> **30 questions | 60 minutes target**
>
> ---
>
> ### Post-Test Review Protocol
>
> **Step 1 — Score yourself:**
> - 27–30: Exam-ready
> - 23–26: Strong — review the concepts behind each miss
> - 18–22: Solid — re-read the relevant course sections before retesting
> - Below 18: Return to the crash course before retesting
>
> **Step 2 — Tag every error:**
> **C** = content (didn't know the concept) | **T** = timing (knew it, ran out of time) | **L** = language (misread the scenario)
>
> **Step 3 — Weakness map:**
> | Wrong Q | Concept | Error Type |
> |---------|---------|------------|
> | | | |
>
> ---
>
> ### Concept Quick-Reference
> | Concept | Core Rule |
> |---------|-----------|
> | C1 | Step = named owner + stated reason in advance. Session = judged afterwards. |
> | C2 | AI fills blank slots silently. "Where I have not told you, say so." |
> | C3 | If it matters, compute it. Written = computed on the page. Code block = proof. |
> | C4 | Window test = can everything be supplied? Passing = eligible, not owned. |
> | C5 | Three criteria: reversibility, stakes, accountability. Past performance is NOT a criterion. Strictest wins. |
> | C6 | Arithmetic ≠ low stakes. Flagging step column depends on whether anyone stands after it. |
> | C7 | Halo = credit carried forward. Unstaffed gate = collaborative on paper, automated in practice. Mapping the tool = hardest to see from inside. |
> | C8 | One named owner. Review date. Q2 asks about last week, not policy. Three controls fail silently. |
> | C9 | Description problem: better prompt fixes it. Feature problem: better prompt does not. |
> | C10 | Escalation = dependency (others rely on it). Manufacture = method stabilized. Different signals. |
> | C11 | Timing: first answer wrong = under-spec. Session degraded = context overload. Repeatable type = wrong feature. Used to work = stale config. |
> | C12 | Cheapest first. Step 5 reached first = excuse. Reached last = conclusion. |
> | C13 | Reaction = feels. Instruction = what + which lever. Cannot promote a reaction. |
> | C14 | Rule → standing instruction. Reference → knowledge base. Procedure → Skill. Memory is not configuration. |
> | C15 | Variance is invisible to individuals. Appears only at the reviewer. Consolidate first, then promote. |
> | C16 | Baseline must be measured BEFORE the change. Cannot reconstruct it afterwards. |
> | C17 | Four decisions at design time: stop, scope, tell, change the map. Stale config = many outputs affected. |
> | C18 | Say what it does. Name the gate. Say what it refuses. Gates explicit = more trust, not less. |
