---
type: Document
title: "Workflow Design & Diagnosis: Complete Mind Map"
description: "Exam-focused study guide covering workflow design patterns, diagnosing failures, handoff points, and human-in-the-loop principles."
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
order: 80
---

> **Goal:** Master every concept from the Workflow Design & Diagnosis crash course.
> Covers **Domain 4** (Workflow Integration & Solution Design, 16%) and **Domain 7** (Troubleshooting & Optimization, 10%) = **26% of the CCAO-F exam.**

---

## THE ENTIRE COURSE IN ONE SENTENCE

> **The output is not the verdict. Judge the step by what it costs and who answers for it, and judge a failure by when it started.**

Six stages hold everything:

```
DESIGN -----> MAP -----> BUILD -----> DIAGNOSE -----> PERSIST -----> COMMUNICATE
What are      Who owns   Does this    When did the    Is this fix    What does it
the actual    each       still fit    symptom first   a rule, a      do, and where
requirements? step?     in a loop?   appear?         reference, or  is the human
                                                     a procedure?   gate?
```

---

## THE BIG PICTURE MAP

```
+=====================================================================+
|                    WORKFLOW DESIGN & DIAGNOSIS                        |
|                                                                      |
|  PART 1: DESIGN          PART 2: MAP           PART 3: BUILD        |
|  +------------------+   +------------------+   +------------------+  |
|  | C1: Step > Session|   | C5: 3 Criteria   |   | C9: Build Loop   |  |
|  | C2: Requirements  |   | C6: Two Maps     |   | C10: Escalation  |  |
|  | C3: Compute, not  |   | C7: 3 Errors     |   +------------------+  |
|  |     write         |   | C8: Map Owner    |                        |
|  | C4: Window Test   |   +------------------+                        |
|  +------------------+                                                |
|                                                                      |
|  PART 4: DIAGNOSE        PART 5: PERSIST       PART 6: OPERATE      |
|  +------------------+   +------------------+   +------------------+  |
|  | C11: 4 Causes    |   | C13: Reaction -->|   | C17: Bad Output  |  |
|  | C12: Diagnostic   |   |      Instruction |   |      Gets Out    |  |
|  |     Sequence      |   | C14: Rule/Ref/   |   | C18: Say What It |  |
|  +------------------+   |      Procedure   |   |      Does + Gate |  |
|                          | C15: Find Friction|   +------------------+  |
|                          | C16: Measure      |                        |
|                          +------------------+                        |
+=====================================================================+
```

---

## EXAM DOMAIN MAPPING

| Concept                          | Domain   | Objective                           | Exam Weight |
| -------------------------------- | -------- | ----------------------------------- | ----------- |
| C1 (Step > Session)              | D4.4     | Workflow Integration                | 16%         |
| C2 (Requirements)                | D4.1     |                                     |             |
| C3 (Compute not write)           | D4.2     |                                     |             |
| C4 (Window Test)                 | D4.2     |                                     |             |
| C5-C7 (Criteria + Maps + Errors) | D4.4     |                                     |             |
| C8 (Map Ownership)               | Additive | Not directly tested but supports D4 |             |
| C9 (Build Loop)                  | D4.3     |                                     |             |
| C10 (Escalation)                 | D4.3     |                                     |             |
| C11 (Four Causes)                | D7.1     | Troubleshooting                     | 10%         |
| C12 (Diagnostic Sequence)        | D7.1     |                                     |             |
| C13 (Reaction to Instruction)    | D7.2     |                                     |             |
| C14 (Rule/Reference/Procedure)   | D7.2     |                                     |             |
| C15 (Find Friction)              | D7.3     |                                     |             |
| C16 (Measure)                    | D7.3     |                                     |             |
| C17 (Incident Path)              | Additive |                                     |             |
| C18 (Value + Limits)             | D4.5     |                                     |             |

---

# PART 1: DESIGN (Concepts 1-4)

## CONCEPT 1: The Unit Is the STEP, Not the Session

```
"I use AI"                        "Our workflow uses AI"
+---------------------------+     +---------------------------+
| Personal habit            |     | Repeatable process        |
| Lives in your head        |     | Named steps, fixed owners |
| Varies by mood            |     | Same every time           |
| Disappears on your leave  |     | Works whoever's at desk   |
| You judge it AFTER        |     | You decide BEFORE         |
+---------------------------+     +---------------------------+
       Only this one                    Only this one
       is comfortable                   grows in value
                                        AND can be wrong
                                        in a way that
                                        KEEPS being wrong
```

**A step** = one named piece of a workflow, with ONE owner.

**Key distinction:**

- **Session** = you judge it afterwards ("did I like the result?")
- **Step** = you decide about it in advance, on grounds that don't change when output looks good

> **Exam trap:** "The AI produced great results in testing" is NOT a reason to hand it a step. You decide about steps on structural grounds (reversibility, stakes, accountability), not on how good the output looked.

---

## CONCEPT 2: Extract Requirements, Then Attack Them

### The Task Definition (5 settled answers)

```
A vague request:  "We need better reporting"
                         |
                         v
               THE TASK DEFINITION
        +--------------------------------+
        | 1. WHAT is produced?           |
        | 2. FOR WHOM?                   |
        | 3. HOW OFTEN does it run?      |
        | 4. FROM WHAT DATA?             |
        | 5. IN WHAT FORMAT?             |
        +--------------------------------+
                         |
                         v
Each answer = something you can CHECK
Each one still MISSING = a question you OWE somebody
                         (NOT a blank for the model to fill)
```

### The Two-Pass Method

```
PASS 1: EXTRACT                    PASS 2: ATTACK
"Extract every distinct            "Which of these are ambiguous?
 requirement. For each:             Which could two people read
 - short label                      differently? Which implies a
 - exact source section              requirement stated only
 - ambiguous enough to               indirectly?"
   need clarification?"
                 |                              |
                 v                              v
         What was WRITTEN              What was MEANT
         (cheap to find)               (expensive to miss)
```

