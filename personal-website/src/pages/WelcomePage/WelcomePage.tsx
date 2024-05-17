import SocialLinks from './components/SocialLinks';
import WelcomeHeader from './components/WelcomeHeader';
import WelcomeMessage from './components/WelcomeMessage';

const WelcomePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-start items-center mb-4">
          <WelcomeHeader />
        </div>
      </div>
      <WelcomeMessage />
      <SocialLinks />
    </>
  );
};

export default WelcomePage;
