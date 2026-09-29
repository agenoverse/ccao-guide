# AI Prompting in 2026 -- SCENARIO GUIDE
# Part 2: THE CONTEXT GAME & THINKING MODES (Concepts 4-5)

> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.
>
> **Covers:** Concept 4 (Context Is the Whole Game), Concept 5 (Reasoning / "Think Hard")
>
> **Builds on:** Part 1 (Concepts 1-3). Terms already explained there won't get brackets again.

---

## CONCEPT 4: Context Is the Whole Game

**CCAO-F Domains: D5 -- Configuration & Knowledge Management (12%) + D7 -- Troubleshooting & Optimization (10%)**

Concept 4 is the biggest idea in the entire course. It has five parts. Each part gets its own mini-scenario so you can digest it in pieces.

---

### 4A: The Context Window & the 6 Layers

#### THE SCENARIO

Bilal is a finance associate [accounts/paison ka kaam karne wala] at a hotel group. His manager hands him a 300-row expense export and says, "Ask Claude to summarise spending by category -- these totals will decide next quarter's [agle teen maheeney ka] budget cuts."

Bilal pastes the spreadsheet into Claude. Claude returns category totals in neat prose. Every line item Claude mentions looks right. Bilal sends the totals to his manager.

The next day, the manager calls him in. The totals are wrong. Claude added up some rows twice and skipped an entire tab of the spreadsheet that Bilal forgot to include. The tab he left out? Travel expenses -- the largest category.

Bilal says, "But I gave it the file!"

His manager replies, "You gave it ONE file. The travel expenses were in a SECOND file. Claude can't know what you didn't give it."

#### WHAT WENT WRONG?

Claude answered using ONLY what was in front of it. The missing spreadsheet tab didn't exist for that answer. Not "Claude overlooked it." Not "Claude made a mistake." The data was never on the desk.

#### THE CONCEPT

The **context window** [model ke saamne ka poora text -- sab kuch jo model parh sakta hai ek jawab likhte waqt] is everything the model can see while writing one answer. Think of it as a reading desk. Everything on the desk exists for this answer. Anything NOT on the desk does not exist.

Six things can land on this desk:

```
THE 6-LAYER CONTEXT STACK
(from bottom/oldest to top/newest)

┌─────────────────────────────────────────────┐
│  6. UPLOADED FILES                           │  <-- PDFs, spreadsheets, images, voice memos
│     (you attach these)                       │
├─────────────────────────────────────────────┤
│  5. CHAT HISTORY                             │  <-- every prior turn in this conversation
│     (builds as you talk)                     │
├─────────────────────────────────────────────┤
│  4. YOUR PROMPT                              │  <-- the message you just typed
│     (YOU edit this every time)               │
├─────────────────────────────────────────────┤
│  3. TOOL DESCRIPTIONS                        │  <-- web search, code execution, file access
│     (the system loads these)                 │
├─────────────────────────────────────────────┤
│  2. MEMORY                                   │  <-- a short profile the TOOL wrote about you
│     (the tool writes this -- see 4C below)   │
├─────────────────────────────────────────────┤
│  1. SYSTEM PROMPT                            │  <-- invisible instructions from the company
│     (you never see this -- see 4B below)     │
└─────────────────────────────────────────────┘

Total capacity: ~750,000 words (4-5 Harry Potter books)
```

The model is **stateless** [kuch yaad nahi rakhta apne paas -- keeps nothing of its own between turns]. Every time you send a message, the entire desk is rebuilt from stored text. Nothing carries over by magic.

**The checklist before any prompt that matters:**

| Question | If yes... |
|----------|-----------|
| Is there a document the answer should be consistent with? | Attach it |
| Is there a constraint [hadd/pabandi] AI can't guess (budget, timeline, who's on the team)? | State it |
| Is there prior context (a previous decision, an existing process)? | Summarise in one paragraph |
| Do you want a specific output format (table, email, bullet list)? | Name it |
| Is there an audience [kis ke liye likh rahe ho]? | Name them |

Five lines of context, well chosen, beat five paragraphs of cleverness.

#### EXAM TRAP

**The trap:** The exam shows someone who summarised a 70-page document into one page to "save context" and the analysis missed key clauses. One answer says "switch to Opus, which reasons more deeply." Another says "ask Claude which sections it needs and paste only those."

**Why both are wrong:** No model upgrade and no clever selection fixes the fact that unseen clauses produce unseen risks. The correct answer: upload the full document. Analysis can only cover what's in the context window.

