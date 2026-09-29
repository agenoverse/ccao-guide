# Just Delegate It — PRACTICE QUESTIONS
# Part 3: The Guardrails (Concepts 7-9) & Part 4: The Proof (Concepts 10-11 + Cross-Concept)

> **How to use:** Read the scenario. Pick your answer. THEN reveal the explanation.
> **Part 3** tests Concepts 7 (Authority & Plan-First), 8 (Projects), 9 (Six Intervention Moves).
> **Part 4** tests Concepts 10 (ITCD Verification), 11 (Portability) + cross-concept questions.
>
> **Scoring per part:** 6/8 or higher = solid (Part 3). 7/10 or higher = solid (Part 4).

---

# PART 3 — The Guardrails

---

### Question 1 · Concept 7 (Authority) · D6

Sana, a social media coordinator, sets up a Claude Project for managing her company's social media calendar. She writes in the Project Instructions:

> "You are our social media assistant. Create engaging posts, suggest hashtags, and schedule content across all platforms. Keep our brand voice professional but friendly."

Two weeks later, her manager notices that several posts have been going live without anyone reviewing them. One post used a trending hashtag that was actually associated with a political controversy (siyasi bahas / political argument). The company had to issue an apology (maafi naama / public sorry statement).

What was the root cause?

**A.** Claude shouldn't be used for social media management — the risk is too high.

**B.** Sana's instructions gave Claude implicit (zaahir na ki gayi / not clearly stated) authority to publish without review — "schedule content" with no boundary on what requires human approval. The missing Authority boundary was: "Draft, don't send."

**C.** The trending hashtag issue was unforeseeable — no instructions could have prevented it.

**D.** Sana should have added "avoid political content" to the instructions — that specific rule would have prevented the issue.

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

**A.** Nothing is missing — the instructions cover drafting, research, comparison, and escalation.

**B.** The "Draft not send" boundary is missing — the instructions say "draft email responses" but never explicitly say "do NOT send emails directly." Claude could interpret "draft responses" as permission to send them if integrated with email tools.

**C.** The instructions need a budget limit for purchases.

**D.** The instructions should specify which vendors Claude can communicate with.

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

**A.** Claude's model is outdated and needs to be upgraded for better performance.

**B.** The Project Knowledge contains stale (baasi / old and no longer fresh) context — data, targets, names, and templates that were accurate 6 months ago but have since changed. Stale context produces stale results.

**C.** Usman should switch from Projects to regular chat for weekly reports.

**D.** Claude should have flagged that the information might be outdated — the fact that it didn't means the system failed.

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

**A.** The new team member should have started a new Project for emails instead of using the reporting Project.

**B.** The Project Instructions say "always format reports in our company style" and "include a summary section at the top of every document" — Claude applied these standing rules to ALL output, including the email. The Instructions were too broad — they should specify WHEN they apply (reports only) rather than applying to everything.

**C.** Claude can't distinguish between reports and emails — it needs better model capabilities.

**D.** The Knowledge files confused Claude by providing only report examples.

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

**A.** Stop — end the task completely and start over.

**B.** Redirect — keep the task (retreat planning) but steer AI back to the professional focus: "Good energy, but this is a team-building retreat, not a vacation. Refocus on: professional development activities, team exercises, and mid-range venues. Budget cap PKR 500,000 for 15 people."

**C.** Escalate — send the task to her manager because Claude isn't performing well.

**D.** Take it back — do all the retreat planning manually since AI can't handle it.

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

**A.** Correct — tell Claude to use free sources instead.

**B.** Stop — the task can't continue without the database.

**C.** Escalate — the associate cannot authorize the purchase or access the database. This needs the Research Director's decision and involvement.

**D.** Redirect — ask Claude to work around the missing database by estimating the data.

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

**A.** Stop → Correct → Redirect → Change requirement

**B.** Escalate → Correct → Redirect → Change requirement

**C.** Stop → Redirect → Correct → Change requirement

**D.** Escalate → Redirect → Correct → Stop

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Let's trace each one:
>
> 1. **"Legal drafting needs to go through our legal team"** = **ESCALATE**, not Stop. The task isn't being abandoned — it's being routed to the right people. The associate recognizes this needs someone with legal expertise and authority. The legal team will handle it. (Stop would mean "don't do this at all." Escalate means "someone else needs to do this.")
>
> 2. **"Update all figures to 2024 data"** = **CORRECT**. The output has a specific error (outdated data). The associate identifies it and tells Claude exactly what to fix. The direction is fine; the data is wrong.
>
> 3. **"Stay focused on our three target products only"** = **REDIRECT**. The task is right (product comparison) but the direction drifted (became a general industry overview). The associate steers it back without changing the task itself.
>
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

**A.** Upgrade to a more capable model for better business judgment.

**B.** Add explicit Authority boundaries to Project Instructions: "Recommendations must stay within the team's quarterly budget of $X. For any recommendation exceeding this, flag it as 'Requires Director Approval' instead of presenting it as a direct suggestion."

