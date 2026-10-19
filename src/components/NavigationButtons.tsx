interface NavigationButtonProps {
  navigation: string;
  bgColor: string;
  textColor: string;
  onClick: () => void;
}

export const NavigationButton = ({
  navigation,
  bgColor,
  textColor,
  onClick,
}: NavigationButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className="rounded-lg px-5 py-3 font-medium"
    >
      {navigation}
    </button>
  );
};
