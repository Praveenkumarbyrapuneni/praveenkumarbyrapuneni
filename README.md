<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:0d1117,50:001a33,100:0d1117&height=200&section=header&text=PRAVEEN%20KUMAR&fontSize=60&fontColor=00D9FF&animation=fadeIn&fontAlignY=55&desc=AI%20%2F%20ML%20Engineer&descSize=22&descAlignY=75&descFontColor=7FDBFF" />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=22&pause=1000&color=00D9FF&center=true&vCenter=true&width=700&lines=RAG+Systems+%7C+LLM+Infrastructure+%7C+AWS+Bedrock;Multi-tenant+Financial+AI+Pipelines;LangGraph+%7C+Qdrant+%7C+Cohere+%7C+FastAPI;Building+AI+that+works+in+production.)](https://git.io/typing-svg)

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/praveen-kumar-byrapuneni-a8b043208/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Praveenkumarbyrapuneni)
[![Email](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:praveenkumarbyrapuneni@gmail.com)
[![Profile Views](https://komarev.com/ghpvc/?username=Praveenkumarbyrapuneni&style=for-the-badge&color=00D9FF&label=PROFILE+VIEWS)](https://github.com/Praveenkumarbyrapuneni)

</div>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## ⚡ About

I build production-grade AI systems for financial institutions — multi-tenant RAG pipelines, voice agents, and LLM-powered automation. Every system I ship is designed for real scale: 10M+ documents, concurrent tenants, zero data leakage between clients.

> *Not demos. Not prototypes. Systems that survive production.*

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

---

## 🚀 Featured Project

<div align="center">

[![Enterprise RAG](https://github-readme-stats.vercel.app/api/pin/?username=Praveenkumarbyrapuneni&repo=enterprise-rag-agents&theme=github_dark&hide_border=true&title_color=00D9FF&icon_color=00D9FF)](https://github.com/Praveenkumarbyrapuneni/enterprise-rag-agents)

</div>

Production-grade document intelligence platform built for financial institutions at Discover/JPMorgan scale.

```
SEC Filings · Earnings Reports · Policy Docs · Live Transaction Data
           ↓
   Query Classification (Claude Haiku)
           ↓
   ┌───────────────────────────────┐
   │  BM25 Sparse  +  Dense Vector │  ← Hybrid Retrieval via Qdrant
   │  Reciprocal Rank Fusion       │
   │  Cohere Reranking (top 20→8)  │
   │  MMR Deduplication (8→6)      │
   └───────────────────────────────┘
           ↓
   Parent-Child Chunk Expansion (PostgreSQL)
           ↓
   Claude Sonnet Synthesis  →  Claude Haiku Evaluation
           ↓
   Grounded Answer + Inline Citations
```

**Key decisions:**
- HyDE disabled for numerical queries — prevents hallucinated numbers from biasing retrieval
- Tenant isolation enforced at vector query layer — no exceptions, not even in fallbacks
- RAGAS rejected (83.5% failure on FinanceBench) — custom Haiku judge inside AWS Bedrock
- 14 security vulnerabilities audited and fixed — JWT revocation, account takeover prevention, prompt injection guards
- Laptop → AWS: zero code changes, only `.env` changes

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

**Backend & Infrastructure**

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Celery](https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=celery&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**Cloud — AWS**

![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Lambda](https://img.shields.io/badge/Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)
![S3](https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![RDS](https://img.shields.io/badge/RDS-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white)

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

---

## 📊 GitHub Stats

<div align="center">

<img height="180" src="https://github-readme-stats.vercel.app/api?username=Praveenkumarbyrapuneni&show_icons=true&theme=github_dark&hide_border=true&title_color=00D9FF&icon_color=00D9FF&text_color=7FDBFF&bg_color=0d1117&count_private=true&include_all_commits=true" />

<img height="180" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Praveenkumarbyrapuneni&layout=compact&theme=github_dark&hide_border=true&title_color=00D9FF&text_color=7FDBFF&bg_color=0d1117&langs_count=6" />

</div>

<div align="center">

<img src="https://github-readme-streak-stats.herokuapp.com/?user=Praveenkumarbyrapuneni&theme=github-dark-blue&hide_border=true&stroke=00D9FF&ring=00D9FF&fire=FF6B35&currStreakLabel=00D9FF" />

</div>

<div align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=Praveenkumarbyrapuneni&bg_color=0d1117&color=00D9FF&line=00D9FF&point=7FDBFF&area=true&hide_border=true" />

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

---

<div align="center">

**Open to AI/ML Engineer roles.**
If you're working on production RAG, retrieval systems, or LLM infrastructure — let's connect.

[![LinkedIn](https://img.shields.io/badge/Let's_Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/praveen-kumar-byrapuneni-a8b043208/)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:001a33,100:0d1117&height=100&section=footer" />

</div>