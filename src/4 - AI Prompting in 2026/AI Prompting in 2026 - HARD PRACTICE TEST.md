# AI Prompting in 2026 — HARD Practice Test
## All 13 Concepts | Scenario-Based | Exam-Ready

---

> [!warning] EXAM RULES — Read Before Starting
> - **Total: 30 questions | 60 minutes**
> - **Hard limit: 90 seconds per MCQ | 2 minutes per multi-select | 4 minutes per long case**
> - **No going back.** Answer before moving to the next question.
> - **Never skip blank.** Even a forced guess beats a zero.
> - **Strategy:** Read the last sentence first (the actual question). Scan options. Then read the scenario.
> - **Elimination:** Kill the reckless option. Kill the abandonment option. Pick the one that applies the right concept correctly.

---

> [!tip] Time Targets by Section
> - Q1–Q15 (Part 1): **28 minutes**
> - Q16–Q30 (Part 2): **32 minutes**
> - Start a timer before Q1. Stop when the section time runs out and mark what you reached.

---

## PART 1 — Questions 1–15

---

> [!question] Q1 — C1: Novice vs Power User
> ⏱ **90 seconds**
>
> A marketing coordinator at a restaurant chain needs to announce a new winter menu. She types the following into Claude: *"Write a promotional email for our new winter menu."* The AI returns a polished, professional email — but it contains no dish names, no restaurant branding, an offer she never approved, and a tone that doesn't match the restaurant's personality. She is frustrated and blames the AI for being "generic."
>
> What is the most accurate diagnosis of why the output failed?
>
> **A)** The AI selected the wrong retrieval mode and used web search data about other restaurants instead of her specific menu
>
> **B)** The prompt was missing the context, constraints, and audience that the AI needed — it filled every gap with an average answer from its training data
>
> **C)** The AI's system prompt was overriding her instructions with a default email template
>
> **D)** The prompt was too short; adding three or four more sentences would have produced a better result

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course is explicit — a novice prompt carries only "the ask" and leaves out files, context, constraints, and limits. The AI filled every gap (dishes, tone, offer) with what an average promotional email looks like. Same AI, different briefing = different answer.
>
> **Why A is wrong:** Retrieval mode is irrelevant here. This is a generation task, not a lookup. No retrieval mode produces specific dish names the AI was never given.
>
> **Why C is wrong:** The system prompt shapes tone and behavior, but it cannot invent the restaurant's actual menu or approved offers. That information was simply absent.
>
> **Why D is the trap:** Length is NOT the fix. A longer vague prompt ("Write a really good, detailed, professional promotional email for our wonderful new winter menu that our customers will love") is still a novice prompt. The gap is the *type* of content provided — files, constraints, audience — not word count.

---

> [!question] Q2 — C1: Novice vs Power User (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> The head of HR at a logistics company asks Claude to produce an onboarding guide for new warehouse staff. Her prompt: *"I need help creating an onboarding guide for new warehouse staff. Our company culture focuses on safety and efficiency. We want something professional and warm."* Claude returns a polished five-page guide. After reading it, she identifies three specific problems:
> 1. It omits the legally required safety protocols specific to her country
> 2. It assumes a university-level reading ability, but 60% of her staff speak Urdu as a first language
> 3. The tone is formal corporate English, not warm and accessible
>
> Which **TWO** changes to her prompt would most directly address all three failures?
>
> **A)** Add "think hard before answering" to activate extended thinking for better output quality
>
> **B)** Attach the legal safety protocol document and explicitly describe the primary audience — language background, literacy level, and any accessibility needs
>
> **C)** Switch to deep research mode so the AI can find legally accurate safety requirements on its own
>
> **D)** Ask for three different outline options before asking for the full guide
>
> **E)** Specify the exact output requirements: reading level, language register, format, and a note that warmth should be expressed through simple language, not corporate phrasing

> [!success]- Reveal Answer
> **Correct: B and E**
>
> **Why B is correct:** Failure #1 (missing legal protocols) is fixed by attaching the actual document. Failure #2 (wrong audience assumption) is fixed by describing who the audience actually is. The AI cannot know either of these things without being told.
>
> **Why E is correct:** Failure #3 (wrong tone and reading level) is fixed by specifying exactly what the output should look like — reading level, register, and what "warm" means in practice. Vague adjectives like "professional and warm" are interpreted by the AI's training-data average, not the HR manager's actual intent.
>
> **Why A is wrong:** Extended thinking improves *reasoning depth* — it does not add missing files, audience data, or constraints the model was never given.
>
> **Why C is wrong:** Deep research finds current public information on the web. It cannot retrieve her company's internal legally-required protocols, nor the specific regulations for her country/industry without very precise prompting. This is a context problem, not a retrieval problem.
>
> **Why D is a partial distractor:** Asking for outlines first is good practice (C7 loop), but it does not address the three specific failures identified. You can run the brainstorm loop perfectly and still produce three wrong-audience, legally-incomplete outlines.

---

> [!question] Q3 — C2: Pretrained Knowledge
> ⏱ **90 seconds**
>
> A self-employed consultant asks an AI: *"What are the current tax filing deadlines and freelancer tax rates in Pakistan for fiscal year 2026?"* The AI replies confidently with specific percentages, deadlines, and income brackets. The consultant is about to copy these figures directly into a client proposal she will send in the morning.
>
> What is the single most important action she must take before including this information?
>
> **A)** Ask the AI to activate extended thinking and re-generate the answer for higher accuracy
>
> **B)** Ask the AI to cite the source it used, then include that citation alongside the figures in her proposal
>
> **C)** Verify the figures directly against the Federal Board of Revenue's current official publications
>
> **D)** Switch to a more capable model tier, since tax information requires a more powerful AI to answer reliably

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Tax rates for a specific country and fiscal year are either post-cutoff, frequently updated, or specific enough that training data is unreliable. The crash course is clear: for any claim where being wrong has real consequences, verify against the primary authoritative source — not the AI, not the citation the AI gives, but the actual source.
>
> **Why A is wrong:** Extended thinking improves reasoning on *already-known* information. It cannot add post-cutoff data or recover accurate figures that weren't reliably in the training data.
>
> **Why B is the most dangerous trap:** This option sounds responsible but is not. The crash course explicitly distinguishes between "citing a source" and "verifying." Asking the AI for a citation only gives you a URL or reference — it does not mean the AI read it correctly, that it's current, or that the figures it quoted actually appear in that source. "Checking the citation IS verification" — meaning you open the document yourself. Asking the AI to give you the citation name is not the same thing.
>
> **Why D is wrong:** A more capable model still has the same knowledge cutoff. More capability ≠ more current knowledge. This is a fundamental misunderstanding of what model tiers change.

---

> [!question] Q4 — C2: Pretrained Knowledge (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> A school principal uses an AI assistant to quickly answer five operational questions during her morning. For which **TWO** of the following should she be most skeptical of the AI's answer and verify before acting?
>
> **A)** "What is the formula for calculating simple interest?"
>
> **B)** "What changes were made to the national curriculum guidelines for secondary schools in the announcement last week?"
>
> **C)** "What is the main theme of George Orwell's *Animal Farm*?"
>
> **D)** "What are the specific subject-combination requirements and fee structure for the feeder university our students typically apply to — updated for this academic year?"
>
> **E)** "Explain the difference between a simile and a metaphor."

