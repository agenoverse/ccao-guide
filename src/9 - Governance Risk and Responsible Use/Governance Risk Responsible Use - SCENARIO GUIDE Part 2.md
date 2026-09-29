# Governance, Risk & Responsible Use — SCENARIO GUIDE Part 2

## THE DATA: Can This Information Go In?

> **Domain:** D6 — Governance, Risk & Responsible Use (15%) + D5 — Configuration & Knowledge Management (12%)
> **Concepts covered:** Data Tiers, The Discriminator Question, Redaction/Pseudonymization/Anonymization, Route & Purpose, Privacy Controls ≠ Authorization

---

## CONCEPT 6: Data Tiers (Green / Yellow / Red)

### THE SCENARIO

Sana works at a healthcare staffing [hospital ke liye log dhundhne wali] company. On Monday morning, she has three files on her desk:

**File 1:** A public blog post her marketing team published last week about industry hiring trends. She wants AI to rewrite it for a different audience.

**File 2:** An internal spreadsheet of client hospital names, contract values [kitne paise ka contract hai], and renewal dates [kab dubara sign karna hai]. She wants AI to find which contracts are expiring soon.

**File 3:** A folder of nurse candidates' medical fitness reports, background checks, and salary history. She wants AI to rank the top 10 candidates for a client.

Sana thinks: "It's all work data. I'll paste whatever I need."

### WHAT WENT WRONG?

Sana treated all three files the same. But they're in completely different sensitivity [kitna hifazat se rakhna hai] categories. File 1 is public — paste away. File 2 has business-confidential [company ka raaz] client data — needs a check first. File 3 has regulated [qanoon ke taht aane wala] personal health and financial data — red alert, do NOT paste into an unapproved route.

### THE CONCEPT

A **data tier** [data ka darjah — kitni ehtiyaat chahiye] tells you how carefully information must be handled. Three tiers:

```
  ▲ SENSITIVITY
  │
  │  ┌─────────────────────────────────────────────────────────┐
  │  │  RED: KEEP OUT (unless approved path exists)            │
  │  │                                                         │
  │  │  - Credentials [passwords, API keys]                    │
  │  │  - Highly regulated data (medical, financial records)   │
  │  │  - Privileged material [qanooni taur par               │
  │  │    mehfooz, jaise lawyer-client baat-cheet]             │
  │  │  - Third-party confidential info you can't disclose    │
  │  │  - Licensed material [ijazat-nama wala content         │
  │  │    jo copy karna mana hai]                              │
  │  │                                                         │
  │  │  CONTROL: Confirm the SPECIFIC approved route           │
  │  │           before uploading. An enterprise plan           │
  │  │           or a security page is NOT permission.          │
  │  └─────────────────────────────────────────────────────────┘
  │  ┌─────────────────────────────────────────────────────────┐
  │  │  YELLOW: CHECK FIRST / ADD A CONTROL                    │
  │  │                                                         │
  │  │  - Internal-only documents                              │
  │  │  - Personal contact details                             │
  │  │  - Customer/employee identifiers [naam, ID number]      │
  │  │  - Confidential drafts [raazdarana musawwade]           │
  │  │  - Unannounced deal/product information                 │
  │  │  - Anything where it DEPENDS on the route               │
  │  │                                                         │
  │  │  CONTROL: Check whether route is approved.              │
  │  │           Add persistence control if needed.             │
  │  └─────────────────────────────────────────────────────────┘
  │  ┌─────────────────────────────────────────────────────────┐
  │  │  GREEN: GENERALLY PERMITTED                             │
  │  │                                                         │
  │  │  - Public material                                      │
  │  │  - Aggregated figures [kul milaake ke numbers,          │
  │  │    kisi ek insaan ki pehchaan nahi hoti]                │
  │  │  - Internal material approved for AI use                │
  │  │  - Anonymized data (truly anonymized — see Concept 8)   │
  │  │                                                         │
  │  │  CONTROL: No special control needed.                    │
  │  └─────────────────────────────────────────────────────────┘
```

**The golden rule when you're unsure:** Treat it as the HIGHER tier until someone authorized [mujaz — jis ko faisla karne ka haq hai] to read the policy says otherwise.

Why? One tier too careful costs a two-minute confirmation. One tier too careless costs the program.

