import { createContext, useReducer, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

const mockData = [
  {
    id: 1,
    content: "오늘은 날씨가 좋네요.",
    date: new Date("2025-02-14").getTime(),
    emotionId: 1,
  },
  {
    id: 2,
    content: "오늘은 날씨가 좋네요.",
    date: new Date("2025-02-13").getTime(),
    emotionId: 2,
  },
  {
    id: 3,
    content: "오늘은 날씨가 좋네요.",
    date: new Date("2025-01-12").getTime(),
    emotionId: 3,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id)
          ? { ...item, ...action.data }
          : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.data.id));
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(mockData.length + 1);

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
