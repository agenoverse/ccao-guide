---
type: Document
title: "Just Delegate It: Scenario Guide Part 2 — Give AI Real Material"
description: "Scenario walkthroughs for Concepts 4-6: giving AI sources to research, staying inside a source, and asking for the deliverable (Domain 3: Product 12%)."
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
order: 13
---


> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.
>
> **Domain focus:** Concepts 4 and 5 cover **D3 — Product & Model Selection (12%)**. Concept 6 covers **D1 — Prompting & Task Execution (14%)**. The framework crosses all domains.
>
> **Reading time:** ~25 minutes
>
> **Previously:** Part 1 taught you the shift (job not question), the shape (outcome not clicks), the work order (Delegation Brief), and the rhythm (Delegation Loop). You know HOW to describe a job. Now you learn how to give the job real material to work with.

---

## FRAMEWORK: Need First, Then Tool

**Exam domain: Crosses all domains — tested whenever the exam asks "which feature should the associate use?"**

### THE SCENARIO

Hira just joined a marketing firm. On her first day, her manager says: "We use Claude here. Learn it."

Hira opens Claude and sees... a lot. There's a web search toggle [on/off ka button]. There's a file attachment button. There's something called "Projects." There's a thinking mode. Research mode. Artifacts [AI ke banaye hue documents jo chat ke baaju mein dikhte hain]. Connectors [doosri apps se connection, jaise Google Drive ya Slack].

Hira spends her whole first morning reading about every feature. By lunch, she has 12 browser tabs open, has read about Projects, memory settings, scheduled tasks, and API access [API = Application Programming Interface, developers ke liye direct connection]. She hasn't done any actual work. She KNOWS a lot about Claude. She has DONE nothing with Claude.

Meanwhile, her colleague Bilal got the same instruction. He opened Claude and typed:

> "Our client launches a skincare line next month. Find 5 beauty influencers [social media par mashhoor log jo products promote karte hain] in Pakistan with 50K-500K followers who post about skincare. Table: name, platform, follower count, engagement rate [kitne log actually react karte hain], and link to profile."

Claude responded. But the follower counts looked wrong -- no sources. Bilal realized: **this job needs current information.** He turned on web search and ran it again. Now the results came with links he could check.

Next day, his manager sent him a PDF of the client's brand guidelines [brand ki rules -- kaunse colors, kaunsa tone, kya allowed hai]. Bilal needed Claude to check if the influencers' content matched the guidelines. He realized: **this job needs a source only I have.** He attached the PDF.

Bilal learned two features in two days. Each time, a JOB told him he needed the feature. He never read a manual.

### WHAT HAPPENED HERE?

Hira learned tools, then looked for jobs. Bilal had a job, then learned the tool it needed.

### THE CONCEPT

The rule for every button, switch, and feature on the screen:

> **Need first, then tool.** A control is learned when a job needs it, not before.

This isn't just a learning philosophy [seekhne ka tareeqa]. It's how the exam thinks. The exam never asks "what does the Projects feature do?" It asks: "An associate keeps retyping the same context in every chat. What should they do?" The answer is Projects -- but you reach it through the NEED, not the FEATURE.

**The complete Need → Tool map:**

```
┌─────────────────────────────────────┬────────────────────────────────────────┐
│ THE JOB NEEDS...                    │ SO YOU...                              │
├─────────────────────────────────────┼────────────────────────────────────────┤
│ Current information                 │ Ask for it + turn on web search        │
│                                     │                        → Concept 4     │
├─────────────────────────────────────┼────────────────────────────────────────┤
│ A source only you have              │ Paste it or attach the file            │
│                                     │                        → Concept 5     │
├─────────────────────────────────────┼────────────────────────────────────────┤
│ Something private in the job        │ Remove private parts + use temporary   │
│                                     │ or incognito chat      → Concept 5     │
├─────────────────────────────────────┼────────────────────────────────────────┤
│ A finished thing, not an answer     │ Ask for the document, table, or file   │
│                                     │                        → Concept 6     │
├─────────────────────────────────────┼────────────────────────────────────────┤
│ Room to choose its own method       │ Say what it may decide + what it must  │
│                                     │ ask about              → Concept 7     │
├─────────────────────────────────────┼────────────────────────────────────────┤
│ The same context every time         │ Put sources in a Project as knowledge, │
│                                     │ rules as standing instructions         │
│                                     │                        → Concept 8     │
├─────────────────────────────────────┼────────────────────────────────────────┤
│ More capability than it showed      │ Turn on thinking, or use a stronger    │
│                                     │ model                  → Concept 9     │
└─────────────────────────────────────┴────────────────────────────────────────┘

Rule: nothing on the screen is explained before a job asks for it.
```

