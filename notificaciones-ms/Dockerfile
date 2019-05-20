FROM node:8

WORKDIR /notificaciones-ms
COPY package.json /notificaciones-ms
RUN npm install
COPY . /notificaciones-ms
CMD ["npm", "dev"]