> [!success]- Reveal Answer
> **Correct: B and D**
>
> **Why B is correct:** "Last week" is explicitly post-cutoff. No amount of confident AI output changes the fact that events after the knowledge cutoff are invisible to the model. The AI will either refuse, hallucinate, or give an outdated answer. Verify against the official curriculum authority.
>
> **Why D is correct:** Two reliability killers apply here: (1) institutional-specific data (this particular university's requirements) and (2) current-year updates. Even if the university appeared in training data, fee structures and entry requirements change annually and the training data snapshot is unreliable for this year.
>
> **Why A is wrong:** The simple interest formula (I = PRT) is a timeless mathematical fact covered exhaustively across the internet. Extremely high reliability.
>
> **Why C is wrong:** Orwell's *Animal Farm* is one of the most analyzed texts in English literature — discussed thousands of times across every training data source imaginable. Extremely high reliability.
>
> **Why E is wrong:** Basic grammar concepts are among the most reliably covered topics in training data. No verification needed for a definition this common.

---

> [!question] Q5 — C3: Retrieval Modes
> ⏱ **90 seconds**
>
> A property manager asks an AI: *"Does The Grand Heights apartment complex comply with the new 2026 fire safety codes for residential buildings in Lahore?"* The AI responds with a detailed, confident three-paragraph answer confirming that modern residential complexes in Lahore generally comply with revised safety standards, citing specific code sections. The property manager is relieved and does not investigate further.
>
> What is the most likely truth about this response?
>
> **A)** The AI ran a deep research session across current city council records to compile this answer
>
> **B)** The answer is reliable because fire safety regulations are well-documented in the AI's training data
>
> **C)** The AI answered from pretrained knowledge and almost certainly has no accurate data about this specific building or the 2026 codes
>
> **D)** The AI ran a web search and retrieved the building's current compliance certificate from a public registry

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** Three problems compound here. First, the 2026 fire safety codes may be post-cutoff. Second, the compliance status of a specific private building ("The Grand Heights") is not on the public internet. Third, the AI answered in a general way ("modern residential complexes generally comply") — which is the pattern of pretrained mode filling a knowledge gap with plausible-sounding generalization. The confident tone is the warning sign, not proof of accuracy.
>
> **Why A is wrong:** Deep research triggers from specific prompt patterns ("research thoroughly," "produce a report," "use these source types"). This prompt uses none of them. Even if it did, deep research cannot access private building compliance records.
>
> **Why B is wrong:** General fire safety *concepts* are well-documented. The compliance status of a specific building in 2026 is neither.
>
> **Why D is the trap:** This sounds plausible — "maybe it searched." But even if web search ran, there is no public compliance registry for private Lahore apartment buildings that would appear in a web search result. The AI's confident, general answer is the signature of pretrained mode, not web search output (which would cite sources).

---

> [!question] Q6 — C3: Retrieval Modes — Steering
> ⏱ **90 seconds**
>
> A junior analyst at a research firm needs to write a report on policy changes in renewable energy across three countries over the last 12 months. She wants current data with citations, not general background from training data. Which prompt phrasing is **most likely** to trigger deep research mode?
>
> **A)** *"What is the current status of renewable energy policy in Germany, India, and Brazil?"*
>
> **B)** *"Summarize the renewable energy policies of Germany, India, and Brazil and compare them."*
>
> **C)** *"Research the most significant renewable energy policy changes in Germany, India, and Brazil over the last 12 months. Produce a structured three-section report, include data tables where available, and cite each claim with a named source."*
>
> **D)** *"What changed in renewable energy policy in these three countries this year?"* along with attaching three PDF reports she already has

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The crash course's deep research trigger patterns are all present: "Research [topic] thoroughly," "produce a structured report," "cite each claim," and "use [source types]." All four signals together strongly steer toward deep research mode.
>
> **Why A is wrong:** "What is the current status" maps to the pretrained trigger pattern: "What is X" → pretrained only. This will produce a general, possibly outdated answer with no citations.
>
> **Why B is wrong:** "Summarize" also maps to pretrained mode ("Summarize Y" → pretrained only, per the course's trigger table).
>
> **Why D is the trap:** Attaching PDFs keeps the model in pretrained mode *for the files* — it reads what you give it but doesn't go looking for current web data. The question phrasing "What changed this year" might trigger web search, but probably not deep research. The result will likely be an answer synthesized from her three PDFs plus some pretrained general knowledge — not a current multi-source research report.

---

> [!question] Q7 — C3: Long Case — Retrieval Mode Failure (Two-Part)
> ⏱ **4 minutes total for both parts**
>
> **SCENARIO:** Tomás is a compliance officer at an insurance company preparing a briefing on whether his company's AI-assisted claims process meets EU AI Act requirements. Over two days, he runs the following three prompts in sequence:
>
> > **Prompt 1:** *"What are the requirements of the EU AI Act for insurance companies using AI in claims decisions?"*
> >
> > **Prompt 2:** *"Today, have there been any recent enforcement actions under the EU AI Act specifically targeting insurance companies?"*
> >
> > **Prompt 3:** *"Research the EU AI Act's governance requirements for high-risk AI systems thoroughly. Use official EU sources, peer-reviewed legal studies, and published compliance reports. Produce a structured report covering: obligations, prohibited practices, enforcement timeline, and open interpretive questions. Cite every factual claim."*
>
> ---
>
> **7A.** Which prompt is **most likely** to return outdated information while appearing fully confident?
>
> **A)** Prompt 1 only
> **B)** Prompt 2 only
> **C)** Prompt 3 only
> **D)** All three carry equal outdated-information risk
>
> ---
>
> **7B.** Tomás reads the Prompt 3 report and notices one cited enforcement action has details that contradict what he read in a trade publication last week. He re-reads the AI's citation carefully. What is the **most accurate** explanation for the discrepancy?
>
> **A)** The model hallucinated the enforcement action entirely because the specific source requirement created pressure to invent
>
> **B)** Deep research reads full web pages, so if a citation appears it must be accurate
>
> **C)** The deep research layer uses a smaller retrieval model that summarizes web pages before passing them to the answering model — the citation may accurately exist but the details reflect a summary that lost precision
>
> **D)** The prompt was too prescriptive about source types, causing the model to blend multiple sources into one citation

> [!success]- Reveal Answer
> **7A — Correct: A**
>
> **Why Prompt 1 is the risk:** "What are the requirements of X" maps directly to pretrained mode (the trigger table: "What is X / Summarize Y" → pretrained only). The EU AI Act has been amended and clarified since most training cutoffs. The model answers with confident specificity from frozen knowledge, giving no indication that its information may be outdated.
>
> **Why Prompt 2 is lower risk:** "Today" and "recent enforcement actions" are explicit recency signals that steer toward web search. The model will likely run a search — and even if the result is imperfect, it will be anchored to current sources rather than training data alone.
>
> **Why Prompt 3 is lower risk:** All deep research trigger patterns are present. Even if the summary layer loses some detail, the information comes from current sources, not frozen training data.
>
> ---
>
> **7B — Correct: C**
>
> **Why C is correct:** The crash course explicitly describes this mechanism: *"A search-and-retrieval layer... cuts each one down to a short passage... only its shortened version reaches the model that talks to you. So the model that answers you often reads a summary rather than the page. That is why it sometimes reports a page wrongly. A summary loses detail."* The enforcement action likely exists in the cited source — but the summary that reached the answering model lost or distorted the specific details.
>
> **Why A is wrong:** Hallucination is possible but the more precise explanation for a citation that *exists* but has wrong details is summary drift, not fabrication. If it were fabricated, the source itself wouldn't exist.
>
> **Why B is wrong:** This is directly contradicted by the crash course. The model does NOT read full pages — it reads a summary created by a smaller retrieval model.
>
> **Why D is wrong:** Specific source requirements improve, not worsen, citation accuracy by narrowing which pages the retrieval layer targets.

---

> [!question] Q8 — C4: System Prompt and Context Stack
> ⏱ **90 seconds**
>
> A customer success manager uses Claude regularly for work. He notices that across every chat — regardless of how he asks — Claude always maintains a slightly cautious, formal tone, occasionally declines to make direct recommendations, and adds brief disclaimers when discussing legal or medical topics. He has never changed any settings. He asks a colleague: "Is Claude just naturally formal? Is that how it was trained?"
>
> What is the **most accurate** answer his colleague should give?
>
> **A)** Yes — Claude's training data contained mostly academic and formal business text, which created its natural voice
>
> **B)** The behavior is primarily driven by the invisible system prompt that Anthropic loaded before he arrived — tone, refusal patterns, and disclaimers are written instructions, not personality
>
> **C)** Claude's memory feature has stored his professional writing style from past chats and is reflecting it back to him
>
> **D)** His account tier restricts Claude's conversational range — upgrading to a paid plan would change the tone

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course is explicit: *"The personality you sense is not built into the model. It is written into the instructions the company loaded before you arrived... Claude's instructions ask for careful thinking and honesty."* Consistent caution, disclaimers, and refusal patterns are system-prompt behaviors — not emergent personality from training data.
>
> **Why A is wrong (the trap):** Training data does influence base tendencies, but the *specific, consistent behavioral patterns* across a product (formal tone, specific disclaimers, refusal categories) are system prompt instructions. The crash course explicitly illustrates this: same question to Claude, ChatGPT, and Gemini produces different tones because their system prompt instructions differ — not because they were trained on different writing styles alone.
>
> **Why C is wrong:** Memory stores user-specific preferences based on what the *user* does. Since he hasn't customized anything, memory wouldn't create consistent formality — and if his chats are casual, memory would actually make responses less formal over time.
>
> **Why D is wrong:** Account tier affects usage limits and features. It does not rewrite the system prompt or change Claude's fundamental behavioral instructions.

