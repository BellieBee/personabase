FROM node:14.17-alpine3.12

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"] 
