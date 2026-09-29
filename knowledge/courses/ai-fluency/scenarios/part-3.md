---
type: Document
title: "AI Fluency: Scenario Guide Part 3"
description: "Scenario walkthroughs for AI fluency concepts covering description, context, and how to communicate intent clearly."
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
order: 34
---

## DESCRIPTION: Give AI What It Needs

> **Concepts covered:** 8, 9, 10, 11 (of 22)
> **Estimated reading time:** 25 minutes
> **Primary exam domains:** D1 (Prompting & Task Execution), D5 (Configuration & Knowledge Management)
> **Key idea:** The best prompt is not clever. It is COMPLETE. And Description is much bigger than a single prompt.

**Memory aid for Description's three parts:**

```
  WHAT  →  HOW  →  HOW TO WORK WITH ME
  (Product)  (Process)  (Performance)
```

---

## CONCEPT 8: Product Description — Define the Result

### THE SCENARIO

Bilal works in the marketing department of a mid-size textile company in Faisalabad. His boss says: "We need a summary of last quarter's [pichhle 3 mahinon ka] sales report for the board meeting."

Bilal opens Claude, uploads the 30-page sales report PDF, and types:

> "Summarize this report."

Claude returns a 2-page summary. It covers everything: sales by region, sales by product, raw material costs, shipping delays, new client acquisitions [naye grahak / naye buyers milna], employee headcount changes, and a paragraph about currency exchange rates.

Bilal sends it to his boss. His boss sends it back:

> "Bilal, the board has 5 minutes for this. They don't care about headcount or exchange rates. They want to know three things: are we selling more than last quarter, where are we losing money, and what should we do about it. Also — bullet points. Nobody reads paragraphs at board meetings."

Bilal wasted 30 minutes because he told Claude WHAT to do (summarize) but not what the RESULT should look like.

### WHAT WENT WRONG

Claude did exactly what Bilal asked. "Summarize this report" — Claude summarized the ENTIRE report. Every section. Every detail. It had no way to know:
- The audience is the board of directors (busy, want decisions not data)
- They have 5 minutes (so: one page, not two)
- They care about 3 specific things (revenue trend, losses, recommendations)
- Format should be bullet points (not paragraphs)
- Some sections should be excluded (headcount, exchange rates)

### THE CONCEPT

**Product description** answers one question: **What do I want BACK?**

It includes 7 things:

```
  ┌────────────────────────────────────────────────────────────┐
  │  THE 7 ELEMENTS OF PRODUCT DESCRIPTION                     │
  │                                                             │
  │  1. TYPE OF OUTPUT     What is it? (summary, email, table, │
  │                        comparison, draft, analysis)         │
  │                                                             │
  │  2. AUDIENCE           Who reads this? (board, team lead,   │
  │     [kaun padhega]     customer, student, regulator)        │
  │                                                             │
  │  3. FORMAT             How should it look? (bullets, table, │
  │                        numbered list, paragraphs, slides)   │
  │                                                             │
  │  4. LENGTH             How long? (one page, 200 words,      │
  │                        3 bullet points, 5 slides)           │
  │                                                             │
  │  5. TONE               How should it sound? (formal,        │
  │     [andaaz]           friendly, direct, cautious, urgent)  │
  │                                                             │
  │  6. IMPORTANT TOPICS   What MUST be covered?                │
  │     [zaroori points]   (revenue, risks, recommendations)    │
  │                                                             │
  │  7. EXCLUSIONS         What to LEAVE OUT?                   │
  │     [kya nahi chahiye]  (headcount, exchange rates, jargon  │
  │                         [mushkil technical alfaaz])         │
  └────────────────────────────────────────────────────────────┘
```

**Bilal's fix:**

> "Summarize this quarterly sales report for the board of directors who have 5 minutes to read. Focus on: revenue trends vs. last quarter, where we're losing money, and recommended actions. Use short bullet points, keep it to one page. Skip headcount, currency details, and accounting jargon."

Same AI. Same report. Completely different result — because the PRODUCT was defined.

**The golden rule of Product Description:**

> **Completeness matters more than clever wording.**

The second prompt isn't smarter. It just tells the AI what it needs to know. You don't need "magic words." You need COMPLETE information.

### EXAM TRAP

**The trap:** An answer that says "use more sophisticated prompting techniques" or "add a persona/role to the prompt."

**Why people pick it:** Prompting tricks feel advanced. "Act as a senior consultant" sounds like a power move.