---

> [!question] Q9 — C4: Context Rot
> ⏱ **90 seconds**
>
> A financial analyst has been working in one Claude conversation for nearly three hours. The chat covered: a client's portfolio strategy, a competitor's quarterly earnings analysis, a draft email to a colleague, and now a question about the tax implications of a specific investment structure. She notices the answers are getting longer and vaguer, and the last response referenced the competitor's earnings analysis unprompted when she asked about taxes. She asks: *"What should I do to get a clear answer about the tax question?"*
>
> What is the correct action?
>
> **A)** Add a detailed clarifying prompt at the top of her next message to re-orient Claude to the tax question, correcting any misunderstandings
>
> **B)** Open Claude's Settings, clear the memory associated with this session, and continue in the same chat
>
> **C)** Start a new conversation, paste only the relevant context needed for the tax question, and continue there
>
> **D)** Type *"Ignore everything before this message and focus only on the tax question"* to reset Claude's context window

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The crash course is direct: *"When you see these symptoms, the instinct is one more clarifying prompt. Resist it. Start the new chat instead, paste in the one or two facts that matter, and continue. The reset is almost always faster than the rescue."* A new chat drops the noise (workout plans, competitor earnings, email drafts) while the two relevant facts are manually preserved.
>
> **Why A is wrong:** This is exactly the instinct the crash course warns against. Adding more context to a rotted conversation makes it worse — there's more noise to pull at the model, not less.
>
> **Why B is wrong:** Memory and context rot are different things. Memory is a note the tool writes about you and loads before each new chat. Context rot is the degradation within one long conversation from mixed topics. Clearing memory in Settings does nothing to the current chat's context.
>
> **Why D is wrong:** "Ignore everything before this message" is not a reliable instruction. The full conversation remains in the context window. The model cannot un-read what is in front of it. This instruction might slightly help but does not fix the rot — and the crash course does not recommend it.

---

> [!question] Q10 — C4: Projects
> ⏱ **90 seconds**
>
> A content writer at a B2B marketing agency has a consistent workflow. Before every Claude chat, she pastes: (1) a 2-page brand voice guide PDF, (2) a list of 12 topics the client never wants mentioned, (3) a standing note that her audience is senior procurement executives who dislike casual language. She does this 6–8 times per week. Her colleague notices the repetitive pasting and suggests a fix. Which suggestion correctly applies the crash course's recommendation?
>
> **A)** *"Compress those three elements into one paragraph and paste it as a single block — it's faster than three separate pastes"*
>
> **B)** *"Use Claude's memory feature to store your preferences — it'll remember them automatically in each new chat"*
>
> **C)** *"Set up a Project with the brand voice PDF uploaded as a file, the topic list and audience note as standing instructions — every chat you open inside it inherits all three"*
>
> **D)** *"Write all three elements into your account-level standing instructions in Settings so they apply everywhere automatically"*

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The crash course defines exactly this scenario: *"The moment you have pasted the same files, audience, or limits into two chats on one topic. That context belongs in a project, not a prompt."* Projects hold uploaded files (the PDF) and standing instructions (the topic list, the audience note) that every chat inside the project inherits automatically.
>
> **Why A is wrong:** Faster pasting is still pasting. This doesn't solve the problem — it just makes the repetitive work slightly quicker. The core waste (re-briefing every time) continues.
>
> **Why B is the clever trap:** Memory sounds right — it persists across chats. But two problems: (1) Memory is *best-effort*, not guaranteed. (2) A 2-page PDF file *cannot be stored in memory*. Memory stores preference notes, not documents. Projects are the correct solution for files.
>
> **Why D is wrong:** Account-level standing instructions are for rules that are *universally true across every chat*, not just this client's work. The brand voice guide and client-specific topic restrictions are project-specific. Putting client-specific rules at account level pollutes every other chat with irrelevant constraints. The crash course is explicit: write account-level instructions only for what is true in *every* chat.

---

> [!question] Q11 — C4: Memory vs. Configuration
> ⏱ **90 seconds**
>
> A legal associate uses Claude regularly. He notices the AI consistently refers to him in context as a "business analyst," which is incorrect — he is a solicitor who handles commercial contracts. During one session, he corrected it: *"You're assuming I'm a business analyst. I'm actually a solicitor specialising in commercial contracts."* Claude acknowledged the correction, responded appropriately for the rest of that chat, and seemed to understand his actual role. But in his very next new chat the following day, Claude went back to treating him as a business analyst.
>
> What is the **most likely** explanation?
>
> **A)** Memory only updates when the user explicitly presses an "update memory" button in settings — verbal corrections during a chat are not recorded
>
> **B)** The correction may not have been stored in memory, or an older incorrect entry was not overwritten — memory is best-effort, not guaranteed, and stale entries can persist
>
> **C)** Claude's training data associates his formal legal writing style with business analysis roles, which permanently overrides any correction made in chat
>
> **D)** Memory is session-specific and resets entirely with each new conversation — any correction only lasts for that chat

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course warns: *"If the AI keeps making the same wrong assumption in every new chat, stop rewriting your prompt and go fix the memory."* This implies two things: (1) corrections in chat *should* update memory but sometimes don't reliably, and (2) the fix is to go directly to the memory panel and edit or delete the wrong entry. The correct action here is to open Memory in Settings, find the "business analyst" entry, and delete or correct it manually.
>
> **Why A is wrong:** The crash course describes verbal corrections as a valid way to update memory: *"Correct it out loud... 'you are assuming I still work in retail, and I do not.' That updates the note."* It doesn't require a button click. However, the note also implies this isn't always 100% reliable, which is why B is the better explanation of what went wrong.
>
> **Why C is wrong:** Training data does not override in-conversation or memory-layer corrections. The system is designed so memory (layer 2) is read before and overrides default behavior.
>
> **Why D is wrong:** This is the opposite of what memory is designed to do. Memory *specifically* persists across sessions — that is its entire purpose. If it reset every session, it would be useless.

---

> [!question] Q12 — C5: Extended Thinking — When to Use
> ⏱ **90 seconds**
>
> A procurement manager at a hotel chain must compare three supplier contracts (each approximately 40 pages) and decide which offers the best terms given seven specific constraints: payment schedule, penalty clauses, delivery windows, quality guarantees, termination rights, pricing escalation caps, and dispute resolution mechanism. Before she starts, her colleague advises: *"Keep your prompt simple — Claude works faster with short prompts, so just ask it question by question."*
>
> What is wrong with this advice?
>
> **A)** Nothing is wrong — shorter, focused prompts reliably produce more accurate answers than long complex ones
>
> **B)** The advice confuses the thinking switch with the model ladder — this task requires upgrading to a higher model tier, not changing the prompt length
>
> **C)** This is exactly the type of task — many inputs, many trade-offs, real consequences — where uploading all three contracts, turning on extended thinking, and asking for a structured analysis is most appropriate
>
> **D)** Extended thinking only improves mathematical and coding tasks; for contract language, the standard response mode is equally reliable

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The crash course defines the ideal use case for extended thinking: *"Ask the model to think hard when a question has many inputs or trade-offs."* Seven constraints across three 40-page contracts is a textbook multi-input, multi-trade-off problem with real financial consequences. The power-user pattern from the crash course is exactly this: attach the files, turn on thinking, ask for the trade-offs that actually matter, a recommendation, and the conditions under which that recommendation changes.
>
> **Why A is wrong:** "Simple short prompts" produces the opposite of what this task needs. A question like "which contract is better?" with no context gives a generic non-answer. The crash course's car-comparison example uses full file attachment + think hard — not short prompts.
>
> **Why B is wrong:** The colleague didn't mention models at all. The actual error is the "keep it simple" advice for a complex multi-constraint task. Model tier selection is a separate decision (C12), and this prompt may benefit from extended thinking within the current tier.
>
> **Why D is wrong:** The crash course explicitly uses business decision analysis (car comparison across financial spreadsheets, contract trade-offs) as the archetypal use case. It is not limited to math/coding.

---

