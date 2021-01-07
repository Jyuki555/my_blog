import React from "react";
import { slide } from "react-burger-menu";
import { GlobalNavigation } from "./GlobalNavigation";
import MediaQuery from "../../assets/MediaQuery";
import Burger from "../../assets/svgs/burger.svg";
import styled from "styled-components";

export const GlobalBurgerMenu: React.FC = () => (
  <Menu isOpen={false} customBurgerIcon={<img src={Burger} alt="burger" />}>
    <GlobalNavigation />
  </Menu>
);

const Menu = styled(slide)`
  @media screen and (min-width: ${MediaQuery.Tablet + 1}px) {
    display: none;
  }
`;
