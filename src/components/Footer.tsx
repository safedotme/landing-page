import FooterComponent from "./FooterComponent";

const Footer = () => {
  return (
    <div className="flex flex-col sm:mr-[35px] md:mr-[60px] xl:mr-0">
      <div className=" w-full pb-[30px] sm:block sm:px-[20px] md:px-[32px] lg:hidden">
        <img src="logo.svg" className="h-[30px]" />
      </div>
      <div className="grid gap-[27px] sm:mx-[20px] sm:w-full sm:grid-cols-2 md:mx-[32px] lg:grid-cols-4 xl:mx-auto xl:w-[1100px]">
        <div className="h-[320px] w-full sm:hidden lg:block">
          <img src="logo.svg" className="h-[30px]" />
        </div>
        <FooterComponent
          header="Product"
          items={[
            {
              text: "App Store",
              onClick: () => {
                console.log("Go to app store");
              },
            },
            {
              text: "Help Center",
              onClick: () => {
                console.log("Go to help center");
              },
            },
            {
              text: "How to Contribute",
              onClick: () => {
                console.log("Go to contributors");
              },
              isLink: true,
            },
            {
              text: "Rate the App",
              onClick: () => {
                console.log("Rate the app");
              },
              isLink: true,
            },
          ]}
        />
        <FooterComponent
          header="Initiative"
          items={[
            {
              text: "The Safe Story",
              onClick: () => {
                console.log("Go to story");
              },
            },
            {
              text: "Contributors",
              onClick: () => {
                console.log("Go to contributors");
              },
            },
            {
              text: "Privacy Policy",
              onClick: () => {
                console.log("Go to priv pol");
              },
            },
            {
              text: "Terms of Service",
              onClick: () => {
                console.log("Go to tos");
              },
            },
            {
              text: "Press Kit",
              onClick: () => {
                console.log("Go to press kit");
              },
              isLink: true,
            },
          ]}
        />
        <FooterComponent
          header="Reach Out"
          items={[
            {
              text: "Email",
              onClick: () => {
                console.log("Send email");
              },
              isLink: true,
            },
            {
              text: "Twitter",
              onClick: () => {
                console.log("Go to twitter");
              },
              isLink: true,
            },
            {
              text: "GitHub",
              onClick: () => {
                console.log("Go to GitHub");
              },
              isLink: true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