> [!question] Q13 — C5: Extended Thinking — When NOT to Use
> ⏱ **90 seconds**
>
> A restaurant manager needs to send a routine follow-up email to her food supplier confirming that tomorrow's produce delivery should arrive before 7 AM. She has all the information: the supplier's name, the items ordered, the agreed time, and a contact number in case of delay. Before prompting, her team lead says: *"For anything work-related, always turn on extended thinking — it's important not to make mistakes."*
>
> Should she follow this advice?
>
> **A)** Yes — any task with real-world consequences benefits from extended thinking, and a missed delivery would be genuinely costly
>
> **B)** No — extended thinking is slower and uses more of her usage budget; a confirmatory email with all information already known has no meaningful trade-offs to reason through
>
> **C)** Yes — email communications carry legal and professional risk, so extended thinking improves writing quality and reduces errors
>
> **D)** No — extended thinking is only available on the paid flagship model and is too expensive for routine operational tasks

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course is explicit: *"Quick lookups, one-paragraph summaries, and casual idea-gathering. Thinking mode is slower and spends more of your usage budget. Save it for the questions where you would want a person to take their time."* A confirmatory email where all facts are known, the structure is simple, and there are no trade-offs to analyze does not need extended thinking. Save it for the seven-constraint contract comparison.
>
> **Why A is wrong:** "Real-world consequences" is too broad a trigger. Many simple tasks have real-world consequences (sending any email does). The criterion for extended thinking is *many inputs + many trade-offs*, not potential impact.
>
> **Why C is wrong:** Writing quality improvement is not a function of extended thinking for a simple task. Extended thinking helps when the problem requires *working through multiple approaches* — not when the path is obvious and the information is already provided.
>
> **Why D is wrong:** This is factually incorrect. Extended thinking is available across model tiers, not only the flagship. More importantly, cost is not the primary reason to skip it here — task fit is. The crash course's reason is timing and budget efficiency, not pure cost.

---

> [!question] Q14 — C6: Sycophancy — Embedded Bait
> ⏱ **90 seconds**
>
> A startup founder asks his AI assistant: *"Our mobile app for pet care reminders has been picking up great reviews lately. Can you identify the potential weaknesses in our business model that investors might push back on?"* After reading the response, the founder is satisfied that the AI gave a balanced critique — it identified three weaknesses. His co-founder, who studies AI behavior, reviews the exchange and says the response is less trustworthy than it appears.
>
> What concern is the co-founder **most likely** raising?
>
> **A)** The AI should have requested financial projections and market sizing data before attempting a business model critique
>
> **B)** The phrase "picking up great reviews" is a leading signal embedded in the question — it primes the AI toward confirming success, which means the weaknesses listed may be softened, filtered, or framed to avoid contradicting the positive framing
>
> **C)** The AI cannot reliably critique business models without extended thinking enabled, so the analysis is structurally shallow
>
> **D)** The founder should have used deep research mode to get investor-grade quality feedback from actual investor databases

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course demonstrates this exact pattern: *"'I have a great business idea, mobile tie-dyeing, critique it.' That is bait for sycophancy... the AI mostly applauds."* The phrase "picking up great reviews" is subtle bait — it signals that the founder views the app positively. The AI will lean toward confirmation, and the weaknesses it lists will likely be framed gently or will omit the most damaging ones. The neutral rewrite: *"Analyze the business model of a mobile app for pet care reminders. List the strongest investor objections and the best counter-arguments to each. Score viability 1–10 on each of: market size, competitive moat, unit economics, customer retention risk."*
>
> **Why A is wrong:** Requesting more data is reasonable general advice but is not the specific concern the co-founder would be raising about AI behavior.
>
> **Why C is wrong:** Business model analysis does not require extended thinking to be reliable. This is a sycophancy issue, not a reasoning depth issue.
>
> **Why D is wrong:** Deep research finds current external factual information. The critique of a specific app's business model is a reasoning task, not a research task. Deep research would be overkill and wouldn't fix the sycophancy problem.

---

> [!question] Q15 — C6: Rubric Scoring and Anti-Sycophancy (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> A journalist has just finished a 400-word investigative article and asks an AI: *"Tell me if this draft is ready to publish."* The AI responds: *"This is a strong draft with clear structure and engaging writing. A few minor tweaks could improve flow, but overall it reads well."* She is about to submit to her editor.
>
> Which **TWO** of the following alternative prompts would have produced more actionable, honest feedback from the same AI?
>
> **A)** *"Score this draft 1-10 on each of these four criteria: clarity of the central claim, quality of evidence, logical paragraph order, and whether the ending earns the reader's time. For each score, write one sentence of justification and name the single change that would raise the score the most. There is always a next level."*
>
> **B)** *"Use extended thinking to review this draft more carefully before giving your opinion."*
>
> **C)** *"I want you to be really honest with me — is this draft actually ready to publish?"*
>
> **D)** *"Find any weaknesses, factual gaps, logical problems, or structural issues in this draft. If you find none, say so explicitly."*
>
> **E)** *"Confirm whether this draft meets professional publication standards."*

> [!success]- Reveal Answer
> **Correct: A and D**
>
> **Why A is correct:** This is the full anti-sycophancy rubric technique from the crash course. Named criteria, forced numerical scores, one-sentence justifications, improvement steps, and the explicit *"there is always a next level"* instruction removes the AI's ability to declare you finished. Vague praise collapses because the AI must commit to a number, and committing forces it to look harder. The crash course: *"A model that wants to please you can call your draft 'strong' without committing to anything. Asked to choose between 6 and 7 out of 10, it has to commit."*
>
> **Why D is correct:** Using *"find"* instead of *"confirm"* removes the embedded conclusion. The AI is no longer being asked to validate a decision — it's being asked to search for problems. The explicit *"If you find none, say so explicitly"* forces the AI to commit rather than offer vague qualified praise.
>
> **Why B is wrong:** Extended thinking improves reasoning depth on complex multi-input problems. It does not fix the sycophancy problem. If the question is still "is it ready?" with no rubric, extended thinking will produce a longer, more elaborately justified version of "yes, it's pretty good."
>
> **Why C is wrong (the trap):** This feels like it should work — you're explicitly asking for honesty. But the crash course explains why this is ineffective: the model will say *"yes, I'm being honest"* and still lean toward agreement. Sycophancy is structural, not intentional. Asking the AI to try harder at honesty does not remove the leading signal. Neutral framing and rubrics do.
>
> **Why E is wrong:** "Confirm whether this draft meets..." is pure sycophancy bait. "Confirm" presupposes that it probably does. The AI's response to this will almost always be a qualified "yes." This is the same trap as "tell me my draft is ready to send" from the crash course's examples.

---

> [!note] END OF PART 1
> **Part 1 complete: 15 questions | Target time: 28 minutes**
>
> Before moving to Part 2:
> - How many did you answer within the time limit?
> - Were your errors content errors (didn't know the concept) or timing/reading errors?
> - Tag each mistake: C = content gap | T = time pressure | L = language/wording confusion
>
> Part 2 (Q16–Q30) covers: C7 Brainstorm Loop, C8 Multimodal, C9 App Building, C10 Code Execution, C11 Desktop Apps, C12 Model Selection, C13 Cross-Model Checking — and includes 2 long-case paragraph-format scenarios.

---

## PART 2 — Questions 16–30

---

> [!question] Q16 — C7: Brainstorm-Iterate Loop — Grip Too Tight
> ⏱ **90 seconds**
>
> A marketing manager at a hotel chain is planning a campaign for the upcoming summer season. She runs the following prompt: *"Give me 5 campaign ideas for our summer hotel promotion. The campaign must use Instagram Reels, must be 15–30 seconds, must feature the rooftop pool, must use upbeat music, and must target families with children aged 5–12."* The AI returns five ideas — but they all look nearly identical: variations of "show a family splashing in the rooftop pool with upbeat music." She asks for 20 ideas and gets 20 versions of the same concept.
>
> What is the **root cause** of this failure?
>
> **A)** The AI lacks the creative capability to generate truly different campaign concepts — this is a known limitation
>
> **B)** She asked for options with a brainstorming grip but pinned too many structural elements, leaving the model one small corner to draw from — precision is the right setting for execution, not option generation
>
> **C)** She should have used deep research mode to gather examples of successful hotel campaigns before asking for ideas
>
> **D)** She needs to use extended thinking to produce more diverse creative options — standard mode converges quickly

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course describes this failure precisely: *"A marketer wants campaign ideas... His limits pinned the structure, the tagline, the tone, and the length, which left the model one small corner to draw from."* The fix is to *loosen the grip during brainstorming*: keep only the true limits (the product, the audience, what the campaign must never do), drop the structural requirements (platform specifics, duration, format), generate different *directions*, and only then bring the full specification back to execute the chosen direction.
>
> **Why A is wrong:** This is a prompt design failure, not a model capability limitation. The crash course demonstrates that the same AI produces genuinely different ideas when the grip is loosened.
>
> **Why C is wrong:** Deep research would surface existing campaigns, which might inspire ideas — but that is not the root cause of the failure or the fix the crash course recommends. The issue is prompt structure, not missing external research.
>
> **Why D is wrong:** Extended thinking improves reasoning on multi-constraint problems. The problem here is not insufficient reasoning — it is the prompt structure constraining the output space. Thinking harder inside a constrained box still produces constrained results.

