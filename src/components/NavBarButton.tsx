import data from "../data.json";

const NavButton = () => {
  return (
    <button className="rounded-full bg-gradient-to-r from-grad-100 via-grad-200 to-grad-300 p-[2px] transition-all ease-in hover:scale-[1.02]">
      <div
        className="flex h-[43px] flex-row items-center justify-center space-x-[8px] rounded-3xl bg-gradient-to-r from-grad-400 via-grad-500 to-grad-600 px-[24px]"
        onClick={() => {
          window.open(data.download, "_blank");
        }}
      >
        <img src="apple.svg" className="h-[18px] pb-[2px]" />
        <p className="font-display text-[1.02rem] font-bold text-white">
          Download Now
        </p>
      </div>
    </button>
  );
};

export default NavButton;
