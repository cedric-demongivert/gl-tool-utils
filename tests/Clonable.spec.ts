/** eslint-env jest */

import { Clonable } from '../sources/Clonable'

/**
 * 
 */
describe('Clonable', function () {
  /**
   * 
   */
  describe('copy', function () {
    /**
     * 
     */
    it('returns null for null references', function () {
      expect(Clonable.copy(null)).toBe(null)
    })

    /**
     * 
     */
    it('returns undefined for undefined references', function () {
      expect(Clonable.copy(undefined)).toBe(undefined)
    })

    /**
     * 
     */
    it('calls the clone method of the given instance', function () {
      const clonable = { clone: jest.fn() }

      expect(clonable.clone.mock.calls.length).toBe(0)

      Clonable.copy(clonable)

      expect(clonable.clone.mock.calls.length).toBe(1)
    })

    /**
     * 
     */
    it('returns the output of the clone method of the given instance', function () {
      const clonable = { clone: jest.fn() }
      const clone = { clone: jest.fn() }

      clonable.clone.mockReturnValue(clone)

      const result: Clonable = Clonable.copy(clonable)

      expect(result).toBe(clone)
    })
  })
})