---

> [!question] Q17 — C7: Four Kinds of Ask
> ⏱ **90 seconds**
>
> A strategy consultant needs to write a memo analyzing whether her client should enter a new market. She sits down at her AI and types: *"Write a 1,200-word strategic memo analyzing whether [client name] should enter the Southeast Asian logistics market, with a formal tone, structured with an executive summary, three sections, and a recommendation."* The memo that comes back is polished, grammatically correct — but rests almost entirely on generic Southeast Asia market assumptions. When she reads it, she realizes none of the client's actual competitive advantages or constraints appear in the analysis.
>
> Which step did she skip that caused this specific failure?
>
> **A)** She did not specify a word count early enough — the AI produced shallow content because it was trying to fill 1,200 words
>
> **B)** She went straight to drafting (tight grip on output shape) before doing a research pass to map what is actually known about the client's position and the market
>
> **C)** She should have asked the AI to use web search to find current Southeast Asia logistics market data before drafting
>
> **D)** The prompt was too long — the structural requirements (executive summary, three sections) confused the AI about the actual analytical task

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course is explicit about this failure: *"Drafting before researching gives the thin generic plan... Most people skip [the research round] and ask for the draft directly, which is why their drafts feel thin. They are built on whatever the model surfaces first."* The correct first move is a research/mapping prompt: *"Before writing anything: list the five strongest reasons to enter and the five strongest reasons not to. One sentence each. What do you need from me about the client before you can make this analysis specific?"* Only after this mapping does drafting produce something substantive.
>
> **Why A is wrong:** Word count constraints don't cause generic content. Generic content comes from missing specific client context and skipping the mapping step.
>
> **Why C is wrong:** Web search helps with current market data. But the core failure is the absence of client-specific context (competitive advantages, constraints) — which lives with the consultant, not on the web. Even with web search, the analysis would still be generic without her input.
>
> **Why D is wrong:** Structural requirements in a prompt are good practice for a drafting task. They don't cause shallow analysis — missing context does.

---

> [!question] Q18 — C7: Brainstorm-Iterate Loop — Full Sequence (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> An HR manager at a recruitment firm is using AI to develop a new employee recognition program. She wants creative, genuinely different program structures — not the standard "Employee of the Month" type. She runs this prompt: *"I want 5 completely different recognition program ideas for a 50-person recruitment firm. Context: we have high competition, a young team (22–35), and our culture values autonomy. Ideas should be novel, not just 'employee of the month.'"* She receives 5 ideas and finds two she likes (#2 and #4) and three she rejects.
>
> Which **TWO** actions correctly apply the brainstorm-iterate loop at this stage?
>
> **A)** Ask for a full write-up of idea #2 immediately since she already likes it
>
> **B)** Tell the AI exactly why she is rejecting ideas #1, #3, and #5, and what specifically she likes about #2 and #4, then ask for 5 new ideas built around that feedback
>
> **C)** Ask the AI to grade all 5 ideas on a rubric of novelty, practicality, and team fit before she decides
>
> **D)** Start a new chat with the context fully re-pasted to get a "fresh" set of options uncontaminated by the current session
>
> **E)** Keep idea #2 as her mental anchor and ask for 5 variations of idea #2 specifically

> [!success]- Reveal Answer
> **Correct: B and C**
>
> **Why B is correct:** This is the core iterate move. The crash course: *"Say exactly what you think of them... Ask for 3 to 5 new options built on that feedback."* Explicit rejection with reasons + explicit acceptance with reasons = the feedback that reshapes the next round. *"You are showing it your taste, and it reshapes the options around that."* This is step 3 → step 4 of the loop.
>
> **Why C is correct:** Grading with a rubric before deciding is the anti-sycophancy move applied to the loop. The crash course explicitly recommends grading options against named criteria before committing to one — this surfaces the option's actual strengths and weaknesses, not just the manager's first impressions.
>
> **Why A is wrong:** Expanding idea #2 immediately skips the loop. *"Only then expand the chosen option into a full draft."* "Only then" means after multiple rounds of feedback have refined the direction, not at the first round. The crash course: *"Most of the value lives in the loop, not the final draft."*
>
> **Why D is wrong:** Starting a new chat with the same context doesn't improve the ideas — it resets to random. The current session has already received feedback that is valuable for the next round. The crash course never recommends abandoning a working iterative session.
>
> **Why E is wrong:** Asking for variations of idea #2 only is the equivalent of committing before the loop is done — and it also narrows the exploration prematurely. The manager liked both #2 and #4; exploring only variations of one closes off possibilities that the feedback round would have opened.

---

> [!question] Q19 — C8: Multimodal — Image Input
> ⏱ **90 seconds**
>
> A forensic accountant uploads a scanned photograph of a handwritten ledger from 2003 to Claude and asks it to transcribe all entries. The photo is taken at an angle, the writing is cursive, and several entries are in the margin in small print. After receiving the transcription, she plans to use it directly in a legal report without review.
>
> What is the **most important** risk she is accepting?
>
> **A)** The AI may refuse to process handwritten financial documents due to legal and privacy restrictions
>
> **B)** The AI is strong on overall scene and clear text but weak on fine detail, small print, and text at the edges of an image — the margin entries are specifically in the AI's weak zone and errors may appear confident
>
> **C)** Claude cannot process photographs — only native digital documents in PDF format are supported
>
> **D)** The 2003 date means the ledger entries fall outside the AI's knowledge cutoff and cannot be transcribed accurately

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course is precise about image input strengths and weaknesses: *"It is weak on: Fine detail. Reading small print at the edge of an image."* Margin entries in small print at an angle are exactly this weak zone. The crash course also notes for receipts and handwritten notes: *"Always check the totals."* For a legal report, she must review the transcription herself — particularly the margin entries, the small print, and any numbers — before including it.
>
> **Why A is wrong:** Claude processes handwritten documents and financial records. The crash course explicitly uses the example of a reader transcribing handwritten recipe cards as a valid use case.
>
> **Why C is wrong:** The crash course explicitly states that images, PDFs, and voice memos can all be dropped into a prompt. Photographs are supported.
>
> **Why D is wrong:** The knowledge cutoff applies to factual knowledge the AI might be asked to *recall*. It has no bearing on the AI's ability to *read and transcribe* a physical document — that is a visual processing task, not a knowledge retrieval task.

---

> [!question] Q20 — C8: Multimodal — Audio and Mixed Inputs
> ⏱ **90 seconds**
>
> A clinical manager at a private medical practice wants to use AI to process patient consultation recordings. She has a one-hour recorded consultation (with patient consent) and wants a structured SOAP-format clinical note. A colleague warns her: *"You should know that the AI listens to the full recording and produces an exact word-for-word transcript before generating the note, so accuracy is very high."*
>
> Which part of this statement is **inaccurate** according to the crash course?
>
> **A)** The statement is fully accurate — AI audio processing produces a verbatim transcript and then generates structured notes
>
> **B)** The statement is wrong about accuracy — AI audio processing is unreliable for clinical settings and should not be used
>
> **C)** AI audio transcription is good for clear speech but can be weak with multiple overlapping speakers, heavy accents, or technical jargon — and sarcasm/tone detection remains unreliable; the claim of "very high" accuracy should be verified, not assumed
>
> **D)** The claim about consent is incorrect — patient data cannot be processed by any AI tool regardless of consent

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The crash course's audio capability table is specific: *"Typing up clear speech: Excellent — Heavy accents, technical jargon, several people talking at once [are the risks]... Tone, sarcasm, emotion: Improving, not reliable."* Medical consultations often involve technical jargon (drug names, dosing), sometimes multiple voices (patient, companion), and emotional cues (patient distress signals) that affect clinical interpretation. The crash course doctor example asks the AI to *flag anything it could not understand confidently* — exactly because accuracy is high but not perfect. *"The AI did not replace her clinical judgment. It removed the typing."*
>
> **Why A is wrong:** The crash course does not claim near-perfect accuracy for complex speech — it calibrates accuracy carefully by type of audio task, and some categories are listed as "weak" or "not reliable."
>
> **Why B is wrong:** The crash course presents clinical note generation as a valid and valuable use case. The issue is calibrating where errors are likely, not wholesale avoidance.
>
> **Why D is wrong:** The crash course uses a consented patient recording example as a legitimate scenario. Consent is a necessary condition (mentioned explicitly in the example), not an insufficient one.

