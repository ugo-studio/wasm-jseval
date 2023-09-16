import QuickJsModule from "./src/quickjs-eval.js";
import DukTapeModule from "./src/duktape-eval.js";

function getEval(mod) {
  const rawEval = mod.cwrap("eval", "string", ["string"]);
  return (js_code, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(`TimeoutError: ${timeout}ms`), timeout);
      resolve(rawEval(js_code));
    });
  };
}

export async function QuickJs() {
  const mod = await QuickJsModule();
  return getEval(mod);
}

export async function DukTape() {
  const mod = await DukTapeModule();
  return getEval(mod);
}
