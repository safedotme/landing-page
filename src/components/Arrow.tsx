interface ArrowIconProps {
  color: string;
}

const ArrowIcon = (props: ArrowIconProps) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1434 5.57155L15.1434 9.28583M15.1434 9.28583L11.1434 13.0001M15.1434 9.28583H3.14343"
        stroke={props.color}
        strokeWidth="1.71429"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
