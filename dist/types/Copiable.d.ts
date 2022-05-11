/**
 * A class that allows it's instance to copy the state of its siblings.
 */
export interface Copiable {
    /**
     * Copy the state of another instance of the same type.
     *
     * @param toCopy - Another instance to copy.
     *
     * @return This instance, for chaining purposes.
     */
    copy(toCopy: any): this;
}
/**
 *
 */
export declare namespace Copiable {
    /**
     * Assign the state of a copiable instance to another instance of the same type.
     *
     * @parameter origin - A copiable instance to use as a model.
     * @parameter destination - A copiable instance to update.
     *
     * @return The updated destination instance.
     */
    function move<Target extends Copiable>(origin: Target, destination: Target): Target;
}
