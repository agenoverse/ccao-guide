---
tags: [ccao-f, mock-exam, practice-test, exam-prep]
---

# CCAO-F Mock Exam 1 — Full Practice Test

> [!info] Exam Simulation
> **Claude Certified Associate — Foundations (CCAO-F)**
> - **Questions:** 60 (multiple-choice and multiple-response)
> - **Time limit:** 120 minutes
> - **Passing score:** 720 / 1000
> - **Instructions:** Each question presents a workplace scenario. Select the BEST answer unless the question says "Select TWO." There is no penalty for guessing — answer every question.
>
> **Domain weights reflected in this exam:**
> | Domain | Weight | Questions |
> |--------|--------|-----------|
> | D2 — Output Evaluation & Validation | 21% | Q1–Q13 |
> | D4 — Workflow Integration & Solution Design | 16% | Q14–Q23 |
> | D6 — Governance, Risk & Responsible Use | 15% | Q24–Q32 |
> | D1 — Prompting & Task Execution | 14% | Q33–Q40 |
> | D3 — Product & Model Selection | 12% | Q41–Q47 |
> | D5 — Configuration & Knowledge Management | 12% | Q48–Q54 |
> | D7 — Troubleshooting & Optimization | 10% | Q55–Q60 |

> [!tip] How to Use This Mock Exam
> 1. **Timed mode:** Set a 120-minute timer, answer all 60, then check answers
> 2. **Study mode:** Work domain by domain, reveal answers as you go
> 3. **Review mode:** Read the scenario, predict the answer, then read the full explanation
>
> Answers are hidden in collapsible callouts — click to reveal.

---

# Domain 2 — Output Evaluation & Validation (21%)

*13 questions. This is the heaviest domain on the exam. Every question tests your judgment about when to trust, verify, edit, or reject Claude's output.*

---

### Question 1

A marketing associate asks Claude to write a blog post about their company's new sustainability initiative. Claude produces a polished draft that includes the claim: "Our carbon emissions decreased by 34% year-over-year according to our 2025 ESG report." The associate does not remember this exact figure. What is the most appropriate next step?

**A.** Publish the draft — the statistic sounds plausible and the post needs to go out today.

**B.** Ask Claude to confirm the accuracy of the 34% figure and publish if Claude says it is correct.

**C.** Verify the 34% figure against the actual 2025 ESG report before publishing.

**D.** Remove all statistics from the blog post to avoid any risk of inaccuracy.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** Claude can fabricate precise-sounding statistics — a classic hallucination pattern. The claim references a specific internal document (the ESG report), so the associate must check the actual source before publishing. This is the "verify before trusting" principle in action.
>
> **Why A is wrong:** "Sounds plausible" is not verification. Publishing an incorrect statistic about your company's environmental record could be a legal and reputational disaster.
>
> **Why B is wrong:** Asking Claude to confirm its own output is circular — Claude's self-reported confidence is not a reliability signal. It will often confidently reaffirm fabricated details.
>
> **Why D is wrong:** Removing all statistics is the "wasteful" option — it abandons useful content instead of simply verifying it. The task can proceed safely with one verification step.

---

### Question 2

An operations manager uses Claude to summarize a 40-page vendor contract. The summary states: "The contract includes a 90-day termination clause in Section 7.3 and a liability cap of $2 million in Section 12.1." The manager needs to brief their director in 30 minutes. What should the manager do?

**A.** Use the summary as-is since Claude had access to the full document and quoted specific sections.

**B.** Spot-check the cited sections (7.3 and 12.1) in the original contract to confirm the details before the briefing.

**C.** Ask Claude to re-read the contract and produce a second summary to compare against the first.

