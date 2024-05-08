import React from "react";
import Counter from "../components/ui/Counter/Counter";

import HeroSection from "../components/ui/HeroSection/HeroSection";

import LiveAuction from "../components/ui/LiveAuction/LiveAuction";
// import SellerSection from "../components/ui/SellerSection/SellerSection";

// import StepSection from "../components/ui/StepSection/StepSection";
import InfoCard from "../components/ui/InfoCard/InfoCard";
// import CheckingIPFS from "../components/CheckingIPFS/CheckingIPFS";
import "../styles/home.css";
import adoptImg from "../assets/images/adopt.jpeg";
import nftImg from "../assets/images/nft.jpg";
import donateImg from "../assets/images/donate.jpeg";
import infoImg from "../assets/images/info.jpeg";
// import Parallax from "../components/ui/Parallax/Parallax.jsx";

const Home = () => {
  const arrayData = [
    {
      id: "1",
      image: nftImg,
      heading: "Donate to Get NFT",
      info: "A person willing to help an endangered animal can support them by buying the NFT of that particular animal.After buying a certain amount of NFTs, you will get some cool perks as an appreciation from our side. All this process will be  peer-to-peer",
      target: "/market",
    },
    {
      id: "2",
      image: adoptImg,
      heading: "Adopt a Stray Animal",
      info: "If you can't help with money and wants to be a part of this social cause can also adopt stray animals. By adopting them, you will also get exclusive perks and NFTs.",
      target: "/adopt",
    },
    {
      id: "3",
      image: donateImg,
      heading: "Provide Information about Stray Animals",
      info: "You can also help by providing information about the animals for adoption. After an animal is adopted, you will then get some perks and NFTs for providing their information.",
      target: "/contact",
    },
    {
      id: "4",
      image: infoImg,
      heading: "Earn by donation design",
      info: "Designers willing to help towards a social cause can help us by donating designs for the NFT of the animal they like. You don’t have to pay anything; once their Design is sold, they will also get some perks.",
      target: "/create",
    },
  ];

  return (
    <div className="home">
      <HeroSection />
      <Counter />
      {/* <Parallax /> */}
      {arrayData.map((item) => (
        <InfoCard
          id={item.id}
          key={item.id}
          image={item.image}
          heading={item.heading}
          info={item.info}
          target={item.target}
        />
      ))}
      ;
      <LiveAuction />
      {/* <SellerSection /> */}
      {/* <Trending /> */}
      {/* <CheckingIPFS/> */}
      {/* <StepSection /> */}
    </div>
  );
};

export default Home;
