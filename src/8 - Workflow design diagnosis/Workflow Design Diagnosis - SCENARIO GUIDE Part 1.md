# Workflow Design & Diagnosis -- SCENARIO GUIDE
# Part 1: DESIGN (Concepts 1-4)

> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.

---

## CONCEPT 1: The Unit Is the STEP, Not the Session

### THE SCENARIO

Fatima works at a mid-size company. She uses Claude to write customer emails. She's good at it -- she gives the right context [background info], picks the right tone [formal ya casual], and the emails come out great.

One day, Fatima gets sick and takes a week off. Her colleague Ahmed covers for her.

Ahmed opens Claude and types: "Write a reply to this customer complaint."

The email comes back... bad. Wrong tone. Missing the company's standard apology line [company ka standard maafi ka jumla]. No mention of the refund policy [paisa wapsi ki policy].

Ahmed thinks: "This AI tool is useless."

But the tool didn't change. Fatima changed. When Fatima was there, she carried everything in her head -- the tone, the rules, the format. She never wrote any of it down. She had a **personal habit**, not a **workflow** [kaam ka tareeqa jo likha hua ho aur koi bhi follow kar sake].

Now imagine a different version. Fatima had written down:

```
Step 1: Read the complaint (Fatima or whoever is covering)
Step 2: AI drafts a reply using our complaint template (AI)
Step 3: Add the standard apology + refund policy reference (AI, using saved instructions)
Step 4: Fatima (or cover person) reads and approves before sending (Human)
Step 5: Send the email (Human)
```

Each step has a **name** and an **owner** [zimmedar insaan -- who is responsible]. Now when Ahmed covers, he follows the same steps. The AI reads the same saved instructions. The output is the same quality.

### WHAT HAPPENED HERE?

Fatima v1 had a **session** -- she judged it AFTER ("did the email look good?"). It worked because of HER, not because of the setup.

Fatima v2 had **steps** -- she decided BEFORE ("this step belongs to AI, this step belongs to a human, and here's why"). It works because of the DESIGN, not the person.

### THE CONCEPT

**A step** = one named piece of work, with one owner.

The difference between "I use AI" and "our workflow uses AI":

| "I use AI" (habit) | "Our workflow uses AI" (steps) |
|---------------------|-------------------------------|
| Lives in your head | Written down |
| Varies by your mood | Same every time |
| Disappears when you're on leave | Works for whoever is at the desk |
| You judge it AFTER (did I like the result?) | You decide BEFORE (is this step safe to hand over?) |
| Comfortable but doesn't grow | Grows in value AND can be wrong in a way that keeps being wrong |

### THE KEY RULE

> **Decide about the step, not the session.**

A step has one owner and a reason you can state BEFORE the work runs. "The output looked good" is not a reason -- that's judging a session.

### EXAM TRAP

The exam will show you a scenario where AI produced great results in testing. Someone says "since it's been working well for 3 months, let's give it more responsibility." This FEELS logical. But "it worked well" is a session judgment, not a step decision. The exam wants you to see that.

### QUICK CHECK

> Fatima says: "AI has been writing great emails for 3 months, so let's let it send them directly without my review." Is this a step decision or a session judgment?

It's a session judgment. She's using past output quality to decide about a DIFFERENT step (sending vs drafting). The decision to let AI send should be based on: can sending be undone? (No.) What does a wrong send cost? (Customer trust.) Not on: "the drafts were good."

---

## CONCEPT 2: Extract Requirements, Then Attack Them

### THE SCENARIO

Bilal is a business analyst [kisi company mein kaam ka analysis karne wala]. His manager sends him a Slack message:

> "We need to improve our monthly client reporting. The clients have been complaining. Fix it."

Bilal opens Claude and types: "Help me improve our monthly client reporting."

Claude gives back a nice plan: automated dashboards [automatic charts/tables wali screen], real-time data [live hota hua data], beautiful visualizations [graphs aur charts], email delivery, the works.

Bilal presents it. His manager says: "This is way too much. I just wanted the report to arrive by the 3rd of each month instead of the 10th, and to include the new product line."

What went wrong?

Bilal had a **vague request** [unclear/fuzzy -- kuch clear nahi tha], not **requirements** [zarooriyaat -- exactly kya chahiye, likha hua]. He asked AI to fill in the blanks, and AI filled them with what "improving reporting" USUALLY means. But his manager meant something very specific.

### THE RIGHT WAY

Bilal should have turned the vague request into a **task definition** [kaam ki exact tafseel] FIRST. A task definition answers five questions:

