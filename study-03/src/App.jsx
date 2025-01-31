import { useReducer, useRef } from "react";
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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [toDos, dispatch] = useReducer(reducer, mockData);
  // const [toDos, setToDos] = useState(mockData);
  const idRef = useRef(4);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({ type: "UPDATE", targetId });
  };

  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List toDos={toDos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
