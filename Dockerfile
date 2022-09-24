FROM node:16-alpine
WORKDIR /home/node/app
COPY . .
RUN npm ci install
CMD ["npm", "start"]