**Why the second pass matters more than the first:**
An unclear requirement caught HERE costs one clarifying question.
Caught AFTER the work is built, it costs the work.

### The Ambiguity Test

> "The report should be delivered promptly after month end"

Looks like a requirement. It's NOT one. Two days and two weeks are both "prompt" to somebody.

**The test:** Can you write a check for it? If you can't say what evidence would prove it was met, it's not decided yet.

### Where Requirements Work Goes (Preview of C14)

| What                   | Home                                  | Why                                      |
| ---------------------- | ------------------------------------- | ---------------------------------------- |
| Past winning proposals | Knowledge base (on the Project)       | Reference material                       |
| Extraction format      | Standing instruction (on the Project) | Rule that always applies                 |
| Formatting procedure   | Skill (at account level)              | Same steps every time, for every Project |

---

## CONCEPT 3: Compute, Never Write

```
SYNTHESIS                          CALCULATION
(gathering + shaping options)      (numbers that matter)

AI does this WELL                  AI CAN do this
Holding many factors at once       BUT: you can't tell from the
without losing the thread          page whether it DID

                                   A written figure and a
                                   calculated one LOOK THE SAME
```

> **The rule: If a result matters, COMPUTE it. Never WRITE it.**

**Code execution** = the assistant writes and runs actual code, then reports what it computed.

```
BAD:  "Recommend the headcount needed next quarter"
       --> AI WRITES a number into a sentence (you can't verify it)

GOOD: "Using code execution on the attached ticket data,
       CALCULATE quarterly volume growth and average tickets
       resolved per analyst. THEN recommend headcount and
       SHOW THE ASSUMPTIONS."
       --> Separates computation from recommendation
       --> Assumptions are visible = somebody can disagree
          with the recommendation WITHOUT redoing the arithmetic
```

**Diagnostic habit:** When numbers come back slightly wrong, the cause is usually NOT the prompt. It's that a calculation was asked for in prose.

---

## CONCEPT 4: The Window Test

### Two Types of Planning Steps

```
SYNTHESIS STEP                     JUDGMENT STEP
Runs on information you            Runs on information you
CAN supply                         CANNOT supply (or wouldn't)

--> Hands over well                --> Stays human

Examples:                          Examples:
- Trend analysis                   - Risk appetite
- Option generation                - A hiring freeze
- Data patterns                    - Whether this client will
                                     accept one more delay
```

### The Window Test

```
+--------------------------------------------------+
|              THE CONTEXT WINDOW                    |
|                                                    |
|  [Your prompt] [Files you supply] [Conversation]  |
|                                                    |
|  Can I put EVERYTHING this step needs in here?     |
|                                                    |
|   YES --> step is ELIGIBLE (not yet owned!)        |
|   NO  --> step is MINE                             |
+--------------------------------------------------+
     |
     |  Things that DON'T fit:
     |  - Decisions made in meetings, not datasets
     |  - Internal announcements not in documents
     |  - Risk appetite
     |  - Relationship context ("a human touch")
     |  - Anything after the model's knowledge cutoff
     v
 Passing the window test makes a step ELIGIBLE.
 It still must survive the 3 criteria (Part 2).
```

### The Hiring-Freeze Failure

An operations lead asked for a whole capacity plan. Trend analysis was fine. Recommendation: hire 3 analysts. Problem: the company was under a hiring freeze announced internally two weeks earlier.

- The model didn't stop and say "I don't know about a hiring freeze."
- It filled the gap with what such a decision USUALLY looks like, at the SAME confidence as the part it really computed.

### Research: Same Test Applies

| Question about...                  | Source                          | What to ask for             |
| ---------------------------------- | ------------------------------- | --------------------------- |
| A stable concept or method         | Model's own knowledge           | The explanation + reasoning |
| Anything current, priced, or dated | An external source YOU can open | The answer AND THE LINK     |

> **For anything current, ask for a source you can open. Never a confident answer.**

---

# PART 2: THE DELEGATION MAP (Concepts 5-8)

## The Three-Layer Decision (Before C5)

```
LAYER 1: ELIGIBILITY  ------>  LAYER 2: OWNERSHIP  ------>  LAYER 3: IMPLEMENTATION
"May AI touch this?"            "Who owns the step?"         "What carries it?"

Two gates:                      Three criteria:               Decided LAST:
1. May this data enter          1. Reversibility              - Skill
   this tool?                   2. Stakes                     - Project knowledge
2. Can everything be            3. Accountability             - Code execution
   supplied? (Window test)                                    - Standing instruction
                                                              - Named review gate
A NO at either gate
ends the question.              NEVER let Layer 3
                                influence Layer 2!
                                "Must be computed" belongs
                                in Implementation, NOT
                                in Ownership.
```

---

## CONCEPT 5: Three Criteria Decide Every Step

Every step gets classified as one of:

```
+------------------+  +------------------+  +------------------+
|  AI-APPROPRIATE  |  |  COLLABORATIVE   |  |  HUMAN-RETAINED  |
|                  |  |                  |  |                  |
| AI may own it    |  | AI produces      |  | A person owns    |
|                  |  | Named person     |  | it outright      |
| Can be undone +  |  | JUDGES           |  |                  |
| somebody judges  |  |                  |  |                  |
+------------------+  +------------------+  +------------------+
```

### The Three Criteria

```
+-------------------------------------------------------------------+
|                                                                     |
|  1. REVERSIBILITY    Can it be undone if AI gets it wrong?         |
|     - Draft can be rewritten          --> tolerates delegation      |
|     - Sent email can't be unsent      --> does NOT                  |
|     - Cost of error = a REDO, not the error itself                  |
|                                                                     |
|  2. STAKES           What does a mistake cost? (BAD CASE, not avg) |
|     - Misfiled label = 1 minute                                    |
|     - Wrong penalty figure = whatever the penalty IS                |
|                                                                     |
|  3. ACCOUNTABILITY   Who is answerable for this step's outcome?    |
|     - Is this step THE CALL they answer for?                        |
|       --> Human (the decision itself)                               |
|     - Or is it an INPUT someone judges BEFORE it acts?              |
|       --> Can be handed over (accountability sits at the judging)   |
|     - Accountability NEVER moves onto the machine                   |
|       (the machine cannot be asked)                                 |
|                                                                     |
+-------------------------------------------------------------------+
```

