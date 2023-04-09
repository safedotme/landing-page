const NavButton = () => {
  return (
    <button className="rounded-full bg-gradient-to-r from-grad-100 via-grad-200 to-grad-300 p-[2px] transition-all ease-in hover:scale-[1.02]">
      <div
        className="flex h-[48px] flex-row items-center justify-center space-x-[10px] rounded-3xl bg-gradient-to-r from-grad-400 via-grad-500 to-grad-600 px-[25px]"
        onClick={() => {
          // TODO: Implement to-do functionality
        }}
      >
        <img src="apple.svg" className="h-[21px] pb-[2px]" />
        <p className="font-display text-[1.05rem] font-bold text-white">
          Download Now
        </p>
      </div>
    </button>
  );
};

export default NavButton;
