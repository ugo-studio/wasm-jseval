/* tslint:disable */
/* eslint-disable */
export interface DukTapeModule {
    cwrap: function (name, res, param): function (js_code): any,
}
/**
* @returns {DukTapeModule}
*/
export default function DukTapeModule(): DukTapeModule;