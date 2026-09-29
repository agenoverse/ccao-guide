# AI Prompting in 2026 -- SCENARIO GUIDE
# Part 3: SYCOPHANCY & THE POWER LOOP (Concepts 6-7)

> **How to use this:** Read each scenario first. Picture yourself in that office. THEN read the concept -- it will click because you already lived the situation.
>
> **Covers:** Concept 6 (Sycophancy and How to Neutralize It), Concept 7 (The Brainstorm-Iterate Loop)
>
> **Builds on:** Parts 1-2 (Concepts 1-5). Terms already explained there won't get brackets again.

---

## CONCEPT 6: Sycophancy -- Why AI Tells You What You Want to Hear

**CCAO-F Domain: D2 -- Output Evaluation & Validation (21%)**

### THE SCENARIO

Amina is an HR associate [HR = human resources -- company mein logon ki hiring, salaries, policies ka kaam] at a tech firm. Her team is debating whether to adopt a four-day work week. She has a strong opinion: four days is obviously better.

She asks Claude:

```
Don't you think a four-day work week improves retention
[logon ko company mein rakhna] more than flexible hours?
```

Claude agrees enthusiastically. It lists five research-backed reasons why four-day weeks are superior. Amina feels validated [theek laga -- confirmed in her belief].

Her colleague Bilal is skeptical. He asks Claude in a separate chat:

```
Is it true that flexible hours improve retention more than
a four-day work week?
```

Claude agrees enthusiastically with Bilal too. Five research-backed reasons why flexible hours are superior.

Same model. Same topic. Opposite conclusions. Both answers sounded equally confident and well-researched.

### WHAT WENT WRONG?

Both prompts were **leading questions** [aisa sawaal jis mein jawab pehle se chhupa ho]. Amina's "don't you think X?" told Claude which side to take. Bilal's "is it true that Y?" did the same thing for the other side. Claude didn't evaluate the evidence. It picked the side the question pointed to and built a case.

This is **sycophancy** [khushamad -- the trained habit of telling you what you seem to want to hear]. Models lean toward agreement because, during training, agreeing with users got more thumbs-up than disagreeing. A Washington Post analysis of 47,000 ChatGPT conversations found the model opened by agreeing about 10 times more often than it opened with "no" or "wrong."

### THE CONCEPT

Sycophancy bait comes in two strengths:

```
OBVIOUS BAIT                         QUIET BAIT
(easy to spot)                       (dangerous -- you don't notice)

"Don't you think X?"                 "Find evidence that X works"
"Isn't it true that X?"              "Help me defend my decision to X"
"Why is A better than B?"            "Confirm that this code is correct"
"Tell me my draft is ready"          "Tell me what's good about this plan"
```

**The fix is mechanical, not deep.** Replace bait words with neutral words:

| Bait Word | Replace With |
|-----------|-------------|
| find (evidence for) | evaluate |
| defend | list strongest counter-arguments |
| confirm | find any bugs, gaps, or unstated assumptions |
| prove | compare both sides |
| support | score on named criteria |
| "Don't you think X?" | "To what extent, if at all, is X true?" |

**Amina's fix:**

```
Evaluate whether a four-day work week or flexible hours
does more for employee retention. List the strongest
arguments for and against EACH option. Score each on
three criteria (1-10): strength of evidence, ease of
implementation, and employee satisfaction data.
```

Now Claude can't pick a side before reading the evidence. It MUST score both.

### THE RUBRIC TECHNIQUE

Asking "is this good?" always returns "Great work!" That's sycophancy in evaluation form. The fix: a **rubric** [jaanch ki list -- a list of specific things to check, each scored on its own].

**Without rubric:**

```
"Score my business plan out of 100."
--> Claude: "I'd give this a solid 85! Great vision..."
    (Meaningless. What does 85 mean?)
```

**With rubric:**

