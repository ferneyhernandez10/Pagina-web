import healthyFoodsOnYourMobile from "../image/healthyFoodsOnYourMobile.jpg";

const DesktopVersion = () => {
  return (
    <div className="relative bg-stone-100 bg-gradient-to-r from-[#e6f9f9] from-40% via-[#fadfc550] via-56% to-[#e5bccf] to-100% h-auto overflow-x-hidden overflow-y-hidden ">
      <div className="absolute left-[-300px] top-[-541px] lg:left-[-280px] lg:top-[-521px] w-[602px] h-[602px] border-2 border-solid border-white rounded-[50%] box-border "></div>
      <div className="absolute w-2.5 h-2.5 bg-[#37c0c0] rounded-[50%] left-[50px] top-[50px] lg:left-[60px] lg:top-[72px] "></div>
      <div className="absolute left-[87%] top-[74%] w-[602px] h-[602px] border-2 border-solid border-white rounded-[50%] "></div>
      <div className="absolute w-2.5 h-2.5 bg-[#db2573] rounded-[50%] left-[94%] top-[72%] "></div>
      <div
        className="mx-auto w-full max-w-[1200px] h-full max-h-[472px] px-4 flex justify-between bg-no-repeat bg-[length:100%_100%] bg-[position:0%_0%] "
        style={{ backgroundImage: "url('/src/image/productShelf.jpg')" }}
      >
        <div className="flex flex-col justify-center items-start py-10 h-auto">
          <h1 className="font-Montserrat text-[40px] font-bold leading-[48px] w-[400px]">
            Make the switch to better-for-you groceries
          </h1>
          <p className="font-karla text-xl font-normal mt-4 mb-8 ">
            Try free or discounted natural products
          </p>
          <div>
            <button className="px-8 py-3 mr-4 font-karla font-bold leading-5 text-[#fbfbfb] border border-solid border-[#db2573] rounded bg-gradient-to-br from-[#e42748] to-[#d1239d] hover:bg-gradient-to-tl">
              GET STARTED
            </button>
            <button className="px-8 py-3 font-karla font-bold leading-5 text-[#db2573] border border-solid border-[#db2573] rounded hover:text-[#fbfbfb] hover:bg-gradient-to-tl hover:from-[#e42748] hover:to-[#d1239d]">
              HOW IT WORKS
            </button>
          </div>
        </div>
        <img
          src={healthyFoodsOnYourMobile}
          alt="Loading..."
          className={`md:h-[447px] md:ml-[-150px] md:mt-[-70px] md:mb-[-81px] md:mr-[-40px] custom-915:h-full custom-915:max-h-[459px] custom-915:ml-0 custom-1100:max-h-[641px] custom-1100:mb-0 `}
        />
      </div>
    </div>
  );
};

export default DesktopVersion;
