---
tags:
  - CCAO-F
  - PCAO-F
  - exam-simulation
  - D4
  - D7
course: "Workflow Design & Diagnosis"
total_questions: 22
single_answer: 17
select_two: 5
time_limit: "26 minutes (≈70 sec per question)"
difficulty: hard
created: 2026-10-05
---

# Workflow Design & Diagnosis · Exam Simulation (22 Questions)

> [!warning] Exam Rules: follow them strictly
> - **Timer: 26 minutes total.** Start it before Question 1.
> - **No going back.** Once you open the next question, the last answer is locked.
> - **Do not open any answer** until all 22 are done. Write your answers on paper.
> - **90-second hard limit** per question. At 90 seconds, choose and move on.
> - Read the **last sentence first**, then the options, then the scenario.
> - Multi-select questions say **(Select TWO)**. Both picks must be right to score the point.

> [!info] Coverage
> **Domain 4 (Workflow Integration & Solution Design)**: Q3, Q5, Q6, Q9, Q10, Q12, Q13, Q14, Q15, Q17, Q22
> **Domain 7 (Troubleshooting & Optimization)**: Q2, Q4, Q7, Q8, Q11, Q16, Q18, Q19, Q20, Q21
> **Also mixes in D2 / D5**: Q1, Q16, Q21

---

## Question 1

A city library network is mapping its overdue-fines workflow. One step decides which members' fines are waived each month. Waivers are small, a wrongly waived fine can be charged again, and the branch manager answers for every waiver decision. Nothing after this step reviews it. The team has classed the step as AI-appropriate because it is reversible and low-stakes.

**What is wrong with that classification?**

- **A.** Nothing is wrong; two of the three criteria favour AI, so the step can be handed over.
- **B.** Waiver amounts must be calculated, so code execution should carry this step instead.
- **C.** The step is itself the manager's decision, so it stays human whatever the other two say.
- **D.** Claude has not run the step yet, so ownership cannot be settled until after a test run.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** The three criteria are not a score you add up. When they disagree, **the strictest one wins**. This step *is* the decision the manager answers for, and nothing after it carries that accountability. So it stays human, even though it is cheap and can be undone.
>
> **Why the others are wrong:**
> - **A**: This is the "majority vote" trap. Two yeses do not outvote the accountability criterion.
> - **B**: Mixes up *implementation* ("carried by") with *ownership*. "Must be computed" goes in the Carried-by column. It is never a reason to hand a step to AI.
> - **D**: Past or test performance is **not** a criterion. Ownership is decided before the work runs.
>
> **Concept:** 5 (Three criteria, strictest wins) · **Obj:** D4.4
> **Words:** *waive* = cancel a charge someone owes.

---

## Question 2 · (Select TWO)

A florist chain's associate has spent three hours in one Claude conversation inside the chain's product-copy Project, writing 40 product descriptions. In her first message she set two rules: at most 60 words, and never mention a price. The first 25 descriptions kept both rules. The later ones run long and quote prices.

**Which TWO actions are most appropriate? (Select TWO)**

- **A.** Switch to a more capable model for the remaining fifteen descriptions.
- **B.** Start a fresh session carrying a short summary of both rules.
- **C.** Repeat both rules firmly in the current conversation, then carry on writing.
- **D.** Save both rules as standing instructions in the product-copy Project.

> [!success]- Answer & Explanation
> **Correct: B and D**
>
> **Why B and D are right:** Timing gives the diagnosis. Output was **fine at first and then got worse** as the session grew. That is **context overload**: early instructions lose their force in a long conversation. The fix is to **restart from a summary** (B) or **persist the rules** so they apply to every run (D). Both rules are needed again, so D also stops it happening next time.
>
> **Why the others are wrong:**
> - **A**: Wrong rung of the ladder. The model did the job well for 25 items, so capability is not the problem. Switching tier is the move "from the bottom of the ladder".
> - **C**: Feels sensible, but she is still inside the overloaded session. A better prompt does not help, *"because the problem is not the prompt you just wrote."*
>
> **Concept:** 11, 12, 14 (Context overload → restart or persist) · **Obj:** D7.1