Back to Sana:
- File 1 (public blog): **Green** — paste away
- File 2 (client contracts): **Yellow** — check the route first, add controls
- File 3 (medical/financial records): **Red** — do NOT paste unless the specific route is approved for this data type

### EXAM TRAP

> Wrong answer pattern: "The data is on our company servers, so it's fine to paste into any AI tool"

Being internal does NOT make it green. Internal client data with identifiers is yellow. Internal medical records are red. Location doesn't determine the tier — **sensitivity** does. The exam will test whether you know that "internal" and "safe to paste" are different things.

### QUICK CHECK

**Q:** An employee has an internal spreadsheet of office supply orders (pens, paper, no names, no prices over $50). What tier?

**A:** Green — aggregated internal data with no personal identifiers and no business sensitivity. No special control needed. But if the same spreadsheet had employee names and their department budgets attached, it moves to yellow.

---

## CONCEPT 7: The Discriminator Question

### THE SCENARIO

Tariq is a data analyst [data ka tahleel karne wala] at an e-commerce [online shopping] company. His manager wants spending trends across 10,000 customers. Tariq has a CSV [ek table file] with: customer name, email, city, purchase amount, product category, and date.

He knows customer data is at least yellow tier. His first instinct: "I can't use AI for this — the data has names in it."

So he tells his manager: "Can't do it. Policy restricts personal data in AI tools."

His colleague Meher gets the same request. She asks one question:

> "Does the spending trend analysis actually NEED customer names and emails? Or does it only need the purchase amounts, categories, and dates?"

The answer is obvious — spending trends need the PATTERN, not the PEOPLE. Meher removes names and emails, keeps everything else, runs the analysis in 20 minutes.

Tariq abandoned a useful task. Meher solved it safely.

### WHAT WENT WRONG (and RIGHT)?

Tariq saw "personal data" and stopped. He never asked the branching question that would have saved the analysis. Meher asked the **discriminator** — the one question that decides which of two completely different branches you're on.

### THE CONCEPT

The **discriminator** [farq karne wala sawaal — jo bataye ke kaun sa raasta lena hai] is the most useful data question:

> **Does the task actually need the identifiers [pehchaan ki cheezein — naam, email, ID], or only the pattern [sirf pattern — numbers, trends, totals]?**

```
           Does the task need the identifiers?
                        │
            ┌───────────┴───────────┐
            │                       │
            ▼                       ▼
     NO — only the              YES — the specifics
     pattern                    are the substance
            │                       │
            ▼                       ▼
     REMOVE identifiers,        CONFIRM the route
     then verify nothing        is approved for
     traces back                this data + purpose
            │                       │
            ▼                       ▼
     Run the analysis           Get admin approval
     safely                     BEFORE uploading
```

**Two branches, two completely different answers:**

| Branch | Example | Action |
|--------|---------|--------|
| Only the pattern | Spending trends across customers | Remove names/emails, keep amounts and categories |
| The specifics matter | Reconciling [milaana] one customer's disputed invoice [jhagde wala bill] | You NEED the customer ID and transaction details — redaction would break the task |

**The power of this question:** It turns "this is sensitive, I can't do it" into "this is sensitive, but the task only needs the pattern, so I can remove the sensitive parts and proceed."

Before deciding a sensitive task is impossible, always ask the discriminator.

### EXAM TRAP

> Wrong answer pattern: "Skip the analysis entirely because the data contains personal information"

This is the **abandonment** trap. The exam punishes you for giving up when a safe path exists. If the task only needs the pattern, removing identifiers IS the safe path. The exam also punishes the opposite extreme — uploading everything without checking. The correct answer is almost always: "Ask whether identifiers are needed, remove what you can, confirm the route for what remains."

### QUICK CHECK

**Q:** A finance team wants AI to check whether a specific client, "Al-Rashid Enterprises," was double-charged on invoice #4872. Do they need the identifiers?

**A:** Yes — the specifics ARE the substance. You can't reconcile a specific invoice for a specific client without knowing which client and which invoice. Redaction would break the task. The correct move is to confirm the route is approved for this data, not to remove the identifiers.

---

## CONCEPT 8: Redaction, Pseudonymization, and Anonymization

### THE SCENARIO

Aisha works in HR [human resources — employees ka department] at a consulting firm. She wants AI to analyze patterns in employee satisfaction survey [employees ki raye ka survey] responses. The survey has: employee name, department, job title, years of service, and free-text comments.

