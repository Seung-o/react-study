import { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  {
    id: 1,
    isDone: false,
    content: "React 공부하기",
    date: new Date("2021-07-01").getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "JS 공부하기",
    date: new Date("2021-07-02").getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "JSX 공부하기",
    date: new Date("2021-07-03").getTime(),
  },
];

function App() {
  const [toDos, setToDos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newToDo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setToDos([newToDo, ...toDos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List toDos={toDos} />
    </div>
  );
}

export default App;