### EXAM TRAP

The exam shows a scenario and four options. One option names the RIGHT feature for the wrong reason. Another names a feature the job doesn't need.

**The test on exam day:** "Does the JOB need this feature, or is the person reaching for the feature because they know it exists?"

Example from mock exams:
> An associate's output is shallow. What should they do?
> - A: Switch to a more capable model *(feature-first thinking -- expensive fix)*
> - B: Provide more specific context in the prompt *(need-first thinking -- cheapest fix)*

The exam almost always rewards the **cheapest fix first** — change the prompt before changing the model. Change the model before changing the tool. This is need-first thinking.

### QUICK CHECK

> Tariq's weekly report job works fine in a regular chat. A colleague suggests he move it to a Project with standing instructions. Is this good advice?

**It depends.** If Tariq retypes the same context every week (same company background, same report format rules), then YES — the NEED exists (same context every time → Project). If this is a one-time report, then NO — the need doesn't exist, and setting up a Project is overhead [extra mehnat] for nothing. **The need decides, not the feature.**

---

## CONCEPT 4: Give AI Something to Research

**Exam domain: D3 — Product & Model Selection**

### THE SCENARIO

Tariq is an event coordinator [events organize karne wala -- company ke functions, dinners, conferences ka intezaam]. His company's annual dinner [saalana khaane ki taqreeb] is in 6 weeks. His boss says: "Find three venue [jagah jahan event ho] options in Islamabad for 200 guests, with prices."

Tariq opens Claude and types:

> "What are good event venues in Islamabad for 200 guests? Give me prices."

Claude responds confidently:

> "Here are three excellent options:
> 1. Serena Hotel Grand Ballroom — PKR 450,000 for 200 guests
> 2. Marriott Islamabad — PKR 380,000 for 200 guests
> 3. Pearl Continental — PKR 320,000 for 200 guests"

The prices are specific. The venues are real. Tariq copies the table into an email to his boss. Boss approves the Pearl Continental budget.

Tariq calls the Pearl Continental. The actual price? PKR 520,000. Not 320,000.

He calls the Marriott. PKR 480,000, not 380,000.

Every single price was wrong. Not a little wrong -- HUGELY wrong. But they SOUNDED right. They were round numbers. They were in the right range for Islamabad. They felt real. They were completely made up.

What happened? Claude **remembered** these venues from its training data [woh data jis par AI ko train kiya gaya tha -- purani information]. It knew the venues exist. But the prices? AI **guessed** based on patterns. It had no current information. And it didn't say "I'm guessing" -- it stated the prices as facts.

Now imagine Tariq had written:

> "Search for event venues in Islamabad that can hold 200 guests. Find current pricing for 2026. For each venue, give: name, price, capacity, and the link where you found the price. Say whether you searched for this or already knew it."

Claude searches the web. Some prices come back with links to the venues' event pages. One venue has no current price online -- Claude marks it. Tariq opens the links. Two prices match the venue websites. One is from a 2024 page. He calls that venue to confirm.

Total time wasted: 10 minutes of checking.
Compare to Attempt 1: a wrong budget approved, an embarrassing phone call, and a boss who now doesn't trust Tariq's research.

### WHAT HAPPENED HERE?

AI has **two ways of knowing things**:

```
┌──────────────────────┐     ┌──────────────────────┐
│    REMEMBERING        │     │     SEARCHING         │
│  (training data)      │     │  (web search)         │
├──────────────────────┤     ├──────────────────────┤
│ Large but OUT OF DATE │     │ Current but SMALLER   │
│                       │     │                       │
│ Knows venues exist    │     │ Finds today's price   │
│ Guesses at prices     │     │ Gives you a link      │
│                       │     │                       │
│ Sounds JUST AS SURE   │     │ Comes with a SOURCE   │
│ as a searched fact    │     │ you can open           │
│                       │     │                       │
│ No way to tell from   │     │ You can check the     │
│ the answer alone      │     │ page yourself          │
└──────────────────────┘     └──────────────────────┘
```

