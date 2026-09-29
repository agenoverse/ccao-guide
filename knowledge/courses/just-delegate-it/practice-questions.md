---
type: Document
title: "Just Delegate It: Practice Questions"
description: "Exam-difficulty practice questions covering all 11 concepts and the Delegation Loop across Parts 1, 2, and 3-4."
status: stable
generated:
  by: human:shazilk-dev
  at: "2026-09-29T11:30:34Z"
ksor:
  audience: [public]
  owner: human:shazilk-dev
  approval:
    by: human:shazilk-dev
    at: "2026-09-29T11:30:34Z"
order: 18
---

---

# Just Delegate It — PRACTICE QUESTIONS

---

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

**A.** The analyst should first confirm that Claude's general claims reflect the company's current workforce and industry context.

**B.** The analyst asked for a general explanation, not a checkable result grounded in the company's own evidence.

**C.** The analyst should use a stronger model because employee attrition is a specialist HR topic.

**D.** The analyst should ask for a complete presentation so Claude, rather than the analyst, does the remaining work.

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

**A.** Message X is the job because it supplies more background, asks more subquestions, and covers more methodologies.

**B.** Message Y is the job because it requests a defined comparison that can be checked against named criteria.

**C.** Both are jobs because both messages ask Claude to produce useful project-management content rather than only answer yes or no.

**D.** Neither is a job because a real delegation requires project documents before Claude can produce a trustworthy result.

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

**A.** The associate selected the wrong browsing capability; Research mode should have been used for this multi-site comparison.

**B.** The recipe fixed the sources and steps, so one failed path broke the result; an outcome prompt would leave the search method open.

**C.** The associate needed to provide direct URLs because precise links would make each required browsing step dependable.

**D.** The comparison is too complex for this workflow, so the associate should gather and compare the plans manually.

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

**A.** Describe only the outcome: "Organize the expenses in a useful way," and let Claude choose the accounting order.

**B.** State the accounting order as a constraint, while leaving the internal sorting method to Claude.

**C.** Give a detailed recipe: "Read each expense, create department buckets, create type buckets, then sort each bucket by date," so no step is left implicit.

**D.** Skip Claude entirely because a rigid accounting process leaves no useful role for an AI assistant.

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

**A.** Context, because she did not explain the event's audience, schedule, or business purpose in enough detail.

**B.** Constraints, because the budget and menu requirements did not say which trade-offs mattered most.

**C.** Authority, because the prompt did not say what decision AI could make or how it should justify that choice.

**D.** Verification, because Fatima did not list the checks she would perform before sending the recommendation to her boss.

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

**A.** Nothing is wrong; the lines define firm decision boundaries, which is exactly what Authority is meant to do.

**B.** They are Constraints, not Authority; Authority should grant a decision, such as choosing criteria or breaking a tie.

**C.** The Authority line is too restrictive; useful delegation requires allowing AI to select and recommend a tool freely.

**D.** The Authority line should include a verification instruction requiring the prices and integrations to be checked before use.

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

**A.** Define, because the report brief did not state the required evidence standard for market-share claims clearly enough.

**B.** Delegate, because the handoff lacked enough competitor context for Claude to produce a reliable analysis.

**C.** Intervene, because Ahmed should have redirected Claude when the draft's research approach began to drift.

**D.** Verify, because he read the report but did not trace its important claims to their sources.

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

**A.** The recommendation belongs to Claude; Sana should disclose that fact and let the VP decide whether it is trustworthy.

**B.** The recommendation belongs to Sana once she verifies, accepts, and presents it; she must be able to defend its reasoning.

**C.** Sana should remove the recommendation because AI should not make strategic suggestions, even after human review.

**D.** Sana should disclose AI assistance and explain the recommendation; transparency adds to, but does not replace, her accountability.

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

| Score           | Assessment                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------- |
| **7-8 correct** | Solid — Part 1 concepts are locked in. Move to Part 2 Scenario Guide.                         |
| **5-6 correct** | Okay — re-read the concepts you missed, then try Part 2.                                      |
| **Below 5**     | Re-read Scenario Guide Part 1, especially the EXAM TRAP sections. Then retry these questions. |

### Quick Review: Which concept did each question test?

| Q   | Concept               | The key principle                                                            |
| --- | --------------------- | ---------------------------------------------------------------------------- |
| 1   | C1: Asking vs Job     | A question gets advice. A job gets a checkable result.                       |
| 2   | C1: Asking vs Job     | Length ≠ job. The test: does it ask for a thing to exist?                    |
| 3   | C2: Outcome vs Clicks | A recipe makes YOUR plan the ceiling. An outcome lets AI search freely.      |
| 4   | C2: Outcome vs Clicks | Steps are OK when they're real CONSTRAINTS, not nervousness.                 |
| 5   | C3: Brief             | Silent decisions = missing Authority line.                                   |
| 6   | C3: Brief             | Constraints RESTRICT (walls). Authority PERMITS (doors).                     |
| 7   | Loop: Verify          | "Looks good" = reading. Checking the source = verifying.                     |
| 8   | Loop: Accountability  | Accountability never transfers. Transparency adds to it, doesn't replace it. |

# Part 2: The Controls (Need First Then Tool + Concepts 4-6)

> **How to use:** Read the scenario. Pick your answer. THEN reveal the explanation.
> These questions test the same concepts as Part 2 of the Scenario Guide — at exam difficulty.
>
> **Scoring:** 6/8 or higher = solid. Below 5 = re-read the Scenario Guide Part 2.

---

### Question 1 · Need First Then Tool · D3

A new marketing associate just got access to Claude. Their manager says: "Before you start any real work, spend a day going through every feature — Research mode, Projects, system prompts, Artifacts, analysis tool, custom instructions, integrations. Learn them all so you're ready."

Another associate on the same team takes a different approach: they start with their first real task (a competitor comparison), discover they need web data Claude doesn't have, then learn Research mode because the job demands it.

Which approach is more likely to result in effective AI use?

**A.** The first approach is better because broad feature knowledge prevents the associate from overlooking a useful control later.

**B.** The second approach ties each feature to a real need, so the associate learns when and why it matters.

**C.** Both approaches are equally effective because feature knowledge and hands-on practice develop the same practical judgment.

