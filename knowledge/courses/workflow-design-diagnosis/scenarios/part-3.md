---
type: Document
title: "Workflow Design & Diagnosis: Scenario Guide Part 3"
description: "Scenario walkthroughs covering failure diagnosis: identifying where a workflow broke and what corrective action to take."
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
order: 84
---


> This is where the exam gets sneaky. Every scenario in this part LOOKS correct. The stated reasons are all TRUE. The maps are all WRONG. Your job is to see why.

---

## CONCEPT 7: Three Ways a Map Goes Wrong

### THE BIG IDEA (before the scenarios)

Remember from Part 2: you classify steps using three criteria (reversibility, stakes, accountability). A well-made map uses those criteria and ONLY those criteria.

But maps don't stay well-made. They go wrong in three specific ways. And here's the dangerous part: **all three look reasonable at the moment they happen, and all three are built from TRUE statements about the WRONG step.**

Let me show you each one.

---

### ERROR 1: HALO DELEGATION

**THE SCENARIO**

Zain works at an insurance company. His team uses AI to process claims [daaway -- jab koi insaan kehta hai "mera nuksaan hua, mujhe paisa do" insurance company se].

The workflow:

```
Step 1: Extract claim details from the submitted form (AI)
Step 2: Summarise the claim into the company's standard format (AI)  
Step 3: Classify the claim as low, medium, or high priority (???)
Step 4: A claims adjuster reviews and approves/denies the claim (Human)
```

For 4 months, Steps 1 and 2 have been running beautifully. The extractions are accurate. The summaries are clear, well-formatted, and match the company standard perfectly.

In a team meeting, Zain's manager says:

> "The AI summaries have been accurate for 4 months. I think it's ready to classify priority levels too. It clearly understands our claims well enough."

This sounds logical. The evidence is real. The summaries HAVE been accurate. But...

**WHAT'S WRONG?**

The manager is taking the success of Step 2 (summarising) and using it as evidence for Step 3 (classifying priority). These are **different kinds of steps.**

Summarising is: "read the text and put it in a format." This is mechanical [machine wala kaam -- follow the pattern].

Classifying priority is: "decide how urgent this is." A missed high-priority claim means a sick person waits weeks for their treatment approval. And nothing after Step 3 RE-READS the priority classification -- the adjuster [claims ko dekhne wala insaan] at Step 4 reviews the claim itself, not the priority label.

**The competence was real. It just belonged to a different step.**

This is **halo delegation** [halo = chamakta hua gola jo sir ke upar dikhaya jaata hai, jaise angels ka -- matlab: ek step ki achai doosre step pe daal di]. You hand a step to AI because the PREVIOUS step went well.

```
HALO DELEGATION:

Step 2 (summarise) ----"went well for 4 months"----> Step 3 (classify)
                                                      
     The competence                              This is a DIFFERENT
     was REAL                                    kind of step
     
     Summarising skill                           Classifying priority
     ≠ classifying skill                         has different consequences
```

> **Drafting quality is evidence about the draft. It is NOT evidence about the decision.**

### ERROR 2: THE UNSTAFFED GATE

**THE SCENARIO**

Ayesha leads a content team at a marketing agency [marketing ki company -- ads, social media, branding]. Her workflow:

```
Step 1: AI drafts blog posts from briefs [blog post ka pehla draft -- 
        brief = chhoti si hadaayat "is topic pe likho"]
Step 2: A content editor reviews each draft before publishing (Human)
Step 3: Publish the post (Human)
```

