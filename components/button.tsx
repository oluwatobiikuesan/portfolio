import "@/styles/button.css";

interface BigCircleButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const BigCircleButton = ({
  children,
  onClick,
}: BigCircleButtonProps) => {
  return (
    <button onClick={onClick} className="big-circle-button">
      <span>{children}</span>
    </button>
  );
};
