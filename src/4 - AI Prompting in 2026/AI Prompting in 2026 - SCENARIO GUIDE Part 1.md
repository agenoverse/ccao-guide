# AI Prompting in 2026 -- SCENARIO GUIDE
# Part 1: HOW AI KNOWS THINGS (Concepts 1-3)

> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.
>
> **Covers:** Concept 1 (Novice vs Power User), Concept 2 (Pretrained Knowledge), Concept 3 (The 3 Retrieval Modes)

---

## CONCEPT 1: A Power-User Prompt Is a Briefing, Not a Cleverer Question

**CCAO-F Domain: D1 -- Prompting & Task Execution (14%)**

### THE SCENARIO

Fatima just joined a shipping company as a junior analyst [naya kaam shuru kia]. Her first task: use Claude to draft a customs compliance [qanoon/rules ki pabandi -- following the legal rules] briefing [mukhtasar report jo team follow karegi] that the operations team will follow when clearing shipments.

**Fatima's prompt:**

```
Write a customs compliance briefing.
```

Claude returns a polished, confident, professional-sounding document. It has headings. It has bullet points. It looks done.

Fatima sends it to the operations team. Two weeks later, a shipment is held at the port. The briefing missed a tariff [import/export tax] classification rule that applies specifically to their cargo type. It also used the wrong Harmonized System code [HS code -- international numbering system for products] because Fatima never told Claude what products the company ships.

Now picture her colleague Zain. He gets the same task. His prompt:

```
I am a junior analyst at a shipping broker. We handle dry bulk cargo
(grain, cement, steel) through Port Qasim and Karachi port.

Attached: the latest SRO [Statutory Regulatory Order -- government
ka official notification] on tariff classifications for dry bulk.

Task: Draft a customs compliance briefing for the operations team.
It should cover:
- Tariff classification rules for our three cargo types
- Documentation required at each clearance stage
- Common compliance failures that lead to port holds

Constraints: Must reference the attached SRO, not general knowledge.
Format: Numbered checklist the team can print and follow at the port.
```

### WHAT HAPPENED HERE?

Fatima gave Claude ONE thing: the ask. Claude filled the rest with guesses -- generic customs rules, wrong product categories, standard procedures that don't apply to her company. It SOUNDED perfect. It was wrong in ways only someone at that company could catch.

Zain gave Claude FOUR things:

```
THE BRIEFING = 4 parts:

  1. FILES       --> The actual SRO document
  2. GOAL        --> What the briefing should accomplish
  3. LIMITS      --> Only reference the attached SRO, specific ports
  4. EXACT ASK   --> Numbered checklist, specific cargo types, common failures
  
A novice prompt carries only #4. The rest is silence -- and AI fills silence with guesses.
```

### THE CONCEPT

**AI is a very smart new colleague on their first day.** It is highly motivated and knows nothing about you. This picture is almost perfect, with two differences:

1. A real colleague LEARNS you over months. AI starts from zero in every new chat -- you give the briefing every time.
2. A real colleague ASKS when a briefing is unclear. AI fills the gap with a guess and sounds just as confident.

The gap between a novice prompt and a power-user prompt is NOT cleverness. It is a handful of habits:

| Novice Prompt | Power-User Prompt |
|---------------|-------------------|
| Only the question | Files + Goal + Limits + Ask |
| "Write a report" | "Write a report using this data, for this audience, with these constraints" |
| AI guesses your situation | AI reads your situation |
| Output sounds right, often wrong | Output is grounded in YOUR context |
| You judge quality AFTER | You set quality standards BEFORE |

**The test before you press send:**

> Would a smart new colleague be able to do this job well with ONLY what I gave them?

If the answer is no, you haven't finished writing the prompt. You've finished writing the question.

### EXAM TRAP

**The trap:** The exam shows a scenario where someone gets a bad first output and the answer options include "switch to a more capable model [zyada powerful model]." This FEELS logical -- a smarter model should do better, right?

**Why it's wrong:** If the prompt was missing context, a stronger model just guesses MORE confidently with the same missing information. The exam's correct answer is almost always: "add what was missing from the prompt" -- not "change the tool."

**Pattern to kill on exam day:**

```
Bad output on first try in a FRESH chat?
  --> Almost always UNDER-SPECIFICATION [prompt mein kuch missing tha]
  --> NOT "model isn't smart enough"
  --> NOT "context overload" (it's the FIRST reply!)
  --> FIX: re-read your prompt, find what's missing, add it
```

This matches Mock Exam Practice Item 18 exactly -- first reply in fresh chat has errors, the answer is under-specification.

### QUICK CHECK

