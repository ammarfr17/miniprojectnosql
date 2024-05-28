FROM node:alpine
WORKDIR /TUTAM/backend
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY ./server.js ./
CMD ["node", "server.js"]