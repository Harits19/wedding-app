FROM node:18-alpine AS base

FROM base AS react-prod
ENV NODE_ENV production

WORKDIR /app
COPY react .
COPY .env .env
RUN yarn install
RUN yarn build

ENV PORT=3000
EXPOSE 3000
CMD yarn start
