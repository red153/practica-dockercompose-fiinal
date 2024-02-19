FROM node:19

WORKDIR /usr/src/

COPY package*.json ./
COPY *.env ./
COPY . .

RUN npm install

CMD ["npm", "run", "dev"]