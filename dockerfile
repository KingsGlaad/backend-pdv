# ----- STAGE 1: BUILD -----
FROM node:20-slim AS builder

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    openssl \
    libssl-dev

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build


# ----- STAGE 2: PRODUÇÃO -----
FROM node:20-slim

WORKDIR /app

# Copiar apenas o necessário do build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

EXPOSE 3333

CMD ["node", "dist/main"]
