import React from "react";
import MediaQuery from "../../assets/MediaQuery";
import { GlobalSideBar } from "./GlobalSideBar";
import { GlobalHeader } from "./GlobalHeader";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const GlobalContainer: React.FC<Props> = ({ children }) => (
  <PageWithSideNavi>
    <GlobalHeader />
    <GlobalSideBar />
    <Content>{children}</Content>
  </PageWithSideNavi>
);

const PageWithSideNavi = styled.div`
  display: grid;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: ${MediaQuery.Tablet + 1}px) {
    grid-template-columns: 13.5rem 1fr;
  }
`;

const Content = styled.div`
  position: relative;
  height: 100vh;
  padding: 120px 1.5rem 80px 1.5rem;
  overflow-y: scroll;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    padding: 100px 1rem;
  }
`;
