# Multi-stage production build for React + MCP Server
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production runner image
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist
COPY server.js unifyapps_bridge.js ./
COPY assets ./assets

ENV PORT=3000
ENV HOST=0.0.0.0
ENV NODE_ENV=production
ENV UNIFY_BASE_URL=https://unifyapps-dev.modhs.med.sa
ENV UNIFY_CLIENT_ID=6aeaedcf41af9153531ebb1f

EXPOSE 3000

CMD ["node", "server.js"]
