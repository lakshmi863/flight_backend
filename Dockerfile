# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies inside container (rebuild native modules)
RUN npm install

# Copy remaining code
COPY . .

# Expose port
EXPOSE 7000

# Start server
CMD ["npm", "start"]
