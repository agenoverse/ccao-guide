---
type: Document
title: "ChatGPT & Claude Quick Reference: Scenario Guide Part 2"
description: "Scenario walkthroughs covering Projects, memory, temporary chats, and context management across both platforms."
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
order: 54
---

## BUILD YOUR WORKSPACE

> **Concepts covered:** 4 (Projects), 5 (Memory & Standing Instructions)
> **CCAO-F Domain:** D5 (Configuration & Knowledge Management)
> **Read time:** ~20 minutes

---

## CONCEPT 4: Projects — A Room for One Stream of Work

**CCAO-F Domain: D5 — Configuration & Knowledge Management**

---

### THE SCENARIO

Bilal works as a client relationship manager [jo clients ke saath rishta sambhaalta hai] at a digital marketing agency. He handles three major clients: a restaurant chain, a clothing brand, and a hospital group.

Every Monday, Bilal opens Claude and starts a new chat:

> "I'm working on the Q3 campaign for FreshBite Restaurant. Here's their brand guide [brand ki rules wali document — colors, tone, do's and don'ts]. Here's last month's performance report. Here's the target audience brief [mukhtasar summary — who we're trying to reach]. Remember, they want a casual tone, never use the word 'cheap,' and all prices must be in PKR..."

He uploads three PDFs, types four paragraphs of background, and THEN asks his actual question.

On Tuesday, he opens a new chat for the same client:

> "I'm working on the FreshBite campaign again. Let me re-upload their brand guide..."

Same files. Same instructions. Same background. Again.

By Wednesday he has six separate chats about FreshBite scattered in his sidebar — and he can't remember which one has the version of the social media calendar that the client approved.

For his other two clients, it's the same chaos. Fifteen chats, three clients, no organization. He spends more time FINDING past work than DOING new work.

His colleague Sara, handling the same number of clients, created three **projects** on day one:

```
Sara's sidebar:
+---------------------------+
| PROJECT: FreshBite Q3     |
|   - Brand guide (uploaded)|
|   - Performance reports   |
|   - "Casual tone, no      |
|     'cheap', PKR only"    |
|   - All FreshBite chats   |
+---------------------------+
| PROJECT: UrbanThread F/W  |
|   - Lookbook, style rules |
|   - All UrbanThread chats |
+---------------------------+
| PROJECT: CityHealth       |
|   - Compliance docs       |
|   - All CityHealth chats  |
+---------------------------+
```

Sara never re-uploads. Never re-types instructions. Every new chat inside a project already has the files and the rules. She opens a project, asks her question, and the assistant already knows the context.

---

### WHAT WENT WRONG (and RIGHT)

**Bilal** treated every conversation as a fresh start. He re-uploaded the same files and re-explained the same background dozens of times. His work was scattered across unconnected chats with no way to find anything.

**Sara** recognized that each client was an ongoing stream of work — not a one-off question. She created a project for each one, uploaded the files once, wrote the instructions once, and every future conversation inherited that context automatically.

---

### THE CONCEPT

A **project** is a workspace for one stream of work. Think of it as a room where everything about one topic stays together.

```
ANATOMY OF A PROJECT
+--------------------------------------------------+
|  PROJECT: [One Stream of Work]                   |
|                                                  |
|  +------------+  +------------+  +-------------+ |
|  |   CHATS    |  | KNOWLEDGE  |  | INSTRUCTIONS| |
|  |            |  |            |  |             | |
|  | All related|  | Files you  |  | Standing    | |
|  | convos     |  | upload     |  | guidance    | |
|  | grouped    |  | once       |  | applied to  | |
|  | together   |  |            |  | every chat  | |
|  +------------+  +------------+  +-------------+ |
|                                                  |
|  = Context that PERSISTS across conversations    |
+--------------------------------------------------+
```

