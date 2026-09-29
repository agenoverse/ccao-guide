---
tags:
  - CCAO-F
  - mock-exam
  - practice
total_questions: 60
pass_score: "720/1000"
---

# CCAO-F Mock Exam · 60 Practice Questions

> [!tip] How to Use
> Read the scenario → pick your answer mentally → click **Reveal Answer** to check.
> Multi-select questions are marked **〔Select 2〕** or **〔Select 3〕** in the header.

## Domain Map
| Domain | Weight | Item #s |
|---|---|---|
| D2 · Output Evaluation & Validation | 21% | 1, 2, 4, 7, 9, 10, 23, 25, 42, 45, 47, 48, 49 |
| D4 · Workflow Integration & Solution Design | 16% | 5, 8, 11, 12, 26, 35, 36, 39, 51, 56 |
| D6 · Governance, Risk & Responsible Use | 15% | 14, 15, 27, 29, 30, 37, 38, 57, 58 |
| D1 · Prompting & Task Execution | 14% | 13, 19, 31, 34, 43, 50, 55, 60 |
| D3 · Product & Model Selection | 12% | 6, 22, 24, 28, 41, 46, 59 |
| D5 · Configuration & Knowledge Management | 12% | 3, 16, 20, 21, 40, 44, 54 |
| D7 · Troubleshooting & Optimization | 10% | 17, 18, 32, 33, 52, 53 |

---

## Item 1 · D2 · obj 2.3

A junior analyst who joined a shipping broker last month, with no customs background, uses Claude to draft a customs-compliance briefing that the operations team will follow when clearing shipments. The draft addresses every requirement in the request and is consistent with the uploaded regulation extract.

**Before circulating it, which check most directly addresses the gap that remains?**

- **A.** Ask a colleague with customs experience whether the briefing is credible by the field's standards
- **B.** Ask a colleague to proofread the briefing for tone, clarity, and consistency before it goes to the operations team
- **C.** Ask Claude to rate the briefing's accuracy and revise any section that it scores below nine out of ten
- **D.** Run a formatting pass so that the briefing reads as professionally as one an expert would have written

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> The draft is internally consistent but produced by someone with no customs expertise. The gap is domain credibility — not tone (B), self-certification (C), or formatting (D). Only a human with field knowledge can confirm the briefing would hold up professionally.

---

## Item 2 · D2 · obj 2.3

A finance associate at a hotel group uploads a 300-row expense export and asks Claude to summarise spending by category. The reply gives category totals in prose, and those totals will decide next quarter's budget cuts. Every line item Claude mentions looks right.

**What is the most appropriate validation?**

- **A.** Accept the totals as they are, since correct line items imply that the category sums must be correct as well
- **B.** Spot-check ten line items against the export and accept the totals if all ten of them match
- **C.** Ask Claude to double-check its arithmetic and confirm that every category total is correct
- **D.** Have the totals computed by code Claude runs and shows, then check the rows and categories it used

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> Prose arithmetic over 300 rows is unreliable even when individual line items look right. Code execution is deterministic and shows its work — you can verify which rows fed which category. Spot-checking (B) tests line items, not category logic. Re-asking Claude (C) uses the same mechanism that may have erred.

---

## Item 3 · D5 · obj 5.2

To "save context," an associate writes a one-page summary of a 70-page distribution agreement, pastes it into Claude, and asks for a risk analysis. The analysis misses two indemnity clauses that were never in the summary.

**What is the most appropriate change?**

- **A.** Upload the full agreement, since analysis quality depends on what is in front of the model
- **B.** Paste a longer, more careful summary that includes the indemnity section and the pricing schedules in full
- **C.** Switch to Opus, which reasons more deeply about the clauses that are present in the pasted summary
- **D.** Ask Claude which sections it would need, paste only those, and leave the rest of the agreement out

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> Analysis can only cover what's in the context window. The summary created the gap. No better summary wording (B), stronger model (C), or selective pasting (D) fixes the fact that unseen clauses produce unseen risks.

---

## Item 4 · D2 · obj 2.2 · 〔Select 3〕

An associate is reading an AI-generated market summary before repeating its claims to a client.

**Which THREE features of the text are signs that a claim may have been fabricated and should be checked against a source?**

- **A.** A statistic quoted to two decimal places with no source attached to it
- **B.** Hedged phrasing such as "this may vary by region" placed around a claim
- **C.** A statement that the assistant "checked the supplier's website," with no page or quote shown
- **D.** A summary that is noticeably longer than the associate had expected it to be
- **E.** A figure stated on the first page that contradicts the same figure restated near the end
- **F.** A structure that follows the headings of the associate's usual report template

> [!success]- 🔍 Reveal Answer
> **Correct: A, C, E**
>
> - **A** — False precision with no source is a fabrication signal
> - **C** — An unverifiable claim of verification ("checked the site" with no evidence) is a red flag
> - **E** — Internal contradiction is a classic inconsistency/hallucination sign
> - **B** — Hedging is responsible language, not suspicious
> - **D** — Length tells you nothing about accuracy
> - **F** — Matching your template format is not suspicious

---

## Item 5 · D4 · obj 4.2

A reporting team wants to redesign its monthly inventory report around an AI assistant. It has planned two changes — consolidating three prompts into one, and moving the format rules into standing instructions — and it wants to report an improvement figure to management.

**What should the team do first?**

- **A.** Move the repeated format rules into configuration first, so that every later run benefits from the fix
- **B.** Consolidate the three prompts into a single prompt, since removing steps is the biggest saving available
- **C.** Pick "time saved" as the figure to report, so that the improvement can be shown to management quickly
- **D.** Run the current process once unchanged and record its time, revision rounds, and manual steps

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> You can't measure improvement without a baseline. Record the current process first — time, revision rounds, manual steps — before making any changes. Without a baseline, you have nothing to compare against.

---

## Item 6 · D3 · obj 3.1 · 〔Select 3〕

An associate has six requests for Claude in one afternoon.

**Which THREE pair the request with the right feature?**

- **A.** "What did the port authority announce this morning about the berth closure?" → web search
- **B.** "Pull last quarter's approved rate card from the finance team's shared drive" → web search
- **C.** "Which lease in this thread is riskier to exit early, given the break clauses?" → extended thinking
- **D.** "What is today's VAT rate on imported machinery, for the customs declaration?" → research mode
- **E.** "Produce a cited comparison of cold-chain logistics providers in East Africa, with funding and key customers" → research mode
- **F.** "Rewrite this three-line status update in a friendlier tone for the team channel" → extended thinking

> [!success]- 🔍 Reveal Answer
> **Correct: A, C, E**
>
> - **A** — Real-time news → web search ✓
> - **C** — Legal clause trade-off analysis → extended thinking ✓
> - **E** — Multi-source, cited, comprehensive comparison → research mode ✓
> - **B** — Internal shared drive needs a connector, not web search
> - **D** — A simple current fact needs web search, not full research mode
> - **F** — A 3-line rewrite needs no deep reasoning

---

## Item 7 · D2 · obj 2.6 · 〔Select 3〕

In one session an analyst asks Claude for: a quick explanation of what "demurrage" means; a comparison of nine customs brokers on fee, clearance time, and port coverage that finance will load into a sheet; and a one-page onboarding checklist that will be circulated to new hires.

**Which THREE format choices are correct?**

- **A.** The broker comparison as structured output — a table or a spreadsheet file
- **B.** The explanation of "demurrage" as an inline conversational reply in the chat
- **C.** The onboarding checklist as an inline chat reply that new hires copy out
- **D.** The onboarding checklist as a document artifact beside the conversation
- **E.** The broker comparison as a prose paragraph inside the chat reply
- **F.** The explanation of "demurrage" as a document artifact beside the conversation

> [!success]- 🔍 Reveal Answer
> **Correct: A, B, D**
>
> - **A** — Multi-row data going into a spreadsheet → structured output ✓
> - **B** — A quick definition → inline conversational reply ✓
> - **D** — A document to be circulated → artifact ✓
> - **C** — A checklist people will use needs to exist as a proper artifact
> - **E** — Tabular comparison data in prose loses the structure finance needs
> - **F** — A quick vocabulary question doesn't warrant an artifact

---

## Item 8 · D4 · obj 4.5

A team lead cannot tell from policy whether recording customer calls for AI-generated summaries needs each customer's consent in a second jurisdiction the company has just entered. The question has to go to the legal owner.

**Which escalation gives the owner the most useful basis for a decision?**

- **A.** The workflow, who it reaches, the control already added, and the one specific question that policy leaves open
- **B.** A completed risk matrix scoring the workflow on ten criteria, with a total score and a recommendation to approve
- **C.** A note saying "I think this is fine — can you approve it today so that we can start recording tomorrow morning?"
- **D.** A request to pause the recordings until the AI policy is updated to say explicitly how consent should work

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> The legal owner needs: what the workflow is, who it affects, what control is already in place, and the specific unanswered question. A risk matrix (B) adds judgment the associate isn't qualified to make. C asks for approval with no basis. D stalls indefinitely.

