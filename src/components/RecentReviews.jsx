import ReviewCards from "./ReviewCards";

const RecentReviews = () => {
  const cardReviews = [
    {
      title: "High Protein GF Bread",
      texto1: "Great bread",
      texto2: `"This bread was so delicious. They were out on my first trip so I had to go again. The bread was fresh and toasted well. I ate it as a sandwich and really enjoyed it. I also liked how it came frozen. "`,
      username: "Lisa P.",
      smallImages:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_150,q_100,w_150/mj3v3n55xkopjhmoucf4.png",
    },
    {
      title: "Organic Sourdough Pasta",
      texto1: "Yum and chewy",
      texto2: `"This is my first time trying and cooking sourdough pasta at home. I’m a big fan of sourdough bread therefore I’m also loving the taste of this pasta. Very chewy And easy to cook."`,
      username: "Jessica  Z.",
      smallImages:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_150,q_100,w_150/v3vqnolczmpo4u45s0mb.png",
    },
    {
      title: "Organic Pasta Sauces",
      texto1: "Phenomenal Pasta Sauce",
      texto2: `"Last weekend, I went to my local Whole Foods Market to redeem my offer for a free sample of Organic Pasta Sauce from Bionaturae. I was able to find it in the store pretty quickly and had no problem purchasing it at checkout. For the flavor, I decided to go with Marinara. When I was making sourdough pasta last night for dinner, I used this marinara sauce to soak the pasta in, and it was delicious! I always enjoy eating authentic Italian food and this pasta sauce along with the sourdough pasta was just the right ticket. I was pleased with this purchase and would highly recommend it to others."`,
      username: "Vivek S.",
      smallImages:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_150,q_100,w_150/nibjrhhtftb2vh1xlok0.png",
    },
    {
      title: "Goat Milk Yogurt",
      texto1: "Yogurt",
      texto2: `"The vanilla flavor was good. I added with granola, fruits, chia seeds and flaxmeal which gave a bonus for me.  I just prefer a Greek style yogurt. "`,
      username: "Gloria V.",
      smallImages:
        "https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_150,q_100,w_150/naztzpywm3y926hqipds.png",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <div className="mb-6 md:mb-8">
        <h2 className="mt-[2.8px] mb-[7px] max-w-full text-2xl md:text-[32px] text-left font-Montserrat font-bold md:leading-10 text-[#333333] ">
          Recent reviews
        </h2>
      </div>
      <div className="grid md:grid-cols-2 -mx-4 -mt-4 gap-x-4 px-2 md:px-0 ">
        {cardReviews.map((review, index) => (
          <ReviewCards key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default RecentReviews;