A project makes context persistent [hamesha available — doesn't disappear after one chat] for one stream of work. In the language of the course, it's the smallest "System of Context" you'll ever build.

#### Claude vs. ChatGPT: How Projects Handle Growth

The two products differ in an important way when your project gets large:

| Feature | Claude | ChatGPT |
|---------|--------|---------|
| How it handles lots of files | **Retrieval** [dhoondna — searches through files instead of holding everything in memory at once]. When project knowledge grows past what fits in the context window, Claude switches to RAG [Retrieval Augmented Generation — file mein se dhoond ke jawab dena]. Capacity expands up to ~10x. Automatic. Paid-plan feature. | **Project memory** accumulates inside the room. Can use default memory (wider memory participates) or **project-only memory** (a real boundary — outside memories stay out). |
| What that means | Claude's projects scale better for LARGE knowledge bases | ChatGPT's project-only memory creates real **isolation** [alag karna — project ki cheezein bahar nahi jaayein, aur bahar ki cheezein andar nahi aayein] |

```
CLAUDE PROJECT (large knowledge)       CHATGPT PROJECT (isolation)

+-------------------+                  +-------------------+
| 50 files uploaded |                  | Project-only      |
| Too much for      |                  | memory: ON        |
| context window    |                  |                   |
|        |          |                  | Outside memory    |
|        v          |                  | BLOCKED ----X     |
| RAG kicks in      |                  |                   |
| Searches, doesn't |                  | What happens in   |
| load everything   |                  | this project STAYS|
| ~10x capacity     |                  | in this project   |
+-------------------+                  +-------------------+
```

So: a project ALWAYS helps you organize. **Project-only memory** (ChatGPT) is what turns it into true isolation.

#### When Should You Create a Project?

Use this test:

```
+-------------------------------------------------------+
|                                                       |
|  Have you explained the same background               |
|  or uploaded the same file THREE TIMES?               |
|                                                       |
|     YES  -->  That work deserves a project.           |
|     NO   -->  Keep using regular chats.               |
|                                                       |
+-------------------------------------------------------+
```

One-off questions do not need a project. Projects are for work that **continues**.

**Key rule:** Projects are for work that continues.

---

### EXAM TRAP

**Trap 1 — "Create a project for every task"**
The exam shows someone creating a project for a single quick question. This is wasteful overhead [fuzool ka kaam]. Projects are for ONGOING work, not one-off tasks. If you won't return to it, a regular chat is fine.

**Trap 2 — "Just use a longer chat instead of a project"**
The exam shows someone re-uploading files and re-typing background in a long chat. The trap answer says "keep everything in one conversation." But long conversations go stale (Part 1, Concept 3). A project solves both problems: it keeps files persistent AND keeps conversations manageable.

**Trap 3 — "Project-only memory means the AI forgets everything else"**
No. Project-only memory means the project's memory is ISOLATED from your wider memory. The AI still has its training knowledge. Isolation here means your personal memories from other conversations don't leak into this project's work.

---

### QUICK CHECK

**Q:** A legal assistant uses Claude to help with contract reviews for five different clients. She starts a new chat for each review and re-uploads the client's master agreement every time. What should she do?

**A:** Create one project per client. Upload each client's master agreement once into the right project. Set client-specific instructions (naming conventions, review focus areas) as project instructions. Now every new chat inside a client's project already has the agreement and the rules. She stops re-uploading and re-explaining — the project makes context persistent.

---
---

## CONCEPT 5: Memory and Standing Instructions (The Persistence Triad)

**CCAO-F Domain: D5 — Configuration & Knowledge Management**

---

### THE SCENARIO

Nida is an executive assistant [senior boss ka kaam manage karne wali] at a consulting firm [mashwara dene wali company]. She uses Claude daily for drafting emails, preparing meeting notes, and creating slide outlines.

Over three months, she has built up a helpful setup:

- **Standing instruction** [permanent hukm — a rule that always applies]: "Always give me the answer first, then the explanation. Use British English spelling. Format everything as bullet points unless I say otherwise."
- **Memory**: Claude has learned that Nida works for Meridian Consulting, her boss is Mr. Tariq (Managing Director), she prepares the Monday leadership meeting agenda, and she prefers tables over paragraphs for comparisons.
- **Project — "Meridian Leadership Meetings"**: Contains the meeting template, last four meeting minutes, the attendee list, and project instructions saying "Use formal tone. Always include action items with owners and deadlines."

This works beautifully. Claude's responses are formatted the way Nida likes (standing instructions), reference her work context naturally (memory), and every leadership meeting chat has the right files and tone (project).

Then things go wrong.

**Problem 1: Configuration [settings/tanzeemaat — how you set things up] mistake.**

Nida's colleague Haris asks her how to set up Claude. Haris puts EVERYTHING into standing instructions:

> "I work at Meridian Consulting. My boss is Mr. Tariq. We have a leadership meeting every Monday. The attendees are: [list of 12 people]. The meeting template is: [500 words of template]. Always use formal tone. Last meeting we discussed: [300 words of notes]..."

His standing instructions are two pages long. They include things that change weekly (meeting notes), things that are specific to one project (attendee list), and things that should be stable rules (formal tone). Everything is in one place, and most of it is wrong within a week.

**Problem 2: Stale context [puraani/ghalat information jo abhi bhi stored hai].**

Three months later, Nida gets promoted. She now reports to the CEO, not Mr. Tariq. She works on strategy, not meeting agendas. But she never updates her setup.

Claude still thinks she works for Mr. Tariq. The "Meridian Leadership Meetings" project still has last quarter's minutes. Her memory still says she "prepares the Monday leadership meeting agenda."

One morning, Claude drafts a strategy brief [mukhtasar summary for decision-makers] addressed to "Mr. Tariq, Managing Director" — her OLD boss — using data from LAST quarter's minutes. The brief goes out. The CEO is confused. Mr. Tariq is amused. Nida is embarrassed.

There was no error message. No warning. Claude confidently used outdated information because that's what was stored.

---

### WHAT WENT WRONG (and RIGHT)

**Nida's original setup was RIGHT** — she put stable rules in standing instructions, evolving context in memory, and scoped work in a project. Three types of persistence, each in its correct place.

**Haris's mistake** was putting everything in one place (standing instructions). Meeting notes change weekly — that's memory or project territory. Attendee lists belong in a project. Only "formal tone" belongs in standing instructions. He mixed up the three categories.

**Nida's later mistake** was never reviewing what was stored. Stored context goes stale silently. There is no error message when last quarter's data is still in your project — just a confident answer built on wrong information.

---

### THE CONCEPT

Three features make context persist across conversations. Beginners mix them up constantly. Here is the clean separation:

```
THE PERSISTENCE TRIAD
(teen tareeqe jinse context yaad rehta hai)

+-------------------+    +-------------------+    +-------------------+
| STANDING          |    | MEMORY            |    | PROJECTS          |
| INSTRUCTIONS      |    |                   |    |                   |
|                   |    |                   |    |                   |
| STABLE rules      |    | EVOLVING context  |    | SCOPED work       |
| that rarely       |    | that changes      |    | for one client,   |
| change            |    | over time         |    | topic, or stream  |
|                   |    |                   |    |                   |
| "How I always     |    | "What is          |    | "Everything       |
|  want output"     |    |  currently true   |    |  about THIS job"  |
|                   |    |  about me/my work"|    |                   |
+-------------------+    +-------------------+    +-------------------+
     |                        |                        |
     v                        v                        v
  Write once,            Accumulates from          Holds chats,
  edit rarely            conversations,            files, and
                         review regularly          instructions
```

#### Where Each Product Keeps These Controls

| Persistence Type | Claude | ChatGPT |
|-----------------|--------|---------|
| Standing Instructions | **Settings & Styles** | **Custom Instructions** (Settings > Personalization) |
| Memory | **Memory** (on by default for individual plans; OFF on Team/Enterprise until admin enables) | **Memory** (Settings > Personalization > Memory) |
| Projects | **Projects** (with RAG for large knowledge) | **Projects** (with project-only memory option) |

#### What Goes Where — The Decision Table

| This information... | Put it in... | Because... |
|---|---|---|
| "Always use British English" | Standing Instructions | Stable rule, applies everywhere |
| "I work at Meridian Consulting" | Memory | True now, might change (job change, reorg) |
| "My boss is Mr. Tariq" | Memory | Evolving fact — bosses change |
| "FreshBite's brand guide" | Project (FreshBite) | Specific to one stream of work |
| "Use formal tone for board docs" | Project instructions (Board project) | Scoped rule — only for this project |
| "Give answer before explanation" | Standing Instructions | Stable preference, applies everywhere |
| "We discussed X in last meeting" | Project knowledge | Specific, time-bound, scoped |

#### The One Rule That Prevents Most Mistakes

```
+----------------------------------------------------------+
|                                                          |
|  Instructions for STABLE rules.                          |
|  Memory for EVOLVING context.                            |
|  Projects for SCOPED work.                               |
|                                                          |
|  The most common configuration mistake is putting        |
|  one in another's place.                                 |
|                                                          |
+----------------------------------------------------------+
```

#### Incognito and Temporary Chats

Both products offer a mode that keeps a conversation out of history and out of memory:

| Feature | Claude | ChatGPT |
|---------|--------|---------|
| Name | **Incognito chat** [private mode — yaaddaasht mein save nahi hota] | **Temporary chat** |
| What it does | Conversation not saved to history or memory | Same |
| What it does NOT do | Make you invisible. Vendors retain a copy for ~30 days for safety review | Same |

**Key distinction:** These modes are **memory-free, not trace-free**. Use them for sensitive conversations you don't want influencing future chats. Don't assume they leave no record at all.

#### Stored Context Is a Responsibility

This is the part most people skip — and the part the exam tests hardest.

```
WHAT GOES WRONG WHEN YOU DON'T REVIEW:

Stored context goes stale SILENTLY.

+---------------------+     +-------------------------+
| Last quarter's      |     | Claude writes this      |
| financial model     | --> | quarter's board deck    |
| still in project    |     | with LAST quarter's     |
|                     |     | numbers. No warning.    |
+---------------------+     +-------------------------+
                              |
                              v
                       Looks confident.
                       Is wrong.
                       No error message.
```

**Review schedule:**
- **When:** Monthly, or whenever your role or a project changes
- **What to review:** Memory, standing instructions, AND each project's files
- **For each item:** Keep it, correct it, or delete it

On a work account, follow your organization's policy. If your organization has data handling rules, those apply to what you store in AI projects too.

**The payoff:** A well-configured [sahi tarah se set kiya gaya] assistant often gets more useful after weeks of use. The model didn't change. The context around it improved.

**Key rule:** Persistence only helps when the right information is in the right place.

---

### EXAM TRAP

**Trap 1 — "Put everything in memory"**
The exam shows someone who stores project-specific files and instructions in memory instead of a project. People pick this because memory "follows you everywhere." But that's exactly the problem — client-specific context leaking into unrelated conversations is a data boundary issue, not a feature.

**Trap 2 — "Standing instructions are enough"**
The exam shows someone who writes their entire work context into standing instructions. The trap is that this SOUNDS organized ("I wrote everything down!"). But standing instructions are for stable rules. Putting changing facts there guarantees stale context within weeks.

**Trap 3 — "The AI will flag outdated information"**
This is the most dangerous trap. Students pick answers like "Claude will alert you when stored information is outdated." It won't. There is no expiry date on stored context. No warning bell. The assistant treats whatever you stored as current truth. Reviewing is YOUR job.

**Trap 4 — "Incognito/temporary chat means no one can see it"**
The exam tests whether you understand the difference between memory-free and trace-free. Vendors still retain a copy for safety review (~30 days). Incognito chat is for keeping things out of your AI's memory, not for hiding from your employer.

---

### QUICK CHECK

**Q:** A consultant uses Claude with three active clients. She puts all three clients' documents into Claude's memory, and her formatting preferences into a project. What two things did she mix up, and what's the correct configuration [tanzeemaat]?

**A:** She reversed projects and standing instructions. Client documents (scoped to specific work) belong in **projects** — one per client. Formatting preferences (stable rules that apply everywhere) belong in **standing instructions**. Memory is for evolving context about HER — her role, her goals, her work patterns — not for storing client files.

---
---

## PART 2 RECAP: How Concepts 4 and 5 Connect (and Link to Part 1)

```
PART 1 (Concepts 1-3)              PART 2 (Concepts 4-5)
                                   
C1: Learn the discipline    -----> C4: Projects organize your
    not the buttons                    ongoing work into rooms
                                   
C2: Pick the right model    -----> (Model choice still applies
    for the task                    INSIDE a project)
                                   
C3: Give the right context  -----> C5: Persistence Triad makes
    (uploads, state summary)           context AUTOMATIC
                                   
    "When you paste the            "Instructions for stable rules.
     same summary every   -------> Memory for evolving context.
     week, you need a              Projects for scoped work."
     project" (C3)                  
```

#### The Configuration Checklist

Before you start serious work with any AI assistant, set up these three layers:

| Layer | What to configure | How often to review |
|-------|-------------------|---------------------|
| Standing Instructions | Your stable preferences (language, format, tone, role) | Quarterly — or when your role changes |
| Memory | Let it accumulate naturally, then audit [jaanch — check everything is correct] | Monthly — keep, correct, or delete each item |
| Projects | One per ongoing stream of work, with files and scoped instructions | Every time you start or finish a project phase |

#### The Key Insight

In Part 1, you learned to give context manually (upload the file, describe the task). In Part 2, you learned to make context **automatic** — projects hold your files, instructions hold your rules, memory holds your evolving facts.

The progression:

```
Manual context (Part 1)         Automatic context (Part 2)
"Here's the file again"   -->   "The project already has it"
"Remember, use formal     -->   "Standing instructions handle that"
 tone..."
"I work at Meridian..."   -->   "Memory already knows"
```

A well-configured assistant doesn't just answer better — it saves you from repeating yourself every session.

---
---

## EXAM-LEVEL PRACTICE QUESTIONS

> **Instructions:** Each question presents a workplace scenario. Select the BEST answer unless the question says "Select TWO." These questions test judgment, not recall.

---

### Question 1 · D5 · Configuration & Knowledge Management

Sara is a financial analyst [maaliyaati tahleel karne wali] at an insurance company. She uses Claude to help prepare the monthly claims report [har maheene daawon ki report]. Every month she uploads the same three files: the claims template, the policy limits reference, and the formatting guide. She also types the same instructions each time: "Use table format, include policy numbers, round to two decimal places."

What is the MOST appropriate improvement to Sara's workflow?

**A.** Save the three files and instructions in Claude's memory so they follow her to every conversation.

**B.** Create a project called "Monthly Claims Reporting," upload the three files as project knowledge, and add the formatting rules as project instructions.

**C.** Write the instructions into a Word document and upload it each month along with the other files, so everything is in one place.

**D.** Ask Claude to remember the instructions permanently by typing "Remember these rules for all future conversations about claims."

---

### Question 2 · D5 · Configuration & Knowledge Management

Haris is an operations coordinator [kaam-kaaj ka coordinator] at a logistics company. He has been using ChatGPT for four months. He opens Settings > Memory and sees 47 stored memory entries. Some reference a project manager who left the company two months ago. Several mention a warehouse address that changed last quarter. One entry says "Haris prefers bullet-point format" — which is still true.

What should Haris do?

**A.** Delete all 47 entries and start fresh — it's faster than reviewing each one.

**B.** Leave the entries alone — ChatGPT will automatically discard outdated information when it notices contradictions in new conversations.

**C.** Review each entry and keep what's still accurate (like the format preference), correct what's changed (like the warehouse address), and delete what's no longer relevant (like the former project manager's details).

