<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:0d1117,50:001a33,100:0d1117&height=200&section=header&text=PRAVEEN%20KUMAR&fontSize=60&fontColor=00D9FF&animation=fadeIn&fontAlignY=55&desc=AI%20Engineer&descSize=24&descAlignY=75&descFontColor=7FDBFF" />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&pause=1000&color=00D9FF&center=true&vCenter=true&width=750&lines=RAG+Systems+%7C+LLM+Infrastructure+%7C+AWS+Bedrock;Multi-tenant+Pipelines+%7C+LangGraph+%7C+Qdrant;LLM+Fine-Tuning+%7C+QLoRA+%7C+Qwen3;Workflow+Automation+%7C+AI+Integrations;Production+AI.+Not+demos.)](https://git.io/typing-svg)

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/praveen-kumar-byrapuneni-a8b043208/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Praveenkumarbyrapuneni)
[![Email](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:praveenkumarbyrapuneni@gmail.com)
[![Profile Views](https://komarev.com/ghpvc/?username=Praveenkumarbyrapuneni&style=for-the-badge&color=00D9FF&label=PROFILE+VIEWS)](https://github.com/Praveenkumarbyrapuneni)

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## ⚡ About

Building production AI systems — multi-tenant RAG pipelines, LLM fine-tuning, and AI integrations embedded in client products. Every system designed for real scale, real clients, and zero tolerance for prototypes that don't survive production.

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

---

## 🧠 What I Build

<table>
<tr>
<td width="33%" valign="top">

### 🔍 RAG & Document Intelligence
Multi-tenant financial RAG pipelines. Hybrid BM25 + dense retrieval, LangGraph orchestration, hierarchical chunking, custom LLM evaluation. Designed for 10M+ documents, millions of tenants, zero cross-tenant data leakage.

**Stack:** Python · LangGraph · Qdrant · Cohere · AWS Bedrock · PostgreSQL · Redis · FastAPI

</td>
<td width="33%" valign="top">

### ⚙️ AI Automation & Integrations
End-to-end AI workflows connecting LLMs, client systems, and external APIs. Campaigns, data pipelines, content automation, and LLM-powered features embedded directly in client products.

**Stack:** n8n · Docker · Python · AWS Lambda · REST APIs · Claude · GPT-4

</td>
<td width="33%" valign="top">

### 🧬 LLM Fine-Tuning
Fine-tuning open-source LLMs on domain-specific financial data using QLoRA. Three tasks: sentiment analysis, earnings call summarization, SEC filing Q&A. Full pipeline — data prep, QLoRA training, evaluation, vLLM serving, FastAPI, A/B testing vs GPT-4o.

**Stack:** Python · HuggingFace · QLoRA · LoRA · vLLM · FastAPI · MLflow · GCP

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

---

## 🚀 Featured — Enterprise RAG System

**[→ github.com/Praveenkumarbyrapuneni/enterprise-rag-agents](https://github.com/Praveenkumarbyrapuneni/enterprise-rag-agents)**

Production-grade document intelligence for financial institutions. Answers questions grounded in both live transaction data and indexed policy documents — with inline source citations and compliance audit logs.

```
SEC Filings · Earnings Reports · Policy Docs · Live Transactions
                        ↓
          Query Classification (Claude Haiku)
                        ↓
        BM25 Sparse  +  Dense Vector (Cohere)
        Reciprocal Rank Fusion → Cohere Rerank
        MMR Dedup → Parent-Child Chunk Expansion
                        ↓
    Claude Sonnet Synthesis → Claude Haiku Evaluation
                        ↓
       Grounded Answer + Inline Citations + Audit Log
```

`HyDE disabled for numerical queries` · `Tenant isolation at vector layer` · `14 security vulnerabilities fixed` · `Laptop → AWS: zero code changes`

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

---

## 🚀 Featured — Finance LLM Fine-Tuning

**[→ github.com/Praveenkumarbyrapuneni/llm-fine-tuning](https://github.com/Praveenkumarbyrapuneni/llm-fine-tuning)**

Fine-tuning Qwen3 on financial data using QLoRA — 3 tasks, 3 separate LoRA adapters, 1 base model. The same pipeline JPMorgan, Goldman Sachs, and Morgan Stanley run internally — built open-source from scratch.

```
76,000 Financial Headlines + Earnings Transcripts + SEC Filings
                        ↓
       Data prep → label normalization → Qwen3 chat format
                        ↓
        Qwen3 in 4-bit (QLoRA) + blank LoRA adapter
                        ↓
           3 Epochs · lr=2e-4 · rank=16 · GCP GPU
                        ↓
        Accuracy eval → vLLM serving → FastAPI endpoint
                        ↓
       A/B Test: Fine-tuned Qwen3 vs GPT-4o on cost + speed
```

`5GB GPU memory vs 160GB full fine-tune` · `3 adapters, 1 base model` · `Apache 2.0 — clean commercial use`

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

---

## 🛠️ Tech Stack

<div align="center">

**AI / ML**

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-000000?style=for-the-badge&logo=langchain&logoColor=white)
![AWS Bedrock](https://img.shields.io/badge/AWS_Bedrock-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Claude](https://img.shields.io/badge/Claude_AI-D4A27F?style=for-the-badge&logo=anthropic&logoColor=white)
![Cohere](https://img.shields.io/badge/Cohere-39594C?style=for-the-badge&logoColor=white)
![Qdrant](https://img.shields.io/badge/Qdrant-DC244C?style=for-the-badge&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)
![vLLM](https://img.shields.io/badge/vLLM-000000?style=for-the-badge&logoColor=white)
![QLoRA](https://img.shields.io/badge/QLoRA-7C3AED?style=for-the-badge&logoColor=white)

**Automation & Backend**

![n8n](https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**Cloud**

![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Lambda](https://img.shields.io/badge/Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)
![S3](https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![RDS](https://img.shields.io/badge/RDS-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white)
![KMS](https://img.shields.io/badge/KMS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![GCP](https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

---

<div align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=Praveenkumarbyrapuneni&bg_color=0d1117&color=00D9FF&line=00D9FF&point=7FDBFF&area=true&hide_border=true" />

</div>

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:001a33,100:0d1117&height=100&section=footer" />
</div>
