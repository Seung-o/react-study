import { Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새 일기를 작성하는 페이지
// 3. "/diary/:id": 일기 상세를 조회하는 페이지
function App() {
  return (
    <>
      <Header
        title="Center"
        leftChild={<Button text="<" />}
        rightChild={<Button text=">" />}
      />
      <Button text="TEST" onClick={() => console.log("123")} />
      <Button text="TEST" type="POSITIVE" onClick={() => console.log("123")} />
      <Button text="TEST" type="NEGATIVE" onClick={() => console.log("123")} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
