import styled from 'styled-components';
import { AppRoutes } from '../routes/config';

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start;
`;

const HeaderContainer = styled.header`
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  max-width: 50rem;
  min-width: 640px;
  border: 1px solid #eaeaea;
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 64px;
  border: 1px solid #eaeaea;
  margin-top: auto;
`;

const AppLayout: React.FC = () => {
  return (
    <>
      <PageLayout>
        <HeaderContainer>Header</HeaderContainer>
        <AppRoutes />
        <Footer>Footer</Footer>
      </PageLayout>
    </>
  );
};

export default AppLayout;
