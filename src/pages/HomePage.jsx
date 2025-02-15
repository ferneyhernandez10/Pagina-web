import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Title from "../components/Title";
import Pagination from "../components/Pagination";
import CardProducts from "../components/CardProducts";
import TopRatedProductCards from "../components/TopRatedProductCards";

function HomePage() {
  const cardProducts = [
    {
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

  const [currentPageCardProducts, setCurrentPageCardProducts] = useState(1);
  const [currentPageTopRatedProducts, setCurrentPageTopRatedProducts] =
    useState(1);

  const [maxPageCardProducts, setMaxPageCardProducts] = useState(5);
  const [maxPageTopRatedProducts, setMaxPageTopRatedProducts] = useState(5);

  const [cardsToShow, setCardsToShow] = useState(4);

  const updateCardsToShow = () => {
    if (window.innerWidth >= 1024) {
      setCardsToShow(4);
      setMaxPageCardProducts(5);
      setMaxPageTopRatedProducts(5);
    } else if (window.innerWidth >= 768) {
      setCardsToShow(3);
      setMaxPageCardProducts(7);
      setMaxPageTopRatedProducts(7);
    } else {
      setCardsToShow(2);
      setMaxPageCardProducts(10);
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
    <div className="bg-yellow-500 h-screen">
      <div className="bg-gray-10 py-8 xl:py-14 ">
        <div className="mx-0 xl:mx-[74.5px] 2xl:mx-[351.5px] px-4">
          <Title text="Try better-for-you products" />

          <Pagination
            currentPage={currentPageCardProducts}
            maxPage={maxPageCardProducts}
            prevPage={prevPageCardProducts}
            nextPage={nextPageCardProducts}
          />

          {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {paginatedCards(cardProducts, currentPageCardProducts, cardsToShow).map((product, index) => (
            <CardProducts key={index} topText={product.topText} centerImage={product.centerImage} title={product.title} subtitle={product.subtitle} texto1={product.texto1} texto2={product.texto2} smallImages={product.smallImages} />
          ))}
          </div> */}

          <Cards
            pagedProducts={paginatedCards(
              cardProducts,
              currentPageCardProducts,
              cardsToShow
            )}
            Component={CardProducts}
          />
        </div>

        <div className="bg-gray-20 xl:py-14 ">
          <div className="mx-0 xl:mx-[74.5px] 2xl:mx-[351.5px] px-4">
            <Title text="Discover top-rated products" />

            <Pagination
              currentPage={currentPageTopRatedProducts}
              maxPage={maxPageTopRatedProducts}
              prevPage={prevPageTopRatedProducts}
              nextPage={nextPageTopRatedProducts}
            />
            {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {paginatedCards(topRatedProductCards, currentPageTopRatedProducts, cardsToShow).map((product, index) => (
              <TopRatedProductCards key={index} centerImage={product.centerImage} title={product.title} subtitle={product.subtitle} texto1={product.texto1} texto2={product.texto2}  />
            ))}
            </div> */}

            <Cards
              pagedProducts={paginatedCards(
                topRatedProductCards,
                currentPageTopRatedProducts,
                cardsToShow
              )}
              Component={TopRatedProductCards}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
