import { DayTemp } from "./DayTemp";
import { Search } from "./Search";

export const DaySide = () => {
  return (
    <div className="w-[800px] h-[1200px] rounded-[50px_0_0_50px] bg-[#F3F4F6] flex items-center flex-col">
      <div className="flex flex-col gap-[100px] mt-[50px]">
        <div>
          <Search />
        </div>
        <div className="flex justify-center items-center">
          <DayTemp />
        </div>
      </div>
    </div>
  );
};