---

## Question 3

A ferry operator's commercial director stops the associate in a corridor and says: "We need a better view of how full our sailings are." The associate opens Claude to get started.

**Which first request is most appropriate?**

- **A.** Build a draft dashboard of sailing loads now, so the director can react to it.
- **B.** Fill any detail the director left out using common ferry-industry practice.
- **C.** Summarise what a sailing-load report usually contains, as a starting template.
- **D.** Turn the request into a task definition, marking each unanswered part as a question.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** "A better view" is not a requirement, because nobody can build it or test it. A **task definition** turns it into five settled answers: *what, for whom, how often, from what data, in what format*. Every slot that is still empty is **a clarifying question you owe the director, not a blank for the model to fill.**
>
> **Why the others are wrong:**
> - **A**: Jumps to *prototype* before the requirements exist. The build loop works on top of requirements. It does not replace them.
> - **B**: This is the exact failure the course warns about: slots *"close at likely-looking defaults."*
> - **C**: Gives a generic report shape, not *this* director's need. It is B dressed up as research.
>
> **Concept:** 2 (Requirements / task definition) · **Obj:** D4.1

---

## Question 4

A museum's learning team uses a Claude Project to produce worksheets for school visits. The worksheets were accurate from March onward. This month, several send pupils to rooms that no longer exist, because the galleries were renumbered in August. The problem appears in brand-new chats as well as old ones, and the prompts have not changed.

**What should the team check first?**

- **A.** The date of the gallery floor-plan file in the Project's knowledge base.
- **B.** Whether a more capable model gives correct room numbers on one worksheet.
- **C.** Whether the worksheet prompt names the room numbers each worksheet needs.
- **D.** Whether the chats are long enough that early instructions are being dropped.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** The signature is "**it used to work, now it does not**", with no error message. That points to **stale configuration**. The cheap confirmation is to *open the knowledge source and check its date*. The renumbering in August is the clue.
>
> **Why the others are wrong:**
> - **B**: No model knows your museum's new room numbers. The wrong cause, and an expensive check.
> - **C**: Would patch the symptom in every prompt, but the timing says the prompt was never the problem. It worked for months with the same prompt.
> - **D**: Ruled out because the problem appears **in brand-new chats**. Context overload needs a long session.
>
> **Concept:** 11 (Four causes by timing; stale configuration) · **Obj:** D7.1

---

## Question 5

A touring orchestra's finance associate has mapped the musicians' expense workflow. The finance officer releases the weekly payment batch after checking that the batch total matches the sum of the claim forms. She does not open individual claims.

| # | Step | Owner | Stated reason | Carried by |
|---|---|---|---|---|
| 1 | Check each claim form for missing receipts and return incomplete ones to the musician | AI | Reversible: the musician resubmits | Skill |
| 2 | Flag claims that break the touring expense policy | AI | Reversible; the policy is written down | Skill |
| 3 | Decide each flagged claim | Human | This step is the tour manager's call | Tour manager |
| 4 | Release the weekly payment batch | Human | Irreversible | Finance officer |

**Which one step's classification does NOT hold?**

- **A.** Step 1
- **B.** Step 2
- **C.** Step 3
- **D.** Step 4

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** A flagging step is AI-appropriate **only when somebody reads its output at the next step.** Here, the tour manager reads only the *flagged* claims. A claim that breaks policy but is **not** flagged goes straight into the batch. The finance officer checks only totals, and the money leaves. Nobody stands after the missed flag. The step should be **collaborative**. *"The step did not change. What changed is whether anybody is standing after it."*
>
> **Why the others are wrong:**
> - **A**: The output goes back to the musician, who sees it and resubmits. An error is cheap and visible.
> - **C**: Correct as written. It is the decision somebody answers for.
> - **D**: Correctly human because it cannot be undone. The officer checking only totals is the *reason* the step 2 problem slips through, but step 4's own classification holds.
>
> **Concept:** 6 (A flagging step moves column) · **Obj:** D4.4

