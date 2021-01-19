import React from "react";
import MediaQuery from "../../assets/MediaQuery";
import { GlobalNavigation } from "./GlobalNavigation";
import { GlobalTitle } from "./GlobalTitle";
import styled from "styled-components";

export const GlobalSideBar: React.FC = () => (
  <Container>
    <GlobalTitle />
    <Divider />
    <GlobalNavigation />
  </Container>
);

const Container = styled.div`
  position: relative;
  text-align: center;
  height: 100vh;
  padding: 0px 0.5em;
  background-color: #313A46;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    display: none;
  }
}
`;

const Divider = styled.hr`
  height: 1px;
  border: none;
  margin: 0;
  padding: 0px 1px;
  background-color: rgb(255 255 255);
`;
