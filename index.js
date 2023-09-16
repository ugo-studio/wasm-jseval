import QuickJsModule from "./src/quickjs-eval.js";
import DukTapeModule from "./src/duktape-eval.js";

function getEval(mod) {
  const rawEval = mod.cwrap("eval", "string", ["string"]);
  return (js_code, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => reject(`TimeoutError: ${timeout}ms`), timeout);
        const res = rawEval(js_code);
        if (res.split(" ")[0].includes("Error")) reject(res);
        else resolve(JSON.parse(res));
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
