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
  export function chain<Input, Intermediate, Output>(inputMapper: Mapper<Input, Intermediate>, outputMapper: Mapper<Intermediate, Output>): Mapper<Input, Output> {
    return function chainedMapper(input: Input): Output {
      return outputMapper(inputMapper(input))
    }
  }
}