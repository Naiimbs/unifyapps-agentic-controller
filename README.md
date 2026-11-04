# UnifyApps Autonomous Agentic Controller
## Tri-Layer Architecture: API Gateway · Model Context Protocol (MCP) · Agent-to-Agent (A2A)

[![Status](https://img.shields.io/badge/Status-Active%20%2F%20Deployed-125939?style=flat-square)](https://unifyapps-dev.modhs.med.sa)
[![Protocol](https://img.shields.io/badge/Protocols-MCP%20%7C%20A2A%20%7C%20REST-dba102?style=flat-square)](https://modelcontextprotocol.io)
[![Tenant](https://img.shields.io/badge/Tenant-unifyapps--dev.modhs.med.sa-1e293b?style=flat-square)](https://unifyapps-dev.modhs.med.sa)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

An enterprise integration bridge and autonomous design controller allowing **any AI coding agent** (Google Antigravity, Claude Desktop, Cursor, VS Code Copilot) to inspect, construct, style, and package enterprise UI directly into **UnifyApps** with:
- **0% Global CSS pollution** (surgical block scoping via `[data-block-id='...']`).
- **100% Brand Token fidelity** (Saudi Ministry of Defense Health Services design standards).
- **Automated Reusable Module Packaging** (Cross-application template distribution).
- **Custom Connectors integration** (REST, OAuth2, Webhooks, Actions).

---

## 🌟 Interactive Live Demo Platform

Experience the interactive guide, live block-scoping simulator, and configuration hub:
👉 **[Open Live Demo & Guide Platform](https://naiimbs.github.io/unifyapps-agentic-controller/)**

---

## 🏗️ Tri-Layer System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            ANY AI TOOL / AGENT                              │
│       Antigravity  ·  Claude Desktop  ·  Cursor  ·  VS Code  ·  CLI         │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
     ┌─────────────────────────────────┼─────────────────────────────────┐
     ▼                                 ▼                                 ▼
┌───────────────────────────┐ ┌───────────────────────────┐ ┌───────────────────────────┐
│        API GATEWAY        │ │        MCP SERVER         │ │        A2A SERVER         │
│ "Antigravity-Agent-Bridge"│ │  "Antigravity-Unify-MCP"  │ │  "Antigravity-Unify-A2A"  │
│  ID: 6aeaedcf41af915...   │ │  ID: e_6aeaeef394cb...    │ │  ID: e_6aeaf23394cb...    │
├───────────────────────────┤ ├───────────────────────────┤ ├───────────────────────────┤
│ Authenticated REST layer  │ │ Exposes platform tools    │ │ Agent-to-Agent protocol   │
│ for workspace operations, │ │ directly to the LLM       │ │ connected directly to     │
│ token management & APIs.  │ │ context window.           │ │ "App page builder" agent. │
└─────────────┬─────────────┘ └─────────────┬─────────────┘ └─────────────┬─────────────┘
              │                             │                             │
              └─────────────────────────────┼─────────────────────────────┘
                                            ▼
           ┌────────────────────────────────────────────────────────────────┐
           │                      UNIFYAPPS TENANT                          │
           │           https://unifyapps-dev.modhs.med.sa                   │
           ├────────────────────────────────────────────────────────────────┤
           │ ANY PROJECT:                                                   │
           │ • MediaCenter_App              • MODHS Facility Profile Portal │
           │ • Overtime_App                 • Returns_App                   │
           │ • Agent Sandbox Test           • Reusable Modules & Connectors │
           └────────────────────────────────────────────────────────────────┘
```

### 1. Layer 1: API Platform Gateway
* **Client Name**: `Antigravity-Agent-Bridge`
* **Client ID**: `6aeaedcf41af9153531ebb1f`
* **Route**: `/p/0/api-platform/clients/6aeaedcf41af9153531ebb1f/details`
* **Role**: Authenticated bearer/OAuth2 connection handling programmatic workspace mutations and page publishing.

### 2. Layer 2: Model Context Protocol (MCP) Server
* **Server Name**: `Antigravity-Unify-MCP`
* **Server ID**: `e_6aeaeef394cbd46d9f75d981`
* **Route**: `/p/0/mcp-servers/e_6aeaeef394cbd46d9f75d981/tools`
* **Role**: Exposes UnifyApps canvas tools (`unify_get_page_blocks`, `unify_apply_scoped_css`, `unify_set_html_attributes`) directly into LLM agent reasoning loops.

### 3. Layer 3: Agent-to-Agent (A2A) Server
* **Server Name**: `Antigravity-Unify-A2A`
* **Server ID**: `e_6aeaf23394cbd46d9f75d9d8`
* **Status**: **Active (Deployed)**
* **Connected Agent**: `App page builder` (`e_69b267ec5725553d7a82c3ed`)
* **API Group Collection**: `6aeaf23341af9153531ebb24`
* **Role**: Implements open A2A specifications (`Get Agent Card`, `Handle JSON+RPC Streaming`) so external AI can delegate layout synthesis directly to UnifyApps' native UI engine.

---

## ⚡ Quickstart

### 1. Run the Universal Bridge
```bash
node unifyapps_bridge.js
# Output:
# UnifyApps Bridge ready.
# Available MCP Tools: [ 'unify_list_projects', 'unify_get_page_blocks', 'unify_apply_scoped_css', 'unify_a2a_build_component' ]
```

### 2. Connect Your AI Tool

#### Antigravity IDE (`~/.gemini/antigravity/mcp/unifyapps.json`)
```json
{
  "name": "unifyapps",
  "command": "node",
  "args": ["./unifyapps_bridge.js", "--mcp"],
  "env": {
    "UNIFY_BASE_URL": "https://unifyapps-dev.modhs.med.sa",
    "UNIFY_CLIENT_ID": "6aeaedcf41af9153531ebb1f"
  }
}
```

#### Cursor (`.cursor/mcp.json`)
```json
{
  "mcp.servers": {
    "unifyapps": {
      "type": "command",
      "command": "node",
      "args": ["./unifyapps_bridge.js", "--mcp"],
      "env": {
        "UNIFY_BASE_URL": "https://unifyapps-dev.modhs.med.sa",
        "UNIFY_CLIENT_ID": "6aeaedcf41af9153531ebb1f"
      }
    }
  }
}
```

#### Claude Desktop (`claude_desktop_config.json`)
```json
{
  "mcpServers": {
    "unifyapps": {
      "command": "node",
      "args": ["path/to/unifyapps_bridge.js", "--mcp"],
      "env": {
        "UNIFY_BASE_URL": "https://unifyapps-dev.modhs.med.sa",
        "UNIFY_CLIENT_ID": "6aeaedcf41af9153531ebb1f"
      }
    }
  }
}
```

---

## 🛡️ The Surgical Styling Rule (No Global Leakage)

Universal styles injected into `<head>` inevitably break unrelated platform navigation or tables. 

This controller enforces **block-level encapsulation** via Monaco custom CSS:

```css
/* CORRECT: Scoped exclusively to block b_cvQmi */
[data-block-id='b_cvQmi'] {
  background: #ffffff;
  border: 1.6px solid #125939; /* Saudi MOD Green */
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

[data-block-id='b_cvQmi'] input[type="text"] {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}
```

---

## 📚 Documentation
* [Architecture & AST Specification](docs/ARCHITECTURE.md)
* [Universal Developer Guide](docs/DEVELOPER_GUIDE.md)
* [Custom Connectors Guide](docs/CUSTOM_CONNECTORS.md)

---

## 📄 License
MIT © 2026 Naiimbs / Saudi MODHS Digital Services