**The truth:** No technique fixes missing information. If you don't say who the audience is, adding "act as a consultant" doesn't help — the consultant still doesn't know who they're writing for. Techniques can help AFTER the basic information is complete. They can't replace it.

### QUICK CHECK

**Q:** Bilal's colleague writes: "Act as a world-class McKinsey consultant and summarize this report with exceptional analytical rigor and strategic insight." Is this good Product Description?
**A:** No. It defines a ROLE but says nothing about the output: who's reading it, what format, what length, what to focus on, what to skip. A "world-class McKinsey consultant" still needs to know the audience and the brief [task ki poori hiddayaat]. The prompt sounds impressive but is missing 6 of 7 elements.

---

## CONCEPT 9: Process Description — Define the Approach

### THE SCENARIO

Sana (the accountant from Part 2) is helping her client compare proposals [peshkash ke documents] from three shipping companies. Each proposal is 15 pages. Her client needs a recommendation by Friday.

**Attempt 1 — One giant request:**

Sana uploads all three proposals and types:

> "Compare these three shipping proposals and recommend the best one for a small textile exporter."

Claude produces a 3-page comparison with a recommendation: "Vendor B offers the best balance of cost and coverage." It mentions prices, delivery timelines, insurance [beema] terms, and exit clauses [contract khatam karne ki sharaayt].

The recommendation sounds reasonable. But Sana has no way to check it. Did Claude extract the prices correctly? Did it weight the criteria [faisla karne ke usool — konsi cheez zyada zaroori hai] the way her client would? Did it miss an important difference?

Everything happened in one pass — extraction, comparison, scoring, recommendation — all blended together. If something is wrong at Step 1, the error flows silently through Steps 2, 3, and 4.

**Attempt 2 — Step by step:**

Sana starts over with a new approach:

> **Step 1:** "Extract from each proposal: monthly cost, contract length, exit terms, insurance coverage, and guaranteed delivery time. Put it in one comparison table. Do ONLY this step, then stop."

She checks the table against each proposal. One price is wrong — Claude read "per shipment" as "per month." She corrects it.

> **Step 2:** "Now compare the three vendors using ONLY this table. My client's priorities, in order: (1) guaranteed delivery time, (2) insurance coverage, (3) monthly cost. Highlight where they differ most."

She checks: does the comparison match the table? Did it respect her priority order?

> **Step 3:** "Score each vendor on my three criteria. Show your scoring."

She checks: do the scores follow from the comparison? Did Claude add criteria she didn't ask for?

> **Step 4:** "Draft a one-paragraph recommendation. It should ONLY claim what the table and scores support."

She checks: does the recommendation match the analysis?

### WHAT WENT RIGHT (in Attempt 2)

Sana split the work by **order**, not just by owner (that was Task Delegation in Part 2). She told AI HOW to do the work — which step first, what to do at each step, and when to stop.

The critical insight: **she put the most error-prone step FIRST.** Extraction (Step 1) is where mistakes spread farthest. A wrong price in Step 1 corrupts the comparison (Step 2), the scoring (Step 3), and the recommendation (Step 4). By checking Step 1 immediately, she caught the "per shipment vs. per month" error before it poisoned everything downstream [aage ke tamaam nataayij].

### THE CONCEPT

**Process description** answers: **How should AI do the work?**

It includes:

```
  ┌──────────────────────────────────────────────────────────────┐
  │  THE 5 ELEMENTS OF PROCESS DESCRIPTION                       │
  │                                                               │
  │  1. STEPS TO FOLLOW      What's step 1, 2, 3?               │
  │  2. ORDER OF WORK        What comes first and why?           │
  │  3. METHOD TO USE        What approach? (compare, analyze,   │
  │                          score, extract, etc.)                │
  │  4. EXAMPLES TO IMITATE  "Like this, not like that"          │
  │  5. CHECKS BEFORE DONE   "Before finishing, verify X"        │
  └──────────────────────────────────────────────────────────────┘
```

**When Process Description matters MOST:**

```
  LOW NEED:                          HIGH NEED:
  Simple, one-step tasks             Multi-step analysis
  "Translate this sentence"          "Compare 3 vendor proposals"
  "Fix grammar in this email"        "Review code for bugs, then security"
                                     "Research, then analyze, then draft"

  Rule: The more steps, the more you need Process Description.
  Rule: Put the step where a mistake spreads farthest FIRST.
```

**The "one pass" vs. "step by step" decision:**

