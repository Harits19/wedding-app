# Use an official Node.js runtime as a parent image
FROM node:18.18-alpine as react-prod

ENV NODE_ENV production

# Set the working directory to /app
WORKDIR /app


# Copy the rest of the application code to the container
COPY react .
COPY .env .env

# Install dependencies
RUN yarn install

# Build the application
RUN yarn build

# Expose port 3000
EXPOSE 3000
ENV PORT=3000

# Start the application
CMD ["yarn", "start"]