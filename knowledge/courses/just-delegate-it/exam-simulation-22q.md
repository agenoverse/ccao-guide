---
type: Document
title: "Just Delegate It: Exam Simulation (22 Questions)"
description: "Hard-difficulty 22-question exam simulation covering delegation, prompting, evaluation, model selection, and knowledge management."
status: stable
generated:
  by: human:shazilk-dev
  at: "2026-10-05T12:40:00Z"
sources:
  - id: src-just-delegate-it-exam-simulation-22q
    title: "Just Delegate It — Exam Simulation 22Q source"
    resource: "src/Just Delegate It - EXAM SIMULATION 22Q.md"
ksor:
  audience: [public]
  owner: human:shazilk-dev
  approval:
    by: human:shazilk-dev
    at: "2026-10-05T17:45:05+05:00"
order: 19
---


> [!warning] Exam Rules: follow them strictly
> - **Timer: 26 minutes total.** Start it before Question 1.
> - **No going back.** Once you open the next question, the last answer is locked.
> - **Do not open any answer** until all 22 are done. Write your answers on paper.
> - **90-second hard limit** per question. At 90 seconds, choose and move on.
> - Read the **last sentence first**, then the options, then the scenario.
> - Multi-select questions say **(Select TWO)**. Both picks must be right to score the point.

> [!info] Coverage
> **D1 Prompting & Task Execution**: Q1, Q2, Q4, Q6, Q7, Q12, Q13, Q14
> **D2 Output Evaluation & Validation**: Q3, Q8, Q11, Q19, Q20, Q21
> **D3 Product & Model Selection**: Q9, Q10, Q18, Q22
> **D5 Configuration & Knowledge**: Q15, Q16
> **D6 / D7**: Q5 (data), Q17 (intervene)

---

## Question 1

An events-venue coordinator types into Claude: *"What should I consider when choosing caterers for a 200-guest conference?"* She gets a list of considerations, but her manager wanted actual options by Friday.

**Which rewrite turns the request into a delegated job?**

- **A.** "What are the most important things to weigh when choosing a caterer for 200 guests?"
- **B.** "Find four local caterers for 200 guests, in a table with price per head and links."
- **C.** "Act as an expert events planner and explain how you would pick a caterer for us."
- **D.** "Give me a detailed, step-by-step process for comparing caterers for a 200-guest event."

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** Asking gets you an *answer*, and the work stays with you. Giving a job asks for **a thing to exist**: four caterers, in a table, with links. The difference is *"not length … it asked for a thing to exist."*
>
> **Why the others are wrong:**
> - **A**: A better-worded question is still a question. It returns advice.
> - **C**: A role does not change the sentence type. It still asks for an explanation.
> - **D**: Asks for a method she would still have to carry out herself.
>
> **Concept:** 1 (Asking vs giving the job) · **Obj:** D1.1

---

## Question 2

A kayak-rental company's manager asks Claude to compare insurance providers. Her brief gives the outcome, her context, three constraints and the table she wants, and asks Claude to mark unconfirmed figures. Two providers met every constraint. Claude kept one and dropped the other without comment, and the dropped one was the provider she already trusts.

**Which brief line, written properly, would have prevented this?**

- **A.** Context
- **B.** Constraints
- **C.** Authority
- **D.** Verification

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** **Authority** says what AI may decide alone and what it must ask about. *"Without that line, AI decides for you, silently, and you never learn that a decision was made."* A line such as "if two providers both qualify, show both and say which you prefer" would have caught it.
>
> **Why the others are wrong:**
> - **A**: Adding "we already use Provider X" helps, but it does not stop the *silent choice*. The failure is that a decision was made and not reported.
> - **B**: Both providers *met* every constraint, so this was a decision between valid options, not a constraint failure.
> - **D**: Verification is what *you* check afterwards. It cannot stop Claude dropping an option nobody sees.
>
> **Concept:** 3, 7 (Authority, the line people skip) · **Obj:** D1.1

---

## Question 3 · (Select TWO)

