import { useState } from "react";
import Cards from "../components/Cards";
import Title from "../components/Title";
import Pagination from "../components/Pagination";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);

  return (
    <div className="bg-yellow-500 h-screen">
      <div className="bg-gris-claro py-8 xl:py-14 ">
        <div className="mx-0 xl:mx-[74.5px] 2xl:mx-[351.5px] px-4">
          <Title />

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={maxPage}
          />

          <Cards currentPage={currentPage} setMaxPage={setMaxPage} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
