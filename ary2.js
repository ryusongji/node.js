//reduce()-이전 순번에서 결과를 다음 순번의 매개값으로 활용

console.clear();

result = [10, 15, 20, 25, 30].reduce((accm, elem, idx) => {
  console.log(idx, "->", accm, elem);
  if (elem >= 20) {
    const li = document.createElement("li");
    li.innerText = elem;
    accm.appendChild(li);
  }
  // return accm > elem ? accm : elem;
  return accm;
}, document.querySelector("#list"));

console.log(result);

console.clear();
// male인 사람의 급여 합계를 구해보고싶다
const sum_of_male = (accm, elem, idx, array) => {
  const { salary, gender } = elem;
  if (gender == "Male") {
    accm += salary;
  }
  return accm;
  // console.log(idx, "->", accum, elem);
  // return elem;
};
result = ary.reduce(sum_of_male, 0);

console.log("Male의 급여 합계: " + result);

console.clear();

// Female의 급여가 10000이하인 사람들의 {번호/이름/이메일/급여}

const female_8000 = (accm, elem, idx, array) => {
  const { id, first_name, last_name, email, salary, gender } = elem;
  if (gender == "Female" && salary <= 10000) {
    const obj = { id, name: first_name + last_name, email, salary };
    accm.push(obj);
  }
  return accm;
};

result = ary.reduce(female_8000, []);
console.log(result);
