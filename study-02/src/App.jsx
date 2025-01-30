import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Even from "./components/Even";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);

  const isMounted = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log(`마운트!`);
  }, []); // 의존성 배열 (dependency array, deps)

  // 2. 업데이트 : 변화
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log(`업데이트!`);
  });

  // 3. 언마운트 : 소멸

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
