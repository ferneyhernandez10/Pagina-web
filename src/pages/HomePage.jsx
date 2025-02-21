import CardProductData from "../components/CardProductData";
import TopRatedProductCardData from "../components/TopRatedProductCardData";

function HomePage() {
  return (
    <div className="bg-yellow-500 h-screen">
      <div className="bg-gray-10 py-8 xl:py-14 ">
        <CardProductData />
      </div>
      <div className="bg-gray-20 py-8 xl:py-14 ">
        <TopRatedProductCardData />
      </div>
    </div>
  );
}

export default HomePage;
