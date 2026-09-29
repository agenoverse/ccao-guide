# Just Delegate It — PRACTICE QUESTIONS
# Part 2: The Controls (Need First Then Tool + Concepts 4-6)

> **How to use:** Read the scenario. Pick your answer. THEN reveal the explanation.
> These questions test the same concepts as Part 2 of the Scenario Guide — at exam difficulty.
>
> **Scoring:** 6/8 or higher = solid. Below 5 = re-read the Scenario Guide Part 2.

---

### Question 1 · Need First Then Tool · D3

A new marketing associate just got access to Claude. Their manager says: "Before you start any real work, spend a day going through every feature — Research mode, Projects, system prompts, Artifacts, analysis tool, custom instructions, integrations. Learn them all so you're ready."

Another associate on the same team takes a different approach: they start with their first real task (a competitor comparison), discover they need web data Claude doesn't have, then learn Research mode because the job demands it.

Which approach is more likely to result in effective AI use?

**A.** The first approach — learning all features upfront ensures the associate won't miss anything important when real work starts.

**B.** The second approach — learning a feature when a real job demands it means the associate understands WHEN and WHY to use it, not just what it does.

**C.** Both approaches are equally effective — it depends on the person's learning style.

**D.** Neither approach works — the associate should attend a formal training course before using Claude.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the "Need First, Then Tool" framework. The second associate hits a real wall (no web data for competitor comparison), discovers a real need (fresh information Claude doesn't have from training), and then learns the right control (Research mode). Now Research mode has context — it's tied to a problem they understand. The first associate learns features as abstract capabilities with no job to anchor them to. A week later, when they need Research mode, they've forgotten half of what they learned because it was disconnected from real work.
>
> **Why A is wrong:** This is the "learn everything first" trap. Feature knowledge without job context fades fast. The associate will remember that Research mode exists but not when to reach for it — because they never hit the wall that makes it necessary.
>
> **Why C is wrong:** This isn't a learning-style preference — it's about retention and application. Research consistently shows that learning tied to immediate need (contextual learning) produces stronger, more durable understanding than abstract pre-learning.
>
> **Why D is wrong:** The "abandon/wasteful" trap. Formal training isn't necessary for tools designed to be learned through use. Waiting for a course delays productive work unnecessarily.

---

### Question 2 · Concept 4 (Research) · D3

Tariq asks Claude to find current venue pricing for a corporate event in Islamabad. Claude provides a detailed response with five venues, their prices, capacity, and amenities — all presented confidently with specific PKR amounts.

Which of the following is MOST important for Tariq to understand about this result?

**A.** Claude's venue data is likely accurate because it was presented with specific details and confidence.

**B.** Claude may have mixed remembered (training data) information with searched (live) information — and the user cannot tell which is which unless they check or unless Claude was specifically instructed to show its sources and mark anything it couldn't verify.

**C.** The specific PKR amounts prove Claude searched for current prices.

**D.** Tariq should ask Claude "Are these prices current?" and if Claude says yes, the verification is complete.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the remembered vs searched distinction from Concept 4. Claude's training data contains old venue information. Research mode might find current data. The result Tariq sees could be a MIX of both — some venues from memory, some from search — and there's no visible label saying which is which. The venue names might be real (from training data) but the prices outdated (also from training data, presented as if current). The TWO MAGIC SOURCE INSTRUCTIONS apply: (1) "Show the URL or document name you used for each row" and (2) "If you couldn't verify a figure, write UNVERIFIED instead of guessing."
>
> **Why A is wrong:** This is the PLAUSIBILITY TRAP — the most dangerous exam trap. Specific details and confident presentation make output FEEL accurate but prove nothing. Claude presents remembered data with the same confidence as searched data. Specificity ≠ accuracy.
>
> **Why C is wrong:** Specific PKR amounts prove nothing about recency. Claude's training data includes Pakistani venue pricing from years ago. It can confidently state "PKR 450,000 per event" from 2023 training data as if it were today's price. Numbers alone don't tell you when the data was gathered.
>
> **Why D is wrong:** This is the CIRCULAR VERIFICATION trap. Asking Claude to confirm its own output is AI checking itself — the same system that generated the (possibly wrong) answer is the one confirming it. Self-confirmation is not verification.

---

### Question 3 · Concept 4 (Research) · D3

An associate uses Claude with Research mode enabled to find statistics for a quarterly business report. Claude returns a response that includes:

- A market size figure with a link to a Statista page
- A growth rate with "Source: McKinsey Global Institute, 2024"
- A competitor revenue figure with no source mentioned

The associate includes all three figures in the report. Which statement about this result is MOST accurate?

**A.** The Statista link proves that figure is verified — the associate only needs to check the other two.

**B.** The McKinsey citation proves that figure is verified — named sources from reputable firms are reliable.

**C.** All three figures need independent verification — a link can be broken or misquoted, a citation can be hallucinated (AI invented it), and the unsourced figure is obviously unchecked.

**D.** The associate should remove the unsourced figure and keep the other two since they have citations.

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** This question tests THREE traps at once:
>
> 1. **The link:** A URL doesn't mean the number on that page matches what Claude said. The link could be real but the figure misquoted, or the link could lead to a page that says something different. You must CLICK and CHECK.
> 2. **The citation:** "Source: McKinsey Global Institute, 2024" LOOKS authoritative, but Claude can HALLUCINATE citations — generate a real-sounding source name for a number it fabricated. Citation ≠ verification.
> 3. **The unsourced figure:** Obviously needs checking, but no MORE than the other two. It's just more honestly unchecked.
>
> All three need the same treatment: open the source, find the specific number, confirm it matches.
>
> **Why A is wrong:** Citation ≠ verification. A link is a POINTER, not proof. The link might be real but the quoted figure wrong. Or the link might be dead. You must follow the link and compare.
>
> **Why B is wrong:** Citation ≠ verification, even from prestigious sources. Claude can generate "McKinsey Global Institute, 2024" as text without that report existing or containing that number. The name "McKinsey" adds zero verification — it's just text Claude produced.
>
> **Why D is wrong:** Keeping cited figures without checking them is the citation trap. Having a citation makes a figure LOOK verified but doesn't MAKE it verified. The unsourced figure is at least honest about being unchecked. Removing only the honest one while keeping the falsely-credentialed ones is backwards.

---

### Question 4 · Concept 5 (Source) · D3

Amna's manager asks her to extract key discussion points from a long WhatsApp group chat about a client project. Amna plans to paste the chat into Claude for summarization. The chat contains:

- Client requirements discussed by the project team
- A team member's personal phone number shared in one message
- A joke about a competitor's CEO
- Internal budget (maaliyat / financial details) figures

Before pasting, what should Amna do FIRST?

**A.** Ask Claude whether the content is safe to share — AI can evaluate privacy risks.

**B.** Remove or redact (replace with XXX / hide) the personal phone number, the joke about the competitor's CEO, and the internal budget figures before pasting — only feed what you'd show a new contractor on Day 1.

**C.** Paste everything but add a note saying "This is confidential, don't share it" — Claude will respect the instruction.

**D.** Only remove the phone number — the budget figures and joke are fine since Claude doesn't share data externally.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the PRIVACY GATE from Concept 5. Before pasting ANYTHING into an AI tool, apply the test: "Would I show this to a new contractor on Day 1?" A personal phone number? No — that's someone's private data. A joke about a competitor's CEO? No — that's a liability (reputation risk / potential legal issue). Internal budget figures? No — those are confidential financials. Remove all three. What remains — the client requirements and project discussion points — is the actual work content Amna needs summarized.
>
> **Why A is wrong:** AI checking whether content is safe is CIRCULAR — the content is already exposed to AI the moment you paste it. The privacy decision must happen BEFORE the content enters any AI system. You can't un-paste something.
>
> **Why C is wrong:** A confidentiality (raazdaari / secret-keeping) instruction doesn't change what data the system has processed. Once pasted, the data has been sent to the AI service. "Don't share it" is a behavioral instruction, not a security control. The privacy gate happens before the paste, not after.
>
> **Why D is wrong:** Budget figures are confidential financials — exactly the kind of data you DON'T show a Day 1 contractor. The joke about a competitor's CEO is a reputational liability. Privacy protection isn't just about obviously personal data like phone numbers — it covers anything that shouldn't leave the team.

---

### Question 5 · Concept 5 (Source) · D6

A sales associate uses Claude to draft a proposal (tajweez / formal suggestion) for a potential client. The associate pastes in the client's RFP (Request for Proposal — the client's document explaining what they need and asking vendors to submit offers), the company's standard pricing sheet, and a previous proposal to a DIFFERENT client — including that other client's name, contract terms, and custom pricing.