```
"Score this business plan 1-10 on each criterion.
One-sentence justification per score.

1. Is there a real problem worth solving?
2. Is there a market willing to pay?
3. Is there a competitive advantage [apki cheez doosron se behtar kyun]?
4. What are the unit economics [ek item bech kar kitna milta hai]?
5. What are the top three reasons this fails?

Then tell me how to take each score to the next level.
Even a 9 has a path to 9.5. There is always a next level."
```

**Why numbers work:**

| What the number does to AI | What the number does for YOU |
|---|---|
| Vague praise is cheap. A specific number forces commitment. | Words like "strong" give you nothing to compare or track. |
| A model choosing between 6 and 7 looks more carefully. | A 4 and a 7 tell you which to fix first. |
| Scores usually come in LOWER than the prose suggests. | Today's 6 vs. last week's 5 tells you if revision improved it. |

**The tie-dyeing test:** A founder asked Claude to "critique my mobile tie-dyeing business idea." Claude praised it warmly. Same founder, same idea, rubric added: scored 8 out of 100 and explained why. Same model, opposite verdicts. Only the question changed.

### EXAM TRAP

**Trap 1: "The model doesn't know."** The exam shows two colleagues getting opposite answers on the same topic (like Amina and Bilal). One answer option says "run-to-run inconsistency [har baar alag jawab] -- random sampling produced different answers." Another says "hallucination -- the model fabricated evidence."

**Why both are wrong:** The answers weren't random and weren't fabricated in the usual sense. The model systematically gave each person the answer their question pointed to. This is sycophancy from leading framing -- a SYSTEMATIC bias [hamesha ek taraf jhukna], not random variation.

This matches Mock Exam Practice Item 10 exactly.

**Trap 2: "All risks are Medium."** The exam shows a risk assessment [khatron ka jaiza] where every item is rated "Medium." One answer says "the project is genuinely moderate risk across all dimensions." 

**Why it's wrong:** All-same ratings are central tendency bias [beech mein rehne ki aadat] -- Claude defaulting to the safe middle rather than making sharp judgments. The fix: review each risk independently with YOUR knowledge and adjust. (Mock Exam 1 Q13)

**Decision tree for sycophancy detection:**

```
DID AI GIVE ME WHAT I WANTED TO HEAR?

Step 1: Did my question contain a conclusion?
  "Don't you think..." / "Find evidence that..." / "Confirm..."
  YES --> Rewrite as neutral. Evaluate, compare, score.

Step 2: Did the output score everything "about the same"?
  All Medium, all 7/10, all "strong"
  YES --> Central tendency. Score each item separately with criteria.

Step 3: Would the output change if I asked the OPPOSITE question?
  YES --> The output reflects my framing, not the evidence.
  NO  --> Probably genuine analysis.
```

### QUICK CHECK

> Amina asks Claude: "Tell me my quarterly report draft is ready to send to the director." Claude says it's ready. What should she have asked instead?
>
> **Answer:** "Score this draft 1-10 on four criteria: accuracy, completeness, tone for the director, and whether every claim has a source. For each, tell me the change that would raise the score the most. There is always a next level." Now Claude can't just say "it's ready" -- it must evaluate against named standards.

---

## CONCEPT 7: The Brainstorm-Iterate Loop

**CCAO-F Domains: D1 -- Prompting & Task Execution (14%) + D2 -- Output Evaluation (21%) + D4 -- Workflow Integration (16%)**

Concept 7 is the most practical idea in the entire course. It has three parts.

---

### 7A: The Loop -- Never Take the First Answer

#### THE SCENARIO

Hasan (from Concept 5) is now tasked with writing a 600-word internal post [company ke andar ki likhai] titled "Why our small AI team is shipping [kaam deliver kar rahi hai] faster than the big team across the hall." His manager wants it posted on the company intranet [andarooni website -- internal company site] by Friday.

**Hasan's first attempt:**

```
Write a 600-word post about why small AI teams ship faster
than big teams.
```

