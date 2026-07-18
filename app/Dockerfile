# Use the official Node.js 24 image
FROM node:24

# Set the working directory inside the container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining project files
COPY . .

# Tell Docker the app listens on port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]