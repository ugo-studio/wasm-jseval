import QuickJsModule from "./src/quickjs-eval.js";
import DukTapeModule from "./src/duktape-eval.js";

function getEval(mod) {
  const rawEval = mod.cwrap("eval", "string", ["string"]);
  return (js_code, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => reject(`TimeoutError: ${timeout}ms`), timeout);
        const res = JSON.parse(rawEval(js_code));
        resolve(res);
      } catch (err) {
        reject(err);
      }
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
