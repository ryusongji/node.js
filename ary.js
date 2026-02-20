console.clear();

// 급여가 10000보다 적은 사람들
const less_than_10000 = (elem, idx) => {
  // console.log(elem, idx);
  return elem.salary < 10000 ? true : false;
};

// 여자중에서 8000 이상인 사람
// const more_than_8000 = (elem, idx) => {

//   return elem.gender == "Female" && elem.salary > 8000 ? true : false;
// };

const more_than_8000 = (elem) => elem.gender == "Female" && elem.salary > 8000;
//fiter()
result = ary.filter(less_than_10000);
result2 = ary
  .filter(more_than_8000)
  // console.log(result2);
  .map((elem, idx, array) => {
    // map() : A -> A'(매핑)
    //  id/first_name/last_name/email/gender/filter
    // no/name/gender/salary
    // 객체구조분해
    const { id, first_name, last_name, gender, email, salary } = elem;
    const obj = {
      no: id,
      name: first_name + "-" + last_name,
      gender,
      salary,
    };
    return obj;
  });

console.log(result2);
