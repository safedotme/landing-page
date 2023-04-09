import { useRive } from "@rive-app/react-canvas";

const BubbleAnimation = () => {
  const { rive, RiveComponent } = useRive({
    src: "animation.riv",
    autoplay: true,
  });

  const genSize = () => {};

  return (
    <div className=" left-0 right-0 flex w-screen justify-center bg-transparent">
      <div className="fixed bottom-0 flex h-[80vh] w-[139vh]">
        <RiveComponent />
      </div>
    </div>
  );
};

export default BubbleAnimation;
