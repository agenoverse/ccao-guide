---
type: Document
title: "Workflow Design & Diagnosis: Scenario Guide Part 5"
description: "Scenario walkthroughs covering integration patterns, connecting AI to existing tools, and managing data across steps."
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
order: 86
---


> This is the core of **Domain 7: Troubleshooting & Optimization (10% of the exam).** When AI output goes wrong, most people either give up or change things randomly. This part teaches you the SYSTEM for figuring out what's actually broken.

---

## CONCEPT 11: Four Causes, Told Apart by TIMING

### THE BIG IDEA

When AI gives you a bad output, your instinct does one of two things:

```
INSTINCT A: "This tool can't do this."    --> GIVES UP
INSTINCT B: "Let me change some words     --> RANDOM CHANGES
             and try again."
```

Both skip the ONE question that narrows it down:

> **When did the symptom first appear?**

This is free information. You already have it. You just have to ask yourself.

Four different causes produce bad output that looks THE SAME on the page. But they show up at DIFFERENT TIMES. Timing tells them apart.

### THE SCENARIO: Four People, Same Complaint, Different Causes

Let's follow four people at the same company. All four say the same thing: **"The AI output is wrong."** But each one has a different cause.

---

### PERSON 1: Mehreen (Under-specification)

**What happened:**
Mehreen asks AI: "Write a summary of our Q3 performance."

The summary comes back... generic [aam sa -- kuch khaas nahi]. It mentions "positive trends" and "areas for improvement" but nothing specific. No numbers. No department names. No comparison to targets [hadaf -- goals jo set kiye the].

Mehreen thinks: "This AI is useless at summaries."

**When did the symptom appear?** On the VERY FIRST response. In a fresh chat. First try.

**What's actually wrong:**
Read her prompt again: "Write a summary of our Q3 performance."

- Which department? (Not specified)
- Compared to what targets? (Not specified)
- What counts as "key" information? (Not specified)
- What format -- bullet points, paragraphs, one page? (Not specified)
- Who is the audience -- the CEO or the team? (Not specified)

The prompt never carried what the step needed. The AI did the best it could with what it got. It's like telling a new employee [naya banda] "summarize our performance" without telling them which department, which metrics, or who's going to read it.

This is **under-specification** [prompt mein zaroori cheezein nahi theen] -- the most common cause, and the cheapest to fix.

**The fix:** Add what was missing.

> "Write a one-page summary of the Sales department's Q3 performance, comparing actual revenue and customer acquisition [naye customers laana] to the targets in the attached plan. Format as bullet points. This goes to the VP of Sales who wants to know: are we on track, and what needs attention?"

---

### PERSON 2: Danish (Context Overload)

**What happened:**
Danish has been working with AI on a complex project plan for 2 hours. The conversation is now 40 messages long.

At the start, he gave clear instructions: "All timelines must be in business days [kaam ke din -- weekends nahi ginte], all costs in PKR, and always show the risk rating [khatray ka darjah] next to each milestone [bada step/goal]."

For the first 15 messages, the output was perfect. Business days, PKR, risk ratings -- exactly right.

At message 30, Danish notices: the timeline switched to calendar days [sab din ginte hain, weekends bhi]. He corrects it. Two messages later, costs appear in USD. He corrects again. Then the risk ratings disappear entirely.

Danish thinks: "The AI keeps forgetting my instructions."

**When did the symptom appear?** The output started FINE and then DEGRADED [pehle acha tha, phir bura hota gaya] over the course of the session.

**What's actually wrong:**
The conversation grew longer than the **context window** [model ki nazr ki hadd -- kitna dekh sakta hai ek waqt mein]. When this happens, earlier text gets shortened or dropped to make room for newer messages. Danish's original instructions from message 1 are no longer fully visible to the model.

A better prompt will NOT help, because the problem isn't the prompt Danish just wrote. It's that his EARLIER instructions are fading.

This is **context overload** [conversation itni lambi ho gayi ke purani hadaayat ghayab ho gayin].

**The fix:** Start a fresh session [nayi chat shuru karo] and restate [dobara likho] the key instructions. Or summarise the progress so far and continue from that summary.

