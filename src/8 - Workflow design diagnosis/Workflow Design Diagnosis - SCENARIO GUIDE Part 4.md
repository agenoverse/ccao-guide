# Workflow Design & Diagnosis -- SCENARIO GUIDE
# Part 4: BUILD + ESCALATION (Concepts 9-10)

> This is the shortest part. Two clean concepts: how to build things with AI (the loop), and how to know when to stop building and hand it to engineering.

---

## CONCEPT 9: The Build Loop -- Ideate, Prototype, Feedback, Refine

### THE SCENARIO

Kamran works at a retail company [dukaan ya chain of stores]. His team tracks five key business metrics [numbers jo company ki performance dikhate hain -- jaise monthly sales, customer satisfaction score, return rate, etc.] every week. Currently, each analyst opens a spreadsheet, copies numbers, makes charts, and emails a PDF. It takes an hour per person.

Kamran's idea: let AI build a dashboard [ek interactive screen with charts and numbers] as an **artifact** [AI ke andar hi bana hua chhota sa working web page -- you can see and interact with it inside the chat].

He doesn't get the perfect dashboard in one try. Nobody does. AI is a **design partner** [milke kaam karne wala], not a vending machine [button dabao, cheez nikle]. You get a solution by running a loop.

### THE BUILD LOOP

```
    +----------+
    |  IDEATE  |  Generate options / ideas
    +----+-----+  [mukhtalif options sochna]
         |
         v
    +----------+
    |PROTOTYPE |  Make ONE idea concrete enough to react to
    +----+-----+  [ek idea ko itna real banao ke tum react kar sako]
         |
         v
    +----------+
    | FEEDBACK |  See what's WRONG with it
    +----+-----+  (you couldn't know this in advance)
         |        [pehle se nahi pata tha ke yeh problem hogi]
         v
    +----------+
    |  REFINE  |  Fix that specific thing
    +----+-----+
         |
         +-------> next cycle (back to top)
```

### KAMRAN'S THREE CYCLES

**CYCLE 1: "Build it"**

Kamran types:
> "Build a dashboard artifact showing these five metrics from the attached data, with a chart for each."

What comes back: five charts, readable, nicely formatted, roughly right.

Everyone on the team sees it and says "wow, this is great!"

**This is the cycle that makes people overconfident.** You haven't asked for anything hard yet. The first cycle almost always works because it's the simplest version.

---

**CYCLE 2: "Add a filter and totals"**

Kamran asks for a date-range filter [tarikh ke hisaab se data chhan-no -- like "show me only March to June"] and a totals row [sab numbers ka total neeche].

The filter works perfectly.

The totals row ALSO looks perfect. Numbers are formatted, right size, everything lines up beautifully.

One analyst, Sana, knows from experience that the "Total Returns" number should be around 12,000. The dashboard shows 10,400. She flags it.

They check. The number is wrong.

**What happened:** The totals were **written** [AI ne andaaza lagaya] rather than **computed** [hisaab kiya through actual code]. On the page, a written number and a computed number look EXACTLY the same (Concept 3). There was no error message. No red flag. The number was the right SIZE, right FORMAT, right PLACE. Just wrong.

**Why a "better prompt" would NOT fix this:**

This is NOT a description problem [jab tum ne cheez sahi se describe nahi ki]. This is a **feature problem** [galat tool use ho raha hai]. The totals row needs **code execution** [AI actually code likhay, chalay, aur calculated result dikhaay], not better wording.

No matter how perfectly Kamran describes what he wants, if the totals are generated in prose instead of computed in code, they can be wrong. Describing "please make sure the totals are accurate" doesn't change HOW the number is produced. It's like asking a person to "guess more accurately" -- the fix isn't guessing better, it's using a calculator.

---

**CYCLE 3: "Brand colors and print layout"**

Kamran asks for the company's brand colors [company ke official rang] and a print-friendly layout [aisa design jo paper pe print karne pe bhi acha lagay].

Works first time. One sentence each.

