/**
 * 
 */
export type Mapper<Input, Output> = (input: Input) => Output

/**
 * 
 */
export namespace Mapper {
  /**
   * 
   */
  export function toIdentity<Input>(input: Input): Input {
    return input
  }

  /**
   * 
   */
  export function toString(input: unknown): string {
    return input === null ? 'null' : input === undefined ? 'undefined' : (input as any).toString()
  }

  /**
   * 
   */
  export function chain<Input, Intermediate, Output>(inputMapper: Mapper<Input, Intermediate>, outputMapper: Mapper<Intermediate, Output>): Mapper<Input, Output> {
    return function chainedMapper(input: Input): Output {
      return outputMapper(inputMapper(input))
    }
  }
}