### THE CONCEPT

**How to tell whether AI searched or remembered:**

| Signal | What it means |
|---|---|
| Fact arrives with a source link + date | Probably searched — but you still must check the link |
| Fact arrives alone, no source, sounds very confident | Probably remembered — HIGH RISK of being wrong or outdated |
| AI says "I searched" but shows no link or page | Do not trust the claim — AI says it searched when it didn't |
| Price/date/statistic [number wali cheez] with no source | Almost certainly remembered or fabricated [banayi hui -- made up] |

**The critical sentence from this course:**

> **A citation [hawaala -- reference to a source] is not verification. Checking the citation is verification.**

This means: AI giving you a link doesn't mean the link says what AI claims. You must OPEN the link, FIND the sentence, and CHECK the date. If the sentence isn't there, or the date is old, the link was **decoration** [dikhawah -- just there to look credible].

**When does the job need search?**

```
Does the job involve any of these?
    │
    ├── Prices → YES, needs search (prices change)
    ├── Dates/schedules → YES (events end, deadlines pass)
    ├── Whether something still exists → YES (products discontinue)
    ├── Contact info → YES (numbers/emails change)
    ├── Recent news/events → YES (AI's training data has a cutoff)
    ├── Statistics from this year → YES
    │
    └── General knowledge (what is GDPR, how does budgeting work)
         → NO, remembering is fine for this
```

**Web search vs. research mode:**

| Web search (quick toggle) | Research mode (takes minutes) |
|---|---|
| One or two quick searches | Reads many pages, compiles a report |
| Good for: checking a fact, finding a price | Good for: deep research reports |
| Use when: one search settles it | Use when: the deliverable IS the report |
| Available on: most free plans | Available on: varies by plan |

### EXAM TRAP

**Trap 1 — "A source is not a date."**

The exam shows a scenario where AI gives a claim with a link. The associate opens the link and the information is there — but from 2023. The question asks: is this verified?

The TRAP answer says "yes, the source confirms it." The CORRECT answer says "the source is outdated — check for current information." A source that's two years old doesn't verify a claim about today.

**Trap 2 — "AI says it searched."**

The exam shows AI's response saying "Based on my search..." or "According to current data..." The TRAP is trusting the WORDS. The correct answer looks for the EVIDENCE: is there a link? Does the link lead to the claim? What's the date?

> **AI saying "I searched" is a sentence, not proof. The link is the evidence. The date on the page is the proof.**

### QUICK CHECK

> Nida asks Claude: "What is the current price of a MacBook Air M4 in Pakistan?"
> Claude responds: "The MacBook Air M4 is currently priced at PKR 425,000 at authorized retailers."
> No link. No source. No date.
>
> Should Nida trust this price?

**No.** The price arrived alone — no source, no link, no date. It SOUNDS specific ("PKR 425,000" and "authorized retailers"), but that specificity is exactly what makes remembered facts dangerous. They sound like searched facts. The price could be 6 months old or completely made up. Nida should either: (1) turn on web search and ask again, or (2) check an actual retailer's website herself. **Confident + no source = highest risk.**

---

## CONCEPT 5: Give AI the Source

**Exam domain: D3 — Product & Model Selection**

### THE SCENARIO

Amna is a project coordinator [project ka kaam organize karne wali]. Her manager Khalid sends her a long WhatsApp thread — 47 messages between the sales team and a client about a software project. Somewhere in those 47 messages are the actual requirements [zarooriyaat -- exactly kya banana hai]: deadlines, features, and things the client explicitly [saaf saaf] said no to.

Amna needs to pull out:
1. What the client actually wants built
2. By when
3. What they specifically rejected

She could read all 47 messages herself. That takes 45 minutes and she'll miss things. Or she could give Claude the thread and ask it to extract the information.

But wait. The thread has:
- Client's name: Ahmad Raza
- Client's phone number
- Khalid's personal comments about another team ("between us, their team is slow")
- A reference to a budget number the client shared confidentially [sirf unke beech -- only between them]

