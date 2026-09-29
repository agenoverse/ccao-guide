# ChatGPT & Claude Quick Reference — SCENARIO GUIDE Part 4

## REACH OUT & PROVE IT

> **Concepts covered:** 8 (Connectors, Apps & Routing), 9 (Prove It on Work You Already Know)
> **CCAO-F Domains:** D4 (Workflow Integration & Solution Design), D6 (Governance, Risk & Responsible Use), D2 (Output Evaluation & Validation)
> **Read time:** ~25 minutes

---

## CONCEPT 8: Connectors, Apps, and Routing the Question

**CCAO-F Domains: D4 — Workflow Integration & Solution Design + D6 — Governance, Risk & Responsible Use**

---

### THE SCENARIO

Sana is an executive assistant at a mid-size trading company. Her boss, the COO [Chief Operating Officer — operations ka sabse senior boss], asks her to pull together a briefing for tomorrow's board meeting. She needs:

1. The email thread where the CFO [Chief Financial Officer — finance ka boss] discussed the revised shipping rates
2. Next week's meeting schedule for the leadership team
3. The latest inventory report from the warehouse management system
4. A market report on current shipping lane disruptions

Sana opens Claude and starts typing everything from memory:

> "The CFO mentioned new shipping rates were 12% higher... I think the meeting is Tuesday at 2 PM... the last inventory report showed about 3,400 units..."

She types two paragraphs of half-remembered facts. The briefing Claude produces sounds polished, but the shipping rate increase was actually 8% (not 12%), the meeting is Wednesday (not Tuesday), and the inventory count was 3,800 units. Every number is wrong because Sana typed from memory instead of from the source.

Her colleague Faisal handles the same kind of briefing for the VP of Sales. But Faisal has **connectors** [bahar ke system se jodne wala tool — email, calendar, storage tak pahunchne deta hai] set up:

- Email connector → Claude can search his work email
- Calendar connector → Claude can read the meeting schedule
- Cloud storage connector → Claude can access shared documents

Faisal types:

> "Find the email thread between the CFO and procurement about revised shipping rates. What's on the leadership team calendar for next week? Pull the latest inventory report from the shared drive."

Claude reaches into the actual systems and pulls the real data. No guessing. No half-remembered numbers.

But Faisal didn't stop there. For the market report on shipping lane disruptions, he needed current external information — not something in his company systems. He considered his options:

**Option A — Web search:** "What's the current status of Red Sea shipping disruptions?" → A quick fact. Takes seconds.

**Option B — Thinking mode:** "Compare the cost impact of rerouting through the Cape of Good Hope vs. waiting for Red Sea lanes to reopen, given these three vendor contracts..." → Hard reasoning with data he already has. No new info needed.

**Option C — Research mode** [tehqeeq ka mode — AI khud investigate karta hai, sources dhoondta hai, report banata hai, minutes lagta hai]: "Research the current state of global shipping lane disruptions, their impact on freight costs in the Asia-to-Europe corridor, and what major logistics companies are doing in response. Cite your sources." → A thorough, multi-source investigation. Takes minutes.

Faisal needed a cited report for the board — Option C. He kicked off research mode and got a structured report with citations [hawaala — source reference that backs up a claim] fifteen minutes later.

Then he did something critical: **he opened three of the citations and checked the claims that mattered most.** The board would ask about the freight cost numbers — those had to be right. Two citations checked out. One was from a six-month-old article that research mode had pulled in. He corrected the stale figure before the briefing.

---

### WHAT WENT WRONG (and RIGHT)

**Sana** typed from memory instead of connecting to her actual systems. Every number was wrong — but the briefing LOOKED professional. This is the most dangerous kind of failure: confidently wrong output built on bad input.

**Faisal** connected to real systems so the assistant worked with real data, not guesses. Then he **routed each question correctly**: internal data through connectors, hard reasoning through thinking mode, external investigation through research mode.

Most importantly, Faisal **checked the research output**. Research mode extends your reach — it doesn't move your accountability [zimmedaari — you answer for the final result, not the AI]. The board briefing goes out under Faisal's name, not Claude's.

---

### THE CONCEPT

Up to now, the assistant has worked with information you put in front of it — uploads, typed context, project files. But your real information lives elsewhere:

```
WHERE YOUR REAL INFORMATION LIVES:

+----------+  +----------+  +-----------+  +----------+
|  EMAIL   |  | CALENDAR |  |   CLOUD   |  |  PROJECT |
|          |  |          |  |  STORAGE  |  |  MGMT    |
+----------+  +----------+  +-----------+  +----------+
+----------+  +----------+  +-----------+
|   CHAT   |  | KNOWLEDGE|  |  COMPANY  |
|  SYSTEMS |  |  BASES   |  | DATABASES |
+----------+  +----------+  +-----------+
         |          |            |
         v          v            v
   CONNECTORS / APPS let the assistant
   reach these systems directly
```

#### Connector vs. App — Same Idea, Different Name

| Feature | Claude | ChatGPT |
|---------|--------|---------|
| What it's called | **Connector** | **App** (used to be called connector too, then renamed) |
| What it does | Lets assistant search, read, and sometimes act in external systems | Same |
| Based on | **MCP** [Model Context Protocol — AI tools ka USB-C, ek standard plug jo har jagah kaam kare] | **MCP** (through Apps SDK) |

