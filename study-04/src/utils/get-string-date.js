export const getStringDate = (date) => {
  // 날짜 -> YYYY-MM-DD 형식의 문자열로 변환
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};