**D.** Export the memory entries to a document for record-keeping, then clear memory entirely since stored data is a security risk.

---

### Question 3 · D5 · Configuration & Knowledge Management

Fatima is a senior HR [Human Resources] consultant who works with six different client companies. She creates one Claude project and uploads ALL six clients' employee handbooks, org charts, and HR policies into it. She writes project instructions: "You help me with HR consulting work."

Two weeks later, she asks Claude about parental leave policy while working on Client A's case. Claude's answer blends policy details from Client A and Client D without flagging which is which.

What is the PRIMARY problem with Fatima's setup?

**A.** She should have used a stronger model (Opus) that can better separate information from multiple sources.

**B.** She should have put all six clients into standing instructions instead of a project, so the context follows her everywhere.

**C.** She should have created six separate projects — one per client — so each client's documents and context are isolated from the others.

**D.** She should have asked Claude to label each piece of information with the client name before answering any question.

---

### Question 4 · D5 + D6 · Configuration & Knowledge Management + Governance · 〔Select TWO〕

Bilal is an associate at a law firm. He uses Claude to help draft contracts. He has a project called "Client Contracts" where he stores template agreements and drafting guidelines. His firm's managing partner [senior wali partner jo firm chalaati hai] sends a new policy:

> "All AI tools used for client work must follow firm data handling rules. No client names or case details may persist [baqi rehna] in AI memory between sessions. All client-related AI work must be auditable [jaanch ke qaabil]."