### NOT Three Scores to Add Up

- Usually ONE criterion decides the step and the other two agree
- Name WHICH ONE carried the row (makes it checkable)
- Where they disagree: **the strictest one wins**
- A step that can be undone + costs little + IS the decision someone answers for --> stays human

> **What is NOT a criterion:** How well AI performed on this step in your test run. Past performance is NOT a criterion.

---

## CONCEPT 6: Two Workflows, Same Pattern

### Contract Review Map

| Step                          | Owner         | Criterion                             | Carried by     |
| ----------------------------- | ------------- | ------------------------------------- | -------------- |
| Extract clauses               | AI            | Reversible, low stakes                | Skill          |
| Flag departures from playbook | AI            | Reversible, errors surface at redline | Skill          |
| Draft redline + rationale     | Collaborative | High stakes, human judges each edit   | Skill + gate   |
| Compute penalty exposure      | AI            | Reversible, checked at approval gate  | Code execution |
| Approve or reject each change | Human         | This step IS the decision             | Named reviewer |
| Sign and send                 | Human         | Irreversible, externally binding      | Named signer   |

### Onboarding Documents Map

| Step                                 | Owner         | Criterion                               | Carried by     |
| ------------------------------------ | ------------- | --------------------------------------- | -------------- |
| Pull new-hire details from HR export | AI            | Reversible, checked at confirmation     | Code execution |
| Draft offer letter from template     | AI            | Reversible draft, low stakes until sent | Skill          |
| Personalise welcome note             | Collaborative | Manager's voice can't be supplied       | Named reviewer |
| Confirm compensation matches req     | Human         | This step is the check, nothing follows | Named reviewer |
| Send signed offer                    | Human         | Irreversible, externally binding        | Named signer   |

### The Pattern

```
Both workflows, despite being completely unrelated:

MECHANICAL steps  ---------> AI
DRAFT steps       ---------> AI (collaborative if high stakes)
FIGURE-CHECKING   ---------> Human
IRREVERSIBLE step ---------> Human

Same criteria --> same pattern --> in two different fields
```

### Two Critical Gotchas from C6

**1. The penalty-exposure row:** "Being arithmetic doesn't make a step low-stakes." That figure feeds the approval decision. What makes it safe: the result CAN BE UNDONE and lands in front of a HUMAN at the very next row. Remove that gate and the step STOPS being AI-appropriate, even though the arithmetic hasn't changed.

**2. The playbook-flagging row:** Flagging departures is AI-appropriate HERE because someone reads the flags at the next step. Move it to a workflow where NOTHING after it reads the flags --> it becomes COLLABORATIVE instead.

> The step didn't change. What changed is whether anybody is standing AFTER it.

---

## CONCEPT 7: Three Ways a Map Goes Wrong

All three look reasonable at the moment they happen. All three are built from TRUE statements about the WRONG step.

```
ERROR 1: HALO DELEGATION
+--------+    "This went well"    +--------+
| Step A | -------- X ---------> | Step B |
| (draft)| tick carried forward  | (decide)|
+--------+                       +--------+
Drafting competence is evidence about the DRAFT.
It is NOT evidence about the DECISION.

ERROR 2: UNSTAFFED GATE
+--------+    "Reviews become     +--------+
| AI     | --> glances, then  --> |   ?    |
| drafts |     clicks             | nobody |
+--------+                       +--------+
Nothing was decided. Nobody changed the map.
But the step is now AUTOMATED.
The map won't tell you (it records what you DESIGNED,
not what is RUNNING).

ERROR 3: MAPPING THE TOOL INSTEAD OF THE WORK
+--------+         +--------+
| Cool   | ------> | Step   |
| Skill  |         | shaped |
|        |         | like   |
|        |         | Skill  |
+--------+         +--------+
Team maps around features they LIKE.
The workflow uses the tool well.
It's just not the WORK.
```

### The Customer-Complaint Map (Spot the 3 Errors)

| Step                            | Owner         | Stated Reason                                |
| ------------------------------- | ------------- | -------------------------------------------- |
| Pull complaint + ticket history | AI            | Mechanical retrieval                         |
| Summarise into issue template   | AI            | "Our summarising Skill is very good at this" |
| Classify severity (L/M/H)       | AI            | "Summaries have been accurate for 3 months"  |
| Draft customer response         | Collaborative | AI drafts, duty agent reviews                |
| Send response                   | AI            | "Low severity only, drafts have been strong" |
| Log outcome in CRM              | AI            | Mechanical write                             |

**The diagnosis:**

- **Row 2 = mapping the tool.** Reason is that the Skill is good, not that the step needs doing this way.
- **Row 3 = halo delegation.** Reason cites SUMMARY accuracy. Classification is a DIFFERENT step. A missed high-severity complaint is not recovered by reclassifying a week later.
- **Row 5 = over-delegation.** Severity was set in Row 3 by the SAME system now sending without review. A step can't give ITSELF permission to skip the gate. Sending also can't be undone.
- **Row 4 = correct but watch it.** Duty agent reviews every draft, but nobody checked how many drafts per shift = a gate with no capacity check.

> Every stated reason was TRUE. Bad maps are built from true statements about the WRONG step.

### The Check Order

1. Map the work with NO tools in mind
2. Classify each step ON ITS OWN
3. For every collaborative step: who is reviewing and when?

> Ask regularly: **Are the gates I designed still being staffed?**

---

## CONCEPT 8: Map Ownership + Scheduled Reads

### Three Things That Decay Silently

| What decays            | Looks like                               | Signal at moment of failure |
| ---------------------- | ---------------------------------------- | --------------------------- |
| A review gate          | Reviews become glances, then clicks      | **NONE**                    |
| A standing instruction | Output slowly stops meeting a rule       | **NONE**                    |
| The map itself         | Describes a workflow nobody runs anymore | **NONE**                    |

