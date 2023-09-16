// import assert from "assert";
// import duktape from "../duktapeEval.js";
// import { getInstance } from "../quickjsEval.js";

// async function runTest(name) {
//   console.log(name);
//   const mod = await getInstance();
//   console.log(name, mod);
//   //   assert(mod.eval("1+1") === 2);
//   //   assert(mod.eval('var a={m:"hello"};a.m+" world"') === "hello world");
//   //   const add = mod.newFunction(["a", "b"], "return a+b");
//   //   assert(add(1, 2) === 3);
//   //   assert(add(8, 7) === 15);
//   //   const slice = mod.newFunction(["arr", "a", "b"], "return arr.slice(a,b)");
//   //   assert(
//   //     JSON.stringify(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 5)) === "[3,4]"
//   //   );
// }
// // runTest("duktape", duktape);
// runTest("quickjs");
import Module from "../src/quickjs-eval.js";

Module().then((mod) => {
  var rawEval = mod.cwrap("eval", "string", ["string"]);
  const res = rawEval("const bb = {h:3};bb");
  console.log(res);
});

// import { getInstance } from "../src/index";

// getInstance().then((mod) => {
//   const res = mod.eval("const a = 0;a;");
//   console.log(res);
// });
