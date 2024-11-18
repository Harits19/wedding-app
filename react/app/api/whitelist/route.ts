"use server";

import { HttpStatusCode } from "axios";
import JsonUtil from "@/app/core/utils/json";
import { WhitelistModel } from "@/app/core/models/whitelist-model";

const { get } = new JsonUtil<WhitelistModel>("whitelist");

const name = ["Arief", "Asroru", "Hilmi", "Irwan", "Khairi", "Rizki Augusta", "Raden Abhista", "Reinaldi", "Reza", "Kindi", "Hawim", "Umi", "Fitra", "Yufta", "Diva", "Ervina", "Rais Sulaiman", "Ammar Yazid", "Fatih", "Yahya", "Fahmi", "Pandu", "Daniel", "Setyo", "Asep", "Iskandar", "Ariyadi", "Nurul", "Ahkam", "Carlo", "Pahlevi", "Afi", "Fina", "Atiqah", "Yunny", "Hamdani", "Rizki", "Ramadhan Iqbal"];
const akad = ["Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak"];
const resepsi = ["Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak"];
const ngunduhMantu = ["Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Tidak", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya", "Ya"];


export const GET = async () => {

  const getBooleanValue = (value?: string) => value === "Ya" ? true : false
  const mappedName = name.map<WhitelistModel>((item, index) => ({
    name: item,
    isInvitedToAkad: getBooleanValue(akad.at(index)),
    isInvitedToResepsi: getBooleanValue(resepsi.at(index)),
    isInvitedToNgunduhMantu: getBooleanValue(ngunduhMantu.at(index)),
  }))

  console.log(JSON.stringify(mappedName))
  try {
    const result = await get()
    return Response.json({
      data: result,
    });
  } catch (error) {
    return Response.json({
      error,
    }, { status: HttpStatusCode.InternalServerError, });
  }
};

