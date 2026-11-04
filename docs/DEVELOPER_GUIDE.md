# Developer Integration Guide
## Connecting AI Tools to Any UnifyApps Project

---

### 1. Overview
This guide provides developers with the commands, configuration files, and step-by-step procedures to use the UnifyApps Autonomous Agentic Controller from any external tool.

---

### 2. Tool Setup

#### 2.1. Antigravity IDE
Create or update `~/.gemini/antigravity/mcp/unifyapps.json`:
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

#### 2.2. Cursor AI
Add to `.cursor/mcp.json` in your workspace:
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

#### 2.3. Claude Desktop
Add to `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):
```json
{
  "mcpServers": {
    "unifyapps": {
      "command": "node",
      "args": ["C:/path/to/unifyapps_bridge.js", "--mcp"],
      "env": {
        "UNIFY_BASE_URL": "https://unifyapps-dev.modhs.med.sa",
        "UNIFY_CLIENT_ID": "6aeaedcf41af9153531ebb1f"
      }
    }
  }
}
```

---

### 3. Step-by-Step Practical Workflows

#### Scenario 1: Styling a Component
```javascript
// Step A: Locate block ID
const blocks = await mcp.callTool('unify_get_page_blocks', {
  appId: 'media-center-app',
  pageSlug: 'myspace'
});

// Step B: Inject Scoped Styles
await mcp.callTool('unify_apply_scoped_css', {
  appId: 'media-center-app',
  pageSlug: 'myspace',
  blockId: 'filters',
  css: `[data-block-id='filters'] { border: 2px solid #125939; border-radius: 12px; }`
});
```

#### Scenario 2: Setting RTL & Accessibility
```javascript
await mcp.callTool('unify_set_html_attributes', {
  appId: 'media-center-app',
  pageSlug: 'myspace',
  blockId: 'filters',
  attributes: {
    'dir': 'rtl',
    'role': 'search',
    'aria-label': 'Patient and media filters'
  }
});
```

#### Scenario 3: Converting to Reusable Module
```javascript
await mcp.callTool('unify_package_as_module', {
  blockId: 'filters',
  name: 'MODHS_Universal_FilterBar'
});
```
The module will immediately appear under **Add Component → Module → Template components** across all tenant applications.