**D.** Neither approach is sufficient; the associate should complete formal training before handling any real client work.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the "Need First, Then Tool" framework. The second associate hits a real wall (no web data for competitor comparison), discovers a real need (fresh information Claude doesn't have from training), and then learns the right control (Research mode). Now Research mode has context — it's tied to a problem they understand. The first associate learns features as abstract capabilities with no job to anchor them to. A week later, when they need Research mode, they've forgotten half of what they learned because it was disconnected from real work.
>
> **Why A is wrong:** This is the "learn everything first" trap. Feature knowledge without job context fades fast. The associate will remember that Research mode exists but not when to reach for it — because they never hit the wall that makes it necessary.
>
> **Why C is wrong:** This isn't a learning-style preference — it's about retention and application. Research consistently shows that learning tied to immediate need (contextual learning) produces stronger, more durable understanding than abstract pre-learning.
>
> **Why D is wrong:** The "abandon/wasteful" trap. Formal training isn't necessary for tools designed to be learned through use. Waiting for a course delays productive work unnecessarily.

---

### Question 2 · Concept 4 (Research) · D3

Tariq asks Claude to find current venue pricing for a corporate event in Islamabad. Claude provides a detailed response with five venues, their prices, capacity, and amenities — all presented confidently with specific PKR amounts.

Which of the following is MOST important for Tariq to understand about this result?

**A.** The detail and confidence make the result plausible, but Tariq still needs to check each price against a current source.

**B.** The result may mix remembered and searched facts; source links, dates, and explicit UNVERIFIED labels are needed to tell them apart.

**C.** Specific PKR amounts strongly suggest a live lookup because remembered information rarely includes precise current prices.

**D.** Tariq can ask Claude whether the prices are current and treat a confident confirmation as sufficient unless a price seems unusual.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the remembered vs searched distinction from Concept 4. Claude's training data contains old venue information. Research mode might find current data. The result Tariq sees could be a MIX of both — some venues from memory, some from search — and there's no visible label saying which is which. The venue names might be real (from training data) but the prices outdated (also from training data, presented as if current). The TWO MAGIC SOURCE INSTRUCTIONS apply: (1) "Show the URL or document name you used for each row" and (2) "If you couldn't verify a figure, write UNVERIFIED instead of guessing."
>
> **Why A is wrong:** This is the PLAUSIBILITY TRAP — the most dangerous exam trap. Specific details and confident presentation make output FEEL accurate but prove nothing. Claude presents remembered data with the same confidence as searched data. Specificity ≠ accuracy.
>
> **Why C is wrong:** Specific PKR amounts prove nothing about recency. Claude's training data includes Pakistani venue pricing from years ago. It can confidently state "PKR 450,000 per event" from 2023 training data as if it were today's price. Numbers alone don't tell you when the data was gathered.
>
> **Why D is wrong:** This is the CIRCULAR VERIFICATION trap. Asking Claude to confirm its own output is AI checking itself — the same system that generated the (possibly wrong) answer is the one confirming it. Self-confirmation is not verification.

---

### Question 3 · Concept 4 (Research) · D3

An associate uses Claude with Research mode enabled to find statistics for a quarterly business report. Claude returns a response that includes:

- A market size figure with a link to a Statista page
- A growth rate with "Source: McKinsey Global Institute, 2024"
- A competitor revenue figure with no source mentioned

The associate includes all three figures in the report. Which statement about this result is MOST accurate?

**A.** The Statista link is enough for that figure because a working link demonstrates that Claude used a real source.

**B.** The McKinsey citation is enough because a reputable named institution would not be associated with an invented statistic.

**C.** Verify all three independently: links can be misquoted, citations can be invented, and no-source figures have no audit trail.

**D.** Remove the unsourced figure and retain the two cited figures, since a citation makes those figures sufficiently reliable for the report.

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** This question tests THREE traps at once:
>
> 1. **The link:** A URL doesn't mean the number on that page matches what Claude said. The link could be real but the figure misquoted, or the link could lead to a page that says something different. You must CLICK and CHECK.
> 2. **The citation:** "Source: McKinsey Global Institute, 2024" LOOKS authoritative, but Claude can HALLUCINATE citations — generate a real-sounding source name for a number it fabricated. Citation ≠ verification.
> 3. **The unsourced figure:** Obviously needs checking, but no MORE than the other two. It's just more honestly unchecked.
>
> All three need the same treatment: open the source, find the specific number, confirm it matches.
>
> **Why A is wrong:** Citation ≠ verification. A link is a POINTER, not proof. The link might be real but the quoted figure wrong. Or the link might be dead. You must follow the link and compare.
>
> **Why B is wrong:** Citation ≠ verification, even from prestigious sources. Claude can generate "McKinsey Global Institute, 2024" as text without that report existing or containing that number. The name "McKinsey" adds zero verification — it's just text Claude produced.
>
> **Why D is wrong:** Keeping cited figures without checking them is the citation trap. Having a citation makes a figure LOOK verified but doesn't MAKE it verified. The unsourced figure is at least honest about being unchecked. Removing only the honest one while keeping the falsely-credentialed ones is backwards.

---

### Question 4 · Concept 5 (Source) · D3

Amna's manager asks her to extract key discussion points from a long WhatsApp group chat about a client project. Amna plans to paste the chat into Claude for summarization. The chat contains:

- Client requirements discussed by the project team
- A team member's personal phone number shared in one message
- A joke about a competitor's CEO
- Internal budget (maaliyat / financial details) figures

Before pasting, what should Amna do FIRST?

**A.** Ask Claude to classify the privacy risk first, then remove only the material it identifies as sensitive.

**B.** Redact the phone number, joke, and budget before pasting; keep only material safe to show a new contractor on Day 1.

**C.** Paste everything with a confidentiality warning so Claude knows which passages must not be repeated or exposed.

**D.** Remove only the phone number; the budget and joke are work context, and Claude will not expose them externally.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the PRIVACY GATE from Concept 5. Before pasting ANYTHING into an AI tool, apply the test: "Would I show this to a new contractor on Day 1?" A personal phone number? No — that's someone's private data. A joke about a competitor's CEO? No — that's a liability (reputation risk / potential legal issue). Internal budget figures? No — those are confidential financials. Remove all three. What remains — the client requirements and project discussion points — is the actual work content Amna needs summarized.
>
> **Why A is wrong:** AI checking whether content is safe is CIRCULAR — the content is already exposed to AI the moment you paste it. The privacy decision must happen BEFORE the content enters any AI system. You can't un-paste something.
>
> **Why C is wrong:** A confidentiality (raazdaari / secret-keeping) instruction doesn't change what data the system has processed. Once pasted, the data has been sent to the AI service. "Don't share it" is a behavioral instruction, not a security control. The privacy gate happens before the paste, not after.
>
> **Why D is wrong:** Budget figures are confidential financials — exactly the kind of data you DON'T show a Day 1 contractor. The joke about a competitor's CEO is a reputational liability. Privacy protection isn't just about obviously personal data like phone numbers — it covers anything that shouldn't leave the team.

---

### Question 5 · Concept 5 (Source) · D6

A sales associate uses Claude to draft a proposal (tajweez / formal suggestion) for a potential client. The associate pastes in the client's RFP (Request for Proposal — the client's document explaining what they need and asking vendors to submit offers), the company's standard pricing sheet, and a previous proposal to a DIFFERENT client — including that other client's name, contract terms, and custom pricing.

What is the primary risk?

**A.** The proposal may be less focused because Claude has too much context and could spend attention on irrelevant prior work.

**B.** The associate exposed another client's confidential terms and pricing to the AI system, creating a client-confidentiality risk.

**C.** The previous proposal may cause Claude to copy the wrong prices or contract terms into the new client's draft.

**D.** The associate should have placed the material in a Project, where files and instructions would be easier to organize and reuse.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The other client's name, contract terms, and custom pricing are CONFIDENTIAL to that client relationship. Pasting them into an AI system — regardless of the system's privacy controls — creates exposure. If the current client somehow sees that another client got different pricing, or if the data surfaces through any channel, the company has a confidentiality breach on its hands. The privacy gate test: "Would I show Client A's custom pricing to Client B on Day 1?" Absolutely not. The fix: paste the previous proposal's STRUCTURE (as a template) but remove or redact (replace with [REDACTED] / [HIDDEN]) all client-specific details — name, pricing, terms.
>
> **Why A is wrong:** More context doesn't reduce quality — irrelevant or sensitive context creates risk. Claude can handle long inputs. The problem isn't volume; it's what the volume contains.
>
> **Why C is wrong:** Pricing confusion is a real risk but not the PRIMARY one. Wrong pricing in a draft is fixable in review. A confidentiality breach is not fixable after the fact.
>
> **Why D is wrong:** Projects vs chat is an organizational choice, not a privacy control. Moving the same confidential data into Projects doesn't make it less exposed — it's still in an AI system. The fix is removing the sensitive data, not changing where you paste it.

---

### Question 6 · Concept 6 (Deliverable) · D1

Rehan asks Claude to summarize a research report on renewable energy investment (sarmaya-kari / putting money into something to get returns) trends in Pakistan. Claude provides a clean 5-paragraph summary covering solar growth, wind potential, government incentives (raiyati imdad / government support to make something cheaper), regulatory barriers, and foreign investment trends.

The original report also contained two important caveats (ahem ihtiyati batein / important warning points):

1. The data excludes Balochistan due to incomplete reporting
2. The government incentive figures assume no policy changes after Q2 2025

Rehan's summary mentions neither caveat. He sends it to his investment committee. What went wrong?

**A.** Claude intentionally removed the caveats because it prioritized a clean narrative over details that looked secondary.

**B.** A default summary can drop caveats, so the deliverable needed an explicit instruction to preserve every limitation and qualification.

**C.** Rehan should have requested a longer summary because additional space makes it more likely that important caveats will remain.

