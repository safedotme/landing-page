import { type AppType } from "next/dist/shared/lib/utils";
import localFont from "next/font/local";

import "~/styles/globals.css";

const font = localFont({
  src: [
    {
      path: "../../public/font/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sfrounded",
});

const SafeWeb: AppType = ({ Component, pageProps }) => {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default SafeWeb;