**C.** Update Project Knowledge with current strategic priorities, budget figures, and organizational changes — and set a quarterly review cadence (schedule / regular time to check and update) to prevent Knowledge from going stale again.

**D.** Train the team to always start over when Claude produces something unexpected — fresh starts produce better results than corrections.

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

**A.** Identify — he didn't identify which claims needed checking.

**B.** Trace — he read the information but never traced any specific claim back to its original source (supplier website, quote document, or industry database).

**C.** Challenge — he didn't ask hard enough questions about the data.

**D.** Decide — he didn't make a clear accept/reject decision.

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

**A.** Accept all three — they're close enough to the real numbers.

**B.** Accept the operating margin (exact match at 18.5%), Correct the revenue figure (12% → 12.3%), and Correct the CAC figure ($15 → $14.80) — because board-level financial figures must be precise, not approximate.

**C.** Reject all three — since two were wrong, the entire output is unreliable.

**D.** Investigate further — the small differences suggest Claude might have used outdated data for everything.

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

**A.** Ask Claude: "Are you confident in these numbers?" — if Claude says yes, the Trace step is complete.

**B.** Ask Claude to regenerate the same analysis — if the second version matches the first, the data is verified.

**C.** Ask a colleague to read Claude's output and confirm it "looks right" — a second human opinion counts as Trace.

**D.** Open the original source (database, document, website) and compare Claude's specific claim against the source's specific figure — that's a valid Trace.

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

**A.** Accept the whole table — 2 out of 5 verified is good enough for a comparison.

**B.** Reject the whole table and start over manually — AI clearly can't handle this task.

**C.** Accept the 2 verified prices. Correct the outdated price by finding the current one. For the 2 untraceable prices, either find real prices independently or mark them as UNVERIFIED — do not present hallucinated figures as real.

**D.** Ask Claude to re-check the 2 unverified prices — a second attempt might find the right numbers.

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

**A.** Everything is portable — just paste the entire brief into Gemini.

**B.** The Outcome, Context, Constraints, Authority, and Verification lines are portable. The feature-specific instructions (Artifacts, Research mode, Project Knowledge references) must be adapted to Gemini's equivalent features or removed.

**C.** Nothing is portable — each AI tool requires completely different instructions.

**D.** Only the Outcome line is portable — everything else is tool-specific.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the portability principle from Concept 11. A Delegation Brief has two layers:
>
> - **PORTABLE (works anywhere):** Outcome ("compare these 3 vendors"), Context ("for a 100-person corporate event"), Constraints ("budget under PKR 300K, halal only"), Authority ("recommend one, explain your criteria"), Verification ("show source for each price"). These describe WHAT you need, not HOW the tool should do it.
>
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

**A.** Everything is lost — Claude Projects can't be exported to other tools.

**B.** The Project Instructions (standing rules), the knowledge files (the actual documents), and the refined prompts are all intellectual assets (fikri jaaidaad / valuable things you created with your thinking) that transfer — they just need to be reorganized into Copilot's structure. The skill of writing good briefs transfers completely.

**C.** Only the knowledge files transfer — the instructions and prompts are Claude-specific.

**D.** The associate should refuse the switch — rebuilding everything would be too costly.

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

**A.** Check that the table has 3 rows and 5 columns matching the brief — if the format matches, it's verified.

**B.** First check the DELIVERABLE against the BRIEF (does the table have what was requested?). Then apply ITCD to the CONTENT: Identify the highest-risk claims (prices, insurance terms), Trace them to actual company quotes or websites, Challenge anything that seems too good ("PKR 200K for full insurance on fragile equipment?"), and Decide per cell — accept, correct, or mark unverified.

**C.** Ask Claude: "Does this table match my brief requirements?" — Claude can self-check against the original instructions.

**D.** Forward the table to the shipping companies and ask them to confirm their own rows.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Verification is TWO layers:
>
> **Layer 1 — Brief compliance:** Does the deliverable match what was requested? 3 companies? ✓ Table format? ✓ All 5 columns? ✓ Budget constraint respected? Check. October availability mentioned? Check. Fragile equipment handling covered? Check. This is a structural check against the BRIEF.
>
> **Layer 2 — Content accuracy (ITCD):** Are the CLAIMS in the table true? This is where ITCD kicks in:
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

**A.** Only Authority (C7) failed — the instructions didn't restrict discount decisions.

**B.** Authority (C7) failed — no boundary on financial commitments. Outcome (C2) failed — "draft responses" is too vague for high-stakes vendor negotiations. Intervention (C9) was needed — the associate should have caught and corrected the unauthorized commitment before it went out.

**C.** Only Intervention (C9) failed — the associate should have caught the error.

**D.** Only the Deliverable (C6) failed — the draft should have flagged the discount decision.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Three concept failures stacked:
>
> 1. **Authority (C7):** The Project Instructions say "keep responses within our standard terms" but never define what Claude can or cannot COMMIT TO. There's no "Draft not send" boundary, no "flag any financial commitment for my review" rule. Claude didn't know that discount approvals exceed the associate's authority.
>
> 2. **Outcome (C2):** "Help me draft responses to vendor inquiries" is an open-ended recipe that covers everything from "thanks for your email" to "we agree to new pricing terms." High-stakes vendor negotiations need a different outcome description than routine correspondence. The instruction should distinguish between routine responses (Claude can draft freely) and financial commitments (must flag for review).
>
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

