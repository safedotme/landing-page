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
            { text: "App Store", onClick: () => {} },
            { text: "Help Center", onClick: () => {} },
            { text: "How to Contribute", onClick: () => {}, isLink: true },
            { text: "Rate the App", onClick: () => {}, isLink: true },
          ]}
        />
        <FooterComponent
          header="Initiative"
          items={[
            { text: "The Safe Story", onClick: () => {} },
            { text: "Contributors", onClick: () => {} },
            { text: "Privacy Policy", onClick: () => {} },
            { text: "Terms of Service", onClick: () => {} },
            { text: "Press Kit", onClick: () => {}, isLink: true },
          ]}
        />
        <FooterComponent
          header="Reach Out"
          items={[
            { text: "Email", onClick: () => {}, isLink: true },
            { text: "Twitter", onClick: () => {}, isLink: true },
            { text: "GitHub", onClick: () => {}, isLink: true },
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