> Fatima asks Claude: "Draft a customer email about a late shipment." The reply is generic and misses her company's standard apology policy. What should she do FIRST?
>
> **Answer:** Re-read her own prompt. She never attached the apology policy, never said who the customer is, never stated the tone. Fix the prompt, not the model.

---

## CONCEPT 2: Pretrained Knowledge -- What AI Actually Learned

**CCAO-F Domain: D2 -- Output Evaluation & Validation (21%)**

### THE SCENARIO

Nida works as a research associate [research karne wali] at a mid-size consulting [mashwara dene wali] firm. Her manager asks her to prepare a briefing on customs regulations [qanoon jo import/export par laagu hota hai] in a specific African country for a client entering that market.

Nida asks Claude:

```
What are the current import regulations for agricultural
products in [Country X]?
```

Claude returns three confident paragraphs. Specific percentages. Named government agencies. A tariff schedule with exact numbers. Nida is impressed -- it sounds like Claude is an expert on this country's trade rules.

She includes it in the client briefing [client ko dene wali report]. The client presents it to their board [company ki decision-making committee -- faisla karne walon ki team].

Two weeks later, the client calls back angry. The tariff rates Claude quoted were from 2021. The named government agency was reorganized in 2023 and no longer exists under that name. One regulation Claude cited never existed at all -- it had blended rules from two neighbouring countries into one confident paragraph.

Nobody lied. The AI generalized from thin data [kam information se andaaza lagaya] and sounded completely sure while doing it.

### WHAT WENT WRONG?

Claude learned by READING TEXT about the world. Not by living in it, not by visiting that country, not by attending trade conferences. How much text existed about that country's agricultural import rules? Almost none. A few academic papers, maybe one outdated government PDF that was indexed, a handful of forum posts.

So Claude did what it always does with thin data: it BLENDED what little it had with similar-looking information from nearby countries and produced a confident answer. It didn't flag uncertainty. It didn't say "I'm guessing." It wrote with the same confidence it uses for a recipe or a movie plot.

### THE CONCEPT

**The Loud / Quiet / Secret Framework:**

```
LOUD topics   = the internet talks about them constantly
                Cooking, movies, popular programming, celebrity news
                --> AI is STRONG. High reliability.

QUIET topics  = the internet barely mentions them
                Niche regulations, regional history, rare languages,
                obscure professional knowledge
                --> AI is WEAK. May blend similar topics. VERIFY.

SECRET topics = the internet has ZERO information
                Your company's internal data, your private calendar,
                anything after the knowledge cutoff [training data ki
                last date -- iske baad kuch nahi pata], anything
                nobody ever published
                --> AI is BLIND. It will guess and sound sure.
```

**The trust table:**

| Question Type | How Much Training Data? | Trust Level |
|---------------|------------------------|-------------|
| "How do I make biryani?" | One of the most discussed topics online | HIGH |
| "Plot of a famous Bollywood movie" | Reviewed thousands of times | HIGH |
| "History of a small village in Sindh" | Maybe one Wikipedia line, maybe nothing | LOW -- verify against a primary source [asli source] |
| "Current tax regulation in my province" | Almost certainly after the knowledge cutoff | TRUST NOTHING unless it looks it up |
| "What did our company decide last quarter [pichle teen maheenon mein]?" | Not in the training data at all | TRUST NOTHING. AI is guessing. |

**The one question that replaces all of this:**

> "How would this person know that?"

You ask this about any human source. A colleague who never visited Japan telling you about Japanese tax law -- you'd be suspicious. Ask the same question about AI. If the topic is quiet or secret, the answer is: "It wouldn't know. It's guessing."

### THE RULE

**Confidence is NOT a signal of correctness.**

AI sounds equally confident about biryani and about obscure village history. The difference is: for biryani, thousands of people wrote about it and corrected each other. For the village, maybe one wrong forum post exists, and AI absorbed it as truth.

```
DECISION TREE: Should I Trust This AI Answer?

Is the topic LOUD (common, well-discussed)?
  |
  YES --> Probably reliable. Spot-check if stakes are high.
  |
  NO --> Is it QUIET (rare, niche, specialized)?
          |
          YES --> DO NOT trust without verifying against
          |       a PRIMARY SOURCE [asli, original source --
          |       jahan se information ayi, woh khud]
          |
          NO --> It's SECRET (private, recent, or never published)
                  |
                  --> AI is GUESSING. Period. Get the real data.
```

### EXAM TRAP

**The trap:** The exam shows Claude citing a source -- say, a 2023 consultancy blog post [mashwara dene wali company ka blog] -- and the cited page EXISTS and states the figure Claude quoted. One answer option says "Use the figure; the citation was opened and the page supports the claim."