**No signal = only a scheduled read catches them.**

### What the Map Needs

```
+------------------------------------------+
|         THE DELEGATION MAP                |
|                                           |
|  MUST HAVE:                               |
|  1. ONE named owner (a person, not team)  |
|     --> answerable for map = reality      |
|                                           |
|  2. A REVIEW DATE                         |
|     --> quarterly is reasonable default   |
|     --> sooner if volume, staffing, or    |
|        legal position changes             |
+------------------------------------------+
```

### The Four Review Questions (20 minutes)

1. **Has a step been added or removed** that isn't on the map?
2. **For every collaborative step: who reviewed it LAST WEEK, and how long did they spend?**
   - If nobody can answer --> the step is automated and the map is WRONG
   - Asks about LAST WEEK, not about POLICY (policy = what the map says; last week = what happened)
3. **Has anything changed the volume or stakes?** A gate sized for old numbers fails at new ones.
4. **Is every configuration still current?** Skills, knowledge sources, standing instructions.

> Question 2 finds the real problems.

---

# PART 3: BUILD (Concepts 9-10)

## CONCEPT 9: The Build Loop

```
        +----------+
        | IDEATE   |  Produce options
        +----+-----+
             |
             v
        +----------+
        |PROTOTYPE |  Make one concrete enough to react to
        +----+-----+
             |
             v
        +----------+
        | FEEDBACK |  Shows what's wrong (couldn't know in advance)
        +----+-----+
             |
             v
        +----------+
        | REFINE   |  Fix that
        +----+-----+
             |
             +-------> back to IDEATE (next cycle)
```

### The Dashboard Example: 3 Cycles

| Cycle                        | What happened                             | Lesson                                                       |
| ---------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| **Cycle 1:** Build           | 5 charts, readable, roughly right         | Makes people OVERCONFIDENT                                   |
| **Cycle 2:** Filter + totals | Filter works. Totals WRONG but look right | Totals were WRITTEN not COMPUTED. No prompt fix for this.    |
| **Cycle 3:** Colors + print  | Worked first time                         | This was a DESCRIPTION problem. Solved by describing better. |

### The Critical Distinction

```
DESCRIPTION PROBLEM                FEATURE PROBLEM
"I described it badly"             "This needs a different capability"

Fix: describe it better            Fix: use the right feature
(better prompt)                    (e.g., code execution for numbers)

Cycle 3 was this.                  Cycle 2 was this.
```

> **Telling these two apart is the skill.** Part 4 gives you the procedure.

**Why Cycle 2 is dangerous:** The failure is SILENT. No error message. The output was smooth, formatted, and confident. It reaches real use because there was nothing to catch it.

**Run the loop inside a Project** so background, limits, and earlier decisions stay stable. Across scattered chats, each round restarts from a slightly different understanding = a pile of drafts, not a solution.

---

## CONCEPT 10: When It Outgrows Prompt-and-Iterate

### The Escalation Signal = DEPENDENCY

```
MONTH 1:              MONTH 6:
One small team        Three departments
uses the dashboard    open it every Monday
internally            + one puts numbers
                      in a board report
        |                     |
        v                     v
   "A tool"             "INFRASTRUCTURE"
   (prompt-and-iterate) (needs engineering)
```

**Once other people RELY on something, it has requirements it never had before:**

- Uptime
- Access control
- Somebody to call when it breaks
- A guarantee it still does today what it did in March

> **Escalating to developer/architect IS a correct answer, not a failure.** The failure is the opposite: running something by prompt after others depend on it.

### Two Signals That Sound Alike

| Signal                                | Means                                  | Go to               |
| ------------------------------------- | -------------------------------------- | ------------------- |
| Other people now depend on this       | It's infrastructure, needs engineering | Developer/architect |
| I've solved this the same way 3 times | Shape is stable, can be manufactured   | A Skill / worker    |

---

# PART 4: DIAGNOSE (Concepts 11-12)

## CONCEPT 11: Four Causes, Told Apart by TIMING

When output disappoints, most people either:

- Give up ("the tool can't do this")
- Change things at random

Both skip the ONE question that narrows it down: **When did the symptom first appear?**

```
TIMELINE OF ONE SESSION
|                                                              |
|  [First response]  [Middle of session]  [After weeks]        |
|       |                    |                  |              |
|       v                    v                  v              |
|  UNDER-          CONTEXT              STALE                  |
|  SPECIFICATION   OVERLOAD             CONFIGURATION          |
|                                                              |
|  + WRONG FEATURE OR MODEL (shows as one repeatable error)    |
|                                                              |
```

### The Four Causes

| #   | Cause                      | When it shows               | What it means                                                  | Cheap test                                            | Fix                    |
| --- | -------------------------- | --------------------------- | -------------------------------------------------------------- | ----------------------------------------------------- | ---------------------- |
| 1   | **Under-specification**    | Wrong from FIRST answer     | Prompt never carried what it needed                            | Re-read prompt. Is the missing thing actually in it?  | Add what it left out   |
| 2   | **Context overload**       | Started fine, then DEGRADED | Conversation grew past context window; early instructions lost | Restate instruction in FRESH session. Does it hold?   | Restart or summarise   |
| 3   | **Wrong feature or model** | One REPEATABLE error type   | Step went to wrong tool                                        | Run step once with right feature/stronger tier        | Change feature or tier |
| 4   | **Stale configuration**    | USED TO WORK, now doesn't   | Standing instruction, knowledge, or Skill is out of date       | Open the instruction/knowledge source, check its date | Maintenance on config  |

### Important Nuances

- **Timing tells you where to LOOK first. It does NOT tell you what the cause IS.**
- One timing CAN have more than one cause
- Each signal gives a first guess + a cheap test. Negative result = ruled it out (not wasted time).

### Stale Configuration: The Silent Killer

```
Same shape as the unstaffed gate (C7):
- Both are controls you set up CORRECTLY
- Both decay while everyone ASSUMES they hold
- Both have ZERO signal at moment of failure
- Both found by a SCHEDULED REVIEW
```