```
1. WHAT is produced?       --> Monthly client performance report
2. FOR WHOM?               --> Client account managers + the clients themselves
3. HOW OFTEN?              --> Monthly, by the 3rd of each month
4. FROM WHAT DATA?         --> CRM system + the new product line data
5. IN WHAT FORMAT?         --> PDF, same template as now but with new section
```

Each answer is something you can CHECK [jaan sako ke poora hua ya nahi]. Each answer still MISSING is a clarifying question [sawal jo clear karna zaroori hai] you owe your manager -- NOT a blank for AI to fill.

### THE TWO-PASS METHOD

**Pass 1: Extract** -- Pull out every distinct requirement [alag alag zaroorat] from whatever messy input you got (a long email, a document, a meeting note).

**Pass 2: Attack** -- Review your own list. Ask: "Which of these could two people on my team read differently?"

**Why Pass 2 matters more than Pass 1:**

Take this line from Bilal's manager: "The report should be delivered promptly after month end."

This LOOKS like a clear requirement. But "promptly" [jaldi] means different things to different people. To one person, 2 days. To another, 2 weeks. Both think they met the requirement.

**The test:** Can you write a check for it? [Kya tum yeh prove kar sakte ho ke requirement poori hui?] If you cannot say what evidence would prove it was met, it's not a requirement yet -- it's still a wish.

An unclear requirement caught HERE costs one clarifying question. Caught AFTER the work is built, it costs the work.

### THE CONCEPT

```
VAGUE REQUEST          TASK DEFINITION         ATTACK THE LIST
"improve reporting" -> 5 clear answers      -> "which ones could
                       (what, who, when,        two people read
                        from what, format)      differently?"
                       
COSTS: 10 minutes      SAVES: weeks of wrong work
```

### WHERE REQUIREMENTS WORK LIVES (preview of Concept 14)

If you do this kind of work regularly (like extracting requirements from RFPs [Request for Proposal -- jab koi company tender nikaalti hai aur suppliers se jawab maangti hai]):

| What | Where to save it | Why |
|------|-----------------|-----|
| Past winning proposals [pehle jeet chuke proposals] | Knowledge base [files jo Project ke saath rahen] | Reference material -- AI reads it every time |
| Your extraction format [kis format mein extract karna hai] | Standing instruction [rule jo Project mein save ho] | Applies automatically, nobody has to remember |
| The step-by-step extraction procedure | Skill [saved procedure at account level] | Same steps, every time, works in any Project |

### EXAM TRAP

The exam might show a scenario where someone gets a long document and asks AI: "Summarize this and tell me what to do." The trap: a summary tells you what the document SAYS. A structure (table with labels + sources + ambiguity flags) gives you rows other people can WORK FROM. The exam rewards "extract into structured requirements" over "summarize."

Also watch for: someone who takes AI's extracted requirements and acts on them WITHOUT the second pass (attacking the list). The exam rewards checking your own extraction.

### QUICK CHECK

> Your manager says: "We need better onboarding for new hires." Is this a requirement or a vague request? What's the first thing you should do?

It's a vague request. First thing: turn it into a task definition. WHAT exactly is produced? For WHOM? How OFTEN does it run? From WHAT data? In WHAT format? Each unanswered question = a question you owe your manager.

---

## CONCEPT 3: If It Matters, Compute It -- Never Write It

### THE SCENARIO

Hira works in business analytics [data se insights nikaal ke decisions mein madad karna]. Her team built a dashboard [data dikhane wali screen with charts] using AI. It shows five metrics [numbers jo performance dikhate hain -- jaise monthly sales, customer count, etc.].

Cycle 1: She asks AI to build the dashboard. Five charts come back, looking great. Everyone is impressed.

Cycle 2: She asks AI to add a date filter [tarikh ke hisaab se data chhanno] and a totals row [neeche ek line jo saare numbers ka total dikhaye].

The filter works perfectly. The totals row ALSO looks perfect. Numbers are formatted, right size, everything lines up.

One analyst notices something: the "Total Revenue" column shows 847,000. She knows from experience it should be closer to 920,000.

She checks. The number is wrong.

But here's the scary part: **it didn't LOOK wrong.** There was no error message. No red flag. The number was the right SIZE, in the right FORMAT, in the right PLACE. It just wasn't the right NUMBER.

What happened?

The AI **wrote** the total instead of **computing** [calculate karna] it. When AI writes a number into a sentence, it generates what such a number USUALLY looks like. When AI computes a number using **code execution** [AI actually writes a small program, runs it, and reports the result], the number traces back to actual arithmetic [asal hisaab kitaab] that someone can re-run and verify.

**On the page, a written number and a computed number look EXACTLY the same.** You cannot tell them apart by reading.

### THE CONCEPT

> **If a result matters, COMPUTE it. Never WRITE it.**

