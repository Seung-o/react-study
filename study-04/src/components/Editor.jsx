import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전 나쁨" },
];

const getStringDate = (date) => {
  // 날짜 -> YYYY-MM-DD 형식의 문자열로 변환
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};

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