**The pattern to remember:** When the output misses something that was never in front of the model, the fix is ALWAYS "put it in front of the model" -- not "try a smarter model" and not "ask the model what it needs."

This matches Mock Exam Practice Item 3 exactly.

#### QUICK CHECK

> Bilal uploads one of two expense files and Claude's totals are wrong. His colleague says, "Try Opus -- it's better at numbers." Is this good advice?
>
> **Answer:** No. The problem is missing data (the second file), not model capability. Opus would produce equally wrong totals from the same incomplete input. Upload both files first.

---

### 4B: The System Prompt & Custom Instructions

#### THE SCENARIO (continued)

Sana manages a client account called Meridian. She adds two rules to her Claude account-level instructions [standing instructions -- hamesha laagu rehne wale rules jo har chat mein load hotay hain]:

1. "Always open with a three-line executive summary [teen line ka mukhtasar -- short summary for senior people]"
2. "Use the Meridian account's tone guide"

Now every chat -- including quick questions about lunch spots, unrelated projects, even a personal query about her kid's school -- opens with an executive summary in the Meridian voice. Her colleague asks Claude a simple question in Sana's workspace and gets a formal Meridian-style response about sandwich shops.

#### WHAT WENT WRONG?

Sana put topic-specific rules on the GLOBAL layer. The **system prompt** [pehle se chhupa hua instruction set -- invisible instructions the company placed before you arrived] is like a restaurant owner briefing a new waiter before the first customer sits down: "Be friendly. Recommend the daily special. If someone asks about allergens, check with the kitchen." The waiter follows those instructions at EVERY table.

The company's system prompt is layer 1 -- you never see it. YOUR custom instructions sit beside it. They also load in EVERY chat. That's why Claude, ChatGPT, and Gemini feel different on the same question: different system prompts, not different personalities.

#### THE CONCEPT

**What goes WHERE:**

```
ACCOUNT-LEVEL instructions         PROJECT-LEVEL instructions
(loads in EVERY chat)              (loads only in chats inside that Project)
                                   
Write here ONLY what is            Write here what is true for
true for ALL your work:            ONE kind of work:
                                   
- "I am a supply chain analyst"    - "Use the Meridian tone guide"
- "I work in Pakistan"             - "Always open with executive summary"
- "Use metric units"               - "Flag expenses above PKR 50,000"
- "British English spelling"       - Attach: Meridian_tone_guide.pdf
```

**Two habits that keep instructions useful:**

