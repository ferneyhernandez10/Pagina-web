import PropTypes from "prop-types";
import CardList from "./CardList";

const Section = ({ title, items }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 ">
      <h2 className="max-w-full mt-[2.8px] mb-[7px] font-Montserrat font-bold text-2xl md:text-[32px] md:leading-10 text-[#333333] ">
        {title}
      </h2>
      <div className="flex flex-wrap md:flex-nowrap justify-between mx-[-16px] px-2 md:px-0 text-[#333333] ">
        {items.map((item, index) => (
          <CardList key={index} src={item.src} title={item.title} />
        ))}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Section;
