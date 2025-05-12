# FDX Smart Consent Manager 🚀

The **FDX Smart Consent Manager** is a full-stack AI-powered solution that demonstrates how financial data sharing can be made safer, more transparent, and user-friendly. It leverages **Model Context Protocol (MCP)** and **Azure OpenAI** to create a smart assistant that dynamically analyzes FDX consent APIs and explains them in simple terms.

---

## 🔧 Tech Stack

| Layer         | Technology                            |
|--------------|----------------------------------------|
| Frontend     | React + TypeScript + Tailwind CSS      |
| Backend      | Spring Boot (Java 17)                  |
| AI Engine    | Azure OpenAI (GPT-4o, GPT-4-turbo)      |
| Protocol     | MCP - Model Context Protocol           |
| APIs         | FDX v5.3 (Consent APIs)                |

---

## ✨ Features

- 🔍 **Smart Consent Assistant**: Conversational UI that simplifies consent language for users and developers.
- 🤖 **Model Context Protocol**: Dynamically builds a context chain using API specs, examples, and responses to ground LLMs.
- 🔐 **FDX API Integration**: Real-time request/response tracing for financial data consent.
- ⚡ **Azure OpenAI Integration**: Uses GPT-4o via Azure with deployment, key, and endpoint-based access.

---

## 🧠 Architecture Overview

![FDX Smart Consent Manager Architecture](./docs/architecture.png)

> `McpController` triggers the context building and OpenAI prompt execution pipeline. `ModelRunner` acts as the LLM interface component.

---

## 📁 Project Structure

```bash
fdx-smart-consent-manager/
├── backend/               # Spring Boot backend
│   └── src/main/java/com/crm/backend/mcp
│       ├── McpController.java
│       ├── McpService.java
│       ├── ModelRunner.java
│       └── FdxAdapter.java
├── ui/                    # React frontend
│   ├── pages/chat-assistant.tsx
│   ├── lib/utils.ts
│   └── public/
└── docs/
    └── architecture.png   # System architecture image
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/fdxhackathonpalteam/fdx-smart-consent-manager.git
cd fdx-smart-consent-manager
```

### 2. Backend Setup

```bash
cd backend
# Set environment variables or application.yml
./mvnw spring-boot:run
```

Make sure `application.yml` includes:

```yaml
spring:
  ai:
    openai:
      endpoint: https://your-azure-openai-endpoint/
      api-key: YOUR_API_KEY
      deployment-id: gpt-4o
      api-version: 2024-12-01-preview
```

### 3. Frontend Setup

```bash
cd ui
npm install --legacy-peer-deps
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 💡 MCP: Model Context Protocol

This project implements the MCP standard to:

- Collect and format API context
- Construct structured prompts
- Feed these prompts into Azure OpenAI Chat Completion API
- Return natural-language summaries or clarifications

---

## 📬 Sample Request

```bash
curl -X POST http://localhost:8080/api/mcp/ask   -H "Content-Type: application/json"   -d '{"question": "Explain what this consent means", "apiName": "GetConsent", "apiPayload": "{...}"}'
```

---

## 🤝 Contributors

- [Suman Devarasetti](https://github.com/sumandevarasetti) — Backend, MCP Architecture
- Kavya Masna — Frontend, Testing & Deployment
- FDX Hackathon PAL Team 2025 💼

---

## 🧠 Inspiration

Built for the **FDX Hackathon 2025**, this project showcases how emerging AI standards like MCP + RAG can improve trust and transparency in Open Finance ecosystems.

---

## 📜 License

MIT License — use it, build on it, make it better!
