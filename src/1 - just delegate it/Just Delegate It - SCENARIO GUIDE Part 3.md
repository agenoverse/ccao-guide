# Just Delegate It -- SCENARIO GUIDE
# Part 3: Give AI More Rope

> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.
>
> **Domain focus:** Concept 7 covers **D6 — Governance, Risk & Responsible Use (15%)**. Concept 8 covers **D5 — Configuration & Knowledge Management (12%)**. Concept 9 covers **D7 — Troubleshooting & Optimization (10%)**.
>
> **Reading time:** ~25 minutes
>
> **Previously:** Part 1 taught you to describe the job (Brief + Loop). Part 2 taught you to give the job material (research, source, deliverable). Now you widen what AI OWNS — its decisions, its memory, and how you fix it when it drifts.

---

## CONCEPT 7: Authority & Plan-First — How Much Does AI Own?

**Exam domain: D6 — Governance, Risk & Responsible Use (15%)**

### THE SCENARIO

Sana is a content manager [content ka kaam sambhalne wali — social media posts, blogs, marketing material] at a skincare startup [naya shuru hua business]. She needs a social media calendar [calendar jo bataye ke kaunsi post, kis din, kis platform par jaye gi] for the next month.

She writes a decent brief — outcome, context, constraints, deliverable. But her Authority line just says: "You decide the best approach."

Claude produces a beautiful 30-day calendar. Sana glances at it — looks great — and forwards it to the design team to start creating visuals.

Three days later, her boss Imran calls:

> "Why is every single post for Instagram? We have 40,000 followers on LinkedIn. And why does Tuesday's post say 'clinically proven to reduce wrinkles by 60%'? We've NEVER made that claim. Legal is going to kill us."

What happened:

1. **Claude silently decided** to focus only on Instagram. It never said "I'm choosing Instagram over LinkedIn." It never asked. It just decided — because Sana's Authority line said "you decide."

2. **Claude invented a product claim.** "Clinically proven to reduce wrinkles by 60%" sounds like marketing copy. It IS marketing copy — the dangerous kind, because it's a health claim [sehat ke baare mein dawa — these have legal consequences] with no evidence behind it.

Both problems came from the same root: **AI made decisions Sana didn't know were being made.**

Now imagine Sana had written this Authority line:

```
Authority: choose the post topics and the order yourself.
Distribute posts across Instagram, LinkedIn, and Twitter
(do not skip any platform without telling me).
Do NOT make any health claims, medical claims, or "proven by"
statements — flag them for me to write myself.
Before starting, list your planned approach and wait for my
go-ahead.
```

Claude now lists its plan: "I'll do 12 Instagram posts, 10 LinkedIn posts, 8 Twitter posts. Topics include..." Sana sees the plan, changes two topics, types "go." Claude runs. No health claims — where it would have written one, it says "[FLAG: health claim needed — Sana to write]."

### WHAT HAPPENED HERE?

Authority has **two faces**, and most people only see one:

```
FACE 1: THE METHOD                    FACE 2: THE BOUNDARIES
"How much of the plan                 "What may AI do
does AI decide?"                      without asking?"
        │                                     │
        ▼                                     ▼
Plan-first: AI shows its             Boundary lines: AI knows
steps, you approve before            what it may decide and
it starts                            what it must ask about
        │                                     │
        ▼                                     ▼
You keep a VETO                      You prevent SILENT decisions
[veto = tumhara na]                  [chupke se faisla — decisions
                                     you never see being made]
```

### THE CONCEPT

#### Face 1: Plan-First

**Plan-first** [pehle plan dikhao] means asking AI to list its steps and wait for your go-ahead before starting.

> "Before you start, list the steps you plan to take, in order, and wait for my go-ahead. Do not begin until I say go."

Why this is the **cheapest moment in any job:**

```
FIXING A MISTAKE IN THE PLAN:    FIXING THE SAME MISTAKE AFTER THE RUN:
  │                                │
  ▼                                ▼
  Cost: 1 minute to read,         Cost: the entire run.
  1 sentence to fix               Redo the whole job.
                                   Maybe the wrong thing was
                                   already sent/published/acted on.
```

