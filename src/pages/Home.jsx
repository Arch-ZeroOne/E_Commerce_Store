import Navbar from "../components/Navbar";
import Background from "../assets/images/background/home-bg.png";
import ProductCard from "../components/ProductCard";
import Speaker from "../assets/images/popular/mini-bluetooth-speaker.png";
import Earphone from "../assets/images/popular/wireless-earphone.png";
import Headphone from "../assets/images/popular/wireless-headphones.png";
import Help from "../assets/images/background/product-help.jpg";
import ShopBtn2 from "../components/ShopBtn2";

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
          <div key={item.id} className="flex flex-col items mb-10">
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              img={item.image}
            />
          </div>
        ))}
      </div>
      <Guide />
      <Faqs />
      <VideoBackground />
      <Contact />
    </div>
  );
}

function PopularNow() {
  return (
    <div className="font-[Ubuntu] mt-13 mb-10">
      <h1 className="text-4xl text-center font-bold">Popular Now</h1>
    </div>
  );
}

function NewProduct() {
  return (
    <div className="relative mb-5">
      <video className="relative" autoPlay loop muted>
        <source src="/videos/main-video.mp4" type="video/mp4" />
      </video>
      <section className="absolute top-60 left-20">
        <div className="flex gap-4 flex-col ">
          <NewProductName />
          <ShopBtn />
        </div>
      </section>
    </div>
  );
}

function Guide() {
  return (
    <div
      className=" w-full h-screen mb-20 "
      style={{
        backgroundImage: `url(${Help})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="flex items-center gap-3 justify-start p-25">
        <div className="flex flex-col gap-5">
          <div className="text-white font-[Ubuntu] text-6xl flex flex-col  gap-3  ">
            <h1>Echo Pulse</h1>
            <h1>Ultimate</h1>
            <h1>Gift Guide</h1>
          </div>
          <ShopBtn2 />
        </div>
      </section>
    </div>
  );
}

function NewProductName() {
  return (
    <div className="text-white font-[Open_Sans] font-bold flex flex-col gap-3">
      <h1 className="text-5xl">SonicFlow Pro 3</h1>
      <h2 className="text-3xl font-medium">Featuring Tony Schnagl</h2>
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

function Faqs() {
  const FaqSection = [
    {
      icon: `fa-solid fa-box`,
      title: "Fast and Free Delivery",
      description: "Enjoy free two-day delivery on most in-stock items.",
    },
    {
      icon: `fa-solid fa-store`,
      title: "In Store Pickup",
      description: "Pick up your online order at an Apple Store near you.",
    },
    {
      icon: `fa-solid fa-boxes-packing`,
      title: "Easy Returns",
      description: "Return eligible items to Apple within 14 days of receipt.",
    },
  ];

  return (
    <div className="font-[Ubuntu] flex flex-col items-center gap-5 mb-20">
      <h1 className="text-3xl font-bold text-center">
        Seamless Shopping Through Apple
      </h1>
      <div className="text-8xl flex justify-between items-center w-[90%] ml-auto mr-auto mt-10 gap-20">
        {FaqSection.map((item) => (
          <div className="flex flex-col items-center gap-3 " key={item.id}>
            <i className={item.icon}></i>
            <div className="text-lg text-center">
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <p className="font-medium">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <AnimatedBtn text="VIEW ALL FAQS" />
    </div>
  );
}

//video need to have a property muted since browser blocks videos with sounds
// set isolate property for video overlay
function VideoBackground() {
  return (
    <div className="relative">
      <video className="w-full relative mb-10" loop autoPlay muted>
        <source src="/videos/product-video.mp4" type="video/mp4" />
      </video>
      <section className="absolute top-50 left-20">
        <div className="flex flex-col gap-8">
          <div className="font-[Ubuntu] font-bold flex flex-col gap-3 isolate">
            <h2 className="font-normal text-3xl">NEW</h2>
            <h2 className="text-5xl">AudioNyx</h2>
            <h2 className="text-5xl">Wireless Earphones</h2>
          </div>
          <div className="flex items-center gap-4">
            <ShopBtn2 />
            <AnimatedBtn text="Watch Video" />
          </div>
        </div>
      </section>
    </div>
  );
}

function AnimatedBtn({ text }) {
  return (
    <div>
      <button className="watch">
        <span className="textName">{text}</span>
        <span>Go</span>
      </button>
    </div>
  );
}

function Contact() {
  return (
    <div className="w-[70%] ml-auto mr-auto mb-15 ">
      <h2 className="mb-10 font-[Ubuntu] font-bold text-3xl text-center">
        Send Your Feedback
      </h2>
      <div class="shadow-2xl h-60 bg-white border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
        <h1 class="text-center text-blue-600 text-xl font-bold col-span-6">
          Send Feedback
        </h1>
        <textarea
          placeholder="Your feedback..."
          class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-10 duration-300 focus:border-slate-600"
        ></textarea>
        <button class="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 512 512"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </button>
        <button class="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 512 512"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </button>
        <span class="col-span-2"></span>
        <button class="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
            ></path>
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M10.11 13.6501L13.69 10.0601"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;
