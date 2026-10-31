---
type: Document
title: "NotebookLM Study Notebooks"
description: "Ready-made NotebookLM notebooks for each of the seven CCAO-F domains, with starter prompts to practise exam-style questions or learn a domain step by step."
status: stable
generated:
  by: human:shazilk-dev
  at: "2026-10-31T02:43:39Z"
ksor:
  audience: [public]
  owner: human:shazilk-dev
  approval:
    by: human:shazilk-dev
    at: "2026-10-31T02:43:42Z"
order: 998
sources:
  - id: saad-linkedin
    resource: "https://www.linkedin.com/posts/muhammad-saad-bandukda_giaic-pcaof-ccaof-ugcPost-7520494996928540672-PTzr/"
    title: "Muhammad Saad Bandukda — LinkedIn video on using the NotebookLM notebooks"
---

Besides reading this guide, you can practise inside NotebookLM. There is one notebook for each exam domain. Each already holds that domain's material, so you open it, paste a starter prompt, and the notebook tests you or teaches you.

## Domain notebooks

Open the notebook for the domain you want to work on. Start with D2, D4 and D6: together they are 52% of the exam.

| Domain | Topic                                    | Weight | Notebook                                                                                    |
| ------ | ---------------------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| D1     | Prompting and Task Execution             | 14%    | [Open Domain 1](https://notebook.google.com/notebook/b2aeaf38-50c3-4754-8066-a07552e758b5) |
| D2     | Output Evaluation and Validation         | 21%    | [Open Domain 2](https://notebook.google.com/notebook/2b448354-c652-44d2-ae6a-431429d61a61) |
| D3     | Product and Model Selection              | 12%    | [Open Domain 3](https://notebook.google.com/notebook/9b84a340-1f6f-46d1-b4a7-4c3514318e4d) |
| D4     | Workflow Integration and Solution Design | 16%    | [Open Domain 4](https://notebook.google.com/notebook/62554388-833f-471c-9b51-9b97e2d365e7) |
| D5     | Configuration and Knowledge Management   | 12%    | [Open Domain 5](https://notebook.google.com/notebook/ad9d9477-f6de-4cdd-bcd8-9833ab331214) |
| D6     | Governance, Risk and Responsible Use     | 15%    | [Open Domain 6](https://notebook.google.com/notebook/ec64e749-e9d6-4ba4-ba01-a75626951938) |
| D7     | Troubleshooting and Optimization         | 10%    | [Open Domain 7](https://notebook.google.com/notebook/7b0aed18-05e1-4f04-8b08-e4725091bf31) |

## Practise with exam-style questions

Paste this prompt as your first message in a domain notebook, and replace `[DOMAIN_NUMBER]` with the domain's number. It asks one exam-style question at a time, tracks your score and re-tests your weak spots.

```text
Act as an official-style PCAO-F/CCAO-F exam question setter. Using only the uploaded domain resources, PCAO-F/CCAO-F exam guides, and MCQ creation guide, generate 10 challenging, exam-realistic, scenario-based MCQs for the selected Domain [DOMAIN_NUMBER].
Align questions with the relevant exam objectives, domain weightings, and MCQ creation guidelines.
Test practical application, decision-making, tricky distinctions, and common misconceptions rather than simple definitions.
Provide four options (A–D) with exactly one best answer. Do not reveal the answer before I respond.
After each response, explain the correct answer, clarify the underlying concept, and explain why the other options are incorrect.
Track my score, identify weak concepts, and test them with new questions.
Ask one question at a time and maintain realistic exam difficulty.
```

## Learn a topic deeply first

If a domain is new to you, use this prompt instead. It teaches one concept at a time and tests you with scenario questions before moving on.

```text
Teach me this document deeply so I can build a strong mental model, not just memorize or summarize it.
Teach one concept at a time in very simple language.
For each concept:
Explain the idea simply.
Give me a clear analogy that makes the concept easy to remember.
Explain what is actually happening technically, but keep it appropriate for a foundational learner.
Give 2–3 practical AI examples.
Explain common misconceptions and mistakes.
Connect it to LLMs, AI agents, tools, RAG, MCP, Projects, Artifacts, or coding agents only when genuinely relevant. Do not force these connections.
Explain how this concept could appear in a professional workplace scenario.
Identify the clues or keywords in a scenario that should make me recognize this concept.
Then test me
After teaching the concept, give me 3–5 original scenario-based questions rather than only generic knowledge questions. use the mcqs creation guide from the source The scenarios should resemble the professional situations described in the official CCAO-F exam guide, including roles such as:
Business analyst
Project manager
Operations lead
Marketing/communications professional
HR professional
Educator
Consultant
Knowledge worker
Make the questions require me to apply the concept, not simply recall its definition.
Use a mixture of:
Multiple-choice questions
Multiple-response questions
For multiple-response questions, clearly state exactly how many answers I should select.
Make the answer choices realistic. Include plausible distractors that represent common misunderstandings.
Do not reveal the answer before I respond.
After I answer:
Tell me whether I am correct.
Explain why the correct answer is correct.
Explain why the other choices are weaker or incorrect.
Identify the reasoning pattern I should have noticed.
If I am wrong, diagnose whether the problem was:
Concept misunderstanding
Business terminology/comprehension
Scenario interpretation
Examiner-intent recognition
Confusion between similar concepts
Poor elimination of answer choices
Careless mistake
If I misunderstand the concept, explain it again using a different analogy or example.
Important
Do not move to the next concept until I demonstrate that I understand the current one.
The goal is not merely to get questions correct. The goal is to learn how to recognize and apply the concept when it appears inside an unfamiliar workplace scenario.
Use the provided source as the primary authority. If you add information beyond the source, clearly label it as additional information.
Start with a very short overview, then teach Concept 1.
```

## Watch: how to use the notebooks

A short walkthrough of using these notebooks for exam preparation.

[Play the LinkedIn walkthrough](https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7520494996928540672 "embed")

The notebooks, the prompts above and this walkthrough video were shared by Muhammad Saad Bandukda.[^saad-linkedin]