A travel agency associate asks Claude, "using current information", for the visa fees for five countries her clients visit. The reply is a table with a link for each country and the line: *"I searched for these just now."*

**Which TWO checks should she make before quoting the fees to clients? (Select TWO)**

- **A.** Ask Claude to confirm each fee is current, and re-run any it is unsure of.
- **B.** Open each linked page and find the sentence that states the fee.
- **C.** Check the date on each page, since a working link can still be stale.
- **D.** Run the same request in research mode to get a fuller, deeper answer.

> [!success]- Answer & Explanation
> **Correct: B and C**
>
> **Why B and C are right:** *"A citation is not verification. Checking the citation is verification."* Open the page and **find the sentence** (B). Then *"a source is not a date: pages go stale, so … find the date on the page yourself"* (C). "I searched just now" is a hint, not evidence.
>
> **Why the others are wrong:**
> - **A**: Asks the tool to vouch for itself. A self-report is not a check.
> - **D**: Research mode is for a job *"whose deliverable is the report, not for a fact that one search settles."* It is also still unverified.
>
> **Concept:** 4, 10 (Searched vs knew; trace + date) · **Obj:** D2.3

---

## Question 4

A bookshop owner asks Claude: *"Look only at Publisher X's and Publisher Y's websites. Find each one's three best-selling children's titles, copy the prices into a table, then tell me which to stock for the holidays."* The table is neat, but the recommendation misses several titles that other shops are selling heavily.

**What is the best diagnosis?**

- **A.** Her steps limited the result to sources she chose; she should state the outcome instead.
- **B.** The prompt had no role; adding "act as an expert bookseller" would fix the choice.
- **C.** Claude cannot judge children's books well, so she should pick the titles herself.
- **D.** The table needed more columns, such as reviews, so the choice could be justified.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** A recipe makes **your plan the limit**. *"If the two sites you named are not where the best … live, the table is neat, the recommendation is poor, and nothing in the result tells you so."* Describing the outcome lets AI choose where to look, and you judge the result against what you wanted.
>
> **Why the others are wrong:**
> - **B**: A role does not widen sources she has locked to two.
> - **C**: Abandonment, and a wrong diagnosis. The failure came from her method, not from Claude's ability.
> - **D**: More columns from the same two sites are still the same narrow result.
>
> **Concept:** 2 (Outcome, not clicks) · **Obj:** D1.1, D1.2

---

## Question 5

A hair salon's owner, on a free plan, wants Claude to draft replies to 30 customer complaints. The export includes each customer's name, phone number and the complaint text.

**What is the most appropriate approach?**

- **A.** Paste the export into an incognito chat, so the complaints are not kept anywhere.
- **B.** Paste it as it is, then ask Claude to forget the personal details when finished.
- **C.** Paste it as it is, since a free assistant does not keep chats it has not saved.
- **D.** Remove names and phone numbers first, keeping only what each reply needs.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** *"Before you paste anything real … remove names, phone numbers, account numbers … A free assistant is not your filing cabinet."* A reply needs the complaint, not the phone number.
>
> **Why the others are wrong:**
> - **A**: Incognito or temporary chats are not saved to history or memory, but *"neither makes a paste disappear, because the provider still holds a copy for a time."*
> - **B**: An instruction to forget is a wish, not a control.
> - **C**: A false belief about the product. Free chats are kept.
>
> **Concept:** 5 (What you paste; temporary chat) · **Obj:** D6.2, D3

---

## Question 6 · (Select TWO)

A local newspaper's editor wants Claude to "run the whole job" for the weekly events listings page.

**Which TWO steps must stay with the editor, even if Claude helps with them? (Select TWO)**

- **A.** Defining what the listings page must cover, and for which readers.
- **B.** Gathering events from venue websites into the listings table.
- **C.** Choosing which venue websites to search for this week's events.
- **D.** Deciding whether the finished page is fit to go to print.

