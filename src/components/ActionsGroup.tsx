import ActionInfo from "./ActionInfo";
import DemoBox from "./DemoBox";
import Header from "./Header";
import Subheader from "./Subheader";

const ActionsGroup = () => {
  return (
    <div className="flex flex-col justify-stretch">
      <Header text="All you need in an emergency at the press of a button" />
      <div className="h-[16px]" />
      <Subheader text="In dangerous situations, don't worry about recording an incident or alerting your friends. Instead, activate Safe and focus on your safety. We'll handle everything else..." />
      <div className="sm:h-[70px] md:h-[100px]" />
      <DemoBox />
      <div className="h-[32px]" />

      <div className=" sm:mx-[20px] sm:flex sm:flex-col md:mx-[32px] lg:flex-row xl:mx-auto xl:w-[1100px]">
        <div className="w-full flex-col rounded-[14px] bg-[#181719] sm:flex sm:h-[600px] md:h-[754px] lg:flex-[27]">
          <div className="mt-[60px] sm:mx-[40px] md:mx-[60px]">
            <ActionInfo
              icon="warn"
              header="Notify your friends & family"
              body="Choose up to three individuals to be your emergency contacts. They will be notified whenever you activate the Safe app and receive real-time information/updates on the incident."
            />
          </div>
          <div className=" h-full" />
          <img
            src="friends-sm.webp"
            className="w-full px-[12px] pb-[8px] sm:visible md:hidden"
          />
          <img
            src="friends-md.webp"
            className="sm:h-[0px] sm:opacity-[0] md:mx-auto md:h-full md:w-[760px] md:opacity-[100] lg:w-full"
          />
        </div>

        <div className="sm:h-[32px] sm:w-0 lg:h-0 lg:w-[32px]" />
        <div className="flex w-full flex-col rounded-[14px] bg-[#181719] sm:flex sm:h-[600px] md:h-[754px] lg:flex-[20]">
          <div className="mt-[60px] sm:mx-[40px] md:mx-[60px]">
            <ActionInfo
              icon="cloud"
              header="We'll livestream & store everything"
              body="Your emergency contacts will be able to track your live location and watch a video stream of whats going on in real-time."
            />
          </div>
          <div className="my-auto sm:mx-[40px] md:mx-[60px]">
            <img
              src="map.webp"
              className="relative mx-auto drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] sm:w-[380px] sm:rounded-[18px] md:rounded-[26px] lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsGroup;
