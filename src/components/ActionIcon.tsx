interface ActionIconProps {
  icon: string;
}

const ActionIcon = (props: ActionIconProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-[18px]  sm:h-[63px] sm:w-[63px] md:h-[73px] md:w-[73px]"
      style={{
        background:
          "radial-gradient(ellipse at center, #ffffff73 0%, #ffffff26 100%)",
      }}
    >
      <img
        src={`${props.icon}.svg`}
        className="sm:h-[32px] sm:w-[32px] md:h-[37px] md:w-[37px]"
      />
    </div>
  );
};

export default ActionIcon;