Aisha decides to be careful. She removes all the names and replaces them with "Employee 1," "Employee 2," etc. She keeps a mapping file [ek list jis mein likha hai ke Employee 1 asal mein kaun hai] on her desktop so she can identify people later if needed.

She pastes the data into AI and thinks: "I removed the names. This is anonymous now."

But is it? The dataset still has job titles. One entry says: "Employee 14, Chief Technology Officer, 18 years of service, IT department." There's only ONE CTO at this company. Everyone knows who that is.

And that mapping file on Aisha's desktop? It means even the "Employee 1" labels can be traced back to real people.

### WHAT WENT WRONG?

Aisha confused three different things:

### THE CONCEPT

Three levels of identity removal — and they are NOT the same:

```
+-------------------------------------------------------------------+
| LEVEL 1: REDACTION                                                |
| [Hata dena — fields nikaal do jo kaam ke liye zaruri nahi]        |
|                                                                   |
| What:  Remove fields the task doesn't need BEFORE                 |
|        data reaches the AI                                        |
| Example: Delete the "name" and "email" columns                    |
| Status: A first move, not a verdict                               |
|         The remaining data might still identify someone           |
+-------------------------------------------------------------------+

+-------------------------------------------------------------------+
| LEVEL 2: PSEUDONYMIZATION                                         |
| [Nakli naam de do — lekin asal naam ki list kisi ke paas hai]     |
|                                                                   |
| What:  Replace names with labels (Customer 17, Employee A)        |
|        BUT someone still holds the mapping back to real people    |
| Example: "Fatima Khan" → "Employee 14" (mapping file exists)      |
| Status: Data KEEPS its tier. It is NOT anonymous.                 |
|         It must NOT be stored, reused, or shared as anonymous.    |
+-------------------------------------------------------------------+

+-------------------------------------------------------------------+
| LEVEL 3: ANONYMIZATION                                            |
| [Aisi tabdili ke pehchaan mumkin hi na rahe — aap ke              |
|  organization ke standard ke mutabiq]                              |
|                                                                   |
| What:  Changed so it NO LONGER identifies a person,               |
|        by your organization's own standard                        |
| Example: Aggregated survey stats with no individual rows,         |
|          no small-group counts, no rare job titles                 |
| Status: Tier can drop (to green) because the restriction          |
|         no longer applies. YOUR ORG'S STANDARD decides this,      |
|         not your personal judgment.                                |
+-------------------------------------------------------------------+
```

**Two ways redaction fails:**

| Failure | What happens | Aisha's case |
|---------|-------------|--------------|
| **Partial redaction** [adhuri safai] | Removed the obvious identifier but left enough clues to identify the person. A rare job title + department + years = identity | CTO + IT + 18 years = only one person. Name removal wasn't enough |
| **Redaction that breaks the task** | Removed information the task NEEDS. Result looks safe but is useless | If Aisha needed to follow up with specific employees, removing all identifiers breaks that |

**The key chain:**

```
  Redaction (remove fields)
       │
       ▼
  Ask: Can someone still be identified from what remains?
       │
  ┌────┴────┐
  YES       NO
  │         │
  ▼         ▼
  Ask: Does   Is the mapping
  a mapping   file gone AND
  list exist? does the org's
  │           anonymization
  ┌──┴──┐    standard say
  YES   NO   this qualifies?
  │     │         │
  ▼     ▼    ┌────┴────┐
  PSEUDO-    YES       NO
  NYMIZED    │         │
  (keeps     ▼         ▼
  its tier)  ANONYMIZED STILL
             (tier can  PSEUDONYMIZED
              drop)    (keeps tier)
```

### EXAM TRAP

> Wrong answer pattern: "Replace names with labels — the data is now anonymous and can be treated as green tier"

The exam LOVES this trap. Relabeling is pseudonymization, not anonymization. If the mapping exists, the data keeps its tier. And even without the mapping, if remaining fields (rare job title, small department, specific date) can identify someone, it's NOT anonymous. The correct answer always checks both: (1) is the mapping gone? (2) can remaining data still identify someone?

### QUICK CHECK

**Q:** You replace all customer names with "Customer 1, 2, 3..." but keep the mapping file so you can respond to individual complaints later. Is this data anonymized?

**A:** No — it's pseudonymized. The mapping still exists, so the labels can be traced back to real people. The data keeps its original tier. If you want it anonymized, the mapping must be destroyed AND the remaining data must not identify anyone by your organization's standard.

