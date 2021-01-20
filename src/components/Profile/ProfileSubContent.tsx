import React from "react";
import MediaQuery from "../../assets/MediaQuery";
import styled from "styled-components";

export const ProfileSkillSet = () => {
  const SkillList = ["React.js", "TypeScript", "Next.js"];
  return (
    <div>
      <Title>SkillType</Title>
      <List>
        {SkillList.map((career, idx) => (
          <SkillItem key={idx}>{career}</SkillItem>
        ))}
      </List>
    </div>
  );
};

export const ProfileCareer = () => {
  const CareerList = [
    "2018/04~2022/03 東京理科大学に入学",
    "2020/03~2021/01 Avilenでインターン",
    "2020/05~2020/08 TechDesignで業務委託",
    "2020/09~2020/10 Wantedlyでサマーインターン",
    "2020/10~2020/10 CyberAgent2DayHack",
  ];
  return (
    <div>
      <Title>Career</Title>
      <List>
        {CareerList.map((career, idx) => (
          <CareerItem key={idx}>{career}</CareerItem>
        ))}
      </List>
    </div>
  );
};

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    text-align: center;
  }
`;

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  letter-spacing: 0.5px;
  margin: 4px 0px;
  padding: 8px 20px;
  font-weight: bold;
  font-size: 0.85rem;
  border-radius: 4px;
  background-color: #d4d4d4;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    margin: 8px auto;
  }
`;

const SkillItem = styled(Item)`
  max-width: 140px;
  text-align: center;
`;

const CareerItem = styled(Item)`
  word-break: keep-all;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    text-align: center;
  }
`;
