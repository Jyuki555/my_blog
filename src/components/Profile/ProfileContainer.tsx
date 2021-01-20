import React from "react";
import { ProfileMainContent } from "./ProfileMainContent";
import { ProfileSkillSet, ProfileCareer } from "./ProfileSubContent";
import MediaQuery from "../../assets/MediaQuery";
import styled from "styled-components";

export const ProfileContainer: React.FC = () => {
  return (
    <Container>
      <MainContent>
        <ProfileMainContent />
      </MainContent>
      <SubContent>
        <ProfileSkillSet />
        <ProfileCareer />
      </SubContent>
    </Container>
  );
};

const Container = styled.article`
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
`;

const MainContent = styled.div`
  display: flex;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const SubContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media screen and (max-width: ${MediaQuery.Tablet}px) {
    grid-template-columns: 1fr;
  }
  margin-top: 16px;
`;

export default ProfileContainer;
