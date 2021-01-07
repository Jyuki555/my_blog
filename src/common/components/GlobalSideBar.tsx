import React from "react";
import MediaQuery from "../../assets/MediaQuery";
import { GlobalNavigation } from "./GlobalNavigation";
import styled from "styled-components";

export const GlobalSideBar: React.FC = () => (
  <Container>
    <Title>jyuki.dev</Title>
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

const Title = styled.h2`
  letter-spacing: 1.5px;
  margin: 16px 0px;
  font-family: impact;
  font-weight: bold;
  font-size: 2rem;
  color: white;
`;

const Divider = styled.hr`
  height: 1px;
  border: none;
  margin: 0;
  padding: 0px 1px;
  background-color: rgb(255 255 255);
`;