**D.** This is mainly a model-capability issue; a more advanced model would reliably recognize and preserve the caveats.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the VANISHING CAVEAT problem from Concept 6. When you ask for a "summary," AI prioritizes the main narrative — findings, trends, conclusions. Caveats, footnotes, and qualifications are the first things to get compressed away because they look like secondary details. But for an investment committee, "this data excludes an entire province" and "these incentives assume no policy change" are CRITICAL qualifications that change the interpretation of every number. The fix is in the DELIVERABLE line: "Include every caveat (limitation/warning) from the original, even if it makes the summary longer."
>
> **Why A is wrong:** Claude doesn't "intentionally" remove anything. It follows the summarization instruction, which naturally compresses secondary elements. Caveats look like footnotes to a summarizer, so they're the first to go. It's default behavior, not a deliberate choice.
>
> **Why C is wrong:** Length doesn't guarantee completeness. A 10-paragraph summary could still drop the caveats if the instruction doesn't specifically protect them. The fix is specificity ("include every caveat"), not volume ("make it longer").
>
> **Why D is wrong:** This isn't a model capability issue — it's a prompt specificity issue. Any model summarizing a report will compress qualifications unless told to preserve them. Better models might be slightly more likely to keep them, but no model reliably preserves caveats without being asked.

---

### Question 7 · Concept 6 (Deliverable) · D1

An associate asks Claude: "What should I know about Pakistan's Data Protection Bill?"

Claude responds with a thorough explanation covering the bill's scope, key provisions, enforcement mechanisms, comparison with GDPR, and implications for businesses.

The associate needed a compliance checklist (ittibaa ki fehrist / a list of rules to follow) their company could actually use. Instead, they got a lecture. What was the most effective fix?

**A.** Ask a follow-up to reformat the existing explanation: "Can you turn that into a checklist?"

**B.** Ask for a purpose-built checklist with named columns, an audience, and PENDING for deadlines that depend on unfinished regulations.

**C.** Use a different model that specializes in structured compliance outputs and is more likely to format checklists correctly.

**D.** Use the explanation as-is because legal and compliance teams need background before they can act on a checklist.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The associate got an ANSWER when they needed a DELIVERABLE. An answer explains. A deliverable exists as a thing someone can use. The follow-up approach (Option A) works but is less effective — Claude has to transform an explanation it already built, which often produces a reformatted lecture rather than a purpose-built checklist. Starting with the right deliverable description produces a result designed from the ground up to be a checklist with actionable columns. Notice how B specifies: format (table), columns (requirement, action, deadline, status), audience (mid-size Pakistani tech company), and even a caveat protection ("if any deadline depends on unfinalized regulation, mark PENDING").
>
> **Why A is wrong:** Follow-ups work, but they're a band-aid. "Turn that into a checklist" asks Claude to reformat an explanation, not to build a checklist from scratch. The result is often an explanation wearing a checklist costume — reformatted paragraphs instead of truly actionable items. Starting right is better than starting over.
>
> **Why C is wrong:** Model selection doesn't fix a deliverable problem. Any model, given "what should I know about X," will produce an explanation. The issue is the prompt type, not the model.
>
> **Why D is wrong:** An explanation is valuable for learning, but the associate needed a TOOL for their compliance team. You can't hand a 5-paragraph essay to your legal department and say "check these boxes." The job required a different deliverable format.

---

### Question 8 · Concepts 4+5+6 Combined · D2/D3 · 〔Select TWO〕

Hira is building a market entry analysis for her company's expansion into a new city. She uses Claude with Research mode. Her prompt:

> "Research the retail market in Faisalabad. Find market size, top competitors, average rent for commercial space, consumer spending patterns, and any regulatory requirements. Put it all in a report I can present to the board."

Claude produces a polished 3-page report with all the requested sections, specific figures, and a professional tone. Hira reads through it and thinks it's excellent.

Which TWO steps should Hira take before presenting this to the board?

**A.** Ask Claude to confirm the report's accuracy, then accept its confirmation unless a board member challenges a figure.

**B.** Trace critical figures to their sources, and mark or replace any figure that cannot be traced.

**C.** Have a colleague review grammar and formatting, since a second reader is the best way to catch quality problems before the board meeting.

**D.** Check the prompt for confidential data and check forward whether unsupported claims could mislead or embarrass the company.

> [!success]- Reveal Answer
> **Correct: B and D**
>
> **Why B is correct:** This combines the research verification principles from Concepts 4 and 6. A board presentation with specific market figures carries high stakes — wrong numbers in front of the board damage credibility. Every critical figure needs source tracing: where did Claude get "average commercial rent is PKR X per sq ft"? If there's a link, click it and compare. If there's no source, the figure is unverified — either find a source independently or mark it UNVERIFIED in the report. Plausible-sounding numbers from AI are not board-ready without verification.
>
> **Why D is correct:** This combines the privacy gate (Concept 5) with the accountability principle. Two checks: (1) BACKWARD — did Hira paste any confidential company strategy, internal financials, or competitive intelligence into the prompt that shouldn't have been exposed to an AI system? (2) FORWARD — if any figure in the report is wrong and the board makes a decision based on it, can Hira defend where the data came from? Both checks happen before the presentation, not after.
>
> **Why A is wrong:** The CIRCULAR VERIFICATION trap. Claude confirming its own output is AI checking itself. The same system that might have hallucinated a market size figure will confidently say "yes, this is accurate." Self-confirmation is not verification.
>
> **Why C is wrong:** Grammar and formatting review is useful but misses the real risks. A perfectly formatted report with a hallucinated market size figure will pass grammar review without any red flags. The critical checks are data accuracy (B) and data safety (D), not presentation polish.

---

## Score Yourself

| Score           | Assessment                                                                                         |
| --------------- | -------------------------------------------------------------------------------------------------- |
| **7-8 correct** | Solid — Part 2 concepts are locked in. Move to Part 3 Scenario Guide.                              |
| **5-6 correct** | Okay — re-read the concepts you missed, especially the SOURCE and RESEARCH traps.                  |
| **Below 5**     | Re-read Scenario Guide Part 2, focusing on the Two Magic Source Instructions and the Privacy Gate. |

### Quick Review: Which concept did each question test?

| Q   | Concept                      | The key principle                                                                           |
| --- | ---------------------------- | ------------------------------------------------------------------------------------------- |
| 1   | Need First Then Tool         | Learn a feature when a job demands it, not before.                                          |
| 2   | C4: Research                 | Remembered vs searched — you can't tell which is which without checking.                    |
| 3   | C4: Research                 | Citation ≠ verification. Links ≠ verification. ALL figures need independent checking.       |
| 4   | C5: Source (Privacy)         | Privacy gate: would you show this to a Day 1 contractor? Remove before pasting.             |
| 5   | C5: Source (Confidentiality) | Other clients' data is never yours to share — redact before using as a template.            |
| 6   | C6: Deliverable              | Caveats vanish in summaries unless you explicitly protect them.                             |
| 7   | C6: Deliverable              | Answer ≠ deliverable. An answer explains; a deliverable is a thing someone can use.         |
| 8   | C4+C5+C6 Combined            | Board-ready = source-traced figures + privacy-checked inputs. AI self-check ≠ verification. |

# PART 3 — The Guardrails

---

### Question 1 · Concept 7 (Authority) · D6

Sana, a social media coordinator, sets up a Claude Project for managing her company's social media calendar. She writes in the Project Instructions:

> "You are our social media assistant. Create engaging posts, suggest hashtags, and schedule content across all platforms. Keep our brand voice professional but friendly."

Two weeks later, her manager notices that several posts have been going live without anyone reviewing them. One post used a trending hashtag that was actually associated with a political controversy (siyasi bahas / political argument). The company had to issue an apology (maafi naama / public sorry statement).

What was the root cause?

**A.** Claude should not be used for social media management because public-facing content is too risky to delegate.

**B.** "Schedule content" lacked a human-approval boundary; the missing rule was "Draft, do not publish or send."

**C.** The hashtag was unforeseeable, so no general instruction could have prevented this particular controversy.

