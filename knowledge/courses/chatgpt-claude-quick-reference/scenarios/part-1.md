---
type: Document
title: "ChatGPT & Claude Quick Reference: Scenario Guide Part 1"
description: "Scenario walkthroughs comparing Claude and ChatGPT interface controls, model tiers, and where each feature lives."
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
order: 53
---

## KNOW YOUR COCKPIT

> **Concepts covered:** 1 (Two Cockpits, One Discipline), 2 (Models & Thinking Modes), 3 (Context You Attach)
> **CCAO-F Domains:** D3 (Product & Model Selection), D5 (Configuration & Knowledge Management)
> **Read time:** ~22 minutes

---

## CONCEPT 1: Two Cockpits, One Discipline (Platform Awareness)

**CCAO-F Domain: D3 — Product & Model Selection**

---

### THE SCENARIO

Fatima works as a marketing coordinator [jo marketing ki planning aur execution sambhaalti hai] at a mid-size logistics [saamaan pohanchane ka system] company. Her manager Zain tells her:

> "We need to use AI for our quarterly [har teen maheene ka] client reports. I've been using ChatGPT. But the new VP [Vice President — senior boss] wants everyone on Claude because that's what the enterprise [badi company-level] license covers. Learn Claude by Friday."

Fatima panics. She spent three months learning ChatGPT. She knows where every button is. She built custom GPTs for report formatting. She has memory set up with her writing style. Now she has to throw all that away and start from zero?

She spends two full days trying to find "the Claude version of canvas." She can't. She searches for "custom GPTs in Claude." Nothing. She tries to recreate her exact ChatGPT setup button-by-button in Claude, and gets frustrated when things are named differently or organized in different places.

By Thursday, she tells Zain: "Claude can't do what ChatGPT does. We should keep ChatGPT."

Meanwhile, her colleague Nida — who joined the same week — took a different approach. Nida never memorized ChatGPT's buttons. Instead she learned:
- How to describe a task clearly
- How to give useful context
- How to check the output
- When to use a stronger model

When she opened Claude, she asked it: *"List every control I can see in this workspace right now."* She matched each control to the concept she already knew. Projects? Same idea, different name. Artifacts instead of writing blocks? Same concept. She was productive in Claude within an hour.

---

### WHAT WENT WRONG (and RIGHT)

**Fatima** learned the **buttons**, not the **discipline** [usool — the underlying method]. When the product changed, her knowledge broke. She was loyal to an interface [screen ka layout], not to a way of working.

**Nida** learned the **pattern underneath**. She knew that every AI chat product has:
- A model picker [model choose karne ka control]
- A message box
- A way to upload files
- Projects or workspaces
- Memory and instructions
- Search and research features

Different names. Same work.

---

### THE CONCEPT

Both Claude and ChatGPT are built around the same set of ideas. The names differ. The layout differs. The work you do with them is the same work.

```
TRANSFERABLE SKILLS (ye har jagah kaam aayein):
+------------------------------------------+
| 1. Describe the task clearly             |
| 2. Give useful context                   |
| 3. Choose what to delegate [kya AI ko    |
|    dena hai, kya khud karna hai]         |
| 4. Check the answer                      |
| 5. Know when to use a stronger model     |
| 6. Protect sensitive information         |
+------------------------------------------+
        |
        v
These skills work in Claude, ChatGPT,
and whatever comes next.
```

**The cockpit analogy:** Pilots don't learn to fly a Boeing and then panic when they see an Airbus. They learn to FLY first. Then they spend a short time learning where this particular aircraft keeps its switches.

That's the right expectation for AI tools too. Flying is the transferable part. The switch layout is the part you look up.

**Platform awareness** [har tool ki taqat aur kamzori jaanna] means knowing what each tool is good at, instead of becoming loyal to one interface.

For work that matters, run the same task in both and compare. This is the fastest way to build real judgment about which tool fits which job.

#### The Beginner Habit (3-Step Opening)

Before you send any serious request to ANY AI assistant:

