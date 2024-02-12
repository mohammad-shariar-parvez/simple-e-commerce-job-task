# Use an official Node runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn.lock ./

# Install app dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the production version of the app
RUN yarn build

# Create a smaller image for production

# Expose the port on which the app runs
EXPOSE 5173


# Start the application
CMD ["yarn", "dev"]