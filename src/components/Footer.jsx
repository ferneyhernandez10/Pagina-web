import Logo from "../image/Logo.jpg";
import CertificateLogos from "./CertificateLogos";
import FooterBottom from "./FooterBottom";
import FooterLinkList from "./FooterLinkList";
import FooterSection from "./FooterSection";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const links = [
    "Our Mission",
    "How It Works",
    "Our Team",
    "Careers",
    "Help Center",
    "Contact Us",
  ];
  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto pt-7 pb-3.5 font-karla text-sm/[21px] font-normal text-[#333333]">
        <div className="px-[15px] mb-8">
          <img
            src={Logo}
            alt="Logo"
            className="max-w-[140px] h-[28.875px] cursor-pointer"
          />
        </div>

        <div className="flex flex-col md:flex-row flex-wrap">
          <FooterSection
            title="Company"
            uppercase
            className="md:w-1/4 lg:w-[19%]"
          >
            <FooterLinkList links={links} />
          </FooterSection>

          <FooterSection
            title="Connect With Us"
            uppercase
            className="md:w-1/2 lg:w-1/4"
          >
            <SocialIcons />
          </FooterSection>

          <FooterSection
            title="For Brands & Agencies"
            uppercase
            className="md:w-1/4 lg:w-1/4"
          >
            <p className="mb-5 font-karla text-[16.8px] font-normal leading-[22.4px]">
              Interested in showcasing your natural products to the Social
              Nature community? We can help!
            </p>
            <button className="px-5 py-2 md:mb-5 font-karla text-base tracking-[1px] text-white uppercase border-[#db2573] rounded bg-gradient-to-br from-[#e42748] to-[#d1239d] hover:bg-gradient-to-tl">
              For Brands
            </button>
          </FooterSection>
          <div className="px-[15px] flex justify-end gap-[25px] mb-8 md:mb-0 md:w-1/2 lg:w-1/4 md:min-w-full lg:min-w-min">
            <CertificateLogos />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap md:justify-end w-full max-w-[1200px] mx-auto mb-[4%] px-[15px] font-karla text-sm/[21px] font-normal text-[#5d5d5d]">
        <FooterBottom />
      </div>
    </>
  );
};

export default Footer;