```
STEP 1: SET THE STAGE
  "I am a [role] working on [goal]..."
  
STEP 2: DEFINE THE TASK  
  "I need you to [specific action]..."

STEP 3: SET THE RULES
  "Use [tone]. Format as [format]. Constraints: [limits]..."
```

This works identically in Claude, ChatGPT, or any future tool.

#### Quick Vocabulary Map: Same Ideas, Different Names

| Concept | Claude calls it | ChatGPT calls it |
|---------|----------------|-------------------|
| Separate work output | Artifact | Writing block / Code block |
| Workspace for ongoing work | Project | Project |
| External tool connection | Connector | App |
| Packaged method | Skill | Skill |
| Persistent rules | Settings & Styles | Custom Instructions |
| Multi-source investigation | Research mode | Deep Research |
| Open integration standard | MCP | MCP (via Apps SDK) |

**Key rule:** Learn the pattern, not the button placement.

---

### EXAM TRAP

The exam will show a scenario where someone is picking between Claude and ChatGPT (or a similar choice). The **trap answer** says:

> "Always use [one specific tool] because it is the most capable."

This is wrong because **no single tool is best at everything**. The exam rewards **platform awareness** — picking the right tool for the right task, not picking a favourite.

Another trap: an option that says "learn the exact interface of each tool in detail before starting any work." This is wasteful. You learn the discipline first, then find the controls.

---

### QUICK CHECK

**Q:** Fatima's company switches from ChatGPT to Claude. What is the MOST efficient way for her to become productive?

**A:** Map the concepts she already knows (projects, memory, instructions, model levels) to Claude's controls. The discipline is the same — only the names and layout changed. She doesn't need to relearn AI from scratch. She needs to find where Claude keeps its switches.

---
---

## CONCEPT 2: Models and Thinking Modes (The 3-Tier Pattern)

**CCAO-F Domain: D3 — Product & Model Selection**

---

### THE SCENARIO

Zain is a project coordinator [jo project ka schedule aur progress track karta hai] at a construction consultancy [mashwara dene wali company]. He has three tasks today:

**Task A:** Draft a short email to a client confirming tomorrow's site visit.

**Task B:** Compare three vendor [saamaan bechne wala] proposals [peshkash — their offers] for steel supply. Each proposal has different pricing tiers [qeemat ke levels], delivery timelines, penalty clauses [saza ke rules agar late ho], and warranty [guarantee] terms. He needs to recommend one.

**Task C:** Analyze a complex dispute [jhagra/masla] between a subcontractor [thekedar jo main contractor ke neeche kaam kare] and the client. The dispute involves overlapping contractual obligations [contract mein likhe huay faraaiz], delay penalties, and force majeure [majboori — uncontrollable events like floods] clauses across three separate agreements.

Zain uses the heavy flagship [sabse powerful aur mehnga] model for ALL three tasks. He always picks Opus (Claude) or Pro (ChatGPT) because "I want the best answer."

**Result:**
- Task A (the simple email): Takes 45 seconds instead of 5. The email is fine, but he waited for nothing.
- Task B (the comparison): Takes 3 minutes. Good analysis. Fair use.
- Task C (the dispute): Takes 4 minutes. Deep, careful reasoning. Worth every second.

Over a week, Zain burns through his usage limits [kitna use kar sakte ho — quota] on simple emails and summaries, and runs out of flagship capacity when he actually needs it for hard analysis on Friday afternoon.

---

### WHAT WENT WRONG

Zain used the **same level of capability** for every task. He chose the model by **habit**, not by the **task**.

The simple email needed fast mode. The comparison needed thinking mode. Only the dispute analysis genuinely needed the flagship.

His "always use the best" habit was actually wasteful — and it left him without capability when the hard task arrived.

---

### THE CONCEPT

Both Claude and ChatGPT organize their models along the same trade-off [saudabaazi — what you give vs. what you get]:

