# Just Delegate It — PRACTICE QUESTIONS
# Part 1: The Shift (Concepts 1-3 + Delegation Loop)

> **How to use:** Read the scenario. Pick your answer. THEN reveal the explanation.
> These questions test the same concepts as Part 1 of the Scenario Guide — at exam difficulty.
>
> **Scoring:** 6/8 or higher = solid. Below 5 = re-read the Scenario Guide Part 1.

---

### Question 1 · Concept 1 · D1

A junior data analyst needs to understand their company's employee attrition trends. They open Claude and type: "What are the main reasons employees leave companies?"

Claude gives a well-organized list: compensation, career growth, work-life balance, management quality, and company culture — with a paragraph explaining each.

The analyst reads it, nods, and starts building a presentation slide from scratch using the information. What is the primary problem with this approach?

**A.** Claude's information about attrition is likely outdated and unreliable.

**B.** The analyst asked a question instead of giving a job — they got general advice instead of a checkable deliverable tailored to their company's situation.

**C.** The analyst should have used a more capable model for HR-related topics.

**D.** The analyst should have asked Claude to build the entire presentation instead of just listing reasons.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The analyst asked a QUESTION ("what are the main reasons...") and got ADVICE — a generic list that applies to any company. The work of turning this into something useful for THEIR company (finding their own data, building the slide, checking which reasons apply) is still entirely on the analyst. A JOB would have been: "Here is our company's exit interview data from the last 12 months [pasted]. Identify the top 3 attrition reasons from this data, in a table with: reason, number of employees who cited it, and one direct quote from the interviews. Mark anything you inferred rather than found directly." That gives a checkable result.
>
> **Why A is wrong:** General knowledge about why employees leave companies is stable — it doesn't change month to month. The issue isn't data freshness; it's that the analyst got generic advice instead of a company-specific result.
>
> **Why C is wrong:** Model capability is irrelevant here. Any model, given this question, would produce the same generic list. The problem is the PROMPT type (question vs job), not the model.
>
> **Why D is wrong:** Asking for the "entire presentation" without providing company data would just produce a generic presentation. The fix isn't to ask for MORE — it's to ask for a RESULT based on THEIR data.

---

### Question 2 · Concept 1 · D1

Nida sends Claude two messages for the same task. Which one is a job?

**Message X:** "I need to understand the differences between project management methodologies. Can you explain Agile, Waterfall, and Hybrid approaches, including when each is most appropriate? Also mention the pros and cons."

**Message Y:** "Compare Agile, Waterfall, and Hybrid project management for a 6-month software project with a fixed deadline and changing requirements. Table: methodology, fit for fixed deadline (good/poor), fit for changing requirements (good/poor), main risk, and your recommendation with one sentence explaining why."

**A.** Message X is the job — it's more detailed and covers more ground.

**B.** Message Y is the job — it asks for a specific result (a comparison table with a recommendation) that can be checked against the stated criteria.

**C.** Both are jobs — they both ask Claude to produce something about project management.

**D.** Neither is a job — a real job would require uploading project documents.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Message Y asks for a THING TO EXIST — a comparison table with named columns, applied to a specific situation (6-month project, fixed deadline, changing requirements), ending in a recommendation with reasoning. Someone else could look at the result and say "this is done" or "this needs fixing." That's the test for a job. Message X asks for an EXPLANATION — Claude will teach Nida about methodologies, and all the work of applying that to her project stays with her.
>
> **Why A is wrong:** This is the "length = quality" trap. Message X is longer and covers more ground, but it's still a question. It asks Claude to EXPLAIN, not to PRODUCE a checkable result. Length doesn't make a question into a job.
>
> **Why C is wrong:** Producing text is not the same as producing a result. Message X produces an explanation (advice). Message Y produces a comparison (a deliverable). The test: can someone else check it? X can only be checked by reading it yourself. Y can be checked against the criteria (does the recommendation match the constraints?).
>
> **Why D is wrong:** A job doesn't require document uploads. It requires asking for a thing to exist. Nida gave enough context in Message Y for Claude to produce a checkable comparison.

---

### Question 3 · Concept 2 · D1

Zain needs Claude to help him find a good internet service provider for his office. He writes:

