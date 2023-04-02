import "./button.styles.css";

export const Button = ({ children, handleClick }) => {
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
};