```
THE 3-TIER MODEL PATTERN
(ye pattern har model release ke baad bhi kaam karta hai)

+------------------+    +------------------+    +------------------+
|   FAST DEFAULT   |    | THINKING MODE    |    | HEAVY FLAGSHIP   |
|                  |    |                  |    |                  |
| Everyday work    |    | Multi-step       |    | Genuinely        |
| Drafting         |    |   reasoning      |    |   difficult      |
| Summaries        |    | Analysis         |    | Long, demanding  |
| Simple questions |    | Math             |    |   tasks          |
|                  |    | Tricky code      |    | Complex analysis |
| QUICK + CHEAP    |    | SLOWER + CAREFUL |    | SLOWEST + COSTLY |
+------------------+    +------------------+    +------------------+

|<--- Start here -------> Escalate only when needed ------------>|
```

#### Current Model Names (as of 2026)

| Tier | Claude | ChatGPT |
|------|--------|---------|
| Fast default | **Haiku** (fastest, cheapest) / **Sonnet** (everyday) | **Instant** (everyday) |
| Thinking | **Thinking toggle** (separate switch, not a model name) | Thinking levels (between Instant and Pro) |
| Heavy flagship | **Opus** (deepest, slowest, costliest) | **Pro** (hardest tasks) |

> **Important for CCAO-F:** On Claude, thinking is a **switch you turn on**, not a separate model name. You can turn on thinking for Sonnet or Opus.

#### Two Rules That Survive Every Model Release

**Rule 1: START FAST.**
Use the normal fast mode for most everyday work. Don't make a short rewrite wait on heavy reasoning.

**Rule 2: ESCALATE WHEN THE TASK IS HARD.**
Switch to thinking mode or a stronger model when the job involves:
- Several steps of logic
- Careful comparison
- Mathematics
- Difficult debugging
- Code that must be correct
- Complex analysis

#### The Decision Flowchart

```
Is this a simple/routine task?
  |
  +-- YES --> Use FAST default (Haiku/Sonnet or Instant)
  |
  +-- NO --> Does it need multi-step reasoning?
              |
              +-- YES, but bounded --> Use THINKING mode
              |
              +-- YES, and it's genuinely hard,
                  long, or high-stakes --> Use FLAGSHIP (Opus/Pro)
```

**Key insight:** Sometimes "the AI failed" really means "I used the wrong level of capability." Before blaming the tool, check if you used the right tier.

**Key rule:** Choose the model by the task, not by habit.

---

### EXAM TRAP

The exam loves to test this. The trap comes in two forms:

**Trap 1 — "Always use the strongest model"**
An answer that says "switch to Opus/Pro" for a task that is clearly simple. People pick this because it feels "safe" — more power = better, right? No. It wastes resources and doesn't improve simple work.

**Trap 2 — "The model is wrong, abandon the task"**
An answer that says "this task can't be done by AI" when the real issue is that the person used fast mode for a hard reasoning task. The fix is escalation [ek level upar jaana], not abandonment.

**The right pattern:** Match the model tier to the task difficulty. Simple → fast. Hard reasoning → thinking. Genuinely difficult → flagship.

---

### QUICK CHECK

**Q:** An analyst uses Claude Sonnet (fast default) to compare five insurance policies across 12 criteria. The output misses key differences and gives shallow comparisons. What should the analyst try FIRST?

**A:** Turn on thinking mode or switch to Opus. This is a multi-step comparison task — exactly the kind of work that needs more reasoning capability. The fast default was the wrong tier for this job. Before concluding "AI can't do this," try the right level of capability.

---
---

## CONCEPT 3: Context You Attach

**CCAO-F Domain: D5 — Configuration & Knowledge Management**

---

### THE SCENARIO

Amina is a procurement [khareedaari ka department] specialist at a hospital group. She needs to analyze a vendor contract [thekedar ke saath likhi hui deal] for medical equipment.

**Attempt 1:** She types into Claude:

> "Summarize the key risks in our contract with MedSupply Corp."

