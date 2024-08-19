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
    }).then((value) => value.data);
  });

  const del = useSWRMutation(url, function (_, { arg }: { arg: BaseModel }) {
    if (!arg.id) throw Error("Empty id");
    return fetch({
      url: `${url}/${arg.id}`,
      method: "DELETE",
    });
  });

  return {
    post,
    get,
    del,
  };
};
