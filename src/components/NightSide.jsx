import { NightTemp } from "./NightTemp";

export const NightSide = () => {
  return (
    <div className="w-[800px] h-[1200px] rounded-[0_50px_50px_0] bg-[#0F141E] flex justify-center">
      <div className="flex justify-center mt-[230px]">
        <NightTemp />
      </div>
    </div>
  );
};
