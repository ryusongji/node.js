console.dir(company, { dept: 3, colors: true });

console.time("for loop");
for (let i = 1; i <= 1000000; i++) {
  console.log(`i`);
}

console.timeEnd("for loop");
