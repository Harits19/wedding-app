# Use an official Node.js runtime as a parent image
FROM node:18.18-alpine as react-prod

# Set the working directory to /app
WORKDIR /app


# Copy the rest of the application code to the container
COPY react/. .
COPY .env .env

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]