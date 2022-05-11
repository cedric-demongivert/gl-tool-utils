/** eslint-env jest */

import { Comparator } from '../sources/Comparator'

/**
 * 
 */
describe('Comparator', function () {
  /**
   * 
   */
  describe('compareWithOperator', function () {
    /**
     * 
     */
    it('returns a negative integer if the left element is less than the right one', function () {
      expect(Comparator.compareWithOperator(3, 6)).toBeLessThan(0)
      expect(Comparator.compareWithOperator(new Date(1259), new Date(5988789))).toBeLessThan(0)
      expect(Comparator.compareWithOperator('azerty', 'qwerty')).toBeLessThan(0)
    })

    /**
     * 
     */
    it('returns a positive integer if the left element is greather than the right one', function () {
      expect(Comparator.compareWithOperator(8, 1)).toBeGreaterThan(0)
      expect(Comparator.compareWithOperator(new Date(1245), new Date(25))).toBeGreaterThan(0)
      expect(Comparator.compareWithOperator('aka', 'aba')).toBeGreaterThan(0)
    })

    /**
     * 
     */
    it('returns zero otherwise', function () {
      expect(Comparator.compareWithOperator(5, 5)).toBe(0)
      expect(Comparator.compareWithOperator(new Date(568), new Date(568))).toBe(0)
      expect(Comparator.compareWithOperator('yru', 'yru')).toBe(0)
    })
  })

  /**
   * 
   */
  describe('compareNumbers', function () {
    /**
     * 
     */
    it('returns a negative integer if the left element is less than the right one', function () {
      expect(Comparator.compareNumbers(3, 6)).toBeLessThan(0)
      expect(Comparator.compareNumbers(-2, 12)).toBeLessThan(0)
      expect(Comparator.compareNumbers(-89, -45)).toBeLessThan(0)
      expect(Comparator.compareNumbers(32, 421)).toBeLessThan(0)
      expect(Comparator.compareNumbers(-Infinity, +Infinity)).toBeLessThan(0)
    })

    /**
     * 
     */
    it('returns a positive integer if the left element is greather than the right one', function () {
      expect(Comparator.compareNumbers(7, 2)).toBeGreaterThan(0)
      expect(Comparator.compareNumbers(12, -21)).toBeGreaterThan(0)
      expect(Comparator.compareNumbers(-86, -162)).toBeGreaterThan(0)
      expect(Comparator.compareNumbers(1, 0)).toBeGreaterThan(0)
      expect(Comparator.compareNumbers(+Infinity, -Infinity)).toBeGreaterThan(0)
    })

    /**
     * 
     */
    it('returns zero otherwise', function () {
      expect(Comparator.compareNumbers(5, 5)).toBe(0)
      expect(Comparator.compareNumbers(-859, -859)).toBe(0)
      expect(Comparator.compareNumbers(-0, 0)).toBe(0)
      expect(Comparator.compareNumbers(-Infinity, -Infinity)).toBe(0)
    })
  })

  /**
   * 
   */
  describe('compareOptionalNumbers', function () {
    /**
     * 
     */
    it('returns a negative integer if the left element is null and not the right one', function () {
      expect(Comparator.compareOptionalNumbers(null, 6)).toBeLessThan(0)
      expect(Comparator.compareOptionalNumbers(undefined, 6)).toBeLessThan(0)
    })

    /**
     * 
     */
    it('returns zero if both elements are null', function () {
      expect(Comparator.compareOptionalNumbers(null, null)).toBe(0)
      expect(Comparator.compareOptionalNumbers(undefined, null)).toBe(0)
      expect(Comparator.compareOptionalNumbers(null, undefined)).toBe(0)
      expect(Comparator.compareOptionalNumbers(undefined, undefined)).toBe(0)
    })

    /**
     * 
     */
    it('returns a positive integer if the left element is defined and not the right one', function () {
      expect(Comparator.compareOptionalNumbers(7, null)).toBeGreaterThan(0)
      expect(Comparator.compareOptionalNumbers(12, undefined)).toBeGreaterThan(0)
    })

    /**
     * 
     */
    it('returns the same value as compareNumbers otherwise', function () {
      for (let index = 0; index < 10; ++index) {
        const left: number = Math.random()
        const right: number = Math.random()
        const result: number = Comparator.compareNumbers(left, right)

        if (result > 0) {
          expect(Comparator.compareOptionalNumbers(left, right)).toBeGreaterThan(0)
        } else if (result < 0) {
          expect(Comparator.compareOptionalNumbers(left, right)).toBeLessThan(0)
        } else {
          expect(Comparator.compareOptionalNumbers(left, right)).toBe(0)
        }
      }
    })
  })

  /**
   * 
   */
  describe('compareStrings', function () {
    /**
     * 
     */
    /*
    it('use localCompare', function () {
      const left: any = 'aaaa'
      const right: any = 'bbbb'

      left.localeCompare = jest.fn(left.localeCompare.bind(left))
      right.localeCompare = jest.fn(right.localeCompare.bind(right))

      expect(left.localeCompare.mock.calls.length).toBe(0)
      expect(right.localeCompare.mock.calls.length).toBe(0)

      Comparator.compareStrings(left, right)

      expect(Math.max(left.localeCompare.mock.calls.length, right.localeCompare.mock.calls.length)).toBe(1)
      expect(Math.min(left.localeCompare.mock.calls.length, right.localeCompare.mock.calls.length)).toBe(0)
    })
    */
  })

  /**
   * 
   */
  describe('compareOptionalStrings', function () {
    /**
     * 
     */
    it('returns a negative integer if the left element is null and not the right one', function () {
      expect(Comparator.compareOptionalStrings(null, 'azerty')).toBeLessThan(0)
      expect(Comparator.compareOptionalStrings(undefined, 'qwerty')).toBeLessThan(0)
    })

    /**
     * 
     */
    it('returns zero if both elements are null', function () {
      expect(Comparator.compareOptionalStrings(null, null)).toBe(0)
      expect(Comparator.compareOptionalStrings(undefined, null)).toBe(0)
      expect(Comparator.compareOptionalStrings(null, undefined)).toBe(0)
      expect(Comparator.compareOptionalStrings(undefined, undefined)).toBe(0)
    })

    /**
     * 
     */
    it('returns a positive integer if the left element is defined and not the right one', function () {
      expect(Comparator.compareOptionalStrings('azerty', null)).toBeGreaterThan(0)
      expect(Comparator.compareOptionalStrings('qwerty', undefined)).toBeGreaterThan(0)
    })

    /**
     * 
     */
    /*
    it('returns the same value as compareNumbers otherwise', function () {
      const left: any = 'aaaa'
      const right: any = 'bbbb'

      left.localeCompare = jest.fn(left.localeCompare.bind(left))
      right.localeCompare = jest.fn(right.localeCompare.bind(right))

      expect(left.localeCompare.mock.calls.length).toBe(0)
      expect(right.localeCompare.mock.calls.length).toBe(0)

      Comparator.compareOptionalStrings(left, right)

      expect(Math.max(left.localeCompare.mock.calls.length, right.localeCompare.mock.calls.length)).toBe(1)
      expect(Math.min(left.localeCompare.mock.calls.length, right.localeCompare.mock.calls.length)).toBe(0)
    })
    */
  })
})