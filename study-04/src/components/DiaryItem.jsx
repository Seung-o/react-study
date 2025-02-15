import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../utils/emotion.util";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = ({ id, emotionId, date, content }) => {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img
          onClick={() => nav(`/diary/${id}`)}
          src={getEmotionImage(emotionId)}
        ></img>
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(date).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/diary/edit/${id}`)} text="수정" />
      </div>
    </div>
  );
};

export default DiaryItem;
