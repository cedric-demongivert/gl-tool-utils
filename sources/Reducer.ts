/**
 * 
 */
export type Reducer<Accumulator, Value = Accumulator> = (accumulator: Accumulator, value: Value) => Accumulator

/**
 * 
 */
export namespace Reducer {
  /**
   * 
   */
  export function sum(left: number, right: number): number {
    return left + right
  }

  /**
   * 
   */
  export function concat(left: string, right: string): string {
    return left + right
  }
}