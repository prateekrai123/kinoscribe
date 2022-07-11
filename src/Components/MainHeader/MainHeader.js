import React, { useState } from "react";
// import { FiMenu, FiX } from 'react-icons/fi';
// import { Link,NavLink } from 'react-router-dom';
// import {FiChevronDown } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../../Images/logo.png";
import "./MainHeader.css";

const MainHeader = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header style = {{ backgroundColor: "#121212"}} className="header__middle">
      <div className="header-container">
        <div className="row">
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img className = "logo" src={logo} alt="logo"  />
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav ">
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiX />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link to="#">
                    {" "}
                    Services <FiChevronDown />{" "}
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Online`}
                      >
                        {" "}
                        Online Shop{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Offline`}
                      >
                        {" "}
                        Offline Shop{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Contact`}
                  >
                    {" "}
                    Contact{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item menu_signin">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/signin`}
                  >
                    {" "}
                    Sign in{" "}
                  </NavLink>{" "}
                </li>
             
              </ul>
               
              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