**Why this worked:** These ARE description problems. The AI had the capability to do both. It just needed to be told. Better describing = better result.

---

### THE CRITICAL DISTINCTION

```
+---------------------------+---------------------------+
|   DESCRIPTION PROBLEM     |   FEATURE PROBLEM         |
|                           |                           |
| "I described it badly"    | "This needs a different   |
|                           |  capability"              |
|                           |                           |
| FIX: describe it better   | FIX: use the right        |
| (better prompt)           | feature (like code         |
|                           | execution for numbers)     |
|                           |                           |
| Cycle 3 was this:         | Cycle 2 was this:         |
| - brand colors            | - totals row              |
| - print layout            | - any calculation         |
|                           |                           |
| Better words --> better   | Better words --> SAME     |
| result                    | wrong result, just more   |
|                           | confidently written       |
+---------------------------+---------------------------+

TELLING THESE TWO APART IS THE SKILL.
Part 5 (Diagnose) gives you the procedure for doing it.
```

### WHY CYCLE 2 IS DANGEROUS

Cycle 2 is the realistic failure in a build loop. Here's why it's scarier than a crash or an error message:

```
LOUD FAILURE:                    SILENT FAILURE (Cycle 2):
- Error message appears          - No error
- Something visibly breaks       - Everything looks right
- You KNOW something is wrong    - You DON'T know
- Teaches you where to look      - Teaches you NOTHING
                                 - Reaches real use because
                                   there was nothing to catch it
```

A loud failure is a gift. It tells you where to look. The dangerous failure is the one that PASSES review because the output was smooth, formatted, and confident.

### RUN THE LOOP INSIDE A PROJECT

```
SCATTERED CHATS:              INSIDE A PROJECT:
                              [Project = saved workspace with
Chat 1: "Here's my data..."   files and instructions for one
Chat 2: "Here's my data..."   kind of work]
Chat 3: "Here's my data..."
                              - Background stays stable
Each round restarts from      - Limits stay stable
a slightly different          - Earlier decisions carry forward
understanding                 - You build ON TOP of progress
                              
Result: a pile of drafts      Result: an actual solution
```

### EXAM TRAP

**Trap 1:** A scenario where output looks right but numbers are wrong. The tempting answer: "write a better prompt" or "be more specific." The exam answer: this is a feature problem, not a description problem. Move the calculation to code execution.

**Trap 2:** A scenario where the FIRST cycle works great and someone wants to deploy [production mein laagoo karna -- real use mein daalna] it immediately. The exam wants you to see: the first cycle is the easy one. You haven't tested anything hard yet. Overconfidence from Cycle 1 is a trap.

**Trap 3:** Someone keeps reprompting [baar baar naye tareeqe se likhna] to fix a problem that isn't a prompt problem. The exam rewards recognizing WHEN to stop changing words and change the tool instead.

### QUICK CHECK

> An AI-built report has a chart that shows the wrong trend line [trend line = line jo dikhati hai ke data upar ja raha hai ya neeche]. The analyst rewrites the prompt three times, each time more specific. The trend line is still wrong. What should they do?

Stop reprompting. This is a feature problem, not a description problem. The trend line should be COMPUTED from the data using code execution, not generated as a visual guess. No amount of describing "please make the trend line accurate" changes HOW the line is produced.

---

## CONCEPT 10: When It Outgrows Prompt-and-Iterate

### THE SCENARIO

Remember Kamran's dashboard from Cycle 1? Let's follow what happens over 6 months.

**Month 1:**
Kamran's team of 5 analysts uses the dashboard internally. If it breaks, Kamran fixes it in 10 minutes. No big deal.

**Month 3:**
The finance team [finance department -- paisa, budget, accounts dekhne wale] hears about it. They ask Kamran to add their metrics too. Now 15 people use it.

**Month 4:**
The sales team [sales department -- bechne wale log] wants in. They need their own view with different filters. Kamran adds it. 30 people now.

