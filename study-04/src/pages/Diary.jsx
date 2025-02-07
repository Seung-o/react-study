import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <div>{params.id} 번째 일기</div>
    </div>
  );
};

export default Diary;
