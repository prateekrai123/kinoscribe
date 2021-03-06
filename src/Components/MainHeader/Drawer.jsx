import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExpandMenu from "./ExpandMenu";
import { Logout } from "react-admin";

import logo from "../../Images/logo.png"

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <SNavbarBrand></SNavbarBrand>
          
        <Image alt="" src={logo} onClick={()=>{
          window.location.href = "/"
        }} />
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          {(!localStorage.getItem("token")) && <LoginButton onClick={() => {
            window.location.href = "/signin";
          }}>Login</LoginButton>}
          {localStorage.getItem("token") && <LogoutButton onClick={() => {
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            localStorage.removeItem("isAdmin")
            window.location.href = "/"
          }}>Logout</LogoutButton>}
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;
const SNavbarBrand = styled.h2`
  color : #FEDD59;
  font-size: 2rem;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  
  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 70%;
  color:white;
  background-color: #2B2B2B;
  transition: 0.3s ease;
  border-radius : 0 25px 25px 0;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  
`;

const Image = styled.img`
@media (max-width: 900px){
width:70%;  

}
  width: 30%;
  // float: left;
  // margin-right: 10px;
`;

const NavRoutes = styled.div``;
const NavRoute = styled(Link)`

  display: flex;
  text-decoration: none;
  color: white;
  font-size: 2rem;
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  align-self: flex-start;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: #FEDD59;
    box-shadow: 0px 0px 6px #FEDD59;
  }
`;
const LogoutButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  align-self: flex-start;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: #FEDD59;
    box-shadow: 0px 0px 6px #FEDD59;
  }
`;
