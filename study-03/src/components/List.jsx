import { useState } from "react";
import "./List.css";
import ToDoItem from "./ToDoItem";

const List = ({ toDos }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredToDos = () => {
    if (search === "") {
      return toDos;
    }
    return toDos.filter((toDo) =>
      toDo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredToDos = getFilteredToDos();

  const itemComponents = filteredToDos.map((toDo) => {
    return <ToDoItem key={toDo.id} {...toDo} />;
  });

  return (
    <div className="List">
      <h3>To-do List 🌱</h3>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="to_dos_wrapper">{itemComponents}</div>
    </div>
  );
};

export default List;
