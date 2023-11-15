FROM node:20
# Set the working directory in the container
WORKDIR /app

# Add the `package.json` and `package-lock.json` (if available)
COPY package*.json ./

# Install the project dependencies
RUN yarn install

# Bundle the source code inside the docker image
COPY . .

# Expose the port that your app runs on
EXPOSE 5173

# Define the command to start your app
CMD ["yarn", "run", "dev", "--", "--host", "0.0.0.0"]