---

## Question 6

A translation agency has used Claude for four months to pull client terminology from source files. The term lists have been accurate on every audited job. The operations lead now proposes that Claude also decide which jobs can skip the second-linguist quality check.

**What is the strongest objection to the proposal?**

- **A.** Four months is too short a record; the lead should wait for six months of audits.
- **B.** The project manager is accountable, so no step in this workflow can move to AI.
- **C.** Accurate term lists are evidence about extraction, not about the skip decision.
- **D.** The skip decision depends on job data, so code execution should carry it instead.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** This is **halo delegation**: handing a new step to AI because a *different* step went well. *"Drafting quality is evidence about the draft. It is not evidence about the decision."* Deciding to skip the quality check is a decision with real stakes, and nothing after it reviews the skipped jobs.
>
> **Why the others are wrong:**
> - **A**: Accepts the wrong logic and only argues about *how much* evidence. More months of good extraction still say nothing about the skip decision.
> - **B**: Too broad. Accountability does not freeze every step. Steps that produce inputs somebody judges can move to AI.
> - **D**: Confuses implementation with ownership again.
>
> **Concept:** 7 (Halo delegation / over-delegation) · **Obj:** D4.4

---

## Question 7 · (Select TWO)

A bakery wholesaler's planner is building an order-tracking artifact in Claude by asking for changes. Round 2 added a "flour needed this week" figure. It looks right, but it is about 4% below what the mill's invoices show. Round 3 asked for a layout that fits the delivery drivers' tablets, and it came back cramped.

**Which TWO statements are correct? (Select TWO)**

- **A.** The flour figure is a feature problem; it should come from code execution.
- **B.** Both rounds are description problems; a more detailed request fixes each.
- **C.** The tablet layout is a description problem; a clearer request should fix it.
- **D.** The flour error shows the artifact has outgrown prompt-and-iterate building.

> [!success]- Answer & Explanation
> **Correct: A and C**
>
> **Why A and C are right:** *Telling these two apart is the skill.* A **number that is slightly off** is the signature of a calculation written in prose. No amount of describing fixes it, so move it to **code execution** (A). A cramped layout is about what was asked for, so describing it better solves it (C).
>
> **Why the others are wrong:**
> - **B**: The common trap. It treats every failure as a prompt problem.
> - **D**: The escalation signal is **dependency**: other people relying on the tool. One wrong calculation is not that signal.
>
> **Concept:** 3, 9 (Computed not generated; description vs feature problem) · **Obj:** D4.3, D7.1

---

## Question 8

A credit union associate opens a new chat and asks Claude to summarise a 20-page board paper for the members' newsletter. The very first summary leaves out the two changes members care about most: a new loan fee and a branch closure. Her manager suggests moving straight to the most capable model.

**What should she check first?**

- **A.** Whether the Project's knowledge files were updated during this quarter.
- **B.** Whether a more capable model's summary includes the fee and the closure.
- **C.** Whether the conversation has grown long enough to lose early instructions.
- **D.** Whether her prompt told Claude what members would count as important.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** The output was **wrong from the first answer**, in a **new chat**. The first guess is **under-specification**, which is also the cheapest check. *"The summary keeps missing key points → name the criteria for what counts as key."*
>
> **Why the others are wrong:**
> - **A**: Stale configuration shows up as "used to work". There is no "used to" here.
> - **B**: The manager's instinct, and *"why is switching to a stronger model the wrong first move?"* It is a bottom-of-the-ladder move made before the top was checked.
> - **C**: Impossible on the first reply of a fresh chat.
>
> **Concept:** 11, 12 (Diagnostic sequence, cheapest first) · **Obj:** D7.1