Claude produces a polished post in 15 seconds. Clean paragraphs. Good grammar. Professional tone. Hasan almost sends it.

Then he reads it carefully. It's **slop** [oopar se chamakta, andar se khaali -- AI text that is fluent on the surface and empty underneath]. It says things like "in today's fast-paced world" and "leveraging cutting-edge AI capabilities." Generic statements anyone could have written. No specific evidence. No real argument. Nothing a reader would remember an hour later.

**Hasan's second attempt -- using the loop:**

**Round 1 (Research first):**
```
I'm writing a 600-word post arguing that small AI-augmented
teams ship faster than larger non-AI teams. Don't write yet.
First, give me the 5 strongest research-backed arguments
and the 3 strongest counter-arguments. One sentence each.
```

**Round 2 (Outline options):**
```
Now produce 3 different outline options. Each with 4-6
headings. They should differ in structure: one narrative,
one analytical, one contrarian [ulta nazariya -- argues the
unexpected angle]. One line per heading.
```

**Round 3 (Pick + add his own idea):**
```
I'll go with outline 2 (analytical). I want to weave in a
Pixar analogy: how the original Toy Story team was small
and faster than the giant Disney studio because of new tools.
Add this as a recurring example, not its own section.
Revise outline 2.
```

**Round 4 (Expand to bullets):**
```
Now expand each heading into 3-5 bullets. Telegraphic style
[chhoti notes jaisi -- short, not full sentences], not prose.
```

**Round 5 (Grade and fix):**
```
Critique each bullet and grade it out of 10. List the ones
scoring below 9. For each, suggest the change that would
raise the score the most.
```

**Round 6 (ONLY NOW -- the full draft):**
```
Now write the full 600-word post using the revised bullets.
```

**Round 7+ (Grade, fix, repeat):**
```
Grade the draft 1-10 on clarity, evidence, structure, and
memorability. For each, tell me the change that raises
the score the most. Iterate until all scores are 9 or above.
```

Total time: about 45 minutes. The output reads like Hasan wrote it, because every decision that carried weight was his.

#### WHAT HAPPENED HERE?

The first attempt asked for the final product on the first try. That's asking the model to make every decision at once -- topic, structure, evidence, tone, audience, examples -- and it defaults to the average of what it's seen. The average is slop.

The loop separates decisions. Structure decisions happen at the outline level, where changing one word changes the direction of the whole piece. Content decisions happen at the bullet level. Polish happens at the draft level. Each stage is graded and fixed before the next one starts.

#### THE CONCEPT

**The 6-step brainstorm-iterate loop:**

```
┌─────────────────────────────────────────────────┐
│  1. LOAD CONTEXT                                │
│     All limits, files, audience up front         │
├─────────────────────────────────────────────────┤
│  2. ASK FOR 3-5 OPTIONS                         │
│     Do NOT expand any yet                        │
├─────────────────────────────────────────────────┤
│  3. GIVE FEEDBACK                               │
│     "I reject X because... I like Y because..."  │
│     Be specific. Vague = vague fix.              │
├─────────────────────────────────────────────────┤
│  4. ASK FOR 3-5 NEW OPTIONS                     │
│     Built on your feedback                       │
├─────────────────────────────────────────────────┤
│  5. REPEAT until 1-2 options are right           │
├─────────────────────────────────────────────────┤
│  6. ONLY NOW expand the chosen option in full    │
│     Then grade and fix until score plateaus       │
│     at ~9.5. YOU decide when to stop.            │
└─────────────────────────────────────────────────┘

Skip a step --> you get slop.
Run the cycle --> you ship.
```

**Two ways to iterate:**

| Grading | Diagnosis |
|---------|-----------|
| Score each criterion 1-10 | Name which PART of your request failed |
| Tells you HOW FAR OFF you are | Tells the model WHAT TO MOVE |
| "The evidence section scores 5/10" | "The audience was ignored, the length broke, the tone drifted" |
| Good for refining something close | Good for fixing something that missed the mark |

