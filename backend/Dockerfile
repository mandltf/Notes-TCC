FROM node:20-alpine
WORKDIR /app

# copy package dulu
COPY package*.json ./

# install dependency
RUN npm install

# copy semua file
COPY . .

# Cloud Run pakai port 8080
EXPOSE 8080

CMD ["node", "index.js"]