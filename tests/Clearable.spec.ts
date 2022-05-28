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
    it('calls the clear method of the given instance', function () {
      const clearable = { clear: jest.fn() }

      clearable.clear.mockReturnValue(clearable)

      expect(clearable.clear.mock.calls.length).toBe(0)

      Clearable.clear(clearable)

      expect(clearable.clear.mock.calls.length).toBe(1)
    })
  })
})