import React from "react";
import Headphone from "../assets/icons/headphone-symbol.png";
function Navbar() {
  return (
    <div className="flex items-center p-3 justify-between shadow-xl pr-10 pl-10">
      <Logo />
      <Links />
      <DefaultProfile />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <img className="h-13" src={Headphone}></img>
    </div>
  );
}

function Links() {
  return (
    <div className="flex items-center gap-15 font-[Ubuntu] font-bold text-lg">
      <a href="" className="navigation">
        Home
      </a>
      <a className="navigation" href="">
        Products
      </a>
      <a className="navigation" href="">
        Faqs
      </a>
      <a className="navigation" href="">
        Login
      </a>
    </div>
  );
}

function DefaultProfile() {
  return (
    <div>
      <i class="fa-solid fa-user text-4xl"></i>
    </div>
  );
}

export default Navbar;