```
BAD (written):
  "What's the total revenue for Q3?"
  --> AI WRITES: "The total revenue for Q3 is approximately $847,000"
  --> Looks right. Might be wrong. You can't tell. Nobody can verify.

GOOD (computed):
  "Using code execution on the attached revenue data,
   CALCULATE the total revenue for Q3.
   Show the calculation."
  --> AI RUNS actual code on your actual data
  --> Output: "$921,340 (sum of rows 1-847, column D)"
  --> You can see HOW it got there. Someone can RE-RUN it.
```

**The key prompt structure for numbers:**

```
"Using code execution on [the data],
 CALCULATE [what you need].
 THEN, from those figures, recommend [the decision].
 Show the assumptions."
```

This separates:
1. **Computation** (the numbers) -- must be code
2. **Recommendation** (what to do about the numbers) -- can be prose [regular text]
3. **Assumptions** [farz kiye gaye values -- "we assumed 5% growth"] -- visible so someone can DISAGREE with the recommendation without redoing the arithmetic [hisaab]

### A DIAGNOSTIC HABIT

Whenever numbers come back slightly wrong, the cause is usually NOT the prompt. It's that a calculation was asked for in prose [regular text mein, bina code ke].

Think of it this way: if you asked a person to "write down roughly what the sales total should be," they'd guess. If you asked them to "open Excel and add up column D," they'd compute. Same with AI.

### EXAM TRAP

The exam will show a scenario where someone's numbers are "subtly wrong" or "close but not exact." The tempting answer will be "write a better prompt" or "switch to a stronger model." The correct answer is: "move the calculation to code execution." This is not a prompt problem. It's a feature problem [galat tool use ho raha hai].

### QUICK CHECK

> A staffing plan says "we need 3 new analysts based on the projected 15% growth." The number looks reasonable. How do you know if it was computed or written?

You CAN'T know from the page. That's the whole point. A written 15% and a computed 15% look identical. If this number matters (and a staffing decision definitely matters), it MUST come from code execution on the actual data, with assumptions shown.

---

## CONCEPT 4: The Window Test -- Can AI See Everything It Needs?

### THE SCENARIO

Naveed is an operations lead [operations ka zimmedar -- jo daily workflow chalata hai]. His company handles customer support tickets [customer ke complaints/requests].

He asks AI: "Using our ticket data from the last 4 quarters, calculate the growth trend [trend -- pattern, kis taraf ja rahe hain numbers], estimate tickets per analyst, and recommend how many new analysts we need to hire next quarter."

AI does excellent work:
- Growth trend: +18% per quarter (computed, verified -- good!)
- Current load: 342 tickets per analyst per month (computed -- good!)
- Recommendation: **Hire 3 new analysts** by January

Naveed presents this to his VP. The VP stares at him.

"Naveed, we announced a **hiring freeze** [naukri band -- company ne decide kiya hai ke koi naya banda nahi lena] in last Tuesday's all-hands meeting. Did you miss it?"

The AI's analysis was PERFECT. The trend was right. The load calculation was right. But the recommendation was useless -- because the hiring freeze was announced in a MEETING, not in any DATA the model could access.

**The model didn't stop and say "I don't know about a hiring freeze."** It filled that gap with what such a recommendation USUALLY looks like -- hire more people when volume goes up. It gave this recommendation at the SAME confidence level [utni hi yakeen se] as the parts it actually computed.

### THE CONCEPT: The Window Test

The **context** [sab kuch jo model dekh sakta hai] = your prompt + files you gave it + the conversation so far.

The **context window** [model ki nazr ki hadd -- kitna dekh sakta hai] = the limit on how much context the model can hold at once.

The **window test** asks one question:

> **Can I put EVERYTHING this step needs into the window?**
> - YES --> the step is ELIGIBLE [mumkin hai -- consider karo]. But NOT automatically safe to hand over!
> - NO --> the step is MINE. Full stop.

```
+-------------------------------------------------------+
|               WHAT'S INSIDE THE WINDOW                 |
|                                                        |
|  [Your prompt]   [Files you uploaded]   [Chat history] |
|                                                        |
|  Examples:                                             |
|  - The ticket data from last 4 quarters                |
|  - The company playbook document                       |
|  - Previous messages in this conversation              |
+-------------------------------------------------------+

   OUTSIDE THE WINDOW (model CAN'T see these):
   
   - Hiring freeze announced in a meeting
   - Risk appetite [company kitna risk lene ko tayyar hai]
   - That THIS particular client won't accept one more delay
   - Anything that happened after model's knowledge cutoff
     [jab tak model ko train kiya gaya tha, us ke baad ka kuch bhi]
   - "A human touch" situations (condolence note to
     long-standing client [purane client ko taaziyat ka khat])
```

