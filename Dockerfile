# Use the official Node.js 18 image as the base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock/pnpm-lock.yaml) to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port that the NestJS application listens on
EXPOSE 3000

# Set the command to start the application
CMD ["npm", "run", "start:prod"]
