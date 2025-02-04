import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { BaseResponse } from "../models/base-response";
import { useAxios } from "../config/axios";

export const useGetAndPostMethod = <
  BaseModel extends {
    id?: number;
    token?: string;
  },
>({
  url,
}: {
  url: string;
}) => {
  const { fetch } = useAxios();

  const post = useSWRMutation(
    url,
    async function (_, { arg }: { arg: BaseModel }) {
      return fetch({
        url,
        data: arg,
        method: "POST",
      });
    },
  );

  const get = useSWR(url, () => {
    return fetch<unknown, BaseResponse<BaseModel[]>>({
      url,
      method: "GET",
    }).then((value) => value?.data);
  });
  
  return {
    post,
    get,
  };
};