---

## CONCEPT 9: Route & Purpose (Entry Points)

### THE SCENARIO

Zubair works at a gym chain [gyms ki company]. The gyms collected members' phone numbers for one purpose: sending class schedule reminders [class ke waqt ki yaad-dhaani].

A new marketing manager, Hira, has a brilliant idea: "We have 50,000 phone numbers! Let's use AI to draft personalized supplement [protein powder waghera] sales messages and send them to all members."

Zubair says: "We use Claude. Claude is approved by our company. So it's fine to use this data in Claude."

Hira adds: "And I'll use the incognito mode [jo baat-cheet save nahi hoti], so the data won't be stored."

### WHAT WENT WRONG?

Two mistakes, back to back:

**Mistake 1 — Wrong question.** Zubair asked "Is this AI product approved?" That's the wrong question. The right question is:

> "Is **this route** approved for **this data** and **this purpose** [maqsad — kis liye collect kiya tha]?"

The phone numbers were collected for class reminders. Using them for supplement sales is a **different purpose**. The problem isn't the phone numbers — it's the promise made when they were collected. The gym told members "we'll use your number for class reminders." Using it to sell protein powder breaks that promise.

**Mistake 2 — Confusing the route with the tool.** Even if the purpose was right, the data enters through a specific **entry point** [raasta jis se data AI tak pahunchta hai]. Different entry points have different rules:

### THE CONCEPT

An **entry point** is the route by which data reaches an AI system:

```
  ENTRY POINTS FOR DATA → AI

  ┌──────────────────┬────────────────────────────────────┐
  │ Chat             │ Paste or type directly in chat     │
  │ Project/Workspace│ Upload to a shared knowledge space │
  │ Incognito chat   │ Chat that doesn't save to history  │
  │ File upload      │ Attach a file to the conversation  │
  │ Connector        │ Approved link to your app          │
  │   [jodne wala]   │ (e.g., reads your Google Drive)    │
  │ API              │ Software-to-software direct link   │
  │   [seedhi        │ (no chat window, code connects     │
  │    software link]│  directly to AI)                   │
  │ Desktop agent    │ AI that can see/act on your screen │
  └──────────────────┴────────────────────────────────────┘
```

Routes differ in:
- **Retention** [kitni der tak data rakha jaata hai]
- **Access** [kaun dekh sakta hai]
- **Logging** [kya record hota hai]
- **Training use** [kya aap ka data model ko sikhaane mein use hoga]
- **Contract terms** [agreement ki shartein]

**The right question is always:**

> "Is **this route** approved for **this data** and **this purpose**?"

Not "is this AI tool approved?" — because one tool can have multiple routes, and each route has different properties.

**Purpose** [maqsad] means the reason data was FIRST collected. A new use of the same data needs that original reason to cover it — or fresh permission.

```
  PURPOSE CHECK:

  Why was this data        Does the new use
  originally collected? ──► fit that reason?
                                │
                          ┌─────┴─────┐
                          YES         NO
                          │           │
                          ▼           ▼
                       Proceed     Ask whoever
                       (with       OWNS the data
                       route       whether new
                       check)      purpose is
                                   permitted
```

For sensitive or regulated data, route approval comes from an **administrator** [intezaamiya], policy owner, security function, compliance [qanoon/rules ki pabandi] team, or contract. It does NOT come from a guess at the keyboard.

### EXAM TRAP

> Wrong answer pattern: "The company approved Claude, so any data can go through any Claude feature"

The exam tests whether you understand that **tool approval ≠ route approval**. A company might approve Claude but NOT approve uploading customer financial records through the chat interface. The question is always about the specific route + specific data + specific purpose. An answer that says "the tool is approved" without checking the route is always wrong.

### QUICK CHECK

**Q:** A gym collected phone numbers for class reminders. A new manager wants to use those numbers for AI-drafted supplement sales messages. The AI tool is company-approved. What's the problem?

**A:** The purpose has changed. The numbers were collected for class reminders, not product sales. Regardless of whether the AI tool is approved, using data for a different purpose than it was collected for requires fresh permission from whoever owns the data. The objection isn't about the phone numbers — it's about the promise made when they were collected.

---

## CONCEPT 10: Privacy Controls ≠ Authorization

### THE SCENARIO

