import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const GlobalTitle: React.FC = () => {
  return <Title to="/">jyuki.dev</Title>;
};

const Title = styled(Link)`
  display: block;
  letter-spacing: 1.5px;
  margin: 16px 0px;
  font-family: impact;
  font-weight: bold;
  font-size: 2rem;
  color: white;
`;