1. **Write only what AI can't work out on its own.** Your job, your audience, your hard limits. Not "be helpful" (it already tries).
2. **Prune [kaato -- remove what's not needed] every few months.** Read each line and ask: if I delete this, will AI get something wrong? If not, delete it. Anthropic itself deleted most of its own standing instructions in July 2026 with no loss in quality.

**The two-reader test for instructions:**

> Would two colleagues who read this instruction do the SAME thing?

"Flag unusual expenses" FAILS this test -- what's "unusual"? Each run flags different items.

"Flag any single expense above PKR 50,000 with a category note" PASSES -- two readers, same result.

This matches Mock Exam Practice Item 20.

#### EXAM TRAP

**The trap:** "Delete the account-level instructions entirely, since no single rule fits every conversation." Or: "Keep both rules but add exceptions for each kind of chat where they shouldn't apply."

**Why both are wrong:** Deleting the layer throws away a useful feature. Adding exceptions grows the global text with contradictions -- the road to 20 conflicting lines. The correct answer: MOVE topic-specific rules into a Project. Keep the account text to what's true everywhere.

This matches Mock Exam Practice Item 16 exactly.

#### QUICK CHECK

> Sana's Project instruction says "Use current unit prices from the attached rate card." Three months later, the Project outputs prices nobody recognises -- shown to the cent, confident, but wrong. She assumes Claude is hallucinating. What should she check FIRST?
>
> **Answer:** Check the Project's knowledge files for a superseded [purani -- outdated/replaced] rate card still attached. Stale stored context fails quietly -- no error message, just confident wrong answers that LOOK like hallucination. Replace the old file and set review dates. (Mock Exam Practice Item 21)

---

### 4C: Memory

#### THE SCENARIO (continued)

Dr. Hira is a family physician [khandaani doctor]. She uses Claude for clinical note drafts with patient consent. Over months, Claude's memory builds up: "User is a physician. Works at City Medical Centre. Recent patient had diabetes complications. Another patient is on blood thinners."

One day, she opens a fresh chat to plan her daughter's birthday party. Claude's response opens with: "Given your medical background, here's a health-conscious menu..." That's harmless. But then she notices Claude has noted details about her patients in its memory. Those details could surface in a colleague's chat if they share the workspace.

#### WHAT WENT WRONG?

**Memory** [AI tool ki yaaddaasht -- a note the tool writes about you] is NOT the model gaining a memory. The model is still stateless. Memory is a note the TOOL keeps about you and loads into layer 2 of the context stack before every new chat. It's a sticky note the product pastes on the desk before you arrive.

#### THE CONCEPT

| What people THINK memory is | What memory ACTUALLY is |
|---|---|
| "Claude remembers me now" | The tool wrote a note and pastes it into every chat |
| "It learned about me" | It read its own note about you |
| "It has a real memory" | It's still stateless. Delete the note and it knows nothing |

**Three habits:**

1. **Read what it stored, once.** Open the memory panel. Some notes are sharper than expected. Some are preferences you mentioned once that have shaped every answer since. You can delete any line.
2. **Correct it out loud.** Say in the chat: "You are assuming I still work in retail. I don't." This updates the note.
3. **Use clean-slate mode [saaf suthri nayi chat -- incognito/temporary chat] for one-off questions** far from your usual work.

**The warning for professionals:** If you are a doctor, lawyer, accountant, or teacher, client and student details can build up in memory and come back in an unrelated chat months later. Keep identifying details out of memory. Do confidential work in clean-slate chats or scoped Projects.

#### QUICK CHECK

> Bilal tells Claude in one chat, "I always need numbers in lakhs, not millions." Two weeks later, in a completely new chat, Claude formats numbers in lakhs without being asked. Is Claude remembering on its own?
>
> **Answer:** No. The tool wrote a note ("user prefers lakhs") and loads it into every new chat. The model is still stateless -- it read the note, not its own memory.

---

### 4D: Context Rot & Compacting

#### THE SCENARIO

Zain starts a Monday morning chat with Claude to draft a quarterly [teen maheeney ka -- every three months] revenue [aamdani -- income/earnings] report. By Wednesday afternoon, the same chat has covered:
- The revenue report (Monday)
- A staff scheduling question (Monday evening)
- A client complaint response (Tuesday)
- Editing a job posting (Tuesday evening)
- A product comparison for a vendor (Wednesday)

On Wednesday, he asks Claude to finalise the revenue report from Monday. Claude's draft now includes phrases from the job posting, references a "client satisfaction issue" that belonged to Tuesday's complaint, and contradicts a formatting constraint Zain set on Monday.

#### WHAT WENT WRONG?

This is **context rot** [purani baaton ka zehr -- quality drops when one long chat carries many unrelated topics]. All five topics are sitting on the same desk. The model reads ALL of it before answering, and the workout plan pulls at the revenue report.

#### THE CONCEPT

**Symptoms that tell you a chat has gone stale:**

| Symptom | What's happening |
|---------|-----------------|
| AI references earlier parts that have nothing to do with your current question | Old topics are polluting new answers |
| Answers get longer and vaguer, with more hedging [shayad/ho sakta hai] | The model is trying to satisfy everything on the desk |
| It contradicts a constraint you stated five turns ago | The constraint was lost when the tool did compacting |
| It starts apologising repeatedly without making progress | It's stuck trying to reconcile conflicting context |

**Compacting** [purani chat ko summary mein badalna -- the tool replaces early turns with a short summary to make room] happens silently in most tools. Claude shows a small message. ChatGPT and Gemini do it without telling you. The story survives; the details do not. That naming rule you agreed on, the format constraint from turn four, the specific library version -- any of these can disappear into the summary.

**The fix is simple and free:**

```
WHEN THE TOPIC CHANGES --> START A NEW CHAT

"But I'll lose the context from before!"
  --> If it matters, save it to a file first.
  --> If it doesn't matter, that's exactly why
      you're starting fresh.
      
A chat window is WORKING MEMORY, not STORAGE.
```

The instinct when answers go bad is one more clarifying prompt. Resist it. Start fresh, paste the one or two facts that matter, and continue. The reset is almost always faster than the rescue.

#### EXAM TRAP

**The trap:** A scenario describes a first reply in a fresh chat that's wrong. One answer option says "the conversation is overloaded." 

**Why it's wrong:** Context overload and context rot can't happen on the FIRST reply in a FRESH chat. There's no history to overload or rot. Wrong from the first answer = under-specification (Concept 1).

**The timing diagnostic:**

```
WHEN DID THE OUTPUT GO WRONG?

Wrong from the FIRST reply in a FRESH chat?
  --> UNDER-SPECIFICATION. The prompt is missing context.
  
Used to work, now it doesn't?
  --> STALE CONFIGURATION. A stored file or instruction went out of date.
  
Got worse as the chat went on?
  --> CONTEXT ROT. Start a new conversation.
  
Wrong in a way that "sounds like" the model but not like the task?
  --> Check MEMORY. An old note is steering the answer.
```

This matches Mock Exam Practice Item 18 (fresh chat, first reply wrong = under-specification).

#### QUICK CHECK

> Zain's revenue report chat has been running for three days across five topics. Claude now contradicts Monday's formatting rules. Should he send a clarifying prompt reminding Claude of the rules?
>
> **Answer:** No. Start a new chat, paste the formatting rules and the revenue data, and continue there. One more clarifying prompt inside a rotted chat rarely rescues it. The reset is faster than the rescue.

---

### 4E: Projects -- Front-Load Context Once

#### THE SCENARIO

Fatima (from Concept 1) now handles customs work weekly. Every Monday she opens a new chat and pastes the same three things: the latest SRO document, the company's cargo types, and the standard checklist format. Every Monday she forgets one of them. Last week she forgot the format. This week she forgot the SRO.

Her team lead suggests: "Make a Project."

Fatima creates a Claude Project called "Customs Compliance." She uploads the SRO, writes standing instructions about the cargo types and checklist format, and adds the company's standard legal footer [neeche ka qanooni text jo har document mein chahiye]. Now every new chat inside this Project starts with all of that already on the desk.

Monday morning: she opens a new chat inside the Project and types only the specific question. Everything else is already there.

#### THE CONCEPT

**Projects** [ek workspace jahan files aur instructions pehle se set hain -- a workspace with standing files and instructions that every chat inside it inherits] solve the obvious problem from Concepts 1 and 4: if AI must be briefed like a colleague every time, that's a lot of repeated pasting.

**When to make a Project:** The moment you've pasted the same files, audience, or limits into TWO chats on the same topic. That context belongs in a Project, not a prompt.

```
WITHOUT a Project:              WITH a Project:

Chat 1: paste SRO + types +    Project: SRO + types + format
  format + question               (uploaded once)
Chat 2: paste SRO + types +    
  format + question             Chat 1: just the question
Chat 3: paste SRO + types +    Chat 2: just the question  
  (forgot format!) + question   Chat 3: just the question
```

**Projects also fix context rot cheaply.** Inside a Project, starting a new chat drops only the noise of the old conversation. The standing files and instructions stay. You reset the chat, not the context.

| Tool | Name | Free tier? |
|------|------|-----------|
| Claude | Projects | Yes -- up to 5 projects, unlimited files each |
| ChatGPT | Projects | Yes -- up to 5 files per project (paid plans: 25-40) |
| Google | Notebooks (Gemini) + NotebookLM | Yes, both free |

**The critical rule for Project instructions:**

> Test every instruction with: "Would two colleagues who read this instruction do the SAME thing?"
>
> FAILS: "Flag unusual expenses" -- each person flags different items.
> PASSES: "Flag any single expense above PKR 50,000 with a category note."

A failing instruction shows no error message. The output just varies each run.

#### EXAM TRAP

**The trap:** When Project outputs look like hallucination (confident wrong numbers, unfamiliar unit prices), one answer says "re-prompt with stricter wording." Another says "switch to a more capable model."

**Why both are wrong:** If the Project's knowledge files contain an outdated rate card, the model is faithfully reading stale data -- not hallucinating. The fix: check the knowledge files, replace outdated ones, and set review dates. Stored context goes stale, and stale context fails quietly.

This matches Mock Exam Practice Item 21.

#### QUICK CHECK

> Fatima's colleague joins the Customs Compliance Project and gets different checklist formats on different days. The Project instruction says "Use a professional format." What's the fix?
>
> **Answer:** Rewrite the instruction with the specific format: "Use a numbered checklist with these columns: Requirement, Document Needed, Deadline, Status." The two-reader test: any colleague reading this instruction produces the same format.

---

### CONCEPT 4: COMBINED EXAM TRAP SUMMARY

Concept 4 is so large that the exam can test any sub-part. Here's the master decision tree:

```
OUTPUT IS WRONG. WHERE DO I LOOK?

1. Was the data even in front of the model?
   NO --> Upload it. (4A: Context Window)
   YES --> next question
   
2. Is a global instruction leaking into the wrong chat?
   YES --> Move it to a Project. (4B: System Prompt)
   NO --> next question
   
3. Is the model making an assumption that was true months ago?
   YES --> Check and fix Memory. (4C: Memory)
   NO --> next question
   
4. Has this chat been running across many topics?
   YES --> Start a new chat. (4D: Context Rot)
   NO --> next question
   
5. Is the Project outputting confident wrong data?
   YES --> Check knowledge files for stale/outdated content. (4E: Projects)
   NO --> Re-read the prompt. Probably under-specification (Concept 1).
```

---

## CONCEPT 5: Reasoning, or "Think Hard"

**CCAO-F Domains: D1 -- Prompting & Task Execution (14%) + D3 -- Product & Model Selection (12%)**

### THE SCENARIO

Hasan is a real estate [jaidad -- property] associate evaluating two commercial lease [kiraya ka muaaida -- rental contract for a business space] options for his company's new office. Lease A has a lower monthly rent but a five-year lock-in [bandish -- you can't leave]. Lease B costs more but has a break clause [beech mein nikalne ki ijazat] after 18 months.

