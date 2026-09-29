# AI Fluency: Scenario-Based Study Guide — Part 1

## THE FOUNDATION: What AI Fluency Really Means

> **Concepts covered:** 4 of 22
> **Estimated reading time:** 20-25 minutes
> **Primary exam domains:** D1 (Prompting & Task Execution), D4 (Workflow Integration & Solution Design)
> **Key idea:** Everyone has the same AI. The difference is what YOU do with it.

---

## CONCEPT 1: AI Fluency — The Four Qualities

### THE SCENARIO

Fatima and Zain both work at a mid-size logistics [maal bhejna/transport ka kaam] company in Lahore. Both have access to the same Claude plan. Same model. Same everything.

On Monday morning, the boss asks both of them: "Prepare a summary of last quarter's [pichhle 3 mahinon ka] shipping delays for the board meeting [board ke saamne presentation]."

**Fatima** opens Claude and types:

> "Summarize shipping delays."

Claude gives her a generic, textbook-style summary about shipping delays in the global industry. It mentions port congestion in Rotterdam and labor strikes in California. None of it is about THEIR company. Fatima spends 2 hours trying to fix it, gives up, and writes the summary herself.

**Zain** opens Claude and types:

> "I'm uploading our Q2 2026 shipping delay log (CSV file). Summarize the top 5 causes of delay by frequency. Audience: board of directors who have 5 minutes. Format: bullet points, one page max. Exclude anything under 3% of total delays. Flag any cause that got worse compared to Q1."

He gets a focused, useful draft in 30 seconds. He spends 15 minutes verifying the numbers against the spreadsheet, fixes one percentage that was slightly off, and submits.

Same AI. Same task. Same morning. Completely different results.

### WHAT WENT RIGHT (and wrong)

Fatima's result was **not effective** — it didn't reach her goal. It was **not efficient** — she wasted 2 hours. Zain's result was effective (reached the goal), efficient (saved time), and because he verified the numbers, it was **safe** (no wrong data going to the board).

But notice: neither of them thought about **ethics** [insaaf / sahi tareeqa]. What if that delay log contained customer names and addresses? If Zain pasted that into an AI tool his company didn't approve, his output would be good but his USE of AI would be irresponsible.

### THE CONCEPT

**AI fluency** = working with AI in a way that is:

```
+------------------+------------------------------------------------+
| Quality          | What it means                                  |
+------------------+------------------------------------------------+
| EFFECTIVE        | You actually reach your goal                   |
| EFFICIENT        | You don't waste time, effort, or tokens        |
|                  | [tokens = text ke chhote tukde, AI inhe        |
|                  |  padhta/likhta hai, aur iske paise lagte hain] |
| ETHICAL          | You use AI fairly and honestly                 |
| SAFE             | You protect people, privacy, and data           |
+------------------+------------------------------------------------+
```

**AI fluency is NOT:**
- Collecting magic prompts
- Knowing how models are built
- Having a better subscription

It IS making good **human decisions** around AI. That's why the whole framework is built on 4 human skills — the **4Ds**:

```
  DELEGATION  ──→  "Decide"   (kya karna hai, kaun karega)
  DESCRIPTION ──→  "Explain"  (AI ko samjhao)
  DISCERNMENT ──→  "Check"    (jaancho, sahi hai ya nahi)
  DILIGENCE   ──→  "Own"      (zimmedaari lo)
```

**Three facts you MUST carry in your head (the exam assumes you know these):**

1. **Sounding right ≠ being correct.** AI can give a confident wrong answer. This is called a **hallucination** [AI ka confident andaaze mein galat baat bolna — jaise koi insan poore yakeen se galat number bole].

2. **Same question ≠ same answer.** Ask the same thing twice, you'll likely get different responses.

3. **AI only works with what it has.** If important information is missing, AI guesses — and the guess sounds just as confident as a real answer.

> **The killer insight for the exam:** Treat AI output like work from a capable colleague who NEVER tells you when they're unsure. A human colleague says "I'm not sure about this number." AI gives you the wrong number with the same confident tone as the right one.

### EXAM TRAP

**The trap:** An answer that says "AI fluency means writing better prompts" or "AI fluency means knowing which model to use."

**Why people pick it:** Because prompting FEELS like the whole skill. It's the most visible part.

