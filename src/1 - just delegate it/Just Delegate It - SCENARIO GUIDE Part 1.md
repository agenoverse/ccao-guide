# Just Delegate It -- SCENARIO GUIDE
# Part 1: The Shift — Stop Asking, Start Delegating

> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.
>
> **Domain focus:** This part covers **D1 — Prompting & Task Execution (14% of exam)** with one framework that touches all domains.
>
> **Reading time:** ~25 minutes

---

## CONCEPT 1: Asking AI vs. Giving AI the Job

**Exam domain: D1 — Prompting & Task Execution**

### THE SCENARIO

Nida works as an office assistant at a small travel agency [travel ka business jo logon ke trips arrange karta hai]. Her manager Saad says:

> "A client is visiting Istanbul next month. Find some hotel options."

Nida opens Claude and types:

> "What are some good hotels in Istanbul?"

Claude gives her a nice paragraph. It mentions famous hotel names, talks about neighborhoods [mohalle], says "Sultanahmet is popular with tourists," and recommends "booking early for better rates."

Nida reads it. It's... interesting. Like reading a travel blog. But now what? She still has to:

- Search each hotel herself
- Check if they're actually available next month
- Compare prices
- Find out which ones are near the client's conference venue [conference ki jagah]
- Put it in a format she can email to the client

The "answer" created MORE work, not less.

Now imagine Nida types this instead:

> "Find 5 hotels in Istanbul's Sultanahmet district under $150/night for March 15-20. Put them in a table with: hotel name, price per night, distance from Istanbul Convention Center, guest rating, and booking link."

Claude comes back with a table. Five rows. Six columns. Links she can click.

One of those links goes to a hotel page showing $180/night, not $150. Another link is dead. But Nida finds those problems in **3 minutes of CHECKING** -- not 30 minutes of DOING.

### WHAT HAPPENED HERE?

The question ("What are some good hotels?") got Nida advice. The advice was fine. But the work stayed with HER -- she still had to do everything.

The job ("Find 5 hotels... in a table...") got Nida a **RESULT**. The result might have errors. But the work shifted -- AI did the searching, comparing, and formatting. Nida's job became **checking**, not **doing**.

### THE CONCEPT

```
ASKING AI                          GIVING AI THE JOB
─────────                          ─────────────────
"What are good hotels?"            "Find 5 hotels under $150, in a table"
     │                                  │
     ▼                                  ▼
You get: ADVICE                    You get: A RESULT
     │                                  │
     ▼                                  ▼
Next step: YOU do the work         Next step: YOU check the work
     │                                  │
     ▼                                  ▼
Time spent: 30 min DOING           Time spent: 3 min CHECKING
```

The difference is NOT about length. Nida's job message was longer, yes, but a short message can also be a job:

> "Compare the iPhone 16 and Samsung S25 in a table."

That's 11 words. It's still a job because it asks for a **thing to exist** -- a table.

**The test:**

> Can someone else look at the result and say "this is done" or "this needs fixing"?
>
> If yes → you gave a job.
> If no → you asked a question.

To **delegate** [zimmedari dena -- hand over the responsibility] means to give AI the responsibility for producing the result. It doesn't depend on a paid plan or a special model. It depends on what kind of sentence you type.

### EXAM TRAP

The exam will show a scenario where someone gets a nice-sounding answer from Claude and asks "what should they do next?" Two traps hide here:

**Trap 1 — "The answer looks good, use it directly."** The trap works because the answer IS good -- as advice. But advice that hasn't been turned into a checkable result isn't done yet. The exam rewards the person who says "turn this into a specific deliverable [hawaala dene laayiq cheez -- something you can hand to someone] so I can verify it."

**Trap 2 — Length = quality.** The exam shows someone writing a VERY long, detailed question. Length looks like effort. But a long question is still a question if it doesn't ask for a thing to exist. **The correct answer cares about WHAT you asked for, not HOW MANY WORDS you used.**

### QUICK CHECK

> Zain types: "What should I know about GDPR [Europe ka data protection qanoon] before we launch in Europe?"
>
> Nida types: "List the 5 GDPR requirements that apply to an e-commerce site [online shopping website] selling to EU customers, in a table with: requirement, what we must do, and the penalty [saza/fine] for not doing it."
>
> Who asked a question and who gave a job?

