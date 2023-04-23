interface DemoButtonProps {
  text: String;
  onClick: () => void;
}

const DemoButton = (props: DemoButtonProps) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="h-[47px] rounded-[10px] bg-[#ffffff33] px-[23px] transition-all hover:scale-[1.02] hover:bg-[#ffffff4D]"
      >
        <p className="font-display text-[1rem] font-[500]">{props.text}</p>
      </button>
    </div>
  );
};

export default DemoButton;
