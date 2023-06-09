import data from "../data.json";

const LearnMoreButton = () => {
  return (
    <button
      className="mx-auto flex flex-row p-[10px] transition-all hover:scale-[1.03]"
      onClick={() => {
        window.open(data.docs, "_blank");
      }}
    >
      <p className="font-display font-[600] sm:text-[0.92rem] md:text-[1.06rem]">
        Learn more in our docs
      </p>
      <div className="w-[8px]" />
      <img src="arrow.svg" className="mt-[3px]" />
    </button>
  );
};

export default LearnMoreButton;
