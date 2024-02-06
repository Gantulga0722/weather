import { SearchIcon } from "./icons";

export const Search = () => {
  return (
    <div className="w-[567px] h-[80px] rounded-[48px] gap-4 p-[16px_24px_16px_24px] flex items-center bg-[#FAFBFC]">
      <div className="w-[35px] h-[35px]">
        <SearchIcon />
      </div>
      <input type="text" className="w-[455px] h-[44px]" />
    </div>
  );
};
