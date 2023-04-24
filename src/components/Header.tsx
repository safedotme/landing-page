interface HeaderProps {
  text: string;
}

const Header = (props: HeaderProps) => {
  return (
    <p className="text-center font-display font-[700] sm:mx-[20px] sm:text-[1.8rem] md:text-[2rem] lg:mx-[150px] lg:text-[2.6rem]">
      {props.text}
    </p>
  );
};

export default Header;
