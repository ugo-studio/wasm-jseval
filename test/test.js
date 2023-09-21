import { QuickJs, DukTape } from "../index.js";

const quickjs = QuickJs();
quickjs.evalJs("const aa = 10;aa").then((res) => {
  console.log("quickjs ", res); // 10
});

const duktape = DukTape();
duktape.evalJs("const aa = 10;aa").then((res) => {
  console.log("duktape ", res); // 10
});