No error. No warning. Last quarter's figures sit in the knowledge base. This quarter's report quotes them perfectly. The model has no way to know they're outdated.

---

## CONCEPT 12: The Diagnostic Sequence (Cheapest First)

```
CHEAP                                              EXPENSIVE
  |                                                    |
  v                                                    v
+--------+   +--------+   +--------+   +--------+   +--------+
| 1.     |   | 2.     |   | 3.     |   | 4.     |   | 5.     |
| PROMPT |-->| SESSION|-->| FEATURE|-->| CONFIG |-->| TASK   |
|        |   | LENGTH |   | & MODEL|   |        |   | FIT    |
| Re-read|   | Over-  |   | Right  |   | Current|   | Can    |
| against|   | loaded?|   | tool?  |   | date?  |   | this   |
| 5 parts|   | Fresh  |   | Right  |   | Check  |   | be     |
|        |   | session|   | tier?  |   | sources|   | done?  |
| seconds|   | fixes? |   |        |   |        |   |        |
+--------+   +--------+   +--------+   +--------+   +--------+
                                                     Most people
                                                     START here
                                                     (wrong!)
```

### Step 1 in Detail: The 5-Part Prompt Check

Hold the prompt against:

1. **Role** - who is the model being?
2. **Context** - background the model couldn't have known
3. **Task** - clear instruction
4. **Constraints** - limits on the answer
5. **Format** - output shape

A prompt reads fine to the person who wrote it (the missing piece is in THEIR head). Going slot-by-slot makes an absence visible.

### Step 5: Expectation Mismatch

> "I asked it to predict next quarter's EXACT sales figure and it was wrong."

No prompt, restart, feature change, or config check fixes that. This is a task that asks for something the tool CANNOT do.

**Fix:** Reshape the task. Ask for a range with stated assumptions, or a model of drivers you can adjust.

> **"Reached first, 'the task doesn't fit' is an excuse. Reached last, it's a conclusion."**

### Quick Reference: Symptoms to Diagnoses

| What you'd say                      | Diagnosis            | Fix                                     |
| ----------------------------------- | -------------------- | --------------------------------------- |
| "Summary keeps missing key points"  | Under-specification  | Name criteria for what counts as key    |
| "Stopped following format halfway"  | Context overload     | Restart from summary, or persist format |
| "Numbers are subtly wrong"          | Wrong feature        | Move calculation to code execution      |
| "Worked last month, now it's off"   | Stale configuration  | Audit instructions + knowledge sources  |
| "Can't predict exact future figure" | Expectation mismatch | Reshape task to what's possible         |

---

# PART 5: PERSIST (Concepts 13-16)

## CONCEPT 13: Turn a Reaction Into an Instruction

```
REACTION                              INSTRUCTION
(names how output FEELS)              (names what to CHANGE)

"Too generic"          -------->      "Name the audience and the
                                       one action I want them to take"
                                       LEVER: The prompt

"Wrong tone"           -------->      "Add a tone constraint that
                                       applies to every draft"
                                       LEVER: The standing instruction

"Missed the point"     -------->      "State the single question the
                                       output must answer, up front"
                                       LEVER: The prompt

"It's using old data"  -------->      "Replace the source document
                                       in the knowledge base"
                                       LEVER: The knowledge
```

**The jump question:** What would have to be PRESENT for this to be right, and which part of the setup controls that?

> If you can't name the lever, the critique is still a reaction, and the next attempt will be a guess that looks like a revision.

---

## CONCEPT 14: Rule, Reference, or Procedure (The Three Homes)

### Why This Matters

A fix found in Monday's session and left in that conversation:

- Will be found AGAIN next Monday
- And again by whoever covers for you
- Each time costs what the first one cost

**Promotion** = moving a fix out of a chat and into configuration, so it lasts.

### The Three Homes

```
+-------------------+   +-------------------+   +-------------------+
|      RULE         |   |    REFERENCE      |   |    PROCEDURE      |
|                   |   |                   |   |                   |
| A limit that      |   | Material the work |   | A sequence of     |
| ALWAYS applies    |   | has to READ       |   | steps             |
|                   |   |                   |   |                   |
| HOME:             |   | HOME:             |   | HOME:             |
| Standing          |   | Knowledge base    |   | Skill             |
| instruction       |   | (on the Project)  |   | (at account level)|
|                   |   |                   |   |                   |
| Changes:          |   | Changes:          |   | Changes:          |
| BEHAVIOR inside   |   | What is KNOWN     |   | HOW work is DONE  |
| a Project         |   |                   |   |                   |
+-------------------+   +-------------------+   +-------------------+
```

### Wrong Home = Fix Doesn't Stick

