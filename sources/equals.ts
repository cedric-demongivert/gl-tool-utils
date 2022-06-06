import { Comparable } from "./Comparable"

/**
 * 
 */
export function equals(left: null, right: undefined): false
/**
 * 
 */
export function equals(left: undefined, right: null): false
/**
 * 
 */
export function equals(left: undefined, right: undefined): true
/**
 * 
 */
export function equals(left: null, right: null): true
/**
 * 
 */
export function equals(left: null | undefined, right: unknown): false
/**
 * 
 */
export function equals(left: unknown, right: null | undefined): false
/**
 * 
 */
export function equals(left: unknown, right: unknown): boolean
export function equals(left: unknown, right: unknown): boolean {
  if (left === right) return true
  if (left == null || right == null) return false
  if (typeof left !== 'object') return false
  if ((left as any).prototype !== (right as any).prototype) return false

  if (Comparable.is(left)) {
    return left.equals(right)
  }

  if (left instanceof Array) {
    return equals.arrays(left, right as Array<unknown>)
  }

  if (left instanceof Set) {
    return equals.sets(left, right as Set<unknown>)
  }

  if (left instanceof Map) {
    return equals.maps(left, right as Map<unknown, unknown>)
  }

  return false
}

/**
 * 
 */
export namespace equals {
  /**
   * 
   */
  export function arrays(left: Array<unknown>, right: Array<unknown>): boolean {
    if (left.length !== right.length) return false

    for (let index = 0, size = left.length; index < size; ++index) {
      if (!equals(left[index], right[index])) return false
    }

    return true
  }

  /**
   * 
   */
  export function sets(left: Set<unknown>, right: Set<unknown>): boolean {
    if (left.size !== right.size) return false

    for (const value of left) {
      if (!right.has(value)) return false
    }

    return true
  }

  /**
   * 
   */
  export function maps(left: Map<unknown, unknown>, right: Map<unknown, unknown>): boolean {
    if (left.size !== right.size) return false

    for (const key of left.keys()) {
      if (!right.has(key)) return false

      const leftValue: unknown = left.get(key)
      const rightValue: unknown = right.get(key)

      if (!equals(leftValue, rightValue)) return false
    }

    return true
  }
}