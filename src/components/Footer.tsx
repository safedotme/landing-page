import FooterComponent from "./FooterComponent";
import data from "../data.json";

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
                window.open(data.download, "_blank");
              },
            },
            {
              text: "Help Center",
              onClick: () => {
                window.open(data.docs, "_blank");
              },
            },
            {
              text: "How to Contribute",
              onClick: () => {
                window.open(data.how_to_contribute, "_blank");
              },
              isLink: true,
            },
            {
              text: "Report a Bug",
              onClick: () => {
                window.open(data.bug, "_blank");
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
                window.open(data.story, "_blank");
              },
            },
            {
              text: "Contributors",
              onClick: () => {
                window.open(data.contributors, "_blank");
              },
            },
            {
              text: "Privacy Policy",
              onClick: () => {
                window.open(data.privacy, "_blank");
              },
            },
            {
              text: "Terms of Service",
              onClick: () => {
                window.open(data.terms, "_blank");
              },
            },
            {
              text: "Press Kit",
              onClick: () => {
                window.open(data.press, "_blank");
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
                const emailLink = `mailto:${data.email}`;
                window.location.href = emailLink;
              },
              isLink: true,
            },
            {
              text: "Twitter",
              onClick: () => {
                window.open(data.twitter, "_blank");
              },
              isLink: true,
            },
            {
              text: "GitHub",
              onClick: () => {
                window.open(data.github, "_blank");
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
