import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import { useRive } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

const Hook = () => {
  const { rive, RiveComponent } = useRive({
    src: "animation.riv",
    autoplay: true,
  });
  const wWidth = useWindowWidth();
  const wHeight = useWindowHeight();

  const [border, setBorder] = useState("border-md.svg");

  const [isWSmall, setIsWSmall] = useState(true);
  const [isHSmall, setIsHSmall] = useState(false);

  const handleResize = (w: number, h: number) => {
    if (w > 1000) {
      setBorder("border-lg.svg");
    } else if (w > 500) {
      setBorder("border-md.svg");
    } else {
      setBorder("border-sm.svg");
    }

    if (w > 500) {
      setIsWSmall(false);
    } else {
      setIsWSmall(true);
    }

    if (h > 900) {
      setIsHSmall(false);
    } else {
      setIsHSmall(true);
    }
  };

  useEffect(() => handleResize(wWidth, wHeight), [wWidth, wHeight]);

  return (
    <div className="left-0 right-0 flex w-screen justify-center bg-transparent">
      <div className=" absolute bottom-[-100px] flex h-[85vh] w-[147vh]">
        <RiveComponent />
      </div>

      <img src={border} className="absolute bottom-[-105px] w-screen" />
      <img
        src="screen.webp"
        className={
          isWSmall || isHSmall
            ? "absolute bottom-[-225px] h-[80vh] max-h-[674px] max-w-[312px]"
            : "absolute bottom-[-125px] h-[80vh] max-h-[674px] max-w-[312px]"
        }
      />
      <div className="absolute bottom-[-288px] h-[400px] rounded-[50%/50%_50%_50%_50%] bg-[#EA336C] bg-opacity-[0.4] blur-[100px] sm:w-screen md:w-screen lg:w-[900px]" />
    </div>
  );
};

export default Hook;