**Zain asked a question.** He'll get a general overview -- useful to read, but he still has to figure out which rules apply to HIS company and what to do about each one.

**Nida gave a job.** She'll get a table she can hand to her manager and say "here's what we need to do." If a penalty amount is wrong, she can check it. If a requirement is missing, she can spot it. The result is **checkable**.

---

## CONCEPT 2: Give AI the Outcome, Not the Clicks

**Exam domain: D1 — Prompting & Task Execution**

### THE SCENARIO

Zain is a procurement coordinator [saman khareedne ka kaam sambhalne wala -- the person who finds and buys things for the company] at a mid-size company. His boss asks him to find the best deal on 50 office chairs.

Zain knows two furniture suppliers [saman dene wali companies]: "OfficeWorld" and "ChairMax." He types this into Claude:

> "Go to OfficeWorld's website. Find their ergonomic [kamar aur posture ke liye achi] office chair. Note the price. Then go to ChairMax's website. Find their similar chair. Note the price. Compare the two. Tell me which is cheaper."

Claude says it can't browse those specific websites. Zain rewrites the message, changes the instructions. Back and forth, three messages. Finally Claude gives him a comparison -- of just those two suppliers.

The result: ChairMax is PKR 4,500/chair cheaper. Zain reports to his boss.

Boss says: "Why didn't you check BulkFurniture? They're usually 30% cheaper than both."

Zain never checked because his **recipe** [step-by-step hidayaat -- detailed instructions telling AI exactly what to do] only had two suppliers. His plan was the **limit**. And nothing in the result told him his plan was narrow.

Now imagine Zain had typed this instead:

> "Find the best deal on 50 ergonomic office chairs for delivery in Karachi. Compare at least 4 suppliers. Table with: supplier, chair model, price per unit, bulk discount [zyada khareedne par milne wali chhoot] if available, delivery time, and link."

Claude searches. Finds 5 suppliers. One of them IS BulkFurniture. Their price is 35% lower. The table shows it clearly.

Did Zain know about BulkFurniture? No. AI found it because Zain described the **outcome** [nateeja -- what should exist when done], not the **clicks** [qadam -- steps].

### WHAT HAPPENED HERE?

| Recipe Zain (clicks) | Outcome Zain (result) |
|---|---|
| Told AI every step | Described what should exist |
| AI stayed inside HIS two suppliers | AI found 5 suppliers on its own |
| Result limited by Zain's knowledge | Result limited by AI's search capability |
| Narrow plan → narrow result | Zain judges: is this comparison good enough? |
| **Nothing warned him the plan was narrow** | **He can see what AI found and what's missing** |

### THE CONCEPT

```
RECIPE (clicks)                     OUTCOME (result)
───────────────                     ────────────────
YOU choose the method         vs.   YOU describe what should exist
YOU pick the sources                AI chooses where to look
AI follows your plan                AI follows its own plan
     │                                   │
     ▼                                   ▼
YOUR knowledge = the ceiling        AI's capability = the ceiling
     │                                   │
     ▼                                   ▼
If your plan is narrow,             If AI's method is bad,
the result is narrow                you SEE it in the result
AND YOU CAN'T TELL                  AND YOU CAN CHECK
```

The key insight:

> **A recipe makes YOUR plan the ceiling. An outcome makes AI's capability the ceiling -- and you can still check the result against what you asked for.**

**When DO you write steps?** When a specific order or source is REQUIRED -- not because you're nervous.

| This is a legitimate constraint | This is nervousness |
|---|---|
| "Use only our approved supplier list" | "Check these two websites because those are the ones I know" |
| "Process invoices [bills] in this exact order because our accounting system requires it" | "First search Google, then search Bing, then compare" |
| "Only compare plans available in Pakistan" | "Go to Plan A's website, then Plan B's website" |

The nervousness belongs at the **END** (when you check), not at the **START** (when you plan).

### EXAM TRAP

The exam loves showing two prompts for the same task. One is a detailed recipe with 8 steps. The other is a short outcome description.