```
  ONE PASS (everything at once):
  ┌──────────┐
  │ Extract  │──→ Compare ──→ Score ──→ Recommend
  │ + Compare│     (all invisible, all unchecked)
  │ + Score  │
  │ + Write  │
  └──────────┘
  ⚠ You can only check the ENDING
  ⚠ An error at step 1 flows through silently

  STEP BY STEP:
  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
  │ Extract  │──→│ Compare  │──→│  Score   │──→│  Draft   │
  └────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬─────┘
       ↓ CHECK        ↓ CHECK        ↓ CHECK        ↓ CHECK
  ✓ Caught wrong     ✓ Priorities   ✓ No extra     ✓ Claims
    price              respected      criteria       supported
```

> **The key rule:** In Delegation (Part 2) you split the job by OWNER (human vs. AI). In Process Description, you split the job by ORDER (which step first). Both are about preventing mistakes — Delegation prevents the WRONG person doing a task, Process Description prevents errors spreading undetected.

### EXAM TRAP

**The trap:** An answer that says "ask AI to do everything in one pass and then review the final output carefully."

**Why people pick it:** It sounds efficient. And "review the final output" sounds responsible.

**The truth:** You CANNOT catch Step 1 errors by reading Step 4. If Claude extracted the wrong price, the comparison, scoring, and recommendation all BUILD on that wrong number — and the final output looks perfectly logical. The logic is fine. The foundation is wrong. Step-by-step with checks is slower per task but catches errors that one-pass never reveals.

### QUICK CHECK

**Q:** A colleague says: "I just paste everything into Claude and ask for the answer. If it's wrong, I'll see it." When will this approach fail?
**A:** When the output LOOKS right but is built on a wrong extraction. If Claude pulls the wrong number from page 7 of a proposal, the rest of the analysis flows perfectly from that wrong number. The final recommendation sounds logical. You'd only catch it by checking Step 1 (extraction) against the source — which you can't do when everything happened in one invisible pass.

---

## CONCEPT 10: Performance Description — Define How AI Behaves

### THE SCENARIO

Dr. Aisha is a professor at a business school in Lahore. She uses Claude in two very different ways:

**Use 1 — Her own research:**
She's writing a paper on supply chain [saamaan ek jagah se doosri jagah pahunchane ka poora nizam] disruptions [rukawatein]. She opens Claude and types her research question. Claude gives her a polite, agreeable response. Every time she suggests something, Claude says: "That's a great point! Building on your insight..."

After 30 minutes, she realizes Claude has agreed with every single thing she said. Even the two points where she was testing a weak argument on purpose. Claude never pushed back. She wasted 30 minutes in an echo chamber [woh jagah jahan aapko sirf apni hi baat sunaayi de — koi challenge na kare].

**Use 2 — A student tutoring bot:**
Dr. Aisha is asked to set up an AI tutor for first-year students. The tutor should help students work through case studies. She sets it up and it works — students ask questions, the AI explains.

But within a week, students figure out they can paste the case study and say "give me the answer." The AI happily gives the complete answer. Students stop thinking. Their exam scores DROP even though they "used the tutor."

The AI tutor answers every question correctly. And it's still a bad tutor.

### WHAT WENT WRONG

**Use 1:** Dr. Aisha never told Claude HOW to work with her. She wanted a thinking partner (augmentation). She got a yes-machine. Without a performance description, Claude defaults to being helpful and agreeable — which is exactly wrong when you need someone to challenge your ideas.

**Use 2:** The tutoring bot had no rules about its BEHAVIOR. It was told WHAT to do (help with case studies) but not HOW to behave (never give answers before the student tries). The students didn't break the AI — they found the shortest path, which the AI happily allowed.

### THE CONCEPT

**Performance description** answers: **How should this AI BEHAVE?**

It's about the AI's working style and behavioral rules — not WHAT it produces, but HOW it interacts.

**Two sizes of the same skill:**

```
  SIZE 1: IN A CHAT (audience = you)
  ┌─────────────────────────────────────────────┐
  │ "Challenge my assumptions when they're weak" │
  │ "Flag uncertainty on factual claims"         │
  │ "Don't agree just to be polite"              │
  │ "Ask clarifying questions before assuming"   │
  │ "Be concise — no filler paragraphs"          │
  └─────────────────────────────────────────────┘
  ⚠ If bad: annoying for 10 minutes, then you fix it

  SIZE 2: IN A DEPLOYED AGENT (audience = others)
  ┌─────────────────────────────────────────────┐
  │ "Never give the answer before the student    │
  │  has tried the problem"                      │
  │ "If the customer is angry, acknowledge the   │
  │  frustration before offering solutions"      │
  │ "Never promise a refund without checking the │
  │  return policy first"                        │
  └─────────────────────────────────────────────┘
  ⚠ If bad: it IS the product. Thousands of people
    get the wrong experience, and you may not know
    until the damage is done.
```

