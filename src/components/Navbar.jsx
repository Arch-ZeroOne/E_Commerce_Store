import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Headphone from "../assets/icons/headphone-symbol.png";
import { useModal } from "../context/ModalContext";

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
      <NavLink to="/">
        <img className="h-13" src={Headphone}></img>
      </NavLink>
    </div>
  );
}

function Links() {
  const { modal, showModal } = useModal();

  return (
    <div className="flex items-center gap-15 font-[Ubuntu] font-bold text-lg list-none">
      <NavLink to="/">
        <li className="navigation">Home</li>
      </NavLink>
      <NavLink to="/products">
        <li className="navigation">Products</li>
      </NavLink>
      <NavLink to="/faqs">
        <li className="navigation">Faqs</li>
      </NavLink>
      <li className="navigation" onClick={() => showModal(!modal)}>
        Login
      </li>
    </div>
  );
}

function DefaultProfile() {
  return (
    <div>
      <i className="fa-solid fa-user text-4xl"></i>
    </div>
  );
}

export default Navbar;
