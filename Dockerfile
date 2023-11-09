FROM node:18 AS builder
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN rm -rf node_modules
RUN npm cache clean --force
RUN npm install -g npm@latest
RUN npm install

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3001
CMD ["npm", "run", "start"]