const path = require("path");
const fs = require("fs");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename, path.extname(__filename)));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.format({ dir: "D:\\git\\node.js", base: "sample.txt" }));
console.log(path.join("D:\\git\\node.js", "module", "sample.txt"));

const filePath = path.join(__dirname, "package.json");

// const filePath = path.join(
//   "D:\\git",
//   "node.js",
//   "module",
//   "output",
//   "stderr.log",
// );

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

const data = fs.readFileSync(__dirname + "\\todo.txt", "Sample...", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("write done");
});
console.log(data);

console.log("end of prog");