### TWO TYPES OF PLANNING STEPS

**Synthesis steps** [jaisa jama karna -- gather information aur options banana] = they run on information you CAN supply. These hand over well to AI.

**Judgment steps** [faisla -- decision that needs info you CAN'T give] = they run on information you CANNOT supply. Risk appetite. A hiring freeze. Whether this client will accept one more delay. These stay human -- NOT because judgment is sacred, but because the INPUTS are unavailable.

The dangerous part: **a model with missing inputs does NOT stop.** It fills the gap silently, with what that kind of decision usually looks like.

### RESEARCH: SAME TEST APPLIES

A model's knowledge stops at a date [model ko ek date tak ka hi pata hai]. Everything after that is outside the window.

| The question is about... | Where must the answer come from? | What to ask AI for |
|--------------------------|----------------------------------|-------------------|
| A stable concept (like "what is a delegation map?") | Model's own knowledge is fine | The explanation + reasoning |
| Anything CURRENT, priced, or dated [koi bhi cheez jo change ho sakti hai -- prices, dates, recent events] | An external source YOU can open | The answer AND THE LINK [taake tum khud check kar sako] |

> **For anything current: ask for a source you can open. Never accept a confident answer without a link.**

### THE CRITICAL NUANCE

Passing the window test makes a step **eligible** [mumkin]. It does NOT make it **owned by AI**.

Think of it as two gates:

```
GATE 1: Window test                GATE 2: The 3 criteria (Part 2)
"Can AI see everything?"           "Is it reversible? What do errors cost?
                                    Who answers for it?"

Pass gate 1 --> you can CONSIDER   Pass gate 2 --> NOW you can hand it over
                handing it over
```

Naveed's recommendation step failed at Gate 1 itself. It never even needed Gate 2.

### EXAM TRAP

The exam loves scenarios where AI gives a confident, well-structured answer that's WRONG because of information it couldn't access. The trap answer says "use a better model" or "write a better prompt." The correct answer identifies that the step needs information that cannot be put in front of the model -- it fails the window test.

Also watch for: research questions about CURRENT prices, dates, or regulations. The exam rewards "ask for a source link and verify" over "trust the confident answer."

### QUICK CHECK

> Your team asks AI to analyze last year's sales data and recommend which product lines to expand. The VP has privately decided to shut down two product lines but hasn't announced it yet. What's the problem?

The VP's decision is OUTSIDE the window. AI will recommend based on the data (which might show those two product lines are growing!), completely unaware of the shutdown decision. This step fails the window test. The recommendation part must stay human or the decision must be supplied as input.

---

## PART 1 RECAP: The Four Concepts Together

Here's how they connect, using one scenario:

```
SCENARIO: Your manager says "We need to speed up invoice processing."

CONCEPT 1 (Step, not session):
  Don't just "use AI for invoices." Break the work into STEPS,
  each with an OWNER, decided BEFORE you see any output.

CONCEPT 2 (Requirements):
  "Speed up invoice processing" is vague. Turn it into:
  - WHAT: processed invoices matched to POs [purchase orders --
    khareedari ke orders]
  - FOR WHOM: finance team
  - HOW OFTEN: daily
  - FROM WHAT DATA: email attachments + ERP system [company ka
    central software for finance/inventory]
  - FORMAT: entries ready for the accounting system
  Then ATTACK: "Which of these could two people read differently?"

CONCEPT 3 (Compute, never write):
  Any step that involves matching amounts, calculating totals,
  or flagging mismatches [jab do numbers match nahi karte] -->
  MUST use code execution, not prose. A wrong match on an
  invoice is real money.

CONCEPT 4 (Window test):
  - Can AI see the invoice? (Yes, you upload it) --> passes
  - Can AI see the PO to match against? (Yes, you upload it) --> passes
  - Can AI decide whether to approve a $50,000 exception that
    the CFO [Chief Financial Officer -- finance ka boss] verbally
    approved in a meeting? (No -- that decision is outside the
    window) --> FAILS. This step stays human.
```

### THE EXAM PATTERN FOR PART 1

Almost every Part 1 exam question follows this shape:

> Someone skips one of the four concepts. The output looks fine but has a hidden problem.

- Skipped C1: No defined steps --> works when the expert is there, falls apart when they're not
- Skipped C2: Vague requirements --> AI fills in the blanks with likely-looking defaults
- Skipped C3: Numbers in prose --> look right, might be wrong, nobody can verify
- Skipped C4: Missing input --> confident answer built on what such a decision usually looks like

**The exam rewards: catching the hidden problem BEFORE it causes damage, not fixing it after.**

---

*Part 2 (Concepts 5-6: The Three Criteria + Two Worked Maps) coming next. Say "next" when you're ready.*
