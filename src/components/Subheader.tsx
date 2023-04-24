interface SubheaderProps {
  text: string;
}

const Subheader = (props: SubheaderProps) => {
  return (
    <p
      className={`mx-auto text-center font-[400] text-[#B4B5B9] sm:max-w-[80vw] sm:text-[1rem] md:max-w-[60vw] md:text-[1.1rem] lg:max-w-[913px]`}
    >
      {props.text}
    </p>
  );
};

export default Subheader;
