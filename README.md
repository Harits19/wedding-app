# Wedding App

## Description

Is application about invitation detail like location, greeting, attendance, time, and etc using [Express.js](https://expressjs.com/) and [Next.js](https://nextjs.org/). Written in Typescript on both framework. This service support [Docker](https://www.docker.com/) to simplified deployment process.

## Requirement

To run this project locally below is the requirement that should be installed in your machine :

Via Docker

- [Docker](https://www.docker.com/)
- SSL (Optional)


## Installation

Instructions on how to install and set up your project. :

- Clone this repository by running : `git clone link/of/this/repository.git`
- Run docker daemon on your machine
- If you don't have ssl certificate delete line on nginx.conf <br>
  ```
  COPY ssl.key /etc/nginx/ssl/ssl.key 
  COPY ssl.crt /etc/nginx/ssl/ssl.crt 
  ```
  and delete line on Express.Dockerfile <br>
  ```
  COPY ssl.key ssl.key
  COPY ssl.crt ssl.crt
  ```
- Run command `docker compose build` to build images
- Run command `docker compose run` to run all the container
- Open `http://localhost:8080/api-docs/` to see Express.js documentation
- Open `http://localhost:3000` to see Next.js app