**Step 1 — Clean it first:**

Amna copies the thread into a document. She replaces "Ahmad Raza" with "Client A." She removes the phone number. She deletes Khalid's personal comment. She removes the confidential budget number.

Why? Because:

> **Before you paste anything real into an assistant, remove names, phone numbers, account numbers, and anything you would not pin to a public notice board [aam logon ke liye board].**

A free AI assistant is not your filing cabinet. The provider [company jo AI chalaati hai -- Anthropic for Claude, OpenAI for ChatGPT] still holds a copy for a time. Even in a temporary chat [woh chat jo history mein save nahi hoti -- ChatGPT calls it "temporary chat," Claude calls it "incognito chat"], the first rule stands: take out what's private.

**Step 2 — Give it to AI with two magic instructions:**

```
Using only the messages below, extract:
1. What features the client wants built
2. The deadline for each feature
3. What the client specifically rejected

For each answer, quote the exact message you used.
If the messages don't say, write "not in the source."

[cleaned thread here]
```

Claude responds:

> Features requested:
> 1. "Dashboard with real-time order tracking" — Client A, message 12
> 2. "Mobile app for delivery drivers" — Client A, message 23
> 3. "Customer notification system" — Client A, message 31
>
> Deadlines:
> 1. Dashboard: "We need this by end of March" — Client A, message 14
> 2. Mobile app: not in the source
> 3. Notifications: "This can wait until Phase 2" — Client A, message 35
>
> Rejected:
> 1. "We definitely don't want a chatbot — our customers prefer calling" — Client A, message 28

Amna checks message 12 in the original thread. The quote matches. She checks message 28. It matches. She notes that the mobile app has no deadline — she needs to ask the client.

**Without the two instructions**, Claude would have mixed the thread's information with its own knowledge of software projects. It might have added features that "similar clients usually want." It might have invented a deadline. And Amna would never know which came from the thread and which came from AI.

### WHAT HAPPENED HERE?

Two instructions turned a paste into a **source**:

| Instruction | What it does |
|---|---|
| "Using only the text below" | Tells AI: stay INSIDE this material. Don't mix in what you remember |
| "Quote the sentence you used" | Tells AI: show your work. Point to the exact line |

Together they make **"not in the source"** a GOOD answer. Without them, AI fills every gap with a guess -- and the guess sounds exactly like a fact.

### THE CONCEPT

**The two instructions that make a source a source:**

```
"Using only the text below"     +     "Quote the sentence you used"
        │                                       │
        ▼                                       ▼
  STAY INSIDE                             SHOW YOUR WORK
  (don't mix with memory)                 (point to the exact line)
        │                                       │
        └──────────┬────────────────────────────┘
                   │
                   ▼
        "Not in the source" becomes
        a GOOD ANSWER instead of a
        gap AI fills with a guess
```

**Three types of quotes AI might give you:**

| What you find | What happened | Trust level |
|---|---|---|
| Quote matches word for word | AI cited correctly | Check the MEANING too |
| Quote is close but not exact | AI paraphrased [apne alfaaz mein] and called it a quote | Low — read the original |
| Quote doesn't exist in the source at all | AI **invented** it | Zero — this is a fabrication [banayi hui cheez] |

**The privacy gate — what to remove BEFORE pasting:**

```
BEFORE PASTING, REMOVE:
  ✗ Names (replace with "Person A," "Client B")
  ✗ Phone numbers
  ✗ Account numbers / ID numbers
  ✗ Email addresses
  ✗ Confidential financial figures
  ✗ Personal opinions about colleagues
  ✗ Anything you wouldn't put on a public notice board

FOR SENSITIVE WORK, ALSO:
  → Use temporary chat (ChatGPT) / incognito chat (Claude)
  → These chats don't save to history or add to memory
  → BUT: the provider still holds a copy temporarily
  → So the FIRST rule (remove private info) still applies
```

**When a long chat goes stale [purani ho jaye -- stops being useful]:**

After about an hour of back-and-forth, a chat starts losing track. Symptoms:
- Claude repeats things it said earlier
- Answers get shorter
- Claude contradicts what it said 45 minutes ago

The fix is NOT to argue with the chat. The fix:

```
1. Ask Claude: "Summarize what we've decided so far and what remains"
2. Copy the summary
3. Open a FRESH chat
4. Paste the summary as the first message
5. Continue from there
```

The summary is a source too — you're giving AI the context it needs, cleaned and compressed.

### EXAM TRAP

**Trap 1 — "The privacy non-answer."**

The exam shows someone needing to use AI with sensitive data. The TRAP answers are:
- "Don't use AI at all for this" *(wasteful — abandons the task)*
- "It's fine, AI is confidential" *(reckless — ignores the risk)*

The CORRECT answer is always: **anonymize [pehchaan hatao -- remove identifying info] the sensitive parts and proceed.** The exam rewards the person who finds a way to do the task safely, not the person who either skips safety or skips the task.

From mock exam Q24 (D6): A sales manager wants to upload customer contact info including names and phone numbers. Company policy says no PII [Personally Identifiable Information -- kisi insaan ki pehchaan karne wali info] in third-party AI tools.
- Wrong: "Upload it, it's internal" ← policy still applies
- Wrong: "Abandon the idea" ← wasteful
- **Right: "Remove names and phone numbers, use anonymized customer IDs instead"** ← safe AND productive

**Trap 2 — "Quote means correct."**

The exam shows AI quoting a source. The associate sees the quote and assumes it's accurate. But the TRAP: AI can paraphrase and call it a quote. AI can even invent quotes that don't exist in the source at all.

The correct answer: **find the quote in the original text yourself, word for word.**

### QUICK CHECK

> Bilal needs Claude to analyze his company's employee satisfaction survey results. The survey has employee names, departments, and individual complaints attached to each name. He wants to know: which 3 departments have the lowest satisfaction?
>
> What should Bilal do BEFORE pasting the survey into Claude?

**Remove the employee names.** The analysis only needs department names and satisfaction scores, not who said what. Replace "Fatima Khan (Accounting): I hate the parking situation" with "Employee 1 (Accounting): complaint about parking." The department-level analysis works perfectly without identifying anyone.

If Bilal's company has a policy about AI and employee data, he should check that too. But at minimum: **names come out before the data goes in.**

---

## CONCEPT 6: Ask for the Deliverable, Not an Answer

**Exam domain: D1 — Prompting & Task Execution**

### THE SCENARIO

Rehan is an operations associate [operations = company ka roz-marra ka kaam chalaane wala department]. His manager asks him to compare three shipping companies for the company's warehouse.

Rehan has done his brief well. Claude gives him a great chat response with all three companies compared -- prices, delivery times, coverage areas, reliability ratings. There's even a note that says: "FedEx's international rate could not be confirmed from current sources — treat as unverified."

Rehan's manager needs this comparison by 3 PM. Rehan copies the chat text, pastes it into a Word document, adds a header, makes the font consistent, and emails it.

At 4 PM, the manager calls. "I went ahead and picked FedEx for international because their rate was the lowest in your report. We've signed a 6-month contract."

Rehan's stomach drops. That FedEx rate was the UNVERIFIED one. But when he formatted the document, he made everything look clean. Headers, nice font, professional table. And somewhere in that formatting... the "unverified" note disappeared.

The manager never saw it. The manager made a PKR 2 million decision based on a number that was never checked.

### WHAT HAPPENED HERE?

The CHAT had the caveat [ehtiyaat ki baat -- warning/disclaimer]. The DOCUMENT didn't. When Rehan poured the content from a conversation into a clean deliverable, the caveat got lost — because tidy documents are designed to look polished, and caveats look messy.

This is the difference between an **answer** and a **deliverable**:

| Answer | Deliverable |
|---|---|
| Lives in the chat | Lives outside the chat |
| Only Rehan sees it | The manager sees it. The finance team sees it. |
| If it has errors, only Rehan is confused | If it has errors, decisions get made on wrong data |
| Temporary — disappears when chat closes | Permanent — gets filed, forwarded, acted on |

### THE CONCEPT

A **deliverable** [hawaala dene laayiq cheez -- something shaped so someone else can use it, save it, hand it on, or act on it] is the form the result should take:

