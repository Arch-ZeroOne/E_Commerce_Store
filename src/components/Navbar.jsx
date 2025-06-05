import React from "react";
import Headphone from "../assets/icons/headphone-symbol.png";
function Navbar() {
  return (
    <div className="flex items-center p-3 justify-between shadow-xl ">
      <Logo />
      <Links />
      <SearchBtn />
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
      <a href="">Home</a>
      <a href="">Products</a>
      <a href="">About</a>
      <a href="">Login</a>
    </div>
  );
}

function SearchBtn() {
  return (
    <div className="mr-8">
      <i class="fa-solid fa-magnifying-glass text-lg font-bold"></i>
    </div>
  );
}

export default Navbar;