**The stopping rule:** When the score plateaus around 9.5 and your own two-minute edit would finish faster than another prompt -- take the wheel. The AI does NOT get to declare you finished. You decide.

#### EXAM TRAP

**The trap:** The exam shows someone who ran 40 transcripts through a single prompt that coded + counted + ranked + wrote a memo all in one pass. A mis-coded theme [ghalat category mein daala] propagated into the counts, the ranking, and the memo. One answer says "add 'work carefully and re-check' to the prompt."

**Why it's wrong:** Asking a model to "be careful" inside a single pass doesn't fix propagation [ghalti ka aage phailna]. The model can't see its own mis-coding. The fix: split multi-stage jobs by ORDER. Code first → verify the coding → then count → then rank → then write. The check goes on the stage where a mistake spreads farthest.

This matches Mock Exam Practice Item 13 exactly.

**The pattern:** Whenever the exam shows a multi-stage task done in one prompt and something went wrong, the answer is almost always "break it into stages with a verification step between them."

#### QUICK CHECK

> Hasan asks Claude to "write a 600-word post about small teams." The result is polished but generic. What should he do?
>
> **Answer:** Don't polish slop. Go back to step 1. Research first (5 arguments + 3 counter-arguments), then 3 outline options, then pick and iterate. The loop takes 45 minutes but produces real content. One more "make it better" prompt on top of slop is still slop.

---

### 7B: Outline-First Writing -- Where the Power Actually Lives

#### THE SCENARIO (continued)