Claude gives a generic [aam sa — not specific] answer about contract risks in general. Penalty clauses. Liability [zimmedaari agar kuch galat ho] limits. Delivery terms. Nothing specific to HER contract, because Claude has never seen it.

**Attempt 2:** She uploads the 35-page contract PDF and types:

> "Summarize the key risks in this contract."

Now Claude reads the actual document. It flags a termination clause [khatam karne ka rule] in Section 4.2 that requires 180 days notice (unusually long for this type of contract). It spots that the liability cap [zimmedaari ki had — maximum kitna pay karna hoga] in Section 9 is lower than industry standard. It identifies an auto-renewal clause [apne aap renew ho jaayega] that Amina's legal team [qanooni team] should review.

Same question. Completely different — and actually useful — answer. The only difference was the attachment.

---

**Three months later,** Amina is in a long chat session. She has been working on the quarterly [har teen maheene ka] procurement report all day in one conversation. By 4 PM:

- Claude forgets that she said "use table format only" that morning. Paragraphs start coming back.
- Claude says the total spend is PKR 4.2 million, but three hours ago it said PKR 3.8 million for the same data.
- The suggestions become generic — they could be about any company's procurement.

The chat has gone stale [puraana aur unreliable ho gaya]. The context window has filled up.

---

### WHAT WENT WRONG (and RIGHT)

**Attempt 1** failed because the model had no context. It could only guess about a contract it had never seen. This is the most common beginner mistake: asking the AI about YOUR specific work without giving it YOUR specific materials.

**Attempt 2** worked because Amina gave the model what a capable human colleague would need — the actual document.

**The stale chat** happened because every conversation has a limit on how much text it can hold. When the conversation gets too long, the model starts losing earlier instructions and facts. This is not a bug. It's a physical limit — the context window.

---

### THE CONCEPT

A language model can only work with the information in front of it. No exceptions.

#### What You Can Upload

Both Claude and ChatGPT accept:

```
+------------------+------------------+------------------+
|   DOCUMENTS      |   DATA           |   VISUAL         |
|                  |                  |                  |
| PDFs             | Spreadsheets     | Images           |
| Word documents   | CSV files        | Screenshots      |
| Text files       | Code files       | Charts/graphs    |
+------------------+------------------+------------------+
           |                |                |
           v                v                v
     All of these become CONTEXT for the model.
     Better context = better answer.
```

#### The Golden Rule

```
+-----------------------------------------------------------+
|                                                           |
|  Better context usually improves the answer MORE          |
|  than a cleverer prompt does.                             |
|                                                           |
|  "Upload the document" beats "write a fancier prompt"     |
|  almost every time.                                       |
|                                                           |
+-----------------------------------------------------------+
```

Both products can also **search the live web** — bringing current information into the conversation when the model's built-in knowledge is not enough.

#### When the Chat Goes Stale

Every conversation has a context window — a limit on how much text the model holds at once. When you hit it, you see three warning signs:

| Warning Sign | What It Looks Like | Why It Happens |
|---|---|---|
| Rule amnesia | "No bullet points" → bullets come back | The early instruction scrolled out of the window |
| Self-contradiction | "Total is 4.2M" then later "Total is 3.8M" | Different parts of a long chat are inconsistent |
| Generic drift [aam baatein karna] | Advice that could apply to any company | The specific context about YOUR work is lost |

#### What To Do When Chat Goes Stale

Do NOT keep pushing. Do NOT abandon the chat and lose everything.

**Ask for a state summary:**

```
"Summarize what we have decided so far, what is still open, 
and every rule I gave you. Keep it short enough to paste 
into a new chat."
```

Then:
1. Read the summary
2. Correct anything wrong
3. Open a fresh chat
4. Paste the corrected summary + re-attach files
5. Continue working

```
STALE CHAT RECOVERY FLOW:

Old Chat (stale)          New Chat (fresh)
+------------------+      +------------------+
| Rules forgotten  |      | State summary    |
| Numbers wrong    | ---> | Corrected facts  |
| Generic drift    |      | Files re-attached|
+------------------+      +------------------+
                          = Full context again
```