**Which TWO changes should Bilal make to comply [rules follow karna] with this policy?**

**A.** Review and delete any client names or case-specific details that Claude has stored in memory, and use incognito chat for future client-specific conversations to prevent memory storage.

**B.** Stop using Claude entirely for client work since the firm's policy is too restrictive for AI use.

**C.** Keep the project for templates and general drafting guidelines (which contain no client-specific data), but remove any client names, case numbers, or confidential details from project knowledge.

**D.** Ask Claude to promise not to store any client information by adding "Never remember client details" to standing instructions.

---

### Question 5 · D5 · Configuration & Knowledge Management

Zain has been using ChatGPT for personal productivity for six months. He recently started a new job as a marketing manager. He has ChatGPT's Custom Instructions set to: "I'm a freelance graphic designer. Keep responses visual and creative. Use informal language."

In his new role, he needs to use ChatGPT to draft a formal marketing strategy [mansoobaband tareeqa — planned approach] document for his VP.

He opens ChatGPT and types: "Draft a formal marketing strategy for our Q4 product launch." The output comes back informal, heavy on visual concepts, and reads like advice for a freelancer.

What is the MOST likely cause AND the correct fix?

**A.** The model is too weak for strategy documents. Switch to the flagship (Pro) model and re-run the request.

**B.** His Custom Instructions still describe his old freelance role. He should update them to reflect his current role and communication style, then re-run the request.