MCP is the open standard under both products. A tool built on MCP can work in Claude, ChatGPT, or any future assistant that reads the same standard. That's "USB-C for AI tools" — one plug, many devices.

**But here's what the USB-C shorthand hides:** Plugging in a USB-C cable is not a decision about trust. Connecting an MCP tool IS.

#### Connections Are Permission Decisions

Every connector or app is a **governance** [hukmarani/intezaam — who gets to decide what, and what rules they follow] decision, not just a productivity choice.

```
BEFORE CONNECTING ANYTHING — ASK THESE 4 QUESTIONS:

+-------------------------------------------------------+
|  1. What can it READ?                                 |
|     (Connecting email = access to ALL your email)     |
|                                                       |
|  2. Can it WRITE, send, delete, buy, or ACT?          |
|     (Read-only is safer than read-write)              |
|                                                       |
|  3. Do I TRUST the source?                            |
|     (Who built this connector? Is it verified?)       |
|                                                       |
|  4. Am I ALLOWED to connect this?                     |
|     (Does your company policy permit it?)             |
+-------------------------------------------------------+

If any answer makes you uncomfortable --> DON'T CONNECT.
```

Treat connectors and apps the way you treat installing software: useful, and **permission-gated** [ijazat ke baad hi mil sakta hai — locked until approved] on purpose.

**One more limit:** A connector can only do what it was built to do. Permissions choose among the actions a tool HAS. They don't add new actions. If a connector is read-only, no permission setting will let it send emails.

#### Routing the Question — The Daily Delegation Decision

Beginners routinely pick the wrong mode. This is the single most common daily waste in both products.

```
ROUTING TABLE — Which mode for which question?

+-------------------------+------------------+----------------------------+
| You need...             | Use...           | What happens               |
+-------------------------+------------------+----------------------------+
| One current fact        | WEB SEARCH       | Seconds. 1-2 sources.      |
| "Today's USD/PKR rate?" |                  |                            |
+-------------------------+------------------+----------------------------+
| Hard reasoning,         | THINKING MODE    | Model plans before         |
| no new info needed      |                  | answering. Slower,         |
| "Compare these 3        |                  | more careful.              |
| pricing strategies"     |                  |                            |
+-------------------------+------------------+----------------------------+
| Thorough, cited,        | RESEARCH MODE    | Minutes of autonomous      |
| multi-source report     |                  | investigation. Many        |
| "Research warehouse     |                  | sources. Cited report.     |
| robotics market"        |                  |                            |
+-------------------------+------------------+----------------------------+
| Your organization's     | WORKPLACE SEARCH | Answers from connected     |
| own information         | / CONNECTED APPS | internal tools.            |
| "Find the latest        |                  |                            |
| pricing policy"         |                  |                            |
+-------------------------+------------------+----------------------------+
```

The question to ask first: **"What kind of work am I asking the assistant to do?"**

Route BEFORE you send.

#### Research Mode Is a Different Animal

Research mode is NOT "better search."

```
SEARCH vs. RESEARCH:

SEARCH                          RESEARCH
+-------------------------+     +-------------------------+
| Quick fact              |     | Plans an investigation  |
| Seconds                 |     | Runs many searches      |
| 1-2 sources             |     | Follows leads           |
| "What is X?"            |     | Reads sources deeply    |
|                         |     | Hands back a structured |
|                         |     |   report with citations |
|                         |     | Takes MINUTES           |
|                         |     | "Investigate X for me"  |
+-------------------------+     +-------------------------+

You are delegating an INVESTIGATION,
not asking a quick question.
```

Research mode is **autonomous** [khud se kaam karne wala — works independently without your step-by-step guidance] — it works on its own for several minutes. When the report arrives, your job is NOT done:

- Check the claims that matter
- Open the citations
- Verify the numbers you'll stand behind

Research extends your **reach**. It does not move your **accountability**.

**Key rule:** Route the question before you send it.

---

### EXAM TRAP

**Trap 1 — "Connect everything for maximum productivity"**
The exam shows someone connecting work email, calendar, cloud storage, and every available tool "to save time." The trap answer says connecting more tools is always better. But each connection is a permission decision with security implications. The exam rewards asking the four questions BEFORE connecting — not connecting first and thinking later.

**Trap 2 — "Use research mode for every question"**
The exam shows someone launching a multi-minute research investigation to find a single exchange rate. People pick this because "more thorough = better." But spending five minutes on research when search answers in five seconds is the most common daily waste. Route the question by what it NEEDS, not by what sounds most impressive.

**Trap 3 — "Research mode already verified everything"**
The exam shows someone receiving a research report and publishing it directly. The trap is that research mode is autonomous and cites sources — so it LOOKS verified. But citations can be stale, sources can conflict, and the claims that matter to YOUR stakeholders need YOUR check. Research extends reach; it never transfers accountability.

**Trap 4 — "The connector only sees what I can see, so it's safe"**
True but misleading. The connector uses YOUR account's permissions, so it doesn't see MORE than you. But connecting email means the AI can now search through thousands of messages you may have forgotten about — including sensitive conversations. The exposure is about BREADTH, not access level.

---

### QUICK CHECK

**Q:** Haris needs to answer three questions for a client meeting: (1) "What's the client's current contract value?" — stored in the CRM, (2) "What's the current market price for the materials they buy?" — a live external fact, (3) "Given these contract terms and current market prices, is the client overpaying or underpaying, and by how much?" — requires analysis. How should he route each question?

