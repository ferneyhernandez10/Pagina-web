import { useState } from "react";
import Cards from "../components/Cards";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);

  const nextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const homeButtonGray =
    currentPage === 1
      ? "bg-[rgba(65,75,90,0.15)]"
      : "bg-white border-2 border-white hover:border-[#cccccc]";
  const endButtonGray =
    currentPage === maxPage
      ? "bg-[rgba(65,75,90,0.15)]"
      : "bg-white border-2 border-white hover:border-[#cccccc]";

  return (
    <div className="bg-yellow-500 h-screen">
      <div className="bg-gris-claro py-8 xl:py-14 ">
        <div className="mx-0 xl:mx-[74.5px] px-4">
          <h2 className="font-Montserrat mt-[2.8px] mb-[7px] text-2xl md:text-[32px]/[40px] font-bold text-[#333333] ">
            Try better-for-you products
          </h2>

          <div className="flex justify-end items-center ">
            <span className="font-karla text-base font-normal text-[#333333]">
              {`Page ${currentPage} of ${maxPage}`}
            </span>
            <button
              className={`m-2.5 p-1 w-10 h-10 ${homeButtonGray} rounded-full flex justify-center items-center`}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <FaAngleLeft className="w-6 h-6" />
            </button>
            <button
              className={`m-2.5 p-1 w-10 h-10 ${endButtonGray} rounded-full flex justify-center items-center`}
              onClick={nextPage}
              disabled={currentPage === maxPage}
            >
              <FaAngleRight className="w-6 h-6" />
            </button>
          </div>

          <Cards currentPage={currentPage} setMaxPage={setMaxPage} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
