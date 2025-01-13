import { useState } from "react";
import Cards from "../components/Cards";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-yellow-500 h-screen">
      <div className="bg-[#FBFBFB] py-8 xl:py-14 ">
        <div className="mx-0 xl:mx-[351.500px] px-4">
          <h2 className="font-karla text-[32px] font-bold text-[#333333] ">
            Try better-for-you products
          </h2>
          <div className="flex justify-end items-center ">
            <span className="font-karla text-base font-normal text-[#333333]">
              Page {currentPage} of 5
            </span>
            <button
              className="m-2.5 p-1 w-10 h-10 bg-white rounded-full border-2 border-white hover:border-[#cccccc] flex justify-center items-center"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <FaAngleLeft className="w-6 h-6" />
            </button>
            <button
              className="m-2.5 p-1 w-10 h-10 bg-white rounded-full border-2 border-white hover:border-[#cccccc] flex justify-center items-center"
              onClick={nextPage}
              disabled={currentPage === 5}
            >
              <FaAngleRight className="w-6 h-6" />
            </button>
          </div>
          <Cards currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
