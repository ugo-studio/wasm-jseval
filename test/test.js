import { QuickJs, DukTape } from "../index.js";

const quickjs = await QuickJs();
quickjs.evalJs("const aa = 10;aa").then((res) => {
  console.log("quickjs ", res); // 10
});

const duktape = await DukTape();
duktape.evalJs("const aa = 10;aa").then((res) => {
  console.log("duktape ", res); // 10
});