**Why it's wrong:** A consultancy blog from 2023 is not a primary source for a CURRENT regulatory [qanoon se related] threshold [had -- limit/boundary]. The rule may have changed since 2023. The correct answer: find the regulator's [qanoon banane/laagu karne wali organization] own current page and cite THAT.

**The pattern:** The exam tests whether you know the difference between "a source exists" and "the source is authoritative [bhrosemand -- trustworthy and official] and current."

This matches Mock Exam Practice Item 9 exactly.

**Second trap pattern:** Claude gives you a statistic [koi number/figure] quoted to two decimal places with no source attached. It SOUNDS precise. Precise numbers with no source = hallucination [AI ne khud bana li -- fabrication] red flag. See Mock Exam 1 Q1 -- a "34% carbon emission decrease" that Claude invented.

### QUICK CHECK

> Nida asks Claude about the folk games played in a specific village in KPK. Claude returns three confident paragraphs with detailed rules. Her grandmother, who grew up in that village, says the rules are almost entirely wrong. What happened?
>
> **Answer:** The village's folk games are a QUIET topic -- barely on the internet. Claude blended descriptions of similar games from other regions because it had almost nothing to work with. It didn't lie. It generalized from thin data. The mistake was treating confidence as accuracy.

---

## CONCEPT 3: The 3 Retrieval Modes -- Where the Answer Comes From

**CCAO-F Domain: D3 -- Product & Model Selection (12%)**

### THE SCENARIO

Ahmed is a procurement [khareedari -- purchasing goods/services for the company] associate at a restaurant group. He has three tasks today:

**Task 1:** He asks Claude, "What is the standard shelf life of commercially packaged olive oil?"

Claude answers instantly from its training data. The answer is correct -- this is a LOUD topic. No web search needed.

**Task 2:** He asks, "What did the food safety authority announce this morning about the new labelling requirements?"

Claude answers confidently... with information from 2024. It didn't search the web. Ahmed's wording -- "what did they announce" -- didn't trigger a search because he didn't say "today" or "this morning's news" strongly enough. The answer is stale [purani -- outdated].

**Task 3:** His manager says, "We need a sourcing report [kahan se kya khareedna chahiye -- supplier comparison] on cold-chain logistics [temperature-controlled delivery] providers in our region, with pricing, certifications [official approvals], and customer references."

Ahmed types: "Tell me about cold-chain logistics providers."

Claude gives a generic overview of what cold-chain logistics IS, not a comparison of specific providers with current data. He needed deep research [lambi, detailed research jo kai sources se data nikaalti hai] but his prompt triggered pretrained mode.

### WHAT HAPPENED HERE?

Claude has THREE ways to answer you. It usually picks without telling you. Each mode fails differently:

```
MODE 1: PRETRAINED                MODE 2: WEB SEARCH              MODE 3: DEEP RESEARCH
(from training memory)            (live web pages)                 (minutes, dozens of sources)
                                                                   
Speed: Seconds                    Speed: 10-30 seconds             Speed: Minutes (2-10+)
Sources: Training text only       Sources: A few live pages        Sources: Dozens of pages
                                                                   
GOOD FOR:                         GOOD FOR:                        GOOD FOR:
- Definitions                     - Current events                 - Structured reports
- Common facts                    - Recent prices                  - Cited comparisons
- "How to" on popular topics      - Today's news                   - Multi-source analysis
                                  - Quick fact-checks              
                                                                   
FAILS WHEN:                       FAILS WHEN:                      FAILS WHEN:
- Topic is recent/niche           - It cites outdated pages        - Question is simple
- Facts changed since training    - It reads summaries, not        - You don't have time
- Your data is private              full pages                     - It's overkill for a
                                  - Popular sources ≠                quick lookup
                                    reliable sources               
```

### THE CONCEPT

**Your WORDING steers which mode fires.** This is the key insight:

| What You Type | What Usually Fires |
|---|---|
| "What is X" / "Summarize Y" | Pretrained only |
| "What's the latest on X" / "today" / "this week" / a specific city | Web search |
| "Research X thoroughly" / "produce a report with citations" / "use these source types" | Deep research |
| Attaching files | Stays pretrained for the files. May ALSO web search if you ask for current info |

**Ahmed's fixes:**

- Task 2 fix: "What did the food safety authority announce TODAY about new labelling requirements? Search the web for the most recent news."
- Task 3 fix: "Research cold-chain logistics providers in [region] thoroughly. Include pricing, certifications, and key customers. Use the providers' own websites and industry reports. Produce a cited comparison table."

### THREE HABITS THAT FIX WEB SEARCH

Web search has a specific failure: the AI blends several sources into one confident sentence that no single source actually supports. Three lines added to any web-search prompt cut this down:

