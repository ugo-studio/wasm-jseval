# jseval-wasm

A safe **eval** library based on WebAssembly and [Duktape](https://duktape.org/)/[QuickJS](https://bellard.org/quickjs/).

## Usage

```js
import { QuickJs, DukTape } from "jseval-wasm";

QuickJs().then(async (run) => {
  const res = await run("const aa = 10;aa"); // 10
  console.log("quickjs ", res);
});

DukTape().then(async (run) => {
  const res = await run("const aa = 10;aa"); // 10
  console.log("duktape ", res);
});
```

## API

### `DukTape(): Promise<(jscode: string, timeout?: number) => any>`

Returns a Promise containing the `run` function.

### `QuickJs(): Promise<(jscode: string, timeout?: number) => any>`

Returns a Promise containing the `run` function.

#### `(jscode: string, timeout?: number) => any`

Evaluate JavaScript string in Quickjs/Duktape engine, and return a value.

## Q&A

### What can it runs?

`DukTape` can run ES5 syntax and some ES6, ES7 capabilities. `QuickJs` can run almost complete feature set of ES10.

### Why two version?

`DukTape` is smaller, but less feature. `QuickJs` has a more complete JavaScript support, but it result in bigger size.

### How can I return data from it?

Just like normal `eval`, for example `var a={};a.prop=1;a` will return `{ prop: 1 }`. But keep in mind, only JSON serializable data can be returned.

### How big is this?

`DukTape` is about 348kB, and gzipped version is 154kB.
`QuickJs` is about 484kB, and gzipped version is 225kB.