---

> [!question] Q21 — C9: Artifacts and App Building
> ⏱ **90 seconds**
>
> A school administrator builds a small quiz app in a Claude chat for her students. The app appears in the side panel, works when she clicks it, and she shares the link with teachers. Two days later, a teacher tells her: "I need to give the quiz to students in three different school buildings at the same time — can we have them all take it simultaneously and see each other's scores in real time?" The administrator asks Claude to add this feature with one message.
>
> What should she expect?
>
> **A)** Claude will add the multiplayer feature in the next response since it can update artifacts in place
>
> **B)** The feature is straightforward — it requires only adding a real-time database, which Claude can do with one additional prompt
>
> **C)** Multiplayer over the internet — with accounts, real-time score syncing across locations, and live leaderboards — falls outside what a one-prompt app can do and requires real engineering beyond the chat artifact
>
> **D)** She should switch to deep research mode and ask Claude to research how to add multiplayer features, then implement the instructions herself

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The crash course draws a clear line: *"Multiplayer over the internet. Networking, accounts, and matching players are beyond a one-prompt build."* Real-time synchronization across multiple locations requires a backend server, a real-time database (like Firebase or Supabase), network infrastructure, and session management — none of which can be built into a self-contained HTML artifact. The crash course: *"The line to remember: small things that fit on one screen, with no accounts and no outside services, work. Anything past that needs more than one prompt and usually some real engineering."*
>
> **Why A is wrong:** Claude can update artifacts in place for features within scope. But scope matters — adding a color picker or a timer is in scope. Real-time multiplayer over the internet is not.
>
> **Why B is wrong:** Adding a real-time database is not a one-line change. It requires a server, API keys, backend code, and security configuration — all outside the artifact model.
>
> **Why D is wrong:** Deep research finds information; it doesn't solve the architectural problem. Even with perfect instructions, the administrator would need real software development capability to implement them.

---

> [!question] Q22 — C10: Code Execution — Silent Failure
> ⏱ **90 seconds**
>
> An operations analyst uploads a spreadsheet of 14 months of warehouse throughput data and asks: *"What is the average throughput per month, and which three months had the highest variance from the average?"* The AI responds with a confident paragraph: *"The average monthly throughput is approximately 4,320 units. The three months with the highest variance are March, July, and November, showing notable deviations from the mean."* There is no code block visible in the response.
>
> What should the analyst do **before** using these figures in her quarterly report?
>
> **A)** Nothing — the AI's answer is authoritative when it states specific numbers and month names
>
> **B)** Ask the AI to "think hard" and regenerate the analysis, which will trigger a more careful calculation
>
> **C)** Recognize that no code block means the AI likely answered from a glance or estimation rather than running actual computation — ask it explicitly to write and run code on the file and show the code it ran
>
> **D)** Switch to a more powerful model tier, since variance calculations require a stronger model

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** This is the silent failure mode the crash course warns about explicitly: *"The model does not run code on every question. It chooses, based on how you phrased the question. On smaller questions it sometimes skips the code and answers from a glance, which gives you a confident paragraph with no computation behind it. From the outside that looks the same as a real analysis."* The absence of a code block is the diagnostic signal. The fix: *"Write and run code to answer this. Show me the code you ran."* Then check that the code block is present.
>
> **Why A is wrong:** The crash course directly contradicts this. *"A guessed answer reads exactly like a computed one."* Specific numbers and month names in a confident paragraph are not proof of computation.
>
> **Why B is wrong:** Extended thinking improves reasoning quality on complex multi-input problems. It does not automatically trigger code execution. The model can "think hard" and still estimate rather than compute.
>
> **Why D is wrong:** All modern model tiers can run code execution. The issue is not model capability — it is prompt design. The analyst didn't ask for code to be run.

---

> [!question] Q23 — C10: Code Execution — Verification (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> A finance officer uploads a year of company expense records (1,200 rows, 8 columns) and asks the AI to produce a quarterly breakdown by department with totals. The AI runs code — she can see a code block — and returns a formatted table. She is about to send this table to the CFO.
>
> Which **TWO** verification steps does the crash course recommend before treating the output as final?
>
> **A)** Check that the row count, column names, and date range in the AI's output match what she knows is in the file
>
> **B)** Ask the AI to confirm that no data was omitted by running the analysis again with extended thinking
>
> **C)** Spot-check the final totals against a manually verified reference figure she can cross-check
>
> **D)** Verify that the code block is longer than 10 lines — short code blocks indicate the AI took shortcuts
>
> **E)** Ask the AI to add a disclaimer to the table stating it was AI-generated

> [!success]- Reveal Answer
> **Correct: A and C**
>
> **Why A is correct:** The crash course recommends this as the primary verification step: *"Ask for a checkable fact first. 'Tell me the exact row count, the column names, and the date range of this file before you analyze anything.' If the model is really reading the file, those answers are right. If it is inventing, the row count will be a suspiciously round number and the column names will sound right and be wrong."* Even after code runs, confirming the AI read the right columns and the correct data range is the first check.
>
> **Why C is correct:** The crash course: *"What to double-check, even when code did run: Final totals. Code is precise, but the AI may have summed the wrong column."* The most common failure is accurate computation on the wrong data — the code ran, but it summed "Department Code" instead of "Department Name" or confused two similarly named columns. A manual spot-check of totals catches this.
>
> **Why B is wrong:** Re-running with extended thinking does not add a verification layer — it produces another output that may have the same column-mapping error. The issue is whether the AI correctly identified *which* columns to use, not whether it reasoned deeply enough.
>
> **Why D is wrong:** Code length is not a proxy for accuracy. A short, clean piece of code can be perfectly correct, and a long sprawling one can silently compute the wrong thing.
>
> **Why E is wrong:** Adding a disclaimer is a governance step, not a verification step. The crash course focuses on verifying the numbers themselves, not labeling the source.

---

> [!question] Q24 — C10: Code Execution — Long Case
> ⏱ **4 minutes**
>
> **SCENARIO:** Priya is a business analyst at a small e-commerce company. Her manager asks her to answer three questions from a 2,000-row sales CSV file before the Monday morning review: (1) Which product category had the highest month-over-month growth in Q4? (2) Are there any months where refund rates exceeded 15%? (3) What is the average order value per customer segment?
>
> She uploads the file and sends this prompt: *"Analyze this sales file and answer: which category grew most in Q4, whether any month had refunds over 15%, and what the average order value is by customer segment."*
>
> The AI returns a confident, well-formatted response with three sections, specific numbers, and a note that "Accessories showed a 23% growth rate in Q4, no months exceeded 15% refunds, and Premium customers averaged $187 per order." There is no code block in the response.
>
> ---
>
> **24A.** What is the most accurate assessment of this response?
>
> **A)** The response is reliable — specific numbers and structured sections indicate the AI processed the file correctly
>
> **B)** The response may be an estimation from a glance at the data, not a computed analysis — the absence of a code block is a warning sign
>
> **C)** The response is unreliable because the file exceeds 1,000 rows, which is beyond what AI code execution can handle
>
> **D)** The response is reliable because the AI would have flagged its answer as "estimated" if it were not certain
>
> ---
>
> **24B.** Priya sends a follow-up: *"Run this analysis again using code, and show me the code you ran."* This time a code block appears, and the figures come back differently: Accessories growth was 18% (not 23%), one month did exceed 15% refunds, and Premium customer AOV was $162 (not $187). What is the most important lesson from this comparison?
>
> **A)** The first model made arithmetic errors — she should always use a more capable model tier for numerical analysis
>
> **B)** The second answer with visible code is authoritative and she should use it without any further checks
>
> **C)** The silent failure mode is real and costly — confident-sounding estimates can be significantly wrong, and a computed answer is not automatically correct either; she should still spot-check the totals manually
>
> **D)** Deep research mode would have avoided this problem by sourcing external validation for her figures

