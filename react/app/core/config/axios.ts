import { useToast } from "@/app/components/ui/use-toast";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useTokenState } from "../hooks/use-token";
import { kEnv } from "../constans/env";

export function useCatchError() {
  const { toast } = useToast();

  return {
    handleError: (error: any) => {
      if (error instanceof AxiosError) {
        toast({
          title: "AxiosError",
          description: JSON.stringify(error.response?.data),
        });
        return;
      }

      const message = `${error?.message || "Unexpected error"}`;

      console.error("Unexpected Error : ", error);

      toast({
        title: 'Unexpected Error',
        description: message,
      })
    },
  };
}

export function useAxios() {
  const { handleError } = useCatchError();
  const { token } = useTokenState();
  const fetch = async <Data = unknown, Response = unknown>(
    params: AxiosRequestConfig<Data>,
  ) => {
    const instance = axios.create();
    const baseURL = kEnv.NEXT_PUBLIC_USE_NEXT_JS_API_ROUTE ? '/api' : `${kEnv.NEXT_PUBLIC_APP_HOST}:${kEnv.NEXT_PUBLIC_APP_PORT}`;
    try {
      const result = await instance<Response>({
        ...params,
        baseURL,
        headers: {
          token,
          ...params.headers,
        },
      });

      return result;
    } catch (error) {
      handleError(error);
    }
  };

  return { fetch };
}
