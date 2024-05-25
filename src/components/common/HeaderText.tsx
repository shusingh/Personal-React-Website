interface HeaderTextProps {
  headerText: string;
}
const HeaderText: React.FC<HeaderTextProps> = ({ headerText }) => {
  return (
    <h1 className="text-gray-600 dark:text-gray-200 text-3xl font-bold text-left">
      {headerText}
    </h1>
  );
};

export default HeaderText;
