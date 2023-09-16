import { QuickJs, DukTape } from "../index.js";

QuickJs().then(async (run) => {
  const res = await run("const aa = 10;aa"); // 10
  console.log("quickjs ", res);
});

DukTape().then(async (run) => {
  const res = await run("const aa = 10;aa-"); // 10
  console.log("duktape ", res);
});