**His first prompt:**

```
Which lease is better, A or B?
```

Claude picks Lease A (cheaper) in about three seconds. The answer is one paragraph. It mentions the lower rent and stops.

**His second prompt:**

```
I am evaluating two commercial leases for a 40-person office.
Attached: both lease agreements.

Constraints: We may need to expand to 60 people within 2 years.
The landlord for Lease B has offered a rent review clause.
Our finance team requires a 3-year total cost projection.

Think hard before answering. Then tell me:
1. The three trade-offs that actually matter for our situation.
2. Which lease you would choose and why.
3. Under what conditions your recommendation flips.
```

This time Claude takes noticeably longer. The response runs through multiple scenarios, calculates 3-year projections under different expansion timelines, flags a hidden escalation clause [kiraya badhne ka chhupa hua rule] in Lease A that Hasan had missed, and explains that if expansion happens before month 20, Lease B saves money despite the higher rent.

Same model. Same leases. The difference: Hasan asked it to THINK.

### WHAT HAPPENED HERE?

The first prompt was a quick lookup -- Claude answered from its first instinct. The second prompt triggered **reasoning mode** [model ka apna sochne ka tariqa -- working the model writes for ITSELF before giving you the final answer], also called **extended thinking** [lambi soch -- the model reasons for longer, sometimes minutes, before answering]. The model tried several approaches and checked its own work before writing what Hasan saw.

