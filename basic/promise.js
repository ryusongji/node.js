//promise 객체: pending/ fulfilled / rejected

const promise = new Promise(function (resolve, reject) {
  console.log("promise call");
  resolve("OK");
  //reject("NG");
});
promise //
  .then((param) => {
    console.log(param);
  })
  .catch((param) => {
    console.error(param);
  });

// 비동기방식 코드 -> 동기방식 코디
let data = 10;
const p1 = new Promise(function (resolve) {
  setTimeout(() => {
    console.log("1번째");
    data += 5;
    console.log(`data => ${data}`);
    resolve(data);
  }, 2000);
});

p1.then((data) => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("2번째");
      data *= 2;
      console.log(`data => ${data}`);
      resolve(data);
    }, 3000);
  });
})
  .then((data) => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        console.log("3번째");
        data -= 7;
        console.log(`data => ${data}`);
      }, 1000);
    });
  })
  .catch((err) => {
    console.error(err);
  });

// let answer = 10;
// // 1번째 작업 => 5를 더하고 : 15
// // 2번째 작업 => 2를 곱하고 : 30
// // 3번째 작업 => 7를 빼기 :27
// setTimeout(() => {
//   console.log("1번째");
//   answer += 5;
//   console.log(`answer => ${answer}`);
//   setTimeout(() => {
//     console.log("2번째");
//     answer *= 2;
//     console.log(`answer => ${answer}`);
//     setTimeout(() => {
//       console.log("3번째");
//       answer -= 7;
//       console.log(`answer => ${answer}`);
//     }, 1100);
//   }, 800);
// }, 1000);

// fetch("./MOCK_DATA.json")
//   .then((resp) => resp.json())
//   .then((result) => {
//     console.log("result=>", result);
//     console.log("end of frog");
//   });

// // setTimeout();
// // 1번째 => 2초 작업
// // 2번째 => 3초 작업
// // 3번째 => 1초 작업 => 6초 작업

// //동기방식
// setTimeout(() => {
//   console.log("1번째");
//   setTimeout(() => {
//     console.log("2번째");
//     setTimeout(() => {
//       console.log("3번째");
//     }, 1000);
//   }, 3000);
// }, 2000);

// //비동기방식 => 처리가 시간상의 이점이 있음
// setTimeout(() => {
//   console.log("1번째");
// }, 2000);

// setTimeout(() => {
//   console.log("2번째");
// }, 3000);

// setTimeout(() => {
//   console.log("3번째");
// }, 1000);