**Month 5:**
The VP of Operations [operations ka bara boss] starts using numbers from the dashboard in her monthly board presentation [board of directors -- company ke sab se bade faisla karne walon ke saamne]. She assumes the numbers are always current and always correct.

**Month 6:**
Monday morning. The dashboard is down [kaam nahi kar raha]. 30 people can't do their weekly review. The VP's board presentation is tomorrow and she needs updated numbers. Kamran is on vacation.

Nobody else knows how the dashboard works. There's no documentation [likha hua guide]. No access control [kaun dekh sakta hai, kaun nahi -- koi control nahi]. No backup [agar kharab ho jaay toh wapas laane ka tareeqa nahi]. No guarantee it does today what it did in March [koi yakeen nahi ke aaj bhi waise hi kaam karega].

**What happened?**

The dashboard was never DESIGNED to be infrastructure [bunyaadi system jis pe doosre log depend karte hain]. It was a small internal tool for 5 people. But it BECAME infrastructure when other people started depending on it. And nobody marked the moment it stopped being small.

### THE CONCEPT: The Escalation Signal

**Dependency** [jab doosre log tumhare tool pe depend ho jaayein] is the **escalation signal** [wo signal jo batata hai ke ab yeh kaam aage bhejana chahiye]. Once other people RELY on something as infrastructure, it has requirements [zarooriyaat] it never had before:

```
WHEN IT WAS SMALL:              WHEN OTHERS DEPEND ON IT:
(prompt-and-iterate is fine)    (needs engineering)

- 5 people use it               - 30 people use it
- If it breaks, you fix it      - If it breaks, WHO fixes it?
- No uptime requirement          - Must be UP every Monday morning
  [kab band ho jaye, fark          [uptime = kitni der chalu rehta hai]
   nahi padta]                  
- No access control              - Who should/shouldn't see this?
  [koi bhi dekh le, fark        - VP puts numbers in board report
   nahi padta]                    --> numbers MUST be correct
- Your side project              - Company INFRASTRUCTURE
```

### ESCALATING IS CORRECT, NOT A FAILURE

```
WRONG INSTINCT:                  RIGHT ANSWER:
"I should handle this            "This has outgrown what I should
 myself, I built it"              maintain by prompt. It needs
                                  developer/architect expertise."
                                  [developer = code likhne wala
                                   architect = system design karne wala]

The FAILURE is the opposite:
Keeping it running by prompt AFTER
other people depend on it, because
nobody marked the moment it stopped being small.
```

> **Escalating to developer or architect expertise is a correct answer on the exam, not an admission of failure.**

The exam will present scenarios where the right action is "hand this to engineering." Don't be afraid to pick that answer. The exam rewards knowing your limits.

### TWO SIGNALS THAT SOUND ALIKE (but point to different places)

```
SIGNAL 1: "Other people now depend on this"
  MEANS:  It's infrastructure. Needs ENGINEERING.
  GO TO:  Developer or architect expertise
          (past what this course covers)
          
SIGNAL 2: "I've solved this the same way three times"
  MEANS:  The shape is stable. Can be MANUFACTURED.
  GO TO:  Turn it into a Skill or worker
          [repeated kaam ko save kar do taake har dafa same tareeqe se ho]
          (covered in the Skills & Connectors course)
```

These sound similar but are DIFFERENT problems:

| | Signal 1: Dependency | Signal 2: Repetition |
|---|---------------------|---------------------|
| **The question** | Who is exposed [kis ko nuksaan ho sakta hai]? | Has the method stopped changing? |
| **The answer** | Engineering (uptime, access, reliability) | A Skill (same steps, automated) |
| **The risk of ignoring** | System goes down, many people affected | Wasted time doing same thing repeatedly |

### THE SCENARIO CONTINUED: What Kamran Should Have Done

```
Month 3 (when finance team asked for access):

THIS WAS THE MOMENT. Right here.
The tool went from "Kamran's thing" to "something other people depend on."

Kamran should have said:
"This dashboard is working well for our team. Now that other
 departments want to use it, it needs proper engineering:
 access control, uptime monitoring, documentation, and
 someone other than me who can fix it. Let's hand this to
 the dev team to build properly."

Instead, Kamran kept adding features by prompt.
By Month 6, it was infrastructure with none of the infrastructure requirements met.
```

