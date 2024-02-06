import {
  SunIcon,
  LocationIcon,
  HeartIcon,
  HomeIcon,
  PersonIcon,
} from "./icons";

export const NightTemp = () => {
  return (
    <div className="flex flex-col w-[414px] h-[828px] rounded-[48px] bg-[#1B2633] justify-center items-center">
      <div className="flex flex-col w-[398px] h-[504px] justify-center items-center gap-10">
        <div className="flex justify-around w-[100%]">
          <div className="flex flex-col">
            <p>September 10, 2021</p>
            <h1>Krakow</h1>
          </div>
          <div className="flex">
            <LocationIcon />
          </div>
        </div>
        <div className="flex">
          <img src="/moon.png" alt="" className="w-[262.11px] h-[262.11px]" />
        </div>
      </div>
      <div className="flex flex-col w-[398px] h-[504px] justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-[144px] font-extrabold">17</h1>
          <p className="text-[24px] font-extrabold text-[#777CCE]">Clean</p>
          <div className="flex justify-between items-center">
            <div className="w-[32px] h-[32px]">
              <HomeIcon />
            </div>
            <div className="w-[32px] h-[32px]">
              <LocationIcon />
            </div>
            <div className="w-[32px] h-[32px]">
              <HeartIcon />
            </div>
            <div className="w-[32px] h-[32px]">
              <PersonIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