> [!success]- Answer & Explanation
> **Correct: A and D**
>
> **Why A and D are right:** In the Delegation Loop, **AI owns the middle, you own both ends.** *Define* (A) is the start. *Accept* (D) is the end. *"AI can help you with any of the four. It cannot take them, because what the job is and whether the result is fit for use are decisions you answer for."*
>
> **Why the others are wrong:**
> - **B**: Routine work in the middle of the loop, the part AI does best.
> - **C**: Choosing the method is exactly what an outcome-based brief leaves to AI. The editor can still veto it through plan-first.
>
> **Concept:** Part 2 (Delegation Loop: AI owns the middle) · **Obj:** D1, D6

---

## Question 7

A plumbing contractor's associate pastes a 12-page tender specification into Claude with this instruction: *"Using only the text below, state the warranty period and the insurance cover required. Quote the sentence you used. If the text does not say, write 'not in the source'."* Claude quotes a warranty sentence and writes "not in the source" for insurance.

**What does this result mean?**

- **A.** Claude missed the clause; she should re-run on a stronger model to find it.
- **B.** The spec likely follows industry norms, so she can use the usual insurance figure.
- **C.** A good answer; the gap is a question for the client, not Claude.
- **D.** The instructions were too strict; she should let Claude add what it already knows.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** The two instructions *"make 'not in the source' a good answer instead of a gap AI fills for you."* A missing requirement in a tender is a **clarifying question for the client**.
>
> **Why the others are wrong:**
> - **A**: Assumes failure with no evidence. She can search the spec for "insurance" in seconds, and no model can find text that is not there.
> - **B**: Fills the gap with a guess, the very thing the instruction was written to prevent.
> - **D**: Undoes the source boundary. Claude's general knowledge would be mixed in and impossible to separate.
>
> **Concept:** 5 (Give AI the source; "not in the source") · **Obj:** D1.1, D2

---

## Question 8

A fire-safety consultant asked Claude to quote the sentence it used from a client's lease. Claude's quote reads: *"Alarms must be tested every week."* The lease actually says: *"Alarms must be tested weekly by a competent person."*

**What happened, and what should she do?**

- **A.** Claude paraphrased and called it a quote; correct it from the original before use.
- **B.** The meaning is the same, so the quote can be accepted as it stands.
- **C.** Claude invented the clause; she should reject the whole answer and start again.
- **D.** The lease is ambiguous; she should ask Claude which wording is legally binding.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** *"If it is close but not exact, AI paraphrased and called it a quote."* The dropped words, **"by a competent person"**, are a real obligation. One specific, fixable error means the decision is **Correct**.
>
> **Why the others are wrong:**
> - **B**: The meaning is not the same. A whole requirement disappeared.
> - **C**: Invention means the sentence is not there *at all*. Here it is there, slightly changed.
> - **D**: The lease is clear. Asking AI which wording is legally binding hands a legal judgment to the tool.
>
> **Concept:** 5, 10 (Check the quote; Correct vs Reject) · **Obj:** D2.2
> **Words:** *competent person* = someone with the training to do the job safely.

---

## Question 9

A sports-nutrition brand's associate needs two things: today's retail price of one competitor's protein bar, and a ten-page report on plant-protein trends across Europe for the board.

**Which approach fits?**

- **A.** Web search for both, since research mode only makes the answer longer.
- **B.** Web search for the price, and research mode for the trends report.
- **C.** Research mode for both, so that each answer draws on many sources.
- **D.** Claude's own knowledge for the price, and web search for the report.

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** **One fact, one search.** Web search settles a current price. Research mode *"reads many pages before writing a report"* and is for a job *"whose deliverable is the report."*
>
> **Why the others are wrong:**
> - **A**: Research mode is not just longer. It is a different job, built from many sources.
> - **C**: Overkill for one price, and it costs minutes.
> - **D**: A current price from memory is exactly the stale-fact failure the course warns about.
>
> **Concept:** 4 (Web search vs research mode) · **Obj:** D3.1

---

## Question 10

A dance studio's administrator has spent 90 minutes in one Claude chat planning next term's timetable. Claude now proposes schedules that break decisions she made at the start, such as one class per room per hour.