Naeem is a financial advisor [paisa lagane ke baare mein mashwara dene wala]. He has a client's complete investment portfolio [saare investments ki list] — account numbers, balances, asset allocation [paisa kahaan lagaya hai]. He wants AI to analyze the portfolio and suggest rebalancing [paisa idhar se udhar karna] options.

He knows this is sensitive data. So he takes precautions [ehtiyaat]:

1. He uses **incognito mode** [baat-cheet jo history mein nahi dikhti] — "so the data won't be stored"
2. He turns off **memory** [AI ki yaaddaasht] — "so Claude won't remember this client's data"
3. He uses the **code execution sandbox** [ek alag band kamra jahan AI code chalata hai, bahar kuch nahi pahunchta] — "so the code runs in isolation"
4. He uses a **Project workspace** [ek jagah jahan files aur instructions ek saath rakh sakte ho] — "to keep everything organized and secure"

Then he pastes the full portfolio and feels safe.

His compliance officer [qanoon aur rules ki pabandi ka zimmedar] finds out and says: "None of those things answer the question I need answered."

### WHAT WENT WRONG?

Naeem stacked four privacy controls. Each one does something real. But NONE of them answers the authorization [ijazat] question: **"Was this data allowed to enter this system through this route?"**

### THE CONCEPT

Each privacy/workspace control answers a **narrow** question. None answers the **big** question.

```
+----------------------------+-------------------------+----------------------------+
| CONTROL                    | WHAT IT HELPS WITH      | WHAT IT DOES NOT DECIDE    |
+----------------------------+-------------------------+----------------------------+
| Incognito /                | History or memory       | Whether the data was       |
| temporary chat             | persistence             | PERMITTED to enter the     |
|                            | [yaaddaasht mein nahi   | system at all              |
|                            |  rehta]                 |                            |
+----------------------------+-------------------------+----------------------------+
| Memory controls            | Cross-session reuse     | Whether the UPLOAD was     |
| [yaaddaasht band karna]    | of information          | allowed, or how long       |
|                            |                         | underlying data is kept    |
+----------------------------+-------------------------+----------------------------+
| Code execution             | Limiting where code     | Whether the DATA was       |
| sandbox                    | can operate             | authorized for that        |
| [band kamra]               | [code sirf andar        | environment                |
|                            |  chalta hai]            |                            |
+----------------------------+-------------------------+----------------------------+
| Project / workspace        | Keeping files,          | Whether EVERY file or      |
|                            | instructions, and       | data type is approved      |
|                            | knowledge together      | for that workspace         |
+----------------------------+-------------------------+----------------------------+
| Organization-managed       | Roles, retention,       | Blanket approval for       |
| account & admin controls   | exports, audit          | every workflow, data       |
|                            |                         | type, or audience          |
+----------------------------+-------------------------+----------------------------+
```

**The principle in one line:**

> Sandboxing [band kamre mein rakhna] and authorization [ijazat dena] are different things.

A sandbox limits what code can REACH outside an isolated environment. But the data still ENTERED a system, and outputs can still LEAVE it.

**Five Claude-specific distinctions** (the exam may test these):

| Distinction | What to know |
|-------------|-------------|
| Memory ≠ retention | Turning off memory doesn't control how long chats are kept. Chats follow separate retention/export rules |
| Incognito ≠ zero retention | Incognito chats don't appear in history or memory, but Anthropic documents a 30-day default retention. Not available inside Projects |
| Training depends on plan | Free/Pro/Max: privacy settings decide. Team/Enterprise/API: NOT used for training by default. Incognito: never used for training |
| Sandbox ≠ data authorization | Code execution sandbox limits code reach. It doesn't prove a sensitive file was ALLOWED in that environment |
| Private ≠ invisible to admins | Team/Enterprise have data-export and audit mechanisms. Your "private" chat may be visible to org admins |

### EXAM TRAP

> Wrong answer pattern: "Use incognito mode so the sensitive data won't be retained, making it safe to upload"

This is the exam's FAVORITE data trap. The answer sounds careful and responsible — but incognito mode answers the retention question, not the authorization question. The correct answer always checks authorization FIRST (is this route approved for this data?), THEN chooses appropriate controls. Never the reverse — you don't pick a control and work backwards to justify the data.