- A procedure pasted as a one-line instruction LOSES ITS STEPS
- Reference material stuffed into a standing instruction BLOATS EVERY PROMPT (even runs that don't need it)

### The Two-Person Story

```
THE MARKETER (did it right):
- Noticed: briefs always miss target segment + bury CTA
- Wrote TWO standing instructions into the briefs Project
- Result: every draft arrives correct, for EVERYONE who opens the Project

THE ANALYST (did it wrong):
- Figured out: revenue report must exclude canceled orders
- Typed reminder into chat EVERY MONTH
- It worked every month... then he went on leave
- Colleague ran the report --> numbers went out WITH canceled orders

The fix existed. It was just in a place only one person could find.
```

### Memory vs Configuration

| Feature     | Memory                             | Configuration                     |
| ----------- | ---------------------------------- | --------------------------------- |
| Scope       | Per-user                           | Shared with everyone              |
| Reliability | Best-effort (may pick up, may not) | Guaranteed                        |
| Inspectable | No (can't point at it, read it)    | Yes (open, read, hand to someone) |
| Verdict     | USE both, RELY on configuration    |                                   |

---

## CONCEPT 15: Find the Friction

**Friction** = a small repeated cost you've stopped noticing.

### Three Signals

| Signal         | Looks like                                     | Fix                                        |
| -------------- | ---------------------------------------------- | ------------------------------------------ |
| **Repetition** | You paste/type the same thing every run        | Saved context or standing instruction      |
| **Correction** | You fix the same flaw in every output          | Configuration change so it stops appearing |
| **Variance**   | Different people, same task, different results | Shared Skill or knowledge base             |

**Variance is the one teams miss.** No individual feels it. The inconsistency exists only BETWEEN people. It shows up at the REVIEWER who has to reconcile different formats.

### How to Find Friction You Can't See

Run the workflow once with the job of **writing down every manual step**. That list is your backlog.

### Two Moves to Remove Friction (in this order!)

```
1. CONSOLIDATE first   --> reduces NUMBER of steps
   (3 prompts that each need same background = 1 prompt)

2. PROMOTE second      --> reduces COST of remaining steps
   (move repeated patterns into configuration)

Do consolidate FIRST because promoting a step
you're about to merge away is wasted work.
```

### The Worked Audit

Team's weekly reporting: 45 min/analyst, outputs vary.

| Friction found                        | Type (C14 test) | Home                 | Action                  |
| ------------------------------------- | --------------- | -------------------- | ----------------------- |
| Each analyst re-pastes background     | Reference       | Knowledge base       | Put in shared Project   |
| Each analyst reformats output by hand | Procedure       | Skill                | Create shared Skill     |
| Each analyst catches different issues | Rule            | Standing instruction | Write consistent checks |

Result: ~25 min/analyst, consistent format, one fewer revision round.

---

## CONCEPT 16: Measure the Thing You Actually Care About

### The Baseline (Measure BEFORE You Change)

```
Run the workflow ONCE, unchanged. Record:
1. How long it took
2. How many revision rounds
3. How many manual steps

+------------------------------------------------------------+
| YOU CANNOT REBUILD A BASELINE AFTERWARDS.                   |
| Your estimate of the old way will FLATTER YOU.              |
+------------------------------------------------------------+
```

### Pick the RIGHT Metric

| If the workflow is...       | Optimize for    | Because                                            |
| --------------------------- | --------------- | -------------------------------------------------- |
| An internal draft           | **Time**        | Speed is the point, small errors are cheap         |
| A customer-facing report    | **Consistency** | Varying formats erode trust faster than delay      |
| A compliance/finance output | **Accuracy**    | One wrong figure costs more than an hour saved     |
| Work done by several people | **Variance**    | The cost lives between people, not within a person |

> Naming the metric up front tells you **when to stop**. Once good enough = more tuning becomes its own friction.

### Parallel Run

```
OLD WORKFLOW  =====>  compare  <======  NEW WORKFLOW
(for 2-3 cycles)      |
                       v
                 EVIDENCE that new is better on YOUR metric
                 + working FALLBACK if it's not
                 + AGREEMENT of people whose work changed
                 (turns "we're changing your job" into
                  "we ran both, here's what happened")
```

### Be Able to Answer What It Costs

**The sentence a manager can act on:**
"20 minutes a week across 3 analysts is roughly 50 hours a year."

Cost = what you pay the AI tool + human time still in it (the gates you kept)
Saving = baseline x how often it runs x how many people

Then name the risk that survives your gates. A business case that HID a risk stops being believed.

---

# PART 6: OPERATE & COMMUNICATE (Concepts 17-18)

## CONCEPT 17: When a Bad Output Gets Out

Everything so far LOWERS the chance. Nothing REMOVES it.

### The Four Decisions (Made at DESIGN TIME)

```
BAD OUTPUT GETS OUT
         |
         v
+------------------+     +------------------+
| 1. STOP          |     | 2. SCOPE         |
| How is it halted?|     | How many outputs  |
| Who can do it?   |     | were affected?    |
| Need permission? |     | Where did they go?|
+------------------+     +------------------+
         |                        |
         v                        v
+------------------+     +------------------+
| 3. TELL          |     | 4. CHANGE MAP    |
| Who is told?     |     | Which of the 4   |
| By when?         |     | causes was it?    |
| (customer, owner,|     | Step classified   |
|  risk/compliance)|     | wrong, or gate    |
| Late disclosure  |     | not staffed?      |
| costs FAR MORE   |     | Change + date     |
| than early one   |     | = fix outlasts    |
+------------------+     | the week everyone |
                         | was paying        |
                         | attention         |
                         +------------------+
```

**Key insight about scoping:** A stale configuration doesn't produce ONE bad result. It produces EVERY result since it went stale, and nobody notices which day that was.

> Decisions 1 and 4 are yours, made at design time or not at all. A team that can say what it does when the workflow is wrong is a team that gets PERMISSION to run the workflow.

---

## CONCEPT 18: Say What It Does, Then Name the Gate

### Three Phrases That Overstate (Never Use These)

| Phrase                                    | Problem                                                                          |
| ----------------------------------------- | -------------------------------------------------------------------------------- |
| "Fully automated"                         | Almost never true. First visible error exposes it publicly                       |
| "AI handles X"                            | Drops the human gate out of the sentence. Listener believes there's no gate      |
| "It's basically as good as a person at Y" | Sets a standard the tool will eventually miss, in front of someone who remembers |

### The Formula

```
1. Say what the tool DOES
2. Name the human CHECKPOINT
3. (For trust-critical audiences) Say what it REFUSES
   --> proves boundary was designed in advance, not found by incident
```

### Same Workflow, Three Audiences

**To the legal lead** (wants mechanism + failure modes):

> "It pulls clauses, marks departures from our playbook, writes the first redline. Approving a change is still yours. Watch for obligations implied rather than stated, which it can miss."

**To the practice executive** (wants outcome + oversight):

> "Turnaround went from two days to about half a day, same approval standard. A lawyer still signs off every change before it leaves."

**To the client's risk function** (wants the control):

> "Drafting is AI-assisted. A qualified lawyer reviews and approves every term. Nothing sent without that sign-off."

Same facts. Three levels of detail. **None of the three drops the gate.**

> **Stakeholders trust an AI workflow MORE, not less, when human checkpoints are explicit.**

The instinct is to play down human involvement (sounds like tool does less). The effect is opposite: an unexplained gap between "AI does it" and what happens when AI is wrong is where a risk team stops listening.

---

# MASTER CHEATSHEET: ALL KEY TERMS

| Term                             | Definition                                                        | Remember                                               |
| -------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------ |
| **Step**                         | One named piece of a workflow, one owner                          | Decide about the step, not the session                 |
| **Task definition**              | 5 answers: what, for whom, how often, from what data, what format | Missing answer = question you OWE, not blank for model |
| **Code execution**               | Model writes + runs code, reports computed result                 | If it matters, compute it. Never write it              |
| **Context / Context window**     | Everything model can see / the limit on that                      | Limit = why long sessions lose early instructions      |
| **Window test**                  | Can everything this step needs be put in front of the model?      | Passing = eligible, NOT owned                          |
| **Synthesis vs Judgment**        | Info you can supply vs info you can't                             | Judgment stays human (inputs unavailable, not sacred)  |
| **Delegation map**               | Workflow step by step, with owner + reason                        | Needs one named owner + review date                    |
| **Reversibility**                | Can it be undone?                                                 | Draft = yes. Sent email = no                           |
| **Stakes**                       | What error costs in the BAD case                                  | Not average, not usually                               |
| **Accountability**               | Who answers for this step?                                        | Never moves to machine                                 |
| **AI-appropriate**               | Can be undone + somebody judges                                   |                                                        |
| **Human-retained**               | Person owns outright                                              |                                                        |
| **Collaborative**                | AI produces, named person judges                                  | Stops being collaborative when nobody judges           |
| **Over-delegation**              | More than the risk allows                                         |                                                        |
| **Halo delegation**              | Handing step to AI because PREVIOUS step went well                | Competence was real, belonged to different step        |
| **Unstaffed gate**               | Review no longer really done                                      | Map records design, not reality                        |
| **Map owner**                    | One named person, not team                                        | Answerable for map = reality                           |
| **Scheduled read**               | Review on fixed date                                              | Only way to catch silent decay                         |
| **Build loop**                   | Ideate, prototype, feedback, refine                               |                                                        |
| **Escalation signal**            | Other people depend on your tool                                  | --> Engineering, not prompt-and-iterate                |
| **Under-specification**          | Wrong from first answer                                           | Prompt missing what it needed                          |
| **Context overload**             | Degrades over session                                             | Earlier instructions lost                              |
| **Wrong feature/model**          | One repeatable error type                                         | "Subtly wrong numbers" = asked in prose                |
| **Stale configuration**          | Used to work, now doesn't                                         | Fails silently, twin of unstaffed gate                 |
| **Expectation mismatch**         | Tool can't do this task                                           | Reshape the task                                       |
| **Diagnostic sequence**          | Prompt > session > feature > config > task fit                    | Cheapest first. Always.                                |
| **Reaction vs Instruction**      | "Too generic" vs "Name the audience"                              | Name the LEVER or it's still a reaction                |
| **Promotion**                    | Fix moves from chat to configuration                              | So it lasts + others can use it                        |
| **Rule / Reference / Procedure** | Standing instruction / Knowledge base / Skill                     | Wrong home = fix doesn't stick                         |
| **Friction**                     | Small repeated cost you stopped noticing                          | Repetition, correction, variance                       |
| **Baseline**                     | Measurement BEFORE change                                         | Can't be reconstructed after                           |
| **Parallel run**                 | Old + new together, 2-3 cycles                                    | Evidence, fallback, and buy-in                         |

---

# EXAM DECISION TREES

## "Who should own this step?"

```
Can this data enter this tool? --> NO --> HUMAN (governance gate)
         |
        YES
         |
Can everything it needs be supplied? (Window test) --> NO --> HUMAN
         |
        YES (step is ELIGIBLE)
         |
Can it be undone?
   NO + externally binding --> HUMAN
   YES --> check stakes + accountability
              |
         What does error cost (bad case)?
         High + this IS the decision --> HUMAN
         High + someone judges after --> COLLABORATIVE
         Low + reversible + someone judges --> AI-APPROPRIATE
```

## "Why is the output bad?"

```
When did the symptom first appear?
    |
    +-- Wrong from first answer
    |     --> Probably UNDER-SPECIFICATION
    |     --> Test: re-read prompt, is missing thing in it?
    |
    +-- Started fine, then degraded
    |     --> Probably CONTEXT OVERLOAD
    |     --> Test: restate in fresh session
    |
    +-- One repeatable error type
    |     --> Probably WRONG FEATURE/MODEL
    |     --> Test: run once with right feature/stronger tier
    |
    +-- Used to work, now doesn't
    |     --> Probably STALE CONFIGURATION
    |     --> Test: check date on instructions/knowledge
    |
    +-- None of the above fixed it
          --> EXPECTATION MISMATCH
          --> Reshape the task
```

## "Where does this fix go?"

```
Will this correction be needed again? --> NO --> leave it
         |
        YES --> PROMOTE it
         |
Is the fix...
    |
    +-- A limit that always applies?
    |     --> RULE --> Standing instruction
    |
    +-- Material the work has to read?
    |     --> REFERENCE --> Knowledge base
    |
    +-- A sequence of steps?
          --> PROCEDURE --> Skill
```

---

# 10 EXAM-STYLE PRACTICE QUESTIONS

**Q1.** A marketing team notices their AI-drafted campaign briefs always miss the target segment. A team member fixes this by hand each time. What should they do?

A) Write a better prompt each time they draft a brief
B) Add a standing instruction to the Project that requires target segment in every brief
C) Switch to a more capable model tier
D) Have a human write the target segment section manually

