---
type: Document
title: "Workflow Design & Diagnosis: Scenario Guide Part 2"
description: "Scenario walkthroughs covering handoff design, human review gates, and when AI should pause and wait."
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
order: 83
---


> Before you read this: You should have read Part 1 (Concepts 1-4). The window test from Concept 4 is the FIRST gate. This part is the SECOND gate.

---

## Before Concept 5: The Three-Layer Decision

Every step in your workflow goes through three layers, in this ORDER:

```
LAYER 1               LAYER 2               LAYER 3
ELIGIBILITY            OWNERSHIP             IMPLEMENTATION
"May AI touch this?"   "Who owns the step?"  "What carries it?"
                       
Two gates:             Three criteria:        Options:
1. May this DATA       1. Reversibility       - Skill
   enter this tool?    2. Stakes              - Knowledge base
   (Governance --      3. Accountability      - Code execution
   covered in the                             - Standing instruction
   Governance course)                         - Named review gate
                       
2. Can everything      
   be SUPPLIED?        
   (Window test -- C4) 

If NO at either        NEVER let Layer 3
--> stop here.         influence Layer 2!
Don't even go to       (explained below)
Layer 2.
```

**Why the order matters -- a real mistake:**

Someone says: "This step involves calculating penalty amounts. Calculations should use code execution. Code execution is an AI feature. Therefore this step should be given to AI."

That person went from Layer 3 (what carries it) to Layer 2 (who owns it). They decided ownership based on implementation. "It must be computed" is TRUE and belongs in the Layer 3 column. But it is NOT a reason to hand the step to AI. That's how a high-stakes calculation [bada paisa wala hisaab] ends up with nobody checking it.

---

## CONCEPT 5: Three Criteria Decide Every Step

### THE SCENARIO

Saira is a team lead at a consulting firm [mashwara dene wali company -- clients ko advice dete hain]. Her team writes proposals [clients ko bheje jaane wale documents jismein likha hota hai "hum yeh kaam aise karenge, itne paise lagenge"]. She wants to use AI in the proposal workflow.

She breaks the workflow into steps:

```
Step 1: Extract requirements from the client's RFP
        [RFP = Request for Proposal -- client ka document jismein
        likha hota hai "humein yeh chahiye, yeh date tak chahiye"]
        
Step 2: Draft the technical approach section
        [proposal ka woh hissa jismein likho "hum kaam kaise karenge"]
        
Step 3: Calculate the project cost and timeline
        [kitna kharcha aayega aur kitna waqt lagega]
        
Step 4: Decide the pricing strategy
        [kitne paise maangne hain client se -- discount dena hai ya nahi]
        
Step 5: Send the proposal to the client
```

Now she has to decide: which steps go to AI, which stay human, and which are shared?

She applies **three criteria** [teen sawaal] to each step. And ONLY these three. Nothing else matters.

### CRITERION 1: REVERSIBILITY [kya wapas ho sakta hai?]

> **Can this step be undone if AI gets it wrong?**

```
CAN be undone:                    CANNOT be undone:
- A draft (rewrite it)            - A sent email (can't unsend)
- An internal analysis (redo it)  - A signed contract (legally binding)
- A formatted report (reformat)   - Money transferred (gone)
- A classification (reclassify)   - Published content (people saw it)
```

If a step CAN be undone, the cost of an error is just a **redo** [dobara karna] -- not the error itself. A bad draft costs you 20 minutes to rewrite. A sent proposal with the wrong price costs you the client.

**For Saira's workflow:**
- Step 1 (extract requirements): Can be undone -- just re-extract. **Reversible.**
- Step 2 (draft approach): Can be undone -- it's a draft. **Reversible.**
- Step 3 (calculate cost): Can be undone -- it's internal until sent. **Reversible.**
- Step 4 (pricing strategy): Can be undone -- it's a decision, not an action yet. **Reversible** (but see Stakes below).
- Step 5 (send proposal): **CANNOT be undone.** Once the client has it, it's out there. **Irreversible** [wapas nahi ho sakta].

### CRITERION 2: STAKES [galti ki qeemat -- kitna nuksaan hoga?]

> **What does a mistake at this step cost? Not on average. Not usually. In the BAD CASE [sab se buri situation mein].**

