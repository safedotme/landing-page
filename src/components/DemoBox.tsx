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
      className="relative rounded-[14px] bg-cover bg-center sm:mx-[20px] sm:flex sm:h-[950px] md:mx-[37px] lg:h-[754px] xl:mx-auto xl:w-[1100px]"
      style={{ backgroundImage: "url('gradient.png')" }}
    >
      <div className="z-1 absolute inset-0 rounded-[14px] bg-grey-900 opacity-[0.25]" />
      <div className="z-30 flex flex-col px-[60px] sm:my-[60px] sm:w-full lg:my-auto lg:w-[565px]">
        <ActionIcon icon="lightning" />
        <div className="h-[28px]" />
        <ActionHeader text="One up your productivity" />
        <div className="sm:h-[10px] lg:h-[20px]" />
        <ActionDescription
          text="On top of the core Raycast Extensions already built in, you can install
            Extensions built by Developers from the community. Everything you've asked
            for, in one place. Search and browse Extensions for your tools, actions
            and more."
        />
        <div className="h-[28px]" />
        <DemoButton text="Download for iOS" onClick={handleDownloadClick} />
      </div>
      <div className="z-20 h-[627px] sm:absolute sm:top-[350px] sm:w-full sm:scale-[0.8] lg:relative lg:top-[64px] lg:w-[650px] lg:scale-[1]">
        <AppPreview />
      </div>
    </div>
  );
};

export default DemoBox;
