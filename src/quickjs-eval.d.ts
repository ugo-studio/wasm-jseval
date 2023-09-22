/* tslint:disable */
/* eslint-disable */
export interface QuickJsModule {
    cwrap: function (name, res, param): function (js_code): any,
}
/**
* @param {Object={}} moduleArgs
* @returns {QuickJsModule}
*/
export default function QuickJsModule(moduleArgs: Object={}): QuickJsModule;