**D.** Sana should have prohibited political hashtags; that targeted content rule would have prevented this incident without changing publishing authority.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the Authority boundary pattern "Draft not send." Sana's instructions said "schedule content" — which Claude interpreted as permission to finalize and queue posts without human review. The four boundary patterns from Concept 7 are: Research not purchase, Draft not send, Inspect not delete, Choose but say when. Sana needed: "Draft posts for my review. Never publish, schedule, or send anything without my explicit approval." The hashtag controversy was the SYMPTOM. The missing authority boundary was the CAUSE.
>
> **Why A is wrong:** The "abandon/wasteful" trap. AI is useful for social media drafting — the problem isn't the task, it's the missing guardrail. With "draft not send," the same setup works safely.
>
> **Why C is wrong:** The specific hashtag was unforeseeable, yes — but the GENERAL RISK of AI publishing unreviewed content was entirely foreseeable. Authority boundaries exist precisely because you can't predict every specific problem. "Draft not send" catches ALL publishing risks, not just political hashtags.
>
> **Why D is wrong:** "Avoid political content" is a content rule, not an authority boundary. It addresses one category of risk but misses the structural problem: AI was publishing without review. A post about a product could also go wrong (wrong price, wrong date, wrong claim). The fix is the review gate ("draft not send"), not a list of topics to avoid.

---

### Question 2 · Concept 7 (Authority) · D6

An associate configures a Claude Project to help manage vendor (supplier / saamaan bechne waala) communications. The Project Instructions include:

> "Authority: You may draft email responses to vendors. You may research vendor pricing. You may compare proposals. If a vendor asks for a discount above 10%, flag it for my review instead of responding."

Which authority boundary pattern is MISSING from these instructions?

**A.** Nothing is missing because the instructions cover drafting, research, comparisons, and exceptions requiring review.

**B.** Add the missing "Draft, do not send" wall; saying "draft" does not explicitly forbid direct sending.

**C.** Add a purchase budget because vendor pricing research could otherwise turn into an unauthorized buying decision.

**D.** Name the approved vendors because communication authority should be limited to a defined supplier list.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The instructions say Claude "may draft email responses" — but they never say Claude may NOT send them. This seems like a small distinction, but it's the exact gap from Concept 7. Authority works by creating both DOORS (what you may do) and WALLS (what you may not). "May draft" opens a door. But without "never send without my approval," there's no wall on the other side. If the system has email integration or the associate later adds it, Claude could reasonably interpret "draft responses" as the full workflow — draft and send. The explicit wall is needed: "Draft responses for my review. Never send any communication to vendors directly."
>
> **Why A is wrong:** The instructions FEEL complete because they list several permissions and an escalation rule. But "feeling complete" is the trap — the missing boundary is an ABSENCE, and absences are harder to spot than present problems. The explicit "do not send" wall is missing.
>
> **Why C is wrong:** The instructions don't give Claude purchasing authority, so a budget limit isn't needed for something Claude can't do. The gap is in communication authority (draft vs send), not purchasing.
>
> **Why D is wrong:** Specifying which vendors adds complexity without fixing the core gap. The risk isn't WHICH vendor Claude communicates with — it's WHETHER Claude sends communications at all without review.

---

### Question 3 · Concept 8 (Projects) · D5

Usman has been using a Claude Project for weekly reporting for 6 months. The Project Knowledge contains:

- Company Q1 and Q2 performance data
- Team KPI targets set in January
- A template for the weekly report format
- Client contact list from March

It's now September. Usman asks Claude to generate this week's report. The report references Q2 targets that were actually revised (nazar-saani / reviewed and changed) in July, uses an old client name that changed after an acquisition (khareedaari / one company buying another), and formats the report in a style the team abandoned in August.

What is the most likely cause?

**A.** Claude's model is outdated, so upgrading it should make it better at recognizing current targets and names.

**B.** The Project Knowledge is stale; unchanged files still contain old targets, names, and templates.

**C.** Usman should switch to regular chat, where Claude will be less likely to rely on outdated Project files.

**D.** Claude should have warned that the files might be outdated, so the failure is primarily the system's missing freshness detection.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the core lesson of Concept 8: Projects have three layers — Instructions (rules), Knowledge (files), and Chat (today's job). Knowledge is only as good as its last update. Usman loaded Project Knowledge in Q1/Q2 and never updated it. Claude doesn't know that Q2 targets were revised in July — it only knows what's in the Knowledge files. The client name change, the revised targets, the new template — none of these reached the Project Knowledge. The rule: **Stale context = stale results.** The fix is a maintenance habit: review and update Project Knowledge when business information changes.
>
> **Why A is wrong:** The model isn't the issue — even the most advanced model can only work with the context it's given. If the Knowledge files say the target is X and the real target is now Y, no model upgrade fixes that. The data is wrong, not the model.
>
> **Why C is wrong:** Switching to chat loses the accumulated structure (template, KPI framework, reporting format) that makes Projects useful. The fix isn't abandoning Projects — it's maintaining the Knowledge. Chat has its own problem: you'd have to re-explain everything each week.
>
> **Why D is wrong:** Claude doesn't have a way to know its Knowledge files are outdated — it can't compare what's in the Project against external reality unless it has search capability AND is instructed to verify. The responsibility for keeping Project Knowledge current is on the human.

---

### Question 4 · Concept 8 (Projects) · D5

A team lead sets up a Claude Project for their department. They add the following to Project Instructions:

> "Always format reports in our company style. Use formal English. Include a summary section at the top of every document."

They add to Project Knowledge:

- The company style guide PDF
- A sample report from last quarter
- The department's goals document

A new team member joins and starts a Chat within this Project: "Help me draft an email to a vendor about a late shipment (deri se pohanchne wali kheep / goods arriving later than promised)."

The response comes back as a formal report with a summary section at the top — not an email. What went wrong?

**A.** The team member should create a separate email Project so report formatting cannot affect vendor correspondence.

**B.** The standing rules were scoped too broadly; they should apply to reports only, not every document in the Project.

**C.** Claude cannot distinguish reports from emails reliably, so the team needs a more capable model for different document types.

**D.** The report examples in Knowledge confused Claude, so the Project should include an equal number of email examples.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Project Instructions are STANDING RULES — they apply to every chat in the Project unless they specify otherwise. "Always format... every document" means Claude applies report formatting to everything: emails, memos, chat responses, vendor communications. The fix is scoping the instructions: "When generating REPORTS, use our company style guide and include a summary section. For other content types (emails, memos, messages), match the appropriate format for that type." Instructions should say WHEN they apply, not just WHAT they require.
>
> **Why A is wrong:** Creating a separate Project for every content type (reports project, emails project, memos project) is impractical. The department Project should handle all department work — the Instructions just need to be scoped correctly.
>
> **Why C is wrong:** Claude can absolutely distinguish between reports and emails — if told to. The issue isn't capability; it's that the Instructions said "always" and "every document," so Claude followed those rules literally.
>
> **Why D is wrong:** The Knowledge files (sample report) are reference material. They influenced the style but didn't cause the problem. The INSTRUCTIONS caused it by saying "always" and "every document" — even without the sample report, those rules would have produced the same formatting on the email.

---

### Question 5 · Concept 9 (Intervention) · D7

Nadia asks Claude to plan a team retreat. Midway through the conversation, Claude's suggestions have drifted from a professional team-building retreat to what looks more like a luxury vacation — spa packages, gourmet dining (shandar khaana / fancy/expensive food), premium resort suites.

Nadia still wants a retreat planned, but needs to get it back on track with a professional focus and reasonable budget. Which intervention move is most appropriate?

**A.** Stop the task completely and start over, because the luxury suggestions show the plan has failed.

**B.** Redirect the retreat toward professional activities, mid-range venues, and the PKR 500,000 cap while keeping the task.

**C.** Escalate to her manager because a retreat budget and venue decision should be made by someone with greater authority.