**The truth:** Prompting is only part of ONE D (Description). AI fluency includes deciding what to do (Delegation), checking the result (Discernment), and being responsible (Diligence). An answer that mentions only prompting is incomplete.

### QUICK CHECK

**Q:** Zain's summary was effective and efficient. But what would make it also ethical and safe?
**A:** He'd need to make sure (1) the data he pasted didn't contain sensitive customer info, or he'd strip it first, and (2) the AI tool is approved by his company. Good output doesn't automatically mean responsible use.

---

## CONCEPT 2: Automation — "Do This Task"

### THE SCENARIO

Nida works at a small travel agency [safar ki booking ka daftar] in Islamabad. Every morning, she gets 15-20 emails from hotels confirming bookings. Each email has a different format, but they all contain: guest name, check-in date, check-out date, room type, and price.

Before AI, Nida spent 45 minutes every morning copying these details into a spreadsheet. Now she pastes each email into Claude and says:

> "Extract guest name, check-in date, check-out date, room type, and total price from this email. Give me one line in this format: Name | Check-in | Check-out | Room | Price."

Same instruction. Every email. She copies each result into her spreadsheet.

The task is clear. The steps are defined. The output format is fixed. Nida is not asking Claude to think, decide, or create anything. She's saying: **"Do this specific thing."**

### WHAT WENT RIGHT

Nida used AI as a **script writer** uses a script — she defined exactly what happens, and AI ran it. She didn't ask Claude's opinion on which room type is better. She didn't ask it to improve the bookings. She just said: extract these 5 fields, give them back in this format.

This is a **good fit** for automation because:
- The task is **clear** (extract 5 specific fields)
- The task is **repeatable** (same thing for every email)
- The output is **verifiable** (she can spot-check against the original email)

### THE CONCEPT

**Automation** = AI performs a specific task from your instructions.

```
  ┌─────────────┐         ┌─────────────┐
  │  YOU define  │────────→│  AI runs it  │
  │  the task    │         │  exactly     │
  └─────────────┘         └─────────────┘

  Your role: SCRIPT WRITER
  AI's freedom to decide: VERY LOW
  Common failure: A step is done badly (wrong extraction, wrong format)
```

**Classic automation tasks:**
- "Summarize this report in five bullets."
- "Translate this email into Urdu."
- "Extract the invoice [bill] number, date, and total from this PDF."
- "Reformat this data as a table."
- "Fix the grammar in this paragraph."

**The key test:** If you can write the exact steps on a piece of paper and hand them to anyone, it's probably automation.

### EXAM TRAP

**The trap:** An answer that describes automation but calls it "agency" because the AI is "doing something on its own."

**Why people pick it:** Because in everyday language, "the AI is doing the work" sounds like agency. But in the 4Ds framework, automation means AI has almost NO freedom to decide what to do. You specified everything. It just ran the steps.

**The difference:** In automation, you say "extract these 5 fields." In agency, you'd say "manage my hotel bookings" and AI would decide WHICH fields matter, WHEN to extract them, and WHAT to do with exceptions.

### QUICK CHECK

**Q:** Nida asks Claude: "Read all my hotel emails and automatically file the bookings into my spreadsheet, flagging anything that looks like a cancellation." Is this still automation?
**A:** No. Now she's giving AI a GOAL (manage bookings) and letting it DECIDE things (what looks like a cancellation, how to flag). That's moving toward agency.

---

## CONCEPT 3: Augmentation — "Help Me Think"

### THE SCENARIO

Zain (from Concept 1) has been promoted. He's now leading a small team that needs to decide: should the company open a new warehouse [godam] in Faisalabad, or expand the existing one in Lahore?

This is not a "do this specific task" situation. There's no right extraction to run. There's no one correct answer. It's a judgment call [raaye ka faisla] with tradeoffs [har option mein kuch faida kuch nuqsaan].

Zain opens Claude and says:

> "I'm deciding between opening a new warehouse in Faisalabad vs. expanding our current one in Lahore. Help me think through this. Our annual shipping volume is 50,000 parcels, 60% go to Punjab cities, our lease in Lahore expires in 18 months. What factors should I consider?"

Claude responds with a structured comparison: costs, proximity to demand, lease timing, hiring in a new city vs. a known market, risk of splitting operations [kaam do jagah baantna], etc.

Zain pushes back:

> "You're overweighting cost. For us, delivery speed to Faisalabad and Multan customers matters more than saving rent. Redo the comparison with delivery time as the top factor."

Claude adjusts. Zain challenges one assumption:

> "You said Faisalabad has lower rent. Where did you get that? We've been quoted 30% MORE than Lahore for the zone we need."

Claude corrects itself. They go back and forth for 20 minutes. At the end, Zain has a clear comparison table — but the DECISION is still his.

### WHAT WENT RIGHT

Zain didn't ask Claude to decide. He used Claude as a **thinking partner** [sochne mein madad karne wala saathi]. He:
- Challenged Claude's assumptions ("you're overweighting cost")
- Corrected Claude's facts ("your rent data is wrong")
- Steered the conversation toward what actually matters to HIS company
- Made the final decision himself

The result was better than what either of them could produce alone. Zain brought domain knowledge [apne kaam ka tajurba] — he KNEW the rent was higher, he KNEW delivery speed matters more. Claude brought structure — it organized factors Zain might have missed.

### THE CONCEPT

**Augmentation** = You and AI work together as thinking partners.

```
  ┌──────┐          ┌──────┐
  │ YOU  │◄────────►│  AI  │    ← Back and forth, many turns
  │      │          │      │
  └──────┘          └──────┘

  Your role: CO-CREATOR
  AI's freedom: MEDIUM (it suggests, you steer)
  Common failure: You stop challenging and just accept what AI says
```

**Classic augmentation tasks:**
- Brainstorming a business idea
- Reviewing a software architecture [software ka design]
- Comparing two strategies [do approaches mein se kaunsi better hai]
- Improving a lesson plan
- Exploring a question you don't fully understand yet

**Augmentation vs. Automation — the clear test:**

```
+------------------+---------------------------+---------------------------+
|                  | AUTOMATION                | AUGMENTATION              |
+------------------+---------------------------+---------------------------+
| You say          | "Do this specific thing"  | "Help me think about X"   |
| AI's job         | Execute                   | Collaborate               |
| Turns needed     | Usually 1                 | Usually many              |
| Who decides?     | You decided everything    | You decide, AI suggests   |
|                  | before starting           |                           |
| Output           | A finished product        | A better understanding    |
+------------------+---------------------------+---------------------------+
```

### EXAM TRAP

**The trap:** An answer that says augmentation means "AI does most of the work and you just approve it."

**Why people pick it:** Because it's true that AI produces a lot of text in augmentation. It LOOKS like AI is doing the work. But the thinking is shared. If you're just approving without challenging, you've slipped into bad automation (treating a complex judgment as a simple task).

**The rule:** In augmentation, the human is actively steering. If the human is just nodding, something is wrong.

### QUICK CHECK

**Q:** Zain's colleague Hira asks Claude: "Write a recommendation report saying we should open the Faisalabad warehouse." Is this augmentation?
**A:** No. Hira already made the decision and is asking AI to justify it. This is automation (write a specific document). Worse — she's asking AI to argue for a conclusion rather than help her FIND the right conclusion. The thinking is gone.

---

## CONCEPT 4: Agency — "Pursue This Goal"

### THE SCENARIO

Fast forward one year. Zain's company has grown. They now have a customer support team of 6 people handling 200+ emails a day. The CEO asks Zain:

> "I want an AI system that handles our routine customer emails — shipping status questions, delivery time estimates, basic return requests [wapsi ki darkhwast]. The team should only handle complaints [shikayaat] and unusual situations."

Zain sets up a Digital FTE [AI worker jo ek insaan ki jagah kaam kare — FTE = full-time equivalent, yani ek full-time kaamgar ke barabar]. Here's what he configures:

- **Goal:** Handle routine customer emails
- **Boundaries [hadood]:**
  - MAY answer shipping status questions using the tracking database
  - MAY give standard delivery time estimates
  - MAY process return requests under PKR 5,000
  - MUST escalate [aage bhej dena — yani insaan ko pass karna] any complaint to a human
  - MUST escalate any return over PKR 5,000
  - MUST NOT promise refunds [wapsi ke paise] or discounts
  - MUST NOT access payment information [paise ki details]

The system goes live on Monday. On Thursday at 2 AM, a customer emails: "My order hasn't arrived and I need it for my daughter's wedding tomorrow." The AI system reads the tracking database, sees the package is stuck in transit [raaste mein atka hua], and — following its rules — escalates to a human because this is not a routine status question.

