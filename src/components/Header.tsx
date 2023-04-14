interface HeaderProps {
  text: string;
}

const Header = (props: HeaderProps) => {
  return (
    <p className=" text-center font-display font-bold sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem]">
      {props.text}
    </p>
  );
};

export default Header;
