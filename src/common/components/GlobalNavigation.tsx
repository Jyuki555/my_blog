import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LocalAirportIcon from "@material-ui/icons/LocalAirport";
import SettingsIcon from "@material-ui/icons/Settings";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = [
  { path: "/", key: "home", text: "ほ〜む", IconComponent: HomeIcon },
  {
    path: "/blog",
    key: "blog",
    text: "ぶろぐ",
    IconComponent: LocalAirportIcon,
  },
  {
    path: "/product",
    key: "product",
    text: "ぷろだくと",
    IconComponent: SettingsIcon,
  },
];

const SNS = [
  {
    path: "https://github.com/Jyuki555",
    key: "github",
    IconComponent: GitHubIcon,
  },
  {
    path: "https://twitter.com/Jyuki1234567890",
    key: "twitter",
    IconComponent: TwitterIcon,
  },
];

export const GlobalNavigation = () => {
  return (
    <>
      <NavigationList>
        {Navigation.map((navi) => (
          <NavigationListItem key={navi.key}>
            <navi.IconComponent />
            <LinkName to={navi.path}>{navi.text}</LinkName>
          </NavigationListItem>
        ))}
      </NavigationList>
      <SNSGroup>
        {SNS.map((sns) => (
          <NavigationListItem key={sns.key}>
            <NavigationListItemAnchor href={sns.path} target="_blank">
              <sns.IconComponent />
            </NavigationListItemAnchor>
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

const NavigationListItemAnchor = styled.a`
  transition: 0.4s;
  color: #8391a2;
  &:hover {
    color: #cedce4;
  }
`;

const LinkName = styled(Link)`
  color: inherit;
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