What is the primary risk?

**A.** Claude might produce a lower quality proposal if it has too much context.

**B.** The associate has exposed one client's confidential contract terms and custom pricing to an AI system — a potential breach (violation / breaking of rules) of client confidentiality. If AI training, logging, or a data incident exposes this, the company could lose trust or face legal consequences.

**C.** The previous proposal will confuse Claude into copying the wrong pricing.

**D.** The associate should have used Projects instead of chat to keep the information organized.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The other client's name, contract terms, and custom pricing are CONFIDENTIAL to that client relationship. Pasting them into an AI system — regardless of the system's privacy controls — creates exposure. If the current client somehow sees that another client got different pricing, or if the data surfaces through any channel, the company has a confidentiality breach on its hands. The privacy gate test: "Would I show Client A's custom pricing to Client B on Day 1?" Absolutely not. The fix: paste the previous proposal's STRUCTURE (as a template) but remove or redact (replace with [REDACTED] / [HIDDEN]) all client-specific details — name, pricing, terms.
>
> **Why A is wrong:** More context doesn't reduce quality — irrelevant or sensitive context creates risk. Claude can handle long inputs. The problem isn't volume; it's what the volume contains.
>
> **Why C is wrong:** Pricing confusion is a real risk but not the PRIMARY one. Wrong pricing in a draft is fixable in review. A confidentiality breach is not fixable after the fact.
>
> **Why D is wrong:** Projects vs chat is an organizational choice, not a privacy control. Moving the same confidential data into Projects doesn't make it less exposed — it's still in an AI system. The fix is removing the sensitive data, not changing where you paste it.