This is important: the exam always asks about the BAD case, not the average case.

```
LOW STAKES:                       HIGH STAKES:
- Wrong label on a file           - Wrong penalty figure in a contract
  (costs 1 minute to fix)           (costs whatever the penalty IS)
- Bad first draft                 - Wrong pricing in a proposal
  (costs a rewrite)                  (lose the client or lose money)
- Formatting error                - Wrong compliance report
  (costs a reformat)                 (regulatory fine [sarkari jurrmaana])
```

**For Saira's workflow:**
- Step 1 (extract requirements): A missed requirement costs rework later, but it's caught at Steps 2-3. **Low-medium stakes.**
- Step 2 (draft approach): A bad draft costs a rewrite. **Low stakes.**
- Step 3 (calculate cost): A wrong cost figure means wrong pricing. In the bad case, the firm commits to work below cost [company ko nuksaan hota hai]. **HIGH stakes.**
- Step 4 (pricing strategy): This considers competitors [doosri companies], market position [market mein company ki position], relationships. A wrong strategy could lose a million-dollar client. **HIGH stakes.**
- Step 5 (send): Once sent, whatever errors are in the proposal reach the client. **HIGH stakes** (because it locks in everything above).

### CRITERION 3: ACCOUNTABILITY [zimmedari kis ki hai?]

> **Who is answerable for this step's outcome? And is this step THE CALL [faisla] they answer for, or just an INPUT [entry/data] that someone else judges?**

This is the trickiest criterion. Let me break it down:

Every step has someone accountable. But that alone would keep EVERY step human (because someone is always responsible). The sharper question is:

```
IS THIS STEP...

  (A) ...THE DECISION itself?
      --> The buck stops here [yahan pe faisla hota hai]
      --> Nothing after it carries it further
      --> This step STAYS HUMAN
      
  (B) ...an INPUT that someone JUDGES before it acts?
      --> Someone reviews it at the NEXT step
      --> Accountability sits at the JUDGING step, not here
      --> This step CAN be handed over
```

**The key principle:** Accountability NEVER moves onto the machine. The machine cannot be asked [machine se sawaal nahi ho sakta -- agar galti ho toh machine jawab nahi de sakti].

**For Saira's workflow:**
- Step 1 (extract requirements): It's an INPUT -- someone reviews it before building on it. **Can be handed over.**
- Step 2 (draft approach): It's an INPUT -- Saira reviews it before it goes into the proposal. **Can be handed over.**
- Step 3 (calculate cost): It's an INPUT -- someone checks the numbers before pricing. **Can be handed over IF someone actually checks** (big "if" -- more on this in Part 3).
- Step 4 (pricing strategy): This IS the decision. The partner [senior boss] answers for the price they quoted. **Stays human.**
- Step 5 (send proposal): This IS the final act. Irreversible. **Stays human.**

### PUTTING IT ALL TOGETHER: Saira's Map

| Step | Owner | The criterion that DECIDED it | Carried by |
|------|-------|-------------------------------|------------|
| 1. Extract requirements from RFP | AI | Reversible, low stakes, checked at Step 2 | Skill |
| 2. Draft technical approach | Collaborative | High-quality draft matters but a human must judge technical accuracy | Skill + gate [review point] |
| 3. Calculate project cost | AI | Reversible AND checked at Step 4. Must be code execution. | Code execution |
| 4. Decide pricing strategy | Human | This IS the decision the partner answers for | Named partner |
| 5. Send proposal | Human | Irreversible -- once sent, it's out | Named sender |

### CRITICAL: These Are Three QUESTIONS, Not a Score

You are NOT adding up the criteria to get a score. You are NOT waiting for three "yes" answers.

