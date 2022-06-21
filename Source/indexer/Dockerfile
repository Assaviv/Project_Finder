FROM node:16.14.2

RUN npm i -g nodemon

WORKDIR /usr/src/app

RUN apt install curl

COPY package.json .
RUN npm i

EXPOSE 3001

COPY . .

CMD ["npm", "run", "dev"]