**If you find yourself pasting the same summary every week** → that's the signal you need a **project** (Concept 4, coming in Part 2). Projects make context persistent so you stop repeating yourself.

#### The Habit

Before you ask an important question, ask yourself:

> **"What would a capable human colleague need to see before they could answer this well?"**

Then give the assistant that material. A screenshot of the error. The actual spreadsheet. The real contract. The dashboard they need to read.

---

### EXAM TRAP

**Trap 1 — "Use a better prompt"**
The exam shows a scenario where someone gets a bad answer. The trap answer says "rewrite the prompt with better instructions." But the real problem is that the model never saw the document/data. No amount of prompt engineering fixes missing context.

**Trap 2 — "Switch to a stronger model"**
Another trap. If the model hasn't seen the contract, switching from Sonnet to Opus won't help. Opus is smarter, not psychic. It still can't analyze a document it was never given.

**Trap 3 — "Keep working in the same chat"**
When the chat is clearly stale (contradicting itself, forgetting rules), the trap says "just remind it of the rules." This might work once, but the underlying problem — the context window is full — doesn't go away. The right move is the state summary → fresh chat approach.

**The right pattern:** Context first, model second, prompt third.

---

### QUICK CHECK

**Q:** A financial analyst asks Claude to find errors in a budget spreadsheet but types the request without uploading the file. Claude gives general advice about common spreadsheet errors. What should the analyst do?

**A:** Upload the actual spreadsheet and re-ask. The model gave generic advice because it had no specific data to work with. A capable human colleague couldn't find errors in a spreadsheet they'd never seen either. Better context beats a better prompt.

---
---

## PART 1 RECAP: How Concepts 1, 2, and 3 Connect

```
CONCEPT 1                  CONCEPT 2                  CONCEPT 3
Platform Awareness         Model Selection            Context Matters
                          
"Learn the discipline,     "Choose the model          "Give the model what
 not the button"            by the task"               a human would need"
                          
       |                        |                          |
       v                        v                          v
+------------------------------------------------------------------+
|                                                                  |
|                THE COMPLETE STARTING HABIT                        |
|                                                                  |
|  1. KNOW YOUR TOOLS (C1)                                         |
|     - Same discipline works in Claude and ChatGPT                |
|     - Learn the pattern: tasks, context, checking                |
|     - For important work, compare both tools                     |
|                                                                  |
|  2. PICK THE RIGHT LEVEL (C2)                                    |
|     - Simple task? Fast mode.                                    |
|     - Hard reasoning? Thinking mode.                             |
|     - Genuinely difficult? Flagship.                             |
|     - "AI failed" might mean "wrong tier"                        |
|                                                                  |
|  3. GIVE THE RIGHT CONTEXT (C3)                                  |
|     - Upload the actual document/data/screenshot                 |
|     - Better context > cleverer prompt                           |
|     - When chat goes stale: state summary -> fresh chat          |
|     - If repeating context weekly: you need a project            |
|                                                                  |
+------------------------------------------------------------------+
                          |
                          v
              THEN: check the output.
              (That's the rest of the exam.)
```

#### The Three-Question Pre-Flight Check

Before sending any important request to any AI assistant:

| # | Question | Maps to |
|---|----------|---------|
| 1 | Am I using the right tool for this? | Concept 1 (Platform Awareness) |
| 2 | Am I using the right model tier? | Concept 2 (Model Selection) |
| 3 | Does the model have everything it needs? | Concept 3 (Context) |

If any answer is "no," fix that before worrying about the prompt.

---
---

## EXAM-LEVEL PRACTICE QUESTIONS

> **Instructions:** Each question presents a workplace scenario. Select the BEST answer unless the question says "Select TWO." These questions test judgment, not recall.

---

### Question 1 · D3 · Product & Model Selection

A data analyst named Nida has been using ChatGPT for six months to help with weekly sales reports. Her company has just added Claude to its approved [ijazat-shuda] tool list. Nida's manager asks her to evaluate [jaanch karna] whether Claude would be better for the team's reporting workflow [kaam ka process — step by step kaise karte hain].