> "Go to PTCL's website and check their corporate plans. Then go to Nayatel's website and check their fiber plans. Then go to StormFiber and check their business packages. For each, copy the price, speed, and contract length into a table. Then tell me which is cheapest."

Claude struggles with browsing specific websites, gives partial results, and the final table only has two of the three providers because StormFiber's website structure confused it. What is the most likely root cause of the poor result?

**A.** Claude cannot browse the internet — the associate should have used Research mode.

**B.** The associate wrote a recipe that limited Claude to three specific sources and dictated every step — so when one step failed, the whole approach broke. An outcome-based prompt would have let Claude find the information through any available path.

**C.** The associate needed to provide the URLs for each website to help Claude navigate.

**D.** Internet provider comparisons are too complex for AI and should be done manually.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The associate dictated CLICKS (go to this site, then that site, then copy this). When one click failed (StormFiber's site), the whole recipe broke. An OUTCOME prompt like "Compare corporate internet plans available in [city] from at least 3 providers. Table: provider, speed, monthly price, contract length, and source link" would have let Claude search freely. If one path failed, it could find another. The plan was the ceiling — and the plan broke.
>
> **Why A is wrong:** While Research mode might help, the root cause isn't the feature — it's the approach. Even with Research mode, a rigid step-by-step recipe that fails on one step still fails. The fix is the prompt approach (outcome vs recipe), not the feature toggle.
>
> **Why C is wrong:** Providing URLs doesn't fix the fundamental problem. If the URL structure changes or the page layout confuses Claude, the same failure occurs. The issue is depending on a specific path instead of describing the desired result.
>
> **Why D is wrong:** This is the "wasteful/abandon" trap. ISP comparisons are straightforward for AI when asked properly. The task failed because of the recipe approach, not the task's complexity.

---

### Question 4 · Concept 2 · D1

A finance associate needs Claude to process the last quarter's expense reports. The company's accounting system requires expenses to be categorized in a specific order: first by department, then by expense type, then sorted by date within each type. Which prompt approach is most appropriate?

**A.** Describe only the outcome: "Organize the expenses in a useful way."

**B.** Describe the outcome with the required order as a constraint: "Categorize these expenses first by department, then by expense type within each department, then sorted by date within each type. This order is required by our accounting system."

**C.** Give a pure recipe: "Step 1: Read each expense. Step 2: Find the department. Step 3: Create a department bucket. Step 4: Within each bucket, find the expense type..."

**D.** Skip Claude entirely — accounting processes are too rigid for AI.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the exception where steps DO belong in the prompt — because the specific order is a REQUIREMENT from the accounting system, not nervousness. But notice: the prompt states the order as a CONSTRAINT ("this order is required by our accounting system"), not as a recipe of micro-steps. The outcome is clear (categorized expenses), the constraint is real (specific order required by the system), and AI is free to figure out HOW to sort and categorize.
>
> **Why A is wrong:** "In a useful way" leaves the required order to AI's judgment. But the accounting system requires a SPECIFIC order — this isn't a judgment call. When the order is a real requirement, you must state it.
>
> **Why C is wrong:** The recipe breaks the task into unnecessarily tiny steps. "Read each expense, find the department, create a bucket..." is dictating HOW to do something any AI can figure out. The constraint (the required order) is what matters, not the micro-procedure.
>
> **Why D is wrong:** The "abandon" trap. AI handles structured data categorization well — especially when given clear rules for the structure.

---

### Question 5 · Concept 3 · D1

Fatima asks Claude to help choose a catering company for a corporate event. Her prompt:

> "Find the best catering company in Lahore for 100 guests. We need halal food, a mix of Pakistani and continental options, and a budget under PKR 300,000. Give me a table comparing at least 3 options."

Claude produces a comparison table. The recommendation says "Royal Caterers" is the best choice. Fatima's boss asks: "Why did it pick Royal Caterers? Was it the cheapest, the highest-rated, or the one with the best menu?" Fatima doesn't know — Claude decided silently.

Which line of the Delegation Brief was missing from Fatima's prompt?

**A.** Context — Fatima didn't give enough background about the event.

**B.** Constraints — the budget and dietary requirements were unclear.

**C.** Authority — Fatima didn't specify what AI may decide alone or what criteria to use for the recommendation.

**D.** Verification — Fatima didn't say what she would check before accepting.

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Fatima's prompt had a clear outcome (compare catering companies), good constraints (halal, 100 guests, PKR 300K budget, mixed cuisine), and a deliverable (table with 3+ options). What it DIDN'T have was an Authority line telling Claude what to prioritize when recommending. Claude silently chose "Royal Caterers" based on criteria Fatima never approved. An Authority line like: "If recommending one, prioritize food quality over price. Say which criterion you used to pick the winner" would have made the decision visible.
>
> **Why A is wrong:** The context is adequate — the event type (corporate), location (Lahore), guest count (100), and dietary needs (halal, mixed cuisine) are all there. More context could help, but the missing line is Authority, not Context.
>
> **Why B is wrong:** The constraints ARE clear — PKR 300K budget, halal, 100 guests, Pakistani and continental. The budget and dietary requirements are explicitly stated. The problem isn't missing limits; it's missing decision criteria.
>
> **Why D is wrong:** Verification is also missing (Fatima didn't say what she'd check), but the BOSS'S question — "why did it pick this one?" — points directly at Authority. The silent decision is the immediate problem. (On the real exam, you'd pick the MOST directly relevant missing line.)

