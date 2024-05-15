import React from 'react';
import WelcomePage from '../WelcomePage/WelcomePage';
import styled from 'styled-components';
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #eaeaea;
  max-width: 50rem;
  min-width: 640px;
`;
const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <WelcomePage />
    </HomeWrapper>
  );
};

export default Home;