**C.** He needs to create a project for marketing strategy work and add the Q4 product launch details as project knowledge.

**D.** ChatGPT's memory of his freelance work is interfering. He should delete all memory entries and start with a clean slate.

---

### Question 6 · D5 + D2 · Configuration & Knowledge Management + Output Evaluation

Amina manages a quarterly [har teen maheene ka] investor [paisa lagane wale log] report for a real estate [jaaidaad/property] company. She created a Claude project six months ago with Q1 financial data, the investor presentation template, and project instructions. It is now Q3. She asks Claude to draft the Q3 investor summary.

Claude produces a polished, professional summary — but it references Q1 occupancy rates [kitne percent jagah bhari hui hai] and Q1 revenue [aamdani — income] figures because those are the only financials in the project.

What should Amina have done BEFORE asking Claude to draft the Q3 summary?

**A.** Switched to Opus for the Q3 summary so that the stronger model would recognize the data is from Q1.

**B.** Asked Claude to search the web for the company's latest financial data to supplement the project knowledge.

**C.** Updated the project by replacing Q1 financial data with Q3 data, removing outdated files, and reviewing the project instructions for relevance — THEN asked for the summary.

**D.** Added a note to her prompt saying "Use only current quarter data" so Claude would know not to use the Q1 figures.

---
---

