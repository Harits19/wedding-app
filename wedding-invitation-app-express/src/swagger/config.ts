import swaggerJsdoc from "swagger-jsdoc";

export const swaggerConfig = swaggerJsdoc({
  definition: {
    openapi: "3.1.0",
    info: {
      title: "1engage Express API with Swagger",
      version: process.env.APP_VERSION || "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["*/*/*.yaml"],
});
