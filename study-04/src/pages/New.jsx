import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (input) => {
    onCreate(input.content, input.emotionId, input.createdDate.getTime());
    nav("/", { replace: true }); // replace: true로 설정하면 뒤로가기 시 이전 페이지로 이동하지 않음
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
