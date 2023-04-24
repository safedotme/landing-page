import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

const AppPreview = () => {
  const ref = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState("0");

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const aspectR = 375 / 812;

    setWidth((aspectR * ref.current.height).toString());
    console.log(width);
  }, [ref.current]);

  return (
    <div
      className={`mx-auto h-full rounded-[27px] border-[2px] border-[#8F8D9133] bg-[#0000004D] ring-[0.5px] ring-[#000000cc] drop-shadow-[0px_15px_45px_rgba(0,0,0,0.9)] w-[${width}px]`}
    >
      <div className="mx-auto h-full p-[4px]">
        <img
          src="demo.png"
          ref={ref}
          className="h-full rounded-[22px] border-[2px] border-[#ffffff4d]"
        />
      </div>
    </div>
  );
};

export default AppPreview;
