const Header = () => {
  return (
    <div className="w-screen ">
      <div className="mx-auto flex  flex-col items-center space-y-[18px] pt-[18vh]">
        <p className="xlg:text-[3.5rem]  bg-gradient-to-b from-header-100 to-header-200 bg-clip-text text-center font-display font-[800] leading-tight text-transparent sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
          A violence encounter tool for
          <br />
          capturing unsafe situations
        </p>
        <p className="max-w-[38rem] text-center font-display font-[400] text-header-300 text-opacity-60 md:text-[0.9rem] lg:text-[1.1rem]">
          Capture an incident with the press of a button. Alert your emergency
          contacts
          <br />
          and provide them with a video and location stream of the incident.
        </p>
      </div>
    </div>
  );
};

export default Header;
