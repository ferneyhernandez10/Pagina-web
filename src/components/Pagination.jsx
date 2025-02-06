import PropTypes from "prop-types";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Pagination = ({ currentPage, setCurrentPage, maxPage }) => {
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
    <div className="flex justify-end items-center">
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
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.node,
  setCurrentPage: PropTypes.func.isRequired,
  maxPage: PropTypes.node,
};

export default Pagination;
