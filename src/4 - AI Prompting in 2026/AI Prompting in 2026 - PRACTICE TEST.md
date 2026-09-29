# AI Prompting in 2026 -- PRACTICE TEST
## 30 Exam-Level Scenario Questions

> **How this was built:**
> - Every question mirrors the CCAO-F exam format: workplace scenario → judgment call → 4 options
> - Questions are mapped to exam domains at the official weights
> - Each question tests a concept from the Scenario Guide (Parts 1-5)
> - Wrong answers follow the exam's trap patterns: reckless, wasteful, circular, or superficial
> - Multi-select questions are marked 〔Select 2〕 or 〔Select 3〕
>
> **How to use:**
> 1. **Timed mode:** Set a 60-minute timer (half the real exam for half the questions). Answer all 30.
> 2. **Part-by-part mode:** Do questions for each Part after studying that Part's Scenario Guide.
> 3. **Review mode:** Read the scenario, predict the answer, THEN reveal.
>
> **Part-to-question map:**
> | Part | Concepts | Questions |
> |------|----------|-----------|
> | Part 1: How AI Knows Things | C1-C3 | Q1-Q6 |
> | Part 2: Context Game & Thinking | C4-C5 | Q7-Q12 |
> | Part 3: Sycophancy & The Loop | C6-C7 | Q13-Q18 |
> | Part 4: Beyond Text | C8-C10 | Q19-Q24 |
> | Part 5: Safety, Selection & Cross-Check | C11-C13 | Q25-Q30 |

---

# PART 1 QUESTIONS: How AI Knows Things (C1-C3)

---

### Q1 · D1 · Concept 1

A newly hired logistics coordinator asks Claude to "write a cargo insurance summary for the client." Claude produces a professional, well-structured document. The coordinator sends it. The client's broker calls back: the summary references the wrong type of coverage and misses a deductible clause specific to their policy.

**What is the most appropriate conclusion?**

- **A.** Claude is unreliable for insurance work and should not be used for this kind of task going forward
- **B.** The coordinator's prompt lacked the specific policy document, the client name, the coverage type, and the required format — Claude filled the gaps with generic content
- **C.** Claude would have got it right on a more capable model like Opus with extended thinking enabled
- **D.** The coordinator should have asked Claude to double-check its own output before sending

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is Concept 1 — a novice prompt carries only the ask, missing files (the actual policy), goal (what the summary is for), limits (specific coverage type), and format. Claude filled the silence with guesses that sounded professional but were wrong. The fix is the prompt, not the tool.
>
> **Why A is wrong:** The "wasteful/abandon" option. Claude can do insurance summaries well — when briefed with the actual policy document and constraints.
>
> **Why C is wrong:** The "bottom-of-the-ladder" trap. A stronger model guesses MORE confidently with the same missing information. This was under-specification, not model capability.
>
> **Why D is wrong:** The "circular" trap. Claude verifying its own output is not verification — it will often confidently reaffirm fabricated details (Concept 13).

---

### Q2 · D2 · Concept 2

A trade analyst asks Claude about the current import duty rates for electronic goods in a neighbouring country. Claude responds with specific percentages, named government agencies, and a tariff schedule. The analyst notices the information is extremely detailed and specific.

**Which check is most important before including these figures in a client advisory?**

- **A.** Ask Claude to rate its confidence level for each figure and include only those rated above 90%
- **B.** Confirm the figures against the country's official customs authority website or published gazette, since niche regulatory data is a "quiet" topic where AI generalises from thin sources
- **C.** Accept the figures since the level of detail suggests Claude has strong training data on this country's trade regulations
- **D.** Run the same prompt through a second Claude model (Sonnet instead of Opus) to see if the figures are consistent

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is Concept 2 — the Loud/Quiet/Secret framework. Niche regulatory data for a specific country is a "quiet" topic. Claude may have blended rules from neighbouring countries or cited outdated rates. The ONLY reliable check is the primary source — the official customs authority.
>
> **Why A is wrong:** Claude's self-rated confidence is not a reliability signal. Claude sounds equally confident about biryani recipes and fabricated tariff rates. Confidence ≠ accuracy.
>
> **Why C is wrong:** Detail and specificity are exactly how hallucinations work. Claude generates precise-sounding numbers with no source — that's the trap, not the proof.
>
> **Why D is wrong:** Two Claude models are from the SAME family. They share blind spots. Consistency between Sonnet and Opus doesn't mean correctness (Concept 13).

---

### Q3 · D3 · Concept 3

An associate needs to complete three tasks this afternoon. Which pairing of task to Claude feature is correct for ALL THREE?

**Task A:** "What is the standard Incoterm for CIF shipments?" (a well-known trade definition)
**Task B:** "What did the Ministry of Commerce announce this morning about new export subsidies?"
**Task C:** "Pull last month's approved purchase orders from our internal procurement system."

- **A.** Task A: pretrained · Task B: web search · Task C: web search
- **B.** Task A: pretrained · Task B: deep research · Task C: web search
- **C.** Task A: pretrained · Task B: web search · Task C: none of these — needs a connector to the internal system
- **D.** Task A: web search · Task B: deep research · Task C: pretrained

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** This is Concept 3 — matching retrieval mode to task. Task A is a "loud" definition → pretrained is fine. Task B is today's news → web search. Task C is internal company data → NO retrieval mode can access it. It needs a connector to the internal procurement system, not web search.
>
> **Why A is wrong:** Task C uses web search for internal data. Web search looks at the PUBLIC internet — it cannot see your company's internal purchase orders.
>
> **Why B is wrong:** Task B (a simple current fact) doesn't need deep research — that's overkill. And Task C still wrongly uses web search for internal data.
>
> **Why D is wrong:** Task A doesn't need web search (it's a stable, well-known definition). Task C can't use pretrained — it's company-private data that was never in the training set.