**What is the most appropriate move?**

- **A.** Argue the point again, quoting her earlier message back to Claude word for word.
- **B.** Switch to a stronger model inside the same chat so it tracks the rules.
- **C.** Start a fresh chat and retype the whole conversation from her own notes.
- **D.** Ask for a summary of decisions so far; paste it into a fresh chat.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** *"When answers begin to contradict earlier ones, do not argue with the chat. Ask AI to write a short summary of what you have decided … open a fresh chat, and paste it as the first message. The summary is a source too."*
>
> **Why the others are wrong:**
> - **A**: Arguing adds even more to an already long chat.
> - **B**: The problem is session length, not model ability. A stronger model in the same stale chat has the same problem.
> - **C**: Right direction, wrong cost. Retyping 90 minutes of chat rebuilds the overload in the new chat.
>
> **Concept:** 5 (When a long chat goes stale) · **Obj:** D3.4

---

## Question 11

A seafood exporter's associate asked Claude for this year's import tariffs in six markets. The chat answer marked four rates "unverified". She then asked Claude to turn it into a polished one-page PDF for the sales team. The PDF shows only one "unverified" mark.

**What should she do?**

- **A.** Share the PDF, since the cleaner version is the one the sales team will use.
- **B.** Ask Claude to verify the three rates, so their marks are no longer needed.
- **C.** Find the three dropped marks and restore them before the PDF is shared.
- **D.** Attach the chat transcript to the PDF so readers can see the caveats.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** *"Deliverables lose caveats … because tidy is what the document is for."* The check: **count caveats in the chat, count them in the document; if the second number is smaller, find what was dropped and put it back.**
>
> **Why the others are wrong:**
> - **A**: The sales team will quote tariffs as confirmed when they are not.
> - **B**: Claude's say-so does not verify a rate. She would have to trace each one herself.
> - **D**: *"Could someone read the document without ever seeing the chat?"* A deliverable must stand on its own.
>
> **Concept:** 6 (Deliverables lose caveats) · **Obj:** D2.5

---

## Question 12

A chocolate maker's associate runs a monthly competitor price comparison with Claude. Last month, Claude used a reseller's page instead of the manufacturer's for two products, and she only noticed after the run.

**What is the cheapest change to her brief?**

- **A.** "Before you start, list your steps and sources, and wait for my go-ahead."
- **B.** "Be extra careful this time to use only reliable and trustworthy sources."
- **C.** "After you finish, list every source you used so I can check each one."
- **D.** "Use the most capable model setting so that the sources are chosen well."

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** **Plan-first** uses *"the cheapest moment in any job: before it runs. A plan costs a minute to read and a sentence to fix. The same mistake, found after the run, costs the run."*
>
> **Why the others are wrong:**
> - **B**: Vague. "Reliable" does not tell Claude that resellers are excluded.
> - **C**: Useful, but it finds the error **after** the run. That is how she found it last month.
> - **D**: Source choice was not a capability problem.
>
> **Concept:** 7 (Plan-first) · **Obj:** D1.3

---

## Question 13 · (Select TWO)

An e-scooter rental firm connects Claude to its booking system to clean up duplicate bookings and to email riders whose bookings change.

**Which TWO Authority lines fit best? (Select TWO)**

- **A.** "Find likely duplicates and list them; do not delete any booking."
- **B.** "Delete bookings that look duplicated, then report how many you removed."
- **C.** "Draft the emails to affected riders, but do not send any of them."
- **D.** "Merge duplicates you are sure of, and say in the summary which you merged."

> [!success]- Answer & Explanation
> **Correct: A and C**
>
> **Why A and C are right:** These are the course's boundary lines. **Inspect, but do not delete** (A): *"deleting destroys the evidence you would need to check the work."* **Draft, but do not send** (C): *"sending creates a promise someone else can see."*
>
> **Why the others are wrong:**
> - **B**: Hands over an irreversible action and reports afterwards.
> - **D**: The subtle trap. "Choose, but say when you chose" is for *decisions*. A merge is a hard-to-reverse *change*, and reporting it after the fact is not a boundary.
>
> **Concept:** 7 (Authority, second face: boundaries) · **Obj:** D1, D6