What is the MOST appropriate way for Nida to evaluate this?

**A.** Read online benchmark [comparison test] comparisons of Claude vs. ChatGPT and recommend whichever scores higher on reasoning tasks.

**B.** Run last week's actual sales report task in both Claude and ChatGPT, using the same data and instructions, and compare the quality, speed, and usability of both outputs.

**C.** Ask ChatGPT whether Claude would be better at the team's specific reporting workflow.

**D.** Switch the entire team to Claude for a month and see if anyone complains.

---

### Question 2 · D3 · Product & Model Selection

Zain is a compliance [qanoon/rules ki pabandi] officer at a fintech [finance + technology] startup. He needs to use Claude for three tasks this morning:

1. Write a two-sentence Slack message to his team about a meeting time change
2. Cross-reference [milaan karna] 14 regulatory [sarkari rules ke mutaabiq] requirements against the company's current policies to identify gaps [kahan rules poore nahi ho rahe]
3. Summarize a one-page internal memo [chhota andarooni document] for his manager

Zain has a limited monthly quota [monthly allowance] for flagship model usage. Which task should he allocate [taqs karna — set aside] flagship-level capability to?

**A.** Task 1 — The Slack message, because professional communication should always use the best available model.

**B.** Task 2 — The regulatory cross-reference, because it requires multi-step comparison across multiple documents and any missed gap could have serious consequences.

**C.** Task 3 — The memo summary, because the manager will see this output and it needs to be high quality.

**D.** All three tasks — quality should never be compromised [kamzor nahi karna chahiye], regardless of quota.

---

### Question 3 · D5 · Configuration & Knowledge Management

Amina, an operations manager [jo rozana ke kaam-kaaj chalati hai], has been in the same Claude conversation for five hours while drafting a detailed client proposal [client ko bhejne wali peshkash]. She notices that Claude just used bullet points even though she instructed "no bullet points" at the start of the session. She also notices the project timeline it just suggested contradicts the timeline it helped her draft two hours ago.

What is the MOST appropriate next step?

**A.** Remind Claude of the "no bullet points" rule and ask it to correct the timeline contradiction, then continue in the same chat.

**B.** Ask Claude for a state summary of all decisions, rules, and open items, review and correct it, then paste it into a fresh conversation with the proposal files re-attached.

**C.** Start a completely new conversation from scratch and re-do the entire proposal.

**D.** Accept the latest output since it is probably more accurate than the earlier version.

---

### Question 4 · D3 + D5 · Product & Model Selection + Configuration

A junior marketing associate named Haris is asked to use Claude to analyze customer survey results. He receives a spreadsheet with 500 responses. He types into Claude:

> "What are the main themes in our customer survey?"

Claude provides a generic list of common survey themes: product quality, customer service, pricing, delivery speed. None of these are specific to Haris's company or survey.

What should Haris do FIRST?

**A.** Switch from Sonnet to Opus so that Claude gives a deeper analysis of the survey themes.

**B.** Rewrite his prompt with more detailed instructions about what themes to look for and how to categorize them.

**C.** Upload the actual survey spreadsheet and re-ask the question so Claude can analyze the real data.

**D.** Conclude that Claude is not capable of survey analysis and do it manually.

---

### Question 5 · D3 · Product & Model Selection

Nida manages a customer support team. She wants to use AI to help draft responses to common customer complaints. She asks a colleague which tool to use, and the colleague says: "Use Claude — it's the best one. I use it for everything."

Which response reflects the BEST professional judgment?

**A.** Follow the colleague's advice since they have experience with the tool and it would save time researching alternatives.

**B.** Use ChatGPT instead, since it has a larger user base and is therefore likely more capable for customer-facing work.

**C.** Test both Claude and ChatGPT on a few real past complaints she already handled well, compare the outputs against her known-good responses, and choose based on actual performance on her specific task.

**D.** Avoid using either tool for customer-facing work because AI-generated responses could damage customer relationships.