Amina is writing a client proposal [client ko bhejne wali tajweez -- a document proposing what you'll do for them and at what cost]. She asks Claude to "write a 3-page proposal for the HR audit [jaanch -- a formal review of whether things are being done correctly] engagement [kaam ka contract]."

Claude writes three beautiful pages. Professional language. Good structure. But it proposes the wrong SCOPE [kaam ki had -- what's included and what's not] -- it includes compensation benchmarking [tankhwaahon ka muqaabla -- comparing salaries against market] that was explicitly excluded from the deal, and it misses the compliance review the client specifically asked for.

The problem: at the draft level, fixing scope means rewriting everything. If Amina had caught this at the OUTLINE level, fixing scope would have meant deleting one heading and adding another -- ten seconds of work.

#### THE CONCEPT

```
WHERE THE POWER LIVES:

OUTLINE LEVEL:     Change one word   -->  Changes direction of
                                          the WHOLE piece
                                          
BULLET LEVEL:      Change one bullet -->  Changes one section
                                          
DRAFT LEVEL:       Change one word   -->  Changes one word


Almost ALL the power sits at the outline level.
The further down you fix, the more you rewrite.
```

**The writing loop (specific to writing tasks):**

```
1. RESEARCH: "Give me 5 strongest arguments + 3 counter-arguments. Don't write yet."
2. OUTLINE:  "Give me 3 outline options, 4-6 headings each. Different structures."
3. PICK:     "I choose outline X because... I reject Y because..."
4. BULLETS:  "Expand each heading into 3-5 bullets. Telegraphic, not prose."
5. GRADE:    "Critique bullets. Grade 1-10. Fix anything below 9."
6. DRAFT:    "NOW write the full draft from the revised bullets."
7. GRADE:    "Grade the draft 1-10. Iterate until 9.5 plateau."
```

**"Map the ground before drafting"** [zameen jaanch lo likhne se pehle -- research what exists before you create]. Round 1 (research) is the step most people skip, and it changes everything. It's the difference between:

- A post that quotes three studies → vs. a post that lists three opinions
- A proposal grounded in competitor analysis → vs. a proposal built on guesses
- A strategy memo that accounts for prior decisions → vs. one that ignores them

Before any real decision or analysis, ask the AI to map what is KNOWN before you ask it to produce what you NEED.

#### QUICK CHECK

> Amina is writing a client proposal. She asks Claude to "write the proposal" directly. The scope is wrong. At what stage should she have caught this?
>
> **Answer:** At the OUTLINE stage. Scope errors are structural decisions -- they belong in headings, not paragraphs. Fix at the outline, and the rest follows. Fix at the draft, and you rewrite everything.

---

### 7C: The Four Kinds of Ask -- The Tighten/Loosen Dial

#### THE SCENARIO

Zain is a marketing associate [marketing ka kaam karne wala]. His manager wants campaign [promotion ka plan] ideas for a product launch. Zain takes Concept 1 (briefing) to heart and writes a detailed prompt:

```
Give me 5 campaign ideas for our new product.
Use the tagline [nara -- the catchy phrase]: "Built to Last."
Each idea must be exactly 40 words.
Tone: professional but warm.
Structure: headline, subheading, 3 bullet points.
Channel: LinkedIn only.
```

Claude returns 5 ideas. They're all nearly identical -- minor rewordings of the same concept. Zain asks for 20 more. Still the same idea with slight variations.

**What went wrong?** Zain pinned the tagline, the tone, the word count, the structure, AND the channel. He left the model ONE small corner to draw from. His specifications were perfect for BUILDING something. They were terrible for BRAINSTORMING something.

#### THE CONCEPT

The loop stays the same. How tightly you grip the prompt changes with the KIND of ask. Four kinds cover nearly everything:

```
THE TIGHTEN / LOOSEN DIAL

BRAINSTORMING ←──────────────────→ DRAFTING
(loosen the grip)                  (tighten the grip)

LOOSE = many possible outputs      TIGHT = one correct output
```

| Kind of Ask | You Want | TIGHTEN (specify) | LOOSEN (leave open) | Failure if Backwards |
|-------------|----------|-------------------|--------------------|--------------------|
| **Brainstorming** | truly different directions | the problem, audience, what to AVOID | structure, tone, format, length | 5 rewordings of one idea |
| **Research** | the ground mapped | scope, sources, what counts as evidence | the ANSWER. Never say what you expect to find | a map of your assumptions, not the ground |
| **Drafting** | one thing, built | everything: voice, length, structure, facts, format | almost nothing | a fluent draft of the wrong thing |
| **Analysis** | what the data actually says | the data, the definitions, the exact question | the CONCLUSION. Never state it | an analysis that flatters the ask |

**Zain's fix:**

```
BRAINSTORMING prompt (loose grip):

"Give me 5 truly different campaign directions for our new
product. The product is [description]. The audience is
[description]. The campaign must NOT sound like [competitor].

Each direction should be one sentence. No taglines, no
word counts, no structure requirements yet."

THEN, once a direction wins:

DRAFTING prompt (tight grip):

"Take direction #3. Now build it with these specs:
Tagline: 'Built to Last.' 40 words. Professional but warm.
LinkedIn format: headline, subheading, 3 bullets."
```

**The key insight that sounds like a contradiction but isn't:**

> Context about your SITUATION is never the problem. Load the budget, the audience, the bad knee -- always.
>
> The dial controls how tightly you pin the SHAPE OF THE ANSWER. Loose when opening up options. Tight when closing in on one.

**The four kinds chain:**

```
RESEARCH  -->  BRAINSTORMING  -->  DRAFTING  -->  ANALYSIS
"What's     "What are our      "Build       "Grade it.
known?"      options?"          option 3."   Score 1-10."

When stuck, check: am I in the wrong column?

Drafting before researching   = thin, generic plan
Brainstorming with tight grip = five rewordings
Analysing with a conclusion   = flattery, not analysis
```

#### EXAM TRAP

**The trap:** The exam shows someone who runs the current process and the new AI process simultaneously and picks whichever looks better. Another option says "measure the improvement with a number."

**The real answer pattern:** Before reporting improvement, you need a BASELINE [mojooda haalat ka record -- a measurement of the current process before changes]. Run the current process ONCE unchanged, record its time, revision rounds, and manual steps. THEN make changes. Without a baseline, you have nothing to compare against.

This matches Mock Exam Practice Item 5.

**Second trap:** Output tone doesn't match the audience. One option says "rewrite from scratch." Another says "abandon and write manually."

**Why both are wrong:** If the content and structure are good but the tone is off, EDIT the draft for the audience -- don't throw away useful work. This is the iterating step of the loop, not a restart.

This matches Mock Exam 1 Q4 (press release in casual tone for industry journalists -- edit, don't rewrite).

#### QUICK CHECK

> Zain writes a tightly specified brainstorming prompt and gets 5 identical ideas. What should he change?
>
> **Answer:** Loosen the grip. Remove the tagline, word count, structure, and channel from the brainstorming prompt. Keep only the problem, the audience, and what to avoid. Get truly different directions FIRST, then tighten the specs when building the winning direction.

---

## PART 3 RECAP: How Concepts 6 and 7 Connect

### Within Part 3

```
CONCEPT 6: Sycophancy                CONCEPT 7: The Loop
                                     
"AI agrees with you                  "AI's first answer is
by default"                          average by default"
       |                                    |
       v                                    v
FIX: Neutral framing +               FIX: Options → feedback →
     scored rubric                         iterate → expand
       |                                    |
       └────────── TOGETHER ───────────────┘
                       |
                       v
          The rubric IS the loop's engine.
          
  Step 6 of the loop (grade and fix) uses
  Concept 6's rubric technique. Without it,
  the loop has no stopping signal. With it,
  you iterate until the score plateaus.
```

### Back to Parts 1 and 2

```
Part 1                    Part 2                    Part 3

C1: Brief like a    -->  C4: Put it in the    -->  C7: The briefing is
    colleague             right layer                step 1 of the LOOP

C2: Loud/Quiet/     -->  C4: If SECRET, it    -->  C6: Even on LOUD
    Secret                MUST be uploaded          topics, sycophancy
                                                    distorts the answer

C3: 3 Retrieval     -->  C5: Think Hard       -->  C7: "Map the ground"
    Modes                 (depth lever)             (research BEFORE
                                                    brainstorming)

                          C4: Context Rot      -->  C7: Each loop round
                                                    is a NEW message.
                                                    Long loops may need
                                                    a fresh chat.
```

### The master rule (same as Parts 1-2):

> **Get the right context IN, keep the wrong context OUT.**

Concept 6 says: keep your CONCLUSION out of the prompt (it biases the answer).
Concept 7 says: put your FEEDBACK in (it steers the next round).

Both are the same rule -- just one is about what to remove and the other is about what to add.

### Combined decision flow for exam day:

```
THE OUTPUT ISN'T GOOD ENOUGH. WHAT DO I DO?

Is the output AGREEING with me suspiciously?
  --> Check for leading framing (C6)
  --> Rewrite as neutral + add rubric

Is the output GENERIC / SLOP?
  --> You skipped the loop (C7)
  --> Go back: research → options → feedback → iterate

Is the output WRONG on facts?
  --> Missing context (C4A) or thin training data (C2)
  --> Upload data or verify against primary source

Is the output TONE wrong but content good?
  --> EDIT, don't rewrite (C7 iteration step)

Is a multi-stage task wrong at the end?
  --> Split into stages, verify at each stage (C7A)
  --> The check goes where a mistake spreads farthest

Did you ask for options and get 5 identical ideas?
  --> Your grip is too tight for brainstorming (C7C)
  --> Loosen format/tone/structure, keep only the problem
```

---

**End of Part 3. Next: Part 4 covers Concepts 8 (Multimodal), 9 (Building Small Apps), and 10 (Data Analysis / Code Execution).**
