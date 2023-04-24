interface ActionIconProps {
  icon: string;
}

const ActionIcon = (props: ActionIconProps) => {
  return (
    <div
      className="flex h-[73px] w-[73px] items-center justify-center rounded-[18px]"
      style={{
        background:
          "radial-gradient(ellipse at center, #ffffff73 0%, #ffffff26 100%)",
      }}
    >
      <img src={`${props.icon}.svg`} className="h-[37px] w-[37px] " />
    </div>
  );
};

export default ActionIcon;
