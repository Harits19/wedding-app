import { ZodError } from "zod";
import { BaseResponse } from "../models/base-response";
import { HttpStatusCode } from "axios";

export class ResponseUtil {
  static async json<T>({
    errorMessage,
    callback,
  }: {
    errorMessage: string;
    callback: () => Promise<BaseResponse<T>>;
  }) {
    try {
      return Response.json(await callback());
    } catch (error) {
      const errorResponse: BaseResponse<string> = {
        message: errorMessage,
        data: "Unexpected error",
      };

      let errorCode = HttpStatusCode.InternalServerError;

      if (error instanceof ZodError) {
        console.error("ZodError : ", error);
        const parsedError = error.issues
          .map((issue) => {
            const path = issue.path.join(".");
            if (path) {
              return `${path} : ${issue.message}`;
            }
            return issue.message;
          })
          .join(" \n");
        errorResponse.data = parsedError;
        errorCode = HttpStatusCode.BadRequest;
      } else if (error instanceof Error && error.message) {
        console.log("ERROR : ", error);
        errorResponse.data = error.message;
      } else {
        console.log("ERROR : ", error);
        errorResponse.data = `${error || JSON.stringify(error)}`;
      }

      return Response.json(errorResponse, { status: errorCode });
    }
  }

  static async responseInitTable({
    runInitDatabase,
    tableName,
  }: {
    tableName: string;
    runInitDatabase: () => Promise<void>;
  }) {
    return ResponseUtil.json({
      errorMessage: `Error when initialize ${tableName} table`,
      callback: async () => {
        console.log(`start initialize ${tableName} table`);
        await runInitDatabase();
        return {
          message: `success create ${tableName} database`,
        };
      },
    });
  }
}
