const Header = () => {
  return (
    <div className="w-screen ">
      <div className="mx-auto flex max-w-[50rem] flex-col items-center space-y-[18px] pt-[18vh]">
        <p className="max-w-[50rem] bg-gradient-to-b from-header-100 to-header-200 bg-clip-text text-center font-display text-[3.5rem] font-[800] leading-tight text-transparent">
          A violence encounter tool for capturing unsafe situations
        </p>
        <p className="max-w-[38rem] text-center font-display text-[1.1rem] font-[400] text-header-300 text-opacity-60">
          Capture an incident with the press of a button. Alert your emergency
          contacts and provide them with a video and location stream of the
          incident.
        </p>
      </div>
    </div>
  );
};

export default Header;