```
1. "Use [named trusted sources], not forums."
   --> Controls WHERE it looks
   
2. "Cite the source after each claim."
   --> Makes each claim traceable [asli source tak pahunch sako]
   
3. "If a claim cannot be supported by the cited sources, mark it 'unverified'."
   --> Forces honesty about gaps
```

### AI IS NOT GOOGLE

This distinction appears on the exam. Know when to use which:

| Task | Better With Google | Better With AI |
|---|---|---|
| "Find the FBR [Federal Board of Revenue] website for income tax returns" | YES -- you want a specific known site | No |
| "Compare three shipping insurance options with pros/cons" | Slower -- you'll open 8 tabs | FASTER -- AI synthesizes in one place |
| "Buy replacement ink for my printer model" | YES -- you want a product link | No |
| "Plan a 3-day client visit to Lahore with dietary restrictions and meetings" | Slow -- juggling blogs and reviews | FAST -- AI integrates constraints |

**The rule:**

> If you want a LINK --> use Google.
> If you want an ANSWER that pulls together multiple sources --> use AI.

### EXAM TRAP

**Trap 1: Feature mismatch.** The exam shows someone using web search for something that needs deep research (or vice versa), or using research mode for a simple fact lookup. The pattern:

```
EXAM DECISION TREE: Which Feature Matches This Request?

Is it a SIMPLE, well-known fact or definition?
  --> Pretrained is fine. No feature needed.

Is it about something CURRENT (today, this week, recent news)?
  --> Web search.

Is it asking to COMPARE multiple sources, with citations,
in a structured report?
  --> Research mode / deep research.

Is it asking for something from an INTERNAL system
(shared drive, company database)?
  --> NEITHER. Needs a connector [internal systems
      se connect karne wala tool]. Web search can't
      see your company's internal files.
```

This matches Mock Exam Practice Item 6 exactly -- "Pull last quarter's approved rate card from the finance team's shared drive" with web search is WRONG. Internal data needs a connector, not a web search.

**Trap 2: Using research mode for a simple current fact.** "What is today's VAT [Value Added Tax -- sales tax] rate?" needs a quick web search, NOT full research mode. The exam rewards matching the tool to the task size.

### QUICK CHECK

> Ahmed asks Claude: "What changed in Pakistan's customs tariff schedule this year?" Which retrieval mode should fire, and how should Ahmed word his prompt to make sure it does?
>
> **Answer:** Web search -- the tariff changes are CURRENT (this year) and almost certainly after Claude's training cutoff. Ahmed should word it: "Search the web for changes to Pakistan's customs tariff schedule in 2026. Use FBR's official website and SRO notifications as primary sources. Cite each change with its source."

---

## PART 1 RECAP: How These Three Concepts Connect

These three concepts are a chain. Each one feeds the next:

```
CONCEPT 1                    CONCEPT 2                    CONCEPT 3
Briefing, not a question     What AI actually knows       Where the answer comes from
         |                          |                            |
         v                          v                            v
   "Did I give AI             "Can AI even know           "Is the right mode
    enough context?"           this topic well?"           firing for my need?"
         |                          |                            |
         v                          v                            v
   FIX: Add files,            FIX: Check if topic         FIX: Word your prompt
   goal, limits, ask          is Loud/Quiet/Secret        to trigger the right mode
```

**The master rule underneath all three:**

> **Get the right context IN, keep the wrong context OUT.**

If you remember only one sentence from this entire course, that's it. Every concept on this page is one of those two moves in disguise.

### How the exam combines them

The exam doesn't test these in isolation. A typical question looks like this:

> "An associate asks Claude to summarize a 70-page distribution agreement, but to 'save context' they paste in only a one-page summary they wrote. The analysis misses two indemnity [nuqsaan ki zimmedari -- liability for damage] clauses."

That question tests ALL THREE concepts:
- **Concept 1:** The prompt lacked files (the full agreement wasn't attached)
- **Concept 2:** Claude can't know what wasn't in front of it (SECRET -- it was private company data)
- **Concept 3:** No retrieval mode can fix this -- the information was never given

The answer: upload the full agreement. Analysis can only cover what's in front of the model.

### The elimination strategy for Part 1 topics:

```
Step 1: Kill the RECKLESS option
        ("Trust AI's answer" / "Accept without checking" / "AI is accurate enough")
        
Step 2: Kill the WASTEFUL option
        ("Abandon the task" / "Write it manually" / "Remove all data")
        
Step 3: Between survivors, pick the one that:
        - Adds missing context (Concept 1), OR
        - Verifies against a primary source (Concept 2), OR
        - Matches the right retrieval feature to the task (Concept 3)
        
        ...while PRESERVING human judgment.
```

---

**End of Part 1. Next: Part 2 covers Concept 4 (Context is the Whole Game) and Concept 5 (Reasoning / "Think Hard").**