**The 5 behavioral dimensions you can set:**

```
  ┌───────────────────────────┬────────────────────────────────┐
  │ DIMENSION                 │ SPECTRUM                       │
  ├───────────────────────────┼────────────────────────────────┤
  │ Detail level              │ Concise ◄──────► Detailed      │
  │ Interaction style         │ Supportive ◄───► Challenging   │
  │ Thinking style            │ Exploratory ◄──► Decisive      │
  │ Assumption handling       │ Ask first ◄────► Assume & go   │
  │ Uncertainty handling      │ Flag it ◄──────► Best guess    │
  └───────────────────────────┴────────────────────────────────┘
```

**Dr. Aisha's fix for her research sessions:**

> "Challenge my assumptions when they are weak. Flag uncertainty. Do not agree with me just to be polite. If my argument is stronger, explain why. If yours is stronger, hold your position and explain it."

This turns AI from a polite answer machine into a thinking partner. The effect is immediate — within 2-3 turns, the conversation quality changes.

**Dr. Aisha's fix for the tutoring bot:**

> "You are a tutor for first-year business students. Never give the answer before the student has attempted the problem. When a student pastes a case study and asks for 'the answer,' ask them what they think first. Guide through questions, not answers. If the student is stuck, give a HINT, not the solution."

Same AI. Same case studies. Completely different student experience — because the BEHAVIOR was defined.