---

## Question 9

A wedding-venue group is planning next year's Friday prices, and four steps are proposed for Claude. The owner has told only the general manager that one venue may be sold in spring, and has asked that this not be written down anywhere.

**Which step fails the window test?**

- **A.** Gathering this season's published Friday prices from rival venues, with links.
- **B.** Recommending how deep the Friday discount should be across the whole group.
- **C.** Computing last year's Friday occupancy rate from the bookings export file.
- **D.** Drafting the pricing note to the sales team once the discount is agreed.

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** The window test asks: *could I put everything this step needs in front of the model?* The discount depends on the planned sale, which **cannot be supplied, and the owner would not allow it.** A model missing an input does not stop. It fills the gap *"at the same confidence as the part it really computed."* This is the hiring-freeze case again.
>
> **Why the others are wrong:**
> - **A**: Current information goes **outside the model's knowledge**, but it *can* be supplied through web search with links you can open. It passes.
> - **C**: The data is in the export. It passes, and it is carried by code execution.
> - **D**: Every input exists once the discount is agreed. It passes.
>
> **Concept:** 4 (Window test / judgment step) · **Obj:** D4.2

---

## Question 10 · (Select TWO)

Read the delegation map extract below.

> *Workflow: decline letters for pet-insurance claims. Owner: claims team. Last reviewed: January. Next review: when needed. Step 4, collaborative: Claude drafts each decline letter from the assessor's decision; the senior handler reviews every letter before it is sent. Notes: since the new dental-cover product launched in June, decline letters have risen from about 30 to about 110 a week. The senior handler has also covered the phone queue since July. No complaints about letters have been received.*

It is now October.

**Which TWO actions should come first? (Select TWO)**

- **A.** Name one person as map owner and set a fixed date for the next review.
- **B.** Add a standing instruction telling Claude to flag doubtful letters for review.
- **C.** Move step 4 to a more capable model so that fewer letters need the review.
- **D.** Find out who reviewed decline letters last week and how long each one took.

> [!success]- Answer & Explanation
> **Correct: A and D**
>
> **Why A and D are right:** Volume nearly **quadrupled** and the reviewer has a second job. That is the classic set-up for an **unstaffed gate**. The review becomes a glance, then a click. Gates fail **with no signal**, so "no complaints" proves nothing. **D** is review question 2: *"who reviewed it last week, and how long did they spend?"*, the question that finds unstaffed gates. **A** fixes the map itself. "Claims team" is not an owner, and "when needed" is not a review date. The fix is *one named person and a date on the calendar.*
>
> **Why the others are wrong:**
> - **B**: Lets the AI decide which letters get reviewed, so the gate gives itself permission to be skipped.
> - **C**: Fixes nothing. The risk is the missing reviewer, not the drafting.
>
> **Concept:** 7, 8 (Unstaffed gate; map owner + scheduled read) · **Obj:** D4.4

---

## Question 11

A paint manufacturer's sales director wants Claude to state exactly how many litres a DIY chain will order in the first quarter. The associate has tightened the prompt twice, started a fresh session, tried the most capable model, and confirmed that the order history in the Project is current. Each run gives a different exact figure.

**What is the most appropriate next step?**

- **A.** Add five more years of order history and ask for the single most likely figure.
- **B.** Tell the director the tool cannot forecast orders, and build the forecast manually.
- **C.** Reframe the task as a range with stated assumptions the director can adjust.
- **D.** Ask Claude to reason step by step and commit to one figure it is confident in.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** All four cheaper causes have been ruled out in order: prompt, session, model, configuration. Now step 5 is a **conclusion, not an excuse**. This is an **expectation mismatch**, because one exact future number does not exist to be found. *The fix is to the task:* a range with stated assumptions, or a model of the drivers.
>
> **Why the others are wrong:**
> - **A**: Still asks for the impossible output, just with more data.
> - **B**: The **abandonment** option. The task can be reshaped. It does not have to be dropped.
> - **D**: "Confident" is not "correct". Asking for one confident number makes the false precision worse.
>
> **Concept:** 12 (Step 5: expectation mismatch) · **Obj:** D7.1, D7.2

