# Workflow Design & Diagnosis -- SCENARIO GUIDE
# Part 6: PERSIST + COMMUNICATE (Concepts 14-15-16-17-18)

> The FINAL part. Five concepts that answer: how do I make a fix last? How do I find hidden waste? How do I prove the improvement? What happens when something goes wrong? And how do I explain all of this to people who didn't build it?

---

## CONCEPT 14: Rule, Reference, or Procedure -- The Three Homes

### THE SCENARIO: Two People, One Habit Apart

**Person 1: Amna (did it right)**

Amna is a marketer. Every time AI drafts a campaign brief [marketing plan ka document], it comes back missing the target segment [woh specific group of log jinhe yeh product bechna hai -- like "women aged 25-35 in Karachi"] and burying the call to action [CTA -- woh cheez jo tum reader se karwana chahte ho, jaise "Sign up now"].

For two weeks, she fixes this by hand. Then she stops and thinks:

> "I'm going to fix this TWICE every week for the rest of my career. Or I can fix it ONCE in the setup."

She writes two **standing instructions** [Project mein saved rules jo har dafa automatically apply hoti hain] into the campaign briefs Project:

```
1. "Every brief must state the target segment in the first line."
2. "The call to action must appear in the final paragraph, as a single clear sentence."
```

Result: every draft from that Project arrives correct. Not just for Amna -- for EVERYONE who opens that Project. New team member joins next month? They get correct drafts from day one.

---

**Person 2: Tariq (did it wrong)**

Tariq is an analyst on the revenue report. In his first month, he figures out that the monthly figures MUST exclude cancelled orders [woh orders jo cancel ho gaye -- customer ne order kiya phir mana kar diya]. If you include them, the revenue looks 8% higher than reality.

Every month, he types into the chat:
> "Remember: exclude cancelled orders from all revenue calculations."

It works. Every month, the numbers are correct. Tariq is happy.

Then Tariq takes two weeks off. His colleague Waqas covers for him.

Waqas opens the Project. There is NO standing instruction about cancelled orders. Waqas doesn't know about this rule. He runs the report. The numbers go out to management with cancelled orders INCLUDED. Revenue looks 8% higher than it is. The CFO [Chief Financial Officer -- finance ka sab se bada boss] makes decisions based on wrong numbers.

**What went wrong?**

The fix EXISTED. Tariq knew it. It worked every time. But it lived in Tariq's HEAD and in Tariq's CHAT HISTORY. It was somewhere only ONE person could find.

### THE CONCEPT: Promotion

**Promotion** [fix ko chat se nikaal ke configuration mein daalna] = moving a fix out of a conversation and into configuration, so it lasts.

The test is simple:

> **Will this correction be needed again, by me or by someone else?**

If YES --> it belongs in configuration. Not in your memory. Not in the chat. In the SETUP where everyone can find it.

### THE THREE HOMES

A promoted fix goes to ONE of three places. Which one depends on WHAT KIND of fix it is:

```
+-------------------+   +-------------------+   +-------------------+
|       RULE        |   |    REFERENCE      |   |    PROCEDURE      |
|                   |   |                   |   |                   |
| A limit that      |   | Material the work |   | A sequence of     |
| ALWAYS applies    |   | has to READ       |   | steps that must   |
| [paabandi jo      |   | [woh cheez jo     |   | run in ORDER      |
|  har dafa lagti   |   |  kaam ko padhni   |   | [steps jo ek      |
|  hai]             |   |  padti hai]       |   |  ke baad ek       |
|                   |   |                   |   |  chalne chahiye]  |
| HOME:             |   | HOME:             |   | HOME:             |
| Standing          |   | Knowledge base    |   | Skill             |
| instruction       |   | (files saved in   |   | (saved procedure  |
| (rule saved in    |   |  the Project)     |   |  at account level)|
|  the Project)     |   |                   |   |                   |
|                   |   |                   |   |                   |
| CHANGES:          |   | CHANGES:          |   | CHANGES:          |
| How AI BEHAVES    |   | What AI KNOWS     |   | HOW work is DONE  |
+-------------------+   +-------------------+   +-------------------+

EXAMPLES:

RULE:                    REFERENCE:               PROCEDURE:
"Exclude cancelled       Brand voice guide         "Step 1: pull data
 orders from all         [company ki awaaz          Step 2: compute totals
 revenue calculations"    ka document]              Step 3: format as table
                                                    Step 4: add disclaimer"
"Always state the        Current product list
 target segment first"   [abhi ki products         "Generate the weekly
                          ki list]                  report: first run the
"Formal tone only                                   query, then compute
 for external emails"    Pricing sheet              growth %, then compare
                         [qeematon ki list]         to target, then flag
                                                    any metric below 80%"
```

