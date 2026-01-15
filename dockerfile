FROM node:20-slim

# Instalar dependências de compilação para o serialport/usb (python, make, g++)
# e openssl para o Prisma
RUN apt-get update && apt-get install -y python3 make g++ openssl libssl-dev

WORKDIR /app

COPY package*.json ./
# Instalar dependências (incluindo as nativas)
RUN npm ci

COPY . .

# Gerar o cliente Prisma
RUN npx prisma generate

# Compilar o NestJS
RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "start:prod"]