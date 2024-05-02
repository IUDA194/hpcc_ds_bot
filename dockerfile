# Use the official Node.js 16 image as a base
FROM --platform=linux/amd64 node:16-alpine

# Create and define the working directory
WORKDIR /usr/src/app

# Install necessary system dependencies
# libsodium is included for encryption requirements
RUN apk add --no-cache \
    libsodium

# Copy the package.json and package-lock.json files
COPY package.json ./
COPY package-lock.json ./

# Install all dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run your app using Node.js
CMD ["node", "index.js"]