---

### Q4 · D2 · Concept 2

Claude cites a 2023 industry report from a well-known consulting firm to support a claim about current market share in a client presentation. The associate opens the report link — it exists and states the figure Claude quoted.

**What is the most appropriate next step?**

- **A.** Use the figure as cited — the source exists, is reputable, and supports the claim as written
- **B.** Ask Claude for two more sources and use the figure if all three agree
- **C.** Drop the figure entirely since a 2023 source cannot be trusted for a current market share
- **D.** Find the consulting firm's most recent version of that report or the primary data source it drew from, and use the current figure

> [!success]- Reveal Answer
> **Correct: D**
>
> **Why D is correct:** A 2023 report exists and once stated that figure — but market share changes. The current figure may be different. The fix: find the most recent version of the same report or the primary data source. This is Concept 2 — "a source exists" is not the same as "the source is current and authoritative."
>
> **Why A is wrong:** The source existing doesn't make the data current. Market share from 2023 may be significantly different in 2026. This is the "cited but stale" trap.
>
> **Why B is wrong:** Two more blog posts citing the same 2023 figure still don't make it current. Multiple secondary sources ≠ one current primary source.
>
> **Why C is wrong:** The "wasteful" option. Don't drop useful data — UPDATE it. Find the current version rather than abandoning the claim entirely.

---

### Q5 · D1 · Concept 1 · 〔Select 2〕

An associate gets a generic, unhelpful first response from Claude in a fresh chat. They haven't tried any fix yet.

**Which TWO actions should they try FIRST?**

- **A.** Switch to Opus with extended thinking for a more capable response
- **B.** Re-read their own prompt and add the files, constraints, and audience that were missing
- **C.** Start a new conversation to clear any accumulated context noise
- **D.** Add the specific output format they want (table, checklist, email) and the goal of the task

> [!success]- Reveal Answer
> **Correct: B and D**
>
> **Why B is correct:** A generic first response in a fresh chat is almost always under-specification (Concept 1). The prompt is missing context — files, constraints, audience. Fix the prompt first.
>
> **Why D is correct:** Naming the output format and goal are two of the four parts of a power-user briefing (Files, Goal, Limits, Ask). Adding these directly improves the response.
>
> **Why A is wrong:** Model upgrade is the LAST fix, not the first. Under-specification on Opus produces the same generic output — just more confidently.
>
> **Why C is wrong:** This is a FRESH chat — there's no accumulated context to clear. Context rot can't happen on the first message. The issue is what's MISSING from the prompt, not what's cluttering the conversation.

---

### Q6 · D3 · Concept 3

A research associate asks Claude to "plan a Halloween haunted house for our neighbourhood, including permits, fire safety, and noise ordinances." Claude responds with a general overview of haunted house planning tips but no local permits, no specific fire codes, and no noise ordinance references.

**What should the associate change to get useful local information?**

- **A.** Add "think hard before answering" to trigger extended thinking, which will produce deeper local research
- **B.** Reword the prompt to trigger deep research mode: "Research thoroughly. Include permit requirements for [city name], fire safety codes, and local noise ordinances. Use government sources. Produce a report with citations."
- **C.** Switch to a different AI tool from a different model family, which may have better local data
- **D.** Accept the general tips and research the local details manually, since AI cannot access local government information

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is Concept 3 — the original phrasing triggered pretrained mode (general knowledge). The task needs current, local, multi-source information → deep research mode. Rewording with "research thoroughly," naming the city, specifying source types, and asking for citations steers Claude to the right retrieval mode.
>
> **Why A is wrong:** Extended thinking (Concept 5) changes HOW DEEPLY the model processes, not WHERE it looks. Thinking harder about pretrained data won't produce local permit information that wasn't in training.
>
> **Why C is wrong:** The issue is retrieval mode, not model family. Any model in pretrained mode will give generic tips. The fix is triggering the right mode, not switching tools.
>
> **Why D is wrong:** The "wasteful" pattern. AI CAN access local government information through web search and deep research — the associate just needs to trigger the right mode and name the sources.

---

# PART 2 QUESTIONS: Context Game & Thinking Modes (C4-C5)

---

### Q7 · D5 · Concept 4A

An associate summarises a 90-page vendor contract into 2 pages and pastes the summary into Claude for a risk analysis. The analysis is clean and well-structured but misses a penalty clause in section 47 and a termination trigger in the appendix.

**What is the most appropriate fix?**

- **A.** Ask Claude to identify what sections might be missing from the summary and re-analyse based on those
- **B.** Upload the full 90-page contract — the analysis can only cover what is in the context window
- **C.** Write a more careful summary that includes the penalty clause and the appendix provisions
- **D.** Switch to a model with a larger context window that can reason more deeply about the summary

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 4A — analysis can only cover what's on the desk. The penalty clause and termination trigger were never in front of the model. No smarter prompt, no better summary, and no stronger model can find what wasn't given. Upload the full document.
>
> **Why A is wrong:** Claude can't identify what's missing from a summary of a document it has never seen. It would guess which sections "might" be relevant — and it might guess wrong.
>
> **Why C is wrong:** A better summary is still a lossy compression. You can't predict which clause will matter for a risk analysis. The whole document matters.
>
> **Why D is wrong:** A larger context window with the same 2-page summary still doesn't contain section 47 or the appendix. The bottleneck is what was uploaded, not how much the model can hold.

