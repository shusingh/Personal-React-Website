import SocialLinks from "./components/SocialLinks";
import WelcomeHeader from "./components/WelcomeHeader";
import WelcomeMessage from "./components/WelcomeMessage";

const WelcomePage: React.FC = () => {
  return (
  <>
    <WelcomeHeader />
    <WelcomeMessage />
    <SocialLinks />
  </>
);
};

export default WelcomePage;