---

## Question 12

An office-furniture rental firm built a Claude Skill that produces a polished three-option comparison table, and clients liked it. Every proposal now includes a "comparison" step, even single-item rentals where the client has already chosen the item. Proposal writers spend time inventing two extra options to fill the table.

**What is the most accurate diagnosis?**

- **A.** The Skill's instructions are stale and need a version for single-item rentals.
- **B.** This is halo delegation carried over from the Skill's success on larger bids.
- **C.** The comparison step is under-specified for clients who have already chosen.
- **D.** The workflow has been bent around the Skill rather than around the work.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** This is **mapping the tool instead of the work**. The step exists *because the Skill exists*, not because the work needs it. People are inventing options to feed the tool. *"It is the hardest of the three to see from inside, because the workflow really does use the tool well."*
>
> **Why the others are wrong:**
> - **A**: Nothing went out of date. The Skill does exactly what it was built to do.
> - **B**: Halo delegation means handing *ownership of a riskier step* to AI because of earlier success. No ownership moved here. A step was added.
> - **C**: The step should not exist for these clients at all. Specifying it better keeps the wrong step.
>
> **Concept:** 7 (Mapping the tool) · **Obj:** D4.4

---

## Question 13

A solar installer's operations lead asks Claude to read two years of job logs, work out summer demand growth, and recommend how many install crews to hire. The reply states 18% growth and recommends two extra crews. Both figures look plausible.

**What should she do before using the recommendation?**

- **A.** Have code execution compute the growth from the logs, then recommend from that.
- **B.** Ask Claude to show, in the reply text, how it arrived at the 18% figure.
- **C.** Compare the 18% with her own sense of last summer and accept it if close.
- **D.** Ask the same question again on the most capable model and compare answers.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** *"If a result matters, compute it. Never write it."* A hiring decision rests on the growth figure. A written figure and a calculated one look the same on the page. Separate **computation first, then recommendation**, with the assumptions shown.
>
> **Why the others are wrong:**
> - **B**: An explanation in prose is still prose. It can sound right and be invented.
> - **C**: A gut-feel check. "Close to what I expected" is how wrong numbers get through.
> - **D**: Two prose answers that agree are still unverified. It is a model change for a feature problem.
>
> **Concept:** 3 (Computed, not generated) · **Obj:** D4.2

---

## Question 14 · (Select TWO)

A school-catering company is bidding for a council contract. Claude has extracted every requirement from the 60-page tender into a table. Each row has a label, the source section, and whether the team's notes already answer it. The bid is due in nine days.

**Which TWO next requests add the most value? (Select TWO)**

- **A.** Condense the table into a one-page summary for the bid director.
- **B.** Mark which requirements two team members could read differently.
- **C.** Identify requirements the tender implies but never states directly.
- **D.** Confirm the table is complete and that no requirement was missed.

> [!success]- Answer & Explanation
> **Correct: B and C**
>
> **Why B and C are right:** *Extract, then attack.* Extraction finds what was **written**, not what was **meant**. The requirements that lose bids sit in ambiguous wording (B) and implied obligations (C). Catching them now costs one clarifying question. Catching them after the bid is built costs the bid.
>
> **Why the others are wrong:**
> - **A**: A summary throws away the source column, which is what lets others check the list. *Ask for structure, not a summary.*
> - **D**: Self-certification. The model confirming its own completeness is not a check.
>
> **Concept:** 2 (Extract, then attack the requirements) · **Obj:** D4.1

---

## Question 15