**A:** (1) Workplace search / connected CRM — the data lives in the company's system. (2) Web search — one current external fact, takes seconds. (3) Thinking mode — hard reasoning with the data from steps 1 and 2, no new information needed. Each question needs a different mode. Routing correctly saves time and produces better answers than sending everything to one mode.

---
---

## CONCEPT 9: Prove It on Work You Already Know

**CCAO-F Domain: D2 — Output Evaluation & Validation (21% of the exam — THE HEAVIEST DOMAIN)**

---

### THE SCENARIO

Zain is a program director at a vocational training institute [pesha-waraana training ka idaara]. Every quarter, he analyzes student attendance data and employment outcomes [naukri mili ya nahi — did graduates get jobs?] to report to the board and to the government funding agency [sarkari paisa dene wala idaara].

This analysis takes him two full days every quarter. He wants AI to help. His colleague Amina says: "Just give Claude this quarter's data and let it do the analysis. I did that and it worked great."

Zain almost does it. But he pauses and thinks: **"How do I actually know whether Claude's analysis is correct? The numbers in this report go to the government. If they're wrong, we lose funding."**

He takes a different approach.

**Step 1:** He picks one specific, recurring task: "Analyze Q2 attendance data and calculate employment placement rates by program."

**Step 2:** He finds Q1's data — a quarter he already analyzed himself. He KNOWS the correct answers. The placement rate for the welding program was 73%. The IT program was 89%. The overall attendance rate was 81.4%. He holds these numbers back.

**Step 3:** He uploads Q1's raw data to Claude and asks: "Analyze this attendance data. Calculate the employment placement rate for each program and the overall attendance rate. Show your methodology."

**Step 4:** He compares. Claude says:
- Welding placement: 73% ✓ (matches)
- IT placement: 91% ✗ (wrong — should be 89%)
- Overall attendance: 81.4% ✓ (matches)

The IT number is off. Zain investigates. Claude counted students who got internships [kaam seekhne ki temporary naukri] as "placed." Zain's methodology only counts full employment. He adds to his instructions: "Placement means full-time employment only. Do not count internships, part-time work, or apprenticeships."

**Step 5:** He runs it again with the clarified instructions. Now all numbers match.

Zain has **earned confidence** [kamaya hua bharosa — trust that comes from testing, not guessing] that Claude can do this analysis — IF the instructions are precise about what "placement" means.

Now he uses it for Q2's new data. But he STILL spot-checks the key numbers. And when the report goes to the government funding agency, it goes under Zain's name and Zain's signature. He **discloses** [bataana — telling others that AI was used in the work] to his director that AI was used in the analysis.

---

**Meanwhile, Amina** — who "just gave Claude this quarter's data" — submitted her report. Three weeks later, the funding agency flags an error: the attendance figures don't match the enrollment records [daakhile ka record]. Amina had no way to catch this because she never tested Claude against a known answer. She trusted a good-looking output.

---

### WHAT WENT WRONG (and RIGHT)

**Zain** tested the assistant on work he had already finished and already trusted. He found a gap (the internship counting problem), fixed it, and THEN used the tool on new data — while still spot-checking and standing behind the results.

**Amina** skipped the proving step entirely. She assumed the output was correct because it looked correct. She had no known answer to compare against. The polished formatting masked the error.

---

### THE CONCEPT

The most important question in this entire course:

**"How do you know whether the assistant is actually good at YOUR work?"**

Not at a benchmark [standard test — aam comparison jo har model pe chalta hai, not YOUR task]. Not at a demo. At **your** task, with **your** data, to **your** standard.

#### The 5-Step Proving Loop

```
THE PROVING LOOP

+---> 1. PICK one recurring task. Be precise.
|         "Analyze attendance data and calculate
|          placement rates" ✓
|         "Help with reports" ✗ (too vague)
|
|     2. FIND an old example.
|         One where you ALREADY KNOW the correct result.
|         Hold your answer back — don't show it to the AI.
|
|     3. ASK the assistant to reproduce it.
|         Give it the same context you had when you did it.
|
|     4. COMPARE against your known-correct answer.
|         What matched?
|         What failed?
|         What instruction was missing?
|
+---- 5. REFINE and run again.
          Continue until:
          a) It's good enough --> EARNED CONFIDENCE
          b) It still can't do it --> THAT PART STAYS HUMAN

          Both outcomes are useful.
```

#### Three Outcomes, ALL Useful

| What happens | What it means | What you do |
|---|---|---|
| AI misses a pattern | Your instructions need improvement | Refine the instructions and re-run |
| Data is missing something | You found a data problem | Fix the data before using AI or manual process |
| AI still can't do it reliably | This task (or this part) should not be delegated | Keep it human — that knowledge is worth the hour |

Learning what NOT to delegate is worth the hour.

#### What Does Passing Actually Prove?

This is the part the exam tests hardest. Read this table carefully:

```
WHAT PASSING PROVES           vs.    WHAT PASSING DOES NOT PROVE
+--------------------------+         +--------------------------+
| Earned confidence for    |         | That it will be right on |
| SIMILAR future work      |         | EVERY future case        |
|                          |         |                          |
| That the instructions    |         | That you can stop        |
| are good enough for      |         | checking new results     |
| this type of task        |         |                          |
|                          |         | That responsibility has  |
| That you know what to    |         | transferred to the AI    |
| watch for in new output  |         |                          |
+--------------------------+         +--------------------------+
```

