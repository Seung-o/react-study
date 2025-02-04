import { useMemo, useState } from "react";
import "./List.css";
import ToDoItem from "./ToDoItem";

const List = ({ toDos, onUpdate, onDelete }) => {
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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("Analyzed Data 랜더링");
    const totalCount = toDos.length;
    const doneCount = toDos.filter((toDo) => toDo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [toDos]);

  const filteredToDos = getFilteredToDos();

  const itemComponents = filteredToDos.map((toDo) => {
    return (
      <ToDoItem
        key={toDo.id}
        {...toDo}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    );
  });

  return (
    <div className="List">
      <h3>To-do List 🌱</h3>
      <div className="status">
        총 {totalCount}개 중에 {doneCount}개가 완료, {notDoneCount}개가 미완료
      </div>
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
