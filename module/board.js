function boardList() {
  return [
    { bno: 1, title: "1번글 제목", content: "1번글 내용", writer: "user001" },
    { bno: 2, title: "2번글 제목", content: "2번글 내용", writer: "user002" },
  ];
}

const userName = "Hong";
const age = 20;

module.exprts = { boardList, userName };