### WRONG HOME = FIX DOESN'T STICK

This is what the exam tests. Putting a fix in the WRONG home is why some improvements don't last:

```
MISTAKE 1: Procedure stuffed into a standing instruction
  A procedure has STEPS IN ORDER.
  A standing instruction is ONE rule.
  If you paste "Step 1: do X, Step 2: do Y, Step 3: do Z"
  as a one-line standing instruction, the ORDER gets lost.
  --> FIX: make it a Skill

MISTAKE 2: Reference material stuffed into a standing instruction  
  A 5-page brand voice guide pasted as a standing instruction
  BLOATS every prompt [har prompt mein ghus jaata hai], even
  the ones that don't need it.
  --> FIX: put it in the knowledge base (only used when needed)

MISTAKE 3: A rule left in someone's chat
  Tariq's "exclude cancelled orders" was a RULE.
  It belonged in a standing instruction.
  Left in the chat, it dies when Tariq goes on leave.
  --> FIX: standing instruction in the Project
```

### WHY AI MEMORY IS NOT THE ANSWER

AI can pick up patterns you repeat. But memory is NOT a substitute for configuration:

| | Memory | Configuration |
|---|--------|---------------|
| Scope [kaun use kar sakta hai] | Per-user ONLY (yours) | SHARED (everyone on the Project) |
| Reliability [kitna bharosa kar sakte ho] | Best-effort [shayad kare, shayad na kare] | Guaranteed |
| Inspectable [dekh sakte ho?] | No (can't point at it, read it, hand it over) | Yes (open it, read it, give it to someone) |
| **Verdict** | Use it | **RELY on configuration** |

Waqas couldn't use Tariq's memory. Configuration would have been there for him.

### EXAM TRAP

**Trap 1:** Someone keeps fixing the same problem by hand every time. The exam wants: promote it to configuration (standing instruction, knowledge base, or Skill).

**Trap 2:** Someone puts a procedure (steps in order) into a standing instruction (one rule). The exam wants you to recognize the mismatch: procedures belong in a Skill.

**Trap 3:** Someone says "the AI remembers my preferences now, so I don't need to configure it." The exam wants: memory is per-user and best-effort. Configuration is shared and reliable. Rely on configuration.

### QUICK CHECK

> An analyst discovers that all client reports must include a legal disclaimer [qanooni warning -- "yeh estimates hain, guarantee nahi hai"] at the end. She types this reminder every time. What should she do, and which home does it go to?

This is a RULE (a constraint that always applies to every report). It belongs in a standing instruction on the Project. Not in the knowledge base (it's not reference material). Not in a Skill (it's not a procedure with steps). Standing instruction = it applies automatically, nobody has to remember.

---

## CONCEPT 15: Find the Friction Before You Optimize

### THE SCENARIO

Hamza manages a team of 4 analysts. Each one produces a weekly client report using AI. Hamza notices:

- **Analyst 1 (Sara):** Every Monday, she opens the Project and pastes the same 3 paragraphs of background [context -- company history, client details, reporting standards] into the chat. Every. Single. Week.

- **Analyst 2 (Ali):** His reports come back with bullet points. He reformats to numbered lists. Every time. He's done this 50 times this year.

- **Analyst 3 (Hina):** and **Analyst 4 (Raza):** Both produce correct reports. But Hina's reports use tables, Raza's use paragraphs. Same data, different shapes. Hamza has to reconcile [milana -- align karna] them every week before sending to the client.

None of the four thinks they have a problem. Sara's paste takes 30 seconds. Ali's reformat takes 2 minutes. Hina and Raza each produce a "correct" report.

But Hamza is spending 20 extra minutes every week reconciling different formats. Over a year, that's about 17 hours of reconciliation nobody planned for.

### THE CONCEPT: Three Friction Signals

**Friction** [ragad/takleef -- chhoti si mushkil jo bar bar hoti hai lekin aap ne notice karna band kar diya hai] = a small repeated cost in a workflow that you've stopped noticing.

```
SIGNAL 1: REPETITION [dohraya jaana -- same cheez bar bar]
  LOOKS LIKE: You paste or type the same thing every run.
  Sara pastes the same 3 paragraphs every Monday.
  FIX: Saved context or standing instruction.

SIGNAL 2: CORRECTION [har dafa theek karna]
  LOOKS LIKE: You fix the same flaw in every output.
  Ali reformats bullets to numbered lists every time.
  FIX: A configuration change so it STOPS appearing.

SIGNAL 3: VARIANCE [farq -- mukhtalif log, mukhtalif nateeja]
  LOOKS LIKE: Different people running the same task
              get different results.
  Hina makes tables, Raza makes paragraphs. Same task.
  FIX: A shared Skill or knowledge base.
```

### WHY VARIANCE IS THE ONE TEAMS MISS

```
Sara KNOWS she pastes every week.       --> She FEELS the friction.
Ali KNOWS he reformats every time.      --> He FEELS the friction.

Hina thinks her report is correct.      --> She feels NOTHING.
Raza thinks his report is correct.      --> He feels NOTHING.

Hamza reconciles both every week.       --> HE feels the friction.
```

**Variance exists only BETWEEN people.** No individual sees it. It shows up at the REVIEWER [jo insaan sab ki reports collect karta hai] who has to reconcile different outputs. That's why teams miss it -- nobody's report is "wrong," they're just all different.

### HOW TO FIND FRICTION YOU CAN'T SEE

Run the workflow once with the job of **writing down every manual step** [har woh cheez likho jo haath se karni padti hai]. That list is your backlog [pending kaam ki list].

### TWO MOVES TO REMOVE FRICTION (in this order!)

```
MOVE 1: CONSOLIDATE [milao] -- reduce the NUMBER of steps
  3 prompts that each need the same background = 1 prompt.
  Sara's 3 paragraphs pasted 3 times = paste once at the start.
  DO THIS FIRST.

MOVE 2: PROMOTE [configuration mein daalo] -- reduce the COST 
  of remaining steps
  Move repeated patterns into configuration (C14).
  DO THIS SECOND.

WHY this order?
  Promoting a step you're about to MERGE AWAY
  is work you didn't need to do.
  First merge, THEN promote what's left.
```

### THE WORKED AUDIT

Hamza runs the audit on his team's workflow:

| Friction found | Signal type | C14 test (rule/ref/procedure?) | Home | Action |
|---------------|-------------|-------------------------------|------|--------|
| Sara pastes same background every week | Repetition | Reference (material the work has to read) | Knowledge base | Put background in shared Project |
| Ali reformats bullets to numbers every time | Correction | Rule (a constraint: "use numbered lists") | Standing instruction | Add formatting rule to Project |
| Hina tables vs Raza paragraphs | Variance | Procedure (steps that must run in order, same way) | Skill | Create a shared report-generation Skill |

**Result:**
- Before: ~45 minutes per analyst, inconsistent formats, Hamza reconciles
- After: ~25 minutes per analyst, consistent format, one fewer revision round

The sort turned annoyances [chhoti pareshaaniyaan] into specific changes.

### EXAM TRAP

**Trap 1:** A scenario where everyone on the team says "the workflow is fine." But the reviewer/manager is spending hours reconciling different formats. The exam wants you to spot VARIANCE as the friction signal.

**Trap 2:** Someone optimizes individual steps before checking if those steps should be MERGED. The exam wants: consolidate first, then promote.

### QUICK CHECK

> Three salespeople use AI to draft client proposals. All three produce good proposals, but the VP of Sales complains that "every proposal looks different." What's the friction signal, and what's the fix?

Variance. Different people, same task, different outputs. The fix: a shared Skill that standardizes the proposal format + a shared knowledge base with the company's proposal template. No individual salesperson sees a problem -- the friction exists only between them, visible at the VP level.

---

## CONCEPT 16: Measure the Thing You Actually Care About

### THE SCENARIO

Hamza claims his workflow audit saved 20 minutes per analyst per week. His boss asks: "How do you know?"

Hamza says: "It feels faster."

His boss says: "That's not a number I can put in a budget review [budget ka jaayza -- jab management dekhti hai ke kahan paisa ja raha hai]."

**The problem:** Hamza didn't measure BEFORE the change. Now he can't prove the improvement.

### THE BASELINE [pehle ki paimaish -- change se pehle ka measurement]

```
STEP 1: Run the workflow ONCE, completely unchanged.
STEP 2: Record three numbers:
        - How long it took
        - How many revision rounds [kitni baar fix karna pada]
        - How many manual steps [kitne kaam haath se kiye]
STEP 3: This takes ONE cycle. That's it.

+----------------------------------------------------------+
|  YOU CANNOT REBUILD A BASELINE AFTERWARDS.                |
|                                                           |
|  Your estimate of the old way will FLATTER YOU.           |
|  [Purane tareeqe ka andaaza lagaoge toh khud ko acha     |
|   dikhaoqe -- "it probably took 45 minutes" when it      |
|   was actually 35]                                        |
|                                                           |
|  This is not a guess. It's a documented cognitive bias    |
|  [dimagh ka jhukao]. People overestimate how bad the      |
|  old way was.                                             |
+----------------------------------------------------------+
```

### PICK THE RIGHT METRIC [sahi paimana chuno]

Time saved is the easiest metric and often NOT the right one:

| If the workflow is...                                        | Optimize for...                                     | Because...                                                           |
| ------------------------------------------------------------ | --------------------------------------------------- | -------------------------------------------------------------------- |
| An internal draft [andarooni draft]                          | **Time**                                            | Speed is the point, small errors are cheap                           |
| A customer-facing report [jo customer ko jaata hai]          | **Consistency** [yaksa -- sab reports ek jaisi]     | Varying formats erode trust [bharosa kam hota hai] faster than delay |
| A compliance or finance output [qanooni ya maaliyati report] | **Accuracy** [sahi hona]                            | One wrong figure costs more than an hour saved                       |
| Work done by several people                                  | **Variance** [farq -- logon ke beech inconsistency] | The cost lives BETWEEN people, not within a person                   |

> **Naming the metric up front tells you when to STOP.** Once the metric you care about is good enough, more tuning becomes its own friction. Don't optimize forever.

### THE PARALLEL RUN [purana aur naya tareeqa ek saath chalana]

Before switching fully to the new workflow, run BOTH the old and new together for 2-3 cycles [rounds]:

```
CYCLE 1:  Old workflow  ----+
          New workflow  ----+----> COMPARE
          
CYCLE 2:  Old workflow  ----+
          New workflow  ----+----> COMPARE
          
CYCLE 3:  Old workflow  ----+
          New workflow  ----+----> COMPARE
                                     |
                                     v
                              Is new BETTER on
                              your chosen metric?
                              
                              YES --> switch fully
                              NO  --> keep old (you still have it!)
```

**What a parallel run buys you:**

| Benefit                                                     | Why it matters                                                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Evidence** [saboot] that new is better on your metric     | "I think it's better" vs "here are the numbers"                          |
| A working **fallback** [wapsi ka raasta] if it's not better | You didn't burn the old workflow                                         |
| **Agreement** of the people whose work changed              | Turns "we're changing your job" into "we ran both, here's what happened" |

That last one matters most. People resist change they didn't see tested.

### BE ABLE TO ANSWER WHAT IT COSTS

A redesign [naya design] survives a budget review [budget ka jaayza] on **cost against saving** [kharcha vs bachat]:

```
COST   = what you pay the AI tool
       + human time still in it (the gates you kept)

SAVING = baseline measurement
       x how often it runs
       x how many people run it

THE SENTENCE A MANAGER CAN ACT ON:
"20 minutes saved per week, across 3 analysts,
 is roughly 50 hours per year."
```

Then name the risk that SURVIVES your gates [jo khatre baqi rehte hain, gates ke baad bhi]. Because a business case [proposal/justification] that HID a risk stops being believed. A redesign nobody costed [jiska kharcha calculate nahi kiya] gets removed by somebody who never saw the saving.

### EXAM TRAP

**Trap 1:** Someone claims an improvement but didn't measure before the change. The exam wants: a baseline cannot be reconstructed after. You must measure BEFORE changing.

**Trap 2:** Someone picks "time saved" as the metric for a compliance report. The exam wants: for compliance, the metric should be ACCURACY (one wrong figure costs more than time saved).

**Trap 3:** Someone switches to the new workflow immediately without a parallel run. The exam wants: run old and new together first to get evidence, a fallback, and team agreement.

### QUICK CHECK

> A team switches to an AI-assisted process and claims "we're saving 30% of our time." They didn't measure the old process. What's the problem?

They can't prove 30%. Without a baseline, "30%" is a feeling, not a measurement. Their estimate of the old process will flatter them (overestimate how slow it was). The baseline had to be measured BEFORE the change. It's too late now.

---

## CONCEPT 17: When a Bad Output Gets Out

### THE SCENARIO

Remember Omar from Part 5? His Project had stale configuration -- the knowledge base had last quarter's product list. The report mentioned a discontinued product.

Now imagine it's worse. The report wasn't just internal. It went to 15 clients. Three of them noticed the discontinued product and called, confused. One is a major account [bada client -- bahut paisa deta hai] who now questions the accuracy of EVERY report they've received.

Omar's team panics. The first hour is chaos:

- "Who sent this?" (Nobody's sure -- multiple people have access)
- "How many reports were wrong?" (Nobody knows -- when did the config go stale?)
- "Should we tell the clients?" (Debate -- some say wait, some say tell now)
- "What do we change?" (No clear answer -- everyone has opinions)

This chaos happened because the team had NO PLAN for this hour. They designed the workflow but never asked: "What happens when it goes wrong?"

### THE CONCEPT: Four Decisions, Made at DESIGN TIME

Everything in this course lowers the CHANCE of a bad output reaching somebody. Nothing REMOVES it. Eventually a workflow you designed sends something wrong. The design is judged by what happens in the NEXT HOUR, not by the map.

These four decisions must be made BEFORE the incident [waqia -- jab kuch ghalat ho jaata hai], at DESIGN TIME [jab workflow design kar rahe the], not during the panic:

```
+-----------------------------------+   +-----------------------------------+
| 1. HOW IT GETS STOPPED            |   | 2. WHAT IS ALREADY OUT            |
| [kaise roka jaayega]              |   | [kya pehle se bahar ja chuka hai] |
|                                   |   |                                   |
| - What is the fastest way to      |   | - NOT "did this one output go     |
|   HALT this workflow?             |   |   wrong"                          |
|                                   |   |                                   |
| - WHO can do it?                  |   | - HOW MANY outputs did this       |
|   (if "we'd have to ask the      |   |   affect, and where did they go?  |
|   person who set it up" -->       |   |                                   |
|   FIX THAT FIRST, because it     |   | - A stale config doesn't produce  |
|   makes every other step wait)    |   |   ONE bad result. It produces     |
|                                   |   |   EVERY result since it went      |
| - Do they need PERMISSION?        |   |   stale. Nobody notices which     |
|   (if yes, that's a delay)        |   |   DAY that was.                   |
+-----------------------------------+   +-----------------------------------+

+-----------------------------------+   +-----------------------------------+
| 3. WHO IS TOLD, AND BY WHEN       |   | 4. WHAT CHANGES IN THE MAP        |
| [kise bataya jaayega, kab tak]    |   | [map mein kya badlega]            |
|                                   |   |                                   |
| - The customer                    |   | - Which of the 4 causes was it?   |
| - The internal owner              |   |   (C11: under-spec, context       |
| - The risk/compliance team        |   |    overload, wrong feature,       |
|   [agar company mein hai]         |   |    stale config)                  |
|                                   |   |                                   |
| - Decide this BEFORE it happens   |   | - Was a step classified wrongly?  |
|   because in the moment, the      |   | - Or was it classified correctly  |
|   pull to DELAY is very strong    |   |   but the gate not staffed?       |
|                                   |   |                                   |
| - A LATE disclosure [deri se      |   | - Make the change to the map,     |
|   batana] costs FAR MORE than     |   |   WITH A DATE, so the fix         |
|   an early one                    |   |   outlasts the week everyone       |
|                                   |   |   was paying attention             |
+-----------------------------------+   +-----------------------------------+
```

### THE KEY INSIGHT ABOUT SCOPING (Decision 2)

```
When Omar's config went stale:

WRONG QUESTION: "Was this week's report wrong?"
RIGHT QUESTION: "How many reports since the config went stale
                 were affected, and who received them?"

A stale config ran for 6 weeks.
That's 6 weeks x 15 clients = potentially 90 wrong reports.
Not just this week's report.

SCOPING is the hard decision because it reveals
how big the problem actually is.
```

### DECISIONS 1 AND 4 ARE YOURS

```
Decision 1 (how to stop)   --> decided at DESIGN time
Decision 4 (what changes)  --> decided at DESIGN time

Decision 2 (scope)         --> done during the incident
Decision 3 (who is told)   --> decided at design time,
                               EXECUTED during incident
```

> A team that can say "here is what we do when the workflow is wrong" is a team that gets PERMISSION to run the workflow.

### EXAM TRAP

**Trap 1:** A scenario where a bad output is discovered and the team debates whether to tell the client. The exam answer: decide this BEFORE incidents happen. Late disclosure costs far more than early.

**Trap 2:** A scenario where a stale config has been running for weeks. The easy question: "fix this week's report." The exam question: "how many outputs were affected?" Scoping the damage is the hard step.

**Trap 3:** Someone fixes the immediate error but doesn't change the map. The exam wants: make the change to the map WITH A DATE. Otherwise the fix doesn't survive past the week everyone was paying attention.

### QUICK CHECK

> A company's AI workflow sent wrong pricing to 30 customers over 2 weeks because a price list in the knowledge base was outdated. What is the FIRST thing that should happen?

STOP the workflow (Decision 1). Then scope: how many customers received wrong pricing, and which prices were affected (Decision 2). Then tell the customers and the internal owner within the agreed timeframe (Decision 3). Then change the map -- add a configuration review schedule for the price list, and document this change with a date (Decision 4).

---

## CONCEPT 18: Say What It Does, Then Name the Gate

### THE SCENARIO

Nadia's team built an AI-assisted contract review workflow (the one from C6). It's working well. Now she needs to explain it to three different people:

1. **The senior lawyer** [bada waqeel] who wants to know: how exactly does it work, and what can go wrong?
2. **The managing partner** [firm ka boss] who wants to know: is it making us money, and is it safe?
3. **The client's risk team** [client ke risk dekhne wale log] who wants to know: is our data safe, and who's in control?

Nadia's first instinct is to impress them. She almost writes: "We've fully automated our contract review process."

**This would be a disaster.** Here's why.

### THREE PHRASES THAT OVERSTATE [zyada bada bata dena]

These three phrases are NEVER safe. The exam will test whether you spot them:

```
PHRASE 1: "Fully automated"
  PROBLEM: Almost never true. The first visible error
           exposes the claim publicly.
           [Jab pehli baar ghalti dikhay, sab ko pata 
            chalega ke "fully automated" jhoot tha]

PHRASE 2: "AI handles X"
  PROBLEM: Drops the human gate OUT of the sentence.
           Whoever hears it now believes there IS no gate.
           [Sunne wala sochega ke insaan check nahi karta]

PHRASE 3: "It's basically as good as a person at Y"
  PROBLEM: Sets a standard the tool will eventually MISS,
           in front of someone who REMEMBERS you said it.
           [Ek din ghalti hogi, aur woh insaan yaad rakhega
            ke tumne kaha tha "as good as a person"]
```

### THE FORMULA

```
Step 1: Say what the tool DOES
Step 2: Name the human CHECKPOINT [insaan kahan check karta hai]
Step 3: (For trust-critical audiences) Say what it REFUSES
        [kya cheezein yeh tool NAHI karta -- deliberately]
        --> This proves the boundary was DESIGNED, not
            discovered by an accident
```

### SAME WORKFLOW, THREE AUDIENCES

**To the senior lawyer** (wants the mechanism + failure modes [kaise kaam karta hai + kahan ghalti ho sakti hai]):

> "It pulls the clauses out, marks anything that departs from our playbook, and writes the first redline. Approving a change is still yours. The one to watch is an obligation implied rather than stated [jo cheez seedha nahi likhi balke ishaara ki gayi hai], which it can miss, so treat the flags as a prompt for your read rather than a substitute for it."

**What this does:**
- Says what the tool does (pulls clauses, marks departures, writes redline)
- Names the gate (approving is still yours)
- Names what it can MISS (implied obligations) -- honest about limits

---

**To the managing partner** (wants the outcome + oversight [nateeja + nigrani]):

> "Turnaround on a standard contract has gone from two days to about half a day, with the same approval standard. A lawyer still signs off every change before it leaves the building."

**What this does:**
- Gives the result in units the boss cares about (turnaround time, not product names)
- Names the gate (lawyer signs off before it leaves)
- No unnecessary technical detail

---

**To the client's risk team** (wants the control [kaun control mein hai]):

> "Drafting is AI-assisted. A qualified lawyer reviews and approves every term, and nothing is sent without that sign-off."

**What this does:**
- One sentence about the control
- Names the gate (qualified lawyer reviews + approves)
- Nothing extra

---

### WHAT ALL THREE HAVE IN COMMON

```
Same facts. Three levels of detail.

NONE of the three:
- Says "fully automated"
- Says "AI handles"
- Says "as good as a person"
- Drops the human gate

ALL three:
- Name what the tool does
- Name the human checkpoint
- Are ACCURATE (not inflated, not deflated)
```

### THE COUNTERINTUITIVE TRUTH [jo baat seedhi samajh mein nahi aati]

> **Stakeholders [zimmedar log -- bosses, clients, regulators] trust an AI workflow MORE, not less, when the human checkpoints are explicit [saaf taur pe batayi gayi hon].**

Your instinct is to play DOWN the human involvement, because it sounds like the tool is doing less. The effect is OPPOSITE. An unexplained gap between "the AI does it" and "what happens when AI is wrong" is where a risk team STOPS listening.

### THE HONEST SENTENCE

Notice the senior lawyer's version includes: "The one to watch is an obligation implied rather than stated, which it can miss."

You could NOT have written this sentence in Part 1, when you designed the workflow. You didn't yet know your own failure modes [kahan ghalti ho sakti hai]. An accurate description of a workflow comes AFTER you have diagnosed it, not before.

### EXAM TRAP

**Trap 1:** A scenario with a stakeholder description that uses "fully automated," "handles," or "as good as a person." The exam wants you to flag these as overstating.

**Trap 2:** A scenario where the executive's description drops the human gate. The exam wants: every audience's description must include the checkpoint, ESPECIALLY the executive version (that's where it most often disappears).

**Trap 3:** Someone describes the workflow without mentioning what it REFUSES or where it can fail. For trust-critical audiences (risk teams, compliance), naming what the tool declines is what proves the boundary was designed in advance.

### QUICK CHECK 1

> A team lead tells a client: "Our AI handles the full analysis of your data." What's wrong with this, and how would you fix it?

"Handles" drops the human gate. The client now believes no human checks the analysis. Fix: "Our AI assists with data analysis. An analyst reviews every output before it reaches you, and flags anything that falls outside our validated parameters [tasdeeq shuda hadood]."

### QUICK CHECK 2

> Which audience is most likely to receive a description that drops the human gate: the technical team, the executive, or the risk function?

The executive. The executive version prioritizes the outcome (speed, cost savings) and the gate gets cut for brevity. That's where you must be most careful to keep it.

---

## PART 6 RECAP

```
CONCEPT 14: Rule, Reference, or Procedure
  - PROMOTION = moving fix from chat to configuration
  - Rule --> standing instruction (changes behavior)
  - Reference --> knowledge base (changes what's known)
  - Procedure --> Skill (changes how work is done)
  - Wrong home = fix doesn't stick
  - Memory is per-user and best-effort. Rely on configuration.

CONCEPT 15: Find the Friction
  - Three signals: repetition, correction, VARIANCE
  - Variance is the one teams miss (lives between people)
  - Shows up at the REVIEWER, not the individual
  - Two moves: CONSOLIDATE first (merge steps), PROMOTE second

CONCEPT 16: Measure
  - Baseline BEFORE changing (can't reconstruct after)
  - Pick the RIGHT metric (time / consistency / accuracy / variance)
  - Parallel run: old + new together for 2-3 cycles
  - Be able to answer what it costs (the sentence a manager acts on)

CONCEPT 17: When Bad Output Gets Out
  - Four decisions, made at DESIGN TIME:
    1. How it gets stopped (and who can do it)
    2. What's already out (scope the damage -- how MANY outputs?)
    3. Who is told, by when (late disclosure costs more)
    4. What changes in the map (with a date)
  - Stale config = every output since it went stale, not just this one

CONCEPT 18: Say What It Does + Name the Gate
  - Never say: "fully automated" / "handles" / "as good as a person"
  - Formula: what it does + human checkpoint + what it refuses
  - Three audiences, three levels of detail, ALL keep the gate
  - Trust goes UP when checkpoints are explicit
```

---

# FULL COURSE RECAP: All 18 Concepts in One Flow

```
PART 1: DESIGN (before you touch AI)
  C1:  The unit is the STEP, not the session
  C2:  Extract requirements, then ATTACK them
  C3:  If it matters, COMPUTE it. Never write it.
  C4:  The WINDOW TEST -- can AI see everything it needs?

PART 2: MAP (who owns each step)
  C5:  Three criteria: reversibility, stakes, accountability
  C6:  Same criteria --> same pattern in different fields

PART 3: ERRORS (what goes wrong)
  C7:  Halo delegation / unstaffed gate / mapping the tool
  C8:  Map owner + scheduled read (only cure for silent decay)

PART 4: BUILD (make it work)
  C9:  Build loop: ideate, prototype, feedback, refine
  C10: Escalation signal: when others depend on it --> engineering

PART 5: DIAGNOSE (fix what broke)
  C11: Four causes told apart by TIMING
  C12: Diagnostic sequence: cheapest fix FIRST
  C13: Reaction --> instruction: name the LEVER

PART 6: PERSIST + COMMUNICATE (make it last, explain it)
  C14: Rule / reference / procedure --> three HOMES
  C15: Find friction: repetition, correction, VARIANCE
  C16: Measure BEFORE, pick the right metric, parallel run
  C17: Four decisions at design time for when it goes wrong
  C18: Say what it does, name the gate, never overstate
```

### THE ONE SENTENCE

> **The output is not the verdict. Judge the step by what it costs and who answers for it, and judge a failure by when it started.**

---

*This completes all 6 parts of the Scenario Guide. You now have every concept from the Workflow Design & Diagnosis course covered through real scenarios with vocabulary explained.*
