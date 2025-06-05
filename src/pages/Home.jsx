import React from "react";
import Navbar from "../components/Navbar";
import Background from "../assets/images/background/home-bg.png";
import ProductCard from "../components/ProductCard";
import Speaker from "../assets/images/popular/mini-bluetooth-speaker.png";
import Earphone from "../assets/images/popular/wireless-earphone.png";
import Headphone from "../assets/images/popular/wireless-headphones.png";
function Home() {
  const popularProducts = [
    {
      name: "VoltAura",
      image: Speaker,
      price: "$249.99",
    },

    {
      name: "Audionyx",
      image: Earphone,
      price: "$349.99",
    },
    {
      name: "EchoPulse",
      image: Headphone,
      price: "$149.99",
    },
  ];

  return (
    <div>
      <Navbar />
      <NewProduct />
      <PopularNow />
      <div className="flex items-center gap-5 justify-center">
        {popularProducts.map((item) => (
          <div className="flex flex-col items mb-10">
            <ProductCard name={item.name} price={item.price} img={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PopularNow() {
  return (
    <div className="font-[Ubuntu] mt-13 mb-10">
      <h1 className="text-3xl text-center font-bold">Popular Now</h1>
    </div>
  );
}

function NewProduct() {
  return (
    <div
      className="flex justify-center h-screen flex-col p-10 gap-3"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "covers",
      }}
    >
      <NewProductName />
      <ShopBtn />
    </div>
  );
}

function NewProductName() {
  return (
    <div className="text-white font-[Open_Sans] font-bold flex flex-col gap-3">
      <h1 className="text-5xl">SonicFlow Pro 3</h1>
      <h2 className="text-3xl font-medium">Featuring Zayen Darrel</h2>
    </div>
  );
}

function ShopBtn() {
  return (
    <div>
      <button className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200 cursor-pointer">
        Shop now
      </button>
    </div>
  );
}

export default Home;