**An approved plan is not a cage.** AI may find a better route once it starts — and a good agent often does. What it may NOT do is:
- Cross a line you drew
- Change something that matters without telling you

> **The failure is the silent change, not the change.**

If AI says "I found a better approach — here's what I changed and why," that's fine. If AI quietly changes the plan and you only discover it when the result looks wrong, THAT is the authority failure.

#### Face 2: Boundaries

Four boundary patterns you'll see on the exam:

| Boundary | Why it exists | Example |
|---|---|---|
| **Research, but do not purchase** | Money that moves is hard to move back | "Find the best office chairs. Do NOT place any order." |
| **Draft, but do not send** | Sending creates a promise someone else can see | "Write the client email. Do NOT send it." |
| **Inspect, but do not delete** | Deleting destroys evidence you'd need to check the work | "Review these files. Do NOT delete any." |
| **Choose, but say when you chose** | A silent decision is one you cannot review | "If you pick one vendor over another, say that you chose and why." |

Right now, in a chat, these boundaries are about DECISIONS. But they're written in the form of PERMISSIONS [ijazat — what AI is allowed to do]. Why?

> **Because the same lines become real permissions the day AI can act in the world** — send emails, publish pages, make purchases. The habit starts in the chat. The stakes arrive later.

#### Trust Grows With a Record

| Run # | What you check |
|---|---|
| 1st time | Read the plan AND every step of the result |
| 2nd time | Read the plan, spot-check the result |
| 5th time running the same job cleanly | Just read the plan |
| Never | Stop checking entirely ← THIS IS THE TRAP (see mock Q18) |

From mock exam Q18: A team has been using Claude for three months. Initially they reviewed everything. Now they send Claude-generated client emails without review because "they're always good." This is called an **unstaffed gate** [gate jo koi nahi dekh raha — the review step exists on paper but nobody actually does it]. The exam says this is a PROBLEM, not a success.

#### Four Questions Before AI Touches Real Systems

When AI can reach beyond the chat (through connectors [doosri apps se connection], APIs, or agent tools):

```
1. What may it READ?      (only budget data, or all financial records?)
2. What may it DO?        (draft only, or draft AND send?)
3. Do I trust its SOURCE? (is the data it pulls reliable?)
4. Am I ALLOWED to give   (does my company policy permit this
   it this access?         connection?)
```

These four questions map directly to D6 exam questions about connectors and data access.

### EXAM TRAP

**Trap 1 — "Good track record = more authority."**

The exam shows AI that has been performing well for months. Someone suggests giving it more authority based on past performance. The TRAP: "Since it's been working well, let it send emails directly."

The CORRECT answer: past performance doesn't eliminate the need for human review on irreversible [wapas nahi ho sakti] actions. Good track record means you CHECK LESS OFTEN, not that you STOP CHECKING. Drafting (reversible) and sending (irreversible) are different steps with different risk — track record on one doesn't transfer to the other.

**Trap 2 — "AI didn't wait for go."**

The exam shows someone asking AI for a plan, and AI starts executing immediately instead of waiting. This sounds like a minor issue. The exam says it's an **authority failure** — AI crossed the line the human drew. Even in a chat. Even if the result was good. The process matters, not just the outcome.

**Decision tree for Authority questions:**

```
Is the action REVERSIBLE?
    │
    ├── YES (draft, research, analyze, compare)
    │    → AI can do it, human reviews the result
    │
    └── NO (send, publish, purchase, delete)
         │
         ├── Human must APPROVE before the action
         │
         └── "Draft but do not send" pattern
              (AI does the work, human pushes the button)
```

### QUICK CHECK

> Zain sets up Claude to draft weekly client update emails. After 8 weeks of perfect drafts, he lets Claude send the emails directly without his review.
>
> Week 9, Claude sends an email to a client promising a delivery date the operations team can't meet. The client is now angry.
>
> What went wrong, and what concept from Part 1 does this violate?

