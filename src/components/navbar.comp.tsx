import { useEffect, useState } from "react";
import NavButton from "./navbutton.comp";

const NavBar = () => {
  const [scrollState, setScrollState] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 100) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  });

  return (
    <div
      className={`fixed left-0 right-0 top-0 flex flex-row justify-between px-[4vw] pb-[20px] pt-[25px] ${
        scrollState
          ? "border-b-[#ffffff33] bg-[#0E0E0EB3]"
          : "border-b-transparent bg-transparent"
      } border-b backdrop-blur-[60px] transition-all delay-0 duration-200`}
    >
      <img src="logo.png" className="h-[48px]" />
      <NavButton />
    </div>
  );
};

export default NavBar;