Nobody from the team sees the escalation [insaan ko bheja gaya message] until 9 AM. Seven hours later.

### WHAT WENT WRONG

The AI followed its rules correctly. The RULES were incomplete. Zain never defined what happens with urgent cases outside business hours. The system did exactly what it was told — and that was the problem.

This is the core risk of agency: **you're not in the room when things happen.** In automation, you see every response. In augmentation, you're in the conversation. In agency, the AI works while you sleep. If the boundaries are wrong, you find out after the damage.

### THE CONCEPT

**Agency** = AI works toward a goal you set and chooses many of the steps itself.

```
  ┌──────────────┐         ┌──────────────┐
  │  YOU set the  │         │  AI decides   │
  │  goal and     │────────→│  many steps   │────→ Works for hours/days
  │  boundaries   │         │  on its own   │      while you're away
  └──────────────┘         └──────────────┘

  Your role: DIRECTOR
  AI's freedom: HIGH (AI decides next steps within your boundaries)
  Common failure: The goal or boundary is misunderstood (or incomplete)
```

**Two words that define agency in the framework:**

1. **"Future"** — You set it up on Monday, it handles Thursday's work while you're asleep
2. **"For others"** — The people the AI serves may not be you. Your customer, your student, your colleague talks to it

**This is what makes agency HARD.** You cannot watch every decision, so the judgment must be built in beforehand.

**The three modes on one spectrum:**

```
  LOW AI freedom ◄──────────────────────────────► HIGH AI freedom

  AUTOMATION          AUGMENTATION              AGENCY
  "Do this task"      "Help me think"           "Pursue this goal"
  Script writer        Co-creator               Director
  You see everything   You're in the room       You're often NOT there
  Failure: bad step    Failure: stop thinking   Failure: bad boundaries
```

**Critical exam point:** No mode is automatically better. One project may use all three:

```
  SAME PROJECT — Zain's customer support system:

  AUTOMATION  → Extract order number from emails (clear, repeatable task)
  AUGMENTATION → Zain + Claude design the escalation rules together
  AGENCY → The system handles emails on its own using those rules
```

**Automation vs. Agency — the comparison the exam loves:**

```
+-------------------+---------------------------+-----------------------------+
|                   | AUTOMATION                | AGENCY                      |
+-------------------+---------------------------+-----------------------------+
| You provide       | The task or steps         | The goal and boundaries     |
| AI decides        | Very little               | Many next steps             |
| Your role         | Script writer             | Director                    |
| Common failure    | A step is done badly      | Goal or boundary is         |
|                   |                           | misunderstood               |
| You are present?  | Yes, you see the output   | Often no — it works alone   |
+-------------------+---------------------------+-----------------------------+
```

**System of Record** [bharosemand data ka markazi store — jahan company ka official data aur rules hote hain]: In agency, the AI doesn't just work from your instructions. It works from the company's official data and rules. Zain's Digital FTE reads the tracking database. An accounting agent reads the ledger [hisaab kitaab]. A Digital FTE without a System of Record is guessing at facts it should be looking up.

### EXAM TRAP

**The trap:** An answer that says "agency is dangerous, so always use automation instead."

**Why people pick it:** Because the scenario showed something going wrong with agency, and automation feels safer. But the exam doesn't reward fear — it rewards **appropriate choice**. Some tasks REQUIRE agency (handling 200 emails at 2 AM). The right answer is usually: use agency BUT with proper boundaries, escalation rules, and monitoring [nigrani].

**The other trap:** An answer that says "give the agent full access so it can handle everything." This is the reckless option. The exam always has one answer that sounds efficient but removes human oversight [insaan ki nigrani].

### QUICK CHECK

**Q:** The CEO says: "Let the AI agent also handle refund decisions up to PKR 10,000 — our team is overwhelmed." What should Zain think about BEFORE agreeing?
**A:** This is a Delegation question. Before giving the agent more power: What could go wrong? (fraudulent refund requests). What are the financial boundaries? Who is accountable if the agent refunds incorrectly? Can the agent detect fraud, or does a human need to stay in the loop for certain patterns? "The team is overwhelmed" is a real problem, but the answer isn't automatically "give AI more freedom" — it's "figure out WHICH decisions are safe to delegate."

---

## PART 1 RECAP: How These 4 Concepts Connect

