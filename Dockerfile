# Build Stage
FROM oven/bun:latest AS builder
WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install

COPY . .
RUN bun run build

# Run Stage
FROM oven/bun:latest
WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 3000

CMD [ "bun", "build/index.js" ]