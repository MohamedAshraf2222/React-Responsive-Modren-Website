import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Navbar = () => {
  const scroll = (e) => {
    // e.preventDefault()
    // if (this.hash !="") {
    // const hash = this.hash;
    // ("html,body").animate({scrollTop:(hash).offset().top-100},800)
    // console.log(hash);
    // }
  };
  const Menu = () => (
    <>
      <ul className="flex text-white gpt3__navbar-links_container">
        <li>
          {/* <a href="#home">Home</a> */}
          <Link to={"home"}>Home</Link>
        </li>
        <li>
          {/* <a href="#wgpt3">What is GPT?</a> */}
          <Link to={"wgpt3"} offset={-50}>
            What is GPT?
          </Link>
        </li>
        <li>
          {/* <a href="#possibility">Open AI</a> */}
          <Link to={"possibility"} offset={-20}>
            Open AI
          </Link>
        </li>
        <li>
          {/* <a href="#features">Case Studies</a> */}
          <Link to={"features"} offset={-50}>
            Case Studies
          </Link>
        </li>
        <li>
          {/* <a href="#blog">Library</a> */}
          <Link to={"blog"}>Library</Link>
        </li>
      </ul>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="gpt3__navbar flex items-center justify-between px-24 py-8">
        <div className="gpt3__navbar-links flex gap-8 flex-1 items-center">
          <img src={logo} alt="" />
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <Link to={"/"}>Sign in</Link>
          <button type="button">Sign up</button>
        </div>
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
          {toggleMenu && ( //if togglemenu is true render what inside the ()
            <>
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                  <div className="gpt3__navbar-menu_container-links-sign">
                    <Link to={"/"}>Sign in</Link>
                    <button type="button">Sign up</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
