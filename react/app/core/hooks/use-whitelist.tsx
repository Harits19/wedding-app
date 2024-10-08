import useSWR from "swr";
import { WhitelistModel } from "../models/whitelist-model";
import { BaseResponse } from "../models/base-response";
import useSWRMutation from "swr/mutation";
import { useAxios } from "../config/axios";

const url = "/whitelist";

export const useWhitelist = () => {
  const { fetch } = useAxios();

  const post = useSWRMutation(
    url,
    async function (_, { arg }: { arg: WhitelistModel[] }) {
      return fetch({
        url,
        data: arg,
        method: "POST",
      });
    },
  );

  const get = useSWR(url, () => {
    return fetch<unknown, BaseResponse<WhitelistModel[]>>({
      url,
      method: "GET",
    }).then((value) => value?.data);
  });

  const del = useSWRMutation(
    url,
    function (_, { arg }: { arg: WhitelistModel }) {
      if (!arg.id) throw Error("Empty id");
      return fetch({
        url: `${url}/${arg.id}`,
        method: "DELETE",
      });
    },
  );

  const update = useSWRMutation(
    url,
    async function (_, { arg }: { arg: WhitelistModel }) {
      return fetch({
        url: `${url}/${arg.id}`,
        data: arg,
        method: "PUT",
      });
    },
  );

  return {
    post,
    get,
    del,
    update,
  };
};

export const useWhitelistFindByName = (name?: string) => {
  const { fetch } = useAxios();

  return useSWR(`${url}/name/${name}`, (key) => {
    if (!name) return undefined;
    return fetch<unknown, BaseResponse<WhitelistModel | undefined>>({
      url: key,
      method: "GET",
    }).then((value) => value?.data);
  });
};
