# Custom Connectors in UnifyApps
## Building, Configuring, and Wiring External APIs

---

### 1. Overview
UnifyApps provides native, first-class support for **Custom Connectors** at:
`https://unifyapps-dev.modhs.med.sa/connectors/custom`

Custom Connectors allow external enterprise APIs (EHR systems, hospital registries, logistics databases) to be integrated into UnifyApps and exposed to:
1. **The MCP Server** (`Antigravity-Unify-MCP`) as callable tools.
2. **The A2A Server** (`Antigravity-Unify-A2A`) as agent capabilities.
3. **Application Canvases** as live interactive data sources.
4. **Workflows** as automated triggers and actions.

---

### 2. Connector Structure

Every Custom Connector consists of 4 parts:
* **Base URL**: e.g., `https://api.modhs.med.sa/v1`
* **Authentications**:
  - `OAuth 2.0` (Auth Code, Client Credentials, Refresh)
  - `Access Token / Bearer Token`
  - `API Key` (Header / Query Parameter)
  - `Basic Auth`
* **Actions**:
  - `GET`, `POST`, `PUT`, `DELETE`, `PATCH` endpoints
  - Request/Response JSON schemas
* **Triggers**:
  - Ingestion Webhooks
  - Scheduled Polling intervals

---

### 3. Exposing Connector Actions to MCP
When a custom connector action is created, it can be attached to the MCP server:
```
Custom Connector Action: "GET /patients/{id}"
       │
       ▼
MCP Tool Schema:
{
  "name": "modhs_get_patient",
  "description": "Retrieves medical record by patient ID",
  "inputSchema": {
    "type": "object",
    "properties": {
      "patientId": { "type": "string" }
    },
    "required": ["patientId"]
  }
}
       │
       ▼
Antigravity / AI Agent can query patient data via standard tool calls!
```