---

### Question 6 · D5 + D3 · 〔Select TWO〕

A project coordinator named Faisal uses ChatGPT to help manage a construction project. He typically starts a new chat each Monday, re-uploads the project plan, the budget spreadsheet, and the stakeholder [zimmedar log — people with decision-making interest in the project] contact list, and re-types his standing instructions about format and tone. By Wednesday, the chat usually gets long enough that ChatGPT starts forgetting his earlier instructions.

**Which TWO changes would MOST improve Faisal's workflow?**

**A.** Create a project in ChatGPT with the project plan, budget, and contact list as project files, and add his format and tone preferences as project instructions.

**B.** Switch to Claude permanently, because Claude handles longer conversations better than ChatGPT.

**C.** Copy his standing instructions about format and tone into ChatGPT's Custom Instructions so they apply automatically across all conversations.

**D.** Use the flagship model for all project work, which will remember context better than the default model.

---

### Question 7 · D5 · Configuration & Knowledge Management

Amina is an HR [Human Resources — insaani wasaail ka department, jo hiring/firing/employees ko dekhta hai] coordinator. She asks Claude to draft a termination letter [naukari se nikalne ka khat] for an employee, providing the employee's full name, ID number, salary details, and reason for termination in the chat. The next day, she starts a normal chat about something unrelated and notices Claude references the terminated employee's name.

What is the MOST appropriate action?

**A.** Ignore it — Claude remembering details from previous conversations is a useful feature that saves time.

**B.** Review Claude's memory settings, delete the sensitive employee information that was stored, and for future HR tasks involving personal data, consider using incognito chat [private mode — yaaddaasht mein save nahi hota] to prevent memory storage.

**C.** Stop using Claude for any HR work because it cannot be trusted with confidential [raazdaari wali] information.

**D.** Ask Claude to forget the employee's information by typing "forget everything about the termination letter."

---
---

## ANSWERS AND EXPLANATIONS

---

### Question 1 — Answer: B

**Why B is correct:** The only way to evaluate whether a tool works for YOUR task is to test it on YOUR task. Running the same real report in both tools, with the same data and instructions, gives Nida a direct, task-specific comparison. This is platform awareness in action — choosing by evidence, not loyalty or reputation.

**Why A is wrong:** Benchmarks test general capabilities, not Nida's specific workflow. A model that scores higher on reasoning may still produce worse sales reports for her team's format and data.

**Why C is wrong:** Asking one AI tool to evaluate a competitor is unreliable and potentially biased. It's also circular — ChatGPT has no insight into how Claude would handle Nida's specific data.

**Why D is wrong:** This is reckless. Switching an entire team without testing first risks productivity loss, frustration, and wasted time. Evaluate first, then decide.

---

### Question 2 — Answer: B

**Why B is correct:** Task 2 involves multi-step comparison across multiple documents, requires careful reasoning to spot gaps, and has real consequences if something is missed. This is exactly what flagship-level capability is designed for: hard reasoning, complex analysis, high stakes.

**Why A is wrong:** A two-sentence Slack message is routine work. The fast default model handles this perfectly. Using flagship capacity here is wasteful.

**Why C is wrong:** Summarizing a one-page memo is a straightforward task. Quality here depends more on having the memo (context) than on model power. Fast default is sufficient.

**Why D is wrong:** This is the "always use the best" trap. It wastes limited quota on tasks that don't need it and leaves nothing for when flagship capability is genuinely required. Choose the model by the task, not by habit.

---

### Question 3 — Answer: B