**Unstaffed gate.** Zain removed the human review step based on past quality — but "the drafts were always good" is a session judgment (from the Workflow Design course), not a step decision. Sending is irreversible. The **Delegation Loop** (Part 1) says: VERIFY and ACCEPT are YOUR steps. They never transfer to AI, regardless of track record. Zain should have kept reviewing before every send — maybe faster, maybe just a 30-second scan, but never zero.

---

## CONCEPT 8: The Job Again — Projects, Standing Instructions, Knowledge

**Exam domain: D5 — Configuration & Knowledge Management (12%)**

### THE SCENARIO

Usman is a market research associate [market research = market ke baare mein jaankari ikattha karna — prices, competitors, trends]. Every Monday, he runs a competitor price comparison for his manager. His brief:

```
Outcome: updated price comparison of our top 3 competitors.
Context: We sell office supplies in Karachi. Our competitors are
  PaperWorld, OfficeHub, and SupplyLine. Our price list is attached.
Constraints: only prices available on their websites this week.
  Search for current prices.
Authority: choose which products to compare. Flag any product
  where our price is more than 20% higher.
Deliverable: table with product, our price, competitor price,
  difference. Then a 1-paragraph summary.
Verification: mark any price you couldn't find on their website
  as "unverified."
```

Week 1: Usman pastes the brief + his price list. Good result.

Week 2: Usman opens a new chat. Pastes the same brief. Pastes the same price list. Pastes the same company background. Good result.

Week 3: Same. Week 4: Same. Week 5: Same.

He's now pasted the same 15 lines 20 times. His own price list has been attached 5 times. The "mark as unverified" rule has been typed 5 times.

Then Usman gets the flu. His colleague Maryam covers for him. She opens Claude and types:

> "Can you do the weekly competitor price comparison?"

Claude has no idea what she's talking about. No brief. No company background. No price list. No "unverified" rule. Maryam spends 45 minutes recreating the job from Usman's old emails, gets it half-right, and the manager gets a report that's missing two competitors.

### WHAT HAPPENED HERE?

Usman had a **personal habit** — it worked because of HIM, not because of the SETUP. The moment he was gone, the job fell apart.

Everything Usman retyped weekly was the same. It never changed. It belonged somewhere AI reads by itself.

### THE CONCEPT

Repetition asks for **two things**:

```
THING 1: Context you keep retyping
          │
          └──▶ Put it in a PROJECT
               (where AI reads it by itself)

THING 2: A clock
          │
          └──▶ Scheduled tasks
               (where the job runs automatically)
               [This course teaches Thing 1 only.
                Thing 2 is in General Agents course.]
```

#### What Is a Project?

A **Project** [ek jagah jo tumhari files aur rules AI ko har baar khud se padhwa deti hai] is a space in an assistant that holds:

| Component | What it is | Example |
|---|---|---|
| **Knowledge** [files jo AI padh sakta hai] | Files AI may read in every chat inside this Project | Usman's price list, company background document |
| **Standing instructions** [hamesha waale rules] | Rules written once, followed in every chat | "Mark anything unconfirmed as unverified" |

Every chat inside the Project starts **already informed** — without you pasting anything.

#### What Goes Where?

```
┌────────────────────────────────────────────────────────────┐
│                    WHERE THINGS LIVE                        │
├──────────────────┬─────────────────────────────────────────┤
│ STANDING         │ Rules that DON'T change between runs    │
│ INSTRUCTIONS     │ "Mark unconfirmed prices as unverified" │
│                  │ "Flag if our price is 20%+ higher"      │
│                  │ "Always include a source for each price" │
├──────────────────┼─────────────────────────────────────────┤
│ KNOWLEDGE        │ Sources that DON'T change between runs  │
│ (files)          │ Your company's price list                │
│                  │ Company background / brand guidelines    │
│                  │ Template for the weekly report           │
├──────────────────┼─────────────────────────────────────────┤
│ THE CHAT         │ What DOES change — today's job           │
│ (each session)   │ "Run this week's comparison"             │
│                  │ "Add a new competitor: PackPro"          │
│                  │ "This week, also check prices in Lahore" │
└──────────────────┴─────────────────────────────────────────┘
```

**The rule:**

