#Build stage
FROM node:18-alpine AS base

FROM base as build
WORKDIR /app
COPY express/package*.json .
RUN npm install
COPY express .
RUN npm run build

#Production stage
FROM base AS express-prod
WORKDIR /app
COPY express/package*.json .
RUN npm ci --only=production
COPY --from=build /app/dist ./dist
COPY express/src/core/swagger/*.yaml ./dist/core/swagger

COPY .env .env
COPY ssl.key ssl.key
COPY ssl.crt ssl.crt
EXPOSE 8080
CMD ["node", "dist/index.js"]