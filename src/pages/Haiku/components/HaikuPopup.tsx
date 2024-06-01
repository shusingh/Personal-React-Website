import { IHaiku } from './HaikuCard';
import HaikuCardHeading from './HaikuCardHeading';
import { ReactComponent as Close } from 'src/assets/images/close.svg';

interface HaikuPopupProps {
  haikuItem: IHaiku;
  onClose: () => void;
}

const HaikuModal: React.FC<HaikuPopupProps> = ({ haikuItem, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 border-none focus:ring-gray-200 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none rounded-lg text-sm p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700"
          style={{ backgroundColor: 'transparent' }}
        >
          <Close className="text-gray-800 dark:text-white" />
        </button>
        <HaikuCardHeading heading={haikuItem.title} />
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {haikuItem.haiku}
        </p>
      </div>
    </div>
  );
};

export default HaikuModal;
