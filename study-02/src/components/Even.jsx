import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log(`언마운트!`);
    }; // cleanup function
  }, []); // 의존성 배열 (dependency array, deps)

  return <div>짝수입니다.</div>;
};

export default Even;
