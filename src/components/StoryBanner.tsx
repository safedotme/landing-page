import ArrowIcon from "./Arrow";
import data from "../data.json";

const StoryBanner = () => {
  return (
    <div className=" flex overflow-hidden rounded-[14px] bg-gradient-to-r from-[#EE813133] via-[#EA336CCC] to-[#C127BF33] sm:mx-[30px] lg:mx-auto lg:w-[955px]">
      <div className="m-[5px] flex w-full flex-row justify-between space-x-[24px] rounded-[9px] border-[1.7px] border-white/[0.2] bg-black/[0.8] bg-gradient-to-r from-[#EE813105] via-[#EA336C1A] to-[#C127BF05] p-[46px]">
        <div className="flex flex-col space-y-[10px]">
          <p className="font-display text-[1.4rem] font-[600]">
            Check out the Safe story
          </p>
          <p className="font-display text-[1.1rem] font-[400] text-[#B4B5B9]/[0.8]">
            Safe is a social impact venture founded to expose and mitigate
            injustice
          </p>
        </div>
        <button
          className="m-auto flex flex-row space-x-[4px] rounded-[14px] bg-[#C127BF26] transition-all duration-300 hover:scale-[1.05]  hover:bg-[#C127BF40] sm:p-[18px] lg:px-[18px] lg:py-[11px]"
          onClick={() => {
            window.open(data.story, "_blank");
          }}
        >
          <p className="pr-[3px] font-display font-[500] text-[#C127BF] sm:hidden lg:block">
            View Story
          </p>
          <div className="mt-[2px] sm:scale-[1.3] lg:scale-[1]">
            <ArrowIcon color="#C127BF" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default StoryBanner;
