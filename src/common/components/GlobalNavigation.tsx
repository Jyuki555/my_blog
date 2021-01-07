import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LocalAirportIcon from "@material-ui/icons/LocalAirport";
import SettingsIcon from "@material-ui/icons/Settings";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import styled from "styled-components";

const Navigation = [
  { path: "/", key: "home", text: "ほ〜む", IconComponent: HomeIcon },
  { path: "/", key: "blog", text: "ぶろぐ", IconComponent: LocalAirportIcon },
  {
    path: "/",
    key: "product",
    text: "ぷろだくと",
    IconComponent: SettingsIcon,
  },
];

const SNS = [
  { path: "/", key: "github", IconComponent: GitHubIcon },
  { path: "/", key: "twitter", IconComponent: TwitterIcon },
];

export const GlobalNavigation = () => {
  return (
    <>
      <NavigationList>
        {Navigation.map((navi) => (
          <NavigationListItem key={navi.key}>
            <navi.IconComponent />
            <LinkName>{navi.text}</LinkName>
          </NavigationListItem>
        ))}
      </NavigationList>
      <SNSGroup>
        {SNS.map((sns) => (
          <NavigationListItem key={sns.key}>
            <sns.IconComponent />
          </NavigationListItem>
        ))}
      </SNSGroup>
    </>
  );
};

const NavigationList = styled.ul`
  padding-left: 20px;
`;

const NavigationListItem = styled.li`
  display: flex;
  jutify-content: center;
  align-items: center;
  margin: 24px 0px;
  cursor: pointer;
  transition: 0.4s;
  font-size: 1.5rem;
  font-weight: bold;
  color: #8391a2;
  &:hover {
    color: #cedce4;
  }
`;

const LinkName = styled.span`
  margin-left: 4px;
`;

const SNSGroup = styled.div`
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
