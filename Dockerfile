# Construction and compilation
FROM node:24.15.0-alpine AS builder
WORKDIR /app

# Copy packaging files
COPY package*.json ./
COPY tsconfig*.json ./

# Install dependencies
RUN npm ci --ignore-scripts

# Copy source code
COPY src/ ./src

# Compile
RUN npm run build

# Production environment
FROM node:24.15.0-alpine AS runner
WORKDIR /app

# Set environment variable in production
ENV NODE_ENV=production

# Copy packaging files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev --ignore-scripts

# Copy JavaScript code
COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Run app
CMD ["node", "dist/src/index.js"]