> **The critical exam insight:** A performance description written for a chat disappears when the chat ends. In a deployed agent, it lives in a **system prompt** [standing instruction — AI har chat ki shuru'at mein padhta hai] and applies to EVERY conversation. This is why it matters more at scale — in a chat, you set it and forget it after 10 minutes. In a system, it runs a thousand times without you watching.

### EXAM TRAP

**The trap:** An answer that says "the AI tutor answered every question correctly, so it's working well."

**Why people pick it:** Because correctness FEELS like the right metric [paimaana]. Every answer was factually correct. What more do you want?

**The truth:** An AI tutor that gives correct answers immediately is a BAD tutor — because students stop thinking. The AI's BEHAVIOR (giving answers too easily) is the problem, even though its OUTPUT (the answers themselves) is correct. This is Performance Description territory: the AI does the task correctly but behaves wrongly.

**This exact pattern appears in the crash course's assessment questions and is a prime D2 exam topic.**

### QUICK CHECK

**Q:** Dr. Aisha sets the performance description for her research session. It works beautifully — Claude pushes back, flags uncertainty, holds positions. Next week she opens a NEW chat and starts her next research question. Will the performance description still be active?
**A:** No. Every new chat starts fresh. Claude carries nothing between chats. She needs to set the performance description again — or, at scale, put it in a system prompt so it's always there. This is why performance descriptions matter more in deployed agents: they're set ONCE and apply to every conversation.

---

## CONCEPT 11: Context Engineering — Bigger Than a Prompt

### THE SCENARIO

Zain (from the logistics company) has been asked to set up an AI agent that helps the sales team answer customer questions about shipping rates, delivery timelines, and service coverage [kin kin jagahon par delivery hoti hai].

**Attempt 1 — Good prompt, nothing else:**

Zain writes an excellent system prompt:

> "You are a helpful shipping consultant for ZTex Logistics. Answer customer questions about our shipping rates, delivery timelines, and service areas. Be professional, accurate, and concise. If you don't know the answer, say so."

The prompt is well-written. Clear role, clear behavior, clear fallback ["if you don't know, say so"]. Textbook prompting.

A customer asks: "What's your rate for a 500 kg shipment from Lahore to Dubai?"

The AI responds with a confident, professional answer: "Our standard rate for a 500 kg shipment from Lahore to Dubai is approximately $2.50 per kg..."

That number is completely made up. ZTex's actual rate is $4.10 per kg, and it varies by season, by container type [kis tarah ke container mein jaata hai], and by whether the customer has a volume contract [zyada maal bhejna hone par kam rate ka agreement].

**Attempt 2 — Context engineering:**

Zain realizes the prompt is fine. The INFORMATION behind it is missing. He builds:

```
  ┌──────────────────────────────────────────────────┐
  │  WHAT ZAIN PROVIDES:                              │
  │                                                    │
  │  1. INSTRUCTIONS    System prompt (the good one    │
  │                     he already wrote)               │
  │                                                    │
  │  2. DOCUMENTS       ZTex rate card (updated         │
  │                     monthly), coverage map,         │
  │                     FAQ document                    │
  │                                                    │
  │  3. EXAMPLES        10 real customer Q&As that      │
  │                     the sales team approved          │
  │                                                    │
  │  4. MEMORY          Customer's past shipments and   │
  │                     their contract terms             │
  │                                                    │
  │  5. POLICIES        "Never quote a rate not in the  │
  │                     rate card. If the customer's     │
  │                     route isn't listed, say you'll   │
  │                     have a sales rep follow up."     │
  │                                                    │
  │  6. TOOLS           Access to the rate calculator    │
  │                     and tracking database             │
  │                                                    │
  │  7. DEFINITIONS     What "express" vs "standard"    │
  │                     vs "economy" means at ZTex       │
  └──────────────────────────────────────────────────┘
```

Now the same customer asks the same question. The AI looks up the rate card, finds the Lahore-to-Dubai line, checks whether this customer has a volume contract, and gives the correct seasonal rate with the right conditions.

Same AI. Same prompt. Completely different accuracy — because the CONTEXT was designed.

### WHAT WENT WRONG (in Attempt 1) AND RIGHT (in Attempt 2)

**Prompt engineering** asks: "How do I phrase this message?"
**Context engineering** asks: "What information must be AVAILABLE for the AI to succeed?"

Attempt 1 had a perfect prompt but no context — no rate card, no policies, no tools, no examples. The AI had to guess. And AI guesses confidently.

Attempt 2 had the same prompt PLUS all the information the AI needs to answer correctly. The prompt was never the problem. The missing context was.

### THE CONCEPT

**Context engineering** = Designing ALL the information an AI needs — not just the wording of one message.

```
  ┌─────────────────────────────────────────────────────────┐
  │                                                           │
  │   PROMPT ENGINEERING        CONTEXT ENGINEERING           │
  │   ──────────────────        ───────────────────           │
  │   "How do I phrase          "What information must be     │
  │    this message?"            available for AI to succeed?"│
  │                                                           │
  │   Focuses on:               Focuses on:                   │
  │   - Word choice             - Documents                   │
  │   - Structure               - Examples                    │
  │   - Techniques              - Memory                      │
  │   (one message)             - Conversation history        │
  │                             - Policies                    │
  │                             - Tools                       │
  │                             - Database records            │
  │                             - Definitions                 │
  │                             - Instructions                │
  │                             (the whole environment)       │
  │                                                           │
  │   SIZE: one prompt          SIZE: the whole system        │
  │                                                           │
  └─────────────────────────────────────────────────────────┘
```

> **The killer insight:** A well-written prompt CANNOT rescue an agent that has the wrong data, missing rules, poor examples, or no access to the tools it needs. You can't prompt your way out of missing context.

**How Description scales into system architecture [nizam ki banawat]:**

```
  IN A CHAT                    →    IN THE AGENT FACTORY
  ──────────────────────             ──────────────────────
  Product Description          →    Output specifications
  (what you want back)               (what the agent produces)

  Process Description          →    SKILL.md files
  (how to do the work)               (reusable process steps)

  Performance Description      →    System prompt
  (how AI should behave)             (permanent standing instruction)

  Context (documents, data)    →    System of Record
                                     (trusted data store with rules,
                                      knowledge, governance)
```

**When prompt templates hit their limit:**

Many teams use a template: Role + Context + Task + Constraints + Output Format. This is useful! But notice what's in it:

```
  TEMPLATE SLOT               MAPS TO:
  ─────────────               ────────
  Role                        Performance Description (partial)
  Context                     Start of Context Engineering
  Task                        Product Description
  Constraints                 Product Description
  Output Format               Product Description

  MISSING:
  Process Description         (how to approach the work)
  Full Performance Description (behavioral rules, not just role)
  Full Context Engineering     (documents, tools, memory, policies)
```

The template covers Product Description well. It barely touches the other two. That's why templates work for simple tasks and break for complex ones.

> **Pro tip from the crash course:** When you're not sure how to phrase a prompt, explain your situation in ordinary language and ask the AI to turn it into a clearer instruction. This is using augmentation to improve your Description — two Ds working together.

### EXAM TRAP

**The trap:** An answer that says "write a more detailed prompt" when the real problem is missing documents/data/tools.

**Why people pick it:** Because prompt improvement is the most visible, most talked-about skill. And it IS important. But it's not everything.

**The test:** If the problem would still exist with the best prompt in the world (because the rate card isn't uploaded, or the policy isn't specified, or the tool isn't connected), then the answer is context engineering, not prompt engineering.

**Another trap:** "The AI hallucinated because the model is unreliable." No — the AI hallucinated because it didn't have the data it needed. With the rate card uploaded, it gives the correct rate. The model didn't change. The context did.

### QUICK CHECK

**Q:** A company's customer support AI keeps giving wrong refund amounts. The team rewrites the system prompt three times — adding "be accurate," "double-check amounts," "use exact figures." It still gives wrong amounts. What's actually missing?
**A:** The refund policy document and the order database. The AI doesn't have access to the actual refund rules or the customer's order details. No amount of prompt improvement fixes missing data. The fix is context engineering: connect the AI to the refund policy and the order system.

---

## PART 3 RECAP: How Description's Four Concepts Connect

```
  DESCRIPTION = Everything you tell AI (not just one prompt)

  ┌───────────────────────────────────────────────────────────┐
  │                                                             │
  │  PRODUCT DESCRIPTION  ─── "WHAT do I want back?"          │
  │  (output, audience, format, length, tone, topics, exclude) │
  │                                                             │
  │  PROCESS DESCRIPTION  ─── "HOW should AI do the work?"    │
  │  (steps, order, method, examples, checks)                  │
  │  ⚠ Put the error-prone step FIRST. Check before moving on │
  │                                                             │
  │  PERFORMANCE DESCRIPTION ─ "HOW should AI BEHAVE?"         │
  │  (chat: working style / deployed: behavioral rules)        │
  │  ⚠ In chat = 10-minute annoyance if wrong                 │
  │  ⚠ In deployed agent = the product itself                 │
  │                                                             │
  │  CONTEXT ENGINEERING  ─── "WHAT INFORMATION must be        │
  │  (documents, examples, memory,  available for AI           │
  │   policies, tools, definitions)  to succeed?"              │
  │  ⚠ A great prompt can't rescue missing context             │
  │                                                             │
  └───────────────────────────────────────────────────────────┘

  THE GOLDEN RULE:
  ╔══════════════════════════════════════════════════╗
  ║  COMPLETENESS beats CLEVERNESS.                  ║
  ║  Always.                                         ║
  ╚══════════════════════════════════════════════════╝
```

**Connection to Parts 1-2:**
- Part 1: WHAT fluency is + three modes of working
- Part 2: DELEGATION — decide before you type (problem → platform → task split)
- **Part 3: DESCRIPTION — give AI what it needs (product → process → performance → full context)**
- Next (Part 4): DISCERNMENT — judge what comes back

**The flow so far:**

```
  DELEGATE ──────────→ DESCRIBE ──────────→ DISCERN (next)
  "What's the goal?    "Here's everything    "Is the result
   Who does what?"      AI needs."            actually good?"
```

---

## EXAM-LEVEL PRACTICE QUESTIONS — Part 3

---

### Question 1 — D1 (Prompting & Task Execution)

A financial analyst [maali tajziyakaar] uploads a 50-page annual report [saalana report] and types: "Analyze this report." Claude produces a 4-page analysis covering every section: revenue, expenses, debt, equity, market position, management outlook, and risk factors.

The analyst's manager wanted only a comparison of this year's operating margins [munafe ka tanasub — kitne percent faida hua] versus last year's, with an explanation of what changed.

**Which part of Description did the analyst fail to provide?**

**A.** Process description — he didn't specify the steps Claude should follow

**B.** Performance description — he didn't tell Claude to be concise and direct

**C.** Product description — he didn't define the specific output he wanted (margin comparison, year-over-year, what changed)

**D.** Context engineering — he should have uploaded more documents for a better analysis

> **Answer: C**
>
> **Why C is correct:** "Analyze this report" has no product definition. What kind of analysis? Focused on what? For whom? How long? The analyst needed a specific deliverable [haasil karda cheez]: operating margins, this year vs. last year, explanation of changes. That's product description — defining WHAT you want back.
>
> **Why A is wrong:** Process description (steps/order) would help, but the root issue is that the analyst never said what OUTPUT he wanted. You define the product first, then the process.
>
> **Why B is wrong:** Being "concise and direct" is a behavioral preference. It might shorten the output but wouldn't focus it on operating margins specifically.
>
> **Why D is wrong:** He uploaded the annual report — that's the right document. He didn't need more context. He needed to say what he wanted from the context he already provided.

---

### Question 2 — D1 (Prompting & Task Execution)

A legal team asks Claude to review a 30-page employment contract [mulazim ka contract] for potential risks. They type:

> "Review this contract and tell us all the risks."

Claude produces a 5-page risk analysis. The team sends it to their client. Later, the client's CFO [Chief Financial Officer — maali amoor ka sarbrah] asks: "Why didn't your review mention the non-compete clause [woh shart jis mein kaha gaya ho ke nokri chhodne ke baad muqaable ki company mein kaam nahi kar sakte] in Section 14? That's the biggest risk for our executives."

It turns out Claude DID extract risks from Sections 1-12 but ran into a processing issue and never analyzed Sections 13-18. There was no error message — the output just stopped covering later sections.

**Which combination of Description failures MOST contributed to this problem?**

**A.** Product description only — they should have listed which sections to review

**B.** Process description — they should have asked Claude to process the contract section-by-section so they could verify complete coverage

**C.** Performance description — they should have told Claude to flag when it couldn't complete a task

**D.** Context engineering — the contract was too long for the model to handle

> **Answer: B**
>
> **Why B is correct:** The root cause is that everything happened in one pass. Claude processed some sections, quietly stopped covering others, and the output LOOKED complete. If they'd used process description — "Analyze each section one at a time, starting from Section 1. For each section, list the risks. After all sections, provide a summary" — they would have noticed Section 14 was never covered. Step-by-step processing with checks catches silent gaps.
>
> **Why A is wrong:** They wanted ALL sections reviewed, so listing specific sections would have been limiting, not helpful. The issue isn't which sections — it's that they couldn't tell some sections were silently skipped.
>
> **Why C is partially true:** Yes, asking Claude to flag incomplete work helps. But Performance description alone wouldn't guarantee Claude notices its own gap. Process description (step-by-step) is the structural fix.
>
> **Why D is wrong:** 30 pages is within most models' context windows. The issue is processing approach, not capacity.

---

### Question 3 — D5 (Configuration & Knowledge Management)

A company builds a customer support AI agent. The system prompt says: "You are a helpful customer support agent. Answer customer questions accurately and professionally. If you don't know the answer, say so."

Customers keep getting wrong answers about return deadlines and warranty [guarantee] terms. The team rewrites the system prompt to say: "Be extremely accurate about return deadlines and warranty terms." Wrong answers continue.

**What is the MOST likely root cause?**

**A.** The model isn't powerful enough for customer support tasks

**B.** The system prompt needs more specific instructions about how to phrase warranty information

**C.** The agent doesn't have access to the actual return policy and warranty documents — it's generating answers from training data instead of company-specific information

**D.** The agent needs a stronger performance description telling it to never guess about deadlines

> **Answer: C**
>
> **Why C is correct:** This is a context engineering problem. The agent has a good prompt but NO access to the actual policies. It's answering from general training knowledge about how return policies typically work — not how THIS company's policy works. The fix is uploading the return policy and warranty documents, not rewriting the prompt. "A well-written prompt cannot rescue an agent that has the wrong data, missing rules, poor examples, or no access to the tools it needs."
>
> **Why A is wrong:** The model is fine. A less powerful model with the right documents beats a powerful model without them.
>
> **Why B is wrong:** Phrasing instructions more specifically doesn't help when the underlying data is missing. You can't phrase your way to accuracy without source material.
>
> **Why D is wrong:** Telling it "never guess" is helpful but insufficient. Even if it says "I don't know" more often, that's a bad customer experience. The actual fix is giving it the documents so it CAN answer correctly.

---

### Question 4 — D5 (Configuration & Knowledge Management)

A team builds an AI assistant for a real estate agency [property ka daftar]. The agent should help agents draft property listings [property ki bechne wali ad]. They write:

> System prompt: "You are a real estate listing assistant. Write compelling property descriptions."

The listings are well-written but wildly inconsistent. One says "cozy 2-bedroom" for a 2,500 sq ft apartment. Another calls a 20-year-old building "newly constructed." The descriptions don't match the agency's style or standards.

**Which ADDITIONAL context would MOST improve the agent's performance? (Select TWO)**

**A.** 10-15 examples of approved listings the agency has used before, showing their preferred style and terminology

**B.** A policy document defining what terms like "spacious," "cozy," "newly constructed," and "modern" mean at this agency (e.g., "newly constructed = built within the last 3 years")

**C.** A more powerful model that better understands real estate terminology

**D.** A longer system prompt that says "be accurate and consistent"

> **Answer: A and B**
>
> **Why A is correct:** Examples are one of the most powerful forms of context. 10-15 approved listings show the AI what "good" looks like at THIS agency — the style, the tone, the level of detail, the way they describe features. This is context engineering in action.
>
> **Why B is correct:** Definition documents prevent the inconsistency problem. If "newly constructed" has a specific meaning (built within 3 years), the AI needs that definition. Without it, "newly constructed" is whatever sounds plausible. Definitions are policies — a form of context the prompt alone can't replace.
>
> **Why C is wrong:** A more powerful model with no examples and no definitions will write more eloquently wrong descriptions. The context is missing, not the capability.
>
> **Why D is wrong:** "Be accurate and consistent" is vague advice, not actionable context. The AI needs to know what "accurate" and "consistent" MEAN at this agency — which is exactly what examples (A) and definitions (B) provide.

---

### Question 5 — D1 (Prompting & Task Execution)

An associate at an accounting firm receives three tax proposals [teen mukhtalif tax salahkaar companies ki peshkash] from consulting firms. She needs to recommend one to her partner [senior boss jo decisions karta hai]. She uploads all three and types:

> "Compare these three proposals and recommend the best one."

The partner [senior boss] says: "Next time, don't do it all at once. I need to see the extracted facts FIRST, then the comparison, then the scoring, THEN the recommendation. Each step separately."

**Why does the partner prefer step-by-step?**

**A.** Because step-by-step is always more efficient than one-pass analysis

**B.** Because splitting into steps makes each step smaller, which helps AI produce better output

**C.** Because when extraction, comparison, scoring, and recommendation happen in one pass, an error at any stage flows silently through all later stages — step-by-step lets you catch errors early

**D.** Because clients prefer seeing the analysis broken into stages rather than reading one long document

> **Answer: C**
>
> **Why C is correct:** This is the core principle of Process Description. The partner knows from experience: a wrong extraction (pulling the wrong fee from page 8) corrupts the comparison, which corrupts the scoring, which corrupts the recommendation — and the final output looks perfectly logical. You'd never know the foundation is wrong. Step-by-step with checks at each stage catches the error at the point it enters.
>
> **Why A is wrong:** Step-by-step is NOT always more efficient. For simple tasks ("translate this sentence"), one-pass is fine. It's for multi-step analysis with dependencies that step-by-step matters.
>
> **Why B is wrong:** While smaller steps can help, the real reason is ERROR DETECTION, not output quality. The steps could be the same quality — the point is you can CHECK each one.
>
> **Why D is wrong:** Client presentation format is a separate concern. The partner is talking about the PROCESS of doing the analysis, not how to present the results.

---

### Question 6 — D2 (Output Evaluation & Validation)

A manager asks Claude to draft a weekly team update email. He types:

> "Write a team update email for this week."

Claude writes a generic email about "great progress" and "looking forward to next week's milestones." The manager sends it. His team is confused — the email mentions no specific projects, no real updates, and no actual milestones.

**Rank the following fixes from MOST impactful to LEAST impactful:**

1. Add product description: specify which projects to mention, what updates matter, who the audience is, the tone
2. Add process description: "First list each project's status, then highlight blockers, then preview next week"
3. Add performance description: "Be specific, never use generic phrases like 'great progress'"

**A.** 1 → 2 → 3

**B.** 3 → 1 → 2

**C.** 2 → 1 → 3

**D.** All three are equally impactful

> **Answer: A**
>
> **Why A is correct:** Product description is the biggest gap. Claude doesn't know WHICH projects, WHAT happened this week, or WHO reads this email. Without that, no process or performance description helps — you can't structure content you don't have (Process), and being "specific" about nothing is still nothing (Performance). Product description first unlocks everything else.
>
> **Why B is wrong:** "Never use generic phrases" (Performance) would improve tone but Claude still doesn't know what to write about. Specific language about nothing is still empty.
>
> **Why C is wrong:** Process description (step-by-step structure) adds organization, but organized nothing is still nothing. Content (Product) comes before structure (Process).
>
> **Why D is wrong:** They're NOT equally impactful. Product description addresses the root cause (missing content). The other two improve an output that already has the right content.

---

*End of Part 3. Say "next" when you're ready for Part 4: Discernment — Don't Trust the Polish.*
