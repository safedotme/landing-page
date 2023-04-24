const HookHeader = () => {
  return (
    <div className="w-screen ">
      <div className="mx-auto flex  flex-col items-center space-y-[18px] pt-[18vh]">
        <p className="xlg:text-[3.5rem] bg-gradient-to-b from-header-100 to-header-200 bg-clip-text text-center font-display font-[700] leading-tight text-transparent sm:mx-[20px] sm:max-w-[500px] sm:text-[1.55rem] md:mx-0 md:max-w-[700px] md:text-[2.5rem] lg:max-w-[800px] lg:text-[3rem]">
          A violence encounter tool to get help and capture unsafe situations
        </p>
        <p className="max-w-[38rem] text-center font-display font-[400] text-header-300 text-opacity-60 sm:mx-[20px] sm:text-[0.9rem] lg:text-[1.1rem]">
          Capture an incident with the press of a button. Alert your emergency
          contacts and provide them with a video and location livestream of the
          incident.
        </p>
      </div>
    </div>
  );
};

export default HookHeader;
