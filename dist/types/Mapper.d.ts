/**
 *
 */
export declare type Mapper<Input, Output> = (input: Input) => Output;
/**
 *
 */
export declare namespace Mapper {
    /**
     *
     */
    function toIdentity<Input>(input: Input): Input;
    /**
     *
     */
    function toString<Input>(input: Input): string;
    /**
     *
     */
    function chain<Input, Intermediate, Output>(inputMapper: Mapper<Input, Intermediate>, outputMapper: Mapper<Intermediate, Output>): Mapper<Input, Output>;
}