> Instructions for rules that don't change. Knowledge for sources that don't change. A Project for one stream of work. The chat for today's job.

#### The Repetition Ladder

```
1st time: type everything in the chat (learning the job)
    │
2nd time: save the brief outside the chat (a note, a document)
    │
3rd time: if you're pasting the same context AGAIN →
    │       put it in a Project
    │
    ├── Rules → standing instructions
    ├── Source files → knowledge
    └── Today's specific request → the chat
    │
From now on: one message runs the whole job
```

#### Stored Context Is a Responsibility

What you put in a Project **stays there** and shapes every answer inside it. This means:

| If you store... | Every result will... |
|---|---|
| An outdated price list | Compare against WRONG prices |
| A rule that no longer applies | Follow a WRONG rule |
| A competitor that went out of business | Include a DEAD competitor |

> **Once a month, look at what you stored AND what AI remembered about you. Remove what is no longer true. A wrong line in a Project is a wrong line in every result the Project produces.**

AI assistants also keep a **memory** [yaaddasht — things AI remembers about you across chats] of their own, if memory is on. You can read, edit, and delete it in settings. Stale memory is as dangerous as stale knowledge.

#### Two Things That Look Like Projects But Aren't

| What repeats | Where it goes | NOT a Project |
|---|---|---|
| The CONTEXT (same background, same source files) | **Project** (knowledge + standing instructions) | ✓ This IS a Project |
| The METHOD (same steps in same order every time) | **Skill** [ek saved method — taught in Skills & Connectors course] | Not just a Project |
| The TEAM'S process (multiple people doing steps) | **Workflow** [poori team ka documented process — taught in Workflow Design course] | Not a Project at all |

This course stops at the Project. Skills and workflows are other courses.

### EXAM TRAP

**Trap 1 — "The never-updated Project."**

The exam shows someone who set up a Project months ago with standing instructions and knowledge files. The results have gotten worse over time. The TRAP answers blame the model or suggest switching tools.

The CORRECT answer: **review the Project's stored context** — the knowledge files may be outdated, the standing instructions may no longer match current requirements. Stale stored context produces stale results.

This maps directly to mock exam Q22 (D4): When reporting requirements change, update Claude's instructions and knowledge sources, then verify the next output matches the new format. Don't keep manually patching — fix the configuration.

**Trap 2 — "Everything goes in the Project."**

The exam shows someone putting today's specific request into standing instructions. This OVER-stores — the instruction applies to THIS job but not EVERY job. Next week's job will be shaped by a rule that only applied this week.

The test: **"Would I want this line in EVERY result from this Project?"**
- Yes → standing instruction
- No → put it in the chat message for today's job

### QUICK CHECK

> Maryam takes over Usman's weekly competitor report. She sets up a Project with the price list as knowledge and "mark anything unconfirmed as unverified" as a standing instruction. This week, the manager also wants prices in Lahore (normally it's just Karachi).
>
> Where should Maryam put "also check Lahore prices this week"?

**In the chat, not in the standing instructions.** This is a one-time request. If she puts it in standing instructions, EVERY future weekly report will include Lahore — even when the manager only wanted it this week. The test: "Would I want this in every result?" No → it goes in the chat message for today's run.

---

## CONCEPT 9: Intervene When AI Goes Wrong — The Six Moves

**Exam domain: D7 — Troubleshooting & Optimization (10%)**

### THE SCENARIO

Nadia is an event coordinator [events ka intezaam karne wali]. She's planning the company's annual team-building retreat [team ke rishtay mazboot karne ka trip] for 50 people. She writes a solid brief and runs it. Let's watch how AI drifts — and how each drift gets a different fix.

**Drift 1: It answered a different question.**

Nadia asked for: "A plan for a 2-day team-building retreat near Islamabad for 50 people."

Claude gave her: a general article about "why team building matters" with statistics and psychology research.

Nadia's fix: **STOP. Restate the outcome.**

> "Stop. I don't need an article about team building. I need a plan: venue options, schedule for 2 days, activities, meals, estimated cost per person. Start over."

**Drift 2: One fact is wrong.**

