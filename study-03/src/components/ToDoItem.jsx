import { memo, useContext } from "react";
import { ToDoDispatchContext } from "../App";
import "./ToDoItem.css";

const ToDoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(ToDoDispatchContext);

  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="ToDoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// // 고차 컴포넌트 (HoC, Higher Order Component)
// export default memo(ToDoItem, (prevProps, nextProps) => {
//   // 반환값에 따라 리렌더링을 할지 결정합니다. ( 즉, Props가 바뀌었는지 여부가 반환값에 따라 결정됩니다.)
//   // true: 리렌더링을 하지 않습니다. (Props가 변경되지 않았다고 판단)
//   // false: 리렌더링을 합니다. (Props가 변경되었다고 판단)
//   return (
//     prevProps.id === nextProps.id &&
//     prevProps.isDone === nextProps.isDone &&
//     prevProps.content === nextProps.content &&
//     prevProps.date === nextProps.date
//   );
// });

export default memo(ToDoItem);
