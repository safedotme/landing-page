import { useRive } from "@rive-app/react-canvas";

const Hook = () => {
  const { rive, RiveComponent } = useRive({
    src: "animation.riv",
    autoplay: true,
  });

  const genSize = () => {};

  return (
    <div className="left-0 right-0 flex w-screen justify-center bg-transparent">
      <div className=" absolute bottom-[-100px] flex h-[85vh] w-[147vh]">
        <RiveComponent />
      </div>
      <img src="border.svg" className="absolute bottom-[-105px] w-screen" />
      <img src="screen.png" className="absolute bottom-[-125px] w-[312px]" />
      <div className="absolute bottom-[-288px] h-[400px] rounded-[50%/50%_50%_50%_50%] bg-[#EA336C] bg-opacity-[0.4] blur-[100px] sm:w-screen md:w-screen lg:w-[900px]" />
    </div>
  );
};

export default Hook;
