import Section from "./Section";

const DietSection = () => {
  const items = [
    {
      id:1,
      src: "https://react-app.socialnature.com/v2/images/qualities/vegan.svg",
      title: "Vegan",
    },
    {
      id:2,
      src: "https://react-app.socialnature.com/v2/images/qualities/gmo-free.svg",
      title: "Non-GMO",
    },
    {
      id:3,
      src: "https://react-app.socialnature.com/v2/images/qualities/dairy-free.svg",
      title: "Dairy-Free",
    },
    {
      id:4,
      src: "https://react-app.socialnature.com/v2/images/qualities/gluten-free.svg",
      title: "Gluten-Free",
    },
  ];
  return <Section title="Discover products by diet" items={items} />;
};

export default DietSection;