**D.** Tell the director that the summary was AI-generated so they should not rely on it.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Specific section references and dollar figures are high-risk hallucination targets. The manager has the source document and 30 minutes — enough time to spot-check the key claims. This balances efficiency (using Claude's summary) with diligence (verifying critical details).
>
> **Why A is wrong:** Even when Claude has access to the source, it can misread, misattribute, or fabricate section numbers and figures. "It had access" does not mean "it got it right."
>
> **Why C is wrong:** Generating a second summary and comparing is slower than simply checking the original and still doesn't guarantee accuracy — both summaries could contain the same error.
>
> **Why D is wrong:** Disclaiming the tool without verifying the content doesn't help the director make decisions. It also abandons the value Claude provided. The right move is to verify and present with confidence.

---

### Question 3

A project coordinator asks Claude to analyze customer feedback data and identify the top five complaints. Claude returns a numbered list with percentages: "#1: Shipping delays (38%), #2: Product quality (22%)..." and so on. The coordinator notices the percentages add up to 112%. What does this signal?

**A.** Claude is using a different statistical method where percentages can exceed 100%.

**B.** The output contains an inconsistency that indicates unreliable analysis — the coordinator should re-examine the underlying data and recalculate or re-prompt.

**C.** The percentages are approximate and rounding explains the overshoot, so the results are still usable.

**D.** Claude found that some complaints overlap across categories, which is why the total exceeds 100%.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Percentages of a "top five" list that should sum to part of a whole should not exceed 100%. This is a clear internal inconsistency — a red flag that Claude's analysis is unreliable. The correct response is to investigate: check the data yourself, or re-prompt with clearer instructions.
>
> **Why A is wrong:** This rationalizes the error. There is no standard statistical method where the top five categories of a complaint breakdown sum to over 100% (unless explicitly stated as multi-select, which it wasn't).
>
> **Why C is wrong:** Rounding errors might cause 101% or 99%, not 112%. This magnitude of overshoot indicates a substantive error, not rounding.
>
> **Why D is wrong:** If complaints could overlap, Claude should have stated that explicitly. Inventing a justification for Claude's error is a trap — the associate is doing Claude's defending instead of their own verification.

---

### Question 4

A communications specialist uses Claude to draft a press release about a product launch. The draft is well-written but uses a casual, conversational tone with contractions and humor. The press release is going to industry journalists. What is the most appropriate action?

**A.** Publish it as-is — Claude's tone choices reflect modern communication trends.

**B.** Ask Claude to completely rewrite the press release from scratch in a formal tone.

**C.** Edit the draft to adjust the tone for the target audience while preserving the accurate content and structure.

**D.** Abandon the draft and write the press release manually to ensure the right tone.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** The content and structure are good — only the tone needs adjustment. "Edit, adapt, refine, and compare outputs for the intended audience" is a core D2 skill. The specialist should adapt the draft for industry journalists (more formal, fewer contractions) rather than starting over.
>
> **Why A is wrong:** The tone doesn't match the audience. A press release for industry journalists needs a professional register, not casual humor. Publishing without adapting for the audience is a judgment failure.
>
> **Why B is wrong:** A complete rewrite wastes the good content and structure. Iterating on tone is more efficient than regenerating everything — and a rewrite might introduce new issues.
>
> **Why D is wrong:** This is the "wasteful" option. Claude produced useful content; abandoning it entirely because of a tone mismatch wastes time and discards value.

---

### Question 5

An HR associate uses Claude to draft interview questions for a software developer role. Before sharing the questions with the hiring panel, the associate should check for which of the following? **(Select TWO)**

**A.** Whether the questions inadvertently introduce bias related to age, gender, or background.

**B.** Whether Claude used the most creative question formats available.

**C.** Whether the questions align with the actual job requirements and competencies being assessed.

**D.** Whether Claude cited peer-reviewed research on interview effectiveness.

> [!success]- Show Answer
> **Correct: A and C**
>
> **Why A is correct:** Interview questions can inadvertently contain bias — questions that favor certain demographics, cultural backgrounds, or age groups. Checking for bias before sharing with the hiring panel is essential for fair hiring practices and legal compliance.
>
> **Why C is correct:** Questions must align with the actual role requirements. Claude may generate generic developer questions that don't target the specific competencies this role needs. Validating relevance to the job is a core evaluation step.
>
> **Why B is wrong:** Creativity in question format is nice-to-have, not a validation priority. The associate's job is to ensure the questions are fair and job-relevant, not stylistically novel.
>
> **Why D is wrong:** Interview questions don't need academic citations. This is a distractor — it sounds rigorous but is irrelevant to the practical task of preparing a hiring panel.

---

### Question 6

A financial analyst asks Claude to compare quarterly revenue across four business units using data they pasted into the conversation. Claude produces a summary table and a written analysis. The analyst notices that the written analysis says "Unit B showed the strongest growth at 15%" but the table shows Unit C at 18% growth. What should the analyst do?

**A.** Trust the table since structured data is more reliable than narrative text.

**B.** Trust the written analysis since Claude wrote it after analyzing the table.

**C.** Identify the contradiction as a reliability signal, go back to the original data, and verify which figure is correct before using either.

**D.** Average the two figures (15% and 18%) and use 16.5% as a reasonable compromise.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** An internal contradiction between two parts of the same output is a strong signal that something is wrong. Neither the table nor the narrative is automatically more reliable. The only trustworthy source is the original data the analyst pasted in — they should check that directly.
>
> **Why A is wrong:** Tables generated by Claude can contain errors just as narrative text can. Structured format does not guarantee accuracy.
>
> **Why B is wrong:** The order of generation doesn't determine accuracy. Claude doesn't "double-check" its table when writing the narrative — it can produce inconsistent outputs within the same response.
>
> **Why D is wrong:** Averaging two potentially wrong numbers produces a definitely wrong number. This option ignores the real problem: one or both figures may be incorrect.

---

### Question 7

A team lead asks Claude to create a competitive analysis comparing their product against three competitors. Claude produces a detailed comparison, but the team lead has no personal knowledge of two of the competitors' latest features. What is the most appropriate approach before sharing this analysis with the executive team?

**A.** Share it as a draft labeled "AI-generated — not verified" and let the executives decide what to trust.

**B.** Verify the competitor claims by checking the competitors' official websites, recent press releases, or analyst reports.

**C.** Ask Claude if it is confident about the competitor details and share if confidence is high.

**D.** Only include the analysis of the one competitor the team lead knows well and remove the other two.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Competitive intelligence going to executives must be accurate. The team lead should verify unfamiliar claims against authoritative external sources — competitor websites, press releases, or industry reports. This is fact-checking against primary sources.
>
> **Why A is wrong:** Labeling something "not verified" and sending it to executives shifts the verification burden to people who have even less context. The team lead is accountable for the accuracy of what they present.
>
> **Why C is wrong:** Claude's self-assessed confidence is not a reliability signal. Claude will confidently assert details about competitors that may be outdated or fabricated.
>
> **Why D is wrong:** Removing two-thirds of the analysis makes it useless as a competitive comparison. The task should proceed with verification, not be gutted to avoid effort.

---

### Question 8

An associate uses Claude to generate a summary of a long internal meeting transcript. The summary includes a bullet point that says: "The team agreed to delay the product launch to Q2." The associate was in the meeting and recalls the discussion being more nuanced — some members pushed back on the delay. What should the associate do?

**A.** Accept the summary since Claude processed the full transcript and may have captured consensus the associate missed.

**B.** Replace that bullet with a more accurate representation reflecting the nuanced discussion, noting that the decision was debated and not unanimous.

**C.** Delete the bullet entirely since it is controversial.

**D.** Add a disclaimer at the top of the summary saying "AI-generated — may not reflect all viewpoints."

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** The associate has first-hand knowledge that the summary oversimplifies the discussion. The right move is to edit the output to accurately represent what happened — including the pushback. This is "edit, adapt, and refine the output for the intended audience."
>
> **Why A is wrong:** The associate was there and knows the summary is misleading. Deferring to Claude over your own direct knowledge is the opposite of good judgment. Claude compresses nuance — humans must restore it when it matters.
>
> **Why C is wrong:** Deleting the point removes important information. The launch timing was discussed — the summary should reflect that, just more accurately.
>
> **Why D is wrong:** A generic disclaimer doesn't fix the specific inaccuracy. People reading the summary will still see "the team agreed" and act on it. The fix must be in the content, not a header.

---

### Question 9

A research associate uses Claude to help prepare a literature review. Claude provides summaries of five academic papers, including authors, journal names, publication years, and key findings. Which validation approach is most appropriate before including these in the review?

**A.** Check that the papers exist in an academic database and that the cited details (authors, year, journal, findings) are accurate.

**B.** Ask Claude to provide DOI links for each paper and assume they are valid if links are provided.

**C.** Verify only the most recent paper since older papers are more likely to be in Claude's training data and therefore accurate.

**D.** Accept the summaries if the journal names sound familiar and the findings seem reasonable.

> [!success]- Show Answer
> **Correct: A**
>
> **Why A is correct:** Fabricated academic citations are one of Claude's most well-known hallucination patterns. Claude can invent realistic-looking paper titles, author names, and findings. The only reliable check is to search an academic database (Google Scholar, PubMed, etc.) and confirm each paper actually exists with the claimed details.
>
> **Why B is wrong:** Claude can generate plausible-looking DOI formats that don't resolve to real papers. The presence of a link-like string is not verification — you must check the actual database.
>
> **Why C is wrong:** Training data cutoff doesn't make older papers "safer." Claude can hallucinate papers from any era equally. All five citations need checking.
>
> **Why D is wrong:** "Sounds familiar" and "seems reasonable" are exactly the traps hallucinations exploit. Claude generates plausible-sounding content — that's what makes hallucinations dangerous. Plausibility is not verification.

---

### Question 10

An associate creates two versions of a product description using Claude — one targeting technical buyers and one targeting business executives. Which criteria should the associate prioritize when evaluating which version to send to each audience?

**A.** Word count — the shorter version goes to executives and the longer one goes to technical buyers.

**B.** Whether each version emphasizes the information and language that matters most to its intended audience — technical specs for technical buyers, business outcomes for executives.

**C.** Which version Claude produced first, since the first output tends to be higher quality.

**D.** Whether each version uses the most sophisticated vocabulary possible to establish credibility.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Audience alignment is the core evaluation criterion. Technical buyers need specs, architecture, and integration details. Executives need ROI, business impact, and strategic value. The associate should evaluate whether each version speaks to its audience's priorities — this is "edit, adapt, refine, and compare outputs for the intended audience."
>
> **Why A is wrong:** Length alone doesn't determine audience fit. A short version full of jargon fails executives; a long version covering business impact would confuse technical evaluators. Content match matters more than word count.
>
> **Why C is wrong:** Generation order has zero correlation with quality. This is a fabricated heuristic with no basis.
>
> **Why D is wrong:** Sophisticated vocabulary can alienate rather than impress. Executives want clarity and business impact, not complexity. Technical buyers want precision, not big words. The goal is appropriate language, not impressive language.

---

### Question 11

A legal assistant uses Claude to draft a response to a client's question about contract termination procedures. The draft cites "Section 14(b) of the Uniform Commercial Code" as the governing provision. The legal assistant is not a lawyer. What is the most appropriate action?

**A.** Send the response to the client, noting that it was drafted with AI assistance.

**B.** Verify the UCC citation independently and have the supervising attorney review the response before it goes to the client.

**C.** Ask Claude to double-check the citation and send it if Claude confirms.

**D.** Remove the legal citation and send the response with just the general guidance.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This scenario has two red flags: (1) legal content with a specific citation that could be hallucinated, and (2) client-facing communication. Both demand verification and human expert review. The legal assistant should verify the citation exists AND have the supervising attorney review — legal advice going to clients always requires attorney sign-off.
>
> **Why A is wrong:** Disclosing AI involvement doesn't make inaccurate legal advice acceptable. If Section 14(b) doesn't say what Claude claims, the client receives wrong legal guidance regardless of the disclaimer.
>
> **Why C is wrong:** Claude confirming its own citation is not verification. Claude will confidently reaffirm fabricated legal references.
>
> **Why D is wrong:** Removing the citation without attorney review still leaves unverified legal guidance going to a client. The core issue is that legal content needs expert review, not just citation removal.

---

### Question 12

An associate is using Claude to compile a report that includes data from multiple sources: a company database export, a government statistics website, and an industry white paper. Claude produces a cohesive report weaving all three sources together. What is the most important quality check before finalizing the report?

**A.** Ensure the writing style is consistent throughout since the sources may have caused tone shifts.

**B.** Verify that Claude has not mixed up or misattributed data points between the three sources — check that each claim traces back to its correct source.

**C.** Confirm that the report is the right length for the intended audience.

**D.** Ask Claude to add a bibliography at the end listing all three sources.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** When Claude synthesizes multiple sources, a common failure mode is misattribution — stating a government figure as coming from the white paper, or blending numbers from different sources into a single claim. The most critical check is tracing each data point back to its correct origin. This is the "Trace" step in the verification framework: where does the claim say it comes from, and does the source actually say this?
>
> **Why A is wrong:** Writing style consistency is a polish concern, not a quality concern. Getting the facts right and properly attributed is far more important than tone consistency.
>
> **Why C is wrong:** Length is a formatting consideration, not a quality check. A report that's the perfect length but misattributes data is worse than one that's too long but accurate.
>
> **Why D is wrong:** Adding a bibliography lists the sources but doesn't verify that the report correctly uses them. A bibliography at the end doesn't catch misattributed data points within the report.

---

### Question 13

A project manager receives a Claude-generated risk assessment for a new initiative. The assessment identifies eight risks, each rated as High, Medium, or Low. The project manager notices that all eight risks are rated "Medium." What should the project manager conclude?

**A.** The project is genuinely moderate risk across all dimensions — this is a realistic assessment.

**B.** Claude has likely defaulted to a central tendency rather than making meaningful distinctions — the project manager should review each risk independently and adjust the ratings based on their own knowledge of the project.

**C.** Claude is being conservative to avoid alarming stakeholders, which is appropriate behavior.

**D.** The uniform ratings indicate Claude needs a more capable model to differentiate risk levels.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** All-medium ratings are a strong signal of "central tendency bias" — Claude defaulting to the safe middle rather than making sharp judgments. Real risk assessments almost always have variation. The project manager should use their own project knowledge to independently evaluate each risk and adjust ratings up or down where warranted.
>
> **Why A is wrong:** It's statistically unlikely that eight different risks are all genuinely the same severity. Uniform ratings almost always indicate the model avoided making real distinctions, not that the risks are actually uniform.
>
> **Why C is wrong:** Claude doesn't strategically moderate its assessments to manage stakeholder reactions. This anthropomorphizes the model. The uniform rating is a limitation of the output, not a communication strategy.
>
> **Why D is wrong:** This is a prompt quality issue, not a model capability issue. The project manager could get better differentiation by providing clearer criteria for High/Medium/Low, or by rating each risk individually rather than all at once. Jumping to "switch models" skips the cheapest fix.

---

# Domain 4 — Workflow Integration & Solution Design (16%)

*10 questions. This domain tests your ability to identify where Claude fits in a workflow, how to integrate it responsibly, and how to communicate its role to stakeholders.*

---

### Question 14

A customer support team currently handles complaint emails through a four-step process: (1) read the complaint, (2) look up the customer's account history, (3) draft a response, (4) send the response. A team lead wants to integrate Claude into this workflow. Which step is most important to keep under direct human control?

**A.** Step 1 — reading the complaint — because Claude might misinterpret the customer's tone.

**B.** Step 3 — drafting the response — because the draft must be perfect before sending.

**C.** Step 4 — sending the response — because once sent, it cannot be undone and the company is accountable for what it says.

**D.** Step 2 — looking up account history — because Claude should not access customer data.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** The delegation criteria (reversibility, stakes, accountability) point directly at Step 4. Sending is the irreversible action — once the email reaches the customer, it represents the company. A human must own this gate. Claude can help draft (Step 3), but a person must review and approve before sending.
>
> **Why A is wrong:** Claude can read and summarize complaints effectively. Misinterpreting tone is a minor risk that a human reviewer would catch at the review stage — it doesn't require human control at the reading step.
>
> **Why B is wrong:** The draft doesn't need to be "perfect" at the drafting step — it needs to be reviewed before sending. Claude can produce a strong first draft. The critical gate is between draft and send, not at the drafting itself.
>
> **Why D is wrong:** Claude can access account data if the workflow is designed with proper permissions. The issue isn't data access — it's that the irreversible, customer-facing action (sending) needs a human gatekeeper.

---

### Question 15

A marketing team has been using Claude to brainstorm campaign ideas, and the results have been excellent. The team lead now proposes using Claude to also write final ad copy that goes directly to the media buyer without human review. What workflow risk does this introduce?

**A.** Model fatigue — using Claude for too many tasks will reduce output quality.

**B.** Halo delegation — assuming Claude will perform well on ad copy because it performed well on brainstorming, without independently evaluating the new task.

**C.** Context overload — the campaign brainstorming conversations will interfere with the ad copy.

**D.** Cost escalation — Claude will use more tokens for ad copy than brainstorming.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This is textbook halo delegation — "Claude was great at X, so it'll be great at Y." Brainstorming (low stakes, divergent thinking, human selects from options) and final ad copy (high stakes, must be precise, goes directly to external parties) are fundamentally different tasks with different risk profiles. Each task needs independent evaluation against the delegation criteria.
>
> **Why A is wrong:** "Model fatigue" is not a real concept. Claude doesn't degrade from being used for multiple task types. Each conversation starts fresh.
>
> **Why C is wrong:** If they use separate conversations, brainstorming context won't interfere with ad copy. And even within a conversation, this isn't the primary risk — the risk is skipping human review on high-stakes output.
>
> **Why D is wrong:** Cost is a consideration but not the workflow risk being introduced. The dangerous change is removing human review from client-facing content, not the token cost.

---

### Question 16

An operations analyst is redesigning the monthly reporting workflow. Currently, three people spend two days each compiling data from spreadsheets into a formatted report. The analyst wants Claude to handle the entire process end-to-end. A senior manager asks: "What happens if the AI gets a number wrong?" What is the best response?

**A.** "Claude is very accurate with numbers, so errors are unlikely."

**B.** "We'll include a disclaimer on every report noting it was AI-generated."

**C.** "The workflow includes a human verification step where an analyst reviews all figures against the source data before the report is finalized and distributed."

**D.** "We can run the old manual process in parallel for the first month to catch any issues."

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** The stakeholder communication rule is "say what it does, then name the gate." The best response directly addresses the concern by describing the specific human checkpoint in the workflow. It tells the manager exactly who reviews, what they check, and when — before distribution.
>
> **Why A is wrong:** Claiming Claude is "very accurate" dodges the question and makes a promise you can't guarantee. Stakeholders need to hear about safeguards, not reassurances about AI reliability.
>
> **Why B is wrong:** A disclaimer shifts responsibility to the reader instead of addressing the risk. It's also an admission that you haven't built in proper verification — not reassuring for a senior manager.
>
> **Why D is wrong:** A parallel run is a reasonable transition tactic, but it's a temporary measure, not a permanent workflow answer. The manager is asking about the ongoing workflow, and the answer should describe the permanent safeguard. Also, this option doesn't describe who reviews or what they check.

---

### Question 17

A consultant is helping a client identify where Claude could improve their procurement process. The current process has seven steps. After analysis, the consultant finds that three steps involve routine document formatting, two involve vendor negotiations, and two involve compliance sign-offs. Which steps are the best candidates for Claude integration?

**A.** The vendor negotiations, because Claude can handle complex interpersonal dynamics.

**B.** The compliance sign-offs, because automating them would save the most senior staff time.

**C.** The three routine document formatting steps, because they are repetitive, low-stakes, and easily reviewed.

**D.** All seven steps, because Claude can handle the full procurement lifecycle.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** Apply the delegation criteria: the formatting steps are reversible (easy to redo), low-stakes (formatting errors are caught before external use), and accountable (someone reviews the output). Repetitive, structured tasks with clear right/wrong outputs are ideal for Claude. This is "apply Claude to analyze requirements and use cases."
>
> **Why A is wrong:** Vendor negotiations require human judgment, relationship skills, and real-time adaptation. Claude cannot negotiate on behalf of the company — this step requires human empathy and accountability.
>
> **Why B is wrong:** Compliance sign-offs exist specifically to ensure a qualified human has reviewed and approved. Automating the sign-off itself removes the human gate that the compliance process was designed to enforce. This would be over-delegation of a high-stakes step.
>
> **Why D is wrong:** "Automate everything" ignores the delegation criteria entirely. Negotiations and compliance reviews have high stakes and require human judgment — they should not be delegated to AI.

---

### Question 18

A team has been using Claude in their workflow for three months. Initially, a senior team member reviewed every Claude output before it was used. Over time, the team has gotten comfortable and now sends Claude-generated client emails without review because "they're always good." What workflow problem has developed?

**A.** The team has become over-reliant on Claude and should switch to a different AI tool periodically.

**B.** An unstaffed gate — the human review step still exists in the workflow design but is no longer actually performed.

**C.** The team needs to upgrade to a more capable model since they clearly trust the output quality.

**D.** This is a positive development — it shows the team has built confidence in the tool and the workflow is maturing.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This is a textbook unstaffed gate. The workflow was designed with human review before client-facing emails — that gate existed for a reason (client communication is irreversible, high-stakes, and the company is accountable). The fact that "they're always good" doesn't eliminate the need for review. It means the team has gotten complacent, and the one time Claude makes a significant error, it will reach the client unchecked.
>
> **Why A is wrong:** Switching AI tools doesn't solve the problem — the issue is that the human review step has been abandoned, not which tool is being used.
>
> **Why C is wrong:** The model upgrade is irrelevant. Even the most capable model needs human review on client-facing communication. The issue is the missing gate, not the model quality.
>
> **Why D is wrong:** This is the dangerous answer. Comfort with AI output is not a reason to remove safeguards. Client emails carry accountability and reputational risk. The workflow gate must be maintained regardless of track record.

---

### Question 19

A department head asks you to create a presentation explaining how Claude will be used in the team's new quarterly planning workflow. Which of the following should the presentation include? **(Select TWO)**

**A.** A detailed technical explanation of how large language models process tokens and generate text.

**B.** A clear description of which workflow steps Claude handles and where human review checkpoints are placed.

**C.** A comparison of Claude's performance benchmarks against competing AI platforms.

**D.** A realistic description of Claude's limitations relevant to the workflow, including what it cannot reliably do.

> [!success]- Show Answer
> **Correct: B and D**
>
> **Why B is correct:** Stakeholder communication must describe what the AI does in the workflow AND where the human gates are. The department head needs to understand the division of labor and the safeguards. This is the core of "communicate Claude's value and limitations to stakeholders."
>
> **Why D is correct:** Honest communication about limitations builds trust and sets appropriate expectations. If Claude can't reliably handle certain parts of quarterly planning (like predicting market conditions), the department head needs to know that upfront to staff those steps appropriately.
>
> **Why A is wrong:** A department head doesn't need to know about token processing and text generation mechanics. The presentation should focus on what it does for their workflow, not how the technology works internally.
>
> **Why C is wrong:** Competitive benchmarks don't help the department head understand how the workflow will operate. They need practical workflow information, not vendor comparisons.

---

### Question 20

A project manager wants to use Claude to support the design of a new employee onboarding process. They have mapped the current process and identified pain points. What is the most effective way to leverage Claude in this solution design?

**A.** Ask Claude to design the entire new onboarding process from scratch, replacing the current one.

**B.** Share the current process map and pain points with Claude, then use it to generate potential improvements and evaluate trade-offs — while the project manager makes the final design decisions.

**C.** Have Claude interview employees about their onboarding experience to gather requirements.

**D.** Ask Claude to benchmark the company's onboarding against competitors and design accordingly.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This uses Claude for what it does well — analyzing structured information, generating options, and evaluating trade-offs — while keeping design authority with the human who understands the organizational context. The PM provides the real-world input (current process, pain points), Claude helps explore solutions, and the PM makes final decisions. This is "use Claude to support solution design, development, and iteration."
>
> **Why A is wrong:** Claude doesn't know the company culture, existing systems, team dynamics, or constraints. Designing from scratch without human direction ignores the organizational context that makes an onboarding process actually work.
>
> **Why C is wrong:** Claude cannot conduct employee interviews. It has no access to employees and cannot gather primary research data from real people. Requirements gathering from humans requires a human.
>
> **Why D is wrong:** Claude doesn't have reliable access to competitors' internal onboarding processes. It might generate plausible-sounding but fabricated benchmarks. Even if the benchmarks were real, copying competitors ignores the company's specific needs.

---

### Question 21

A small business owner uses Claude to help plan a new service offering. Claude suggests the service, outlines pricing, estimates demand, and recommends a launch date. The owner loves the plan and wants to move forward. What is the most important thing the owner should do before committing resources?

**A.** Ask Claude to do a more detailed version of the same plan with financial projections.

**B.** Validate Claude's market assumptions and estimates against real market data, customer feedback, or industry benchmarks — since Claude's estimates are generated, not researched.

**C.** Share Claude's plan with their social media followers to gauge interest.

**D.** Implement the plan quickly since first-mover advantage matters more than perfect planning.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Claude's demand estimates, pricing suggestions, and market assumptions are generated from patterns, not from actual market research or real data about this specific business. Before committing real resources, the owner must validate these assumptions against actual evidence — customer surveys, competitor pricing, industry reports. Claude can help plan, but humans must ground-truth the plan.
>
> **Why A is wrong:** A more detailed version of unvalidated assumptions is still unvalidated. Adding financial projections built on fabricated demand estimates creates a false sense of precision. Depth without verification is dangerous.
>
> **Why C is wrong:** Social media engagement is not rigorous market validation. And this approach risks announcing a service offering before it's been properly evaluated.
>
> **Why D is wrong:** "Move fast" is reckless when the plan is based entirely on AI-generated estimates. Speed doesn't compensate for committing resources based on unverified assumptions.

---

### Question 22

An associate integrates Claude into a weekly reporting workflow where Claude drafts the report and a manager reviews it every Friday. After two months, the company's reporting requirements change — new metrics are required and two old sections are no longer needed. What is the most appropriate action?

**A.** Continue with the current workflow and manually add the new metrics each week after Claude generates the old format.

**B.** Update Claude's instructions and any relevant knowledge sources to reflect the new reporting requirements, then verify the next output matches the new format.

**C.** Build a completely new workflow from scratch since the requirements have changed.

**D.** Wait until the manager notices the reports are outdated and then update.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** When requirements change, the Claude configuration must be updated to match — instructions, templates, and knowledge sources. Then verify the first output under the new configuration to make sure it's correct. This is "integrate Claude into existing workflows to augment or redesign them" — maintaining the integration as the workflow evolves.
>
> **Why A is wrong:** Manually patching Claude's output every week defeats the purpose of the integration. If you're fixing the same thing weekly, the fix belongs in the configuration, not in your weekly workaround.
>
> **Why C is wrong:** The workflow structure (Claude drafts, manager reviews) is still sound — only the content requirements changed. Rebuilding from scratch wastes the working infrastructure over a configuration update.
>
> **Why D is wrong:** Waiting for someone else to catch the problem is passive and unprofessional. The associate responsible for the workflow should proactively update it when requirements change.

---

### Question 23

A consultant is presenting an AI-enhanced workflow to a skeptical client executive. The executive asks: "So the AI just does everything now and my team has nothing to do?" What is the most effective response?

**A.** "Yes, that's the goal — full automation will free your team for strategic work."

**B.** "No, AI can't do much — it just helps with small tasks here and there."

**C.** "AI handles the repetitive, structured parts of the workflow — like drafting and data compilation — while your team focuses on the decisions, client relationships, and quality review that require human judgment. Every output goes through a named reviewer before it reaches anyone outside the team."

**D.** "The AI is optional — your team can always go back to the manual process if they prefer."

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** This response follows the stakeholder communication rule: "say what it does, then name the gate." It clearly explains what AI handles (structured, repetitive work), what humans handle (judgment, relationships, review), and where the checkpoint is (named reviewer before external distribution). It addresses the concern without over-promising or under-selling.
>
> **Why A is wrong:** "Full automation" confirms the executive's fear and misrepresents the workflow. It also removes the human accountability that makes the workflow trustworthy.
>
> **Why B is wrong:** Underselling Claude's capabilities is the opposite extreme — it doesn't justify the investment and doesn't accurately describe what the workflow actually does.
>
> **Why D is wrong:** Framing AI as "optional" undermines the entire proposal. The consultant should confidently explain the value and safeguards, not offer retreat as the first option.

---

# Domain 6 — Governance, Risk & Responsible Use (15%)

*9 questions. This domain tests your judgment about data privacy, appropriate use cases, organizational policies, and ethical implications. The answer is rarely "don't do it" — it's usually "do it WITH this safeguard."*

---

### Question 24

A sales manager wants to upload a spreadsheet of customer contact information — including names, phone numbers, email addresses, and purchase history — into a Claude Project so the team can quickly look up customer details during calls. Company policy requires that personally identifiable information (PII) is not shared with third-party AI tools. What is the most appropriate action?

**A.** Upload the spreadsheet since the AI interaction is internal and the policy only applies to external sharing.

**B.** Remove or anonymize the personally identifiable fields (names, phone numbers, email addresses) before uploading, and use anonymized customer IDs instead — so the team can still reference purchase history without exposing PII.

**C.** Upload the spreadsheet but instruct Claude to delete the data after each session.

**D.** Abandon the idea entirely — customer data and AI tools should never be combined.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** The discriminator question is: "Does the task actually need the identifiers?" The team needs purchase history for sales conversations, but Claude doesn't need names, phone numbers, or emails to provide that. Anonymize the PII, keep the useful data, and proceed within policy. This preserves the workflow value while respecting data governance.
>
> **Why A is wrong:** "It's internal" doesn't override a company policy about PII and third-party AI tools. Claude is a third-party service regardless of whether the use is internal. Policy applies.
>
> **Why C is wrong:** Instructing Claude to "delete data" doesn't satisfy the policy requirement. You cannot verify that the instruction was followed, and the data was already exposed to the third-party system the moment it was uploaded. Policy controls must be applied before data enters the system.
>
> **Why D is wrong:** This is the "wasteful" option. The task is achievable with anonymization — abandoning it entirely wastes a valuable workflow improvement when a straightforward safeguard exists.

---

### Question 25

An HR director wants to use Claude to screen resumes and rank candidates for an open position. Which of the following best describes the governance concern with this use case?

**A.** Claude is too slow to process resumes efficiently compared to dedicated applicant tracking systems.

**B.** AI-assisted screening may introduce or amplify biases in hiring decisions, and decisions about employment have significant impact on individuals — requiring careful human oversight, bias testing, and compliance with employment regulations.

**C.** Resume screening is too simple a task for Claude — it should be reserved for more complex work.

**D.** Claude cannot read PDF resumes, making it unsuitable for this task.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Hiring decisions have direct, significant impact on people's lives. AI screening can perpetuate biases present in historical hiring data or introduce new biases based on patterns in the training data (favoring certain schools, name patterns, etc.). Under the "People" question of the four-question governance framework: this task affects individuals, requires disclosure and defined human oversight, and must comply with employment regulations like EEOC guidelines. It's not inappropriate, but it requires serious safeguards.
>
> **Why A is wrong:** Speed is an operational concern, not a governance concern. The question asks about governance risk.
>
> **Why C is wrong:** Resume screening is not too simple — it's actually a task where getting it wrong has serious consequences. The complexity argument misses the governance point entirely.
>
> **Why D is wrong:** Claude can process text from various formats. This is a false technical limitation used as a distractor.

---

### Question 26

A finance team uses Claude to prepare internal budget summaries from departmental spreadsheets. A new team member suggests connecting Claude to the company's accounting system via a connector so it can pull live financial data automatically. Before enabling this, what should the team evaluate first? **(Select TWO)**

**A.** Whether the connector's permission scopes give Claude the minimum access needed — read-only access to the specific data required, not full system access.

**B.** Whether Claude can generate charts from the financial data to make the summaries more visual.

**C.** Whether the financial data flowing through the connector includes regulated or sensitive information that requires additional controls or approvals before it enters an AI system.

**D.** Whether the connector is the most popular one available in the marketplace.

> [!success]- Show Answer
> **Correct: A and C**
>
> **Why A is correct:** The principle of least privilege applies to connectors — give Claude only the access the task requires. Read-only access to specific budget data is appropriate; full read/write access to the accounting system is excessive and risky. Evaluating scope is a core capability check.
>
> **Why C is correct:** Financial data may include regulated information (payroll details, individual compensation, tax IDs). Under the "Data" question: what data is flowing into the AI system, and does it require additional controls? The team must assess data sensitivity before enabling any new data pathway.
>
> **Why B is wrong:** Chart generation is a feature question, not a governance question. The team should evaluate safety and access controls before thinking about output features.
>
> **Why D is wrong:** Connector popularity is irrelevant to governance. A popular connector with excessive permissions is more dangerous than an unpopular one with tight scopes.

---

### Question 27

A teacher wants to use Claude to help write individualized progress reports for 30 students. The reports will include each student's name, grades, learning challenges, and behavioral observations. The school has no formal AI usage policy yet. What is the most appropriate course of action?

**A.** Proceed immediately — the reports are educational, not commercial, so privacy concerns don't apply.

**B.** Wait until the school creates a formal AI policy before writing any reports, even if it delays report cards.

**C.** Proceed with anonymized data — use student IDs or initials instead of names, remove specific diagnoses or behavioral details, and write the reports in a way that doesn't require sharing identifiable student information with the AI tool. Raise the need for a formal AI policy with administration.

**D.** Use Claude but add a note on each report saying "Partially generated by AI."

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** Student data is protected under regulations like FERPA (in the US) and similar laws elsewhere. Even without a school policy, the teacher has a professional obligation to protect student privacy. The path forward is: anonymize the data so the task can proceed safely, AND flag the policy gap to administration. This follows two principles: "protect data" and "don't abandon the task."
>
> **Why A is wrong:** Educational data has strong privacy protections. Student names, grades, learning challenges, and behavioral observations are highly sensitive — especially for minors. "It's educational" doesn't exempt data from privacy requirements.
>
> **Why B is wrong:** Waiting indefinitely for a policy is the "wasteful" option — the reports have a deadline, and the teacher can proceed safely with anonymization. Raising the policy gap is correct; halting work entirely is not.
>
> **Why D is wrong:** An AI disclosure label doesn't address the privacy concern. The issue isn't whether AI was used — it's that identifiable student data would be shared with a third-party service. The label doesn't fix the data exposure.

---

### Question 28

An associate discovers that several colleagues have been using personal ChatGPT accounts to process company documents because "it's faster than waiting for IT to approve the corporate AI tool." What governance risk does this represent?

**A.** The colleagues are wasting money by paying for personal subscriptions instead of using free tools.

**B.** Shadow AI — company data is flowing through unapproved tools outside organizational controls, creating unmanaged data exposure and compliance risk.

**C.** The colleagues are being more productive, which is a positive sign that AI adoption is working.

**D.** This is only a problem if the colleagues are using AI for client-facing work.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Shadow AI is one of the most significant governance risks in organizations adopting AI. When employees use unapproved personal tools for company work, the organization loses control over where its data goes, can't enforce policies, can't audit usage, and may violate regulatory requirements. The data exposure is unmanaged and invisible to IT and compliance teams.
>
> **Why A is wrong:** The cost of personal subscriptions is trivial compared to the governance risk. This answer focuses on the wrong problem.
>
> **Why C is wrong:** Individual productivity gains don't justify unmanaged data exposure. The "diligence gap" — the distance between what the policy says and what people do — is the core problem, regardless of whether the output quality is good.
>
> **Why D is wrong:** Shadow AI is a governance risk for all company data, not just client-facing work. Internal financial data, HR documents, strategic plans, and other internal documents flowing through unapproved tools all create exposure.

---

### Question 29

A marketing team wants to use Claude to generate social media posts that include customer testimonials. They have a folder of customer reviews and want Claude to select and adapt quotes for different platforms. Which governance consideration is most critical?

**A.** Whether Claude can match the character limits for each social media platform.

**B.** Whether the company has permission to use those customer reviews in marketing, and whether adapting the quotes changes the customer's intended meaning — since using someone's words in marketing requires consent and accurate representation.

**C.** Whether Claude will generate enough variety in the posts to avoid looking repetitive.

**D.** Whether the posts should include hashtags that are currently trending.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This is an ethical and legal governance issue. Using customer reviews in marketing requires: (1) permission to use the customer's words publicly, and (2) accurate representation — AI "adapting" a quote might change the meaning or put words in the customer's mouth they didn't intend. Under the "People" question: the customers whose testimonials are being used are affected, and misrepresenting their words creates both ethical and legal risk.
>
> **Why A is wrong:** Character limits are a tactical formatting concern, not a governance consideration.
>
> **Why C is wrong:** Content variety is a marketing quality concern, not a governance concern.
>
> **Why D is wrong:** Trending hashtags are a marketing strategy decision, not a governance consideration. The question asks about governance.

---

### Question 30

A compliance officer asks: "How do we know Claude isn't making up regulatory requirements in the reports it helps draft?" What is the best response?

**A.** "Claude is trained on legal and regulatory text, so its regulatory knowledge is reliable."

**B.** "Every report goes through our compliance review process — a qualified compliance analyst verifies all regulatory references against the actual regulatory text before anything is finalized."

**C.** "We use the most capable Claude model, which has the highest accuracy for regulatory content."

**D.** "We instruct Claude to only cite regulations it is certain about."

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** The compliance officer is asking about the control — how do you prevent fabricated regulatory content from making it into final reports? The answer is the human verification gate: a qualified person checks regulatory references against authoritative sources. This is the same principle as the stakeholder communication rule: describe the safeguard, name the reviewer, describe what they check.
>
> **Why A is wrong:** Claude's training data doesn't guarantee regulatory accuracy. Regulations change, Claude can hallucinate specific provisions, and training data has a cutoff. "It's trained on it" is never a sufficient answer for compliance.
>
> **Why C is wrong:** Model capability doesn't eliminate hallucination risk for regulatory content. Even the most capable model can fabricate regulatory references. The control must be human verification, not model selection.
>
> **Why D is wrong:** Claude cannot reliably assess its own certainty. Instructing it to "only cite what it's sure about" doesn't prevent hallucinations — Claude expresses high confidence even when fabricating.

---

### Question 31

An associate is building a Claude Project to help the team analyze market trends. They plan to upload internal sales data, competitor pricing scraped from public websites, and a third-party market research report the company purchased under a license agreement. Which data source requires the most careful governance review before uploading?

**A.** The internal sales data — because it's the most valuable to the company.

**B.** The competitor pricing — because it was scraped from the web and might be inaccurate.

**C.** The third-party market research report — because the license agreement may restrict how it can be used, including whether it can be processed by third-party AI tools.

**D.** All three sources require equal governance review because they are all going into the same Project.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** Licensed third-party content often comes with usage restrictions. The license agreement may prohibit processing the report through third-party tools, sharing excerpts beyond the licensed users, or using it in ways the license doesn't cover. Uploading it to Claude could violate the license terms. This requires checking the agreement before proceeding — a governance step the other sources don't trigger as urgently.
>
> **Why A is wrong:** Internal sales data may need handling care, but the company owns it and can generally use it within its own tools (subject to any PII concerns). It doesn't have the external legal constraint that a license agreement creates.
>
> **Why B is wrong:** Accuracy is an output quality concern, not a governance concern. Publicly available competitor pricing doesn't have usage restrictions the way licensed content does.
>
> **Why D is wrong:** While good practice suggests reviewing all data sources, the question asks which requires the MOST careful review. The licensed report has a specific legal constraint (the license agreement) that the others don't. Governance review should be proportionate to risk, not uniform.

---

### Question 32

An organization is rolling out Claude across multiple departments. The AI governance team is drafting the acceptable use policy. Which of the following should the policy address to be effective? **(Select TWO)**

**A.** A complete list of every possible prompt employees are allowed to use with Claude.

**B.** Clear categories of appropriate and inappropriate use cases, with specific examples relevant to each department — so employees can apply the principles to new situations they encounter.

**C.** A requirement that every Claude interaction be reviewed by the legal department before using any output.

**D.** Guidelines on data classification — which types of data can be used with Claude, which require anonymization, and which must never be entered — with clear escalation paths when employees are unsure.

> [!success]- Show Answer
> **Correct: B and D**
>
> **Why B is correct:** An effective policy teaches principles, not just rules. Clear categories with department-specific examples help employees make judgment calls in new situations. A policy that only says "don't do bad things" without defining what's appropriate vs. inappropriate is useless. Specific examples make the abstract concrete.
>
> **Why D is correct:** Data classification is the operational backbone of AI governance. Employees need to know: green data (freely usable), yellow data (internal controls), and red data (anonymize or never upload). Clear escalation paths ("if you're unsure, ask X") prevent both shadow AI and overcautious non-use.
>
> **Why A is wrong:** A list of approved prompts is both impossible to maintain and overly restrictive. It would be instantly outdated and would prevent employees from using Claude for legitimate new use cases. Policy should set boundaries, not script every interaction.
>
> **Why C is wrong:** Requiring legal review for every interaction would make Claude practically unusable — the bottleneck would kill adoption. Legal review should be required for specific high-risk categories (contracts, regulatory content), not for all interactions.

---

# Domain 1 — Prompting & Task Execution (14%)

*8 questions. This domain tests your ability to write effective prompts, decompose complex tasks, iterate on output, and adapt prompting strategies for different task types. Both of your teachers scored 0% on "Adapt prompting strategies based on task type" — these questions are tricky.*

---

### Question 33

A project manager needs Claude to help create a project risk register for a new product launch. The project involves 12 team members across three departments, a six-month timeline, and dependencies on two external vendors. Which prompt approach is most likely to produce a useful first draft?

**A.** "List all the risks for my project."

**B.** "You are a project risk analyst. Create a risk register for a product launch project with the following parameters: 12 team members across engineering, marketing, and operations; six-month timeline; two external vendor dependencies. For each risk, include: description, likelihood (High/Medium/Low), impact (High/Medium/Low), mitigation strategy, and risk owner by department. Focus on schedule, resource, vendor, and technical risks."

**C.** "Make me the most comprehensive risk register possible, covering every single thing that could go wrong."

**D.** "What are some risks for product launches in general?"

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This prompt follows the delegation brief structure: Role (project risk analyst), Task (create a risk register), Context (team size, departments, timeline, vendor dependencies), Constraints (specific risk categories to focus on), and Format (description, likelihood, impact, mitigation, owner). It gives Claude enough specificity to produce a targeted, useful output rather than a generic list.
>
> **Why A is wrong:** Under-specified — no context about the project, no format guidance, no risk categories. Claude would produce a generic list of vague risks that the PM would have to heavily rework. Missing context produces vague output.
>
> **Why C is wrong:** "Most comprehensive possible" and "every single thing" invite an unfocused, overwhelming output. Effective prompts constrain scope — they tell Claude what to focus on, not just to produce as much as possible.
>
> **Why D is wrong:** This asks for general knowledge, not a specific deliverable for this project. It's a research question when the PM needs an actionable work product. The prompt doesn't leverage any of the specific project context.

---

### Question 34

An associate asks Claude to write a quarterly business review email to the leadership team. The first draft is accurate but reads like a generic template — it lacks the company's specific context and the associate's usual communication style. What is the most effective iteration strategy?

**A.** Ask Claude to "make it better" and hope the second version improves.

**B.** Regenerate the response multiple times and pick the best version.

**C.** Provide Claude with specific feedback: "Adjust the tone to be more direct and data-focused, like our internal communications. Reference our Q2 goal of 15% revenue growth. Open with the key metric result, not a greeting. Keep it under 300 words."

**D.** Switch to a more capable model — the current model clearly can't handle executive communication.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** Effective iteration means giving specific, actionable feedback. The associate identifies exactly what's wrong (too generic, wrong tone) and provides concrete corrections: desired tone, specific data to include, structural preference (lead with metrics), and length constraint. This is "iterate prompts to improve output quality" — targeted refinement, not vague requests.
>
> **Why A is wrong:** "Make it better" is vague iteration — Claude doesn't know what "better" means to you. Without specific direction, the second version will be a random variation, not a targeted improvement.
>
> **Why B is wrong:** Regenerating randomly is inefficient and relies on luck. Each regeneration is an independent roll of the dice, not a progressive improvement. Iteration means directing the change, not re-rolling.
>
> **Why D is wrong:** The problem is prompt specificity, not model capability. A more capable model given the same vague prompt will still produce generic output. Fix the prompt first — always start with the cheapest fix.

---

### Question 35

A marketing analyst needs to use Claude for two different tasks in the same afternoon: (1) brainstorming 20 creative tagline ideas for a new campaign, and (2) analyzing survey data to identify the top three customer pain points. How should the analyst adapt their prompting approach for these two tasks?

**A.** Use the same detailed, structured prompt format for both tasks to maintain consistency.

**B.** For brainstorming, use a divergent prompt that encourages quantity and variety ("Generate 20 wildly different taglines — vary the tone, length, and angle. Don't self-censor."). For analysis, use a structured prompt with a clear framework ("Analyze this survey data. Categorize responses by theme. Rank the top 3 pain points by frequency and severity. Present findings in a table.").

**C.** For brainstorming, use the most capable model. For analysis, use the fastest model.

**D.** Do the brainstorming first because creative tasks should always come before analytical tasks.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Different task types require different prompting strategies. Brainstorming benefits from divergent prompts — encouraging quantity, variety, and creative freedom. Analysis benefits from structured prompts — clear frameworks, specific criteria, and defined output formats. This is "adapt prompting strategies based on task type" — matching the prompt approach to the cognitive demands of the task.
>
> **Why A is wrong:** Using the same approach for both ignores their fundamentally different natures. A rigid structure kills brainstorming creativity. An open-ended "explore freely" approach produces vague analysis. One size does not fit all.
>
> **Why C is wrong:** Model selection is a different decision from prompting strategy. Both tasks can work well on the same model — the differentiation needs to happen in the prompt approach, not the model choice.
>
> **Why D is wrong:** Task order doesn't matter, and there's no rule about creative-before-analytical. The question is about how to prompt differently, not when to do each task.

---

### Question 36

An associate needs Claude to help prepare a 30-page annual report that includes an executive summary, financial highlights, departmental achievements, market analysis, and future outlook. What is the most effective way to approach this complex request?

**A.** Put all the requirements into a single detailed prompt and ask Claude to generate the entire 30-page report at once.

**B.** Decompose the report into sections and handle each as a separate focused task — executive summary, financial highlights, departmental achievements, market analysis, and future outlook — providing relevant context and data for each section, then compile and ensure consistency across sections.

**C.** Ask Claude to generate an outline first, approve it, then ask Claude to write the full report in one go based on the outline.

**D.** Write the report manually and only use Claude to proofread the final version.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Task decomposition is essential for complex deliverables. A 30-page report is too large and multifaceted for a single prompt to handle well. Breaking it into focused sections means each prompt can carry the specific context, data, and instructions that section needs. It also makes quality review manageable — you check each section rather than trying to evaluate 30 pages at once. This is "apply task decomposition techniques to structure complex requests."
>
> **Why A is wrong:** A single prompt for a 30-page report will either overwhelm the context (too much instruction) or produce shallow content (Claude can't maintain quality across that many topics in one shot). Large monolithic prompts produce worse results than focused, section-by-section work.
>
> **Why C is wrong:** An outline is a useful first step, but "write the full report in one go based on the outline" still has the same problem as option A — the final generation step is too large. Decomposition means executing in sections, not just planning in sections.
>
> **Why D is wrong:** This is the "wasteful" option — using Claude only for proofreading wastes its ability to draft, analyze, and structure content. The associate would spend days on manual work that Claude could significantly accelerate.

---

### Question 37

An associate prompts Claude: "Write me something about our company's sustainability efforts." Claude returns a vague, generic paragraph about sustainability that could apply to any company. What is the primary problem with the original prompt?

**A.** The associate should have used a more capable model for sustainability content.

**B.** Claude doesn't have enough training data about sustainability topics.

**C.** The prompt lacks specificity — it provides no context about the company's actual sustainability efforts, no target audience, no desired format, and no indication of how the output will be used.

**D.** Sustainability is a topic Claude cannot handle well due to its political sensitivity.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** Generic input produces generic output. The prompt gives Claude nothing to work with — no company context, no specific initiatives, no audience, no format, no purpose. The fix is straightforward: add context ("Our company reduced packaging waste by 40% and switched to renewable energy in three facilities"), audience ("for our investor newsletter"), format ("a 200-word section"), and purpose ("to highlight progress on our ESG commitments").
>
> **Why A is wrong:** A more capable model won't fix a vague prompt. It will produce a more eloquently written generic paragraph — still useless. The problem is the prompt, not the model.
>
> **Why B is wrong:** Claude has extensive training data on sustainability. The issue is that it has no information about THIS company's sustainability efforts because the prompt didn't provide it.
>
> **Why D is wrong:** Sustainability is not a topic Claude can't handle. It writes about sustainability effectively when given specific context and clear direction. The limitation is the prompt, not the topic.

---

### Question 38

A business analyst needs Claude to research the potential impact of a proposed regulation on their company's operations. Which prompting strategy is most appropriate for this research task?

**A.** "Tell me everything about regulation XYZ."

**B.** "What are the three most important things about regulation XYZ?"

**C.** Start broad, then narrow: "First, summarize the key provisions of regulation XYZ and which industries it affects. Then, based on our company operating in [industry] with [specific operations], analyze which provisions would directly impact our operations, what compliance changes would be needed, and what the timeline for compliance looks like."

**D.** "Write a report about regulation XYZ. Make it comprehensive and professional."

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** Research tasks benefit from a broad-then-narrow strategy. Start with a landscape overview (what does this regulation cover?), then focus on what matters for your specific situation (which parts affect our operations?). This approach also gives the analyst a chance to verify the broad summary before committing to deeper analysis — if Claude gets the regulation's basics wrong, you catch it early.
>
> **Why A is wrong:** "Tell me everything" is undirected research — it produces an overwhelming dump of information with no focus on what matters to the analyst's specific situation.
>
> **Why B is wrong:** Arbitrarily limiting to "three things" might miss critical provisions. The number of important factors should be determined by the regulation's content and the company's situation, not preset by the prompt.
>
> **Why D is wrong:** "Comprehensive and professional" describes style, not substance. It doesn't tell Claude what to research, what angle to take, or how the output will be used. Generic direction produces generic research.

---

### Question 39

An associate asks Claude to draft an email to a dissatisfied customer who received a damaged product. The first draft is factually correct and offers a replacement, but reads as cold and robotic. For the second iteration, what is the most effective prompt adjustment?

**A.** "Rewrite this but make it longer and add more details about our return policy."

**B.** "Rewrite this with a warm, empathetic tone. Acknowledge the customer's frustration first before offering the solution. Use the customer's name (Sarah). Keep the replacement offer but add a 15% discount on their next order as a goodwill gesture."

**C.** "Make this sound more human."

**D.** "Start over completely and write a new email from scratch without looking at the first draft."

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Effective iteration provides specific, actionable direction. The associate identifies the exact problem (cold tone) and provides concrete fixes: desired emotional register (warm, empathetic), structural change (acknowledge frustration first), personalization (use the customer's name), and added value (discount). Each instruction is specific enough for Claude to act on.
>
> **Why A is wrong:** Length and policy details don't fix the tone problem. A longer, colder email is still cold — and bombarding a frustrated customer with policy text makes it worse.
>
> **Why C is wrong:** "Sound more human" is vague — it doesn't tell Claude what "human" means in this context. Is it casual? Empathetic? Humorous? Without specifics, Claude will guess, and the result may still miss the mark.
>
> **Why D is wrong:** The first draft has useful content (the replacement offer, the facts). Starting from scratch wastes that foundation. Iteration builds on what's working and fixes what isn't.

---

### Question 40

A team needs Claude to help with a complex analysis: evaluating whether the company should expand into a new market. This requires assessing market size, competitive landscape, regulatory environment, required investment, and alignment with company strategy. An associate writes a single prompt that tries to cover all five dimensions in one request. The output is shallow across all areas. What should the associate do?

**A.** Switch to the most powerful model available so it can handle the full complexity in a single request.

**B.** Break the analysis into five separate prompts — one for each dimension — providing focused context for each, then synthesize the findings into a final recommendation with Claude's help.

**C.** Ask Claude to "go deeper" on the same prompt.

**D.** Reduce the analysis to just two dimensions (market size and competitive landscape) to keep it manageable.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This is a task decomposition problem. Five distinct analytical dimensions crammed into one prompt exceeds what a single prompt can handle well — Claude spreads its attention too thin. Decomposing into focused prompts lets each dimension get the depth it deserves: specific data, targeted questions, and meaningful analysis. The synthesis step at the end ties it together. This is classic "apply task decomposition techniques to structure complex requests."
>
> **Why A is wrong:** A more powerful model with the same overloaded prompt will produce slightly better shallow analysis — still not the depth needed. The structure of the request is the bottleneck, not the model's capability.
>
> **Why C is wrong:** "Go deeper" on a five-dimensional prompt means Claude has to guess which dimension to deepen. It might go deeper on one and still give shallow treatment to the other four. Without decomposition, depth is unpredictable.
>
> **Why D is wrong:** Cutting three dimensions doesn't solve the analysis — it guts it. The company needs all five dimensions to make an informed expansion decision. The fix is better task structure, not reduced scope.

---

# Domain 3 — Product & Model Selection (12%)

*7 questions. This domain tests your ability to choose the right Claude model, feature, and configuration for the task — balancing cost, speed, quality, and capability. Both teachers scored 0% on "context limitations and memory" — pay attention to those questions.*

---

### Question 41

A customer service department needs to auto-generate short acknowledgment replies for incoming support tickets — confirming receipt and providing an estimated response time. They process approximately 800 tickets per day. The replies are simple, templated, and reviewed by a team lead in batches. Which model choice best fits this use case?

**A.** Opus — to ensure the highest quality for customer-facing messages.

**B.** Haiku — because the task is simple, high-volume, and speed/cost efficiency matters more than deep reasoning.

**C.** Fable — because customer communication is a critical business function that demands the most capable model.

**D.** The associate should alternate between models daily to compare performance.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Match model to task. Acknowledgment replies are short, templated, low-complexity, and high-volume (800/day). Haiku is the fastest and cheapest model — designed exactly for straightforward, high-volume tasks. The replies are also reviewed by a team lead, adding a human safety net. Using a premium model here wastes budget without meaningful quality improvement.
>
> **Why A is wrong:** Opus is designed for complex reasoning and enterprise-grade analysis. Using it for templated acknowledgment emails is like hiring a senior consultant to sort mail — wasteful overkill.
>
> **Why C is wrong:** Fable is the most expensive, slowest model — meant for the hardest problems and agentic work. The replies are simple and reviewed. "Critical business function" doesn't mean "use the most expensive model" — it means "use the right model with proper safeguards."
>
> **Why D is wrong:** Daily model rotation doesn't serve any operational purpose. It introduces inconsistency without providing useful comparison data. Pick the right model for the task requirements and use it consistently.

---

### Question 42

An associate is working on a complex financial analysis that requires Claude to reason through multiple interdependent variables, consider edge cases, and produce a nuanced recommendation with supporting logic. The output will go to the CFO. Cost is not the primary concern. Which model is the best fit?

**A.** Haiku — to get the analysis done as quickly as possible so the CFO gets it faster.

**B.** Sonnet — the balanced choice is always the safest default.

**C.** Opus — because the task requires deep reasoning, nuanced judgment, and the output is high-stakes with cost as a secondary concern.

**D.** Use Haiku first for a rough draft, then switch to Opus for refinement.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** The task characteristics — complex reasoning, interdependent variables, edge cases, nuanced recommendation, high-stakes audience, cost not the primary concern — all point to Opus. It's built for complex reasoning and enterprise-grade analysis. When the task demands depth and the budget allows it, use the model designed for that level of work.
>
> **Why A is wrong:** Haiku optimizes for speed and cost, not reasoning depth. A complex financial analysis with multiple interdependent variables needs the deeper reasoning capability of a more capable model. Speed at the cost of quality is the wrong trade-off for a CFO deliverable.
>
> **Why B is wrong:** "Always default to the balanced choice" is a heuristic that ignores task requirements. Sonnet is excellent for everyday work, but this is not everyday work — it's a complex, high-stakes analysis. Model selection should match the task, not default to the middle.
>
> **Why D is wrong:** A two-model workflow adds complexity without clear benefit here. The rough draft from Haiku might miss the nuanced reasoning the task requires, and Opus would essentially need to redo the analysis. For a single complex analysis, use the right model from the start.

---

### Question 43

A consultant needs to check whether a statistic quoted by a client is accurate. The statistic relates to an industry trend published last month. Which Claude feature is most appropriate for this task?

**A.** A Claude Project with uploaded industry reports from last year.

**B.** Research mode — which can search the web and access current information to verify recent claims.

**C.** A standard chat conversation where the consultant asks Claude to recall the statistic from memory.

**D.** An Artifact containing a fact-checking template.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** The statistic is from last month — it's recent information that may be beyond Claude's training data cutoff. Research mode can search the web and access current sources, making it the right tool for verifying recent claims against up-to-date information.
>
> **Why A is wrong:** A Project with last year's reports won't contain a statistic published last month. The knowledge source is outdated for this specific need.
>
> **Why C is wrong:** Claude's training data has a cutoff — it cannot reliably "recall" statistics from last month. Standard chat relies on training data, not current information. This could produce a confident but wrong answer.
>
> **Why D is wrong:** An Artifact is an output format (a document or code you can save and edit), not a research tool. A fact-checking template doesn't do the fact-checking — it just structures how you document it.

---

### Question 44

An associate has been working in a single Claude conversation for two hours, providing extensive context about a project. They notice Claude has started repeating earlier points, giving shorter responses, and occasionally contradicting something it said 90 minutes ago. What is the most likely cause and the best response?

**A.** Claude is experiencing "model fatigue" from the long session and needs a 15-minute break before continuing.

**B.** The conversation has hit context window limitations — earlier information is being pushed out as new content is added. The associate should start a new conversation, summarize the key decisions and context established so far, and continue from there.

**C.** The associate should switch to a more capable model mid-conversation to handle the complexity.

**D.** Claude's servers are likely under heavy load, causing degraded responses. The associate should try again later.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** The three symptoms — repetition, shorter responses, and contradicting earlier statements — are classic signals of context window overload. After two hours of dense conversation, the context has likely exceeded what the model can effectively work with. The fix is to start fresh: open a new conversation, provide a concise summary of the key context and decisions, and continue. This is "understand, manage context limitations and memory considerations and when to restart, summarize, or persist."
>
> **Why A is wrong:** "Model fatigue" and "needing a break" anthropomorphize the model. Claude doesn't get tired or need rest. The issue is technical — context window limits — not endurance.
>
> **Why C is wrong:** You cannot switch models mid-conversation in a way that recovers lost context. And the issue isn't model capability — it's that any model's context window has limits. A more capable model with the same overloaded context will exhibit similar degradation.
>
> **Why D is wrong:** Server load doesn't cause the specific pattern of repeating old points and contradicting earlier statements. These are hallmark signs of context overflow, not infrastructure issues.

---

### Question 45

A team needs to produce three different types of output from Claude during a product planning session: (1) a brainstormed list of feature ideas to discuss verbally, (2) a structured product requirements document to share with engineering, and (3) a comparative analysis table of competitor features. Which output formats should they use for each?

**A.** All three as Artifacts, since Artifacts are always the best format for professional output.

**B.** (1) Inline text for the brainstorm list since it's conversational and temporary, (2) an Artifact for the requirements document since it's a standalone deliverable to share, (3) an Artifact for the comparison table since it's structured data to save and reference.

**C.** All three as inline text to keep everything in one conversation flow.

**D.** (1) An Artifact, (2) inline text, (3) an Artifact.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Match the output format to the purpose. The brainstormed list is conversational — it's for discussion in the room, not a document to save and share, so inline text fits. The requirements document is a standalone deliverable that engineering needs to reference — that's exactly what Artifacts are for. The comparison table is structured data the team will reference later — also an Artifact. This is "organize and curate information and select appropriate output formats."
>
> **Why A is wrong:** Not everything should be an Artifact. A brainstorm list for verbal discussion doesn't need to be a standalone document — making it an Artifact adds unnecessary friction for a temporary, conversational output.
>
> **Why C is wrong:** The requirements document and comparison table both need to be saved, shared, and referenced later. Inline text disappears in the conversation scroll and can't be easily extracted, edited, or shared with engineering.
>
> **Why D is wrong:** This reverses the logic — the brainstorm (temporary, conversational) gets the persistent format, while the requirements document (the key engineering deliverable) gets the ephemeral format. The format should match the output's purpose and lifecycle.

---

### Question 46

An associate needs to use Claude for a project that involves analyzing a 150-page technical specification document. The document is critical reference material that Claude needs to access across multiple conversations over several weeks. What is the most appropriate approach?

**A.** Copy and paste relevant sections into each new conversation as needed.

**B.** Upload the document to a Claude Project so it persists as a knowledge source across all conversations within that Project.

**C.** Summarize the entire document into a short paragraph and use that summary as context in each conversation.

**D.** Use Research mode to find the document online each time it's needed.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Claude Projects are designed for exactly this use case — persistent knowledge sources that are available across multiple conversations. Uploading the 150-page spec to the Project means every conversation within it can reference the full document without manual copy-pasting. This is the right tool for recurring reference material.
>
> **Why A is wrong:** Copy-pasting sections into each conversation is error-prone and tedious. The associate might miss relevant sections, paste outdated versions, or hit context limits. Projects solve this exact problem.
>
> **Why C is wrong:** Compressing 150 pages into a short paragraph loses critical detail. Technical specifications contain precise language, specifications, and requirements that a summary destroys. Claude needs the full detail to provide accurate analysis.
>
> **Why D is wrong:** The document is an internal technical specification — it's likely not publicly available online. Even if it were, re-finding it each time is unreliable and inefficient compared to having it permanently available in a Project.

---

### Question 47

An associate is deciding whether to use a standard Claude chat or a Claude Project for a new task. Which of the following scenarios is best suited for a standard chat rather than a Project? **(Select TWO)**

**A.** A one-time request to rewrite a paragraph in a different tone.

**B.** A recurring weekly task that requires the same formatting rules and reference documents every time.

**C.** A quick question about how to phrase an email subject line.

**D.** An ongoing project that involves analyzing multiple documents with consistent instructions over several weeks.

> [!success]- Show Answer
> **Correct: A and C**
>
> **Why A is correct:** A one-time rewrite is a quick, self-contained task with no need for persistent instructions, knowledge sources, or recurring context. Standard chat is the right tool for one-off interactions.
>
> **Why C is correct:** A quick phrasing question is even simpler — a single exchange with no need for any persistent context. This is exactly what standard chat is for: fast, lightweight interactions.
>
> **Why B is wrong:** Recurring tasks with consistent formatting rules and reference documents are exactly what Projects are designed for. The instructions persist, the knowledge stays uploaded, and every new conversation inherits the setup. Using standard chat for this means re-providing context every single time.
>
> **Why D is wrong:** Multi-week analysis of multiple documents with consistent instructions is a core Project use case. The persistent knowledge base and standing instructions eliminate repetitive setup.

---

# Domain 5 — Configuration & Knowledge Management (12%)

*7 questions. This domain tests your ability to set up Claude Projects, manage knowledge sources and connectors, write effective system instructions, and maintain configurations over time.*

---

### Question 48

An associate is setting up a Claude Project for their team's content creation workflow. The team follows strict brand guidelines: specific vocabulary to use, words to avoid, a required tone, and a standard document structure. Where should these guidelines be configured?

**A.** In the first message of every new conversation within the Project.

**B.** In the Project's system-level instructions, so they apply automatically to every conversation in the Project.

**C.** In an uploaded knowledge document named "Brand Guidelines.pdf" with no accompanying system instructions.

**D.** In the associate's personal Claude memory, so it carries across all their conversations everywhere.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Standing rules that should apply to every conversation belong in system-level instructions. Brand guidelines — vocabulary, tone, words to avoid, document structure — are exactly the kind of persistent constraints that system instructions are designed for. Once set, they apply to every new conversation in the Project without anyone needing to re-enter them.
>
> **Why A is wrong:** Re-entering guidelines in every conversation is the "chat box as vending machine" problem. It's error-prone (team members might forget or paraphrase differently) and defeats the purpose of having a Project.
>
> **Why C is wrong:** Uploading the PDF as a knowledge source makes it available for reference, but Claude won't automatically enforce the guidelines unless the system instructions tell it to. Knowledge files are reference material; system instructions are standing rules. The guidelines need to be rules, not just available documents. (Best practice: upload the PDF AND reference it in the system instructions.)
>
> **Why D is wrong:** Personal memory applies to the associate's conversations everywhere — not to the team's Project specifically. Brand guidelines are project-level rules, not personal preferences. Other team members using the Project wouldn't benefit from one person's memory settings.

---

### Question 49

A team has a Claude Project with system instructions that say: "Always respond in a professional, formal tone." A team member starts a new conversation within the Project and writes: "Hey Claude, give me a casual, fun draft for our company picnic announcement." What will Claude most likely do?

**A.** Ignore the system instructions entirely and write in a casual, fun tone as requested.

**B.** Refuse to write the announcement because the request conflicts with the system instructions.

**C.** Attempt to balance both — producing a response that is somewhat professional but also tries to incorporate the casual request, or it may note the conflict and ask for clarification.

**D.** Crash or produce an error because of the conflicting instructions.

> [!success]- Show Answer
> **Correct: C**
>
> **Why C is correct:** When a conversation-level request conflicts with system-level instructions, Claude typically tries to honor both or flags the tension. It might produce a response that blends professional and casual elements, or it might note that the Project instructions specify a formal tone and ask how the user wants to proceed. Claude doesn't crash or flatly refuse — it navigates the conflict, often imperfectly.
>
> **Why A is wrong:** System instructions carry significant weight — Claude doesn't simply ignore them when a user prompt contradicts them. The system instructions act as standing rules that influence every response.
>
> **Why B is wrong:** Claude doesn't rigidly refuse requests that tension with system instructions. It tries to be helpful and navigate conflicts, not shut down the conversation.
>
> **Why D is wrong:** Conflicting instructions don't cause errors or crashes. Claude handles ambiguity by attempting to find a reasonable response, not by failing technically.

---

### Question 50

A consulting firm uses Claude Projects for different clients. Each Project has client-specific instructions and uploaded documents. A new consultant joins and asks: "Can I just use one Project for all my clients to keep things simple?" Why is this a bad idea?

**A.** Claude can only handle one topic per Project and will get confused with multiple clients.

**B.** Mixing client data and instructions in one Project creates cross-contamination risk — Claude might reference Client A's confidential information when working on Client B's tasks, and the instructions for one client may conflict with another's requirements.

**C.** Claude Projects have a strict file size limit that wouldn't accommodate multiple clients.

**D.** It's fine — one Project for everything is the most efficient approach.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Separate Projects for separate clients is a fundamental configuration principle. When all client data is in one Project, Claude's context includes everything — it can inadvertently reference Client A's strategy when answering about Client B, leak confidential pricing between clients, or apply the wrong client's brand guidelines. Each client needs isolated instructions and knowledge sources. This is both a data governance issue and a configuration quality issue.
>
> **Why A is wrong:** Claude can handle multiple topics — the limitation isn't cognitive confusion. The risk is data cross-contamination and instruction conflicts, not Claude's ability to understand multiple subjects.
>
> **Why C is wrong:** While Projects have storage considerations, the primary concern isn't file size — it's data separation and instruction integrity. Even if all files fit, mixing clients is wrong.
>
> **Why D is wrong:** "Simplicity" that creates data leakage risk isn't efficiency — it's negligence. The small effort of maintaining separate Projects prevents potentially serious confidentiality breaches.

---

### Question 51

A team's Claude Project includes system instructions and five uploaded knowledge documents that were added three months ago. The team notices that Claude's answers about company policies are sometimes outdated. What is the most likely cause and fix?

**A.** Claude's model is outdated — the team should wait for the next model update.

**B.** The uploaded knowledge documents contain outdated information that hasn't been updated to reflect recent policy changes. The fix is to replace the stale documents with current versions and review the system instructions for any outdated references.

**C.** Claude is hallucinating about policies — the team should add an instruction saying "Do not make up policy information."

**D.** The context window is too small to hold all five documents, causing Claude to miss some content.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** "Stale configuration" is one of the four causes of bad output. If policy documents uploaded three months ago no longer reflect current policies, Claude will confidently give outdated answers based on its outdated knowledge sources. The fix is straightforward: update the knowledge files to current versions and review system instructions for anything that references old policies. Configuration maintenance is an ongoing responsibility.
>
> **Why A is wrong:** The model version is not the issue — Claude is reading from the uploaded documents, not generating policy information from training data. Even the newest model would give outdated answers if fed outdated documents.
>
> **Why C is wrong:** Claude isn't hallucinating — it's accurately referencing outdated documents. Telling it not to make things up doesn't fix the underlying problem of stale source material. The documents themselves need updating.
>
> **Why D is wrong:** Five documents are well within typical Project capacity. Context window isn't the issue — content staleness is.

---

### Question 52

An associate wants to set up a Claude Project for their team's invoice processing workflow. The system instructions need to tell Claude how to extract data from invoices. Which system instruction is most effective?

**A.** "Be helpful with invoices."

**B.** "You are an invoice processing assistant for Acme Corp. Extract the following fields from every invoice: vendor name, invoice number, date, line items (description, quantity, unit price, total), subtotal, tax, and grand total. Output as a structured table. Flag any invoice where the line item totals do not sum to the subtotal. If a field is missing or illegible, mark it as '[MISSING]' rather than guessing."

**C.** "Process invoices accurately and completely. Make sure to do a good job."

**D.** "Extract data from invoices. Be precise."

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Effective system instructions are specific: they define the role (invoice processing assistant), the exact fields to extract, the output format (structured table), a validation rule (sum check), and error handling ('[MISSING]' rather than guessing). This eliminates ambiguity — every team member using the Project gets consistent, predictable output. This is "create effective system-level instructions."
>
> **Why A is wrong:** "Be helpful with invoices" provides zero operational guidance. Claude doesn't know what fields to extract, what format to use, or how to handle missing data. Vague instructions produce inconsistent output.
>
> **Why C is wrong:** "Accurately and completely" and "do a good job" are empty directives — they describe desired outcomes without providing any operational definition of what accuracy and completeness mean for this specific task.
>
> **Why D is wrong:** Slightly better than A and C but still lacks critical specifics: which fields? What format? What if data is missing? Short instructions aren't inherently bad, but they must be specific. This one is short AND vague.

---

### Question 53

A team uses a Claude Project with a Google Drive connector to access their shared documents. A team member suggests expanding the connector's access from the specific "Marketing Reports" folder to the entire company Google Drive "so Claude can find anything we need." What is the most appropriate response?

**A.** Approve the expansion — broader access means Claude can be more helpful across all tasks.

**B.** Deny the expansion — connectors should follow the principle of least privilege. Keep access scoped to the specific folders and data the team actually needs for their defined workflows, and expand only when a specific new use case justifies it.

**C.** Expand the access but add a system instruction telling Claude to "only look at marketing files."

**D.** Remove the connector entirely since the risk of broad access is too high.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** Least privilege is a core governance principle for connectors. The connector should have access only to the data the team's workflows require — not everything "just in case." Expanding to the entire company Drive exposes HR documents, financial records, legal files, and other sensitive data that the marketing team has no need to process through AI. Expand scope only when a specific, justified use case requires it.
>
> **Why A is wrong:** "More helpful" doesn't justify "more access." Broad access creates unmanaged data exposure. Just because Claude *could* see everything doesn't mean it *should*.
>
> **Why C is wrong:** A system instruction saying "only look at marketing files" is not a security control — it's a suggestion Claude might not perfectly follow. Access controls must be enforced at the connector/permission level, not through prompt instructions. Instructions can be bypassed; scoped permissions cannot.
>
> **Why D is wrong:** Removing the connector entirely is the "wasteful" option. The current scoped access to "Marketing Reports" is working correctly. The right answer is to keep the appropriate access, not eliminate a useful tool because someone suggested expanding it too far.

---

### Question 54

An associate has been using Claude for three months and notices they give the same correction in almost every conversation: "Use bullet points, not paragraphs, for action items." Where should this recurring correction be promoted to?

**A.** The associate should continue correcting it in each conversation — repetition helps Claude learn.

**B.** The system instructions of the Project they work in most, so the rule applies automatically to every conversation in that Project.

**C.** A social media post asking other Claude users if they have the same problem.

**D.** A feature request to Anthropic to change Claude's default formatting behavior.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This is the "promotion" principle: if you're typing the same correction repeatedly in chat, move it to system instructions. A rule like "Always format action items as bullet points, never as paragraphs" in the Project's system instructions eliminates the recurring correction. The fix belongs at the configuration level, not the conversation level. The diagnostic sequence says: "Typing the same correction 3x in chat → move it to SYSTEM INSTRUCTION."
>
> **Why A is wrong:** Claude doesn't "learn" from corrections across conversations (outside of Memory). Each new conversation starts fresh. Repeating the same correction indefinitely is wasted effort when a one-time configuration change solves it.
>
> **Why C is wrong:** This is a personal configuration issue, not a community discussion topic. The solution is within the associate's control — no external input needed.
>
> **Why D is wrong:** This is a personal preference, not a platform bug. Different users and tasks need different formatting. The right solution is to configure your Project to match your preferences, not to ask Anthropic to change the default for everyone.

---

# Domain 7 — Troubleshooting & Optimization (10%)

*6 questions. This domain tests your ability to diagnose why Claude's output is poor, fix it efficiently (cheapest fix first), and optimize workflows over time.*

---

### Question 55

An associate has been using Claude to draft client proposals and the quality has been consistently good for weeks. Suddenly, the last three proposals have been noticeably worse — they miss key client requirements and include irrelevant sections. Nothing about the associate's prompting approach has changed. What is the most logical first diagnostic step?

**A.** Switch to a more capable model immediately — the current model is no longer performing well.

**B.** Check whether the conversation context has become overloaded — has the associate been working in a very long conversation, or have the Project's knowledge sources or system instructions been changed recently?

**C.** Contact Anthropic support to report a model performance regression.

**D.** Rewrite the proposal manually and stop using Claude for proposals.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** The diagnostic sequence says: start with the cheapest, most likely cause. When quality degrades suddenly after a period of consistency, and the prompt hasn't changed, the two most likely culprits are: (1) context overload — the conversation has grown too long and earlier instructions are falling out of the window, or (2) stale/changed configuration — someone updated the Project's knowledge files or system instructions. Check session length first (cheap), then check configuration (still cheap), before escalating to model changes or support tickets.
>
> **Why A is wrong:** Jumping to "switch models" skips the cheaper diagnostic steps. If the cause is context overload, a new model in the same overloaded conversation will produce the same bad output. If someone changed the Project configuration, a different model will still read the wrong instructions.
>
> **Why C is wrong:** Contacting support is premature. Most quality issues are caused by local factors (context, configuration, prompts) — not platform-wide model regressions. Diagnose locally before escalating externally.
>
> **Why D is wrong:** Abandoning Claude for proposals because of three bad outputs is an overreaction. The tool worked well for weeks — something changed. Diagnose and fix the change rather than abandoning a proven workflow.

---

### Question 56

A team uses Claude to generate weekly market summaries. The summaries were accurate when the Project was set up two months ago, but the team has noticed the summaries now include references to a product line the company discontinued last month. What is the root cause?

**A.** Claude is hallucinating product information from its general training data.

**B.** The Project's knowledge sources still contain documentation about the discontinued product line — a stale configuration issue. The fix is to remove or update the outdated product references in the uploaded knowledge files.

**C.** The market summary prompt needs to be more specific about which products to include.

**D.** Claude's model needs to be retrained on the company's current product portfolio.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This is a textbook stale configuration problem. Claude is referencing the discontinued product because the Project's knowledge files still describe it as active. Claude is doing exactly what it was configured to do — the configuration is wrong, not the model. The fix is to update the knowledge sources to remove or flag the discontinued product line. This is "inform, maintain, and update Claude configurations, knowledge sources, and instructions."
>
> **Why A is wrong:** Claude isn't hallucinating — it's accurately reading outdated documents. The information exists in the Project's knowledge base; it's just no longer current. This is a configuration problem, not a hallucination problem.
>
> **Why C is wrong:** While a more specific prompt could exclude the discontinued product, this is a workaround, not a fix. If the knowledge files still contain outdated product information, it will cause problems in other contexts too. Fix the source, not just the symptom.
>
> **Why D is wrong:** Claude models aren't retrained on individual company data. The solution is to update the Project's knowledge sources — the mechanism that already exists for keeping Claude informed about company-specific information.

---

### Question 57

An associate's Claude output for a data analysis task is consistently too shallow — it provides surface-level observations but never the depth of insight the associate needs. The associate has tried the same prompt five times with similar results. Which troubleshooting approach follows the correct diagnostic sequence?

**A.** Switch to the most expensive model and try the same prompt.

**B.** First, improve the prompt — add specific analysis frameworks, define what "depth" means (e.g., "identify root causes, not just symptoms; quantify the impact; compare to historical trends"), and provide an example of the depth expected. If that doesn't work, then check whether the model tier matches the complexity of the analysis.

**C.** Create a new Claude Project specifically for data analysis, even though the current setup works for other tasks.

**D.** Accept that Claude cannot perform deep analysis and do it manually.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** The diagnostic sequence is: prompt first, then session, then feature/model, then configuration, then task redesign — cheapest fix first. The associate has tried the same prompt five times, but "the same prompt" is the problem. Repeating a bad prompt doesn't improve results. Step 1 is to fix the prompt: define what depth means, provide analytical frameworks, give an example of good output. Only if an improved prompt still produces shallow results should the associate consider whether the model tier is insufficient for the task's complexity.
>
> **Why A is wrong:** Jumping to the most expensive model skips Step 1 (fix the prompt). A more capable model given the same vague prompt may produce slightly better shallow analysis — still not the depth needed. The prompt is under-specified, and that's the cheapest fix.
>
> **Why C is wrong:** Creating a new Project doesn't address the prompt quality issue. If the prompt is shallow, a new Project with the same shallow prompt produces the same shallow output. The problem is in the prompt, not the Project configuration.
>
> **Why D is wrong:** Giving up after five attempts with the same bad prompt is premature. The associate hasn't tried the cheapest fix yet — improving the prompt. Claude can perform deep analysis when given the right direction.

---

### Question 58

A team lead notices that different team members are getting inconsistent results from the same Claude Project. One person gets well-structured outputs while another gets disorganized responses, even though they're working on similar tasks. What is the most likely cause?

**A.** Claude intentionally varies output quality between different users.

**B.** The team members are writing their prompts differently — the one getting good results is providing clearer structure, context, and constraints, while the other is writing vague requests that the system instructions alone can't compensate for.

**C.** The Project configuration is corrupted and needs to be rebuilt.

**D.** One team member is using a different model without realizing it.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** System instructions set a baseline, but individual prompt quality still matters. A well-structured prompt within a well-configured Project produces strong output. A vague prompt in the same Project produces weaker output because system instructions provide standing rules, not complete task specifications. The fix is to help the struggling team member write better prompts — or to add more structure to the system instructions to compensate.
>
> **Why A is wrong:** Claude doesn't vary quality based on the user's identity. Output differences are driven by input differences — different prompts produce different results, even in the same Project.
>
> **Why C is wrong:** If the Project were corrupted, both users would get bad results. The fact that one user gets good output confirms the Project configuration is working — the variable is the prompts.
>
> **Why D is wrong:** Within a Claude Project, users typically share the same model configuration. While this is worth checking, the most common cause of inconsistent results between users is prompt quality differences, not accidental model switching.

---

### Question 59

An associate has optimized a workflow where Claude drafts customer follow-up emails after sales calls. The process works well, but the associate notices they add the same two sentences to every email Claude generates — a specific legal disclaimer and a meeting booking link. What is the best optimization?

**A.** Continue adding the sentences manually — it only takes 30 seconds each time.

**B.** Add the legal disclaimer and meeting booking link to the Project's system instructions so Claude includes them automatically in every follow-up email draft.

**C.** Create a text file on their desktop with the two sentences so they can copy-paste faster.

**D.** Ask Claude to memorize the two sentences so it remembers them next time.

> [!success]- Show Answer
> **Correct: B**
>
> **Why B is correct:** This is the promotion principle in action. A repeated manual step that happens every single time belongs in the configuration, not in the human's workflow. Adding the disclaimer and booking link to the system instructions means Claude includes them automatically — eliminating 30 seconds of manual work on every email and removing the risk of forgetting them. "Same instruction in every conversation → move it to system instruction."
>
> **Why A is wrong:** "It only takes 30 seconds" ignores the cumulative cost and the risk of forgetting. Over 20 emails a week, that's 10+ minutes of avoidable repetitive work. More importantly, the legal disclaimer could be forgotten — automating it in the instructions eliminates that compliance risk.
>
> **Why C is wrong:** A desktop text file is a workaround, not a solution. It still requires manual copy-pasting and doesn't eliminate the risk of forgetting. The automation should happen inside the workflow tool, not outside it.
>
> **Why D is wrong:** Claude's Memory feature stores personal preferences that persist across conversations, but a legal disclaimer for a team workflow shouldn't live in one person's memory settings. It belongs in the Project's system instructions where it's consistent for all team members and explicitly documented.

---

### Question 60

A department wants to measure whether their Claude integration is actually improving efficiency. They implemented Claude into three workflows six months ago. Which approach to optimization assessment is most appropriate? **(Select TWO)**

**A.** Compare current workflow completion times and output quality against the baseline measurements taken before Claude was integrated.

**B.** Ask team members whether they "feel" the workflow is faster, and rely on that qualitative feedback alone.

**C.** Count the number of Claude conversations the team has per week as the primary success metric.

**D.** Identify specific friction points that remain in the current Claude-assisted workflow — steps where team members still do manual workarounds, repeat corrections, or bypass the AI — and target those for the next round of optimization.

> [!success]- Show Answer
> **Correct: A and D**
>
> **Why A is correct:** Measuring improvement requires a baseline. If the team recorded how long workflows took and the quality of outputs before Claude was integrated, they can compare directly against current performance. Objective metrics — time saved, error rates reduced, output volume increased — provide real evidence of whether the integration is working. This is "optimize workflows for efficiency and effectiveness."
>
> **Why D is correct:** Optimization is ongoing, not one-time. After six months, the team should actively identify remaining friction: Where are people still doing manual workarounds? Where do they repeat the same corrections? Where do they bypass Claude entirely? Each friction point is an optimization opportunity — a prompt to improve, an instruction to add, a workflow step to redesign. This forward-looking assessment drives continuous improvement.
>
> **Why B is wrong:** Qualitative feelings are useful as a supplement but unreliable as the sole measure. People may "feel" faster while actually spending the same time, or feel neutral while measurably saving hours. Optimization assessment needs objective data, not just vibes.
>
> **Why C is wrong:** Conversation count measures adoption, not effectiveness. A team could have 200 Claude conversations a week and still be less efficient if they're using Claude for the wrong tasks or wasting time on poor prompts. Volume of use is not the same as value of use.

---

---

# Scoring & Self-Assessment

## Quick Answer Key

| Q | Answer | Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|---|--------|
| 1 | C | 16 | C | 31 | C | 46 | B |
| 2 | B | 17 | C | 32 | B, D | 47 | A, C |
| 3 | B | 18 | B | 33 | B | 48 | B |
| 4 | C | 19 | B, D | 34 | C | 49 | C |
| 5 | A, C | 20 | B | 35 | B | 50 | B |
| 6 | C | 21 | B | 36 | B | 51 | B |
| 7 | B | 22 | B | 37 | C | 52 | B |
| 8 | B | 23 | C | 38 | C | 53 | B |
| 9 | A | 24 | B | 39 | B | 54 | B |
| 10 | B | 25 | B | 40 | B | 55 | B |
| 11 | B | 26 | A, C | 41 | B | 56 | B |
| 12 | B | 27 | C | 42 | C | 57 | B |
| 13 | B | 28 | B | 43 | B | 58 | B |
| 14 | C | 29 | B | 44 | B | 59 | B |
| 15 | B | 30 | B | 45 | B | 60 | A, D |

## Domain Score Tracker

*After completing the exam, calculate your percentage per domain. Compare against the 72% passing benchmark.*

| Domain | Questions | Your Correct | Total | Your % | Target |
|--------|-----------|-------------|-------|--------|--------|
| **D2** Output Evaluation & Validation | Q1–Q13 | ___/13 | 13 | ___% | 72%+ |
| **D4** Workflow Integration & Solution Design | Q14–Q23 | ___/10 | 10 | ___% | 72%+ |
| **D6** Governance, Risk & Responsible Use | Q24–Q32 | ___/9 | 9 | ___% | 72%+ |
| **D1** Prompting & Task Execution | Q33–Q40 | ___/8 | 8 | ___% | 72%+ |
| **D3** Product & Model Selection | Q41–Q47 | ___/7 | 7 | ___% | 72%+ |
| **D5** Configuration & Knowledge Management | Q48–Q54 | ___/7 | 7 | ___% | 72%+ |
| **D7** Troubleshooting & Optimization | Q55–Q60 | ___/6 | 6 | ___% | 72%+ |
| **TOTAL** | | ___/60 | 60 | ___% | **72%** |

## Interpreting Your Score

| Score Range | Assessment | Action |
|-------------|-----------|--------|
| **50+ (83%+)** | Strong — likely to pass comfortably | Light review of any missed questions, focus on weak domains |
| **43–49 (72–82%)** | Borderline — could go either way | Intensive review of missed questions, re-study weak domains |
| **36–42 (60–71%)** | Below passing — need more preparation | Re-study the heaviest domains (D2, D4, D6), redo practical exercises |
| **Below 36 (<60%)** | Significant gaps — need structured study | Follow the full 17-day study plan from `03 daily-checklist.md` |

## Key Patterns to Remember

> [!tip] The Six Principles That Solve Most Questions
> 1. **Verify before trusting** — always check output against authoritative sources
> 2. **Humans stay accountable** — AI doing work does not transfer responsibility
> 3. **Match tool to task** — right model, right feature, right scope
> 4. **Protect data** — anonymize first, follow policy, least privilege
> 5. **Escalate appropriately** — know when human/architect/developer is needed
> 6. **Don't abandon the task** — find a safe way to proceed, don't just stop

> [!tip] The Elimination Strategy
> 1. Kill the **reckless** option (trusts AI blindly, skips verification)
> 2. Kill the **wasteful** option (abandons the task, over-engineers)
> 3. Between survivors, pick the one that **preserves human judgment while still using AI**
