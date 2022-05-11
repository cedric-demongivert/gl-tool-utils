import { Comparable } from "./Comparable"

/**
 * A collection of tools to compare instances of objects between themselves. 
 */
export namespace Comparables {
  /**
   * Compares two sequences of elements.
   *
   * The given sequences are equivalent if and only if : 
   *  - They iterate over the same number of elements.
   *  - All pairs of elements with the same index are strictly equal.
   * 
   * @param value - A sequence to compare.
   * @param expectation - A sequence to expect.
   * 
   * @return True if both sequences are equivalent.
   */
  export function compareSequences(value: Iterator<any>, expectation: Iterator<any>): boolean {
    if (value === expectation) return true

    let valueResult: IteratorResult<any> = value.next()
    let expectationResult: IteratorResult<any> = expectation.next()

    while (!expectationResult.done) {
      if (valueResult.done || valueResult.value !== expectationResult.value) {
        return false
      }

      valueResult = value.next()
      expectationResult = expectation.next()
    }

    return valueResult.done
  }

  /**
   * Compares two sequences of elements.
   *
   * The given sequences are equivalent if and only if : 
   *  - They iterate over the same number of elements.
   *  - All pairs of elements with the same index are strictly equal if one of the elements is a null or undefined reference.
   *  - All pairs of elements with the same index are equal if one of the elements is comparable.
   * 
   * @param value - A sequence to compare.
   * @param expectation - A sequence  to expect.
   * 
   * @return True if both sequences are equivalent.
   */
  export function compareSequencesOfComparables(value: Iterator<Comparable | null | undefined>, expectation: Iterator<Comparable | null | undefined>): boolean {
    if (value === expectation) return true

    let valueResult: IteratorResult<Comparable | null | undefined> = value.next()
    let expectationResult: IteratorResult<Comparable | null | undefined> = expectation.next()

    while (!expectationResult.done) {
      if (valueResult.done) {
        return false
      }

      const valueElement: Comparable | null | undefined = valueResult.value
      const expectedElement: Comparable | null | undefined = expectationResult.value

      if (valueElement !== expectedElement && (expectedElement == null || !expectedElement.equals(valueElement))) {
        return false
      }

      valueResult = value.next()
      expectationResult = expectation.next()
    }

    return valueResult.done
  }

  /**
   * Compares two sequences of elements.
   *
   * The given sequences are equivalent if and only if : 
   *  - They iterate over the same number of elements.
   *  - All pairs of elements with the same index are strictly equal if both of the elements are not comparable.
   *  - All pairs of elements with the same index are equal if one of the elements is comparable.
   * 
   * @param value - A sequence to compare.
   * @param expectation - A sequence to expect.
   * 
   * @return True if both sequences are equivalent.
   */
  export function compareSequencesWithComparables(value: Iterator<any>, expectation: Iterator<any>): boolean {
    if (value === expectation) return true

    let valueResult: IteratorResult<Comparable | null | undefined> = value.next()
    let expectationResult: IteratorResult<Comparable | null | undefined> = expectation.next()

    while (!expectationResult.done) {
      if (valueResult.done) {
        return false
      }

      const valueElement: Comparable | null | undefined = valueResult.value
      const expectedElement: Comparable | null | undefined = expectationResult.value

      if (valueElement !== expectedElement && (expectedElement == null || !expectedElement.equals || !expectedElement.equals(valueElement))) {
        return false
      }

      valueResult = value.next()
      expectationResult = expectation.next()
    }

    return valueResult.done
  }

  /**
   * Compares two arrays of elements.
   *
   * The given arrays are equivalent if and only if : 
   *  - The arrays have the same length.
   *  - All pairs of elements with the same index are strictly equal.
   * 
   * @param value - An array to compare.
   * @param expectation - An array to expect.
   * 
   * @return True if both arrays contain an equivalent sequence of elements.
   */
  export function compareArrays(value: Array<any>, expectation: Array<any>): boolean {
    if (value === expectation) return true
    if (value.length !== expectation.length) return false

    for (let index = 0, size = value.length; index < size; ++index) {
      if (value[index] !== expectation[index]) {
        return false
      }
    }

    return true
  }

