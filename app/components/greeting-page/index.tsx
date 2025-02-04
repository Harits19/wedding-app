import { useText } from "@/app/core/hooks/use-text";
import Background2 from "../background-2";
import InViewWrapper from "../inview-wrapper";
import ButtonBrown from "../button-brown";
import { useGreeting } from "@/app/core/hooks/use-greeting";
import moment from "moment";
import Background1 from "../background-1";
import { Dialog } from "../ui/dialog";
import { useState } from "react";
import AttendanceView from "../attendance-page";

const dummyGreeting = [
  {
    name: "Afi",
    message:
      "Masyaallah... Semoga lancarr sampai hari H Harits dan Fiaaa.... Sehat sehatt",
    id: 1732262253089,
    createdAt: "2024-11-22T07:57:33.089Z",
  },
  {
    name: "Afi",
    message:
      "Masyaallah... Semoga lancarr sampai hari H Harits dan Fiaaa.... Sehat sehatt",
    id: 1732262253300,
    createdAt: "2024-11-22T07:57:33.300Z",
  },
  {
    name: "Atiqah",
    message:
      "Barakallah Harits dan fiaa 💐 semoga dilancarkan dan dimudahkan sampai hari H ya. Selamat berbahagia, selamat mengarungi bahtera rumah tangga sakinah mawaddah warahmah",
    id: 1732266109373,
    createdAt: "2024-11-22T09:01:49.373Z",
  },
  {
    name: "Fina",
    message: "Selamatt harits dan fiaa, lancar2 sampe hari H yaa✨",
    id: 1732272874275,
    createdAt: "2024-11-22T10:54:34.275Z",
  },
  {
    name: "Customer experience team",
    message:
      "Diberikan undangan cukup kaget , semoga lancar sampai hari H dan menjadi pasangan yang kuat di jalan Allah",
    id: 1732508376417,
    createdAt: "2024-11-25T04:19:36.417Z",
  },
  {
    name: "Hawim",
    message:
      "Aaaa masyaallahh, kaget bangetttttt ciiiii. Happy teruss ya love bird🫶🏻🫶🏻🫶🏻🫶🏻",
    id: 1732523712097,
    createdAt: "2024-11-25T08:35:12.097Z",
  },
  {
    name: "Astrid julia andreina",
    message:
      'FIAAAAAAAAAA AKHIRNYA HUHUHU <3 semoga lancar selalu yaa sampai hari H, dan menjadi keluarga yg diberkahi Allah di dunia dan akhirat, aamiin! maaf ga bisa datang :")',
    id: 1732531598088,
    createdAt: "2024-11-25T10:46:38.088Z",
  },
  {
    name: "Tiara",
    message:
      "SOOO HAPPY!! Congrats mba fia & mas harits. Semoga lancar sampai hari H. Bismillah bismillah. Semoga samawa. Aamiin💐💐",
    id: 1732532069533,
    createdAt: "2024-11-25T10:54:29.533Z",
  },
  {
    name: "Fia diyant amalia",
    message:
      "Masya Allah Fiaaa, Selamaaat yaa dek, semoga lancar hajatnya dan menjadi keluarga sakinah mawaddah warrahmah. Aaamiiin",
    id: 1732532144336,
    createdAt: "2024-11-25T10:55:44.336Z",
  },
  {
    name: "M. khanif ashar",
    message:
      "MasyaAllah selamat ya Fia dan Harits. Semoga dilancarkan semua prosesnya🙏🙏",
    id: 1732533240487,
    createdAt: "2024-11-25T11:14:00.487Z",
  },
  {
    name: "Dian jaya",
    message:
      "Mbak Fia ya allah, agak kaget & syok sih mb, huhuhu selamat ya mb fia ya, semoga lancar sampe hari H mb fiaku 🥰❤😚",
    id: 1732534291077,
    createdAt: "2024-11-25T11:31:31.077Z",
  },
  {
    name: "Shasty",
    message:
      "Fiaaa, ya Allah, ga nyangka bangettt, semoga dilancarkan sampai hari H yaaa 😭🖤",
    id: 1732534805896,
    createdAt: "2024-11-25T11:40:05.896Z",
  },
  {
    name: "Tata",
    message:
      "Selamat dulur chelseaku mas harits, dan dek fia. Semoga dimudahkan dan dilancarkan segala urusannya sampai dengan Hari H 🙌🏻",
    id: 1732534907754,
    createdAt: "2024-11-25T11:41:47.754Z",
  },
  {
    name: "Azizatul ma'rifah",
    message:
      'Aaaaa Masya Allah fiaaa,, temen dari maba sampe skrg 🥹🥲 bener" syok & kaget tiba" ngirim undangan pernikahan. Semoga lancar  sampe hari H yaa beb. Doaku menyertaimu ❤️',
    id: 1732535051361,
    createdAt: "2024-11-25T11:44:11.361Z",
  },
  {
    name: "ara",
    message:
      "Masya Allah selamat ya pia, semoga dilancarkan dan dimudahkan hajatnya sm Allah dan jd keluarga sakinah mawaddah warrahmah, Aamiin. Sekali lagi selamat ya piaa ikut happy dengernya🥰🫶🏼",
    id: 1732536381108,
    createdAt: "2024-11-25T12:06:21.108Z",
  },
  {
    name: "Yuant frista amalia",
    message:
      "Akhirnya yaaa.. Alhamdulillah..\nSelamat menikah Fia dan mas Harits barakallahulakum semoga lancar sampe hari H, semoga menjadi keluarga yang sakinah mawadah warahmah aamiin 😍😍✨",
    id: 1732536485039,
    createdAt: "2024-11-25T12:08:05.039Z",
  },
  {
    name: "Ervina",
    message:
      "MasyaAllah Tabarakallah, semoga menjadi keluarga yg sakinah mawaddah dan warrahmah ya Mas Haris dan Fia❤️ Wishing you guys a lifetime of love and happiness🥰",
    id: 1732536744987,
    createdAt: "2024-11-25T12:12:24.987Z",
  },
  {
    name: "Risya jala tyara",
    message:
      "Subhanallah fia jujur kaget banget di kirim undangan. Selamat ya fi lancar terus sampai hari-h 🥰",
    id: 1732538603043,
    createdAt: "2024-11-25T12:43:23.043Z",
  },
  {
    name: "Mba nadia",
    message:
      "Fiaaa adekku, semoga selalu diberikan kelancaran dan kemudahan ya sampai hari H, semoga menjadi keluarga yg SAMAWA sayangku",
    id: 1732539458214,
    createdAt: "2024-11-25T12:57:38.214Z",
  },
  {
    name: "Nina aulia sap",
    message:
      "fiaaaa masyaallahhhh 🥹❤️ semoga lancar sampai hari H ya fia! semoga berbahagia sampai selamanya!",
    id: 1732544988032,
    createdAt: "2024-11-25T14:29:48.032Z",
  },
  {
    name: "Rizhaf Setyo",
    message:
      "Barakallah, selamat yaa Fia & Harists.\nTR 1 2019 menyatukan kalian berduaa, ciee wkwk\nSemoga sakinnah ma waddah wa rahmah :)",
    id: 1732548723475,
    createdAt: "2024-11-25T15:32:03.475Z",
  },
  {
    name: "Ariyadi",
    message:
      "Masya Allah, BaarakAllah harits dan fia. Semoga lancar, Allah mudahkan semuanya. Aamiin ya Rabbal alamin",
    id: 1732797666476,
    createdAt: "2024-11-28T12:41:06.476Z",
  },
  {
    name: "mehh",
    message:
      "berkah ya married nya, bahagia menua bersama selamanya aaminn yra",
    id: 1732944270202,
    createdAt: "2024-11-30T05:24:30.202Z",
  },
  {
    name: "mehh",
    message:
      "berkah ya married nya, bahagia menua bersama selamanya aaminn yra",
    id: 1732944270619,
    createdAt: "2024-11-30T05:24:30.619Z",
  },
  {
    name: "Alfiecca navalia",
    message:
      "Hari ini aku baru bisa menerima kalau bestieku mau menikah... 😭🤧✨\nrasanya sesek banget ditinggal bestie menikah. Tapi aku bahagiaaaa mengingat semua hal yang sudah dilalui. Jangan lupain aku plissss yaaaaa.",
    id: 1733023373446,
    createdAt: "2024-12-01T03:22:53.446Z",
  },
  {
    name: "Alfiecca navalia",
    message: "Snnsn",
    id: 1733023389763,
    createdAt: "2024-12-01T03:23:09.763Z",
  },
  {
    name: "Firma",
    message:
      "Masyaallah Fiaaa, ikut senenggggg, terima kasih undangannya, bismillah ya semoga lancarr, insyaallah bisa datang",
    id: 1733421449205,
    createdAt: "2024-12-05T17:57:29.205Z",
  },
  {
    name: "Kel. pakem jawa timur",
    message:
      "Insya Alloh Kel Kepanjen hadir..Smg kedua mempelai menjadi Keluarga Yang SAMAWA..",
    id: 1733520032656,
    createdAt: "2024-12-06T21:20:32.656Z",
  },
  {
    name: "igithary",
    message: "Untuk Ananda berdua selamat menempuh hidup baru. Amaziiingg...",
    id: 1733583198354,
    createdAt: "2024-12-07T14:53:18.354Z",
  },
  {
    name: "Bambang wahyudi",
    message:
      "Selamat Menempuh Hidup Baru. Semoga menjadi keluarga sakinah mawaddah warahmah.",
    id: 1733839314794,
    createdAt: "2024-12-10T14:01:54.794Z",
  },
  {
    name: "Dararida fandra",
    message:
      "Uwuuu sekalii kalian 🥹🥹 semoga sakinah mawaddah warahmah serta acaranya semoga diberi kelancaran dan kemudahan",
    id: 1734013329692,
    createdAt: "2024-12-12T14:22:09.692Z",
  },
  {
    name: "Alfin zabnabil",
    message:
      "Happy Wedding Fia dan Harist.. Semoga jadi keluarga samawa dan bahagia hingga akhir hayat ♥️",
    id: 1734063796761,
    createdAt: "2024-12-13T04:23:16.761Z",
  },
  {
    name: "Alfin zabnabil",
    message:
      "Happy Wedding Fia dan Harist.. Semoga jadi keluarga samawa dan bahagia hingga akhir hayat ♥️",
    id: 1734063796937,
    createdAt: "2024-12-13T04:23:16.937Z",
  },
  {
    name: "Sarah putri",
    message:
      "Masya allah mbak fiaaaa, lancar sampai hari H,semoga sakinah mawaddah warohmah yaaa🥰🥰",
    id: 1734089157004,
    createdAt: "2024-12-13T11:25:57.004Z",
  },
];

