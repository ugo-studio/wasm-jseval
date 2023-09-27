/* tslint:disable */
/* eslint-disable */
export interface DukTapeModule {
    cwrap: function (name, res, param): function (js_code): any,
}
/**
* @param {Object={}} moduleArgs
* @returns {Promise<DukTapeModule>}
*/
export default function DukTapeModule(moduleArgs: Object={}): Promise<DukTapeModule>;