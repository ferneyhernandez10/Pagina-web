import DesktopVersion from "./DesktopVersion";
import MobileVersion from "./MobileVersion";

const HealthyProductsSection = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopVersion />
      </div>
      <div className="block md:hidden">
        <MobileVersion />
      </div>
    </>
  );
};

export default HealthyProductsSection;
