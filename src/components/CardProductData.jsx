import Title from "../components/Title";
import Pagination from "../components/Pagination";
import Cards from "../components/Cards";
import CardProducts from "../components/CardProducts";
import { useEffect, useState } from "react";

const CardProductData = () => {
  const cardProducts = [
    {
      id:1,
      topText: "Free product",
      title: "GOOGLES",
      subtitle: "Deluxe Mac & Cheese",
      texto1: "9645",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/b5cizqb1njxpecmnrsve.png",
      smallImages: "https://www.socialnature.com/images/retailers/target.png",
    },
    {
      id:2,
      topText: "75% off",
      title: "Effie's Homemade",
      subtitle: "Lightly Sweet Biscuits",
      texto1: "1879",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/gysnhyvzs0o4uja6wczi.png",
      smallImages:
        "https://www.socialnature.com/images/retailers/wholefoodsmarket.png",
    },
    {
      id:3,
      topText: "Free product",
      title: "Ocean's Halo",
      subtitle: "Tonkatsu Sauce",
      texto1: "1552",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/wkufouhiluv6eaoyg0bj.png",
      smallImages: "https://www.socialnature.com/images/retailers/walmart.png",
    },
    {
      id:4,
      topText: "Free product",
      title: "LOVO",
      subtitle: "Dairy-Free Milk Chocolate",
      texto1: "2286",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/aulckl3ryxmfufutvben.png",
      smallImages: [
        "https://www.socialnature.com/images/retailers/walmart.png",
        "https://www.socialnature.com/images/retailers/safeway.png",
        "https://www.socialnature.com/images/retailers/albertsons.png",
      ],
    },
    {
      id:5,
      topText: "Free product",
      title: "Nature's Fynd",
      subtitle: "Dairy-Free Fy Yogurt",
      texto1: "10412",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/pshpqb5oksk7vzmninhb.png",
      smallImages:
        "https://www.socialnature.com/images/retailers/wholefoodsmarket.png",
    },
    {
      id:6,
      topText: "Free product",
      title: "Remedy Organics",
      subtitle: "Organic Protein Shakes",
      texto1: "11550",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/eim6x1x5dnxgrfxo68ya.png",
      smallImages:
        "https://www.socialnature.com/images/retailers/wholefoodsmarket.png",
    },
    {
      id:7,
      topText: "Free product",
      title: "Goldthread",
      subtitle: "Plant-Based Tonics",
      texto1: "3614",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/jbrngvdtsnrkc4n5ucf0.png",
      smallImages:
        "https://www.socialnature.com/images/retailers/wholefoodsmarket.png",
    },
    {
      id:8,
      topText: "50% off",
      title: "D'arbo",
      subtitle: "Wild Lingonberry Sauce",
      texto1: "949",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/n1sa8eb2dyb8nlctcmxd.png",
      smallImages:
        "https://www.socialnature.com/images/retailers/wholefoodsmarket.png",
    },
    {
      id:9,
      topText: "Free product",
      title: "RYDE",
      subtitle: "Energizing Shots",
      texto1: "89",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/wzeayg9csd67skiouf5c.png",
      smallImages: [
        "https://www.socialnature.com/images/retailers/centralmarket.png",
        "https://www.socialnature.com/images/retailers/default.png",
      ],
    },
    {
      id:10,
      topText: "Free product",
      title: "Deweys",
      subtitle: "Dewzies Layered Cookies",
      texto1: "991",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/hroxcs0e2purgvxzv1xf.png",
      smallImages: [
        "https://www.socialnature.com/images/retailers/heb.png",
        "https://www.socialnature.com/images/retailers/publix.png",
      ],
    },
    {
      id:11,
      topText: "Free product",
      title: "Ocean's Halo",
      subtitle: "Organic Kimbap",
      texto1: "2429",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/lgodsumofa0myl1phdvi.png",
      smallImages:
        "https://www.socialnature.com/images/retailers/wholefoodsmarket.png",
    },
    {
      id:12,
      topText: "Buy 1 Get 1 Free",
      title: "Farmer Direct Foods",
      subtitle: "Flour From Family Farms",
      texto1: "2058",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/vm8bv4llfs3vy0jnokwt.png",
      smallImages: "https://www.socialnature.com/images/retailers/sprouts.png",
    },
    {
      id:13,
      topText: "Free product",
      title: "Whoa Dough",
      subtitle: "Gluten-Free Cookie Dough",
      texto1: "981",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/qay9rbgsysqnio3nzzhe.png",
      smallImages: "https://www.socialnature.com/images/retailers/aldi.png",
    },
    {
      id:14,
      topText: "Buy 1 Get 1 Free",
      title: "Theo Chocolate",
      subtitle: "Organic Chocolate",
      texto1: "2231",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/l93x5rfvgseglbimd8kb.png",
      smallImages:
        "https://www.socialnature.com/images/retailers/wholefoodsmarket.png",
    },
    {
      id:15,
      topText: "Free product",
      title: "Ocean's Halo",
      subtitle: "Organic Banh Mi Veggies",
      texto1: "1588",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/efn0bvpomuikanutla39.png",
      smallImages: "https://www.socialnature.com/images/retailers/walmart.png",
    },
    {
      id:16,
      topText: "Free product",
      title: "Ocean's Halo",
      subtitle: "Organic Seaweed Snacks",
      texto1: "1089",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/fjlnxpdo1exzqyzerhus.png",
      smallImages:
        "https://www.socialnature.com/images/retailers/wholefoodsmarket.png",
    },
    {
      id:17,
      topText: "Free product",
      title: "Golden Wing",
      subtitle: "Barley Milk",
      texto1: "71",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/fm2jrxhrxju0u4j5sed2.png",
      smallImages: [
        "https://www.socialnature.com/images/retailers/safeway.png",
        "https://www.socialnature.com/images/retailers/albertsons.png",
      ],
    },
    {
      id:18,
      topText: "Buy 1 Get 1 Free",
      title: "Theo Chocolate",
      subtitle: "Organic Chocolate Bars",
      texto1: "361",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/e8vvljldbivpevbzywi3.png",
      smallImages: "https://www.socialnature.com/images/retailers/sprouts.png",
    },
    {
      id:19,
      topText: "Buy 1 Get 1 Free",
      title: "Blue Stripes",
      subtitle: "Upcycled Cacao Chocolate",
      texto1: "2106",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/i5pl62wrldwctfi2d2vn.png",
      smallImages:
        "https://www.socialnature.com/images/retailers/wholefoodsmarket.png",
    },
    {
      id:20,
      topText: "50% off",
      title: "Simek's",
      subtitle: "Premium Frozen Meatballs",
      texto1: "2295",
      texto2: "Want to try it",
      centerImage:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/tkjjyjg2mc9qshjuoasl.jpg",
      smallImages: [
        "https://www.socialnature.com/images/retailers/publix.png",
        "https://www.socialnature.com/images/retailers/winndixie.png",
      ],
    },
  ];

  const [currentPageCardProducts, setCurrentPageCardProducts] = useState(1);
  const [maxPageCardProducts, setMaxPageCardProducts] = useState(5);
  const [cardsToShow, setCardsToShow] = useState(4);

  const updateCardsToShow = () => {
    if (window.innerWidth >= 1024) {
      setCardsToShow(4);
      setMaxPageCardProducts(5);
    } else if (window.innerWidth >= 768) {
      setCardsToShow(3);
      setMaxPageCardProducts(7);
    } else {
      setCardsToShow(2);
      setMaxPageCardProducts(10);
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

  const nextPageCardProducts = () => {
    if (currentPageCardProducts < maxPageCardProducts) {
      setCurrentPageCardProducts(currentPageCardProducts + 1);
    }
  };

  const prevPageCardProducts = () => {
    if (currentPageCardProducts > 1) {
      setCurrentPageCardProducts(currentPageCardProducts - 1);
    }
  };

  return (
    <div className="mx-auto px-4 max-w-[1200px]">
      <Title text="Try better-for-you products" />
      <Pagination
        currentPage={currentPageCardProducts}
        maxPage={maxPageCardProducts}
        prevPage={prevPageCardProducts}
        nextPage={nextPageCardProducts}
      />
      <Cards
        pagedProducts={paginatedCards(
          cardProducts,
          currentPageCardProducts,
          cardsToShow
        )}
        Component={CardProducts}
      />
    </div>
  );
};

export default CardProductData;
