import { useToast } from "@/app/components/ui/use-toast";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useTokenState } from "../hooks/use-token";
import { kEnv } from "../constans/env";

export function useCatchError() {
  const { toast } = useToast();

  return {
    handleError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast({
          title: "AxiosError",
          description: JSON.stringify(error.response?.data),
        });
        return;
      }

      console.error("Unexpected Error : ", error);
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
    try {
      const result = await instance<Response>({
        ...params,
        baseURL: kEnv.NEXT_PUBLIC_APP_HOST,
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