### THE CONCEPT

Until 2023, the standard trick was "think step by step." That's mostly outdated. Modern models have built-in thinking modes you turn on directly.

**Three ways to turn it on:**

| Method                         | Example                                                 | Works in            |
| ------------------------------ | ------------------------------------------------------- | ------------------- |
| Plain language                 | "Think hard" / "Think carefully before answering"       | Every modern tool   |
| Toggle/switch in the interface | Click the thinking mode button                          | Tools that offer it |
| Automatic                      | Some tools detect hard questions and think on their own | Varies by tool      |

**How much harder can AI think now?**

A 2025 METR study tracked the longest task a leading model could finish reliably:

```
Mid-2024: ~7 minutes of human work
Early 2025: ~1 hour of human work
Rate: Doubles every ~7 months

--> Tasks you filed under "too complex for AI" two years ago
    are mostly ones AI can handle NOW, if you brief it well
    and turn thinking on.
```

**When to use it vs. when NOT to:**

| USE extended thinking | DON'T use extended thinking |
|---|---|
| Many inputs + many trade-offs | Quick lookups |
| Complex analysis (which lease? which vendor?) | One-paragraph summaries |
| Multiple constraints interact | Casual idea-gathering |
| You'd want a colleague to take their time | "What does X mean?" |
| The stakes [daav par kya laga hai] justify the wait | Speed matters more than depth |

**The power-user prompt pattern:**

```
[Attach all relevant files]
[State your constraints]
"Think hard. Then tell me:
 1. The trade-offs that actually matter for MY situation.
 2. Which option you'd choose and why.
 3. Under what conditions your recommendation flips."
```

