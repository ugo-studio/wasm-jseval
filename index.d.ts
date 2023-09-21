/* tslint:disable */
/* eslint-disable */
interface QuickJs {
  evalJs: (jscode: string, timeout: number = 1000) => Promise<any>;
}
interface DukTape {
  evalJs: (jscode: string, timeout: number = 1000) => Promise<any>;
}
/**
 * instatiate the quickjs engine
 * @returns {QuickJs}
 */
export function QuickJs(): QuickJs;
/**
 * instatiate the quickjs engine
 * @returns {DukTape}
 */
export function DukTape(): DukTape;
