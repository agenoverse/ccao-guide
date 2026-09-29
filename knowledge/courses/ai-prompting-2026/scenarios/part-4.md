---
type: Document
title: "AI Prompting in 2026: Scenario Guide Part 4"
description: "Scenario walkthroughs covering role, tone, and persona prompting to shape how AI communicates."
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
order: 46
---


> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.
>
> **Covers:** Concept 8 (Multimodal: Images & Audio), Concept 9 (Building Small Apps), Concept 10 (Data Analysis / Code Execution)
>
> **Builds on:** Parts 1-3 (Concepts 1-7). Terms already explained there won't get brackets again.

---

## CONCEPT 8: Multimodal -- AI Reads Images and Audio (With Limits)

**CCAO-F Domain: D3 -- Product & Model Selection (12%)**

### THE SCENARIO

Nida is an operations associate at a logistics company. Three tasks land on her desk in one afternoon:

**Task 1 (image input):** A supplier sends a photo of a handwritten invoice [haath se likha hua bill]. Nida uploads it to Claude and asks: "Transcribe this invoice. List each line item with the amount." Claude reads the handwriting cleanly -- gets 14 of 15 line items right. The one it misses is a smudged number in the corner. It doesn't flag the smudge. It confidently reads "3,500" where the actual number is "8,500."

**Task 2 (image input -- fine detail):** A warehouse worker sends a photo of damaged boxes on a pallet [lakri ka takhta jis par saamaan rakhte hain]. Nida asks Claude: "What products are in these boxes? Read the labels." Claude describes the scene well -- "stacked brown boxes, some crushed on the right side, moisture damage visible." But when it tries to read the small printed labels, it invents product names that sound plausible but don't exist in their inventory [godam mein maujood saamaan ki list].

**Task 3 (audio input):** Her manager records a 20-minute voice memo [awaz ka message] after a site visit, rambling through observations about three warehouses. Nida drops the recording into Claude and asks: "Summarise the decisions made, open questions, and action items by owner." Five minutes later she has a structured summary. Two of the action items are wrong -- Claude attributed [kisi aur ke naam lagaya] a comment to the wrong person because two speakers sound similar.

### WHAT HAPPENED HERE?

AI is **multimodal** [text ke alawa images, audio, files bhi samajhta hai] -- it works with images, audio, and files, not just text. But "works with" doesn't mean "works perfectly." Each direction (reading vs. making, images vs. audio) is a separate skill with separate strengths and weaknesses.

### THE CONCEPT

**Image INPUT -- what AI sees well and what it doesn't:**

```
STRONG AT:                              WEAK AT:
                                        
✓ Overall scene and layout              ✗ Fine detail (small labels,
✓ Large, clearly separate shapes            serial numbers, tiny print)
✓ Whiteboard diagrams and notes         ✗ Counting many small objects
✓ Handwritten text (mostly)             ✗ Distinguishing similar items
✓ Receipts, invoices, sticky notes          (gym machines, cable types)
✓ Combining multiple images             ✗ Reading text at image edges
```

**The rule:** Trust AI for the OVERALL SENSE of an image. CHECK the fine detail. When stakes are high, add: "If any text is unclear, mark it `[unclear]` and offer your two best guesses."

**Image OUTPUT -- AI makes images too:**

Two practical tips:
1. **Use a text AI to WRITE your image prompt.** "Generate me a prompt for a professional infographic [tasweeri report] about supply chain flow." The text AI writes richer image prompts than you will on a first try.
2. **Know the failure modes:**

| Failure                                                                   | Example                                     | Mitigation [bachne ka tariqa]                                         |
| ------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------- |
| Scrambled text on signs                                                   | "HAPRY BIRTDAY" instead of "HAPPY BIRTHDAY" | Put text in quotes. Make 3 versions, pick the correct one.            |
| Characters change between frames                                          | Hair color changes panel to panel           | Use models with character consistency. Pass first image as reference. |
| Hand/finger errors                                                        | Six fingers, twisted wrists                 | Ask for hands in pockets or partly out of frame                       |
| Wrong aspect ratio [tasweeri ka shape -- landscape vs portrait vs square] | Square when you wanted wide                 | Always specify: "1024x768 landscape" or "16:9"                        |