**Answer: B.** This is a repeated correction (C15 friction signal). The fix is a rule ("always include target segment") that belongs in a standing instruction (C14). Option A loses the fix each session. C is step 3 of the diagnostic sequence when step 1 wasn't tried. D abandons the task.

---

**Q2.** An AI system has been accurately extracting contract clauses for 3 months. A team lead proposes letting it also approve low-risk clauses without human review. What is the primary concern?

A) The model may not maintain its accuracy over time
B) Good extraction performance is not evidence about approval decisions
C) Low-risk clauses don't need review anyway
D) The approval step requires a more capable model

**Answer: B.** This is halo delegation (C7). Extraction competence is evidence about extraction, not about the approval decision. These are different KINDS of steps.

---

**Q3.** A financial report that worked perfectly last month now produces slightly wrong figures. The analyst's first instinct is to switch to a stronger model. What should they do first?

A) Switch to a stronger model tier
B) Rebuild the report from scratch
C) Re-read the prompt against its five parts
D) Check if the task is a good fit for AI

**Answer: C.** The diagnostic sequence (C12) runs cheapest first. "Used to work" suggests stale configuration, but you still start at step 1 (the prompt). Step 1 costs seconds. Switching models (A) is step 3. Rebuilding (B) skips diagnosis. Questioning task fit (D) is step 5.

