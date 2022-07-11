import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>{route.name}</MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
  position: absolute;
  z-index : 2;
  min-width: 25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
 background-color : #2B2B2B;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;


  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: 1rem;
  &:hover {
    transition: 0.5s ease;
    color: #FFDD59;
    
    // box-shadow: 0px 0px 10px white;
  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
 

  &:hover {
    transition: 0.3s ease-in;
    color: black;
    background-color: #FFDD59;
  }
`;
