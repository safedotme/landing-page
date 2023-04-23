interface FooterComponmentProps {
  header: String;
  items: FooterItem[];
}

interface FooterItem {
  text: String;
  isLink?: boolean;
  onClick: () => void;
}

const FooterComponent = (props: FooterComponmentProps) => {
  return (
    <div className="flex w-full flex-col">
      <p className="font-display text-[16px] font-[600]">{props.header}</p>
      <div className="h-[21px]" />
      {props.items.map((item, i) => {
        return (
          <button
            onClick={item.onClick}
            key={i}
            className="mb-[14px] flex flex-row"
          >
            <p className=" pr-[3px] text-left font-display text-[16px] font-[400] text-[#9C9B9C]">
              {item.text}
            </p>
            <img
              src="link.svg"
              className={`${item.isLink ? "" : "hidden"} mt-[2px] h-[18px]`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default FooterComponent;
