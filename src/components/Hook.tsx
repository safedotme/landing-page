import { useWindowWidth } from "@react-hook/window-size";
import { useRive } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

const Hook = () => {
  const { rive, RiveComponent } = useRive({
    src: "animation.riv",
    autoplay: true,
  });
  const wWidth = useWindowWidth();
  const width = 100;
  const [border, setBorder] = useState("border-md.svg");

  const [isSmall, setIsSmall] = useState(true);

  const handleResize = (w: number) => {
    if (w > 1000) {
      setBorder("border-lg.svg");
    } else {
      setBorder("border-md.svg");
    }

    if (w > 500) {
      setIsSmall(false);
    } else {
      setIsSmall(true);
    }
  };

  useEffect(() => handleResize(wWidth), [wWidth]);

  return (
    <div className="left-0 right-0 flex w-screen justify-center bg-transparent">
      <div className=" absolute bottom-[-100px] flex h-[85vh] w-[147vh]">
        <RiveComponent />
      </div>

      <img src={border} className="absolute bottom-[-105px] w-screen" />
      <img
        src="screen.png"
        className={
          isSmall
            ? "absolute bottom-[-225px] w-[312px] scale-[0.9]"
            : "absolute bottom-[-125px] w-[312px] scale-[1]"
        }
      />
      <div className="absolute bottom-[-288px] h-[400px] rounded-[50%/50%_50%_50%_50%] bg-[#EA336C] bg-opacity-[0.4] blur-[100px] sm:w-screen md:w-screen lg:w-[900px]" />
    </div>
  );
};

export default Hook;
