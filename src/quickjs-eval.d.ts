/* tslint:disable */
/* eslint-disable */
export interface QuickJsModule {
    cwrap: function (name, res, param): function (js_code): any,
}
/**
* @returns {QuickJsModule}
*/
export default function QuickJsModule(): QuickJsModule;