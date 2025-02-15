import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../utils/constants";
import { getStringDate } from "../utils/get-string-date";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 1,
    content: "",
  });

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.type === "date" ? new Date(e.target.value) : e.target.value,
    });
  };

  const onClickSubmit = () => {
    onSubmit(input);
  };

  useEffect(() => {
    if (initData) {
      setInput({ ...initData, createdDate: new Date(initData.date) });
    }
  }, [initData]);

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          value={getStringDate(input.createdDate)}
          type="date"
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              emotionId={item.emotionId}
              emotionName={item.emotionName}
              isSelected={input.emotionId === item.emotionId}
              onClick={() =>
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                })
              }
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <section className="button_section">
        <Button text="취소" type="NEGATIVE" onClick={() => nav(-1)} />
        <Button text="완료" type="POSITIVE" onClick={onClickSubmit} />
      </section>
    </div>
  );
};

export default Editor;