**The TRAP:** the recipe LOOKS more professional because it's longer and more specific. Many test-takers pick it because "more detail = better prompt."

But the exam rewards the **outcome**. Why?

1. The recipe limits AI to YOUR method (which might miss things)
2. The recipe can't tell you what it missed (Zain never knew about BulkFurniture)
3. The outcome lets you JUDGE the result against a clear standard

**The exception:** when the steps themselves ARE the requirement. "Process these invoices in this exact order" is a real constraint from the accounting system. That's not nervousness -- that's the job.

**Decision tree for the exam:**

```
Does the task REQUIRE specific steps?
    │
    ├── YES (accounting order, legal process,
    │        system requirement)
    │        → Write the steps as CONSTRAINTS
    │
    └── NO (you're writing steps because
             you're nervous about AI's method)
             → Describe the OUTCOME instead
             → Let AI choose the method
             → Check the RESULT
```

### QUICK CHECK

> A marketing associate [marketing department mein kaam karne wali] needs Claude to find trending topics for next week's social media posts. Which is better?
>
> **A:** "Search Twitter, then search Reddit, then search LinkedIn. For each, find 3 trending topics related to our industry. List them."
>
> **B:** "Find 10 trending topics in [our industry] this week that would work as social media posts. Table: topic, why it's trending, which platform it's biggest on, and a suggested angle for our brand."

**B is better.** A limits AI to three platforms in a fixed order. If TikTok or industry newsletters have a bigger trend, the recipe misses it. B describes the OUTCOME (10 trending topics for social media posts) and lets AI find them wherever they live. The associate checks the RESULT -- are these really trending? Do they fit our brand? -- instead of checking whether AI followed the recipe correctly.

---

## CONCEPT 3: The Delegation Brief — Your Work Order for AI

**Exam domain: D1 — Prompting & Task Execution**

### THE SCENARIO

Fatima is an HR coordinator [HR = Human Resources = insaani wasail, jo company ke logon ki management karti hai -- hiring, salaries, benefits, policies]. Her company is choosing between three health insurance [sehat ka bima -- plan jo medical kharchay cover karta hai] plans for its 80 employees.

**Attempt 1:**

Fatima types: "Compare health insurance plans for a company."

Claude writes a general article about how to compare health plans. Mentions things like "consider deductibles" [deductible = pehle khud kitna pay karna hota hai before insurance pays] and "check the network" [network = hospitals ki list jo plan accept karti hai]. Useless for Fatima's actual decision.

**Attempt 2:**

Fatima adds more: "Compare Plan A, Plan B, and Plan C for our company of 80 people. We're in Lahore."

Better. Claude makes a comparison. But it guesses at prices, doesn't know the company's budget [budget = kitna paisa available hai], and recommends Plan B without saying why it picked B over A. When Fatima's boss asks "did you check Plan B's dental coverage [daanton ka ilaaj]?" Fatima realizes she never told Claude to check dental. So Claude never did.

**Attempt 3:**

Fatima writes this:

```
Outcome: a recommendation of which health insurance plan (A, B, or C)
  is best for our company, with clear reasons.

Context: 80 employees in Lahore. Average age 32. Current plan costs
  PKR 12,000/employee/month. 15 employees have families.

Constraints: budget ceiling [upar ki had] is PKR 15,000/employee/month.
  Must include dental. Must cover employees' children.

Authority: rank the plans yourself. If two plans are within 5% of each
  other on price, pick the one with better coverage without asking me.
  Flag it clearly if any plan exceeds the budget.

Deliverable: comparison table with: plan name, monthly cost per employee,
  dental (yes/no), family coverage (yes/no), hospital network size.
  Then a 3-sentence recommendation.

Verification: mark any cost you could not confirm from the documents
  I gave you as "unverified."
```

Now Claude's result has a table with the exact columns Fatima named. Plan C is marked "unverified" on price. The recommendation says Plan A, with reasons. Fatima opens Plan A's document, checks the dental line -- it matches. She checks Plan C's price -- Claude was right to mark it unverified, the source document doesn't mention it.

Her boss asks about dental? It's in the table. Budget? The constraint caught it. Why Plan A? The recommendation explains it.