> [!success]- Reveal Answer
> **24A — Correct: B**
>
> **Why B is correct:** The crash course: *"The model does not run code on every question... On smaller questions it sometimes skips the code and answers from a glance, which gives you a confident paragraph with no computation behind it. From the outside that looks the same as a real analysis."* The absence of a code block is the explicit warning sign. Specific numbers presented confidently with no code block are the signature of the silent failure mode.
>
> **Why A is wrong:** This is exactly what the silent failure mode looks like from the outside. Specific numbers ≠ computed numbers.
>
> **Why C is wrong:** Modern AI code execution handles large files. 2,000 rows is well within normal range.
>
> **Why D is wrong:** The AI does not flag estimated answers as estimates. The crash course is explicit: *"A guessed answer reads exactly like a computed one."* There is no automatic disclaimer.
>
> ---
>
> **24B — Correct: C**
>
> **Why C is correct:** Two lessons compound here. First, the silent failure mode produced significantly wrong figures (23% vs 18%, missed a refund violation, $187 vs $162). Second, even the code-run answer needs verification — the crash course: *"What to double-check, even when code did run: Final totals. Code is precise, but the AI may have summed the wrong column."* The code ran, but perhaps it identified the wrong column for "customer segment" or "refund amount." She should spot-check one segment's AOV manually before the Monday review.
>
> **Why A is wrong:** A more capable model tier would not fix the silent failure mode. The issue is prompt design — she didn't ask for code to be run. The same issue would occur with any model tier if asked the same way.
>
> **Why B is wrong:** The code-run answer is significantly more reliable than the estimation — but it is not automatically correct. Column misidentification or date range errors can still occur after code runs.
>
> **Why D is wrong:** Deep research finds external web sources. It has no bearing on analyzing a privately uploaded CSV file.

---

> [!question] Q25 — C11: Desktop Apps and Permissions
> ⏱ **90 seconds**
>
> A project coordinator at a consulting firm uses an AI desktop app for the first time. She gives it full read/write access to her Documents folder and asks it to reorganize 300 project files by client name. Without asking for a plan first, the app immediately begins moving and renaming files. Within two minutes, it has moved 240 files and deleted 18 duplicates. She then realizes the "duplicates" it deleted included older versions of files she needed for a legal dispute. She tries to recover them from the Recycle Bin and finds them gone.
>
> Which **two principles** from the crash course did she violate?
>
> **A)** She should have used read-only access first and asked for a plan before approving any action
>
> **B)** She should have checked the Arena leaderboard before selecting her AI desktop app
>
> **C)** She should have turned on extended thinking before letting the app organize files
>
> **D)** She gave the smallest necessary permission when she should have given broader access for efficiency

> [!success]- Reveal Answer
> **Correct: A (this question asks you to identify the two principles she violated — both are captured in A)**
>
> **Why A identifies both violations:**
>
> **Violation 1 — Plan before action:** The crash course: *"Tell it the task. Ask for a plan, not action. The app proposes a list of file operations. Review and edit the plan. Only then approve execution."* She skipped steps 2 and 3 entirely. If she had seen the plan first, she would have noticed the "delete duplicates" step and excluded her legal files.
>
> **Violation 2 — Smallest permission first:** The crash course: *"Until you have done this safely a few times, scope every permission request to the smallest folder needed for the task. Do not approve 'full disk access' for an app you have used twice."* She gave full Documents access on the first use. The permission ladder starts with read-only access to a single small folder.
>
> **The deleted files trap:** The crash course explicitly warns: *"Deleted files often do NOT go to your recycle bin when an AI app deletes them. They are gone."* This is flagged as one of *"two facts most people learn the hard way."*
>
> **Why B is wrong:** The Arena leaderboard helps choose between tools — it doesn't protect against misuse of any tool.
>
> **Why C is wrong:** Extended thinking applies to reasoning tasks, not file system operations.
>
> **Why D is wrong:** She gave *too broad* a permission (full Documents folder), not too narrow. The principle is *least privilege* — smallest permission the job needs.

---

> [!question] Q26 — C11: Desktop Apps — Permission Ladder (Long Case)
> ⏱ **4 minutes**
>
> **SCENARIO:** Rahul is an account manager at an advertising agency. His company has just licensed an AI desktop app. His manager tells him: *"The more access you give it, the more useful it is — just give it full disk access upfront so it can find whatever it needs."*
>
> Rahul has never used the app before. He is about to use it for his first task: reorganizing the proposal files inside one specific client folder (`/clients/NovaCorp/proposals/`), which contains 45 PDFs.
>
> ---
>
> **26A.** Which permission level does the crash course recommend for Rahul's **first session**?
>
> **A)** Full disk access — as his manager suggested, this maximizes usefulness from day one
>
> **B)** Read-only access to the single `/clients/NovaCorp/proposals/` folder only
>
> **C)** Read and write access to the entire `/clients/` directory so the app can reorganize all client folders if needed
>
> **D)** Read-only access to the full Documents folder so the app can understand the overall file structure
>
> ---
>
> **26B.** After three successful reorganizations over one week (read-only, no errors), what does the crash course suggest as the **appropriate next step** in permission scope?
>
> **A)** Grant full disk access now — track record has been established
>
> **B)** Grant read and write access inside one specific folder (the NovaCorp proposals folder) — trust expands incrementally with track record
>
> **C)** Keep read-only forever — the risk of write access is always too high
>
> **D)** Grant access to the full client directory tree — three successful sessions is sufficient proof

> [!success]- Reveal Answer
> **26A — Correct: B**
>
> **Why B is correct:** The crash course permission ladder is explicit for first sessions: *"Read-only access to a single small folder. Keep saying no to: Anything that writes, deletes, or renames."* Rahul's task is specifically scoped to one client's proposals folder — that is exactly the right scope. Full disk access for a first session is the exact mistake the crash course warns against.
>
> **Why A is wrong:** The manager's advice violates the permission ladder directly. The crash course: *"Do not approve 'full disk access' for an app you have used twice."* Trust is earned by what the app does in your own work — not granted upfront.
>
> **Why C and D are wrong:** Both grant broader access than the task requires. Read-only to a single folder is the correct first-session scope.
>
> ---
>
> **26B — Correct: B**
>
> **Why B is correct:** The crash course permission ladder for "After 2–3 successful runs": *"Read and write inside one specific folder. Keep saying no to: Access to broader directories like the desktop or documents root."* Three clean read-only sessions earns one step up the ladder — write access within the specific scoped folder, not broad directory access.
>
> **Why A is wrong:** Full disk access is the *"Trusted"* tier in the ladder — the last step after a sustained clean track record, not after three sessions.
>
> **Why C is wrong:** The crash course endorses write access after earned trust — permanent read-only is overly restrictive and not what the course recommends.
>
> **Why D is wrong:** Three sessions earns write access *within the scoped folder*, not expansion to the full client directory tree.

---

> [!question] Q27 — C12: Model Selection and Jagged Ability
> ⏱ **90 seconds**
>
> A communications director at a law firm has been using Claude exclusively for two years for all tasks: drafting client letters, analyzing 80-page contracts, creating internal reports, and generating graphics for presentations. She says: *"I've learned Claude well — it never surprises me anymore and I know exactly what to expect."*
>
> What does the crash course identify as the **main professional risk** in her approach?
>
> **A)** Using one AI tool too extensively creates a dependency that is hard to break when the tool becomes unavailable
>
> **B)** Her familiarity with Claude means she has learned its blind spots — but she may be systematically getting worse results on tasks where a different model family leads, and she won't know because she has no comparison point
>
> **C)** She should be using deep research mode for contract analysis, not the standard chat interface
>
> **D)** Her account-level standing instructions have likely accumulated contradictory rules over two years, degrading all her outputs

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course: *"AI is jagged, which means ability is uneven: different models lead on different tasks and the leader changes every few months. There is no single best model."* The specific warning: *"Someone who uses one AI for everything is wrong about the best tool for most of their tasks."* She has optimized for comfort, not performance. For image generation or certain analysis types, ChatGPT or Gemini may produce materially better results — but she will never know without running the same prompts in multiple tools. The crash course recommendation: *"Run the same prompt in 2 to 3 models regularly. Read the answers side by side."*
>
> **Why A is wrong:** Tool availability is a practical concern but not what the crash course identifies as the main professional risk here.
>
> **Why C is wrong:** Deep research mode is a retrieval choice, not a product choice. She may or may not need it depending on the task — but this isn't the primary risk identified.
>
> **Why D is wrong:** Account-level instruction accumulation is a real risk (the crash course mentions Anthropic's own experience with this), but it's a secondary problem. The main risk here is the single-tool limitation.

---

> [!question] Q28 — C12: Model Ladder vs. Thinking Switch
> ⏱ **90 seconds**
>
> A data analyst at a marketing agency asks a colleague: *"I need to do a complex multi-constraint analysis comparing campaign performance across six dimensions. Should I switch to the Pro version of the AI, or turn on the thinking feature?"* The colleague replies: *"They're basically the same thing — both make the AI smarter for hard problems."*
>
> What is wrong with this answer?
>
> **A)** The colleague is correct — upgrading a model tier and enabling thinking mode both improve analytical output in equivalent ways
>
> **B)** The thinking switch and the model ladder are separate controls: the ladder is which model (fast/medium/heavy tier) and the thinking switch is a reasoning setting *within* a chosen model — they work differently and apply to different types of problems
>
> **C)** Thinking mode is the correct choice for analytical tasks; the model ladder only applies to creative tasks
>
> **D)** The Pro version only adds storage and chat history features — it does not improve reasoning quality