---

## Question 14

A public aquarium's associate approved Claude's plan to research ticket prices at four named attractions.

**Which result shows the failure that plan-first exists to catch?**

- **A.** Claude added a fifth attraction mid-run and flagged it at the top of the result.
- **B.** Claude used the four approved attractions, but in a different order from the plan.
- **C.** Claude stopped mid-run to ask before adding an attraction not in the plan.
- **D.** Claude swapped one approved attraction for another and did not mention it.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** *"An approved plan is not a cage … What it may not do is … change something that matters without telling you. **The failure is the silent change, not the change.**"*
>
> **Why the others are wrong:**
> - **A**: A change, but **reported**. That is acceptable, and *"a good agent often does"* find a better route.
> - **B**: Order changed, and nothing that matters to the result changed.
> - **C**: The ideal behaviour.
>
> **Concept:** 7 (Silent change) · **Obj:** D1.3, D2

---

## Question 15 · (Select TWO)

Every week, a photography studio's associate pastes the same 3-page price list into Claude, plus the line: *"Never quote a price without the date of the price list."* This is the third week.

**Which TWO changes are most appropriate? (Select TWO)**

- **A.** Save both the price list and the rule as standing instructions in a Project.
- **B.** Put the price list into a Project as knowledge that every chat can read.
- **C.** Keep pasting both each week, since memory will learn them soon enough.
- **D.** Write the date rule into the same Project as a standing instruction.

> [!success]- Answer & Explanation
> **Correct: B and D**
>
> **Why B and D are right:** *"The third time you paste the same background … put them somewhere AI reads by itself."* The rule: **knowledge for sources** (the price list, B), **instructions for rules** (the date rule, D).
>
> **Why the others are wrong:**
> - **A**: Puts a source in the wrong home. A 3-page list is reference material, not a rule.
> - **C**: Memory is per-user and best-effort. You cannot point at it or rely on it.
>
> **Concept:** 8 (Give AI the job again; Project, knowledge, instructions) · **Obj:** D5.1

---

## Question 16

A university alumni office uses a Claude Project whose standing instructions include: *"The annual gala is held in March."* The gala has moved to May, and drafts still say March.

**What is the most appropriate fix?**

- **A.** Correct the month by hand in each draft before it is sent out.
- **B.** Update the standing instruction, and review the Project's stored lines regularly.
- **C.** Add "the gala is now in May" to the start of each prompt from now on.
- **D.** Turn off memory, since memory must be repeating the old gala month.

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** *"Stored context is a responsibility … A wrong line in a Project is a wrong line in every result the Project produces."* Fix the source line, and *"once a month, look at both: what you stored and what AI remembered."*
>
> **Why the others are wrong:**
> - **A**: Treats the symptom in every draft, and someone will eventually miss one.
> - **C**: Creates a conflict between the prompt and the instruction, and the wrong line is still stored.
> - **D**: The scenario names the cause, and it is the standing instruction, not memory.
>
> **Concept:** 8 (Stored context is a responsibility) · **Obj:** D5.4

---

## Question 17 · (Select TWO)

A car-wash chain's marketing assistant asked Claude for a table of opening hours for all 12 sites. Every row is right except Leeds, which shows weekday hours for Sunday.

**Which TWO actions are most appropriate? (Select TWO)**

- **A.** Re-run the full brief in a fresh chat with a more detailed constraints line.
- **B.** Ask Claude to confirm that the other eleven rows are correct as well.
- **C.** Send one message naming the Leeds error and the correct Sunday hours.
- **D.** After Claude says it is fixed, check the Leeds row in the table itself.