```
  AI FLUENCY = Effective + Efficient + Ethical + Safe
       │
       │  You achieve this through the 4Ds:
       │  Decide → Explain → Check → Own
       │
       │  And you work with AI in 3 modes:
       │
       ▼
  ┌─────────────────────────────────────────────────────────┐
  │                                                         │
  │   AUTOMATION ────► AUGMENTATION ────► AGENCY            │
  │   "Do this"        "Think with me"    "Pursue this"     │
  │                                                         │
  │   Clear task       Complex judgment    Goal + boundaries │
  │   You're present   You're present      You're often away │
  │   Low AI freedom   Medium freedom      High freedom      │
  │                                                         │
  │   ⚠ One project often uses ALL THREE modes              │
  │                                                         │
  └─────────────────────────────────────────────────────────┘
```

**The through-line:**
- Concept 1 told you WHAT fluency is (4 qualities, not prompt tricks)
- Concepts 2-4 told you the THREE WAYS you actually work with AI
- The rest of the course (Parts 2-6) teaches the 4 SKILLS that make all three modes work

**The exam connection:**
- When you see a scenario, FIRST identify which mode the person is in (automation / augmentation / agency)
- THEN figure out which D they're violating
- The wrong answer almost always either removes human judgment OR abandons the task entirely

---

## EXAM-LEVEL PRACTICE QUESTIONS — Part 1

*These are scenario-based, exam-difficulty questions covering the concepts from Part 1. Try to answer before revealing.*

---

### Question 1 — D4 (Workflow Integration)

A product manager at an e-commerce company asks Claude: "Our return rate went up 15% this quarter. Analyze why and recommend three actions to reduce it." Claude produces a polished report with three recommendations, each citing specific data points. The product manager reads it, thinks "this makes sense," and presents it at the leadership meeting the same afternoon.

**Which aspect of AI fluency is MOST at risk in this situation?**

**A.** Efficiency — the product manager should have spent more time refining the prompt to get a better analysis

**B.** Effectiveness — the analysis probably missed the real cause since Claude doesn't have access to the company's return data

**C.** Ethics — using AI for business analysis violates responsible AI use

**D.** Safety — the analysis might contain fabricated data points that the product manager presented as fact to leadership

> **Answer: D**
>
> **Why D is correct:** The scenario says Claude "cited specific data points" — but where did those come from? Claude doesn't have access to their internal return data. Those data points are likely hallucinated [AI ne khud bana liye]. Presenting fabricated numbers to leadership is a safety and credibility risk. The product manager treated a confident-sounding output as verified fact.
>
> **Why A is wrong:** The prompt was reasonable. Better prompting doesn't fix the verification problem.
>
> **Why B is partially right but not MOST at risk:** Yes, without real data the analysis is limited. But the IMMEDIATE danger isn't that the analysis is incomplete — it's that fabricated numbers are being presented as fact to leadership.
>
> **Why C is wrong:** Using AI for business analysis is perfectly fine. The problem is how the output was used, not that AI was used.

---

### Question 2 — D4 (Workflow Integration)

An HR coordinator [HR = insaani wasail, yani log aur naukri ka department] uses Claude to help draft a new employee onboarding checklist [naye employee ke pehle din ki to-do list]. She types: "Create a comprehensive onboarding checklist for new software engineers." Claude gives her a detailed 30-item checklist.

She then says: "Some of these items don't apply to our company. Let me go through them with you — keep items 1, 3, 5-12, remove the rest, and let me add some that are specific to our setup." They go back and forth for several turns, refining the list.

**Which mode of working with AI is the HR coordinator PRIMARILY using?**

**A.** Automation — because she gave Claude a specific task to complete

**B.** Augmentation — because she and Claude are collaborating to refine the result together

**C.** Agency — because Claude is making decisions about what to include in the checklist

**D.** Automation first, then agency — because she started with a task and then let Claude decide

> **Answer: B**
>
> **Why B is correct:** The first prompt looked like automation ("create a checklist"). But the real work happened in the back-and-forth: she reviewed, removed items, added company-specific ones, and refined together with Claude. That's co-creation — the defining feature of augmentation.
>
> **Why A is wrong:** If she had taken Claude's first output and used it, that would be automation. But she went through multiple rounds of collaborative refinement.
>
> **Why C is wrong:** Claude isn't deciding independently. The HR coordinator is steering every change. Claude suggests, she approves or rejects. That's augmentation, not agency.
>
> **Why D is wrong:** The second phase is augmentation (collaborative refinement), not agency. Agency would mean Claude manages onboarding on its own for future employees.

