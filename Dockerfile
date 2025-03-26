# Use latest stable Node.js (например, 21)
FROM node:21-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files
COPY . .

# Expose dev server port
EXPOSE 3000

# Run Vite dev server with external access
CMD ["npm", "run", "dev", "--", "--host"]
