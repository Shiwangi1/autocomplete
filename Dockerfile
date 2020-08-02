FROM node:12

# Creating an app directory by project name
RUN mkdir -p /autocomplete
WORKDIR /autocomplete
COPY package*.json ./
RUN npm install

COPY src /autocomplete/
CMD ["node", "app.js"]
