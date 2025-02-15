import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const currentItem = data.find((item) => String(item.id) === String(id));

    if (!currentItem) {
      window.alert("해당 일기를 찾을 수 없습니다.");
      nav("/", { replace: true });
    }

    setCurrentDiaryItem(currentItem);
  }, [id]);

  return currentDiaryItem;
};

export default useDiary;
