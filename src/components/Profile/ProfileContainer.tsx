import React from "react";
import { useQuery, gql } from "@apollo/client";
import MediaQuery from "../../assets/MediaQuery";
import styled from "styled-components";

const src =
  "https://www.wantedly.com/users/124648815/avatar?h=500&t=1594094626&w=500";

const PROFILE_QUERY = gql`
  query GetProfileQuery($id: String!) {
    person(id: $id) {
      name
      image {
        url
      }
    }
  }
`;

export const ProfileContainer: React.FC = () => {
  const { data } = useQuery(PROFILE_QUERY, {
    variables: { id: "3bsfhIqo05xkUEPQ1XYQpd" },
  });

  return (
    <ProfileCardContainer>
      <SelfIntroduction>
        <ProfileImage src={src} />
        <UL>
          <LI>JIBIKI YUKI</LI>
          <LI>Web Engineer</LI>
          <LI>Tokyo University of Science B3</LI>
          <LI>Department of Computer Science</LI>
          <LI>Mario Kart · Mahjong · MonsterHunter</LI>
        </UL>
      </SelfIntroduction>
      <SkillIntroduction>
        <UL>
          <LI>TypeScript</LI>
          <LI>React.js</LI>
          <LI>GraphQL</LI>
          <LI>Next.js</LI>
        </UL>
      </SkillIntroduction>
      <HobbyIntroduction>
        <UL>
          <LI>2018/4 ~ 2022/3 東京理科大学に入学</LI>
          <LI>2020/3 ~ 2021/1 Avilenでインターン </LI>
          <LI>2020/5 ~ 2020/8 Tech-Designで業務委託</LI>
          <LI>2020/9 ~ 2020/10 Wantedlyでサマーインターン</LI>
          <LI>2020/10 ~ 2020/10 CyberAgent2DayHackに参加</LI>
        </UL>
      </HobbyIntroduction>
    </ProfileCardContainer>
  );
};

const ProfileCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  font-family: impact;
  font-weight: bold;
  font-size: 1.5rem;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  color: #313a46;
`;

const IntroductionCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 12px;
  box-shadow: rgba(186, 231, 254, 0.6) 0px 5px 20px;
  background-color: white;
`;

const SelfIntroduction = styled(IntroductionCard)`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  & > ul {
    height: calc(100% - 80px);
  }
`;

const SkillIntroduction = styled(IntroductionCard)`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  & > ul {
    height: 100%;
  }
`;

const HobbyIntroduction = styled(IntroductionCard)`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
  margin-top: -80px;
  border-radius: 20%;
  box-shadow: rgba(186, 231, 254, 0.6) 0px 5px 20px;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  margin: 0px;
  padding: 0px 8px;
`;

const LI = styled.li`
  margin: 4px 0px;
`;

export default ProfileContainer;
