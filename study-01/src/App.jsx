import "./App.css";
import Button from "./components/Button";

const buttonProps = {
  text: "메일",
  color: "red",
};

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
      <Button {...buttonProps} />
      <Button text={"카페"}>
        <div>자식 컴포넌트</div>
      </Button>
      <Button text={"블로그"} />
    </>
  );
}

export default App;