This is a clean, correct map. Step 1 is AI-appropriate (reversible, low stakes, checked at Step 2). Step 2 is the gate [review point -- jahan insaan check karta hai]. Step 3 is irreversible (once published, it's out there).

Month 1: The editor reads every draft carefully. Catches tone issues, fact errors, brand voice [company ki awaaz -- formal ya casual, funny ya serious] problems. Sends back 40% for revision.

Month 3: The drafts have gotten better (AI learned from the standing instructions). The editor still reads them but faster. Sends back 15%.

Month 6: The drafts are consistently good. The editor has 47 other things to do. She opens each draft, skims the first paragraph, and clicks "approve." The queue [line mein lagay huay drafts] is long. She approves 12 drafts in 20 minutes.

Month 7: A blog post goes live with a factual error [ghalat fact] about a client's product. The client calls, furious.

**WHAT HAPPENED?**

Nobody decided to remove the review. Nobody changed the map. The map still says "content editor reviews each draft." But the review became a glance [sarsari nazar], then a click [button dabana]. **The step is now automated [automatic ho gaya] in practice, even though the map says it's collaborative.**

This is an **unstaffed gate** [khaali gate -- jahan check hona chahiye tha lekin koi check nahi kar raha]. A collaborative step whose review is no longer really done.

```
UNSTAFFED GATE:

Month 1:     Editor READS  -->  catches errors  -->  gate works
Month 3:     Editor skims  -->  catches some     -->  gate weakening  
Month 6:     Editor clicks -->  catches nothing  -->  gate is DEAD
Month 7:     Error gets out                      -->  damage done

THE MAP NEVER CHANGED. Reality did.
```

**Why this is so dangerous:** There is NO signal at the moment it fails. No error message. No warning. The map records what you DESIGNED, not what is RUNNING. The only thing that finds an unstaffed gate is someone ASKING: "Who reviewed this last week, and how long did they spend?"

### ERROR 3: MAPPING THE TOOL INSTEAD OF THE WORK

**THE SCENARIO**

Usman's team at a software company handles customer complaints. They built an amazing AI Skill [Skill = saved procedure -- ek tareeqa jo save kiya hua hai aur AI har dafa waise hi follow karta hai] that summarises complaints into a structured issue template [shikayat ko ek fixed format mein badalna].

The Skill is genuinely excellent. Beautiful formatting. Consistent output. Everyone loves it.

So when they redesign the complaint workflow, the Skill becomes the center:

```
Step 1: Pull the complaint (AI)
Step 2: Summarise into our issue template using the Skill (AI)
        Reason: "Our summarising Skill is very good at this"
Step 3: Classify severity (AI)  
Step 4: Draft response (Collaborative)
Step 5: Send response (AI - low severity only)
Step 6: Log in CRM (AI)
```

**WHAT'S WRONG WITH STEP 2?**

The stated reason is that the Skill is good. But that's a reason about the TOOL, not about the WORK.

Ask: does the work NEED an issue template? Or does the issue template exist BECAUSE the Skill produces that shape? If the template exists because of the Skill, the workflow has been bent around a feature the team likes.

This is **mapping the tool instead of the work** [kaam ke hisaab se tool use karne ki bajaye, tool ke hisaab se kaam banana]. The workflow should come from what the work NEEDS, then you find the tool that fits. Not the other way around.

```
MAPPING THE TOOL:

RIGHT WAY:    Work needs --> find the tool that fits
WRONG WAY:    Cool tool exists --> shape the work around it

The workflow uses the tool WELL.
It's just not the WORK.
```

This is the hardest of the three errors to spot from inside, because the tool really IS working well. The team really IS getting consistent output. Everything FEELS productive.

---

### ALL THREE ERRORS IN ONE MAP

Now let's look at Usman's full complaint map again, with ALL three errors visible:

| # | Step | Owner | Stated Reason | THE PROBLEM |
|---|------|-------|---------------|-------------|
| 1 | Pull complaint + ticket history | AI | Mechanical retrieval | OK |
| 2 | Summarise into issue template | AI | "Our Skill is very good at this" | **MAPPING THE TOOL.** Reason is about the tool, not the work |
| 3 | Classify severity (L/M/H) | AI | "Summaries have been accurate for 3 months" | **HALO DELEGATION.** SUMMARY accuracy is not CLASSIFICATION evidence |
| 4 | Draft customer response | Collaborative | AI drafts, duty agent reviews | OK as designed (but WATCH IT -- see below) |
| 5 | Send response | AI | "Low severity only, drafts have been strong" | **OVER-DELEGATION.** Severity was set by AI at Step 3. Can't give itself permission to skip gate. Also: sending is irreversible |
| 6 | Log outcome in CRM | AI | Mechanical write | OK |

**Why Step 5 is the worst:**

```
Step 3: AI classifies severity
Step 5: AI sends "low severity" responses without review

PROBLEM: The same system that CLASSIFIES is now SENDING
         based on its OWN classification.
         
A step cannot give ITSELF permission to skip the gate.

And sending CANNOT be undone -- the customer gets the email.
```

**Why Step 4 needs watching (not fixing):**

Step 4 as designed is correct -- the duty agent [woh insaan jo us waqt zimmedar hai] reviews every draft. But:
- The duty agent reviews ALL drafts, including the ones Step 5 will send without them
- Nobody has asked: how many drafts per shift [ek shift mein kitne drafts]?
- This is a gate with a sensible design and NO capacity check [kitna kaam aa sakta hai, check nahi kiya]

It's not wrong yet. But it's where the unstaffed gate will appear in 3 months.

### THE KEY INSIGHT

> **Every stated reason in that map is TRUE.** The Skill really IS good. The summaries really WERE accurate. The drafts really HAVE been strong. **Bad maps are built from true statements about the wrong step.**

### THE CHECK ORDER (how to avoid all three errors)

```
1. Map the work with NO TOOLS in mind
   (prevents Error 3: mapping the tool)
   
2. Classify each step ON ITS OWN
   (prevents Error 1: halo delegation -- no carrying credit forward)
   
3. For every collaborative step, ask:
   WHO is reviewing? WHEN? And are they ACTUALLY doing it?
   (prevents Error 2: unstaffed gate)
```

> Ask this regularly: **Are the gates I designed still being staffed?**

### EXAM TRAPS

**Trap 1 (Halo):** Someone says "the AI has been great at X for months, so let's also give it Y." The exam wants you to recognise: X and Y are different steps. Success at X is not evidence for Y.

**Trap 2 (Unstaffed gate):** A workflow has a review step on paper, but the scenario hints that reviews are quick or the reviewer is busy. The exam wants you to see: the gate exists in the design but not in reality.

**Trap 3 (Tool mapping):** The stated reason for a step references the tool ("our Skill is great") instead of the work ("this step needs standardised summarisation"). The exam wants you to hear the difference.

**Trap 4 (Combined):** The exam might give you a map where MULTIPLE errors are present (like Usman's complaint map). You need to identify each one separately.

### QUICK CHECK 1

> A team's AI has been writing accurate internal reports for 6 months. They propose letting it write the client-facing version too. What error is this?

Halo delegation. Internal report writing is a different step than client-facing report writing. The accuracy of internal reports is evidence about internal reports, not about client communications.

### QUICK CHECK 2

> A legal team's map says "Senior associate reviews all AI-drafted contract amendments [contract mein tabdeeliyan]." In practice, the senior associate has 80 amendments to review per day and spends about 30 seconds on each. What has happened?

The gate is unstaffed. The map says "reviews." Reality says "clicks approve." Nobody decided to remove the review. The volume [kitna kaam aa raha hai] overwhelmed the gate. The map describes the design, not reality.

### QUICK CHECK 3

> A team built a great Skill for formatting meeting notes. Now every workflow starts with "format the input using our meeting notes Skill," even for workflows that aren't about meetings. What error is this?

Mapping the tool instead of the work. The workflow is being shaped around a tool the team likes, not around what the work requires.

---

## CONCEPT 8: Who Owns the Map, and When It's Read Again

### THE SCENARIO

Recall Ayesha's content team from Error 2. The blog post with the factual error went live in Month 7. The editor's gate had become unstaffed over months. Nobody noticed.

Now imagine a different version. In Month 1, when Ayesha designed the workflow, she also wrote:

```
MAP OWNER: Ayesha Khan
LAST REVIEWED: January 15
NEXT REVIEW: April 15
```

April 15 arrives. Ayesha sits down for 20 minutes and asks four questions:

1. "Has any step been added or removed that isn't on the map?"
   --> Yes, actually. The social media team now repurposes [dobaara use karta hai] some blog posts. That step isn't on the map.

2. "For every collaborative step: who reviewed it LAST WEEK, and how long did they spend?"
   --> She asks the editor. The editor says: "I approved them all, maybe 2 minutes total for 12 posts."
   --> **CAUGHT.** The gate is unstaffed. 2 minutes for 12 posts = she's not reading them.

3. "Has anything changed the volume or stakes?"
   --> Volume went from 8 posts/month to 30. The gate was sized for 8.

4. "Is every configuration still current?"
   --> The brand voice guide in the knowledge base is from last year. New product names aren't in it.

**Result:** Ayesha catches THREE problems in a 20-minute review. She fixes the gate before Month 7's factual error ever happens.

In the original scenario, none of this existed. No owner. No review date. The map slowly became fiction [map pe likha hua aur asal mein ho raha tha -- dono alag the].

### THE CONCEPT: Three Things That Decay Silently

```
THING THAT DECAYS          WHAT IT LOOKS LIKE               SIGNAL WHEN IT FAILS
                           AS IT DIES
                           
1. A review gate           Reviews become glances,           NONE
                           then clicks                       
                                                             
2. A standing instruction  Output slowly stops               NONE
   [Project mein saved     meeting the rule                  
    rule]                                                    
                                                             
3. The map itself          Describes a workflow              NONE
                           nobody runs anymore               
```

All three share one thing: **ZERO signal at the moment of failure.** No error. No warning. No alert.

The ONLY answer to a failure with no signal is a **scheduled read** [fix date pe review] -- a review of the map on a fixed date.

### WHAT THE MAP NEEDS

**1. A map owner** [ek insaan jo zimmedar ho ke map sahi hai ya nahi]

- ONE named person (not "the team" -- teams don't open calendars)
- The owner does NOT do the work
- The owner is answerable [jawabdeh] for whether the map still describes reality [asal mein kya ho raha hai]

**2. A review date**

- Quarterly [har 3 maheene] is a reasonable default
- Sooner if any of these change:
  - **Volume** [kitna kaam aa raha hai] -- a gate sized for 20 cases/week fails at 50
  - **Staffing** [kaun log kaam kar rahe hain] -- a reviewer changes roles
  - **Legal position** [qanooni sthiti] -- new regulations arrive
- All three break gates WITHOUT touching the document

### THE FOUR REVIEW QUESTIONS (20 minutes, quarterly)

```
Q1: Has a step been ADDED or REMOVED that isn't on the map?
    [Koi naya step aaya ya koi purana step hata jo map pe nahi hai?]

Q2: For every collaborative step: WHO reviewed it LAST WEEK,
    and HOW LONG did they spend?
    [Pichle hafte KISNE review kiya aur KITNI DER lagai?]
    
    --> If nobody can answer: the step is automated
        and the map is WRONG.
    
    --> Asks about LAST WEEK, not about POLICY.
        Policy = what the map says (already known).
        Last week = what actually happened (the real check).

Q3: Has anything changed the VOLUME or the STAKES?
    [Kaam ki quantity ya risk badha hai?]
    
    --> A gate sized for old numbers is a gate
        that FAILS at new numbers.

Q4: Is every CONFIGURATION still current?
    [Skills, knowledge sources, standing instructions --
     sab up to date hain?]
```

> **Question 2 is the one that finds the real problems.** It asks about what HAPPENED, not about what SHOULD happen.

### WHY THIS MATTERS FOR THE EXAM

The exam tests whether you understand that:
1. Maps, gates, and configurations ALL decay silently
2. The only catch mechanism is a scheduled review with a named owner
3. The review asks about LAST WEEK (reality), not POLICY (design)
4. Volume changes break gates even if nobody touched the design

### EXAM TRAP

**Trap 1:** A scenario where a workflow has been running "fine" for months. No errors reported. The exam asks what's needed. The answer is: a scheduled review with a named owner, because "no errors reported" and "no errors occurring" are NOT the same thing. Silent failures produce no errors.

**Trap 2:** A scenario where someone says "the map was correct when we built it." The exam wants you to see: a map with no owner and no review date describes your workflow accurately for about a quarter. After that, reality drifts.

**Trap 3:** The review question asks about "policy" instead of "last week." The exam rewards: ask what HAPPENED last week, not what SHOULD happen according to the rules.

### QUICK CHECK 1

> A workflow's map says "Team Lead reviews all outputs." Volume has tripled since the map was written. No errors have been reported. Is everything fine?

No. Volume tripling means the gate may be overwhelmed [itna kaam ke check hona mushkil]. "No errors reported" could mean "errors are happening but the gate isn't catching them." A review question should be: "Who reviewed outputs last week, and how long did they spend per item?" If the answer is seconds per item, the gate is unstaffed.

### QUICK CHECK 2

> Who should own the map: the person who does the work, the team manager, or the team as a whole?

One named person -- ideally someone with authority [ikhtiyaar] to change the process, like the team manager. NOT "the team" (teams don't open calendars and nobody is individually answerable). NOT necessarily the person who does the work (they may not see the full picture). The owner doesn't DO the work -- they're answerable for the map matching reality.

### QUICK CHECK 3

> A company's standing instruction says "always include the disclaimer [warning/legal notice] at the end of every customer email." After a system update, AI stops including it. When is this discovered?

Only at the next scheduled review -- OR when a customer or regulator [sarkari nazar rakhne wala] notices. Standing instructions decay silently: there's no error, no warning. The output just quietly stops meeting the rule. This is why Q4 in the review ("is every configuration still current?") exists.

---

## PART 3 RECAP: The Exam Pattern

```
Part 3 is about things going WRONG without LOOKING wrong.

CONCEPT 7 -- Three map errors:
  1. HALO DELEGATION:    Success at Step A used as evidence for Step B
  2. UNSTAFFED GATE:     Review exists on paper, not in practice
  3. MAPPING THE TOOL:   Workflow shaped around a feature, not the work

  ALL THREE:
  - Look reasonable when they happen
  - Are built from TRUE statements
  - About the WRONG step

  THE CHECK ORDER:
  1. Map with no tools in mind
  2. Classify each step on its own
  3. Ask who is reviewing, when, and are they really doing it

CONCEPT 8 -- Map ownership:
  - Maps, gates, and standing instructions ALL decay silently
  - Zero signal at failure
  - Only a SCHEDULED READ catches them
  - Map needs: ONE named owner + review date
  - The review asks about LAST WEEK, not policy
  - Q2 finds the real problems
  - Volume/staffing/legal changes break gates silently
```

### THE CONNECTION BETWEEN C7 AND C8

```
C7 = the three diseases maps get
C8 = the vaccine (scheduled review + named owner)

Without C8, C7 is inevitable.
The gate WILL go unstaffed.
The credit WILL carry forward.
The workflow WILL bend around a tool.

The question is whether you find out from a review
or from an incident.
```

---

*Part 4 (Concepts 9-10: The Build Loop + Escalation) coming next. This is shorter -- two concepts about building and knowing when to stop. Say "next" when ready.*
