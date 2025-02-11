# Use the official Node.js image as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install Yarn globally
#RUN npm install -g yarn

# Copy package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN yarn build


# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
