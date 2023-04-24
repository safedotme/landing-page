import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";

const SafeWeb: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default SafeWeb;
