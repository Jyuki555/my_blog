import React from "react";
import MediaQuery from "../../assets/MediaQuery";
import styled from "styled-components";

const src =
  "https://www.wantedly.com/users/124648815/avatar?h=500&t=1594094626&w=500";

export const ProfileMainContent: React.FC = () => {
  return (
    <>
      <ProfileImgContainer>
        <ProfileImg src={src} />
      </ProfileImgContainer>
      <ProfileContent>
        <ProfileNameIsEN>YUKI JIBIKI</ProfileNameIsEN>
        <ProfileNameIsJP>地引勇希</ProfileNameIsJP>
        <ProfileJob>エンジニア / フロントエンド</ProfileJob>
        <ProfileIntroduction>
          初めまして。理科大B3の地引です。
          理科大だと、留年大学ということで一般に有名かもしれませんが、僕の所属する情報工学科はそんなに留年率が高くないので生きやすいです。...
          We業界に興味があり、Webアプリケーション開発(フロントエンド開発)をしています。
          主にReact + TypesScriptを使用した開発を行っております。
          趣味はバドミントンでトマトとバッタが苦手です。
        </ProfileIntroduction>
      </ProfileContent>
    </>
  );
};

const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding-left: 3em;
  color: #263238;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    padding-left: 0;
  }
`;

const ProfileImgContainer = styled.div`
  height: auto;
  width: 25%;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    width: 60%;
    margin-bottom: 16px;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: contain;
  border-radius: 7.5%;
`;

const ProfileNameIsJP = styled.h1`
  font-size: 40px;
`;

const ProfileNameIsEN = styled.span`
  font-family: impact;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 18px;
`;

const ProfileJob = styled.span`
  letter-spacing: 1px;
  font-size: 0.75rem;
`;

const ProfileIntroduction = styled.p`
  text-align: left;
  letter-spacing: 1px;
  margin: 1.5em 0px;
  font-size: 0.9em;
`;
