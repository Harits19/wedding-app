import { WhitelistArrayValidator } from "@/app/core/models/whitelist-model";
import { WhitelistRepository } from "@/app/core/repository/whitelist-repository";
import { ResponseUtil } from "@/app/core/utils/response-util";
import { checkToken } from "@/app/core/utils/token";

export const GET = () => {
  return ResponseUtil.json({
    errorMessage: "Error when getting list of whitelist",
    callback: async () => {
      const result = await WhitelistRepository.getAll();
      return {
        message: "success get data",
        data: result,
      };
    },
  });
};

export const POST = async (request: Request) => {
  return ResponseUtil.json({
    errorMessage: "Error when post whitelist",
    callback: async () => {
      checkToken(request);
      const body = await request.json();

      // const listWhiteList = [
      //   "Pakde Misbah",
      //   "Pakde Pramono",
      //   "Mas Naufal",
      //   "Mas Wahyu",
      //   "Mba Ayu",
      //   "Mbah Jito",
      //   "Om Rozi",
      //   "Om Rakha",
      //   "Bulek Rahma",
      //   "Om Robbi",
      //   "Om Rendra",
      //   "Bude Ari",
      //   "Pakde Sutris",
      //   "Mas Deris",
      //   "Pakde Jangi",
      //   "Pakde Tatok",
      //   "Mba Erni",
      //   "Koko",
      //   "Pakde Aris",
      //   "Keluarga Jakarta",
      //   "Keluarga Cilacap",
      //   "Tante Putri",
      //   "Mbah Mus",
      //   "Bude tin",
      //   "Bude Prapti",
      //   "Keluarga Inti",
      //   "Mas Sauki",
      //   "Mas Imam",
      //   "Mas Furqon",
      //   "Mamah fi",
      //   "Bude Endang",
      //   "Mba Arum",
      //   "Bulek Lis",
      //   "Mba Ayu Madiun",
      //   "Om Agus",
      //   "Enggar",
      //   "Om Bambang",
      //   "Bude Nining",
      //   "Bu Amiyati",
      //   "Tante Iil",
      //   "Om Adi",
      //   "Tante Nana",
      //   "Tante Putri",
      //   "Trisila",
      //   "Nur Hanim",
      //   "Nur Hasanah",
      //   "Basuki",
      // ].map((item) => ({
      //   name: item,
      // }));

      const whitelist = WhitelistArrayValidator.parse(body);

      await WhitelistRepository.insert(whitelist);

      return {
        message: "Success post whitelist model",
        data: whitelist,
      };
    },
  });
};
