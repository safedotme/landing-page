const AppPreview = () => {
  return (
    <div
      className={`mx-auto h-full w-[283px] rounded-[27px] border-[2px] border-[#8F8D9133] bg-[#0000004D] ring-[0.5px] ring-[#000000cc] drop-shadow-[0px_15px_45px_rgba(0,0,0,0.9)]`}
    >
      <div className="mx-auto h-full p-[4px]">
        <video
          src="demo.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="h-full rounded-[22px] border-[2px] border-[#ffffff4d]"
        />
      </div>
    </div>
  );
};

export default AppPreview;