### WHAT HAPPENED HERE?

| Attempt | What Fatima gave Claude | What went wrong |
|---|---|---|
| 1 | Nothing specific | Generic input → generic output |
| 2 | Some facts, no structure | Claude guessed at everything Fatima didn't say |
| 3 | Six answered questions | Every question the boss might ask was already answered -- or marked "unverified" |

Attempt 3 didn't just give more detail. It answered **six specific questions** before AI started. And when AI finished, Fatima had **something to check the result against** -- because she wrote the standard BEFORE seeing the result.

### THE CONCEPT

The **Delegation Brief** is six questions you answer before AI starts:

```
┌──────────────────────────────────────────────────────────────┐
│                    THE DELEGATION BRIEF                       │
│               (a work order, not a form)                     │
├──────────────┬───────────────────────────────────────────────┤
│  OUTCOME     │  What should exist when the work is done?     │
│              │  "A recommendation with clear reasons"        │
├──────────────┼───────────────────────────────────────────────┤
│  CONTEXT     │  What does AI need to know that it can't      │
│              │  know on its own?                              │
│              │  "80 employees, Lahore, current cost"          │
├──────────────┼───────────────────────────────────────────────┤
│  CONSTRAINTS │  What limits and requirements apply?           │
│              │  "Budget cap, must include dental"             │
├──────────────┼───────────────────────────────────────────────┤
│  AUTHORITY   │  What may AI decide without asking you?   ◄── │
│              │  "Rank them. Flag if over budget."        ppl │
│              │                                          skip │
├──────────────┼───────────────────────────────────────────────┤
│  DELIVERABLE │  What form should the result take?             │
│              │  "Table with specific columns +                │
│              │   3-sentence recommendation"                   │
├──────────────┼───────────────────────────────────────────────┤
│  VERIFICATION│  What will you check before accepting?    ◄── │
│              │  "Mark unconfirmed costs as unverified"   and │
│              │                                          this │
└──────────────┴───────────────────────────────────────────────┘
```

### The Two Lines People Skip

**AUTHORITY** — Without it, AI makes decisions **silently**. "Plan B is best" -- but who decided? On what basis? Did AI compare by price? Coverage? Something it made up? The Authority line makes the decision **visible**. It also sets limits: "flag if over budget" means AI can't quietly recommend an expensive plan.

In a chat, authority is about decisions ("pick the cheaper one without asking me"). Later, when AI can actually DO things (send emails, publish pages, make purchases), the same line becomes a **permission** [ijazat -- what AI is allowed to do in the real world]. The habit starts now.

**VERIFICATION** — Without it, you READ the result instead of CHECKING it. You decide what matters enough to open a source for BEFORE you see a nice-sounding table. Why before?

- **After** you see a polished result → your brain says "this looks good" (confirmation bias [apne yakeen ki tasdeeq -- you WANT it to be right so you see it as right])
- **Before** you see it → your brain says "I need to check the dental line and the price"

Writing verification FIRST turns reading into checking.

### The Brief Is a Thinking Tool, Not a Form

> Nobody writes 6 lines for a 2-line job. But every time a result disappoints you, one of these six questions was unanswered -- and now you can say which one.

Quick diagnosis when a result goes wrong:

| The result... | The missing line was... |
|---|---|
| Is too generic, could be about any company | **Context** (you didn't tell AI about YOUR situation) |
| Includes things you didn't want | **Constraints** (you didn't set limits) |
| Made choices you didn't approve | **Authority** (you didn't say what AI may decide) |
| Is a paragraph when you needed a table | **Deliverable** (you didn't name the form) |
| Has errors you didn't catch until your boss did | **Verification** (you didn't decide what to check in advance) |
| Answered a different question entirely | **Outcome** (you didn't say what should exist) |

### EXAM TRAP

The exam tests the Brief in two ways:

**Trap 1 — "Which line is missing?"**

A scenario shows someone's prompt that produced a bad result. Four options, each suggesting a different fix. The correct answer identifies which of the six lines was missing.

Example: "Claude recommended the most expensive option without mentioning the budget limit" → missing **CONSTRAINT**.
Example: "Claude made choices silently without explaining them" → missing **AUTHORITY**.

**Trap 2 — "Authority vs. Constraints confusion."**

The exam tests whether you know the difference:

| CONSTRAINT (restricts) | AUTHORITY (permits a decision) |
|---|---|
| "Do not include plans over PKR 15,000" | "If two plans are within 5%, pick the one with better coverage" |
| "Must include dental coverage" | "Choose the sources yourself" |
| "Only plans available in Pakistan" | "Say clearly when you chose, and why" |

A constraint is a **wall** -- don't go past this.
Authority is a **door** -- you may go through this, and tell me when you do.

The exam puts a constraint in the Authority line (or vice versa) and asks what's wrong.

### QUICK CHECK

> Nida writes this brief for a phone comparison:
>
> "Outcome: best phone for me under PKR 80,000.
> Context: I mostly use camera and social media.
> Constraints: must be available in Pakistan.
> Deliverable: comparison table."
>
> Two lines are missing. Which two, and what could go wrong without them?

**Missing: Authority and Verification.**

Without **Authority**: Claude will pick a phone for Nida, but she won't know HOW it decided. Did it prioritize camera quality? Battery? Brand? If Claude silently decided "Samsung is better because of the camera" but Nida actually cares about battery life, she won't know a decision was made until she's already bought it. With an Authority line like "prioritize camera quality, then battery life. If two phones are similar, pick the cheaper one" -- the decision is visible.

Without **Verification**: Nida will read the table and think "looks good." She won't have decided IN ADVANCE what to check. The price might be from 6 months ago. The "available in Pakistan" claim might be wrong. Without a verification line like "mark any price you couldn't confirm from the official store as unverified" -- Nida has no idea what's been checked and what's been guessed.

---

## FRAMEWORK: The Delegation Loop — The Rhythm Behind Everything

**Exam domain: Crosses all domains — accountability is heaviest in D2 (Output Evaluation, 21%) and D6 (Governance, 15%)**

### THE SCENARIO

Ahmed works as a marketing associate [marketing department mein kaam karne wala]. His team lead Sana asks him to prepare a competitor [muqabla karne wali company] price comparison for their quarterly review [quarterly = har 3 maheene, review = jaiza lena].

Watch how Ahmed's task moves through six steps -- even though Ahmed never thinks about "steps." This is the rhythm that was hiding inside everything you just read.

**Step 1 — DEFINE:**
Ahmed thinks: "I need a table comparing our product prices with 3 competitors, updated with this month's prices." He writes his brief (Concept 3). The outcome is clear.

**Step 2 — DELEGATE:**
Ahmed pastes the brief into Claude. The job is now AI's responsibility to execute. Ahmed didn't tell Claude which websites to check (Concept 2 -- outcome, not clicks). He described what should exist.

**Step 3 — OBSERVE:**
Claude works. A table appears. Ahmed READS it -- he doesn't direct every row. He lets AI do the routine work [routine = har roz ka mamuli kaam] without hovering over every step. This is not laziness. This is the correct use of the middle of the loop.

**Step 4 — INTERVENE:**
Ahmed notices one competitor is missing from the table. Claude included "TechCorp" but the team tracks "TechNova," not "TechCorp." Ahmed types ONE message: "Replace TechCorp with TechNova. Keep everything else." Small fix. Not a rewrite.

**Step 5 — VERIFY:**
Ahmed opens two competitor websites and checks the prices Claude listed. One price is from last month's promotion [offer wali keemat] -- no longer valid. He corrects it himself.

**Step 6 — ACCEPT:**
The table is accurate, complete, and in the format Sana needs. Ahmed accepts the result and includes it in the quarterly review deck [presentation slides].

### WHAT HAPPENED HERE?

Ahmed ran the entire **Delegation Loop** without knowing its name. Six steps. One rhythm. Every time.

### THE CONCEPT

```
THE DELEGATION LOOP

  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
  │  DEFINE  │───▶│ DELEGATE │───▶│ OBSERVE  │───▶│INTERVENE │───▶│  VERIFY  │───▶│  ACCEPT  │
  │          │    │          │    │          │    │          │    │          │    │          │
  │ Say what │    │ Give AI  │    │ Let AI   │    │ Fix the  │    │ Check    │    │ Use it,  │
  │ result   │    │ the job  │    │ work     │    │ drift    │    │ what     │    │ or send  │
  │ you want │    │          │    │          │    │          │    │ matters  │    │ it back  │
  └──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
  ◄── YOURS ──►   ◄── YOURS ──►   ◄────── AI WORKS, YOU WATCH ──────►  ◄── YOURS ──►  ◄─ YOURS ─►
                                         and step in if needed
```

**The golden rule:**

> **AI owns the middle. You own both ends.**

| Step | Who owns it | What it means |
|------|-------------|---------------|
| 1. DEFINE | **YOU** | Only you know what result you need |
| 2. DELEGATE | **YOU** | You decide to hand over the job |
| 3. OBSERVE | AI works, you watch | AI does the routine work |
| 4. INTERVENE | **YOU** step in | You correct when AI drifts |
| 5. VERIFY | **YOU** | Only you can decide what to check |
| 6. ACCEPT | **YOU** | Only you can decide if it's fit to use |

AI can HELP with any of your four steps. It can suggest what to define. It can help you verify by highlighting uncertain claims. But it cannot **TAKE** them, because:

> **What the job IS (Define) and whether the result is fit for use (Accept) are decisions you answer for.**

### The Accountability Rule

This is not about distrust. This is about **accountability** [zimmedari -- agar kuch galat ho jaye to kaun jawab de ga -- who is responsible if something goes wrong].

If Ahmed's price table has a wrong number and Sana presents it to leadership [company ke bade log -- senior management], Sana doesn't say "Claude made a mistake." She says "my team made a mistake."

> **AI doing the work does not transfer accountability to AI.**

The name on the result is yours. AI is a tool you used. The screwdriver didn't build the shelf -- you did. If the shelf falls, you answer for it.

This one sentence will come up in almost every D2 and D6 question on the exam. Memorize it.

### How the Loop Connects to the Brief

The Brief (Concept 3) fills in the **Define** step. Look:

| Brief line | Fills in which Loop step |
|---|---|
| Outcome | DEFINE — what should exist |
| Context | DEFINE — what AI needs to know |
| Constraints | DEFINE — what limits apply |
| Authority | OBSERVE + INTERVENE — what AI may decide |
| Deliverable | DEFINE — what form the result takes |
| Verification | VERIFY — what you'll check |

The Brief is what you write BEFORE. The Loop is what you DO during. Together they are the complete system this course teaches.

### EXAM TRAP

The exam LOVES testing "which step of the loop is this about?"

**The pattern:** a scenario shows something going wrong. The options each describe a different step's fix. The TRAP is picking a step that sounds right but is the WRONG part of the loop.

Example from mock exams:

> "Claude's output has a wrong number. What should the associate do?"
>
> - A: Re-run the whole job from scratch *(that's DEFINE again -- overkill)*
> - B: Check the number against the source *(that's VERIFY -- correct!)*
> - C: Ask Claude to check its own work *(that's asking AI to do YOUR step)*
> - D: Stop using Claude for this type of task *(abandoning -- wasteful)*

**The exam's single most common wrong answer pattern:**

> **"Ask Claude to verify/confirm/check its own output."**

This sounds efficient. But VERIFY is YOUR step. AI confirming its own answer is **circular** [gol gol -- same source checking itself]. Claude will confidently say "yes, that number is correct" even if it made it up. Self-confirmation is not verification.

This pattern appears in the mock exams as:
- "Ask Claude to double-check its arithmetic" (Q2 mock)
- "Ask Claude to confirm the accuracy of the figure" (Q1 mock)
- "Ask Claude to rate its own accuracy" (Mock Practice Q1)
- "Ask Claude if it is confident" (Q7 mock)

Every single time, it's the wrong answer. **AI checking itself = not checking at all.**

```
EXAM DECISION TREE: "What should they do about the output?"

Is the problem about WHETHER the output is correct?
    │
    ├── YES → VERIFY step (check against source yourself)
    │         NEVER "ask Claude to confirm"
    │
    └── NO → Is the problem about the output's direction/approach?
              │
              ├── YES → INTERVENE step (correct, redirect)
              │
              └── NO → Is the problem that you don't know
                        what you want?
                        │
                        └── YES → DEFINE step (rewrite the brief)
```

### QUICK CHECK

> Sana reviews Ahmed's competitor price table and finds that Claude included a product category their company doesn't even compete in. She tells Ahmed to remove it and replace it with the correct category.
>
> Which steps of the Delegation Loop is Sana performing?

**VERIFY** (she checked the table and found an irrelevant category) and she's triggering **INTERVENE** (by telling Ahmed to correct it). Ahmed will send a correction message to Claude.

If the corrected result is good, Ahmed makes the **ACCEPT** decision. If it's still wrong, he has four choices: accept, correct again, investigate further, or reject (take the job back and do it manually). Those four decisions belong to Concept 10 -- coming in Part 4.

---

## PART 1 RECAP: How These Pieces Connect

```
        ┌─────────────────────────────────────────────┐
        │          THE DELEGATION LOOP                │
        │   (the rhythm -- what you DO)               │
        │                                             │
        │  DEFINE → DELEGATE → OBSERVE → INTERVENE    │
        │                                → VERIFY     │
        │                                → ACCEPT     │
        │                                             │
        │    ▲ filled in by                           │
        │    │                                        │
        │  THE DELEGATION BRIEF                       │
        │   (the work order -- what you WRITE)        │
        │                                             │
        │  Outcome ──────── what should exist          │
        │  Context ──────── what AI can't know alone   │
        │  Constraints ──── limits and requirements    │
        │  Authority ────── what AI may decide ◄ skip! │
        │  Deliverable ──── what form to produce       │
        │  Verification ─── what you'll check  ◄ skip! │
        └─────────────────────────────────────────────┘
```

### The story so far:

**Concept 1** taught you the SHIFT:
Stop asking questions → start giving jobs. A job asks for a **thing to exist**. A question asks for **advice**. The test: can someone else look at it and say "done" or "needs fixing"?

**Concept 2** taught you HOW to describe the job:
Describe the **outcome** (the result you want), not the **clicks** (the steps to get there). Your plan is your ceiling. AI's capability is a higher ceiling. Steps only belong in the message when they're real constraints, not when they're nervousness.

**Concept 3** taught you the TOOL for describing jobs:
The **Delegation Brief** -- six questions answered before AI starts. Outcome, Context, Constraints, Authority, Deliverable, Verification. People skip Authority (so AI decides silently) and Verification (so they read instead of check).

**The Delegation Loop** gave all of this a RHYTHM:
Define → Delegate → Observe → Intervene → Verify → Accept. **You own both ends. AI owns the middle. Accountability never transfers.**

### How they build on each other:

```
Concept 1:  "Give a JOB, not a question"
                │
                │ but how do I describe the job?
                ▼
Concept 2:  "Describe the OUTCOME, not the steps"
                │
                │ but what else does AI need besides the outcome?
                ▼
Concept 3:  "Answer SIX QUESTIONS before AI starts"
                │
                │ but when do I ask these questions? And what
                │ do I do while AI works? And how do I check?
                ▼
The Loop:   "DEFINE → DELEGATE → OBSERVE → INTERVENE → VERIFY → ACCEPT"
```

### Three rules to take to the exam from Part 1:

| Rule | What it means | When the exam tests it |
|---|---|---|
| A job asks for a thing to exist | If it doesn't ask for a deliverable, it's a question | When they show a vague prompt and ask what's wrong |
| Outcome, not clicks | Describe the result, not the recipe | When they show two prompts and ask which is better |
| AI checking itself is not verification | "Ask Claude to confirm" is ALWAYS wrong | Every time "ask Claude to verify" appears as an option |

---

**Next up — Part 2: Give AI Real Material.** You've learned to describe the job. But the job needs material: current facts (Concept 4), a source document (Concept 5), and a specific output form (Concept 6). Part 2 teaches you how to give AI real material to work with, starting with the rule that governs every button on the screen: **Need First, Then Tool.**

Say "next" when ready.
