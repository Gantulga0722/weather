import Image from "next/image";
import { Inter } from "next/font/google";
import { DaySide, NightSide } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container flex mx-auto w-[1863px] h-[1454px] bg-[#404040] p-[50px]">
      <div className="flex mx-auto w-[100%] h-[100%] ">
        <DaySide />
        <NightSide />
      </div>
    </div>
  );
}
