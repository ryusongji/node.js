const { ary } = require("./data");
// console.log(ary);

// Male 인 목록
// {Male : [{}, {}, {},{}...{}]}
// const male = (accm, elem, idx, array) => {
//   if (elem.gender == "Male") {
//     const obj = { Male: elem };
//     // console.log(obj);
//     accm.push(obj);
//   }
//   return accm;
// };
// const result = ary.reduce(male, []);

const male = (accm, elem, idx, array) => {
  if (elem.gender == "Male") {
    accm.Male.push(elem);
  }
  return accm;
};
let result = ary.reduce(male, { Male: [] });

// console.log(result);

const group_by_gender = (accm, elem) => {
  if (accm[elem.gender] == undefined) {
    accm[elem.gender] = [];
  }
  accm[elem.gender].push(elem.first_name);
  return accm;
};
result = ary.reduce(group_by_gender, {});
console.log(result);
