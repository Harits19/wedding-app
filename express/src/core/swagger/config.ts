import swaggerJsdoc, { OAS3Options } from "swagger-jsdoc";
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
        url: `${env.NEXT_PUBLIC_APP_HOST}:${env.NEXT_PUBLIC_APP_PORT}`,
      },
    ],
    components: {
      securitySchemes: {
        token: {
          type: "apiKey",
          name: "token",
          in: "header",
        },
      },
    },
  },
  apis: ["*/*/*/*.yaml"],
} as OAS3Options);
