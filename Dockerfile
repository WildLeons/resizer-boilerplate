FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 1337

CMD npm run start
