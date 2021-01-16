import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

export const ContentLoading = () => <Loading size="4em" />;

const Loading = styled(CircularProgress)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  font-weight: bold;
  color: #313a46 !important;
`;
