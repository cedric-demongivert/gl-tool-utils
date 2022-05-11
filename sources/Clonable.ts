/**
 * A class of objects that can return a copy of themselves. 
 */
export interface Clonable {
  /**
   * @return A reference to a copy of this instance.
   */
  clone(): any
}

/**
 * 
 */
export namespace Clonable {
  /**
   * Returns undefined.
   * 
   * @parameter toCopy - An undefined reference.
   * 
   * @return The given parameter as-is.
   */
  export function copy(toCopy: undefined): undefined
  /**
   * Returns null.
   * 
   * @parameter A null reference.
   * 
   * @return The given parameter as-is.
   */
  export function copy(toCopy: null): null
  /**
   * Returns a reference to a copy of the given clonable instance.
   *
   * @param toCopy - A reference to a clonable instance to copy.
   *
   * @return A reference to a copy of the given clonable instance.
   */
  export function copy<Target extends Clonable>(toCopy: Target): Target
  /**
   * If defined, returns a reference to a copy of the given clonable instance.
   * 
   * If the given reference is null or undefined, this function will return it as-is.
   *
   * @param toCopy - A reference to a clonable instance, a null reference, or undefined.
   *
   * @return If defined, a reference to a copy of the given clonable instance, the given parameter otherwise.
   */
  export function copy<Target extends Clonable>(toCopy: Target | null | undefined): Target | null | undefined
  export function copy<Target extends Clonable>(toCopy: Target | null | undefined): Target | null | undefined {
    return toCopy == null ? toCopy : toCopy.clone()
  }
}