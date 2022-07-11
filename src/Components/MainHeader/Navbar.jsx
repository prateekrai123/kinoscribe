import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../Images/logo.png"
import Menu from "./Menu";
const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <SNavbarBrand>
        <Image alt="" src={logo} />
        </SNavbarBrand>
        {/* <LogoDiv /> */}
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <LoginButton>Login</LoginButton>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 1.8rem;
  display: grid;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  // background-color: #2B2B2B;
`;
const NavContainer = styled.div`
 
  padding: 1rem;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const SNavbarBrand = styled.div`

  display: flex;
  @media (max-width: 900px) {
    display: flex;
  align-items: center;
 justify-content: center; 
  }

`;
const Image = styled.img`
@media (max-width: 900px){
width:70%;  

}
  width: 30%;
  // float: left;
  // margin-right: 10px;
`;

// const SNavbarBrand= styled.div``;
// const SNavbarBrand = styled(img)`
// `;

const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  // margin-top: 200px;
  display: flex;
  gap: 1rem;
  font-size: 1.1rem;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  // padding: -2rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: #FFDD59;
    // box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
@media (max-width: 900px) {
  padding: 0.6rem 2rem;
  font-size : 11px;
  // display: none;
}
  padding: 0 3rem;
  // height: 30%;
  
  font-size: 13px;
  background-color: #FFDD59;
  border: 1px solid #FFDD59;
  border-radius: 50px;
  transition: 0.3s ease;
  cursor : pointer;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    color:white;
    box-shadow: 0px 0px 10px black;
  }
`;