export default function GreetingPage() {
  const [showDialog, setShowDialog] = useState(false);

  const text = useText();
  const { get } = useGreeting();
  const { data, isLoading } = get;

  const greeting = data?.data ?? dummyGreeting;

  return (
    <>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <Background2>
          <InViewWrapper className="animate-fade-in-bottom-top w-full font-poppins  px-4 py-8">
            <AttendanceView
              onSubmitSuccess={() => {
                setShowDialog(false);
              }}
            />
          </InViewWrapper>
        </Background2>
      </Dialog>
      <Background1>
        <div className="flex flex-1 justify-center flex-col w-full items-center font-cardo text-black">
          <InViewWrapper className="animate-fade-zoom text-[37px] bg-white rounded-full bg-opacity-70  p-4">
            {text.doaDanUcapan}
          </InViewWrapper>

          <div className="h-10" />

          <div className="w-full mx-4">
            <div className="relative rounded-lg overflow-hidden">
              <InViewWrapper className=" h-[400px] overflow-y-scroll rounded-lg gap-y-4 flex flex-col mx-4   ">
                {isLoading
                  ? "Loading"
                  : greeting.map((item, index) => {
                      const getInitial = () => {
                        const words = item.name.split(" ");
                        const getFirstLetter = (index: number) =>
                          words.at(index)?.substring(0, 1).toUpperCase();
                        const first = getFirstLetter(0);
                        if (words.length > 1) {
                          const second = getFirstLetter(1);
                          return `${first}${second}`;
                        }
                        return first;
                      };
                      const colorName =
                        index % 2 === 0 ? "bg-wedDriftwood" : "bg-wedRed";
                      return (
                        <InViewWrapper
                          className="animate-fade-in-bottom-top shadow bg-white text-left rounded-lg flex flex-row p-4 items-stretch w-full backdrop-blur bg-opacity-50"
                          key={item.id}
                        >
                          <div
                            className={`h-[50px] w-[50px] flex flex-col ${colorName} text-white rounded-full items-center justify-center `}
                          >
                            {getInitial()}
                          </div>
                          <div className="flex flex-col pl-4 flex-1">
                            <div className="text-wedDriftwood">{item.name}</div>
                            <div className="h-1" />
                            <div className="font-poppins ">{item.message}</div>
                            <div className="h-4" />
                            <div className="text-xs opacity-30 text-right">
                              {moment(item.createdAt).format("DD/MM/YYYY")}
                            </div>
                          </div>
                        </InViewWrapper>
                      );
                    })}
              </InViewWrapper>
              <div className="h-8" />
              <div className="flex flex-row justify-center">
                <ButtonBrown
                  onClick={() => {
                    setShowDialog(true);
                  }}
                >
                  Kirim Ucapan dan RSVP
                </ButtonBrown>
              </div>
            </div>
          </div>
        </div>
      </Background1>
    </>
  );
}