**Why B is correct:** Two warning signs appeared at once — rule amnesia (bullets returned) and self-contradiction (timelines don't match). The context window is likely full. The correct recovery is: get a state summary, verify it, paste into a fresh chat with files re-attached. This preserves all the work while restoring a clean context.

**Why A is wrong:** A quick reminder might fix the bullets, but it doesn't fix the fundamental problem — the context window is full. The contradiction will happen again. You're treating symptoms, not the cause.

**Why C is wrong:** Starting completely from scratch throws away five hours of decisions and work. This is the "wasteful" option. The state summary approach preserves everything important.

**Why D is wrong:** "The latest output is probably more accurate" is dangerous. When a model contradicts itself, you cannot assume which version is correct without checking. Blindly trusting the newest output is reckless.

---

### Question 4 — Answer: C

**Why C is correct:** Claude gave generic themes because it never saw the actual survey data. The model can only work with the information in front of it. Uploading the spreadsheet is the single most impactful change. Better context improves the answer more than a cleverer prompt or a stronger model.

**Why A is wrong:** Opus is more capable, but it still cannot analyze a spreadsheet it has never seen. You cannot reason deeply about data that isn't there. This is the "stronger model" trap — model power doesn't replace missing context.

**Why B is wrong:** Better instructions help, but without the data, Claude is still guessing about "common themes." Instructions tell the model HOW to work; context gives it WHAT to work with. Context comes first.

**Why D is wrong:** This is the abandonment trap. Claude absolutely can do survey analysis — it just needs to see the survey. Concluding "AI can't do this" when the real problem is missing context is a common and costly mistake.

---

### Question 5 — Answer: C

**Why C is correct:** Testing both tools on real past complaints she already handled well is the proving loop (Concept 9). It gives her evidence-based comparison against known-good results. This is platform awareness: choosing by tested performance on YOUR specific task, not by reputation or a colleague's preference.

**Why A is wrong:** The colleague's recommendation is based on THEIR use case, not Nida's. "I use it for everything" is exactly the kind of habit-based loyalty that platform awareness is designed to prevent.

**Why B is wrong:** "Larger user base" does not mean "better at this task." This is the same error as A — choosing by general reputation rather than task-specific testing.

**Why D is wrong:** This is the abandonment option. Avoiding AI entirely for customer-facing work isn't diligent — it's wasteful. With proper testing and human review, AI can safely assist with response drafting. The key is testing and checking, not avoiding.

---

### Question 6 — Answer: A and C

**Why A is correct:** Faisal is re-uploading the same files every Monday. A project is exactly the solution — files persist across chats, instructions stay attached. This eliminates the weekly re-upload problem. The crash course's own test says: "If you have explained the same background or uploaded the same file three times, that work deserves a project."

**Why C is correct:** Faisal also re-types the same format and tone instructions weekly. Custom Instructions (standing instructions in ChatGPT) are designed for stable rules that apply broadly. Putting format and tone preferences there means they apply automatically — no re-typing needed.

**Why B is wrong:** Switching platforms entirely doesn't address the real problem (repetitive re-uploading and missing persistent instructions). Both Claude and ChatGPT have the same context window limitations. This is brand loyalty, not problem-solving.

**Why D is wrong:** The flagship model does not have a larger context window or better memory across sessions. Model tier affects reasoning depth, not persistence. The problem here is configuration (no project, no standing instructions), not model capability.

---

### Question 7 — Answer: B

**Why B is correct:** Sensitive employee information was stored in Claude's memory — this is a data privacy issue. The correct response has three parts: (1) review memory and delete the sensitive data now, (2) understand how memory works so it doesn't happen again, and (3) use incognito chat for future sensitive HR tasks to prevent memory storage. This preserves the tool's usefulness while protecting confidential information.

**Why A is wrong:** This is reckless. Employee termination details — names, IDs, salary, reasons — are highly confidential. Having this appear in unrelated conversations is a data leak. "Saves time" does not override privacy obligations.

**Why C is wrong:** This is the abandonment trap. Claude is a useful tool for HR work — the problem isn't the tool, it's the configuration. Memory can be managed, and incognito mode exists for exactly this purpose. Abandoning the tool entirely is wasteful when the fix is straightforward.

**Why D is wrong:** Asking the AI to "forget" something in a chat message does not reliably clear stored memory. The correct approach is to go into memory settings and delete the specific entries. This answer sounds proactive but doesn't actually solve the problem.

---
