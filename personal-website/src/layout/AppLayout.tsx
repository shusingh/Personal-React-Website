import styled from 'styled-components';
import { AppRoutes } from '../routes/config';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start;
`;

const AppLayout: React.FC = () => {
  return (
    <>
      <PageLayout>
        <Header />
        <AppRoutes />
        <Footer />
      </PageLayout>
    </>
  );
};

export default AppLayout;