A school-uniform supplier's associate built a stock-checking artifact in Claude for her own use. Six months later, four branch managers use it every morning to decide reorders, and finance quotes its totals at month end. She still improves it by asking Claude for changes.

**What is the most appropriate next step?**

- **A.** Move it into a Project so every round of changes keeps the same background.
- **B.** Take it to developer or architect expertise, since others now depend on it.
- **C.** Turn it into a Skill, since she has refined it the same way several times.
- **D.** Add a banner asking users to double-check the totals before they act.

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** **Dependency is the escalation signal.** Other people make reorder and finance decisions from it, so it is now infrastructure. It needs uptime, access control, someone to call, and a guarantee it still works as it did in March. *Escalating is a correct answer, not an admission of failure.*
>
> **Why the others are wrong:**
> - **A**: A good practice for the build loop, but it keeps the tool in prompt-and-iterate after it has outgrown that.
> - **C**: Confuses the *other* signal ("solved the same way three times" means it can be manufactured). The signal here is who is exposed.
> - **D**: Pushes the risk onto users. A warning label does not replace engineering.
>
> **Concept:** 10 (Escalation signal) · **Obj:** D4.3

---

## Question 16

A dental laboratory's associate has found three fixes for the monthly remake report. First, remakes caused by courier damage must always be excluded. Second, the report must use the current list of partner clinics, which changes every few months. Third, the report is built in six steps that must run in the same order.

**Where should each fix live?**

- **A.** Exclusion → Skill; clinic list → standing instruction; six steps → knowledge base.
- **B.** Exclusion → knowledge base; clinic list → knowledge base; six steps → standing instruction.
- **C.** Exclusion → standing instruction; clinic list → knowledge base; six steps → Skill.
- **D.** Exclusion → standing instruction; clinic list → standing instruction; six steps → Skill.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** **Rule → standing instruction** (a limit that always applies). **Reference → knowledge base** (material the work reads). **Procedure → Skill** (ordered steps).
>
> **Why the others are wrong:**
> - **A**: Every fix is in the wrong home.
> - **B**: A six-step procedure pasted as a one-line instruction *"loses its steps."*
> - **D**: The trap for strong candidates. A changing list stuffed into a standing instruction *"bloats every prompt"*, and it is harder to update than replacing one file.
>
> **Concept:** 14 (Rule, reference, procedure) · **Obj:** D7.2, D5
> **Words:** *remake* = a dental item made again because the first one failed.

---

## Question 17

A commercial printer's sales proposal to a bank says: "Our AI handles proofing." In fact, Claude checks each proof against the client's brand rules, and a named proofreader approves every page before it goes to press. The bank's risk team will read the proposal.

**Which rewrite should replace the line?**

- **A.** Proofing is AI-assisted; a named proofreader approves every page before press.
- **B.** Our AI proofs every page and is as accurate as our trained proofreaders.
- **C.** Proofing is now fully automated, with a proofreader available for queries.
- **D.** Our proofreaders approve every page before press, as they always have done.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** *State what the tool does, then name the human checkpoint.* A risk function wants **one sentence about the control**, and A gives exactly that.
>
> **Why the others are wrong:**
> - **B**: "As good as a person" sets a standard the tool will eventually miss, in front of someone who remembers you said it.
> - **C**: "Fully automated" is untrue here, and an on-call proofreader is not a gate.
> - **D**: Hides the AI's role. Accurate means stating the AI's part *and* the gate, not removing one of them.
>
> **Concept:** 18 (Say what it does, name the gate) · **Obj:** D4.5

---

## Question 18

At a recruitment agency, four consultants write candidate summaries with Claude. Each runs three separate prompts (profile, strengths, risks) and pastes the same client brief into each one. Their summaries differ in structure, and the team lead spends Friday afternoons making them consistent.

**In what order should the friction be removed?**

