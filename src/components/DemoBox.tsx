import ActionDescription from "./ActionDescription";
import ActionHeader from "./ActionHeader";
import ActionIcon from "./ActionIcon";
import AppPreview from "./AppPreview";
import DemoButton from "./DemoButton";

const DemoBox = () => {
  const handleDownloadClick = () => {
    // TODO: Handle click
    console.log("Handle click");
  };

  return (
    <div
      className={`relative rounded-[14px] bg-cover bg-center sm:mx-[20px] sm:flex sm:h-[970px] md:mx-[37px] lg:h-[754px] xl:mx-auto xl:w-[1100px]`}
      style={{ backgroundImage: "url('gradient.png')" }}
    >
      <div className="z-1 absolute inset-0 rounded-[14px] bg-grey-900 opacity-[0.25]" />
      <div className="z-30 flex flex-col px-[60px] sm:my-[60px] sm:w-full lg:my-auto lg:w-[565px]">
        <ActionIcon icon="lightning" />
        <div className="h-[28px]" />
        <ActionHeader text="A dozen actions in one button" />
        <div className="sm:h-[10px] lg:h-[20px]" />
        <ActionDescription text="With one button, Safe will livestream video from your phone's camera while tracking your location. In addition, your contacts get an SMS and phone call, and can see what's happening in real-time. All data is stored securely in the cloud." />
        <div className="h-[28px]" />
        <DemoButton text="Download for iOS" onClick={handleDownloadClick} />
      </div>
      <div className="z-20 h-[627px] sm:absolute sm:top-[370px] sm:w-full sm:scale-[0.8] lg:relative lg:top-[64px] lg:w-[650px] lg:scale-[1]">
        <AppPreview />
      </div>
    </div>
  );
};

export default DemoBox;
