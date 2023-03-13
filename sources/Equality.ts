/**
 * An equality relationship between up to two type of objects.
 * 
 * An equality relationship must conform to the following properties :
 *   - *Reflexive property*: For any value a, a = a.
 *   - *Symmetric property*: For any value a and b, if a = b then b = a.
 *   - *Transitive property*: For any value a, b and c, if a = b and b = c, then a = c.
 * 
 * An equality relationship uses zero instead of one to notify two equivalent values for 
 * complying with the constraints of the {@link Comparator<Left, Right>} type. This way, 
 * a comparator is an equality.
 * 
 * @param left - Left operand.
 * @param right - Right operand.
 * 
 * @returns 0 if both operands are equal, otherwise returns any other integer.
 */
export type Equality<Left, Right = Left> = (left: Left | Right, right: Right | Left) => number

/**
 * 
 */
export namespace Equality {
    /**
     * 
     */
    export function compareWithOperator(left: unknown, right: unknown): number {
        return left === right ? 0 : 1
    }
}