**Audio -- the overlooked power tool:**

| Audio Task                        | How Well It Works                    | Watch Out For                                                                    |
| --------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------- |
| Transcribing clear speech         | Excellent                            | Heavy accents, technical jargon [mushkil istilaahaat], multiple speakers at once |
| Identifying who said what         | Decent with 2 speakers, weak with 4+ | Always check before quoting someone by name                                      |
| Detecting tone, sarcasm, emotion  | Improving, not reliable              | Ask AI to flag what it's unsure of                                               |
| Meeting summaries from recordings | Very valuable                        | Attribution errors (wrong person credited). Verify action items.                 |

**The cost ladder (what each type costs in time and money):**

```
CHEAPEST & FASTEST                    MOST EXPENSIVE & SLOWEST

  Text          Audio        Images         Video
  seconds       seconds      tens of        minutes per
  fractions     few cents    seconds        clip, many
  of a cent     per minute   several        cents to
                             cents each     dollars

  You can run   Cheap        No early       Each round
  50 tries in   enough to    stop -- the    is painful.
  an afternoon  ignore       whole image    Put MORE into
                             arrives at     the prompt
                             once           up front.
```

**Key difference:** You can interrupt a text answer mid-stream to save time. You CANNOT interrupt an image -- the whole image arrives at once (because it's a **diffusion model** [shor se shuru ho kar dheere dheere tasweer banaata hai -- starts from noise and removes it step by step]).

### EXAM TRAP

**The trap:** The exam asks which AI capability matches a task. Image-related traps:

- Using AI to read FINE DETAIL in images (small serial numbers, tiny labels) → WRONG. AI sees the big picture, not the fine print.
- Assuming AI-generated images will have correct text on signs → WRONG. Text in AI images is still unreliable. Always check.
- Forgetting that audio attribution (who said what) is weak with many speakers → WRONG. Always verify before quoting.

**The matching rule for multimodal tasks:**

```
WHAT'S THE TASK?

Reading an image for overall sense?     --> AI is good. Use it.
Reading fine text or small details?     --> AI is weak. Verify everything.
Making an image from a prompt?          --> Use text AI to write the prompt first.
Transcribing clear audio?              --> AI is excellent.
Attributing quotes to speakers?         --> AI is weak with 3+ speakers. Verify.
```

### QUICK CHECK

> Nida uploads a photo of a warehouse label and Claude reads the product code as "WH-3847." She can't verify it visually because the photo is blurry. Should she trust Claude's reading?
>
> **Answer:** No. Fine text on a blurry image is exactly where AI is weakest. Claude may have invented a plausible-looking code. She should re-photograph the label clearly, or check the code against the inventory database. AI's confidence on fine detail is NOT a signal of accuracy (same rule as Concept 2).

---

## CONCEPT 9: Building Small Apps With One Prompt

**CCAO-F Domain: D3 -- Product & Model Selection (12%)**

### THE SCENARIO

Ahmed's restaurant group needs a simple tool: a bill splitter. When a corporate lunch arrives, the server needs to split the bill including tax across different cost centres [vibhaag jinka apna budget hota hai -- departments that have their own budget allocation]. Right now they do it on a calculator and get it wrong half the time.

Ahmed is not a software engineer. He opens Claude and types:

```
Build a bill splitter app.
Goal: Split a restaurant bill including tax across
      multiple cost centres.
Input: Total bill, tax amount, names of cost centres
       and how many people from each.
Output: Each cost centre's share, including its portion
        of tax, displayed in a clean table.
```

A working app appears in the side panel. He clicks it. It works. Not perfectly -- the rounding is off by a few rupees and there's no way to add a tip [bakshish]. But it WORKS.

He types: "Add a tip field. Fix the rounding so shares always add up to the exact total." The app updates in place. Two more rounds of "the font is too small on phone screens" and "add a print button" and he has a tool the servers actually use.

Total time: about 40 minutes. Cost: zero. Code written by Ahmed: zero.

### WHAT HAPPENED HERE?

Modern AI can build small apps from a single prompt. Not enterprise [badi company ka] software. Small, useful things that fit on one screen.

### THE CONCEPT

**The recipe is three slots:**

```
GOAL:   What should this thing DO?
INPUT:  What does the user PROVIDE?
OUTPUT: What does the user SEE?
```

The thing that appears in the side panel is an **artifact** [chat se bahar ka kaam ka cheez -- a working object the conversation produced, in a side panel you can edit, share, and download]. Claude calls it Artifacts. ChatGPT and Gemini call it Canvas.

**What artifacts give you:**
- You can EDIT it through conversation ("make the button bigger")
- You can SHARE it by link (no account needed for the viewer)
- You can DOWNLOAD the code (usually a single `.html` file)
- It updates IN PLACE -- the tool edits what's there, not rebuilding from scratch

**What works vs. what's still hard:**

| Works Today | Still Hard |
|-------------|-----------|
| Timers, calculators, splitters | Multiplayer games over the internet |
| Simple games (snake, whack-a-mole) | Apps that need user accounts |
| Flashcard apps, quiz makers | Apps that connect to outside services |
| Data visualisation [data ko tasweeron mein dikhana] dashboards | Apps that save data permanently |
| Personal website (single page) | Anything needing real engineering |

**The line to remember:** Small things that fit on one screen, with no accounts and no outside services, work. Anything past that needs more than one prompt.

**The improvement loop (same as Concept 7, applied to apps):**

```
1. Build with Goal/Input/Output
2. USE the app yourself
3. Notice what's wrong or missing
4. Say it in plain words ("the button is too small")
5. Grade it with a rubric (C6 technique):
   "Score 1-10 on: Is it clear? Is it fun? Does it feel finished?
    Make the single change that raises the lowest score."
6. Repeat until you'd put your name on it
```

### EXAM TRAP

**The trap:** The exam tests whether you know the BOUNDARY of what one-prompt apps can do. If a scenario describes something needing user accounts, live data from external systems, or multi-user collaboration, the answer is NOT "build it with an artifact." The answer involves real engineering or a different approach.

**The matching rule:**

```
CAN THIS BE A ONE-PROMPT APP?

Fits on one screen?                    YES --> Maybe
Needs user accounts or login?          YES --> No. Needs engineering.
Needs live data from external service? YES --> No. Needs a connector/API.
Needs to save data permanently?        YES --> No. Artifacts are session-only.
Multiple users at the same time?       YES --> No. Needs real infrastructure.
```

### QUICK CHECK

> Ahmed's manager asks him to "build an app that connects to our POS system [Point of Sale -- billing machine] and automatically splits bills." Can Claude build this as an artifact?
>
> **Answer:** No. Connecting to an external system (the POS) requires a real API integration, which is beyond a one-prompt app. Claude CAN build the standalone bill splitter (user enters numbers manually), but not the POS-connected version. Know the boundary.

---

## CONCEPT 10: Data Analysis -- Make Sure AI Actually Runs the Code

**CCAO-F Domain: D2 -- Output Evaluation & Validation (21%)**

### THE SCENARIO

Bilal (from Concept 4A) has learned his lesson about uploading all the data. This time he uploads the COMPLETE expense file -- all 300 rows, both tabs -- and asks:

```
What are the top spending categories? Which ones grew
the most this quarter?
```

Claude returns a confident paragraph: "The top category is Travel at approximately PKR 2.3 million, followed by Office Supplies at approximately 1.1 million. Travel grew by roughly 15% quarter-over-quarter [pichle quarter ke muqaable mein]."

The words "approximately" and "roughly" don't bother Bilal. They should.

His manager checks the numbers in Excel. Travel is actually PKR 2.87 million and grew by 23%, not 15%. Office Supplies is third, not second -- IT Equipment is second at PKR 1.4 million. Claude got the ranking wrong, the amounts wrong, and the growth rate wrong.

What happened? Claude GLANCED at the spreadsheet and ESTIMATED. It never wrote code. It never ran a calculation. It produced a confident paragraph with no computation behind it. From the outside, it looked identical to a real analysis.

**Bilal's fix:**

```
Upload the complete expense file. Write and run code to
answer this. Show me the code you ran.

First, tell me the exact row count, column names, and
date range of this file before you analyse anything.
```

Now Claude writes a Python script, runs it, and returns: "Row count: 312. Columns: Date, Category, Amount, Department, Vendor. Date range: 2025-07-01 to 2026-06-30." Those are checkable facts. If the row count is a suspiciously round number (like "about 300") or the column names sound right but are slightly wrong, Claude is guessing, not reading.

### WHAT HAPPENED HERE?

**Code execution** [code likhna aur chalana -- the tool that lets the model write a small program and run it on your data] is a built-in tool, like web search. But unlike web search, the model doesn't ALWAYS use it. It CHOOSES, based on how you phrased the question. On smaller or simpler-looking questions, it sometimes skips the code and answers from a glance -- giving you a confident paragraph with no computation behind it.

This is the **silent failure** of data analysis. A guessed answer reads EXACTLY like a computed one.

### THE CONCEPT

**Three habits that prevent the silent failure:**

```
HABIT 1: ASK DIRECTLY
"Write and run code to answer this. Show me the code you ran."
That one line is the difference between an analysis and a guess.

HABIT 2: CHECK THAT CODE IS THERE
If the answer has no code block, the model probably ran none.
A paragraph of "approximately" numbers = probably a glance.

HABIT 3: ASK FOR A CHECKABLE FACT FIRST
"Tell me the exact row count, column names, and date range
BEFORE you analyse anything."

If the model is really reading the file:
  - Row count is exact (312, not "about 300")
  - Column names are exact (match what you see in Excel)
  - Date range is exact

If it's guessing:
  - Round numbers ("approximately 300 rows")
  - Column names that sound right but are slightly wrong
  - Vague date ranges ("from mid-2025 to mid-2026")
```

**The strongest check of all:**

> "Are you running code on the file, or estimating? If estimating, stop and run code instead."

**What to double-check even WHEN code did run:**

| Check This | Why |
|------------|-----|
| Final totals | Code is precise, but AI may have summed the WRONG column |
| Labels on graphs | Numbers are usually right. Captions are sometimes wrong. |
| Column interpretation | If AI thinks "TXN_AMT" means "transaction amount" when it actually means "transaction account number," the whole analysis is built on sand |
| The code itself | Scan the code AI showed you. Does it filter the right rows? Sum the right column? Use the right date range? |

**The trust ladder for data analysis:**

```
MOST TRUSTWORTHY                       LEAST TRUSTWORTHY

Code ran +         Code ran +          Code ran but        No code
you checked        you saw the         you didn't          visible.
the code           code block          check it            Paragraph
AND the output                                             only.
                                                           
"I verified"       "It computed"       "It probably         "It guessed
                                       computed"            and I can't
                                                            tell"
```

**Treat AI data analysis like work from a sharp junior analyst [tez junior].** Fast and usually right. Still needs a check every time. A guessed answer reads exactly like a computed one. When it's wrong, the mistake usually teaches you something about your data.

### EXAM TRAP

**Trap 1: "Accept the totals since the line items look right."** The exam shows category totals in prose that "look right" -- every individual line item Claude mentions is correct. One answer says accept them.

**Why it's wrong:** Correct line items do NOT guarantee correct totals. Claude may have double-counted rows, skipped a category, or summed the wrong column. The answer: have the totals computed by code Claude runs and shows, then check the rows and categories it used.

This matches Mock Exam Practice Item 2 exactly.

**Trap 2: "Ask Claude to double-check its own arithmetic."** The exam offers this as a validation option.

**Why it's wrong:** Re-asking Claude to check itself uses the SAME mechanism that may have erred. It's like asking someone who guessed to guess again -- they'll often repeat the same guess with more confidence. The fix: code execution, which is deterministic [hamesha same input par same answer deta hai].

**Trap 3: Internal contradiction as a reliability signal.** The exam shows a table saying one thing and the narrative text saying another (e.g., "Unit B at 15% growth" in text but "Unit C at 18%" in the table). 

**Why neither is automatically right:** Both were generated by the same model in the same response. An internal contradiction means SOMETHING is wrong -- go back to the original data. Don't trust the table over the text or vice versa. (Mock Exam 1 Q6)

**Decision tree for data analysis tasks:**

```
AI GAVE ME NUMBERS. CAN I TRUST THEM?

1. Is there a code block visible?
   NO  --> Don't trust. Ask: "Write and run code. Show me the code."
   YES --> Next question.

2. Did I verify a checkable fact first (row count, columns)?
   NO  --> Ask for it now. If the fact is wrong, the analysis is wrong.
   YES --> Next question.

3. Did I check that the code uses the right columns/filters?
   NO  --> Scan the code. Does it match your intent?
   YES --> Probably trustworthy. Spot-check the final totals anyway.
```

### QUICK CHECK

> Bilal asks Claude to analyse 300 rows of expenses. Claude returns a paragraph saying "Travel is approximately PKR 2.3 million." There's no code block. What should Bilal do?
>
> **Answer:** Don't trust it. Re-prompt: "Write and run code to answer this. Show me the code you ran. First, tell me the exact row count and column names." If the row count comes back as "about 300" instead of an exact number, Claude is still guessing.

---

## PART 4 RECAP: How Concepts 8, 9, and 10 Connect

### Within Part 4

```
CONCEPT 8: Multimodal         CONCEPT 9: Small Apps        CONCEPT 10: Code Execution
                              
"AI reads images and          "AI builds working           "AI can run code on
audio -- with limits"         things you can use"          your data -- but only
                                                           if you make sure it does"
       |                            |                            |
       v                            v                            v
Know the BOUNDARY             Know the BOUNDARY             Know the SILENT FAILURE
of what AI can see            of what one prompt            (guessed answer looks
(overall sense YES,           can build (one screen         like computed answer)
fine detail NO)               YES, accounts NO)
       |                            |                            |
       └────────────────────────────┼────────────────────────────┘
                                    |
                                    v
                    ALL THREE share the same lesson:
                    
                    AI's capabilities have BOUNDARIES.
                    The exam tests whether you know
                    WHERE those boundaries are.
```

### Back to Parts 1-3

```
Part 1                  Part 2                Part 3                Part 4

C1: Brief well    -->  C4: Right layer  -->  C7: The Loop     -->  C9: Goal/Input/Output
    (4-part brief)      (context stack)       (iterate)             is the brief for apps

C2: Loud/Quiet/   -->  C4: Upload       -->  C6: Rubric       -->  C10: Code execution
    Secret              full data             forces honesty         forces computation
    (verify)            (not summary)         (not praise)           (not estimation)

C3: 3 Retrieval   -->  C5: Think Hard   -->  C7: Research     -->  C8: The right INPUT
    Modes               (depth lever)         before draft           type for the task
                                                                     (text? image? audio?)
```

### The master rule (same as all parts):

> **Get the right context IN, keep the wrong context OUT.**

- Concept 8: The right INPUT TYPE (image for a photo, audio for a meeting, text for analysis)
- Concept 9: The right SCOPE (one screen, no accounts, no external services)
- Concept 10: The right COMPUTATION MODE (code, not estimation)

### Combined decision flow for exam day:

```
WHICH CAPABILITY MATCHES THIS TASK?

Is the task about READING an image?
  --> Overall sense: yes. Fine detail: verify. (C8)

Is the task about BUILDING a small tool?
  --> One screen, no accounts, no external data: artifact. (C9)
  --> Needs accounts/external data: real engineering.

Is the task about ANALYSING data?
  --> Demand code execution. Check the code block exists. (C10)
  --> "Approximately" in a data answer = probably a guess.

Is the task about MEETING SUMMARIES from audio?
  --> Great for structure. Verify speaker attribution. (C8)

Is the task about GENERATING an image?
  --> Use text AI to write the image prompt first. (C8)
  --> Check text in the image. Make 3 versions.

Does the output CONTRADICT itself (table vs. narrative)?
  --> Trust NEITHER. Go back to original data. (C10)
```

---

**End of Part 4. Next: Part 5 covers Concepts 11 (AI Desktop Apps & Permissions), 12 (Cost, Speed & Model Selection), and 13 (Models Checking Models).**
