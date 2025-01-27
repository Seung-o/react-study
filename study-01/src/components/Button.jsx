const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(e); // e 는 synthetic based event ( browser들을 통합한 이벤트 인터페이스 )
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
    >
      {text} - {color}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