---

### Question 3 — D1 (Prompting & Task Execution)

A finance analyst [paisay ka hisaab rakhne wala] receives a 50-page vendor contract [ek company se samjhauta ka legal document] and needs to find all payment terms [paise kab aur kaise dene hain — uski sharaayt]. He opens Claude and types:

> "What are the payment terms?"

Claude responds with a general explanation of common payment terms in vendor contracts (Net 30, Net 60, milestone-based payments, etc.) but nothing specific to HIS contract.

**What is the MOST likely cause of this poor result?**

**A.** Claude is not capable of analyzing contracts — the analyst should use a specialized legal AI tool

**B.** The analyst failed to provide the contract document and context — Claude had nothing specific to work with

**C.** The prompt was too short — the analyst should have written at least three paragraphs of instructions

**D.** Claude hallucinated generic content instead of admitting it couldn't see the contract

> **Answer: B**
>
> **Why B is correct:** "AI only works with the information available to it." The analyst asked about payment terms but never uploaded the contract. Claude did the best it could with what it had — general knowledge about payment terms. This is a Description failure: the analyst didn't give AI what it needed.
>
> **Why A is wrong:** Claude CAN analyze contracts when given the document. The problem is the missing input, not the tool's capability.
>
> **Why C is wrong:** Length of prompt is not the issue. Even a one-line prompt works fine IF the contract is uploaded. "Here's the contract [attached]. List all payment terms with their section numbers." That's short and would work.
>
> **Why D is wrong:** Claude didn't hallucinate. It gave a general answer to a general question. Without the document, a general answer is actually the most reasonable response.

---

### Question 4 — D4 (Workflow Integration)

A small online store owner wants to automate customer support. She's considering two approaches:

**Approach A:** Set up an AI agent that reads incoming customer emails, answers shipping questions from the tracking database, and escalates [aage insaan ko bhej de] complaints to her.

**Approach B:** Each morning, she pastes the day's emails into Claude one by one and asks: "Draft a response to this customer email about their shipping question."

**Which statement BEST describes the tradeoff [faida aur nuqsaan ka muqaabla] between these approaches?**

**A.** Approach A is always better because it saves more time

**B.** Approach A uses agency and handles volume but requires well-defined boundaries; Approach B uses automation and is safer but doesn't scale

**C.** Approach B is always better because the human stays in control of every response

**D.** Both approaches are equally effective — the choice is just personal preference

> **Answer: B**
>
> **Why B is correct:** Approach A is agency — AI works toward a goal (handle support emails), decides steps (which are routine, which to escalate), and works when the owner isn't there. It scales to 200 emails but REQUIRES proper boundaries (what can AI answer? what must escalate?). Approach B is automation — clear task, owner sees every response, but doing it one-by-one every morning doesn't scale.
>
> **Why A is wrong:** "Always better" is almost always wrong on the exam. Agency without proper boundaries can cause real harm (wrong refund, angry customer, missed complaint).
>
> **Why C is wrong:** Same logic — "always better" ignores the reality that she can't manually handle 200 emails a day.
>
> **Why D is wrong:** They are NOT equally effective. They have different strengths, different risks, and suit different scales. The exam rewards understanding tradeoffs, not treating everything as equivalent.

---

### Question 5 — D2 (Output Evaluation & Validation)

Nida (from the travel agency) asks Claude to translate a hotel's English cancellation policy [booking radd karne ki sharaayt] into Urdu for their Pakistani customers. Claude produces a fluent, professional-looking Urdu translation.

Nida doesn't speak Urdu well enough to verify every sentence, but the translation "looks right" and the formatting is good. She's about to email it to 500 customers on their mailing list.

**What is the MOST appropriate next step?**

**A.** Send it — the translation looks professional and Claude is reliable for translation tasks

**B.** Ask Claude to translate the Urdu version back to English and compare it with the original to check for errors

**C.** Have someone fluent in both English and Urdu review the translation, especially the legal terms like cancellation deadlines and refund conditions

**D.** Add a disclaimer [warning ya chhoot ka bayaan] that the translation was AI-generated and send it as-is

