/**
 * A class of objects reversible to a "default" state. 
 */
export interface Clearable {
  /**
   * Turn back this instance to its "default" state.
   */
  clear(): void
}

/**
 * 
 */
export namespace Clearable {
  /**
   * Turn back the given clearable instance to its "default" state.
   * 
   * @param value - A clearable instance to turn back.
   * 
   * @return A reference to the cleared instance for chaining purposes.
   */
  export function clear<Target extends Clearable>(value: Target): void {
    value.clear()
  }
}