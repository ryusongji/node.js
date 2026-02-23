const data = `[{"id":1,"first_name":"Brnaba","last_name":"Wingatt","email":"bwingatt0@tinyurl.com","gender":"Male","salary":5890},
{"id":2,"first_name":"Basile","last_name":"Burgwyn","email":"bburgwyn1@zdnet.com","gender":"Male","salary":3769},
{"id":3,"first_name":"Mervin","last_name":"Turbern","email":"mturbern2@ox.ac.uk","gender":"Male","salary":8596},
{"id":4,"first_name":"Jania","last_name":"Helkin","email":"jhelkin3@imageshack.us","gender":"Female","salary":14748},
{"id":5,"first_name":"Catarina","last_name":"Rivers","email":"crivers4@w3.org","gender":"Female","salary":12311},
{"id":6,"first_name":"Adella","last_name":"Eisold","email":"aeisold5@gov.uk","gender":"Female","salary":3278},
{"id":7,"first_name":"Inge","last_name":"Jenking","email":"ijenking6@123-reg.co.uk","gender":"Female","salary":9601},
{"id":8,"first_name":"Fedora","last_name":"Ennals","email":"fennals7@cdc.gov","gender":"Female","salary":4606},
{"id":9,"first_name":"Dennie","last_name":"Cramp","email":"dcramp8@sitemeter.com","gender":"Male","salary":7398},
{"id":10,"first_name":"Joel","last_name":"Seleway","email":"jseleway9@oaic.gov.au","gender":"Male","salary":9538},
{"id":11,"first_name":"Thalia","last_name":"Dawson","email":"tdawsona@youtube.com","gender":"Female","salary":7246},
{"id":12,"first_name":"Tedd","last_name":"Kroch","email":"tkrochb@jugem.jp","gender":"Male","salary":7396},
{"id":13,"first_name":"Loralie","last_name":"Cogdon","email":"lcogdonc@loc.gov","gender":"Female","salary":13006},
{"id":14,"first_name":"Cristobal","last_name":"Anthoin","email":"canthoind@moonfruit.com","gender":"Male","salary":12729},
{"id":15,"first_name":"Clementius","last_name":"Cranston","email":"ccranstone@example.com","gender":"Male","salary":6957},
{"id":16,"first_name":"Margaretta","last_name":"Kohrsen","email":"mkohrsenf@squarespace.com","gender":"Female","salary":10120},
{"id":17,"first_name":"Deane","last_name":"Uc","email":"ducg@domainmarket.com","gender":"Male","salary":4803},
{"id":18,"first_name":"Titos","last_name":"Wildin","email":"twildinh@goo.gl","gender":"Male","salary":6309},
{"id":19,"first_name":"Wilhelm","last_name":"Moreno","email":"wmorenoi@gov.uk","gender":"Male","salary":14071},
{"id":20,"first_name":"Sue","last_name":"Cockrill","email":"scockrillj@whitehouse.gov","gender":"Female","salary":13825}]`;

//JSON문자열 -> Object
const ary = JSON.parse(data);
// console.log(ary);
//Object -> JSON
const json = JSON.stringify(ary);
// console.log(json);

//sort()
// console.log(["Hello", "Hi", "Good", "World"].sort());
// console.log([10, 35, 21, 121, 11].sort((n1, n2) => n2 - n1));

// id기준 내림차순 정렬
const order_by_id = (obj1, obj2) => obj2.id - obj1.id;
// salary 기준 오름차순 정렬
const order_by_salary = (obj1, obj2) => obj1.salary - obj2.salary;
//  first_name 기준 오름차순 정렬
const order_by_fn = (obj1, obj2) => {
  return obj1.first_name > obj2.first_name ? 1 : -1;
};

let result = ary.sort(order_by_id);
let result2 = ary.sort(order_by_salary);
let result3 = ary.sort(order_by_fn);
// console.log(result);
// console.log(result2);
// console.log(result3);

if ("hello" > "nice") {
  // console.log("hello");
} else {
  // console.log("nice");
}

// module.exports = { ary };

function getMember() {
  return ["user01", "user02", "user03"];
}
