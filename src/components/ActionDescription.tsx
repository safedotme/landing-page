interface ActionDescriptionProps {
  text: string;
}

const ActionDescription = (props: ActionDescriptionProps) => {
  return (
    <p className="font-display font-[400] opacity-[0.8] sm:text-[0.9rem] md:text-[1.05rem]">
      {props.text}
    </p>
  );
};

export default ActionDescription;