> [!success]- Reveal Answer
> **Correct: B**
>
> **Why B is correct:** The crash course draws this distinction explicitly: *"The thinking switch from Concept 5 is a setting inside one model. The ladder is which model you opened."* They are orthogonal controls. The ladder determines the base model capability (speed vs. depth). The thinking switch controls how long the *selected model* reasons before answering. For a multi-constraint analysis: the right move is to select an appropriate model tier *and* turn on extended thinking — not treat them as equivalent alternatives.
>
> **Why A is wrong:** They improve output in different ways. The ladder gives you a fundamentally different model (different training, different context size, different baseline capability). The thinking switch gives the current model more time to reason. Same model + thinking ≠ higher tier model.
>
> **Why C is wrong:** The crash course does not restrict the thinking switch to creative tasks. It recommends thinking mode for "questions with many inputs or trade-offs" across all domains, including analysis.
>
> **Why D is wrong:** Model tiers differ in reasoning capability, not just storage features. This is a fundamental mischaracterization of what model ladders mean.

---

> [!question] Q29 — C13: Cross-Model Checking
> ⏱ **90 seconds**
>
> A policy analyst at a public health organization has drafted a 25-page report on vaccine hesitancy interventions. She wants to quality-check it before submission. She asks her Claude Pro account to review it, then asks a colleague to run it through Claude Free. Both versions give the report a score of 8.5/10 with similar positive feedback and similar minor suggestions. She tells her manager: *"I ran a cross-model review — two independent AI systems agreed the report is strong."*
>
> What is **wrong** with her claim?
>
> **A)** Free and Pro versions of the same product differ too much in capability for the scores to be meaningfully compared
>
> **B)** Cross-model checking requires the two models to give different scores — if they agree, the review is invalid
>
> **C)** Two Claude models checking each other do not constitute a cross-model check — they share training patterns and blind spots; a review from a model in a different family (ChatGPT, Gemini, Grok, Meta AI) is needed to surface what Claude consistently misses
>
> **D)** The review is valid — two AI evaluations is the standard for cross-model checking

> [!success]- Reveal Answer
> **Correct: C**
>
> **Why C is correct:** The crash course is explicit about this failure: *"Different models have different blind spots, because they were trained on different data by teams that cared about different things... This only works across different model families... Two Claude models checking each other is not cross-model checking, because their habits are too similar."* Claude Pro and Claude Free are both Anthropic products trained with the same approach — they share blind spots. A genuine cross-check requires a model from OpenAI, Google, Meta, or another distinct family. *"The point a first model misses, a second often catches — but only if they are genuinely different families."*
>
> **Why A is wrong:** Capability difference between tiers is real, but that's not the core issue here. Even a significant capability gap within the same family doesn't produce the independent blind-spot check that cross-family comparison does.
>
> **Why B is wrong:** Agreement between models from different families *is* meaningful — it means the same finding passed two independent checks. The problem is not agreement; it is using the same family, which shares too much training overlap to be independent.
>
> **Why D is wrong:** This is directly contradicted by the crash course. Two models from the same family is not the standard — it is specifically what the crash course warns against.

---

> [!question] Q30 — C13: Cross-Model Checking — When to Skip (Multi-Select)
> ⏱ **2 minutes** | Select **TWO** answers
>
> A team of researchers has been working on a complex grant proposal for six months. They plan to use the full multi-model review loop (Claude → self-critique → second family → third family) before submission. In a team meeting, they debate which sections need the full loop and which can be reviewed by one model only.
>
> For which **TWO** items is the full multi-model loop **most justified** according to the crash course?
>
> **A)** A two-paragraph email to the grants coordinator confirming submission logistics
>
> **B)** The 40-page scientific methodology section, where errors in reasoning could cause the proposal to be rejected or the research to be replicable
>
> **C)** A list of six references formatted in APA style
>
> **D)** The central cost-benefit argument that the funder will scrutinize most closely, which makes a claim about downstream health outcomes affecting 400,000 people
>
> **E)** A one-page team biography section listing names, institutions, and credentials

> [!success]- Reveal Answer
> **Correct: B and D**
>
> **Why B is correct:** The crash course: *"Save the cross-check for work where being wrong is expensive, such as a memo your boss will read, a chapter that will be published, a decision that affects other people."* A 40-page methodology section where reasoning errors cause rejection or unreproducible research is exactly this category. The effort of running three model families is justified by the cost of getting it wrong.
>
> **Why D is correct:** A central argument making claims about health outcomes for 400,000 people has both high stakes and the specific failure mode the multi-model loop targets: *"counter-arguments she would never have seen on her own were in the memo before the board meeting."* A funder's primary scrutiny point is the highest-value cross-check candidate.
>
> **Why A is wrong:** A two-paragraph logistics email is specifically in the "skip the loop" category: *"A short email, a quick lookup, a casual list of ideas: one model is fine."* The cost of a minor error here is minimal and reversible.
>
> **Why C is wrong:** APA reference formatting is a mechanical task. Format errors are factually verifiable against the APA manual and don't require cross-family reasoning to catch.
>
> **Why E is wrong:** A team biography with factual credentials is verifiable against source documents (CVs, institutional pages). The cross-model loop is for *reasoning and craft* quality — not factual verification of information the team already knows. *"Models check each other for craft. Humans check the facts that matter."*

---

> [!note] PART 2 COMPLETE — Full Test Done
> **30 questions | 60 minutes target**
>
> ---
>
> ### Post-Test Review Protocol
>
> **Step 1 — Score yourself:**
> Count your correct answers. Each question = 1 point.
> - 27–30: Exceptional — exam-ready
> - 23–26: Strong — review the concepts you missed
> - 18–22: Solid — revisit the crash course sections for your weak concepts
> - Below 18: Go back to the crash course before retesting
>
> **Step 2 — Tag every error:**
> For each wrong answer, write: **C** (content — I didn't know the concept) or **T** (timing — I knew it but ran out of time) or **L** (language — I misread the question under pressure)
>
> If >80% of your errors are T or L: content is solid. Drill the reading strategy.
> If >20% of errors are C: identify which concepts and re-read those sections.
>
> **Step 3 — Concept weakness map:**
> | Wrong Q | Concept | Error Type |
> |---------|---------|------------|
> | | | |
>
> **Step 4 — Re-test the ones you got wrong.** Cover the answer, re-read the scenario, answer from scratch. If you get it right the second time with the answer covered, it was a T/L error. If you still get it wrong, it is a C error.
>
> ---
>
> ### Concept Quick-Reference (for answer review)
> | Concept | Core Rule |
> |---------|-----------|
> | C1 | A brief = files + goal + limits + ask. Length ≠ quality. |
> | C2 | Confidence ≠ accuracy. Common topics reliable, thin/recent topics verify. |
> | C3 | "What is X" → pretrained. "Today/latest" → web search. "Research thoroughly + cite" → deep research. |
> | C4 | 6 layers in context window. Memory = tool writes it, not model remembers. Context rot = start new chat. Projects = repeated context. |
> | C5 | Think hard = many inputs + trade-offs. Skip it for quick lookups. |
> | C6 | Remove conclusion from question. Force numbers per criterion. "Find" beats "confirm." |
> | C7 | Load → options → feedback → new options → expand one. Loose grip for brainstorm, tight for execution. Research before draft. |
> | C8 | Image: strong on overall scene, weak on fine detail/edges. Audio: good clear speech, weak on jargon/multi-speaker. |
> | C9 | Artifact = working object, shareable. One screen, no accounts, no outside services = in scope. Multiplayer = out of scope. |
> | C10 | Silent failure = confident answer with no code block. Fix: "write and run code, show me the code." Verify totals even when code ran. |
> | C11 | Plan before action. Read before write. Deleted files skip recycle bin. Permission ladder = read-only first. |
> | C12 | No single best model. Jagged = uneven ability. Thinking switch ≠ model ladder. Check Arena monthly. |
> | C13 | Cross-family check = different company. Two Claude models ≠ cross-model. Score = progress signal, not truth signal. |
