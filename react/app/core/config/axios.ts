import { useToast } from "@/app/components/ui/use-toast";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useTokenState } from "../hooks/use-token";

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
      toast({
        title: "Unexpected Error",
        description: error?.toString() || JSON.stringify(error),
      });
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
