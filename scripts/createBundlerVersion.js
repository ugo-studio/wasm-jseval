import { readFile, writeFile } from "fs/promises";

// read index.js
let code = await readFile("./index.js", { encoding: "utf-8" });
// add imports
const imports = `import QuickjsWasm from "./src/quickjs-eval.wasm";\nimport DukTapeWasm from "./src/duktape-eval.wasm";\n`;
code = `${imports}${code}`;
// add bundler version code snippets for quickjs and duktape
code = code.replace(
  `/*QuickJsBundlerVersion*/`,
  `{
    instantiateWasm: async (obj, func) => {
      func(await WebAssembly.instantiate(QuickjsWasm, obj));
    },
  }`
);
code = code.replace(
  `/*DukTapeBundlerVersion*/`,
  `{
    instantiateWasm: async (obj, func) => {
      func(await WebAssembly.instantiate(DukTapeWasm, obj));
    },
  }`
);
// write the index-bundler.js
await writeFile("./index-bundler.js", code);
// write the declaration file
await writeFile(
  "./index-bundler.d.ts",
  await readFile("./index.d.ts", { encoding: "utf-8" })
);
console.log("written index-bundler.js and index-bundler.d.ts");
