import CardProductData from "../components/CardProductData";
import HealthyProductsSection from "../components/HealthyProductsSection";
import RecentReviews from "../components/RecentReviews";
import TopRatedProductCardData from "../components/TopRatedProductCardData";
import CashBackSection from "../components/CashBackSection";
import DietSection from "../components/DietSection";

function HomePage() {
  return (
    <>
      <div className="mt-[60px] pb-3.5 flex flex-col">
        <HealthyProductsSection />
        <div className="bg-white py-6 md:py-10">
          <CashBackSection />
        </div>
        <div className="bg-gray-10 py-8 md:py-14 ">
          <CardProductData />
        </div>
        <div className="bg-gray-20 py-8 md:py-14 ">
          <TopRatedProductCardData />
        </div>
        <div className="bg-softGray py-8 md:py-14">
          <RecentReviews />
        </div>
        <div className="bg-gray-10 py-8 md:py-14 ">
          <DietSection />
        </div>
      </div>
    </>
  );
}

export default HomePage;
