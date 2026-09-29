# ChatGPT & Claude Quick Reference — SCENARIO GUIDE Part 3

## OUTPUT & AUTOMATION

> **Concepts covered:** 6 (Artifacts & Writing Blocks), 7 (Skills & Plugins)
> **CCAO-F Domains:** D1 (Prompting & Task Execution), D4 (Workflow Integration & Solution Design)
> **Read time:** ~22 minutes

---

## CONCEPT 6: Artifacts and Writing Blocks — Work You Can Take Away

**CCAO-F Domain: D1 — Prompting & Task Execution**

---

### THE SCENARIO

Faisal is a procurement specialist [khareedaari ka maahir] at a construction firm. His manager asks him to create a vendor comparison tool — something the team can use every month to compare supplier quotes side by side.

Faisal opens Claude and types:

> "Make me a vendor comparison tool."

Claude responds with a three-paragraph explanation of what a vendor comparison tool could look like. Useful reading, but nothing Faisal can hand to his team.

He tries again:

> "Build an interactive vendor comparison tool as an artifact. I should be able to enter up to five suppliers, input their unit price, delivery time in days, warranty period in months, and a pass/fail quality rating. Show a summary table sorted by total score, and highlight the best option in green. The audience is our procurement team — they are not technical, so keep the interface simple."

Claude creates an **artifact** [alag se bana hua output — document, code, chart jo chat se bahar dikhe] — a working interactive tool that opens in a panel beside the conversation. Faisal can see the tool while still chatting with Claude to refine it. He says "add a column for payment terms" and the artifact updates. He says "make the highlight yellow instead of green — our company style" and it updates again.

Meanwhile, his colleague Usman gets the same task from the same manager. Usman uses ChatGPT. He remembers a tutorial that told him to use **canvas** [ChatGPT ka purana side-by-side editor — ab band ho gaya hai, 2026 mein retired]. He searches the interface for canvas. It's gone. He wastes 20 minutes looking for it.

Eventually he types the same detailed request. ChatGPT produces the tool as a **writing block** [likhai ka editable hissa jo chat ke andar alag dikhta hai] and a **code block** [code ka editable hissa — same idea as writing block but for code] — editable regions that sit inline in the conversation thread. Different layout than Faisal's artifact panel, but the same result: a usable, separate work product.

---

### WHAT WENT WRONG (and RIGHT)

**Faisal's first attempt** failed because "make me a vendor comparison tool" didn't describe what the finished thing should DO. The assistant responded the only way it could — with a general description.

**Faisal's second attempt** worked because he described:
- What the tool should DO (enter suppliers, compare scores, highlight winner)
- WHO it's for (non-technical procurement team)
- What FORMAT he wanted (interactive artifact with specific columns)

**Usman's mistake** was looking for a feature name (canvas) instead of understanding the concept (separate work output). Canvas was retired. The concept lives on as writing blocks and code blocks. If Usman had learned the pattern instead of the button name, he would have just typed his request and let ChatGPT choose the right output format.

---

### THE CONCEPT

Chat is good for conversation. It is a poor container for finished work.

When you ask for a report, a tool, a diagram, or an application, you want the result as a **separate object** — not one more message in a scroll.

```
THE PROBLEM WITH WORK STUCK IN CHAT:

Chat message #1: "Here's the introduction..."
Chat message #2: "Here's the revised version..."
Chat message #3: "Now with the edits you asked for..."
Chat message #4: "Final version with the table..."

   Where is the final thing??
   You're scrolling forever. Can't edit. Can't export.
   Can't hand it to a colleague without copy-pasting.

THE SOLUTION:

+--------------------+    +--------------------+
|    CONVERSATION    |    |   WORK PRODUCT     |
|                    |    |                    |
|  "Add a column"    |    |  [The actual tool] |
|  "Change color"    |    |  [Updates live]    |
|  "Looks good,      |    |  [Downloadable]    |
|   now export it"   |    |  [Editable]        |
+--------------------+    +--------------------+
   Discussion side           Output side
```

#### Claude vs. ChatGPT: Same Idea, Different Design

