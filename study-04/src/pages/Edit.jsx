import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  const onClickDelete = () => {
    const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

    if (isConfirmed) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  useEffect(() => {
    const currentItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentItem) {
      window.alert("해당 일기를 찾을 수 없습니다.");
      nav("/", { replace: true });
    }

    setCurrentDiaryItem(currentItem);
  }, [params.id]);

  const onSubmit = (input) => {
    if (window.confirm("수정하시겠습니까?")) {
      onUpdate(
        params.id,
        input.content,
        input.emotionId,
        input.createdDate.getTime()
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)} />}
        rightChild={
          <Button text="삭제" type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
