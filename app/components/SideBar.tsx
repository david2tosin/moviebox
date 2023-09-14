import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export default function SideBar() {
  return (
    <div className=" bg-slate-200 w-56 h-full min-h-screen p-5 rounded-r-lg space-y-5">
      <div className="px-5 flex justify-between items-center">
        <Image src="/tv.png" alt="logo" height={50} width={50} />
        <span className={`${dm_sans.className} font-bold text-2xl`}>
          MovieBox
        </span>
      </div>

      <div className="pl-[42px] pr-[20px] py-7 flex justify-evenly items-center  hover:bg-[#BE123C]/10 hover:border-r-2 border-[#BE123C]  hover:text-[#BE123C]">
        <Image src="/Home.png" alt="home icon" height={25} width={25} />
        <h2 className=" font-semibold text-xl text-[#666]">Home</h2>
      </div>
      <div className="pl-[42px] pr-[20px] py-7 flex justify-evenly items-center  hover:bg-[#BE123C]/10 hover:border-r-2 border-[#BE123C]  hover:text-[#BE123C]">
        <Image
          src="/MovieProjector.png"
          alt="Projector icon"
          height={25}
          width={25}
        />
        <h2 className=" font-semibold text-xl text-[#666]">Movies</h2>
      </div>
      <div className="pl-[42px] pr-[20px] py-7 flex justify-evenly items-center  hover:bg-[#BE123C]/10 hover:border-r-2 border-[#BE123C]  hover:text-[#BE123C]">
        <Image src="/TVShow.png" alt="tv icon" height={25} width={25} />
        <h2 className=" font-semibold text-xl text-[#666]">TV Series</h2>
      </div>
      <div className="pl-[42px] pr-[20px] py-7 flex justify-evenly items-center  hover:bg-[#BE123C]/10 hover:border-r-2 border-[#BE123C]  hover:text-[#BE123C]">
        <Image src="/Calendar.png" alt="calender icon" height={25} width={25} />
        <h2 className=" font-semibold text-xl text-[#666]">Upcoming</h2>
      </div>

      <div className="m-7 bg-[#BE123C]/10 border rounded-lg border-[#BE123C] px-3 pt-10 pb-4 flex flex-col justify-center items-center space-y-3">
        <p className="font-semibold text-sm text-[#333333]/80">
          Play movie quizes and earn free tickets
        </p>
        <p className=" font-medium text-xs text-[#666]">
          50k people are playing now
        </p>
        <button className="py-2 px-6 bg-[#BE123C]/10 text-[#BE123C] rounded-full">
          Start Playing
        </button>
      </div>
      <div className="px-5 flex justify-center items-center text-[#666]">
        <Image src="/Logout.png" alt="logo" height={30} width={30} />
        <span className=" font-semibold text-xl">Logout</span>
      </div>
    </div>
  );
}