**D.** Take the planning back and do it manually, because the luxury drift shows AI cannot handle the assignment.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Redirect is for when the task is right but the direction is wrong. Nadia still wants a retreat planned (the task hasn't changed). Claude just drifted toward luxury options (the direction changed). Redirect says: "Keep going, but go THIS way instead." The redirect message does three things: (1) acknowledges the current output ("good energy"), (2) names the drift ("not a vacation"), and (3) gives the new direction with constraints ("professional development, team exercises, mid-range, PKR 500K cap").
>
> **Why A is wrong:** Stop means end the task — Nadia still wants the retreat planned. Stopping wastes all the context and progress so far. Stop is for when the task itself should not continue (e.g., you realize you're solving the wrong problem entirely).
>
> **Why C is wrong:** Escalate is for when YOU can't handle the decision — it needs someone with more authority, more expertise, or a different role. A retreat drifting toward luxury is a prompt correction, not a management decision. Escalating this wastes the manager's time on something Nadia can fix with one redirect message.
>
> **Why D is wrong:** The "abandon" trap. Claude drifted on direction, not capability. Taking back the entire task because of a direction issue is like firing your assistant because they booked a fancy restaurant — you correct the direction, you don't replace the person.

---

### Question 6 · Concept 9 (Intervention) · D7

An associate is using Claude to draft a competitive analysis. During the work, the associate realizes that the analysis requires access to a proprietary (malkiyati / owned by someone, not freely available) industry database that costs $5,000/year — and only the Research Director has the authority to approve that purchase and the credentials (login details / raste ki chaabi) to access it.

Which intervention move is most appropriate?

**A.** Correct the research by instructing Claude to substitute free sources and continue without waiting for approval.

**B.** Stop the analysis because it cannot continue until the proprietary database is available.

**C.** Escalate because the Research Director must approve the purchase and provide access.

**D.** Redirect Claude to estimate the missing data, clearly labeling the estimates so the analysis can proceed.

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** This is the intervention move people miss most: ESCALATE. The associate faces an "unstaffed gate" — a decision point where they don't have the authority (purchase approval) or the access (database credentials) to proceed. No amount of clever prompting fixes this. The Research Director has two things the associate doesn't: (1) authority to approve the $5,000 purchase, and (2) credentials to access the database. Escalate means: "This decision/action is above my level — someone else needs to be involved."
>
> **Why A is wrong:** "Use free sources" sounds practical but might produce an inferior analysis. If the proprietary database is needed for quality results, switching to free sources is a compromise the associate shouldn't make alone — that's a quality/cost tradeoff the Research Director should weigh in on.
>
> **Why B is wrong:** Stop means abandon the task entirely. But the task (competitive analysis) is still valid — it just needs a resource the associate can't authorize. The task should be paused and escalated, not killed.
>
> **Why D is wrong:** "Estimate the data" introduces unverified figures into a competitive analysis. If the database exists because precise data matters, estimates are a quality risk. And the associate is making a scope decision (accept estimates instead of real data) that might need the Research Director's approval anyway.

---

### Question 7 · Concept 9 (Intervention) · D7

During a project, an associate uses Claude through the following sequence. Match the description to the correct intervention move:

1. Claude starts drafting a legal disclaimer — the associate says "Stop. Legal drafting needs to go through our legal team."
2. Claude's market research is good but uses outdated 2023 data — the associate says "Update all figures to 2024 data."
3. Claude's product comparison drifts into a general industry overview — the associate says "Stay focused on our three target products only."
4. The client changes the project scope mid-task — the associate says "New requirement: include environmental impact data for each option."

What is the correct sequence of intervention moves?

**A.** Stop → Correct → Redirect → Change requirement, because legal drafting must be halted rather than routed elsewhere.

**B.** Escalate → Correct → Redirect → Change requirement, because legal work is routed to counsel, stale data is corrected, drift is redirected, and new scope is added.

**C.** Stop → Redirect → Correct → Change requirement, because outdated figures change the direction of the research.

**D.** Escalate → Redirect → Correct → Stop, because a new client requirement means the original job should end.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Let's trace each one:
>
> 1. **"Legal drafting needs to go through our legal team"** = **ESCALATE**, not Stop. The task isn't being abandoned — it's being routed to the right people. The associate recognizes this needs someone with legal expertise and authority. The legal team will handle it. (Stop would mean "don't do this at all." Escalate means "someone else needs to do this.")
> 2. **"Update all figures to 2024 data"** = **CORRECT**. The output has a specific error (outdated data). The associate identifies it and tells Claude exactly what to fix. The direction is fine; the data is wrong.
> 3. **"Stay focused on our three target products only"** = **REDIRECT**. The task is right (product comparison) but the direction drifted (became a general industry overview). The associate steers it back without changing the task itself.
> 4. **"New requirement: include environmental impact data"** = **CHANGE REQUIREMENT**. The scope itself has changed — something new must be included that wasn't in the original brief. This isn't a correction (nothing was wrong) or a redirect (the direction was fine) — the job itself evolved.
>
> **Why A is wrong:** Item 1 is Escalate, not Stop. The associate didn't say "don't do this" — they said "our legal team needs to handle this." That's routing to the right authority, not abandoning the task.
>
> **Why C is wrong:** Items 1, 2, and 3 are in the wrong order: 1 is Escalate (not Stop), 2 is Correct (not Redirect), 3 is Redirect (not Correct).
>
> **Why D is wrong:** Item 4 is Change requirement, not Stop. The client changed the scope — that's a requirement evolution, not a task termination.

---

### Question 8 · Concepts 7+8+9 Combined · D5/D7 · 〔Select TWO〕

A department head sets up a Claude Project for quarterly business reviews. Six months in, they notice:

- Claude sometimes makes recommendations that exceed the team's spending authority
- The Project Knowledge still contains last year's strategic priorities
- When Claude produces something unexpected, team members either accept it as-is or start over from scratch — nobody adjusts mid-task

Which TWO changes would have the most impact?

**A.** Upgrade to a more capable model so it can infer spending limits, current priorities, and better intervention choices.

**B.** Add a budget boundary that labels recommendations above $X as requiring Director approval.

**C.** Update Project Knowledge and schedule quarterly reviews so priorities, budgets, and organizational changes stay current.

**D.** Train the team to restart every unexpected task, because a fresh chat is more reliable than correcting a partial result.

> [!success]- Reveal Answer
> **Correct: B and C**
>
> **Why B is correct:** The spending authority problem (Concept 7) is a missing Authority boundary. Claude doesn't know the team's spending limits unless told. Adding "flag anything above $X as requiring Director Approval" creates the boundary pattern "Choose but say when" — Claude can recommend freely but must flag when a recommendation crosses the authority line. This is a structural fix that works across all future chats in the Project.
>
> **Why C is correct:** The stale Knowledge problem (Concept 8) is exactly the scenario from Q3 — old data produces old results. Updating the Knowledge once fixes the immediate problem, but the QUARTERLY REVIEW CADENCE prevents it from happening again. Projects aren't set-and-forget — they need maintenance as business context changes. This is the "stale context = stale results" principle with a prevention mechanism built in.
>
> **Why A is wrong:** A more capable model won't know the team's spending authority or current strategic priorities if that information isn't in the Project. Model capability doesn't replace proper configuration. The issues are in Instructions (missing boundaries) and Knowledge (stale data), not model intelligence.
>
> **Why D is wrong:** This is the opposite of Concept 9. Starting over every time something goes wrong wastes all accumulated context and progress. The Six Intervention Moves exist precisely so you DON'T have to start over — you Stop, Correct, Redirect, Change requirement, Escalate, or Take it back. Training the team on mid-task interventions is the fix, not training them to abandon and restart.

---

# PART 4 — The Proof

---

### Question 9 · Concept 10 (ITCD) · D2

Khalid uses Claude to research steel suppliers for a PKR 5 million procurement (khareedaari ka amal / the process of buying goods for a business). Claude returns a comparison table with 4 suppliers, their prices, delivery times, and quality ratings.

Khalid performs the following verification steps:

1. He reads the table carefully and confirms all four suppliers have complete information
2. He checks that the prices seem reasonable based on his general knowledge of the market
3. He presents the table to his procurement manager as verified

Which ITCD step did Khalid skip?

**A.** Identify, because he did not first select the claims whose failure would matter most.

**B.** Trace; he never compared a specific claim with its original supplier, quote, or database source.

**C.** Challenge, because he accepted plausible prices without testing how the data could be wrong.

**D.** Decide, because he presented the table without explicitly choosing whether to accept or reject its evidence.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Khalid did IDENTIFY (he picked the key claims — prices, delivery times, ratings). He even partially assessed them ("prices seem reasonable"). But he never TRACED — he never opened a supplier's website to verify the quoted price, never checked a delivery time against an actual quote or contract, never found where the "quality rating" came from. "Seems reasonable based on general knowledge" is the PLAUSIBILITY TRAP — it feels like verification but it's just your brain saying "this doesn't look obviously wrong." Tracing means: for each critical claim, find the ORIGINAL source and compare. If the table says Supplier X charges PKR 1,200/kg, trace that to Supplier X's actual quote or price list.
>
> **Why A is wrong:** Khalid did identify — he looked at all four suppliers and their key data points. The Identify step is about picking WHICH claims matter most (the ones with the highest consequence if wrong). Khalid's issue isn't identification; it's that he stopped after identifying.
>
> **Why C is wrong:** Challenge is asking "what would make this wrong?" — stress-testing the information. Khalid didn't get to Challenge because he never completed Trace. You challenge AFTER you've traced the claims. The sequence matters: Identify → Trace → Challenge → Decide.
>
> **Why D is wrong:** Khalid did make a decision — he presented it as "verified." The problem is he decided too early. His decision wasn't informed by tracing, so it was premature. A proper Decide step follows I → T → C, not just I.

---

### Question 10 · Concept 10 (ITCD) · D2

An associate uses Claude to compile a financial summary for a board meeting. The summary includes:

- Revenue grew 12% year-over-year
- Operating margin improved to 18.5%
- Customer acquisition cost dropped by $15

The associate performs ITCD verification:

- **Identify:** All three financial metrics are critical — any error in front of the board is catastrophic (tabahi / disaster).
- **Trace:** She opens the company's financial system, finds the actual revenue growth figure (12.3%), the operating margin (18.5%), and the customer acquisition cost change (-$14.80).
- **Challenge:** "Could the revenue figure be based on a different time period or calculation method than what the board expects? Could the CAC figure be net vs gross?"

What should her **Decide** step be for each figure?

**A.** Accept all three because small differences are normal when financial figures are rounded for a board summary.

**B.** Accept the exact margin and correct the revenue and CAC figures to the source values.

**C.** Reject all three because two inaccurate figures show that the entire financial summary cannot be trusted.

**D.** Investigate further because the small differences suggest that Claude may have used outdated data for every metric.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The ITCD Decide step has four options: Accept, Correct, Investigate, or Reject. Each figure gets its own decision:
>
> - **Operating margin 18.5%:** Exact match with the financial system → **ACCEPT.**
> - **Revenue 12% vs actual 12.3%:** Close but not exact. For a casual summary, 12% might be fine. For a BOARD MEETING with financial figures, 0.3% matters — analysts and board members will cross-reference. → **CORRECT** to 12.3%.
> - **CAC $15 vs actual $14.80:** Same logic. $0.20 difference matters at board level. → **CORRECT** to $14.80.
>
> The context (board meeting) determines the precision standard. "Close enough" is a valid standard for an internal email but not for a board financial summary.
>
> **Why A is wrong:** "Close enough" is the plausibility trap applied to numbers. At board level, financial figures must match the source of record exactly. A board member who cross-checks and finds 12% instead of 12.3% will question ALL the numbers.
>
> **Why C is wrong:** Reject is for fundamentally wrong output — numbers that are fabricated or wildly off. These numbers are within 2% of correct, suggesting Claude had approximately right data but rounded or used slightly different calculations. That's a Correct situation, not a Reject situation.
>
> **Why D is wrong:** Investigate is for when you can't determine whether the figure is right or wrong — you need more information. Here, the associate ALREADY has the real numbers from the financial system. She doesn't need more information; she needs to correct two figures. Investigation is complete.

---

### Question 11 · Concept 10 (ITCD) · D2

Which of the following is a valid verification approach under ITCD?

**A.** Ask Claude whether it is confident in the numbers; a confident reply completes Trace if the figures look plausible.

**B.** Regenerate the analysis and treat matching figures as verified because consistency indicates accuracy.

**C.** Ask a colleague to read the output and say whether it looks right; independent agreement counts as tracing.

**D.** Open the original source and compare the specific claim with the source's specific figure.

> [!success]- Reveal Answer
> **Correct: D**
>
> **Why D is correct:** Trace means finding the ORIGINAL source and comparing Claude's claim against it. If Claude says "revenue grew 12%," you open your financial system, find the actual revenue growth figure, and compare. That's tracing a claim back to its authoritative source. The source must be INDEPENDENT of Claude — something that existed before Claude generated the output.
>
> **Why A is wrong:** CIRCULAR VERIFICATION. Claude confirming its own output is AI checking itself. The same system that generated (possibly hallucinated) the number is the one saying "yes, I'm confident." Self-confidence is not a source. This is the #1 trap on the exam.
>
> **Why B is wrong:** CIRCULAR VERIFICATION variant. Regenerating the same analysis is the same model processing the same information. If it hallucinated a number once, it can hallucinate the same number again — consistently. Consistency ≠ accuracy. Two wrong answers that match are still wrong.
>
> **Why C is wrong:** A colleague reading output and saying "looks right" is PLAUSIBILITY checking, not TRACING. The colleague is evaluating whether the output SEEMS reasonable — the same thing Khalid did in Q9. Unless the colleague opens the original source and compares specific figures, they're doing an Observe, not a Trace. Plausible ≠ verified.

---

### Question 12 · Concept 10 (ITCD) · D2

An associate uses Claude to build a vendor comparison for office furniture procurement. After running ITCD, they discover:

- 2 out of 5 vendor prices were accurate (traced to vendor websites)
- 1 price was close but outdated by 6 months
- 2 prices could not be traced to any source — they may be hallucinated (AI ne khud bana liye / AI made them up from nothing)

What is the appropriate Decide action?

**A.** Accept the whole table because a majority of its prices were traced and the comparison remains useful.

**B.** Reject the whole table and restart manually because any untraceable prices make AI unsuitable here.

**C.** Keep verified prices, update the outdated one, and source or mark the two untraceable prices UNVERIFIED.

**D.** Ask Claude to re-check the two prices because a second pass may reveal sources the first pass missed.

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** ITCD's Decide step works PER CLAIM, not per output. Each row in the table gets its own decision:
>
> - **2 verified prices:** → ACCEPT (traced, confirmed)
> - **1 outdated price:** → CORRECT (find current price yourself, update the figure)
> - **2 untraceable prices:** → INVESTIGATE (try to find real prices from vendor websites) or REJECT those specific cells (mark as UNVERIFIED)
>
> The table has value — 2 good rows plus structure. Throwing it away wastes that. But presenting hallucinated prices as real is dangerous. The fix is surgical: keep what's good, fix what's fixable, mark what's unknown.
>
> **Why A is wrong:** 2 out of 5 verified is NOT "good enough" — the 3 unverified figures include potentially hallucinated data. Presenting those to a procurement manager as if they're real could lead to wrong purchasing decisions. Verification isn't a passing grade; it's per-claim.
>
> **Why B is wrong:** The "abandon" trap. The table structure, the 2 verified prices, and the analysis framework are all useful. Rejecting everything because some cells failed is wasteful. ITCD is designed for surgical decisions, not all-or-nothing.
>
> **Why D is wrong:** CIRCULAR VERIFICATION. Asking Claude to "re-check" its own unverified prices is the same system looking at the same (possibly hallucinated) information. If Claude couldn't trace these prices the first time, a second attempt with the same tools and data won't produce real sources.

---

### Question 13 · Concept 11 (Portability) · D3

Hira built a detailed Delegation Brief for Claude that includes specific instructions like:

> "Use Artifacts to create the comparison table. Enable Research mode for live data. Reference the files in my Project Knowledge for our company's specifications."

She needs to use a different AI tool (Google Gemini) for the same task because her team uses Google Workspace. What aspects of her brief are PORTABLE (qabil-e-mantuqli / can be carried to another tool) and what must be adapted?

**A.** Everything is portable; Gemini can interpret Claude's feature names and reproduce the same workflow directly.

**B.** The brief's job, limits, authority, and checks transfer; Claude-specific feature names must be adapted or removed.

**C.** Nothing is portable because each AI tool uses different features, file handling, and instruction formats.

**D.** Only the Outcome transfers; context, constraints, authority, and verification depend on Claude's features.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the portability principle from Concept 11. A Delegation Brief has two layers:
>
> - **PORTABLE (works anywhere):** Outcome ("compare these 3 vendors"), Context ("for a 100-person corporate event"), Constraints ("budget under PKR 300K, halal only"), Authority ("recommend one, explain your criteria"), Verification ("show source for each price"). These describe WHAT you need, not HOW the tool should do it.
> - **TOOL-SPECIFIC (needs adapting):** "Use Artifacts" (Claude feature), "Enable Research mode" (Claude feature), "Reference Project Knowledge" (Claude feature). Gemini has different equivalents — Google Search integration instead of Research mode, different file handling instead of Project Knowledge, different output formats instead of Artifacts.
>
> The brief's SKELETON (the six lines) is portable. The FEATURE CALLS are not.
>
> **Why A is wrong:** Pasting "Use Artifacts" or "Enable Research mode" into Gemini is meaningless — Gemini doesn't have those features by those names. The tool-specific instructions would either be ignored or confuse the system.
>
> **Why C is wrong:** The core structure (outcome, context, constraints, authority, verification) works across ANY AI tool — and even for human delegation. The brief format is tool-agnostic by design. Only the feature-specific instructions need changing.
>
> **Why D is wrong:** Context, Constraints, Authority, and Verification are all portable too. "Budget under PKR 300K" works in any system. "Show your source for each price" works everywhere. The Outcome isn't the only portable part — the whole brief structure transfers.

---

### Question 14 · Concept 11 (Portability) · D3

An associate has been using Claude Projects for 3 months. They have:

- Detailed Project Instructions with standing rules
- 15 files in Project Knowledge
- A library of effective prompts they've refined over time

The company switches to Microsoft Copilot as their primary AI tool. The associate is worried about losing all their work. Which statement is MOST accurate?

**A.** Everything is lost because a Claude Project cannot be exported as a complete package to another assistant.

**B.** The rules, files, refined prompts, and briefing skill transfer; only their organization and tool-specific references need to change.

**C.** Only the knowledge files transfer because standing instructions and refined prompts depend on Claude's syntax.

**D.** The associate should refuse the switch because reorganizing the Project would cost more than the tool change is worth.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the full portability picture from Concept 11:
>
> - **Standing rules** (Project Instructions): "Always use formal English," "flag recommendations over $X" — these are BUSINESS RULES, not Claude features. They apply to any AI tool. Copilot's equivalent configuration takes the same rules.
> - **Knowledge files**: These are your company's documents — they exist independently of Claude. Upload them to Copilot's equivalent.
> - **Refined prompts**: The structure (outcome + context + constraints + authority + verification) works everywhere. Specific feature calls ("use Artifacts") need updating, but the THINKING behind the prompt transfers.
> - **Delegation skill**: The most portable asset. Knowing how to write a brief, set authority boundaries, verify output, and intervene mid-task works with ANY AI tool — or even human delegation.
>
> **Why A is wrong:** The work product (rules, files, prompts, skills) exists in your documents and your head, not locked inside Claude. The tool is a container; the content is yours.
>
> **Why C is wrong:** Instructions like "flag recommendations over budget" are business logic, not Claude syntax. They translate to any system that accepts standing rules. The prompts' STRUCTURE (outcome-based, with constraints and verification) is also portable — only specific feature names need updating.
>
> **Why D is wrong:** The "abandon" trap in reverse — refusing to switch because of perceived switching cost. The actual rebuild effort is moderate (reorganize instructions, re-upload files, adjust feature-specific references). The thinking and skill transfer instantly.

---

### Question 15 · Cross-Concept (C3 + C10) · D1/D2

Fatima writes a Delegation Brief and sends it to Claude. The result comes back. She needs to verify it. Her brief included:

> **Outcome:** Compare 3 shipping companies for our warehouse relocation
> **Constraints:** Budget under PKR 800,000, must handle fragile equipment, available in October
> **Deliverable:** Table with company name, price, insurance coverage, estimated timeline, and customer rating

Claude returns a table with all requested columns filled in for 3 companies. Which verification approach correctly applies BOTH the Brief and ITCD?

**A.** Check the three rows and five columns; matching the requested format verifies the table.

**B.** Check brief compliance first, then use ITCD on high-risk claims and decide separately for each cell.

**C.** Ask Claude to compare the table with the brief; its self-check can verify both structure and content.

**D.** Forward each row to the named shipping company and treat its confirmation as complete verification.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Verification is TWO layers:
>
> **Layer 1 — Brief compliance:** Does the deliverable match what was requested? 3 companies? ✓ Table format? ✓ All 5 columns? ✓ Budget constraint respected? Check. October availability mentioned? Check. Fragile equipment handling covered? Check. This is a structural check against the BRIEF.
>
> **Layer 2 — Content accuracy (ITCD):** Are the CLAIMS in the table true? This is where ITCD kicks in:
>
> - **Identify:** Prices and insurance terms are highest-risk (wrong price = wrong budget, wrong insurance = unprotected equipment).
> - **Trace:** Open each company's website or call them. Compare Claude's stated price to actual quotes.
> - **Challenge:** "Company B says PKR 250K with full fragile-item insurance — that's significantly cheaper than the others. Is this a promotional rate? Are there hidden fees?"
> - **Decide:** Accept verified cells, correct wrong ones, mark untraceable ones as UNVERIFIED.
>
> **Why A is wrong:** Format matching is Layer 1 only — it checks that the table LOOKS right but not that the CONTENT is right. A perfectly formatted table with hallucinated prices is still wrong. Format ≠ accuracy.
>
> **Why C is wrong:** CIRCULAR VERIFICATION. Claude checking its own output against its own understanding of the brief is AI verifying itself. Claude will say "yes, this matches" because it generated the table to match the brief in the first place.
>
> **Why D is wrong:** While contacting the shipping companies is excellent verification (it's a real source!), it's the entire Trace step, not the full ITCD process. And forwarding AI-generated information to vendors without checking it first could include hallucinated company names or wrong details — embarrassing if "Company B" doesn't actually offer that service.

---

### Question 16 · Cross-Concept (C2 + C7 + C9) · D1/D6/D7

An operations associate sets up a Claude Project to manage vendor communications. The Project Instructions say:

> "Help me draft responses to vendor inquiries (pooch-taach / questions asking for information). Keep responses professional and within our standard terms."

One day, a vendor emails asking for a 20% discount on a bulk order (thoq mein khareedaari / buying large quantities at once). The associate asks Claude to draft a response. Claude drafts a professional email that AGREES to the 15% discount as a "standard bulk discount" — a commitment (wada / binding promise) the associate has no authority to make.

Multiple concepts failed here. Which combination correctly identifies ALL the failures?

**A.** Only Authority failed because the instructions lacked a restriction on discount decisions.

**B.** Authority lacked a financial boundary, the outcome was vague, and the associate missed the intervention before sending.

**C.** Only Intervention failed because a review would have caught the unauthorized commitment.

**D.** Only the Deliverable failed because the email needed a flag for the discount decision.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Three concept failures stacked:
>
> 1. **Authority (C7):** The Project Instructions say "keep responses within our standard terms" but never define what Claude can or cannot COMMIT TO. There's no "Draft not send" boundary, no "flag any financial commitment for my review" rule. Claude didn't know that discount approvals exceed the associate's authority.
> 2. **Outcome (C2):** "Help me draft responses to vendor inquiries" is an open-ended recipe that covers everything from "thanks for your email" to "we agree to new pricing terms." High-stakes vendor negotiations need a different outcome description than routine correspondence. The instruction should distinguish between routine responses (Claude can draft freely) and financial commitments (must flag for review).
> 3. **Intervention (C9):** Even with the instruction failures, the associate had one more chance — review the draft before sending. The Correct move was: "Remove the discount agreement. Replace with: 'I'll discuss your bulk pricing request with our team and get back to you by [date].'" But the associate either didn't review or didn't catch the unauthorized commitment.
>
> **Why A is wrong:** Authority alone doesn't explain the full failure. The vague outcome (C2) and the missed intervention (C9) were also contributing factors.
>
> **Why C is wrong:** Intervention was the last safety net, but the earlier failures (Authority, Outcome) created the situation. If Authority was properly set, Claude would have flagged the discount instead of agreeing to it — and intervention wouldn't have been needed.
>
> **Why D is wrong:** The Deliverable (C6) is about the FORMAT of the output (table vs paragraph, with or without caveats). The problem here isn't format — it's that Claude made an unauthorized business decision. That's Authority, not Deliverable.

---

### Question 17 · Cross-Concept (Full Loop) · D2/D6

A procurement associate uses the full Delegation framework for a PKR 2 million equipment purchase:

- **Brief:** Complete 6-line brief with clear outcome, context, constraints, authority ("research not purchase"), deliverable (comparison table), and verification (trace prices to vendor quotes)
- **Delegation Loop:** Define ✓ → Delegate ✓ → Observe ✓ → Intervene (redirected once when Claude started comparing irrelevant equipment) ✓ → Verify (traced all prices to vendor websites and quotes) ✓ → Accept ✓

The associate presents the verified comparison to their manager. The manager approves the purchase of Vendor B based on the comparison. Three months later, the equipment has quality issues.

Who is accountable?

**A.** Claude, because the AI supplied the recommendation that led to the purchase.

**B.** The associate, because they built, verified, and presented the comparison to the manager.

**C.** The associate owns the comparison's accuracy, the manager owns the approved purchase decision, and neither can transfer accountability to AI.

**D.** Nobody, because the quality issue was unforeseeable and the delegation process was followed correctly.

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Accountability follows the HUMAN decision chain, not the AI tool:
>
> - **The associate** verified the comparison, accepted it, and presented it. Their accountability: "Was the comparison accurate? Did I verify the claims? Did I flag any risks?" If the comparison was accurate and properly verified — yes, the associate did their job. If a price or rating was wrong because of incomplete verification — that's on the associate.
> - **The manager** reviewed the comparison and approved the purchase. Their accountability: "Did I apply my judgment to the decision? Did I consider factors beyond the comparison (vendor reputation, past experience, references)?" The purchase decision was the manager's, not the associate's and certainly not Claude's.
> - **Claude** holds zero accountability. Always. AI is a tool. Blaming the tool is like blaming Excel for a spreadsheet error.
>
> The quality issue itself may have been unforeseeable (D has a point about that), but the ACCOUNTABILITY question still has clear answers — it traces to the humans who made decisions, not to the tool that assisted.
>
> **Why A is wrong:** AI NEVER holds accountability. This is the exam's hardest rule to accept emotionally but easiest to apply: the answer is always "the human." Claude recommended based on the data it had. The human accepted, verified, and presented. Accountability stays with humans.
>
> **Why B is wrong:** Partially correct but incomplete. The associate is accountable for the COMPARISON's accuracy, but the PURCHASE DECISION was the manager's. Accountability splits at the decision point — each human is accountable for THEIR decision.
>
> **Why D is wrong:** The quality issue may have been unforeseeable, but that doesn't erase accountability. The associate is still accountable for the comparison's accuracy. The manager is still accountable for the purchase decision. "The process was followed correctly" may be true — and if so, it means the associate and manager did their jobs well, and the quality issue was a genuinely unforeseeable risk. But "nobody is accountable" is never the right answer when humans made decisions.

---

### Question 18 · Cross-Concept (Full Framework) · D1/D2/D3 · 〔Select TWO〕

An associate needs to build a quarterly market analysis for their company's expansion planning. They have access to Claude with Research mode. Which TWO practices represent the most effective use of the complete delegation framework?

**A.** Write a full brief, use Research mode, read the result, and forward it if it looks good.

**B.** Use a clear brief and source instructions, then run ITCD and trace critical claims before presenting.

**C.** Skip the brief and use Research mode with a simple prompt because its web search should ensure current, accurate results.

**D.** Set brief and authority boundaries, apply the Privacy Gate, specify verification checks, and follow through with ITCD.

> [!success]- Reveal Answer
> **Correct: B and D**
>
> **Why B is correct:** This combines Concept 3 (Brief) + Concept 4 (Research — Two Magic Source Instructions) + Concept 10 (ITCD). The brief structures the job. The source instructions make verification POSSIBLE by forcing Claude to show its work. And ITCD provides the verification METHOD. The key insight: the Two Magic Source Instructions are part of the DELIVERABLE line — they're instructions about how the output should look, which makes the Trace step of ITCD dramatically easier.
>
> **Why D is correct:** This adds Concept 7 (Authority — "flag what you couldn't verify") + Concept 5 (Privacy Gate — check before pasting company data) + Concept 10 (ITCD verification). The Authority boundary prevents Claude from silently presenting unverified claims as facts. The Privacy Gate protects company data before it enters the system. The Verification line creates accountability for checking. This is the full framework working together: Brief → Privacy → Authority → Deliverable → ITCD.
>
> **Why A is wrong:** This follows most of the process but fails at the critical last step. "Read the result and forward it if it looks good" is the Ahmed trap from Part 1 — reading is not verifying. The brief is good, but the verification is just "looks good" instead of actual ITCD tracing.
>
> **Why C is wrong:** Research mode is a TOOL, not a process. It helps find current information, but it doesn't replace the Brief (structuring what you need), the Source instructions (making claims traceable), or ITCD (verifying the claims). A simple prompt into Research mode gets a simple result — probably well-researched, but unstructured, with no verification path, and possibly mixing remembered and searched data invisibly.

---

## Score Yourself — Part 3 (Questions 1-8)

| Score           | Assessment                                                                                                     |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| **7-8 correct** | Solid — Authority boundaries, Projects, and Intervention are locked in.                                        |
| **5-6 correct** | Okay — review the concepts you missed, especially the Six Intervention Moves.                                  |
| **Below 5**     | Re-read Scenario Guide Part 3. Focus on the difference between Escalate vs Stop, and Authority vs Constraints. |

## Score Yourself — Part 4 (Questions 9-18)

| Score            | Assessment                                                                  |
| ---------------- | --------------------------------------------------------------------------- |
| **8-10 correct** | Exam-ready on these concepts. Focus on timed practice next.                 |
| **6-7 correct**  | Good base — drill ITCD steps and the cross-concept combinations you missed. |
| **Below 6**      | Re-read Scenario Guide Part 4 and the ITCD decision tree. Then retry.       |

---

## Quick Review: All 18 Questions

### Part 3 — The Guardrails

| Q   | Concept                      | The key principle                                                         |
| --- | ---------------------------- | ------------------------------------------------------------------------- |
| 1   | C7: Authority                | "Draft not send" — implicit permission is still permission.               |
| 2   | C7: Authority                | Authority needs both DOORS (may do) and WALLS (may not).                  |
| 3   | C8: Projects                 | Stale Knowledge = stale results. Projects need maintenance.               |
| 4   | C8: Projects                 | Instructions are standing rules — "always" means ALWAYS across all chats. |
| 5   | C9: Intervention (Redirect)  | Task is right, direction is wrong → Redirect.                             |
| 6   | C9: Intervention (Escalate)  | Unstaffed gate — you lack the authority or access → Escalate.             |
| 7   | C9: Intervention (All moves) | Stop ≠ Escalate. Correct ≠ Redirect. Change requirement ≠ Correct.        |
| 8   | C7+C8+C9 Combined            | Authority boundaries + Knowledge maintenance + Intervention skills.       |

### Part 4 — The Proof

| Q   | Concept            | The key principle                                                                                           |
| --- | ------------------ | ----------------------------------------------------------------------------------------------------------- |
| 9   | C10: ITCD (Trace)  | "Seems reasonable" = plausibility, not tracing. Open the source.                                            |
| 10  | C10: ITCD (Decide) | Context sets the precision standard. Board meeting = exact match.                                           |
| 11  | C10: ITCD (Trace)  | AI confirming itself ≠ verification. Regeneration ≠ verification. Colleague saying "looks right" ≠ tracing. |
| 12  | C10: ITCD (Decide) | Decide works PER CLAIM — accept some, correct some, reject some.                                            |
| 13  | C11: Portability   | Brief skeleton (6 lines) = portable. Feature calls = tool-specific.                                         |
| 14  | C11: Portability   | Your rules, files, prompts, and skills are yours — not locked in any tool.                                  |
| 15  | C3+C10 Cross       | Verification = Brief compliance check THEN ITCD content check. Two layers.                                  |
| 16  | C2+C7+C9 Cross     | Failures stack: vague outcome + missing authority + missed intervention.                                    |
| 17  | Full Loop          | Accountability follows the human decision chain. AI holds zero.                                             |
| 18  | Full Framework     | Brief + Source Instructions + Privacy Gate + Authority + ITCD = the complete system.                        |