---

### Question 6 · Concept 6 (Deliverable) · D1

Rehan asks Claude to summarize a research report on renewable energy investment (sarmaya-kari / putting money into something to get returns) trends in Pakistan. Claude provides a clean 5-paragraph summary covering solar growth, wind potential, government incentives (raiyati imdad / government support to make something cheaper), regulatory barriers, and foreign investment trends.

The original report also contained two important caveats (ahem ihtiyati batein / important warning points):
1. The data excludes Balochistan due to incomplete reporting
2. The government incentive figures assume no policy changes after Q2 2025

Rehan's summary mentions neither caveat. He sends it to his investment committee. What went wrong?

**A.** Claude intentionally removed the caveats to make the summary cleaner.

**B.** Claude's default behavior is to summarize the MAIN POINTS — caveats, limitations, and qualifications (sharait / conditions attached to statements) tend to disappear in summarization unless the user explicitly asks for them. The deliverable description didn't protect what mattered.

**C.** Rehan should have asked for a longer summary to ensure nothing was missed.

**D.** This is a model capability issue — a more advanced model would have preserved the caveats.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** This is the VANISHING CAVEAT problem from Concept 6. When you ask for a "summary," AI prioritizes the main narrative — findings, trends, conclusions. Caveats, footnotes, and qualifications are the first things to get compressed away because they look like secondary details. But for an investment committee, "this data excludes an entire province" and "these incentives assume no policy change" are CRITICAL qualifications that change the interpretation of every number. The fix is in the DELIVERABLE line: "Include every caveat (limitation/warning) from the original, even if it makes the summary longer."
>
> **Why A is wrong:** Claude doesn't "intentionally" remove anything. It follows the summarization instruction, which naturally compresses secondary elements. Caveats look like footnotes to a summarizer, so they're the first to go. It's default behavior, not a deliberate choice.
>
> **Why C is wrong:** Length doesn't guarantee completeness. A 10-paragraph summary could still drop the caveats if the instruction doesn't specifically protect them. The fix is specificity ("include every caveat"), not volume ("make it longer").
>
> **Why D is wrong:** This isn't a model capability issue — it's a prompt specificity issue. Any model summarizing a report will compress qualifications unless told to preserve them. Better models might be slightly more likely to keep them, but no model reliably preserves caveats without being asked.

---

### Question 7 · Concept 6 (Deliverable) · D1

An associate asks Claude: "What should I know about Pakistan's Data Protection Bill?"

Claude responds with a thorough explanation covering the bill's scope, key provisions, enforcement mechanisms, comparison with GDPR, and implications for businesses.

The associate needed a compliance checklist (ittibaa ki fehrist / a list of rules to follow) their company could actually use. Instead, they got a lecture. What was the most effective fix?

**A.** Ask a follow-up: "Can you turn that into a checklist?"

**B.** Rewrite the original prompt with a specific deliverable: "Create a compliance checklist for a mid-size Pakistani tech company under the Data Protection Bill. Table: requirement, what our company needs to do, deadline if applicable, and status column (compliant/not compliant/unknown). If any deadline depends on a regulation (qanoon / official rule) that hasn't been finalized, mark it as PENDING."

**C.** Use a different model that's better at generating checklists.

