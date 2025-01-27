// Custom Hook
// use 로 시작하는 네이밍을 가지고 있어야 함
function useInput() {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
