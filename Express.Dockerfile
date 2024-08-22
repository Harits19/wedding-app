
FROM node:20 AS base
WORKDIR /usr/local/app


FROM base AS express-prod
COPY express ./
COPY .env .env
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "start"]
