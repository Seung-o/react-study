import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      nextState = [...state, action.data];
      break;
    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? { ...item, ...action.data }
          : item
      );
      break;
    case "DELETE":
      nextState = state.filter(
        (item) => String(item.id) !== String(action.data.id)
      );
      break;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  useEffect(() => {
    const savedData = localStorage.getItem("diary");

    if (!savedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(savedData);

    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    dispatch({ type: "INIT", data: parsedData });

    idRef.current = parsedData.reduce((acc, cur) => Math.max(acc, cur.id), 0);

    setIsLoading(false);
  }, []);

  const onCreate = (content, emotionId, date) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content,
        emotionId,
        date,
      },
    });
  };

  const onUpdate = (id, content, emotionId, date) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        content,
        emotionId,
        date,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id,
      },
    });
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diary/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/diary/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