---

**Q4.** A team's AI workflow computes quarterly revenue projections. The numbers look reasonable but nobody can verify how they were calculated. What is the problem?

A) The model tier isn't capable enough
B) The figures were generated in prose rather than computed via code execution
C) The prompt needs more context about the data
D) The knowledge base is outdated

**Answer: B.** A written figure and a calculated one look the same on the page (C3). Code execution produces traceable, re-runnable computation. "Looks reasonable but unverifiable" = the hallmark of prose-generated numbers.

---

**Q5.** An operations lead asks AI to create a capacity plan. The analysis is excellent, but the recommendation ignores a company-wide hiring freeze announced in a recent internal meeting. What test did this step fail?

A) The reversibility test
B) The stakes test
C) The window test
D) The diagnostic sequence

**Answer: C.** The hiring freeze was announced in a meeting, not in any data the model could access. The step failed the window test (C4) because not everything it needed could be put in front of the model. The model filled the gap with what such a decision usually looks like.

---

**Q6.** A duty agent is supposed to review every AI-drafted customer response before it's sent. Over time, the queue grows and reviews become quick glances. What has happened?

A) The AI model has degraded in quality
B) The workflow has an unstaffed gate
C) The standing instructions are stale
D) The task has outgrown prompt-and-iterate

**Answer: B.** This is a textbook unstaffed gate (C7). Nothing was decided, nobody changed the map, but the collaborative step is now effectively automated. The map won't tell you because it records what was designed, not what's running.

---

**Q7.** An analyst discovers that revenue reports must exclude canceled orders. They type this reminder into the chat every month. What should they do?

A) Continue typing the reminder since it works
B) Save it as a standing instruction in the Project
C) Ask the AI to remember it for next time
D) Add it to the knowledge base as a reference document

**Answer: B.** This is a RULE (a constraint that always applies), so it belongs in a standing instruction (C14). Memory (C) is per-user and best-effort. The knowledge base (D) is for reference material, not rules. Continuing to type it (A) means the fix is lost when someone covers for the analyst.

---

**Q8.** Three analysts run the same weekly reporting workflow but produce reports in noticeably different formats. Where does the inconsistency show up?

A) At each analyst's desk
B) At the reviewer who receives all three
C) In the AI model's output quality
D) In the standing instructions

**Answer: B.** Variance is the friction signal that teams miss (C15). No individual feels it. The inconsistency exists only between people and shows up at the reviewer who has to reconcile different formats. Fix: shared Skill or knowledge base.

---

**Q9.** A team wants to show their executive that their new AI-assisted workflow is an improvement. They didn't measure the old workflow before switching. What is the problem?

A) They can estimate the old workflow's performance from memory
B) They cannot reconstruct a baseline after the change has been made
C) They should run the old and new workflows in parallel now
D) They should switch back to the old workflow temporarily to measure it

**Answer: B.** A baseline cannot be reconstructed afterwards (C16). Your estimate of the old way will flatter you. The baseline costs one cycle before you change anything, and that window is gone.

---

**Q10.** A practice executive asks about your AI-assisted contract review. Which response is most appropriate?

A) "It's fully automated -- AI handles the entire review process"
B) "Turnaround dropped from two days to half a day, with the same approval standard. A lawyer signs off every change before it leaves"
C) "AI is basically as good as a lawyer at reviewing contracts"
D) "We've replaced the manual review process with AI"

**Answer: B.** This follows C18: state what it does, name the human gate, don't use the three phrases that overstate ("fully automated," "handles," "as good as a person"). Option B gives the outcome in units the executive cares about (turnaround time) and names the checkpoint.

---

# ONE-PAGE MAP TEMPLATE (Copy This)

```
DELEGATION MAP: [workflow name]
Owner: [one named person]
Last reviewed: [date]
Next review: [date]

ELIGIBILITY (both must pass before any step below is mapped)
  Data gate:  [may this data enter this tool? who confirmed, when?]
  Input gate: [can everything each step needs actually be supplied?]

STEPS
#  Step                  Owner          Criterion                  Carried by
1  ...                   AI             reversible, low stakes     Skill
2  ...                   AI             reversible, checked at #4  code execution
3  ...                   Collaborative  high stakes, human judges  Skill + gate
4  ...                   Human          this step is the decision  named reviewer
5  ...                   Human          irreversible               named signer

GATES (one line per collaborative or human step)
  Step 3: reviewed by [name], at [when], checking [what specifically]
  Step 4: approved by [name], before [what happens next]

BASELINE (measured before any change)
  Time per run: ___   Revision rounds: ___   Manual steps: ___
  Metric this workflow optimises for: [time | consistency | accuracy | variance]

IF IT GOES WRONG
  Stopped by:   [who, and can they act without permission?]
  Scope check:  [how do we find out how many outputs were affected?]
  Told:         [who, within what time]
  Map change:   [recorded here, with a date]
```

---

> **Final reminder:** The output is not the verdict. Judge the step by what it costs and who answers for it, and judge a failure by when it started.
