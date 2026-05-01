<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0f0f,100:1a1a2e&height=160&section=header&text=Praveen%20Kumar&fontSize=38&fontColor=fff&animation=fadeIn&fontAlignY=38&desc=AI%20Automation%20Engineer%20·%20Systems%20Architect&descAlignY=58&descSize=14" width="100%" />

</div>

<br/>

```
I build systems that learn, improve, and run themselves.
Not demos. Not wrappers. Infrastructure that compounds.
```

<br/>

---

## Operating System

> A self-improving AI OS built on Claude Code — the only one of its kind.

The architecture most people don't build:

```
4-Tier Memory Hierarchy
  Tier 4 — OS Global     ~/.claude/memory/os/
            Patterns and mistakes that apply everywhere. Loaded in every session.

  Tier 3 — Project       ~/.claude/memory/projects/<name>/
            Per-client knowledge that persists forever — even if the project dir is deleted.
            Auto-created on first session. Loaded by git remote detection.

  Tier 2 — Agent         ~/.claude/agents/<name>/memory/
            Domain expertise per specialization (GSAP, Firebase, DevOps, etc.)

  Tier 1 — Session       In-context scratchpad. Promoted to Tier 2/3 on compact.
```

**Hook system (fires automatically, zero manual intervention):**

| Event | What runs |
|---|---|
| `SessionStart` | Loads project + OS memory into context before first keystroke |
| `UserPromptSubmit` | Qwen3:8b classifies complexity → routes model → selects personalities |
| `PostCompact` | Extracts learnings → `knowledge.md` · Extracts failures → `mistakes.md` |
| `Stop` | Writes session marker · Initializes project memory on first visit |

**Semantic compaction** — when `knowledge.md` hits 300 lines: Qwen distills to 50 dense lines → raw archived → distillation becomes new base. Memory never bloats, never loses signal.

**Model routing** — local Qwen3:8b classifies every prompt (TRIVIAL → EASY → MEDIUM → HARD → ARCHITECTURE) at zero cloud cost. Claude switches depth accordingly.

**Multi-account** — `claude-work` and `claude-personal` both inherit the full OS via symlinked settings. One OS, zero duplication.

---

## What I Build for Clients

```
AI Solutions Company
├── Automated blog pipelines     (weekly AI-written → client approval → auto-deploy)
├── Multi-client social automation (Cloud Run · Meta Graph API · per-client OAuth)
├── AI voice + chat assistants   (embedded in client websites)
├── Workflow automation          (n8n · Zapier · custom Cloud Run services)
└── Full-stack delivery          (GCP org · Cloud Run · Firebase · GitHub Actions)
```

Each client gets: isolated GCP project · private GitHub repo · Stripe subscription · dedicated OS memory folder.

---

## Selected Repos

| Repo | What it is |
|---|---|
| **[gsap-skills](https://github.com/Praveenkumarbyrapuneni/gsap-skills)** | Official GSAP skill definitions for AI coding agents — correct animation patterns, plugin usage |
| **[awesome-design-md](https://github.com/Praveenkumarbyrapuneni/awesome-design-md)** | Drop-in `DESIGN.md` files from real brand systems — lets AI agents generate matching UI |
| **[remotion-video-generation](https://github.com/Praveenkumarbyrapuneni/remotion-video-generation)** | Programmatic video generation with React + Remotion |
| **[anti-gravity-extension](https://github.com/Praveenkumarbyrapuneni/anti-gravity-extension)** | CLI tool: local dev → GCP via secure tunnel · MCP integration |
| **[genai-bootcamp](https://github.com/Praveenkumarbyrapuneni/genai-bootcamp)** | GenAI · LLMs · RAG · Agents · Cloud deployment — 6-week hands-on |
| **[langgraph](https://github.com/Praveenkumarbyrapuneni/langgraph)** | Resilient language agents as graphs |

---

## Stack

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GCP](https://img.shields.io/badge/GCP-4285F4?style=flat-square&logo=google-cloud&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Cloud Run](https://img.shields.io/badge/Cloud_Run-4285F4?style=flat-square&logo=google-cloud&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-000000?style=flat-square&logo=ollama&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)

</div>

---

## Stats

<div align="center">

<img height="155" src="https://github-readme-stats.vercel.app/api?username=Praveenkumarbyrapuneni&show_icons=true&theme=dark&hide_border=true&include_all_commits=true&count_private=true&rank_icon=github&bg_color=0d1117" />
<img height="155" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Praveenkumarbyrapuneni&layout=compact&theme=dark&hide_border=true&langs_count=6&bg_color=0d1117" />

</div>

---

## Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/praveenkumarbyrapuneni)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:praveenbyrapuneni2002@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat-square&logo=vercel&logoColor=white)](https://github.com/Praveenkumarbyrapuneni/Portfolio)

</div>

<br/>

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,100:0f0f0f&height=80&section=footer" width="100%" />
</div>
