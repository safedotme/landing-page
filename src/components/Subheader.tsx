interface SubheaderProps {
  text: string;
}

const Subheader = (props: SubheaderProps) => {
  return (
    <p
      className={`mx-auto text-center text-[1.1rem] font-[400] text-[#B4B5B9] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[913px]`}
    >
      {props.text}
    </p>
  );
};

export default Subheader;
