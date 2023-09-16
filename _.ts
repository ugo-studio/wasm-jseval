import { QuickJsModule } from "./src/quickjs-eval";
import { DukTapeModule } from "./src/duktape-eval";

export async function QuickJs() {
  const mod: QuickJsModule = await QuickJsModule();
  return getEval(mod);
}
export async function DukTape() {
  const mod: DukTapeModule = await DukTapeModule();
  return getEval(mod);
}

function getEval(mod: QuickJsModule | DukTapeModule) {
  const rawEval = mod.cwrap("eval", "string", ["string"]);
  return (js_code: string, timeout: number = 1000) => {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => reject(`TimeoutError: ${timeout}ms`), timeout);
      resolve(rawEval(js_code));
    });
  };
}

