import Section from "./Section";

const DietSection = () => {
  const items = [
    {
      src: "https://react-app.socialnature.com/v2/images/qualities/vegan.svg",
      title: "Vegan",
    },
    {
      src: "https://react-app.socialnature.com/v2/images/qualities/gmo-free.svg",
      title: "Non-GMO",
    },
    {
      src: "https://react-app.socialnature.com/v2/images/qualities/dairy-free.svg",
      title: "Dairy-Free",
    },
    {
      src: "https://react-app.socialnature.com/v2/images/qualities/gluten-free.svg",
      title: "Gluten-Free",
    },
  ];
  return <Section title="Discover products by diet" items={items} />;
};

export default DietSection;