**The cheap test:** Restate the exact same instruction in a fresh session. Does it work? If yes --> context overload was the cause.

---

### PERSON 3: Farah (Wrong Feature or Model)

**What happened:**
Farah asks AI to calculate commission payments [commission = bechne wale ko milne wala paisa based on sales] for her 23-person sales team. Each person has a different rate [mukhtalif percentage], with accelerators [zyada bechne pe percentage badh jaata hai] above their quota [target -- kitna bechna hai].

The output comes back in a nice table. Numbers look reasonable. But when Farah checks three people manually with a calculator, two of them are off by small amounts. Not wildly wrong. Just... subtly off [thoda thoda ghalat].

She rephrases [dobara likhti hai] the prompt. Same kind of errors. She makes the prompt even more detailed. Same errors. She tries a third time with extremely specific instructions. Still subtly wrong.

Farah thinks: "I can't explain it clearly enough."

**When did the symptom appear?** One repeatable kind of error [ek hi qism ki ghalti, har dafa]. Every attempt has the same problem: small numerical inaccuracies [chhoti chhoti ghalat calculations].

**What's actually wrong:**
This is not a prompt problem at all. The commission calculation is a COMPUTATION [hisaab] that needs CODE EXECUTION [AI code likhay aur chalay], not prose [regular text mein answer]. When AI "writes" numbers instead of computing them, it generates what such numbers usually look like. Close, but not exact.

Also possible: Farah is using a fast, lightweight model **tier** [model version -- tez aur sasta wala vs dheema aur zyada capable wala] for a task that needs more capability. A speed tier gives quick answers but may not handle complex multi-step calculations well.

This is **wrong feature or model** [galat tool ya galat model tier use ho raha hai].

**The fix:** Move the calculation to code execution. Or if the task needs deeper reasoning, try a more capable tier.

**The cheap test:** Run the step once with the right feature (code execution) or a stronger tier. Does the specific error type disappear? If yes --> wrong feature/model was the cause.

---

### PERSON 4: Omar (Stale Configuration)

**What happened:**
Omar's team has a Project [saved workspace with files and instructions] that generates weekly client reports. It's been running perfectly for 3 months. The standing instructions [rules saved in the Project] say to use the approved report template. The knowledge base [saved files in the Project] contains the current client list, product names, and pricing.

This week, the report mentions a product that was discontinued [band ho chuka] last month. It also uses the old pricing, which changed two weeks ago.

Omar thinks: "Something broke."

**When did the symptom appear?** It USED TO WORK. Now it doesn't. It didn't break suddenly -- the output has been slowly getting worse [dheere dheere bura ho raha tha], but this week it became obvious.

**What's actually wrong:**
Nothing "broke." The Project's knowledge base still has last quarter's product list and last month's pricing. Nobody updated [naye data se replace kiya] the files. The model is doing EXACTLY what it was told -- using the files it was given. Those files are just out of date [purani ho chuki hain].

This is **stale configuration** [purani settings -- instructions ya knowledge jo update nahi hui] -- something the setup depends on has gone out of date.

**The fix:** Update the knowledge base files. Check the standing instructions too -- are they still accurate?

**The cheap test:** Open the instruction or knowledge source and check its date. Is it current?

---

### THE FOUR CAUSES SIDE BY SIDE

| # | Cause | When it shows up | Cheap test (1 minute) | Fix |
|---|-------|-----------------|----------------------|-----|
| 1 | **Under-specification** [prompt mein zaroori info nahi thi] | Wrong from FIRST answer | Re-read the prompt. Is the missing thing actually in it? | Add what's missing |
| 2 | **Context overload** [conversation bahut lambi ho gayi] | Started fine, then DEGRADED | Restate in fresh session. Does it hold? | Restart or summarise |
| 3 | **Wrong feature or model** [galat tool / tier] | One REPEATABLE error type | Run once with right feature or stronger tier | Change feature or tier |
| 4 | **Stale configuration** [purani instructions / knowledge] | USED TO WORK, now doesn't | Check the date on instructions/knowledge | Update the configuration |

### CRITICAL NUANCES

**Timing tells you where to LOOK first. It does NOT tell you what the cause IS.**

