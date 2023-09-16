/* tslint:disable */
/* eslint-disable */
export interface DukTapeModule {
    cwrap: function (name, res, param): function (js_code): any,
}
/**
* @returns {Promise<DukTapeModule>}
*/
export default function DukTapeModule(): Promise<DukTapeModule>;