---

## Item 9 · D2 · obj 2.3

Preparing a client note, an associate asks Claude for the threshold at which a regional data-protection rule currently applies. Claude cites a consultancy blog post from 2023 and gives a figure. The associate opens the post: it exists and states that figure.

**What is the most appropriate next step?**

- **A.** Find the regulator's own current page, confirm the figure and date there, and cite that
- **B.** Use the figure as given; the citation was opened and the page supports the claim as written
- **C.** Ask Claude for two more sources and use the figure if they agree with the consultancy blog post
- **D.** Drop the figure from the note, since a 2023 source cannot be relied on for a current rule anyway

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> A 2023 consultancy post is not authoritative for a current regulatory threshold. The rule may have changed. Always go to the primary source — the regulator's own current page. Two more blog posts (C) still aren't primary sources.

---

## Item 10 · D2 · obj 2.2

An HR associate asks Claude, "Why does a four-day week improve retention more than flexible hours?" and receives a persuasive, well-organised case. In a separate chat, a colleague asks why flexible hours improve retention more than a four-day week, and receives an equally persuasive case. The associate concludes that Claude "doesn't know."

**Which failure pattern best explains the two answers?**

- **A.** Hallucination: the model fabricated the supporting evidence behind each of the two contradictory answers
- **B.** Context overload: the second chat was contaminated by the history of the first conversation's exchanges
- **C.** Run-to-run inconsistency: random sampling produced two different answers to what is the same question
- **D.** Sycophancy from leading framing: each question signalled the conclusion it wanted and the trained lean supplied it

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> "Why is X better than Y?" is a leading question that signals the desired conclusion. The model's trained lean toward agreeable, confident text supplies the answer. Fix: neutral framing — "evaluate both and give the strongest case on each side."
>
> - **A** — May apply to individual claims, but doesn't explain why *opposite* framings each got their wish
> - **B** — Can't apply; the chats were separate
> - **C** — Misattributes a systematic bias to random sampling; these weren't the same question
>
> 📚 *Re-read: What AI Actually Is · Idea 6 "Its confident tone is a learned style"*

---

## Item 11 · D4 · obj 4.4 · 〔Select 2〕

A customer-onboarding workflow with Claude has run well for four months. Five changes are proposed.

**Which TWO leave Claude with more authority than the step's risk allows, whether by decision or by default?**

- **A.** Let Claude approve KYC exceptions directly, a binding decision hard to unwind, because its summaries have been accurate for months
- **B.** Have the compliance analyst sign off the day's exceptions from the summary line, without opening any case, to hit the SLA
- **C.** Move document extraction into a reusable Skill so that it runs the same way for everyone on the onboarding desk
- **D.** Compute risk scores with code execution and keep the analyst's approval gate immediately after them in the flow
- **E.** Add a named reviewer and a stated checkpoint for the step that drafts the rationale for each exception

> [!success]- 🔍 Reveal Answer
> **Correct: A, B**
>
> - **A** — "Halo delegation": summary quality is evidence about summaries, not about the approval decision. A binding, hard-to-unwind step shouldn't be handed to Claude because a different step went well.
> - **B** — "Unstaffed gate": the reviewer signs a summary line without opening cases. The gate exists on paper only — Claude decides by default.
> - **C** — Changes how a step runs, not who owns it. Safe.
> - **D** — High-stakes computation kept safe by the human gate immediately after. ✓
> - **E** — Adds proper structure (named person + what they check) to a collaborative step. ✓
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concept 7 "Mapping errors"*

---

## Item 12 · D4 · obj 4.1

A facilities associate at a restaurant group has Claude extract the operating requirements from a new franchise agreement and the franchisor's onboarding emails. Claude returns a tidy list of 37 requirements, each with a short label.

**Before the team starts planning, which next request adds the most protection against a missed obligation?**

- **A.** Add, per requirement, its source clause, whether the emails already settle it, and whether it is ambiguous enough to need a question
- **B.** Draft the opening-day plan now and flag any requirement the plan cannot meet, so that gaps become visible early
- **C.** Group the 37 requirements by theme and rank them by how expensive each one would be to get wrong
- **D.** Summarise the agreement in two pages so that the team can check the list of 37 against that summary instead

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> Requirements must be specific, traceable, and testable. Adding source references (so someone can verify) + an ambiguity flag moves checking to the requirements stage — far cheaper than discovering gaps in execution.
>
> - **B** — Builds on an unchecked list; discovers gaps at the most expensive point
> - **C** — Prioritises a list nobody has confirmed is complete
> - **D** — Asks for a summary when a structured, verifiable list is what's needed
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concept 2 "Requirements"*

---

## Item 13 · D1 · obj 1.2

A customer-insights associate pastes forty customer-interview transcripts into one message and asks Claude to code each transcript by theme, count the themes, rank them, and write the insight memo in a single pass. The memo reads well. Later a colleague finds that one theme was mis-coded in eight transcripts, and the error survived into the counts, the ranking, and the memo.

**Which restructuring would most reduce this risk next time?**

- **A.** Keep one request but add "work carefully and re-check each theme code before writing the memo"
- **B.** Send one request per stage, and verify the theme-coding table against the transcripts before counting
- **C.** Run the same single request on a more capable model and compare its memo with this one
- **D.** Split the transcripts into four batches of ten and run the full single-pass request on each batch

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> Split multi-stage jobs by order: code → count → rank → write. The check goes on the stage where a mistake spreads farthest — here, the coding. A mis-coded theme that propagates through count/rank/write looks fine in the memo.
>
> - **A** — Keeps single pass; model can't see its own mis-coding
> - **C** — Changes model, not structure; error still propagates unseen
> - **D** — Shrinks each batch but keeps all stages inside it
>
> 📚 *Re-read: AI Fluency · Section 4.2 "Process description"*

---

## Item 14 · D6 · obj 6.4

An AI-prioritised complaints queue appears to rank complaints from corporate accounts above older, still-unresolved complaints from individual customers. The associate is unsure whether the pattern is a problem and does not own the complaints policy.

**What is the most appropriate action?**

- **A.** Proceed with the queue; it seems sensible, and corporate accounts may simply carry more at stake
- **B.** Work through who is affected, what could go wrong for them, and what should be disclosed, then escalate to the policy owner
- **C.** Re-run the prioritisation with the account-type field removed and then adopt whichever of the two queues looks fairer
- **D.** Ask the assistant whether its own ranking is biased, and keep the queue if it says that it is not

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> An unclear fairness case uses four questions: who is affected (including those who never see the result)? What could go wrong for them? What would a fair outcome look like? What should be disclosed? If you can't answer all four, escalate — guessing turns an unclear case into your mistake.
>
> - **A** — The guess; "may simply carry more at stake" is an assumption
> - **C** — Makes a fairness judgment the associate doesn't own
> - **D** — Asking the model to certify itself is never a signal
>
> 📚 *Re-read: AI Fluency · Section 6.3 "Deployment diligence — unclear cases"*

---

## Item 15 · D6 · obj 6.2

An associate must apply 140 payroll corrections to named employee records, and the employee identifiers are the substance of the task. Company policy classes such records as restricted.

**What is the most appropriate action?**

- **A.** Redact the identifiers anyway and apply as many of the corrections as the remaining columns allow
- **B.** Confirm with the compliance owner which route is approved for this data and purpose, then use that route
- **C.** Upload the records to the company's enterprise Claude workspace, since an enterprise plan is approved for internal work
- **D.** Build a custom connector to the HR system yourself, so that the data never leaves it as a file

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> When identifiers are what the task works on, redaction breaks the task (A). For restricted data, route approval comes from the compliance owner — not a guess at the keyboard.
>
> - **C** — An enterprise plan is not permission; the useful question is whether the route is approved for this data *and this purpose*
> - **D** — Expert's trap: technically clever but moves restricted data through an unapproved route
>
> 📚 *Re-read: Governance, Risk & Responsible Use · Sections 2.3–2.4*

---

## Item 16 · D5 · obj 5.1

An associate added "always open with a three-line executive summary" and "use the Meridian account's tone guide" to their account-level Claude instructions. Now every chat, including quick questions on unrelated topics, opens with an executive summary in the Meridian voice.

**What is the most appropriate fix?**

