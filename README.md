<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:1a1a2e&height=120&section=header" />

# Praveen Kumar Byrapuneni

**AI/ML Engineer — RAG Systems · LLM Infrastructure · AWS Bedrock**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/praveen-kumar-byrapuneni)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Praveenkumarbyrapuneni)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:praveenkumarbyrapuneni@gmail.com)

</div>

---

## About

I build production-grade AI systems for financial institutions — multi-tenant RAG pipelines, voice agents, and LLM-powered automation. Every system I ship is designed for real scale: 10M+ documents, concurrent tenants, zero data leakage between clients.

---

## Featured Project

### [Enterprise RAG System](https://github.com/Praveenkumarbyrapuneni/enterprise-rag-agents)

Production-grade document intelligence platform for financial institutions. Ingests SEC filings, earnings reports, and policy documents. Answers questions grounded in both live transaction data and indexed documents — with inline citations.

**Retrieval:** Hybrid BM25 sparse + Cohere dense vectors, fused via Reciprocal Rank Fusion → Cohere reranking → MMR deduplication → parent-child chunk expansion

**Pipeline:** LangGraph multi-agent orchestration → query classification → hybrid retrieval → Claude Sonnet synthesis → Claude Haiku evaluation

**Infrastructure:** AWS Bedrock · Qdrant (TurboQuant 4-bit, ~1% recall loss at 8x compression) · PostgreSQL · Redis · Celery · FastAPI · Docker → AWS (zero code changes)

**Security:** JWT authentication with revocation · tenant isolation enforced at vector query layer · 14 vulnerabilities audited and fixed · SEC/FINRA compliance audit log

---

## Tech Stack

**AI/ML**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-000000?style=flat&logo=langchain&logoColor=white)
![AWS Bedrock](https://img.shields.io/badge/AWS_Bedrock-FF9900?style=flat&logo=amazonaws&logoColor=white)
![Qdrant](https://img.shields.io/badge/Qdrant-DC244C?style=flat&logo=qdrant&logoColor=white)
![Cohere](https://img.shields.io/badge/Cohere-39594C?style=flat&logoColor=white)

**Backend & Infrastructure**

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=flat&logo=amazonaws&logoColor=white)

---

## GitHub Stats

<div align="center">

<img height="160" src="https://github-readme-stats.vercel.app/api?username=Praveenkumarbyrapuneni&show_icons=true&theme=github_dark&hide_border=true&count_private=true" />
<img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Praveenkumarbyrapuneni&layout=compact&theme=github_dark&hide_border=true" />

</div>

---

<div align="center">

Open to **AI/ML Engineer** roles. Building in public.

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,100:0d1117&height=80&section=footer" />

</div>
