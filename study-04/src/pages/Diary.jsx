import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringDate } from "../utils/get-string-date";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const currentDiaryItem = useDiary(params.id);

  if (!currentDiaryItem) {
    return <div>로딩중...</div>;
  }

  const { date, content, emotionId } = currentDiaryItem;

  return (
    <div>
      <div>
        <Header
          title={`${getStringDate(new Date(date))}  기록`}
          leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
          rightChild={
            <Button
              text={"수정"}
              onClick={() => nav(`/diary/edit/${params.id}`)}
            />
          }
        />
        <Viewer emotionId={emotionId} content={content} />
      </div>
    </div>
  );
};

export default Diary;