## ANSWERS AND EXPLANATIONS

---

### Question 1 — Answer: B

**Why B is correct:** Sara has a recurring workflow (monthly claims report) with the same files and the same rules every time. This is exactly what a project is for — it makes context persistent for one stream of work. Upload the files once as project knowledge, add formatting rules as project instructions, and every new conversation inside the project inherits everything. She stops re-uploading and re-typing.

**Why A is wrong:** Memory is for evolving context about YOU — your preferences, your role, your patterns. Storing three large reference files and task-specific formatting rules in memory misuses the feature. These files are scoped to one workflow, not relevant everywhere. Memory is not a filing cabinet.

**Why C is wrong:** Uploading a Word document of instructions is still re-uploading every month. It moves the repetition from typing to uploading but doesn't solve the persistence problem. A project's instructions field exists precisely for this.

**Why D is wrong:** "Remember these rules for all future conversations" puts scoped rules (specific to claims reporting) into memory (which affects ALL conversations). The "round to two decimal places" rule is useful for claims reports — it's not useful when Claude helps Sara draft an email to her team. This is the configuration mistake the concept warns about.

---

### Question 2 — Answer: C

**Why C is correct:** This is the review habit the concept teaches. Stored context goes stale silently. The right process: review each entry, keep what's accurate, correct what's changed, delete what's irrelevant. Haris's format preference is still valid (keep). The warehouse address needs updating (correct). The former PM's details are irrelevant (delete).

**Why A is wrong:** This is the wasteful option. Deleting everything throws away valid context (like the format preference) that took months to build up. Mass deletion is lazy, not efficient.

**Why B is wrong:** This is the reckless option — and it's factually wrong. AI assistants do NOT automatically detect and discard stale memory. There is no expiry date, no self-correction. If the old warehouse address is in memory, Claude will use the old address confidently. Reviewing is YOUR job.

**Why D is wrong:** Exporting to a document is unnecessary, and clearing everything because "stored data is a security risk" is an overreaction. Stored data is a RESPONSIBILITY, not inherently a risk. The responsible action is reviewing and managing it, not panic-deleting everything.

---

### Question 3 — Answer: C

