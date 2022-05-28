/**
 * 
 */
export function toString(input: unknown): string {
  return input === null ? 'null' : input === undefined ? 'undefined' : (input as any).toString()
}