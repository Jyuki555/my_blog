import React from "react";
import MediaQuery from "../../assets/MediaQuery";
import { GlobalBurgerMenu } from "./GlobalBurgerMenu";
import styled from "styled-components";
import { GlobalTitle } from "./GlobalTitle";

export const GlobalHeader: React.FC = () => {
  return (
    <Container>
      <GlobalTitle />
      <GlobalBurgerMenu />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
  text-align: center;
  min-height: 70px;
  background-color: #313a46;
  box-shadow: 0 0 8px 0 black;
  @media screen and (min-width: ${MediaQuery.Tablet + 1}px) {
    display: none;
  }
`;
