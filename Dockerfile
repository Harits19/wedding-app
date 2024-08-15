###################################################
# Stage: base
# 
# This base stage ensures all other stages are using the same base image
# and provides common configuration for all stages, such as the working dir.
###################################################
FROM node:20 AS base
WORKDIR /usr/local/app

################## CLIENT STAGES ##################

###################################################
# Stage: react-base
#
# This stage is used as the base for the react-dev and react-build stages,
# since there are common steps needed for each.
###################################################
FROM base AS react-base
COPY wedding-invitation-app-react ./
RUN --mount=type=cache,id=npm,target=/usr/local/share/.cache/npm \
    npm install

###################################################
# Stage: react-dev
# 
# This stage is used for development of the client application. It sets 
# the default command to start the Vite development server.
###################################################
FROM react-base AS react-dev
CMD ["npm", "run", "dev"]

# ###################################################
# # Stage: react-build
# #
# # This stage builds the client application, producing static HTML, CSS, and
# # JS files that can be served by the backend.
# ###################################################
FROM react-base AS react-build
RUN npm run build

###################################################
################  BACKEND STAGES  #################
###################################################

###################################################
# Stage: express-base
#
# This stage is used as the base for the express-dev and test stages, since
# there are common steps needed for each.
###################################################
FROM base AS express-dev
COPY wedding-invitation-app-express ./
RUN --mount=type=cache,id=npm,target=/usr/local/share/.cache/npm \
    npm install
CMD ["npm", "run", "start"]

###################################################
# Stage: final
#
# This stage is intended to be the final "production" image. It sets up the
# backend and copies the built client application from the react-build stage.
#
# It pulls the package.json and yarn.lock from the test stage to ensure that
# the tests run (without this, the test stage would simply be skipped).
###################################################
FROM base AS final
ENV NODE_ENV=production
COPY --from=express-dev /usr/local/app ./
COPY --from=react-build /usr/local/app ./react
EXPOSE 3000
CMD ["node", "dist/index.js""]