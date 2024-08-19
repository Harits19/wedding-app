import swaggerJsdoc from "swagger-jsdoc";
import { env } from "../env/config";

export const swaggerConfig = swaggerJsdoc({
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Wedding Express",
      version: "1.0.0",
    },
    servers: [
      {
        url: `${env.APP_HOST}:${env.APP_PORT}`,
      },
    ],
  },
  apis: ["*/*/*.yaml"],
});
