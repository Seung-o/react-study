import "./List.css";
import ToDoItem from "./ToDoItem";

const List = () => {
  return (
    <div className="List">
      <h3>To-do List 🌱</h3>
      <input placeholder="검색어를 입력하세요"></input>
      <div className="to_dos_wrapper">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </div>
  );
};

export default List;