- A **table** (not a paragraph describing numbers)
- A **document** (not a chat message you'll copy-paste later)
- A **spreadsheet** (not prose [paragraph mein likha hua] about data)
- A **file** (something downloadable, something shareable)

**The Deliverable line in your brief names the FORM, not just the content.**

Bad deliverable line: "Give me the shipping comparison."
Good deliverable line: "A comparison table with: company name, domestic rate per kg, international rate per kg, average delivery days, coverage area. Then a 2-sentence recommendation. Make it a downloadable document. Keep every 'unverified' mark exactly where it is."

### The Caveat Problem

Deliverables eat caveats. This is one of the most important things in this course:

```
IN THE CHAT:                          IN THE DOCUMENT:
─────────────                         ─────────────────
"FedEx international rate:            "FedEx international rate:
$4.50/kg (unverified — could           $4.50/kg"
not confirm from current
sources)"                              ← THE WARNING VANISHED

"Note: DHL's coverage may             "DHL covers all major
not include rural areas —              cities and most rural areas"
verify with their sales team"
                                       ← THE HEDGE VANISHED
```

Why? Because when AI formats something into a clean document, it prioritizes looking polished. Caveats [ehtiyaat ki baatein], hedges [shayad/ho sakta hai wali baatein], and "unverified" marks are ugly in a neat table. So they get quietly dropped.

**The fix: one sentence in your brief.**

> "Keep every 'unverified' mark exactly where it is."

And then your VERIFICATION step is: count the caveats in the chat. Count them in the document. If the second number is smaller, find what was dropped and put it back.

### The Full Deliverable Checklist

When you write the Deliverable line in your brief:

```
NAME THE FORM:
  □ Table? Document? Spreadsheet? Presentation? File?

NAME THE STRUCTURE:
  □ Which columns? Which sections? How many sentences?

NAME THE AUDIENCE:
  □ Can someone read this WITHOUT seeing the chat?
  □ Can someone ACT on this without needing you to explain it?

PROTECT THE CAVEATS:
  □ "Keep every 'unverified' mark exactly where it is"
  □ Count caveats in chat vs. document after receiving it
```

**Where the deliverable appears depends on the assistant:**

| Assistant | Where it shows up |
|---|---|
| Claude | Artifacts panel (beside the chat) — document, code, or table |
| ChatGPT | Canvas (beside the chat) or file download |
| Both | The key: the work product is SEPARATED from the conversation |

When the answer is data, ask for a **table or spreadsheet**, not paragraphs. Numbers buried in paragraphs are invisible errors. Numbers in tables are checkable.

### EXAM TRAP

**Trap 1 — "The answer IS the deliverable."**

The exam shows someone who got a great chat response and plans to use it directly. The TRAP: "The answer is comprehensive and well-written, so the associate can use it as-is."

The CORRECT answer: turn it into a proper deliverable (document, table, file) that can be shared, saved, and checked. A chat reply is temporary. A deliverable survives.

**Trap 2 — "Caveats don't matter once the document looks good."**

The exam shows a scenario exactly like Rehan's: a well-formatted document missing a caveat that was in the original chat. The TRAP answer says "the document looks professional and is ready to share." The CORRECT answer says "verify that all caveats from the chat response survived in the final document."

From mock exam Q4 (D2 — the heaviest exam domain): Claude's output has warning signs. The trap is to ignore them because the document looks clean. The exam ALWAYS rewards the person who tracks the caveats.

**Decision tree:**

```
Is the result going to ANYONE besides you?
    │
    ├── YES → It needs to be a proper DELIVERABLE
    │         │
    │         ├── Did you name the FORM? (table/doc/file)
    │         ├── Did you name the STRUCTURE? (columns/sections)
    │         ├── Did you say "keep every unverified mark"?
    │         └── Did you COUNT the caveats before vs after?
    │
    └── NO → A chat answer is fine for your own reference
             (but still check the important claims)
```

### QUICK CHECK

> Fatima asks Claude to analyze three health insurance plans. Claude gives a great comparison in the chat, including a note: "Plan B's dental coverage details could not be verified from the uploaded document — marked as unverified."
>
> Fatima asks Claude to turn this into a one-page document for her boss. The document has a beautiful table. All three plans show dental coverage as "Yes."
>
> What happened and what should Fatima do?

**The caveat was eaten.** In the chat, Plan B's dental was "unverified." In the document, it shows "Yes" with no mark. The document looks cleaner -- but it's now misleading.

Fatima should: (1) count the caveats in the chat vs the document, (2) find the missing "unverified" mark, (3) add it back to the document manually or re-prompt with "keep every unverified mark exactly where it is," and (4) ONLY THEN send it to her boss.

If the boss acts on "Plan B has dental" and it turns out it doesn't, that's on Fatima, not on Claude. **Accountability doesn't transfer** (Part 1, Delegation Loop).

---

## PART 2 RECAP: How These Pieces Connect

```
NEED FIRST, THEN TOOL (the rule for every button)
         │
         │ "What does this job need?"
         │
         ├──────────────────────────────────────────────┐
         │                     │                        │
    ┌────▼─────┐         ┌────▼─────┐            ┌────▼─────┐
    │Concept 4 │         │Concept 5 │            │Concept 6 │
    │          │         │          │            │          │
    │ RESEARCH │         │  SOURCE  │            │DELIVERABLE│
    │          │         │          │            │          │
    │ Job needs│         │ Job needs│            │ Job needs│
    │ current  │         │ material │            │ a finished│
    │ facts    │         │ only you │            │ thing,   │
    │          │         │ have     │            │ not an   │
    │ → search │         │ → paste  │            │ answer   │
    │ → check  │         │ → clean  │            │          │
    │   the    │         │   it     │            │ → name   │
    │   source │         │ → tell   │            │   the    │
    │          │         │   AI to  │            │   form   │
    │ D3       │         │   stay   │            │ → protect│
    │          │         │   inside │            │   the    │
    │          │         │          │            │   caveats│
    │          │         │ D3       │            │          │
    │          │         │          │            │ D1       │
    └──────────┘         └──────────┘            └──────────┘
```

### The story so far:

**Need First, Then Tool** taught you the rule for every feature:
Don't learn buttons, then look for jobs. Have a job, then learn the button it needs. The exam always frames feature questions as NEEDS, not as feature names.

**Concept 4 (Research)** taught you how to handle current facts:
AI has two ways of knowing — remembering (large, outdated) and searching (current, with sources). A remembered fact sounds just as confident as a searched fact. The difference: a searched fact has a source you can open. **A citation is not verification. Checking the citation is verification.**

**Concept 5 (Source)** taught you how to give AI YOUR material:
Two instructions make a source a source: "using only the text below" and "quote the sentence you used." Together they make "not in the source" a good answer. And before pasting: **remove names, numbers, and anything you wouldn't put on a public notice board.**

**Concept 6 (Deliverable)** taught you to name the finished thing:
An answer replies to you. A deliverable can be handed on. Name the form (table, document, file), name the structure (columns, sections), and protect the caveats ("keep every unverified mark"). Deliverables EAT caveats — count them before and after.

### How the Brief lines grew in Part 2:

| Brief line | Part 1 | Part 2 added |
|---|---|---|
| **Context** | What AI can't know | Now also carries SOURCES (Concept 5) |
| **Constraints** | Limits and requirements | Now includes "use current information" (Concept 4) |
| **Deliverable** | Form of the result | Now names form + structure + "keep unverified marks" (Concept 6) |
| **Verification** | What you'll check | Now you ALSO check: did it search or remember? (C4). Does the quote match the source? (C5). Did the caveats survive the document? (C6). |

### Five rules to take to the exam from Part 2:

| # | Rule | When the exam tests it |
|---|---|---|
| 1 | Need first, then tool | When they ask "what feature should the associate use?" — match to the NEED |
| 2 | Confident + no source = highest risk | When AI gives a specific number with no link |
| 3 | A citation is not verification | When AI provides a source — you must OPEN and CHECK it |
| 4 | "Using only" + "quote the sentence" = source instructions | When someone pastes text and AI adds things from memory |
| 5 | Deliverables eat caveats — count before and after | When a formatted document looks clean but the chat had warnings |

---

**Next up — Part 3: Give AI More Rope.** You've learned to give AI a job (Part 1) and give it material (Part 2). Now you learn to give it MORE responsibility: how much it can decide on its own (Concept 7 — Authority), what to do when the job comes back (Concept 8 — Projects), and how to fix it when it goes wrong (Concept 9 — The Six Intervention Moves).


