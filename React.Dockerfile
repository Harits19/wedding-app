FROM node:18-alpine AS base

FROM base AS react-prod
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY react/. .
COPY .env .env
RUN npm ci
RUN npm run build
ENV NODE_ENV production
EXPOSE 80
ENV PORT 80
CMD npm start