# Use the official Node.js image with version 16
FROM node:16-alpine

# Create a directory for the application
RUN mkdir /app

# Set the working directory to the application directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vue application
RUN npm run build

# Expose port 8080 for the application
EXPOSE 8080

# Start the application
CMD ["npm", "run", "serve"]