- **A.** Build a Skill for each of the three prompts, then decide later whether to merge them.
- **B.** Ask each consultant to save their own best prompt, so that each stays consistent.
- **C.** Have the team lead write a format guide and email it to the consultants every week.
- **D.** Merge the three prompts into one, then move the brief and format into shared setup.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** The scenario shows all three friction signals: **repetition** (re-pasting the brief), **correction** (fixing structure), and **variance** (it lands on the team lead). **Consolidate first, then promote.** *"Promoting a step you were about to merge away is work you did not need to do."* Shared configuration (Skill + knowledge base) is what fixes variance.
>
> **Why the others are wrong:**
> - **A**: The order is backwards. It promotes three steps that should have been one.
> - **B**: Each person becomes consistent with *themselves*, so the variance between people remains.
> - **C**: A human workaround that depends on people remembering. It is not configuration.
>
> **Concept:** 15 (Friction signals; consolidate, then promote) · **Obj:** D7.3

---

## Question 19 · (Select TWO)

A facilities-cleaning contractor plans to redesign how supplier invoices are coded to cost centres. Claude will suggest each code and an accounts clerk will approve it. A miscoded invoice distorts client billing and has already led to disputes. The finance manager wants to switch to the new process next month and report "hours saved". Nobody has timed the current process.

**Which TWO actions are most appropriate before switching? (Select TWO)**

- **A.** Use hours saved as the main metric, since the redesign was approved to cut hours.
- **B.** Switch fully next month and keep the old process written down as a fallback.
- **C.** Run one cycle of the current process unchanged and record its time and errors.
- **D.** Choose coding accuracy as the main metric and run old and new side by side.

> [!success]- Answer & Explanation
> **Correct: C and D**
>
> **Why C and D are right:** **C**: A **baseline** must be measured *before* the change, because *"your estimate of the old way will flatter you."* **D**: Choose the metric that matches **why the workflow matters**. A finance output where errors cause disputes means **accuracy**, not time. A **parallel run** produces evidence, a fallback, and the agreement of the people whose work is changing.
>
> **Why the others are wrong:**
> - **A**: Time is the easiest metric, and here it is the wrong one.
> - **B**: Sounds careful because of the fallback, but it skips the parallel run, so there is no evidence the new way is better.
>
> **Concept:** 16 (Baseline, right metric, parallel run) · **Obj:** D7.3
> **Words:** *cost centre* = the department or budget a cost is charged to.

---

## Question 20

A football club's ticket office uses a Claude Project to draft refund replies, which staff send after a quick look. A fan points out that her reply quoted last season's refund policy. The team finds that the policy file in the knowledge base was not replaced when the new policy started six weeks ago. They have paused the workflow.

**What should they establish next?**

- **A.** Which staff member sent the fan's reply, so that the lapse can be addressed.
- **B.** How many replies went out in those six weeks, and to which fans.
- **C.** Whether a more capable model would have noticed that the policy was outdated.
- **D.** Whether the fan's reply can be withdrawn before she acts on what it says.

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** The workflow is stopped (decision 1). Next is **scope**: *"How many outputs did this affect, and where did they go?"* Stale configuration does not produce **one** bad result. It produces **every** result since it went stale.
>
> **Why the others are wrong:**
> - **A**: Blame before scope. Finding who sent it does not tell you who else was affected.
> - **C**: No model can know your policy changed. This is diagnosis theatre.
> - **D**: Treats the problem as one email. She already has it, and many other fans may too.
>
> **Concept:** 17 (Incident path: stop → scope → tell → change the map) · **Obj:** additive (PCAO-F)

---

## Question 21

A housing association's tenancy manager reviews Claude's draft replies to repair complaints and says they "feel cold". The associate works in a Project used by the whole tenancy team.

**Which response turns the reaction into an instruction and puts it where it will last?**

