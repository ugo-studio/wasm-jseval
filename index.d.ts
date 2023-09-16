/* tslint:disable */
/* eslint-disable */
/**
 * instatiate the quickjs engine
 * @returns {Promise<function (jscode,timeout): any>}
 */
export function QuickJs(): Promise<(jscode: string, timeout: number=1000) => any>;
/**
 * instatiate the quickjs engine
 * @returns {Promise<function (jscode,timeout): any>}
 */
export function DukTape(): Promise<(jscode: string, timeout: number=1000) => any>;