| Feature | Claude | ChatGPT |
|---------|--------|---------|
| What it's called | **Artifact** | **Writing block** / **Code block** |
| Where it appears | Side panel beside the chat | Inline in the conversation thread |
| What it can be | Document, code, web page, diagram, vector image, calculator, dashboard, interactive app | Editable text or code regions inline |
| File creation | Also creates Word, Excel, PowerPoint, PDF files | Also creates downloadable files |
| Old name to forget | N/A | ~~Canvas~~ (retired in 2026) |

> **Exam note:** If a question mentions "canvas," know that it was ChatGPT's older side-by-side editor. It has been replaced by writing blocks and code blocks. The concept (separate work from chat) hasn't changed — only the interface.

#### How to Get Better Results from Artifacts and Writing Blocks

```
WEAK REQUEST                      STRONG REQUEST
+--------------------------+      +--------------------------+
| "Make a dashboard"       |      | "Build a dashboard that  |
|                          |      |  shows monthly expenses  |
| No: WHAT should it show? |      |  by category. Include a  |
| No: WHO is it for?       |      |  pie chart and a bar     |
| No: WHAT should it DO?   |      |  chart. Add a filter for |
|                          |      |  date range. Audience:   |
| Result: generic advice   |      |  finance team, not       |
|         or vague mockup  |      |  technical. Format: a    |
|                          |      |  clean, downloadable     |
+--------------------------+      |  HTML page."             |
                                  |                          |
                                  | Result: working tool     |
                                  +--------------------------+
```

**The checklist for any work-product request:**

| Ask yourself | Example |
|---|---|
| What should it DO? | "Enter expenses, see a chart, get a warning" |
| WHO is it for? | "Non-technical procurement team" |
| What FORMAT? | "Interactive artifact" / "Excel file" / "HTML page" |
| What CONSTRAINTS? | "Simple interface, company colors, PKR currency" |

#### The Data Rule

When the output is **data** — numbers, comparisons, vendor lists, schedules — always ask for **structured output** [organized data — table ya spreadsheet, paragraph nahi].

```
PARAGRAPH (useless for data):

"Vendor A offers steel at $450 per ton with 30-day delivery
 and a 12-month warranty, while Vendor B offers $420 per ton
 but delivery takes 45 days and the warranty is only 6 months,
 and Vendor C..."

  --> Can't sort. Can't filter. Can't paste into Excel.

TABLE (useful for data):

| Vendor | Price/ton | Delivery | Warranty |
|--------|-----------|----------|----------|
| A      | $450      | 30 days  | 12 mo    |
| B      | $420      | 45 days  | 6 mo     |
| C      | $380      | 60 days  | 12 mo    |

  --> Sortable. Filterable. Paste-ready.
```

If you can imagine your colleague opening it in Excel, ask for a table or a spreadsheet file.

#### One Change at a Time

When revising an artifact or writing block, give one clear instruction per message:

- "Add a column for payment terms." ✓
- "Change the highlight from green to yellow." ✓
- "Add payment terms, change the color, reorder the columns, add a footer, and make it print-friendly." ✗ (too many changes = confused output)

**Key rule:** Chat is the conversation; artifacts, writing blocks, and code blocks hold the work.

---

### EXAM TRAP

**Trap 1 — "Copy the answer from chat into a document manually"**
The exam shows someone who gets a long report as a chat message and copies it into Word by hand. The trap is that this WORKS, so people think it's fine. But it's slow, error-prone, and unnecessary. Ask for the output as an artifact, writing block, or downloadable file in the first place.

**Trap 2 — "Use canvas for side-by-side editing"**
If the exam mentions canvas, recognize it as outdated. The correct current answer involves writing blocks and code blocks. Don't pick an answer that assumes canvas still exists.

**Trap 3 — "Describe the tool vaguely and iterate later"**
An answer that says "just ask for a dashboard, then keep refining" sounds agile [flexible tareeqa]. But vague first requests produce vague first outputs, and you spend more time fixing than you save. Describing what the finished thing should DO upfront is more efficient.

**Trap 4 — "Data should be in a report with explanations"**
When the output is data (vendor comparisons, pricing tables, schedules), the trap answer asks for a prose summary. The correct choice for data is structured output — a table or spreadsheet. Prose about data can't be sorted, filtered, or loaded into another tool.