**Even after passing, you still must:**

1. **Check** whether new results make sense
2. **Stand behind** the final work — your name, your responsibility
3. **Disclose** AI assistance where that is appropriate or required
4. **Keep high-risk decisions** under proper human control

#### The Evaluation Suite

This small proving exercise is your first **evaluation suite** [jaanch ka system — organized tests to check if AI works for your tasks].

If you can, run the same test in both Claude and ChatGPT. Comparing two assistants on a task you already understand is the fastest way to build platform awareness (Concept 1).

```
FROM PROVING LOOP TO EVALUATION SUITE:

Test 1 task on known data
         |
         v
Test 5 tasks on known data
         |
         v
Test across both Claude and ChatGPT
         |
         v
You have a systematic evaluation suite.
Same habit, larger scale.
```

**Key rule:** Trust should be earned against known work, not assumed from a good-looking answer.

---

### EXAM TRAP

**Trap 1 — "The output looks professional, so it's correct"**
This is the Amina trap. The exam shows polished, well-formatted AI output and asks what to do next. The reckless answer says "publish it" or "it looks good, proceed." The exam rewards verifying against a trusted source — not trusting formatting.

**Trap 2 — "Claude confirmed its own accuracy"**
The exam shows someone asking Claude "Are these numbers correct?" and Claude saying "Yes, the analysis is accurate." People pick this because it feels like verification. It isn't. Asking the AI to check its own output is circular — it will often confidently reaffirm fabricated details. Verification requires an EXTERNAL source of truth.

**Trap 3 — "The proving loop passed, so no more checking needed"**
The exam shows someone who tested AI on old data, got good results, and now uses it on new data without any checking. People pick this because "I already tested it." But passing gives earned confidence for SIMILAR work — it does not eliminate the need to verify new results. Trust is earned, not permanent.

**Trap 4 — "This task can't be delegated to AI"**
The abandonment trap. The exam shows a failed first attempt and the answer says "keep this task fully manual." But a first failure often means the instructions were unclear, the context was missing, or the wrong model tier was used. The proving loop is iterative — refine and re-run before concluding a task should stay human.

**Trap 5 — "AI did the work, so AI is responsible"**
The most dangerous trap on the entire exam. No matter how much AI helped, the person who submits, publishes, or signs the work is the one who is accountable. The exam will test this from multiple angles. Accountability never transfers to the AI.

---

### QUICK CHECK

**Q:** A financial analyst tests Claude by giving it last month's expense data (where she already knows the correct totals). Claude gets 9 out of 10 categories right but miscalculates the "travel" category by combining domestic and international travel incorrectly. She fixes the instructions, re-runs, and now all 10 match. Can she now use Claude for this month's new expense data without any further checking?

**A:** No. The proving loop gave her earned confidence that Claude CAN do this analysis with the corrected instructions — but she still must spot-check the new results. Passing on last month's data doesn't guarantee correctness on new data. She should focus her checks on areas most likely to vary (like the travel category that failed before) and verify any numbers that will go into official reports. Accountability remains hers.

---
---

## PART 4 RECAP: How Concepts 8 and 9 Connect (and Link to Parts 1–3)

```
PART 1 (C1-C3)                PART 2 (C4-C5)               PART 3 (C6-C7)               PART 4 (C8-C9)

C1: Learn the            --> C4: Projects organize    --> C6: Artifacts hold      --> C8: Connectors reach
    discipline                   ongoing work                the work product             external systems

C2: Pick the right       --> C5: Persistence Triad   --> C7: Skills package      --> C9: Prove it on
    model for the task          (instructions,               the repeatable               work you already
                                 memory, projects)            method                       know

C3: Give the right       --> "Same background 3x?    --> "Same method 3x?       --> "How do I KNOW
    context                    Make a project"              Make a skill"               it's good at MY work?"
```

#### The Full Journey

```
START: You have a task.

  1. Am I using the right TOOL?                    (C1 — Platform Awareness)
  2. Am I using the right MODEL TIER?              (C2 — Model Selection)
  3. Does the model have what it NEEDS?            (C3 — Context)
     - Uploaded files? Connected systems?          (C3 + C8)
  4. Is my workspace SET UP for this?              (C4 — Projects)
  5. Are my rules, memory, and files CURRENT?      (C5 — Persistence Triad)
  6. Am I asking for the right OUTPUT FORMAT?      (C6 — Artifacts)
  7. Is the METHOD packaged or am I re-typing?     (C7 — Skills)
  8. Did I ROUTE the question correctly?           (C8 — Routing)
     - Search? Thinking? Research? Workplace?

FINISH: Output arrives.

  9. Did I VERIFY it against a trusted source?     (C9 — Proving Loop)
     - Do I stand behind it?
     - Should I disclose AI use?
     - Does a human control the high-risk parts?

ALWAYS: Accountability stays with YOU.
```

---

## FULL COURSE RECAP — All 9 Concepts

### Master Concept Map

