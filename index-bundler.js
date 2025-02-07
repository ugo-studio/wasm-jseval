import QuickjsWasm from "./src/quickjs-eval.wasm";
import DukTapeWasm from "./src/duktape-eval.wasm";
import QuickJsModule from "./src/quickjs-eval.js";
import DukTapeModule from "./src/duktape-eval.js";

function getEval(mod) {
  return {
    evalJs: (js_code, timeout = 1000) => {
      return new Promise(async (resolve, reject) => {
        try {
          // set js code evaluation timeout
          const timeoutId = setTimeout(
            () => reject(`TimeoutError: ${timeout}ms`),
            timeout
          );
          // evaluate js code
          const res = (await mod).cwrap("eval", "string", ["string"])(js_code);
          // stop timeout after js code evaluation
          clearTimeout(timeoutId);
          // return evaluation result
          if (res.split(" ")[0].includes("Error:")) reject(res);
          else if (res == "undefined") resolve(res);
          else resolve(JSON.parse(res));
        } catch (err) {
          reject(err);
        }
      });
    },
  };
}

export async function QuickJs() {
  const mod = await QuickJsModule({
    instantiateWasm: async (obj, func) => {
      func(await WebAssembly.instantiate(QuickjsWasm, obj));
    },
  });
  return getEval(mod);
}

export async function DukTape() {
  const mod = await DukTapeModule({
    instantiateWasm: async (obj, func) => {
      func(await WebAssembly.instantiate(DukTapeWasm, obj));
    },
  });
  return getEval(mod);
}
