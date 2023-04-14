import Header from "./header.comp";
import Subheader from "./subheader.comp";

const ActionsGroup = () => {
  return (
    <div className="flex flex-col justify-stretch">
      <Header text="A dozen actions with the press of a button" />
      <div className="h-[16px]" />
      <Subheader text="In dangerous situations, don't worry about recording an incident or alerting your friends. Instead, activate Safe and focus on your safety. We'll handle everything else..." />
      <div className="h-[100px]" />
      <div className="h-[754px] bg-white sm:mx-[20px] sm:flex md:mx-[37px] xl:mx-auto xl:w-[1100px]">
        <p className="m-auto text-[40px] text-black">action 1</p>
      </div>
      <div className="h-[37px]" />
      <div className=" sm:mx-[20px] sm:flex sm:flex-col md:mx-[37px] lg:flex-row xl:mx-auto xl:w-[1100px]">
        <div className="flex h-[754px] w-full bg-purple-400"></div>
        <div className="sm:h-[37px] sm:w-0 lg:h-0 lg:w-[37px]" />
        <div className=" flex h-[754px] w-full bg-red-400"></div>
      </div>
    </div>
  );
};

export default ActionsGroup;
