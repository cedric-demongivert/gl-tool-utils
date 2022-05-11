/**
 * A set of common empty instances.
 */
export namespace Empty {
  /**
   * An empty string.
   */
  export const STRING: string = ''

  /**
   * An empty numerical value.
   */
  export const NUMBER: number = 0

  /**
   * An empty boolean value.
   */
  export const BOOLEAN: boolean = false

  /**
   * An empty array.
   */
  export const ARRAY: readonly any[] = Object.freeze([])

  /**
   * An empty map.
   */
  export const MAP: Readonly<Map<any, any>> = Object.freeze(new Map())

  /**
   * An empty set.
   */
  export const SET: Readonly<Set<any>> = Object.freeze(new Set())

  /**
   * An empty object.
   */
  export const OBJECT: Readonly<{}> = Object.freeze({})
}