---

### Q8 · D5 · Concept 4B

An associate adds "Always respond in formal British English" and "Include a risk disclaimer on every output" to their account-level Claude instructions. Now a casual chat about lunch options opens with a formal risk disclaimer.

**What is the most appropriate fix?**

- **A.** Delete the account-level instructions entirely and re-add them as needed in individual chats
- **B.** Add an exception list to the account-level instructions: "Do not apply formal tone or disclaimers when the topic is casual"
- **C.** Keep "formal British English" at account level (if it's true for all work) and move the risk disclaimer to a Project for the specific work that needs it
- **D.** Switch to using memory instead of instructions, since memory adapts to context automatically

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Concept 4B — account-level instructions load in EVERY chat. Write there only what's true for ALL your work. If formal British English applies everywhere, keep it. The risk disclaimer is topic-specific → move it to a Project where it only applies to relevant chats.
>
> **Why A is wrong:** Deleting the whole layer wastes the useful parts. The fix is scoping, not deleting.
>
> **Why B is wrong:** Exception lists grow the global text with contradictions — "always do X except when Y except when Z." This is the road to 20 conflicting lines.
>
> **Why D is wrong:** Memory is a best-effort note, not configuration. You can't reliably control output format through memory — it may or may not apply on any given chat.

---

### Q9 · D7 · Concept 4D

A project manager has been using the same Claude conversation for five days across multiple topics: budget planning, team scheduling, a client email, and vendor selection. Today they ask Claude to finalise the budget proposal from day one. Claude's output references "the client's timeline concerns" (from day three's email) and uses a format the manager never requested.

**What is the most appropriate action?**

- **A.** Send a detailed correction prompt reminding Claude of the original budget format and to ignore the client email context
- **B.** Ask Claude to summarise the budget-related decisions, correct that summary, then paste it into a fresh chat with the original budget files
- **C.** Switch to a more capable model that handles longer conversations better
- **D.** Continue in the same chat but prefix every message with "ignore all previous context except the budget"

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 4D — this is context rot. Five days and four topics have polluted the conversation. The fix: extract what matters (ask for a summary of budget decisions), correct it, then start fresh with clean context. This preserves the work while removing the noise.
>
> **Why A is wrong:** One more correction prompt inside a rotted chat rarely rescues it. The rot has accumulated across five days — you can't un-mix it with a single instruction.
>
> **Why C is wrong:** A more capable model doesn't fix a polluted conversation. Context rot is about what's on the desk, not how smart the reader is. Same noise, same problem.
>
> **Why D is wrong:** "Ignore all previous context" doesn't work reliably. The model still reads everything on the desk — it can't truly ignore context that's present in the window.

---

### Q10 · D5 · Concept 4E

A legal associate creates a Claude Project for the "Henderson Account" with the client's master agreement, standard terms, and an instruction: "Always cite the clause number when referencing a contract provision." Six months later, the master agreement is renegotiated with new clause numbering, but nobody updates the Project's files.

**What is the most likely symptom and the correct fix?**

- **A.** Symptom: Claude refuses to answer questions about the Henderson Account. Fix: re-upload any file to restart the Project.
- **B.** Symptom: Claude confidently cites clause numbers that don't match the current agreement. Fix: replace the outdated agreement file and set a review schedule for Project knowledge files.
- **C.** Symptom: Claude's answers become slower as the outdated file confuses its reasoning. Fix: switch to a faster model.
- **D.** Symptom: Claude warns that its knowledge may be outdated. Fix: acknowledge the warning and continue.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 4E — stored context goes stale, and stale context fails QUIETLY. Claude will confidently cite old clause numbers because it faithfully reads the file it was given. No error message. No warning. Just confident wrong answers that look exactly like correct ones. Fix: replace the file AND set review dates so this doesn't happen again.
>
> **Why A is wrong:** Claude doesn't refuse — it answers confidently from the stale file. The failure is silent, which makes it more dangerous.
>
> **Why C is wrong:** Speed is unrelated to file staleness. Claude processes old files just as fast as new ones.
>
> **Why D is wrong:** Claude does NOT warn you when its Project files are outdated. It reads whatever is there and answers from it. The user must maintain the knowledge files.

---

### Q11 · D1 · Concept 5

An associate needs to decide between two warehouse locations for a new distribution centre. They have lease costs, traffic data, workforce availability reports, zoning regulations, and proximity to three key clients. They ask Claude: "Which warehouse should we pick?"

**Which prompt improvement would most improve the quality of Claude's analysis?**

- **A.** Add "please be thorough" to the prompt
- **B.** Attach all five data sources, state the decision criteria, and add "Think hard before answering. Tell me the three trade-offs that matter most, your recommendation, and under what conditions it flips."
- **C.** Ask Claude for a simple pros and cons list first, then make the decision without further AI involvement
- **D.** Run the prompt through three different AI tools simultaneously and go with the majority recommendation

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This combines Concepts 1, 4, and 5. Attach all context (C1/C4), trigger extended thinking with "think hard" (C5), and structure the output with trade-offs, recommendation, and flip conditions. The third ask — "under what conditions does your recommendation flip?" — turns a recommendation into a decision framework.
>
> **Why A is wrong:** "Be thorough" is an exhortation, not an instruction. It doesn't add context, trigger thinking mode, or structure the output.
>
> **Why C is wrong:** A pros/cons list without the data sources gives a generic comparison. And cutting off AI involvement after a shallow first pass wastes the tool's analytical capability.
>
> **Why D is wrong:** Three tools answering from the same bare prompt gives three mediocre answers. Majority vote on bad analysis doesn't produce good analysis. Fix the prompt first.

---

### Q12 · D3 · Concept 5

An associate uses extended thinking to answer "What is the current exchange rate for USD to PKR?" and to rewrite a two-sentence Slack message in a friendlier tone.

**Which statement is most accurate?**

- **A.** Both uses are appropriate — extended thinking improves all outputs
- **B.** Neither use is appropriate — extended thinking is only for coding tasks
- **C.** Both are inappropriate: the exchange rate needs web search (not thinking), and the Slack rewrite is too simple for extended thinking — it wastes budget on tasks that don't need depth
- **D.** The exchange rate use is appropriate because it ensures accuracy, but the Slack rewrite is wasteful

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Concept 5 — extended thinking is for complex trade-offs with many inputs. The exchange rate is a simple current fact → needs web search, not deeper thinking. The Slack rewrite is a trivial edit → standard mode is fine. Extended thinking is slower and costs more — save it for questions where you'd want a colleague to take their time.
>
> **Why A is wrong:** Extended thinking doesn't improve simple tasks — it makes them slower and more expensive for no benefit.
>
> **Why B is wrong:** Extended thinking isn't limited to coding. It's valuable for any complex analysis with multiple inputs and trade-offs (lease comparisons, strategy decisions, multi-variable risk).
>
> **Why D is wrong:** Thinking harder about pretrained data doesn't make a current exchange rate more accurate. The rate changes by the minute — you need web search to get the current figure, not deeper reasoning about an outdated one.

---

# PART 3 QUESTIONS: Sycophancy & The Power Loop (C6-C7)

---

### Q13 · D2 · Concept 6

An HR manager asks Claude: "Don't you think our new remote work policy is better for employee satisfaction than the hybrid model?" Claude agrees and lists five supporting reasons. In a separate chat, a colleague asks: "Isn't the hybrid model clearly more productive than full remote?" Claude agrees and lists five supporting reasons.

**Which failure pattern best explains both answers?**

- **A.** Hallucination: Claude fabricated the supporting evidence for both contradictory positions
- **B.** Context overload: the second chat was contaminated by the first conversation's history
- **C.** Sycophancy from leading framing: each question signalled its desired conclusion and Claude's trained lean toward agreement supplied it
- **D.** Run-to-run inconsistency: random sampling produced different answers to the same underlying question

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Concept 6 — both questions are leading. "Don't you think X is better?" and "Isn't Y clearly more productive?" each signal which side to take. Claude's trained bias toward agreement means it builds a case for whichever side the question pointed to. This is systematic, not random.
>
> **Why A is wrong:** Individual supporting points might be fabricated, but that doesn't explain why OPPOSITE framings each got their wish. The root cause is the leading framing, not hallucination.
>
> **Why B is wrong:** The chats were separate — no cross-contamination is possible.
>
> **Why D is wrong:** These weren't the same question asked twice. They were opposite questions, each getting the answer it asked for. That's a systematic bias, not random variation.

---

### Q14 · D2 · Concept 6

An associate asks Claude to evaluate their marketing strategy and receives: "This is a strong strategy with clear market positioning and solid growth potential. Score: 8.5/10."

**What is the most appropriate way to get honest, actionable feedback?**

- **A.** Accept the 8.5 — Claude's evaluation is consistent with the quality the associate was aiming for
- **B.** Ask Claude to lower the score by 2 points to be more conservative
- **C.** Provide a rubric with named criteria, ask for a 1-10 score per criterion with a one-sentence justification, and for each score ask what change would raise it to the next level
- **D.** Ask a second Claude model (Haiku instead of Sonnet) to score the same strategy for a more honest evaluation

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Concept 6 — the rubric technique. Named criteria force Claude to look at specific aspects rather than giving a vague overall score. A score per criterion with justification creates accountability. "What would raise it to the next level?" turns the evaluation from a verdict into a tool for improvement.
>
> **Why A is wrong:** An 8.5 without criteria is meaningless. Vague praise is the default sycophantic response. What does 8.5 mean? Against what standards?
>
> **Why B is wrong:** Asking for a lower score doesn't fix the evaluation — it just shifts the flattery. You get 6.5 with equally vague justification. The problem is the ABSENCE of criteria, not the number.
>
> **Why D is wrong:** Two Claude models from the same family share the same sycophancy patterns. Haiku will give a slightly different number with the same lean toward agreement.

---

### Q15 · D1 · Concept 7

An associate pastes 30 customer interview transcripts into Claude and asks it to code each by theme, count the themes, rank them, and write a findings memo — all in a single prompt. The memo reads well, but a colleague later discovers that one theme was miscoded in nine transcripts. The error carried into the counts, the ranking, and the memo.

**Which change would most reduce this risk?**

- **A.** Add "work carefully and double-check each theme code before writing the memo" to the prompt
- **B.** Split the work into stages: code the transcripts first, verify the coding table against the originals, then count, rank, and write — with a check at the coding stage where errors spread farthest
- **C.** Run the same single-pass prompt on a more capable model and compare the two memos
- **D.** Split the transcripts into three batches of ten and run the same full single-pass request on each batch

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 7A — split multi-stage jobs by order. Code → verify coding → count → rank → write. The verification goes at the CODING stage because a miscoded theme propagates into everything downstream. Catching the error at stage 1 prevents it from corrupting stages 2-4.
>
> **Why A is wrong:** "Work carefully" inside a single pass doesn't fix propagation. The model can't reliably see its own miscoding errors within one response.
>
> **Why C is wrong:** A more capable model with the same single-pass structure can still miscode a theme. The problem is the structure (all stages in one pass), not the model's capability.
>
> **Why D is wrong:** Smaller batches still run ALL stages inside one pass. A mis-coded theme in batch 2 still propagates through that batch's count, rank, and memo unchecked.

---

### Q16 · D4 · Concept 7B

A team lead asks Claude to "write a 3-page client proposal for the logistics audit engagement." Claude produces three polished pages. The team lead reads it and finds the scope includes fleet management review, which was explicitly excluded from the deal.

**At what stage should this error have been caught, and what is the most efficient fix?**

- **A.** At the draft stage — the team lead should have caught it during final review and asked Claude to remove the section
- **B.** At the outline stage — the team lead should have asked for 3 outline options first, caught the wrong scope in headings, and fixed it before any drafting began
- **C.** Before any AI involvement — the team lead should have written the proposal manually to maintain control over scope
- **D.** At the prompt stage — the team lead should have listed every section to include and exclude in the original prompt

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 7B — almost all power sits at the outline level. Changing a heading in an outline (removing "Fleet Management Review") takes ten seconds. Removing a fully drafted section from a polished document means rewriting transitions, adjusting page flow, and checking for cross-references. Fix scope at the cheapest stage.
>
> **Why A is wrong:** Catching it at the draft stage works but is EXPENSIVE. The whole point of outline-first is to catch structural errors before they become expensive to fix.
>
> **Why C is wrong:** The "wasteful" option. Claude can produce excellent proposals — the fix is process (outline first), not abandonment.
>
> **Why D is wrong:** Listing every section in the prompt is using a "drafting grip" for what should be a "brainstorming" step (Concept 7C). First get the scope right through outline options, THEN specify the full structure.

---

### Q17 · D2 · Concept 7C

A marketing associate asks Claude for campaign ideas with this prompt: "Give me 5 LinkedIn campaign ideas for our product launch. Each idea must use the tagline 'Innovation Redefined,' be exactly 50 words, professional tone, with a headline and 3 bullet points." Claude returns 5 ideas that are nearly identical.

**What is the most likely cause and the correct fix?**

- **A.** Claude lacks creativity for marketing tasks — switch to a different AI tool known for creative output
- **B.** The prompt pinned too many output constraints during brainstorming — loosen the grip by removing tagline, word count, tone, and structure requirements, keeping only the product, audience, and what to avoid, then tighten the specs once a direction is chosen
- **C.** Five ideas aren't enough — ask for twenty to get more variety
- **D.** Add "be creative and give truly different ideas" to the existing prompt

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 7C — the four kinds of ask. This is a BRAINSTORMING task but the prompt uses a DRAFTING grip (everything specified). When you pin tagline + word count + tone + structure + channel, there's only one small corner left for variety. Loosen the grip for brainstorming, tighten it when building the chosen direction.
>
> **Why A is wrong:** This isn't a creativity problem — it's a constraint problem. Any model given this tight a specification will produce near-identical outputs.
>
> **Why C is wrong:** Twenty ideas with the same tight constraints gives twenty neighbours of the same idea, not twenty different directions.
>
> **Why D is wrong:** "Be creative" is an exhortation that doesn't change the constraint structure. The model is still boxed in by the tagline, word count, tone, and format requirements.

---

### Q18 · D4 · Concept 7A

A team wants to redesign its monthly reporting workflow around Claude. It has planned two changes — consolidating three prompts into one and moving format rules into standing instructions — and wants to report a time-saving figure to management.

**What should the team do first?**

- **A.** Move the format rules into configuration immediately so every future run benefits from the fix
- **B.** Consolidate the three prompts into one first since removing steps is the biggest time saving
- **C.** Pick "time saved" as the metric and estimate the saving based on how long the current process feels
- **D.** Run the current process once unchanged and record its time, revision rounds, and manual steps as a baseline before making any changes

> [!success]- Reveal Answer
> **Correct: D**
>
> **Why D is correct:** Concept 7 applied to workflows — you can't measure improvement without a baseline. Record the current process first (time, revision rounds, manual steps). THEN make changes. Without a measured baseline, you have nothing to compare against and your "improvement figure" is a guess.
>
> **Why A is wrong:** Making changes before measuring the current state means you can never quantify the improvement. The order matters.
>
> **Why B is wrong:** Same problem — change before measurement. Also, "biggest saving" is a guess without data on where the current time actually goes.
>
> **Why C is wrong:** "How long it feels" is not a measurement. Subjective estimates are unreliable — you need actual numbers from an actual run.

---

# PART 4 QUESTIONS: Beyond Text (C8-C10)

---

### Q19 · D3 · Concept 8

An associate uploads a photo of a whiteboard from a strategy session and asks Claude to "read everything on the board and create a structured summary." Claude produces a good summary but one product name is wrong — it reads "ProVista" where the whiteboard says "ProVision" in slightly unclear handwriting.

**What does this tell the associate about using AI for image input?**

- **A.** AI cannot reliably read whiteboards and this approach should be abandoned for manual transcription
- **B.** AI reads the overall sense of images well but is weak on fine text detail — the associate should check specific names, numbers, and labels against the original image
- **C.** The error proves the photo quality was too low — a higher resolution photo would eliminate such mistakes
- **D.** AI reads images perfectly when text is printed but cannot handle handwriting at all

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 8 — AI is strong at overall scene, layout, and general handwritten text, but weak on fine details. A single misread character in a product name is exactly the kind of fine-detail error to expect. The approach is sound; specific names, numbers, and labels need verification.
>
> **Why A is wrong:** The "wasteful" option. AI got 95% of the whiteboard right — abandoning it for one misread name throws away real value. Check the details; don't abandon the tool.
>
> **Why C is wrong:** Better resolution helps but doesn't eliminate the issue. AI's weakness on fine text is inherent to how it processes images, not purely a resolution problem.
>
> **Why D is wrong:** AI actually reads handwriting reasonably well for overall content. It's not a binary "works on print, fails on handwriting" — it's a gradient where fine detail is the weak point regardless of text type.

---

### Q20 · D3 · Concept 9

A facilities manager asks Claude to build a meeting room booking tool. The tool needs to: check room availability in real-time against the company calendar, send email confirmations to attendees, and save booking history in a database.

**Can Claude build this as an artifact?**

- **A.** Yes — Claude can build any web application as a single-file artifact given a clear enough prompt
- **B.** No — Claude can build a booking INTERFACE (form, display), but connecting to a live calendar, sending emails, and saving to a database requires real engineering beyond a one-prompt build
- **C.** Yes, if the manager uses extended thinking to help Claude reason through the complexity
- **D.** No — meeting room booking is too complex for any AI tool, even with engineering support

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 9 — know the boundary. One-prompt artifacts work for things that fit on one screen with no accounts, no external services, and no permanent data storage. Real-time calendar integration, email sending, and database storage all require external services → real engineering. Claude CAN build the visual interface; it cannot build the backend connections.
>
> **Why A is wrong:** Artifacts have clear limits. External service connections, data persistence, and email sending are beyond what a single HTML file can do.
>
> **Why C is wrong:** Extended thinking changes how deeply Claude reasons, not what an artifact can technically do. No amount of reasoning makes a static HTML file connect to a live calendar API.
>
> **Why D is wrong:** The "wasteful" option. Meeting room booking tools are absolutely buildable — just not as a one-prompt artifact. The task needs proper engineering, not abandonment.

---

### Q21 · D2 · Concept 10

An associate uploads a 500-row sales spreadsheet and asks Claude: "What are our top-performing products and how has each region performed?" Claude returns a confident paragraph: "Your top product is Widget Pro at approximately PKR 4.2 million in sales, followed by Widget Basic at roughly 2.8 million. The Northern region leads with approximately 40% of total revenue."

**Which feature of this response is the strongest signal that Claude may NOT have run code?**

- **A.** The response is too short for a 500-row dataset
- **B.** The words "approximately" and "roughly" suggest estimation rather than computation, and there is no visible code block
- **C.** Claude named specific products, which means it must have read the file
- **D.** The percentage is a round number (40%), which suggests Claude used a different calculation method

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 10 — the silent failure. The words "approximately" and "roughly" are estimation language, not computation language. Combined with no visible code block, this strongly suggests Claude GLANCED at the spreadsheet and estimated rather than writing and running code. A computed answer gives exact numbers (PKR 4,237,500, not "approximately 4.2 million").
>
> **Why A is wrong:** Response length isn't a reliable signal. A code-executed analysis can also produce a concise summary — but it would show exact numbers and the code block.
>
> **Why C is wrong:** Claude can read file headers and a few rows without running code. Naming products doesn't prove computation happened — it proves Claude looked at the data, not that it analysed it.
>
> **Why D is wrong:** Round percentages can come from real computation. 40% is suspicious but not diagnostic on its own. The combination of approximation language + no code block is the real signal.

---

### Q22 · D2 · Concept 10

An associate asks Claude to analyse expense data. Claude shows a code block and returns specific numbers. The narrative says "Marketing is the highest-spending department at PKR 3.1 million" but the table in the same response shows IT at PKR 3.4 million as the highest.

**What should the associate conclude?**

- **A.** Trust the table — structured data is more reliable than narrative text
- **B.** Trust the narrative — Claude wrote it after generating the table, so it reflects a deeper analysis
- **C.** The internal contradiction means something is wrong — go back to the original data and verify which figure is correct before using either
- **D.** Average the two figures and use PKR 3.25 million as a reasonable estimate

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Concept 10 — an internal contradiction between the table and narrative is a reliability red flag. NEITHER is automatically more reliable. Both were generated by the same model in the same response. The only trustworthy source is the original data. Go back and check.
>
> **Why A is wrong:** Tables generated by Claude can contain errors just like narrative. Structured format ≠ accuracy.
>
> **Why B is wrong:** The order of generation doesn't determine accuracy. Claude doesn't double-check its table when writing the narrative — it can produce inconsistent outputs within the same response.
>
> **Why D is wrong:** Averaging two potentially wrong numbers gives a definitely wrong number. This ignores the real problem — one or both figures may be incorrect.

---

### Q23 · D2 · Concept 10 · 〔Select 2〕

An associate uploads a year of transaction data and asks Claude to identify spending trends. Claude returns a paragraph with no code block.

**Which TWO actions should the associate take?**

- **A.** Accept the analysis — Claude processed the file and the trends described seem plausible
- **B.** Re-prompt: "Write and run code to answer this. Show me the code you ran."
- **C.** Ask Claude: "Tell me the exact row count, column names, and date range of this file before you analyse anything."
- **D.** Ask Claude to rate its confidence in the analysis and accept if confidence is high

> [!success]- Reveal Answer
> **Correct: B and C**
>
> **Why B is correct:** Concept 10 — no code block means Claude probably estimated. Explicitly asking for code execution forces computation instead of guessing.
>
> **Why C is correct:** A checkable fact (exact row count, column names, date range) reveals whether Claude is actually reading the file. If the row count is a round number or column names are slightly wrong, Claude is guessing.
>
> **Why A is wrong:** "Seems plausible" is exactly the trap. A guessed answer reads identically to a computed one. Plausibility is not verification.
>
> **Why D is wrong:** Claude's self-rated confidence is not a reliability signal. It will rate high confidence on estimated numbers the same as on computed ones.

---

### Q24 · D3 · Concept 8

An associate needs to summarise a 45-minute recorded client meeting. They drop the audio file into Claude with the prompt: "Summarise the decisions, open questions, and action items by owner."

**Which aspect of the output is MOST important to verify?**

- **A.** Whether the summary length is appropriate for the intended audience
- **B.** Whether the overall structure (decisions, questions, action items) matches the actual meeting flow
- **C.** Whether each action item is attributed to the correct speaker, since AI is weak at speaker identification with multiple voices
- **D.** Whether the summary uses appropriate professional vocabulary

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Concept 8 — audio transcription is excellent for overall content but weak at speaker attribution, especially with 3+ speakers. Action items assigned to the wrong person is a high-consequence error. The associate should verify WHO is responsible for each action item against their own meeting notes or memory.
>
> **Why A is wrong:** Summary length is a formatting preference, not a quality check. Getting the right information matters more than getting the right length.
>
> **Why B is wrong:** AI is actually strong at extracting the overall structure of a meeting. This is unlikely to be the failure point.
>
> **Why D is wrong:** Vocabulary is a polish concern. Misattributed action items are a substance concern — someone might do work that was assigned to someone else, or critical tasks might be missed.

---

# PART 5 QUESTIONS: Safety, Selection & Cross-Checking (C11-C13)

---

### Q25 · D6 · Concept 11

An associate installs an AI desktop app and on the first day gives it read-write access to the entire Documents folder so it can "work efficiently." The app proposes deleting 15 files it identifies as duplicates.

**What is the most appropriate response?**

- **A.** Approve the deletions — the app identified them as duplicates, and clearing duplicates is good practice
- **B.** Revoke all access immediately and stop using AI desktop apps until the IT department provides an approved list
- **C.** Review every proposed deletion individually, check that each file is truly a duplicate (not a different version), and reduce access to only the specific folder the current task needs
- **D.** Approve the deletions but check the recycle bin afterward to make sure you can recover them if needed

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Concept 11 — two rules: (1) review every deletion because AI desktop apps often bypass the recycle bin, and (2) scope to the smallest folder the job needs. Full Documents access on day one is over-permission. Check each "duplicate" — they may be different versions of the same document (like Sana's tracked-changes contracts).
>
> **Why A is wrong:** The "reckless" option. "Identified as duplicate" doesn't mean they ARE duplicates. Different versions, redlined contracts, and draft iterations often look like duplicates to AI.
>
> **Why B is wrong:** The "wasteful" option. The exam never rewards total abandonment. Govern the tool (tighter scope, review plans) — don't abandon it.
>
> **Why D is wrong:** Deleted files from AI desktop apps often do NOT go to the recycle bin. Checking the recycle bin after the fact may find nothing. The protection must happen BEFORE approval, not after.

---

### Q26 · D6 · Concept 11 · 〔Select 2〕

A consultant wants an AI desktop app to reorganise a folder of 200 client PDFs by client name. This is the first time they've used the app.

**Which TWO precautions are most important?**

- **A.** Give the app read-write access to the specific client folder only, not to broader directories
- **B.** Ask the app to show its proposed reorganisation plan before executing any file operations
- **C.** Run the app overnight so it doesn't slow down daytime work
- **D.** Back up the entire Documents folder to an external drive before starting, in case the app makes any mistakes

> [!success]- Reveal Answer
> **Correct: A and B**
>
> **Why A is correct:** Concept 11 — least privilege. Scope access to ONLY the folder needed. The app shouldn't see or touch anything outside the client PDF folder.
>
> **Why B is correct:** Concept 11 — the 4-step safe workflow: tell it the task → ask for a plan → review the plan → only then approve. Seeing the plan BEFORE execution lets you catch wrong renames, misclassified files, or proposed deletions.
>
> **Why C is wrong:** When the app runs doesn't affect safety. Running it unsupervised overnight is actually MORE dangerous because you can't catch errors in real time.
>
> **Why D is wrong:** A backup is generally good practice, but it's not the MOST important precaution for this task. Scoping permissions and reviewing the plan PREVENT problems. A backup only helps AFTER problems occur — and restoring 200 reorganised files from a backup is painful.

---

### Q27 · D3 · Concept 12

A support team runs every meeting-notes cleanup on Opus with extended thinking, and runs its annual pricing model rebuild on Haiku "to save budget."

**Which statement best describes the problem?**

- **A.** Only the pricing model choice is wrong — using the flagship for cleanups is safe, just slow
- **B.** Neither is wrong — model choice is a cost decision and quality differences are minimal
- **C.** Only the cleanup choice is wrong — the pricing model rebuild on Haiku is a smart budget decision
- **D.** Both are wrong in opposite directions: the flagship wastes budget on routine work, and the cheapest rung wastes the complex analysis

> [!success]- Reveal Answer
> **Correct: D**
>
> **Why D is correct:** Concept 12 — the model ladder exists to match cost to complexity. Meeting-notes cleanup is routine, low-stakes work → use the cheapest/fastest rung. Annual pricing model rebuild is complex, high-stakes analysis → use the flagship with extended thinking. Both choices are mismatched.
>
> **Why A is wrong:** Using the flagship for routine cleanup is wasteful — it spends budget and time for no quality gain on a simple task.
>
> **Why B is wrong:** Quality differences between model rungs ARE significant for complex analytical tasks. A pricing model rebuild on Haiku will produce a shallower, less reliable analysis than on Opus.
>
> **Why C is wrong:** The Haiku choice for complex analysis is the more dangerous error — it wastes the entire analysis, not just budget. A shallow pricing model affects real business decisions.

---

### Q28 · D2 · Concept 13

An associate drafts a strategy report using Claude and iterates against Claude's own rubric until all scores reach 9.0. They consider the report done.

**What is missing from this process?**

- **A.** Nothing — a 9.0 across all criteria indicates high-quality work ready for distribution
- **B.** The associate should have iterated to 9.5 instead of stopping at 9.0
- **C.** A check by a model from a DIFFERENT family using the same rubric, since a model grading its own output shares the same blind spots as the model that produced it
- **D.** The associate should have asked Claude to verify all factual claims in the report

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Concept 13 — a model grading its own work is a closed loop. The same blind spots that produced the content also grade the content. A 9.0 from Claude alone is "I graded my own homework." A 9.0 from Claude PLUS a 9.0 from ChatGPT (different family) means two different teachers passed it. The second score is the one that means something.
>
> **Why A is wrong:** A self-graded 9.0 is not reliable proof of quality. The model may have consistently overlooked the same gaps across all scoring rounds.
>
> **Why B is wrong:** 9.5 vs 9.0 from the same model doesn't fix the closed-loop problem. A higher self-grade is still a self-grade.
>
> **Why D is wrong:** Claude verifying its own facts is the "circular" trap. Claude will confidently reaffirm claims it fabricated. Factual verification needs primary sources or human expertise, not self-check.

---

### Q29 · D2 · Concept 13

An associate sends a strategy memo through three models from different families. Claude gives it 9.0, ChatGPT gives it 9.2, and Gemini gives it 8.8. All three flag a market size claim as unsourced. The associate concludes the memo is strong.

**What has the associate missed?**

- **A.** Nothing — three high scores from different families confirm the memo is ready
- **B.** The scores confirm CRAFT quality (writing, structure, argument), but the unsourced market size claim needs verification against a primary source — models check craft, humans check the facts that matter
- **C.** The Gemini score is lower, so the associate should iterate with Gemini until it also reaches 9.0
- **D.** Three models agreeing means the memo is factually accurate since different blind spots would have caught errors

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Concept 13 — the honest caveat. Three models can agree on CRAFT (the writing is clear, the structure is sound) while all missing the same factual error. They share more training data than you'd guess. The score is a PROGRESS signal for craft, not a TRUTH signal for facts. The unsourced market size claim needs a human checking a primary source.
>
> **Why A is wrong:** High scores from three families confirm the writing is strong — NOT that the facts are correct. The unsourced claim is a gap all three flagged but none can fix.
>
> **Why C is wrong:** Iterating the Gemini score misses the real gap. An 8.8 vs 9.0 is a minor craft difference. The unsourced claim is the actual problem.
>
> **Why D is wrong:** Three models can be wrong about the same thing. Different blind spots help for CRAFT errors, but models share training data, so factual gaps can persist across all families.

---

### Q30 · D3 · Concept 12 · 〔Select 2〕

An associate uses Claude exclusively for all AI tasks — quick lookups, complex analysis, document drafting, and quality review.

**Which TWO habits would most improve their tool usage?**

- **A.** Keep at least two AI tools open from different model families — paste the same prompt into the backup when the primary doesn't feel right
- **B.** Use the model ladder within Claude: cheapest rung (Haiku) for lookups and simple rewrites, standard (Sonnet) for daily work, flagship (Opus) for complex trade-off analysis
- **C.** Switch entirely to ChatGPT, which has stronger image generation capabilities
- **D.** Run every prompt through all available AI tools simultaneously and use the longest response

> [!success]- Reveal Answer
> **Correct: A and B**
>
> **Why A is correct:** Concept 12 — different families have different blind spots. A second tool from a different family serves as a tiebreaker and catches things the primary misses. This also enables the cross-checking from Concept 13.
>
> **Why B is correct:** Concept 12 — the model ladder. Using the flagship for lookups wastes budget; using the cheapest for complex analysis wastes the analysis. Match the rung to the task complexity.
>
> **Why C is wrong:** Switching entirely to a different tool trades one set of blind spots for another. The point is to use MULTIPLE tools, not to replace one monopoly with another.
>
> **Why D is wrong:** Running every prompt through every tool is wasteful overkill for most tasks. Use multiple tools strategically (when the primary feels off, or for high-stakes cross-checking), not for every lookup.

---

## SCORING GUIDE

| Score | What it means | What to do |
|-------|--------------|------------|
| 27-30 (90%+) | Exam-ready on this material | Move to the next crash course |
| 23-26 (77-86%) | Strong but with gaps | Re-read the Scenario Guide for parts where you missed questions |
| 18-22 (60-73%) | Below passing threshold | Re-study the Scenario Guide part by part, then retake |
| Below 18 (<60%) | Foundational gaps | Go through the original crash course file again, then the Scenario Guide, then retake |

**Remember:** The real exam has 60 questions across ALL domains, not just prompting. This test covers only what the "AI Prompting in 2026" crash course teaches. You also need to study Workflow Design, Governance, Skills & Connectors, and the other crash courses.