- **A.** Delete the account-level instructions entirely, since no single rule can be expected to fit each conversation anyway
- **B.** Keep both rules but add exceptions to the account-level text for each kind of chat where they should not apply
- **C.** Remove both rules and rely on memory to learn when the associate wants the summary and the Meridian voice
- **D.** Move both rules into the Meridian Project's instructions and keep the account text to what is true everywhere

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> Account-level instructions land in every window. Write there only what's true for every conversation. Topic-specific rules belong in a Project, where they apply only to chats inside it.
>
> - **A** — Throws away the layer instead of scoping it correctly
> - **B** — Grows global text with exceptions — the road to 20 contradictory lines
> - **C** — Memory is a best-effort note, not configuration
>
> 📚 *Re-read: What AI Actually Is · Appendix A.5 "Desk tenants"*

---

## Item 17 · D7 · obj 7.3

An associate runs a security-style review before every use of the assistant's built-in spreadsheet skill on internal data, but enabled a community-published skill, with the shared drive connected in write mode, after a quick glance at its description.

**Which correction is most appropriate?**

- **A.** Apply the same full review to both uses, since consistency is what keeps any governance habit alive
- **B.** Drop the built-in review; disable the community skill until it has been read, and return its drive connection to read-only
- **C.** Keep both habits as they are; the built-in review is harmless and the community skill has caused no problems
- **D.** Remove the community skill and stop using skills altogether until IT publishes an approved list

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> **Care rises as capability rises.** Built-in tools are safe — the everyday review is over-cautious there. The community skill with write access is high-capability and under-reviewed. Specific controls: read a skill before using it; start connectors read-only.
>
> - **A** — Over-verifies low-risk work; that habit gets dropped within a week
> - **C** — Leaves the high-capability door open because nothing went wrong yet
> - **D** — Abandons the tool class instead of governing it
>
> 📚 *Re-read: Skills & Connectors · Part 5 "Use this safely"*

---

## Item 18 · D7 · obj 7.1

In a fresh chat, an associate asks Claude to draft a tariff-change notice for customers. The first reply omits the legal footer and states the amounts in the wrong currency. The notice is the first of its kind the associate has drafted with Claude.

**Which action fits the symptom?**

- **A.** Switch to Opus straight away, since a more capable model would not omit the footer or mistake the currency
- **B.** Start another fresh chat and send the same request again, since the first chat may already be overloaded
- **C.** Treat it as under-specification: re-read the request against its parts and add what it left out
- **D.** Check whether a stored instruction or knowledge file has gone out of date since the last notice was drafted

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> **Timing tells you where to look first.** Wrong from the first answer → under-specification. Re-read the prompt: the footer and currency were almost certainly never in it.
>
> - **A** — Bottom-of-ladder move made before cheap causes are checked
> - **B** — Context overload doesn't apply to a first reply in a fresh chat
> - **D** — Stale config signature is "it used to work," not "it was wrong from the start"
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concepts 11–12 "Four causes" and "The diagnostic sequence"*

---

## Item 19 · D1 · obj 1.2

An operations associate must reconcile fourteen months of technician-shift exports against the site sign-in sheets and produce one report. The associate has opened only one of the fourteen files; a colleague has warned the exports are "messy." The associate plans to write a complete set of rules for every data problem they can imagine, then have an AI assistant write and run the code.

**What should the first prompt be?**

- **A.** The full set of rules, with one for every irregularity the associate can imagine, so that the run is clean
- **B.** A request to produce the reconciliation now, fixing whatever data problems show up after the first output
- **C.** A request to profile the files and list anything ambiguous or irregular before any rule is written
- **D.** A request for the code in a named language, so the associate can read the logic before it runs on real files

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> You often won't know what's hiding in data you haven't examined (13 of 14 files unseen here). Make discovery the first prompt — inspect the files, report what's unclear, then write rules with knowledge instead of imagination.
>
> - **A** — Writes edge cases from guesswork; misses defects not thought of
> - **B** — Runs computation first, repairs after — the expensive order
> - **D** — Asks the associate to judge the language and read code they can't check
>
> 📚 *Re-read: Code You Never Write · Concept 5 "Brief the problem, not the program"*

---

## Item 20 · D5 · obj 5.3

A Project instruction says, "Flag unusual expenses in the monthly report." Each run flags different items, and two colleagues running the same data get different results.

**What is the most appropriate fix?**

- **A.** Add "be careful and consistent" to the instruction so that the model applies the same judgment each time
- **B.** Switch the Project to a more capable model, so that the ambiguity is resolved the same way on every run
- **C.** Rewrite the rule with a named amount threshold and expense category, so that each reader flags the same items
- **D.** Add three examples of expenses flagged last quarter and leave the model to infer the threshold from them

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> Test every instruction: "Would two colleagues who read it do the same thing?" "Flag unusual expenses" fails. "Flag any single payment above £X with a [CATEGORY] note" passes. A failing instruction shows no error message — the output just varies each run.
>
> - **A** — An exhortation, not a criterion
> - **B** — Asks a stronger model to guess the same way about an unwritten rule
> - **D** — Three examples still leave the threshold unnamed; two readers can draw the line differently
>
> 📚 *Re-read: Skills & Connectors · Section 13 "Test, then iterate"*

---

## Item 21 · D5 · obj 5.4

A pricing Project produces a customer quote, and the quote lists unit prices that nobody on the team currently recognises, each shown to the cent. The associate assumes Claude hallucinated them and plans to re-prompt with "use only current prices."

**What is the most appropriate first step?**

- **A.** Re-prompt with stricter wording about using only current prices, and regenerate the whole quote
- **B.** Check the Project's knowledge for a superseded rate card still there, replace it, and set review dates
- **C.** Switch the Project to Opus, which is less prone to fabricating figures across a long document
- **D.** Ask Claude to rate its confidence in each quoted price and keep only those it rates above 90 percent

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> **Stored context goes stale, and stale context fails quietly** — no error message, just a confident wrong answer. Old prices to the cent look exactly like hallucination, but the cause is configuration. Check and replace the knowledge files; set a review schedule.
>
> - **A** — Tells the model to ignore knowledge it was configured to use; it can't know which prices are current
> - **C** — Changes the model that faithfully read a stale file
> - **D** — Confidence ratings aren't a signal; the model was confident about the stale prices too
>
> 📚 *Re-read: ChatGPT & Claude Quick Reference · Concept 5 caution "Stored context is a responsibility"*

---

## Item 22 · D3 · obj 3.4

An associate proposes that all supplier-pricing conversations be run in Claude's incognito chat — and, for colleagues who use ChatGPT, in temporary chat — "so there is nothing on record if the audit team asks."

**Which statement is accurate?**

- **A.** The proposal works: both modes discard the conversation at once, and neither vendor stores anything at all from it
- **B.** Both keep the chats out of history and memory, but each vendor retains a copy for a period and company records may hold it
- **C.** Claude's incognito chat leaves no trace, but ChatGPT's temporary chat is retained, so the proposal works just for Claude users
- **D.** Neither mode changes anything much: private modes affect memory alone, and both chats are stored in history as usual anyway

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> Both modes are **memory-free, not trace-free**. Both vendors retain a copy for ~30 days for safety/abuse review. On an org plan, admin visibility and exports also exist. Using private modes to keep pricing decisions "off the record" misreads what they do — and looks like concealment.
>
> - **A** — Zero-retention misreading
> - **C** — No asymmetry between vendors; both retain copies
> - **D** — Goes too far; the modes do keep chats out of history and memory
>
> 📚 *Re-read: ChatGPT & Claude Quick Reference · Concept 5 "Memory and standing instructions"*

---

## Item 23 · D2 · obj 2.4

A property manager drafts a proposal for Claude-drafted replies to tenants' maintenance requests. Its control section says, "All replies will be reviewed by a person before they are sent." A colleague says the wording is fine because it clearly keeps a human in the loop.

**What is the most appropriate improvement?**

- **A.** Change it to "light human review," so that the reviewers are not overloaded once the drafts have proved reliable
- **B.** Add that a reviewer will sample ten percent of the replies after they have been sent, to catch recurring problems
- **C.** Name the role that reviews, the specific risk the review checks for, and that it happens before a reply is sent
- **D.** Remove the requirement, since a rule that nobody can verify in practice is worse than having no rule at all

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> "A human will review it" sounds responsible and often means nothing. A **defined gate** names three things: **who** reviews (the role), **what** they verify (the specific risk), and **when** (before the output becomes hard to undo).
>
> - **A** — "Light review" is still undefined
> - **B** — A real control placed at the wrong moment: after replies reach tenants
> - **D** — Removes the safeguard instead of fixing it
>
> 📚 *Re-read: Governance, Risk & Responsible Use · Section 1.3 "A human in the loop is not a gate"*

---

## Item 24 · D3 · obj 3.4

Two hours into a chat about a supplier audit, Claude starts citing the audit file without the page numbers it was told to include at the start, gives a supplier score that contradicts the one it gave an hour earlier, and drifts into general advice about audits.

**What is the most appropriate move?**

