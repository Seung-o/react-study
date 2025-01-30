import "./ToDoItem.css";

const ToDoItem = () => {
  return (
    <div className="ToDoItem">
      <input type="checkbox" />
      <div className="content">할 일</div>
      <div className="date">날짜</div>
      <button>삭제</button>
    </div>
  );
};

export default ToDoItem;
