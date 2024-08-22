
FROM node:20 AS base
WORKDIR /usr/local/app


FROM base AS express
COPY express ./
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "start"]


FROM base AS react
COPY react ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]