### EXAM TRAP

**Trap 1:** A scenario where a tool is growing in users/importance. The tempting answer: "add more features" or "improve the prompts." The exam answer: recognize the escalation signal (other people depend on it) and hand it to engineering.

**Trap 2:** A scenario where someone has solved the same task three times. The tempting answer: "escalate to engineering." The exam answer: this is signal 2 (repetition), not signal 1 (dependency). Turn it into a Skill, don't escalate to engineering. The exam tests whether you can tell these apart.

**Trap 3:** A scenario where someone says "I built it, so I should maintain it." The exam wants you to see: ownership of the original build doesn't mean you should maintain infrastructure. Escalating is the responsible answer.

### QUICK CHECK 1

> A marketing assistant built an AI workflow that generates weekly social media posts. It works great for her. The head of marketing [marketing ka boss] now wants the entire 12-person team to use it, with consistent brand voice across all posts. What should happen?

This is the escalation signal. One person's tool is becoming 12 people's infrastructure. It needs: consistent configuration (so brand voice doesn't vary by person), someone responsible for maintenance, and probably a properly configured shared Project with Skills and standing instructions at minimum. If it's getting complex enough, it may need developer involvement.

### QUICK CHECK 2

> An analyst builds the same quarterly report every 3 months. Same data source, same format, same calculations. Each time he opens a new chat and types similar prompts. What signal is this?

Signal 2: repetition. The shape is stable [tareeqa har dafa same hai] and the method has stopped changing. This should become a Skill (saved procedure that runs the same way every time), NOT escalated to engineering. There's no dependency signal here -- nobody else relies on it.

### QUICK CHECK 3

> A team built an internal scheduling tool [time/meeting schedule karne wala tool] using AI artifacts. Three people used it. Then HR adopted it for company-wide interview scheduling. The tool crashes once a week but "usually comes back quickly." Is this fine?

No. This is infrastructure now (HR + company-wide = many people depend on it). "Usually comes back quickly" is not an acceptable uptime guarantee [kitni der chalu rehna zaroori hai] for something that affects hiring across the company. Escalate to engineering. They need: reliability, someone on call [jab kharab ho toh kaun theek karay], and proper hosting [sahi jagah pe chalana, not inside a chat].

---

## PART 4 RECAP

```
CONCEPT 9: The Build Loop
  - Ideate --> Prototype --> Feedback --> Refine --> repeat
  - AI is a design partner, not a vending machine
  - Run the loop inside a Project (not scattered chats)
  - Cycle 1 almost always works (DON'T get overconfident)
  - The dangerous failure is SILENT (looks right, is wrong)
  - THE KEY SKILL: telling description problems from feature problems
    - Description problem --> better prompt fixes it
    - Feature problem --> need a different capability (like code execution)

CONCEPT 10: Escalation
  - DEPENDENCY = the escalation signal
  - When others depend on your tool, it's infrastructure
  - Infrastructure needs engineering (uptime, access, docs, reliability)
  - Escalating IS the correct answer, not a failure
  - Don't confuse with repetition signal:
    - Others depend on it --> engineering
    - Same task 3 times --> Skill
```

### HOW C9 AND C10 CONNECT

```
C9 is the BUILD phase:
  You run the loop, improving cycle by cycle.
  You catch description vs feature problems.
  
C10 is the STOP signal:
  At some point, the thing you're building by loop
  becomes something other people rely on.
  That's when you stop building by prompt
  and hand it to engineering.

The BUILD LOOP is not meant to run forever.
There's a moment to hand it off.
```

---

*Part 5 (Concepts 11-12-13: Diagnose -- Four Causes, the Diagnostic Sequence, Reaction to Instruction) is next. This is the core of Domain 7 (Troubleshooting). Say "next" when ready.*
