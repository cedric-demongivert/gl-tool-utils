/** eslint-env jest */

import { Clearable } from '../sources/Clearable'

/**
 * 
 */
describe('Clearable', function () {
  /**
   * 
   */
  describe('clear', function () {
    /**
     * 
     */
    it('returns the given parameter for chaining purposes', function () {
      const clearable = { clear: jest.fn(_ => clearable) }

      const result: Clearable = Clearable.clear(clearable)

      expect(result).toBe(clearable)
    })

    /**
     * 
     */
    it('calls the clear method of the given instance', function () {
      const clearable = { clear: jest.fn(_ => clearable) }

      expect(clearable.clear.mock.calls.length).toBe(0)

      Clearable.clear(clearable)

      expect(clearable.clear.mock.calls.length).toBe(1)
    })
  })
})