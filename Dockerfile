# Lightweight production Node.js container
FROM node:20-alpine

WORKDIR /app

# Copy application code and assets
COPY package.json ./
COPY server.js ./
COPY unifyapps_bridge.js ./
COPY index.html ./
COPY guide.html ./
COPY assets/ ./assets/

# Default environment variables
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NODE_ENV=production
ENV UNIFY_BASE_URL=https://unifyapps-dev.modhs.med.sa
ENV UNIFY_CLIENT_ID=6aeaedcf41af9153531ebb1f

EXPOSE 3000

CMD ["node", "server.js"]