**A.** Claude — the AI recommended Vendor B in the comparison table.

**B.** The associate — they built the comparison and should have caught the quality issue.

**C.** The associate is accountable for the accuracy of the comparison they presented. The manager is accountable for the purchase decision they approved. Neither can blame Claude — AI doesn't hold accountability.

**D.** Nobody — the quality issue was unforeseeable and the process was followed correctly.

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Accountability follows the HUMAN decision chain, not the AI tool:
>
> - **The associate** verified the comparison, accepted it, and presented it. Their accountability: "Was the comparison accurate? Did I verify the claims? Did I flag any risks?" If the comparison was accurate and properly verified — yes, the associate did their job. If a price or rating was wrong because of incomplete verification — that's on the associate.
>
> - **The manager** reviewed the comparison and approved the purchase. Their accountability: "Did I apply my judgment to the decision? Did I consider factors beyond the comparison (vendor reputation, past experience, references)?" The purchase decision was the manager's, not the associate's and certainly not Claude's.
>
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

**A.** Write a detailed Delegation Brief (outcome, context, constraints, authority, deliverable, verification), send it to Claude with Research mode, then read the result and forward it to their manager if it looks good.

**B.** Write a Delegation Brief with a clear deliverable format, include the Two Magic Source Instructions ("show URL or document name for each claim" and "write UNVERIFIED for any figure you couldn't verify"), then run ITCD on the result — tracing critical claims to their sources before presenting.

**C.** Skip the brief and use Research mode with a simple prompt — Research mode's web search capability means the results will be current and accurate.

**D.** Write a Delegation Brief, set Authority boundaries ("research freely, but flag any claim you couldn't verify with a primary source"), apply the Privacy Gate before pasting any company data, and include a Verification line that says exactly what you'll check — then follow through with ITCD when the result comes back.

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

| Score | Assessment |
|---|---|
| **7-8 correct** | Solid — Authority boundaries, Projects, and Intervention are locked in. |
| **5-6 correct** | Okay — review the concepts you missed, especially the Six Intervention Moves. |
| **Below 5** | Re-read Scenario Guide Part 3. Focus on the difference between Escalate vs Stop, and Authority vs Constraints. |

## Score Yourself — Part 4 (Questions 9-18)

| Score | Assessment |
|---|---|
| **8-10 correct** | Exam-ready on these concepts. Focus on timed practice next. |
| **6-7 correct** | Good base — drill ITCD steps and the cross-concept combinations you missed. |
| **Below 6** | Re-read Scenario Guide Part 4 and the ITCD decision tree. Then retry. |

---

## Quick Review: All 18 Questions

### Part 3 — The Guardrails

| Q | Concept | The key principle |
|---|---------|-------------------|
| 1 | C7: Authority | "Draft not send" — implicit permission is still permission. |
| 2 | C7: Authority | Authority needs both DOORS (may do) and WALLS (may not). |
| 3 | C8: Projects | Stale Knowledge = stale results. Projects need maintenance. |
| 4 | C8: Projects | Instructions are standing rules — "always" means ALWAYS across all chats. |
| 5 | C9: Intervention (Redirect) | Task is right, direction is wrong → Redirect. |
| 6 | C9: Intervention (Escalate) | Unstaffed gate — you lack the authority or access → Escalate. |
| 7 | C9: Intervention (All moves) | Stop ≠ Escalate. Correct ≠ Redirect. Change requirement ≠ Correct. |
| 8 | C7+C8+C9 Combined | Authority boundaries + Knowledge maintenance + Intervention skills. |

### Part 4 — The Proof

| Q | Concept | The key principle |
|---|---------|-------------------|
| 9 | C10: ITCD (Trace) | "Seems reasonable" = plausibility, not tracing. Open the source. |
| 10 | C10: ITCD (Decide) | Context sets the precision standard. Board meeting = exact match. |
| 11 | C10: ITCD (Trace) | AI confirming itself ≠ verification. Regeneration ≠ verification. Colleague saying "looks right" ≠ tracing. |
| 12 | C10: ITCD (Decide) | Decide works PER CLAIM — accept some, correct some, reject some. |
| 13 | C11: Portability | Brief skeleton (6 lines) = portable. Feature calls = tool-specific. |
| 14 | C11: Portability | Your rules, files, prompts, and skills are yours — not locked in any tool. |
| 15 | C3+C10 Cross | Verification = Brief compliance check THEN ITCD content check. Two layers. |
| 16 | C2+C7+C9 Cross | Failures stack: vague outcome + missing authority + missed intervention. |
| 17 | Full Loop | Accountability follows the human decision chain. AI holds zero. |
| 18 | Full Framework | Brief + Source Instructions + Privacy Gate + Authority + ITCD = the complete system. |
