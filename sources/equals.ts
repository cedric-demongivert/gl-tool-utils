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
  return left === right || Comparable.is(left) && left.equals(right)
}