> [!success]- Answer & Explanation
> **Correct: C and D**
>
> **Why C and D are right:** One wrong line calls for **Correct**: *"name the error and what should replace it."* That is the smallest message that works (C). Then *"'I have corrected the table' is a sentence. Look at the table"* (D).
>
> **Why the others are wrong:**
> - **A**: Rewriting the whole job to fix one row. Not the smallest move.
> - **B**: A self-check by the tool proves nothing. Trace claims yourself.
>
> **Concept:** 9 (Intervene: smallest move; check the fix in the result) · **Obj:** D7.1

---

## Question 18

A local radio station's associate uses Claude's fast default model to check three advert schedules for clashing time slots. The brief is clear and the session is new. Claude finds simple clashes but misses those that need two or more steps of reasoning.

**Which move fits best?**

- **A.** Escalate: turn on extended thinking or a stronger model, then re-run.
- **B.** Take the job back, since Claude cannot reliably detect schedule clashes at all.
- **C.** Redirect: tell Claude which direction its clash-checking should go in next.
- **D.** Add "be extremely careful about every clash" to the brief and re-run it.

> [!success]- Answer & Explanation
> **Correct: A**
>
> **Why A is right:** *"It cannot do a step at the level the job needs → Escalate."* The brief is clear and the session is fresh, so the cause is the **level**. *"Sometimes 'AI failed' means 'I used the wrong level'."* This is the move people miss. (On a free plan with no stronger model, escalate by making the job smaller: one schedule pair at a time.)
>
> **Why the others are wrong:**
> - **B**: "Take the job back" comes after escalation has failed, not before.
> - **C**: Redirect is for "heading the wrong way". This is a depth problem, not a direction problem.
> - **D**: "Be careful" adds no capability.
>
> **Concept:** 9 (Escalate move) · **Obj:** D3.2, D7.1

---

## Question 19

A beekeeping supplier's associate checks Claude's claim that a pesticide ban starts in March. Claude's source is a 2025 farming blog quoting the regulator. The regulator's own page, updated in 2026, says the ban now starts in July.

**What is the right decision?**

- **A.** Accept March, since the blog quotes the regulator's words directly.
- **B.** Investigate further, since two credible sources disagree on the date.
- **C.** Correct the date to July, from the regulator's current page.
- **D.** Reject the result and research the whole ban again from scratch.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** **Challenge:** *"When two credible sources disagree, the primary one usually wins, unless it is the older one."* Here the primary source (the regulator) is also the **newer** one, so it wins, and one specific error can be fixed: **Correct**.
>
> **Why the others are wrong:**
> - **A**: A secondary source quoting the primary is still secondary, and it is out of date.
> - **B**: The trap. Investigation is for evidence that is *incomplete or contradictory with no clear winner*. Here the course's rule already gives the winner.
> - **D**: One fixable error does not make the whole result unreliable.
>
> **Concept:** 10 (Trace, Challenge, Decide) · **Obj:** D2.3

---

## Question 20

A scaffolding firm's associate is verifying Claude's summary of site-safety rules. Every claim she traced checks out except one: *"Inspect scaffolds every 7 days."* Its link returns "page not found".

**Which decision fits?**

- **A.** Accept it, since every other claim checked out and this one sounds right.
- **B.** Correct it, using the figure Claude gives when she asks it again.
- **C.** Reject the whole summary, since one of its sources does not work.
- **D.** Investigate: find the regulator's page and trace the 7-day claim again.

> [!success]- Answer & Explanation
> **Correct: D**
>
> **Why D is right:** The evidence is **incomplete**, not wrong. *"Investigate: the evidence is incomplete or contradictory, so trace again."* A safety figure is exactly the kind of claim that must be traced before acceptance.
>
> **Why the others are wrong:**
> - **A**: Other claims passing is not evidence for this one, and "sounds right" is how errors get through.
> - **B**: A second answer from the same tool is not a source.
> - **C**: Over-reaction. One broken link does not make the traced claims untrue.
>
> **Concept:** 10 (Four decisions: Investigate vs Reject) · **Obj:** D2.3

---

## Question 21

A regional airport's IT helpdesk lead wants to make his first real delegation to Claude.

**Which job is the safest place to start?**

