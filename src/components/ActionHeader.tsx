interface ActionHeaderProps {
  text: string;
}

const ActionHeader = (props: ActionHeaderProps) => {
  return (
    <p className="font-display font-[600] sm:text-[1.02rem] md:text-[1.3rem]">
      {props.text}
    </p>
  );
};

export default ActionHeader;
