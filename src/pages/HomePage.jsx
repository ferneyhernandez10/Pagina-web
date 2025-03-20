import CardProductData from "../components/CardProductData";
import HealthyProductsSection from "../components/HealthyProductsSection";
import RecentReviews from "../components/RecentReviews";
import TopRatedProductCardData from "../components/TopRatedProductCardData";

function HomePage() {
  return (
    <>
      <div className="mt-[60px] pb-3.5 flex flex-col">
        <HealthyProductsSection />
        <div className="bg-gray-10 py-8 md:py-14 ">
          <CardProductData />
        </div>
        <div className="bg-gray-20 py-8 md:py-14 ">
          <TopRatedProductCardData />
        </div>
        <div className="bg-softGray py-8 md:py-14">
          <RecentReviews />
        </div>
      </div>
    </>
  );
}

export default HomePage;