The third line -- "when does your answer change?" -- is the move most people miss. It turns a recommendation into a decision framework [faisla karne ka tareeqa].

### EXAM TRAP

**Trap 1: Matching extended thinking to a simple task.** The exam might show someone using extended thinking to rewrite a three-line status update in a friendlier tone. That's wrong -- a three-line rewrite needs no deep reasoning. Extended thinking is slower and uses more of your usage budget [kitna istimaal kar sakte ho -- token/usage allowance]. Save it for questions where you'd want a human to take their time.

**Trap 2: NOT matching it when it's needed.** The exam shows a complex trade-off analysis -- comparing lease break clauses, evaluating competing vendor proposals [vendors ke muqaabla ki tajweezain], analysing multi-variable risk [kai cheezon par mabni khatray ka andaaza]. If the answer options include extended thinking for this kind of task, that's almost always correct.

**The matching rule:**

```
SHOULD I USE EXTENDED THINKING?

Is the task a TRADE-OFF with multiple inputs?
  YES --> Use it.
  
Is the task a SIMPLE rewrite, lookup, or definition?
  YES --> Don't use it. Standard mode is fine.
  
Would you want a COLLEAGUE to take their time on this?
  YES --> Use it.
  NO  --> Don't.
```

This matches Mock Exam Practice Item 6: "Which lease in this thread is riskier to exit early, given the break clauses?" → extended thinking is correct because it's a complex trade-off analysis.

### QUICK CHECK

> Sana asks Claude: "Rewrite this two-sentence Slack message to sound more professional." Should she turn on extended thinking?
>
> **Answer:** No. A two-sentence rewrite is a quick, low-stakes task. Extended thinking would be slower for no benefit. Save it for questions with many inputs and trade-offs.

---

## PART 2 RECAP: How Concepts 4 and 5 Connect

### Within Part 2

```
CONCEPT 4: Context is the whole game        CONCEPT 5: Think hard
                                             
"WHAT does the model see?"                   "HOW DEEPLY does it process
                                              what it sees?"
         |                                            |
         v                                            v
Put the RIGHT things on the desk             Then tell it to THINK about
(files, constraints, audience)               what's on the desk
Remove the WRONG things                      (for complex trade-offs)
(stale data, unrelated topics)               
         |                                            |
         └──────────── TOGETHER ──────────────────────┘
                          |
                          v
               Quality = Right Context + Right Depth
```

### Back to Part 1

```
Part 1                              Part 2
                                    
C1: Brief like a colleague    -->   C4: Put that briefing in the
    (files, goal, limits, ask)          right LAYER (prompt vs.
                                        Project vs. account-level)
                                    
C2: Loud / Quiet / Secret    -->   C4: If the topic is SECRET,
    (what AI can know)                  the data MUST be uploaded.
                                        No layer or model fixes
                                        missing data.
                                    
C3: 3 Retrieval Modes        -->   C5: Extended thinking is
    (pretrained / web / deep)           a FOURTH lever. Retrieval
                                        decides WHERE the answer
                                        comes from. Thinking decides
                                        HOW HARD the model works
                                        on what it found.
```

### The master rule (same as Part 1):

> **Get the right context IN, keep the wrong context OUT.**

Concept 4 teaches you WHERE context lives (6 layers, Projects, memory, standing instructions). Concept 5 teaches you that once the right context is in place, you can ask the model to THINK HARDER about it.

### Combined diagnostic for exam day:

```
OUTPUT IS WRONG OR WEAK. WHAT DO I CHECK?

1. Is the data missing?          --> Upload it (C4A)
2. Is a global rule leaking?     --> Move it to a Project (C4B)  
3. Is memory steering wrong?     --> Fix or clear memory (C4C)
4. Is the chat stale?            --> Start fresh (C4D)
5. Is stored content outdated?   --> Update Project files (C4E)
6. Was the prompt too bare?      --> Add files, goal, limits, ask (C1)
7. Was the topic too rare for    > Verify against pr--imary source (C2)
   pretrained knowledge?
8. Did the wrong mode fire?      --> Re-word to trigger the right mode (C3)
9. Was it a complex trade-off    --> Ask it to "think hard" (C5)
   treated like a quick lookup?
```

---

**End of Part 2. Next: Part 3 covers Concept 6 (Sycophancy & How to Neutralize It) and Concept 7 (The Brainstorm-Iterate Loop).**
