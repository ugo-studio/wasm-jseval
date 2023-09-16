/* tslint:disable */
/* eslint-disable */
/**
 * instatiate the quickjs engine
 * @returns {Promise<{evalJs: function (jscode,timeout): Promise<any>}>}
 */
export function QuickJs(): Promise<{evalJs: (jscode: string, timeout: number=1000) => Promise<any>}>;
/**
 * instatiate the quickjs engine
 * @returns {Promise<{evalJs: function (jscode,timeout): Promise<any>}>}
 */
export function DukTape(): Promise<{evalJs: (jscode: string, timeout: number=1000) => Promise<any>}>;