> **Answer: C**
>
> **Why C is correct:** This translation contains legal terms (cancellation deadlines, refund conditions) that will affect 500 customers. If a sentence is translated slightly wrong — say, "within 48 hours" becomes "within 48 days" — that's a real problem. Nida already admitted she can't verify the Urdu herself. Domain expertise is needed. A fluent bilingual reviewer catches errors a back-translation might miss (cultural tone, legal precision).
>
> **Why A is wrong:** "Looks right" is not verification. This is automation bias — trusting the output because it LOOKS professional. Nida literally said she can't verify the Urdu.
>
> **Why B is wrong:** Back-translation is a useful technique for SOME checks, but it has limits. Claude might make the same error in both directions (translating a term wrong, then "correctly" translating the wrong term back). For legal content going to 500 people, you need a human domain expert.
>
> **Why D is wrong:** A disclaimer doesn't fix wrong legal terms. If the cancellation deadline is mistranslated, "AI-generated" doesn't protect the customers — or Nida's company — from the consequences.

---

### Question 6 — D4 (Workflow Integration)

A team lead is setting up a Digital FTE to handle invoice processing [bill process karna — bill aaye, check ho, system mein enter ho]. The Digital FTE should read incoming invoices, extract the key information, match them against purchase orders [khareedaari ke orders], and flag mismatches [farq nikale toh bataye] for the finance team.

**Which of the following represents the BEST delegation of work between the AI and humans?**

**A.** The AI handles everything end-to-end: reads invoices, matches them, resolves mismatches, and posts journal entries [hisaab mein entry] without human involvement

**B.** The AI extracts data and matches invoices to purchase orders; humans review all mismatches and approve all journal entries

**C.** Humans manually extract all invoice data; the AI only checks for formatting errors in the spreadsheet

**D.** The AI drafts a summary of all invoices received; humans do all matching and processing manually

> **Answer: B**
>
> **Why B is correct:** This is proper task delegation. AI handles the mechanical, repeatable parts (extraction, matching) — classic automation territory. But mismatches require judgment (Is it a data entry error? A pricing dispute? A fraud attempt?), and journal entries affect official financial records. Humans keep the decisions that require judgment and accountability.
>
> **Why A is wrong:** This is the "reckless" option. Giving AI full control over financial records with no human oversight [insaan ki nigrani] violates the principle that humans stay accountable. Resolving mismatches and posting journal entries require human judgment.
>
> **Why C is wrong:** This is the "wasteful" option — it barely uses AI at all. Manual data extraction from invoices is exactly the kind of repeatable task AI handles well.
>
> **Why D is wrong:** Same problem as C, slightly less extreme. It still leaves the most automatable work (matching) with humans. This isn't task delegation — it's barely using the tool.

---

### Question 7 — D1 (Prompting & Task Execution)

A marketing manager opens Claude and types: "Create a social media strategy." She gets a generic 2-page strategy document. She closes the chat, opens a new one, and types the same thing. She gets a different generic strategy. She tries a third time and gets yet another generic result.

**Which 4D skill would MOST improve her outcome if she applied it before her next attempt?**

**A.** Discernment — she should evaluate the three outputs more carefully to find useful parts

**B.** Diligence — she should check whether using AI for marketing strategy is approved by her company

**C.** Delegation — she should define what success looks like, who the audience is, and what parts AI should handle before prompting

**D.** Description — she should write a longer, more detailed prompt with specific requirements

> **Answer: C**
>
> **Why C is correct:** The most common beginner mistake: prompting before defining the problem. She doesn't know what she wants (which platform? what audience? what budget? what timeframe?). She hasn't decided what AI should do vs. what she should do herself. Until she has those answers, no amount of prompt improvement (Description) will help — because she hasn't figured out the GOAL yet.
>
> **Why D is tempting but wrong:** Yes, a better prompt (Description) would help. But Description comes AFTER Delegation. Writing a longer prompt without knowing the goal just gives you a longer generic output. You can't describe what you want if you haven't decided what you want.
>
> **Why A is wrong:** Evaluating generic outputs more carefully doesn't fix the root cause — she never defined what "good" looks like.
>
> **Why B is wrong:** There's no indication that using AI for marketing is restricted. This is a distraction.

---

*End of Part 1. Say "next" when you're ready for Part 2: Delegation — Decide Before You Type.*
