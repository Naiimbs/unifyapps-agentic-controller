/**
 * Universal UnifyApps Bridge Adapter
 * Supports: CLI execution, REST Gateway, and MCP JSON-RPC Server
 */

const CONFIG = {
  baseUrl: process.env.UNIFY_BASE_URL || 'https://unifyapps-dev.modhs.med.sa',
  clientId: process.env.UNIFY_CLIENT_ID || '6aeaedcf41af9153531ebb1f',
  token: process.env.UNIFY_BEARER_TOKEN || '',
  mcpServerId: 'e_6aeaeef394cbd46d9f75d981',
  a2aServerId: 'e_6aeaf23394cbd46d9f75d9d8',
  a2aCollectionId: '6aeaf23341af9153531ebb24'
};

// Generic authenticated requester
async function apiRequest(endpoint, method = 'GET', body = null) {
  const url = `${CONFIG.baseUrl}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  if (CONFIG.token) {
    headers['Authorization'] = `Bearer ${CONFIG.token}`;
  }

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`UnifyApps API error ${res.status}: ${await res.text()}`);
  }
  return await res.json();
}

// 1. A2A Execution: Dispatch task to internal 'App page builder'
async function callA2ABuilder(prompt, projectId, pageSlug) {
  const endpoint = `/p/0/api-platform/collections/${CONFIG.a2aCollectionId}/HandleJSONRPC`;
  const payload = {
    jsonrpc: '2.0',
    method: 'generate_page_layout',
    params: {
      prompt,
      project_id: projectId,
      page_slug: pageSlug
    },
    id: Date.now()
  };
  return await apiRequest(endpoint, 'POST', payload);
}

// 2. Surgical CSS Injection: Scope styles strictly to [data-block-id]
function buildScopedBlockCSS(blockId, cssProperties) {
  return `[data-block-id='${blockId}'] {\n` +
    Object.entries(cssProperties)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n') +
    `\n}`;
}

// 3. Exported Tools for MCP Server
const TOOLS = [
  {
    name: 'unify_list_projects',
    description: 'Lists all applications and projects in the UnifyApps tenant',
    inputSchema: { type: 'object', properties: {} }
  },
  {
    name: 'unify_get_page_blocks',
    description: 'Retrieves all block IDs and components of a specific page',
    inputSchema: {
      type: 'object',
      properties: {
        appId: { type: 'string', description: 'Application ID, e.g. media-center-app' },
        pageSlug: { type: 'string', description: 'Page slug, e.g. myspace or homepage' }
      },
      required: ['appId', 'pageSlug']
    }
  },
  {
    name: 'unify_apply_scoped_css',
    description: 'Applies surgical custom CSS scoped to a specific [data-block-id]',
    inputSchema: {
      type: 'object',
      properties: {
        appId: { type: 'string' },
        pageSlug: { type: 'string' },
        blockId: { type: 'string', description: 'Target block ID, e.g. filters or root_id' },
        css: { type: 'string', description: 'Valid CSS scoped to [data-block-id]' }
      },
      required: ['appId', 'pageSlug', 'blockId', 'css']
    }
  },
  {
    name: 'unify_a2a_build_component',
    description: 'Delegates UI building to UnifyApps internal App page builder via A2A protocol',
    inputSchema: {
      type: 'object',
      properties: {
        appId: { type: 'string' },
        pageSlug: { type: 'string' },
        prompt: { type: 'string', description: 'Natural language component instructions' }
      },
      required: ['appId', 'pageSlug', 'prompt']
    }
  }
];

if (require.main === module) {
  console.log('UnifyApps Bridge ready.');
  console.log('Available MCP Tools:', TOOLS.map(t => t.name));
}

module.exports = { apiRequest, callA2ABuilder, buildScopedBlockCSS, TOOLS };
