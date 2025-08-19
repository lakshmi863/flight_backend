# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy rest of the application
COPY . .

# Expose your backend port
EXPOSE 7000

# Start the backend
CMD ["npm", "start"]
