/* tslint:disable */
/* eslint-disable */
/**
 * @returns {Promise<function (jscode,timeout): any>}
 */
export function QuickJs(): Promise<(jscode: string, timeout: number=1000) => any>;
/**
 * @returns {Promise<function (jscode,timeout): any>}
 */
export function DukTape(): Promise<(jscode: string, timeout: number=1000) => any>;