---

### Question 6 · Concept 3 · D1

An associate writes the following in a Delegation Brief for comparing two project management tools:

> "Authority: The software must integrate with our existing Slack workspace. Do not recommend any tool that costs more than $15/user/month."

What is wrong with this Authority line?

**A.** Nothing — this is a well-written Authority line with clear boundaries.

**B.** These are Constraints (limits on the job), not Authority (what AI may decide). The Authority line should say what decisions AI can make on its own, like "Choose the evaluation criteria yourself. If both tools are similar on features, recommend the cheaper one without asking me."

**C.** The Authority line is too restrictive — it should give AI more freedom.

**D.** The Authority line should include a verification step about checking the prices.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** "Must integrate with Slack" is a REQUIREMENT — a wall the job can't go past. "Don't recommend over $15/user" is a LIMIT — another wall. Both are CONSTRAINTS. They RESTRICT. Authority is different — it PERMITS a decision. "Choose the evaluation criteria yourself" gives AI a door to walk through. "If both are similar, pick the cheaper one" is a decision AI may make without asking. Fatima's two lines belong in Constraints, not Authority.
>
> **Constraint = wall.** Don't go past this.
> **Authority = door.** You may go through this, and tell me when you do.
>
> **Why A is wrong:** These lines are correctly written but in the WRONG section. The content is fine — Slack integration and budget cap are real requirements. They just belong under Constraints, not Authority.
>
> **Why C is wrong:** The issue isn't the level of restriction — it's the line placement. Constraints restrict. Authority permits. These lines restrict, so they're constraints.
>
> **Why D is wrong:** Verification is a separate brief line, not part of Authority. While checking prices is important, that belongs in the Verification line.

---

### Question 7 · Delegation Loop · D2

Ahmed uses Claude to draft a competitive analysis report. After receiving the draft, he reads through it and thinks: "This looks comprehensive and well-written." He forwards it to his director for the Monday strategy meeting.

The director opens the report in the meeting and points out that a competitor's market share figure is wrong — it says 23% when the competitor's own annual report says 18%. The director asks Ahmed: "Where did this number come from?"

Which step of the Delegation Loop did Ahmed skip?

**A.** Define — Ahmed didn't describe the outcome clearly enough.

**B.** Delegate — Ahmed should have given Claude more context about the competitors.

**C.** Intervene — Ahmed should have corrected Claude's approach during the drafting.

**D.** Verify — Ahmed read the report but never checked the claims that mattered against their actual sources.