- **A.** Restate the page-number rule and the correct score at every turn, and keep working in the same long chat
- **B.** Open a blank chat and start the audit again from the very beginning, so that the drift cannot follow you
- **C.** Ask for a summary of decisions, open points, and every rule; correct it; paste it into a fresh chat with the files
- **D.** Move the whole conversation into a Project, so that the accumulated context persists and the drift then stops for good

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> Three signs the chat has gone stale: forgets rules, contradicts earlier figures, drifts generic. The move: **ask for a state summary** (decisions, open points, every rule) → correct it → paste into a fresh chat with files re-attached.
>
> - **A** — Keeps repairing an overcrowded window
> - **B** — Discards two hours of decisions the summary would have carried
> - **D** — Projects hold standing files/instructions; they don't un-crowd a long conversation
>
> 📚 *Re-read: ChatGPT & Claude Quick Reference · Concept 3 "Context you attach"*

---

## Item 25 · D2 · obj 2.6

A compliance associate generates the monthly regulatory attestation pack in an AI assistant's cloud workspace. The firm's records policy requires every attestation to be held in the records system for seven years. Internal audit asks where the packs are archived.

**Which action is most appropriate?**

- **A.** Keep the packs in the workspace and send audit a link; the workspace keeps every version and stays current
- **B.** Add the auditors as collaborators on the workspace so that they can always open the latest version
- **C.** Forward audit the chat transcripts in which each pack was produced, since they show the full history
- **D.** Save each pack into the firm's records system under its retention rules and share it from there

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> **Finished work exits the platform.** A deliverable that exists only in the vendor's storage is safe today and hostage tomorrow. The records policy names the firm's own records system as the 7-year home.
>
> - **A** — "Stays current" is the giveaway: an archived attestation is a fixed version, not a live one
> - **B** — Extends access to vendor storage instead of moving custody
> - **C** — Sends scratch (the conversation) in place of the record
>
> 📚 *Re-read: General Agents on the Web · Concept 5 "The three file tiers"*

---

## Item 26 · D4 · obj 4.5

An associate writes three descriptions of a Claude-assisted invoice-dispute triage workflow: one for the operations manager, one for the CFO, and one for the external auditor. The CFO version reads, "AI clears the disputes, cutting the backlog from ten days to two, measured against last quarter's baseline."

**What is the problem with that version?**

- **A.** It states a backlog figure without a published source, so that the CFO has no way to verify the improvement claim
- **B.** It drops the human checkpoint from the sentence, so the CFO now believes that there is no gate
- **C.** It is too brief for the CFO, who needs the mechanism and the failure modes
- **D.** There is no problem: executives want the outcome, and the oversight detail belongs in the auditor's version

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> "AI clears the disputes" drops the human gate from the sentence. Whoever hears it now believes there is no gate. Fix: state what the tool does, then name the human checkpoint. This is most critical in the executive version, where it most often disappears.
>
> - **A** — The sentence already ties the figure to a baseline
> - **C** — Gives the CFO the operations manager's level of detail
> - **D** — The instinct this course names as backwards: stakeholders trust workflows *more* when checkpoints are explicit
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concept 18 "Value and limits"*

---

## Item 27 · D6 · obj 6.1

A finance associate has an assistant-written script that prepares the monthly supplier payment run for upload to the bank. It has passed a check against a past month whose correct run is known. A colleague suggests letting the script release the payments automatically each month.

**Which arrangement is most appropriate?**

- **A.** Let the script prepare the run and a named person release it, since a released payment cannot be recalled
- **B.** Let the script release automatically, since it has been tested and a person would only re-read the same numbers
- **C.** Have the script also generate a confirmation report and treat a clean report as the release approval
- **D.** Stop using the script for preparation as well, since a payment run is too high-stakes for automation at any step

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> **High-stakes, no-undo acts belong at the human's hand.** Code prepares; a person sends. The known-answer test earned trust for the preparation step, not for the irreversible payment release.
>
> - **B** — A passed test is not a person who answers for the payments
> - **C** — The report is produced from the same brief as the run; a rule left out is a mistake both make and agree on
> - **D** — Abandonment failure; preparation is exactly where automation belongs
>
> 📚 *Re-read: Code You Never Write · Concept 13 "The edge of the map"*

---

## Item 28 · D3 · obj 3.3

A support team runs every meeting-notes tidy-up on Opus with extended thinking turned on, and runs its annual pricing-model rebuild on Haiku "to save budget." A new team lead feels both choices are wrong.

**Which statement best describes the problem?**

- **A.** Only the pricing-model choice is wrong; using the most capable model for tidy-ups is a safe default even if slow
- **B.** Neither choice is wrong; model choice is a cost decision and quality differences between rungs are marginal
- **C.** Only the tidy-up choice is wrong; extended thinking should be on for the rebuild and off for tidy-ups whatever the model
- **D.** Both are wrong in opposite directions: the flagship spends budget on work needing neither, and the cheapest rung wastes the rebuild

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> The model ladder exists to match cost to complexity. **Short, routine work on the flagship wastes budget. Hard analysis on the cheapest rung wastes the analysis.** Both errors are real.
>
> - **A** — Treats the top model as a safe default (the over-spend half of the same error)
> - **B** — Denies the trade-off the ladder exists to price
> - **C** — Conflates the "thinking" switch (a setting inside one model) with the model ladder (which model you opened)
>
> 📚 *Re-read: AI Prompting in 2026 · Concept 12 "One more choice, inside a single brand"*

---

## Item 29 · D6 · obj 6.1

A lettings firm proposes that Claude issue the final decisions on whether a departing tenant's deposit is forfeited, directly from the tenancy agreement and the inspection file, arguing that any accuracy concern disappears if the team uses the most capable model.

**Which classification is correct?**

- **A.** Appropriate with light human review, since the model's error rate is low enough for spot-checks to catch the rest
- **B.** Fully appropriate, since the files contain everything needed and any error can be corrected once it is noticed
- **C.** Inappropriate for any involvement, including summarising the inspection file, because the subject is legal
- **D.** Inappropriate as the decision-maker: accountability cannot transfer to a tool, so a better model changes nothing

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> A deposit forfeiture is a final legal determination against a named person. **Accountability cannot transfer to a tool** — that barrier is about who answers for the outcome, not about accuracy. A more capable model doesn't change this.
>
> AI may still support the work (summarise the inspection file, draft for the person who decides) — just not make the final call.
>
> - **A** — "Light review" + spot-checks let the tool decide; undefined gate
> - **B** — Assumes a reversibility a forfeited deposit doesn't have
> - **C** — Abandonment failure: the subject rules out the verdict, not the support work
>
> 📚 *Re-read: Governance, Risk & Responsible Use · Sections 1.1 and 1.3*

---

## Item 30 · D6 · obj 6.3 · 〔Select 3〕

An associate discovers that a Claude-drafted pricing notice with a serious error went out to 300 customers an hour ago.

**Which THREE actions belong in the first hour?**

- **A.** Stop the spread: halt further sends and any scheduled runs of the same workflow
- **B.** Write down what went out, to whom, at what time, and what exactly was wrong
- **C.** Delete the chat and the draft so that the faulty version cannot be reused by anyone
- **D.** Wait until the full scope of the error is understood before telling anyone about it
- **E.** Report promptly through the organisation's incident path, stating the facts plainly and without guessing
- **F.** Have Claude draft a correction notice and send it to the 300 customers yourself within the hour

> [!success]- 🔍 Reveal Answer
> **Correct: A, B, E**
>
> **First-hour procedure:** 1) Stop the spread → 2) Record the facts → 3) Report promptly → 4) State facts plainly → 5) Follow incident owner's instructions.
>
> - **C** — Deleting your visible copy may not delete org/vendor records; turns a mistake into concealment
> - **D** — For customer-facing errors, timing may matter legally — don't wait for a perfect explanation
> - **F** — Notification and remediation decisions belong to the incident owner, not the associate
>
> 📚 *Re-read: Governance, Risk & Responsible Use · Section 7 "What to do when something goes wrong"*

---

## Item 31 · D1 · obj 1.3

An insurance-claims associate asks Claude for a first draft of a letter to a policyholder whose payout is delayed. The draft runs to 700 words against a 200-word limit, addresses "the customer" generically, and buries the one action the reader must take.

**Which next message is most likely to produce a better second draft?**

- **A.** "Score this draft out of ten on overall quality and keep improving whatever scores lowest until it reaches a solid nine."
- **B.** "This is not right at all. Try again with a completely different approach to the whole letter, please."
- **C.** Rewrite the original prompt from scratch with far more detail, run it on a stronger model, and compare the two.
- **D.** "The length broke, the reader is one worried policyholder, and the ask is buried; keep everything else and fix those three."

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> **Diagnosis beats grading for a weak first result.** Name which parts failed (length, audience, buried action) and change only those. A score says how far off you are; naming the failure tells the model what to move.
>
> - **A** — Grading with no criteria; for a weak draft, diagnosis is stronger
> - **B** — A reaction, not an instruction; the model doesn't know which part failed
> - **C** — Throws away what was right; adds a model change the symptom doesn't call for
>
> 📚 *Re-read: AI Prompting in 2026 · Concept 7 "The brainstorm-iterate loop"*

