import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../public/logo_large.png";
import Image from "next/image";

const Menu = () => (
  <>
    <p>
      <Link href="/">Home</Link>
    </p>
    <p>
      <Link href="/about">About Us</Link>
    </p>
    <p>
      <Link href="/Trophies">Trophy Case</Link>
    </p>
    <p>
      <Link href="/roster">Roster</Link>
    </p>
    <p>
      <Link href="/photos">Photo Gallery</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-link_logo">
          <Image src={logo} alt="logo" height={50} width={50} />
        </div>
        <div className="logo_text">
          <p>WolfPack</p>
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              {/* <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
