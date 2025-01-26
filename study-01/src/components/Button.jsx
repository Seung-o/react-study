const Button = ({ text, color, children }) => {
  return (
    <button>
      {text} - {color}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