Claude's plan includes: "Patriata Chairlift — open year-round, PKR 500/person."

Nadia knows Patriata has seasonal closures [mausam ki wajah se band hota hai]. The price might be outdated too.

Nadia's fix: **CORRECT. Name the error and what should replace it.**

> "Patriata Chairlift has seasonal closures — check if it's open in October. And search for the current ticket price, not from memory."

NOT this: "Please redo the entire plan." That's overkill. One fact was wrong — one sentence fixes it.

**Drift 3: It's heading the wrong way but isn't wrong yet.**

Claude is listing high-budget luxury resorts. Nadia's brief said "budget-friendly." The suggestions aren't technically wrong — they ARE retreat venues — but the direction is wrong.

Nadia's fix: **REDIRECT. Name the direction, not the whole job again.**

> "These are too expensive. Focus on venues under PKR 8,000/person/night. Keep the rest of the plan."

NOT this: "Here is my entire brief again, please start over." She doesn't need to restate everything. Just the direction.

**Drift 4: The job itself was wrong.**

Claude produces a great plan for 50 people. Then Nadia's boss says: "Actually, make it 80 — we're including the Lahore office too."

Nadia's fix: **CHANGE THE REQUIREMENT, and say that you changed it.**

> "Update: the group is now 80 people, not 50. The Lahore team will also attend. Check if the venues you suggested can handle 80. If not, suggest alternatives."

The key: Nadia says "I changed the requirement," not "you got the number wrong." AI wasn't wrong — the job changed.

**Drift 5: It can't do the step at the level needed.**

Claude's budget calculations [paison ka hisaab] keep coming out wrong. It adds 50 people × PKR 8,000 and gets PKR 350,000 instead of PKR 400,000. Nadia corrects it twice. Same mistake.

Nadia's fix: **ESCALATE — turn on thinking mode, or use a stronger model.**

> [Turns on extended thinking / switches from Haiku to Sonnet or Opus]
> Same brief again. Now the math is right.

On a free plan where a stronger model isn't available, the escalate move becomes: **make the job smaller.**

> "Calculate ONLY the accommodation cost for 50 people × 2 nights × PKR 8,000. Show your work."

One step at a time, each one checked. The brief is the same — the scope is reduced.

**Drift 6: It keeps failing even after escalation.**

Claude can't find current venue availability. It makes up phone numbers. Even with the strongest model, it's guessing instead of finding.

Nadia's fix: **TAKE THE JOB BACK. Some jobs are yours.**

She calls three venues herself, gets real quotes, and uses Claude only for formatting the comparison into a table. AI does what it's good at (formatting). Nadia does what she's good at (talking to humans on the phone).

### WHAT HAPPENED HERE?

Six different drifts. Six different moves. Each matched to the symptom:

### THE CONCEPT

```
┌─────────────────────────────────────┬───────────────────────────────────────┐
│ WHAT YOU SEE (the symptom)          │ THE MOVE (the fix)                    │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ It answered a different question    │ 1. STOP — restate the outcome in     │
│ entirely                            │    one line                           │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ One fact or one line is wrong       │ 2. CORRECT — name the error and      │
│                                     │    what should replace it             │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ It's heading the wrong way          │ 3. REDIRECT — name the direction,    │
│ but isn't wrong yet                 │    not the whole job again            │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ The job itself was wrong            │ 4. CHANGE THE REQUIREMENT — say      │
│ (requirements changed)              │    that YOU changed it                │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ It can't do the step at             │ 5. ESCALATE — turn on thinking,      │
│ the level needed                    │    use a stronger model, or make the  │
│                                     │    job smaller                        │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ It keeps failing after              │ 6. TAKE IT BACK — some jobs           │
│ escalation                          │    are yours                          │
└─────────────────────────────────────┴───────────────────────────────────────┘
```

### The Rules of Intervention

**Rule 1: Use the SMALLEST move that works.**

```
WRONG APPROACH:                   RIGHT APPROACH:
──────────────                    ───────────────
One price is wrong?               One price is wrong?
→ "Start the whole               → "The price for Venue A
   plan over"                       is wrong. Search for
                                    the current price."
Cost: the entire run              Cost: one message
```