**D.** The explanation is more valuable than a checklist — the associate should use it as-is.

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The associate got an ANSWER when they needed a DELIVERABLE. An answer explains. A deliverable exists as a thing someone can use. The follow-up approach (Option A) works but is less effective — Claude has to transform an explanation it already built, which often produces a reformatted lecture rather than a purpose-built checklist. Starting with the right deliverable description produces a result designed from the ground up to be a checklist with actionable columns. Notice how B specifies: format (table), columns (requirement, action, deadline, status), audience (mid-size Pakistani tech company), and even a caveat protection ("if any deadline depends on unfinalized regulation, mark PENDING").
>
> **Why A is wrong:** Follow-ups work, but they're a band-aid. "Turn that into a checklist" asks Claude to reformat an explanation, not to build a checklist from scratch. The result is often an explanation wearing a checklist costume — reformatted paragraphs instead of truly actionable items. Starting right is better than starting over.
>
> **Why C is wrong:** Model selection doesn't fix a deliverable problem. Any model, given "what should I know about X," will produce an explanation. The issue is the prompt type, not the model.
>
> **Why D is wrong:** An explanation is valuable for learning, but the associate needed a TOOL for their compliance team. You can't hand a 5-paragraph essay to your legal department and say "check these boxes." The job required a different deliverable format.

---

### Question 8 · Concepts 4+5+6 Combined · D2/D3 · 〔Select TWO〕

Hira is building a market entry analysis for her company's expansion into a new city. She uses Claude with Research mode. Her prompt:

> "Research the retail market in Faisalabad. Find market size, top competitors, average rent for commercial space, consumer spending patterns, and any regulatory requirements. Put it all in a report I can present to the board."

Claude produces a polished 3-page report with all the requested sections, specific figures, and a professional tone. Hira reads through it and thinks it's excellent.

Which TWO steps should Hira take before presenting this to the board?

**A.** Ask Claude: "Is everything in this report accurate?" — if Claude confirms, the report is verified.

**B.** Check each critical figure against its source — open the links (if Claude provided them), or search for the original data independently. Any figure without a traceable source should be marked UNVERIFIED or replaced with data from a known source.

**C.** Have a colleague read the report for grammar and formatting — a second pair of eyes ensures quality.

**D.** Verify that no confidential company data was included in the prompt that shouldn't have been shared with an AI system — and check that the report doesn't contain any figures or claims that could embarrass the company if the source turns out to be wrong.

> [!success]- Reveal Answer
> **Correct: B and D**
>
> **Why B is correct:** This combines the research verification principles from Concepts 4 and 6. A board presentation with specific market figures carries high stakes — wrong numbers in front of the board damage credibility. Every critical figure needs source tracing: where did Claude get "average commercial rent is PKR X per sq ft"? If there's a link, click it and compare. If there's no source, the figure is unverified — either find a source independently or mark it UNVERIFIED in the report. Plausible-sounding numbers from AI are not board-ready without verification.
>
> **Why D is correct:** This combines the privacy gate (Concept 5) with the accountability principle. Two checks: (1) BACKWARD — did Hira paste any confidential company strategy, internal financials, or competitive intelligence into the prompt that shouldn't have been exposed to an AI system? (2) FORWARD — if any figure in the report is wrong and the board makes a decision based on it, can Hira defend where the data came from? Both checks happen before the presentation, not after.
>
> **Why A is wrong:** The CIRCULAR VERIFICATION trap. Claude confirming its own output is AI checking itself. The same system that might have hallucinated a market size figure will confidently say "yes, this is accurate." Self-confirmation is not verification.
>
> **Why C is wrong:** Grammar and formatting review is useful but misses the real risks. A perfectly formatted report with a hallucinated market size figure will pass grammar review without any red flags. The critical checks are data accuracy (B) and data safety (D), not presentation polish.

---

## Score Yourself

| Score | Assessment |
|---|---|
| **7-8 correct** | Solid — Part 2 concepts are locked in. Move to Part 3 Scenario Guide. |
| **5-6 correct** | Okay — re-read the concepts you missed, especially the SOURCE and RESEARCH traps. |
| **Below 5** | Re-read Scenario Guide Part 2, focusing on the Two Magic Source Instructions and the Privacy Gate. |

### Quick Review: Which concept did each question test?

| Q | Concept | The key principle |
|---|---------|-------------------|
| 1 | Need First Then Tool | Learn a feature when a job demands it, not before. |
| 2 | C4: Research | Remembered vs searched — you can't tell which is which without checking. |
| 3 | C4: Research | Citation ≠ verification. Links ≠ verification. ALL figures need independent checking. |
| 4 | C5: Source (Privacy) | Privacy gate: would you show this to a Day 1 contractor? Remove before pasting. |
| 5 | C5: Source (Confidentiality) | Other clients' data is never yours to share — redact before using as a template. |
| 6 | C6: Deliverable | Caveats vanish in summaries unless you explicitly protect them. |
| 7 | C6: Deliverable | Answer ≠ deliverable. An answer explains; a deliverable is a thing someone can use. |
| 8 | C4+C5+C6 Combined | Board-ready = source-traced figures + privacy-checked inputs. AI self-check ≠ verification. |