---

### QUICK CHECK

**Q:** A finance manager asks Claude to compare 15 insurance quotes. Claude returns a five-paragraph summary describing each quote in prose. The manager needs to share this with her team for discussion. What should she ask for instead?

**A:** A structured table (or downloadable spreadsheet) with one row per quote and columns for premium, coverage, deductible, and other key factors. Her team can then sort, filter, and compare directly. Data belongs in structured output, not paragraphs.

---
---

## CONCEPT 7: Skills and Plugins — Packaged Ways of Working

**CCAO-F Domain: D4 — Workflow Integration & Solution Design**

---

### THE SCENARIO

Amina is a quality assurance [quality jaanch] coordinator at a pharmaceutical [dawai banane wali] company. Every month, she reviews batch production reports against a 28-point compliance checklist. The review follows the exact same method every time:

1. Check that all required fields are present
2. Verify batch numbers match across sections
3. Flag any deviation [farq/hatna — where reality didn't match the plan] from approved ranges
4. Summarize findings in a table: item, status, severity [kitna serious hai]
5. Draft an email to the production manager with the findings

Amina has been doing this in Claude for four months. Every month she types the same mega-prompt:

> "You are a QA reviewer for pharmaceutical batch reports. Here is the compliance checklist: [28 items]. Here is the process: first check all required fields are present. Then verify batch numbers match across sections. Then flag any deviation from approved ranges. Summarize as a table with item, status, and severity. Finally draft an email to the production manager..."

Four hundred words of instructions. Every. Single. Month.

Her colleague Nida does the same review for a different production line. Nida saw Amina's method and asked: "Why don't you package that as a **skill** [packaged tareeqa — method jo ek baar banaao, baar baar use karo]?"

Nida took Amina's 400-word mega-prompt and turned it into a skill:
- The 28-point checklist as a reference document
- Step-by-step instructions for the review process
- An example of what good output looks like
- The email template for findings

Now when either of them uploads a batch report, the skill loads automatically. No re-typing. No forgetting step 3. No "wait, what was the email format again?"

But Nida went further. She noticed that the review also needed to pull data from their lab management system [lab ka software] and send the findings email through the company's communication tool. She found a **plugin** [skill + connector + commands ka bundle — ek poora kaam ka package] that bundled:
- The QA review skill (the method)
- A connector to the lab management system (the data source)
- An action to draft and queue the email (the delivery)

One plugin. The whole job.

---

### WHAT WENT WRONG (and RIGHT)

**Amina** re-taught the same method every month. She had the right knowledge (the checklist was in her project) but no packaged method. Every session started from scratch on process.

**Nida recognized the pattern:** when a METHOD repeats, it should be packaged. A skill captures the how — the steps, the checklist, the output format — so the assistant follows the same process every time without re-teaching.

**The plugin** took it one step further: it bundled the skill with the connections needed to get data in and send results out. Skill = method. Plugin = method + reach.

---

### THE CONCEPT

Projects answer: *"How do I keep the right knowledge together?"*

Skills answer: *"How do I make the assistant follow the same method every time?"*

```
THE WHAT vs. HOW DISTINCTION

PROJECT (the WHAT)                 SKILL (the HOW)
+---------------------------+      +---------------------------+
| Client's contract         |      | "Review contracts using   |
| Client's brand guide      |      |  this 12-point checklist. |
| Last quarter's data       |      |  Flag risks in a table.   |
| Reporting template        |      |  Draft a summary email."  |
+---------------------------+      +---------------------------+
     The KNOWLEDGE                      The METHOD
     for this work                      for this task
              |                              |
              +----------> TOGETHER <--------+
              |                              |
              v                              v
        "What to work with"          "How to do the work"
```

#### What a Skill Contains

A skill is a packaged way of doing a task. It can include:

| Component | Purpose | Example |
|---|---|---|
| Instructions | The step-by-step method | "First check fields, then verify batch numbers..." |
| Examples | What good output looks like | A sample completed review |
| Supporting resources | Reference materials the method needs | The 28-point compliance checklist |
| Code (sometimes) | Automated steps or calculations | A scoring formula |

The assistant loads the skill when a matching task appears. You don't invoke it manually each time — the match is the trigger.

#### The Agent Skills Open Standard

Both Claude and ChatGPT build their skills on the **Agent Skills open standard** [open standard — ek format jo har company ka tool parh sakta hai], published at agentskills.io.

A skill is a folder of Markdown files. No server. No runtime [chalane ka system — server ya software jo code execute kare]. That's what makes it **portable** [jo ek jagah se doosri jagah le ja sako — works across different tools] — dozens of tools across several companies now read the same format.

```
WHY PORTABILITY MATTERS:

Traditional workflow:
  Built in Tool A --> Locked to Tool A forever

Skill-based workflow:
  Skill (Markdown) --> Works in Claude
                   --> Works in ChatGPT
                   --> Works in future tools
                   --> You own the method, not the vendor
```

This is the lesson from Concept 1: **the discipline is the constant; the tool is the variable.** Skills are that idea made concrete — a method that travels with you.

#### Skill vs. Plugin vs. Custom GPT vs. Project

People confuse these constantly. Here's the clean comparison:

| Thing | What it stores/does | Think of it as... |
|---|---|---|
| **Project** | Context for one stream of work (files, chats, instructions) | A room |
| **Skill** | A method for doing one type of task (steps, checklist, examples) | A recipe |
| **Custom GPT** [ChatGPT mein alag se set kiya hua assistant — apni instructions, personality, knowledge ke saath] | A separately configured assistant with its own persona, knowledge, and tools | A specialist colleague |
| **Plugin** | A bundle of skills + connectors + sometimes commands and sub-agents [chhote assistants jo main assistant ke andar kaam karein] | A toolkit |

```
THE HIERARCHY:

+--------------------------------------------------+
|  PLUGIN (the full toolkit)                       |
|                                                  |
|  +------------------+  +----------------------+  |
|  |    SKILL(S)      |  |  CONNECTOR(S)/APP(S) |  |
|  |                  |  |                      |  |
|  | The method       |  | Access to outside    |  |
|  | (instructions,   |  | systems (email,      |  |
|  |  examples, code) |  |  calendar, databases) |  |
|  +------------------+  +----------------------+  |
|                                                  |
|  + optional commands, sub-agents                 |
+--------------------------------------------------+
```

Claude lists skills, connectors, and plugins in a single directory at claude.ai/directory — the fastest way to check what already exists before you build your own.

#### The One Line That Settles It

```
+---------------------------------------------------+
|                                                   |
|  Projects store KNOWLEDGE.  Skills perform TASKS. |
|                                                   |
|  A customer-preparation skill can USE the         |
|  customer files stored in a project.              |
|                                                   |
|  Project = the WHAT.   Skill = the HOW.           |
|                                                   |
+---------------------------------------------------+
```

**When to create a skill (the test):**

> If you have typed the same process instructions three times, that process deserves a skill.

Compare with the project test from Concept 4: "If you have uploaded the same file three times, that work deserves a project."

Same pattern. Different persistence problem. Different solution.

**Key rule:** When a method repeats, package the method.

---

### EXAM TRAP

**Trap 1 — "Put the process steps in the project instructions"**
The exam shows someone adding their review method into the project's instructions field. This WORKS for one project, but the method can't be reused in other projects. If the same method applies across clients or workstreams, it should be a skill, not project instructions. Project instructions are scoped; skills are portable.

**Trap 2 — "A custom GPT is the same as a skill"**
It's not. A custom GPT is a separately configured assistant — its own persona, memory, knowledge. A skill is a packaged method that loads inside your EXISTING assistant. A custom GPT is a specialist colleague. A skill is a recipe your own assistant learns.

**Trap 3 — "Build a new skill for every task"**
The exam shows someone packaging a one-time task as a skill. Skills are for methods that REPEAT. A one-off analysis doesn't need packaging. Over-engineering is as wasteful as under-engineering.

**Trap 4 — "Skills replace projects"**
No. Skills and projects solve different problems. You need BOTH for well-organized work. The project holds what you work with (files, context). The skill holds how you do the work (method, checklist). Choosing one or the other leaves a gap.

---

### QUICK CHECK

**Q:** A consultant reviews client proposals every week using the same seven-step process. She keeps the process steps saved in her Claude project instructions. She now starts working with a second client who needs the same type of review. What should she do?

**A:** Extract the seven-step review process from the project instructions and package it as a skill. Then it can be used in BOTH client projects — Client A's project has Client A's files, Client B's project has Client B's files, and the same skill provides the review method in both. Project = WHAT (each client's documents). Skill = HOW (the seven-step process).

---
---

## PART 3 RECAP: How Concepts 6 and 7 Connect (and Link to Parts 1–2)

```
PART 1 (Concepts 1-3)         PART 2 (Concepts 4-5)         PART 3 (Concepts 6-7)

C1: Learn the discipline  --> C4: Projects organize     --> C6: Artifacts hold the
    not the buttons              ongoing work                 finished work product

C2: Pick the right model  --> C5: Persistence Triad     --> C7: Skills package the
    for the task                 (instructions,               repeatable METHOD
                                  memory, projects)

C3: Give the right        --> "Same background 3x?      --> "Same method 3x?
    context                    Make a project" (C4)          Make a skill" (C7)
```

#### The Full Picture So Far

| Question | Answer | Concept |
|---|---|---|
| Which tool should I use? | The one that works for THIS task (test both) | C1 — Platform Awareness |
| Which model tier? | Fast → Thinking → Flagship by task difficulty | C2 — Model Selection |
| What does the model need to see? | The actual document/data/screenshot | C3 — Context |
| How do I stop re-uploading? | Create a project | C4 — Projects |
| Where do stable rules go? | Standing instructions | C5 — Persistence Triad |
| Where does evolving context go? | Memory | C5 — Persistence Triad |
| How do I get a usable work product? | Ask for artifact / writing block / structured output | C6 — Artifacts |
| How do I stop re-teaching the method? | Package it as a skill | C7 — Skills |

#### The Two Packaging Tests

```
TEST 1 — KNOWLEDGE:
"Have I uploaded the same file 3 times?"
  YES --> Make a PROJECT

TEST 2 — METHOD:
"Have I typed the same process instructions 3 times?"
  YES --> Make a SKILL
```

Both tests save time. But more importantly, both make the assistant CONSISTENT — it follows the same method and uses the same knowledge every time, instead of depending on whatever you remembered to type that day.

---
---

## EXAM-LEVEL PRACTICE QUESTIONS

> **Instructions:** Each question presents a workplace scenario. Select the BEST answer unless the question says "Select TWO." These questions test judgment, not recall.

---

### Question 1 · D1 · Prompting & Task Execution

Haris, a supply chain analyst [jo saamaan ki supply ka chain dekhta hai], asks Claude to compare eight freight carriers [saamaan dhone wali companies] on price, transit time, damage rate, and insurance coverage. Claude responds with four paragraphs — one per criterion [paimana] — weaving all eight carriers into flowing prose.

Haris needs to share this with his logistics director for a decision meeting in one hour.

What is the MOST appropriate next step?

**A.** Copy the four paragraphs into a Word document, add headers, and send it to the director.

**B.** Ask Claude to regenerate the comparison as a table with one row per carrier and one column per criterion, or as a downloadable spreadsheet.

**C.** Ask the director to read Claude's chat output directly by sharing the conversation link.

**D.** Rewrite the paragraphs himself into a table manually in Excel, since AI-generated tables may contain formatting errors.

---

### Question 2 · D1 · Prompting & Task Execution

Nida, an event coordinator, asks ChatGPT to build a guest registration form as an interactive tool. She types:

> "Make a registration form."

ChatGPT produces a basic text template with blank lines for name and email.

What should Nida do to get a working interactive form?

**A.** Switch to the flagship model (Pro), which is more capable at creating interactive content.

**B.** Search for the canvas feature, which is designed specifically for building interactive forms in ChatGPT.

**C.** Describe what the finished form should DO: "Build an interactive registration form where guests enter their name, email, dietary preference from a dropdown, and session choices from checkboxes. Show a confirmation message on submit. Audience: non-technical event guests."

**D.** Give up on getting an interactive form from ChatGPT and use a dedicated form-builder tool like Google Forms instead.

---

### Question 3 · D4 · Workflow Integration & Solution Design

Bilal is a financial auditor [maaliyaati jaanch karne wala]. Every quarter, he reviews expense reports from five departments using the same 15-point checklist. He has a Claude project called "Quarterly Expense Audit" with the checklist document, last quarter's reports, and department budget limits as project knowledge.

Every time he starts a review, he types: "Use the 15-point checklist. For each point, give status and severity. Summarize in a table. Then draft a note to the department head."

A new auditor, Sara, joins the team. She will run the same review for three additional departments.

What is the BEST way to set Sara up for success?

**A.** Share the Claude project with Sara so she has access to the checklist and can copy Bilal's process from chat history.

**B.** Package the 15-point review method as a skill (with the checklist, step-by-step instructions, output format, and email template), and have Sara create her own projects for her three departments with department-specific files.

**C.** Have Sara create a custom GPT trained specifically on expense auditing so she has a dedicated assistant for the work.

**D.** Write the entire process into a Word document and upload it to Sara's project as project knowledge, so Claude can reference it.

---

### Question 4 · D4 · Workflow Integration & Solution Design

Fatima manages client onboarding [naya client shuru karna — setting up new clients] at a consulting firm. She has built:

- A Claude project for each client (with their contract, org chart, and requirements)
- A skill for the onboarding review (a 10-step process she follows for every new client)

A new colleague asks: "Why do you need both? Can't you just put everything in the project?"

Which explanation BEST captures the correct relationship?

**A.** "The project is a backup in case the skill breaks. They store the same information in two places for safety."

**B.** "The project holds WHAT I work with — each client's specific documents. The skill holds HOW I do the work — the 10-step onboarding process. The skill uses the client's files from the project. Together they give me consistent method plus specific context."

**C.** "The skill is just a shortcut that pastes my instructions into the project automatically. They're basically the same thing."

**D.** "The project is for storage and the skill is for communication. I use the project to save files and the skill to explain my process to new team members."

---

### Question 5 · D1 + D4 · Prompting & Task Execution + Workflow Design · 〔Select TWO〕

Zain, a marketing manager, asks Claude to produce two outputs from a customer survey dataset (already uploaded in his project):

**Output A:** A written narrative analyzing key themes for the annual marketing report (audience: the board of directors [company ke directors jo bade faislay karte hain])

**Output B:** A comparison of satisfaction scores across five product lines with ranking

**Which TWO approaches are MOST appropriate for getting the best results?**

**A.** For Output A, ask for an artifact document written in formal, concise prose with section headings — since the audience is the board, the format should be a polished narrative document.

**B.** For Output B, ask Claude to write a detailed analysis paragraph for each product line, since written context helps the reader understand nuances.

**C.** For Output B, ask for a structured table or downloadable spreadsheet with one row per product line and columns for satisfaction score, rank, and year-over-year change — since this is comparative data, structured output is the right format.

**D.** For both outputs, ask Claude to produce everything in a single chat message to keep it simple.

---

### Question 6 · D4 · Workflow Integration & Solution Design

Amina works at a recruitment agency [naukri dilwane wali company]. She creates a skill for screening resumes [CVs chhaan'na — filtering candidates]: it includes a scoring rubric [nishaan lagane ka tareeqa — grading criteria], a standard summary template, and a rejection-email draft format.

Two months later, the agency changes its scoring criteria to include a new "diversity of experience" factor and removes the "years of experience" factor.

Amina continues using the old skill without updating it.

What risk does this create?

**A.** No risk — the skill is just a guideline, and Claude will naturally adapt to current best practices on its own.

**B.** Candidates will be scored on outdated criteria, potentially rejecting qualified candidates and advancing less suitable ones, because the skill's instructions override Claude's general knowledge with a specific, now-wrong method.

**C.** The skill will stop working entirely because it references a criterion that no longer exists in the agency's system.

**D.** Claude will flag the outdated scoring criteria and ask Amina to confirm before proceeding with the old method.

---

### Question 7 · D1 + D4 · Prompting & Task Execution + Workflow Design

Usman is a project manager at an IT consultancy. He asks Claude to build an interactive project timeline tracker as an artifact. His first request is:

> "Build a project tracker. It should have tasks, dates, owners, status, a Gantt chart, dependency mapping, resource allocation view, budget burn-down chart, risk register, and milestone celebrations with confetti animations."

Claude produces an artifact that is partially broken — the Gantt chart overlaps with the budget chart, the dependency mapping doesn't work, and the confetti crashes the page.

What is the MOST appropriate adjustment?

**A.** Switch to Opus, which is more capable at handling complex interactive artifacts.

**B.** Break the request into smaller pieces: start with the core tracker (tasks, dates, owners, status), get that working, then add one feature at a time — Gantt chart, then dependencies, then budget tracking — verifying each addition works before requesting the next.

**C.** Abandon the artifact approach and build the tracker in dedicated project management software, since AI cannot handle this level of complexity.

**D.** Paste the same request again — Claude sometimes produces better output on a second attempt with the same prompt.

---
---

## ANSWERS AND EXPLANATIONS

---

### Question 1 — Answer: B

**Why B is correct:** The output is data (eight carriers, four criteria). Data belongs in structured output — a table or spreadsheet — not paragraphs. A table lets the director scan, compare, and sort. A spreadsheet file can be opened in Excel for filtering. This is the Data Rule: when the output is data, ask for structured output.

**Why A is wrong:** Copying paragraphs into Word doesn't change the format problem. The director still has to read prose to compare eight carriers. This creates extra work for Haris AND for the director, when a simple re-prompt would fix it.

**Why C is wrong:** Sharing a raw chat link with a director for a decision meeting is unprofessional and hard to navigate. The director needs a clean work product, not a conversation transcript. This is exactly why artifacts and structured output exist — to separate the work from the discussion.

**Why D is wrong:** Manually rebuilding the table in Excel is the wasteful option. Claude can generate the table or spreadsheet in seconds. Doing it by hand "because AI tables may have formatting errors" is like walking because cars might break down. Check the output — don't redo it from scratch.

---

### Question 2 — Answer: C

**Why C is correct:** The problem is a vague request. "Make a registration form" didn't describe what the finished thing should DO, who it's for, or what format it should take. The fix is to describe the complete behavior: fields, dropdowns, checkboxes, confirmation message, audience. This is the core lesson of Concept 6 — describe what the finished thing should do.

**Why A is wrong:** The flagship model produces better output on hard reasoning tasks, not on better-described tasks. A vague request to Pro still gets a vague result. The model wasn't the problem — the description was.

**Why B is wrong:** Canvas has been retired (2026). Searching for it wastes time and finds nothing. This is the outdated-reference trap. If someone learned "use canvas for interactive content," they need to update their mental model — writing blocks and code blocks replaced it, and you trigger them with a good description, not a button.

**Why D is wrong:** This is the abandonment trap. ChatGPT can absolutely produce interactive forms. The failure wasn't a tool limitation — it was a description limitation. Giving up on a capable tool because of a bad prompt is a common and costly mistake.

---

### Question 3 — Answer: B

**Why B is correct:** Bilal's 15-point review method repeats across departments and now needs to scale to a new team member. This is exactly when a method should become a skill. Package the method once (checklist, process steps, output format, email template), and any auditor can use it inside their own project. Sara creates projects for her departments (the WHAT — department-specific files and budgets) and uses the shared skill for the review method (the HOW).

**Why A is wrong:** Sharing the project gives Sara the files but not the method in a reusable form. She'd have to dig through Bilal's chat history to figure out the process — that's fragile and error-prone. Chat history is not documentation.

**Why C is wrong:** A custom GPT is a separately configured assistant — overkill for what's essentially a repeatable checklist process. It also locks Sara into ChatGPT and creates a separate environment instead of integrating the method into her existing workflow. A skill is lighter, more portable, and designed for exactly this purpose.

**Why D is wrong:** Uploading a Word document of the process is slightly better than chat-history digging, but it's still a document that Claude reads as context — not a structured skill that triggers automatically. It also can't include examples, scoring logic, or output templates the way a skill can. And it's scoped to one project — Sara would need to upload it to each of her three projects separately.

---

### Question 4 — Answer: B

**Why B is correct:** This is the core distinction of Concept 7 stated clearly: Project = WHAT (client-specific documents), Skill = HOW (the repeatable method). A customer-preparation skill uses the customer files stored in a project. Putting everything in the project would mean the method is locked to one project and must be re-written for every new client. Keeping them separate means the method is consistent across all clients while the context varies per client.

**Why A is wrong:** Projects and skills don't store the same information. They store fundamentally different things — knowledge vs. method. They're not redundant backups. This answer misunderstands both concepts.

**Why C is wrong:** A skill is not a shortcut that pastes instructions. It's a structured package (instructions, examples, resources, sometimes code) that loads when a matching task appears. It's a different mechanism from project instructions, and it's portable across projects — project instructions are not.

**Why D is wrong:** Skills are not for communication or documentation purposes. They are functional — the assistant loads and follows them during task execution. Describing a skill as "for explaining the process to new team members" misses its primary purpose: making the assistant follow the same method reliably.

---

### Question 5 — Answer: A and C

**Why A is correct:** Output A is a written analysis for the board — a narrative document. This calls for a polished artifact document with formal prose and section headings. The format matches the audience (board directors expect narrative reports, not raw data).

**Why C is correct:** Output B is comparative data (satisfaction scores ranked across five product lines). Data belongs in structured output — a table or spreadsheet. The director can sort by score, compare year-over-year change, and paste into other analyses. This is the Data Rule applied correctly.

**Why B is wrong:** Writing detailed paragraphs for comparative data (Output B) is the wrong format. You can't sort paragraphs. You can't filter prose. When the content is a comparison with scores and rankings, structured output serves the purpose. Paragraphs are for narrative interpretation, not data comparison.

**Why D is wrong:** Putting both outputs in a single chat message defeats the purpose of artifacts and writing blocks. A board-quality narrative and a comparison table are two different work products. Each should be a separate, editable, downloadable object. Combining them into one message makes editing, exporting, and reviewing harder.

---

### Question 6 — Answer: B

**Why B is correct:** A skill contains explicit instructions that the assistant follows. When those instructions say "score candidates on years of experience" but the agency now uses "diversity of experience," the skill overrides Claude's general knowledge with specific, now-outdated criteria. Candidates get scored wrong — good ones rejected, wrong ones advanced. Stale skills fail the same way stale project files do: silently, with confident-looking output.

**Why A is wrong:** This is the reckless option. Skills are NOT "just guidelines" — they are explicit instructions the assistant loads and follows. Claude will NOT "naturally adapt" past a skill's instructions. The whole point of a skill is to make the assistant follow a specific method consistently. If the method is wrong, the output is consistently wrong.

**Why C is wrong:** The skill won't "stop working" because it references an old criterion. It will keep working — incorrectly. "Years of experience" is still a concept Claude understands. It will still score on that basis. The absence of a matching field in an external system might cause problems, but the skill itself will happily apply the wrong criteria without breaking.

**Why D is wrong:** Claude will NOT flag outdated skill content. Just like stale project files (Concept 5), stale skills produce no warning. The assistant treats the skill's instructions as current truth. There is no built-in expiry date or contradiction check. Reviewing and updating skills is YOUR responsibility, on the same schedule you review memory and project files.

---

### Question 7 — Answer: B

**Why B is correct:** The request crammed too many features into one ask. Complex artifacts need to be built incrementally — one feature at a time, verifying each works before adding the next. Start with the core (tasks, dates, owners, status), get it right, then layer on complexity. "Revise one change at a time" is the principle from Concept 6 applied to building, not just editing.

**Why A is wrong:** Opus can handle more complex reasoning, but the problem here isn't model capability — it's request overload. Ten features in one prompt overwhelm any model. Switching to Opus and repeating the same overloaded request will produce a different failure, not a success.

**Why C is wrong:** This is the abandonment trap. AI can absolutely build interactive project trackers — the issue was asking for everything at once. Concluding "AI can't handle this complexity" when the real problem is request structure is premature. Break it into steps first.

**Why D is wrong:** Re-sending the exact same prompt rarely produces a better result — and when it does, it's by luck, not method. "Try again" without changing anything is not a strategy. The request itself needs restructuring: fewer features per iteration, verification between steps.

---
