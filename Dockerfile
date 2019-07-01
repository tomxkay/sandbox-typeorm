FROM node:10-jessie
WORKDIR /www/mysqltypeorm
RUN npm install -g nodemon
RUN npm install -g typescript
RUN npm install -g ts-node
COPY package.json .
RUN npm i
COPY . .
EXPOSE 8080
CMD ["nodemon"]