```
  WRONG ORDER:                     RIGHT ORDER:

  "Which control makes this     →  "Is this route approved
   data safe to upload?"            for this data?"
                                        │
  (Starting from the control)      ┌────┴────┐
                                   YES       NO
                                   │         │
                                   ▼         ▼
                                 THEN add   STOP.
                                 controls   Get approval
                                 as needed  first.
```

### QUICK CHECK

**Q:** A colleague says: "I turned on incognito mode and disabled memory, so it's safe to paste our client's tax records into Claude." What's the flaw?

**A:** Incognito and memory controls address retention and cross-session reuse — not authorization. The question they haven't answered is: "Is this route approved for regulated financial data?" That approval comes from an admin, compliance team, or policy — not from a feature toggle. Controls reduce specific risks AFTER the data is authorized to enter. They don't create the authorization.

---

## PART 2 RECAP: How These 5 Concepts Connect

```
THE DATA: Can this information go in?

  START: You have data for an AI task
     │
     ▼
  ┌─────────────────────────────────┐
  │  STEP 1: CLASSIFY THE DATA      │
  │  (Data Tiers — Concept 6)       │
  │                                 │
  │  Green?  → Proceed              │
  │  Yellow? → Check first          │
  │  Red?    → Approved route only  │
  │  Unsure? → Treat as higher tier │
  └────────────┬────────────────────┘
               │
               ▼
  ┌─────────────────────────────────┐
  │  STEP 2: ASK THE DISCRIMINATOR  │
  │  (Concept 7)                    │
  │                                 │
  │  "Does the task need the        │
  │   identifiers, or only the      │
  │   pattern?"                     │
  │                                 │
  │  Only pattern → Remove IDs      │
  │  Needs specifics → Confirm route│
  └────────────┬────────────────────┘
               │
               ▼
  ┌─────────────────────────────────┐
  │  STEP 3: IF REMOVING, DO IT     │
  │  RIGHT (Concept 8)              │
  │                                 │
  │  Redaction: Remove fields       │
  │  Check: Can someone still       │
  │    be identified?               │
  │  Check: Does a mapping exist?   │
  │  Pseudonymized ≠ Anonymous      │
  └────────────┬────────────────────┘
               │
               ▼
  ┌─────────────────────────────────┐
  │  STEP 4: CONFIRM THE ROUTE      │
  │  (Concept 9)                    │
  │                                 │
  │  Right question:                │
  │  "Is THIS route approved for    │
  │   THIS data and THIS purpose?"  │
  │                                 │
  │  Tool approved ≠ Route approved │
  │  Original purpose must cover    │
  │  this use, or get fresh OK      │
  └────────────┬────────────────────┘
               │
               ▼
  ┌─────────────────────────────────┐
  │  STEP 5: NOW choose controls    │
  │  (Concept 10)                   │
  │                                 │
  │  Controls come AFTER            │
  │  authorization, not before.     │
  │  Incognito ≠ permission         │
  │  Sandbox ≠ approval             │
  │  Memory off ≠ data never stored │
  └─────────────────────────────────┘
```

**The chain in one sentence:**
> Classify the data → ask whether the task needs the identifiers → if removing, check it's truly anonymous → confirm the route and purpose → THEN choose controls.

**The sentence to remember:**
> The route is part of the data question, so confirm it before you reach for a control. A privacy feature answers a narrower question than the one you started with.

---

## EXAM-LEVEL PRACTICE QUESTIONS

### Question 1 · D6

Kamran, a marketing analyst [ishtihaar ke numbers dekhne wala], wants AI to find spending patterns across 5,000 customer transactions [khareedari ka record]. The dataset includes customer names, email addresses, purchase amounts, product categories, and dates. Company policy restricts personal data in AI tools.

**What is the most appropriate approach?**

**A.** Skip the analysis entirely — the dataset contains personal information and cannot be used with AI

**B.** Upload the full dataset and instruct AI not to store or remember any personal information

**C.** Remove customer names and emails, verify that remaining fields cannot identify individuals, and run the pattern analysis on the cleaned dataset

**D.** Ask the IT department to encrypt [code mein badalna] the dataset before uploading it to AI

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The discriminator question: spending patterns need the PATTERN (amounts, categories, dates), not the PEOPLE (names, emails). Remove identifiers, verify the remaining data can't re-identify anyone (no rare combinations), and proceed. This is the standard redaction workflow.
>
> **Why A is wrong:** The abandonment trap. A safe path exists — the task only needs the pattern. Giving up wastes a useful analysis that CAN be done safely.
>
> **Why B is wrong:** An instruction to the model is a wish, not a control. "Don't store this" typed into a chat has no enforcement mechanism. The data still entered the system, regardless of your instruction.
>
> **Why D is wrong:** Encryption protects data in transit or at rest — but AI needs to READ the data to analyze it. Encrypted data that AI can't read is useless. And encrypted data that AI CAN read is just... data. Encryption doesn't solve the authorization question.