**Usually ONE criterion decides the step** and the other two agree with it. **Name that one.** In Saira's map:
- Step 4 is decided by **accountability** (this IS the decision)
- Step 5 is decided by **reversibility** (can't undo a sent proposal)

Naming the criterion that carried the row makes your classification **checkable** [koi aur insaan bhi check kar sake] by someone who wasn't in the room.

**When the three disagree, the STRICTEST one wins:**

```
A step that:
  - CAN be undone (reversibility says: hand over)
  - Costs little (stakes says: hand over)
  - IS the decision someone answers for (accountability says: keep human)
  
  --> STAYS HUMAN (strictest criterion wins)
```

### WHAT IS NOT A CRITERION

**Past performance.** How well AI did on this step in your test run is NOT a criterion. "It's been accurate for 3 months" -- doesn't matter. You'll see exactly WHY in the next concept (the worked maps) and in Part 3 (three ways maps go wrong).

### EXAM TRAP

The exam loves this setup:

> "Someone argues this step must stay human because the manager is accountable for it."

This sounds right but it's INCOMPLETE. The question is: is this step THE CALL the manager answers for? Or is it an INPUT that the manager judges at the next step?

If the manager reviews the output before it goes anywhere, accountability sits at the REVIEW step, not this step. The step CAN potentially be handed to AI (because the manager's review is the gate).

If nothing comes after this step -- if this IS the final decision -- then yes, it stays human.

### QUICK CHECK

> Step A: AI drafts a customer refund decision. Step B: A manager reviews and approves or rejects the refund.
> 
> Someone says: "Step A must stay human because the manager is accountable for refunds." Are they right?

No. Step A is an INPUT that the manager JUDGES at Step B. Accountability sits at Step B (the approval), not Step A (the draft). Step A can be collaborative (AI drafts, manager judges). Step B stays human -- that IS the decision.

---

## CONCEPT 6: Two Workflows, Same Criteria, Different Answers

### WHY THIS CONCEPT EXISTS

The exam will show you workflows from DIFFERENT fields [mukhtalif kaam ke ilaake] and ask you to apply the criteria. The point of this concept: **the same three criteria produce the same PATTERN in completely unrelated work.** Once you see the pattern, you can map ANY workflow.

### SCENARIO 1: Contract Review

Imagine a law firm [qanoon ki company]. They review contracts [agreements/deals ke documents] before signing them. Here's how it works with AI:

**What you need to know about contract work (for the exam):**
- **Clause** [dafa] = one section of a contract. Like: "Payment is due within 30 days."
- **Playbook** [company ka rulebook] = the firm's own rules about what's acceptable in contracts. Like: "We never accept payment terms longer than 45 days."
- **Redline** [changes wala version] = a marked-up version showing "we want to change THIS word to THAT word." Like track changes in Word.
- **Penalty clause** [jurrmaane ki dafa] = a section that says "if you break this rule, you pay X amount."
- **Financial exposure** [kitna nuksaan ho sakta hai financially] = the maximum money you could lose.

| # | Step | Owner | Criterion that decided it | Carried by |
|---|------|-------|---------------------------|------------|
| 1 | Extract clauses from the contract | AI | Reversible, low stakes | Skill |
| 2 | Flag departures from company playbook [jo cheezein company ke rules se alag hain, unhe mark karo] | AI | Reversible, and errors show up at Step 3 (the redline) | Skill |
| 3 | Draft the redline and rationale [changes ka marked version + kyun change kiya, uski wajah] | Collaborative | High stakes, so a human judges each edit | Skill + gate |
| 4 | Compute financial exposure of penalty clause | AI | Reversible, and checked at the approval gate (Step 5) | Code execution |
| 5 | Approve or reject each change | Human | This step IS the decision somebody answers for | Named reviewer |
| 6 | Sign and send | Human | Irreversible and externally binding [bahar ki party ke saath legal commitment] | Named signer |

### THREE GOTCHAS FROM THIS MAP (the exam tests all three):

**GOTCHA 1: The penalty-exposure row (Step 4)**

People get this wrong. They think: "A penalty clause could be worth millions -- that's high stakes -- so it must stay human."

But look more carefully:
- The RESULT of the calculation can be undone (it's just a number on a page)
- That number lands in front of a HUMAN at the very next step (Step 5: approve or reject)
- The human at Step 5 checks the number before anything happens

What makes it safe is NOT that it's "just arithmetic." What makes it safe is that **someone stands after it** and checks.

> **Remove that gate (Step 5) and Step 4 STOPS being AI-appropriate, even though the arithmetic hasn't changed.**

The step didn't change. The thing that changed is whether anybody is standing AFTER it.

Also notice: Step 4 uses **code execution**, not prose. This is Layer 3 (implementation), not Layer 2 (ownership). "Must be computed" belongs under "Carried by," NOT under "Criterion."

**GOTCHA 2: The playbook-flagging row (Step 2)**

Flagging departures from policy [policy se jo cheezein alag hain, unhe mark karna] is AI-appropriate HERE because someone reads the flags at the very next step (Step 3, drafting the redline). A wrong flag shows up as a wrong redline, and the lawyer catches it.

BUT: move the same step into a DIFFERENT workflow where **nothing after it reads the flags** -- like checking expense reports against travel policy [safar ke kharche check karna travel rules ke against], where nobody reviews the flags -- and it becomes **collaborative** instead (needs a human reviewer).

> **The step didn't change. What changed is whether anybody is standing AFTER it.**

This is the same principle as Gotcha 1. The exam LOVES testing this.

**GOTCHA 3: "Must be computed" is NOT a criterion**

The two columns must stay separate:

| Column | What goes here |
|--------|---------------|
| **Criterion** (who owns it) | Reversibility, stakes, accountability |
| **Carried by** (what implements it) | Skill, code execution, knowledge base, standing instruction, named reviewer |

"Must be computed" belongs under "Carried by." It NEVER belongs under "Criterion." Mixing them is how a high-stakes calculation ends up with no one checking it.

### SCENARIO 2: Onboarding Documents

Now completely different work. An HR team [Human Resources -- company mein naukri, tankhwah, leave waghaira dekhne wala department] prepares documents for new employees [naye aane wale logon ke liye papers].

**What you need to know:**
- **New-hire** [naya banda jo company mein aaya] = the person being onboarded
- **HR system export** [HR system se nikali gayi data file] = a data file with the new hire's details
- **Offer letter** [naukri ka khat] = the official document offering someone the job with salary, role, etc.
- **Template** [saancha] = a pre-made format that gets filled in with specific details
- **Welcome note** [khush-aamdeed ka note] = a personal message from the manager to the new hire
- **Compensation** [tankhwah ka poora package -- salary + bonuses + benefits] = total pay
- **Approved req** [manzoora shuda naukri ki darkhwast] = the job opening that was officially approved, with its budget

| # | Step | Owner | Criterion that decided it | Carried by |
|---|------|-------|---------------------------|------------|
| 1 | Pull new-hire details from HR system export | AI | Reversible, and checked at Step 4 | Code execution |
| 2 | Draft offer letter from approved template | AI | Reversible draft, low stakes until it's sent | Skill |
| 3 | Personalise the welcome note | Collaborative | The manager's voice [manager ka apna andaaz] cannot be supplied -- it's outside the window | Named reviewer |
| 4 | Confirm compensation matches the approved req | Human | This step IS the check -- nothing follows it before sending | Named reviewer |
| 5 | Send the signed offer | Human | Irreversible and externally binding | Named signer |

### THE PATTERN: Same Shape, Different Fields

Now put both maps side by side and see what happened:

```
CONTRACT REVIEW               ONBOARDING DOCUMENTS
                              
1. Extract (AI)          <--> 1. Pull details (AI)
   Mechanical, reversible        Mechanical, reversible

2. Flag departures (AI)  <--> 2. Draft from template (AI)
   Reversible, caught later      Reversible draft

3. Draft redline (Collab) <--> 3. Personalise note (Collab)
   High stakes, human judges     Can't supply the voice

4. Compute exposure (AI) <--> [no equivalent]
   Reversible, checked next

5. Approve changes (Human)<--> 4. Confirm compensation (Human)
   THE decision                  THE check

6. Sign and send (Human) <--> 5. Send offer (Human)
   Irreversible                  Irreversible
```

**The pattern every time:**

```
MECHANICAL steps      --> AI
DRAFT steps           --> AI (collaborative if high stakes or needs "voice")
FIGURE-CHECKING steps --> Human (this IS the decision)
IRREVERSIBLE steps    --> Human (can't be undone)
```

Nobody decided this by taste [pasand ya na-pasand se nahi]. The criteria decided it, twice, in two completely different fields. **The exam will expect you to see this pattern in a workflow you've never seen before.**

### The Implementation Row (Layer 3)

For steps that made it through Layers 1 and 2, here's what carries them:

| What the step is | What carries it | Why |
|------------------|----------------|-----|
| A repeatable procedure with fixed steps [har dafa same tareeqa] | Skill | Runs the same way for everyone |
| Rules and reference the step always needs | Project knowledge [files saved in the Project] | Available every run without pasting |
| A calculation the output depends on | Code execution | Computed, not generated |
| A standing constraint on every output [har output pe laagu hone wali paabandi] | Standing instruction | Applies without anyone remembering |
| A step a person owns | Named review gate | A person, a moment, and a THING checked |

**That last row is critical.** A human step is NOT finished when you write "human" next to it. It needs:
1. A **named person** (not "someone" or "the team")
2. A **named moment** (when exactly do they review?)
3. A **named thing they are checking** (what specifically are they looking for?)

"A human looks at it" is NOT a gate. It's a wish. (Part 3 will show you what happens when this wish decays.)

### EXAM TRAP

**Trap 1:** A scenario where a step is "arithmetic" or "mechanical" and someone argues it should go to AI. The criterion is NOT what the step looks like. It's: can it be undone? what does error cost? who answers? Being mechanical is not a criterion.

**Trap 2:** A scenario where flagging/checking is AI-appropriate in one context but NOT in another. The exam wants you to see that the SAME STEP changes columns depending on whether someone reads its output at the next step.

**Trap 3:** A scenario where someone classifies a step using "we need code execution for this" as the reason. The exam wants you to say: "Must be computed" tells you WHAT carries it (Layer 3), not WHO owns it (Layer 2). These are separate decisions.

### QUICK CHECK 1

> A team flags expense reports against the travel policy. Nobody reviews the flags. A manager asks: "Can we classify this as AI-appropriate since flagging is mechanical?" What's your answer?

No. Flagging is AI-appropriate only when someone reads the flags at the next step. If nobody reviews the flags, the step is AT BEST collaborative (needs a named human reviewer). Without review, the mechanical flag IS the decision -- and it can't be AI-appropriate because nobody is standing after it.

### QUICK CHECK 2

> In the contract review map, someone proposes removing Step 5 (approve/reject) to "speed things up." What happens to Step 4 (compute penalty exposure)?

Step 4 was AI-appropriate BECAUSE its output landed in front of a human at Step 5. Remove Step 5 and Step 4 loses its safety net. The calculation is the same, but nobody checks it now. Step 4 must become either collaborative (with a new gate) or human-retained. The arithmetic didn't change. The structure around it did.

### QUICK CHECK 3

> Someone says: "Personalising the welcome note should be AI-appropriate because it's just writing and can be undone." What criterion are they missing?

They're looking at reversibility only. The window test (from C4) already told us: the manager's personal voice CANNOT BE SUPPLIED -- it's outside the window. Even if it passes reversibility, the step fails because the input is unavailable. It needs the manager's personal touch, which makes it collaborative (AI drafts, manager reviews and adds their voice).

---

## PART 2 RECAP: How C5 and C6 Fit Together

```
C5 gives you the TOOL:
  Three criteria -- reversibility, stakes, accountability
  Applied to each step individually
  The strictest one wins
  Past performance is NOT a criterion

C6 gives you the PRACTICE:
  Two complete worked maps (contract + onboarding)
  Same criteria --> same pattern in different fields
  Three gotchas the exam loves:
    1. "Reversible AND checked at next step" = safe
       Remove the next step = NOT safe anymore
    2. Same step changes columns based on
       whether anyone stands AFTER it
    3. "Must be computed" is implementation (Layer 3),
       NOT ownership (Layer 2)
```

### THE EXAM FORMULA

When you see a workflow step on the exam, run this in your head:

```
1. Can everything it needs be supplied?  (Window test from C4)
   NO --> Human. Stop.
   
2. Can it be undone?
   NO --> Almost certainly Human. Check stakes to confirm.
   
3. What does an error cost in the BAD case?
   If someone JUDGES the output at the next step --> stakes are managed
   If NOBODY checks after this --> the full bad-case cost applies
   
4. Is this step THE decision, or an input someone judges?
   THE decision --> Human
   An input --> CAN be AI or Collaborative
   
5. Name the ONE criterion that decided it.
   (Makes your answer checkable)
```

---

*Part 3 (Concepts 7-8: Three Ways Maps Go Wrong + Map Ownership) coming next. This is where the exam gets tricky -- the scenarios where everything LOOKS correct but isn't. Say "next" when ready.*