**Rule 2: Check the FIX in the RESULT, not in AI's description.**

> "I have corrected the table" is a SENTENCE. Look at the TABLE.

AI will say "done" when the fix didn't actually happen. This is one of the most common failures. The exam specifically tests this: "AI said it corrected the error. What should the associate do next?" The answer is ALWAYS: **verify the correction in the output itself.**

**Rule 3: Write the lesson into the brief.**

After you fix a drift, ask: **"What line would have PREVENTED this?"**

That line is a constraint or authority rule you've now learned. Write it into your brief. Next time, the drift won't happen.

```
DRIFT → FIX → LESSON → BRIEF UPDATE

"Claude suggested luxury venues"
    → "Focus on under PKR 8,000"
        → Lesson: budget wasn't in constraints
            → Add: "Constraints: venues under
               PKR 8,000/person/night"
```

This is how briefs get better over time. Every drift teaches you a line you were missing.

### The Move People Miss: ESCALATE

> **Sometimes "AI failed" means "I used the wrong level."**

| Situation | What people do | What they should do |
|---|---|---|
| AI's math is wrong | "AI can't do math" and give up | Turn on thinking mode or use a stronger model |
| AI's analysis is shallow | "AI isn't smart enough" | Switch from Haiku to Sonnet or Opus |
| Free plan, no stronger model | "Nothing I can do" | Make the job SMALLER: one step at a time, each checked |

The escalation path:

```
Start: fast model / regular mode
    │
    │ not good enough?
    ▼
Try: turn on extended thinking
    │
    │ still not good enough?
    ▼
Try: stronger model (Haiku → Sonnet → Opus)
    │
    │ still not good enough?
    ▼
Try: make the job SMALLER (one step at a time)
    │
    │ still failing?
    ▼
TAKE THE JOB BACK — this one is yours
```

### EXAM TRAP

**Trap 1 — "Skip to the nuclear option."**

The exam shows a small problem (one wrong fact). The TRAP answer says "start the job over" or "switch to a different AI tool." These are Move 1 (Stop) and Move 6 (Take it back) — the biggest, most expensive moves.

The CORRECT answer is Move 2 (Correct) — name the one error and what should replace it. **The exam rewards the smallest effective fix.**

**Trap 2 — "AI said it fixed it."**

The exam shows someone correcting an error. AI responds: "You're right, I've updated the table. The corrected price is now reflected." The TRAP answer says "the error is now fixed."

The CORRECT answer: **check the actual output.** AI claiming a fix ≠ the fix actually happening. This is tested in almost every D7 question.

**Trap 3 — "AI failed, so abandon the task."**

The exam shows AI struggling with a task. The TRAP answer says "this task isn't suitable for AI" or "do the entire thing manually." The CORRECT answer usually involves escalation (stronger model, thinking mode) or decomposition [tukdon mein todna — breaking the task into smaller pieces] before giving up entirely.

The exam principle: **Don't abandon the task. Find a safe way to proceed.**

```
EXAM DECISION TREE: "AI's output has a problem"

What kind of problem?
    │
    ├── Wrong topic entirely → STOP (restate outcome)
    │
    ├── One fact wrong → CORRECT (name error + fix)
    │
    ├── Wrong direction → REDIRECT (name direction only)
    │
    ├── Requirements changed → CHANGE the requirement
    │
    ├── Quality too low → ESCALATE
    │   ├── Turn on thinking
    │   ├── Use stronger model
    │   └── Make the job smaller
    │
    └── Still failing after all that → TAKE IT BACK
        (but only for THAT step — AI can
         still do the other steps)
```

### QUICK CHECK

> Ahmed's brief asked Claude for a comparison of 5 project management tools. Claude's result is good, but it included Trello twice — once as "Trello" and once as "Trello by Atlassian" — with slightly different feature lists.
>
> Which intervention move should Ahmed use, and what should his message say?

**Move 2: CORRECT.**

Ahmed's message: "Trello and Trello by Atlassian are the same product. Merge them into one row and replace the duplicate with a 5th tool."

