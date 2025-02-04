/* eslint-disable no-unreachable */
import moment from "moment";
import "moment/locale/id";
import { kPublic } from "../constans/public";
import { useEventName } from "./use-event-name";

moment.locale("id");

export const useText = () => {
  const akadDate = new Date("13-December-2024");
  const resepsiDate = new Date("14-December-2024");
  const ngunduhMantuDate = new Date("25-December-2024");
  const getFormatedDate = (date: Date) =>
    moment(date).locale("id").format("dddd, DD MMMM YYYY");
  const akadDateFormated = getFormatedDate(akadDate);
  const resepsiDateFormated = getFormatedDate(resepsiDate);
  const ngunduhMantuDateFormated = getFormatedDate(ngunduhMantuDate);

  const { isInvitedToAkad, isInvitedToNgunduhMantu, isInvitedToResepsi } =
    useEventName();
  const bride = "Fia";
  const groom = "Harits";
  const groomDetail = {
    fullName: "Abdullah Harits, S.Kom",
    instagram: "abd.harits19",
    sonOrder: "Putra kedua dari",
    image: kPublic.groomIntroduction,
    parentName:
      "Bpk. H. Wharnomo Fauzy, S.E., M.M\n&\n Ibu Hj. Jatisari Rahmawati",
    location: "Prambanan - Klaten",
  };
  const brideDetail = {
    fullName: "Mahardien Luthfiyah N, A.Md",
    instagram: "lthfyh_",
    image: kPublic.brideIntroduction,
    sonOrder: "Putri kedua dari",
    parentName: "Bpk (Alm) H. Muhariyadi, S.T\n&\n Ibu Romi Sumalia",
    location: "Singosari - Malang",
  };

  const groomBankAccount = {
    bankName: "Mandiri",
    noRekening: "1380020406778",
    whatsapp: "6283840493135",
    atasNama: "Abdullah Harits",
  };
  const brideBankAccount = {
    bankName: "Mandiri",
    noRekening: "1440022137928",
    whatsapp: "6283840493135",
    atasNama: "Mahardien Luthfiyah Nuradenia",
  };

  return {
    brideAndGroom: isInvitedToResepsi ? "Fia & Harits" : "Harits & Fia",
    weddingDate: moment(akadDate).format("dddd, DD MMMM YYYY"),
    dear: "Dear",
    youAreInvited: "You Are Invited",
    bukaUndangan: "Buka Undangan",
    theWeddingOf: "The Wedding Of",
    name1: isInvitedToResepsi ? bride : groom,
    name2: isInvitedToResepsi ? groom : bride,
    and: "and",
    kepadaYth: "Kepada Yth.",
    bapakIbuSaudara: "Bapak/Ibu/Saudara/i",
    assalamualaikum: "Assalamu’alaikum Wr. Wb.",
    denganMemohonRahmat:
      "Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :",
    detailFirstPerson: isInvitedToResepsi ? brideDetail : groomDetail,
    detailSecondPerson: isInvitedToResepsi ? groomDetail : brideDetail,
    mohonMaafJikaAdaKesalahanPenulisanNama:
      "*Mohon maaf jika ada kesalahan penulisan nama/gelar",
    reservasi: "Reservasi",
    doaDanUcapan: "Doa & Ucapan",
    kirimkanUcapan: "Kirimkan Ucapan",
    sayaAkanDatang: "Saya Akan Datang",
    sayaMasihRagu: "Saya Masih Ragu",
    maafSayaTidakBisaDatang: "Maaf, Saya Tidak Bisa Datang",
    silahkanIsiNamaAnda: "Silahkan Isi Nama Anda",
    silahkanIsiPesanAnda: "Silahkan Isi Pesan Anda",
    weddingGift: "Wedding Gift",
    tanpaMengurangiRasaHormat:
      "Tanpa mengurangi rasa hormat kami bagi tamu yang ingin mengirimkan hadiah kepada kedua mempelai dapat mengirimkannya melalui : ",
    noRekening: "No. Rekening",
    copy: "Copy",
    konfirmasiViaWA: "Konfirmasi Via WA",
    atasNama: "Atas Nama",
    andaJugaBisaMengirim:
      "Anda Juga Bisa Mengirim Kado Fisik Ke Alamat Berikut",
    alamatTerimaKado: "Perumahan Bekasi",
    whatsappPenerimaKado: "6283840493135",
    copyAlamat: "Copy Alamat",
    bankFirstPerson: isInvitedToResepsi ? brideBankAccount : groomBankAccount,
    bankSecondPerson: !isInvitedToResepsi ? brideBankAccount : groomBankAccount,
    whatsappConfirmationText:
      "Hai, Saya mau mengkonfirmasi pengiriman kado pernikahan berupa",
    uang: "uang",
    kado: "kado",
    merupakanSuatuKebahagiaan:
      "Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada kami.",
    waalaikumussalam: "Wassalamu’alaikum Wr. Wb.",
    kamiYangBerbahagia: "Kami Yang Berbahagia",
    madeWith: "Made With",
    byBrideAndGroom: isInvitedToResepsi
      ? " by Fia and Harits"
      : " by Harits and Fia",

    saveToCalendar: "Save To Calendar",
    rawWeddingDate: akadDate,
    rawNgunduhMantuDate: ngunduhMantuDate,
    resepsiDate: resepsiDateFormated,
    ngunduhMantuDate: ngunduhMantuDateFormated,
    resepsi: {
      title: "Resepsi",
      date: resepsiDateFormated,
      time: "10.00 WIB - 13.00 WIB",
      location1: "Kantri Resto",
      location2:
        "Jl. Raya Singosari No.169, Pagentan, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153",
      linkLocation: "https://maps.app.goo.gl/NJVFwKFWmPbARrWB8",
      hidden: !isInvitedToResepsi,
      showLocation: isInvitedToResepsi,
      saveToCalendar: "https://calendar.app.google/VKh2K3oCxaYdi1Zq7",
    },
    akad: {
      title: "Akad Nikah",
      date: akadDateFormated,
      time: "08.00 WIB - Selesai",
      location1: "Rumah Mempelai Perempuan",
      location2:
        "Jl. Simpati No.9, Losari, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153",
      linkLocation: "https://maps.app.goo.gl/8QoZmuDKp2j473yu6",
      showLocation: isInvitedToAkad,
      saveToCalendar: "https://calendar.app.google/CxkpJeS82WWUmaQ3A",
    },
    ngunduhMantu: {
      title: "Ngunduh Mantu",
      date: getFormatedDate(ngunduhMantuDate),
      time: "09.00 WIB - Selesai",
      location1: "Al Hakim Convention Hall",
      location2:
        "Jl. Tentara Pelajar, Gayamprit, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57423",
      linkLocation: "https://maps.app.goo.gl/sJ2hiBUgWjXMYt3t7",
      hidden: !isInvitedToNgunduhMantu,
      showLocation: isInvitedToNgunduhMantu,
      saveToCalendar: "https://calendar.app.google/iMHNXPuFizeJ12nx7",
    },
    selesai: "selesai",
    pukul: "Pukul",
    bertempatDi: "Bertempat di",
    lihatLokasi: "Lihat Lokasi",
    gallery: "Gallery",
    loveStory: {
      title: "Love Story",
      value: [
        {
          date: "16 Februari 2019",
          text: "Pertama kali bertemu di acara TR I RKIM UB. Harits sebagai panitia dan Fia sebagai peserta TR",
        },
        {
          date: "18 Agustus 2019",
          text: "Bertemu kembali pada acara kunjungan dan upgrading RKIM di Yogyakarta",
        },
        {
          date: "November 2019",
          text: "Setelah kegiatan di Yogyakarta, Fia dan Harits mulai menjalin komunikasi dan mulai mengikuti beberapa lomba team bersama",
        },
        {
          date: "13 April 2024",
          text: "Keluarga Harits silaturahmi ke kediaman keluarga Fia",
        },
        {
          date: "29 Juni 2024",
          text: "Keluarga Fia silaturahmi ke kediaman keluarga Harits",
        },
        {
          date: moment(akadDate).format("DD MMMM YYYY"),
          text: "Dengan mengucap Bissmillahirrahmanirrahim, InSyaa Allah atas restu kedua orang tua dan keluarga besar, kami mengucapkan ikrar janji suci melaksanakan sunnah Rasul untuk menikah agar selalu bersama hingga ke surga-Nya. Mohon do’anya agar rumah tangga kami selalu dalam lindungan Allah, Aamiin",
        },
      ],
    },
  };
};
