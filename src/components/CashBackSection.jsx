import marketBasket from "../image/marketBasket.jpg";
import bill from "../image/bill.jpg";
import currency from "../image/currency.jpg";

const CashBackSection = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-4 text-center ">
      <h3 className="font-Montserrat font-bold text-2xl text-left md:text-center text-[#333333] ">
        Cash back with every healthy choice
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-y-8 md:gap-x-[18px] lg:gap-x-20 mt-8 mb-8 md:mb-12 ">
        <div className="flex items-center gap-x-6 max-w-[280px] font-karla text-base font-normal text-left text-[#333333] ">
          <img src={marketBasket} alt="Loading..." className="w-16 h-16" />
          <div>
            <span className="font-bold">Shop in-store</span>
            <p className="leading-5">Browse our offers at stores near you</p>
          </div>
        </div>
        <div className="flex items-center gap-x-6 max-w-[280px] font-karla text-base font-normal text-left text-[#333333] ">
          <img src={bill} alt="Loading..." className="w-16 h-16" />
          <div>
            <span className="font-bold">Upload your receipt</span>
            <p className="leading-5">
              After shopping in-store upload your receipt
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-6 max-w-[280px] font-karla text-base font-normal text-left text-[#333333] ">
          <img src={currency} alt="Loading..." className="w-16 h-16" />
          <div>
            <span className="font-bold">Get paid within 48hrs!</span>
            <p className="leading-5">
              Venmo(US Only), PayPal, or gift cards within 48hrs 🎉️🤑
            </p>
          </div>
        </div>
      </div>
      <button className="w-full md:w-auto px-8 py-3 font-karla font-bold leading-5 text-[#db2573] border border-solid border-[#db2573] rounded hover:text-[#fbfbfb] hover:bg-gradient-to-tl hover:from-[#e42748] hover:to-[#d1239d] ">
        VIEW OFFERS
      </button>
    </div>
  );
};

export default CashBackSection;
