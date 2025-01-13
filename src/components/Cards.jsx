import { FcLike } from "react-icons/fc";

const Cards = ({ currentPage }) => {
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

  const cardsPerPage = 4;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardProducts.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="flex flex-row justify-between ">
      {currentCards.map((products, index) => {
        return (
          <div key={index} className="max-w-min py-4 pr-4 ">
            <div className="rounded-lg border-2 border-white hover:border-[#cccccc] ">
              <div className="w-[264px] h-[424px] rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer ">
                <div className="relative w-full h-full">
                  <div
                    className="absolute top-3 left-0 flex items-center w-auto h-[42px] px-4 mb-2 bg-right bg-no-repeat bg-cover"
                    style={{
                      backgroundImage:
                        "url(https://www.socialnature.com/images/badge-pink.svg)",
                    }}
                  >
                    <span className="w-full font-karla text-sm font-extrabold text-white uppercase text-nowrap">
                      {products.topText}
                    </span>
                  </div>
                  <div className="px-4 pt-10 pb-4 rounded-xl border-b-4 border-slate-100">
                    <img
                      className="w-full h-52"
                      src={products.centerImage}
                      alt="Card center image"
                    />
                  </div>

                  {/* <div className="max-w-max h-9 px-4 bg-no-repeat bg-cover" style={{backgroundImage: 'url(https://www.socialnature.com/images/badge-pink.svg)'}}>
              <span className="font-karla text-sm font-extrabold text-white " >FREE PRODUCT</span>
            </div> */}
                  {/* <div className="px-4 pt-10 pb-4 rounded-xl border-b-4 border-slate-100">
              <img className="w-full h-52" src={products.centerImage} alt="Card center image" />
            </div> */}
                  <div className="px-4 pt-4 pb-2 ">
                    <div>
                      <span className="font-karla text-sm font-normal text-[#5D5D5D]">
                        {products.title}
                      </span>
                    </div>
                    <div>
                      <span className="font-karla text-base font-bold text-[#5D5D5D]">
                        {products.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="flex">
                      <FcLike className="w-6 h-6" />
                      <span>
                        <span className="font-karla text-sm font-normal text-[#333333] mx-1">
                          {products.texto1}
                        </span>
                        <span className="font-karla text-sm font-normal text-[#333333] ">
                          {products.texto2}
                        </span>
                      </span>
                    </div>
                    <div className="pt-4">
                      {console.log(products.smallImages)}
                      <img
                        className="w-7 h-7"
                        src={products.smallImages}
                        alt="Card small images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