> [!success]- Reveal Answer
> **Correct: D**
>
> **Why D is correct:** Ahmed READ the report (Observe step — he let AI work and looked at the result). But he didn't VERIFY — he never checked the specific claims against their sources. "Looks comprehensive and well-written" is READING. Opening the competitor's annual report and finding the actual market share figure is VERIFYING. The 23% vs 18% error would have been caught in 2 minutes of verification. Instead, it was caught by the director in front of the strategy team.
>
> **Why A is wrong:** Define might have been fine — the report was comprehensive and on-topic, suggesting the outcome was described well enough. The problem wasn't what Ahmed asked for; it's that he didn't check what he got.
>
> **Why B is wrong:** Claude produced a relevant competitive analysis, so the delegation was adequate. More context might have helped, but the critical failure was after the result came back, not before.
>
> **Why C is wrong:** Intervene is for when AI drifts off course during the work. The report was on-topic and well-structured — it didn't drift. It just had a wrong number that Ahmed should have caught in the Verify step.

---

### Question 8 · Delegation Loop · D6 · 〔Select TWO〕

Sana, a marketing team lead, uses Claude to generate a monthly performance report. The report includes metrics pulled from the team's dashboard, trend analysis, and strategic recommendations. Sana reviews the report carefully, verifies the key metrics against the dashboard, corrects one number, and presents it to the VP of Marketing.

The VP asks: "This recommendation to increase social media spend by 40% — is that your recommendation or the AI's?"

Which TWO of the following statements are correct?

**A.** The recommendation belongs to Claude — Sana should tell the VP that AI generated it and let the VP decide whether to trust it.

**B.** The recommendation belongs to Sana — once she verified and accepted the report, her name is on it. She should be prepared to explain and defend the reasoning, whether she wrote it or Claude did.

**C.** Sana should have removed the recommendation section entirely since AI shouldn't make strategic suggestions.

**D.** Sana should be transparent that AI assisted in generating the report, AND she should be able to explain the reasoning behind the recommendation — because accountability doesn't transfer to AI, but transparency about the process is also good practice.

> [!success]- Reveal Answer
> **Correct: B and D**
>
> **Why B is correct:** This is the accountability rule from the Delegation Loop. Sana VERIFIED the metrics, CORRECTED a number, and ACCEPTED the result. The moment she presents it, it's hers. "Claude made this recommendation" is not a defense if the recommendation is bad. She's accountable for everything she presents — including recommendations she chose to keep rather than edit or remove.
>
> **Why D is correct:** Transparency about AI assistance is good practice — it's honest communication about the process. But transparency is ADDED TO accountability, not a REPLACEMENT for it. Sana can say "I used AI to help draft this report, and here's why the 40% increase makes sense based on our Q2 data." That's transparent AND accountable.
>
> **Why A is wrong:** "The AI recommended it" shifts accountability to Claude, which is exactly what the Delegation Loop says you cannot do. AI doing the work does not transfer accountability to AI. Sana verified, accepted, and presented — it's hers.
>
> **Why C is wrong:** The "wasteful/abandon" trap. AI can make useful strategic suggestions — the issue is whether the HUMAN reviewed, verified, and can defend the reasoning. Removing all AI suggestions because "AI shouldn't make strategic suggestions" wastes valuable analysis.

---

## Score Yourself

| Score | Assessment |
|---|---|
| **7-8 correct** | Solid — Part 1 concepts are locked in. Move to Part 2 Scenario Guide. |
| **5-6 correct** | Okay — re-read the concepts you missed, then try Part 2. |
| **Below 5** | Re-read Scenario Guide Part 1, especially the EXAM TRAP sections. Then retry these questions. |

### Quick Review: Which concept did each question test?

| Q | Concept | The key principle |
|---|---------|-------------------|
| 1 | C1: Asking vs Job | A question gets advice. A job gets a checkable result. |
| 2 | C1: Asking vs Job | Length ≠ job. The test: does it ask for a thing to exist? |
| 3 | C2: Outcome vs Clicks | A recipe makes YOUR plan the ceiling. An outcome lets AI search freely. |
| 4 | C2: Outcome vs Clicks | Steps are OK when they're real CONSTRAINTS, not nervousness. |
| 5 | C3: Brief | Silent decisions = missing Authority line. |
| 6 | C3: Brief | Constraints RESTRICT (walls). Authority PERMITS (doors). |
| 7 | Loop: Verify | "Looks good" = reading. Checking the source = verifying. |
| 8 | Loop: Accountability | Accountability never transfers. Transparency adds to it, doesn't replace it. |