NOT "Start over" (overkill). NOT "The whole comparison is unreliable" (overreaction to one error). One fact wrong → one correction. **The smallest message that fixes it.**

Then Ahmed should add a line to his brief for next time: "Do not list the same tool twice under different names." The drift taught him a constraint he was missing.

---

## PART 3 RECAP: How These Pieces Connect

```
GIVING AI MORE ROPE
         │
         ├── HOW MUCH CAN IT DECIDE? (Concept 7 — Authority)
         │   │
         │   ├── Face 1: Plan-first (show me the plan, wait for go)
         │   │   → Cheapest moment to fix = before the run
         │   │
         │   ├── Face 2: Boundaries (research ≠ purchase, draft ≠ send)
         │   │   → Today's decisions become tomorrow's permissions
         │   │
         │   └── Trust grows with a record, but NEVER reaches
         │       "stop checking on irreversible actions"
         │
         ├── WHAT DOES IT REMEMBER? (Concept 8 — Projects)
         │   │
         │   ├── Standing instructions = rules that don't change
         │   ├── Knowledge = source files that don't change
         │   ├── The chat = today's specific job
         │   │
         │   └── Stored context is a RESPONSIBILITY
         │       → Wrong line in Project = wrong line in every result
         │       → Review monthly. Remove what's outdated.
         │
         └── HOW DO I FIX IT? (Concept 9 — Intervene)
             │
             ├── 6 moves: Stop, Correct, Redirect,
             │   Change requirement, Escalate, Take it back
             │
             ├── Use the SMALLEST move that works
             │
             ├── Check the fix in the RESULT, not AI's description
             │
             └── Write the lesson into the brief
                 → Every drift teaches a missing line
```

### The story so far:

**Concept 7 (Authority)** taught you the two faces of AI ownership:
Face 1 is the METHOD — use plan-first so you see and approve the approach before it runs. Face 2 is the BOUNDARIES — "draft but don't send," "choose but say when you chose." Trust grows with a record, but the review gate on irreversible actions **never closes**.

**Concept 8 (Projects)** taught you to stop retyping:
The 3rd time you paste the same context, put it where AI reads it by itself. Standing instructions for rules. Knowledge for source files. The chat for today's request. **But stored context is a responsibility** — review it monthly, because a wrong line in a Project produces a wrong line in every result.

**Concept 9 (Intervene)** taught you the six moves:
Stop, Correct, Redirect, Change the requirement, Escalate, Take it back. The symptom tells you the move. Use the smallest one that works. **Escalate is the one people miss** — "AI failed" often means "I used the wrong level." And after every fix: write the lesson into the brief.

### How these three concepts map to the Delegation Loop:

| Loop step | Which concept? | What it means |
|---|---|---|
| DEFINE | Concept 7 (plan-first) | See the plan before the run |
| OBSERVE | Concept 7 (authority) | Watch for silent decisions |
| INTERVENE | Concept 9 (6 moves) | Fix the drift with the smallest message |
| VERIFY | Concept 9 (check the fix) | "AI said it fixed it" ≠ actually fixed |
| ACCEPT | Concept 7 (boundaries) | Only accept if boundaries were honored |
| Next run | Concept 8 (Projects) | Save what doesn't change |

### Four rules to take to the exam from Part 3:

| # | Rule | When the exam tests it |
|---|---|---|
| 1 | Plan-first: cheapest moment to fix = before the run | When they ask about reviewing AI's approach before execution |
| 2 | Draft ≠ send. Good track record ≠ skip the gate | When they show someone removing human review after months of good results |
| 3 | Smallest move that works. Escalate before you give up | When AI produces a bad result and the options range from "correct one fact" to "abandon the task" |
| 4 | Stale Project = stale results. Review stored context monthly | When results from a long-running Project have degraded over time |

---

**Next up — Part 4: You Are the Supervisor.** The loop ends where it began — with you. Concept 10 gives verification a proper method (Identify → Trace → Challenge → Decide). Concept 11 tests whether your brief can survive a different AI entirely. And the Delegation Record ties the whole course into one page you keep.