---

## Item 32 · D7 · obj 7.3

A team redesigned its monthly compliance-report workflow around an AI assistant; one analyst produces the report each month, and the team reports a 60 percent time saving. In the second month the regulator queried an amount in the submitted return.

**Which metric should the workflow be optimised for, and why?**

- **A.** Time, because speed was the point of the redesign and small errors are cheap to correct afterwards
- **B.** Accuracy, because one wrong figure in a compliance output costs more than an hour saved
- **C.** Consistency, because varying formats erode a regulator's trust faster than a delayed report does
- **D.** Variance, because the report is produced by several people and the cost lives between them

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> **Pick the metric that matches why the workflow mattered.** For compliance/finance: accuracy (one wrong figure costs more than an hour saved). Time = internal drafts. Consistency = customer-facing reports. Variance = multi-person work. Here one analyst produces the report, so variance doesn't apply.
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concept 16 "Measure"*

---

## Item 33 · D7 · obj 7.1

In every new chat, Claude addresses an associate as the lead of a project that closed months ago and frames its answers around that project. The associate has been adding a correction line to each prompt since.

**What is the most appropriate fix?**

- **A.** Keep adding the correction line to each prompt, since it is cheap and has worked every single time
- **B.** Use incognito chats for everything from now on, so that the wrong assumption is never loaded
- **C.** Switch to a different model for all new chats, which will not carry the closed project forward into them
- **D.** Read the stored memory, correct or delete the closed-project note, then start a fresh chat

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> Memory is a note the tool writes about you and places in front of the model at the start of every new chat. When the same wrong assumption appears in every new conversation, **fix the memory** — not the prompt.
>
> - **A** — Treats a configuration fault as a per-prompt chore
> - **B** — Discards all memory (including what's still true) to avoid editing one line
> - **C** — The memory note is placed in whichever model reads it
>
> 📚 *Re-read: AI Prompting in 2026 · Concept 4 "Context is the whole game — memory"*

---

## Item 34 · D1 · obj 1.1

A facilities associate at a logistics firm attaches the notes from a warehouse site inspection and asks Claude to "write up the inspection." The write-up is a tidy, general narrative and useless for its purpose: the insurer's loss adjuster needs only the three open defects, each with the date found and the photo reference.

**What is the most appropriate way to improve the request?**

- **A.** State the reader, the purpose, the length, the items to cover, and what to leave out
- **B.** Make the prompt much longer by describing the warehouse and the inspection day in full
- **C.** Rerun the request on Opus with extended thinking so the model infers what the reader needs
- **D.** Attach last year's internal inspection narrative so that Claude copies its structure exactly

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> A generic result from a bare request is a **completeness problem, not an intelligence problem.** The model was told nothing about who reads it, why, how long, or what to exclude. Supplying those elements turns a request into a briefing.
>
> - **B** — Adds words without adding the information the model lacked
> - **C** — Spends capability on a missing-context failure; no model can infer undisclosed requirements
> - **D** — Imitates a document written for a different reader; reproduces the wrong shape more faithfully
>
> 📚 *Re-read: AI Fluency · Section 4.1 "Product description"*

---

## Item 35 · D4 · obj 4.3

A procurement associate has iterated four times with Claude on a supplier scorecard table in chat. The columns, formatting, and filters are now right, but the weighted-score column is still subtly wrong each round, despite ever more precise wording about how the weights should be applied.

**What is the most likely root cause?**

- **A.** A feature problem: the weighted scores are being written as prose by the model and belong in code execution
- **B.** A description problem: the wording about the weights is still ambiguous and needs one more precise attempt
- **C.** A model problem: the task needs Opus rather than the model currently producing the scorecard table
- **D.** A context problem: four rounds have overloaded the chat, so earlier instructions about the weights no longer hold

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> A build loop fails two ways: a **description problem** (describing better solves it) or a **feature problem** (no amount of describing solves it). One repeatable calculation error while everything else improves = feature problem. Weighted scores are calculations → code execution, not prose.
>
> - **B** — Has already been tried four times; that's the evidence against it
> - **C** — Bottom-of-ladder move before cheap causes are ruled out
> - **D** — Would show as general degradation, not one column wrong each round
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concepts 9 and 11*

---

## Item 36 · D4 · obj 4.3

An associate built a quote generator by prompt inside a Claude Project for their own use. The sales director has since made "run it through the Project" a step in the CRM process, and two regional branches now quote customers from its output. The associate still fixes it by editing the prompt whenever a branch reports a wrong figure.

**What is the most appropriate action?**

- **A.** Keep improving it through the Project's prompt, since it already meets the branches' needs well enough
- **B.** Rebuild it with the API and add authentication yourself, since you understand the pricing rules best
- **C.** Escalate to engineering: other teams now depend on it, so it needs an owner, uptime, and access control
- **D.** Package it as a shared Skill so that every branch can regenerate a consistent copy of it whenever needed

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> **Dependency is the escalation signal.** When other teams rely on a prompt-built tool, it's infrastructure — it needs uptime, access control, an owner, and consistency guarantees. Escalating is the correct answer, not an admission of failure.
>
> - **A** — Ignores the dependency signal
> - **B** — Expert's trap: technically superior, outside the associate's role, still without an owner or support path
> - **D** — A stable, packageable method ≠ a tool other people are operationally exposed to
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concept 10 "Escalation"*

---

## Item 37 · D6 · obj 6.4

After twelve clean runs of an AI-drafted monthly client analysis, a vendor proposes that the outputs be signed "AI-generated" and carry no named human owner, because the track record proves reliability.

**Which statement is correct?**

- **A.** A track record earns the assistant similar jobs, but each output still carries a person's name and that person answers for it
- **B.** After enough clean runs accountability moves to the vendor, since its model produced the work that was sent out to the client each month
- **C.** Labelling each analysis "AI-generated" replaces the need for a named owner, since the reader is told who produced it
- **D.** A named owner is needed only if a client challenges an output, at which point someone can be assigned to answer for it

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> **AI doing the work does not transfer accountability to AI. The name on the result is yours.** A clean track record earns the assistant similar jobs — it never earns your name off the result, however long the streak.
>
> - **B** — Accountability doesn't move to the vendor; they didn't send the work to your client
> - **C** — Transparency (labelling) ≠ accountability (who stands behind it)
> - **D** — Ownership is at the moment work goes out, not retroactively when challenged
>
> 📚 *Re-read: Just Delegate It · Concept 10 "Verify before you accept"*

---

## Item 38 · D6 · obj 6.2

A facilities analyst wants Claude to find building-usage patterns across a year of badge-swipe records. Policy restricts sharing regulated personal data. The analyst has replaced every badge number with a coded value, but the workbook's second tab still holds the lookup that maps each code back to an employee.

**What is the most appropriate action?**

- **A.** Proceed as planned; the badge numbers have been coded, so the data is now anonymised for the analysis
- **B.** Upload it as it is, but in an incognito chat, so that the lookup tab is not retained afterwards
- **C.** Remove the lookup tab and unneeded fields, confirm no mapping travels with the file, then run the analysis
- **D.** Abandon the analysis altogether, since the data cannot be made safe without destroying the pattern it needs

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> Coding badge numbers is a first move, not a verdict. While a lookup exists, the data is **pseudonymised** — not anonymised — and keeps its restricted tier. The task needs the pattern, not the identifiers, so stripping the lookup is safe and sufficient.
>
> - **A** — Coded data with a lookup present is pseudonymised, not anonymous
> - **B** — Incognito governs memory/history, not whether the upload was permitted
> - **D** — Real cost paid for zero protection; the analysis is viable without the lookup
>
> 📚 *Re-read: Governance, Risk & Responsible Use · Sections 2.2–2.3*

---

## Item 39 · D4 · obj 4.1

A marketing associate attaches two years of event data and asks Claude for next year's event calendar with a budget allocation per event. The plan is detailed and confident and allocates last year's budget across twelve events. In a leadership meeting last week the CFO halved the events budget; the associate did not know, and the decision is recorded in no document.

**What best explains the failure?**

- **A.** The prompt was under-specified; clearer instructions would have made the model hedge about the budget
- **B.** The wrong model tier was used; a more capable model would have flagged its uncertainty about the budget
- **C.** A step depended on an input never in front of the model, a meeting decision, so it filled the gap at full confidence
- **D.** The attached data was too large, so the context window dropped the part that would have revealed the CFO's budget decision

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> Key question before delegating: **"Could I put everything this step needs into the window?"** The new budget existed only in an undocumented meeting. A model with missing inputs doesn't stop — it fills the gap with what such a decision usually looks like, at full confidence.
>
> - **A** — No wording could supply a fact nobody typed
> - **B** — No model knows an undocumented meeting decision
> - **D** — The information was never in the data to begin with
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concept 4 "Where insight lands"*

---

## Item 40 · D5 · obj 5.1

For convenience, a consultant put the pricing files of two business units — wholesale and retail — into one Claude Project. In a chat about a retail quote, Claude applied the wholesale unit's volume discounts.

**What is the most appropriate fix?**

- **A.** Add "unit: retail" at the top of every prompt, so that Claude knows which unit's files to apply
- **B.** Create one Project per unit, each with its own instructions and knowledge files, and move the files across
- **C.** Use incognito chats for retail quotes so that nothing from the shared Project carries over into them
- **D.** Delete the wholesale files from the shared Project after each retail chat, and upload them again whenever they are needed

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> **Projects keep separate memory spaces** — context in one doesn't leak into another. Two units in one Project is the leak; two Projects is the wall.
>
> - **A** — Turns a configuration fault into a per-prompt chore; both rate cards still in the window
> - **C** — Incognito is unavailable inside Projects anyway
> - **D** — Makes configuration a manual churn of deletes and re-uploads; a second Project does it once
>
> 📚 *Re-read: What AI Actually Is · Appendix A.5 "Desk tenants"*

---

## Item 41 · D3 · obj 3.2

A legal-operations associate uses Sonnet, with extended thinking already on, to analyse a 180-page master services agreement for obligations that cross-reference one another. The same request had worked well on a 20-page contract. On the 180-page agreement the answer is fluent but shallow and misses obligations spread across several sections.

**Which change best fits the task?**

- **A.** Move to Opus, which is built for holding a long, complex structure coherent at once
- **B.** Switch to Haiku to process the document faster, reducing the chance of it losing track
- **C.** Turn extended thinking off; the extra reasoning is diluting the model's attention to the text
- **D.** Split the agreement into ten separate chats so that each section is analysed on its own

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> **Ladder logic: default to the middle; escalate upward for depth.** The request worked on a shorter doc — it's not the cause. The remaining lever is the rung. Opus is for tasks needing a large, complex structure held coherent at once — exactly this symptom.
>
> - **B** — Wrong direction; fast/cheap models are for high-volume, low-depth work
> - **C** — Removes the one lever already helping; thinking is a setting inside the model, not the rung
> - **D** — Destroys the cross-references the task exists to find
>
> 📚 *Re-read: What AI Actually Is · Appendix A.3 "The model ladder"*

---

## Item 42 · D2 · obj 2.4 · 〔Select 2〕

In one morning an associate uses an AI assistant for five tasks.

**For which TWO is the associate's usual read-through NOT enough on its own — because the output needs a second reviewer, or because the action must be held and verified before it is taken?**

- **A.** An agenda for the associate's own one-to-one with their manager
- **B.** A reply to one customer's routine query, which the associate sends personally
- **C.** A press statement that will be published on the company website
- **D.** Cancelling forty duplicate purchase orders in the ERP system from the assistant's list
- **E.** Five title ideas for the internal newsletter's next issue

> [!success]- 🔍 Reveal Answer
> **Correct: C, D**
>
> **Checking scales with reach and irreversibility:**
> - **C** — Published to the public = maximum reach → second reviewer required
> - **D** — Bulk cancellation cannot be undone → check before the act, because there is no reviewer afterwards
> - **A & E** — Reach nobody; a glance is proportionate
> - **B** — Reaches one person, reversible with a follow-up; sender's full read is enough
>
> 📚 *Re-read: AI Fluency · Section 6.3 "Deployment diligence"*

---

## Item 43 · D1 · obj 1.4

A facilities associate pastes a lift-maintenance contract into Claude and asks for the contractor's response-time obligations. Claude lists four obligations fluently. Three are in the contract; the fourth — a two-hour emergency call-out — is not, though it is common in the industry.

**What is the most appropriate way to re-run the request?**

- **A.** Turn on web search so that Claude can check the industry-standard response times as well as the contract's own terms
- **B.** Attach the contract as a file instead of pasting it, so that Claude reads the whole text more carefully
- **C.** Tell Claude to use only the pasted text, quote the sentence behind each answer, and say "not in the source" otherwise
- **D.** Add "be accurate and do not make anything up" to the request and run it again on the same contract

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> Two instructions make a source a source: **"use only this text"** + **"quote the sentence you used."** Without them, the model mixes given content with remembered knowledge (here, an industry norm). With them, "not in the source" becomes a good answer instead of a gap the model fills.
>
> - **A** — Adds the outside world to a task about one contract's terms
> - **B** — Changes delivery format without stopping the blending
> - **D** — An exhortation; the model already believed it was being accurate
>
> 📚 *Re-read: Just Delegate It · Concept 5 "The source"*

---

## Item 44 · D5 · obj 5.1 · 〔Select 3〕

A consultant is configuring Claude for ongoing work with one client.

**Which THREE placements are correct?**

- **A.** The firm-wide writing tone rule that applies to every chat → account-level instructions
- **B.** The client's recurring reference files and past deliverables → the client Project's knowledge
- **C.** "The client's negotiation is paused until the end of this month" → account-level instructions
- **D.** "Treat figures absent from the client's files as unconfirmed" → the client Project's instructions
- **E.** A one-off question about a colleague's memo on an unrelated matter → its own new Project
- **F.** The consultant's preference for short replies in every chat → Claude's memory, by mentioning it once

> [!success]- 🔍 Reveal Answer
> **Correct: A, B, D**
>
> The rule: **instructions for stable rules; knowledge for stable sources; a Project for one stream of work; the chat for today's job.**
>
> - **A** — Firm-wide rule true in every chat → account level ✓
> - **B** — Client's standing files → Project knowledge ✓
> - **D** — Rule governing this client's work → Project instructions ✓
> - **C** — A temporary fact into standing instructions; will still assert after negotiation resumes
> - **E** — A one-off job goes in the chat, not a new Project
> - **F** — A stable preference handed to memory (best-effort note), not configuration
>
> 📚 *Re-read: ChatGPT & Claude Quick Reference · Concept 5 "Three kinds of persistence"*

---

## Item 45 · D2 · obj 2.4

An accounts-payable desk runs supplier invoices through a Claude-assisted workflow. One step computes each invoice's early-payment discount with code execution; the next step is a supervisor who releases or holds each payment. A team member proposes removing the release step "because the arithmetic is code, it is always right, and the supervisor only re-reads it."

**What is the most appropriate response?**

- **A.** Agree: a computed discount does not need a human check, so the release step is now redundant friction
- **B.** Keep the step: the computation is safe to delegate only because a wrong figure can be reversed and a person decides next
- **C.** Replace the supervisor with a second AI pass that recomputes each discount independently and flags any differences it finds
- **D.** Move the calculation back to the supervisor to do by hand, since a step that matters should stay human-owned

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> **Being arithmetic does not make a step low-stakes.** What makes the code step safe to delegate is that its output lands in front of a human at the very next step. Remove that gate and the same calculation is no longer AI-appropriate — even though the arithmetic hasn't changed.
>
> - **A** — Confuses exact computation with a correct brief
> - **C** — Removes the person who answers for the payment; agreement between two runs ≠ accountability
> - **D** — Re-adds manual work based on "it matters" instead of "what stands after the step"
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concept 6 "Two worked maps"*

---

## Item 46 · D3 · obj 3.1

A sales associate runs research mode every time a pricing question comes up, "so Claude looks it up thoroughly." The answers arrive minutes later, built from external web pages, and keep missing the firm's own discount rules, which live in an internal policy document.

**What is the most appropriate change?**

- **A.** Keep research mode but add "use our internal pricing policy" to each request so it consults the right source
- **B.** Switch to Opus for pricing questions, since the flagship model has read more pricing material
- **C.** Put the internal policy into a Project's knowledge and ask pricing questions in chat inside that Project
- **D.** Paste the policy document into each new chat before asking, so that Claude has it in front of it

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> Research mode investigates the outside world — it will keep answering from the web however you phrase it. A standing internal source belongs in a **Project's knowledge** (mechanically: a pre-loaded window), so every chat starts already briefed.
>
> - **A** — Tells a web-investigation tool to consult a document the web doesn't hold
> - **B** — The model's weights never contained your firm's pricing policy
> - **D** — Works once; when you've pasted the same doc into two chats on one topic, it belongs in a Project
>
> 📚 *Re-read: What AI Actually Is · Appendix A.5 "Desk tenants" and A.8 "The tools menu"*

---

## Item 47 · D2 · obj 2.5

Claude has drafted one document explaining why a product launch missed its sign-up target. The same finding now has to reach the audit committee and the warehouse crew whose process changed.

**What is the most appropriate way to produce the two versions?**

- **A.** Ask for one rewrite per reader, each shaped around what that reader must decide or do next, then edit in named passes
- **B.** Ask Claude to make the draft "more professional" and send the single improved version to both audiences
- **C.** Send the same document to both, with a different cover note for each, since the underlying facts do not change
- **D.** Ask for three drafts aimed at the committee, pick the strongest, and forward that version to the crew as well

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> A good draft often needs another pass because it was written for the wrong reader. Committee: the number, the cause, and the decision. Crew: what changed, why it's not their fault, and what to do next. Same facts — two rewrites, each then edited in named passes.
>
> - **B** — Polishes the surface without changing the reader
> - **C** — Keeps one version for two readers; the mismatch remains
> - **D** — Applies multiple-draft thinking to one audience then reuses the result for the other
>
> 📚 *Re-read: AI Fluency · "The Description and Discernment loop"*

---

## Item 48 · D2 · obj 2.1

A pharmacy-chain associate spends an hour with Claude building a vendor comparison in chat; three figures are marked "unverified" because the vendors' pages could not be opened. The associate then asks for the comparison as a spreadsheet for the procurement head. Every cell in the spreadsheet holds a number and none carries a flag.

**What is the most appropriate action before sending?**

- **A.** Send it as it is; the flagged figures were resolved when Claude built the spreadsheet from the chat
- **B.** Compare the flags in chat and spreadsheet, restore what was dropped, and require every unverified mark be kept
- **C.** Discard the spreadsheet and send the full chat transcript instead, so that the reader can see all the flags
- **D.** Add a general "figures indicative" disclaimer at the foot of the spreadsheet and send it as it is

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> **Deliverables lose caveats.** An "unverified" mark that survived in chat can vanish when poured into a tidy document. The mechanical check: count caveats before and after. If the second number is smaller, find what was dropped and put it back.
>
> - **A** — Nothing was confirmed by formatting; a clean grid is not verification
> - **C** — Abandons the deliverable instead of repairing it
> - **D** — Blankets every figure with doubt; tells the reader nothing about which three are unconfirmed
>
> 📚 *Re-read: Just Delegate It · Concept 6 "Deliverables"*

---

## Item 49 · D2 · obj 2.2

A claims team at an insurer has Claude pre-screen 900 warranty claims against the policy terms and route 120 of them for fast-track approval. The claims lead reviews all 120 fast-tracked claims carefully, finds them sound, and prepares to approve them.

**What is the most important review step still missing?**

- **A.** Add a note to each of the 120 files recording that an AI tool performed the first screening of the claim
- **B.** Tell the 780 claimants whose claims were not fast-tracked that an AI tool was used in the screening
- **C.** Sample the 780 claims that were not fast-tracked, to check whether a group was routed away systematically
- **D.** Rerun the screening with a stricter prompt and approve only the claims that appear in both fast-track sets produced

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> **The easiest AI risk to miss: a system narrows a set and humans inspect only the survivors.** If the screen systematically excluded claims from one region, product line, or language, nobody notices when the review covers only the 120 that remain. Sample the exclusions too.
>
> - **A** — Records AI involvement; reviews nothing
> - **B** — A disclosure question; secondary to whether the screen was fair
> - **D** — Tightens the same system; a consistently biased screen passes both runs
>
> 📚 *Re-read: Governance, Risk & Responsible Use · Section 4.1 "Look at who was excluded"*

---

## Item 50 · D1 · obj 1.1

A hotel-group associate delegates a job to Claude: shortlist three conference venues with on-site AV for a 120-person offsite in the second week of March, in a table with links, under a stated budget. In the result, two venues had tied on price — Claude picked one and dropped the other without saying a choice had been made — and it widened the dates to "late March" to find a third option, again without saying so.

**Which element of the request would have prevented the silent choices?**

- **A.** An instruction to show the plan of steps before starting, so the associate could approve the approach
- **B.** A line adding more detail about the event, its audience, and the purpose of the offsite
- **C.** A line requiring Claude to list, after finishing, every assumption that it made along the way
- **D.** A line saying what Claude may decide alone and that it must say when it chose

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> Both failures are choices made silently mid-run. The governing element is **authority**: what the assistant may decide alone, and that it must say when it chose. A silent decision is one you cannot review.
>
> - **A** — Shows the plan before the run; doesn't govern choices that arise during it
> - **B** — Adds detail the assistant didn't lack
> - **C** — Requests a post-run list; a choice the assistant didn't register as a decision won't appear on it
>
> 📚 *Re-read: Just Delegate It · Concepts 3 and 7 "Authority"*

---

## Item 51 · D4 · obj 4.2

A strategy associate needs a proposal for redesigning the company's returns process. Their instinct is to ask Claude for the full proposal straight away, with extended thinking turned on.

**Which first request would most improve the eventual proposal?**

- **A.** Ask for the complete proposal now with extended thinking on, and iterate on that draft as the structure emerges
- **B.** Ask Claude first to map what is known — existing approaches, other firms' fixes, prior attempts — before it produces anything
- **C.** Ask for three complete proposals in different styles and then pick the strongest one as the base for all further editing
- **D.** Ask Claude to grade the associate's own draft outline out of ten, with reasons, before any of the writing begins

> [!success]- 🔍 Reveal Answer
> **Correct: B**
>
> **Map the ground before drafting.** Before any real decision or analysis, survey what's known: existing approaches, competitors, prior research. That five-minute pass changes what every later draft is measured against. Skipping it is why drafts feel thin — built on whatever surfaced first.
>
> - **A** — Drafts before researching; extended thinking produces a more careful thin plan
> - **C** — Multiplies unresearched drafts
> - **D** — Grades a structure before the ground it should rest on is mapped
>
> 📚 *Re-read: AI Prompting in 2026 · Concept 7 "Map the ground before drafting"*

---

## Item 52 · D7 · obj 7.2 · 〔Select 2〕

An associate reviewing Claude's campaign drafts has five reactions.

**Which TWO correctly turn a reaction into an instruction aimed at the right part of the setup?**

- **A.** "It keeps writing for engineers, whatever the draft" → add an audience constraint to the Project's standing instructions
- **B.** "It cites the discontinued product line" → replace the outdated product catalogue in the Project's knowledge files
- **C.** "It is too long every time" → switch the Project to a more capable model for the next round of drafts
- **D.** "It missed the point of this week's campaign" → put this week's campaign goal into the Project's standing instructions
- **E.** "It buries the ask" → tell Claude to remember to lead with the ask, so that memory carries it into future chats

> [!success]- 🔍 Reveal Answer
> **Correct: A, B**
>
> Ask: *"What would have to be present for this to be right, and which part of the setup controls that?"*
>
> - **A** — Wrong audience in every draft → standing instruction ✓
> - **B** — Old data → replace the knowledge source ✓
> - **C** — Recurring length issue → a length constraint in the instruction, not a model change
> - **D** — This week's goal is today's context → prompt, not standing instructions (will be wrong next week)
> - **E** — A stable rule handed to memory (best-effort note) instead of the instruction
>
> 📚 *Re-read: Workflow Design & Diagnosis · Concept 13 "From reaction to instruction"*

---

## Item 53 · D7 · obj 7.1

A scheduled weekly agent task that compiles the branch stock-level report produced nothing on Monday. The task is set up to write the report into the branch managers' shared folder each Monday morning.

**What should happen first?**

- **A.** Rewrite the prompt with clearer instructions about the report, and run the task again straight away
- **B.** Recreate the task on another vendor's platform instead, since this one has now shown itself to be unreliable
- **C.** Check whether the run is paused waiting on you, then limits, permissions, connector availability, and the destination
- **D.** Reschedule the task for an hour later and see whether it runs, before changing anything about it

> [!success]- 🔍 Reveal Answer
> **Correct: C**
>
> Silence has four different causes (failed to start / failed to reach a tool / paused at a gate / wrong result) — each has a different fix. **Diagnose before repairing.** Check in order: waiting for input → usage limits → permissions → connector availability → destination.
>
> - **A** — Rewrites the one component that may have worked fine
> - **B** — Switches products before knowing what failed; carries the unknown across
> - **D** — Re-runs blind; at best reproduces the silence
>
> 📚 *Re-read: General Agents on the Web · Concept 9 "Scheduled tasks — diagnosing silence"*

---

## Item 54 · D5 · obj 5.2

An associate connected the team's tender folder in Google Drive to Claude with read-only access, to summarise incoming tender documents. A new workflow now needs Claude to move closed tenders into an archive folder.

**Which understanding is correct?**

- **A.** Moving files is already possible, because a connector inherits everything the associate's own account can do
- **B.** Moving files can be enabled by adding a Skill that instructs Claude how to identify and archive closed tenders
- **C.** Moving files needs a second connector, because read access and write access cannot share one connection
- **D.** Moving files is a write action to be granted deliberately, once the connector is confirmed to offer it at all

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> **Read-only = may look but not change. Write access = may edit, create, send, or delete.** Start read-only; grant write only once you trust how the tool behaves. Also: permissions choose among the actions a connector was built to perform — confirm whether moving is even available on this connector.
>
> - **A** — Confuses the ceiling (inherits your account permissions) with the scope you actually granted (read-only)
> - **B** — A Skill teaches a method; it carries no permissions of its own
> - **C** — Scope is widened on the same connection; no second connector required
>
> 📚 *Re-read: Skills & Connectors · Section 3 and Part 5*

---

## Item 55 · D1 · obj 1.4

A learning-and-development associate asks Claude for five different formats for launching a new leadership programme. The request includes the audience, the programme's goals, and last year's participation figures, and it also fixes the slide template, two mandatory sections, a 60-word limit per idea, and the house tone. The five "formats" come back as five variants of one workshop.

**What is the most likely cause, and the fix?**

- **A.** The answer's shape was pinned too tightly for an options round; keep the situation, loosen the format, tighten later
- **B.** The model lacked context; add more about the audience, the goals, and last year's figures so that it has more to build on
- **C.** The model needs an example; attach a competitor's launch campaign for it to imitate, so the options are sharper
- **D.** The task needs deeper reasoning; rerun it with extended thinking on so the model explores more directions

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> **Precision is the right setting for execution, wrong for generating options.** Load the situation fully; describe the output *loosely* while generating options. The template, mandatory sections, word limit, and tone pinned the shape so tightly that only variants were possible.
>
> - **B** — Situation context was supplied; more of it doesn't loosen the shape
> - **C** — Handing a model to imitate narrows the shape further
> - **D** — Extended thinking produces more careful variants, not genuinely different options
>
> 📚 *Re-read: AI Prompting in 2026 · "One loop, four kinds of ask"*

---

## Item 56 · D4 · obj 4.4

A procurement lead wants Claude to take over the monthly supplier scorecard.

**Which approach best establishes whether it can be trusted with the work?**

- **A.** Give Claude this month's new data, review the output carefully, and adopt it if the scores look reasonable
- **B.** Ask Claude to explain how it would approach the scorecard and judge the method before running anything
- **C.** Run this month's data through Claude twice and adopt the result if the two runs agree with each other
- **D.** Give Claude a month whose scorecard the team already signed off, hold back that answer, and compare

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> **Test the assistant on work you've already finished and already trust.** A signed-off month has a known correct answer — comparison tells reproduction from sounding right. Every outcome is informative: missed pattern → improve instructions; missing data → data problem; persistent failure → that part stays human.
>
> - **A** — New data with no ground truth; "looks reasonable" is how a polished wrong answer passes
> - **B** — Judges a described method, not actual results
> - **C** — Agreement between two runs ≠ correct; a consistently wrong method passes
>
> 📚 *Re-read: ChatGPT & Claude Quick Reference · Concept 9 "Prove it"*

---

## Item 57 · D6 · obj 6.3

A governance review finds field engineers photographing site reports and sending the photos to a consumer chatbot on their phones, because the approved connector cannot read images. The reports contain customer site details. Nobody acted in bad faith.

**What is the most appropriate response?**

- **A.** Report the capability gap to the policy owner and fix the approved path, keeping the consumer app closed to customer data
- **B.** Block the consumer app on company phones and circulate a reminder that unapproved tools are prohibited for customer material
- **C.** Relax the policy so that the consumer app is permitted for site reports, since the engineers will keep using it anyway
- **D.** Open disciplinary proceedings against the engineers involved, so that the case deters further violations by other field staff

> [!success]- 🔍 Reveal Answer
> **Correct: A**
>
> **Shadow AI grows where the approved path is harder.** If the approved route takes ten steps and the unapproved one takes one, people under deadline pressure find the easy route. The fix is **reduce the friction** (fix the approved path) — not remove the tools. The consumer app stays closed to customer data while the gap is reported.
>
> - **B** — Takes the tools away without fixing why the approved path was unusable
> - **C** — Addresses the wrong end; lowers the classification, not the friction
> - **D** — Treats a policy flaw as a personal failing; true without fixing anything
>
> 📚 *Re-read: Governance, Risk & Responsible Use · Section 8.3 "The friction rule"*

---

## Item 58 · D6 · obj 6.2

A support team records customer calls, with consent, for quality assurance, and the transcripts already sit in an approved Claude workspace. The product team asks an associate to mine the same transcripts for upsell opportunities to pass to sales.

**What is the most appropriate action?**

- **A.** Proceed as asked, since the transcripts are already inside an approved workspace and the analysis needs no new upload
- **B.** Strip customer names from the transcripts first, then run the upsell analysis inside the approved workspace
- **C.** Run the analysis in incognito chats, so that the upsell work leaves no trace in the workspace history
- **D.** Take it to the data owner, since the transcripts were collected for one purpose and a new use needs fresh permission

> [!success]- 🔍 Reveal Answer
> **Correct: D**
>
> **Data arrives with the reason it was collected attached.** These transcripts were collected for quality assurance. Using them for sales leads is a different purpose — a new use needs fresh permission, whatever tier the data sits in. Route approval ≠ purpose approval.
>
> - **A** — Treats route approval as purpose approval
> - **B** — The objection isn't about names; it's about the promise made when calls were recorded
> - **C** — Reaches for a privacy feature to answer a permission question; also hides the work from the org's record
>
> 📚 *Re-read: Governance, Risk & Responsible Use · Section 2.4 "The route matters as much as the tool name"*

---

## Item 59 · D3 · obj 3.3 · 〔Select 2〕

An associate is deciding, for five tasks, whether to turn on Claude's extended thinking, which is slower and uses more of the usage budget.

**For which TWO is it worth the cost?**

- **A.** Converting a bulleted agenda into a calendar invite for the team's weekly meeting
- **B.** Choosing a rollout sequence across four warehouses under staffing, downtime, and budget constraints
- **C.** Finding the expansion of an acronym in an attached glossary for a routine email
- **D.** A staffing decision across three sites with real consequences, seasonality, and overtime rules
- **E.** Producing ten quick name ideas for a new internal chat channel, to pick from casually

> [!success]- 🔍 Reveal Answer
> **Correct: B, D**
>
> **Turn on extended thinking when a question has many inputs or trade-offs.** Multi-constraint rollout sequence (B) and multi-variable staffing with real consequences (D) are where you'd want a person to take their time.
>
> - **A** — Mechanical conversion; no thinking needed
> - **C** — Quick lookup; no thinking needed
> - **E** — Casual idea-gathering; thinking mode is waste here
>
> 📚 *Re-read: AI Prompting in 2026 · Concept 5 "Reasoning, or 'think hard'"*

---

## Item 60 · D1 · obj 1.3 · 〔Select 2〕

A procurement manager wants an AI assistant to review a vendor shortlist before it goes to the steering committee. The first draft of the request reads, "Tell me this shortlist is defensible."

**Which TWO rewrites are most likely to produce an honest evaluation?**

- **A.** "Rate the shortlist 1 to 10 on coverage, cost realism, and risk, with the one change that most improves it."
- **B.** "Defend the shortlist against the objections that procurement's finance partners are likely to raise about it."
- **C.** "Give the strongest case for and against sending the shortlist to the committee exactly as it stands today."
- **D.** "Isn't this shortlist good enough for the committee? Point out anything minor that I should tidy up first."
- **E.** "Rate your confidence, as a percentage, that this shortlist would survive the committee without changes."
- **F.** "Rewrite the shortlist's cover note so that it reads more persuasively for the committee members."

> [!success]- 🔍 Reveal Answer
> **Correct: A, C**
>
> Models lean toward the conclusion a prompt signals. An honest review needs two moves: **remove the conclusion from the question** (evaluate / compare / list both sides) + **force commitment** with named criteria on a fixed scale.
>
> - **A** — Named criteria + fixed scale + the one change that raises it → forces real assessment ✓
> - **C** — "Strongest case for and against" → neutral framing, both sides ✓
> - **B** — "Defend" is a bait verb; hands the model a conclusion before the question
> - **D** — "Isn't this good enough?" is obvious bait
> - **E** — Self-reported confidence with no criteria; as agreeable as a compliment
> - **F** — Polishes presentation instead of evaluating substance
>
> 📚 *Re-read: AI Prompting in 2026 · Concept 6 "Sycophancy and how to neutralize it"*

---

*60 questions · End of mock exam*