  /**
   * Compares two arrays of comparable elements.
   * 
   * The given arrays are equivalent if and only if : 
   *  - The arrays have the same length.
   *  - All pairs of elements with the same index are strictly equal if one of the elements is a null or undefined reference.
   *  - All pairs of elements with the same index are equal if one of the elements is comparable.
   * 
   * @param value - An array to compare.
   * @param expectation - An array to expect.
   * 
   * @return True if both arrays contain an equivalent sequence of elements.
   */
  export function compareArraysOfComparables(value: Array<Comparable | null | undefined>, expectation: Array<Comparable | null | undefined>): boolean {
    if (value === expectation) return true
    if (value.length !== expectation.length) return false

    for (let index = 0, size = value.length; index < size; ++index) {
      const valueElement: Comparable | null | undefined = value[index]
      const expectedElement: Comparable | null | undefined = expectation[index]

      if (valueElement !== expectedElement && (expectedElement == null || !expectedElement.equals(valueElement))) {
        return false
      }
    }

    return true
  }

  /**
   * Compares two arrays that may contains comparable elements.
   * 
   * The given arrays are equivalent if and only if : 
   *  - The arrays have the same length.
   *  - All pairs of elements with the same index are strictly equal if both elements are not comparable.
   *  - All pairs of elements with the same index are equal if one of the elements is comparable.
   * 
   * @param value - An array to compare.
   * @param expectation - An array to expect.
   * 
   * @return True if both arrays contain an equivalent sequence of elements.
   */
  export function compareArraysWithComparables(value: Array<any>, expectation: Array<any>): boolean {
    if (value === expectation) return true
    if (value.length !== expectation.length) return false

    for (let index = 0, size = value.length; index < size; ++index) {
      const valueElement: any = value[index]
      const expectedElement: any = expectation[index]

      if (valueElement !== expectedElement && (expectedElement == null || !expectedElement.equals || !expectedElement.equals(valueElement))) {
        return false
      }
    }

    return true
  }

  /**
   * Compares two sets of elements.
   * 
   * The given sets are equivalent if and only if : 
   *  - The sets have the same size.
   *  - The difference of both sets is the empty set.
   * 
   * @param value - A set to compare.
   * @param expectation - A set to expect.
   * 
   * @return True if both sets are equivalent.
   */
  export function compareSets(value: Set<any>, expectation: Set<any>): boolean {
    if (value === expectation) return true
    if (value.size !== expectation.size) return false

    for (const element of expectation) {
      if (!value.has(element)) {
        return false
      }
    }

    return true
  }

  /**
   * Compares two maps of elements.
   * 
   * The given maps are equivalent if and only if : 
   *  - The maps have the same size.
   *  - Both maps contains the same keys.
   *  - For the same key, both map contains associated values that are strictly equals.
   * 
   * @param value - A map to compare.
   * @param expectation - A map to expect.
   * 
   * @return True if both maps are equivalent.
   */
  export function compareMaps(value: Map<any, any>, expectation: Map<any, any>): boolean {
    if (value === expectation) return true
    if (value.size !== expectation.size) return false

    for (const key of expectation) {
      if (!value.has(key) || value.get(key) !== expectation.get(key)) {
        return false
      }
    }

    return true
  }

  /**
   * Compares two maps of elements.
   * 
   * @todo
   * 
   * @param value - A map to compare.
   * @param expectation - A map to expect.
   * 
   * @return True if both maps are equivalent.
   */
  export function compareMapsOfComparable(value: Map<any, Comparable | null | undefined>, expectation: Map<any, Comparable | null | undefined>): boolean {
    if (value === expectation) return true
    if (value.size !== expectation.size) return false

    for (const key of expectation) {
      if (!value.has(key) || value.get(key) !== expectation.get(key)) {
        return false
      }
    }

    return true
  }
}