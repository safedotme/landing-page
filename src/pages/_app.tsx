import { type AppType } from "next/dist/shared/lib/utils";
import localFont from "next/font/local";

import "~/styles/globals.css";

const font = localFont({
  src: [
    {
      path: "../../public/font/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/bold.woff2",
      weight: "700",
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