---

### Question 2 · D6

Farah, an HR manager, wants AI to analyze employee satisfaction survey responses to find department-level trends. She replaces all employee names with codes (EMP-001, EMP-002, etc.) and keeps a mapping file [asal naamon ki list] on her laptop. She uploads the coded data to Claude.

**What is the most important concern with this approach?**

**A.** The survey responses should have been converted to aggregated department-level statistics before upload

**B.** The data is pseudonymized, not anonymized — the mapping file means it can still be traced to individuals, so it keeps its original data tier

**C.** The codes are not random enough and could be guessed by someone with access to the employee directory

**D.** Farah should have used a different AI tool that specializes in HR analytics

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the pseudonymization vs. anonymization distinction. The mapping file on Farah's laptop means EMP-001 can be connected back to a real person. The data is pseudonymized, not anonymized, so it KEEPS its original tier (yellow or red, depending on the survey content). Farah must treat it with the same restrictions as the original named data.
>
> **Why A is wrong:** Aggregation might be one valid approach, but the question asks about the CONCERN with her current approach. The concern is that she thinks she anonymized the data when she didn't. Also, if the task needs individual-level responses (to spot patterns by role, tenure, etc.), aggregation might break the analysis.
>
> **Why C is wrong:** The guessability of the codes is a secondary issue. Even with perfectly random codes, the mapping file means the data is pseudonymized and keeps its tier.
>
> **Why D is wrong:** The tool doesn't matter — the data tier issue exists regardless of which AI tool she uses. Switching tools doesn't change the fact that the data is pseudonymized, not anonymized.

---

### Question 3 · D6 + D5

A consulting team is using Claude Projects to manage client engagement [client ke saath kaam ka silsila] documents. A consultant uploads a client's financial projections [mustaqbil ke maaliyaati andaze] into the Project workspace, reasoning: "Projects keep everything organized and the workspace is only shared with our team."

**What authorization question has the consultant skipped?**

**A.** Whether the client's contract permits their financial data to be processed through a third-party AI system via this specific route

**B.** Whether the Project workspace has a strong enough password

**C.** Whether Claude's model is accurate enough to analyze financial projections

**D.** Whether the team lead has approved the use of AI for this specific client

> [!success]- Reveal Answer
> **Correct: A**
>
> **Why A is correct:** A Project workspace keeps files organized — it doesn't answer whether the data was AUTHORIZED to enter this system through this route. The client's contract and the firm's policy determine whether financial projections can be processed through Claude. The consultant confused a workspace control (organization) with authorization (permission). This is Concept 10: privacy controls ≠ authorization.
>
> **Why B is wrong:** Workspace access is managed through Claude's team roles, not passwords. And even if access were perfectly restricted, it still doesn't answer whether the DATA is permitted in the system.
>
> **Why C is wrong:** Model accuracy is a separate question (from The Case — Concept 2). The authorization question must be answered first. Even a perfect model can't be used on data that isn't permitted to be there.
>
> **Why D is wrong:** Team lead approval is good practice, but the team lead also cannot override client contract restrictions or company data policy. The question needs to go to whoever owns the data classification and the contract terms.

---

### Question 4 · D6

Imran, a procurement [khareedari ka department] officer, wants AI to compare vendor [saamaan bechne wale] proposals [tehreeri peishkash]. The proposals include pricing, terms, and a third-party vendor's trade secrets [company ke raaz — manufacturing process jo sirf unhein pata hai] shared under NDA [Non-Disclosure Agreement — raazdarana mu'ahida, jis mein likha ho ke raaz nahi batana].

**What is the correct data tier for the trade-secret material, and what should Imran do?**

**A.** Yellow — upload it with memory turned off so Claude doesn't retain the information

**B.** Red — confirm whether a specific approved route exists for NDA-protected third-party confidential information before uploading

**C.** Green — the data is being used for internal comparison, which is a legitimate [jayiz] business purpose

