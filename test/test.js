import { QuickJs, DukTape } from "../index.js";

QuickJs().then(async ({ evalJs }) => {
  const res = await evalJs("const aa = 10;aa"); // 10
  console.log("quickjs ", res);
});

DukTape().then(async ({ evalJs }) => {
  const res = await evalJs("const aa = 10;aa"); // 10
  console.log("duktape ", res);
});
