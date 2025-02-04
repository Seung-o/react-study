import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header); // 외부 Props 가 변경되어도 리렌더링을 하지 않습니다. (성능 최적화)
