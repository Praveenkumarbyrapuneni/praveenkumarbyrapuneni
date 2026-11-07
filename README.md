<div align="center">

<img src="assets/hero.svg" width="100%" alt="Praveen Kumar, AI engineer. I build LLM products end to end, agent to database. An animated diagram shows a request moving from a web app through an API to a Claude agent, which calls RAG on Qdrant, MCP tools and Postgres, and the response travels back." />

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/praveenkumar-byrapuneni/)
[![Email](https://img.shields.io/badge/Email_me-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:praveenkumarbyrapuneni@gmail.com)
[![Profile Views](https://komarev.com/ghpvc/?username=Praveenkumarbyrapuneni&style=for-the-badge&color=33425F&label=PROFILE+VIEWS)](https://github.com/Praveenkumarbyrapuneni)

</div>

I'm an AI engineer. I work hands-on with LLMs every day: Claude agents, MCP servers, RAG and fine-tuned models, built with Claude Code. I also build the rest of the stack they need: the backend, the architecture, the integrations and the app on top. Most of my work lives in private client repos. Below is what is public.

<div align="center">
<img src="assets/terminal.svg" width="100%" alt="Terminal showing my GitHub contributions over the last 30 days and my most recently pushed public repos. Refreshed daily by a GitHub Action." />
<br/><sub>Refreshed daily by a Node.js GitHub Action in this repo, using the GitHub API.</sub>
</div>

## What I build

<table>
<tr>
<td width="33%" valign="top">

**AI agents and MCP**

Claude agents that call real tools through MCP servers I write: business APIs, databases and internal systems. Tool design, prompt and context engineering, evals and guardrails, all built with Claude Code.

<sub>Claude API, Claude Code, MCP, LangGraph, AWS Bedrock, OpenAI</sub>

</td>
<td width="33%" valign="top">

**RAG and fine-tuning**

Multi-tenant RAG over 10M+ documents with hybrid retrieval, reranking and citations, and no cross-tenant leakage. Qwen3 fine-tuned with QLoRA, served on vLLM and A/B tested against GPT-4o.

<sub>Qdrant, Cohere, HuggingFace, QLoRA, vLLM, MLflow</sub>

</td>
<td width="33%" valign="top">

**Full stack around the AI**

The backend, architecture and automation that put a model into a real product: APIs, data pipelines, queues, workflows and the app people use.

<sub>Python, FastAPI, Node.js, PostgreSQL, Redis, Docker, AWS, n8n</sub>

</td>
</tr>
</table>

## Featured systems

### [enterprise-rag-agents](https://github.com/Praveenkumarbyrapuneni/enterprise-rag-agents)

Document intelligence for financial institutions. It answers questions grounded in live transaction data and indexed policy documents, with inline citations and a compliance audit log.

<details>
<summary><b>Show the retrieval pipeline</b></summary>

```
SEC filings, earnings reports, policy docs, live transactions
                        ↓
          Query classification (Claude Haiku)
                        ↓
        BM25 sparse  +  dense vectors (Cohere)
        Reciprocal rank fusion → Cohere rerank
        MMR dedup → parent-child chunk expansion
                        ↓
    Claude Sonnet synthesis → Claude Haiku evaluation
                        ↓
       Grounded answer + inline citations + audit log
```

- HyDE is turned off for numerical queries
- Tenant isolation is enforced at the vector layer
- 14 security vulnerabilities found and fixed
- Moves from laptop to AWS with no code changes

</details>

### [llm-fine-tuning](https://github.com/Praveenkumarbyrapuneni/llm-fine-tuning)

Qwen3 fine-tuned on financial data with QLoRA: three tasks, three LoRA adapters, one base model.

<details>
<summary><b>Show the training pipeline</b></summary>

```
76,000 financial headlines + earnings transcripts + SEC filings
                        ↓
       Data prep → label normalization → Qwen3 chat format
                        ↓
        Qwen3 in 4-bit (QLoRA) + blank LoRA adapter
                        ↓
           3 epochs, lr=2e-4, rank=16, GCP GPU
                        ↓
        Accuracy eval → vLLM serving → FastAPI endpoint
                        ↓
       A/B test: fine-tuned Qwen3 vs GPT-4o on cost and speed
```

- 5 GB of GPU memory instead of 160 GB for a full fine-tune
- Apache 2.0, so it is clean for commercial use

</details>

## How I design a system

<details>
<summary><b>The questions every design has to answer before I write code</b></summary>

<br/>

1. What breaks this at 10x load?
2. What happens when a dependency goes down?
3. Where does it waste money if it keeps running wrong?
4. Where does it leak data if it is misconfigured?
5. What does the rollback look like in production?

The approach that survives the most of these at the lowest cost wins. I pair with Claude Code throughout: research, design review, implementation and a security pass before anything ships.

</details>

## Stack

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![AWS Bedrock](https://img.shields.io/badge/Bedrock-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Lambda](https://img.shields.io/badge/Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white)
![GCP](https://img.shields.io/badge/GCP-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-D4A27F?style=flat-square&logo=anthropic&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude_Code-D4A27F?style=flat-square&logo=anthropic&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-191919?style=flat-square&logo=modelcontextprotocol&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![Qdrant](https://img.shields.io/badge/Qdrant-DC244C?style=flat-square)
![Cohere](https://img.shields.io/badge/Cohere-39594C?style=flat-square)
![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![vLLM](https://img.shields.io/badge/vLLM-30A2FF?style=flat-square)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white)

</div>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Praveenkumarbyrapuneni/praveenkumarbyrapuneni/output/github-contribution-grid-snake-dark.svg" />
  <img alt="A snake eats my contribution graph. Regenerated daily." src="https://raw.githubusercontent.com/Praveenkumarbyrapuneni/praveenkumarbyrapuneni/output/github-contribution-grid-snake.svg" width="100%" />
</picture>
</div>
