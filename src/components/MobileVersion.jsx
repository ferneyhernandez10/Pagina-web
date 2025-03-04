const MobileVersion = () => {
  return (
    <div
      className="bg-no-repeat h-[511px] custom-360:h-[574px] sm:h-[750px] "
      style={{
        backgroundImage:
          "url('/src/image/mobileBackground.jpg'), url('/src/image/mobileBackgroundImage.jpg')",
        backgroundSize: "100% 100%, 100%",
      }}
    >
      <div className="h-full px-4 pb-8 text-[#333333] flex flex-col justify-end ">
        <h1 className="font-Montserrat font-bold text-2xl sm:text-[32px] sm:leading-10 w-[322px] sm:w-auto max-w-full">
          Make the switch to better-for-you groceries
        </h1>
        <p className="font-karla font-normal text-lg/[22.5px] sm:text-xl mt-2 sm:mt-4 mb-6 sm:mb-8 w-[280px] sm:w-auto ">
          Try free or discounted natural products
        </p>
        <div className="sm:flex ">
          <button className="w-full sm:w-auto px-8 py-3 mb-2 sm:mb-0 mr-4 rounded font-karla font-bold leading-5 text-[#fbfbfb] border border-solid border-[#db2573] bg-gradient-to-br from-[#e42748] to-[#d1239d] hover:bg-gradient-to-tl">
            GET STARTED
          </button>
          <button className="w-full sm:w-auto px-8 py-3 rounded font-karla font-bold leading-5 border border-solid border-[#db2573] text-[#db2573] hover:text-[#fbfbfb] hover:bg-gradient-to-tl hover:from-[#e42748] hover:to-[#d1239d]">
            HOW IT WORKS
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileVersion;