| # | Concept | Core Rule | CCAO-F Domain |
|---|---------|-----------|---------------|
| 1 | Two Cockpits, One Discipline | Learn the pattern, not the button placement | D3 — Product & Model Selection |
| 2 | Models & Thinking Modes | Choose the model by the task, not by habit | D3 — Product & Model Selection |
| 3 | Context You Attach | Better context > cleverer prompt | D5 — Configuration & Knowledge Mgmt |
| 4 | Projects | Projects are for work that continues | D5 — Configuration & Knowledge Mgmt |
| 5 | Memory & Standing Instructions | Instructions for stable rules, memory for evolving context, projects for scoped work | D5 — Configuration & Knowledge Mgmt |
| 6 | Artifacts & Writing Blocks | Chat is conversation; artifacts hold the work | D1 — Prompting & Task Execution |
| 7 | Skills & Plugins | Projects store knowledge; skills perform tasks | D4 — Workflow Integration |
| 8 | Connectors, Apps & Routing | Route the question before you send it | D4 + D6 — Workflow + Governance |
| 9 | Prove It on Known Work | Trust earned against known work, not assumed from good-looking output | D2 — Output Evaluation & Validation |

### The 3 Tests That Trigger Action

| If you've done this 3 times... | Then make a... | Concept |
|---|---|---|
| Uploaded the same file | **Project** | C4 |
| Typed the same process instructions | **Skill** | C7 |
| Hoped the output was correct without checking | **Proving loop** | C9 |

### The Pre-Flight Checklist (Use Before Any Important AI Task)

```
BEFORE SENDING:
[ ] Right tool for this task?              (C1)
[ ] Right model tier?                      (C2)
[ ] Model has the actual document/data?    (C3)
[ ] Connected to needed systems?           (C8)
[ ] Routed correctly?                      (C8)
    (Search / Thinking / Research / Workplace)
[ ] Output format specified?               (C6)
    (Table for data, artifact for work product)

AFTER RECEIVING:
[ ] Verified against trusted source?       (C9)
[ ] Checked claims that matter?            (C9)
[ ] Standing behind this output?           (C9)
[ ] Disclosed AI use if required?          (C9)
```

---
---

## EXAM-LEVEL PRACTICE QUESTIONS

> **Instructions:** Each question presents a workplace scenario. Select the BEST answer unless the question says "Select TWO" or "Select THREE." These are the hardest questions in the guide — they test multiple concepts together.

---

### Question 1 · D6 + D4 · Governance + Workflow Integration

Sana works as a legal coordinator [qanooni kaam manage karne wali] at a healthcare company. Her IT department has approved a new Claude connector that integrates with the company's email system. The connector allows Claude to search and read emails from any account the user has access to.

Sana has access to the general inbox, the HR complaints inbox (which she monitors as backup), and her personal work email. She wants to use the connector to find a vendor contract discussion from last month.

Before activating the connector, what should Sana consider FIRST?

**A.** Whether the connector will speed up her search enough to justify the setup time — if it saves less than 30 minutes per week, it's not worth connecting.

**B.** What the connector can read (all three inboxes including sensitive HR complaints), whether she is authorized to expose that data to an AI tool, and whether company policy permits connecting mailboxes that contain confidential employee information.

**C.** Whether Claude's connector is better than ChatGPT's app for email search, so she picks the more capable tool before connecting.

**D.** Whether to ask IT to restrict the connector to only her personal email, since the general inbox and HR complaints inbox belong to the company, not to her.

---

### Question 2 · D4 + D2 · Workflow Integration + Output Evaluation

Faisal is a market research analyst [bazaar ki tehqeeq karne wala]. His VP asks for a comprehensive report on emerging competitors in the electric vehicle battery market. Faisal has one week.

He opens Claude and types:

> "What are the emerging competitors in the EV battery market?"

Claude gives a three-paragraph overview with some company names and general trends. No sources. No depth.

What is the MOST appropriate approach for producing a report the VP can rely on?

**A.** Rewrite the prompt with more detail: "List all emerging competitors in the EV battery market with their founding year, funding, key technology, and market share." Then use Claude's response directly in the report.

**B.** Use research mode to conduct a thorough, cited investigation on EV battery market competitors, then verify the key claims and figures by opening the citations and cross-referencing with industry databases the company subscribes to before presenting to the VP.

**C.** Use web search to find the latest news articles about EV battery companies, copy the relevant facts into the report, and cite the articles.

**D.** Conclude that this task requires specialized industry knowledge that AI cannot provide, and conduct the research entirely manually using the company's industry databases.

---

### Question 3 · D2 · Output Evaluation & Validation

Nida is an HR manager at a manufacturing company. She wants to use Claude to help calculate annual leave balances for 200 employees. She has the master spreadsheet with hire dates, leave taken, and carried-over days.

She decides to test Claude first. She picks five employees whose leave balances she manually calculated last month and already knows to be correct. She uploads the spreadsheet and asks Claude to calculate those five employees' balances.

Claude gets four out of five correct. For one employee, Claude miscalculates because the employee started mid-year and Claude applied the full-year entitlement [haq — how many days they get] instead of prorating [hissa lagana — partial calculation based on months worked].

Nida adds to her instructions: "For employees who started mid-year, prorate leave entitlement based on months worked, not full-year allocation." She re-runs. All five match.

She now runs it for all 200 employees. **What is the appropriate level of checking for the full run?**

**A.** No further checking is needed — the proving loop passed on the corrected instructions, so the remaining 195 employees will be calculated correctly.

**B.** Spot-check a sample of the 200 results, focusing especially on mid-year hires and edge cases (like employees on extended leave or those who transferred between departments), and verify any results that will directly affect payroll.

**C.** Manually recalculate all 200 employees to compare against Claude's output, since leave balances affect pay and cannot have errors.