**D.** Yellow — redact the vendor names and upload the rest, since the comparison only needs the pricing

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Third-party confidential information shared under NDA is RED tier. Licensed or NDA-protected material held under terms that forbid copying it into another system belongs in the highest tier. Imran needs to confirm whether a specific approved route exists BEFORE uploading — that approval comes from legal, compliance, or the contract owner, not from Imran's judgment at the keyboard.
>
> **Why A is wrong:** Wrong tier AND wrong control. NDA material is red, not yellow. And turning off memory doesn't make the data authorized to enter the system — this is the privacy-control-as-permission trap.
>
> **Why C is wrong:** Wrong tier entirely. "Legitimate business purpose" doesn't override an NDA restriction. The NDA determines what can be done with the data, not Imran's internal use case.
>
> **Why D is wrong:** The concern isn't the vendor names — it's the trade secrets. Even with names removed, the manufacturing processes and proprietary formulas are the protected information. Redacting names misidentifies what's sensitive.

---

### Question 5 · D6

Aliya is an insurance claims processor [bima ke da'woon ko process karne wali]. She wants to use AI to summarize claim patterns across 200 cases to present to management. The data includes claimant [da'wa karne wala] names, policy numbers, claim amounts, injury descriptions, and medical report excerpts [chhoti si nakal].

She plans to: (1) remove names and policy numbers, (2) replace injury descriptions with general categories, (3) upload to Claude via incognito mode.

**Which concern STILL remains after all three steps?**

**A.** Incognito mode does not determine whether the medical data was authorized to enter the system through this route

**B.** The general injury categories might not be specific enough for useful pattern analysis

**C.** Claude might not be accurate enough to summarize insurance claim patterns

**D.** Management will want to see the original detailed data, not a summary

> [!success]- Reveal Answer
> **Correct: A**
>
> **Why A is correct:** Aliya's redaction steps (1 and 2) are good — she's removing identifiers and generalizing sensitive details. But step 3 (incognito mode) addresses retention, not authorization. Medical report excerpts, even with names removed, may still be regulated health data. The question of whether this data tier and this route are approved for this use case has not been answered. Incognito is a control, not permission.
>
> **Why B is wrong:** This is an analysis-quality concern, not a governance concern. The question asks about what concern REMAINS after her steps — the governance gap is more critical.
>
> **Why C is wrong:** Model accuracy is a Case question, not a Data question. It's valid but doesn't address the unresolved data authorization issue.
>
> **Why D is wrong:** Management preferences don't create a governance concern. What management wants to see is a business question, not a data-protection question.

---

### Question 6 · D6

A regional bank's compliance team is evaluating routes for using AI to draft customer correspondence [khat-o-kitaabat — customers ko bheji jaane wali chithiyaan]. They discover that three different teams are using three different routes:

- **Team A:** Uploading customer data through the company's Enterprise Claude account
- **Team B:** Pasting customer names and account details into a personal free-tier Claude account
- **Team C:** Using the API through an approved internal application

**Which team's approach is the most concerning, and why?**

**A.** Team A — enterprise accounts create a false sense of security that leads to careless uploads

**B.** Team B — a personal free-tier account may use inputs for model training, has no organizational controls, and the route is unapproved for customer data

**C.** Team C — APIs are the riskiest route because they have no human interface to catch errors

**D.** All three are equally concerning because none has a defined gate for the customer correspondence

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** Team B is using a personal free-tier account for customer data. Free-tier accounts may use inputs for training (depending on privacy settings), have no organizational admin controls, no audit trail, and the route is almost certainly unapproved for regulated customer financial data. This is **shadow AI** [company ki nazar se bahar AI ka istemaal] — work data flowing through a tool the organization never approved.
>
> **Why A is wrong:** Enterprise accounts aren't automatically safe (authorization still needed), but they DO have organizational controls, admin visibility, retention settings, and are not used for training. Team A's route is much less concerning than Team B's.
>
> **Why C is wrong:** APIs are not inherently riskier. An approved internal application through the API may actually be the MOST controlled route — with programmatic access controls, logging, and data minimization built in.
>
> **Why D is wrong:** While a defined gate for correspondence IS important, the question asks which approach is most CONCERNING from a data-route perspective. Team B's unapproved personal account is a fundamentally different level of risk than the other two.

---

*Part 2 complete. Say "next" when you're ready for Part 3: The Capability — Can I Turn This On?*
