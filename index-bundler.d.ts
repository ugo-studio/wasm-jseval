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
 * @returns {Promise<QuickJs>}
 */
export function QuickJs(): Promise<QuickJs>;
/**
 * instatiate the quickjs engine
 * @returns {Promise<DukTape>}
 */
export function DukTape(): Promise<DukTape>;
