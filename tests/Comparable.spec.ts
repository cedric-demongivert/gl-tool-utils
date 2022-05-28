/** eslint-env jest */

import { Comparable } from '../sources/Comparable'

/**
 * 
 */
describe('Comparable', function () {
  /**
   * 
   */
  describe('equals', function () {
    /**
     * 
     */
    it('returns true when both parameters are null ', function () {
      expect(Comparable.equals(null, null)).toBeTruthy()
    })

    /**
     * 
     */
    it('returns true when both parameters are undefined ', function () {
      expect(Comparable.equals(undefined, undefined)).toBeTruthy()
    })

    /**
     * 
     */
    it('returns false if a parameter is null and the other undefined ', function () {
      expect(Comparable.equals(null, undefined)).toBeFalsy()
      expect(Comparable.equals(undefined, null)).toBeFalsy()
    })

    /**
     * 
     */
    it('returns false if a comparable parameter is compared to a null or an undefined reference', function () {
      const comparable = { equals: jest.fn(_ => false) }

      expect(Comparable.equals(comparable, undefined)).toBeFalsy()
      expect(Comparable.equals(comparable, null)).toBeFalsy()
      expect(Comparable.equals(undefined, comparable)).toBeFalsy()
      expect(Comparable.equals(null, comparable)).toBeFalsy()
    })

    /**
     * 
     */
    it('calls the equals method of the first parameter', function () {
      const left = { equals: jest.fn(_ => false) }
      const right = { equals: jest.fn(_ => false) }

      expect(left.equals.mock.calls.length).toBe(0)
      expect(right.equals.mock.calls.length).toBe(0)

      Comparable.equals(left, right)

      expect(left.equals.mock.calls.length).toBe(1)
      expect(right.equals.mock.calls.length).toBe(0)
    })

    /**
     * 
     */
    it('returns the output of the equals method of the first parameter', function () {
      const left = { equals: jest.fn() }
      const right = { equals: jest.fn(_ => false) }

      left.equals.mockImplementation(x => x === left)

      expect(Comparable.equals(left, right)).toBeFalsy()
      expect(Comparable.equals(left, left)).toBeTruthy()
    })
  })
})