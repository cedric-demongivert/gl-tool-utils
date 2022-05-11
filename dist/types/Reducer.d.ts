/**
 *
 */
export declare type Reducer<Accumulator, Value = Accumulator> = (accumulator: Accumulator, value: Value) => Accumulator;
/**
 *
 */
export declare namespace Reducer {
    /**
     *
     */
    function sum(left: number, right: number): number;
    /**
     *
     */
    function concat(left: string, right: string): string;
}
