import { useEffect, useState } from "react";
import Title from "./Title";
import Pagination from "./Pagination";
import Cards from "./Cards";
import TopRatedProductCards from "./TopRatedProductCards";

const TopRatedProductCardData = () => {
  const topRatedProductCards = [
    {
      title: "Nom Nom",
      subtitle: "Nutrient-Packed Dog Food",
      texto1: "10098",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/vola9chmhl4qfonwmlfb.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Bob's Red Mill Canada",
      subtitle: "All-Purpose White Flour",
      texto1: "1186",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/jgabmmmyxy5rg6easaoe.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Bob's Red Mill Canada",
      subtitle: "Whole Grain Bagged Oats",
      texto1: "737",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/m8xfpz2c3hzy5kngz2gc.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Sky Valley",
      subtitle: "Green Sriracha",
      texto1: "2391",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/cybt0clekkckbqucgniz.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Ocean's Halo",
      subtitle: "Organic Broths",
      texto1: "562",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/goxesxau6jrtofqalz7x.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Halo Top",
      subtitle: "Light Ice-Cream",
      texto1: "12127",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/nyykx9o57665cqbceewx.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Love Corn",
      subtitle: "Delicious Crunchy Corn Snack",
      texto1: "739",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/wgxrav8nnyhbi1vr7euj.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "GnuSanté",
      subtitle: "Functional Fruit Shakes",
      texto1: "2401",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/tkusq4evnezdmdfymo8b.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Comvita",
      subtitle: "Raw Manuka Honey",
      texto1: "9066",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/xkufaur0d9cci1ixdjls.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Health Nut",
      subtitle: "Fresh Obsessed Dressings",
      texto1: "7676",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/ylg8fatpczjxirtthfmo.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Bob's Red Mill USA",
      subtitle: "Pancake & Waffle Mix",
      texto1: "3017",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/weuulaezlaojfht6thsv.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Rishi Tea & Botanicals",
      subtitle: "Organic Tea",
      texto1: "3463",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/dsivapynlgpncphysfdm.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Freestyle World",
      subtitle: "Hyper Absorbent Diapers",
      texto1: "1410",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/slfo5yhfg7rarqmy6bjb.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Bonne Maman",
      subtitle: "Hazelnut Chocolate Spread",
      texto1: "12528",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/i9uqnozh4zbml0zvffrq.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Vital Farms",
      subtitle: "Grass-Fed Butter",
      texto1: "15690",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/o9dlnb7dqxbw3m9swuyp.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Vital Farms",
      subtitle: "Organic Restorative Eggs",
      texto1: "4513",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/dg2cjv4rnuchwbu0agcp.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Roth",
      subtitle: "Havarti Cheese",
      texto1: "7250",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/p7lfutuq1gag6ohrd2mc.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Trimona",
      subtitle: "A2A2 Probiotic Yogurt",
      texto1: "176",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/pauquuhwplipp5hsqpvm.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "Bob's Red Mill Canada",
      subtitle: "Snack Bars",
      texto1: "8416",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/xbxfcpn1gde1pqttvbhn.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
    {
      title: "GOODLES",
      subtitle: "Protein Rich Mac & Cheese",
      texto1: "15732",
      texto2: "Reviews",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/lnglpxwts1wn5wcpl5dv.png",
      // smallImages: [
      //   "https://www.socialnature.com/images/retailers/publix.png",
      //   "https://www.socialnature.com/images/retailers/winndixie.png",
      // ],
    },
  ];

  const [currentPageTopRatedProducts, setCurrentPageTopRatedProducts] =
    useState(1);
  const [maxPageTopRatedProducts, setMaxPageTopRatedProducts] = useState(5);
  const [cardsToShow, setCardsToShow] = useState(4);

  const updateCardsToShow = () => {
    if (window.innerWidth >= 1024) {
      setCardsToShow(4);
      setMaxPageTopRatedProducts(5);
    } else if (window.innerWidth >= 768) {
      setCardsToShow(3);
      setMaxPageTopRatedProducts(7);
    } else {
      setCardsToShow(2);
      setMaxPageTopRatedProducts(10);
    }
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const paginatedCards = (cards, currentPage, cardsToShow) => {
    const indexOfLastCard = currentPage * cardsToShow;
    const indexOfFirstCard = indexOfLastCard - cardsToShow;
    return cards.slice(indexOfFirstCard, indexOfLastCard);
  };

  const nextPageTopRatedProducts = () => {
    if (currentPageTopRatedProducts < maxPageTopRatedProducts) {
      setCurrentPageTopRatedProducts(currentPageTopRatedProducts + 1);
    }
  };

  const prevPageTopRatedProducts = () => {
    if (currentPageTopRatedProducts > 1) {
      setCurrentPageTopRatedProducts(currentPageTopRatedProducts - 1);
    }
  };

  return (
    <div className="mx-auto px-4 max-w-[1200px]">
      <Title text="Discover top-rated products" />
      <Pagination
        currentPage={currentPageTopRatedProducts}
        maxPage={maxPageTopRatedProducts}
        prevPage={prevPageTopRatedProducts}
        nextPage={nextPageTopRatedProducts}
      />
      <Cards
        pagedProducts={paginatedCards(
          topRatedProductCards,
          currentPageTopRatedProducts,
          cardsToShow
        )}
        Component={TopRatedProductCards}
      />
    </div>
  );
};

export default TopRatedProductCardData;
