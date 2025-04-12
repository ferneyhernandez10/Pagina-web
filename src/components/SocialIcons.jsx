const SocialIcons = () => {
  const icons = [
    {
      id: 1,
      src: "https://www.socialnature.com/images/icons/facebook.svg",
      alt: "facebook icon",
    },
    {
      id: 2,
      src: "https://www.socialnature.com/images/icons/instagram.svg",
      alt: "instagram icon",
    },
    {
      id: 3,
      src: "https://www.socialnature.com/images/icons/linkedin.svg",
      alt: "linkedin icon",
    },
    {
      id: 4,
      src: "https://www.socialnature.com/images/icons/tiktok.svg",
      alt: "tiktok icon",
    },
  ];
  return (
    <div className="flex mb-0 md:mb-3.5">
      {icons.map((icon, id) => (
        <img
          key={id}
          src={icon.src}
          alt={icon.alt}
          className="mb-3.5 mr-3.5 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default SocialIcons;