One timing CAN have more than one cause:
- "Wrong from the first answer" is USUALLY under-specification. But it could also be bad source material [ghalat data diya], or a prompt that gives different results on different runs.
- "Used to work" is USUALLY stale configuration. But it could also be that the TASK changed shape and nobody noticed [kaam ki shakal badal gayi].

Each signal gives you a first guess AND a cheap test. If the test comes back negative [ghalat nikla -- yeh wajah nahi thi], that's not wasted time. You've RULED OUT the most likely cause in under a minute.

**Stale configuration is the SILENT KILLER:**

```
UNDER-SPECIFICATION:    You see it immediately (first response is bad)
CONTEXT OVERLOAD:       You notice the degradation (it was better before)
WRONG FEATURE:          You see the pattern (same error every time)

STALE CONFIGURATION:    NO signal. NO error. NO warning.

Last quarter's figures sit in the knowledge base.
This quarter's report quotes them, perfectly formatted.
The model has NO WAY to know that what you gave it is out of date.
```

This makes stale configuration the twin [jodwa -- same shakal] of the unstaffed gate from Concept 7. Both are controls you set up CORRECTLY, both decay while everyone assumes they hold, both have ZERO signal at the moment of failure, and both are caught by a SCHEDULED REVIEW.

### EXAM TRAP

**Trap 1:** A scenario where output is bad and someone immediately says "the task isn't a fit for AI" or "we need a better model." The exam wants you to START with timing: when did it go wrong? Check cheap causes before expensive ones.