- **A.** Next month's ticket report, which he has not started and must send Friday.
- **B.** Last month's ticket report, already done, so he can compare the two results.
- **C.** The outage notice to passengers, which must go out within the next hour.
- **D.** The budget request, because it is the task that takes him the longest.

> [!success]- Answer & Explanation
> **Correct: B**
>
> **Why B is right:** *"The safest first real delegation is a job you have already finished and already trust."* Hold back your own result and compare: what matched, what needed fixing, what should stay with you.
>
> **Why the others are wrong:**
> - **A**: No reference to compare against, and a deadline adds pressure.
> - **C**: Public-facing, urgent and hard to reverse. The worst first test.
> - **D**: Picks by time saved, not by how easily the result can be checked.
>
> **Concept:** 10 (Your Turn: the safest first delegation) · **Obj:** D2, D4

---

## Question 22

A community centre's associate ran the same six-line brief in Claude and in ChatGPT on the same day. ChatGPT finished in fewer messages. Her manager wants to record that "ChatGPT is better for our work".

**Which statement is correct?**

- **A.** Fewer messages shows that the second assistant suits this kind of job better.
- **B.** The brief failed, because it gave different results in the two different tools.
- **C.** It records two runs on one day, not a ranking of tools.
- **D.** The brief should be rewritten for each tool's buttons to make it fair.

> [!success]- Answer & Explanation
> **Correct: C**
>
> **Why C is right:** *"What you wrote down is a record of two runs on one day. It is not a ranking of two assistants. Models change too fast for a ranking made today to be true next month."* **"The job belongs to you. The model is replaceable."**
>
> **Why the others are wrong:**
> - **A**: Turns one observation into a verdict.
> - **B**: Different results are expected, because results vary even within one tool. The brief *running* without a rewrite is the success.
> - **D**: Backwards. A good brief *"describes the job, not the tool"*, and *"nothing in your six lines names a button."*
>
> **Concept:** 11 (Same job, different AI) · **Obj:** D3

---

## Answer Key (check only after finishing)

> [!abstract]- Full Answer Key
> | Q | Ans | Concept | Q | Ans | Concept |
> |---|---|---|---|---|---|
> | 1 | B | Ask vs delegate | 12 | A | Plan-first |
> | 2 | C | Authority line | 13 | A, C | Inspect / draft, don't act |
> | 3 | B, C | Trace + date | 14 | D | Silent change |
> | 4 | A | Recipe limits result | 15 | B, D | Knowledge vs instruction |
> | 5 | D | Remove private data | 16 | B | Stored context |
> | 6 | A, D | You own both ends | 17 | C, D | Correct + check result |
> | 7 | C | "Not in the source" | 18 | A | Escalate the level |
> | 8 | A | Paraphrased quote | 19 | C | Primary + newer wins |
> | 9 | B | Search vs research | 20 | D | Investigate |
> | 10 | D | Stale chat → summary | 21 | B | Safest first delegation |
> | 11 | C | Caveats lost | 22 | C | Record, not ranking |
>
> **Answer spread (single-answer items):** A ×4 · B ×4 · C ×5 · D ×4

## Score Yourself

| Score | Meaning |
|---|---|
| 20–22 | Exam-ready on this course. Move on. |
| 16–19 | Pass level (≈72%+). Review only the concepts you missed. |
| 12–15 | Borderline. Re-read the missed concepts, then retake in 3 days. |
| ≤ 11 | Content gap. Re-read Concepts 3, 7, 9 and 10 before retrying. |

**For each wrong answer, tag the cause:**
- **[C] Content**: I did not know the concept.
- **[T] Time / reading**: I knew it but misread the question or ran out of time.

> [!tip] Next step
> The three traps this course hides: **trusting AI's report about itself** (Q3, Q11, Q17), **a reasonable-sounding vague line** (Q12, Q18) and **mixing up the four decisions** (Q8, Q19, Q20). If two or more misses fall in one group, that is your weak spot.
>
> My score: ___ / 22  ·  Time used: ___ min  ·  [C] count: ___  ·  [T] count: ___
