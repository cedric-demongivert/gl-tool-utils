/**
 * A set of common empty instances.
 */
export namespace Empty {
  /**
   * An empty string.
   */
  export const STRING: string = ''

  /**
   * 
   */
  export function string(): string {
    return STRING
  }

  /**
   * An empty numerical value.
   */
  export const NUMBER: number = 0

  /**
   * 
   */
  export function number(): number {
    return NUMBER
  }

  /**
   * An empty boolean value.
   */
  export const BOOLEAN: boolean = false

  /**
   * 
   */
  export function boolean(): boolean {
    return BOOLEAN
  }

  /**
   * An empty array.
   */
  export const ARRAY: readonly any[] = Object.freeze([])

  /**
   * 
   */
  export function array<Element>(): readonly Element[] {
    return ARRAY
  }

  /**
   * An empty map.
   */
  export const MAP: Readonly<Map<any, any>> = Object.freeze(new Map())

  /**
   * 
   */
  export function map<Key, Value>(): Readonly<Map<Key, Value>> {
    return MAP
  }

  /**
   * An empty set.
   */
  export const SET: Readonly<Set<any>> = Object.freeze(new Set())

  /**
   * 
   */
  export function set<Value>(): Readonly<Set<Value>> {
    return SET
  }

  /**
   * An empty object.
   */
  export const OBJECT: Readonly<object> = Object.freeze({})

  /**
   * 
   */
  export function object(): Readonly<object> {
    return OBJECT
  }
}