**Trap 2:** A scenario with "subtly wrong numbers." The exam wants you to recognize this as wrong feature (needs code execution), NOT under-specification (doesn't need a better prompt).

**Trap 3:** A scenario where "it used to work." The exam wants you to check the configuration dates, not switch models or rewrite the prompt.

**Trap 4:** A scenario where output degraded during a long session. The exam wants context overload -- restart the session, don't rewrite the prompt.

### QUICK CHECK

> Your AI report was perfect for 3 months. This week, it includes a product that was discontinued last month. Which cause is this, what timing told you, and what's the cheap test?

Stale configuration. Timing: it USED TO WORK. Cheap test: open the knowledge base and check the date on the product list. If it's outdated, update it. Don't rewrite the prompt -- the prompt was never the problem.

---

## CONCEPT 12: The Diagnostic Sequence (Cheapest First)

### THE SCENARIO

Nida manages a team that uses AI to draft contract summaries [contracts ka khulasa -- chhota version jo main points dikhaye]. This Monday, the summaries are missing key clauses [important dafaat] that they always used to include.

Nida's instinct: "Let me switch to the most powerful model. That should fix it."

**This is the wrong first move.** Here's why.

### THE DIAGNOSTIC SEQUENCE

There are five things that could be wrong. They are listed in order from CHEAPEST to MOST EXPENSIVE to fix:

```
CHEAPEST                                                    MOST EXPENSIVE
   |                                                              |
   v                                                              v
+--------+    +--------+    +---------+    +--------+    +---------+
| STEP 1 |    | STEP 2 |    | STEP 3  |    | STEP 4 |    | STEP 5  |
| PROMPT  |--->|SESSION |--->|FEATURE  |--->| CONFIG |--->|  TASK   |
|         |    |LENGTH  |    |& MODEL  |    |        |    |  FIT    |
|         |    |        |    |         |    |        |    |         |
| Re-read |    | Over-  |    | Right   |    |Is the  |    | Can     |
| against |    |loaded? |    | tool?   |    |setup   |    | this    |
| 5 parts |    |Restart |    | Right   |    |still   |    | task    |
|         |    |fixes?  |    | tier?   |    |current?|    | be done |
|         |    |        |    |         |    |        |    | at all? |
| SECONDS |    |SECONDS |    |MINUTES  |    |MINUTES |    |  ENDS   |
|         |    |        |    |         |    |        |    |  THE    |
|         |    |        |    |         |    |        |    | ATTEMPT |
+--------+    +--------+    +---------+    +--------+    +---------+

                    Most people jump STRAIGHT to Step 5:
                    "This task isn't a fit for AI" or
                    "We need the strongest model"
                    
                    Both are moves from the BOTTOM of the ladder,
                    made BEFORE anything at the top was checked.
```

### STEP 1: Re-read the Prompt Against Its Five Parts

This is more than just reading it again. Hold the prompt against five slots [khaane] and check EACH one:

```
1. ROLE:        Who is the model being?
                [AI ko kya role diya? -- "You are a legal analyst"]

2. CONTEXT:     Background the model couldn't have known
                [woh cheezein jo model ko khud nahi pata --
                 you have to provide them]

3. TASK:        A clear instruction
                [saaf hadaayat -- exactly kya karna hai]

4. CONSTRAINTS: Limits on the answer
                [paabandiyaan -- "under 500 words",
                 "only use data from Q3", "formal tone"]

5. FORMAT:      Output shape
                [output kaise dikhna chahiye -- "as a table",
                 "bullet points", "one-page PDF"]
```

**Why slot-by-slot works:** A prompt reads fine to the person who wrote it, because the missing piece is sitting in THEIR head [jo cheez prompt mein nahi hai, woh likhne wale ke dimagh mein hai]. Going slot by slot makes the ABSENCE visible.

**For Nida's problem:** She re-reads her prompt. The role is there. The task is clear. But wait -- the CONSTRAINTS slot has nothing about which clauses are "key." She assumed the model would know. It didn't.

Actually, this might be the fix. But let's check the other steps too.

### STEP 2: Check Session Length

Is the conversation long? Has it been going for many messages?

For Nida: it's a fresh session. Not overloaded. **Rule out context overload.**

### STEP 3: Check Feature and Model

Is this a calculation that needs code execution? Is a task requiring deep analysis running on a fast/cheap tier?

For Nida: summaries don't need code execution. The tier is appropriate for text summarisation. **Rule out wrong feature/model.**

### STEP 4: Check Configuration

Are the standing instructions current? Is the knowledge base up to date? Are the Skills unchanged?

For Nida: She opens the Project. The standing instruction says "always include penalty clauses [jurrmaane ki dafaat] and liability sections [zimmedaari ke hisse]." Wait -- last week, the IT team updated the Project and accidentally removed one standing instruction. **FOUND IT.** The configuration is stale.

### STEP 5: Question Whether the Task Fits at All

Only reach here AFTER ruling out Steps 1-4. This is where **expectation mismatch** [tum AI se aisi cheez maang rahe ho jo woh kar hi nahi sakta] lives.

Example: "I asked AI to predict next quarter's exact sales figure and it was wrong."

No prompt fix, no restart, no feature change, no configuration update can fix this. Predicting one exact future number is not something the tool can do. The fix is to reshape the task [kaam ki shakal badlo]: ask for a RANGE with stated assumptions, or a model of drivers [factors jo sales ko affect karte hain] you can adjust and re-run.

> **"Reached first, 'the task doesn't fit' is an EXCUSE. Reached last, it's a CONCLUSION."**

The difference between an excuse and a conclusion is whether the four cheaper causes were ruled out.

### THE SYMPTOMS TABLE

All these complaints SOUND different. They have DIFFERENT diagnoses:

| What you'd say | Diagnosis | Fix |
|----------------|-----------|-----|
| "The summary keeps missing key points" | Under-specification | Name the criteria for what counts as key |
| "It stopped following my format halfway through" | Context overload | Restart from a summary, or persist [save karo] the format |
| "The numbers are subtly wrong" | Wrong feature | Move the calculation to code execution |
| "It worked last month, now it's off" | Stale configuration | Audit [check karo] instructions + knowledge sources |
| "It can't predict next quarter's exact figure" | Expectation mismatch | Reshape the task into something possible |

**Nothing in the WORDING tells you which one you're in.** That's why the sequence exists. The timing + the cheap tests tell you.

### THE KEY PRINCIPLE

> Run the sequence the moment output disappoints, **BEFORE forming an opinion about whose fault it is.**

The whole thing takes 1-2 minutes end to end, and most of the time lands on a cheap fix (Step 1 or 2).

### EXAM TRAP

**The big trap:** Someone jumps to "switch to a stronger model" (Step 3) or "this task doesn't fit AI" (Step 5) without checking Steps 1 and 2 first. The exam ALWAYS rewards checking cheap causes before expensive ones.

**Trap pattern on the exam:**

```
SCENARIO: Output is disappointing.

WRONG ANSWERS (jump to bottom of ladder):
A) Switch to a more capable model
B) Conclude the task isn't suitable for AI
C) Rebuild the workflow from scratch

RIGHT ANSWER (start at top of ladder):
D) Re-read the prompt against its five parts to check
   for under-specification
```

### QUICK CHECK 1

> An AI-drafted weekly report has been perfect for months. This week it's using old numbers. Your colleague says "Let's switch to a stronger model." What's wrong with that?

Switching models is Step 3 of the diagnostic sequence. The symptom ("used to work, now doesn't") points to Step 4: stale configuration. Your colleague skipped to the wrong rung [seedhi ki ghalat step]. Check the knowledge base first -- are the data files current?

### QUICK CHECK 2

> You ask AI to summarise a legal brief [qanooni document ka khulasa] and it misses the key arguments [main dalayil]. You rewrite the prompt three times with more detail. Still misses them. What should you check next?

You've tried Step 1 (prompt) three times. Move to Step 2: is the conversation overloaded? If it's a fresh chat, move to Step 3: is this the right model tier for deep legal analysis? A fast tier might not handle complex reasoning. Try a more capable tier.

---

## CONCEPT 13: Turn a Reaction Into an Instruction

### THE SCENARIO

Rabia is a marketing manager [marketing ki zimmedar]. She uses AI to draft campaign emails [marketing ke emails -- "buy our product!" type]. Every draft comes back and she says the same thing:

Draft 1: "Hmm, too generic." She rewrites it manually.
Draft 2: "Nah, wrong tone." She tweaks [thoda sa change karti hai] it.
Draft 3: "It missed the point." She fixes it by hand.

Every time, she starts from a REACTION [response/feeling -- "yeh acha nahi laga"] and fixes it by HAND. The next draft has the same problems. She fixes again. And again.

After a month, Rabia has fixed 30 drafts manually. Each one took 15 minutes. That's 7.5 hours of fixing the same problems.

**What's wrong?**

Rabia is reacting but never INSTRUCTING. A reaction names how the output FEELS. An instruction names what to CHANGE and which part of the setup CONTROLS it.

### THE JUMP

One question makes the jump from reaction to instruction:

> **"What would have to be PRESENT for this to be right, and which part of the setup controls that?"**

Let's apply it to Rabia's three reactions:

```
REACTION: "Too generic"

  What would make it RIGHT?
  --> It should name the specific audience (small business owners
      in Lahore) and the ONE action I want them to take (sign up
      for the free trial).
      
  Which part of the setup controls that?
  --> THE PROMPT. She never told AI who the audience is or what
      action she wants.
      
  INSTRUCTION: "Name the audience (small business owners in Lahore)
  and the single call to action (sign up for free trial) in every
  draft."
  
  LEVER [woh part jo change karna hai]: The prompt
```

```
REACTION: "Wrong tone"

  What would make it RIGHT?
  --> It should be conversational but professional. Not salesy
      [zyada bechne wali awaaz nahi]. Not too formal.
      
  Which part controls that?
  --> A STANDING INSTRUCTION [saved rule in the Project]. This
      applies to EVERY draft, not just this one.
      
  INSTRUCTION: "Use a conversational but professional tone.
  Avoid aggressive sales language. No exclamation marks in
  subject lines."
  
  LEVER: The standing instruction
```

```
REACTION: "Missed the point"

  What would make it RIGHT?
  --> The email should answer ONE question: "Why should I switch
      from my current solution?" Everything else is secondary.
      
  Which part controls that?
  --> THE PROMPT. She needs to state the core question up front.
  
  INSTRUCTION: "The email must answer one question: Why should
  the reader switch from their current solution? Lead with that.
  Everything else supports it."
  
  LEVER: The prompt
```

### THE THREE LEVERS

```
LEVER 1: THE PROMPT
  - What you type THIS time
  - Changes THIS output
  - Example: "Name the audience and the action"

LEVER 2: THE STANDING INSTRUCTION
  - A rule saved in the Project
  - Changes EVERY output from this Project
  - Example: "Always use conversational-professional tone"

LEVER 3: THE KNOWLEDGE BASE
  - Files saved in the Project
  - Changes what the model KNOWS
  - Example: replacing old product list with current one
```

### THE KEY RULE

> **If you cannot name the lever, the critique [tanqeed -- feedback] is still a reaction.** And the next attempt will be a guess that looks like a revision [nazar-e-saani].

```
"Too generic"     --> CAN'T name lever  --> still a reaction
                      --> next try is random changes
                      
"Name the audience --> LEVER: the prompt --> this is an instruction
 and the action"      --> next try is TARGETED
```

### THE EXAM PATTERN

The exam will give you a scenario where someone is unhappy with AI output. The options will be:

```
A) A reaction disguised as a fix ("tell it to be more specific")
B) A reaction disguised as a fix ("try a different model")  
C) An actual instruction that names the lever
D) Give up on the task
```

The answer is always C. The exam rewards: name what needs to change AND which part of the setup controls it.

### EXAM TRAP

**Trap 1:** "Tell the AI to be more accurate" or "ask it to try harder." These are reactions, not instructions. They don't name what's missing or which lever to pull.

**Trap 2:** Someone identifies the problem but fixes it by hand every time instead of changing the setup. The exam wants you to see: a fix applied by hand is lost at the end of the session. (This connects to Concept 14 in Part 6 -- promoting fixes into configuration.)

### QUICK CHECK 1

> An analyst says "the report is too long." Is this a reaction or an instruction? If it's a reaction, turn it into an instruction and name the lever.

It's a reaction. What would make it right? A one-page report with only the top 5 metrics. Which lever? The prompt (add "limit to one page, include only the top 5 metrics by impact") OR a standing instruction if this applies to every report ("all reports must be one page maximum").

### QUICK CHECK 2

> A team lead says "the drafts don't sound like us." What question turns this into an instruction?

"What would have to be PRESENT for this to sound like us?" Maybe: "Use short sentences. No jargon [technical words]. Always lead with the customer benefit, not the feature." Which lever? Standing instruction (this applies to every draft from this Project). Or knowledge base (add a brand voice guide [company ki awaaz ka document] as reference material).

---

## PART 5 RECAP

```
CONCEPT 11: Four Causes
  Timing tells you where to look:
  - Wrong from FIRST answer        --> Under-specification
  - Started fine, DEGRADED         --> Context overload  
  - One REPEATABLE error type      --> Wrong feature/model
  - USED TO WORK, now doesn't      --> Stale configuration
  
  Stale config is the SILENT KILLER (no signal, twin of unstaffed gate)
  Each timing gives a first guess + a cheap 1-minute test

CONCEPT 12: Diagnostic Sequence (cheapest first)
  1. Prompt (re-read against 5 parts)     -- seconds
  2. Session length (overloaded?)          -- seconds
  3. Feature and model (right tool/tier?)  -- minutes
  4. Configuration (still current?)        -- minutes
  5. Task fit (can this even be done?)     -- ENDS the attempt
  
  "Reached first, 'doesn't fit' is an excuse.
   Reached last, it's a conclusion."

CONCEPT 13: Reaction to Instruction
  Reaction: "Too generic" (names how output FEELS)
  Instruction: "Name the audience and the action" (names what to CHANGE)
  
  The jump: "What would be PRESENT for this to be right,
  and which part of the setup controls that?"
  
  Three levers: prompt, standing instruction, knowledge base
  If you can't name the lever, it's still a reaction.
```

### HOW C11, C12, AND C13 CONNECT

```
C11 = WHAT went wrong (four causes, told apart by timing)
C12 = The ORDER to check (cheapest first, 5 steps)
C13 = HOW to turn the diagnosis into a lasting fix
       (reaction --> instruction --> name the lever)

Together: the output is bad --> WHEN did it start? --> check causes
cheapest-first --> find the cause --> turn it into an instruction
that names the lever.
```

---

*Part 6 (Concepts 14-15-16-17-18: Persist + Communicate) is the FINAL part. It covers: where fixes live, finding friction, measuring improvement, incident response, and talking to stakeholders. Say "next" when ready.*