- **A.** A standing instruction: open each reply by restating the tenant's problem in their terms.
- **B.** A new message in today's chat asking Claude to make the replies sound much warmer.
- **C.** Uploading ten replies that tenants complained about to the knowledge base as examples.
- **D.** Switching the Project to a model whose default writing style is noticeably less formal.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** It does both jobs. It turns a **reaction** ("cold") into an **instruction** (what to change), and it places a **rule** in its correct home, a standing instruction the whole team gets.
>
> **Why the others are wrong:**
> - **B**: Still a reaction ("warmer"), and it is stuck in one chat. The next colleague starts from nothing.
> - **C**: Bad examples with no rule attached. The model may copy them rather than avoid them.
> - **D**: A lever you cannot name the reason for. *"If you cannot name the lever, the critique is still a reaction."*
>
> **Concept:** 13, 14 (Reaction → instruction; promotion) · **Obj:** D7.2

---

## Question 22

A veterinary group wants board approval to roll out a workflow. Claude drafts triage notes from reception calls, and a duty vet reviews each note before an appointment is booked. The board's risk committee will decide whether to trust the workflow at all. The associate's summary already states what Claude does and names the duty-vet check.

**What addition would most strengthen the summary for this audience?**

- **A.** The turnaround gain in minutes per call, as measured during the pilot.
- **B.** The model and product features used, so the committee can assess them.
- **C.** The call types the workflow declines and passes straight to a vet.
- **D.** The pilot result showing Claude's notes matched the vets' own notes.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** When the audience is *deciding whether to trust the workflow at all*, add the third clause: **say what it refuses.** Naming the declined cases proves *"the boundary was designed in advance rather than found by an incident."*
>
> **Why the others are wrong:**
> - **A**: The **executive's** detail (an outcome in units), not the risk committee's.
> - **B**: Product names are not a control. Risk audiences want the control.
> - **D**: A softer version of "as good as a person". It sets a standard the tool will miss later.
>
> **Concept:** 18 (Value, limits, and what it refuses) · **Obj:** D4.5

---

## Answer Key (check only after finishing)

> [!abstract]- Full Answer Key
> | Q | Ans | Concept | Q | Ans | Concept |
> |---|---|---|---|---|---|
> | 1 | C | Strictest criterion wins | 12 | D | Mapping the tool |
> | 2 | B, D | Context overload | 13 | A | Compute, don't write |
> | 3 | D | Task definition | 14 | B, C | Attack the requirements |
> | 4 | A | Stale configuration | 15 | B | Escalation signal |
> | 5 | B | Flag with nobody after it | 16 | C | Rule / reference / procedure |
> | 6 | C | Halo delegation | 17 | A | Name the gate |
> | 7 | A, C | Feature vs description | 18 | D | Consolidate → promote |
> | 8 | D | Under-specification first | 19 | C, D | Baseline + right metric |
> | 9 | B | Window test | 20 | B | Incident scope |
> | 10 | A, D | Unstaffed gate + map owner | 21 | A | Reaction → instruction |
> | 11 | C | Expectation mismatch | 22 | C | Say what it refuses |
>
> **Answer spread (single-answer items):** A ×4 · B ×4 · C ×5 · D ×4

## Score Yourself

| Score | Meaning |
|---|---|
| 20–22 | Exam-ready on D4/D7. Move to the next course. |
| 16–19 | Pass level (≈72%+). Review only the concepts you missed. |
| 12–15 | Borderline. Re-read the missed concepts, then retake in 3 days. |
| ≤ 11 | Content gap. Re-read Parts 2 and 4 of the course before retrying. |

**For each wrong answer, tag the cause:**
- **[C] Content**: I did not know the concept.
- **[T] Time / reading**: I knew it but misread the question or ran out of time.

> [!tip] Next step
> Write your tags here, then compare: if most are **[T]**, the problem is reading strategy, not knowledge (see `MASTER-PLAN-PIAIC-RETAKE.md`, Part 4).
>
> My score: ___ / 22  ·  Time used: ___ min  ·  [C] count: ___  ·  [T] count: ___