**D.** Ask Claude to verify its own calculations by running them a second time and flagging any discrepancies.

---

### Question 4 · D4 + D6 · Workflow Integration + Governance · 〔Select TWO〕

Bilal is an associate at an accounting firm. A partner asks him to prepare a tax analysis for a client meeting tomorrow. He needs:

1. The client's prior year tax filing from the firm's document management system
2. Current tax code changes from the government's tax authority website
3. A comparison of how the new rules affect the client's specific situation

**Which TWO approaches reflect the BEST combination of efficiency and appropriate judgment?**

**A.** Use a connected app to pull the client's prior year filing from the document management system, ensuring the connector has been approved for use with client data under the firm's data handling policy.

**B.** Type the client's financial details from memory into the chat, since pulling up the actual document takes too long when the meeting is tomorrow.

**C.** Use web search to find the current tax code changes from the official government website, then verify the specific provisions Claude surfaces by checking the government's published gazette or official documentation.

**D.** Use research mode to investigate "how new tax rules affect businesses," since it will produce a thorough report the client can take home.

---

### Question 5 · D2 + D6 · Output Evaluation + Governance

Amina is a program coordinator at a nonprofit [ghair-munafa tanzeem — organization that doesn't aim for profit]. She uses Claude to help write a grant proposal [paisa maangne ki application — asking a funder for money]. The proposal includes statistics about the community the nonprofit serves: poverty rates, education levels, and health outcomes.

Claude produces a compelling proposal with specific statistics: "42% of households in the target area fall below the poverty line" and "only 23% of adults have completed secondary education."

Amina does not recognize these exact numbers. The proposal is due in two days.

What is the MOST appropriate course of action?

**A.** Submit the proposal as-is — the statistics are plausible for the target community, and the deadline is tight.

**B.** Ask Claude "Are these statistics accurate?" and if Claude confirms, submit the proposal.

**C.** Verify the specific statistics against authoritative sources (census data, government reports, or the nonprofit's own community assessments), correct any inaccuracies, and disclose the use of AI in preparing the proposal if the funder's guidelines require it.

**D.** Remove all statistics from the proposal to avoid the risk of inaccuracy, and submit a qualitative narrative instead.

---

### Question 6 · D2 + D4 · Output Evaluation + Workflow Integration · 〔Select THREE〕

Haris is an operations manager at a logistics company. He wants to start using AI for his weekly fleet performance reports. He currently does these manually, analyzing fuel consumption, delivery times, and maintenance costs across 40 vehicles.

He has never tested AI on this task before.

**Which THREE steps should Haris take BEFORE using AI for next week's live report?**

**A.** Pick one recent week's fleet data where he already knows the correct analysis, upload it, and ask Claude to reproduce the analysis so he can compare against his known-correct results.

**B.** Ask Claude to analyze next week's data and have a colleague review the output for anything that looks wrong.

**C.** Set up a project for fleet reporting with the vehicle list, cost categories, and his standard report template as project knowledge, and add his formatting and calculation rules as project instructions.

**D.** After the first test (Step A), identify what Claude got wrong, refine his instructions to fix those issues, and re-run until the output matches his known results — or conclude which parts should stay manual.

**E.** Switch to the flagship model (Opus) for all fleet reports to ensure maximum accuracy from the start.

**F.** Ask Claude to rate its own confidence in the fleet analysis on a scale of 1-10 and only proceed if it rates itself above 8.

---

### Question 7 · D3 + D2 · Product & Model Selection + Output Evaluation

Sara, a compliance officer at an insurance company, needs to determine whether a new product feature complies with recently updated insurance regulations [bima ke naye qawaneen]. She has:

- The full text of the updated regulations (47 pages, uploaded)
- The product feature specification (8 pages, uploaded)
- Her own compliance checklist (15 items)

She runs the analysis in Claude Sonnet with thinking mode on. Claude flags 3 potential compliance issues and marks the other 12 items as compliant.

She then runs the identical task in ChatGPT. ChatGPT flags 5 potential issues — the same 3 as Claude, plus 2 additional ones.

What is the MOST appropriate next step?

**A.** Trust ChatGPT's analysis since it found more issues — finding more problems is always more thorough and therefore more reliable.

**B.** Trust Claude's analysis since it used thinking mode, which means it reasoned more carefully and the 2 extra ChatGPT findings are likely false positives [ghalat alarm — flagging something that isn't actually a problem].

**C.** Investigate the 2 additional issues ChatGPT found by checking them against the actual regulation text. If they are real compliance concerns, add them. If they are false positives, discard them. Use both outputs as a more complete starting point, but verify every flagged issue against the source.

**D.** Run the analysis a third time in Claude Opus to break the tie, and go with whichever two out of three agree.

---

### Question 8 · D2 + D6 · Output Evaluation + Governance

Usman is a senior financial analyst at an investment firm [paisa lagane wali company]. He has spent three months building a robust proving loop for quarterly earnings analysis: he tested Claude on six past quarters with known results, refined instructions through multiple iterations, and now gets consistent, accurate output.

His manager asks him to use the same Claude setup to analyze a potential acquisition [khareedne ka saudaa — buying another company] target's financials for a $50 million deal. The acquisition analysis uses different metrics [paimaane — measurements], different risk factors, and serves a fundamentally different purpose than quarterly earnings.

What should Usman do?

**A.** Use the same Claude setup — his three months of testing prove Claude is reliable for financial analysis, and an acquisition analysis is still financial analysis.

**B.** Recognize that the proving loop validated quarterly earnings analysis specifically, not all financial analysis. Run a new proving loop: find a past acquisition deal whose analysis he already knows, test Claude on it, compare, refine, and only then use it for the live deal — while keeping human experts in the loop for a decision of this magnitude.

**C.** Skip the proving loop since the $50 million deal is time-sensitive, but have a colleague review Claude's output before submitting it to the manager.

**D.** Refuse to use Claude for the acquisition analysis because the stakes are too high for AI involvement, and do the entire analysis manually.

---
---

## ANSWERS AND EXPLANATIONS

---

### Question 1 — Answer: B

**Why B is correct:** This tests the four-question framework for connecting external systems. Before activating ANY connector, Sana must consider: (1) what it can read — all three inboxes, including sensitive HR complaints with employee personal data; (2) whether company policy allows connecting mailboxes that contain confidential information to AI tools; (3) whether she's authorized to expose HR data to an AI system. The governance question comes BEFORE the productivity question.

**Why A is wrong:** ROI calculation (time saved) is a productivity question, not a governance question. Even if the connector saves hours per week, it should not be activated if it exposes confidential HR data in violation of company policy. Security and governance come before convenience.

**Why C is wrong:** Comparing Claude vs. ChatGPT connectors is a platform awareness question (Concept 1), but it's not the FIRST consideration. Whether she SHOULD connect at all comes before which tool to connect with. This answer skips the permission decision entirely.

**Why D is wrong:** This answer recognizes a valid concern (HR inbox sensitivity) but jumps to a specific solution (restrict to personal email only) before fully evaluating the situation. The correct first step is to assess what's at risk AND check company policy. Restricting the connector might be the right fix, but Sana needs to understand the full picture first — including what other sensitive data might be in her personal inbox.

---

### Question 2 — Answer: B

**Why B is correct:** This is a multi-source investigation that deserves a cited report — the right job for research mode. But the answer doesn't stop at "use research mode." It includes the critical second step: verify key claims by opening citations and cross-referencing with the company's own industry databases. Research mode extends reach; it does NOT eliminate the need for verification. A VP-level report on market competitors must have accurate, verified figures.

**Why A is wrong:** A more detailed prompt is better than a vague one (Concept 6), but it's still basic chat — not a thorough investigation. And "use Claude's response directly in the report" skips all verification. The prompt improvement is correct; the lack of verification is reckless.

**Why C is wrong:** Web search is for quick, single facts — not a comprehensive competitive analysis. Copying facts from news articles without deeper investigation gives a shallow, possibly outdated view. This is a misrouting problem: the task needs research mode, not search.

**Why D is wrong:** The abandonment trap. AI is capable of market research — especially research mode, which was designed for exactly this kind of multi-source investigation. Doing it entirely manually wastes a week when a combination of AI research + human verification could produce a better report in less time. The right approach is AI for reach, human for judgment.

---

### Question 3 — Answer: B

**Why B is correct:** The proving loop gave Nida earned confidence — but earned confidence is not a blank check. For 200 employees whose leave balances affect payroll, she needs to spot-check a sample, with extra attention on edge cases (mid-year hires, extended leave, transfers) — exactly the kinds of situations where the original instructions might not cover all variations. She should also verify any results that directly affect pay.

**Why A is wrong:** This is Trap 3 from the concept — "the loop passed, so no more checking." Passing on 5 employees doesn't guarantee correctness on 200. New edge cases may exist that weren't in the test set. The proving loop gives earned confidence for SIMILAR work, not immunity from checking.

**Why C is wrong:** Manually recalculating all 200 defeats the purpose of using AI. If you redo all the work manually, you haven't delegated anything. The proving loop exists to build enough confidence for sampling-based verification, not to require 100% manual duplication.

**Why D is wrong:** Asking Claude to verify its own output is circular verification (Trap 2). The same model using the same instructions will produce the same results — or confidently reaffirm errors. Verification requires an EXTERNAL check: spot-checking against manual calculations or payroll records.

---

### Question 4 — Answer: A and C

**Why A is correct:** Using a connected app to pull the actual filing is efficient AND secure — provided the connector is approved under the firm's data policy. This gives Claude the real document (Concept 3: better context), avoids typing from memory, and respects governance requirements. The key detail is "ensuring the connector has been approved for use with client data" — the permission check before connecting.

**Why C is correct:** Web search gets the current tax code changes from the official source — this is a current-fact lookup, exactly what search is for. But the answer adds the critical verification step: checking Claude's summary against the government's published gazette. Tax code details going to a client meeting MUST be verified against the authoritative source. This combines correct routing (search for current facts) with correct verification (check before presenting to client).

**Why B is wrong:** Typing from memory is exactly what went wrong in Sana's scenario. Financial details typed from memory will contain errors. "Takes too long" is not a valid reason to use inaccurate data. Pull the actual document.

**Why D is wrong:** Research mode produces a broad, multi-source report — useful for general market research, but wrong for this task. The client needs analysis of THEIR specific situation under specific tax rules, not a general investigation. This is a misrouting problem. Also, "a report the client can take home" skips verification entirely — the firm would be handing a client an unverified AI-generated tax analysis, which is reckless for a professional services firm.

---

### Question 5 — Answer: C

**Why C is correct:** This tests multiple concepts together. The statistics might be fabricated (hallucinated precise numbers — a classic AI pattern). Verifying against authoritative sources (census, government reports, nonprofit's own data) is the correct verification step. Correcting inaccuracies addresses the data quality issue. And disclosing AI use respects funder requirements. The tight deadline doesn't eliminate the obligation to verify — it prioritizes WHICH verification matters most (the statistics that the funder will check).

**Why A is wrong:** "Plausible" is not "verified." This is the reckless option. Submitting a grant proposal with potentially fabricated statistics risks the nonprofit's credibility and funding relationship. If the funder checks the numbers and they're wrong, the nonprofit loses trust — and possibly future funding.

**Why B is wrong:** Asking Claude to confirm its own statistics is circular verification. Claude will confidently say "yes, these are accurate" even if it invented the numbers. Self-reported confidence is not a reliability signal. The exam tests this pattern repeatedly.

**Why D is wrong:** The abandonment/wasteful option. Removing all statistics weakens the proposal significantly — funders expect data-backed arguments. The correct approach is to verify the statistics, not remove them. Two days is enough time to check a handful of key statistics against census or government data.

---

### Question 6 — Answer: A, C, D

**Why A is correct:** This is Step 2-3 of the proving loop — find old data where you know the correct answer, test the AI against it. Haris needs to PROVE Claude can do fleet analysis before using it on live data. Testing on a known week gives him something real to compare against.

**Why C is correct:** Setting up a project (Concept 4) with vehicle lists, cost categories, report templates, and calculation rules as project knowledge means Haris won't re-upload and re-explain every week. This is configuration that makes the workflow sustainable. Combined with A and D, it sets up both the proving loop AND the persistent workspace.

**Why D is correct:** This is Step 4-5 of the proving loop — analyze what went wrong, refine instructions, re-run. Without this iterative refinement, testing once and finding errors doesn't actually improve the process. The proving loop is iterative by design.

**Why B is wrong:** Using AI on LIVE data before testing on known data skips the proving step entirely. A colleague reviewing "for anything that looks wrong" is weaker than comparing against a known-correct result. The colleague might not catch calculation errors if the output looks professional. Test first, then go live.

**Why E is wrong:** Model tier doesn't replace the proving loop. Opus is more capable at reasoning, but switching models doesn't prove the output is correct for Haris's specific fleet data and methodology. You still need to test and verify.

**Why F is wrong:** AI self-confidence ratings are meaningless. Claude rating itself "9/10" on confidence is not verification — it's the circular self-check trap. Confidence should come from comparison against known results, not from the AI's own assessment.

---

### Question 7 — Answer: C

**Why C is correct:** Running the same task in both tools is platform awareness (Concept 1) at its best. But the question is WHAT TO DO with the different results. Neither tool's output should be trusted automatically. The 2 additional ChatGPT findings could be real issues Claude missed, or they could be false positives. The only way to know is to check them against the actual regulation text. Use both outputs as a MORE COMPLETE starting point, then verify every flagged item against the source document.

**Why A is wrong:** "More findings = more thorough" is a flawed assumption. Finding more issues doesn't mean finding the RIGHT issues. ChatGPT might be over-flagging (false positives) or Claude might be under-flagging (false negatives). Quantity of findings is not a measure of accuracy. The source document is the measure of accuracy.

**Why B is wrong:** Thinking mode makes Claude reason more carefully, but it doesn't guarantee completeness. It's possible Claude's careful reasoning correctly dismissed two non-issues — or it's possible Claude's reasoning missed two real problems. "Thinking mode was on" is not proof of correctness. Verify against the source.

**Why D is wrong:** "Two out of three agree" is a voting heuristic [andaaze ka tareeqa — a rough method, not a proof], not verification. If two tools miss the same issue, voting makes the miss unanimous. The source of truth is the regulation text, not majority agreement among AI models. Also, this wastes time and flagship capacity when the answer is simply "check the source document."

---

### Question 8 — Answer: B

**Why B is correct:** This is the subtlest question in the guide. Usman's proving loop is excellent — but it validated QUARTERLY EARNINGS ANALYSIS specifically. An acquisition analysis is a fundamentally different task: different metrics, different risk factors, different purpose, different stakes. Earned confidence doesn't transfer across task types. The correct approach is to run a NEW proving loop for the new task type, using a past acquisition with known results. And for a $50M deal, human experts must stay in the loop regardless of AI performance — the stakes demand it.

**Why A is wrong:** This is the over-generalization trap. "Financial analysis" is a category, not a task. Quarterly earnings and acquisition analysis share some skills (reading financial statements) but differ fundamentally in method and purpose. Proving Claude works for one doesn't prove it works for the other. This is like saying "I tested the car on city roads, so it's proven for off-road driving" — same vehicle, different task.

**Why C is wrong:** Skipping the proving loop for a $50M decision is reckless, no matter how time-sensitive the deal is. A colleague review helps, but without a known-answer comparison, neither Usman nor the colleague can tell whether Claude's output is correct — they can only tell whether it LOOKS correct. For $50M, "looks correct" is not good enough.

**Why D is wrong:** The abandonment trap. Refusing to use AI entirely for high-stakes work is overly cautious when a proving loop + human expertise could produce better analysis. The exam's principle is "don't abandon the task — find a safe way to proceed." A safe way exists: test on known past deal, verify, keep experts in the loop. AI assistance with proper validation is better than pure manual work under time pressure.

---