**Why C is correct:** The problem is that six clients' documents are mixed in one project. When Fatima asks about Client A, Claude pulls from all six clients' documents because they're all in the same "room." The fix is isolation — one project per client, so each client's policies, handbooks, and context stay separate. This prevents cross-contamination [ek client ka data doosre mein mil jaana] of client information.

**Why A is wrong:** Opus is more capable at reasoning, but it still works with whatever is in the project. If six clients' documents are mixed together, a stronger model just blends them more confidently. The problem is organization, not capability.

**Why B is wrong:** Standing instructions are for stable rules (tone, format, language). Putting six clients' handbooks and org charts into standing instructions would make them even MORE mixed — and they'd appear in every conversation, not just client work. This makes the problem worse.

**Why D is wrong:** Asking Claude to label information by client is a workaround [jugaad — temporary fix], not a solution. It might help sometimes, but the underlying problem — mixed documents in one project — means Claude still might cross-reference the wrong client. Proper isolation (separate projects) is the correct architectural fix.

---

### Question 4 — Answer: A and C

**Why A is correct:** The firm's policy says client details must not persist in memory between sessions. Bilal needs to: (1) delete any client-specific information already stored in memory, and (2) use incognito chat for future client work to prevent memory storage. This directly addresses the "no persistence" requirement.

**Why C is correct:** The project can keep GENERAL resources (contract templates, drafting guidelines) because these don't contain client-specific data. But any client names, case numbers, or confidential details must be removed from project knowledge. This lets Bilal keep using the helpful templates while complying with the policy's data handling rules.

**Why B is wrong:** This is the abandonment trap. The policy restricts HOW Claude is used, not WHETHER it can be used. Templates, general guidelines, and formatting rules have no client data — they're safe to keep. Abandoning the tool entirely is an overreaction that wastes a useful resource.

**Why D is wrong:** Typing "Never remember client details" in standing instructions does NOT guarantee Claude won't store information in memory. Standing instructions influence the AI's responses, but they don't control the memory system's technical behavior. The correct controls are: deleting stored memories and using incognito mode — actual system features, not verbal instructions.

---

### Question 5 — Answer: B

**Why B is correct:** Custom Instructions (standing instructions in ChatGPT) apply to EVERY conversation. Zain's still say "freelance graphic designer, informal language." These are overriding his request for formal strategy writing. The fix is to update standing instructions to reflect his current role. Standing instructions are for stable rules — when the underlying fact changes (new job, new role), the instructions must be updated too.

**Why A is wrong:** The model isn't the problem. The fast default model can write formal strategy documents perfectly well. The informal, visual-heavy output isn't a capability issue — it's a configuration issue. The standing instructions are explicitly telling the model to be informal and visual.

**Why C is wrong:** Creating a project is a reasonable long-term step for ongoing marketing work, but it doesn't fix the immediate problem. Even inside a project, Custom Instructions still apply. If they say "informal, visual, freelancer," the project outputs will be informal too. Fix the root cause (outdated instructions) first.

**Why D is wrong:** Memory might contain some freelance-related entries, but the PRIMARY cause of the informal output is Custom Instructions — they are explicitly set rules, applied to every conversation. Memory entries have weaker influence than direct instructions. Deleting all memory is also wasteful — some of it (like format preferences) may still be valid.

---

### Question 6 — Answer: C

**Why C is correct:** The project contained Q1 data because no one updated it. Stored context goes stale silently — the assistant treats whatever is in the project as current truth. Before asking for a Q3 summary, Amina should have reviewed the project: replace Q1 financials with Q3 data, remove outdated files, and check that instructions still apply. This is the review habit: keep, correct, or delete.

**Why A is wrong:** Opus is smarter, but it cannot conjure Q3 data from a project that only contains Q1 data. A stronger model reads what's there more carefully — which means it would use Q1 data more confidently, not less. Model capability doesn't fix missing context.

**Why B is wrong:** Company financial data (occupancy rates, revenue) for an investor report would not be reliably found through web search. This is internal, non-public information. Even if some data were public, using web-sourced financials for an official investor report without verification is reckless. The correct source is the company's own Q3 financial data, uploaded by Amina.

**Why D is wrong:** Telling Claude "use only current quarter data" doesn't help when the project only CONTAINS Q1 data. The model doesn't know what quarter the data is from unless it's labeled — and even then, it has no Q3 data to use instead. The prompt instruction sounds smart but solves nothing when the underlying context is wrong. Update the context first.

---
