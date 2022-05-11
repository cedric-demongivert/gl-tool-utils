/**
 * Compares two instances of objects or values.
 *
 * This function must return a number that describes the relationship between the left
 * operand and the right operand. If the returned value is greater than zero, the left operand
 * is greater than the right one. If the returned value is less than zero, the left operand
 * is smaller than the right one. And if the returned number is equal to zero, the left operand
 * is equal to the right one.
 *
 * @param left - The value to use as a left operand.
 * @param right - The value to use as a right operand.
 *
 * @return A number that describe the type of relation between the operands.
 */
export declare type Comparator<Left, Right> = (left: Left, right: Right) => number;
/**
 *
 */
export declare namespace Comparator {
    /**
     *
     */
    function compareWithOperator(left: any, right: any): number;
    /**
     *
     */
    function compareNumbers(left: number, right: number): number;
    /**
     *
     */
    function compareOptionalNumbers(left: number | null | undefined, right: number | null | undefined): number;
    /**
     *
     */
    function compareStrings(left: string, right: string): number;
    /**
     *
     */
    function compareOptionalStrings(left: string | null | undefined, right: string | null | undefined): number;
    /**
     *
     */
    function compareDates(left: Date, right: Date): number;
    /**
     *
     */
    function compareOptionalDates(left: Date | null | undefined, right: Date | null | undefined): number;
    /**
     *
     */
    function reverse<Left, Right>(comparator: Comparator<Left, Right>): Comparator<Left, Right>;
    /**
     *
     */
    function withNullsBefore<Left, Right>(comparator: Comparator<Left, Right>): Comparator<Left | null | undefined, Right | null | undefined>;
    /**
     *
     */
    function withNullsAfter<Left, Right>(comparator: Comparator<Left, Right>): Comparator<Left | null | undefined, Right | null | undefined>;
}
