# jseval-wasm

A safe **eval** library based on WebAssembly and [Duktape](https://duktape.org/)/[QuickJS](https://bellard.org/quickjs/), that can run on nodejs, browser and workers(cloudflare workers).

## Usage

```js
import { QuickJs, DukTape } from "jseval-wasm";

QuickJs().then((quickjs) => {
  quickjs.evalJs("const aa = 10;aa").then((res) => {
    console.log("quickjs ", res); // 10
  });
});

DukTape().then((duktape) => {
  duktape.evalJs("const aa = 10;aa").then((res) => {
    console.log("duktape ", res); // 10
  });
});
```
OR
```js
const { evalJs } = await QuickJs(); // or `const { evalJs } = await DukTape();`
const res = await evalJs("const aa = 10;aa");
console.log(res); // 10
```

## API

### `DukTape(): DukTape`

Returns an instance of `DukTape` containing the `evalJs` function.

### `QuickJs(): QuickJs`

Returns an instance of `QuickJs` containing the `evalJs` function.

#### `evalJs: (jscode: string, timeout?: number) => Promise<any>`

Evaluate JavaScript code string with the Quickjs or Duktape engine, and return a value.

## Q&A

### What can it runs?

`DukTape` can run ES5 syntax and some ES6, ES7 capabilities. `QuickJs` can run almost complete feature set of ES10.

### Why two version?

`DukTape` is smaller, but less feature. `QuickJs` has a more complete JavaScript support, but it result in bigger size.

### How can I return data from it?

Just like normal `eval`, for example `var a={};a.prop=1;a` will return `{ prop: 1 }`. But keep in mind, only JSON serializable data can be returned.

### How big is this?

`DukTape` is about 348kB, and gzipped version is 154kB.
`QuickJs` is about 500kB, and gzipped version is 225kB.
